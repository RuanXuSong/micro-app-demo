(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[933],{84664:function(V){V.exports={formWrap:"formWrap___276Lb",rowWrap:"rowWrap___1Q2qE",listWrap:"listWrap___2GzdK",userName:"userName___3K3PK"}},55632:function(V){V.exports={treeWrap:"treeWrap___LOi_-",cover:"cover___3a6dl"}},31567:function(V,x,e){"use strict";var B=e(19597),I=e(2291),$=e(37482),v=e(3810),Q=e(44742),d=e(67294),t=e(48786);x.Z=function(C){var M=C.buttons,u=C.maxNumber,n=u===void 0?2:u,r=C.className,U=C.style,Z=M.filter(function(o){return!o.hidden}),ve=Z.length,fe=function(F){var S=F,D=[];return F.length>n&&(S=F.slice(0,n-1),D=F.slice(n-1)),[S,D]},oe=(0,d.useMemo)(function(){return fe(Z)},[Z]),H=(0,Q.Z)(oe,2),q=H[0],he=H[1];return d.createElement("div",{className:r,style:U},q.map(function(o,F){var S=o.name,D=o.key,ge=o.onClick,pe=o.path,Ee=d.createElement("a",{style:{marginRight:18},key:D,onClick:pe?function(){return t.m8.push(pe)}:ge},S);return F!==ve-1?d.createElement(d.Fragment,{key:D},Ee):Ee}),he.length>0&&d.createElement(I.Z,{overlay:d.createElement(v.Z,null,he.map(function(o){return d.createElement(v.Z.Item,{onClick:o.path?function(){return t.m8.push(o.path)}:function(){var F;return(F=o.onClick)===null||F===void 0?void 0:F.call(o)}},o.name)}))},d.createElement("a",null,"\u66F4\u591A")))}},24342:function(V,x,e){"use strict";var B=e(13378),I=e(56361),$=e(3911),v=e(67294),Q=e(87542);x.Z=function(d){var t=d.value,C=t===void 0?[]:t,M=d.onChange,u=(0,$.Z)(d,["value","onChange"]),n={selectedRowKeys:C,onChange:function(U){M==null||M(U)}};return v.createElement(Q.ZP,(0,B.Z)({rowSelection:(0,I.Z)((0,I.Z)({},n),{},{checkStrictly:!0})},u))}},31261:function(V,x,e){"use strict";e.d(x,{Z:function(){return $}});var B=e(67294),I=e(48786);function $(v){var Q=(0,I.tT)("@@initialState"),d=Q.initialState,t=d||{},C=t.privileges,M=C===void 0?[]:C,u=(0,B.useMemo)(function(){return M.some(function(n){return n.resourceKey===v})},[M,v]);return{showCompanySelect:u}}},84850:function(V,x,e){"use strict";e.d(x,{Z:function(){return $}});var B=e(44742),I=e(67294);function $(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,Q=(0,I.useState)(!1),d=(0,B.Z)(Q,2),t=d[0],C=d[1],M=(0,I.useState)(""),u=(0,B.Z)(M,2),n=u[0],r=u[1];return(0,I.useEffect)(function(){C(v)},[]),{spinning:t,setSpinning:C,tip:n,setTip:r}}},3933:function(V,x,e){"use strict";e.r(x),e.d(x,{default:function(){return et}});var B=e(13753),I=e(48429),$=e(14643),v=e(92909),Q=e(97140),d=e(93228),t=e(67294),C=e(87542),M=e(49101),u=e(31567),n=e(26780),r=e(46567),U=e(58210),Z=e(87240),ve=e(37092),fe=e(91911),oe=e(13378),H=e(68137),q=e(50532),he=e(3911),o=e(56361),F=e(67604),S=e(66498),D=e(44742),ge=e(46368),pe=e(46391),Ee=e(47376),se=e(66827),Re=e(84850),ye=e(48786),me=e(66594),be=e(55632),Te=e.n(be),Me=e(50189),Le=function(s){var i=[];return s?(Object.keys(s).forEach(function(m){i.push.apply(i,(0,Me.Z)(s[m].map(function(a){return a.id})))}),i):[]},Oe=e(27870),xe=e(24342),Fe={labelCol:{span:3},wrapperCol:{span:20}},We={labelCol:{span:3},wrapperCol:{span:10}},Be=function(s){var i=s.visible,m=s.toggleVisible,a=s.formData,ee=s.loading,_=s.reload,ue=s.resourceList,W=s.resourceTreeData,G=S.Z.useForm(),te=(0,D.Z)(G,1),f=te[0],K=(0,Re.Z)(),N=K.tip,L=K.setTip,J=a.id,le=(0,ye.tT)("@@initialState"),Y=le.initialState,R=Y||{},ie=R.userInfo,O=ie||{},P=O.orgCode,T=(0,t.useState)(!1),j=(0,D.Z)(T,2),X=j[0],A=j[1];(0,t.useEffect)(function(){if(!(0,ge.Z)(a)){var p=a||{},E=p.resourceMap,w=E===void 0?{}:E,de=Le(w);f.setFieldsValue((0,o.Z)((0,o.Z)({},a),{},{resourceIds:de,modalResourceIds:de}))}return function(){f.resetFields()}},[a]);var ne=function(){m(),f.resetFields()},k=function(E){var w=E.resourceIds,de=w===void 0?[]:w,z=E.modalResourceIds,Se=(0,he.Z)(E,["resourceIds","modalResourceIds"]);L("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var Ce=(0,Oe.HO)((0,o.Z)((0,o.Z)({},Se),{},{clientKey:me.OW.clientId,id:J,businessValue:P,resourceIds:de.filter(function(De){return(0,pe.Z)(De)})}));return API.authorization.resourceRole.resourceSave.fetch(Ce)},h=(0,se.QT)(k,{manual:!0,onSuccess:function(){v.default.success("\u4FDD\u5B58\u6210\u529F"),f.resetFields(),m(),_==null||_()}}),g=h.run,l=h.loading,y=[{title:"\u8D44\u6E90\u540D\u79F0",dataIndex:"description",align:"left",copyable:!1,valueType:"text"},{title:"\u8D44\u6E90\u6807\u8BC6",dataIndex:"resourceKey",align:"left",copyable:!1,valueType:"text"},{title:"\u8D44\u6E90\u7C7B\u578B",dataIndex:"type",align:"left",copyable:!1,valueType:"text",render:function(E){return E===me.o4.\u8DEF\u7531\u7EA7\u8D44\u6E90?"\u8DEF\u7531\u7EA7\u8D44\u6E90":"\u9875\u9762\u7EA7\u8D44\u6E90"}}];return t.createElement(S.Z,(0,oe.Z)({form:f,onFinish:g},We),t.createElement(r.Z,{centered:!0,visible:i,forceRender:!0,maskClosable:!1,title:"".concat((0,Ee.Z)(J)?"\u65B0\u5EFA":"\u7F16\u8F91","\u89D2\u8272"),okButtonProps:{htmlType:"submit"},width:800,onOk:function(){return f.submit()},onCancel:ne,confirmLoading:l},t.createElement(Z.Z,{spinning:ee&&l,tip:N},t.createElement(S.Z.Item,{label:"\u89D2\u8272\u540D\u79F0",name:"role",rules:[{whitespace:!0},{required:!0}]},t.createElement(q.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement(S.Z.Item,(0,oe.Z)({label:"\u89D2\u8272\u63CF\u8FF0",name:"comment"},Fe,{rules:[{whitespace:!0}]}),t.createElement(q.Z,{placeholder:"\u8BF7\u8F93\u5165"})),t.createElement("div",{className:Te().treeWrap},t.createElement("div",{className:Te().cover,onClick:function(){return A(!0)}}),t.createElement(S.Z.Item,{label:"\u62E5\u6709\u8D44\u6E90",name:"resourceIds",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u62E5\u6709\u8D44\u6E90"}]},t.createElement(fe.Z,{treeData:W,allowClear:!0,multiple:!0,placeholder:"\u8BF7\u9009\u62E9"}))))),t.createElement(r.Z,{centered:!0,visible:X,forceRender:!0,maskClosable:!1,title:"\u62E5\u6709\u8D44\u6E90",width:800,onOk:function(){f.setFieldsValue({resourceIds:f.getFieldValue("modalResourceIds")}),A(!1)},onCancel:function(){f.setFieldsValue({modalResourceIds:f.getFieldValue("resourceIds")}),A(!1)},confirmLoading:l},t.createElement(S.Z.Item,{label:"\u62E5\u6709\u8D44\u6E90",name:"modalResourceIds",noStyle:!0},t.createElement(xe.Z,{search:!1,rowKey:"id",columns:y,dataSource:ue}))))},Ue=Be,rt=e(66518),Pe=e(95322),at=e(44862),_e=e(42091),Ke=e(3855),Ne=e(84664),Ie=e.n(Ne),Ze=e(89193),je={page:1,pageSize:6},ze={labelCol:{span:6},wrapperCol:{span:16}},Ve=function(c){var s=c.visible,i=c.toggleVisible,m=c.formData,a=c.reload,ee=c.orgCode,_=(0,ye.tT)("@@initialState"),ue=_.initialState,W=ue||{},G=W.userInfo,te=G||{},f=te.orgCode,K=S.Z.useForm(),N=(0,D.Z)(K,1),L=N[0],J=(0,Re.Z)(),le=J.tip,Y=J.setTip,R=m.id,ie=(0,t.useState)([]),O=(0,D.Z)(ie,2),P=O[0],T=O[1],j=(0,Ze.x)(je),X=(0,D.Z)(j,2),A=X[0],ne=X[1],k=(0,se.QT)(API.platform.sysUser.pageList.fetch,{manual:!0}),h=k.data,g=k.run,l=k.loading,y=(0,se.QT)(API.authorization.resourceRole.resourceRoleDetailUser.fetch,{manual:!0,onSuccess:function(b){var re=b.userIdList,ae=re===void 0?[]:re;T(ae)}}),p=y.run,E=y.loading;(0,t.useEffect)(function(){s&&(g((0,o.Z)((0,o.Z)({},A),{},{orgCode:ee||f})),p({clientKey:me.OW.clientId,roleId:R}))},[ee,f,s,A]),(0,t.useEffect)(function(){return(0,ge.Z)(m)||L.setFieldsValue((0,o.Z)({},m)),function(){L.resetFields()}},[m]);var w=function(){i(),L.resetFields()},de=function(){return Y("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019..."),API.authorization.resourceRole.resourceSaveAddUser.fetch({clientKey:me.OW.clientId,id:R,userIds:P.map(function(b){return+b}),resourceIds:m.resourceIds,role:m.role})},z=(0,se.QT)(de,{manual:!0,onSuccess:function(){v.default.success("\u6388\u6743\u6210\u529F"),L.resetFields(),i(),a==null||a()}}),Se=z.run,Ce=z.loading,De=function(b,re){var ae=(0,Me.Z)(P);b.target.checked?ae.push(+re.userId):ae=ae.filter(function(nt){return nt!==re.userId}),T(ae)},tt=function(b){return t.createElement(Pe.ZP.Item,null,t.createElement(_e.Z,{checked:P.includes(+b.userId),onChange:function(ae){return De(ae,b)}},t.createElement("div",{className:Ie().userName},b.userName,b.phone?"(".concat(b.phone.slice(-4),")"):"")))};return t.createElement(r.Z,{centered:!0,visible:s,forceRender:!0,maskClosable:!1,title:"\u7528\u6237\u6388\u6743",okButtonProps:{htmlType:"submit"},width:442,onOk:function(){return L.submit()},onCancel:w,confirmLoading:Ce,wrapClassName:"auth-modal"},t.createElement(Z.Z,{spinning:l&&Ce&&E,tip:le},t.createElement(S.Z,(0,oe.Z)({form:L,onFinish:Se},ze,{className:Ie().formWrap}),t.createElement(S.Z.Item,{label:"\u4F01\u4E1A\u7F16\u7801",name:"account",tooltip:{icon:t.createElement(Ke.Z,null),title:"\u4F01\u4E1A\u7F16\u7801\u5C06\u4F5C\u4E3A\u4F01\u4E1A\u4E0B\u6240\u6709\u8D26\u53F7\u540E\u7F00"},noStyle:!0},t.createElement(Pe.ZP,{loading:l,className:Ie().listWrap,size:"small",dataSource:h==null?void 0:h.list,pagination:(0,o.Z)((0,o.Z)({},A),{},{current:A.page,onChange:function(b){ne(function(re){re.page=b})},showQuickJumper:!0}),renderItem:tt})))))},$e=e(68699),Qe=e(94043),Ae=e.n(Qe),He=e(70552),Ge=e(95760);function Je(){var c=(0,se.QT)(API.platform.sysUser.myResourceList.fetch),s=c.data,i=c.run;return{resourceList:(0,Ge.r)(s),resourceTreeData:(0,He.Z)(s),fetchResourceList:i}}var Ye=function(){var c=(0,t.useRef)(),s=(0,t.useState)(),i=(0,D.Z)(s,2),m=i[0],a=i[1],ee=(0,Ze.x)({visible:!1,formData:{},loading:!1}),_=(0,D.Z)(ee,2),ue=_[0],W=_[1],G=(0,Ze.x)({visible:!1,formData:{}}),te=(0,D.Z)(G,2),f=te[0],K=te[1],N=Je(),L=N.fetchResourceList,J=N.resourceList,le=N.resourceTreeData,Y=c.current||{},R=Y.reload,ie=(0,se.QT)(API.authorization.role.update.fetch,{manual:!0,onSuccess:function(){v.default.success("\u64CD\u4F5C\u6210\u529F"),R==null||R()}}),O=ie.run,P=(0,se.QT)(API.authorization.resourceRole.resourceDelete.fetch,{manual:!0,onSuccess:function(){v.default.success("\u5220\u9664\u6210\u529F"),R==null||R()}}),T=P.run,j=function(){var h=(0,$e.Z)(Ae().mark(function g(l){var y,p,E,w;return Ae().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,API.platform.sysRole.pageList.fetch((0,Oe.HO)((0,o.Z)((0,o.Z)({},l),{},{page:(l==null?void 0:l.current)||me.ii.page,pageSize:(l==null?void 0:l.pageSize)||me.ii.pageSize})));case 2:return y=z.sent,p=y.list,E=y.page,w=y.total,z.abrupt("return",{data:p||[],page:E,success:!0,total:w});case 7:case"end":return z.stop()}},g)}));return function(l){return h.apply(this,arguments)}}(),X=function(g){W(function(l){l.visible=!0,l.loading=!0,l.formData=g})},A=function(){W(function(g){g.visible=!0,g.formData={}})},ne=function(g){var l=g||{},y=l.resourceMap,p=Le(y);K(function(E){E.visible=!0,E.formData=(0,o.Z)((0,o.Z)({},g),{},{resourceIds:p})})},k=function(g){var l={edit:W,auth:K};l[g](function(y){y.visible=!1,y.loading=!1,y.formData={}})};return{orgCode:m,setOrgCode:a,actionRef:c,reload:R,editModalConfig:ue,resourceList:J,fetchResourceList:L,resourceTreeData:le,setEditModalConfig:W,authModalConfig:f,setAuthModalConfig:K,handleDisable:O,handleDelete:T,fetchList:j,handleRoleEdit:X,handleRoleAdd:A,handleAuthorize:ne,handleModalHide:k}},Xe=e(31261),ot=e(81984),ke=e(82692),we=e(73567),qe=function(c){var s=c.text,i=s===void 0?"":s,m=c.maxLength,a=m===void 0?50:m;return(i==null?void 0:i.length)>a?t.createElement(ke.Z,{title:i},t.createElement("span",null,we.ZP.textEllipsis(i,a))):t.createElement("span",null,i)},et=function(){var c=(0,ye.tT)("company"),s=c.companyMapOptions,i=(0,Xe.Z)("cloud_authority_menu_company"),m=i.showCompanySelect,a=Ye(),ee=a.orgCode,_=a.setOrgCode,ue=a.actionRef,W=a.reload,G=a.editModalConfig,te=a.fetchList,f=a.handleRoleAdd,K=a.handleRoleEdit,N=a.handleModalHide,L=a.authModalConfig,J=a.resourceList,le=a.resourceTreeData,Y=a.fetchResourceList,R=a.handleAuthorize,ie=[{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"orgCode",align:"left",copyable:!1,valueType:"text",hideInSearch:!m,hideInTable:!0,renderFormItem:function(){return t.createElement(d.Z,{allowClear:!0,options:s,onChange:function(T){_(T),Y==null||Y({orgCode:T})}})}},{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"role",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"\u89D2\u8272\u63CF\u8FF0",dataIndex:"comment",align:"left",copyable:!1,valueType:"text",hideInSearch:!0},{title:"\u62E5\u6709\u8D44\u6E90",dataIndex:"resourceList",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(P,T){var j=T||{},X=j.resourceMap,A=X===void 0?[]:X,ne=[];return Object.keys(A).forEach(function(k){A[k].forEach(function(h){ne.push(h.description)})}),t.createElement(qe,{text:ne.join(",")})}},{title:"\u64CD\u4F5C",dataIndex:"id",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(P,T){return t.createElement(u.Z,{buttons:[{name:"\u7F16\u8F91",key:"edit",onClick:function(){return K(T)}},{name:"\u6388\u6743",key:"authorize",onClick:function(){return R(T)}}]})}}];return t.createElement(t.Fragment,null,t.createElement(C.ZP,{style:{padding:"18px 22px"},actionRef:ue,request:te,onRequestError:function(P){console.error(P.message),v.default.error("\u6570\u636E\u52A0\u8F7D\u5931\u8D25,".concat(P.message))},columns:ie,bordered:!0,rowKey:"id",pagination:{size:"default"},dateFormatter:"string",headerTitle:"\u83DC\u5355\u6743\u9650\u5217\u8868",tableAlertRender:!1,toolBarRender:function(){return[t.createElement(I.Z,{onClick:f,key:"add",type:"primary"},t.createElement(M.Z,null),"\u65B0\u5EFA")]}}),t.createElement(Ue,{visible:G.visible,formData:G.formData,loading:G.loading,toggleVisible:function(){return N("edit")},reload:W,resourceList:J,resourceTreeData:le}),t.createElement(Ve,{visible:L.visible,formData:L.formData,toggleVisible:function(){return N("auth")},reload:W,orgCode:ee}))}},73567:function(V,x,e){"use strict";var B=1,I=1,$=4;x.ZP={fillZero:function(n){return typeof n=="number"&&n>=10?n:"0".concat(n)},textEllipsis:function(n,r){return n.length>r&&r>0?"".concat(n.substring(0,r),"..."):n},getLastSubstring:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n.substring(n.lastIndexOf(r)+r.length,n.length)},valueToString:function(n){return typeof n=="string"?n:JSON.stringify(n)},copyText:function(n){var r=document.createElement("input");document.body.appendChild(r),r.setAttribute("value",n),r.select(),document.execCommand("copy"),document.body.removeChild(r)},imgUrlToBase64:function(n,r,U){var Z=document.createElement("canvas"),ve=Z.getContext("2d");return new Promise(function(fe,oe){var H=new Image;H.crossOrigin="Anonymous",H.onload=function(){Z.width=r,Z.height=U,ve.drawImage(H,0,0,r,U);var q=Z.toDataURL("image/");Z=null,fe(q)},H.onerror=function(q){oe(q)},H.src=n})}};var v=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return n||n===0?(n/100).toFixed(r):""},Q=function(n){return n*100},d=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;return n?"".concat(n.slice(0,r),"****").concat(n.slice(-r)):""},t=function(n){var r=/(?<=.)./g;return n==null?void 0:n.replace(r,"*")},C=function(n){var r,U=(r=n==null?void 0:n.split("-"))!==null&&r!==void 0?r:[];return U.filter(function(Z){return!!Z}).length===2?n:U.join("")},M=function(n,r){return n===B&&(r===I||r===$)}}}]);
