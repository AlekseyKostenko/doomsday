(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[691],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},1474:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ne}});var r,i,o,a,c=n(1880),u=n(7294),s=n(5697),l=n.n(s),f=n(4839),p=n.n(f),d=n(2993),I=n.n(d),y=n(6494),m=n.n(y),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(T).map((function(e){return T[e]})),"charset"),M="cssText",j="href",v="http-equiv",w="innerHTML",O="itemprop",N="name",C="property",D="rel",A="src",P="target",E={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",x="defer",Z="encodeSpecialCharacters",L="onChangeClientState",z="titleTemplate",B=Object.keys(E).reduce((function(e,t){return e[E[t]]=t,e}),{}),H=[T.NOSCRIPT,T.SCRIPT,T.STYLE],G="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=$(e,T.TITLE),n=$(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,k);return t||r||void 0},_=function(e){return $(e,L)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===D&&"canonical"===e[n].toLowerCase()||u===D&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==w&&c!==M&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=m()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(T.BODY,r),se(T.HTML,i),ue(f,p);var d={baseTag:le(T.BASE,n),linkTags:le(T.LINK,o),metaTags:le(T.META,a),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,s),styleTags:le(T.STYLE,l)},I={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(I[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,I,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(T.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(G),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(G):n.getAttribute(G)!==a.join(",")&&n.setAttribute(G,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===M)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(G,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[E[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[G]=!0,i=pe(n,r),[u.createElement(T.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=fe(n),o=ce(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Q(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case g:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[G]=!0,r);return Object.keys(t).forEach((function(e){var n=E[e]||e;if(n===w||n===M){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),u.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===w||e===M)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Ie=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:de(T.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(g,i,r),link:de(T.LINK,o,r),meta:de(T.META,a,r),noscript:de(T.NOSCRIPT,c,r),script:de(T.SCRIPT,u,r),style:de(T.STYLE,s,r),title:de(T.TITLE,{title:f,titleAttributes:p},r)}},ye=p()((function(e){return{baseTag:X([j,P],e),bodyAttributes:K(h,e),defer:$(e,x),encode:$(e,Z),htmlAttributes:K(g,e),linkTags:q(T.LINK,[D,j],e),metaTags:q(T.META,[N,S,v,C,O],e),noscriptTags:q(T.NOSCRIPT,[w],e),onChangeClientState:_(e),scriptTags:q(T.SCRIPT,[A,w],e),styleTags:q(T.STYLE,[M],e),title:V(e),titleAttributes:K(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),Ie)((function(){return null})),me=(i=ye,a=o=function(e){function t(){return Y(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!I()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return J({},i,((t={})[r.type]=a,t.titleAttributes=J({},o),t));case T.BODY:return J({},i,{bodyAttributes:J({},o)});case T.HTML:return J({},i,{htmlAttributes:J({},o)})}return J({},i,((n={})[r.type]=J({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(W(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(i,r)},R(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(u.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=Ie({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var he,ge,be,Te=function(e){var t=e.title,n=e.description;return u.createElement(me,null,u.createElement("meta",{charSet:"utf-8"}),u.createElement("title",null,t),u.createElement("meta",{name:"description",content:n}))},Se=n(7676),Me=n(7563),je=n(3494),ve=(0,je.ZP)(Se.T)(he||(he=(0,c.Z)(["\n  background: linear-gradient(180deg, #811414 35.94%, #781313 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),we=(0,je.ZP)(Me.Z)(ge||(ge=(0,c.Z)(["\n  border-bottom: 15px solid;\n  padding-bottom: 70px;\n"]))),Oe=je.ZP.img(be||(be=(0,c.Z)(["\n  margin-left: -95px;\n"])));function Ne(){return u.createElement(Se.Ar,null,u.createElement(Te,{title:"Часы судного дня онлайн",description:"До полуночи осталось 100 секунд."}),u.createElement(we,{display:"flex",maxWidth:1040,margin:"auto",alignItems:"center",mt:"20px"},u.createElement(Oe,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjM0IiBoZWlnaHQ9IjU4NCIgdmlld0JveD0iMCAwIDYzNCA1ODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWFzayBpZD0ibWFzazBfMTk1Xzg1IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjM0IiBoZWlnaHQ9IjU4NCI+DQo8cmVjdCB3aWR0aD0iNjM0IiBoZWlnaHQ9IjU4NCIgZmlsbD0id2hpdGUiLz4NCjwvbWFzaz4NCjxnIG1hc2s9InVybCgjbWFzazBfMTk1Xzg1KSI+DQo8Y2lyY2xlIHI9IjQyLjIyMTUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDU3NS42NjQgMTc4LjgwMykiIGZpbGw9ImJsYWNrIi8+DQo8Y2lyY2xlIGN4PSIzOTUuODgzIiBjeT0iMjI2LjQ3MiIgcj0iNDIuMjIxNSIgZmlsbD0iYmxhY2siLz4NCjxjaXJjbGUgcj0iNDIuMjIxNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMjg4LjI4NiAzNTMuMTM3KSIgZmlsbD0iYmxhY2siLz4NCjxlbGxpcHNlIHJ4PSI0Mi4yMjE1IiByeT0iNDIuOTAyNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMjQ2LjA2NCA1MTEuODA4KSIgZmlsbD0iYmxhY2siLz4NCjxjaXJjbGUgY3g9IjU3NC45ODMiIGN5PSI1MTEuODA4IiByPSI0NDEuMzI4IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9Ijc1Ii8+DQo8cmVjdCB4PSI1MjIuMDU3IiB5PSIyMDMuMjkiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzODcuNTMyIiB0cmFuc2Zvcm09InJvdGF0ZSgtOC42OTU0NSA1MjIuMDU3IDIwMy4yOSkiIGZpbGw9ImJsYWNrIi8+DQo8cmVjdCB4PSI1MjIuMDU3IiB5PSIyMDMuMjkiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzODcuNTMyIiB0cmFuc2Zvcm09InJvdGF0ZSgtOC42OTU0NSA1MjIuMDU3IDIwMy4yOSkiIGZpbGw9ImJsYWNrIi8+DQo8cmVjdCB4PSI1MjIuMDU3IiB5PSIyMDMuMjkiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzODcuNTMyIiB0cmFuc2Zvcm09InJvdGF0ZSgtOC42OTU0NSA1MjIuMDU3IDIwMy4yOSkiIGZpbGw9ImJsYWNrIi8+DQo8cmVjdCB4PSI1MjIuMDU3IiB5PSIyMDMuMjkiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzODcuNTMyIiB0cmFuc2Zvcm09InJvdGF0ZSgtOC42OTU0NSA1MjIuMDU3IDIwMy4yOSkiIGZpbGw9ImJsYWNrIi8+DQo8cmVjdCB4PSI1MjIuMDU3IiB5PSIyMDMuMjkiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzODcuNTMyIiB0cmFuc2Zvcm09InJvdGF0ZSgtOC42OTU0NSA1MjIuMDU3IDIwMy4yOSkiIGZpbGw9ImJsYWNrIi8+DQo8cmVjdCB4PSI1MjIuMDU3IiB5PSIyMDMuMjkiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzODcuNTMyIiB0cmFuc2Zvcm09InJvdGF0ZSgtOC42OTU0NSA1MjIuMDU3IDIwMy4yOSkiIGZpbGw9ImJsYWNrIi8+DQo8cmVjdCB4PSI1NzkuNDQ3IiB5PSIzMDkuMTgzIiB3aWR0aD0iMTIiIGhlaWdodD0iMjc4LjkiIHRyYW5zZm9ybT0icm90YXRlKC0wLjQwNTYxNyA1NzkuNDQ3IDMwOS4xODMpIiBmaWxsPSJibGFjayIvPg0KPHJlY3QgeD0iNTc5LjQ0NyIgeT0iMzA5LjE4MyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjI3OC45IiB0cmFuc2Zvcm09InJvdGF0ZSgtMC40MDU2MTcgNTc5LjQ0NyAzMDkuMTgzKSIgZmlsbD0iYmxhY2siLz4NCjxyZWN0IHg9IjU3OS40NDciIHk9IjMwOS4xODMiIHdpZHRoPSIxMiIgaGVpZ2h0PSIyNzguOSIgdHJhbnNmb3JtPSJyb3RhdGUoLTAuNDA1NjE3IDU3OS40NDcgMzA5LjE4MykiIGZpbGw9ImJsYWNrIi8+DQo8cmVjdCB4PSI1NzkuNDQ3IiB5PSIzMDkuMTgzIiB3aWR0aD0iMTIiIGhlaWdodD0iMjc4LjkiIHRyYW5zZm9ybT0icm90YXRlKC0wLjQwNTYxNyA1NzkuNDQ3IDMwOS4xODMpIiBmaWxsPSJibGFjayIvPg0KPHJlY3QgeD0iNTc5LjQ0NyIgeT0iMzA5LjE4MyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjI3OC45IiB0cmFuc2Zvcm09InJvdGF0ZSgtMC40MDU2MTcgNTc5LjQ0NyAzMDkuMTgzKSIgZmlsbD0iYmxhY2siLz4NCjxyZWN0IHg9IjU3OS40NDciIHk9IjMwOS4xODMiIHdpZHRoPSIxMiIgaGVpZ2h0PSIyNzguOSIgdHJhbnNmb3JtPSJyb3RhdGUoLTAuNDA1NjE3IDU3OS40NDcgMzA5LjE4MykiIGZpbGw9ImJsYWNrIi8+DQo8L2c+DQo8L3N2Zz4NCg=="}),u.createElement(Me.Z,{ml:"60px"},u.createElement(ve,{fontSize:48,letterSpacing:"0.05em"},"100 СЕКУНД"),u.createElement(Se.T,{fontSize:50,letterSpacing:"0.037em"},"до полуночи"),u.createElement(Me.Z,{pt:20},u.createElement(Se.zx,{to:"/history"},"Смотреть историю")))),u.createElement(Me.Z,{pt:65},u.createElement(Se.zx,{onClick:function(){alert("Функция доната скоро появится...")}},"Донат")))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fa3d0af00c435e7d91d5.js.map