(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1418:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(44),o=n(1381);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(s,e);var t,n,r,l=a(s);function s(){var e;i(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=l.call.apply(l,[this].concat(n))).fadeDuration=500,e.displayDuration=5e3,e.clearTimer=function(){e.timer&&(clearTimeout(e.timer),e.element.classList.remove("is-slid-out"),e.element.addEventListener("mouseleave",e.slideIn))},e.slideIn=function(){e.element.classList.remove("is-slid-out"),e.timer=setTimeout((function(){e.slideOut()}),e.fadeDuration+e.displayDuration)},e.slideOut=function(){e.element.classList.add("is-slid-out"),e.timer=setTimeout((function(){e.remove()}),e.fadeDuration)},e.hide=function(){e.element.classList.add("is-hidden"),setTimeout((function(){e.remove()}),e.fadeDuration)},e.remove=function(){e.element.removeEventListener("mouseleave",e.slideIn),e.element.removeEventListener("mouseenter",e.clearTimer),e.element.remove()},e}return t=s,(n=[{key:"connect",value:function(){var e=1*parseInt(getComputedStyle(this.collectionNameTarget).lineHeight,10);this.element.addEventListener("mouseenter",this.clearTimer),Object(o.a)(".collections-alert__link a",e,{spaces:!1}),this.slideIn(),window.addEventListener("hideCollectionAlert",this.hide)}},{key:"disconnect",value:function(){window.removeEventListener("hideCollectionAlert",this.hide)}}])&&c(t.prototype,n),r&&c(t,r),s}(r.default);f.targets=["collectionName"]}}]);
//# sourceMappingURL=collections-alert-controller-c080a2096f817f261204.chunk.js.map