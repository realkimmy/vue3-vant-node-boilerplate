(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{527:function(n,e,t){"use strict";t.r(e);var r=t(528),o=t.n(r);for(var f in r)["default"].indexOf(f)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(f);e.default=o.a},528:function(n,e,t){"use strict";var r=t(280);Object.defineProperty(e,"__esModule",{value:!0});var o=t(0);e.default=(0,o.defineComponent)({props:{options:{type:Object,default:function(){}}},setup:function(n,e){var t=e.emit,f=(0,o.ref)(null),c=(0,o.ref)(null);return(0,o.onMounted)((function(){(f=new IntersectionObserver((function(n){var e=r(n,1)[0];e&&e.isIntersecting&&t("intersect")}),n.options)).observe(c.value)})),{observer:f,root:c}}})},606:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}));var r=function(){var n=this.$createElement;return(this._self._c||n)("div",{ref:"root",staticClass:"observer"})},o=[]},644:function(n,e,t){"use strict";t.r(e);var r=t(606),o=t(527);for(var f in o)["default"].indexOf(f)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(f);var c=t(2),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports}}]);