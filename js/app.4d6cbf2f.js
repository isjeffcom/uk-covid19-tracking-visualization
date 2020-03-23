(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"0395":function(t,e,a){},"10ed":function(t,e,a){},5120:function(t,e,a){"use strict";var r=a("0395"),n=a.n(r);n.a},5180:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.needAlert?a("alert",{attrs:{title:t.firstAlert.title,content:t.firstAlert.content,submit:t.firstAlert.submit}}):t._e(),a("chead"),a("router-view"),a("div",{attrs:{id:"github"},on:{click:t.toGithub}},[a("img",{attrs:{src:"https://i.ibb.co/27tC8pd/github.png",alt:"to github"}})])],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chead"}},[a("div",{attrs:{id:"chead-inner"}},[a("div",{attrs:{id:"chead-logo"}},[a("img",{attrs:{src:"https://i.ibb.co/ssYj6L8/ccc.png",alt:""}})]),a("div",{attrs:{id:"chead-right"}},[a("div",{staticClass:"circle circle-c"}),a("div",[t._v("Live")])])])])}],c={name:"chead",props:{update:{type:String,default:"Unknown"}}},l=c,d=(a("5120"),a("2877")),u=Object(d["a"])(l,s,o,!1,null,"29a3bb19",null),h=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertShow,expression:"alertShow"}],attrs:{id:"alert"}},[a("div",{class:t.bgCName,attrs:{id:"alert-bg"}}),a("div",{class:t.windowCName,style:"background:"+t.bgColor+";border-top: 16px solid"+t.topColor+";",attrs:{id:"alert-window"}},[a("div",{attrs:{id:"alert-inner"}},[a("div",{attrs:{id:"alert-title"}},[a("span",[t._v(t._s(t.title))])]),a("div",{attrs:{id:"alert-content"}},[a("div",{domProps:{innerHTML:t._s(t.content)}})])]),a("div",{attrs:{id:"alert-submit"}},[a("button",{on:{click:function(e){return t.go()}}},[t._v(t._s(t.submit))])])])])},g=[],f=new r["a"],v=(a("4dd0"),{name:"alert",props:{title:{type:String,default:"Title"},content:{type:String,default:"Content"},submit:{type:String,default:"submit"},bgColor:{type:String,default:"#FFC634"},topColor:{type:String,default:"#152DFF"}},data:function(){return{alertShow:!0,bgCName:"",windowCName:""}},mounted:function(){this.show(!0)},methods:{show:function(t){var e=this;t?(this.alertShow=t,this.$nextTick((function(){e.windowCName="wShow",e.bgCName="bShow"}))):(this.windowCName="wClose",this.bgCName="bClose",setTimeout((function(){e.alertShow=t}),500))},go:function(){f.$emit("alert-clicked",this.submit),this.show(!1)}}}),m=v,b=(a("e970"),Object(d["a"])(m,p,g,!1,null,"9327f048",null)),w=b.exports,_=[["Update","最近更新"],["Regions","地域"],["Data","数据"],["Case","确诊"],["Death","病亡"],["Data might be incompleted","数据有可能不完整"],["C&D","确诊/病亡"],["Daily Increase","日增长"],["Growth Rate","增长率"],["Death Increase","病亡增量"],["Mortality Rate","病亡率"],["Tested Number","测试数"],["Positive Rate","确诊率"],["Herd Immunity","群体免疫"],["UK Population","英国总人口"],["Immunity Point","生效人口比例"],["Million","百万"],["Cases to go until herd immunity","距离群体免疫还需"],["Progress","进度"],["Test","测试"],["Unknown Locations","位置未知"],["At least 1 day in arrears","相比确诊数据有至少一天的延迟"],["Location","位置"],["Cases","数量"],["References","数据参考"],["Support Us","支持我们"],["SUPPORT","捐赠资助"],["We promise free access, however, maintaining this server has costs and it's not cheap.","本网站是免费的，但维护和运营均产生高昂费用。如果你觉得不错，请帮助我们做的更好。"],["map","地图"],["list","列表"],["confirmed","确诊"],["death","病亡"],["cured","治愈"],["negative","阴性"],["tested","测试"],["D. Posi.","日检出"],["mortality","死亡率"],["serious","危重"],["suspected","疑似"],["Cases Map","周边疫情"],["Data Source","数据来源"],["by Users and News, NOT Authoritative","数据来源于用户贡献或新闻媒体，非权威信息"],["Group Up","群组讨论"],["By","通过"],["THANK YOU","谢谢支持"],["Donation will be use for server maintenance, pay for data services(eg. Map), and team members health protection.","捐赠将会被用于服务维护，支付第三方数据服务(如地图等)，和团队成员的自我卫生保护。"],["CLOSE","关闭"]],y={en:"<br>This is a data visualisation for <b>COVID-19</b> in the UK, but just <b>as a reference</b>. <br><br> You need to understand: <br><br> 1. These data might <b>NOT</b> be completely accurate or updated. <br> 2. All marker on the map represent an area, <b>NOT building or street</b>. <br> 3. The developer takes <b>NO responsibility</b> for data accuracy and service stability. <br><br> Please double check with <b>official channel</b> before act on it. Cookie in used for statistical purposes.",cn:"<br>本页面展示<b>COVID-19</b>英国疫情实时数据可视化, 所有数据及内容<b>仅供参考</b>。 <br><br> 你必须了解以下条款: <br><br> 1. 这些数据可能 <b>不是</b> 最新的或者精确的。 <br> 2. 区域数据中的标记<b>表示区域，不代表街道或建筑</b>。 <br> 3. 开发者<b>没有义务</b>去保证数据的精确及服务的稳定性。 <br><br> 在您基于本数据采取任何行动之前，请参考 <b>官方渠道和指引</b>。 因统计原因浏览器Cookie将被使用。"};function C(t){for(var e=0;e<_.length;e++)if(t==_[e][0])return _[e][1];return t}function D(t){return"zh-CN"==t?y.cn:y.en}var x=a("4dd0"),S={name:"App",components:{chead:h,alert:w},data:function(){return{firstAlert:{title:"You need to know",content:"<br>This is a data visualisation for <b>COVID-19</b> in the UK, but just <b>as a reference</b>. <br><br> You need to understand: <br><br> 1. These data might <b>NOT</b> be completely accurate or updated. <br> 2. All marker on the map represent an area, <b>NOT building or street</b>. <br> 3. The developer takes <b>NO responsibility</b> for data accuracy and service stability. <br><br> Please double check with <b>official channel</b> before act on it. Cookie in used for statistical purposes.",submit:"I consent"},needAlert:!1}},created:function(){x.get("first")&&"2"==x.get("first")||(this.needAlert=!0),this.firstAlert.content=D(window.navigator.language),f.$on("alert-clicked",(function(t){"I consent"==t&&x.set("first","2")}))},methods:{toGithub:function(){window.open("https://github.com/isjeffcom/coronvirusFigureUK")}}},k=S,L=(a("034f"),Object(d["a"])(k,n,i,!1,null,null,null)),F=L.exports,O=a("1321"),A=a.n(O),N=(a("6cc5"),a("8c4f")),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[t.error?a("div",[t._v(" Fail to connect API, please report ISSUE to: "),a("li",[t._v("https://github.com/isjeffcom/coronvirusFigureUK")]),a("li",[t._v("https://spectrum.chat/covid-19-uk-update?tab=posts")])]):t._e(),a("div",{staticClass:"tab-switcher"},t._l(t.allData,(function(e,r){return a("div",{key:e.id,staticClass:"ds-single",style:"width:calc(100%/"+t.allData.length+");",on:{click:function(e){return t.switchData(r)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(e.source))])]),r==t.selected?a("div",{staticClass:"ds-ids"}):t._e()])})),0),t.loaded?a("div",{attrs:{id:"overall"}},[a("div",{attrs:{id:"overall-inner"}},[a("div",{attrs:{id:"overall-show"}},t._l(t.renderData,(function(e,r){return a("div",{key:r,staticClass:"overall-single"},[a("div",{staticClass:"overall-single-value",style:"---"==e?"opacity: 0.2;font-weight:bold;":"opacity: 1;font-weight:bold;color:"+t.getColor(r)},["---"==e?a("span",[t._v(t._s(e))]):t._e(),"---"!=e&&isNaN(e)?a("span",[t._v(t._s(e))]):t._e(),"---"==e||isNaN(e)?t._e():a("ICountUp",{attrs:{delay:100,endVal:e,options:t.countUpOptions}})],1),a("div",{staticClass:"overall-single-title"},[a("span",[t._v(t._s(t.getLang(r)))])]),a("div",{staticClass:"overall-single-compare"},[a("span",{style:"color:"+t.getColor(r)+";font-weight: bold; font-size: 14px;opacity: 0.8;"},[t._v(t._s(t.compare(e,r)))])])])})),0),a("div",{attrs:{id:"update"}},[a("div",[t._v(t._s(t.getLang("Update"))+": "+t._s(t.update))])])]),t.chartLoaded?a("div",{attrs:{id:"chart"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px","margin-top":"2px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Data")))]),a("br"),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v("* "+t._s(t.getLang("Data might be incompleted")))])])]),a("div",{staticClass:"tab-switcher"},t._l(t.allCharts,(function(e,r){return a("div",{key:r,staticClass:"ds-single",style:"width:calc(100%/"+t.allCharts.length+");",on:{click:function(e){return t.switchChartView(r)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(t.getLang(e)))])]),r==t.currentChartView?a("div",{staticClass:"ds-ids"}):t._e()])})),0),a("div",{attrs:{id:"chart-inner"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.currentChartView,expression:"currentChartView == 0"}]},[a("charts",{attrs:{datas:t.confirmCharts}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.currentChartView,expression:"currentChartView == 1"}]},[a("charts",{attrs:{datas:t.deathCharts}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.currentChartView,expression:"currentChartView == 2"}]},[a("charts",{attrs:{datas:t.testedCharts}})],1)])]):t._e(),t.loaded?a("div",{staticStyle:{"margin-top":"40px","margin-bottom":"40px"},attrs:{id:"herd"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Herd Immunity")))]),a("br"),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v(t._s(t.getLang("UK Population"))+": 66.44 "+t._s(t.getLang("Million"))+" | "+t._s(t.getLang("Immunity Point"))+": 60%")])])]),a("ptg",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{mData:[t.allData[0].confirmed,6644e4]}})],1):t._e(),t.areaLoaded?a("div",{attrs:{id:"area"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Regions")))]),a("br"),a("div",{staticStyle:{"font-size":"16px"}},[a("b",{staticStyle:{color:"#7DA5B5"}},[t._v(t._s(t.unknown))]),t._v(" "+t._s(t.getLang("Unknown Locations")))]),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v("* "+t._s(t.getLang("At least 1 day in arrears")))])])]),a("div",{staticClass:"tab-switcher"},t._l(t.areaViews,(function(e,r){return a("div",{key:r,staticClass:"ds-single",style:"width:calc(100%/"+t.allData.length+");",on:{click:function(a){return t.switchAreaView(e)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(t.getLang(e)))])]),e==t.currentAreaView?a("div",{staticClass:"ds-ids"}):t._e()])})),0),"map"==t.currentAreaView?a("div",{attrs:{id:"area-map"}},[a("ccmap",{attrs:{mapData:t.mapData}})],1):t._e(),"list"==t.currentAreaView?a("div",{staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"area-list-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listSearch,expression:"listSearch"}],attrs:{type:"text",placeholder:"Search by place"},domProps:{value:t.listSearch},on:{input:function(e){e.target.composing||(t.listSearch=e.target.value)}}})]),a("table",[a("tr",[a("th",[t._v(t._s(t.getLang("Location")))]),a("th",[t._v(t._s(t.getLang("Cases")))])]),t._l(t.listFiltered,(function(e){return a("tr",{key:e.location},[a("td",[t._v(t._s(e.location))]),a("td",[t._v(t._s(e.number))])])}))],2)]):t._e()]):t._e()]):t._e(),t._m(0),a("div",{attrs:{id:"sources"}},[a("span",[t._v(t._s(t.getLang("Group Up")))]),a("li",[a("a",{attrs:{href:"https://spectrum.chat/covid-19-uk-update",target:"_blank"}},[t._v(t._s(t.getLang("By"))+" Spectrum.chat")])]),a("li",[a("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=5Ajnx1w",target:"_blank"}},[t._v(t._s(t.getLang("By"))+" QQ")])])]),a("div",{attrs:{id:"sources"}},[a("span",[t._v(t._s(t.getLang("References")))]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)]),t._m(10),t.areaLoaded?a("div",{attrs:{id:"donation"}},[a("div",{attrs:{id:"d-inner"}},[a("div",{attrs:{id:"d-cont"}},[a("div",{attrs:{id:"d-title"}},[t._v(t._s(t.getLang("Support Us")))]),a("div",{attrs:{id:"d-sub"}},[t._v(t._s(t.getLang("We promise free access, however, maintaining this server has costs and it's not cheap.")))])]),a("div",{attrs:{id:"d-btn"}},[a("button",{on:{click:function(e){return t.openDonate(!0)}}},[t._v(t._s(t.getLang("SUPPORT")))])])])]):t._e(),t.donate?a("donate"):t._e()],1)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"more"}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("a",{attrs:{href:"https://www.google.com/maps/d/u/0/embed?mid=1yCPR-ukAgE55sROnmBUFmtLN6riVLTu3&ll=54.019029244689136%2C-1.956174250177014&z=7",target:"_blank"}},[a("img",{attrs:{src:"https://i.ibb.co/GnR4nCt/yessdg.png",alt:"Cases explorer"}})])]),a("div",[a("a",{attrs:{href:"https://www.nhs.uk/conditions/coronavirus-covid-19/",target:"_blank"}},[a("img",{attrs:{src:"https://i.ibb.co/RNJTwnx/btn2.png",alt:"to NHS official website for more help and information"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/guidance/coronavirus-covid-19-information-for-the-public",target:"_blank"}},[t._v("[Gov]COVID-19: latest information and advice")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/government/publications/coronavirus-covid-19-number-of-cases-in-england/coronavirus-covid-19-number-of-cases-in-england",target:"_blank"}},[t._v("[Gov]COVID-19: number of cases in England")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.scot/coronavirus-covid-19/",target:"_blank"}},[t._v("[Gov]Coronavirus in Scotland")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.publichealth.hscni.net/news/covid-19-coronavirus",target:"_blank"}},[t._v("[Gov]COVID-19 (coronavirus) Northern Ireland")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://gov.wales/written-statement-coronavirus-covid-19-1",target:"_blank"}},[t._v("[Gov]Written Statement: COVID-19 Wales")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.arcgis.com/apps/opsdashboard/index.html#/f94c3c90da5b4e9f9a0b19484dd4bb14",target:"_blank"}},[t._v("[Gov]UK GIS Dashboard")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/search/news-and-communications",target:"_blank"}},[t._v("[Gov]UK Gov Announcement (search CMO for history data)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://twitter.com/DHSCgovuk",target:"_blank"}},[t._v("[Gov]DHSCgovuk Official Twitter")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.worldometers.info/coronavirus/",target:"_blank"}},[t._v("[Media]COVID-19 CORONAVIRUS OUTBREAK (Worldometers)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"author"}},[a("div",{attrs:{id:"author-inner"}},[a("a",{attrs:{href:"https://www.isjeff.com",target:"_blank"}},[t._v("@Jeff Wu")])])])}],I=(a("4de4"),a("4160"),a("caad"),a("a9e3"),a("c35a"),a("b680"),a("2532"),a("159b"),a("96cf"),a("1da1")),R=(a("b0c0"),a("bc3a")),T="https://api.covid19uk.live";function U(t,e,a){t=T+t,R.get(z(t,e)).then((function(t){a({status:!0,data:t.data})})).catch((function(t){a({status:!1,error:t})}))}function z(t,e){if(e.length>0){t+="?";for(var a=0;a<e.length;a++)t=a==e.length-1?t+e[a].name+"="+e[a].val:t+e[a].name+"="+e[a].val+"&"}return t}function V(t){return t=String(t),t.length<2?"0"+t:t}function $(t,e){var a,r=new Date(t);return a="date"==e?r.getFullYear()+"-"+V(r.getMonth()+1)+"-"+V(r.getDate()):"datesimple"==e?V(r.getMonth()+1)+"-"+V(r.getDate()):"time"==e?V(r.getHours())+":"+V(r.getMinutes())+":"+V(r.getSeconds()):r.getFullYear()+"-"+V(r.getMonth()+1)+"-"+V(r.getDate())+" "+V(r.getHours())+":"+V(r.getMinutes())+":"+V(r.getSeconds()),a}function j(t,e,a){for(var r=-1,n=0;n<e.length;n++)t==e[n][a]&&(r=n);return r}function M(t){return JSON.parse(JSON.stringify(t))}var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts-cont-s"},[a("swiper",{ref:"swiper",attrs:{options:t.swiperOptions}},t._l(t.datas,(function(e,r){return a("swiper-slide",{key:r},[a("div",{staticClass:"chart-range"},[a("div",{staticClass:"chart-inner",style:"width:"+54*t.rangeSelection.length+"px;"},t._l(t.rangeSelection,(function(r,n){return a("div",{key:n,staticClass:"chart-rs",style:"background:"+(n==t.rangeSelected?"#CED3D6":"rgba(0,0,0,0)")+";color:"+(n==t.rangeSelected?"#000000":"#CED3D6"),on:{click:function(a){return t.toRs(e.name,r,n)}}},[a("div",{staticClass:"chart-rs-txt"},[t._v(" "+t._s(isNaN(r)?r:r+"d")+" ")])])})),0)]),a("apexchart",{ref:"chart-"+e.name,refInFor:!0,attrs:{width:"100%",height:"280px",type:e.type,options:e.options,series:e.data}})],1)})),1),a("div",{staticClass:"chart-switcher-cont",staticStyle:{width:"100%",display:"flex"}},t._l(t.datas,(function(e,r){return a("div",{key:r,staticClass:"chart-switcher",style:"width: calc(100%/"+t.datas.length+");border-color:"+(t.chartIndexs==r?"#46DEFF":"#373D41")+";color:"+(t.chartIndexs==r?"#46DEFF":"#CED3D6")+";background:"+(t.chartIndexs==r?"#2D3133":"#373D41"),on:{click:function(a){t.chartSwitcher(r),t.toRs(e.name,t.rangeSelection[t.rangeSelected],t.rangeSelected)}}},[t._v(" "+t._s(t.getLang(e.name))+" ")])})),0)],1)},W=[],B=(a("fb6a"),a("dfa4"),a("7212")),H={name:"charts",components:{swiper:B["swiper"],swiperSlide:B["swiperSlide"]},props:{datas:{}},data:function(){return{lang:"",chartIndexs:0,rangeSelection:[7,14,30,"ALL"],rangeSelected:3,swiperOptions:{allowTouchMove:!1}}},mounted:function(){this.lang=window.navigator.language},methods:{chartSwitcher:function(t){this.chartIndexs=t,this.$refs["swiper"].swiper.slideTo(t)},toRs:function(t,e,a){if(this.rangeSelected=a,this.$refs["chart-"+t]){var r=this.$refs["chart-"+t][0];if("ALL"==e){if(r["original_data"]){var n=M(r["original_opts"]);return n.dataLabels.enabled=!1,r.updateSeries(M(r["original_data"])),void r.updateOptions(n)}return}if(!r["original_data"]){var i=r.series,s=this.$refs["chart-"+t][0].options;r["original_data"]=M(i),r["original_opts"]=M(s)}var o=M(r["original_data"]),c=M(r["original_opts"]);c.dataLabels.enabled=!0,r.updateSeries(this.cutData(o,e),!1),r.updateOptions(this.cutOpts(c,e),!1,!1,!1)}},cutData:function(t,e){for(var a=t,r=0;r<t.length;r++){var n=this.cutArrToDays(t[r]["data"],e);a[r]["data"]=n}return a},cutOpts:function(t,e){var a=t,r=this.cutArrToDays(t["xaxis"]["categories"],e);return a["xaxis"]["categories"]=r,a},cutArrToDays:function(t,e){var a;if(t.length>e){var r=t.length-1-e;a=t.slice(r,t.length)}return a},getLang:function(t){return"zh-CN"!=this.lang?t:C(t)}}},K=H,J=(a("93c4"),Object(d["a"])(K,G,W,!1,null,"403c76cc",null)),Y=J.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ptg"}},[a("div",{attrs:{id:"ptg-txt"}},[a("div",{staticClass:"ptg-txt-s"},[a("div",{staticClass:"ptg-txt-tit"},[t._v(t._s(t.getLang(t.txt1)))]),a("div",{staticClass:"ptg-txt-num",style:"color:"+t.bColor},[t._v(t._s(t.res1))])]),a("div",{staticClass:"ptg-txt-s"},[a("div",{staticClass:"ptg-txt-tit"},[t._v(t._s(t.getLang(t.txt2)))]),a("div",{staticClass:"ptg-txt-num",style:"color:"+t.aColor},[t._v(t._s(t.resPoint)+"%")])])]),a("div",{attrs:{id:"ptg-inner"}},[a("div",{staticClass:"ptg-bar ptg-bar-a",style:"width:"+t.aWidth+"px;background:"+t.aColor+";"}),a("div",{ref:"bBar",staticClass:"ptg-bar ptg-bar-b",style:"background:"+t.bColor+";"}),a("div",{staticClass:"ptg-point",style:"margin-left:"+t.pointPosi+"px;background:"+t.pointColor+";"})])])},q=[],Z={name:"ptg",props:{txt1:{type:String,default:"Cases to go until herd immunity"},txt2:{type:String,default:"Progress"},point:{type:Number,default:.6},aColor:{type:String,default:"#FF3A46"},bColor:{type:String,default:"#29D38C"},pointColor:{type:String,default:"#148267"},mData:{type:Array,default:function(){return[2626,6644e4]}}},data:function(){return{lang:"",aWidth:0,bWidth:0,pointPosi:0,res1:0,res2:0,resPoint:0}},mounted:function(){var t=this;this.lang=window.navigator.language,this.res1=this.mData[1]*this.point-this.mData[0],this.res2=(this.mData[0]/this.mData[1]*100).toFixed(5),this.res2=Number(this.res2),this.aWidth=this.res2>1?this.res2.toFixed(3):4,this.resPoint=(this.mData[0]/(this.mData[1]*this.point)*100).toFixed(5);var e=this.$refs["bBar"];this.bWidth=parseInt(window.getComputedStyle(e).width),this.pointPosi=this.bWidth*this.point,document.addEventListener("resize",(function(){t.bWidth=parseInt(window.getComputedStyle(e).width),t.pointPosi=t.bWidth*t.point}))},methods:{getLang:function(t){return"zh-CN"!=this.lang?t:C(t)}}},X=Z,tt=(a("5ce2"),Object(d["a"])(X,Q,q,!1,null,"7003ac90",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"donate"}},[a("div",{attrs:{id:"donate-inner"}},[a("div",{attrs:{id:"donate-title"}},[t._v(" "+t._s(t.getLang("THANK YOU"))+" ")]),a("div",{attrs:{id:"donate-subtitle"}},[t._v(" "+t._s(t.getLang("Donation will be use for server maintenance, pay for data services(eg. Map), and team members health protection."))+" ")]),a("div",{attrs:{id:"donate-cont"}},[t._m(0),a("div",{attrs:{id:"wechat"}},[a("div",{attrs:{id:"wechat-cont"},on:{click:t.openWCQR}},[a("img",{attrs:{src:"https://i.ibb.co/yFV0MpR/wec.png",alt:"donate by wechat pay"}})])])]),a("div",{attrs:{id:"donate-close"},on:{click:t.close}},[a("div",[t._v(t._s(t.getLang("CLOSE")))])])])])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"paypal"}},[a("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"EY7QJMGB24VBQ"}}),a("input",{attrs:{type:"image",src:"https://i.ibb.co/DpKkpJc/csd.png",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypal.com/en_GB/i/scr/pixel.gif",width:"1",height:"1"}})])])}],nt={name:"donate",data:function(){return{wcqr:!1}},methods:{openWCQR:function(){window.open("https://i.ibb.co/4RwtP7p/cc.jpg")},close:function(){f.$emit("donate-close",!0)},getLang:function(t){return"zh-CN"!=window.navigator.language?t:C(t)}}},it=nt,st=(a("bd61"),Object(d["a"])(it,at,rt,!1,null,"20ba302f",null)),ot=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%",width:"100%"}},[t.showMap?a("l-map",{attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[a("l-tile-layer",{attrs:{url:t.url,detectRetina:!0,attribution:t.attribution}}),t._l(t.mapData,(function(e,r){return a("l-marker",{key:r,attrs:{icon:t.setIcon(e.confirmed),"lat-lng":t.setLatLng(e.la,e.lo)}},[a("l-popup",[a("div",[t._v(" Area: "+t._s(e.name)+" "),a("br"),t._v(" Confirmed: "+t._s(e.confirmed)+" ")])])],1)}))],2):t._e()],1)},lt=[],dt=a("e11e"),ut=a.n(dt),ht=a("2699"),pt=a("a40a"),gt=a("4e2b"),ft=a("f60f"),vt={name:"ccmap",components:{LMap:ht["a"],LTileLayer:pt["a"],LMarker:gt["a"],LPopup:ft["a"]},props:{mapData:{type:Array,value:[]}},data:function(){return{iconResize:.8,minSize:16,zoom:5.6,center:ut.a.latLng(54.275967,-3.234891),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',withPopup:ut.a.latLng(47.41322,-1.219482),withTooltip:ut.a.latLng(47.41422,-1.250482),currentZoom:5,currentCenter:ut.a.latLng(54.275967,-3.234891),showParagraph:!1,icon:ut.a.icon({iconUrl:"./img/marker.svg",iconSize:[32,32],iconAnchor:[16,16]}),mapOptions:{zoomSnap:.5,easeLinearity:!0,zoomAnimation:!0,fadeAnimation:!0,markerZoomAnimation:!0},showMap:!0}},methods:{zoomUpdate:function(t){this.currentZoom=t},centerUpdate:function(t){this.currentCenter=t},showLongText:function(){this.showParagraph=!this.showParagraph},setLatLng:function(t,e){return ut.a.latLng(t,e)},setIcon:function(t){var e=t*this.iconResize>this.minSize?t*this.iconResize:this.minSize;return ut.a.icon({iconUrl:"https://playground.isjeff.com/marker.svg",iconSize:[e,e],iconAnchor:[e/2,e/2]})}}},mt=vt,bt=Object(d["a"])(mt,ct,lt,!1,null,null,null),wt=bt.exports,_t=a("87f4"),yt=a.n(_t),Ct=[{txt:"confirmed",color:"#FF5151"},{txt:"death",color:"#B9A53C"},{txt:"cured",color:"#31DA93"},{txt:"tested",color:"#A4C2D2"},{txt:"negative",color:"#46DEFF"},{txt:"serious",color:"#D21414"},{txt:"D. Posi.",color:"#F28151"},{txt:"suspected",color:"#A98AFF"}];function Dt(t){for(var e=0;e<Ct.length;e++)if(t==Ct[e].txt)return Ct[e].color;return""}a("d3b7");function xt(t,e){return new Promise((function(a){var r={cates:[],co:[],death:[],coDaily:[],coInc:[]};t.forEach((function(e,a){var n;if(e.date=$(e.date,"datesimple"),r.cates.push(e.date),r.co.push(e.confirmed),r.death.push(e.death),0==a)r.coDaily.push(e.confirmed-0),n=parseFloat((e.confirmed-0)/10).toFixed(4);else{r.coDaily.push(e.confirmed-t[a-1].confirmed);var i=t[a-1].confirmed;n=0==i?e.confirmed:parseFloat((e.confirmed-i)/i).toFixed(4)}r.coInc.push((100*n).toFixed(4))})),r.cates.push($(Date.parse(new Date),"datesimple")),r.co.push(e.confirmed),r.death.push(e.death),r.coDaily.push(e.confirmed-t[t.length-1].confirmed),r.coDaily.unshift(0);var n=t[t.length-1].confirmed,i=Number.parseFloat((e.confirmed-n)/n).toFixed(4);r.coInc.push((100*i).toFixed(4)),a(r)}))}function St(t,e){return new Promise((function(a){var r={inc:[],rate:[]};t.forEach((function(e,a){var n,i;if(0==a)n=e.death-0,i=0;else{var s=t[a-1].death;n=e.death-s,i=100*parseFloat(e.death/e.confirmed).toFixed(4)}r.inc.push(n),r.rate.push(i.toFixed(4))})),r.inc.push(e.death-t[t.length-1].death);var n=100*parseFloat(e.death/e.confirmed).toFixed(4);r.rate.push(n.toFixed(4)),a(r)}))}function kt(t,e){return new Promise((function(a){var r={all:[],growth:[],pRate:[]};t.forEach((function(e,a){var n=e.confirmed+e.negative;if(r.all.push(n),0==a)r.growth.push(0);else{r.growth.push(n-(t[a-1].confirmed+t[a-1].negative));var i=e.confirmed-t[a-1].confirmed,s=e.confirmed+e.negative-(t[a-1].confirmed+t[a-1].negative),o=100*parseFloat((i/s).toFixed(4));r.pRate.push(o.toFixed(4))}}));var n=e.confirmed+e.negative,i=t[t.length-1].confirmed+t[t.length-1].negative;r.all.push(n),r.growth.push(n-i);var s=e.confirmed-t[t.length-1].confirmed,o=e.confirmed+e.negative-(t[t.length-1].confirmed+t[t.length-1].negative),c=100*parseFloat((s/o).toFixed(4));isNaN&&(c=0),r.pRate.push(c.toFixed(4)),a(r)}))}var Lt={name:"home",components:{charts:Y,ptg:et,ccmap:wt,donate:ot,ICountUp:yt.a},data:function(){return{error:!1,lang:"",loaded:!1,chartLoaded:!1,areaLoaded:!1,listSearch:"",api:"/",api_history:"/historyfigures",api_locations:"/locations",selected:0,allData:[],renderData:{},renderArea:{},mapData:[],historyData:[],update:"",unknown:0,areaViews:["map","list"],currentAreaView:"map",countUpOptions:{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},swiperOptions:{allowTouchMove:!1},chartOptions:{chart:{foreColor:"#8D9EAA",toolbar:{show:!1},zoom:{enabled:!1}},tooltip:{y:{}},dataLabels:{enabled:!1,style:{fontSize:"8px",borderWidth:0,padding:2,fontWeight:"normal"}},colors:["#F62E3A","#949BB5"],xaxis:{categories:[0,0,0,0,0,0,0,0],labels:{hideOverlappingLabels:!0,style:{fontSize:"8px"}}},yaxis:{abels:{style:{fontSize:"8px"}}}},currentChartView:0,confirmCharts:[],deathCharts:[],testedCharts:[],allCharts:["Case","Death","Test"],donate:!1}},computed:{listFiltered:function(){var t=this;return this.renderArea.filter((function(e){return e.location.toLowerCase().includes(t.listSearch.toLowerCase())}))}},mounted:function(){this.getData(this.api),this.lang=window.navigator.language},created:function(){var t=this;f.$on("donate-close",(function(){t.donate=!1}))},methods:{getData:function(t){var e=this;U(t,{},(function(t){t.status?(e.allData=t.data.data,e.renderFigure(),e.update=$(e.allData[0].ts),e.allData[0].area&&""!=e.allData[0].area&&(e.renderArea=JSON.parse(e.allData[0].area)),e.loaded=!0,e.getHistory(e.api_history)):e.error=!0}))},getHistory:function(t){var e=this;U(t,{},function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(a){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.status){t.next=22;break}return e.historyData=a.data.data,t.next=4,xt(e.historyData,e.allData[0]);case 4:return r=t.sent,t.next=7,St(e.historyData,e.allData[0]);case 7:return n=t.sent,t.next=10,kt(e.historyData,e.allData[0]);case 10:i=t.sent,e.chartOptions.xaxis.categories=r.cates,e.confirmCharts.push(e.constChartData("C&D","area",!1,["#F62E3A","#949BB5"],e.constChartSeries([["Confirmed",r.co],["Death",r.death]]))),e.confirmCharts.push(e.constChartData("Daily Increase","bar",!1,["#F62E3A"],e.constChartSeries([["Cases",r.coDaily]]))),e.confirmCharts.push(e.constChartData("Growth Rate","area",!0,["#F62E3A"],e.constChartSeries([["Rate",r.coInc]]))),e.deathCharts.push(e.constChartData("Death Increase","bar",!1,["#FFC634"],e.constChartSeries([["Increase",n.inc]]))),e.deathCharts.push(e.constChartData("Mortality Rate","area",!0,["#FFC634"],e.constChartSeries([["Death Rate",n.rate]]))),e.testedCharts.push(e.constChartData("Tested Number","area",!1,["#46DEFF","#31DA93"],e.constChartSeries([["All",i.all],["Increase",i.growth]]))),e.testedCharts.push(e.constChartData("Positive Rate","area",!0,["#46DEFF"],e.constChartSeries([["Positive Rate",i.pRate]]))),e.dailyConfirmed=r.coDaily,isNaN(i.pRate[i.pRate.length-1])?e.renderData["D. Posi."]=Number.parseFloat(i.pRate[i.pRate.length-2])+"%":e.renderData["D. Posi."]=Number.parseFloat(i.pRate[i.pRate.length-1])+"%",e.chartLoaded=!0;case 22:e.getLocations(e.api_locations);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getLocations:function(t){var e=this,a=this;U(t,{},(function(t){var r=t.data.data,n=[];e.renderArea.forEach((function(t,e){var a=j(t.location,r,"name");0!=t.number&&-1!=a&&(r[a].confirmed=parseInt(t.number),n.push(r[a]))})),e.mapData=n,e.unknown=e.calUnknown(e.renderArea,e.allData[0].confirmed),e.$nextTick((function(){a.areaLoaded=!0}))}))},renderFigure:function(){var t=this.allData[this.selected];this.renderData={confirmed:t.confirmed,death:t.death,tested:0!=t.negative?t.confirmed+t.negative:"---",negative:0==t.negative?"---":t.negative,"D. Posi.":"---",mortality:(t.death/t.confirmed*100).toFixed(2)+"%",cured:0==t.cured?"---":t.cured,serious:0==t.serious?"---":t.serious}},calUnknown:function(t,e){var a=0;return t&&t.forEach((function(t){isNaN(t.number)||(a+=parseInt(t.number))})),e-a},constChartData:function(t,e,a,r,n){var i=M(this.chartOptions);return i.colors=r,a&&(i.dataLabels.formatter=function(t){return 0==t?"":t+"%"},i["tooltip"]["y"].formatter=function(t){return 0==t?"":t+"%"}),{name:t,type:e,options:i,data:n}},constChartSeries:function(t){for(var e=[],a=0;a<t.length;a++)e.push({name:t[a][0],data:t[a][1]});return e},getColor:function(t){return Dt(t)},getLang:function(t){return"zh-CN"!=this.lang?t:C(t)},switchData:function(t){this.selected=t,this.renderFigure()},switchAreaView:function(t){this.currentAreaView=t},switchChartView:function(t){this.currentChartView=t},compare:function(t,e){if(this.historyData.length>0){var a=parseInt(t-this.historyData[this.historyData.length-1][e]);return"tested"==e&&(a=parseInt(t-(this.historyData[this.historyData.length-1].confirmed+this.historyData[this.historyData.length-1].negative))),isNaN(a)?"---":a>=0?"+"+a:"-"+a}return"+0"},openDonate:function(t){this.donate=t}}},Ft=Lt,Ot=(a("7db6"),Object(d["a"])(Ft,P,E,!1,null,"220d8ba6",null)),At=Ot.exports;r["a"].use(N["a"]);var Nt=new N["a"]({mode:"history",routes:[{path:"/",name:"Home",component:At}]});r["a"].use(A.a),r["a"].component("apexchart",A.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(F)},router:Nt}).$mount("#app")},"5ce2":function(t,e,a){"use strict";var r=a("9967"),n=a.n(r);n.a},"7db6":function(t,e,a){"use strict";var r=a("ce90"),n=a.n(r);n.a},"85ec":function(t,e,a){},"93c4":function(t,e,a){"use strict";var r=a("5180"),n=a.n(r);n.a},9967:function(t,e,a){},bc22:function(t,e,a){},bd61:function(t,e,a){"use strict";var r=a("10ed"),n=a.n(r);n.a},ce90:function(t,e,a){},e970:function(t,e,a){"use strict";var r=a("bc22"),n=a.n(r);n.a}});
//# sourceMappingURL=app.4d6cbf2f.js.map