(this["webpackJsonpnetflix-dashboard"]=this["webpackJsonpnetflix-dashboard"]||[]).push([[0],{101:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(6),a=n.n(r),i=(n(86),n(87),n(14)),o=n(9),s=n(138),l=n(53),d=n.n(l),j=n(69),u=n(24),b=function(t,e){var n=Object(c.useState)(null),r=Object(u.a)(n,2),a=r[0],i=r[1];function o(){return(o=Object(j.a)(d.a.mark((function e(n){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,i(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(t){o.apply(this,arguments)}(e)}),[t]),a},h=n(43),p=n(2),x=function(t){var e,n={color:"#FFF"};return Object(p.jsx)(h.a,{width:"95vw",height:null!==(e=null===t||void 0===t?void 0:t.height)&&void 0!==e?e:"33vh",chartType:"BarChart",loader:Object(p.jsx)("div",{children:"Loading Chart"}),data:t.data,options:{title:t.title,titleTextStyle:{color:n},chartArea:{width:"80%"},colors:["#0f4c75"],hAxis:{minValue:0,textStyle:n,titleTextStyle:n,gridlines:{multiple:1}},vAxis:{title:t.axisTitle,gridlines:{color:"#787878"},textStyle:n,titleTextStyle:n,format:"0"},legend:{textStyle:n},backgroundColor:{fill:"transparent"}}})};var O=function(t){var e=null!=t.data?t.data.Movie:0,n=null!=t.data?t.data["TV Show"]:0;return null===t.data?Object(p.jsx)("p",{children:"Loading..."}):Object(p.jsx)(x,{title:"Netflix contains "+e+" movies and "+n+" TV Shows",data:[["Type","Number of Titles"],["Movies",e],["TV Shows",n]],axisTitle:"Type"})};var f=function(t){var e=null===t.data?[]:Object.keys(t.data),n=[["Director Name","Number of Titles",{role:"annotation"}]].concat(e.map((function(e){return function(e){return[e,t.data[e],t.data[e]]}(e)})));return null===n?Object(p.jsx)("p",{children:"Loading..."}):Object(p.jsx)(x,{title:"Top 5 directors with the most titles",data:n,height:"50vh",axisTitle:"Director"})};var m=function(t){var e=null===t.data?[]:Object.keys(t.data),n=[["Country Name","Number of Titles",{role:"annotation"}]].concat(e.map((function(e){return[e,t.data[e],t.data[e]]})));return null===n?Object(p.jsx)("p",{children:"Loading..."}):Object(p.jsx)(x,{title:"Top 5 cast members with the most titles",data:n,height:"50vh",axisTitle:"Cast Member"})};var v=function(t){var e=null===t.data?[]:Object.keys(t.data),n=[["Country","Number of Titles",{role:"annotation"}]].concat(e.map((function(e){return[e,t.data[e],t.data[e]]})));return null===n?Object(p.jsx)("p",{children:"Loading..."}):Object(p.jsx)(x,{title:"Top 10 countries with the most titles",data:n,height:"60vh",axisTitle:"Country"})};var y=function(t){var e=null===t.data?[]:Object.keys(t.data),n=[["Year","Number of Titles",{role:"annotation"}]].concat(e.map((function(e){return[e,t.data[e],t.data[e]]})));return null===n?Object(p.jsx)("p",{children:"Loading..."}):Object(p.jsx)(x,{title:t.title,data:n,height:"60vh",axisTitle:"Year"})};var g=function(t){var e=null===t.data?[]:Object.keys(t.data),n=[["Listed In","Number of Titles",{role:"annotation"}]].concat(e.map((function(e){return[e,t.data[e],t.data[e]]})));return null===n?Object(p.jsx)("p",{children:"Loading..."}):Object(p.jsx)(x,{title:"Top 10 Categories titles are listed in",data:n,height:"60vh",axisTitle:"Listed In"})},w="https://dklitsch.pythonanywhere.com";var T=function(t){var e=b("".concat(w,"/type")),n=b("".concat(w,"/director/top5")),c=b("".concat(w,"/cast/top5")),r=b("".concat(w,"/country/top10")),a=b("".concat(w,"/releaseyear/top10")),o=b("".concat(w,"/releaseyear/bottom10")),s=b("".concat(w,"/listedin/top10")),l=b("".concat(w,"/movie?order=asc&take=5")),d=b("".concat(w,"/tvshow?order=asc&take=5"));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:"Hi, welcome to my Netflix Analysis Dashboard!"}),Object(p.jsx)("p",{children:"This dashboard displays some interesting statistics about Netflix titles. The goal is to present the data in an intuitive and accessable way."}),Object(p.jsxs)("p",{children:["This project is based on ",Object(p.jsx)("a",{href:"https://www.kaggle.com/shivamb/netflix-shows",target:"_blank",children:"this"})," dataset from Flixable. "]}),Object(p.jsx)(O,{data:e}),Object(p.jsx)(f,{data:n}),Object(p.jsx)("p",{children:"High release directors tend to release their titles in huge batches. For example, co-directors Jan Suter and Ra\xfal Campos released a wopping 12 titles in 2018 compared to the average director who has only a single title on Netflix."}),Object(p.jsx)("p",{children:'High release directors tend to have a large number of newer releases. The oldest film by any top 5 director is 2008\'s "A Very Special Love" by Cathy Garcia-Molina. None of the top 5 directors have any titles released before the 2000s.'}),Object(p.jsx)("p",{children:"Only around 7% of TV shows list directors, notable exceptions being documentarians like Alastair Fothergill with 3 titles and Ken Burns with 2."}),Object(p.jsx)(m,{data:c}),Object(p.jsx)(v,{data:r}),Object(p.jsx)("h2",{children:"Netflix skews heavily towards newer titles, half of all titles were released after 2017!"}),Object(p.jsx)("img",{src:"".concat(w,"/releaseyear/yearchart.png")}),Object(p.jsx)(y,{data:a,title:"10 years with the most Netflix titles"}),Object(p.jsx)(y,{data:o,title:"10 years with the least Netflix titles"}),Object(p.jsx)("h2",{children:"Top 5 Oldest movies"}),Object(p.jsx)("ol",{children:null!=l&&l.map((function(t){var e,n;return Object(p.jsxs)("li",{children:[t.title," by ",null!==(n=t.director,e=n.split(", ").map((function(t){return Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/director/".concat(t),children:t})})).reduce((function(t,e){return[t,", ",e]})))&&void 0!==e?e:"unlisted"," - ",t.release_year]},t.title)}))}),Object(p.jsx)("h2",{children:"Top 5 Oldest TV shows"}),Object(p.jsx)("ol",{children:null!=d&&d.map((function(t){return Object(p.jsxs)("li",{children:[t.title," - ",t.release_year]},t.title)}))}),Object(p.jsx)(g,{data:s})]})},N=n(78),k=n(141);var F=function(t){var e=Object(o.g)().name,n=b("".concat(w,"/director/").concat(e)),c=b("".concat(w,"/director/").concat(e,"/director collabs")),r=b("".concat(w,"/director/").concat(e,"/cast collabs")),a=null===c?[]:Object.keys(c),s=(null===r?[]:Object.keys(r)).map((function(t){return{name:t,count:r[t]}}));return Object(p.jsx)("div",{children:null!=n&&Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:function(t){return t.replace(/\w\S*/g,(function(t){return t.replace(/^\w/,(function(t){return t.toUpperCase()}))}))}(e)}),Object(p.jsxs)("h4",{children:[n.length," Titles: "]}),Object(p.jsx)("p",{children:n.map((function(t){return Object(p.jsxs)("div",{children:[t.title," - ",(e=t.country,console.log(e.split(", ").map((function(t){return Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/country/".concat(t),children:"country"})}))),e.split(", ").map((function(t){return Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/country/".concat(t),children:t})})).reduce((function(t,e){return[t,", ",e]})))," - ",t.release_year]},t.title);var e}))}),Object(p.jsx)("h4",{children:"Frequent co-directors: "}),Object(p.jsx)("p",{children:a.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/director/".concat(t),children:t}),": ",c[t]," titles"]},t)}))}),Object(p.jsx)("h4",{children:"Frequent collaborators: "}),Object(p.jsx)("p",{children:s.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/cast/".concat(t.name),children:t.name}),": ",t.count," titles"]},t.name)}))})]})})},C=n(77),A=n.n(C),S=n(12),L=n(137),I=n(139),D=n(136),R=n(142),V=n(145),B=n(140),q=n(56),E=n(32),M=n(144),P=(n(94),n(75)),_=n.n(P),H=n(132),U=n(143),J=Object(H.a)((function(t){var e;return{search:Object(E.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(S.c)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.c)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(e={padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},Object(E.a)(e,t.breakpoints.up("md"),{width:"60ch"}),Object(E.a)(e,"color","white"),e),typography:{padding:t.spacing(1)}}}));function Y(t){var e,n=J(),r=Object(c.useState)(""),a=Object(u.a)(r,2),i=a[0],s=a[1],l=Object(c.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],x=Object(c.useState)(""),O=Object(u.a)(x,2),f=O[0],m=O[1],v=null!==(e=b("".concat(w,"/searchterms/").concat(j)))&&void 0!==e?e:[];return Object(p.jsxs)("div",{children:[""!==f&&Object(p.jsx)(o.a,{to:f}),Object(p.jsxs)("div",{className:n.search,children:[Object(p.jsx)("div",{className:n.searchIcon,children:Object(p.jsx)(_.a,{})}),Object(p.jsx)("form",{onSubmit:function(t){null!=(null===i||void 0===i?void 0:i.type)&&null!=(null===i||void 0===i?void 0:i.term)&&m("/Netflix-Analysis-Frontend/".concat(null===i||void 0===i?void 0:i.type,"/").concat(null===i||void 0===i?void 0:i.term)),t.preventDefault()},children:Object(p.jsx)(U.a,{className:n.inputRoot,options:v,getOptionLabel:function(t){return""!=t?"".concat(t.type,": ").concat(t.term):""},size:"small",value:i,onChange:function(t,e){s(e)},inputValue:j,onInputChange:function(t,e){h(e)},renderInput:function(t){return Object(p.jsx)("div",{ref:t.InputProps.ref,children:Object(p.jsx)(M.a,Object(q.a)(Object(q.a)({style:{width:400},"aria-describedby":"search-box",type:"text"},t.inputProps),{},{className:n.inputInput}))})}})})]})]})}var z=n(104),G=Object(z.a)((function(t){return{popover:{backgroundColor:Object(S.c)(t.palette.common.white,.15),padding:".5em",borderRadius:"1em",border:"1px solid black"}}}));function K(t){var e=G(),n=Object(c.useState)(null),r=Object(u.a)(n,2),a=r[0],o=r[1],l=Object(c.useRef)(),d=Object(c.useState)(!0),j=Object(u.a)(d,2),b=j[0],h=j[1],x=function(){o(null)};return Object(c.useEffect)((function(){b&&l.current.focus()})),Object(p.jsx)(L.a,{color:"primary",position:"fixed",children:Object(p.jsx)(s.a,{children:Object(p.jsxs)(I.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(p.jsxs)(D.a,{edge:"start",color:"inherit","aria-label":"menu",children:[Object(p.jsx)(A.a,{onClick:function(t){o(t.currentTarget)}}),Object(p.jsx)(R.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:x,children:Object(p.jsx)(V.a,{onClick:x,children:Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend",children:"Home"})})})]}),Object(p.jsx)("div",{children:Object(p.jsxs)(I.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[b&&Object(p.jsx)(B.a,{ref:l,onBlur:function(){h(!1)},tabindex:"0",className:e.popover,children:"Use this box to search for directors, actors and more ->"}),Object(p.jsx)(Y,{}),Object(p.jsx)(B.a,{variant:"h6",children:"Netflix Analysis Dashboard"})]})})]})})})}var Q=function(t){var e=Object(o.g)().name,n=b("".concat(w,"/cast/").concat(e)),c=b("".concat(w,"/cast/").concat(e,"/director collabs")),r=b("".concat(w,"/director/").concat(e,"/cast collabs")),a=null===c?[]:Object.keys(c),s=(null===r?[]:Object.keys(r)).map((function(t){return{name:t,count:r[t]}}));return Object(p.jsx)("div",{children:null!=n&&Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:function(t){return t.replace(/\w\S*/g,(function(t){return t.replace(/^\w/,(function(t){return t.toUpperCase()}))}))}(e)}),Object(p.jsxs)("h4",{children:[n.length," Titles: "]}),Object(p.jsx)("p",{children:n.map((function(t){return Object(p.jsxs)("div",{children:[t.title," - ",(e=t.country,e.split(", ").map((function(t){return Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/country/".concat(t),children:t})})).reduce((function(t,e){return[t,", ",e]})))," - ",t.release_year]},t.title);var e}))}),Object(p.jsx)("h4",{children:"Frequent directed by: "}),Object(p.jsx)("p",{children:a.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/director/".concat(t),children:t}),": ",c[t]," titles"]},t)}))}),Object(p.jsx)("h4",{children:"Frequent collaborators: "}),Object(p.jsx)("p",{children:s.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/cast/".concat(t.name),children:t.name}),": ",t.count," titles"]},t.name)}))})]})})},W=function(t){return t.replace(/\w\S*/g,(function(t){return t.replace(/^\w/,(function(t){return t.toUpperCase()}))}))};var X=function(t){var e=Object(o.g)().name,n=b("".concat(w,"/country/").concat(e)),c=null===n?[]:Object.keys(n.topDirectors),r=null===n?[]:Object.keys(n.topCast),a=c.map((function(t){return{name:t,count:n.topDirectors[t]}})).sort((function(t,e){return e.count-t.count})),s=r.map((function(t){return{name:t,count:n.topCast[t]}})).sort((function(t,e){return e.count-t.count}));return Object(p.jsx)("div",{children:null!=n&&Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:W(e)}),Object(p.jsxs)("h4",{children:[n.titleCount," Titles"]}),Object(p.jsx)("img",{src:"".concat(w,"/country/").concat(e,"/yearchart.png")}),Object(p.jsx)("h4",{children:"Prolific directors: "}),Object(p.jsx)("p",{children:a.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/director/".concat(t.name),children:t.name}),": ",t.count," titles"]},t.name)}))}),Object(p.jsx)("h4",{children:"Frequent cast members: "}),Object(p.jsx)("p",{children:s.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{to:"/Netflix-Analysis-Frontend/cast/".concat(t.name),children:t.name}),": ",t.count," titles"]},t.name)}))})]})})},Z=Object(N.a)({palette:{primary:{main:"#0f4c75"}}});var $=function(){return Object(p.jsx)(i.a,{children:Object(p.jsx)(k.a,{theme:Z,children:Object(p.jsxs)("div",{class:"App",children:[Object(p.jsx)(K,{}),Object(p.jsx)(s.a,{}),Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/Netflix-Analysis-Frontend/director/:name",children:Object(p.jsx)(F,{})}),Object(p.jsx)(o.b,{path:"/Netflix-Analysis-Frontend/cast/:name",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(o.b,{path:"/Netflix-Analysis-Frontend/country/:name",children:Object(p.jsx)(X,{})}),Object(p.jsx)(o.b,{path:"/",component:T})]})]})})})},tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};a.a.render(Object(p.jsx)($,{}),document.getElementById("root")),tt()},86:function(t,e,n){},87:function(t,e,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.f94f8c78.chunk.js.map