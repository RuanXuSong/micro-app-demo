"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[505],{62571:function(e,n,t){var r=t(5574),o=t.n(r),i=t(67294),a=t(13013),l=t(66516),s=t(84354),u=t(85893);n.Z=function(e){var n=e.buttons,t=e.maxNumber,r=void 0===t?2:t,c=e.className,d=e.style,f=n.filter((function(e){return!e.hidden})),h=f.length,m=(0,i.useMemo)((function(){return function(e){var n=e,t=[];return e.length>r&&(n=e.slice(0,r-1),t=e.slice(r-1)),[n,t]}(f)}),[f]),p=o()(m,2),g=p[0],v=p[1];return(0,u.jsxs)("div",{className:c,style:d,children:[g.map((function(e,n){var t=e.name,r=e.key,o=e.onClick,a=e.path,l=(0,u.jsx)("a",{style:{marginRight:18},onClick:a?function(){return s.history.push(a)}:o,children:t},r);return n!==h-1?(0,u.jsx)(i.Fragment,{children:l},r):l})),v.length>0&&(0,u.jsx)(a.Z,{overlay:(0,u.jsx)(l.Z,{children:v.map((function(e){return(0,u.jsx)(l.Z.Item,{onClick:e.path?function(){return s.history.push(e.path)}:function(){var n;return null===(n=e.onClick)||void 0===n?void 0:n.call(e)},children:e.name})}))}),children:(0,u.jsx)("a",{children:"更多"})})]})}},77123:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(97857),o=t.n(r),i=t(19632),a=t.n(i),l=t(5574),s=t.n(l),u=t(13769),c=t.n(u),d=t(67294),f=t(9308),h=t(27601),m=t(96486),p=t(14955),g="disabled___mlAxB",v=t(85893),x=["value","onChange","disabled","rowKey","dataSource"],b=function(e){var n=e.value,t=void 0===n?[]:n,r=e.onChange,i=e.disabled,l=e.rowKey,u=e.dataSource,b=c()(e,x),y=(0,d.useRef)([]),C=(0,d.useRef)([]),I=(0,d.useState)(!0),Z=s()(I,2),S=Z[0],j=Z[1],R={selectedRowKeys:t,onChange:function(e,n){var t;if(!i){var o=a()(e),s=function(e,n){for(var t={add:[],del:[]},r={},o=0;o<e.length;o++)r[e[o]]=e[o];for(var i=0;i<n.length;i++)(0,h.Z)(r[n[i]])?t.add.push(n[i]):delete r[n[i]];for(var a in r)t.del.push(r[a]);return t}(y.current,e),c=s.add,d=void 0===c?[]:c,f=s.del,g=void 0===f?[]:f,v=n.filter((function(e){return d.includes(e[l])})),x=C.current.filter((function(e){return g.includes(e[l])}));!function e(n){for(var t=0;t<n.length;t++){var r=(n[t]||{}).children;o.push(n[t][l]),(0,m.isEmpty)(r)||e(r)}}(v);!function e(n){for(var t=function(t){var r=(n[t]||{}).children;o=o.filter((function(e){return e!==n[t][l]})),(0,m.isEmpty)(r)||e(r)},r=0;r<n.length;r++)t(r)}(x);var b=a()(new Set(o));null==r||r(b),y.current=a()(b);var I=a()(u||[]);C.current=null!==(t=(0,p.oO)(I).filter((function(e){return b.includes(e[l])})))&&void 0!==t?t:[]}}};return(0,d.useEffect)((function(){if(S&&!(0,m.isEmpty)(t)){var e,n;y.current=t;var r=a()(u||[]);C.current=null!==(e=null===(n=(0,p.oO)(r))||void 0===n?void 0:n.filter((function(e){return t.includes(e[l])})))&&void 0!==e?e:[],j(!1)}}),[t]),(0,v.jsx)(f.ZP,o()({className:i?g:{},rowSelection:o()(o()({},R),{},{checkStrictly:!0,selections:!1}),rowKey:l,dataSource:u},b))}},73011:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),o=t(84354);function i(e){var n=((0,o.useModel)("@@initialState").initialState||{}).privileges,t=void 0===n?[]:n;return{showCompanySelect:(0,r.useMemo)((function(){return t.some((function(n){return n.resourceKey===e}))}),[t,e])}}},59360:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(5574),o=t.n(r),i=t(67294);function a(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,i.useState)(!1),t=o()(n,2),r=t[0],a=t[1],l=(0,i.useState)(""),s=o()(l,2),u=s[0],c=s[1];return(0,i.useEffect)((function(){a(e)}),[]),{spinning:r,setSpinning:a,tip:u,setTip:c}}},54947:function(e,n,t){t.r(n),t.d(n,{default:function(){return ue}});var r=t(34041),o=t(12461),i=t(71577),a=t(9308),l=t(24969),s=t(62571),u=t(13769),c=t.n(u),d=t(97857),f=t.n(d),h=t(5574),m=t.n(h),p=t(67294),g=t(66490),v=t(74348),x=t(11382),b=t(11486),y=t(79697),C=t(290),I=t(27601),Z=t(86317),S=t(59360),j=t(84354),R=t(43758),w={treeWrap:"treeWrap___LkF5B",cover:"cover___S6EgI"},k=t(19632),_=t.n(k),T=function(e){var n=[];return e?(Object.keys(e).forEach((function(t){n.push.apply(n,_()(e[t].map((function(e){return e.id}))))})),n):[]},A=t(41712),D=t(77123),E=t(82507),L="tree___aL6r8",P="overflowTree___uwa_l",F=t(85893),M=["value","onChange"],O=function(e){var n=e.value,t=void 0===n?[]:n,r=e.onChange,o=c()(e,M),i=(0,p.useState)(!1),a=m()(i,2),l=a[0],s=a[1];return(0,p.useEffect)((function(){var e=document.getElementsByClassName("cloud-select-selector")[0].clientHeight,n=document.getElementsByClassName("cloud-select-selection-overflow")[0].clientHeight;s(n>e)}),[t]),(0,F.jsx)(E.Z,f()(f()({value:t,onChange:r},o),{},{className:l?P:L}))},N=["resourceIds","modalResourceIds"],z={labelCol:{span:3},wrapperCol:{span:20}},K={labelCol:{span:3},wrapperCol:{span:10}},V=function(e){var n=e.visible,t=e.toggleVisible,r=e.formData,i=e.loading,a=e.reload,l=e.resourceList,s=e.resourceTreeData,u=e.orgCode,d=e.disabledAction,h=g.Z.useForm(),k=m()(h,1)[0],_=(0,S.Z)(),E=_.tip,L=_.setTip,P=r.id,M=(((0,j.useModel)("@@initialState").initialState||{}).userInfo||{}).orgCode,V=(0,p.useState)(!1),B=m()(V,2),Q=B[0],W=B[1];(0,p.useEffect)((function(){if(!(0,y.Z)(r)){var e=(r||{}).resourceMap,n=void 0===e?{}:e,t=T(n);(0,y.Z)(n["敏捷应用"])||t.push(R.ku),k.setFieldsValue(f()(f()({},r),{},{resourceIds:t,modalResourceIds:t}))}return function(){k.resetFields()}}),[r]);var H=(0,Z.QT)((function(e){var n=e.resourceIds,t=void 0===n?[]:n,r=(e.modalResourceIds,c()(e,N));L("数据保存中，请稍候...");var o=(0,A.HO)(f()(f()({},r),{},{clientKey:R.OW.clientId,id:P,businessValue:null!=u?u:M,resourceIds:t.filter((function(e){return(0,C.Z)(e)}))}));return API.authorization.resourceRole.resourceSave.fetch(o)}),{manual:!0,onSuccess:function(){o.ZP.success("保存成功"),k.resetFields(),t(),null==a||a()}}),U=H.run,q=H.loading;console.log("resourceTreeData: ",s);return(0,F.jsxs)(g.Z,f()(f()({form:k,onFinish:U},K),{},{children:[(0,F.jsx)(v.Z,{centered:!0,visible:n,forceRender:!0,maskClosable:!1,title:"".concat((0,I.Z)(P)?"新建":"编辑","角色"),okButtonProps:{htmlType:"submit",disabled:d},width:800,onOk:function(){return k.submit()},onCancel:function(){t(),k.resetFields()},confirmLoading:q,children:(0,F.jsxs)(x.Z,{spinning:i&&q,tip:E,children:[(0,F.jsx)(g.Z.Item,{label:"角色名称",name:"role",rules:[{whitespace:!0},{required:!0}],children:(0,F.jsx)(b.Z,{placeholder:"请输入"})}),(0,F.jsx)(g.Z.Item,f()(f()({label:"角色描述",name:"comment"},z),{},{rules:[{whitespace:!0}],children:(0,F.jsx)(b.Z,{placeholder:"请输入"})})),(0,F.jsxs)("div",{className:w.treeWrap,children:[(0,F.jsx)("div",{className:w.cover,onClick:function(){return W(!0)}}),(0,F.jsx)(g.Z.Item,{label:"拥有资源",name:"resourceIds",rules:[{required:!0,message:"请选择拥有资源"}],children:(0,F.jsx)(O,{className:w.tree,treeData:s,allowClear:!0,multiple:!0,placeholder:"请选择"})})]})]})}),(0,F.jsx)(v.Z,{centered:!0,visible:Q,forceRender:!0,maskClosable:!1,title:"拥有资源",width:800,onOk:function(){k.setFieldsValue({resourceIds:k.getFieldValue("modalResourceIds")}),W(!1)},onCancel:function(){k.setFieldsValue({modalResourceIds:k.getFieldValue("resourceIds")}),W(!1)},confirmLoading:q,children:(0,F.jsx)(g.Z.Item,{label:"拥有资源",name:"modalResourceIds",noStyle:!0,children:(0,F.jsx)(D.Z,{disabled:d,search:!1,rowKey:"id",columns:[{title:"资源名称",dataIndex:"description",align:"left",copyable:!1,valueType:"text"}],dataSource:l})})})]}))},B=t(95507),Q=t(32808),W="formWrap___Fwld8",H="listWrap___JUJAs",U="userName___KHheP",q=t(60106),J={page:1,pageSize:6},G={labelCol:{span:6},wrapperCol:{span:16}},X=function(e){var n=e.visible,t=e.toggleVisible,r=e.formData,i=e.reload,a=e.orgCode,l=e.disabledAction,s=(((0,j.useModel)("@@initialState").initialState||{}).userInfo||{}).orgCode,u=g.Z.useForm(),c=m()(u,1)[0],d=(0,S.Z)(),h=d.tip,b=d.setTip,C=r.id,I=(0,p.useState)([]),w=m()(I,2),k=w[0],T=w[1],A=(0,q.x)(J),D=m()(A,2),E=D[0],L=D[1],P=(0,Z.QT)(API.platform.sysUser.pageList.fetch,{manual:!0}),M=P.data,O=P.run,N=P.loading,z=(0,Z.QT)(API.authorization.resourceRole.resourceRoleDetailUser.fetch,{manual:!0,onSuccess:function(e){var n=e.userIdList;T(void 0===n?[]:n)}}),K=z.run,V=z.loading;(0,p.useEffect)((function(){n&&(O(f()(f()({},E),{},{orgCode:a||s})),K({clientKey:R.OW.clientId,roleId:C}))}),[a,s,n,E]),(0,p.useEffect)((function(){return(0,y.Z)(r)||c.setFieldsValue(f()({},r)),function(){c.resetFields()}}),[r]);var X=(0,Z.QT)((function(){return b("数据保存中，请稍候..."),API.authorization.resourceRole.resourceSaveAddUser.fetch({clientKey:R.OW.clientId,id:C,userIds:k.map((function(e){return+e})),resourceIds:r.resourceIds,role:r.role})}),{manual:!0,onSuccess:function(){o.ZP.success("授权成功"),c.resetFields(),t(),null==i||i()}}),Y=X.run,$=X.loading;return(0,F.jsx)(v.Z,{centered:!0,visible:n,forceRender:!0,maskClosable:!1,title:"用户授权",okButtonProps:{htmlType:"submit",disabled:l},width:442,onOk:function(){return c.submit()},onCancel:function(){t(),c.resetFields()},confirmLoading:$,wrapClassName:"auth-modal",children:(0,F.jsx)(x.Z,{spinning:N&&$&&V,tip:h,children:(0,F.jsx)(g.Z,f()(f()({form:c,onFinish:Y},G),{},{className:W,children:(0,F.jsx)(g.Z.Item,{label:"用户授权",noStyle:!0,children:(0,F.jsx)(B.ZP,{loading:N,className:H,size:"small",dataSource:null==M?void 0:M.list,pagination:f()(f()({},E),{},{current:E.page,onChange:function(e){L((function(n){n.page=e}))},showQuickJumper:!0}),renderItem:function(e){return(0,F.jsx)(B.ZP.Item,{children:(0,F.jsx)(Q.Z,{checked:k.includes(+e.userId),onChange:function(n){return function(e,n){var t=_()(k);e.target.checked?t.push(+n.userId):t=t.filter((function(e){return e!==n.userId})),T(t)}(n,e)},children:(0,F.jsxs)("div",{className:U,children:[e.name,e.phone?"(".concat(e.phone.slice(-4),")"):""]})})})}})})}))})})},Y=t(15009),$=t.n(Y),ee=t(99289),ne=t.n(ee),te=t(89891),re=t(62865);var oe=function(){var e=((0,j.useModel)("@@initialState").initialState||{}).userInfo,n=(e||{}).orgCode,t=(0,p.useRef)(),r=(0,p.useState)(),i=m()(r,2),a=i[0],l=i[1],s=a!==n,u=(0,q.x)({visible:!1,formData:{},loading:!1}),c=m()(u,2),d=c[0],h=c[1],g=(0,q.x)({visible:!1,formData:{}}),v=m()(g,2),x=v[0],b=v[1],y=function(){var e=(0,Z.QT)(API.platform.sysUser.myResourceList.fetch),n=e.data,t=e.run;return{resourceList:(0,re.r)(n),resourceTreeData:(0,te.Z)(n),fetchResourceList:t}}(),C=y.fetchResourceList,I=y.resourceList,S=y.resourceTreeData,w=(t.current||{}).reload,k=(0,Z.QT)(API.authorization.role.update.fetch,{manual:!0,onSuccess:function(){o.ZP.success("操作成功"),null==w||w()}}).run,_=(0,Z.QT)(API.authorization.resourceRole.resourceDelete.fetch,{manual:!0,onSuccess:function(){o.ZP.success("删除成功"),null==w||w()}}).run;(0,p.useEffect)((function(){null!=e&&e.orgCode&&l(null==e?void 0:e.orgCode)}),[e]),(0,p.useEffect)((function(){null==w||w()}),[a]);var D=function(){var e=ne()($()().mark((function e(n){var t,r,o,i;return $()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,API.platform.sysRole.pageList.fetch((0,A.HO)(f()(f()({},n),{},{orgCode:a,page:(null==n?void 0:n.current)||R.ii.page,pageSize:(null==n?void 0:n.pageSize)||R.ii.pageSize})));case 2:return t=e.sent,r=t.list,o=t.page,i=t.total,e.abrupt("return",{data:r||[],page:o,success:!0,total:i});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{orgCode:a,disabledAction:s,setOrgCode:l,actionRef:t,reload:w,editModalConfig:d,resourceList:I,fetchResourceList:C,resourceTreeData:S,setEditModalConfig:h,authModalConfig:x,setAuthModalConfig:b,handleDisable:k,handleDelete:_,fetchList:D,handleRoleEdit:function(e){h((function(n){n.visible=!0,n.loading=!0,n.formData=e}))},handleRoleAdd:function(){h((function(e){e.visible=!0,e.formData={}}))},handleAuthorize:function(e){var n=(e||{}).resourceMap,t=T(n);b((function(n){n.visible=!0,n.formData=f()(f()({},e),{},{resourceIds:t})}))},handleModalHide:function(e){({edit:h,auth:b})[e]((function(e){e.visible=!1,e.loading=!1,e.formData={}}))}}},ie=t(73011),ae=t(84908),le=t(7369),se=function(e){var n=e.text,t=void 0===n?"":n,r=e.maxLength,o=void 0===r?50:r;return(null==t?void 0:t.length)>o?(0,F.jsx)(ae.Z,{title:t,children:(0,F.jsx)("span",{children:le.ZP.textEllipsis(t,o)})}):(0,F.jsx)("span",{children:t})},ue=function(){var e=(0,j.useModel)("company").companyMapOptions,n=(0,ie.Z)("cloud_authority_menu_company").showCompanySelect,t=oe(),u=t.orgCode,c=t.setOrgCode,d=t.disabledAction,f=t.actionRef,h=t.reload,m=t.editModalConfig,p=t.fetchList,g=t.handleRoleAdd,v=t.handleRoleEdit,x=t.handleModalHide,b=t.authModalConfig,y=t.resourceList,C=t.resourceTreeData,I=t.fetchResourceList,Z=t.handleAuthorize,S=[{title:"企业名称",dataIndex:"orgCode",align:"left",copyable:!1,valueType:"text",hideInSearch:!n,hideInTable:!0,renderFormItem:function(){return(0,F.jsx)(r.Z,{value:u,allowClear:!0,options:e,onChange:function(e){c(e),null==I||I({orgCode:e})}})}},{title:"角色名称",dataIndex:"role",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"角色描述",dataIndex:"comment",align:"left",copyable:!1,valueType:"text",hideInSearch:!0},{title:"拥有资源",dataIndex:"resourceList",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(e,n){var t=(n||{}).resourceMap,r=void 0===t?[]:t,o=[];return Object.keys(r).forEach((function(e){r[e].forEach((function(e){o.push(e.description)}))})),(0,F.jsx)(se,{text:o.join(",")})}},{title:"操作",dataIndex:"id",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(e,n){return(0,F.jsx)(s.Z,{buttons:[{name:"编辑",key:"edit",onClick:function(){return v(n)}},{name:"授权",key:"authorize",onClick:function(){return Z(n)}}]})}}];return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a.ZP,{style:{padding:"18px 22px"},actionRef:f,request:p,onRequestError:function(e){console.error(e.message),o.ZP.error("数据加载失败,".concat(e.message))},onReset:function(){return c("")},columns:S,bordered:!0,rowKey:"id",pagination:{size:"default"},dateFormatter:"string",headerTitle:"菜单权限列表",tableAlertRender:!1,toolBarRender:function(){return[(0,F.jsxs)(i.Z,{onClick:g,type:"primary",children:[(0,F.jsx)(l.Z,{}),"新建"]},"add")]}}),(0,F.jsx)(V,{visible:m.visible,formData:m.formData,loading:m.loading,toggleVisible:function(){return x("edit")},reload:h,resourceList:y,resourceTreeData:C,orgCode:u,disabledAction:d}),(0,F.jsx)(X,{visible:b.visible,formData:b.formData,toggleVisible:function(){return x("auth")},reload:h,orgCode:u,disabledAction:d})]})}},7369:function(e,n,t){n.ZP={fillZero:function(e){return"number"==typeof e&&e>=10?e:"0".concat(e)},textEllipsis:function(e,n){return e.length>n&&n>0?"".concat(e.substring(0,n),"..."):e},getLastSubstring:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substring(e.lastIndexOf(n)+n.length,e.length)},valueToString:function(e){return"string"==typeof e?e:JSON.stringify(e)},copyText:function(e){var n=document.createElement("input");document.body.appendChild(n),n.setAttribute("value",e),n.select(),document.execCommand("copy"),document.body.removeChild(n)},imgUrlToBase64:function(e,n,t){var r=document.createElement("canvas"),o=r.getContext("2d");return new Promise((function(i,a){var l=new Image;l.crossOrigin="Anonymous",l.onload=function(){r.width=n,r.height=t,o.drawImage(l,0,0,n,t);var e=r.toDataURL("image/");r=null,i(e)},l.onerror=function(e){a(e)},l.src=e}))}}}}]);