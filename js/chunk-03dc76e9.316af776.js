(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03dc76e9"],{"38ae":function(t,a,e){},5845:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-row",{attrs:{"align-content":"stretch"}},[e("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[e("card",{attrs:{title:t.$t("dappsMCDMaker.migrate-old-dai-to-new-dai"),text:t.$t("dappsMCDMaker.migrate-description"),button:"Go",click:t.migrateDai}})],1),e("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[e("card",{attrs:{title:t.$t("dappsMCDMaker.migrate-single-collateral-to-multi-collateral"),text:t.$t("dappsMCDMaker.transfer-cdp-description"),button:"Go",click:t.migrateCDP}})],1),e("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[e("card",{attrs:{title:t.$t("dappsMCDMaker.manage-your-vault"),text:t.$t("dappsMCDMaker.transfer-cdp-description"),button:"Go",click:t.goToManage,loading:!t.makerActive,"loading-msg":t.loadingMessage}})],1),e("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[e("card",{attrs:{title:t.$t("dappsMCDMaker.create-a-vault"),text:t.$t("dappsMCDMaker.create-vault-description"),button:"Go",click:t.gotoCreate,loading:!t.makerActive,"loading-msg":t.loadingMessage}})],1),e("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[e("card",{attrs:{title:t.$t("dappsMCDMaker.dai-savings"),text:t.$t("dappsMCDMaker.deposit-dai"),button:"Go",click:t.goToSave}})],1)],1)],1)},i=[],r=(e("caad"),e("2532"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[t.loading?e("div",{staticClass:"loading-sign"},[e("b-spinner",{staticStyle:{width:"4rem",height:"4rem"},attrs:{variant:"primary"}}),e("div",{staticClass:"font-weight-bolder mt-3"},[t._v(" "+t._s(t.loadingMsg)+" ")])],1):t._e(),e("b-card",{staticClass:"the-card",class:t.loading?"card-disabled":"",attrs:{title:t.title}},[e("b-card-text",{staticClass:"mb-3"},[t._v(" "+t._s(t.text)+" ")]),e("div",{staticClass:"flex-grow-1"}),e("b-button",{staticClass:"font-weight-bold",attrs:{variant:"primary",block:""},on:{click:t.click}},[t._v(t._s(t.button))])],1)],1)}),n=[],o={props:{title:{type:String,default:""},text:{type:String,default:""},button:{type:String,default:""},click:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},loadingMsg:{type:String,default:""}},data:function(){return{}}},c=o,l=(e("c7e6"),e("2877")),d=Object(l["a"])(c,r,n,!1,null,"d4281c2a",null),u=d.exports,p={components:{card:u},props:{cdps:{type:Array,default:function(){return[]}},cdpsWithoutProxy:{type:Array,default:function(){return[]}},makerActive:{type:Boolean,default:!1},loadingState:{type:String,default:"none"}},data:function(){return{}},computed:{loadingMessage:function(){return this.$t(this.loadingState)},hasCdps:function(){return this.cdps.length>0},showManage:function(){return this.listCdps||this.cdps.length>=1&&this.cdpsWithoutProxy.length>=1},listCdps:function(){return this.cdps.length>1||this.cdpsWithoutProxy.length>1}},methods:{gotoCreate:function(){this.$route.path.includes("maker-dai")&&(this.makerActive?(this.activeValues=this.systemValues,this.$router.push({name:"create"})):(this.$emit("proceedtoCreateOrManage"),this.$emit("setAfterLoadPage","CREATE"),this.$router.push({name:"makerLoading"})))},migrateDai:function(){this.$route.path.includes("maker-dai")&&this.$router.push({name:"migrateDAI"})},migrateCDP:function(){this.$route.path.includes("maker-dai")&&this.$router.push({name:"migrateCDP"})},gotoLoading:function(){this.$emit("proceedtoCreateOrManage"),this.makerActive?this.goToManage():this.$router.push({name:"makerLoading"})},goToSave:function(){this.$route.path.includes("maker-dai")&&this.$router.push({name:"save"})},goToManage:function(){this.$route.path.includes("maker-dai")&&(this.makerActive?1===this.cdps.length?this.$router.push({name:"manage",params:{cdpId:this.cdps[0]}}):1===this.cdpsWithoutProxy.length?this.$router.push({name:"migrate",params:{cdpId:this.cdpsWithoutProxy[0]}}):this.showManage?this.$router.push({name:"select"}):this.gotoCreate():(this.$emit("proceedtoCreateOrManage"),this.$emit("setAfterLoadPage","MANAGE"),this.$router.push({name:"makerLoading"})))}}},g=p,h=Object(l["a"])(g,s,i,!1,null,"58ee8ebb",null),m=h.exports;a["default"]=m},c7e6:function(t,a,e){"use strict";var s=e("38ae"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-03dc76e9.316af776.js.map