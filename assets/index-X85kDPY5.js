import{_ as h,r as x,c as v,a as o,b as r,w as n,g as w,d as a,o as V,e as b}from"./index-Rji-9Wa8.js";const y={class:"bg-color-primary flex-center-center",style:{height:"100%",width:"100%","background-color":"#00aaff"}},U={class:"flex-c-center-center bg-color-white w-400 h-300 b-rd-10",style:{height:"400px",width:"500px","border-radius":"10px"}},$={class:"m-t-20"},k={__name:"index",setup(B){const{proxy:s}=w(),{login:p}=s.$store.user.useUserStore(),l=x({}),m={username:[{required:!0,trigger:"change",message:"请输入账号"}],password:[{required:!0,trigger:"change",validator:c}]};function c(i,e,t){!e||e.length<6?t(new Error("密码最少6位")):t()}function f(){s.$refs.loginFormRef.validate(i=>{i&&p(l.value).then(()=>{let e=s.$route.fullPath;if(e.startsWith("/login?redirect=")){let t=e.replace("/login?redirect=","");跳转到上次退出的页面,s.$router.push({path:t})}else 跳转到首页,s.$router.push({path:"/"})})})}return(i,e)=>{const t=a("el-input"),u=a("el-form-item"),g=a("el-form"),_=a("el-button");return V(),v("div",y,[o("div",U,[e[4]||(e[4]=o("h1",{class:"font-size-lg"},"SmallBoot",-1)),o("div",$,[r(g,{ref:"loginFormRef",model:l.value,rules:m},{default:n(()=>[r(u,{prop:"username"},{default:n(()=>[r(t,{modelValue:l.value.username,"onUpdate:modelValue":e[0]||(e[0]=d=>l.value.username=d),"prefix-icon":"User",placeholder:"请输入账号",maxlength:"30"},null,8,["modelValue"])]),_:1}),r(u,{prop:"password"},{default:n(()=>[r(t,{modelValue:l.value.password,"onUpdate:modelValue":e[1]||(e[1]=d=>l.value.password=d),"prefix-icon":"Lock",placeholder:"请输入密码","show-password":"",maxlength:"30"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),e[3]||(e[3]=o("div",{class:"tips"},[o("span",null,"用户名: admin"),o("span",{class:"m-l-20"}," 密码: 123456")],-1)),r(_,{type:"primary",class:"m-t-10 w-full",onClick:f},{default:n(()=>e[2]||(e[2]=[b("登 录")])),_:1})])]),e[5]||(e[5]=o("div",{class:"copyright"},[o("p",null,"IF I WERE YOU")],-1))])}}},E=h(k,[["__scopeId","data-v-068d0c85"]]);export{E as default};
