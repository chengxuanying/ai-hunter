from flask import Flask, render_template, jsonify
from random import *
import requests
import pandas as pd
import pickle
import RAKE

app = Flask(__name__, static_folder="./docs", template_folder="./docs")


@app.route('/api/random')
def random_number():
    """
    test api
    :return:
    """
    response = {
        'randomNumber': randint(1, 100)
    }
    return jsonify(response)


@app.route('/api/yingxiangli/<int:curpage>')
def yingxiangli(curpage):
    """
    影响力
    :return:
    """
    t = metric_df[metric_df['a6'] >= 3]
    curpage = curpage - 1
    tags = t.index[curpage * 5: curpage * 5 + 5].tolist()
    names = [x.split('|')[0] for x in tags]
    authors = t[curpage * 5: curpage * 5 + 5].to_dict('records')

    for i in range(len(authors)):
        authors[i]['name'] = names[i]
        authors[i]['tags'] = tags[i]

    response = {
        'curpage': curpage + 1,
        'totpage': len(t) // 5,
        'authors': authors,
    }

    return jsonify(response)

@app.route('/api/tuijian')
def tuijian():

    yxl = metric_df[metric_df['a6'] >= 3]
    ql = metric_df[metric_df['a10'] >= 90]

    yxl_df = yxl.sample(3)
    yxl_df['tag'] = yxl_df.index

    ql_df = ql.sample(3)
    ql_df['tag'] = ql_df.index

    yxl = yxl_df.to_dict('records')
    ql = ql_df.to_dict('records')

    response = {

        'yxl': yxl,
        'ql': ql,
    }

    return jsonify(response)

@app.route('/api/zhuanli/<int:curpage>')
def zhuanli(curpage):
    """
    专利数据库
    :return:
    """
    patents = pool[2017]['zlIndex']
    curpage = curpage - 1

    patents_name = patents[curpage * 5: curpage * 5 + 5]
    patents_names = patents_name.index.tolist()
    patents_values = patents[curpage * 5: curpage * 5 + 5].to_dict('records')

    patents_ret = []
    for (i, name) in enumerate(patents_names):
        a = df[df['PN'].str.contains(name)].iloc[0]
        patents_ret.append(a.to_dict())
        patents_ret[-1]['PN'] = name
        patents_ret[-1]['CitedTimes'] = patents_values[i]['被专利引用次数']

    response = {
        'curpage': curpage + 1,
        'totpage': len(patents) // 5,
        'patents': patents_ret,
    }

    return jsonify(response)


@app.route('/api/zhuanlidetail/<pn>')
def zhuanlidetail(pn):
    response = {
    }

    t = df[df['PN'].str.contains(pn)].iloc[0]
    response.update(t.to_dict())

    response['PN'] = pn

    patents = pool[2017]['zlIndex']
    response['CitedTimes'] = patents.loc[pn]['被专利引用次数']

    return jsonify(response)


@app.route('/api/chuangxinqianli/<int:curpage>')
def chuangxinqianli(curpage):
    """
    chuangxinqianli
    :return:
    """
    t = metric_df[metric_df['a10'] >= 90]
    curpage = curpage - 1
    tags = t.index[curpage * 5: curpage * 5 + 5].tolist()
    names = [x.split('|')[0] for x in tags]
    authors = t[curpage * 5: curpage * 5 + 5].to_dict('records')

    for i in range(len(authors)):
        authors[i]['name'] = names[i]
        authors[i]['tags'] = tags[i]

    response = {
        'curpage': curpage + 1,
        'totpage': len(t) // 5,
        'authors': authors,
    }

    return jsonify(response)


@app.route('/api/rencaishujuku/<int:curpage>')
def rencaishujuku(curpage):
    """
    chuangxinqianli
    :return:
    """
    t = metric_df.sort_values(by=['a0'], ascending=False)
    curpage = curpage - 1
    tags = t.index[curpage * 5: curpage * 5 + 5].tolist()
    names = [x.split('|')[0] for x in tags]
    authors = t[curpage * 5: curpage * 5 + 5].to_dict('records')

    for i in range(len(authors)):
        authors[i]['name'] = names[i]
        authors[i]['tags'] = tags[i]

    response = {
        'curpage': curpage + 1,
        'totpage': len(t) // 5,
        'authors': authors,
    }

    return jsonify(response)


@app.route('/api/person/<name>')
def person(name):
    response = {
        'tag': name,
        'name': name.split('|')[0],
        'org': get_org_name(name.split('|')[1]),
        'keywords': getKeywords(name)
    }

    response.update(metric_df.loc[name].to_dict())

    ddff = pool[2017]['renIndex']
    t = ddff.loc[name].to_dict()
    all_patents = t['所有专利']

    all_patents = all_patents.split('|')
    all_patents = [x for x in all_patents if x]

    response['all_patents'] = all_patents

    return jsonify(response)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """
    bind with vuejs
    :param path:
    :return:
    """
    if app.debug:
        return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html")


def getKeywords(tag):
    patents = pool[2017]['renIndex'].loc[tag]['所有专利']
    patents = patents.split('|')

    all_str = ""
    for patent in patents[:7]:
        a = df[df['PN'].str.contains(patent)].iloc[0]
        all_str += a['TI'] + ' '
        all_str += a['AB'] + ' '

    Rake = RAKE.Rake(RAKE.SmartStopList())
    lists = [x[0] for x in Rake.run(all_str)[:5]]
    answer = ', '.join(lists)

    return answer


print('loading database...')

df: pd.DataFrame = pd.read_json('./ai_miner/data/raw/all.txt')
pool = {}

with open('./ai_miner/pool.pickle', 'rb') as file:  # 'ai_miner/pool.pickle'
    pool = pickle.load(file)


def get_org_name(org):
    name = df[df['AE'].str.contains(org)].iloc[0]['AE']
    return name


print('loading metrics...')
metric_df = {}
with open(r'ai_miner/metric_df.pickle', 'rb') as file:
    metric_df = pickle.load(file)
metric_df.columns = ['a' + str(x) for x in range(11)]
print('inited!')

"""
'专利总数', '总被引次数', '被引率', '杰出专利数量', '优秀专利数量',\n",
    "                  '平均被引次数', '专利H指数', '科研时长',\n",
    "                  '年平均专利产出个数', '近2年产出专利加速度'"""
