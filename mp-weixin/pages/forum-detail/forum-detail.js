(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-detail/forum-detail"],{"0027":function(t,n,e){"use strict";e.r(n);var r=e("3968"),u=e("7c1f");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("fb6d");var o,c=e("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"444c0513",null,!1,r["a"],o);n["default"]=i.exports},"0687":function(t,n,e){"use strict";(function(t){e("48ae");r(e("66fd"));var n=r(e("0027"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},3968:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"71bc":function(t,n,e){},"7c1f":function(t,n,e){"use strict";e.r(n);var r=e("f3bb"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a},f3bb:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,o){try{var c=t[a](o),i=c.value}catch(f){return void e(f)}c.done?n(i):Promise.resolve(i).then(r,u)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var o=t.apply(n,e);function c(t){a(o,r,u,c,i,"next",t)}function i(t){a(o,r,u,c,i,"throw",t)}c(void 0)}))}}var c=function(){e.e("components/forum-reply/forum-reply").then(function(){return resolve(e("45d2"))}.bind(null,e)).catch(e.oe)},i={components:{userReply:c},data:function(){return{commentData:[],forum:{},id:""}},onLoad:function(t){var n=this;return o(r.default.mark((function e(){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.id=t.id,e.next=3,n.$api.forumDetail(t.id);case 3:u=e.sent,n.commentData=u.data.childs,n.forum=u.data,console.log(n.commentData);case 7:case"end":return e.stop()}}),e)})))()},onShow:function(){var t=this;return o(r.default.mark((function n(){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.forumDetail(t.id);case 2:e=n.sent,t.commentData=e.data.childs,t.forum=e.data;case 5:case"end":return n.stop()}}),n)})))()},methods:{onReplyTap:function(t){this.$utils.jump("../forum-reply/forum-reply?pid=".concat(t))}}};n.default=i},fb6d:function(t,n,e){"use strict";var r=e("71bc"),u=e.n(r);u.a}},[["0687","common/runtime","common/vendor"]]]);