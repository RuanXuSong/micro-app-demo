(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[793],{81186:function(U){U.exports={container:"container___rQUpQ",content:"content___EfHLm",title:"title___2UjJD",infoWrap:"infoWrap___1m2u0",avatarWrap:"avatarWrap___1D0Gv",submitWrap:"submitWrap___31jW9",editBtn:"editBtn___wf9nY"}},84850:function(U,S,r){"use strict";r.d(S,{Z:function(){return Z}});var g=r(44742),C=r(67294);function Z(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,s=(0,C.useState)(!1),d=(0,g.Z)(s,2),l=d[0],y=d[1],h=(0,C.useState)(""),m=(0,g.Z)(h,2),n=m[0],e=m[1];return(0,C.useEffect)(function(){y(b)},[]),{spinning:l,setSpinning:y,tip:n,setTip:e}}},29067:function(U,S,r){"use strict";r.r(S),r.d(S,{default:function(){return ae}});var g=r(58210),C=r(87240),Z=r(83557),b=r(80148),s=r(13378),d=r(13753),l=r(48429),y=r(67604),h=r(66498),m=r(68137),n=r(50532),e=r(67294),o=r(81186),c=r.n(o),F=r(95951),v=r(48786),L=r(66594),M=r(26780),E=r(46567),P=r(14643),w=r(92909),X=r(3911),O=r(56361),T=r(44742),f=r(46368),a=r(66827),t=r(84850),i=r(42348),u={labelCol:{span:6},wrapperCol:{span:18}},p=function(W){var _=W.visible,D=W.toggleVisible,z=W.formData,q=W.loading,$=h.Z.useForm(),ee=(0,T.Z)($,1),B=ee[0],Y=(0,t.Z)(),H=Y.tip,te=Y.setTip,j=(0,e.useState)(),V=(0,T.Z)(j,2),re=V[0],oe=V[1];(0,e.useEffect)(function(){if(!(0,f.Z)(z)){var R=z.roleList||[];B.setFieldsValue((0,O.Z)((0,O.Z)({},z),{},{roleList:R.length>0?R[0].roleId:null}))}return function(){B.resetFields()}},[z]);var ie=function(){D(),B.resetFields()},se=function(k){te("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var ve=k.confirmPassword,le=(0,X.Z)(k,["confirmPassword"]);return API.platform.sysUser.updatePassword.fetch(le)},Q=(0,a.QT)(se,{manual:!0,onSuccess:function(){w.default.success("\u4FEE\u6539\u6210\u529F"),B.resetFields(),D()}}),ue=Q.run,ne=Q.loading;return e.createElement(E.Z,{centered:!0,visible:_,forceRender:!0,maskClosable:!1,title:"\u5BC6\u7801\u4FEE\u6539",okButtonProps:{htmlType:"submit"},width:422,onOk:function(){return B.submit()},onCancel:ie,confirmLoading:ne},e.createElement(C.Z,{spinning:q&&ne,tip:H},e.createElement(h.Z,(0,s.Z)({form:B,onFinish:ue},u),e.createElement(h.Z.Item,{label:"\u65E7\u5BC6\u7801",name:"oldPwd",rules:[{whitespace:!0},{required:!0}]},e.createElement(n.Z,{type:"password",placeholder:"\u8BF7\u8F93\u5165"})),e.createElement(h.Z.Item,{label:"\u65B0\u5BC6\u7801",name:"newPwd",rules:[{whitespace:!0},{required:!0}]},e.createElement(n.Z,{type:"password",placeholder:"\u8BF7\u8F93\u5165",onChange:function(k){return oe(k.target.value)}})),e.createElement(h.Z.Item,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",name:"confirmPassword",rules:[{whitespace:!0},{required:!0},{validator:(0,i.ZG)(re)}]},e.createElement(n.Z,{type:"password",placeholder:"\u8BF7\u8F93\u5165"})))))},N=r(89193),I=function(W){var _=W.currentUser,D=W.dispatch,z=h.Z.useForm(),q=(0,T.Z)(z,1),$=q[0],ee=(0,N.x)({visible:!1,formData:{},loading:!1}),B=(0,T.Z)(ee,2),Y=B[0],H=B[1],te=(0,N.x)({visible:!1,formData:{},loading:!1}),j=(0,T.Z)(te,2),V=j[0],re=j[1],oe=(0,t.Z)(),ie=oe.tip,se=oe.setTip,Q=function(){return D({type:"user/fetchCurrent"})};(0,e.useEffect)(function(){var K=_.avatar,x=(0,X.Z)(_,["avatar"]);$.setFieldsValue((0,O.Z)((0,O.Z)({},x),{},{avatar:K?[{uid:"1",name:"\u5934\u50CF",status:"done",url:K,size:0}]:[]}))},[]);var ue=function(x){se("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var pe=x.avatar,J=(0,X.Z)(x,["avatar"]);if(x.avatar){var ce,de,fe,me;J.avatar=(ce=x.avatar)===null||ce===void 0||(de=ce.file)===null||de===void 0||(fe=de.response)===null||fe===void 0||(me=fe.data)===null||me===void 0?void 0:me.url}return API.platform.sysUser.update.fetch(J)},ne=(0,a.QT)(ue,{manual:!0,onSuccess:function(){w.default.success("\u4FDD\u5B58\u6210\u529F"),Q==null||Q()}}),R=ne.run,k=ne.loading,ve=function(){H(function(x){x.visible=!0,x.formData={id:$.getFieldValue("id")}})},le=function(x){var pe={edit:H,auth:re};pe[x](function(J){J.visible=!1,J.loading=!1,J.formData={}})};return{tip:ie,form:$,submitting:k,handleFinish:R,editModalConfig:Y,setEditModalConfig:H,authModalConfig:V,setAuthModalConfig:re,handlePasswordEdit:ve,handleModalHide:le}},A={labelCol:{span:4},wrapperCol:{span:18}},G=function(_){var D=I(_),z=D.form,q=D.tip,$=D.submitting,ee=D.handleFinish,B=D.editModalConfig,Y=D.handlePasswordEdit,H=D.handleModalHide;return e.createElement("div",{className:c().container},e.createElement("div",{className:c().content},e.createElement(C.Z,{spinning:$,tip:q},e.createElement(h.Z,(0,s.Z)({form:z},A,{onFinish:ee}),e.createElement("div",{className:c().title},"\u4E2A\u4EBA\u8D44\u6599"),e.createElement("div",{className:c().infoWrap},e.createElement("div",{className:c().avatarWrap},e.createElement(h.Z.Item,{label:"id",name:"id",hidden:!0,rules:[{whitespace:!0}]},e.createElement(n.Z,{placeholder:"\u8BF7\u8F93\u5165"})),e.createElement(h.Z.Item,{label:"\u5934\u50CF",name:"avatar",valuePropName:"fileList",getValueFromEvent:F.vE,getValueProps:function(j){var V=j!=null?j:[];return{fileList:Array.isArray(V)?V:[{url:V}]}}},e.createElement(b.Z,(0,s.Z)({},(0,F.Ix)(),{maxCount:1,accept:F.b1.\u56FE\u7247.join(","),multiple:!1,listType:"picture-card",defaultFileList:[{uid:"1",name:"\u9ED8\u8BA4\u5934\u50CF",status:"done",response:"\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25",url:L.q$}],showUploadList:{showRemoveIcon:!1}}),e.createElement(l.Z,{type:"primary"},"\u66F4\u6362")))),e.createElement(h.Z.Item,{label:"\u8D26\u53F7\u540D\u79F0",name:"userName",rules:[{whitespace:!0}]},e.createElement(n.Z,{placeholder:"\u8BF7\u8F93\u5165"})),e.createElement(h.Z.Item,{label:"\u8D26\u53F7\u5BC6\u7801",name:"password",rules:[{whitespace:!0}]},e.createElement(l.Z,{className:c().editBtn,type:"link",onClick:Y},"\u4FEE\u6539\u5BC6\u7801")),e.createElement("div",{className:c().submitWrap},e.createElement(l.Z,{type:"primary",htmlType:"submit",className:c().submitBtn},"\u4FDD\u5B58")))))),e.createElement(p,{visible:B.visible,formData:B.formData,loading:B.loading,toggleVisible:function(){return H("edit")}}))},ae=(0,v.$j)(function(W){var _=W.user;return{currentUser:_.currentUser}})(G)},4137:function(U,S,r){"use strict";r.d(S,{Mn:function(){return g},e8:function(){return C},S1:function(){return Z},Jh:function(){return s}});var g=function(e){var o=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/;return o.test(e)},C=function(e){var o=/^([0-9]|[a-z]|[A-Z]){0,10}$/;return o.test(e)},Z=function(e){var o=/^[a-z]([0-9]|[a-z]|){0,18}$/;return o.test(e)},b=function(e){var o=/^([0-9]{3,4}-)?[0-9]{7,8}$/;return o.test(e)},s=function(e){var o=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;return o.test(e)},d=function(e){var o=/(^([0-9]{1,})(.[0-9]+)?)$/;return o.test(e)},l=function(e){var o=/\d/;return o.test(e)},y=function(e){return(""+e).substring(1,(""+e).length-1)},h=function(e){var o=/^(-|\+)?\d+(\.\d+)?$/;return o.test(""+e)},m={isPhone:g,isTelephone:b,isEmail:s,isNumber:d,containNumbers:l}},73567:function(U,S,r){"use strict";var g=1,C=1,Z=4;S.ZP={fillZero:function(n){return typeof n=="number"&&n>=10?n:"0".concat(n)},textEllipsis:function(n,e){return n.length>e&&e>0?"".concat(n.substring(0,e),"..."):n},getLastSubstring:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n.substring(n.lastIndexOf(e)+e.length,n.length)},valueToString:function(n){return typeof n=="string"?n:JSON.stringify(n)},copyText:function(n){var e=document.createElement("input");document.body.appendChild(e),e.setAttribute("value",n),e.select(),document.execCommand("copy"),document.body.removeChild(e)},imgUrlToBase64:function(n,e,o){var c=document.createElement("canvas"),F=c.getContext("2d");return new Promise(function(v,L){var M=new Image;M.crossOrigin="Anonymous",M.onload=function(){c.width=e,c.height=o,F.drawImage(M,0,0,e,o);var E=c.toDataURL("image/");c=null,v(E)},M.onerror=function(E){L(E)},M.src=n})}};var b=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return n||n===0?(n/100).toFixed(e):""},s=function(n){return n*100},d=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;return n?"".concat(n.slice(0,e),"****").concat(n.slice(-e)):""},l=function(n){var e=/(?<=.)./g;return n==null?void 0:n.replace(e,"*")},y=function(n){var e,o=(e=n==null?void 0:n.split("-"))!==null&&e!==void 0?e:[];return o.filter(function(c){return!!c}).length===2?n:o.join("")},h=function(n,e){return n===g&&(e===C||e===Z)}},95951:function(U,S,r){"use strict";r.d(S,{S4:function(){return s},mf:function(){return l},b1:function(){return n},Ix:function(){return c},vE:function(){return F},o$:function(){return L},jB:function(){return w}});var g=r(99463),C=r(73567),Z="http://object-service.dev.thundersdata.com",b=Object.freeze({maxSize:M,accept:E,maxCount:P}),s=10,d=1024,l=50*d,y=500*d,h=200,m=200,n={\u56FE\u7247:[".jpg",".jpeg",".gif",".png",".bmp"],\u538B\u7F29\u5305:[".rar",".zip"],\u6587\u6863:[".doc",".docx",".pdf"],\u8868\u683C:[".xls",".xlsx"],\u89C6\u9891:[".avi",".wmv",".mpg",".mpeg",".mov",".mp4",".rm",".ram"]},e=function(a){var t,i,u,p=(t=(i=a.response)===null||i===void 0||(u=i.data)===null||u===void 0?void 0:u.url)!==null&&t!==void 0?t:a.url;p&&window.open(p,"_blank")},o=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.\u56FE\u7247,i=a.name,u=a.url,p=u||i,N="."+C.ZP.getLastSubstring(p,"."),I=Array.isArray(t)?t:t.split(",");return I.includes(N)},c=function(){return{accept:".doc,.docx,.pdf,.rar,.zip,.jpg,.png,.bmp,.gif",withCredentials:!1,action:"".concat(Z,"/file/uploadToPub"),data:{access_token:"223bc111017d323b00fee4cf9c59a2be"},showUploadList:{showDownloadIcon:!1},onPreview:e}},F=function(a){var t=a.fileList;return t};function v(f,a,t){try{a&&a.some(function(i){if(i.response&&!i.response.success)throw new Error("\u4E0A\u4F20\u6587\u4EF6\u5931\u8D25: "+i.response.message);return i}),t()}catch(i){t(i)}}var L=function f(a){return typeof a=="number"?a>d?"".concat(a/1024," M"):"".concat(a," KB"):a?f(l):""};function M(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{maxSize:l},a=f.maxSize;return{validator:function(i,u,p){if(u&&u.length){var N=u.filter(function(A){return(A==null?void 0:A.size)&&A.size/d>a});if(N.length){var I=N.map(function(A){return A.name}).join(",");p("".concat(I,"\uFF0C\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7").concat(a>d?"".concat(a/1024," M"):"".concat(a," KB")))}else p()}else p()}}}function E(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{accept:n.\u56FE\u7247},a=f.accept;return{validator:function(i,u,p){if(u&&u.length){var N=u.filter(function(A){return!o(A,a)});if(N.length){var I=N.map(function(A){return'"'.concat(A.name,'"')}).join(",");p("\u6587\u4EF6\uFF1A".concat(I,"\uFF0C\u6587\u4EF6\u7C7B\u578B\u4E0D\u7B26\u5408\u8981\u6C42"))}else p()}else p()}}}function P(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{maxCount:s},a=f.maxCount;return{validator:function(i,u,p){u&&u.length&&u.length>a?p("\u6587\u4EF6\u4E2A\u6570\u8D85\u8FC7 ".concat(a," \u4E2A!")):p()}}}var w=function(a){var t=Object.keys(a).filter(function(i){return!!a[i]});return t.map(function(i){return a[i]===!0?b[i]():b[i]((0,g.Z)({},i,a[i]))})};function X(f){return f&&f.length>0?f.map(function(a){var t=a.fileId,i=a.fileName,u=a.fileUrl,p=_objectWithoutProperties(a,["fileId","fileName","fileUrl"]);return _objectSpread(_objectSpread({},p),{},{uid:t,status:"done",size:0,type:"",name:i,url:u,response:{success:!0,data:{fileId:t,fileName:i,url:u}}})}):[]}function O(f){return f&&f.length>0?f.map(function(a){var t=a.response.data,i=t.fileId,u=t.fileName,p=t.url;return{fileId:i,fileName:u,fileUrl:p,type:""}}):[]}var T=function(a){return"".concat(Z,"/file/preview?fileId=").concat(a)}},42348:function(U,S,r){"use strict";r.d(S,{iE:function(){return C},T0:function(){return Z},tH:function(){return b},Le:function(){return s},ZG:function(){return y}});var g=r(4137),C=function(n,e,o){e&&!(0,g.e8)(e)?o("\u8BF7\u8F93\u516511\u4F4D\u4EE5\u5185\u7684\u82F1\u6587\u6570\u5B57"):o()},Z=function(n,e,o){e&&!(0,g.S1)(e)?o("\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u4E14\u53EA\u5305\u542B\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57\uFF0C\u5E76\u4E14\u957F\u5EA6\u572820\u4EE5\u5185"):o()},b=function(n,e,o){e&&!(0,g.Mn)(e)?o("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u8BDD\u53F7\u7801"):o()},s=function(n,e,o){e&&!(0,g.Jh)(e)?o("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1"):o()},d=function(n,e,o){e&&!/^(?=.*[a-zA-Z\W_])(?=.*[0-9]).{8,20}$/.test(e)?o("\u75318-20\u4E2A\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u6210\uFF0C\u4E0D\u53EF\u7EAF\u6570\u5B57"):o()},l=function(n,e,o){e&&!/^[\u4e00-\u9fa5a-zA-Z]{2,20}$/.test(e)?o("\u75312-20\u4E2A\u4E2D\u6587\u6216\u82F1\u6587\u7EC4\u6210"):o()},y=function(n){return function(e,o,c){o&&o!==n?c("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"):c()}},h={phoneValidator:b,checkPassword:d,checkNickName:l}},45968:function(U,S,r){"use strict";r.d(S,{Z:function(){return m}});var g=r(66156),C=r(18247),Z=r(12845),b=r(7474),s=[],d="ant-scrolling-effect",l=new RegExp("".concat(d),"g"),y=0,h=new Map,m=function n(e){var o=this;(0,C.Z)(this,n),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var c;return(c=o.options)===null||c===void 0?void 0:c.container},this.reLock=function(c){var F=s.find(function(v){var L=v.target;return L===o.lockTarget});F&&o.unLock(),o.options=c,F&&(F.options=c,o.lock())},this.lock=function(){var c;if(!s.some(function(E){var P=E.target;return P===o.lockTarget})){if(s.some(function(E){var P,w=E.options;return(w==null?void 0:w.container)===((P=o.options)===null||P===void 0?void 0:P.container)})){s=[].concat((0,g.Z)(s),[{target:o.lockTarget,options:o.options}]);return}var F=0,v=((c=o.options)===null||c===void 0?void 0:c.container)||document.body;(v===document.body&&window.innerWidth-document.documentElement.clientWidth>0||v.scrollHeight>v.clientHeight)&&(F=(0,Z.Z)());var L=v.className;if(s.filter(function(E){var P,w=E.options;return(w==null?void 0:w.container)===((P=o.options)===null||P===void 0?void 0:P.container)}).length===0&&h.set(v,(0,b.Z)({width:F!==0?"calc(100% - ".concat(F,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:v})),!l.test(L)){var M="".concat(L," ").concat(d);v.className=M.trim()}s=[].concat((0,g.Z)(s),[{target:o.lockTarget,options:o.options}])}},this.unLock=function(){var c,F=s.find(function(M){var E=M.target;return E===o.lockTarget});if(s=s.filter(function(M){var E=M.target;return E!==o.lockTarget}),!(!F||s.some(function(M){var E,P=M.options;return(P==null?void 0:P.container)===((E=F.options)===null||E===void 0?void 0:E.container)}))){var v=((c=o.options)===null||c===void 0?void 0:c.container)||document.body,L=v.className;!l.test(L)||((0,b.Z)(h.get(v),{element:v}),h.delete(v),v.className=v.className.replace(l,"").trim())}},this.lockTarget=y++,this.options=e}},12579:function(U,S,r){"use strict";r.d(S,{Z:function(){return X}});var g=r(18247),C=r(76553),Z=r(75304),b=r(73109),s=r(95676),d=r(67294),l=r(90468),y=r(75840),h=r(20064),m=r(12845),n=r(7474);function e(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var o={},c=function(O){if(!(!e()&&!O)){var T="ant-scrolling-effect",f=new RegExp("".concat(T),"g"),a=document.body.className;if(O){if(!f.test(a))return;(0,n.Z)(o),o={},document.body.className=a.replace(f,"").trim();return}var t=(0,m.Z)();if(t&&(o=(0,n.Z)({position:"relative",width:"calc(100% - ".concat(t,"px)")}),!f.test(a))){var i="".concat(a," ").concat(T);document.body.className=i.trim()}}},F=r(45968),v=0,L=(0,h.Z)();function M(){return 0}var E={},P=function(T){if(!L)return null;if(T){if(typeof T=="string")return document.querySelectorAll(T)[0];if(typeof T=="function")return T();if((0,s.Z)(T)==="object"&&T instanceof window.HTMLElement)return T}return document.body},w=function(O){(0,Z.Z)(f,O);var T=(0,b.Z)(f);function f(a){var t;return(0,g.Z)(this,f),t=T.call(this,a),t.container=void 0,t.componentRef=d.createRef(),t.rafId=void 0,t.scrollLocker=void 0,t.renderComponent=void 0,t.updateScrollLocker=function(i){var u=i||{},p=u.visible,N=t.props,I=N.getContainer,A=N.visible;A&&A!==p&&L&&P(I)!==t.scrollLocker.getContainer()&&t.scrollLocker.reLock({container:P(I)})},t.updateOpenCount=function(i){var u=i||{},p=u.visible,N=u.getContainer,I=t.props,A=I.visible,G=I.getContainer;A!==p&&L&&P(G)===document.body&&(A&&!p?v+=1:i&&(v-=1));var ae=typeof G=="function"&&typeof N=="function";(ae?G.toString()!==N.toString():G!==N)&&t.removeCurrentContainer()},t.attachToParent=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(i||t.container&&!t.container.parentNode){var u=P(t.props.getContainer);return u?(u.appendChild(t.container),!0):!1}return!0},t.getContainer=function(){return L?(t.container||(t.container=document.createElement("div"),t.attachToParent(!0)),t.setWrapperClassName(),t.container):null},t.setWrapperClassName=function(){var i=t.props.wrapperClassName;t.container&&i&&i!==t.container.className&&(t.container.className=i)},t.removeCurrentContainer=function(){var i,u;(i=t.container)===null||i===void 0||(u=i.parentNode)===null||u===void 0||u.removeChild(t.container)},t.switchScrollingEffect=function(){v===1&&!Object.keys(E).length?(c(),E=(0,n.Z)({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):v||((0,n.Z)(E),E={},c(!0))},t.scrollLocker=new F.Z({container:P(a.getContainer)}),t}return(0,C.Z)(f,[{key:"componentDidMount",value:function(){var t=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,l.Z)(function(){t.forceUpdate()}))}},{key:"componentDidUpdate",value:function(t){this.updateOpenCount(t),this.updateScrollLocker(t),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var t=this.props,i=t.visible,u=t.getContainer;L&&P(u)===document.body&&(v=i&&v?v-1:v),this.removeCurrentContainer(),l.Z.cancel(this.rafId)}},{key:"render",value:function(){var t=this.props,i=t.children,u=t.forceRender,p=t.visible,N=null,I={getOpenCount:function(){return v},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(u||p||this.componentRef.current)&&(N=d.createElement(y.Z,{getContainer:this.getContainer,ref:this.componentRef},i(I))),N}}]),f}(d.Component),X=w},12845:function(U,S,r){"use strict";r.d(S,{Z:function(){return C}});var g;function C(s){if(typeof document=="undefined")return 0;if(s||g===void 0){var d=document.createElement("div");d.style.width="100%",d.style.height="200px";var l=document.createElement("div"),y=l.style;y.position="absolute",y.top="0",y.left="0",y.pointerEvents="none",y.visibility="hidden",y.width="200px",y.height="150px",y.overflow="hidden",l.appendChild(d),document.body.appendChild(l);var h=d.offsetWidth;l.style.overflow="scroll";var m=d.offsetWidth;h===m&&(m=l.clientWidth),document.body.removeChild(l),g=h-m}return g}function Z(s){var d=s.match(/^(.*)px$/),l=Number(d==null?void 0:d[1]);return Number.isNaN(l)?C():l}function b(s){if(typeof document=="undefined"||!s||!(s instanceof Element))return{width:0,height:0};var d=getComputedStyle(s,"::-webkit-scrollbar"),l=d.width,y=d.height;return{width:Z(l),height:Z(y)}}},7474:function(U,S){"use strict";function r(g){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!g)return{};var Z=C.element,b=Z===void 0?document.body:Z,s={},d=Object.keys(g);return d.forEach(function(l){s[l]=b.style[l]}),d.forEach(function(l){b.style[l]=g[l]}),s}S.Z=r}}]);