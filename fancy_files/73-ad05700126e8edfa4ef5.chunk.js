(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1289:function(e,t,n){"use strict";n.r(t);n(754),n(755),n(756),n(757),n(758),n(759),n(760);var o=n(5),i=n(2),r=n(11),a=n(7),u=n(8);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=new(n(40).a),m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(p,e);var t,n,o,r=d(p);function p(){var e;s(this,p);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).prependIds=["menu-group-join-pro"],e.toggleMobileMenuScrollClasses=function(e){e.currentTarget.parentNode.classList.contains("is-closed")?document.querySelector("body").classList.remove("has-open-mobile-menu","has-active-mobile-submenu"):document.querySelector("body").classList.add("has-open-mobile-menu")},e.trackExploreClick=function(e){Object(a.k)({element:e.target,data:{action:u.G,label:"Link-".concat(e.target.dataset.englishLabel),content_type:"Content-".concat(e.target.dataset.contentType)}})},e}return t=p,(n=[{key:"connect",value:function(){this.hasMobileMenuTarget&&(this.setupMenuGroupParents(),this.setupSiteNavigationMediaQueries(),f.evaluateAll(),f.addListeners())}},{key:"disconnect",value:function(){f.removeListeners(),f.clearQueries()}},{key:"createOverlay",value:function(e){var t=document.createElement("DIV");t.classList.add("ez-dark-overlay"),t.classList.add("mobile-search-overlay"),t.dataset.action=e,this.element.appendChild(t)}},{key:"clearSearchInput",value:function(){var e=this.element.querySelector("#search");e.value="",e.focus()}},{key:"toggleMobileSearch",value:function(){var e=document.getElementById("search"),t=document.querySelector("body"),n=document.querySelector(".ez-dark-overlay.mobile-search-overlay");t.classList.toggle("is-mobile-search"),t.classList.contains("is-mobile-search")&&!n?(this.savedVal=e.value,this.createOverlay("click->site-header#toggleMobileSearch"),e.focus(),e.value="",e.value=this.savedVal):!t.classList.contains("is-mobile-search")&&n&&(n.remove(),e.value=this.savedVal)}},{key:"setupSiteNavigationMediaQueries",value:function(){var e=document.querySelector("body").classList;e.contains("is-logged-in")&&e.contains("is-pro")?this.setupProUserMediaQueries():e.contains("is-logged-in")?this.setupLoggedInMediaQueries():this.setupLoggedOutMediaQueries(),this.setupSearchCloseQueries()}},{key:"setupSearchCloseQueries",value:function(){var e=this;f.addMediaQuery("(max-width: 635px)",null,(function(){document.querySelector(".ez-dark-overlay.mobile-search-overlay")&&e.toggleMobileSearch()}))}},{key:"setupProUserMediaQueries",value:function(){var e=this;f.addMediaQuery("(max-width: 940px)",(function(){e.collectAllMenuGroups()}),(function(){e.mobileMenuItems()&&e.restoreAllMenuGroups()}))}},{key:"setupLoggedInMediaQueries",value:function(){var e=this;f.addMediaQuery("(min-width: 1181px)",(function(){e.restoreAllMenuGroups()})),f.addMediaQuery("(max-width: 1180px) and (min-width: 941px)",(function(){e.restoreAllMenuGroups(),Object(i.e)("header-and-search-optimizations")||e.collectJoinBtn()})),f.addMediaQuery("(max-width: 940px)",(function(){e.collectAllMenuGroups(),Object(i.e)("header-and-search-optimizations")||e.collectJoinBtn()}))}},{key:"setupLoggedOutMediaQueries",value:function(){var e=this;f.addMediaQuery("(max-width: 1105px)",(function(){e.collectAllMenuGroups(),Object(i.e)("header-and-search-optimizations")||e.collectJoinBtn("menu-group-browse")}),(function(){e.mobileMenuItems()&&e.restoreAllMenuGroups(),Object(i.e)("header-and-search-optimizations")||e.collectJoinBtn("menu-group-auth")}))}},{key:"setupMenuGroupParents",value:function(){this.menuGroupTargets.forEach((function(e){var t=e.closest(".ez-site-header__submenu-wrapper");e.dataset.parentMenu||(e.dataset.parentMenu=t.id)}))}},{key:"moveStaticMenuGroups",value:function(e){Object(i.e)("header-and-search-optimizations")||this.menuGroupStaticTargets.forEach((function(t){e.appendChild(t)}))}},{key:"collectJoinBtn",value:function(e){if(document.querySelector("#menu-group-join-pro")){var t=e||"menu-group-user",n=document.querySelector("#".concat(t));n.insertBefore(document.querySelector("#menu-group-join-pro"),n.childNodes[0])}}},{key:"collectMenuGroup",value:function(e,t){if(!e)return!1;if(e.closest(".ez-site-header__submenu-wrapper").classList.add("is-hidden"),this.prependIds.includes(e.id)?t.insertBefore(e,t.childNodes[0]):t.appendChild(e),Object(i.e)("header-and-search-optimizations")&&this.isJoinButtonGroup(e)){var n=e.querySelector("a.ez-site-header__menu-item");this.dressUpJoinButton(n)}}},{key:"collectAllMenuGroups",value:function(){var e=this;this.moveStaticMenuGroups(this.mobileMenuTarget),Object(i.e)("header-and-search-optimizations")?this.menuGroupTargets.forEach((function(t){e.isStaticMenuGroup(t)||e.collectMenuGroup(t,e.mobileMenuTarget)})):this.menuGroupTargets.forEach((function(t){e.isStaticMenuGroup(t)||e.isJoinButtonGroup(t)||e.collectMenuGroup(t,e.mobileMenuTarget)}))}},{key:"restoreMenuGroup",value:function(e,t){if(t.closest(".ez-site-header__submenu-wrapper").classList.remove("is-hidden"),this.prependIds.includes(e.id)?t.insertBefore(e,t.childNodes[0]):t.appendChild(e),Object(i.e)("header-and-search-optimizations")&&this.isJoinButtonGroup(e)){var n=e.querySelector("a.ez-btn--light");this.dressDownJoinButton(n)}}},{key:"restoreAllMenuGroups",value:function(){var e=this;this.hasMainUserMenuTarget&&this.moveStaticMenuGroups(this.mainUserMenuTarget),this.menuGroupTargets.forEach((function(t){if(!e.isStaticMenuGroup(t)){var n=document.querySelector("#".concat(t.dataset.parentMenu)),o=n.querySelector(".ez-drop-down__submenu"),i=o||n;e.restoreMenuGroup(t,i)}}))}},{key:"isJoinButtonGroup",value:function(e){return"menu-group-join-pro"===e.id}},{key:"dressUpJoinButton",value:function(e){e&&!this.isSalesEventJoinBtn(e)&&(e.classList.add("ez-btn","ez-btn--light","ez-btn--medium"),e.classList.remove("ez-site-header__menu-item"))}},{key:"dressDownJoinButton",value:function(e){e&&!this.isSalesEventJoinBtn(e)&&(e.classList.remove("ez-btn","ez-btn--light","ez-btn--medium"),e.classList.add("ez-site-header__menu-item"))}},{key:"isSalesEventJoinBtn",value:function(e){return e.classList.contains("ez-site-header__menu-item--sales-event")}},{key:"isStaticMenuGroup",value:function(e){return e.dataset.siteHeaderTarget.indexOf("menuGroupStatic")>-1}},{key:"mobileMenuItems",value:function(){var e=this.mobileMenuTarget.querySelector("#mobile-menu .ez-drop-down__submenu-group"),t=this.mobileMenuTarget.querySelector("#mobile-menu .ez-site-header__submenu-group");return e||t}},{key:"buyMoreClick",value:function(e){var t=Object(a.d)(e.target);Object(a.k)({element:e.target,data:{action:u.X,category:t}}),Object(a.l)({action:u.Y,category:t})}},{key:"rebuyCredits",value:function(e){Object(a.k)({element:e.currentTarget,data:{action:u.Gb}})}},{key:"headerLogin",value:function(){Object(a.k)({element:this.loginButtonTarget,data:{action:u.ib}})}},{key:"headerSignUp",value:function(){Object(a.k)({element:this.signupButtonTarget,data:{action:u.U}})}},{key:"sendHeaderJoinProEvent",value:function(e){var t=Object(a.d)(e.target);Object(a.k)({element:e.target,data:{action:u.X,category:t}}),Object(a.l)({action:u.Y,category:t})}}])&&c(t.prototype,n),o&&c(t,o),p}(r.b);m.targets=["menuGroup","menuGroupStatic","subMenu","mobileMenu","mainUserMenu","loginButton","signupButton"],o.default.register("site-header",m),(Object(i.e)("marketing-notifications-v1")||Object(i.N)("marketing-notifications-v1"))&&Promise.all([n.e(9),n.e(10),n.e(13),n.e(182)]).then(n.bind(null,1437)).then((function(e){o.default.register("notifications-menu",e.default)})),Promise.all([n.e(19),n.e(210)]).then(n.bind(null,1438)).then((function(e){o.default.register("search-explore-nav",e.default)}))},754:function(e,t,n){e.exports=n.p+"media/components/util/logos/eezy-logo--white-8ce98aad345a205d99918a07ccb94658.svg"},755:function(e,t,n){e.exports=n.p+"media/components/util/logos/vecteezy-logo--black-6ae63b24255cecc610e8a1004514baf9.svg"},756:function(e,t,n){e.exports=n.p+"media/components/util/logos/vecteezy-logo--orange-on-white-896315bbe0e1d2b6ab3f99334c00fb37.svg"},757:function(e,t,n){e.exports=n.p+"media/components/util/logos/vecteezy-logo--white-on-orange-73a803e49555c14b184939ca1a6108d6.jpg"},758:function(e,t,n){e.exports=n.p+"media/components/util/logos/vecteezy-logo--mountain-54ab23ad3a8fc896332e955c5c3185c2.jpg"},759:function(e,t,n){e.exports=n.p+"media/components/util/logos/vecteezy-opengraph-5815e2ab4993dcde975b587110612698.jpg"},760:function(e,t,n){}}]);
//# sourceMappingURL=73-ad05700126e8edfa4ef5.chunk.js.map