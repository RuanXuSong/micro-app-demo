(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{78732:function(E,i,t){"use strict";var s=t(58210),l=t(87240),o=t(67294);i.Z=function(_){var a=_.loading;return a&&o.createElement(l.Z,{size:"large",className:"loadingIcon"})}},38571:function(E,i,t){"use strict";t.r(i);var s=t(56361),l=t(44742),o=t(67294),_=t(19170),a=t.n(_),r=t(75263),c=t(48786),u=t(78732),f=t(34416),e=t(66594),n;function m(d){var O=(0,o.useState)(!0),v=(0,l.Z)(O,2),U=v[0],P=v[1];function M(C){var g=C||{},D=g.payload,h=g.type,L=d.dispatch;if(h==="setCurrentUser"){var I=D.name,R=D.profile_image_url,p=(0,s.Z)((0,s.Z)({},D),{},{userName:I,avatar:R});L({type:"user/setCurrentUser",payload:p}),n=p}h==="changeHeaderCollapsed"&&L({type:"global/changeHeaderCollapsed",payload:D})}return(0,o.useEffect)(function(){return r.ZP.addDataListener(e.u6.SWIFT_SCREEN,M),function(){r.ZP.removeDataListener(e.u6.SWIFT_SCREEN,M),r.ZP.clearDataListener(e.u6.SWIFT_SCREEN)}},[]),a()("div",{style:{height:"100%"}},a()(u.Z,{loading:U}),a()("micro-app",{name:e.u6.SWIFT_SCREEN,baseRoute:"/".concat(e.u6.SWIFT_SCREEN),url:"".concat(f.Z.swiftScreen),onMounted:function(){return P(!1)},onAftershow:function(){n&&d.dispatch({type:"user/setCurrentUser",payload:n}),P(!1)},"keep-alive":!0,data:{logoutUrl:f.G}}))}i.default=(0,c.$j)(function(d){var O=d.user,v=d.global;return{headerCollapsed:v.headerCollapsed,currentUser:O.currentUser}})(m)},19170:function(E,i,t){var s=t(67294),l=["oncreated","onbeforemount","onmounted","onunmount","onerror","ondatachange","onbeforeshow","onaftershow","onafterhidden"];function o(_,a){for(var r=arguments.length,c=new Array(r>2?r-2:0),u=2;u<r;u++)c[u-2]=arguments[u];if(typeof _!="string"||!/^micro-app(-\S+)?/.test(_)||!a)return s.createElement.apply(null,[_,a].concat(c));var f=Object.assign({},a);return f.ref=function(e){if(typeof a.ref=="function"?a.ref(e):typeof a.ref=="object"&&(a.ref.current=e),e){toString.call(a.data)==="[object Object]"&&e.data!==a.data&&(e.data=a.data);for(var n in a)if(Object.prototype.hasOwnProperty.call(a,n)&&l.includes(n.toLowerCase())&&typeof a[n]=="function"&&(!e[n]||e[n]!==a[n])){var m=n.toLowerCase().replace("on","");e[n]&&e.removeEventListener(m,e[n],!1),e.addEventListener(m,a[n],!1),e[n]=a[n]}}},s.createElement.apply(null,[_,f].concat(c))}E.exports=o,E.exports.default=o}}]);
