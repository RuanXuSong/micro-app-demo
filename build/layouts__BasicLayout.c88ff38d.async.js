(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[34],{57775:function(ee,h,e){"use strict";e.r(h);var L=e(13378),f=e(44742),D=e(56361),te=e(50111),I=e(55419),ae=e(13753),T=e(48429),y=e(92374),a=e(67294),d=e(54276),l=e(48786),K=e(21369),ne=e(23416),W=e(62210),A=e(82405),B=e(54200),g=e.n(B),_e=e(75263),S=e(66845),E=e.n(S),j=e(35510),Z=e.n(j),v=e(96486),se=e.n(v),b=a.createElement(I.ZP,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:a.createElement(T.Z,{type:"primary"},a.createElement(d.rU,{to:"/user/login"},"Go Login"))}),z=function(_){var c=(0,l.tT)("@@initialState"),x=c.initialState,N=x||{},O=N.userInfo,$=(0,l.tT)("resourceData"),G=$.resourceList,H=function s(t){return t.map(function(n){if(n.hidden)return null;var r=(0,D.Z)((0,D.Z)({},n),{},{children:n.children?s(n.children):void 0}),u=G.map(function(o){return"/".concat(o.resourceKey)});return u.includes(r.key)?r:null})},i=_.dispatch,F=_.children,J=_.settings,Q=_.headerCollapsed,P=_.location,M=P===void 0?{pathname:"/"}:P,C=(0,a.useRef)([]),V=(0,a.useState)(!1),R=(0,f.Z)(V,2),re=R[0],oe=R[1],X=(0,a.useState)(!1),p=(0,f.Z)(X,2),le=p[0],ue=p[1];(0,a.useEffect)(function(){i&&i({type:"user/setCurrentUser",payload:O})},[O]),(0,a.useEffect)(function(){var s=_.location||{},t=s.pathname,n=t===void 0?"":t;/^\/authorization\/?$/.test(n)&&l.m8.replace("/authorization/resource/list")},[_]);var Y=function(t){i&&i({type:"global/changeLayoutCollapsed",payload:t})},U=function(t,n){var r=t.customIcon,u=t.name,o=t.pro_layout_parentKeys,w=o===void 0?[]:o,q=!(0,v.isEmpty)(w);return a.createElement("div",{className:Z()(q?E().childMenuItem:E().menuItemWrap)},a.createElement("img",{src:e(56680)("./".concat(r,".png")),alt:u}),a.createElement("div",{className:E().menuTitle},n))},k=(0,a.useMemo)(function(){return(0,A.nG)(M.pathname||"/",C.current).pop()||{authority:void 0}},[M.pathname]);return a.createElement(y.ZP,(0,L.Z)({className:Q?"collapsed-basic-layout":"basic-layout",logo:g()},_,J,{onCollapse:Y,onMenuHeaderClick:function(){return l.m8.push("/")},menuItemRender:function(t,n){return t.isUrl||!t.path||M.pathname===t.path?U(t,n):a.createElement(d.rU,{to:t.path},U(t,n))},splitMenus:!0,itemRender:function(t,n,r,u){var o=r.indexOf(t)===0;return o?a.createElement(d.rU,{to:u.join("/")},t.breadcrumbName):a.createElement("span",null,t.breadcrumbName)},footerRender:function(){return null},menuDataRender:H,rightContentRender:function(){return a.createElement(W.Z,null)},postMenuData:function(t){var n=t.filter(function(r){return!(r.path.indexOf("/*")>-1)});return C.current=n||[],n||[]}}),a.createElement(K.Z,{authority:k.authority,noMatch:b},F))};h.default=(0,l.$j)(function(m){var _=m.global,c=m.settings;return{collapsed:_.collapsed,headerCollapsed:_.headerCollapsed,settings:c}})(z)}}]);
