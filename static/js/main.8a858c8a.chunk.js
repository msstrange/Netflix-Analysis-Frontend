(this["webpackJsonpnetflix-dashboard"]=this["webpackJsonpnetflix-dashboard"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),c=(a(13),a(14),a(4)),s=a(1),l=function(t){var e,a={color:"#FFF"};return Object(s.jsx)(c.a,{width:"95vw",height:null!==(e=null===t||void 0===t?void 0:t.height)&&void 0!==e?e:"33vh",chartType:"BarChart",loader:Object(s.jsx)("div",{children:"Loading Chart"}),data:t.data,options:{title:t.title,titleTextStyle:{color:a},chartArea:{width:"80%"},colors:["#0f4c75"],hAxis:{minValue:0,textStyle:a,titleTextStyle:a},vAxis:{title:t.axisTitle,gridlines:{color:"#787878"},textStyle:a,titleTextStyle:a,format:"0"},legend:{textStyle:a},backgroundColor:{fill:"transparent"}}})},d=a(5),u=a.n(d),h=a(7),j=a(8),p=function(t){var e=Object(n.useState)(null),a=Object(j.a)(e,2),i=a[0],r=a[1];function o(){return(o=Object(h.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[t]),i};var x=function(t){var e=null!=t.data?t.data.Movie:0,a=null!=t.data?t.data["TV Show"]:0;return null===t.data?Object(s.jsx)("p",{children:"Loading..."}):Object(s.jsx)(l,{title:"Netflix contains "+e+" movies and "+a+" TV Shows",data:[["Type","Number of Titles"],["Movies",e],["TV Shows",a]],axisTitle:"Type"})};var b=function(t){var e=null===t.data?[]:Object.keys(t.data),a=[["Director Name","Number of Titles",{role:"annotation"}]].concat(e.map((function(e){return[e,t.data[e],t.data[e]]})));return null===a?Object(s.jsx)("p",{children:"Loading..."}):Object(s.jsx)(l,{title:"Top 5 directors with the most titles",data:a,height:"50vh",axisTitle:"Director"})};var f=function(t){var e=null===t.data?[]:Object.keys(t.data),a=[["Cast Member","Number of Titles",{role:"annotation"}]].concat(e.map((function(e){return[e,t.data[e],t.data[e]]})));return null===a?Object(s.jsx)("p",{children:"Loading..."}):Object(s.jsx)(l,{title:"Top 5 directors with the most titles",data:a,height:"50vh",axisTitle:"Cast Member"})},v="https://dklitsch.pythonanywhere.com";var O=function(){var t=p("".concat(v,"/type")),e=p("".concat(v,"/director/top5")),a=p("".concat(v,"/cast/top5"));return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("p",{children:"Hi, welcome to my Netflix Analysis Dashboard."}),Object(s.jsx)("p",{children:"The goal for the app is take information about Netflix titles and present it in a way that's easy to use and understand."}),Object(s.jsx)(x,{data:t}),Object(s.jsx)(b,{data:e}),Object(s.jsx)(f,{data:a})]})})},m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;a(t),n(t),i(t),r(t),o(t)}))};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),m()}},[[20,1,2]]]);
//# sourceMappingURL=main.8a858c8a.chunk.js.map