(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1443:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var i=t(44),o=t(9),s=t.n(o),a=t(2);class c extends i.default{connect(){super.connect()}close(e){super.close(e,()=>{const e=this.element.querySelector('[data-action*="click->returning-signin#downloadAnyway"]');e&&e.click()})}downloadAnyway(e){e.preventDefault(),e.stopPropagation();const{dlSize:n}=e.target.dataset;Object(a.O)("TriggerFreeDownload",{dlSize:n}),this.denyLogin()}denyLogin(){const e=new Date;e.setTime(e.getTime()+18e5),s.a.set("returning_signin_denied",!0,{expires:e})}}}}]);
//# sourceMappingURL=returning-signin-controller-54f792797233422cde59.chunk.js.map