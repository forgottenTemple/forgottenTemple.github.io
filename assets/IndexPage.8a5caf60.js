import{ac as w,aF as O,an as x,ap as l,aq as b,ar as e,au as t,a_ as J,aw as y,ax as g,as as a,av as V,aP as h,Q as C,r as _,aN as q,b0 as D,aS as F,A as I,J as G,ai as H,by as K,C as W,ao as X,aK as Y,aJ as Z,u as ee,a as te,n as B,P as ae,d as T,aR as se,aQ as A,b9 as E,cg as oe,ay as le,ch as ne,bE as re,aV as ue}from"./index.6def9867.js";import{Q as ie}from"./QPage.a93271a6.js";import{Q as ce}from"./QImg.7529f41e.js";import{Q as de}from"./QForm.f30bae85.js";import{u as me}from"./useValidations.2c9684d2.js";const pe={key:0,class:"q-pa-md q-mb-lg text-center"},fe=w({__name:"LogoHero",props:{logo:{type:String||"",required:!1,default:""}},setup(m){const r=O("$theme"),{t:o}=x();return(p,v)=>{var u;return l(),b("div",null,[m.logo?(l(),b("div",pe,[e(ce,{alt:t(o)("productTitle"),src:m.logo,style:{"max-width":"400px"},contain:"","no-default-spinner":"",center:""},null,8,["alt","src"])])):(l(),b("h1",{key:1,class:J([{"text-white":!!((u=t(r))!=null&&u.bgColor)},"text-center text-h2 q-my-md"])},y(t(o)("productTitle")),3))])}}}),_e={class:"row items-center justify-between"},ge={class:"col-auto text-bold"},M=w({__name:"LoginTitle",setup(m){const{t:r}=x();return(o,p)=>(l(),g(h,null,{default:a(()=>[V("div",_e,[V("div",ge,y(t(r)("loginLabel")),1)])]),_:1}))}}),be={class:"col-xs-12 col-md"},N=w({__name:"ForgottenPasswordButton",setup(m){const{t:r}=x();return(o,p)=>(l(),b("div",be,[e(C,{label:t(r)("buttons.forgottenPassword"),color:"primary",flat:"",class:"full-width",to:"/reset-password"},null,8,["label"])]))}}),ve={class:"col-xs-12 col-md"},he=w({__name:"RegisterButton",setup(m){const{t:r}=x();return(o,p)=>(l(),b("div",ve,[e(C,{label:t(r)("buttons.register"),color:"primary",flat:"",class:"full-width",to:"/register","data-test":"register-button"},null,8,["label"])]))}}),R=w({__name:"LoginForm",emits:["onSubmitLoginForm"],setup(m,{emit:r}){const{t:o,te:p}=x(),v=r,{isRequired:u,isEmail:P}=me(),k=_(""),Q=_(""),f=_(!1),i=_(!1),c=_(!1),$=()=>{v("onSubmitLoginForm",{username:k,password:Q,remember:f,showPassword:c})};return(S,s)=>(l(),b("div",null,[e(de,{onSubmit:$},{default:a(()=>[e(h,null,{default:a(()=>[t(p)("auth.dealerPrompt")?(l(),g(D,{key:0,class:"bg-warning q-mb-md rounded-borders"},{default:a(()=>[q(y(t(o)("auth.dealerPrompt")),1)]),_:1})):F("",!0),e(I,{modelValue:k.value,"onUpdate:modelValue":s[0]||(s[0]=d=>k.value=d),label:t(o)("forms.email"),error:i.value,rules:[t(u),t(P)],type:"text","lazy-rules":"ondemand","data-test":"login-email",autocomplete:"email",onFocus:s[1]||(s[1]=()=>i.value=!1)},null,8,["modelValue","label","error","rules"]),e(I,{modelValue:Q.value,"onUpdate:modelValue":s[3]||(s[3]=d=>Q.value=d),label:t(o)("forms.password"),error:i.value,rules:[t(u)],type:c.value?"text":"password","lazy-rules":"ondemand","data-test":"login-password",autocomplete:"current-password",onFocus:s[4]||(s[4]=()=>i.value=!1)},{append:a(()=>[e(G,{name:c.value?"fad fa-eye-slash":"fad fa-eye",class:"cursor-pointer",onClick:s[2]||(s[2]=d=>c.value=!c.value)},{default:a(()=>[e(H,{delay:300},{default:a(()=>[q(y(t(o)(c.value?"buttons.hidePassword":"buttons.showPassword")),1)]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue","label","error","rules","type"]),t(K)()?F("",!0):(l(),g(W,{key:1,modelValue:f.value,"onUpdate:modelValue":s[5]||(s[5]=d=>f.value=d),label:t(o)("buttons.rememberMe")},null,8,["modelValue","label"]))]),_:1}),e(h,{class:"q-gutter-y-md"},{default:a(()=>[e(C,{label:t(o)("buttons.login"),type:"submit",color:"primary",class:"block full-width","data-test":"login-button"},null,8,["label"])]),_:1})]),_:1})]))}}),ye={class:"row justify-center"},we={class:"col-xs-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 q-px-md"},xe={key:0},Pe=w({__name:"IndexPage",setup(m){const o=X().platform.is.capacitor,p=Y(),v=Z(),{t:u}=x(),P=ee(),{isNetworkConnected:k}=te(P),Q=_(!1),f=_(!1),i=B(()=>p.query.redirect),c=B(()=>le("logo.png")),$=(n,L)=>{typeof L=="function"&&n.data.auth==="passport"&&L(n.data)},S=async n=>{const{username:L,password:U,remember:z}=n;await ne().login({email:L.value,password:U.value,remember:z.value},i.value,v)&&(Q.value=!0,re("negative"))},s=n=>$(n,()=>{n.data.auth==="passport"&&v.push(i.value||"/home")}),d=async()=>{try{return(await ue.get("/users/isAuthenticated")).status===200}catch{return!1}},j=()=>f.value=!f.value;return ae(async()=>{await T(!0),window.addEventListener("message",s);const n=await d();await T(!1),n&&v.push(i.value||"/home")}),se(()=>{window.removeEventListener("message",s)}),(n,L)=>(l(),g(ie,{padding:""},{default:a(()=>[V("div",ye,[V("div",we,[e(fe,{logo:c.value},null,8,["logo"]),t(o)?(l(),g(A,{key:0,flat:""},{default:a(()=>[f.value?(l(),g(h,{key:1},{default:a(()=>[e(oe,{appear:"","enter-active-class":"animated fadeIn slower delay-1.5s","leave-active-class":"animated fadeOut"},{default:a(()=>[e(M,{key:"login-title"}),e(E,{key:"login-separator",inset:""}),e(R,{key:"login-form",onOnSubmitLoginForm:S}),e(N,{key:"forgotten-password"})]),_:1})]),_:1})):(l(),b("div",xe,[e(h,null,{default:a(()=>[e(C,{class:"text-center text-h4 block full-width q-pa-xl",color:"primary",onClick:j},{default:a(()=>[q(y(t(u)("buttons.loginMobile")),1)]),_:1})]),_:1}),e(h,{class:"row justify-center"},{default:a(()=>[e(C,{class:"text-center text-h4 full-width q-pa-xl",color:"primary",disable:!t(k),to:"/register"},{default:a(()=>[q(y(t(u)("buttons.register")),1)]),_:1},8,["disable"])]),_:1})]))]),_:1})):(l(),g(A,{key:1,flat:""},{default:a(()=>[e(M),e(E,{inset:""}),e(R,{onOnSubmitLoginForm:S}),e(N),e(he)]),_:1}))])])]),_:1}))}});export{Pe as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhQYWdlLjhhNWNhZjYwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9sb2dpbi9Mb2dvSGVyby52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9sb2dpbi9Mb2dpblRpdGxlLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xvZ2luL0ZvcmdvdHRlblBhc3N3b3JkQnV0dG9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdGVyQnV0dG9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvSW5kZXhQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiB2LWlmPVwibG9nb1wiIGNsYXNzPVwicS1wYS1tZCBxLW1iLWxnIHRleHQtY2VudGVyXCI+XG4gICAgICA8cS1pbWdcbiAgICAgICAgOmFsdD1cInQoJ3Byb2R1Y3RUaXRsZScpXCJcbiAgICAgICAgOnNyYz1cImxvZ29cIlxuICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogNDAwcHhcIlxuICAgICAgICBjb250YWluXG4gICAgICAgIG5vLWRlZmF1bHQtc3Bpbm5lclxuICAgICAgICBjZW50ZXJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGgxXG4gICAgICB2LWVsc2VcbiAgICAgIDpjbGFzcz1cInsgJ3RleHQtd2hpdGUnOiAhIXRoZW1lPy5iZ0NvbG9yIH1cIlxuICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LWgyIHEtbXktbWRcIlxuICAgID5cbiAgICAgIHt7IHQoJ3Byb2R1Y3RUaXRsZScpIH19XG4gICAgPC9oMT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdzcmMvYm9vdC90aGVtZSc7XG5cbmNvbnN0IHRoZW1lID0gaW5qZWN0PFRoZW1lPignJHRoZW1lJyk7XG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuZGVmaW5lUHJvcHMoe1xuICBsb2dvOiB7IHR5cGU6IFN0cmluZyB8fCAnJywgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAnJyB9LFxufSk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZC1zZWN0aW9uPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHRleHQtYm9sZFwiPlxuICAgICAgICB7eyB0KCdsb2dpbkxhYmVsJykgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtY2FyZC1zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWRcIj5cbiAgICA8cS1idG5cbiAgICAgIDpsYWJlbD1cInQoJ2J1dHRvbnMuZm9yZ290dGVuUGFzc3dvcmQnKVwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgZmxhdFxuICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoXCJcbiAgICAgIHRvPVwiL3Jlc2V0LXBhc3N3b3JkXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kXCI+XG4gICAgPHEtYnRuXG4gICAgICA6bGFiZWw9XCJ0KCdidXR0b25zLnJlZ2lzdGVyJylcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIGZsYXRcbiAgICAgIGNsYXNzPVwiZnVsbC13aWR0aFwiXG4gICAgICB0bz1cIi9yZWdpc3RlclwiXG4gICAgICBkYXRhLXRlc3Q9XCJyZWdpc3Rlci1idXR0b25cIlxuICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cS1mb3JtIEBzdWJtaXQ9XCJvbkxvZ2luXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWJhbm5lclxuICAgICAgICAgIHYtaWY9XCJ0ZSgnYXV0aC5kZWFsZXJQcm9tcHQnKVwiXG4gICAgICAgICAgY2xhc3M9XCJiZy13YXJuaW5nIHEtbWItbWQgcm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHQoJ2F1dGguZGVhbGVyUHJvbXB0JykgfX1cbiAgICAgICAgPC9xLWJhbm5lcj5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwidXNlcm5hbWVcIlxuICAgICAgICAgIDpsYWJlbD1cInQoJ2Zvcm1zLmVtYWlsJylcIlxuICAgICAgICAgIDplcnJvcj1cImF1dGhFcnJvclwiXG4gICAgICAgICAgOnJ1bGVzPVwiW2lzUmVxdWlyZWQsIGlzRW1haWxdXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbGF6eS1ydWxlcz1cIm9uZGVtYW5kXCJcbiAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbi1lbWFpbFwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgIEBmb2N1cz1cIigpID0+IChhdXRoRXJyb3IgPSBmYWxzZSlcIlxuICAgICAgICAvPlxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgOmxhYmVsPVwidCgnZm9ybXMucGFzc3dvcmQnKVwiXG4gICAgICAgICAgOmVycm9yPVwiYXV0aEVycm9yXCJcbiAgICAgICAgICA6cnVsZXM9XCJbaXNSZXF1aXJlZF1cIlxuICAgICAgICAgIDp0eXBlPVwic2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiXG4gICAgICAgICAgbGF6eS1ydWxlcz1cIm9uZGVtYW5kXCJcbiAgICAgICAgICBkYXRhLXRlc3Q9XCJsb2dpbi1wYXNzd29yZFwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgQGZvY3VzPVwiKCkgPT4gKGF1dGhFcnJvciA9IGZhbHNlKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgI2FwcGVuZD5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgOm5hbWU9XCJzaG93UGFzc3dvcmQgPyAnZmFkIGZhLWV5ZS1zbGFzaCcgOiAnZmFkIGZhLWV5ZSdcIlxuICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd1Bhc3N3b3JkID0gIXNob3dQYXNzd29yZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLXRvb2x0aXAgOmRlbGF5PVwiMzAwXCI+XG4gICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgIHQoXG4gICAgICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgID8gJ2J1dHRvbnMuaGlkZVBhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ2J1dHRvbnMuc2hvd1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgICAgPC9xLWljb24+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgIHYtaWY9XCIhY2hlY2tJc01vYmlsZUFwcCgpXCJcbiAgICAgICAgICB2LW1vZGVsPVwicmVtZW1iZXJcIlxuICAgICAgICAgIDpsYWJlbD1cInQoJ2J1dHRvbnMucmVtZW1iZXJNZScpXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cInEtZ3V0dGVyLXktbWRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgOmxhYmVsPVwidCgnYnV0dG9ucy5sb2dpbicpXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzPVwiYmxvY2sgZnVsbC13aWR0aFwiXG4gICAgICAgICAgZGF0YS10ZXN0PVwibG9naW4tYnV0dG9uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWZvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IHVzZVZhbGlkYXRpb25zIH0gZnJvbSAnc3JjL2NvbXBvc2FibGVzL3VzZVZhbGlkYXRpb25zJztcbmltcG9ydCBjaGVja0lzTW9iaWxlQXBwIGZyb20gJ3NyYy91dGlscy9jaGVja0lzTW9iaWxlQXBwJztcblxuY29uc3QgeyB0LCB0ZSB9ID0gdXNlSTE4bigpO1xuY29uc3QgJGVtaXQgPSBkZWZpbmVFbWl0cyhbJ29uU3VibWl0TG9naW5Gb3JtJ10pO1xuY29uc3QgeyBpc1JlcXVpcmVkLCBpc0VtYWlsIH0gPSB1c2VWYWxpZGF0aW9ucygpO1xuXG5jb25zdCB1c2VybmFtZSA9IHJlZihcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgcHJvY2Vzcy5lbnYuREVWX1VTRVJOQU1FXG4gICAgPyBwcm9jZXNzLmVudi5ERVZfVVNFUk5BTUVcbiAgICA6ICcnXG4pO1xuY29uc3QgcGFzc3dvcmQgPSByZWYoXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIHByb2Nlc3MuZW52LkRFVl9QQVNTV09SRFxuICAgID8gcHJvY2Vzcy5lbnYuREVWX1BBU1NXT1JEXG4gICAgOiAnJ1xuKTtcbmNvbnN0IHJlbWVtYmVyID0gcmVmKGNoZWNrSXNNb2JpbGVBcHAoKSA/IHRydWUgOiBmYWxzZSk7XG5jb25zdCBhdXRoRXJyb3IgPSByZWYoZmFsc2UpO1xuY29uc3Qgc2hvd1Bhc3N3b3JkID0gcmVmKGZhbHNlKTtcblxuY29uc3Qgb25Mb2dpbiA9ICgpID0+IHtcbiAgJGVtaXQoJ29uU3VibWl0TG9naW5Gb3JtJywgeyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlbWVtYmVyLCBzaG93UGFzc3dvcmQgfSk7XG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1tZC01IGNvbC1sZy00IGNvbC14bC0zIHEtcHgtbWRcIj5cbiAgICAgICAgPExvZ29IZXJvIDpsb2dvPVwibG9nb1BhdGhcIiAvPlxuICAgICAgICA8cS1jYXJkIHYtaWY9XCJpc01vYmlsZVwiIGZsYXQ+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiIWlzQWN0aXZlXCI+XG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1oNCBibG9jayBmdWxsLXdpZHRoIHEtcGEteGxcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiYWN0aXZhdGVDb21wb25lbnRcIlxuICAgICAgICAgICAgICAgID57eyB0KCdidXR0b25zLmxvZ2luTW9iaWxlJykgfX08L3EtYnRuXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LWg0IGZ1bGwtd2lkdGggcS1wYS14bFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZT1cIiFpc05ldHdvcmtDb25uZWN0ZWRcIlxuICAgICAgICAgICAgICAgIHRvPVwiL3JlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgICA+e3sgdCgnYnV0dG9ucy5yZWdpc3RlcicpIH19PC9xLWJ0blxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiB2LWVsc2U+XG4gICAgICAgICAgICA8dHJhbnNpdGlvbi1ncm91cFxuICAgICAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICAgICAgZW50ZXItYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluIHNsb3dlciBkZWxheS0xLjVzXCJcbiAgICAgICAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZU91dFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMb2dpblRpdGxlIGtleT1cImxvZ2luLXRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIGtleT1cImxvZ2luLXNlcGFyYXRvclwiIGluc2V0IC8+XG4gICAgICAgICAgICAgIDxMb2dpbkZvcm0ga2V5PVwibG9naW4tZm9ybVwiIEBvbi1zdWJtaXQtbG9naW4tZm9ybT1cIm9uTG9naW5cIiAvPlxuICAgICAgICAgICAgICA8Rm9yZ290dGVuUGFzc3dvcmRCdXR0b24ga2V5PVwiZm9yZ290dGVuLXBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbi1ncm91cD5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgPHEtY2FyZCB2LWVsc2UgZmxhdD5cbiAgICAgICAgICA8TG9naW5UaXRsZSAvPlxuICAgICAgICAgIDxxLXNlcGFyYXRvciBpbnNldCAvPlxuICAgICAgICAgIDxMb2dpbkZvcm0gQG9uLXN1Ym1pdC1sb2dpbi1mb3JtPVwib25Mb2dpblwiIC8+XG4gICAgICAgICAgPEZvcmdvdHRlblBhc3N3b3JkQnV0dG9uIC8+XG4gICAgICAgICAgPFJlZ2lzdGVyQnV0dG9uIC8+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyByZWYsIGNvbXB1dGVkLCBvblVubW91bnRlZCwgb25CZWZvcmVNb3VudCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZSwgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IHsgcm9jdW1lbnRzQXBpIH0gZnJvbSAnc3JjL2Jvb3QvYXhpb3MnO1xuaW1wb3J0IHsgZ2V0VGhlbWVkQXNzZXRQYXRoIH0gZnJvbSAnc3JjL3RoZW1lcy9pbmRleCc7XG5pbXBvcnQgdXNlTG9jYWxMb2dpbiBmcm9tICdzcmMvY29tcG9zYWJsZXMvdXNlTG9jYWxMb2dpbic7XG5pbXBvcnQgdG9nZ2xlTG9hZGluZyBmcm9tICdzcmMvdXRpbHMvdG9nZ2xlTG9hZGluZyc7XG5pbXBvcnQgeyBwb3BUb2FzdCB9IGZyb20gJ3NyYy91dGlscy90b2FzdHMnO1xuaW1wb3J0IExvZ29IZXJvIGZyb20gJ3NyYy9jb21wb25lbnRzL2xvZ2luL0xvZ29IZXJvLnZ1ZSc7XG5pbXBvcnQgTG9naW5UaXRsZSBmcm9tICdzcmMvY29tcG9uZW50cy9sb2dpbi9Mb2dpblRpdGxlLnZ1ZSc7XG5pbXBvcnQgRm9yZ290dGVuUGFzc3dvcmRCdXR0b24gZnJvbSAnc3JjL2NvbXBvbmVudHMvbG9naW4vRm9yZ290dGVuUGFzc3dvcmRCdXR0b24udnVlJztcbmltcG9ydCBSZWdpc3RlckJ1dHRvbiBmcm9tICdzcmMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RlckJ1dHRvbi52dWUnO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICdzcmMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlJztcbmltcG9ydCB7IHVzZUNvcmVTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvY29yZS1zdG9yZSc7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcblxuY29uc3QgcXVhc2FyID0gdXNlUXVhc2FyKCk7XG5jb25zdCBpc01vYmlsZSA9IHF1YXNhci5wbGF0Zm9ybS5pcy5jYXBhY2l0b3I7XG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuY29uc3QgY29yZVN0b3JlID0gdXNlQ29yZVN0b3JlKCk7XG5jb25zdCB7IGlzTmV0d29ya0Nvbm5lY3RlZCB9ID0gc3RvcmVUb1JlZnMoY29yZVN0b3JlKTtcblxuY29uc3QgYXV0aEVycm9yID0gcmVmPGJvb2xlYW4+KGZhbHNlKTtcblxuY29uc3QgaXNBY3RpdmUgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuXG5jb25zdCByZWRpcmVjdFBhdGggPSBjb21wdXRlZCgoKSA9PiByb3V0ZS5xdWVyeS5yZWRpcmVjdCk7XG5jb25zdCBsb2dvUGF0aCA9IGNvbXB1dGVkKCgpID0+IGdldFRoZW1lZEFzc2V0UGF0aCgnbG9nby5wbmcnKSk7XG5cbmNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoXG4gIGU6IHsgZGF0YTogeyBhdXRoOiB1bmtub3duIH0gfSxcbiAgY2FsbGJhY2s6IChhcmcxOiB1bmtub3duKSA9PiB2b2lkXG4pID0+IHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiBlLmRhdGEuYXV0aCA9PT0gJ3Bhc3Nwb3J0Jykge1xuICAgIGNhbGxiYWNrKGUuZGF0YSk7XG4gIH1cbn07XG5cbmNvbnN0IG9uTG9naW4gPSBhc3luYyAodmFsOiBhbnkpID0+IHtcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlbWVtYmVyIH0gPSB2YWw7XG5cbiAgY29uc3QgZmFpbGVkID0gYXdhaXQgdXNlTG9jYWxMb2dpbigpLmxvZ2luKFxuICAgIHtcbiAgICAgIGVtYWlsOiB1c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC52YWx1ZSxcbiAgICAgIHJlbWVtYmVyOiByZW1lbWJlci52YWx1ZSxcbiAgICB9LFxuICAgIHJlZGlyZWN0UGF0aC52YWx1ZSBhcyBzdHJpbmcsXG4gICAgcm91dGVyXG4gICk7XG5cbiAgaWYgKGZhaWxlZCkge1xuICAgIGF1dGhFcnJvci52YWx1ZSA9IHRydWU7XG4gICAgcG9wVG9hc3QoJ25lZ2F0aXZlJyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUF1dGhDYWxsYmFjayA9IChlOiB7IGRhdGE6IHsgYXV0aDogdW5rbm93biB9IH0pID0+XG4gIGhhbmRsZU1lc3NhZ2UoZSwgKCkgPT4ge1xuICAgIGlmIChlLmRhdGEuYXV0aCA9PT0gJ3Bhc3Nwb3J0Jykge1xuICAgICAgcm91dGVyLnB1c2goKHJlZGlyZWN0UGF0aC52YWx1ZSBhcyBzdHJpbmcpIHx8ICcvaG9tZScpO1xuICAgIH1cbiAgfSk7XG5cbmNvbnN0IGNoZWNrSXNMb2dnZWRJbiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKGF3YWl0IHJvY3VtZW50c0FwaS5nZXQoJy91c2Vycy9pc0F1dGhlbnRpY2F0ZWQnKSkuc3RhdHVzID09PSAyMDA7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGFjdGl2YXRlQ29tcG9uZW50ID0gKCkgPT4gKGlzQWN0aXZlLnZhbHVlID0gIWlzQWN0aXZlLnZhbHVlKTtcblxub25CZWZvcmVNb3VudChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHRvZ2dsZUxvYWRpbmcodHJ1ZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlQXV0aENhbGxiYWNrKTtcbiAgY29uc3QgaXNMb2dnZWRJbiA9IGF3YWl0IGNoZWNrSXNMb2dnZWRJbigpO1xuICBhd2FpdCB0b2dnbGVMb2FkaW5nKGZhbHNlKTtcblxuICBpZiAoaXNMb2dnZWRJbikge1xuICAgIHJvdXRlci5wdXNoKChyZWRpcmVjdFBhdGgudmFsdWUgYXMgc3RyaW5nKSB8fCAnL2hvbWUnKTtcbiAgfVxufSk7XG5cbm9uVW5tb3VudGVkKCgpID0+IHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVBdXRoQ2FsbGJhY2spO1xufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJ0aGVtZSIsImluamVjdCIsInQiLCJ1c2VJMThuIiwidGUiLCIkZW1pdCIsIl9fZW1pdCIsImlzUmVxdWlyZWQiLCJpc0VtYWlsIiwidXNlVmFsaWRhdGlvbnMiLCJ1c2VybmFtZSIsInJlZiIsInBhc3N3b3JkIiwicmVtZW1iZXIiLCJhdXRoRXJyb3IiLCJzaG93UGFzc3dvcmQiLCJvbkxvZ2luIiwiaXNNb2JpbGUiLCJ1c2VRdWFzYXIiLCJyb3V0ZSIsInVzZVJvdXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29yZVN0b3JlIiwidXNlQ29yZVN0b3JlIiwiaXNOZXR3b3JrQ29ubmVjdGVkIiwic3RvcmVUb1JlZnMiLCJpc0FjdGl2ZSIsInJlZGlyZWN0UGF0aCIsImNvbXB1dGVkIiwibG9nb1BhdGgiLCJnZXRUaGVtZWRBc3NldFBhdGgiLCJoYW5kbGVNZXNzYWdlIiwiZSIsImNhbGxiYWNrIiwidmFsIiwidXNlTG9jYWxMb2dpbiIsInBvcFRvYXN0IiwiaGFuZGxlQXV0aENhbGxiYWNrIiwiY2hlY2tJc0xvZ2dlZEluIiwicm9jdW1lbnRzQXBpIiwiYWN0aXZhdGVDb21wb25lbnQiLCJvbkJlZm9yZU1vdW50IiwidG9nZ2xlTG9hZGluZyIsImlzTG9nZ2VkSW4iLCJvblVubW91bnRlZCJdLCJtYXBwaW5ncyI6ImdwQkEwQk0sTUFBQUEsRUFBUUMsRUFBYyxRQUFRLEVBRTlCLENBQUUsRUFBQUMsR0FBTUMsa2RDakJSLEtBQUEsQ0FBRSxFQUFBRCxHQUFNQywwTENFUixLQUFBLENBQUUsRUFBQUQsR0FBTUMsNk9DQ1IsS0FBQSxDQUFFLEVBQUFELEdBQU1DLDZQQzZEZCxLQUFNLENBQUUsRUFBQUQsRUFBRyxHQUFBRSxDQUFHLEVBQUlELEVBQVEsRUFDcEJFLEVBQVFDLEVBQ1IsQ0FBRSxXQUFBQyxFQUFZLFFBQUFDLENBQVEsRUFBSUMsR0FBZSxFQUV6Q0MsRUFBV0MsRUFHWCxFQUFBLEVBRUFDLEVBQVdELEVBR1gsRUFBQSxFQUVBRSxFQUFXRixFQUFnQyxFQUFLLEVBQ2hERyxFQUFZSCxFQUFJLEVBQUssRUFDckJJLEVBQWVKLEVBQUksRUFBSyxFQUV4QkssRUFBVSxJQUFNLENBQ3BCWCxFQUFNLG9CQUFxQixDQUFFLFNBQUFLLEVBQVUsU0FBQUUsRUFBVSxTQUFBQyxFQUFVLGFBQUFFLEVBQWMsQ0FBQSx1b0RDekJyRSxNQUFBRSxFQURTQyxJQUNTLFNBQVMsR0FBRyxVQUM5QkMsRUFBUUMsSUFDUkMsRUFBU0MsSUFDVCxDQUFFLEVBQUFwQixHQUFNQyxJQUNSb0IsRUFBWUMsS0FDWixDQUFFLG1CQUFBQyxDQUFBLEVBQXVCQyxHQUFZSCxDQUFTLEVBRTlDVCxFQUFZSCxFQUFhLEVBQUssRUFFOUJnQixFQUFXaEIsRUFBYSxFQUFLLEVBRTdCaUIsRUFBZUMsRUFBUyxJQUFNVixFQUFNLE1BQU0sUUFBUSxFQUNsRFcsRUFBV0QsRUFBUyxJQUFNRSxHQUFtQixVQUFVLENBQUMsRUFFeERDLEVBQWdCLENBQ3BCQyxFQUNBQyxJQUNHLENBQ0MsT0FBT0EsR0FBYSxZQUFjRCxFQUFFLEtBQUssT0FBUyxZQUNwREMsRUFBU0QsRUFBRSxJQUFJLENBQ2pCLEVBR0lqQixFQUFVLE1BQU9tQixHQUFhLENBQ2xDLEtBQU0sQ0FBRSxTQUFBekIsRUFBVSxTQUFBRSxFQUFVLFNBQUFDLENBQUEsRUFBYXNCLEVBRTFCLE1BQU1DLEdBQUEsRUFBZ0IsTUFDbkMsQ0FDRSxNQUFPMUIsRUFBUyxNQUNoQixTQUFVRSxFQUFTLE1BQ25CLFNBQVVDLEVBQVMsS0FDckIsRUFDQWUsRUFBYSxNQUNiUCxDQUFBLElBSUFQLEVBQVUsTUFBUSxHQUNsQnVCLEdBQVMsVUFBVSxFQUNyQixFQUdJQyxFQUFzQkwsR0FDMUJELEVBQWNDLEVBQUcsSUFBTSxDQUNqQkEsRUFBRSxLQUFLLE9BQVMsWUFDWFosRUFBQSxLQUFNTyxFQUFhLE9BQW9CLE9BQU8sQ0FDdkQsQ0FDRCxFQUVHVyxFQUFrQixTQUFZLENBQzlCLEdBQUEsQ0FDRixPQUFRLE1BQU1DLEdBQWEsSUFBSSx3QkFBd0IsR0FBRyxTQUFXLFVBRTlELE1BQUEsRUFDVCxDQUFBLEVBR0lDLEVBQW9CLElBQU9kLEVBQVMsTUFBUSxDQUFDQSxFQUFTLE1BRTVELE9BQUFlLEdBQWMsU0FBWSxDQUN4QixNQUFNQyxFQUFjLEVBQUksRUFDakIsT0FBQSxpQkFBaUIsVUFBV0wsQ0FBa0IsRUFDL0MsTUFBQU0sRUFBYSxNQUFNTCxJQUN6QixNQUFNSSxFQUFjLEVBQUssRUFFckJDLEdBQ0t2QixFQUFBLEtBQU1PLEVBQWEsT0FBb0IsT0FBTyxDQUN2RCxDQUNELEVBRURpQixHQUFZLElBQU0sQ0FDVCxPQUFBLG9CQUFvQixVQUFXUCxDQUFrQixDQUFBLENBQ3pEIn0=