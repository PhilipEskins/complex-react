(self.webpackChunkcomplex_react=self.webpackChunkcomplex_react||[]).push([[274],{7274:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(7294),r=s(3983),c=s(195),l=s(9669),n=s.n(l),o=s(9847);const i=function(e){const t=(0,a.useContext)(r.Z),[s,l]=(0,c.x)({searchTerm:"",results:[],show:"neither",requestCount:0});function i(e){27==e.keyCode&&t({type:"closeSearch"})}return(0,a.useEffect)((()=>(document.addEventListener("keyup",i),()=>document.removeEventListener("keyup",i))),[]),(0,a.useEffect)((()=>{if(s.searchTerm.trim()){l((e=>{e.show="loading"}));const e=setTimeout((()=>{l((e=>{e.requestCount++}))}),750);return()=>clearTimeout(e)}l((e=>{e.show="neither"}))}),[s.searchTerm]),(0,a.useEffect)((()=>{if(s.requestCount){const e=n().CancelToken.source();return async function(){try{const t=await n().post("/search",{searchTerm:s.searchTerm},{cancelToken:e.token});l((e=>{e.results=t.data,e.show="results"}))}catch(e){console.log("There was an error with ProfilePosts"),console.log(e.response.data)}}(),()=>e.cancel()}}),[s.requestCount]),a.createElement(a.Fragment,null,a.createElement("div",{className:"search-overlay-top shadow-sm"},a.createElement("div",{className:"container container--narrow"},a.createElement("label",{htmlFor:"live-search-field",className:"search-overlay-icon"},a.createElement("i",{className:"fas fa-search"})),a.createElement("input",{onChange:function(e){const t=e.target.value;l((e=>{e.searchTerm=t}))},autoFocus:!0,type:"text",autoComplete:"off",id:"live-search-field",className:"live-search-field",placeholder:"What are you interested in?"}),a.createElement("span",{onClick:()=>t({type:"closeSearch"}),className:"close-live-search"},a.createElement("i",{className:"fas fa-times-circle"})))),a.createElement("div",{className:"search-overlay-bottom"},a.createElement("div",{className:"container container--narrow py-3"},a.createElement("div",{className:"circle-loader "+("loading"==s.show?"circle-loader--visible":"")}),a.createElement("div",{className:"live-search-results "+("results"==s.show?"live-search-results--visible":"")},Boolean(s.results.length)&&a.createElement("div",{className:"list-group shadow-sm"},a.createElement("div",{className:"list-group-item active"},a.createElement("strong",null,"Search Results")," (",s.results.length," ",s.results.length>1?"items":"item"," found)"),s.results.map((e=>a.createElement(o.Z,{post:e,key:e._id,onClick:()=>t({type:"closeSearch"})})))),Boolean(!s.results.length)&&a.createElement("p",{className:"alert alert-danger text-center shadow-sm"},"Sorry, nothing was found")))))}}}]);