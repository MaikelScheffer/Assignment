(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21af27"],{be4b:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"custom__order-overview-page"},[t("LastOrdersComponent",{attrs:{orders:e.orderHistory,currency:e.selectedLanguage.currency}})],1)},o=[],c=(t("a4d3"),t("4de4"),t("4160"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("ade3")),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"custom__order-history"},e._l(e.orders,(function(r,s){return t("div",{key:s,staticClass:"custom__order-history__item"},[t("router-link",{attrs:{to:{path:"orders/"+s}}},[t("OrderDetailCard",{attrs:{order:r,currency:e.currency}})],1)],1)})),0)},n=[],d=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"box custom__order-detail-card"},[t("div",{staticClass:"custom__order-detail-card__icon"},[t("i",{class:["in transit"===e.order.status.toLowerCase()?"fas fa-truck":"fas fa-check-circle"]})]),t("div",{staticClass:"custom__order-detail-card__details"},[t("strong",[e._v(e._s(e.order.restaurantName))]),e._v(" "+e._s(e.$t("order-detail-card.delivered-at"))+" "+e._s(e.order.deliveryAddress)+" "),t("br"),e._v(" "+e._s(e.$t("order-detail-card.ordered-on"))+" "+e._s(e.order.orderTime)+" ")]),t("div",{staticClass:"custom__order-detail-card__price"},[e._v(e._s(e.currency)+" "+e._s(e.order.orderTotal))])])},i=[],l={name:"OrderDetailCard",props:{order:{type:Object,required:!0},currency:{type:String,required:!1,default:"€"}}},u=l,p=t("2877"),_=Object(p["a"])(u,d,i,!1,null,null,null),b=_.exports,O={name:"LastOrderComponent",components:{OrderDetailCard:b},props:{orders:{type:Object,required:!0},currency:{type:String,required:!1,default:"€"}}},f=O,y=Object(p["a"])(f,a,n,!1,null,null,null),m=y.exports,v=t("2f62");function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){Object(c["a"])(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w={name:"OrderOverview",components:{LastOrdersComponent:m},computed:g({},Object(v["b"])(["orderHistory","customer","selectedLanguage"]))},C=w,h=Object(p["a"])(C,s,o,!1,null,null,null);r["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d21af27.69526c16.js.map