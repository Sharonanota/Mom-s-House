(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1313:function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(11),l=n(9),c=n.n(l),i=n(2),a=n(8),u=n(7);function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,e);var t,n,o,r=p(l);function l(){var e;f(this,l);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).addToCollectionAfterLogin=function(){Object(i.C)("add_collection_after_login",e.element.dataset.resourceId);var t="login"===e.sessionTypeValue?a.kb:a.ab;Object(u.k)({element:e.saveButtonTarget,data:{action:t}})},e}return t=l,(n=[{key:"connect",value:function(){if(c.a.get("add_collection_after_login")){var e=c.a.get("add_collection_after_login");this.findAndClickCollectionSaveButton(e),c.a.remove("add_collection_after_login")}}},{key:"trackClick",value:function(e){Object(u.k)({element:e.target,data:{action:a.m,label:this.isProValue?"Pro":"Free",content_type:"Content-".concat(this.contentTypeValue)}})}},{key:"findAndClickCollectionSaveButton",value:function(e){document.querySelector('.resource-action-button--collect[data-resource-id="'.concat(e,'"]')).click()}}])&&s(t.prototype,n),o&&s(t,o),l}(r.b);y.targets=["saveButton"],y.values={isPro:Boolean,contentType:String,sessionType:String},n.e(61).then(n.bind(null,913)),n.e(125).then(n.bind(null,1412)),n.e(128).then(n.bind(null,1413)),n.e(62).then(n.bind(null,916)),n.e(123).then(n.bind(null,1414)),o.default.register("collection-save-button",y),Promise.all([n.e(235),n.e(6),n.e(11),n.e(17),n.e(126)]).then(n.bind(null,1415)).then((function(e){o.default.register("collections-modal",e.default)})),Promise.all([n.e(8),n.e(12),n.e(14),n.e(6),n.e(127)]).then(n.bind(null,1416)).then((function(e){o.default.register("collections-modal-form",e.default)})),Promise.all([n.e(11),n.e(129)]).then(n.bind(null,1417)).then((function(e){o.default.register("collections-search-form",e.default)})),Promise.all([n.e(8),n.e(63)]).then(n.bind(null,501)).then((function(e){o.default.register("collections-privacy-control",e.default)})),Promise.all([n.e(241),n.e(6),n.e(11),n.e(17),n.e(124)]).then(n.bind(null,1418)).then((function(e){o.default.register("collections-alert",e.default)}))}}]);
//# sourceMappingURL=89-45d101c70e5286cc217d.chunk.js.map