(self.webpackChunkcomplex_react=self.webpackChunkcomplex_react||[]).push([[504],{9504:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var o=a(7294),l=a(1387),n=a(9669),r=a.n(n),s=a(5977),c=a(3983),m=a(7564);const u=(0,s.EN)((function(e){const[t,a]=(0,o.useState)(),[n,s]=(0,o.useState)(),u=(0,o.useContext)(c.Z),p=(0,o.useContext)(m.Z);return o.createElement(l.Z,{title:"Create New Post"},o.createElement("form",{onSubmit:async function(a){a.preventDefault();try{const a=await r().post("/create-post",{title:t,body:n,token:p.user.token});u({type:"flashMessage",value:"New Post Created!"}),e.history.push(`/post/${a.data}`),console.log("new post created")}catch(a){console.log(a,"There was a problem")}}},o.createElement("div",{className:"form-group"},o.createElement("label",{htmlFor:"post-title",className:"text-muted mb-1"},o.createElement("small",null,"Title")),o.createElement("input",{onChange:e=>a(e.target.value),autoFocus:!0,name:"title",id:"post-title",className:"form-control form-control-lg form-control-title",type:"text",placeholder:"",autoComplete:"off"})),o.createElement("div",{className:"form-group"},o.createElement("label",{htmlFor:"post-body",className:"text-muted mb-1 d-block"},o.createElement("small",null,"Body Content")),o.createElement("textarea",{onChange:e=>s(e.target.value),name:"body",id:"post-body",className:"body-content tall-textarea form-control",type:"text"})),o.createElement("button",{className:"btn btn-primary"},"Save New Post")))}))}}]);