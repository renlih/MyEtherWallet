(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67026f2d"],{"7f58":function(t,e,a){"use strict";var i=a("bc56"),s=a.n(i);s.a},"8e13":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bottom-help-link"},["issues"==t.type?a("div",{staticClass:"issues"},[t._v(" "+t._s(t.$t("common.having-issues"))+" "),a("a",{attrs:{href:"https://kb.myetherwallet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("common.help-center")))])]):t._e()])},s=[],n={props:{type:{type:String,default:"issues"}},data:function(){return{popOverId:"popoverid"+String(Math.floor(1e8*Math.random()))}}},r=n,o=(a("7f58"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,"16b84c17",null),l=c.exports;a.d(e,"a",(function(){return l}))},bbb7:function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manage-cdp"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.finishMigration,expression:"!finishMigration"}],staticClass:"manage-container"},[a("div",{staticClass:"title-content-container"},[a("p",{staticClass:"cpd-title"},[t._v(t._s(t.$t("dappsMaker.cdp-portal")))]),a("p",{staticClass:"cdp-id"},[t._v(" "+t._s(t.$t("dappsMaker.position-label",{value:t.cdpIdDisplay}))+" ")])]),a("div",{staticClass:"information-blocks"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(" "+t._s(t.$t("dappsMaker.liquid-price"))+" ("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+") ")]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMaker.what-is-dashes")}})],1):t._e()]),a("div",{staticClass:"blue"},[a("span",{staticClass:"blue-bold"},[t._v(t._s(t.liquidationPriceDisplay))]),t._v(" "+t._s(t.$t("common.currency.usd"))+" ")])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(" "+t._s(t.$t("dappsMaker.current-price"))+"("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+") ")]),a("div",[t._v(" "+t._s(t.ethPriceDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.liquidation-penalty")))]),a("div",[t._v(t._s(t.liquidationPenaltyDisplay)+"%")])])])]),a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("div",{staticClass:"for-pop"},[a("p",[t._v(t._s(t.$t("dappsMaker.collateral-ratio")))]),"--"===t.liquidationPriceDisplay?a("p",{staticClass:"pop-icon"},[a("popover",{attrs:{popcontent:t.$t("dappsMaker.what-is-dashes")}})],1):t._e()]),a("div",{class:t.collateralRatioColoring},[a("span",[t._v(t._s(t.collaterlizationRatioDisplay)+"%")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.minimum-ratio")))]),a("div",[t._v(t._s(t.liquidationRatioDisplay)+"%")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.stability-fee")))]),a("div",[t._v(t._s(t.stabilityFeeDisplay)+"%")])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.eth-collateral")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.deposited")))]),a("div",[t._v(" "+t._s(t.ethCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.eth")))])]),a("div",[t._v(" "+t._s(t.pethCollateral)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.peth")))]),t._v(" / "+t._s(t.usdCollateral)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showDeposit}},[t._v(" "+t._s(t.$t("dappsMaker.deposit"))+" > ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.max-available")))]),a("div",[t._v(" "+t._s(t.maxEthDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.eth")))])]),a("div",[t._v(" "+t._s(t.maxPethDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.peth")))]),t._v(" / "+t._s(t.maxUsdDrawDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showWithdraw}},[t._v(" "+t._s(t.$t("dappsMaker.withdraw"))+" > ")])])])])])]),a("div",{staticClass:"information-single-block"},[a("div",{staticClass:"block-item"},[a("div",{staticClass:"block-title"},[a("p",[t._v(t._s(t.$t("dappsMaker.dai-position")))])]),a("div",{staticClass:"block-content-container"},[a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.generated")))]),a("div",[t._v(" "+t._s(t.debtValue)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.dai")))])]),a("div",[t._v(" "+t._s(t.debtValueDisplay)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showPayback}},[t._v(" "+t._s(t.$t("dappsMaker.payback"))+" > ")])])]),a("div",{staticClass:"block-content"},[a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("dappsMaker.max-available-gen")))]),a("div",[t._v(" "+t._s(t.maxDai)+" "),a("span",[t._v(t._s(t.$t("dappsMaker.dai")))])]),a("div",[t._v(" "+t._s(t.maxUsd)+" "),a("span",[t._v(t._s(t.$t("common.currency.usd")))])]),a("button",{on:{click:t.showGenerate}},[t._v(" "+t._s(t.$t("dappsMaker.generate"))+" > ")])])])])])])]),a("help-link")],1)},n=[],r=(a("a9e3"),a("d3b7"),a("ddb0"),a("96cf"),a("c964")),o=a("fc11"),c=a("f3f3"),l=a("2f62"),u=a("8e13"),d=a("c16c"),p=a("901e"),v=a.n(p),h=function(t){return new v.a(t)},f={components:{"help-link":u["a"]},props:{openCloseModal:{type:Boolean,default:!1},openMoveModal:{type:Boolean,default:!1},tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},valuesUpdated:{type:Number,default:0},getCdp:{type:Function,default:function(){}},hasCdp:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}},ethPrice:{type:v.a,default:h(0)},pethPrice:{type:v.a,default:h(0)},liquidationPenalty:{type:v.a,default:h(0)},stabilityFee:{type:v.a,default:h(0)},liquidationRatio:{type:v.a,default:h(0)},wethToPethRatio:{type:v.a,default:h(0)},pethMin:{type:v.a,default:h(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}}},data:function(){return{activeCdp:{},loaded:!1,ethQty:0,daiQty:0,selectedCdp:"",cdpId:"",cdp:{},maxDaiDraw:h(0),maxWithDraw:h(0),maxWithDrawUSD:h(0),maxPethDraw:h(0),maxEthDraw:h(0)}},computed:Object(c["a"])({},Object(l["c"])("main",["account","gasPrice","web3","network","ens"]),{noProxy:function(){return!!this.activeCdp&&this.activeCdp.noProxy},finishMigration:function(){return!!this.activeCdp&&this.activeCdp.needToFinishMigrating},collateralRatioColoring:function(){return this.values?this.values.collateralRatio>=2?"green":this.values.collateralRatio>=1.75&&this.values.collateralRatio<2?"orange":"red":""},liquidationPriceDisplay:function(){if(this.values){var t=Object(d["d"])(this.values.liquidationPrice,2);return new v.a(t).gt(0)?t:"--"}return"--"},collaterlizationRatioDisplay:function(){return this.values?Object(d["c"])(this.values.collateralRatio):"--"},cdpIdDisplay:function(){return this.values?this.values.cdpId:"--"},liquidationRatioDisplay:function(){return this.values?Object(d["d"])(Object(d["e"])(this.liquidationRatio)):"--"},liquidationPenaltyDisplay:function(){return this.values?Object(d["d"])(Object(d["e"])(this.liquidationPenalty)):"--"},stabilityFeeDisplay:function(){return this.values?Object(d["d"])(Object(d["e"])(this.stabilityFee)):"--"},ethPriceDisplay:function(){return this.values?Object(d["d"])(this.ethPrice,2):"--"},maxPethDrawDisplay:function(){return this.values?Object(d["d"])(this.values.maxPethDraw,5):"--"},zeroDebt:function(){return h(this.values.debtValue).eq(0)},maxEthDrawDisplay:function(){return this.values?this.values.maxEthDraw:"--"},maxUsdDrawDisplay:function(){return this.values?Object(d["d"])(this.values.maxUsdDraw,2):"--"},ethCollateral:function(){return this.values?Object(d["d"])(this.values.ethCollateral,5,!0):"--"},pethCollateral:function(){return this.values?Object(d["d"])(this.values.pethCollateral,5,!0):"--"},usdCollateral:function(){return this.values?Object(d["d"])(this.values.usdCollateral,2):"--"},debtValueDisplay:function(){return this.values?Object(d["d"])(this.values.debtValue,2):"--"},debtValue:function(){return this.values?this.values.debtValue:"--"},maxDai:function(){return this.values?this.values.maxDai:"--"},maxUsd:function(){return this.values?Object(d["d"])(this.values.maxDai,2):"--"}}),watch:(i={},Object(o["a"])(i,"activeCdp.ready",(function(){this.isReady()})),Object(o["a"])(i,"openCloseModal",(function(t){t&&this.showClose()})),Object(o["a"])(i,"openMoveModal",(function(t){t&&this.showMove()})),i),mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.activeCdp={},t.cdpId=t.$route.params.cdpId,t.makerActive&&(t.loaded=!0,t.cdpId&&t.$emit("activeCdpId",t.cdpId));case 3:case"end":return e.stop()}}),e)})))()},methods:{showDeposit:function(){this.$emit("showDeposit")},showWithdraw:function(){this.$emit("showWithdraw")},showPayback:function(){this.$emit("showPayback")},showGenerate:function(){this.$emit("showGenerate")},displayPercentValue:d["e"],displayFixedValue:d["d"],isReady:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},m=f,_=(a("f9df"),a("2877")),b=Object(_["a"])(m,s,n,!1,null,"ec1530cc",null),y=b.exports;e["default"]=y},bc56:function(t,e,a){},c16c:function(t,e,a){"use strict";a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"h",(function(){return d})),a.d(e,"g",(function(){return p})),a.d(e,"a",(function(){return v})),a.d(e,"b",(function(){return h}));a("b680"),a("d3b7"),a("25f0");var i=a("901e"),s=a.n(i),n=function(t){return new s.a(t)},r=function(t,e,a){return n(t).times(n(e)).div(n(a))};function o(t){return s.a.isBigNumber(t)||(t=new s.a(t)),t.times(100).toString()}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return s.a.isBigNumber(t)||(t=new s.a(t)),!isFinite(t)||isNaN(t)?"--":a?t.toFixed(e,s.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=c(o(t),e,a);return isFinite(i)&&new s.a(i).gt(0)?i:"--"}function u(t,e,a,i){return r(n(t),n(e),n(a)).minus(n(i))}function d(t,e,a,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return n(t).minus(r(n(e).plus(.001),n(a),n(i))).minus(n(s).times(1))}function p(t,e,a,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return n(t).minus(r(n(e),n(a),n(i))).minus(n(s).times(1))}function v(t,e,a){return r(n(a),t,e)}function h(t,e,a,i){for(var s=parseInt(a),o=s;o>0;o--){var c=r(o,t,e).lte(n(i));if(c)return o}for(var l=100;l>0;l--){var u=r(l/100,t,e).lte(n(i));if(u)return l/100}return 0}},c1f9:function(t,e,a){},f9df:function(t,e,a){"use strict";var i=a("c1f9"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-67026f2d.9cfc204e.js.map