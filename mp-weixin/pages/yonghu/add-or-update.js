(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"0f0d":function(e,n,t){"use strict";(function(e){t("48ae");r(t("66fd"));var n=r(t("7d77"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"36dc":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var o=e[i](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function o(e){i(u,r,a,o,s,"next",e)}function s(e){i(u,r,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("e55b"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{yonghuzhanghao:"",mima:"",yonghuxingming:"",touxiang:"",xingbie:"",lianxifangshi:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuzhanghao:!1,mima:!1,yonghuxingming:!1,touxiang:!1,xingbie:!1,lianxifangshi:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,o,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=14;break}return t.ruleForm.id=n.id,a.next=12,t.$api.info("yonghu",t.ruleForm.id);case 12:u=a.sent,t.ruleForm=u.data;case 14:if(t.cross=n.cross,!n.cross){a.next=46;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 18:if((a.t1=a.t0()).done){a.next=46;break}if(s=a.t1.value,"yonghuzhanghao"!=s){a.next=24;break}return t.ruleForm.yonghuzhanghao=o[s],t.ro.yonghuzhanghao=!0,a.abrupt("continue",18);case 24:if("mima"!=s){a.next=28;break}return t.ruleForm.mima=o[s],t.ro.mima=!0,a.abrupt("continue",18);case 28:if("yonghuxingming"!=s){a.next=32;break}return t.ruleForm.yonghuxingming=o[s],t.ro.yonghuxingming=!0,a.abrupt("continue",18);case 32:if("touxiang"!=s){a.next=36;break}return t.ruleForm.touxiang=o[s],t.ro.touxiang=!0,a.abrupt("continue",18);case 36:if("xingbie"!=s){a.next=40;break}return t.ruleForm.xingbie=o[s],t.ro.xingbie=!0,a.abrupt("continue",18);case 40:if("lianxifangshi"!=s){a.next=44;break}return t.ruleForm.lianxifangshi=o[s],t.ro.lianxifangshi=!0,a.abrupt("continue",18);case 44:a.next=18;break;case 46:t.styleChange();case 47:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var a,i,u,o,s,c,l,g,f,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(n.ruleForm.yonghuzhanghao.length<3)){t.next=3;break}return n.$utils.msg("用户账号长度不能小于3"),t.abrupt("return");case 3:if(!(n.ruleForm.yonghuzhanghao.length>10)){t.next=6;break}return n.$utils.msg("用户账号长度不能大于10"),t.abrupt("return");case 6:if(!(n.ruleForm.mima.length<3)){t.next=9;break}return n.$utils.msg("密码长度不能小于3"),t.abrupt("return");case 9:if(!(n.ruleForm.mima.length>10)){t.next=12;break}return n.$utils.msg("密码长度不能大于10"),t.abrupt("return");case 12:if(n.ruleForm.mima){t.next=15;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 15:if(!n.ruleForm.lianxifangshi||n.$validate.isMobile(n.ruleForm.lianxifangshi)){t.next=18;break}return n.$utils.msg("联系方式应输入手机格式"),t.abrupt("return");case 18:if(!n.cross){t.next=34;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=34;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=30;break}for(l in c)l==o&&(c[l]=s);return g=e.getStorageSync("crossTable"),t.next=28,n.$api.update("".concat(g),c);case 28:t.next=34;break;case 30:a=Number(e.getStorageSync("userid")),i=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!i||!a){t.next=56;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=40,n.$api.list("yonghu",f);case 40:if(d=t.sent,!(d.data.total>=u)){t.next=46;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 46:if(!n.ruleForm.id){t.next=51;break}return t.next=49,n.$api.update("yonghu",n.ruleForm);case 49:t.next=53;break;case 51:return t.next=53,n.$api.add("yonghu",n.ruleForm);case 53:n.$utils.msgBack("提交成功");case 54:t.next=64;break;case 56:if(!n.ruleForm.id){t.next=61;break}return t.next=59,n.$api.update("yonghu",n.ruleForm);case 59:t.next=63;break;case 61:return t.next=63,n.$api.add("yonghu",n.ruleForm);case 63:n.$utils.msgBack("提交成功");case 64:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},6167:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"7d77":function(e,n,t){"use strict";t.r(n);var r=t("6167"),a=t("aa82");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("ca45");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"ece275be",null,!1,r["a"],u);n["default"]=s.exports},aa82:function(e,n,t){"use strict";t.r(n);var r=t("36dc"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},c977:function(e,n,t){},ca45:function(e,n,t){"use strict";var r=t("c977"),a=t.n(r);a.a}},[["0f0d","common/runtime","common/vendor"]]]);