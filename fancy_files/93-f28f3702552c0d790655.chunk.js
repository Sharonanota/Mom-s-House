(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1326:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r(13),i=r(9),s=r.n(i),o=r(2),u=r(142),l=r(212),c=r(7),d=r(8);function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=b(e);if(t){var n=b(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return m(this,r)}}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,r,a,n=f(i);function i(){var e;p(this,i);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).partnerClick=function(t){var r=t.target.dataset.index;Object(c.k)({element:t.target,data:{action:d.tb,label:"Terms-".concat(e.termsValue),value:parseInt(r,10)+1,content_type:"Content-".concat(e.contentTypeValue)}})},e.handleNewResults=function(t){"END_OF_RESULTS"!==t.detail&&(window.clearTimeout(e.noResultTimer),window.addEventListener("scroll",e.loadNextResults))},e.endLoadingResults=function(t){e.loadingResults=!1,e.removeLoadingIndicator(),"END_OF_RESULTS"===t.detail&&window.removeEventListener("scroll",e.loadNextResults)},e.loadNextResults=function(){if(Object(o.I)(".search-results",800)){var t=e.element.querySelectorAll("li").length,r=e.apiResultsWrapperTarget.getAttribute("data-total-count");!1===e.loadingResults&&t<r&&(e.partnerImageOptions.page+=1,e.getPartnerImageResults())}},e}return t=i,(r=[{key:"connect",value:function(){var e=this;this.loadingResults=!1,Object(c.k)({element:this.element,data:{action:d.ub,label:"Terms-".concat(this.termsValue),value:this.resultCountValue,content_type:"Content-".concat(this.contentTypeValue),non_interaction:!0}}),this.searchTerm=this.apiResultsWrapperTarget.getAttribute("data-keyword"),this.partnerServiceUrl=this.element.getAttribute("data-partner-service-url"),this.partnerImages=new l.a(this.apiResultsWrapperTarget,this.searchTerm,this.partnerServiceUrl),this.sharedId=this.element.getAttribute("data-sharedid"),this.subId1=this.element.getAttribute("data-subid-one"),this.subId2=this.element.getAttribute("data-subid-two");var t=this.partnerImages.makeUrlParams(this.sharedId,this.subId1,this.subId2,this.adType,this.adPlacement());this.partnerImageOptions={page:0,placement:this.placement(),controllerElem:this.element,affiliate:this.apiResultsWrapperTarget.getAttribute("data-affiliate"),impactRadiusUrl:this.apiResultsWrapperTarget.getAttribute("data-impact-radius-url"),loc:this.apiResultsWrapperTarget.getAttribute("data-loc"),limit:this.apiResultsWrapperTarget.getAttribute("data-limit"),apiparams:this.apiResultsWrapperTarget.getAttribute("data-apiparams"),rowHeight:parseInt(this.apiResultsWrapperTarget.getAttribute("data-row-height"),10),maxRows:this.apiResultsWrapperTarget.getAttribute("data-max-rows"),largeThumb:!0,padResults:!1,urlparams:t,padWithTerm:this.apiResultsWrapperTarget.getAttribute("data-pad-with-term")},this.getPartnerImageResults(),this.noResultTimer=setTimeout((function(){e.element.querySelector(".ez-resource-thumb")||e.element.parentNode.removeChild(e.element)}),this.noResultsDelay),window.addEventListener("resultsLoaded",this.handleNewResults,{once:!0}),window.addEventListener("resultsLoaded",this.endLoadingResults)}},{key:"disconnect",value:function(){window.removeEventListener("resultsLoaded",this.handleNewResults,{once:!0}),window.removeEventListener("resultsLoaded",this.endLoadingResults),window.removeEventListener("scroll",this.loadNextResults)}},{key:"adPlacement",value:function(){var e=document.querySelector("body").dataset.istockAdplacementSuffix;return void 0===e&&(e=""),Object(u.a)()?"NRP".concat(e):"SRP".concat(e)}},{key:"placement",value:function(){return Object(u.a)()?"NoResults":"LastPage"}},{key:"getPartnerImageResults",value:function(){this.loadingResults=!0,this.addLoadingIndicator(),this.partnerImages.getResults(this.partnerImageOptions)}},{key:"addLoadingIndicator",value:function(){this.loadingAnimTarget.classList.remove("is-hidden")}},{key:"removeLoadingIndicator",value:function(){this.loadingAnimTarget.classList.add("is-hidden")}},{key:"noResultsDelay",get:function(){return 15e3}},{key:"adType",get:function(){return s.a.get("content_type")||"vector"}}])&&h(t.prototype,r),a&&h(t,a),i}(n.a);v.targets=["apiResultsWrapper","loadingAnim"],v.values={contentType:String,terms:String,resultCount:Number};var R=r(211);a.default.register("partner-justified-search",v),a.default.register("partner-sponsored-results",R.a)}}]);
//# sourceMappingURL=93-f28f3702552c0d790655.chunk.js.map