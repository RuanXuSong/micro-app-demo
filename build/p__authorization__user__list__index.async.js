"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[559],{73011:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(84354);function i(e){var n=((0,r.useModel)("@@initialState").initialState||{}).privileges,t=void 0===n?[]:n;return{showCompanySelect:(0,a.useMemo)((function(){return t.some((function(n){return n.resourceKey===e}))}),[t,e])}}},65519:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var a=t(15009),r=t.n(a),i=t(99289),l=t.n(i),o=t(34041),s=t(74348),u=t(12461),d=t(71577),c=t(9308),p=t(43758),f=t(24969),h=t(14955),m=t(62571),g=t(97857),v=t.n(g),x=t(5574),b=t.n(x),I=t(67294),y=t(66490),Z=t(13448),S=t(11382),j=t(11486),w=t(79697),T=t(27601),C=t(86317),k=t(59360),M=t(67723),A=t(82198),P=t(32615),_="formWrap___VmkX4",R="uploadWrap___pbblZ",U=t(75873),D=t(41712),E=t(84354),F=t(85893),O={labelCol:{span:6},wrapperCol:{span:16}},q=function(e){var n=e.visible,t=e.toggleVisible,a=e.formData,r=e.loading,i=e.reload,l=e.orgId,d=e.disabledAction,c=y.Z.useForm(),f=b()(c,1)[0],m=(0,k.Z)(),g=m.tip,x=m.setTip,q=a.id,z=(((0,E.useModel)("@@initialState").initialState||{}).userInfo||{}).orgCode,H=(0,E.useModel)("company").companyMap;(0,I.useEffect)((function(){return(0,w.Z)(a)||f.setFieldsValue(v()(v()({},a),{},{avatar:null!=a&&a.avatar?[{uid:"1",name:"头像",status:"done",url:null==a?void 0:a.avatar,size:0}]:[]})),function(){f.resetFields()}}),[a]);var L=(0,I.useMemo)((function(){var e;return null==H||null===(e=H.find((function(e){return e.id===l})))||void 0===e?void 0:e.orgCode}),[l]),Q=function(){u.ZP.success("保存成功"),f.resetFields(),t(),null==i||i()},N=(0,C.QT)(API.platform.sysUser.save.fetch,{onSuccess:function(e){Q(),e&&Z.Z.success({message:"用户新增成功",description:"密码为: ".concat(e),duration:null})},manual:!0}),V=N.run,B=N.loading,G=(0,C.QT)(API.platform.sysUser.update.fetch,{onSuccess:function(){return Q()},manual:!0}),K=G.run,W=G.loading,J=(0,C.QT)((function(e){x("数据保存中，请稍候...");var n=(0,D.HO)(v()(v()(v()({},a),e),{},{avatar:e.avatar.map((function(e){return e.url||e.response.data.url}))[0]}));return q||(n.orgId=l),q?K(n):V(n)}),{manual:!0}),X=J.run,Y=J.loading;return(0,F.jsx)(s.Z,{centered:!0,visible:n,forceRender:!0,maskClosable:!1,title:"".concat((0,T.Z)(q)?"新增":"编辑","用户"),okButtonProps:{htmlType:"submit",disabled:d},width:800,onOk:function(){return f.submit()},onCancel:function(){t(),f.resetFields()},confirmLoading:Y,children:(0,F.jsx)(S.Z,{spinning:r&&Y||W||B,tip:g,children:(0,F.jsxs)(y.Z,v()(v()({form:f,onFinish:X},O),{},{className:_,children:[(0,F.jsx)(y.Z.Item,{label:"登录账号",name:"userName",tooltip:"11位以内的英文数字",rules:[{whitespace:!0},{required:!0},{validator:U.iE}],children:(0,F.jsx)(j.Z,{disabled:!(0,T.Z)(q),placeholder:"请输入",addonAfter:"@".concat(null!=L?L:z)})}),(0,F.jsx)(y.Z.Item,{label:"用户名称",name:"name",rules:[{whitespace:!0},{required:!0}],children:(0,F.jsx)(j.Z,{placeholder:"请输入"})}),(0,F.jsx)(y.Z.Item,{label:"手机号",name:"phone",rules:[{whitespace:!0},{required:!0},{validator:U.tH}],children:(0,F.jsx)(j.Z,{placeholder:"请输入"})}),(0,F.jsx)(y.Z.Item,{label:"邮箱",name:"email",rules:[{whitespace:!0},{validator:U.Le}],children:(0,F.jsx)(j.Z,{placeholder:"请输入"})}),(0,F.jsx)("div",{className:R,children:(0,F.jsx)(M.Z,{formItemProps:O,label:"头像",name:"avatar",maxCount:1,accept:A.b1["图片"].join(","),uploadProps:{listType:"picture-card"},required:!0,requiredMessage:"请上传头像",children:(0,F.jsx)(P.Z,{})})}),(0,F.jsx)(y.Z.Item,{label:"性别",name:"sex",children:(0,F.jsx)(o.Z,{placeholder:"请选择",options:(0,h.MM)(p.TG)})}),(0,F.jsx)(y.Z.Item,{label:"状态",name:"status",children:(0,F.jsx)(o.Z,{placeholder:"请选择",options:(0,h.MM)(p.w6)})})]}))})})},z=t(60106),H=t(73011),L=function(){var e=(0,H.Z)("cloud_user_list_company").showCompanySelect,n=(0,E.useModel)("company").companyIdMapOptions,t=function(){var e=(0,I.useRef)(),n=(0,z.x)({visible:!1,formData:{},loading:!1}),t=b()(n,2),a=t[0],i=t[1],o=((0,E.useModel)("@@initialState").initialState||{}).userInfo,s=(0,I.useState)(""),d=b()(s,2),c=d[0],f=d[1],h=c!==(null==o?void 0:o.orgId),m=(e.current||{}).reload;(0,I.useEffect)((function(){null!=o&&o.orgId&&f(null==o?void 0:o.orgId)}),[o]);var g=(0,C.QT)(API.platform.sysUser.updateStatus.fetch,{manual:!0,onSuccess:function(){u.ZP.success("操作成功"),null==m||m()}}).run,x=(0,C.QT)(API.authorization.resourceRole.resourceDelete.fetch,{manual:!0,onSuccess:function(){u.ZP.success("删除成功"),null==m||m()}}).run;(0,I.useEffect)((function(){null==m||m()}),[c]);var y=function(){var e=l()(r()().mark((function e(n){var t,a,i,l;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,API.platform.sysUser.pageList.fetch((0,D.HO)(v()(v()({},n),{},{page:(null==n?void 0:n.current)||p.ii.page,pageSize:(null==n?void 0:n.pageSize)||p.ii.pageSize,orgId:c})));case 2:return t=e.sent,a=t.list,i=t.page,l=t.total,e.abrupt("return",{data:a||[],page:i,success:!0,total:l});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{actionRef:e,disabledAction:h,reload:m,editModalConfig:a,orgId:c,setOrgId:f,handleUpdateStatus:g,handleDelete:x,fetchList:y,handleUserAdd:function(){i((function(e){e.visible=!0,e.formData={}}))},handleUserEdit:function(e){i((function(n){n.visible=!0,n.loading=!0,n.formData=e}))},handleModalHide:function(){return i((function(e){e.visible=!1,e.loading=!1,e.formData={}}))}}}(),a=t.actionRef,i=t.reload,g=t.disabledAction,x=t.editModalConfig,y=t.orgId,Z=t.setOrgId,S=t.fetchList,j=t.handleUpdateStatus,w=t.handleUserAdd,T=t.handleUserEdit,k=t.handleModalHide,M=[{title:"企业名称",dataIndex:"orgId",align:"left",copyable:!1,valueType:"text",hideInSearch:!e||!(null!=n&&n.length),hideInTable:!0,renderFormItem:function(){return(0,F.jsx)(o.Z,{allowClear:!0,showSearch:!0,value:y,onChange:Z,options:n,filterOption:function(e,n){var t,a;return!(null==n||!n.label)&&(null==n||null===(t=n.label)||void 0===t||null===(a=t.toString())||void 0===a?void 0:a.indexOf(e))>=0}})}},{title:"登录账号",dataIndex:"userName",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"用户名称",dataIndex:"name",align:"left",copyable:!1,valueType:"text",hideInSearch:!1},{title:"手机号",dataIndex:"phone",align:"left",valueType:"text",hideInSearch:!1,hideInTable:!0},{title:"负责人手机号",dataIndex:"phone",align:"left",copyable:!1,valueType:"text",hideInSearch:!0},{title:"邮箱",dataIndex:"email",align:"left",copyable:!1,valueType:"text",hideInSearch:!0},{title:"头像",dataIndex:"avatar",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(e,n){return(0,F.jsx)("img",{alt:"头像",src:n.avatar,width:72})}},{title:"性别",dataIndex:"sex",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,valueEnum:p.TG},{title:"状态",dataIndex:"status",align:"left",copyable:!1,valueType:"text",hideInSearch:!1,valueEnum:(0,h.BJ)(p.w6)},{title:"操作",dataIndex:"id",align:"left",copyable:!1,valueType:"text",hideInSearch:!0,render:function(e,n){return(0,F.jsx)(m.Z,{buttons:[{name:"编辑",key:"edit",onClick:function(){return T(n)}},{name:"禁用",key:"disable",onClick:function(){return s.Z.confirm({title:"确认禁用？",onOk:function(){return n.id&&j({status:p.w6["禁用"],id:n.id})}})},hidden:g||p.w6["禁用"]===+n.status},{name:"启用",key:"enable",onClick:(t=l()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.id&&j({status:p.w6["正常"],id:n.id}));case 1:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)}),hidden:g||p.w6["禁用"]!==+n.status}]});var t}}];return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(c.ZP,{style:{padding:"18px 22px"},actionRef:a,request:S,onRequestError:function(e){console.error(e.message),u.ZP.error("数据加载失败,".concat(e.message))},onReset:function(){return Z("")},columns:M,bordered:!0,rowKey:"id",pagination:{size:"default"},dateFormatter:"string",headerTitle:"用户列表",tableAlertRender:!1,toolBarRender:function(){return[(0,F.jsxs)(d.Z,{onClick:w,type:"primary",children:[(0,F.jsx)(f.Z,{}),"新建"]},"add")]}}),(0,F.jsx)(q,{visible:x.visible,formData:x.formData,loading:x.loading,toggleVisible:k,reload:i,orgId:y,disabledAction:g})]})}}}]);