(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[95],{66845:function(y){y.exports={menuItemWrap:"menuItemWrap___hgg74",menuTitle:"menuTitle___3M_qq",childMenuItem:"childMenuItem___398wk",fontIcon:"fontIcon___3aPMr",tabContainer:"tabContainer___8w8LL",tabsNavWrap:"tabsNavWrap___3BNpc",tabPaneContainer:"tabPaneContainer___3LX7j"}},96521:function(y,L,t){"use strict";t.r(L),t.d(L,{default:function(){return u}});var I=t(60360),E=t(66646),O=t(78845),r=t(35317),d=t(84786),c=t(52311),i=t(67294),x=t(88233),A=t(48786),D=t(58210),Z=t(87240),M=t(71765),h=t.n(M),g=function(){return i.createElement(Z.Z,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}})},R=h()({loader:function(){return t.e(259).then(t.bind(t,23371))},loading:g,delay:150}),F=h()({loader:function(){return Promise.all([t.e(261),t.e(477),t.e(421),t.e(63),t.e(97),t.e(668),t.e(51),t.e(202),t.e(358),t.e(933),t.e(929)]).then(t.bind(t,3933))},loading:g,delay:150}),N=h()({loader:function(){return Promise.all([t.e(261),t.e(477),t.e(421),t.e(63),t.e(97),t.e(668),t.e(51),t.e(202),t.e(486),t.e(744),t.e(416)]).then(t.bind(t,28744))},loading:g,delay:150}),W=h()({loader:function(){return Promise.all([t.e(261),t.e(477),t.e(421),t.e(63),t.e(97),t.e(668),t.e(51),t.e(202),t.e(486),t.e(908),t.e(615),t.e(21),t.e(335),t.e(729)]).then(t.bind(t,34335))},loading:g,delay:150}),n=h()({loader:function(){return Promise.all([t.e(261),t.e(477),t.e(421),t.e(63),t.e(97),t.e(668),t.e(51),t.e(202),t.e(908),t.e(615),t.e(21),t.e(722)]).then(t.bind(t,68504))},loading:g,delay:150}),e=h()({loader:function(){return Promise.all([t.e(261),t.e(477),t.e(421),t.e(668),t.e(908),t.e(602),t.e(793),t.e(352)]).then(t.bind(t,29067))},loading:g,delay:150}),l={"/homepage":{title:"\u9996\u9875",component:i.createElement(R,null)},"/authority/menu":{title:"\u83DC\u5355\u7BA1\u7406",component:i.createElement(F,null)},"/authority/data":{title:"\u6570\u636E\u7BA1\u7406",component:i.createElement(N,null)},"/user/list":{title:"\u7528\u6237\u7BA1\u7406",component:i.createElement(n,null)},"/company/list":{title:"\u4F01\u4E1A\u7BA1\u7406",component:i.createElement(W,null)},"/central":{title:"\u4E2A\u4EBA\u4E2D\u5FC3",component:i.createElement(e,null)}},o=function(C){var S=C;C.includes("?")&&(S=C.split("?")[0]);var U=l["".concat(S.replace("/cloud",""))];return U},a=t(66594),s=t(66845),P=t.n(s),K=c.Z.TabPane,p=function(f){(0,O.Z)(S,f);var C=(0,r.Z)(S);function S(U){var v;return(0,I.Z)(this,S),v=C.call(this,U),v.onChange=function(m){A.m8.push(m)},v.remove=function(m){v.props.dispatch({type:"tabs/ReduceTabEffect",payload:m})},v.props.history.listen(function(m){var j=window.location;if(!(m.pathname.indexOf("/cloud/")<0)){var B=o(m.pathname)||{},H=B.title,Y=m.pathname+j.search;v.props.dispatch({type:"tabs/ChangeTabsEffect",payload:{tabKey:Y,title:H,params:m.query}})}}),v}return(0,E.Z)(S,[{key:"render",value:function(){var v=this.props.tabs;return i.createElement("div",{className:P().tabContainer},i.createElement(c.Z,{hideAdd:!0,onEdit:this.remove,onChange:this.onChange,activeKey:v.currentKey,type:a.mC.EditableCard,className:P().tabsNavWrap},v.tabList.map(function(m){var j=o(m.tabKey);return j&&i.createElement(K,{tab:m.title,key:m.tabKey},i.createElement("div",{className:P().tabPaneContainer},j.component))})))}}]),S}(i.Component);function T(f){return{tabs:f.tabs}}var u=(0,x.$j)(T)(p)},71765:function(y,L,t){"use strict";var I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};function E(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function O(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function r(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var d=t(67294),c=t(46031),i=[],x=[];function A(n){return I(t.m)!=="object"?!1:n().every(function(e){return typeof e!="undefined"&&typeof t.m[e]!="undefined"})}function D(n){var e=n(),l={loading:!0,loaded:null,error:null};return l.promise=e.then(function(o){return l.loading=!1,l.loaded=o,o}).catch(function(o){throw l.loading=!1,l.error=o,o}),l}function Z(n){var e={loading:!1,loaded:{},error:null},l=[];try{Object.keys(n).forEach(function(o){var a=D(n[o]);a.loading?e.loading=!0:(e.loaded[o]=a.loaded,e.error=a.error),l.push(a.promise),a.promise.then(function(s){e.loaded[o]=s}).catch(function(s){e.error=s})})}catch(o){e.error=o}return e.promise=Promise.all(l).then(function(o){return e.loading=!1,o}).catch(function(o){throw e.loading=!1,o}),e}function M(n){return n&&n.__esModule?n.default:n}function h(n,e){return d.createElement(M(n),e)}function g(n,e){var l,o;if(!e.loading)throw new Error("react-loadable requires a `loading` component");var a=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:h,webpack:null,modules:null},e),s=null;function P(){return s||(s=n(a.loader)),s.promise}return i.push(P),typeof a.webpack=="function"&&x.push(function(){if(A(a.webpack))return P()}),o=l=function(K){r(p,K);function p(T){E(this,p);var u=O(this,K.call(this,T));return u.retry=function(){u.setState({error:null,loading:!0,timedOut:!1}),s=n(a.loader),u._loadModule()},P(),u.state={error:s.error,pastDelay:!1,timedOut:!1,loading:s.loading,loaded:s.loaded},u}return p.preload=function(){return P()},p.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},p.prototype._loadModule=function(){var u=this;if(this.context.loadable&&Array.isArray(a.modules)&&a.modules.forEach(function(C){u.context.loadable.report(C)}),!!s.loading){typeof a.delay=="number"&&(a.delay===0?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){u.setState({pastDelay:!0})},a.delay)),typeof a.timeout=="number"&&(this._timeout=setTimeout(function(){u.setState({timedOut:!0})},a.timeout));var f=function(){!u._mounted||(u.setState({error:s.error,loaded:s.loaded,loading:s.loading}),u._clearTimeouts())};s.promise.then(function(){f()}).catch(function(C){f()})}},p.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},p.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},p.prototype.render=function(){return this.state.loading||this.state.error?d.createElement(a.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?a.render(this.state.loaded,this.props):null},p}(d.Component),l.contextTypes={loadable:c.shape({report:c.func.isRequired})},o}function R(n){return g(D,n)}function F(n){if(typeof n.render!="function")throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(Z,n)}R.Map=F;var N=function(n){r(e,n);function e(){return E(this,e),O(this,n.apply(this,arguments))}return e.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},e.prototype.render=function(){return d.Children.only(this.props.children)},e}(d.Component);N.propTypes={report:c.func.isRequired},N.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},R.Capture=N;function W(n){for(var e=[];n.length;){var l=n.pop();e.push(l())}return Promise.all(e).then(function(){if(n.length)return W(n)})}R.preloadAll=function(){return new Promise(function(n,e){W(i).then(n,e)})},R.preloadReady=function(){return new Promise(function(n,e){W(x).then(n,n)})},y.exports=R},81886:function(y,L,t){"use strict";var I=t(45090);function E(){}function O(){}O.resetWarningCache=E,y.exports=function(){function r(i,x,A,D,Z,M){if(M!==I){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function d(){return r}var c={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:d,element:r,elementType:r,instanceOf:d,node:r,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:O,resetWarningCache:E};return c.PropTypes=c,c}},46031:function(y,L,t){if(!1)var I,E;else y.exports=t(81886)()},45090:function(y){"use strict";var L="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";y.exports=L}}]);
