(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0f08e6f0":"e50630c0","chunk-2d21af27":"69526c16"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0727":function(e){e.exports=JSON.parse('{"pending-order-status":{"in-progress-message":"Uw bestelling van {restaurantName} is onderweg"},"order-detail-card":{"delivered-at":"Afgeleverd bij","ordered-on":"Besteld op"},"order-detail-page":{"address":"Adres","reference":"Referentie","date":"Datum","order":"Bestelling","amount":"Aantal","description":"Beschrijving","payment-method":"Betaalmethode","price":"Prijs","order-total":"Totaal kosten","state-history":"Status historie","state":"Status","in-transit":"In behandling"}}')},"27dc":function(e,t,r){},4360:function(e,t,r){"use strict";var n=r("2b0e"),a=r("2f62"),o=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("2ca0"),r("159b"),r("96cf"),r("1da1")),s=r("ade3"),i=r("63e0"),c=r("9225");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={selectedLanguage:{flag:"nl",language:"nl-NL",title:"Nederlands",currency:"€"},languages:[{flag:"uk",language:"en",title:"English",currency:"£"},{flag:"nl",language:"nl-NL",title:"Nederlands",currency:"€"}]},f=d({},l),p=Object(s["a"])({},i["h"],(function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit(i["e"],t),r.abrupt("return",t);case 2:case"end":return r.stop()}}),r)})))()})),m=Object(s["a"])({},i["e"],(function(e,t){var r,n=e.languages.filter((function(e){return e.language.startsWith(t)}));e.selectedLanguage=null!==(r=null===n||void 0===n?void 0:n[0])&&void 0!==r?r:e.selectedLanguage,c["a"].locale=e.selectedLanguage.language})),g={selectedLanguage:function(e){return e.selectedLanguage},languages:function(e){return e.languages}},b={state:f,actions:p,mutations:m,getters:g},O=r("bc3a"),v=r.n(O),h="https://api.myjson.com/bins/",y="".concat(h,"pdefl"),j="".concat(h,"19f9bd"),w="".concat(h,"o1sp5"),P={getCustomerInformation:function(e){return v.a.get(y)}};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k,D,N={customer:{customerId:null,firstName:"",lastName:"",gender:"",language:"en",currency:"euro",emailAddress:"",birthday:"",address:"",registered:{date:"",age:0},picture:{large:"https://randomuser.me/api/portraits/men/81.jpg",medium:"https://randomuser.me/api/portraits/med/men/81.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/81.jpg"}}},x=C({},N),S=Object(s["a"])({},i["a"],(function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,P.getCustomerInformation(t);case 2:return n=r.sent,a=n.data,e.commit(i["d"],a),r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})))()})),E=Object(s["a"])({},i["d"],(function(e,t){e.customer=t})),I={customer:function(e){return e.customer}},L={state:x,actions:S,mutations:E,getters:I},R=(r("d81d"),r("4fad"),r("3835")),A={getOrderDetails:function(e){return v.a.get(w)},getRecentOrderHistory:function(e){return v.a.get(j)}};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={order:{orderTime:"",restaurantName:"",orderTotal:"",deliveryAddress:"",status:""},orderHistory:{customerId:0,last5Orders:[]}},B=T({},$),q=(k={},Object(s["a"])(k,i["b"],(function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,A.getOrderDetails(t);case 2:return n=r.sent,a=n.data,e.commit(i["f"],a),r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})))()})),Object(s["a"])(k,i["c"],(function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,A.getRecentOrderHistory(t);case 2:return n=r.sent,a=n.data,e.commit(i["g"],a),r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})))()})),k),M=(D={},Object(s["a"])(D,i["f"],(function(e,t){e.order=t})),Object(s["a"])(D,i["g"],(function(e,t){e.orderHistory=t})),D),J={order:function(e){return e.order},orderHistory:function(e){return e.orderHistory.last5Orders},pendingOrder:function(e){var t,r=Object.entries(e.orderHistory.last5Orders).filter((function(e){var t=Object(R["a"])(e,2),r=(t[0],t[1]);return"in transit"===r.status.toLowerCase()})).map((function(e){var t=Object(R["a"])(e,2),r=t[0],n=t[1];return{orderId:r,restaurantName:n.restaurantName}})),n={restaurantName:"",orderId:""};return null!==(t=null===r||void 0===r?void 0:r[0])&&void 0!==t?t:n}},U={state:B,actions:q,mutations:M,getters:J};n["a"].use(a["a"]);t["a"]=new a["a"].Store({modules:{core:b,customer:L,order:U}})},"49f8":function(e,t,r){var n={"./en.json":"edd4","./nl-NL.json":"0727"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="49f8"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavBar",{attrs:{languages:e.languages}}),r("div",{staticClass:"container"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("PendingOrderStatus",{attrs:{restaurantName:e.pendingOrder.restaurantName,orderId:e.pendingOrder.orderId}})],1)]),r("router-view")],1)],1)},o=[],s=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("96cf"),r("1da1")),i=r("ade3"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar custom__navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"navbar-end custom__navbar__navbar-end"},[r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e._m(1),r("div",{staticClass:"navbar-dropdown"},e._l(e.languages,(function(t){return r("a",{key:t.flag,staticClass:"navbar-item",on:{click:function(r){return e.changeLocale(t.language)}}},[e._v(e._s(t.title))])})),0)])])])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"/"}},[n("img",{attrs:{src:r("9b19")}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"navbar-link is-arrowless"},[r("i",{staticClass:"fas fa-globe"})])}],d=r("4360"),l=r("63e0"),f={name:"NavBar",props:{languages:{type:Array,required:!0}},methods:{changeLocale:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].dispatch(l["h"],e);case 2:case"end":return t.stop()}}),t)})))()}}},p=f,m=r("2877"),g=Object(m["a"])(p,c,u,!1,null,null,null),b=g.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return""!==e.restaurantName||""!==e.orderId?r("div",[r("router-link",{attrs:{to:{path:"orders/"+e.orderId}}},[r("div",{staticClass:"notification is-info is-light custom__pending-order-status"},[r("span",{staticClass:"icon"},[r("i",{staticClass:"fas fa-shipping-fast"})]),r("p",[e._v(e._s(e.$t("pending-order-status.in-progress-message",{restaurantName:e.restaurantName})))])])])],1):e._e()},v=[],h={name:"PendingOrderStatus",props:{restaurantName:{type:String,required:!1,default:""},orderId:{type:String,required:!1,default:""}}},y=h,j=Object(m["a"])(y,O,v,!1,null,null,null),w=j.exports,P=r("2f62");function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={name:"App",components:{NavBar:b,PendingOrderStatus:w},computed:C({},Object(P["b"])(["pendingOrder","languages"])),mounted:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=window.navigator.userLanguage||window.navigator.language,e.next=3,d["a"].dispatch(l["h"],t);case 3:case"end":return e.stop()}}),e)})))()}},D=k,N=Object(m["a"])(D,a,o,!1,null,null,null),x=N.exports,S=(r("d3b7"),r("8c4f")),E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"custom__order-overview"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-three-quarters"},[r("router-view")],1),r("div",{staticClass:"column"},[r("CustomerInformation",{attrs:{customer:e.customer}})],1)])])},I=[],L=(r("3ca3"),r("ddb0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("article",{staticClass:"media"},[r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-64x64"},[r("img",{attrs:{src:e.customer.picture.medium,alt:"Image"}})])]),r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[r("div",[r("strong",[e._v(e._s(e.customer.firstName)+" "+e._s(e.customer.lastName))])]),r("small",[r("a",{attrs:{href:e.customer.emailAddress}},[e._v(e._s(e.customer.emailAddress))])]),r("div",[e._v(e._s(e.customer.address))])])])])])}),R=[],A={name:"CustomerInformation",props:{customer:{type:Object,required:!0}}},H=A,T=Object(m["a"])(H,L,R,!1,null,null,null),$=T.exports;function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={name:"CustomerProfilePage",components:{CustomerInformation:$},beforeRouteEnter:function(e,t,r){var n="123";Promise.all([d["a"].dispatch(l["a"],n),d["a"].dispatch(l["c"],n)]).then((function(){r()}))},computed:q({},Object(P["b"])(["orderHistory","customer"]))},J=M,U=Object(m["a"])(J,E,I,!1,null,null,null),z=U.exports;n["a"].use(S["a"]);var F=[{path:"/",redirect:"/profile/123"},{path:"/profile/:userId",component:z,children:[{path:"/orders",name:"order-overview",component:function(){return r.e("chunk-2d21af27").then(r.bind(null,"be4b"))}},{path:"/orders/:orderId",name:"order-detail",component:function(){return r.e("chunk-0f08e6f0").then(r.bind(null,"2d63"))}},{path:"/",redirect:{name:"order-overview"}}]}],W=new S["a"]({mode:"history",base:"/",routes:F}),Y=W,Z=r("9225"),G=r("289d");r("5abe"),r("7051"),r("27dc");n["a"].config.productionTip=!1,new n["a"]({router:Y,store:d["a"],i18n:Z["a"],render:function(e){return e(x)}}).$mount("#app"),n["a"].use(G["a"])},"63e0":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"d",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"g",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"f",(function(){return c})),r.d(t,"h",(function(){return u})),r.d(t,"e",(function(){return d}));var n="fetchCustomerInformation",a="setCustomerInformation",o="fetchRecentOrderHistory",s="setRecentOrderHistory",i="fetchOrderDetails",c="setOrderDetails",u="tryChangeLanguage",d="setLanguage"},9225:function(e,t,r){"use strict";r("4160"),r("d3b7"),r("ac1f"),r("466d"),r("159b"),r("ddb0");var n=r("2b0e"),a=r("a925");function o(){var e=r("49f8"),t={};return e.keys().forEach((function(r){var n=r.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];t[a]=e(r)}})),t}n["a"].use(a["a"]),t["a"]=new a["a"]({locale:"en",fallbackLocale:"nl-NL",messages:o()})},"9b19":function(e,t,r){e.exports=r.p+"img/logo.4fe94627.svg"},edd4:function(e){e.exports=JSON.parse('{"pending-order-status":{"in-progress-message":"Your order from {restaurantName} is on its way!"},"order-detail-card":{"delivered-at":"Delivered to","ordered-on":"Ordered on"},"order-detail-page":{"address":"Address","reference":"Reference","date":"Date","order":"Order","amount":"Amount","description":"Description","payment-method":"Payment method","price":"Price","order-total":"Order total","state-history":"State history","state":"State","in-transit":"In transit"}}')}});
//# sourceMappingURL=app.ae416625.js.map