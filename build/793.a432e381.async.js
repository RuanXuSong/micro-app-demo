(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[793],{81186:function(D){D.exports={container:"container___rQUpQ",content:"content___EfHLm",title:"title___2UjJD",infoWrap:"infoWrap___1m2u0",avatarWrap:"avatarWrap___1D0Gv",submitWrap:"submitWrap___31jW9",editBtn:"editBtn___wf9nY"}},84850:function(D,S,r){"use strict";r.d(S,{Z:function(){return Z}});var g=r(44742),C=r(67294);function Z(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,u=(0,C.useState)(!1),d=(0,g.Z)(u,2),l=d[0],y=d[1],h=(0,C.useState)(""),m=(0,g.Z)(h,2),n=m[0],e=m[1];return(0,C.useEffect)(function(){y(b)},[]),{spinning:l,setSpinning:y,tip:n,setTip:e}}},29067:function(D,S,r){"use strict";r.r(S),r.d(S,{default:function(){return ae}});var g=r(58210),C=r(87240),Z=r(83557),b=r(80148),u=r(13378),d=r(13753),l=r(48429),y=r(67604),h=r(66498),m=r(68137),n=r(50532),e=r(67294),i=r(81186),c=r.n(i),F=r(95951),v=r(48786),L=r(66594),M=r(26780),E=r(46567),P=r(14643),w=r(92909),G=r(3911),O=r(56361),T=r(44742),f=r(46368),o=r(66827),t=r(84850),a=r(42348),s={labelCol:{span:6},wrapperCol:{span:18}},p=function(W){var z=W.visible,U=W.toggleVisible,V=W.formData,ee=W.loading,K=h.Z.useForm(),te=(0,T.Z)(K,1),B=te[0],Q=(0,t.Z)(),$=Q.tip,ne=Q.setTip,_=(0,e.useState)(),H=(0,T.Z)(_,2),ie=H[0],oe=H[1];(0,e.useEffect)(function(){if(!(0,f.Z)(V)){var j=V.roleList||[];B.setFieldsValue((0,O.Z)((0,O.Z)({},V),{},{roleList:j.length>0?j[0].roleId:null}))}return function(){B.resetFields()}},[V]);var ue=function(){U(),B.resetFields()},se=function(J){ne("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var ye=J.confirmPassword,ce=(0,G.Z)(J,["confirmPassword"]);return API.platform.sysUser.updatePassword.fetch(ce)},k=(0,o.QT)(se,{manual:!0,onSuccess:function(){w.default.success("\u4FEE\u6539\u6210\u529F"),B.resetFields(),U()}}),le=k.run,re=k.loading;return e.createElement(E.Z,{centered:!0,visible:z,forceRender:!0,maskClosable:!1,title:"\u5BC6\u7801\u4FEE\u6539",okButtonProps:{htmlType:"submit"},width:422,onOk:function(){return B.submit()},onCancel:ue,confirmLoading:re},e.createElement(C.Z,{spinning:ee&&re,tip:$},e.createElement(h.Z,(0,u.Z)({form:B,onFinish:le},s),e.createElement(h.Z.Item,{label:"\u65E7\u5BC6\u7801",name:"oldPwd",rules:[{whitespace:!0},{required:!0}]},e.createElement(n.Z,{type:"password",placeholder:"\u8BF7\u8F93\u5165"})),e.createElement(h.Z.Item,{label:"\u65B0\u5BC6\u7801",name:"newPwd",rules:[{whitespace:!0},{required:!0}]},e.createElement(n.Z,{type:"password",placeholder:"\u8BF7\u8F93\u5165",onChange:function(J){return oe(J.target.value)}})),e.createElement(h.Z.Item,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",name:"confirmPassword",rules:[{whitespace:!0},{required:!0},{validator:(0,a.ZG)(ie)}]},e.createElement(n.Z,{type:"password",placeholder:"\u8BF7\u8F93\u5165"})))))},N=r(89193),I=function(W){var z=W.currentUser,U=W.dispatch,V=h.Z.useForm(),ee=(0,T.Z)(V,1),K=ee[0],te=(0,N.x)({visible:!1,formData:{},loading:!1}),B=(0,T.Z)(te,2),Q=B[0],$=B[1],ne=(0,N.x)({visible:!1,formData:{},loading:!1}),_=(0,T.Z)(ne,2),H=_[0],ie=_[1],oe=(0,t.Z)(),ue=oe.tip,se=oe.setTip,k=function(){return U({type:"user/fetchCurrent"})};(0,e.useEffect)(function(){var X=z.avatar,R=(0,G.Z)(z,["avatar"]);K.setFieldsValue((0,O.Z)((0,O.Z)({},R),{},{avatar:X?[{uid:"1",name:"\u5934\u50CF",status:"done",url:X,size:0}]:[]}))},[]);var le=function(R){se("\u6570\u636E\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u5019...");var x=R.avatar,q=(0,G.Z)(R,["avatar"]);if(R.avatar){var de,fe,me,ve,pe,ge,he,Ee,Ce;q.avatar=(de=(fe=x==null||(me=x.file)===null||me===void 0||(ve=me.response)===null||ve===void 0||(pe=ve.data)===null||pe===void 0?void 0:pe.url)!==null&&fe!==void 0?fe:x==null||(ge=x[0])===null||ge===void 0||(he=ge.response)===null||he===void 0||(Ee=he.data)===null||Ee===void 0?void 0:Ee.url)!==null&&de!==void 0?de:x==null||(Ce=x[0])===null||Ce===void 0?void 0:Ce.url}return API.platform.sysUser.update.fetch(q)},re=(0,o.QT)(le,{manual:!0,onSuccess:function(){w.default.success("\u4FDD\u5B58\u6210\u529F"),k==null||k()}}),j=re.run,J=re.loading,ye=function(){$(function(R){R.visible=!0,R.formData={id:K.getFieldValue("id")}})},ce=function(R){var x={edit:$,auth:ie};x[R](function(q){q.visible=!1,q.loading=!1,q.formData={}})};return{tip:ue,form:K,submitting:J,handleFinish:j,editModalConfig:Q,setEditModalConfig:$,authModalConfig:H,setAuthModalConfig:ie,handlePasswordEdit:ye,handleModalHide:ce}},A={labelCol:{span:4},wrapperCol:{span:18}},Y=function(z){var U=I(z),V=U.form,ee=U.tip,K=U.submitting,te=U.handleFinish,B=U.editModalConfig,Q=U.handlePasswordEdit,$=U.handleModalHide;return e.createElement("div",{className:c().container},e.createElement("div",{className:c().content},e.createElement(C.Z,{spinning:K,tip:ee},e.createElement(h.Z,(0,u.Z)({form:V},A,{onFinish:te}),e.createElement("div",{className:c().title},"\u4E2A\u4EBA\u8D44\u6599"),e.createElement("div",{className:c().infoWrap},e.createElement("div",{className:c().avatarWrap},e.createElement(h.Z.Item,{label:"id",name:"id",hidden:!0,rules:[{whitespace:!0}]},e.createElement(n.Z,{placeholder:"\u8BF7\u8F93\u5165"})),e.createElement(h.Z.Item,{label:"\u5934\u50CF",name:"avatar",valuePropName:"fileList",getValueFromEvent:F.vE,getValueProps:function(_){var H=_!=null?_:[];return{fileList:Array.isArray(H)?H:[{url:H}]}}},e.createElement(b.Z,(0,u.Z)({},(0,F.Ix)(),{maxCount:1,accept:F.b1.\u56FE\u7247.join(","),multiple:!1,listType:"picture-card",defaultFileList:[{uid:"1",name:"\u9ED8\u8BA4\u5934\u50CF",status:"done",response:"\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25",url:L.q$}],showUploadList:{showRemoveIcon:!1}}),e.createElement(l.Z,{type:"primary"},"\u66F4\u6362")))),e.createElement(h.Z.Item,{label:"\u7528\u6237\u6635\u79F0",name:"name",rules:[{whitespace:!0}]},e.createElement(n.Z,{placeholder:"\u8BF7\u8F93\u5165"})),e.createElement(h.Z.Item,{label:"\u8D26\u53F7\u5BC6\u7801",name:"password",rules:[{whitespace:!0}]},e.createElement(l.Z,{className:c().editBtn,type:"link",onClick:Q},"\u4FEE\u6539\u5BC6\u7801")),e.createElement("div",{className:c().submitWrap},e.createElement(l.Z,{type:"primary",htmlType:"submit",className:c().submitBtn},"\u4FDD\u5B58")))))),e.createElement(p,{visible:B.visible,formData:B.formData,loading:B.loading,toggleVisible:function(){return $("edit")}}))},ae=(0,v.$j)(function(W){var z=W.user;return{currentUser:z.currentUser}})(Y)},4137:function(D,S,r){"use strict";r.d(S,{Mn:function(){return g},e8:function(){return C},S1:function(){return Z},Jh:function(){return u}});var g=function(e){var i=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/;return i.test(e)},C=function(e){var i=/^([0-9]|[a-z]|[A-Z]){0,10}$/;return i.test(e)},Z=function(e){var i=/^([a-z]){0,19}$/;return i.test(e)},b=function(e){var i=/^([0-9]{3,4}-)?[0-9]{7,8}$/;return i.test(e)},u=function(e){var i=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;return i.test(e)},d=function(e){var i=/(^([0-9]{1,})(.[0-9]+)?)$/;return i.test(e)},l=function(e){var i=/\d/;return i.test(e)},y=function(e){return(""+e).substring(1,(""+e).length-1)},h=function(e){var i=/^(-|\+)?\d+(\.\d+)?$/;return i.test(""+e)},m={isPhone:g,isTelephone:b,isEmail:u,isNumber:d,containNumbers:l}},73567:function(D,S,r){"use strict";var g=1,C=1,Z=4;S.ZP={fillZero:function(n){return typeof n=="number"&&n>=10?n:"0".concat(n)},textEllipsis:function(n,e){return n.length>e&&e>0?"".concat(n.substring(0,e),"..."):n},getLastSubstring:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n.substring(n.lastIndexOf(e)+e.length,n.length)},valueToString:function(n){return typeof n=="string"?n:JSON.stringify(n)},copyText:function(n){var e=document.createElement("input");document.body.appendChild(e),e.setAttribute("value",n),e.select(),document.execCommand("copy"),document.body.removeChild(e)},imgUrlToBase64:function(n,e,i){var c=document.createElement("canvas"),F=c.getContext("2d");return new Promise(function(v,L){var M=new Image;M.crossOrigin="Anonymous",M.onload=function(){c.width=e,c.height=i,F.drawImage(M,0,0,e,i);var E=c.toDataURL("image/");c=null,v(E)},M.onerror=function(E){L(E)},M.src=n})}};var b=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return n||n===0?(n/100).toFixed(e):""},u=function(n){return n*100},d=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;return n?"".concat(n.slice(0,e),"****").concat(n.slice(-e)):""},l=function(n){var e=/(?<=.)./g;return n==null?void 0:n.replace(e,"*")},y=function(n){var e,i=(e=n==null?void 0:n.split("-"))!==null&&e!==void 0?e:[];return i.filter(function(c){return!!c}).length===2?n:i.join("")},h=function(n,e){return n===g&&(e===C||e===Z)}},95951:function(D,S,r){"use strict";r.d(S,{S4:function(){return u},mf:function(){return l},b1:function(){return n},Ix:function(){return c},vE:function(){return F},o$:function(){return L},jB:function(){return w}});var g=r(99463),C=r(73567),Z="http://object-service.dev.thundersdata.com",b=Object.freeze({maxSize:M,accept:E,maxCount:P}),u=10,d=1024,l=50*d,y=500*d,h=200,m=200,n={\u56FE\u7247:[".jpg",".jpeg",".gif",".png",".bmp"],\u538B\u7F29\u5305:[".rar",".zip"],\u6587\u6863:[".doc",".docx",".pdf"],\u8868\u683C:[".xls",".xlsx"],\u89C6\u9891:[".avi",".wmv",".mpg",".mpeg",".mov",".mp4",".rm",".ram"]},e=function(o){var t,a,s,p=(t=(a=o.response)===null||a===void 0||(s=a.data)===null||s===void 0?void 0:s.url)!==null&&t!==void 0?t:o.url;p&&window.open(p,"_blank")},i=function(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.\u56FE\u7247,a=o.name,s=o.url,p=s||a,N="."+C.ZP.getLastSubstring(p,"."),I=Array.isArray(t)?t:t.split(",");return I.includes(N)},c=function(){return{accept:".doc,.docx,.pdf,.rar,.zip,.jpg,.png,.bmp,.gif",withCredentials:!1,action:"".concat(Z,"/file/uploadToPub"),data:{access_token:"223bc111017d323b00fee4cf9c59a2be"},showUploadList:{showDownloadIcon:!1},onPreview:e}},F=function(o){var t=o.fileList;return t};function v(f,o,t){try{o&&o.some(function(a){if(a.response&&!a.response.success)throw new Error("\u4E0A\u4F20\u6587\u4EF6\u5931\u8D25: "+a.response.message);return a}),t()}catch(a){t(a)}}var L=function f(o){return typeof o=="number"?o>d?"".concat(o/1024," M"):"".concat(o," KB"):o?f(l):""};function M(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{maxSize:l},o=f.maxSize;return{validator:function(a,s,p){if(s&&s.length){var N=s.filter(function(A){return(A==null?void 0:A.size)&&A.size/d>o});if(N.length){var I=N.map(function(A){return A.name}).join(",");p("".concat(I,"\uFF0C\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7").concat(o>d?"".concat(o/1024," M"):"".concat(o," KB")))}else p()}else p()}}}function E(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{accept:n.\u56FE\u7247},o=f.accept;return{validator:function(a,s,p){if(s&&s.length){var N=s.filter(function(A){return!i(A,o)});if(N.length){var I=N.map(function(A){return'"'.concat(A.name,'"')}).join(",");p("\u6587\u4EF6\uFF1A".concat(I,"\uFF0C\u6587\u4EF6\u7C7B\u578B\u4E0D\u7B26\u5408\u8981\u6C42"))}else p()}else p()}}}function P(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{maxCount:u},o=f.maxCount;return{validator:function(a,s,p){s&&s.length&&s.length>o?p("\u6587\u4EF6\u4E2A\u6570\u8D85\u8FC7 ".concat(o," \u4E2A!")):p()}}}var w=function(o){var t=Object.keys(o).filter(function(a){return!!o[a]});return t.map(function(a){return o[a]===!0?b[a]():b[a]((0,g.Z)({},a,o[a]))})};function G(f){return f&&f.length>0?f.map(function(o){var t=o.fileId,a=o.fileName,s=o.fileUrl,p=_objectWithoutProperties(o,["fileId","fileName","fileUrl"]);return _objectSpread(_objectSpread({},p),{},{uid:t,status:"done",size:0,type:"",name:a,url:s,response:{success:!0,data:{fileId:t,fileName:a,url:s}}})}):[]}function O(f){return f&&f.length>0?f.map(function(o){var t=o.response.data,a=t.fileId,s=t.fileName,p=t.url;return{fileId:a,fileName:s,fileUrl:p,type:""}}):[]}var T=function(o){return"".concat(Z,"/file/preview?fileId=").concat(o)}},42348:function(D,S,r){"use strict";r.d(S,{iE:function(){return C},T0:function(){return Z},tH:function(){return b},Le:function(){return u},ZG:function(){return y}});var g=r(4137),C=function(n,e,i){e&&!(0,g.e8)(e)?i("\u8BF7\u8F93\u516511\u4F4D\u4EE5\u5185\u7684\u82F1\u6587\u6570\u5B57\u7684\u7EC4\u5408"):i()},Z=function(n,e,i){e&&!(0,g.S1)(e)?i("\u4F01\u4E1A\u7F16\u7801\u89C4\u5219\u4E3A20\u4F4D\u4EE5\u5185\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD"):i()},b=function(n,e,i){e&&!(0,g.Mn)(e)?i("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u8BDD\u53F7\u7801"):i()},u=function(n,e,i){e&&!(0,g.Jh)(e)?i("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1"):i()},d=function(n,e,i){e&&!/^(?=.*[a-zA-Z\W_])(?=.*[0-9]).{8,20}$/.test(e)?i("\u75318-20\u4E2A\u6570\u5B57+\u5B57\u6BCD\u6216\u7B26\u53F7\u7EC4\u6210\uFF0C\u4E0D\u53EF\u7EAF\u6570\u5B57"):i()},l=function(n,e,i){e&&!/^[\u4e00-\u9fa5a-zA-Z]{2,20}$/.test(e)?i("\u75312-20\u4E2A\u4E2D\u6587\u6216\u82F1\u6587\u7EC4\u6210"):i()},y=function(n){return function(e,i,c){i&&i!==n?c("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"):c()}},h={phoneValidator:b,checkPassword:d,checkNickName:l}},45968:function(D,S,r){"use strict";r.d(S,{Z:function(){return m}});var g=r(66156),C=r(18247),Z=r(12845),b=r(7474),u=[],d="ant-scrolling-effect",l=new RegExp("".concat(d),"g"),y=0,h=new Map,m=function n(e){var i=this;(0,C.Z)(this,n),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var c;return(c=i.options)===null||c===void 0?void 0:c.container},this.reLock=function(c){var F=u.find(function(v){var L=v.target;return L===i.lockTarget});F&&i.unLock(),i.options=c,F&&(F.options=c,i.lock())},this.lock=function(){var c;if(!u.some(function(E){var P=E.target;return P===i.lockTarget})){if(u.some(function(E){var P,w=E.options;return(w==null?void 0:w.container)===((P=i.options)===null||P===void 0?void 0:P.container)})){u=[].concat((0,g.Z)(u),[{target:i.lockTarget,options:i.options}]);return}var F=0,v=((c=i.options)===null||c===void 0?void 0:c.container)||document.body;(v===document.body&&window.innerWidth-document.documentElement.clientWidth>0||v.scrollHeight>v.clientHeight)&&(F=(0,Z.Z)());var L=v.className;if(u.filter(function(E){var P,w=E.options;return(w==null?void 0:w.container)===((P=i.options)===null||P===void 0?void 0:P.container)}).length===0&&h.set(v,(0,b.Z)({width:F!==0?"calc(100% - ".concat(F,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:v})),!l.test(L)){var M="".concat(L," ").concat(d);v.className=M.trim()}u=[].concat((0,g.Z)(u),[{target:i.lockTarget,options:i.options}])}},this.unLock=function(){var c,F=u.find(function(M){var E=M.target;return E===i.lockTarget});if(u=u.filter(function(M){var E=M.target;return E!==i.lockTarget}),!(!F||u.some(function(M){var E,P=M.options;return(P==null?void 0:P.container)===((E=F.options)===null||E===void 0?void 0:E.container)}))){var v=((c=i.options)===null||c===void 0?void 0:c.container)||document.body,L=v.className;!l.test(L)||((0,b.Z)(h.get(v),{element:v}),h.delete(v),v.className=v.className.replace(l,"").trim())}},this.lockTarget=y++,this.options=e}},12579:function(D,S,r){"use strict";r.d(S,{Z:function(){return G}});var g=r(18247),C=r(76553),Z=r(75304),b=r(73109),u=r(95676),d=r(67294),l=r(90468),y=r(75840),h=r(20064),m=r(12845),n=r(7474);function e(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var i={},c=function(O){if(!(!e()&&!O)){var T="ant-scrolling-effect",f=new RegExp("".concat(T),"g"),o=document.body.className;if(O){if(!f.test(o))return;(0,n.Z)(i),i={},document.body.className=o.replace(f,"").trim();return}var t=(0,m.Z)();if(t&&(i=(0,n.Z)({position:"relative",width:"calc(100% - ".concat(t,"px)")}),!f.test(o))){var a="".concat(o," ").concat(T);document.body.className=a.trim()}}},F=r(45968),v=0,L=(0,h.Z)();function M(){return 0}var E={},P=function(T){if(!L)return null;if(T){if(typeof T=="string")return document.querySelectorAll(T)[0];if(typeof T=="function")return T();if((0,u.Z)(T)==="object"&&T instanceof window.HTMLElement)return T}return document.body},w=function(O){(0,Z.Z)(f,O);var T=(0,b.Z)(f);function f(o){var t;return(0,g.Z)(this,f),t=T.call(this,o),t.container=void 0,t.componentRef=d.createRef(),t.rafId=void 0,t.scrollLocker=void 0,t.renderComponent=void 0,t.updateScrollLocker=function(a){var s=a||{},p=s.visible,N=t.props,I=N.getContainer,A=N.visible;A&&A!==p&&L&&P(I)!==t.scrollLocker.getContainer()&&t.scrollLocker.reLock({container:P(I)})},t.updateOpenCount=function(a){var s=a||{},p=s.visible,N=s.getContainer,I=t.props,A=I.visible,Y=I.getContainer;A!==p&&L&&P(Y)===document.body&&(A&&!p?v+=1:a&&(v-=1));var ae=typeof Y=="function"&&typeof N=="function";(ae?Y.toString()!==N.toString():Y!==N)&&t.removeCurrentContainer()},t.attachToParent=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(a||t.container&&!t.container.parentNode){var s=P(t.props.getContainer);return s?(s.appendChild(t.container),!0):!1}return!0},t.getContainer=function(){return L?(t.container||(t.container=document.createElement("div"),t.attachToParent(!0)),t.setWrapperClassName(),t.container):null},t.setWrapperClassName=function(){var a=t.props.wrapperClassName;t.container&&a&&a!==t.container.className&&(t.container.className=a)},t.removeCurrentContainer=function(){var a,s;(a=t.container)===null||a===void 0||(s=a.parentNode)===null||s===void 0||s.removeChild(t.container)},t.switchScrollingEffect=function(){v===1&&!Object.keys(E).length?(c(),E=(0,n.Z)({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):v||((0,n.Z)(E),E={},c(!0))},t.scrollLocker=new F.Z({container:P(o.getContainer)}),t}return(0,C.Z)(f,[{key:"componentDidMount",value:function(){var t=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,l.Z)(function(){t.forceUpdate()}))}},{key:"componentDidUpdate",value:function(t){this.updateOpenCount(t),this.updateScrollLocker(t),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var t=this.props,a=t.visible,s=t.getContainer;L&&P(s)===document.body&&(v=a&&v?v-1:v),this.removeCurrentContainer(),l.Z.cancel(this.rafId)}},{key:"render",value:function(){var t=this.props,a=t.children,s=t.forceRender,p=t.visible,N=null,I={getOpenCount:function(){return v},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(s||p||this.componentRef.current)&&(N=d.createElement(y.Z,{getContainer:this.getContainer,ref:this.componentRef},a(I))),N}}]),f}(d.Component),G=w},12845:function(D,S,r){"use strict";r.d(S,{Z:function(){return C}});var g;function C(u){if(typeof document=="undefined")return 0;if(u||g===void 0){var d=document.createElement("div");d.style.width="100%",d.style.height="200px";var l=document.createElement("div"),y=l.style;y.position="absolute",y.top="0",y.left="0",y.pointerEvents="none",y.visibility="hidden",y.width="200px",y.height="150px",y.overflow="hidden",l.appendChild(d),document.body.appendChild(l);var h=d.offsetWidth;l.style.overflow="scroll";var m=d.offsetWidth;h===m&&(m=l.clientWidth),document.body.removeChild(l),g=h-m}return g}function Z(u){var d=u.match(/^(.*)px$/),l=Number(d==null?void 0:d[1]);return Number.isNaN(l)?C():l}function b(u){if(typeof document=="undefined"||!u||!(u instanceof Element))return{width:0,height:0};var d=getComputedStyle(u,"::-webkit-scrollbar"),l=d.width,y=d.height;return{width:Z(l),height:Z(y)}}},7474:function(D,S){"use strict";function r(g){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!g)return{};var Z=C.element,b=Z===void 0?document.body:Z,u={},d=Object.keys(g);return d.forEach(function(l){u[l]=b.style[l]}),d.forEach(function(l){b.style[l]=g[l]}),u}S.Z=r}}]);