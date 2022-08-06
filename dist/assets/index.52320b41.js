import{v as H,d as J,r as b,c as Q,u as G,a as O,b as U,e as x,f as r,g as e,h as y,F as w,i as k,o as a,t as _,j as W,w as Z,p as Y,k as X,l as B,m as $,n as K,q as ee,s as te,x as se,P as oe,y as le,z as ne,A as re,B as ae,C as ie,D as ce,E as ue,G as de,H as pe,I as ve,J as me,K as he}from"./vendor.7f1684ed.js";const fe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerpolicy&&(u.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?u.credentials="include":i.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function c(i){if(i.ep)return;i.ep=!0;const u=s(i);fetch(i.href,u)}};fe();const _e="100087b3bd25a77c425b",ye="http://localhost:3000/survey/survey",be="https://602vote.azurewebsites.net/api/auth",ge="https://github.com/login/oauth/authorize";let I=localStorage.getItem("device-id");if(!I){const t=H();localStorage.setItem("device-id",t),I=t}const A=J("user",()=>{const t=b(""),o=b(I),s=b(""),c=b(""),i=Q(()=>c.value.length>0),u=G();async function h(){console.log(`${u.code}`);const n=`${be}?code=${u.code}&state=${I}`,l=await fetch(n,{mode:"cors"}),{userId:p,avatarUrl:v,accessToken:m}=await l.json();t.value=p,s.value=v,c.value=m}return u.code&&h(),{username:t,deviceId:o,avatarUrl:s,isLogined:i}}),xe=J("vote-topic",()=>{const t=b([]);async function o(){const n=A(),l=await(await fetch("https://602vote.azurewebsites.net/api/vote",{headers:{username:n.username}})).json();await Promise.all(l.map(async p=>{if(p.author!=="Anonymous"){const v=await fetch(`https://api.github.com/users/${p.author}`),{avatar_url:m}=await v.json();p.avatar=m}})),t.value=l}async function s(n,l){const p=A(),v={voteTopicId:n.id,voteChoiceId:l.id},m=await fetch("https://602vote.azurewebsites.net/api/vote",{method:"PUT",body:JSON.stringify(v),headers:{username:p.username},mode:"cors"}),{voteCount:d}=await m.json();l.voteCount=d,l.voted=!0}async function c(n){n.liked?n.liked=!1:n.liked=!0}async function i(n){n.saved=!n.saved}async function u(n){const l=A();await fetch("https://602vote.azurewebsites.net/api/vote",{method:"POST",body:JSON.stringify(n),headers:{username:l.username},mode:"cors"}),o()}async function h(n){const l=A();await fetch("https://602vote.azurewebsites.net/api/vote",{method:"DELETE",body:JSON.stringify({id:n.id}),headers:{username:l.username},mode:"cors"}),o()}return{refresh:o,votes:t,vote:s,like:c,save:i,create:u,remove:h}});var R=(t,o)=>{const s=t.__vccOpts||t;for(const[c,i]of o)s[c]=i;return s};const we=O({setup(){let t=b([]),o=b(""),s=b("");const c=xe(),{push:i}=U();return{choices:t,choice:o,title:s,addChoice(){t.value.push(o.value),o.value!==""&&(o.value="")},deleteChoice(u){t.value.splice(t.value.indexOf(u),1)},submitVote(){c.create({title:s.value,choices:t.value,single:!1}),i("/")}}}}),ke={class:"mt-35 z-10"},$e={class:"flex flex-col w-full mt-10"},Se={class:""},Ce={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},ze={class:"flex items-center bg-dark-200 p-2 justify-between px-5 rounded-xl hover:cursor-pointer"},je={class:""},Ve=["onClick"],Te={class:"flex items-center pt-5 sm:flex-row flex-col sm:h-auto h-full"},Re={class:"inline-flex"},Oe=e("div",{class:"flex-grow"},null,-1),Ue=e("i",{class:"pi pi-check",style:{fontSize:"1.5rem"}},null,-1),Ae=e("div",{class:""},"submit",-1),Ne=[Ue,Ae];function Be(t,o,s,c,i,u){const h=x("InputText");return a(),r("div",ke,[e("div",$e,[e("div",Se,[y(h,{placeholder:"title",type:"text",class:"bg-dark-200 w-full text-light-300 rounded-xl",modelValue:t.title,"onUpdate:modelValue":o[0]||(o[0]=n=>t.title=n)},null,8,["modelValue"])]),e("div",Ce,[(a(!0),r(w,null,k(t.choices,(n,l)=>(a(),r("div",ze,[e("div",je,_(l+1)+". "+_(n),1),e("i",{class:"pi pi-times",onClick:p=>t.deleteChoice(n)},null,8,Ve)]))),256))]),e("div",Te,[e("div",Re,[y(h,{placeholder:"choice content",type:"text",class:"bg-dark-300 text-light-300 rounded-xl",modelValue:t.choice,"onUpdate:modelValue":o[1]||(o[1]=n=>t.choice=n)},null,8,["modelValue"]),e("i",{class:"pi pi-plus mx-5 my-5",style:{fontSize:"1.5rem"},onClick:o[2]||(o[2]=(...n)=>t.addChoice&&t.addChoice(...n))})]),Oe,e("div",{class:"flex gap-4 items-center cursor-pointer flex-shrink hover:bg-dark-300 rounded-xl sm:p-2 p-5 md:w-30 sm:p",style:{fontSize:"1.5rem"},onClick:o[3]||(o[3]=(...n)=>t.submitVote&&t.submitVote(...n))},Ne)])])])}var Ee=R(we,[["render",Be]]);const M=(t,o,s,c)=>{const i=o.value;t.addEventListener("mouseenter",()=>{i.hovered=!0}),t.addEventListener("mouseleave",()=>{i.hovered=!1})};function Ie(){return W({hovered:!1})}const Le=O({data(){return{items:[{label:"Survey",icon:"pi pi-fw pi-pencil",items:[{label:"Create Survey",icon:"pi pi-fw pi-plus",to:"/create-survey"}]}]}},props:{},directives:{hoverState:M},setup(){const t=Ie();let o=b("pi pi-thumbs-up"),s=b(!1);const c=A(),{push:i}=U();return{createVote(){i("/create-vote")},test(){alert("success")},user:c,push:i,changeIcon(){console.log(s.value),s.value==!1?(o.value="pi pi-check",s=b(!0)):(o.value="pi pi-thumbs-up",s.value=!1)},login(){window.location.href=`${ge}?client_id=${_e}&redirect_uri=${ye}&state=${I}`},state:t,iconName:o}}}),j=t=>(Y("data-v-30b1323a"),t=t(),X(),t),Fe={class:"h-full grid grid-cols-12 text-light-50"},Je={header:"",class:"fixed z-10 grid grid-cols-12 w-full sm:p-3 p-0 h-25 bg-dark-900"},Pe=j(()=>e("div",{class:"px-2 col-span-2 flex gap-3 items-center"},[e("i",{class:"pi pi-bolt",style:{fontSize:"2rem"}}),e("div",{class:"text-xl lg:block hidden"},"Survey Maker")],-1)),He={class:"col-start-4 col-span-6 flex justify-center"},Me={class:"p-input-icon-left w-200 flex items-center"},qe=j(()=>e("i",{class:"pi pi-search",style:{fontSize:"1.5rem"}},null,-1)),De={class:"col-start-10 col-span-3 flex justify-end gap-5 cursor-pointer p-2"},Qe=j(()=>e("i",{class:"pi pi-user",style:{fontSize:"1rem"}},null,-1)),Ge=j(()=>e("div",{class:"text-xl lg:block hidden"},"login",-1)),We=[Qe,Ge],Ze={key:1,class:"flex flex-row items-center gap-2 hover:bg-dark-300 rounded-xl p-2"},Ye={class:"text-xl lg:block hidden"},Xe=j(()=>e("div",null,null,-1)),Ke={sidebar:"",class:"lg:grid grid-cols-12 w-full mt-25 fixed"},et={class:"lg:col-start-2 lg:col-span-2 lg:p-0 col-span-1"},tt={class:"pr-5 flex flex-col gap-5"},st=j(()=>e("i",{class:"pi pi-home",style:{fontSize:"2rem"}},null,-1)),ot=j(()=>e("div",{class:"text-2xl lg:block hidden"},"home",-1)),lt=[st,ot],nt=j(()=>e("i",{class:"pi pi-users",style:{fontSize:"2rem"}},null,-1)),rt=j(()=>e("div",{class:"text-2xl lg:block hidden"},"my page (can delete)",-1)),at=[nt,rt],it=j(()=>e("i",{class:"pi pi-clone",style:{fontSize:"2rem"}},null,-1)),ct=j(()=>e("div",{class:"text-2xl lg:block hidden"},"about app",-1)),ut=[it,ct],dt=j(()=>e("a",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",href:"https://github.com/reterw/673_project"},[e("i",{class:"pi pi-github",style:{fontSize:"2rem"}}),e("div",{class:"text-2xl lg:block hidden"},"Github")],-1));function pt(t,o,s,c,i,u){const h=x("InputText"),n=x("router-link"),l=x("Menubar"),p=x("Avatar"),v=x("router-view");return a(),r("div",Fe,[e("div",Je,[Pe,e("span",He,[e("span",Me,[qe,y(h,{type:"text",placeholder:"type search",class:"bg-dark-100 w-full rounded-xl"})])]),e("div",De,[y(l,{class:"h-10 p-0 mt-2",model:t.items},{default:Z(()=>[y(n,{to:t.item.to,custom:""},null,8,["to"])]),_:1},8,["model"]),t.user.isLogined?(a(),r("div",Ze,[y(p,{image:t.user.avatarUrl},null,8,["image"]),e("div",Ye,_(t.user.username),1)])):(a(),r("div",{key:0,class:"flex flex-row items-center gap-2 hover:bg-dark-300 rounded-xl p-2",onClick:o[0]||(o[0]=(...m)=>t.login&&t.login(...m))},We))]),Xe]),e("div",Ke,[e("div",et,[e("div",tt,[e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:o[1]||(o[1]=m=>t.push("/"))},lt),e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:o[2]||(o[2]=m=>t.push("/admin-page"))},at),e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:o[3]||(o[3]=m=>t.push("/about"))},ut),dt])])]),y(v,{content:"",class:"mt-15 flex justify-center lg:col-span-6 lg:col-start-4 col-span-10 col-start-3 px-5 relative"})])}var vt=R(Le,[["render",pt],["__scopeId","data-v-30b1323a"]]),mt="/673_project/assets/1-673login.160d2778.jpg",ht="/673_project/assets/2-githuboauth.ac590561.jpg",ft="/673_project/assets/3-createsurvey.445348ca.jpg",_t="/673_project/assets/4-surveyname.d36d974c.jpg",yt="/673_project/assets/4-surveyname2.4bab0377.jpg",bt="/673_project/assets/4-surveyname3.d63455f2.jpg",gt="/673_project/assets/5-single1.78a5cd77.jpg",xt="/673_project/assets/5-single.8e961ae2.jpg",wt="/673_project/assets/5-single2.4fe1e4f6.jpg",kt="/673_project/assets/6-multiple.77af09aa.jpg",$t="/673_project/assets/7-input.9637ed36.jpg",St="/673_project/assets/8-thesurvey.7f6066db.jpg",Ct="/673_project/assets/9-dosurvey.3a239581.jpg",zt="/673_project/assets/9-dosurvey2.8c0cace5.jpg",jt="/673_project/assets/10-review.ff2eedd0.jpg",Vt="/673_project/assets/10-review1.fa807708.jpg",Tt="/673_project/assets/10-review2.2efa49ad.jpg",Rt="/673_project/assets/11-delete.c7702c58.jpg";const Ot={},Ut={class:"grid"},At=e("br",null,null,-1),Nt=e("div",null,[e("div",null,[e("br"),e("label",{class:"text-6xl"},"Survey Introduction"),e("br"),e("label",{class:"text-4xl"},"Login"),e("br"),e("label",{class:"text-2xl"},"Press the login button on the up right corner"),e("br"),e("img",{src:mt}),e("br"),e("label",{class:"text-2xl"},"login with github Oauth"),e("br"),e("img",{src:ht}),e("br"),e("label",{class:"text-2xl"},"clcick survey on top right, and choose create survey, you can only create survey after login"),e("br"),e("img",{src:ft}),e("br"),e("label",{class:"text-2xl"},"click type, add survey name first"),e("br"),e("img",{src:_t}),e("br"),e("label",{class:"text-2xl"},"type survey name, then click add to add the title"),e("img",{src:yt}),e("br"),e("label",{class:"text-2xl"},"add for add, X for delete"),e("img",{src:bt}),e("br"),e("label",{class:"text-2xl"},"from type, choose single"),e("img",{src:gt}),e("br"),e("label",{class:"text-2xl"},'tile, input the question, and give the choice,"+" for add more choice, add for add in to question list'),e("img",{src:xt}),e("br"),e("label",{class:"text-2xl"},"after click add, question will add to the list, click X to delete"),e("img",{src:wt}),e("br"),e("label",{class:"text-2xl"},"use the similar way to add the multiple choice and short answer question"),e("img",{src:kt}),e("img",{src:$t}),e("br"),e("label",{class:"text-2xl"},"press Create publish the survey"),e("img",{src:St}),e("br"),e("label",{class:"text-2xl"},"Click home to see survey, and click title to get in survey"),e("img",{src:Ct}),e("br"),e("label",{class:"text-2xl"},"finish the survey, then click submic"),e("img",{src:zt}),e("br"),e("label",{class:"text-2xl"},'back to home page click "view Statistic" or "View All Result" to check the how other people do the survey'),e("img",{src:jt}),e("br"),e("label",{class:"text-2xl"},"view Statistic"),e("img",{src:Vt}),e("br"),e("label",{class:"text-2xl"},"View All Result"),e("img",{src:Tt}),e("br"),e("label",{class:"text-2xl"},'after you login, click "my page" on the left, you can delete the survey create by your own by press "X" '),e("img",{src:Rt})])],-1),Bt=[At,Nt];function Et(t,o){return a(),r("div",Ut,Bt)}var It=R(Ot,[["render",Et]]);const P=J("survey-store",()=>{const t=b([]),o=b([]);async function s(l){return await(await fetch("https://673func.azurewebsites.net/api/createSurvery?code=plcNdma2Wqd-umhboTc8ZlH1gNfnkVd-Tl1zpxmiwqQAAzFuSr0bZw==",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},mode:"cors"})).json()}async function c(){return t.value=await(await fetch("https://673func.azurewebsites.net/api/getAllSurveys?code=gZ3RD4t2-aqn02QY8JeM8VbJwM5qL7hn_iWFxYpTxsWaAzFu6niLnA==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json(),t}async function i(){return o.value=await(await fetch("https://673func.azurewebsites.net/api/getSurveyResult?code=0HHA_s_uH4_UNsvm7WVMtxQUZwQn2DSTCgR9wssmjAklAzFuQS7Afw==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json(),o}async function u(l){await fetch("https://673func.azurewebsites.net/api/answerSurvey?code=Bz6VbyT6yh3VzjeTSg4ZGLzVbXa9X1PUr3hZy0LQ4T1YAzFu2_EZJg==",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},mode:"cors"})}async function h(l){await(await fetch("https://673func.azurewebsites.net/api/getSurveysOfUser?code=o_g8q0Qny3MBRx4yg47cEQb9cgRY-Ic-rWNoJi3PcSSsAzFuMUlHHg==&user_id="+l.user_id,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json()}async function n(l){await fetch("https://673func.azurewebsites.net/api/deleteSurvey?code=oBRz3eBCdaTPx0NSO4HKycTYSyb4l5_juIOyUDsP5RauAzFufjeazA==&questionnaire_id="+l.questionnaire_id,{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors"})}return{createSurvey:s,getAllSurveys:c,surveyForm:t,getAllSurveysResult:i,surveyResult:o,submitSurvey:u,getSurveyByUserId:h,deleteSurveyById:n}}),Lt=O({setup(){const{username:t}=A();B(()=>{t||(window.alert("Please login to create survey!"),n("/"))});const o=[{name:"Survey Name",value:-1},{name:"Single",value:0},{name:"Multiple",value:1},{name:"Input",value:2}],s=b(null);let c=b([]),i=b(""),u=b("");const h=P(),{push:n}=U();let l=b([]);return{types:o,selectedType:s,choices:c,choice:i,title:u,surveyList:l,addChoice(){!i.value||(c.value.push(i.value),i.value!==""&&(i.value=""))},deleteChoice(p){c.value.splice(c.value.indexOf(p),1)},addSurveyList(){var v,m,d,S,g,V,T,f,N,C,F;const p=l.value.filter(E=>E.type===-1);if(!u.value||(((v=s==null?void 0:s.value)==null?void 0:v.value)===0||((m=s==null?void 0:s.value)==null?void 0:m.value)===1)&&c.value.length===0||p.length>0&&((d=s==null?void 0:s.value)==null?void 0:d.value)===-1||l.value.length===0&&((S=s==null?void 0:s.value)==null?void 0:S.value)!==-1||((g=s==null?void 0:s.value)==null?void 0:g.value)===1&&c.value.length===1){l.value.length===0&&((V=s==null?void 0:s.value)==null?void 0:V.value)!==-1?alert("Please input survey name first!"):p.length>0&&((T=s==null?void 0:s.value)==null?void 0:T.value)===-1?alert("One survey name only!"):u.value?(((f=s==null?void 0:s.value)==null?void 0:f.value)===0||((N=s==null?void 0:s.value)==null?void 0:N.value)===1)&&c.value.length===0?alert("Please input choice!"):((C=s==null?void 0:s.value)==null?void 0:C.value)===1&&c.value.length===1&&alert("Please input more than one choice for multiple type!"):alert("Please input title!");return}l.value.push({id:H(),type:JSON.parse(JSON.stringify((F=s==null?void 0:s.value)==null?void 0:F.value)),title:JSON.parse(JSON.stringify(u.value)),content:JSON.parse(JSON.stringify(c.value)),checked:!1,inputText:"",selectedChoices:[]}),u.value="",c.value.splice(0,c.value.length)},deleteSurveyList(p){l.value.splice(l.value.indexOf(p),1)},async createSurvey(){var m;const p=[];l.value.map(d=>{d.type!==-1&&p.push({title:d.title,type:d.type,options:d.content})});const v=await h.createSurvey({user_id:t,name:(m=l.value.filter(d=>d.type===-1)[0])==null?void 0:m.title,items:p});n("/survey/"+v._id)}}}}),Ft={class:"mt-35 z-10",style:{"z-index":"1"}},Jt={class:"flex flex-col w-full mt-10"},Pt={class:"inline-flex items-center mb-10"},Ht=e("div",{class:"mr-5"},"Please choose a type",-1),Mt={key:0},qt={class:"flex flex-col gap-2 text-xl pt-10"},Dt={class:""},Qt=["onClick"],Gt={key:1,class:"flex items-center pt-5 sm:flex-row flex-col sm:h-auto w-full h-full"},Wt={class:"inline-flex w-full"},Zt={key:2,class:"flex gap-1 items-center cursor-pointer flex-shrink rounded-xl sm:p-2 p-5 md:w-40 sm:p mt-10 place-self-end",style:{fontSize:"1.5rem"}},Yt={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},Xt={class:"flex-row mb-15 border-b-1 border-indigo-200"},Kt={class:"flex justify-between mb-10"},es={key:0,class:"w-full mb-20 text-center",style:{fontSize:"3rem"}},ts={key:1,class:"grow"},ss=["onClick"],os={key:0},ls={class:"flex justify-between mb-10"},ns={class:"flex-none mr-5",style:{fontSize:"2rem"}},rs={class:"grow"},as=["onClick"],is={class:"flex mb-10"},cs={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},us=["for"],ds={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},ps=["for"],vs={key:0,class:"flex"},ms={key:3,class:"mb-40 place-self-end",style:{fontSize:"1.5rem"}};function hs(t,o,s,c,i,u){var d,S,g,V,T;const h=x("Dropdown"),n=x("InputText"),l=x("Button"),p=x("RadioButton"),v=x("Checkbox"),m=x("Textarea");return a(),r("div",Ft,[e("div",Jt,[e("div",Pt,[Ht,y(h,{modelValue:t.selectedType,"onUpdate:modelValue":o[0]||(o[0]=f=>t.selectedType=f),options:t.types,optionLabel:"name",placeholder:"--Type--"},null,8,["modelValue","options"])]),((d=t.selectedType)==null?void 0:d.value)>-2?(a(),r("div",Mt,[y(n,{placeholder:"title",type:"text",class:"bg-dark-200 w-full text-light-300 rounded-xl",modelValue:t.title,"onUpdate:modelValue":o[1]||(o[1]=f=>t.title=f)},null,8,["modelValue"])])):$("",!0),e("div",qt,[(a(!0),r(w,null,k(t.choices,(f,N)=>(a(),r("div",{key:f,class:"flex items-center bg-dark-200 p-2 justify-between px-5 rounded-xl hover:cursor-pointer"},[e("div",Dt,_(N+1)+". "+_(f),1),e("i",{class:"pi pi-times",onClick:C=>t.deleteChoice(f)},null,8,Qt)]))),128))]),((S=t.selectedType)==null?void 0:S.value)===0||((g=t.selectedType)==null?void 0:g.value)===1?(a(),r("div",Gt,[e("div",Wt,[y(n,{placeholder:"choice content",type:"text",class:"bg-dark-300 w-full text-light-300 rounded-xl",modelValue:t.choice,"onUpdate:modelValue":o[2]||(o[2]=f=>t.choice=f)},null,8,["modelValue"]),e("i",{class:"pi pi-plus mx-5 my-5 hover:bg-dark-200 cursor-pointer",style:{fontSize:"1.5rem"},onClick:o[3]||(o[3]=(...f)=>t.addChoice&&t.addChoice(...f))})])])):$("",!0),((V=t.selectedType)==null?void 0:V.value)>-2?(a(),r("div",Zt,[y(l,{onClick:t.addSurveyList,class:"md:w-40",label:"Add"},null,8,["onClick"])])):$("",!0),e("div",Yt,[(a(!0),r(w,null,k(t.surveyList,(f,N)=>(a(),r("div",Xt,[e("div",Kt,[f.type===-1?(a(),r("div",es,_(f.title),1)):$("",!0),f.type===-1?(a(),r("div",ts,[e("i",{style:{fontSize:"1.5rem"},class:"pi pi-times cursor-pointer hover:bg-dark-300",onClick:C=>t.deleteSurveyList(f)},null,8,ss)])):$("",!0)]),f.type!==-1?(a(),r("div",os,[e("div",ls,[e("div",ns,_(N)+". "+_(f.title),1),e("div",rs,[e("i",{style:{fontSize:"1.5rem"},class:"pi pi-times cursor-pointer hover:bg-dark-300",onClick:C=>t.deleteSurveyList(f)},null,8,as)])]),(a(!0),r(w,null,k(f.content,(C,F)=>(a(),r("div",is,[f.type===0?(a(),r("div",cs,[y(p,{class:"mr-2 pb-5",value:C,id:"singleOption"+C,name:f.title,modelValue:f.checked,"onUpdate:modelValue":E=>f.checked=E},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+C},_(C),9,us)])):$("",!0),f.type===1?(a(),r("div",ds,[y(v,{class:"mr-2 pb-5",value:C,id:"multiOption"+C,name:f.title,modelValue:f.selectedChoices,"onUpdate:modelValue":E=>f.selectedChoices=E},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+C},_(C),9,ps)])):$("",!0)]))),256)),f.type===2?(a(),r("div",vs,[y(m,{autoResize:!0,class:"mb-10 w-full",modelValue:f.inputText,"onUpdate:modelValue":C=>f.inputText=C,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):$("",!0)])):$("",!0)]))),256))]),((T=t.surveyList)==null?void 0:T.length)>1?(a(),r("div",ms,[y(l,{onClick:t.createSurvey,class:"md:w-40",label:"Create"},null,8,["onClick"])])):$("",!0)])])}var fs=R(Lt,[["render",hs]]);const _s=O({setup(){const{push:t}=U();let o=b([]);return B(async()=>{const s=await(await fetch("https://673func.azurewebsites.net/api/getSurveyResult?code=0HHA_s_uH4_UNsvm7WVMtxQUZwQn2DSTCgR9wssmjAklAzFuQS7Afw==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();o.value=JSON.parse(JSON.stringify(s.reverse()))}),{surveyResult:o,navigateToSurvey(s){t("/survey/"+s)},navigateToStatistics(s){t("/survey-statistics/"+s)},navigateToDetail(s){t("/survey-detail/"+s)}}}}),ys={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},bs=["onClick"],gs=e("div",{class:"mb-10",style:{fontSize:"1.5rem"}}," Q: ",-1),xs={class:"mb-5"},ws={class:"mt-10 flex align-center justify-center content-between w-full"};function ks(t,o,s,c,i,u){const h=x("Button");return a(),r("div",ys,[(a(!0),r(w,null,k(t.surveyResult,n=>(a(),r("div",{key:n._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",{class:"pb-5 w-full text-blue-400 cursor-pointer border-dark-100 border-b-1 text-center hover:underline",onClick:l=>t.navigateToSurvey(n._id),style:{fontSize:"2rem"}},_(n.name),9,bs),(a(!0),r(w,null,k(n.items,l=>(a(),r("div",{key:l.title,class:"mt-10 border-dark-100 border-b-1"},[gs,e("div",xs,_(l.title),1)]))),128)),e("div",ws,[y(h,{onClick:l=>t.navigateToStatistics(n._id),class:"md:w-40 mr-20",label:"View Statistics"},null,8,["onClick"]),y(h,{onClick:l=>t.navigateToDetail(n._id),class:"md:w-40",label:"View All Results"},null,8,["onClick"])])]))),128))])}var q=R(_s,[["render",ks]]),L;(function(t){t[t.SingleChoice=0]="SingleChoice",t[t.MultipleChoice=1]="MultipleChoice",t[t.BlankFill=2]="BlankFill"})(L||(L={}));const $s=O({setup(){const{push:t,currentRoute:o}=U(),{submitSurvey:s}=P();let c=b([]);return B(async()=>{const i=await(await fetch("https://673func.azurewebsites.net/api/getAllSurveys?code=gZ3RD4t2-aqn02QY8JeM8VbJwM5qL7hn_iWFxYpTxsWaAzFu6niLnA==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();c.value=i.filter(u=>u._id===o.value.params.id)}),{surveyForm:c,async submitForm(){const i=c.value,u=[];i[0].items.map(n=>{var l;n.type===L.SingleChoice?u.push({answer:n.checked}):n.type===L.MultipleChoice?u.push({answer:(l=n.selectedChoices)==null?void 0:l.join()}):n.type===L.BlankFill&&u.push({answer:n.inputText})});const h={questionnaire_id:o.value.params.id.toString(),answerItems:u};await s(h),t("/survey-list")}}}}),Ss={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},Cs={class:"w-full mb-20 pb-10 text-center border-b-1 border-indigo-200",style:{fontSize:"3rem"}},zs={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},js={class:"w-full mb-10",style:{fontSize:"1.5rem"}},Vs={key:0},Ts={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},Rs=["for"],Os={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},Us=["for"],As={key:0,class:"flex"},Ns={key:0,class:"mb-40 place-self-end",style:{fontSize:"1.5rem"}};function Bs(t,o,s,c,i,u){var v;const h=x("RadioButton"),n=x("Checkbox"),l=x("Textarea"),p=x("Button");return a(),r("div",Ss,[(a(!0),r(w,null,k(t.surveyForm,m=>(a(),r("div",{key:m._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",Cs,_(m.name),1),e("div",zs,[(a(!0),r(w,null,k(m.items,(d,S)=>(a(),r("div",{key:S,class:"flex-row mb-15 border-b-1 border-indigo-200"},[e("div",js,_(d.title),1),d.type!==-1?(a(),r("div",Vs,[(a(!0),r(w,null,k(d.options,(g,V)=>(a(),r("div",{class:"flex mb-10",key:V},[d.type===0?(a(),r("div",Ts,[y(h,{class:"mr-2 pb-5",value:g,id:"singleOption"+g,name:d.title,modelValue:d.checked,"onUpdate:modelValue":T=>d.checked=T},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+g},_(g),9,Rs)])):$("",!0),d.type===1?(a(),r("div",Os,[y(n,{class:"mr-2 pb-5",value:g,id:"multiOption"+g,name:d.title,modelValue:d.selectedChoices,"onUpdate:modelValue":T=>d.selectedChoices=T},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+g},_(g),9,Us)])):$("",!0)]))),128)),d.type===2?(a(),r("div",As,[y(l,{autoResize:!0,class:"mb-10 w-full",modelValue:d.inputText,"onUpdate:modelValue":g=>d.inputText=g,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):$("",!0)])):$("",!0)]))),128))])]))),128)),((v=t.surveyForm)==null?void 0:v.length)>0?(a(),r("div",Ns,[y(p,{onClick:t.submitForm,class:"md:w-40",label:"Submit"},null,8,["onClick"])])):$("",!0)])}var Es=R($s,[["render",Bs]]);const Is=O({setup(){const{go:t,push:o}=U(),{deleteSurveyById:s}=P(),{username:c}=A();let i=b([]);const u=async()=>await(await fetch("https://673func.azurewebsites.net/api/getSurveysOfUser?code=o_g8q0Qny3MBRx4yg47cEQb9cgRY-Ic-rWNoJi3PcSSsAzFuMUlHHg==&user_id="+c,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();return B(async()=>{c||(window.alert("Please login to delete survey!"),o("/")),i.value=await u()}),{async deleteSurvey(h){window.confirm("Are you sure to delete this survey?")&&(await s({questionnaire_id:h}),i.value=await u())},surveyForm:i}}}),Ls={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},Fs={class:"w-full mb-20 pb-10 text-center border-b-1 border-indigo-200",style:{fontSize:"3rem"}},Js=["onClick"],Ps={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},Hs={class:"w-full mb-10",style:{fontSize:"1.5rem"}},Ms={key:0},qs={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},Ds=["for"],Qs={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},Gs=["for"],Ws={key:0,class:"flex"};function Zs(t,o,s,c,i,u){const h=x("RadioButton"),n=x("Checkbox"),l=x("Textarea");return a(),r("div",Ls,[(a(!0),r(w,null,k(t.surveyForm,p=>(a(),r("div",{key:p._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",Fs,[K(_(p.name)+" ",1),e("i",{class:"pi pi-times cursor-pointer mt-7",onClick:v=>t.deleteSurvey(p._id),style:{fontSize:"2rem",float:"right"}},null,8,Js)]),e("div",Ps,[(a(!0),r(w,null,k(p.items,(v,m)=>(a(),r("div",{key:m,class:"flex-row mb-15 border-b-1 border-indigo-200"},[e("div",Hs,_(v.title),1),v.type!==-1?(a(),r("div",Ms,[(a(!0),r(w,null,k(v.options,(d,S)=>(a(),r("div",{class:"flex mb-10",key:S},[v.type===0?(a(),r("div",qs,[y(h,{class:"mr-2 pb-5",value:d,id:"singleOption"+d,name:v.title,modelValue:v.checked,"onUpdate:modelValue":g=>v.checked=g},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+d},_(d),9,Ds)])):$("",!0),v.type===1?(a(),r("div",Qs,[y(n,{class:"mr-2 pb-5",value:d,id:"multiOption"+d,name:v.title,modelValue:v.selectedChoices,"onUpdate:modelValue":g=>v.selectedChoices=g},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+d},_(d),9,Gs)])):$("",!0)]))),128)),v.type===2?(a(),r("div",Ws,[y(l,{autoResize:!0,class:"mb-10 w-full",modelValue:v.inputText,"onUpdate:modelValue":d=>v.inputText=d,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):$("",!0)])):$("",!0)]))),128))])]))),128))])}var Ys=R(Is,[["render",Zs]]);const Xs=O({setup(){const{push:t,back:o,currentRoute:s}=U();let c=b([]);return B(async()=>{const i=await(await fetch("https://673func.azurewebsites.net/api/getSurveyResult?code=0HHA_s_uH4_UNsvm7WVMtxQUZwQn2DSTCgR9wssmjAklAzFuQS7Afw==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();c.value=JSON.parse(JSON.stringify(i.reverse())).filter(u=>u._id===s.value.params.id)}),{surveyResult:c,back:o,navigateToSurvey(i){t("/survey/"+i)}}}}),Ks={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},eo={key:0,class:"flex w-full mt-10"},to=e("div",{class:"mt-10 pb-5 w-full text-white-400 text-center",style:{fontSize:"2rem"}}," All Results ",-1),so=["onClick"],oo=e("div",{class:"mb-10",style:{fontSize:"1.5rem"}}," Q: ",-1),lo={class:"mb-5"},no={class:"mt-10 mb-10",style:{fontSize:"1.5rem"}};function ro(t,o,s,c,i,u){const h=x("Button");return a(),r("div",Ks,[t.surveyResult?(a(),r("div",eo,[y(h,{onClick:o[0]||(o[0]=n=>t.back()),class:"md:w-40",label:"Back"})])):$("",!0),to,(a(!0),r(w,null,k(t.surveyResult,n=>(a(),r("div",{key:n._id,class:"mt-10 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",{class:"pb-5 w-full text-blue-400 cursor-pointer border-dark-100 border-b-1 text-center hover:underline",onClick:l=>t.navigateToSurvey(n._id),style:{fontSize:"2rem"}},_(n.name),9,so),(a(!0),r(w,null,k(n.items,l=>(a(),r("div",{key:l.title,class:"mt-10 border-dark-100 border-b-1"},[oo,e("div",lo,_(l.title),1),(a(!0),r(w,null,k(l.options,p=>(a(),r("div",{class:"mb-5",key:p},_(p),1))),128))]))),128)),(a(!0),r(w,null,k(n.answers,(l,p)=>(a(),r("div",{key:l._id,class:"mt-10 border-dark-100 border-b-1"},[e("div",no," A"+_(p+1)+": ",1),(a(!0),r(w,null,k(l.answerItems,v=>(a(),r("div",{key:v.answer,class:"mb-5 pb-5 border-dark-600 border-b-1"},_(v.answer),1))),128))]))),128))]))),128))])}var ao=R(Xs,[["render",ro]]);const io=O({setup(){const{push:t,back:o,currentRoute:s}=U();let c=b([]),i=b({});return B(async()=>{const u=await(await fetch("https://673func.azurewebsites.net/api/getSurveyResult?code=0HHA_s_uH4_UNsvm7WVMtxQUZwQn2DSTCgR9wssmjAklAzFuQS7Afw==",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();c.value=JSON.parse(JSON.stringify(u.reverse())).filter(m=>m._id===s.value.params.id);const h=c.value[0].answers,n=c.value[0].items,l={},p=[];n.forEach((m,d)=>{m.options.length>0&&(p.push(d),m.options.forEach(S=>{l[S]={count:0,percent:0,number:d,total:0}}))}),h.forEach(m=>{m.answerItems.forEach(d=>{var g;const S=(g=d.answer)==null?void 0:g.split(",");(S==null?void 0:S.length)===1?l[d.answer]&&l[d.answer].count++:S==null||S.forEach(V=>{l[V]&&l[V].count++})})});const v={};p.forEach(m=>{v[m]=0}),Object.keys(l).forEach(m=>{p.forEach(d=>{l[m].number===d&&(v[d]+=l[m].count)})}),Object.keys(l).forEach(m=>{l[m].percent=(l[m].count/v[l[m].number]*100).toFixed(2)}),i.value=l}),{surveyResult:c,back:o,finalStatistics:i,navigateToSurvey(u){t("/survey/"+u)}}}}),co={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},uo={class:"flex w-full mt-10"},po=e("div",{class:"mt-10 pb-5 w-full text-white-400 text-center",style:{fontSize:"2rem"}}," Statistics ",-1),vo=["onClick"],mo=e("div",{class:"mb-10",style:{fontSize:"1.5rem"}}," Q: ",-1),ho={class:"mb-5"},fo={class:"w-20"},_o={class:"w-10 text-center"},yo={class:"w-20"};function bo(t,o,s,c,i,u){const h=x("Button");return a(),r("div",co,[e("div",uo,[y(h,{onClick:o[0]||(o[0]=n=>t.back()),class:"md:w-40",label:"Back"})]),po,(a(!0),r(w,null,k(t.surveyResult,n=>(a(),r("div",{key:n._id,class:"mt-10 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",{class:"pb-5 w-full text-blue-400 cursor-pointer border-dark-100 border-b-1 text-center hover:underline",onClick:l=>t.navigateToSurvey(n._id),style:{fontSize:"2rem"}},_(n.name),9,vo),(a(!0),r(w,null,k(n.items,l=>(a(),r("div",{key:l.title,class:"mt-10 border-dark-100 border-b-1"},[mo,e("div",ho,_(l.title),1),(a(!0),r(w,null,k(l.options,p=>{var v,m;return a(),r("div",{class:"mb-5 flex justify-between",key:p},[e("div",fo,_(p),1),e("div",_o,_((v=t.finalStatistics[p])==null?void 0:v.count),1),e("div",yo,_((m=t.finalStatistics[p])==null?void 0:m.percent)+" %",1)])}),128))]))),128))]))),128))])}var go=R(io,[["render",bo]]);const D=ee({history:te(),routes:[{path:"/create-vote",component:Ee},{path:"/",component:q},{path:"/about",component:It},{path:"/admin-page",component:Ys},{path:"/create-survey",component:fs},{path:"/survey-list",component:q},{path:"/survey/:id",component:Es},{path:"/survey-detail/:id",component:ao},{path:"/survey-statistics/:id",component:go}]});D.afterEach((t,o,s)=>{document.querySelector("body").setAttribute("style","overflow: auto !important;")});const z=se(vt);z.use(D);z.use(oe);z.directive("hover",M);z.component("chips",le);z.component("Button",ne);z.component("InputText",re);z.component("Fieldset",ae);z.component("Checkbox",ie);z.component("Avatar",ce);z.component("SpeedDial",ue);z.component("Dropdown",de);z.component("RadioButton",pe);z.component("Textarea",ve);z.component("Menubar",me);z.use(he());z.mount("#app");
