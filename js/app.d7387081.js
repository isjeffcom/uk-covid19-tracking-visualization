(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"10ed":function(t,e,a){},"2ca0":function(t,e,a){},5180:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.needAlert?a("alert",{attrs:{title:t.firstAlert.title,content:t.firstAlert.content,submit:t.firstAlert.submit}}):t._e(),a("chead"),a("router-view"),a("div",{attrs:{id:"github"},on:{click:t.toGithub}},[a("img",{attrs:{src:"https://i.ibb.co/27tC8pd/github.png",alt:"to github"}})])],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chead"}},[a("div",{attrs:{id:"chead-inner"}},[a("div",{attrs:{id:"chead-logo"}},[a("img",{attrs:{src:"https://i.ibb.co/ssYj6L8/ccc.png",alt:""}})]),a("div",{attrs:{id:"chead-right"}},[a("div",{staticClass:"circle circle-c"}),a("div",[t._v("Live")])])])])}],c={name:"chead",props:{update:{type:String,default:"Unknown"}}},l=c,d=(a("fe2e"),a("2877")),u=Object(d["a"])(l,s,o,!1,null,"f3cd1212",null),h=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertShow,expression:"alertShow"}],attrs:{id:"alert"}},[a("div",{class:t.bgCName,attrs:{id:"alert-bg"}}),a("div",{class:t.windowCName,style:"background:"+t.bgColor+";border-top: 16px solid"+t.topColor+";",attrs:{id:"alert-window"}},[a("div",{attrs:{id:"alert-inner"}},[a("div",{attrs:{id:"alert-title"}},[a("span",[t._v(t._s(t.title))])]),a("div",{attrs:{id:"alert-content"}},[a("div",{domProps:{innerHTML:t._s(t.content)}})])]),a("div",{attrs:{id:"alert-submit"}},[a("button",{on:{click:function(e){return t.go()}}},[t._v(t._s(t.submit))])])])])},f=[],g=new r["a"],v=(a("4dd0"),{name:"alert",props:{title:{type:String,default:"Title"},content:{type:String,default:"Content"},submit:{type:String,default:"submit"},bgColor:{type:String,default:"#FFC634"},topColor:{type:String,default:"#152DFF"}},data:function(){return{alertShow:!0,bgCName:"",windowCName:""}},mounted:function(){this.show(!0)},methods:{show:function(t){var e=this;t?(this.alertShow=t,this.$nextTick((function(){e.windowCName="wShow",e.bgCName="bShow"}))):(this.windowCName="wClose",this.bgCName="bClose",setTimeout((function(){e.alertShow=t}),500))},go:function(){g.$emit("alert-clicked",this.submit),this.show(!1)}}}),m=v,b=(a("e970"),Object(d["a"])(m,p,f,!1,null,"9327f048",null)),w=b.exports,_=[["Update","最近更新"],["Regions","地域"],["Data","数据"],["Case","确诊"],["Death","病亡"],["Data might incompleted","数据有可能不完整"],["C&D","确诊/病亡"],["Daily Increase","日增长"],["Growth Rate","增长率"],["Death Increase","病亡增量"],["Mortality Rate","病亡率"],["Tested Number","测试数"],["Positive Rate","确诊率"],["Try Rotate","尝试旋转"],["Herd Immunity","群体免疫"],["UK Population","英国总人口"],["Immunity Point","生效人口比例"],["Million","百万"],["Cases to go until herd immunity","距离群体免疫还需"],["Progress","进度"],["Test","测试"],["Unknown Locations","位置未知"],["At least 1 day in arrears","相比确诊数据有至少一天的延迟"],["Location","位置"],["Cases","数量"],["References","数据参考"],["Support Us","支持我们"],["SUPPORT","捐赠资助"],["We promise free access, however, maintaining this server has costs and it's not cheap.","本网站是免费的，但维护和运营均产生高昂费用。如果你觉得不错，请帮助我们做的更好。"],["Tested = Confirmed + Negative","测试量 = 确诊 + 阴性"],["Data Incomplete","数据有缺失"],["map","地图"],["list","列表"],["confirmed","确诊"],["death","病亡"],["cured","治愈"],["negative","阴性"],["tested","测试"],["D Co./Te.","日检出"],["serious","危重"],["suspected","疑似"],["Cases Map","周边疫情"],["Data Source","数据来源"],["by Users and News, NOT Authoritative","数据来源于用户贡献或新闻媒体，非权威信息"],["THANK YOU","谢谢支持"],["Donation will be use for server maintenance, pay for data services(eg. Map), and team members health protection.","捐赠将会被用于服务维护，支付第三方数据服务(如地图等)，和团队成员的自我卫生保护。"],["CLOSE","关闭"]],C={en:"<br>This is a data visualisation for <b>COVID-19</b> in the UK, but just <b>as a reference</b>. <br><br> You need to understand: <br><br> 1. These data might <b>NOT</b> be completely accurate or updated. <br> 2. All marker on the map represent an area, <b>NOT building or street</b>. <br> 3. The developer takes <b>NO responsibility</b> for data accuracy and service stability. <br><br> Please double check with <b>official channel</b> before act on it. Cookie in used for statistical purposes.",cn:"<br>本页面展示<b>COVID-19</b>英国疫情实时数据可视化, 所有数据及内容<b>仅供参考</b>。 <br><br> 你必须了解以下条款: <br><br> 1. 这些数据可能 <b>不是</b> 最新的或者精确的。 <br> 2. 区域数据中的标记<b>表示区域，不代表街道或建筑</b>。 <br> 3. 开发者<b>没有义务</b>去保证数据的精确及服务的稳定性。 <br><br> 在您基于本数据采取任何行动之前，请参考 <b>官方渠道和指引</b>。 因统计原因浏览器Cookie将被使用。"};function y(t){for(var e=0;e<_.length;e++)if(t==_[e][0])return _[e][1];return t}function D(t){return"zh-CN"==t?C.cn:C.en}var x=a("4dd0"),S={name:"App",components:{chead:h,alert:w},data:function(){return{firstAlert:{title:"You need to know",content:"<br>This is a data visualisation for <b>COVID-19</b> in the UK, but just <b>as a reference</b>. <br><br> You need to understand: <br><br> 1. These data might <b>NOT</b> be completely accurate or updated. <br> 2. All marker on the map represent an area, <b>NOT building or street</b>. <br> 3. The developer takes <b>NO responsibility</b> for data accuracy and service stability. <br><br> Please double check with <b>official channel</b> before act on it. Cookie in used for statistical purposes.",submit:"I consent"},needAlert:!1}},created:function(){x.get("first")&&"2"==x.get("first")||(this.needAlert=!0),this.firstAlert.content=D(window.navigator.language),g.$on("alert-clicked",(function(t){"I consent"==t&&x.set("first","2")}))},methods:{toGithub:function(){window.open("https://github.com/isjeffcom/coronvirusFigureUK")}}},k=S,L=(a("034f"),Object(d["a"])(k,n,i,!1,null,null,null)),F=L.exports,A=a("1321"),O=a.n(A),N=(a("6cc5"),a("8c4f")),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[t.error?a("div",[t._v(" Fail to connect API, please report ISSUE to: "),a("li",[t._v("https://github.com/isjeffcom/coronvirusFigureUK")]),a("li",[t._v("https://spectrum.chat/covid-19-uk-update?tab=posts")])]):t._e(),a("div",{staticClass:"tab-switcher"},t._l(t.allData,(function(e,r){return a("div",{key:e.id,staticClass:"ds-single",style:"width:calc(100%/"+t.allData.length+");",on:{click:function(e){return t.switchData(r)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(e.source))])]),r==t.selected?a("div",{staticClass:"ds-ids"}):t._e()])})),0),t.loaded?a("div",{attrs:{id:"overall"}},[a("div",{attrs:{id:"overall-inner"}},[a("div",{attrs:{id:"overall-show"}},t._l(t.renderData,(function(e,r){return a("div",{key:r,staticClass:"overall-single"},[a("div",{staticClass:"overall-single-value",style:"---"==e?"opacity: 0.2;font-weight:bold;":"opacity: 1;font-weight:bold;color:"+t.getColor(r)},["---"==e?a("span",[t._v(t._s(e))]):t._e(),"---"!=e&&isNaN(e)?a("span",[t._v(t._s(e))]):t._e(),"---"==e||isNaN(e)?t._e():a("ICountUp",{attrs:{delay:100,endVal:e,options:t.countUpOptions}})],1),a("div",{staticClass:"overall-single-title"},[a("span",[t._v(t._s(t.getLang(r)))])]),a("div",{staticClass:"overall-single-compare"},[a("span",{style:"color:"+t.getColor(r)+";font-weight: bold; font-size: 14px;opacity: 0.8;"},[t._v(t._s(t.compare(e,r)))])])])})),0),a("div",{attrs:{id:"update"}},[a("div",[t._v(t._s(t.getLang("Update"))+": "+t._s(t.update))])])]),t.chartLoaded?a("div",{attrs:{id:"chart"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px","margin-top":"2px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Data")))]),a("br"),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v("* "+t._s(t.getLang("Data might incompleted")))])])]),a("div",{staticClass:"tab-switcher"},t._l(t.allCharts,(function(e,r){return a("div",{key:r,staticClass:"ds-single",style:"width:calc(100%/"+t.allCharts.length+");",on:{click:function(e){return t.switchChartView(r)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(t.getLang(e)))])]),r==t.currentChartView?a("div",{staticClass:"ds-ids"}):t._e()])})),0),a("div",{attrs:{id:"chart-inner"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.currentChartView,expression:"currentChartView == 0"}]},[a("charts",{attrs:{datas:t.confirmCharts}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.currentChartView,expression:"currentChartView == 1"}]},[a("charts",{attrs:{datas:t.deathCharts}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.currentChartView,expression:"currentChartView == 2"}]},[a("charts",{attrs:{datas:t.testedCharts}})],1)]),t.isMobile()?a("div",{staticStyle:{width:"100%","text-align":"center",opacity:"0.5","margin-top":"20px","font-size":"10px"},attrs:{id:"chart-notice"}},[a("div",{attrs:{id:"chart-notice"}},[a("img",{staticStyle:{width:"24px"},attrs:{src:"https://i.ibb.co/jW1mJZd/rotate.png",alt:"rotate for better view"}}),a("div",[t._v(t._s(t.getLang("Try Rotate")))])])]):t._e()]):t._e(),t.loaded?a("div",{staticStyle:{"margin-top":"40px","margin-bottom":"40px"},attrs:{id:"herd"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Herd Immunity")))]),a("br"),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v(t._s(t.getLang("UK Population"))+": 66.44 "+t._s(t.getLang("Million"))+" | "+t._s(t.getLang("Immunity Point"))+": 60%")])])]),a("ptg",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}})],1):t._e(),t.areaLoaded?a("div",{attrs:{id:"area"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Regions")))]),a("br"),a("div",{staticStyle:{"font-size":"16px"}},[a("b",{staticStyle:{color:"#7DA5B5"}},[t._v(t._s(t.unknown))]),t._v(" "+t._s(t.getLang("Unknown Locations")))]),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v("* "+t._s(t.getLang("At least 1 day in arrears")))])])]),a("div",{staticClass:"tab-switcher"},t._l(t.areaViews,(function(e,r){return a("div",{key:r,staticClass:"ds-single",style:"width:calc(100%/"+t.allData.length+");",on:{click:function(a){return t.switchAreaView(e)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(t.getLang(e)))])]),e==t.currentAreaView?a("div",{staticClass:"ds-ids"}):t._e()])})),0),"map"==t.currentAreaView?a("div",{attrs:{id:"area-map"}},[a("ccmap",{attrs:{mapData:t.mapData}})],1):t._e(),"list"==t.currentAreaView?a("div",{staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"area-list-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listSearch,expression:"listSearch"}],attrs:{type:"text",placeholder:"Search by place"},domProps:{value:t.listSearch},on:{input:function(e){e.target.composing||(t.listSearch=e.target.value)}}})]),a("table",[a("tr",[a("th",[t._v(t._s(t.getLang("Location")))]),a("th",[t._v(t._s(t.getLang("Cases")))])]),t._l(t.listFiltered,(function(e){return a("tr",{key:e.location},[a("td",[t._v(t._s(e.location))]),a("td",[t._v(t._s(e.number))])])}))],2)]):t._e()]):t._e()]):t._e(),t.loadCM?a("div",{attrs:{id:"third-party"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Cases Map")))]),a("br"),a("div",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.getLang("Data Source"))+": COVID-19 MAP (by /r/CovidMapping)")]),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v("* "+t._s(t.getLang("by Users and News, NOT Authoritative")))])])]),t._m(0)]):t._e(),t._m(1),a("div",{attrs:{id:"sources"}},[a("span",[t._v(t._s(t.getLang("References")))]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)]),t._m(11),t.areaLoaded?a("div",{attrs:{id:"donation"}},[a("div",{attrs:{id:"d-inner"}},[a("div",{attrs:{id:"d-cont"}},[a("div",{attrs:{id:"d-title"}},[t._v(t._s(t.getLang("Support Us")))]),a("div",{attrs:{id:"d-sub"}},[t._v(t._s(t.getLang("We promise free access, however, maintaining this server has costs and it's not cheap.")))])]),a("div",{attrs:{id:"d-btn"}},[a("button",{on:{click:function(e){return t.openDonate(!0)}}},[t._v(t._s(t.getLang("SUPPORT")))])])])]):t._e(),t.sourceAlertEnabled?a("alert",{attrs:{title:t.sourceAlert.title,content:t.sourceAlert.content,submit:t.sourceAlert.submit,topColor:t.sourceAlert.topColor,bgColor:t.sourceAlert.bgColor}}):t._e(),t.donate?a("donate"):t._e()],1)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cases-map"}},[a("iframe",{attrs:{src:"https://www.google.com/maps/d/u/0/embed?mid=1yCPR-ukAgE55sROnmBUFmtLN6riVLTu3&ll=54.019029244689136%2C-1.956174250177014&z=7",frameborder:"0",width:"100%",height:"500px"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"more"}},[a("a",{attrs:{href:"https://www.nhs.uk/conditions/coronavirus-covid-19/",target:"_blank"}},[a("img",{attrs:{src:"https://i.ibb.co/RNJTwnx/btn2.png",alt:"to NHS official website for more help and information"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/guidance/coronavirus-covid-19-information-for-the-public",target:"_blank"}},[t._v("[Gov]COVID-19: latest information and advice")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/government/publications/coronavirus-covid-19-number-of-cases-in-england/coronavirus-covid-19-number-of-cases-in-england",target:"_blank"}},[t._v("[Gov]COVID-19: number of cases in England")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.scot/coronavirus-covid-19/",target:"_blank"}},[t._v("[Gov]Coronavirus in Scotland")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.publichealth.hscni.net/news/covid-19-coronavirus",target:"_blank"}},[t._v("[Gov]COVID-19 (coronavirus) Northern Ireland")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://gov.wales/written-statement-coronavirus-covid-19-1",target:"_blank"}},[t._v("[Gov]Written Statement: COVID-19 Wales")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.arcgis.com/apps/opsdashboard/index.html#/f94c3c90da5b4e9f9a0b19484dd4bb14",target:"_blank"}},[t._v("[Gov]UK GIS Dashboard")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/search/news-and-communications",target:"_blank"}},[t._v("[Gov]UK Gov Announcement (search CMO for history data)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://twitter.com/DHSCgovuk",target:"_blank"}},[t._v("[Gov]DHSCgovuk Official Twitter")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.worldometers.info/coronavirus/",target:"_blank"}},[t._v("[Media]COVID-19 CORONAVIRUS OUTBREAK (Worldometers)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"author"}},[a("div",{attrs:{id:"author-inner"}},[a("a",{attrs:{href:"https://www.isjeff.com",target:"_blank"}},[t._v("@Jeff Wu")])])])}],P=(a("4de4"),a("4160"),a("caad"),a("a9e3"),a("c35a"),a("2532"),a("9911"),a("159b"),a("96cf"),a("1da1")),I=(a("b0c0"),a("bc3a")),U="https://coronauk.isjeff.com";function z(t,e,a){t=U+t,I.get(M(t,e)).then((function(t){a({status:!0,data:t.data})})).catch((function(t){a({status:!1,error:t})}))}function M(t,e){if(e.length>0){t+="?";for(var a=0;a<e.length;a++)t=a==e.length-1?t+e[a].name+"="+e[a].val:t+e[a].name+"="+e[a].val+"&"}return t}function R(t){return t=String(t),t.length<2?"0"+t:t}function $(t,e){var a,r=new Date(t);return a="date"==e?r.getFullYear()+"-"+R(r.getMonth()+1)+"-"+R(r.getDate()):"datesimple"==e?R(r.getMonth()+1)+"-"+R(r.getDate()):"time"==e?R(r.getHours())+":"+R(r.getMinutes())+":"+R(r.getSeconds()):r.getFullYear()+"-"+R(r.getMonth()+1)+"-"+R(r.getDate())+" "+R(r.getHours())+":"+R(r.getMinutes())+":"+R(r.getSeconds()),a}function V(t,e,a){for(var r=-1,n=0;n<e.length;n++)t==e[n][a]&&(r=n);return r}function j(t){return JSON.parse(JSON.stringify(t))}var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts-cont-s"},[a("swiper",{ref:"swiper",attrs:{options:t.swiperOptions}},t._l(t.datas,(function(e,r){return a("swiper-slide",{key:r},[a("div",{staticClass:"chart-range"},[a("div",{staticClass:"chart-inner",style:"width:"+54*t.rangeSelection.length+"px;"},t._l(t.rangeSelection,(function(r,n){return a("div",{key:n,staticClass:"chart-rs",style:"background:"+(n==t.rangeSelected?"#CED3D6":"rgba(0,0,0,0)")+";color:"+(n==t.rangeSelected?"#000000":"#CED3D6"),on:{click:function(a){return t.toRs(e.name,r,n)}}},[a("div",{staticClass:"chart-rs-txt"},[t._v(" "+t._s(isNaN(r)?r:r+"d")+" ")])])})),0)]),a("apexchart",{ref:"chart-"+e.name,refInFor:!0,attrs:{width:"100%",height:"280px",type:e.type,options:e.options,series:e.data}})],1)})),1),a("div",{staticClass:"chart-switcher-cont",staticStyle:{width:"100%",display:"flex"}},t._l(t.datas,(function(e,r){return a("div",{key:r,staticClass:"chart-switcher",style:"width: calc(100%/"+t.datas.length+");border-color:"+(t.chartIndexs==r?"#46DEFF":"#373D41")+";color:"+(t.chartIndexs==r?"#46DEFF":"#CED3D6")+";background:"+(t.chartIndexs==r?"#2D3133":"#373D41"),on:{click:function(a){t.chartSwitcher(r),t.toRs(e.name,t.rangeSelection[t.rangeSelected],t.rangeSelected)}}},[t._v(" "+t._s(t.getLang(e.name))+" ")])})),0)],1)},G=[],B=(a("fb6a"),a("dfa4"),a("7212")),H={name:"charts",components:{swiper:B["swiper"],swiperSlide:B["swiperSlide"]},props:{datas:{}},data:function(){return{lang:"",chartIndexs:0,rangeSelection:[7,14,30,"ALL"],rangeSelected:3,swiperOptions:{allowTouchMove:!1}}},mounted:function(){this.lang=window.navigator.language},methods:{chartSwitcher:function(t){this.chartIndexs=t,this.$refs["swiper"].swiper.slideTo(t)},toRs:function(t,e,a){if(this.rangeSelected=a,this.$refs["chart-"+t]){var r=this.$refs["chart-"+t][0];if("ALL"==e){if(r["original_data"]){var n=j(r["original_opts"]);return n.dataLabels.enabled=!1,r.updateSeries(j(r["original_data"])),void r.updateOptions(n)}return}if(!r["original_data"]){var i=r.series,s=this.$refs["chart-"+t][0].options;r["original_data"]=j(i),r["original_opts"]=j(s)}var o=j(r["original_data"]),c=j(r["original_opts"]);c.dataLabels.enabled=!0,r.updateSeries(this.cutData(o,e),!1),r.updateOptions(this.cutOpts(c,e),!1,!1,!1)}},cutData:function(t,e){for(var a=t,r=0;r<t.length;r++){var n=this.cutArrToDays(t[r]["data"],e);a[r]["data"]=n}return a},cutOpts:function(t,e){var a=t,r=this.cutArrToDays(t["xaxis"]["categories"],e);return a["xaxis"]["categories"]=r,a},cutArrToDays:function(t,e){var a;if(t.length>e){var r=t.length-1-e;a=t.slice(r,t.length)}return a},getLang:function(t){return"zh-CN"!=this.lang?t:y(t)}}},K=H,J=(a("93c4"),Object(d["a"])(K,W,G,!1,null,"403c76cc",null)),Y=J.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ptg"}},[a("div",{attrs:{id:"ptg-txt"}},[a("div",{staticClass:"ptg-txt-s"},[a("div",{staticClass:"ptg-txt-tit"},[t._v(t._s(t.getLang(t.txt1)))]),a("div",{staticClass:"ptg-txt-num",style:"color:"+t.bColor},[t._v(t._s(t.res1))])]),a("div",{staticClass:"ptg-txt-s"},[a("div",{staticClass:"ptg-txt-tit"},[t._v(t._s(t.getLang(t.txt2)))]),a("div",{staticClass:"ptg-txt-num"},[t._v(t._s(t.res2)+"%")])])]),a("div",{attrs:{id:"ptg-inner"}},[a("div",{staticClass:"ptg-bar ptg-bar-a",style:"width:"+t.aWidth+"px;background:"+t.aColor+";"}),a("div",{ref:"bBar",staticClass:"ptg-bar ptg-bar-b",style:"background:"+t.bColor+";"}),a("div",{staticClass:"ptg-point",style:"margin-left:"+t.pointPosi+"px;background:"+t.pointColor+";"})])])},Z=[],q=(a("b680"),{name:"ptg",props:{txt1:{type:String,default:"Cases to go until herd immunity"},txt2:{type:String,default:"Progress"},point:{type:Number,default:.6},aColor:{type:String,default:"#FF3A46"},bColor:{type:String,default:"#29D38C"},pointColor:{type:String,default:"#FFFFFF"},mData:{type:Array,default:function(){return[2626,6644e4]}}},data:function(){return{lang:"",aWidth:0,bWidth:0,pointPosi:0,res1:0,res2:0}},mounted:function(){var t=this;this.lang=window.navigator.language,this.res2=100*parseFloat((this.mData[0]/this.mData[1]).toFixed(6)),this.aWidth=this.aWidth>1?this.res2.toFixed(3):4,this.res1=this.mData[1]-this.mData[0];var e=this.$refs["bBar"];this.bWidth=parseInt(window.getComputedStyle(e).width),this.pointPosi=this.bWidth*this.point,document.addEventListener("resize",(function(){t.bWidth=parseInt(window.getComputedStyle(e).width),t.pointPosi=t.bWidth*t.point}))},methods:{getLang:function(t){return"zh-CN"!=this.lang?t:y(t)}}}),X=q,tt=(a("bf88"),Object(d["a"])(X,Q,Z,!1,null,"1d7d8024",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"donate"}},[a("div",{attrs:{id:"donate-inner"}},[a("div",{attrs:{id:"donate-title"}},[t._v(" "+t._s(t.getLang("THANK YOU"))+" ")]),a("div",{attrs:{id:"donate-subtitle"}},[t._v(" "+t._s(t.getLang("Donation will be use for server maintenance, pay for data services(eg. Map), and team members health protection."))+" ")]),a("div",{attrs:{id:"donate-cont"}},[t._m(0),a("div",{attrs:{id:"wechat"}},[a("div",{attrs:{id:"wechat-cont"},on:{click:t.openWCQR}},[a("img",{attrs:{src:"https://i.ibb.co/yFV0MpR/wec.png",alt:"donate by wechat pay"}})])])]),a("div",{attrs:{id:"donate-close"},on:{click:t.close}},[a("div",[t._v(t._s(t.getLang("CLOSE")))])])])])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"paypal"}},[a("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"EY7QJMGB24VBQ"}}),a("input",{attrs:{type:"image",src:"https://i.ibb.co/DpKkpJc/csd.png",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypal.com/en_GB/i/scr/pixel.gif",width:"1",height:"1"}})])])}],nt={name:"donate",data:function(){return{wcqr:!1}},methods:{openWCQR:function(){window.open("https://i.ibb.co/4RwtP7p/cc.jpg")},close:function(){g.$emit("donate-close",!0)},getLang:function(t){return"zh-CN"!=window.navigator.language?t:y(t)}}},it=nt,st=(a("bd61"),Object(d["a"])(it,at,rt,!1,null,"20ba302f",null)),ot=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%",width:"100%"}},[t.showMap?a("l-map",{attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[a("l-tile-layer",{attrs:{url:t.url,detectRetina:!0,attribution:t.attribution}}),t._l(t.mapData,(function(e,r){return a("l-marker",{key:r,attrs:{icon:t.setIcon(e.confirmed),"lat-lng":t.setLatLng(e.la,e.lo)}},[a("l-popup",[a("div",[t._v(" Area: "+t._s(e.name)+" "),a("br"),t._v(" Confirmed: "+t._s(e.confirmed)+" ")])])],1)}))],2):t._e()],1)},lt=[],dt=a("e11e"),ut=a.n(dt),ht=a("2699"),pt=a("a40a"),ft=a("4e2b"),gt=a("f60f"),vt={name:"ccmap",components:{LMap:ht["a"],LTileLayer:pt["a"],LMarker:ft["a"],LPopup:gt["a"]},props:{mapData:{type:Array,value:[]}},data:function(){return{iconResize:1.5,minSize:16,zoom:5.6,center:ut.a.latLng(54.275967,-3.234891),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',withPopup:ut.a.latLng(47.41322,-1.219482),withTooltip:ut.a.latLng(47.41422,-1.250482),currentZoom:5,currentCenter:ut.a.latLng(54.275967,-3.234891),showParagraph:!1,icon:ut.a.icon({iconUrl:"./img/marker.svg",iconSize:[32,32],iconAnchor:[16,16]}),mapOptions:{zoomSnap:.5,easeLinearity:!0,zoomAnimation:!0,fadeAnimation:!0,markerZoomAnimation:!0},showMap:!0}},mounted:function(){},methods:{zoomUpdate:function(t){this.currentZoom=t},centerUpdate:function(t){this.currentCenter=t},showLongText:function(){this.showParagraph=!this.showParagraph},setLatLng:function(t,e){return ut.a.latLng(t,e)},setIcon:function(t){var e=t*this.iconResize>this.minSize?t*this.iconResize:this.minSize;return ut.a.icon({iconUrl:"https://playground.isjeff.com/marker.svg",iconSize:[e,e],iconAnchor:[e/2,e/2]})}}},mt=vt,bt=Object(d["a"])(mt,ct,lt,!1,null,null,null),wt=bt.exports,_t=a("87f4"),Ct=a.n(_t),yt=[{txt:"confirmed",color:"#FF5151"},{txt:"death",color:"#B9A53C"},{txt:"cured",color:"#31DA93"},{txt:"tested",color:"#A4C2D2"},{txt:"negative",color:"#46DEFF"},{txt:"serious",color:"#D21414"},{txt:"D Co./Te.",color:"#F28151"},{txt:"suspected",color:"#A98AFF"}];function Dt(t){for(var e=0;e<yt.length;e++)if(t==yt[e].txt)return yt[e].color;return""}a("d3b7");function xt(t){return new Promise((function(e){var a=[];t.forEach((function(t){t.date=$(t.date,"datesimple"),a.push(t.date)})),a.push($(Date.parse(new Date),"datesimple")),e(a)}))}function St(t,e){return new Promise((function(a){var r=[],n=[];t.forEach((function(t){r.push(t.confirmed),n.push(t.death)})),r.push(e.confirmed),n.push(e.death);var i={confirmed:r,death:n};a(i)}))}function kt(t,e){return new Promise((function(a){var r=[];parseInt(e.confirmed);t.forEach((function(e,a){0==a?r.push(e.confirmed-0):r.push(e.confirmed-t[a-1].confirmed)})),r.push(e.confirmed-t[t.length-1].confirmed),r.unshift(0),a(r)}))}function Lt(t,e){return new Promise((function(a){var r=[];t.forEach((function(e,a){var n;if(0==a)n=parseFloat((e.confirmed-0)/10).toFixed(4);else{var i=t[a-1].confirmed;n=0==i?e.confirmed:parseFloat((e.confirmed-i)/i).toFixed(4)}r.push((100*n).toFixed(4))}));var n=t[t.length-1].confirmed,i=Number.parseFloat((e.confirmed-n)/n).toFixed(4);r.push((100*i).toFixed(4)),a(r)}))}function Ft(t,e){return new Promise((function(a){var r=[];t.forEach((function(e,a){var n;if(0==a)n=e.death-0;else{var i=t[a-1].death;n=e.death-i}r.push(n)})),r.push(e.death-t[t.length-1].death),a(r)}))}function At(t,e){return new Promise((function(a){var r=[];t.forEach((function(t,e){var a;a=0==e?0:100*parseFloat(t.death/t.confirmed).toFixed(4),r.push(a.toFixed(4))}));var n=100*parseFloat(e.death/e.confirmed).toFixed(4);r.push(n.toFixed(4)),a(r)}))}function Ot(t,e){return new Promise((function(a){var r=[],n=[];t.forEach((function(a,i){var s=a.confirmed+a.negative;if(r.push(s),0==i?n.push(0):n.push(s-(t[i-1].confirmed+t[i-1].negative)),i==t.length-1){var o=e.confirmed+e.negative,c=t[t.length-1].confirmed+t[t.length-1].negative;r.push(o),n.push(o-c)}})),a({all:r,growth:n})}))}function Nt(t,e){return new Promise((function(a){var r=[];t.forEach((function(e,a){if(0==a);else{var n=e.confirmed-t[a-1].confirmed,i=e.confirmed+e.negative-(t[a-1].confirmed+t[a-1].negative),s=100*parseFloat((n/i).toFixed(4));r.push(s.toFixed(4))}}));var n=e.confirmed-t[t.length-1].confirmed,i=e.confirmed+e.negative-(t[t.length-1].confirmed+t[t.length-1].negative),s=100*parseFloat((n/i).toFixed(4));isNaN(s)&&(s=0),r.push(s.toFixed(4)),a(r)}))}var Et={name:"home",components:{charts:Y,ptg:et,ccmap:wt,alert:w,donate:ot,ICountUp:Ct.a},data:function(){return{error:!1,loadCM:!1,lang:"",loaded:!1,chartLoaded:!1,areaLoaded:!1,listSearch:"",api:"/",api_history:"/historyfigures",api_locations:"/locations",selected:0,allData:[],renderData:{},renderArea:{},mapData:[],historyData:[],update:"",unknown:0,areaViews:["map","list"],currentAreaView:"map",countUpOptions:{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},sourceAlertEnabled:!1,sourceAlert:{title:"Source",content:"",submit:"OK",topColor:"#2D3133",bgColor:"#8FA8B8"},swiperOptions:{allowTouchMove:!1},chartOptions:{chart:{foreColor:"#8D9EAA",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1,style:{fontSize:"8px",borderWidth:0,padding:2,fontWeight:"normal"}},colors:["#F62E3A","#949BB5"],xaxis:{categories:[0,0,0,0,0,0,0,0],labels:{hideOverlappingLabels:!0,style:{fontSize:"8px"}}},yaxis:{abels:{style:{fontSize:"8px"}}}},currentChartView:0,confirmCharts:[],deathCharts:[],testedCharts:[],allCharts:["Case","Death","Test"],donate:!1}},computed:{listFiltered:function(){var t=this;return this.renderArea.filter((function(e){return e.location.toLowerCase().includes(t.listSearch.toLowerCase())}))}},mounted:function(){var t=this;this.getData(this.api),this.lang=window.navigator.language,setTimeout((function(){t.loadCM=!0}),3e3)},created:function(){var t=this;g.$on("alert-clicked",(function(){setTimeout((function(){t.sourceAlertEnabled=!1}),500)})),g.$on("donate-close",(function(){t.donate=!1}))},methods:{getData:function(t){var e=this;z(t,{},(function(t){t.status?(e.allData=t.data.data,e.renderFigure(),e.update=$(e.allData[0].ts),e.allData[0].area&&""!=e.allData[0].area&&(e.renderArea=JSON.parse(e.allData[0].area)),e.loaded=!0,e.getHistory(e.api_history)):e.error=!0}))},renderFigure:function(){var t=this.allData[this.selected];this.renderData={confirmed:t.confirmed,death:t.death,tested:0!=t.negative?t.confirmed+t.negative:"---",negative:0==t.negative?"---":t.negative,"D Co./Te.":"---",cured:0==t.cured?"---":t.cured,serious:0==t.serious?"---":t.serious,suspected:0==t.suspected?"---":t.suspected}},calUnknown:function(t,e){var a=0;return t&&t.forEach((function(t){isNaN(t.number)||(a+=parseInt(t.number))})),e-a},getHistory:function(t){var e=this;z(t,{},function(){var t=Object(P["a"])(regeneratorRuntime.mark((function t(a){var r,n,i,s,o,c,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.status){t.next=37;break}return e.historyData=a.data.data,t.next=4,xt(e.historyData);case 4:return r=t.sent,t.next=7,St(e.historyData,e.allData[0]);case 7:return n=t.sent,t.next=10,kt(e.historyData,e.allData[0]);case 10:return i=t.sent,t.next=13,Lt(e.historyData,e.allData[0]);case 13:return s=t.sent,t.next=16,Ft(e.historyData,e.allData[0]);case 16:return o=t.sent,t.next=19,At(e.historyData,e.allData[0]);case 19:return c=t.sent,t.next=22,Ot(e.historyData,e.allData[0]);case 22:return l=t.sent,t.next=25,Nt(e.historyData,e.allData[0]);case 25:d=t.sent,e.chartOptions.xaxis.categories=r,e.confirmCharts.push(e.constChartData("C&D","area",!1,["#F62E3A","#949BB5"],e.constChartSeries([["Confirmed",n.confirmed],["Death",n.death]]))),e.confirmCharts.push(e.constChartData("Daily Increase","bar",!1,["#F62E3A"],e.constChartSeries([["Cases",i]]))),e.confirmCharts.push(e.constChartData("Growth Rate","line",!0,["#F62E3A"],e.constChartSeries([["Rate",s]]))),e.deathCharts.push(e.constChartData("Death Increase","bar",!1,["#FFC634"],e.constChartSeries([["Increase",o]]))),e.deathCharts.push(e.constChartData("Mortality Rate","area",!0,["#FFC634"],e.constChartSeries([["Death Rate",c]]))),e.testedCharts.push(e.constChartData("Tested Number","area",!1,["#46DEFF","#31DA93"],e.constChartSeries([["All",l.all],["Increase",l.growth]]))),e.testedCharts.push(e.constChartData("Positive Rate","bar",!0,["#46DEFF"],e.constChartSeries([["Positive Rate",d]]))),e.dailyConfirmed=i,isNaN(d[d.length-1])?e.renderData["D Co./Te."]=Number.parseFloat(d[d.length-2])+"%":e.renderData["D Co./Te."]=Number.parseFloat(d[d.length-1])+"%",e.chartLoaded=!0;case 37:e.getLocations(e.api_locations);case 38:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},constChartData:function(t,e,a,r,n){var i=j(this.chartOptions);return i.colors=r,a&&(i.dataLabels.formatter=function(t){return 0==t?"":t+"%"}),{name:t,type:e,options:i,data:n}},constChartSeries:function(t){for(var e=[],a=0;a<t.length;a++)e.push({name:t[a][0],data:t[a][1]});return e},getLocations:function(t){var e=this,a=this;z(t,{},(function(t){var r=t.data.data,n=[];e.renderArea.forEach((function(t,e){var a=V(t.location,r,"name");0!=t.number&&-1!=a&&(r[a].confirmed=parseInt(t.number),n.push(r[a]))})),e.mapData=n,e.unknown=e.calUnknown(e.renderArea,e.allData[0].confirmed),e.$nextTick((function(){a.areaLoaded=!0}))}))},getColor:function(t){return Dt(t)},getLang:function(t){return"zh-CN"!=this.lang?t:y(t)},switchData:function(t){this.selected=t,this.renderFigure()},switchAreaView:function(t){this.currentAreaView=t},switchChartView:function(t){this.currentChartView=t},compare:function(t,e){if(this.historyData.length>0){var a=parseInt(t-this.historyData[this.historyData.length-1][e]);return"tested"==e&&(a=parseInt(t-(this.historyData[this.historyData.length-1].confirmed+this.historyData[this.historyData.length-1].negative))),isNaN(a)?"---":a>=0?"+"+a:"-"+a}return"+0"},sourcePopup:function(){var t=this,e=this.allData[this.selected];this.sourceAlert.content="<br><br>Source Name: "+e.source+". <br><br> Link:<a href='"+e.link+" style='color:#3F8BBE;'>"+e.link+"</a>",this.$nextTick((function(){t.sourceAlertEnabled=!0}))},openDonate:function(t){this.donate=t},isMobile:function(){return screen.width<480}}},Tt=Et,Pt=(a("5d79"),Object(d["a"])(Tt,E,T,!1,null,"622ada8b",null)),It=Pt.exports;r["a"].use(N["a"]);var Ut=new N["a"]({mode:"history",routes:[{path:"/",name:"Home",component:It}]});r["a"].use(O.a),r["a"].component("apexchart",O.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(F)},router:Ut}).$mount("#app")},"5d79":function(t,e,a){"use strict";var r=a("f812"),n=a.n(r);n.a},"85ec":function(t,e,a){},"93c4":function(t,e,a){"use strict";var r=a("5180"),n=a.n(r);n.a},bc22:function(t,e,a){},bd61:function(t,e,a){"use strict";var r=a("10ed"),n=a.n(r);n.a},bf88:function(t,e,a){"use strict";var r=a("2ca0"),n=a.n(r);n.a},e970:function(t,e,a){"use strict";var r=a("bc22"),n=a.n(r);n.a},ea04:function(t,e,a){},f812:function(t,e,a){},fe2e:function(t,e,a){"use strict";var r=a("ea04"),n=a.n(r);n.a}});
//# sourceMappingURL=app.d7387081.js.map