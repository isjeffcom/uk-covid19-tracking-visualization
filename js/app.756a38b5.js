(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"10ed":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.needAlert?a("alert",{attrs:{title:t.firstAlert.title,content:t.firstAlert.content,submit:t.firstAlert.submit}}):t._e(),a("chead"),a("router-view"),a("div",{attrs:{id:"github"},on:{click:t.toGithub}},[a("img",{attrs:{src:"https://i.ibb.co/27tC8pd/github.png",alt:"to github"}})])],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chead"}},[a("div",{attrs:{id:"chead-inner"}},[a("div",{attrs:{id:"chead-logo"}},[a("img",{attrs:{src:"https://i.ibb.co/ssYj6L8/ccc.png",alt:""}})]),a("div",{attrs:{id:"chead-right"}},[a("div",{staticClass:"circle circle-c"}),a("div",[t._v("Live")])])])])}],c={name:"chead",props:{update:{type:String,default:"Unknown"}}},l=c,d=(a("fe2e"),a("2877")),u=Object(d["a"])(l,s,o,!1,null,"f3cd1212",null),h=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertShow,expression:"alertShow"}],attrs:{id:"alert"}},[a("div",{class:t.bgCName,attrs:{id:"alert-bg"}}),a("div",{class:t.windowCName,style:"background:"+t.bgColor+";border-top: 16px solid"+t.topColor+";",attrs:{id:"alert-window"}},[a("div",{attrs:{id:"alert-inner"}},[a("div",{attrs:{id:"alert-title"}},[a("span",[t._v(t._s(t.title))])]),a("div",{attrs:{id:"alert-content"}},[a("div",{domProps:{innerHTML:t._s(t.content)}})])]),a("div",{attrs:{id:"alert-submit"}},[a("button",{on:{click:function(e){return t.go()}}},[t._v(t._s(t.submit))])])])])},f=[],m=new r["a"],v=(a("4dd0"),{name:"alert",props:{title:{type:String,default:"Title"},content:{type:String,default:"Content"},submit:{type:String,default:"submit"},bgColor:{type:String,default:"#FFC634"},topColor:{type:String,default:"#152DFF"}},data:function(){return{alertShow:!0,bgCName:"",windowCName:""}},mounted:function(){this.show(!0)},methods:{show:function(t){var e=this;t?(this.alertShow=t,this.$nextTick((function(){e.windowCName="wShow",e.bgCName="bShow"}))):(this.windowCName="wClose",this.bgCName="bClose",setTimeout((function(){e.alertShow=t}),500))},go:function(){m.$emit("alert-clicked",this.submit),this.show(!1)}}}),g=v,b=(a("e970"),Object(d["a"])(g,p,f,!1,null,"9327f048",null)),w=b.exports,_=[["Update","最近更新"],["Regions","地域"],["Data","数据"],["Case","确诊"],["Death","死亡"],["Data might incompleted, especially 02-26 was not accurate","数据不完整，特别是2月26日及之前"],["C&D","确诊/死亡"],["Daily Increase","日增长"],["Growth Rate","增长率"],["Death Growth","死亡增量"],["Mortality Rate","死亡率"],["Tested Number","测试数"],["Positive Rate","确诊率"],["Test","测试"],["Unknown Locations","位置未知"],["At least 1 day in arrears","相比确诊数据有至少一天的延迟"],["Location","位置"],["Cases","数量"],["References","数据参考"],["Support Us","支持我们"],["SUPPORT","捐赠资助"],["We promise free access, however, maintaining this server has costs and it's not cheap.","本网站是免费的，但维护和运营均产生高昂费用。如果你觉得不错，请帮助我们做的更好。"],["Tested = Confirmed + Negative","测试量 = 确诊 + 阴性"],["Data Incomplete","数据有缺失"],["map","地图"],["list","列表"],["confirmed","确诊"],["death","死亡"],["cured","治愈"],["negative","阴性"],["tested","测试"],["D Co./Te.","日检出"],["serious","危重"],["suspected","疑似"],["THANK YOU","谢谢支持"],["Donation will be use for server maintenance, pay for data services(eg. Map), and team members health protection.","捐赠将会被用于服务维护，支付第三方数据服务(如地图等)，和团队成员的自我卫生保护。"],["CLOSE","关闭"]],C={en:"<br>This is a data visualisation for <b>COVID-19</b> in the UK, but just <b>as a reference</b>. <br><br> You need to understand: <br><br> 1. These data might <b>NOT</b> be completely accurate or updated. <br> 2. All marker on the map represent an area, <b>NOT building or street</b>. <br> 3. The developer takes <b>NO responsibility</b> for data accuracy and service stability. <br><br> Please double check with <b>official channel</b> before act on it. Cookie in used for statistical purposes.",cn:"<br>本页面展示<b>COVID-19</b>英国疫情实时数据可视化, 所有数据及内容<b>仅供参考</b>。 <br><br> 你必须了解以下条款: <br><br> 1. 这些数据可能 <b>不是</b> 最新的或者精确的。 <br> 2. 区域数据中的标记<b>表示区域，不代表街道或建筑</b>。 <br> 3. 开发者<b>没有义务</b>去保证数据的精确及服务的稳定性。 <br><br> 在您基于本数据采取任何行动之前，请参考 <b>官方渠道和指引</b>。 因统计原因浏览器Cookie将被使用。"};function y(t){for(var e=0;e<_.length;e++)if(t==_[e][0])return _[e][1];return t}function D(t){return"zh-CN"==t?C.cn:C.en}var x=a("4dd0"),k={name:"App",components:{chead:h,alert:w},data:function(){return{firstAlert:{title:"You need to know",content:"<br>This is a data visualisation for <b>COVID-19</b> in the UK, but just <b>as a reference</b>. <br><br> You need to understand: <br><br> 1. These data might <b>NOT</b> be completely accurate or updated. <br> 2. All marker on the map represent an area, <b>NOT building or street</b>. <br> 3. The developer takes <b>NO responsibility</b> for data accuracy and service stability. <br><br> Please double check with <b>official channel</b> before act on it. Cookie in used for statistical purposes.",submit:"I consent"},needAlert:!1}},created:function(){x.get("first")&&"2"==x.get("first")||(this.needAlert=!0),this.firstAlert.content=D(window.navigator.language),m.$on("alert-clicked",(function(t){"I consent"==t&&x.set("first","2")}))},methods:{toGithub:function(){window.open("https://github.com/isjeffcom/coronvirusFigureUK")}}},S=k,L=(a("034f"),Object(d["a"])(S,n,i,!1,null,null,null)),F=L.exports,A=a("1321"),O=a.n(A),E=(a("6cc5"),a("8c4f")),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[t.error?a("div",[t._v(" Fail to connect API, please report ISSUE to: "),a("li",[t._v("https://github.com/isjeffcom/coronvirusFigureUK")]),a("li",[t._v("https://spectrum.chat/covid-19-uk-update?tab=posts")])]):t._e(),a("div",{staticClass:"tab-switcher"},t._l(t.allData,(function(e,r){return a("div",{key:e.id,staticClass:"ds-single",style:"width:calc(100%/"+t.allData.length+");",on:{click:function(e){return t.switchData(r)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(e.source))])]),r==t.selected?a("div",{staticClass:"ds-ids"}):t._e()])})),0),t.loaded?a("div",{attrs:{id:"overall"}},[a("div",{attrs:{id:"overall-inner"}},[a("div",{attrs:{id:"overall-show"}},t._l(t.renderData,(function(e,r){return a("div",{key:r,staticClass:"overall-single"},[a("div",{staticClass:"overall-single-value",style:"---"==e?"opacity: 0.2;font-weight:bold;":"opacity: 1;font-weight:bold;color:"+t.getColor(r)},["---"==e?a("span",[t._v(t._s(e))]):t._e(),"---"!=e&&isNaN(e)?a("span",[t._v(t._s(e))]):t._e(),"---"==e||isNaN(e)?t._e():a("ICountUp",{attrs:{delay:100,endVal:e,options:t.countUpOptions}})],1),a("div",{staticClass:"overall-single-title"},[a("span",[t._v(t._s(t.getLang(r)))])]),a("div",{staticClass:"overall-single-compare"},[a("span",{style:"color:"+t.getColor(r)+";font-weight: bold; font-size: 14px;opacity: 0.8;"},[t._v(t._s(t.compare(e,r)))])])])})),0),a("div",{attrs:{id:"update"}},[a("div",[t._v(t._s(t.getLang("Update"))+": "+t._s(t.update))])])]),t.chartLoaded?a("div",{attrs:{id:"chart"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px","margin-top":"2px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Data")))]),a("br"),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v("* "+t._s(t.getLang("Data might incompleted, especially 02-26 was not accurate")))])])]),a("div",{staticClass:"tab-switcher"},t._l(t.allCharts,(function(e,r){return a("div",{key:r,staticClass:"ds-single",style:"width:calc(100%/"+t.allCharts.length+");",on:{click:function(e){return t.switchChartView(r)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(t.getLang(e)))])]),r==t.currentChartView?a("div",{staticClass:"ds-ids"}):t._e()])})),0),a("div",{attrs:{id:"chart-inner"}},[0==t.currentChartView?a("div",{staticClass:"charts-cont-s"},[a("swiper",{ref:"swiperConfirmed",attrs:{options:t.swiperOptions}},t._l(t.confirmCharts,(function(e){return a("swiper-slide",{key:e.name},[a("div",{staticClass:"title",staticStyle:{width:"100%"}},[a("span",[t._v(t._s(t.getLang(e.name)))]),a("br")]),a("apexchart",{attrs:{width:"100%",height:"280px",type:e.type,options:e.options,series:e.data}})],1)})),1),a("div",{staticClass:"chart-switcher-cont",staticStyle:{width:"100%",display:"flex"}},t._l(t.confirmCharts,(function(e,r){return a("div",{key:r,staticClass:"chart-switcher",style:"width: calc(100%/"+t.confirmCharts.length+");border-color:"+(t.chartIndexs["swiperConfirmed"]==r?"#46DEFF":"#373D41")+";color:"+(t.chartIndexs["swiperConfirmed"]==r?"#46DEFF":"#CED3D6"),on:{click:function(e){return t.chartSwitcher("swiperConfirmed",r)}}},[t._v(" "+t._s(t.getLang(e.name))+" ")])})),0)],1):t._e(),1==t.currentChartView?a("div",{staticClass:"charts-cont-s"},[a("swiper",{ref:"swiperDeath",attrs:{options:t.swiperOptions}},t._l(t.deathCharts,(function(e){return a("swiper-slide",{key:e.name},[a("div",{staticClass:"title",staticStyle:{width:"100%"}},[a("span",[t._v(t._s(t.getLang(e.name)))]),a("br")]),a("apexchart",{attrs:{width:"100%",height:"280px",type:e.type,options:e.options,series:e.data}})],1)})),1),a("div",{staticClass:"chart-switcher-cont",staticStyle:{width:"100%",display:"flex"}},t._l(t.deathCharts,(function(e,r){return a("div",{key:r,staticClass:"chart-switcher",style:"width: calc(100%/"+t.deathCharts.length+");border-color:"+(t.chartIndexs["swiperDeath"]==r?"#46DEFF":"#373D41")+";color:"+(t.chartIndexs["swiperDeath"]==r?"#46DEFF":"#CED3D6"),on:{click:function(e){return t.chartSwitcher("swiperDeath",r)}}},[t._v(" "+t._s(t.getLang(e.name))+" ")])})),0)],1):t._e(),2==t.currentChartView?a("div",{staticClass:"charts-cont-s"},[a("swiper",{ref:"swiperTested",attrs:{options:t.swiperOptions}},t._l(t.testedCharts,(function(e){return a("swiper-slide",{key:e.name},[a("div",{staticClass:"title",staticStyle:{width:"100%"}},[a("span",[t._v(t._s(t.getLang(e.name)))]),a("br")]),a("apexchart",{attrs:{width:"100%",height:"280px",type:e.type,options:e.options,series:e.data}})],1)})),1),a("div",{staticClass:"chart-switcher-cont",staticStyle:{width:"100%",display:"flex"}},t._l(t.testedCharts,(function(e,r){return a("div",{key:r,staticClass:"chart-switcher",style:"width: calc(100%/"+t.testedCharts.length+");border-color:"+(t.chartIndexs["swiperTested"]==r?"#46DEFF":"#373D41")+";color:"+(t.chartIndexs["swiperTested"]==r?"#46DEFF":"#CED3D6"),on:{click:function(e){return t.chartSwitcher("swiperTested",r)}}},[t._v(" "+t._s(t.getLang(e.name))+" ")])})),0)],1):t._e()])]):t._e(),t.areaLoaded?a("div",{attrs:{id:"area"}},[a("div",{staticClass:"title",staticStyle:{background:"#1D1F21",width:"100%","margin-bottom":"0px"}},[a("div",{staticClass:"title-area inner",staticStyle:{width:"92%","padding-top":"20px","padding-bottom":"20px","margin-left":"auto","margin-right":"auto"}},[a("span",[t._v(t._s(t.getLang("Regions")))]),a("br"),a("div",{staticStyle:{"font-size":"16px"}},[a("b",{staticStyle:{color:"#7DA5B5"}},[t._v(t._s(t.unknown))]),t._v(" "+t._s(t.getLang("Unknown Locations")))]),a("div",{staticStyle:{"font-size":"12px",opacity:"0.5"}},[t._v("* "+t._s(t.getLang("At least 1 day in arrears")))])])]),a("div",{staticClass:"tab-switcher"},t._l(t.areaViews,(function(e,r){return a("div",{key:r,staticClass:"ds-single",style:"width:calc(100%/"+t.allData.length+");",on:{click:function(a){return t.switchAreaView(e)}}},[a("div",{staticClass:"ds-text"},[a("span",[t._v(t._s(t.getLang(e)))])]),e==t.currentAreaView?a("div",{staticClass:"ds-ids"}):t._e()])})),0),"map"==t.currentAreaView?a("div",{attrs:{id:"area-map"}},[a("ccmap",{attrs:{mapData:t.mapData}})],1):t._e(),"list"==t.currentAreaView?a("div",{staticStyle:{"margin-top":"40px"}},[a("table",[a("tr",[a("th",[t._v(t._s(t.getLang("Location")))]),a("th",[t._v(t._s(t.getLang("Cases")))])]),t._l(t.renderArea,(function(e){return a("tr",{key:e.location},[a("td",[t._v(t._s(e.location))]),a("td",[t._v(t._s(e.number))])])}))],2)]):t._e()]):t._e()]):t._e(),t._m(0),a("div",{attrs:{id:"sources"}},[a("span",[t._v(t._s(t.getLang("References")))]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)]),t._m(10),t.areaLoaded?a("div",{attrs:{id:"donation"}},[a("div",{attrs:{id:"d-inner"}},[a("div",{attrs:{id:"d-cont"}},[a("div",{attrs:{id:"d-title"}},[t._v(t._s(t.getLang("Support Us")))]),a("div",{attrs:{id:"d-sub"}},[t._v(t._s(t.getLang("We promise free access, however, maintaining this server has costs and it's not cheap.")))])]),a("div",{attrs:{id:"d-btn"}},[a("button",{on:{click:function(e){return t.openDonate(!0)}}},[t._v(t._s(t.getLang("SUPPORT")))])])])]):t._e(),t.sourceAlertEnabled?a("alert",{attrs:{title:t.sourceAlert.title,content:t.sourceAlert.content,submit:t.sourceAlert.submit,topColor:t.sourceAlert.topColor,bgColor:t.sourceAlert.bgColor}}):t._e(),t.donate?a("donate"):t._e()],1)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"more"}},[a("a",{attrs:{href:"https://www.nhs.uk/conditions/coronavirus-covid-19/",target:"_blank"}},[a("img",{attrs:{src:"https://i.ibb.co/RNJTwnx/btn2.png",alt:"to NHS official website for more help and information"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/guidance/coronavirus-covid-19-information-for-the-public",target:"_blank"}},[t._v("[Gov]COVID-19: latest information and advice")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/government/publications/coronavirus-covid-19-number-of-cases-in-england/coronavirus-covid-19-number-of-cases-in-england",target:"_blank"}},[t._v("[Gov]COVID-19: number of cases in England")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.scot/coronavirus-covid-19/",target:"_blank"}},[t._v("[Gov]Coronavirus in Scotland")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.publichealth.hscni.net/news/covid-19-coronavirus",target:"_blank"}},[t._v("[Gov]COVID-19 (coronavirus) Northern Ireland")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://gov.wales/written-statement-coronavirus-covid-19-1",target:"_blank"}},[t._v("[Gov]Written Statement: COVID-19 Wales")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.arcgis.com/apps/opsdashboard/index.html#/f94c3c90da5b4e9f9a0b19484dd4bb14",target:"_blank"}},[t._v("[Gov]UK GIS Dashboard")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.gov.uk/search/news-and-communications",target:"_blank"}},[t._v("[Gov]UK Gov Announcement (search CMO for history data)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://twitter.com/DHSCgovuk",target:"_blank"}},[t._v("[Gov]DHSCgovuk Official Twitter")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.worldometers.info/coronavirus/",target:"_blank"}},[t._v("[Media]COVID-19 CORONAVIRUS OUTBREAK (Worldometers)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"author"}},[a("div",{attrs:{id:"author-inner"}},[a("a",{attrs:{href:"https://www.isjeff.com",target:"_blank"}},[t._v("@Jeff Wu")])])])}],I=(a("4160"),a("a9e3"),a("c35a"),a("b680"),a("b64b"),a("9911"),a("159b"),a("96cf"),a("1da1")),P=(a("b0c0"),a("bc3a")),U="https://coronauk.isjeff.com";function $(t,e,a){t=U+t,P.get(V(t,e)).then((function(t){a({status:!0,data:t.data})})).catch((function(t){a({status:!1,error:t})}))}function V(t,e){if(e.length>0){t+="?";for(var a=0;a<e.length;a++)t=a==e.length-1?t+e[a].name+"="+e[a].val:t+e[a].name+"="+e[a].val+"&"}return t}function R(t){return t=String(t),t.length<2?"0"+t:t}function z(t,e){var a,r=new Date(t);return a="date"==e?r.getFullYear()+"-"+R(r.getMonth()+1)+"-"+R(r.getDate()):"datesimple"==e?R(r.getMonth()+1)+"-"+R(r.getDate()):"time"==e?R(r.getHours())+":"+R(r.getMinutes())+":"+R(r.getSeconds()):r.getFullYear()+"-"+R(r.getMonth()+1)+"-"+R(r.getDate())+" "+R(r.getHours())+":"+R(r.getMinutes())+":"+R(r.getSeconds()),a}function j(t,e,a){for(var r=-1,n=0;n<e.length;n++)t==e[n][a]&&(r=n);return r}function M(t){return JSON.parse(JSON.stringify(t))}var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"donate"}},[a("div",{attrs:{id:"donate-inner"}},[a("div",{attrs:{id:"donate-title"}},[t._v(" "+t._s(t.getLang("THANK YOU"))+" ")]),a("div",{attrs:{id:"donate-subtitle"}},[t._v(" "+t._s(t.getLang("Donation will be use for server maintenance, pay for data services(eg. Map), and team members health protection."))+" ")]),a("div",{attrs:{id:"donate-cont"}},[t._m(0),a("div",{attrs:{id:"wechat"}},[a("div",{attrs:{id:"wechat-cont"},on:{click:t.openWCQR}},[a("img",{attrs:{src:"https://i.ibb.co/yFV0MpR/wec.png",alt:"donate by wechat pay"}})])])]),a("div",{attrs:{id:"donate-close"},on:{click:t.close}},[a("div",[t._v(t._s(t.getLang("CLOSE")))])])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"paypal"}},[a("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank"}},[a("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),a("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"EY7QJMGB24VBQ"}}),a("input",{attrs:{type:"image",src:"https://i.ibb.co/DpKkpJc/csd.png",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}}),a("img",{attrs:{alt:"",border:"0",src:"https://www.paypal.com/en_GB/i/scr/pixel.gif",width:"1",height:"1"}})])])}],H={name:"donate",data:function(){return{wcqr:!1}},methods:{openWCQR:function(){window.open("https://i.ibb.co/4RwtP7p/cc.jpg")},close:function(){m.$emit("donate-close",!0)},getLang:function(t){return"zh-CN"!=window.navigator.language?t:y(t)}}},K=H,J=(a("bd61"),Object(d["a"])(K,G,B,!1,null,"20ba302f",null)),W=J.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%",width:"100%"}},[t.showMap?a("l-map",{attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[a("l-tile-layer",{attrs:{url:t.url,detectRetina:!0,attribution:t.attribution}}),t._l(t.mapData,(function(e,r){return a("l-marker",{key:r,attrs:{icon:t.setIcon(e.confirmed),"lat-lng":t.setLatLng(e.la,e.lo)}},[a("l-popup",[a("div",[t._v(" Area: "+t._s(e.name)+" "),a("br"),t._v(" Confirmed: "+t._s(e.confirmed)+" ")])])],1)}))],2):t._e()],1)},Q=[],Z=a("e11e"),q=a.n(Z),X=a("2699"),tt=a("a40a"),et=a("4e2b"),at=a("f60f"),rt={name:"ccmap",components:{LMap:X["a"],LTileLayer:tt["a"],LMarker:et["a"],LPopup:at["a"]},props:{mapData:{type:Array,value:[]}},data:function(){return{iconResize:3,minSize:16,zoom:5.6,center:q.a.latLng(54.275967,-3.234891),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',withPopup:q.a.latLng(47.41322,-1.219482),withTooltip:q.a.latLng(47.41422,-1.250482),currentZoom:5,currentCenter:q.a.latLng(54.275967,-3.234891),showParagraph:!1,icon:q.a.icon({iconUrl:"./img/marker.svg",iconSize:[32,32],iconAnchor:[16,16]}),mapOptions:{zoomSnap:.5,easeLinearity:!0,zoomAnimation:!0,fadeAnimation:!0,markerZoomAnimation:!0},showMap:!0}},mounted:function(){},methods:{zoomUpdate:function(t){this.currentZoom=t},centerUpdate:function(t){this.currentCenter=t},showLongText:function(){this.showParagraph=!this.showParagraph},setLatLng:function(t,e){return q.a.latLng(t,e)},setIcon:function(t){var e=t*this.iconResize>this.minSize?t*this.iconResize:this.minSize;return q.a.icon({iconUrl:"https://playground.isjeff.com/marker.svg",iconSize:[e,e],iconAnchor:[e/2,e/2]})}}},nt=rt,it=Object(d["a"])(nt,Y,Q,!1,null,null,null),st=it.exports,ot=a("87f4"),ct=a.n(ot),lt=(a("dfa4"),a("7212")),dt=[{txt:"confirmed",color:"#FF5151"},{txt:"death",color:"#B9A53C"},{txt:"cured",color:"#31DA93"},{txt:"tested",color:"#A4C2D2"},{txt:"negative",color:"#46DEFF"},{txt:"serious",color:"#D21414"},{txt:"D Co./Te.",color:"#F28151"},{txt:"suspected",color:"#A98AFF"}];function ut(t){for(var e=0;e<dt.length;e++)if(t==dt[e].txt)return dt[e].color;return""}a("d3b7");function ht(t){return new Promise((function(e){var a=[];t.forEach((function(t){t.date=z(t.date,"datesimple"),a.push(t.date)})),a.push(z(Date.parse(new Date),"datesimple")),e(a)}))}function pt(t,e){return new Promise((function(a){var r=[],n=[];t.forEach((function(t){r.push(t.confirmed),n.push(t.death)})),r.push(e.confirmed),n.push(e.death);var i={confirmed:r,death:n};a(i)}))}function ft(t,e){return new Promise((function(a){var r=[];parseInt(e.confirmed);t.forEach((function(e,a){0==a?r.push(e.confirmed-0):r.push(e.confirmed-t[a-1].confirmed)})),r.push(e.confirmed-t[t.length-1].confirmed),r.unshift(0),a(r)}))}function mt(t,e){return new Promise((function(a){var r=[];t.forEach((function(e,a){var n;if(0==a)n=parseFloat((e.confirmed-0)/10).toFixed(4);else{var i=t[a-1].confirmed;n=parseFloat((e.confirmed-i)/i).toFixed(4)}r.push((100*n).toFixed(4))}));var n=t[t.length-1].confirmed,i=Number.parseFloat((e.confirmed-n)/n).toFixed(4);r.push((100*i).toFixed(4)),a(r)}))}function vt(t,e){return new Promise((function(a){var r=[];t.forEach((function(e,a){var n;if(0==a)n=e.death-0;else{var i=t[a-1].death;n=e.death-i}r.push(n)})),r.push(e.death-t[t.length-1].death),a(r)}))}function gt(t,e){return new Promise((function(a){var r=[];t.forEach((function(t){var e=100*parseFloat(t.death/t.confirmed).toFixed(4);r.push(e.toFixed(4))}));var n=100*parseFloat(e.death/e.confirmed).toFixed(4);r.push(n.toFixed(4)),a(r)}))}function bt(t,e){return new Promise((function(a){var r=[],n=[];t.forEach((function(a,i){var s=a.confirmed+a.negative;if(r.push(s),0==i?n.push(0):n.push(s-(t[i-1].confirmed+t[i-1].negative)),i==t.length-1){var o=e.confirmed+e.negative,c=t[t.length-1].confirmed+t[t.length-1].negative;r.push(o),n.push(o-c)}})),a({all:r,growth:n})}))}function wt(t,e){return new Promise((function(a){var r=[];t.forEach((function(e,a){if(0==a);else{var n=e.confirmed-t[a-1].confirmed,i=e.confirmed+e.negative-(t[a-1].confirmed+t[a-1].negative),s=100*parseFloat((n/i).toFixed(2));r.push(s.toFixed(4))}}));var n=e.confirmed-t[t.length-1].confirmed,i=e.confirmed+e.negative-(t[t.length-1].confirmed+t[t.length-1].negative),s=100*parseFloat((n/i).toFixed(4));r.push(s.toFixed(4)),a(r)}))}var _t={name:"home",components:{ccmap:st,alert:w,donate:W,ICountUp:ct.a,swiper:lt["swiper"],swiperSlide:lt["swiperSlide"]},data:function(){return{error:!1,lang:"",loaded:!1,chartLoaded:!1,areaLoaded:!1,api:"/",api_history:"/historyfigures",api_locations:"/locations",selected:0,selectedChart:"confirm",allData:[],renderData:{},renderArea:{},mapData:[],historyData:[],update:"",unknown:0,areaViews:["map","list"],currentAreaView:"map",countUpOptions:{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},sourceAlertEnabled:!1,sourceAlert:{title:"Source",content:"",submit:"OK",topColor:"#2D3133",bgColor:"#8FA8B8"},swiperOptions:{allowTouchMove:!1},chartOptions:{chart:{foreColor:"#8D9EAA",toolbar:{show:!1}},dataLabels:{style:{fontSize:"8px",fontWeight:"normal"}},colors:["#F62E3A","#949BB5"],xaxis:{categories:[0,0,0,0,0,0,0,0],labels:{style:{fontSize:"8px"}}},taxis:{abels:{style:{fontSize:"8px"}}}},currentChartView:0,confirmCharts:[],deathCharts:[],testedCharts:[],allCharts:["Case","Death","Test"],chartIndexs:{swiperConfirmed:0,swiperDeath:0,swiperTested:0},chartData_growth:[{name:"",data:[0,0,0,0,0,0]}],chartData_tested:[{name:"All",data:[0,0,0,0,0,0,0]},{name:"Increment",data:[0,0,0,0,0,0,0]}],donate:!1}},computed:{},mounted:function(){this.getData(this.api),this.lang=window.navigator.language},created:function(){var t=this;m.$on("alert-clicked",(function(){setTimeout((function(){t.sourceAlertEnabled=!1}),500)})),m.$on("donate-close",(function(){t.donate=!1}))},methods:{getData:function(t){var e=this;$(t,{},(function(t){t.status?(e.allData=t.data.data,e.allData[0].area&&""!=e.allData[0].area&&(e.renderArea=JSON.parse(e.allData[0].area)),e.renderFigure(),e.update=z(e.allData[0].ts),e.loaded=!0,e.getHistory(e.api_history)):e.error=!0}))},renderFigure:function(){var t=this.allData[this.selected];this.renderData={confirmed:t.confirmed,death:t.death,tested:0!=t.negative?t.confirmed+t.negative:"---",negative:0==t.negative?"---":t.negative,"D Co./Te.":0!=t.negative?Number.parseFloat(100*(t.confirmed/(t.confirmed+t.negative)).toFixed(2))+"%":"---",cured:0==t.cured?"---":t.cured,serious:0==t.serious?"---":t.serious,suspected:0==t.suspected?"---":t.suspected}},calUnknown:function(t,e){var a=0;return t&&t.forEach((function(t){isNaN(t.number)||(a+=parseInt(t.number))})),e-a},getHistory:function(t){var e=this;$(t,{},function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(a){var r,n,i,s,o,c,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.status){t.next=37;break}return e.historyData=a.data.data,t.next=4,ht(e.historyData);case 4:return r=t.sent,t.next=7,pt(e.historyData,e.allData[0]);case 7:return n=t.sent,t.next=10,ft(e.historyData,e.allData[0]);case 10:return i=t.sent,t.next=13,mt(e.historyData,e.allData[0]);case 13:return s=t.sent,t.next=16,vt(e.historyData,e.allData[0]);case 16:return o=t.sent,t.next=19,gt(e.historyData,e.allData[0]);case 19:return c=t.sent,t.next=22,bt(e.historyData,e.allData[0]);case 22:return l=t.sent,t.next=25,wt(e.historyData,e.allData[0]);case 25:d=t.sent,e.chartOptions.xaxis.categories=r,e.confirmCharts.push(e.constChartData("C&D","area",!1,e.constChartSeries([["Confirmed",n.confirmed],["Death",n.death]]))),e.confirmCharts.push(e.constChartData("Daily Increase","bar",!1,e.constChartSeries([["Cases",i]]))),e.confirmCharts.push(e.constChartData("Growth Rate","bar",!0,e.constChartSeries([["Rate",s]]))),e.deathCharts.push(e.constChartData("Death Growth","bar",!1,e.constChartSeries([["Death Increment",o]]))),e.deathCharts.push(e.constChartData("Mortality Rate","area",!0,e.constChartSeries([["Death Rate",c]]))),e.testedCharts.push(e.constChartData("Tested Number","area",!1,e.constChartSeries([["All",l.all],["Growth",l.growth]]))),e.testedCharts.push(e.constChartData("Positive Rate","bar",!0,e.constChartSeries([["Increment",d]]))),e.dailyConfirmed=i,e.renderData["D Co./Te."]=Number.parseFloat(d[d.length-1])+"%",e.chartLoaded=!0;case 37:e.getLocations(e.api_locations);case 38:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},chartSwitcher:function(t,e){this.chartIndexs[t]=e,this.$refs[t].swiper.slideTo(e)},constChartData:function(t,e,a,r){var n=M(this.chartOptions);return a&&(n.dataLabels.formatter=function(t){return t+"%"}),{name:t,type:e,options:n,data:r}},constChartSeries:function(t){for(var e=[],a=0;a<t.length;a++)e.push({name:t[a][0],data:t[a][1]});return e},getLocations:function(t){var e=this,a=this;$(t,{},(function(t){var r=t.data.data,n=[];e.renderArea.forEach((function(t,e){var a=j(t.location,r,"name");0!=t.number&&-1!=a&&(r[a].confirmed=parseInt(t.number),n.push(r[a]))})),e.mapData=n,e.unknown=e.calUnknown(e.renderArea,e.allData[0].confirmed),e.$nextTick((function(){a.areaLoaded=!0}))}))},getColor:function(t){return ut(t)},getLang:function(t){return"zh-CN"!=this.lang?t:y(t)},reCalCoTe:function(){if(this.historyData){var t=this.chartData_tested[1].data,e=this.dailyConfirmed,a=0!=t[t.length-1]?t[t.length-1]:t[t.length-2],r=0!=e[t.length-1]?e[t.length-1]:e[t.length-2];this.renderData["D Co./Te."]=Number.parseFloat(100*(r/a).toFixed(4))+"%"}},switchData:function(t){this.selected=t,this.renderFigure()},switchAreaView:function(t){this.currentAreaView=t},switchChartView:function(t){var e=this;Object.keys(this.chartIndexs).forEach((function(t){e.chartIndexs[t]=0,e.$refs[t]&&e.$refs[t].swiper.slideTo(0)})),this.currentChartView=t},compare:function(t,e){if(this.historyData.length>0){var a=parseInt(t-this.historyData[this.historyData.length-1][e]);return"tested"==e&&(a=parseInt(t-(this.historyData[this.historyData.length-1].confirmed+this.historyData[this.historyData.length-1].negative))),isNaN(a)?"---":a>=0?"+"+a:"-"+a}return"+0"},sourcePopup:function(){var t=this,e=this.allData[this.selected];this.sourceAlert.content="<br><br>Source Name: "+e.source+". <br><br> Link:<a href='"+e.link+" style='color:#3F8BBE;'>"+e.link+"</a>",this.$nextTick((function(){t.sourceAlertEnabled=!0}))},openDonate:function(t){this.donate=t}}},Ct=_t,yt=(a("776f"),Object(d["a"])(Ct,T,N,!1,null,"0f780f5a",null)),Dt=yt.exports;r["a"].use(E["a"]);var xt=new E["a"]({mode:"history",routes:[{path:"/",name:"Home",component:Dt}]});r["a"].use(O.a),r["a"].component("apexchart",O.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(F)},router:xt}).$mount("#app")},5952:function(t,e,a){},"776f":function(t,e,a){"use strict";var r=a("5952"),n=a.n(r);n.a},"85ec":function(t,e,a){},bc22:function(t,e,a){},bd61:function(t,e,a){"use strict";var r=a("10ed"),n=a.n(r);n.a},e970:function(t,e,a){"use strict";var r=a("bc22"),n=a.n(r);n.a},ea04:function(t,e,a){},fe2e:function(t,e,a){"use strict";var r=a("ea04"),n=a.n(r);n.a}});
//# sourceMappingURL=app.756a38b5.js.map