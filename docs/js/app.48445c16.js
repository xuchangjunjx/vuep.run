(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],p=0,d=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuep.run/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"48e2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app"},[n("nav",{staticClass:"navbar"},[n("span",[e._v("Vuep.run")]),e._m(0),n("button",{staticClass:"save",on:{click:e.run}},[e._v("run")])]),n("main",{staticClass:"main"},[n("editor",{ref:"editor",staticClass:"panel",on:{change:e.compile}}),n("preview",{staticClass:"panel",attrs:{value:e.preview}})],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list"},[n("li",[n("a",{attrs:{target:"_blank",href:"//github.com/qingwei-li/vuep.run"}},[e._v("GitHub")])])])}],o=n("b85c"),c=n("1da1"),s=(n("96cf"),n("7db0"),n("d3b7"),n("99af"),n("b0c0"),n("e9c4"),n("a15b"),n("159b"),n("ac1f"),n("841c"),n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor"},[n("textarea",{ref:"textarea",staticClass:"editor"})])}),i=[],u=(n("00b4"),n("466d"),n("5319"),n("56b3")),l=n.n(u),p=n("ace4"),d=(n("a7be"),n("737c"),n("31c5"),n("8c33"),n("693d"),n("9619")),f=n("4303"),h=n.n(f),m=n("2b0e"),v=n("72bf"),b=n.n(v),g="https://text.cinwell.xyz";function w(e){return y.apply(this,arguments)}function y(){return y=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return m["a"].toasted.show("Saving..."),e.prev=1,e.next=4,fetch(g,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:Object(v["stringify"])({text:t,hash:1})});case 4:return n=e.sent,m["a"].toasted.clear(),e.next=8,n.text();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e["catch"](1),m["a"].toasted.clear(),m["a"].toasted.show("Failed: "+e.t0.message,{type:"error",duration:2e3});case 15:case"end":return e.stop()}}),e,null,[[1,11]])}))),y.apply(this,arguments)}function x(e){return"".concat(g,"/").concat(e)}Object(p["a"])(l.a);var k="<template>\n  <div>\n    <h2>Hello {{ msg }}</h2>\n    <h3>Demo</h3>\n    <ul>\n      <li v-for=\"url in urls\">\n        <a target=\"_blank\" :href=\"url\">{{ url }}</a>\n      </li>\n    </ul>\n  </div>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    msg: 'Vuep.run',\n\n    urls: [\n      'https://vuep.run/QingWei-Li/vue-trend/docs/home.vue',\n      'https://vuep.run/QingWei-Li/vuep.run/examples/element-ui.vue?pkg=element-ui&css=element-ui/lib/theme-chalk/index.css',\n      'https://vuep.run/vuetifyjs/vuetifyjs.com/blob/dev/examples/ripples/navigationDrawers.vue?pkg=vuetify&css=vuetify/dist/vuetify.min.css'\n    ]\n  })\n}\n<\/script>\n\n<style lang='less' scoped>\n@color:#2c3e50;\ndiv {\n  color: @color;\n  font-family: Arial, sans-serif;\n}\n\na {\n  color: #42b983;\n}\n</style>",j={props:{autoRender:Boolean},data:function(){return{code:"",editor:null}},methods:{initCodeEdit:function(){var e=this;this.editor=l.a.fromTextArea(this.$refs.textarea,{mode:"vue",theme:"lucario",value:"<template></template>",lineNumbers:!0,tabSize:2,autofocus:!0,line:!0,styleActiveLine:!0,matchBrackets:!0,extraKeys:{Tab:"emmetExpandAbbreviation",Enter:"emmetInsertLineBreak"}}),this.autoRender&&this.editor.on("change",Object(d["debounce"])(500,(function(){e.$emit("change",e.editor.getValue())})))},getFileContent:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.$toasted.show("Loading file..."),/^\w+$/.test(e)?r=x(e):h()(e)?r=e:/^[\w-]+\.\w+/.test(e)?r="//"+e:(a=e.match(/^([^/]+\/[^/]+)(\/blob\/([\w-]+))?(\S+)$/),r="//raw.githubusercontent.com/".concat(a[1],"/").concat(a[3]||"master").concat(a[4])),/github\.com\//.test(r)&&(r=r.replace(/github\.com\//,"raw.githubusercontent.com/").replace(/\/blob\//,"/")),n.prev=3,n.next=6,fetch(r);case 6:return o=n.sent,t.$toasted.clear(),n.next=10,o.text();case 10:return n.abrupt("return",n.sent);case 13:return n.prev=13,n.t0=n["catch"](3),t.$toasted.clear(),t.$toasted.show("File not found",{type:"error",duration:2e3}),n.abrupt("return",null);case 18:case"end":return n.stop()}}),n,null,[[3,13]])})))()},setCode:function(e){this.editor&&this.editor.setValue(e)},emitChange:function(){this.editor&&this.$emit("change",this.editor.getValue())}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initCodeEdit(),n=n||k,e.setCode(n),e.emitChange();case 4:case"end":return t.stop()}}),t)})))()}},O=j,C=(n("8e96"),n("2877")),_=Object(C["a"])(O,s,i,!1,null,"56cdbdd8",null),$=_.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("div",{ref:"iframe"})])},R=[],A=n("4478"),S=n("d4ec"),P=n("bee2"),T=(n("d9e2"),function(){function e(t){var n=t.el,r=t.sandboxAttributes,a=void 0===r?[]:r;if(Object(S["a"])(this,e),!n)throw new Error('Expect "el" to mount iframe to!');this.$el=n,this.sandboxAttributes=a}return Object(P["a"])(e,[{key:"setHTML",value:function(e){var t;if("string"===typeof e)t=e;else{var n=e.head,r=void 0===n?"":n,a=e.body,o=void 0===a?"":a;t="<!DOCTYPE html><html><head>".concat(r,"</head><body>").concat(o,"</body></html>")}var c=this.createIframe();this.$el.parentNode.replaceChild(c,this.$el),c.contentWindow.document.open(),c.contentWindow.document.write(t),c.contentWindow.document.close(),this.$el=c}},{key:"createIframe",value:function(){var e=document.createElement("iframe");return e.setAttribute("sandbox",this.sandboxAttributes.join(" ")),e.setAttribute("scrolling","yes"),e.style.width="100%",e.style.height="100%",e.style.border="0",e}}]),e}()),H=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(A["a"])(T,t)},L=["allow-modals","allow-forms","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"],V={props:["value"],mounted:function(){this.iframe=H({el:this.$refs.iframe,sandboxAttributes:L})},watch:{value:function(e){this.iframe.setHTML(e)}}},M=V,B=Object(C["a"])(M,E,R,!1,null,"a25d3222",null),N=B.exports,W=n("5ce8"),D=function(e,t){var n=t.imports;return{name:"get-imports",visitor:{ImportDeclaration:function(e){n.push({variables:e.node.specifiers.map((function(e){return{local:e.local.name,imported:e.imported?e.imported.name:"default"}})),module:e.node.source.value}),e.remove()}}}},F=n("3835"),I=(n("ddb0"),n("6930")),J=n.n(I),z=function(e,t,n){return Q.apply(this,arguments)};function Q(){return Q=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,c,s,i,u,l,p,d,f,h,m,v,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=[],c=Object(o["a"])(n.entries());try{for(c.s();!(s=c.n()).done;){i=Object(F["a"])(s.value,2),u=i[0],l=i[1],p="__npm_module_".concat(u),d=J()(l.module),f=d.version||"latest",r.push({path:d.path?"/".concat(d.path):"",name:p,module:"vue"!==d.name||d.path?"".concat(d.name,"@").concat(f):"vue@".concat(f,"/dist/vue.esm.js")}),h="\n",m=Object(o["a"])(l.variables);try{for(m.s();!(v=m.n()).done;)b=v.value,"default"===b.imported?h+="var ".concat(b.local," = ").concat(p,".default || ").concat(p,";\n"):h+="var ".concat(b.local," = ").concat(p,".").concat(b.imported,";\n")}catch(g){m.e(g)}finally{m.f()}h&&a.push(h)}}catch(g){c.e(g)}finally{c.f()}return a.length>0&&(t=a.join("\n")+t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}n("1276");var q=n("58dc"),G={pkgs:[],css:[],cdn:"unpkg",vue:""},K=G;function U(e){return Array.isArray(e)?e:"string"===typeof e?e.split(","):[]}function Y(){K=G}function X(e){try{te(JSON.parse(e))}catch(t){console.error("error",t.message)}}function Z(e){var t=b.a.parse(e),n=U(t.pkg),r=U(t.css),a={pkgs:n,css:r};t.cdn&&(a.cdn=t.cdn),t.vue&&(a.vue=t.vue),te(a)}function ee(){return Object(q["a"])(G,K)}function te(e){K=Object(q["a"])(K,e)}function ne(){try{return n("1f94")}catch(e){return console.error(e),{render:function(){}}}}var re={unpkg:"//unpkg.com/",jsdelivr:"//cdn.jsdelivr.net/npm/"},ae={components:{Editor:$,Preview:N},data:function(){return{preview:"",code:""}},methods:{compile:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c,s,i,u,l,p,d,f,h,m,v,b,g,w,y,x,k;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.code=e,e){n.next=3;break}return n.abrupt("return");case 3:if(r=[],a=Object(W["parseComponent"])(e),c=a.template,s=a.script,i=a.styles,u=a.customBlocks,(l=u.find((function(e){return"config"===e.type})))&&(Y(),X(l.content)),d=[],f="exports = { default: {} }",!s){n.next=20;break}n.prev=9,p=window.Babel.transform(s.content,{presets:["es2015","es2016","es2017","stage-0"],plugins:[[D,{imports:r}]]}).code,n.next=17;break;case 13:return n.prev=13,n.t0=n["catch"](9),t.preview='<pre style="color: red">'.concat(n.t0.message,"</pre>"),n.abrupt("return");case 17:return n.next=19,z(p,r,d);case 19:f=n.sent;case 20:h=t.genHeads(),m=[],d.forEach((function(e){m.push("<script src=//packd.now.sh/".concat(e.module).concat(e.path,"?name=").concat(e.name,"><\/script>"))})),v=Object(o["a"])(i),n.prev=24,v.s();case 26:if((b=v.n()).done){n.next=43;break}if(g=b.value,w=g.lang,y=g.content,x=y,!w){n.next=40;break}n.t1=w,n.next="less"===n.t1?34:39;break;case 34:return n.next=36,ne().render(y);case 36:return k=n.sent,x=k.css,n.abrupt("break",40);case 39:return n.abrupt("break",40);case 40:h.push("<style>".concat(x,"</style>"));case 41:n.next=26;break;case 43:n.next=48;break;case 45:n.prev=45,n.t2=n["catch"](24),v.e(n.t2);case 48:return n.prev=48,v.f(),n.finish(48);case 51:m.push("\n      <script>\n        var exports = {};\n        ".concat(f,"\n        var component = exports.default;\n        component.template = component.template || ").concat(JSON.stringify(c.content),"\n\n        new Vue(component).$mount('#app')\n      <\/script>")),t.preview={head:h.join("\n"),body:'<div id="app"></div>'+m.join("\n")};case 53:case"end":return n.stop()}}),n,null,[[9,13],[24,45,48,51]])})))()},genHeads:function(){Z(location.search);var e=ee(),t=e.pkgs,n=e.css,r=e.cdn,a=(e.vue,re[r]||re.unpkg);return["<script src='".concat("/vuep.run/","assets/vue.js'><\/script>")].concat([].concat(t).map((function(e){return"<script src=".concat(h()(e)?"":a).concat(e,"><\/script>")})),n.map((function(e){return"<link rel=stylesheet href=".concat(h()(e)?"":a).concat(e,">")})))},run:function(){this.$refs.editor.emitChange()},upload:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.code){t.next=3;break}return e.$toasted("No content",{type:"error"}),t.abrupt("return");case 3:return t.next=5,w(e.code);case 5:n=t.sent,history.pushState({},"","/"+n),r=location.href,e.$toasted.show("Hosting in ".concat(r),{action:{text:"Copy",onClick:function(){copy(r),Vue.toasted.clear()}},duration:5e3});case 9:case"end":return t.stop()}}),t)})))()}}},oe=ae,ce=(n("2ebd"),n("82d9"),Object(C["a"])(oe,r,a,!1,null,"27834e6f",null)),se=ce.exports,ie=(n("12b3"),n("a65d")),ue=n.n(ie);m["a"].use(ue.a),new m["a"]({el:"#app",render:function(e){return e(se)}})},"82d9":function(e,t,n){"use strict";n("d0f5")},"8e96":function(e,t,n){"use strict";n("48e2")},d0f5:function(e,t,n){}});