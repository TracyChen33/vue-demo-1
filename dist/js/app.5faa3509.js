(function(n){function t(t){for(var l,o,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(n[l]=u[l]);a&&a(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],l=!0,c=1;c<e.length;c++){var u=e[c];0!==r[u]&&(l=!1)}l&&(i.splice(t--,1),n=o(o.s=e[0]))}return n}var l={},r={app:0},i=[];function o(t){if(l[t])return l[t].exports;var e=l[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=l,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var l in n)o.d(e,l,function(t){return n[t]}.bind(null,l));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/vue-demo-1/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var a=u;i.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";var l=e("85ec"),r=e.n(l);r.a},"07e1":function(n,t,e){"use strict";var l=e("2acc"),r=e.n(l);r.a},"2acc":function(n,t,e){},"452c":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var l=e("2b0e"),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",[n._v("now is "+n._s(n.n)+" time")]),e("div",{staticClass:"chess"},[e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(0,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(1,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(2,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(3,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(4,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(5,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(6,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(7,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(8,t)}}})],1)]),e("div",[n._v(" result:"+n._s(null===n.result?"no winner":"winne is "+n.result)+" ")])])},i=[],o=(e("99af"),e("d81d"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"cell",on:{click:n.onClickSelf}},[n.a?[n._v(n._s(n.text))]:void 0],2)])}),c=[],u={props:["n"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""===this.text&&(this.a=!0,this.text=this.n%2===0?"x":"O",this.$emit("click",this.text))}}},s=u,a=(e("07e1"),e("2877")),f=Object(a["a"])(s,o,c,!1,null,null,null),p=f.exports,d={components:{Cell:p},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:null}},methods:{onClickCell:function(n,t){console.log("".concat(n," was clicked, the content is ").concat(t)),this.map[Math.floor(n/3)][n%3]=t,this.n+=1,this.tell()},tell:function(){for(var n=this.map,t=0;t<2;t++)null!==n[t][0]&&n[t][0]===n[t][1]&&n[t][1]===n[t][2]&&(this.result=n[t][0]);for(var e=0;e<2;e++)null!==n[0][e]&&n[0][e]===n[1][e]&&n[1][e]===n[2][e]&&(this.result=n[0][e]);null!==n[0][0]&&n[0][0]===n[1][1]&&n[1][1]===n[2][2]&&(this.result=n[0][0]),null!==n[0][2]&&n[0][2]===n[1][1]&&n[1][1]===n[2][0]&&(this.result=n[0][2])}}},v=d,C=(e("034f"),e("b0a0"),Object(a["a"])(v,r,i,!1,null,null,null)),h=C.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(n){return n(h)}}).$mount("#div1")},"85ec":function(n,t,e){},b0a0:function(n,t,e){"use strict";var l=e("452c"),r=e.n(l);r.a}});
//# sourceMappingURL=app.5faa3509.js.map