(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"0da5":function(t,e,n){"use strict";var a=n("f935"),o=n.n(a);o.a},"1f5c":function(t,e,n){"use strict";var a=n("89c6"),o=n.n(a);o.a},"337a":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{city:"北京"}},methods:{requestAddr:function(){t.getLocation({type:"wgs84",success:function(t){console.log(n("当前位置的经度："+t.longitude," at pages\\tabBar\\home\\pageHeader.vue:31")),console.log(n("当前位置的纬度："+t.latitude," at pages\\tabBar\\home\\pageHeader.vue:32")),console.log(n(t.address.province," at pages\\tabBar\\home\\pageHeader.vue:33")),this.city=t.address.province}})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"5fe3":function(t,e,n){"use strict";n.r(e);var a=n("cefd"),o=n("6e5f");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("0da5");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"60b4":function(t,e,n){"use strict";(function(t){n("4bd3"),n("921b");a(n("66fd"));var e=a(n("5fe3"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6e5f":function(t,e,n){"use strict";n.r(e);var a=n("e2c4"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"6ed0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"78ca":function(t,e,n){"use strict";n.r(e);var a=n("337a"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"89c6":function(t,e,n){},cefd:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},e2c4:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("f799")),u=r(n("6947"));function r(t){return t&&t.__esModule?t:{default:t}}var i={components:{pageHeader:o.default},data:function(){return{swiperList:[],categoryList:[],promotion:[],indicatorDots:!1,autoplay:!0,interval:3e3,duration:1e3,currentSwiper:0}},onLoad:function(){this.initData()},methods:{initData:function(){var e=this;this.request({url:u.default.getMallData,success:function(n){console.log(t(n.data," at pages\\tabBar\\home\\home.vue:92")),e.swiperList=n.data.swiperList,e.categoryList=n.data.categoryList,e.promotion=n.data.promotion,console.log(t(e.categoryList," at pages\\tabBar\\home\\home.vue:96"))}})},currentChange:function(t){this.currentSwiper=t.detail.current},handleCategory:function(t){a.navigateTo({url:"../../goods/goodsList?name="+t.name})},handlePromotion:function(t){a.showToast({title:t.title})}}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},f799:function(t,e,n){"use strict";n.r(e);var a=n("6ed0"),o=n("78ca");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("1f5c");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},f935:function(t,e,n){}},[["60b4","common/runtime","common/vendor"]]]);