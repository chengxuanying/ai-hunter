(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c31278e2"],{"02f4":function(t,e,a){var n=a("4588"),i=a("be13");t.exports=function(t){return function(e,a){var r,s,o=String(i(e)),c=n(a),l=o.length;return c<0||c>=l?t?"":void 0:(r=o.charCodeAt(c),r<55296||r>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):r:t?o.slice(c,c+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var n=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},"05a7":function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"专利创新生涯","left-text":"返回","left-arrow":""},on:{"click-left":t.back}},[a("van-icon",{attrs:{slot:"right",name:"search"},slot:"right"})],1),a("demo-block",{attrs:{title:123}}),a("van-panel",[a("div",{attrs:{slot:"header"},slot:"header"},[a("van-cell",{staticClass:"author-name",attrs:{title:t.name,label:t.org}})],1),a("van-cell-group",[a("van-cell",{attrs:{icon:"award-o"}},[a("template",{slot:"title"},[a("span",{staticClass:"custom-text"},[t._v("人才画像")]),a("van-tag",{directives:[{name:"show",rawName:"v-show",value:t.gyx,expression:"gyx"}],staticClass:"ttaagg",attrs:{plain:"",type:"danger"}},[t._v("影响力人才")]),a("van-tag",{directives:[{name:"show",rawName:"v-show",value:t.gcc,expression:"gcc"}],staticClass:"ttaagg",attrs:{plain:"",type:"primary"}},[t._v("高产出人才")]),a("van-tag",{directives:[{name:"show",rawName:"v-show",value:t.gby,expression:"gby"}],staticClass:"ttaagg",attrs:{plain:"",type:"success"}},[t._v("高被引人才")])],1)],2),a("van-cell",{attrs:{value:t.a10.toFixed(2)}},[a("template",{slot:"title"},[a("span",{staticClass:"custom-text"},[t._v("人才评分")]),a("van-rate",{attrs:{"disabled-color":"#ffd21e",disabled:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],2),a("van-cell",{attrs:{title:"研究主题",label:t.keywords}}),a("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("van-collapse-item",{attrs:{title:"",name:"1",icon:"orders-o"}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("详细指标")]),a("van-cell-group",[a("van-cell",{attrs:{title:"专利总数",value:t.a0}}),a("van-cell",{attrs:{title:"总被引次数",value:t.a1}}),a("van-cell",{attrs:{title:"专利H指数",value:t.a6,label:"综合反映专利数量和质量"}}),a("van-cell",{attrs:{title:"杰出专利数量",value:t.a3,label:"总被引次数前1%的专利个数"}}),a("van-cell",{attrs:{title:"优秀专利数量",value:t.a4,label:"总被引次数前10%的专利个数"}}),a("van-cell",{attrs:{title:"近2年产出专利加速度",value:t.a9}}),a("van-cell",{attrs:{title:"年平均专利产出个数",value:t.a8.toFixed(2)}}),a("van-cell",{attrs:{title:"科研时长",value:t.a7,label:"从第一次发表专利至今的时长"}})],1)],1),a("van-collapse-item",{attrs:{title:"",name:"2",icon:"description"}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("所有专利")]),t._l(t.all_patents,function(e,n){return a("van-cell-group",{on:{click:function(e){return t.method_1(n)}}},[a("van-cell",{attrs:{title:e,"is-link":"",to:"yingxiangli"}})],1)})],2)],1)],1)],1)],1)},r=[],s=(a("28a5"),a("bd86")),o=(a("4142"),a("39d1")),c=(a("342a"),a("1437")),l=(a("5d17"),a("f9bd")),u=(a("1075"),a("f600")),d=(a("66b9"),a("b650")),h=(a("0653"),a("34e9")),f=(a("c194"),a("7744")),p=(a("3647"),a("ea47")),v=(a("6a39"),a("f240")),b=(a("5f1a"),a("a3e2")),m=(a("5246"),a("6b41")),g=(a("a909"),a("3acc")),x=(a("be39"),a("efa0")),y=(a("3c32"),a("417e")),w=(a("9cb7"),a("66fd")),k=a("bc3a"),O=a.n(k),j={components:(n={},Object(s["a"])(n,w["a"].name,w["a"]),Object(s["a"])(n,y["a"].name,y["a"]),Object(s["a"])(n,x["a"].name,x["a"]),Object(s["a"])(n,g["a"].name,g["a"]),Object(s["a"])(n,m["a"].name,m["a"]),Object(s["a"])(n,b["a"].name,b["a"]),Object(s["a"])(n,v["a"].name,v["a"]),Object(s["a"])(n,p["a"].name,p["a"]),Object(s["a"])(n,f["a"].name,f["a"]),Object(s["a"])(n,h["a"].name,h["a"]),Object(s["a"])(n,d["a"].name,d["a"]),Object(s["a"])(n,u["a"].name,u["a"]),Object(s["a"])(n,l["a"].name,l["a"]),Object(s["a"])(n,c["a"].name,c["a"]),Object(s["a"])(n,o["a"].name,o["a"]),n),data:function(){return{activeNames:["-1"]}},computed:{submitBarText:function(){var t=this.checkedGoods.length;return"结算"+(t?"(".concat(t,")"):"")},totalPrice:function(){var t=this;return this.goods.reduce(function(e,a){return e+(-1!==t.checkedGoods.indexOf(a.id)?a.price:0)},0)}},methods:{method_1:function(t){this.$router.push("/zhuanlidetail/"+this.all_patents[t]+"/"+this.tag)},formatPrice:function(t){return(t/100).toFixed(2)},onInit:function(){var t=this;if(this.tag=this.$route.params.name,-1!=this.tag.indexOf("|")){this.name=this.tag.split("|")[0];var e="api/person/"+this.tag;O.a.get(e).then(function(e){t.org=e.data.org,t.a0=e.data.a0,t.a1=e.data.a1,t.a2=e.data.a2,t.a3=e.data.a3,t.a4=e.data.a4,t.a5=e.data.a5,t.a6=e.data.a6,t.a7=e.data.a7,t.a8=e.data.a8,t.a9=e.data.a9,t.a10=e.data.a10,t.all_patents=e.data.all_patents,t.keywords=e.data.keywords,t.value=t.a10/20,console.log(e.data),t.a0>=7?t.gcc=!0:t.gcc=!1,t.a1>=2?t.gby=!0:t.gby=!1,t.a6>=2?t.gyx=!0:t.gyx=!1,t.$forceUpdate()}).catch(function(t){console.log(t)}),this.$nexttick(function(){window.scrollTo(0,1),window.scrollTo(0,0)})}},back:function(){this.$router.go(-1)}},created:function(){this.onInit()}},C=j,S=(a("ffbe"),a("2877")),$=Object(S["a"])(C,i,r,!1,null,null,null);e["default"]=$.exports},"0a26":function(t,e,a){"use strict";var n=a("ad06"),i=a("f331");e["a"]=function(t,e){return{mixins:[i["a"]],props:{name:null,value:null,disabled:Boolean,checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"}},created:function(){this.findParent(t)},computed:{isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var t=this.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}}},render:function(t){var a=this,i=this.slots,r=this.checked,s=i("icon",{checked:r})||t(n["a"],{attrs:{name:"success"},style:this.iconStyle}),o=i()&&t("span",{class:e("label",[this.labelPosition,{disabled:this.isDisabled}]),on:{click:this.onClickLabel}},[i()]);return t("div",{class:e(),on:{click:function(){a.$emit("click")}}},[t("div",{class:e("icon",[this.shape,{disabled:this.isDisabled,checked:r}]),on:{click:this.onClickIcon}},[s]),o])}}}},"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0fee":function(t,e,a){},1075:function(t,e,a){"use strict";a("68ef"),a("4fbc")},1437:function(t,e,a){"use strict";var n=a("c31d"),i=a("a142"),r=a("8624"),s=a("7744"),o=a("3583"),c=a("f331"),l=Object(i["g"])("collapse-item"),u=l[0],d=l[1],h=["title","icon","right-icon"];e["a"]=u({mixins:[o["a"],c["a"]],props:{name:[String,Number],disabled:Boolean,isLink:{type:Boolean,default:!0}},data:function(){return{show:null,inited:null}},computed:{items:function(){return this.parent.items},index:function(){return this.items.indexOf(this)},currentName:function(){return Object(i["c"])(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent.value;return this.parent.accordion?e===this.currentName:e.some(function(e){return e===t.currentName})}},created:function(){this.findParent("van-collapse"),this.items.push(this),this.show=this.expanded,this.inited=this.expanded},destroyed:function(){this.items.splice(this.index,1)},watch:{expanded:function(t,e){var a=this;null!==e&&(t&&(this.show=!0,this.inited=!0),Object(r["a"])(function(){var e=a.$refs,n=e.content,i=e.wrapper;if(n&&i){var s=n.clientHeight+"px";i.style.height=t?0:s,Object(r["a"])(function(){i.style.height=t?s:0})}}))}},methods:{onClick:function(){if(!this.disabled){var t=this.parent,e=t.accordion&&this.currentName===t.value?"":this.currentName,a=!this.expanded;this.parent.switch(e,a)}},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height=null:this.show=!1}},render:function(t){var e=this,a=t(s["a"],{class:d("title",{disabled:this.disabled,expanded:this.expanded}),on:{click:this.onClick},props:Object(n["a"])({},this.$props)},[this.slots("value"),h.map(function(a){return t("template",{slot:a},e.slots(a))})]),i=this.inited&&t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:d("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:d("content")},[this.slots()])]);return t("div",{class:[d(),{"van-hairline--top":this.index}]},[a,i])}})},"214f":function(t,e,a){"use strict";a("b0c5");var n=a("2aba"),i=a("32e9"),r=a("79e5"),s=a("be13"),o=a("2b4c"),c=a("520a"),l=o("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var h=o(t),f=!r(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),p=f?!r(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[h](""),!e}):void 0;if(!f||!p||"replace"===t&&!u||"split"===t&&!d){var v=/./[h],b=a(s,h,""[t],function(t,e,a,n,i){return e.exec===c?f&&!i?{done:!0,value:v.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),m=b[0],g=b[1];n(String.prototype,t,m),i(RegExp.prototype,h,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},2381:function(t,e,a){},"28a5":function(t,e,a){"use strict";var n=a("aae3"),i=a("cb7c"),r=a("ebd6"),s=a("0390"),o=a("9def"),c=a("5f1b"),l=a("520a"),u=a("79e5"),d=Math.min,h=[].push,f="split",p="length",v="lastIndex",b=4294967295,m=!u(function(){RegExp(b,"y")});a("214f")("split",2,function(t,e,a,u){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return a.call(i,t,e);var r,s,o,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=void 0===e?b:e>>>0,m=new RegExp(t.source,u+"g");while(r=l.call(m,i)){if(s=m[v],s>d&&(c.push(i.slice(d,r.index)),r[p]>1&&r.index<i[p]&&h.apply(c,r.slice(1)),o=r[0][p],d=s,c[p]>=f))break;m[v]===r.index&&m[v]++}return d===i[p]?!o&&m.test("")||c.push(""):c.push(i.slice(d)),c[p]>f?c.slice(0,f):c}:"0"[f](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,n){var i=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,i,n):g.call(String(i),a,n)},function(t,e){var n=u(g,t,this,e,g!==a);if(n.done)return n.value;var l=i(t),h=String(this),f=r(l,RegExp),p=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),x=new f(m?l:"^(?:"+l.source+")",v),y=void 0===e?b:e>>>0;if(0===y)return[];if(0===h.length)return null===c(x,h)?[h]:[];var w=0,k=0,O=[];while(k<h.length){x.lastIndex=m?k:0;var j,C=c(x,m?h:h.slice(k));if(null===C||(j=d(o(x.lastIndex+(m?0:k)),h.length))===w)k=s(h,k,p);else{if(O.push(h.slice(w,k)),O.length===y)return O;for(var S=1;S<=C.length-1;S++)if(O.push(C[S]),O.length===y)return O;k=w=j}}return O.push(h.slice(w)),O}]})},"342a":function(t,e,a){"use strict";a("68ef"),a("bff0")},3647:function(t,e,a){"use strict";a("68ef"),a("0fee")},"39d1":function(t,e,a){"use strict";var n=a("a142"),i=a("ad06"),r=Object(n["g"])("rate"),s=r[0],o=r[1];e["a"]=s({props:{value:Number,readonly:Boolean,disabled:Boolean,size:{type:Number,default:20},icon:{type:String,default:"star"},voidIcon:{type:String,default:"star-o"},color:{type:String,default:"#ffd21e"},voidColor:{type:String,default:"#c7c7c7"},disabledColor:{type:String,default:"#bdbdbd"},count:{type:Number,default:5}},computed:{list:function(){var t=this;return Array.apply(null,{length:this.count}).map(function(e,a){return a<t.value})}},methods:{onSelect:function(t){this.disabled||this.readonly||(this.$emit("input",t+1),this.$emit("change",t+1))},onTouchMove:function(t){if(document.elementFromPoint){t.preventDefault();var e=t.touches[0],a=e.clientX,n=e.clientY,i=document.elementFromPoint(a,n);if(i&&i.dataset){var r=i.dataset.index;r&&this.onSelect(+r)}}}},render:function(t){var e=this;return t("div",{class:o(),on:{touchmove:this.onTouchMove}},[this.list.map(function(a,n){return t(i["a"],{key:n,class:o("item"),attrs:{size:e.size+"px","data-index":n,name:a?e.icon:e.voidIcon,color:e.disabled?e.disabledColor:a?e.color:e.voidColor},on:{click:function(){e.onSelect(n)}}})})])}})},"3c32":function(t,e,a){"use strict";a("68ef"),a("2381")},4142:function(t,e,a){"use strict";a("68ef"),a("8199")},"417e":function(t,e,a){"use strict";var n=a("a142"),i=a("0a26"),r=Object(n["g"])("checkbox"),s=r[0],o=r[1];e["a"]=s({mixins:[Object(i["a"])("van-checkbox-group",o)],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(){this.checked=!this.checked},onClickIcon:function(){this.isDisabled||this.toggle()},onClickLabel:function(){this.isDisabled||this.labelDisabled||this.toggle()},setParentValue:function(t){var e=this.parent,a=e.value.slice();if(t){if(e.max&&a.length>=e.max)return;-1===a.indexOf(this.name)&&(a.push(this.name),e.$emit("input",a))}else{var n=a.indexOf(this.name);-1!==n&&(a.splice(n,1),e.$emit("input",a))}}}})},"4fbc":function(t,e,a){},"520a":function(t,e,a){"use strict";var n=a("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,s=i,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(s=function(t){var e,a,s,u,d=this;return l&&(a=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),c&&(e=d[o]),s=i.call(d,t),c&&s&&(d[o]=d.global?s.index+s[0].length:e),l&&s&&s.length>1&&r.call(s[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),t.exports=s},"5d17":function(t,e,a){"use strict";a("68ef")},"5f1b":function(t,e,a){"use strict";var n=a("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"66b9":function(t,e,a){"use strict";a("68ef")},8199:function(t,e,a){},8624:function(t,e,a){"use strict";(function(t){a.d(e,"a",function(){return c});var n=a("a142"),i=Date.now();function r(t){var e=Date.now(),a=Math.max(0,16-(e-i)),n=setTimeout(t,a);return i=e+a,n}var s=n["e"]?t:window,o=s.requestAnimationFrame||s.webkitRequestAnimationFrame||r;s.cancelAnimationFrame||s.webkitCancelAnimationFrame||s.clearTimeout;function c(t){return o.call(s,t)}}).call(this,a("c8ba"))},aae3:function(t,e,a){var n=a("d3f4"),i=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,a){"use strict";var n=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},b32a:function(t,e,a){},bff0:function(t,e,a){},ea47:function(t,e,a){"use strict";var n=a("2638"),i=a.n(n),r=a("a142"),s=a("7744"),o=a("34e9"),c=Object(r["g"])("panel"),l=c[0],u=c[1];e["a"]=l({functional:!0,props:{icon:String,desc:String,title:String,status:String},render:function(t,e){var a=e.props,n=e.slots();return t(o["a"],i()([{class:u()},e.data]),[n.header||t(s["a"],{class:u("header"),attrs:{icon:a.icon,label:a.desc,title:a.title,value:a.status}}),t("div",{class:u("content")},[n.default]),n.footer&&t("div",{class:[u("footer"),"van-hairline--top"]},[n.footer])])}})},f331:function(t,e,a){"use strict";e["a"]={data:function(){return{parent:null}},methods:{findParent:function(t){var e=this.$parent;while(e){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}}},f600:function(t,e,a){"use strict";var n=a("a142"),i=a("6aa9"),r=Object(n["g"])("progress"),s=r[0],o=r[1];e["a"]=s({props:{inactive:Boolean,pivotText:String,pivotColor:String,percentage:{type:Number,required:!0,validator:function(t){return t>=0&&t<=100}},showPivot:{type:Boolean,default:!0},color:{type:String,default:i["a"]},textColor:{type:String,default:i["e"]}},data:function(){return{pivotWidth:0,progressWidth:0}},mounted:function(){this.getWidth()},watch:{showPivot:function(){this.getWidth()},pivotText:function(){this.getWidth()}},methods:{getWidth:function(){this.progressWidth=this.$el.offsetWidth,this.pivotWidth=this.$refs.pivot?this.$refs.pivot.offsetWidth:0}},render:function(t){var e=this.pivotText,a=this.percentage,i=Object(n["c"])(e)?e:a+"%",r=this.showPivot&&i,s=this.inactive?"#cacaca":this.color,c={color:this.textColor,background:this.pivotColor||s},l={background:s,width:(this.progressWidth-this.pivotWidth)*a/100+"px"};return t("div",{class:o()},[t("span",{class:o("portion",{"with-pivot":r}),style:l},[r&&t("span",{ref:"pivot",style:c,class:o("pivot")},[i])])])}})},f9bd:function(t,e,a){"use strict";var n=a("a142"),i=Object(n["g"])("collapse"),r=i[0],s=i[1];e["a"]=r({props:{accordion:Boolean,value:[String,Number,Array]},data:function(){return{items:[]}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter(function(e){return e!==t})),this.$emit("change",t),this.$emit("input",t)}},render:function(t){return t("div",{class:[s(),"van-hairline--top-bottom"]},[this.slots()])}})},ffbe:function(t,e,a){"use strict";var n=a("b32a"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-c31278e2.6f3cf3ae.js.map