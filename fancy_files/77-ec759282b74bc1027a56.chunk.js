(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1137:function(e,t,r){},1307:function(e,t,r){"use strict";r.r(t);r(277),r(1137),r(474);var n=r(5),o=r(139),i=r(209),u=r(211),a=r(13),c=r(18),s=r(2);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,r,n,o=p(i);function i(){return l(this,i),o.apply(this,arguments)}return t=i,(r=[{key:"connect",value:function(){this.getRelatedGrids()}},{key:"getRelatedGrids",value:function(){var e=this;Object(c.f)("/resources/".concat(this.resourceIdValue,"/show_related_async_content?modal_show_view=").concat(this.modalShowViewValue),this.element,"beforeend",(function(){e.loadingSpinnerTarget.remove(),e.pageGrids=e.element.querySelectorAll('[data-controller*="resources-grid"]:not(.ez-resource-grid--partner)'),e.pageGrids.forEach((function(t){e.updateGridItems(t)})),Object(s.e)("related-async-improvements")||e.initAds()}))}},{key:"initAds",value:function(){"undefined"!==typeof window.properSpaNewPage&&null!==document.querySelector("[data-proper-ad-id]")&&window.properSpaNewPage()}},{key:"updateGridItems",value:function(e){window.ezResourceGrid({gridSelector:e,options:{truncate:!!e.getAttribute("data-truncate-results")}})}}])&&f(t.prototype,r),n&&f(t,n),i}(a.a);h.values={resourceId:String,modalShowView:Boolean},h.targets=["loadingSpinner"],n.default.register("ez-carousel",o.default),n.default.register("search-tag",i.default),n.default.register("partner-sponsored-results",u.a),n.default.register("related-grids",h)}}]);
//# sourceMappingURL=77-ec759282b74bc1027a56.chunk.js.map