(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goodsList"],{3343:function(t,e,n){"use strict";(function(t){n("4bd3"),n("921b");o(n("66fd"));var e=o(n("75d7"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4b39":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("6947"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return u(t)||l(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var c={onLoad:function(e){t.setNavigationBarTitle({title:e.name}),this.loadData()},data:function(){return{loadingText:"加载中...",goodsList:[],filterby:"all",page:1,size:6,filterByList:[{text:"全部",selected:!0,filterby:"all"},{text:"口碑",selected:!1,filterby:"public"},{text:"热门",selected:!1,filterby:"hot"}]}},onPullDownRefresh:function(){var e=this;setTimeout(function(){e.goodsList=[],e.page=1,e.size=6,e.loadData(),t.stopPullDownRefresh()},1e3)},onReachBottom:function(){this.page++,this.loadData()},methods:{handleTarget:function(t){this.filterByList[t].selected=!0;for(var e=0;e<this.filterByList.length;e++)e!=t&&(this.filterByList[e].selected=!1);this.filterby=this.filterByList[t].filterby,this.page=1,this.loadingText="加载中...",this.goodsList=[],this.loadData()},loadData:function(){var t=this;this.request({url:"".concat(i.default.getGoodsList,"/").concat(this.filterby,"/").concat(this.page,"/").concat(this.size),success:function(e){e.data.length>0?t.goodsList=[].concat(r(t.goodsList),r(e.data)):t.loadingText="没有更多!!",console.log(o(t.goodsList," at pages\\goods\\goodsList.vue:90"))}})}}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"55e0":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"75d7":function(t,e,n){"use strict";n.r(e);var o=n("55e0"),i=n("d888");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("f7c8");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"993d":function(t,e,n){},d888:function(t,e,n){"use strict";n.r(e);var o=n("4b39"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},f7c8:function(t,e,n){"use strict";var o=n("993d"),i=n.n(o);i.a}},[["3343","common/runtime","common/vendor"]]]);