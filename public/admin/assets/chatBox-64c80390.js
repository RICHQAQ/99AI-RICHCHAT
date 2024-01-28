
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as we}from"./index-5e1cba81.js";import{d as ke,r as p,Q as $,B as A,x as Te,o as v,c as F,e,f as a,k as f,t as k,b as s,U as j,w as le,I as P,a as N,R as ae,S as oe,E as z,W as ne,V as Ie,h as n,X as qe,q as se}from"./index-a4526b0d.js";import{A as C}from"./chatgpt-42d008ea.js";import{_ as Ue}from"./index.vue_vue_type_script_setup_true_lang-2f76bc76.js";const De=N("div",{style:{width:"250px"}}," 关闭当前分类、用户端将不再展示！ ",-1),$e={class:"flex justify-end mr-5"},Ae=N("div",{style:{width:"250px"}}," 关闭当前子项、用户端将不再展示！ ",-1),Pe={class:"flex justify-end mr-5"},ze=ke({__name:"chatBox",setup(Ne){const T=p(!1),I=p(!1),B=p(),re=p(),_=p(0),x=p(0),r=$({status:!0,name:"",order:100,icon:""}),u=$({typeId:"",appId:"",status:!0,title:"",order:100,prompt:"",url:""}),ue=$({status:[{required:!0,message:"请选择开启状态",trigger:"change"}],name:[{required:!0,message:"请填写分类名称",trigger:"blur"}],icon:[{required:!0,message:"请填写分类图标",trigger:"blur"}],order:[{required:!0,message:"请填写排序id 越大越靠前",trigger:"blur"}]}),de=$({typeId:[{required:!0,message:"请选择分类",trigger:"change"}],appId:[{required:!1,message:"请选择APP",trigger:"change"}],status:[{required:!0,message:"请选择开启状态",trigger:"change"}],title:[{required:!0,message:"请填写标题名称",trigger:"blur"}],order:[{required:!0,message:"请填写排序id 越大越靠前",trigger:"blur"}],prompt:[{required:!1,message:"请填写快捷描述语",trigger:"blur"}],url:[{required:!1,message:"请填写跳转地址",trigger:"blur"}]});function ie(o){_.value=0,o==null||o.resetFields()}function pe(o){x.value=0,o==null||o.resetFields()}const g=p(!1),y=p(!1),V=p("chatBoxType"),ce=A(()=>_.value?"更新分类":"新增分类"),me=A(()=>x.value?"更新子项":"新增子项"),J=A(()=>_.value?"确认更新":"确认新增"),O=p([]),L=p([]),Q=p([]);async function q(){try{T.value=!0;const o=await C.queryChatBoxTypes();T.value=!1,O.value=o.data}catch{T.value=!1}}async function S(){try{I.value=!0;const o=await C.queryChatBoxs();I.value=!1,L.value=o.data}catch{I.value=!1}}async function fe(o){const{id:t}=o;await C.delChatBoxType({id:t}),z({type:"success",message:"操作完成！"}),q()}async function _e(o){const{id:t}=o;await C.delChatBox({id:t}),z({type:"success",message:"操作完成！"}),S()}function ge(o){_.value=o.id;const{status:t,name:d,icon:w,order:b}=o;ne(()=>{Object.assign(r,{status:t,name:d,icon:w,order:b})}),g.value=!0}function ye(o){x.value=o.id;const{title:t,order:d,status:w,typeId:b,appId:c,prompt:U,url:D}=o;ne(()=>{Object.assign(u,{title:t,order:d,status:w,typeId:b,appId:c,prompt:U,url:D})}),y.value=!0}function be(o){o==="chatBoxType"?q():S()}async function he(o){o==null||o.validate(async t=>{if(t){const d=JSON.parse(JSON.stringify(r));delete d.id,_.value&&(d.id=_.value),await C.setChatBoxType(d),z({type:"success",message:"操作成功！"}),_.value=0,g.value=!1,q()}})}async function ve(o){o==null||o.validate(async t=>{if(t){const d=JSON.parse(JSON.stringify(u));delete d.id,x.value&&(d.id=x.value),await C.setChatBox(d),z({type:"success",message:"操作成功！"}),x.value=0,y.value=!1,S()}})}const xe=A(()=>V.value==="chatBoxType"?"添加提示分类":"添加提示子项");function Ce(){V.value==="chatBoxType"?g.value=!0:y.value=!0}async function Be(){var t;const o=await Ie.queryApp({status:1,page:1,size:999});Q.value=(t=o==null?void 0:o.data)==null?void 0:t.rows}return Te(()=>{q(),Be()}),(o,t)=>{const d=n("el-alert"),w=n("Plus"),b=n("el-icon"),c=n("el-button"),U=we,D=n("el-tag"),i=n("el-table-column"),M=n("el-popconfirm"),W=n("el-table"),X=n("el-tab-pane"),Ve=n("el-tabs"),G=n("el-switch"),H=n("QuestionFilled"),K=n("el-tooltip"),m=n("el-form-item"),h=n("el-input"),Y=n("el-form"),Z=n("el-dialog"),E=n("el-option"),ee=n("el-select"),te=qe("loading");return v(),F("div",null,[e(U,{class:"header"},{default:a(()=>[e(d,{"show-icon":"",title:"九宫格预设说明",description:"此处设置用于对话窗口为空的时候默认的九宫格配置，分为分类以及分类下的应用或提示词、建议三个分类三个子项即可、更多请查看ui显示。设置 跳转地址|应用|预设问题 三选一即可 如果都设置 优先级参考顺序 只会生效一个。",type:"success"}),e(c,{type:"success",class:"ml-3",size:"large",onClick:Ce},{default:a(()=>[f(k(s(xe))+" ",1),e(b,{class:"ml-3"},{default:a(()=>[e(w)]),_:1})]),_:1})]),_:1}),e(U,{style:{width:"100%"}},{default:a(()=>[e(Ve,{type:"border-card",modelValue:s(V),"onUpdate:modelValue":t[0]||(t[0]=l=>j(V)?V.value=l:null),onTabChange:be},{default:a(()=>[e(X,{name:"chatBoxType",label:"分类管理"},{default:a(()=>[le((v(),P(W,{border:"",data:s(O),style:{width:"100%"},size:"large"},{default:a(()=>[e(i,{prop:"status",align:"center",label:"分类状态"},{default:a(l=>[e(D,{type:l.row.status?"success":"danger"},{default:a(()=>[f(k(l.row.status?"开启中":"已关闭"),1)]),_:2},1032,["type"])]),_:1}),e(i,{prop:"name",label:"分类名称"}),e(i,{prop:"order",label:"排序ID"}),e(i,{prop:"icon",label:"分类图标"},{default:a(l=>[e(Ue,{style:{"font-size":"24px"},icon:l.row.icon},null,8,["icon"])]),_:1}),e(i,{fixed:"right",label:"操作",align:"center",width:"180"},{default:a(l=>[e(c,{link:"",type:"primary",size:"small",onClick:R=>ge(l.row)},{default:a(()=>[f(" 变更 ")]),_:2},1032,["onClick"]),e(M,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:R=>fe(l.row)},{reference:a(()=>[e(c,{link:"",type:"danger",size:"small"},{default:a(()=>[f(" 删除分类 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[te,s(T)]])]),_:1}),e(X,{name:"chatBox",label:"子类管理"},{default:a(()=>[le((v(),P(W,{border:"",data:s(L),style:{width:"100%"},size:"large"},{default:a(()=>[e(i,{prop:"typeInfo.name",label:"所属分类",width:"120",align:"center"}),e(i,{prop:"status",label:"子项状态",width:"120",align:"center"},{default:a(l=>[e(D,{type:l.row.status?"success":"danger"},{default:a(()=>[f(k(l.row.status?"开启中":"已关闭"),1)]),_:2},1032,["type"])]),_:1}),e(i,{prop:"title",label:"标题名称",width:"180",align:"center"}),e(i,{prop:"order",label:"排序ID",width:"90",align:"center"}),e(i,{prop:"prompt",label:"快捷预设句"}),e(i,{prop:"url",label:"快捷跳转地址"}),e(i,{prop:"appInfo.name",label:"应用名称",width:"180",align:"center"}),e(i,{fixed:"right",label:"操作",align:"center",width:"180"},{default:a(l=>[e(c,{link:"",type:"primary",size:"small",onClick:R=>ye(l.row)},{default:a(()=>[f(" 变更 ")]),_:2},1032,["onClick"]),e(M,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:R=>_e(l.row)},{reference:a(()=>[e(c,{link:"",type:"danger",size:"small"},{default:a(()=>[f(" 删除分类 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[te,s(I)]])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(Z,{modelValue:s(g),"onUpdate:modelValue":t[7]||(t[7]=l=>j(g)?g.value=l:null),"close-on-click-modal":!1,title:s(ce),width:"770",onClose:t[8]||(t[8]=l=>ie(s(B)))},{footer:a(()=>[N("span",$e,[e(c,{onClick:t[5]||(t[5]=l=>g.value=!1)},{default:a(()=>[f("取消")]),_:1}),e(c,{type:"primary",onClick:t[6]||(t[6]=l=>he(s(B)))},{default:a(()=>[f(k(s(J)),1)]),_:1})])]),default:a(()=>[e(Y,{ref_key:"formPackageChatBoxTypeRef",ref:B,"label-position":"right","label-width":"120px",model:r,rules:ue},{default:a(()=>[e(m,{label:"分类启用状态",prop:"status"},{default:a(()=>[e(G,{modelValue:r.status,"onUpdate:modelValue":t[1]||(t[1]=l=>r.status=l)},null,8,["modelValue"]),e(K,{class:"box-item",effect:"dark",placement:"right"},{content:a(()=>[De]),default:a(()=>[e(b,{class:"ml-3 cursor-pointer"},{default:a(()=>[e(H)]),_:1})]),_:1})]),_:1}),e(m,{label:"排序Order",prop:"order"},{default:a(()=>[e(h,{modelValue:r.order,"onUpdate:modelValue":t[2]||(t[2]=l=>r.order=l),placeholder:"排序id越大越靠前"},null,8,["modelValue"])]),_:1}),e(m,{label:"分类名称",prop:"name"},{default:a(()=>[e(h,{modelValue:r.name,"onUpdate:modelValue":t[3]||(t[3]=l=>r.name=l),placeholder:"请填写提示词名称（用户看到的名称）"},null,8,["modelValue"])]),_:1}),e(m,{label:"分类图标",prop:"proxyUrl"},{default:a(()=>[e(h,{modelValue:r.icon,"onUpdate:modelValue":t[4]||(t[4]=l=>r.icon=l),placeholder:"请填写分类图标！"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(Z,{modelValue:s(y),"onUpdate:modelValue":t[18]||(t[18]=l=>j(y)?y.value=l:null),"close-on-click-modal":!1,title:s(me),width:"770",onClose:t[19]||(t[19]=l=>pe(s(re)))},{footer:a(()=>[N("span",Pe,[e(c,{onClick:t[16]||(t[16]=l=>y.value=!1)},{default:a(()=>[f("取消")]),_:1}),e(c,{type:"primary",onClick:t[17]||(t[17]=l=>ve(s(B)))},{default:a(()=>[f(k(s(J)),1)]),_:1})])]),default:a(()=>[e(Y,{ref_key:"formPackageChatBoxTypeRef",ref:B,"label-position":"right","label-width":"120px",model:u,rules:de},{default:a(()=>[e(m,{label:"启用状态",prop:"status"},{default:a(()=>[e(G,{modelValue:r.status,"onUpdate:modelValue":t[9]||(t[9]=l=>r.status=l)},null,8,["modelValue"]),e(K,{class:"box-item",effect:"dark",placement:"right"},{content:a(()=>[Ae]),default:a(()=>[e(b,{class:"ml-3 cursor-pointer"},{default:a(()=>[e(H)]),_:1})]),_:1})]),_:1}),e(m,{label:"选择分类",prop:"typeId"},{default:a(()=>[e(ee,{modelValue:u.typeId,"onUpdate:modelValue":t[10]||(t[10]=l=>u.typeId=l),placeholder:"请选择分类状态",clearable:"",style:{width:"100%"}},{default:a(()=>[(v(!0),F(ae,null,oe(s(O),l=>(v(),P(E,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"选择应用",prop:"appId"},{default:a(()=>[e(ee,{modelValue:u.appId,"onUpdate:modelValue":t[11]||(t[11]=l=>u.appId=l),placeholder:"请选择跳转应用",clearable:"",style:{width:"100%"}},{default:a(()=>[(v(!0),F(ae,null,oe(s(Q),l=>(v(),P(E,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"标题名称",prop:"title"},{default:a(()=>[e(h,{modelValue:u.title,"onUpdate:modelValue":t[12]||(t[12]=l=>u.title=l),placeholder:"请填写子项标题名称"},null,8,["modelValue"])]),_:1}),e(m,{label:"排序Order",prop:"order"},{default:a(()=>[e(h,{modelValue:r.order,"onUpdate:modelValue":t[13]||(t[13]=l=>r.order=l),placeholder:"排序id越大越靠前"},null,8,["modelValue"])]),_:1}),e(m,{label:"跳转地址",prop:"prompt"},{default:a(()=>[e(h,{modelValue:u.url,"onUpdate:modelValue":t[14]||(t[14]=l=>u.url=l),placeholder:"请填写跳转地址！"},null,8,["modelValue"])]),_:1}),e(m,{label:"预设问题",prop:"prompt"},{default:a(()=>[e(h,{type:"textarea",rows:5,modelValue:u.prompt,"onUpdate:modelValue":t[15]||(t[15]=l=>u.prompt=l),placeholder:"请填写预设问题、如果设置了应用、那么点击优先跳转应用、如果未设置、点击则会直接在对话中发当前填写预设内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof se=="function"&&se(ze);export{ze as default};