(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[656],{31777:function(le,Z,e){"use strict";e.r(Z),e.d(Z,{default:function(){return te}});var L=e(13378),j=e(44742),b=e(56361),se=e(50111),K=e(55419),ie=e(13753),U=e(48429),ce=e(84786),F=e(52311),H=e(92374),n=e(67294),R=e(54276),h=e(48786),D=e(15486),O=e(62210),P=e(82405),W=e(54200),B=e.n(W),T=e(75263),de=e(94043),fe=e(86411);function J(){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime.mark(function i(){return _regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,app.getInitialState();case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},i)})),M.apply(this,arguments)}var Q={initialState:void 0,loading:!0,error:void 0},me=function(){var i=useState(Q),a=_slicedToArray(i,2),u=a[0],c=a[1],d=useCallback(_asyncToGenerator(_regeneratorRuntime.mark(function m(){var f,g;return _regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c(function(s){return _objectSpread(_objectSpread({},s),{},{loading:!0,error:void 0})}),r.prev=1,f=function(){return new Promise(function(y){return y(J())})},r.next=5,f();case 5:g=r.sent,c(function(s){return _objectSpread(_objectSpread({},s),{},{initialState:g,loading:!1})}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),c(function(s){return _objectSpread(_objectSpread({},s),{},{error:r.t0,loading:!1})});case 12:case"end":return r.stop()}},m,null,[[1,9]])})),[]),E=useCallback(function(m){c(function(f){return _objectSpread(_objectSpread({},f),{},{initialState:m,loading:!1})})},[]);return useEffect(function(){d()},[]),_objectSpread(_objectSpread({},u),{},{refresh:d,setInitialState:E})},V=e(66845),S=e.n(V),X=e(35510),Y=e.n(X),x=e(96486),w=function(a){return n.createElement("i",{className:"iconfont ".concat(a.name||""," ").concat(a.className),style:a.style})},k=w,ve=F.Z.TabPane,q=n.createElement(K.ZP,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:n.createElement(U.Z,{type:"primary"},n.createElement(R.rU,{to:"/user/login"},"Go Login"))}),_=function(a){var u=(0,h.tT)("@@initialState"),c=u.initialState,d=c.menus,E=d===void 0?[]:d,m=function l(t){return t.map(function(o){if(o.hidden)return null;var v=(0,b.Z)((0,b.Z)({},o),{},{children:o.children?l(o.children):void 0});return D.Z.check(E,v)})},f=a.dispatch,g=a.children,N=a.settings,r=a.location,s=r===void 0?{pathname:"/"}:r,y=(0,n.useRef)([]),ne=(0,n.useState)(!1),$=(0,j.Z)(ne,2),he=$[0],Se=$[1],ae=(0,n.useState)(!1),A=(0,j.Z)(ae,2),ge=A[0],ye=A[1];(0,n.useEffect)(function(){return T.ZP.setGlobalData({showDropDown:!0}),function(){T.ZP.setGlobalData({showDropDown:!1})}},[]),(0,n.useEffect)(function(){var l=a.location||{},t=l.pathname,o=t===void 0?"":t;/^\/authorization\/?$/.test(o)&&h.m8.replace("/authorization/resource/list")},[a]);var re=function(t){f&&f({type:"global/changeLayoutCollapsed",payload:t})},C=function(t,o){var v=t.customIcon,p=t.fontIcon,I=t.name,G=t.pro_layout_parentKeys,ue=G===void 0?[]:G,z=!(0,x.isEmpty)(ue);return z?n.createElement("div",{className:Y()(z?S().childMenuItem:S().menuItemWrap)},p?n.createElement(k,{name:p,className:S().fontIcon,style:{marginRight:10}}):n.createElement("img",{src:e(56680)("./".concat(v,".png")),alt:I}),n.createElement("div",{className:S().menuTitle},o)):null},oe=(0,n.useMemo)(function(){return(0,P.nG)(s.pathname||"/",y.current).pop()||{authority:void 0}},[s.pathname]);return n.createElement(H.ZP,(0,L.Z)({logo:B()},a,N,{className:"auth-layout",onCollapse:re,onMenuHeaderClick:function(){return h.m8.push("/")},menuItemRender:function(t,o){return t.isUrl||!t.path||s.pathname===t.path?C(t,o):n.createElement(R.rU,{to:t.path},C(t,o))},subMenuItemRender:function(t,o){return C(t,o)},splitMenus:!0,itemRender:function(t,o,v,p){var I=v.indexOf(t)===0;return I?n.createElement(R.rU,{to:p.join("/")},t.breadcrumbName):n.createElement("span",null,t.breadcrumbName)},footerRender:function(){return null},menuDataRender:m,rightContentRender:function(){return n.createElement(O.Z,null)},postMenuData:function(t){return y.current=t||[],t||[]}}),n.createElement(D.Z,{authority:oe.authority,noMatch:q},g))};function ee(i){var a=i.router.location,u=i.global,c=i.settings,d=a.pathname;return{menuKey:d,collapsed:u.collapsed,settings:c}}var te=(0,h.$j)(ee)(_)}}]);
