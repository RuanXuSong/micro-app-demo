(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[34],{57775:function(k,f,e){"use strict";e.r(f);var T=e(13378),D=e(44742),v=e(56361),w=e(50111),W=e(55419),q=e(13753),g=e(48429),A=e(92374),n=e(67294),E=e(54276),u=e(48786),O=e(15486),B=e(62210),K=e(82405),y=e(54200),S=e.n(y),ee=e(75263),Z=e(66845),m=e.n(Z),j=e(35510),b=e.n(j),P=e(96486),te=e.n(P),z=n.createElement(W.ZP,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:n.createElement(g.Z,{type:"primary"},n.createElement(E.rU,{to:"/user/login"},"Go Login"))}),x=function r(a){return a.map(function(_){if(console.log("item: ",_),_.hidden)return null;var c=(0,v.Z)((0,v.Z)({},_),{},{children:_.children?r(_.children):void 0});return O.Z.check(_.authority,c,null)})},$=function(a){var _=(0,u.tT)("@@initialState"),c=_.initialState,N=c||{},C=N.userInfo,i=a.dispatch,G=a.children,H=a.settings,R=a.location,M=R===void 0?{pathname:"/"}:R,p=(0,n.useRef)([]),F=(0,n.useState)(!1),U=(0,D.Z)(F,2),ne=U[0],ae=U[1],J=(0,n.useState)(!1),I=(0,D.Z)(J,2),_e=I[0],le=I[1];(0,n.useEffect)(function(){i&&i({type:"user/setCurrentUser",payload:C})},[C]),(0,n.useEffect)(function(){var o=a.location||{},t=o.pathname,l=t===void 0?"":t;/^\/authorization\/?$/.test(l)&&u.m8.replace("/authorization/resource/list")},[a]);var Q=function(t){i&&i({type:"global/changeLayoutCollapsed",payload:t})},L=function(t,l){var s=t.customIcon,h=t.name,d=t.pro_layout_parentKeys,X=d===void 0?[]:d,Y=!(0,P.isEmpty)(X);return n.createElement("div",{className:b()(Y?m().childMenuItem:m().menuItemWrap)},n.createElement("img",{src:e(56680)("./".concat(s,".png")),alt:h}),n.createElement("div",{className:m().menuTitle},l))},V=(0,n.useMemo)(function(){return(0,K.nG)(M.pathname||"/",p.current).pop()||{authority:void 0}},[M.pathname]);return n.createElement(A.ZP,(0,T.Z)({logo:S()},a,H,{onCollapse:Q,onMenuHeaderClick:function(){return u.m8.push("/")},menuItemRender:function(t,l){return t.isUrl||!t.path||M.pathname===t.path?L(t,l):n.createElement(E.rU,{to:t.path},L(t,l))},splitMenus:!0,itemRender:function(t,l,s,h){var d=s.indexOf(t)===0;return d?n.createElement(E.rU,{to:h.join("/")},t.breadcrumbName):n.createElement("span",null,t.breadcrumbName)},footerRender:function(){return null},menuDataRender:x,rightContentRender:function(){return n.createElement(B.Z,null)},postMenuData:function(t){var l=t.filter(function(s){return!(s.path.indexOf("/*")>-1)});return p.current=l||[],l||[]}}),n.createElement(O.Z,{authority:V.authority,noMatch:z},G))};f.default=(0,u.$j)(function(r){var a=r.global,_=r.settings;return{collapsed:a.collapsed,settings:_}})($)}}]);
