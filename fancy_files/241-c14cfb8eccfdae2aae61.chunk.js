/*! For license information please see 241-c14cfb8eccfdae2aae61.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1381:function(e,t,n){"use strict";t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("undefined"===typeof t||isNaN(t))throw Error("maxHeight is required");var a="string"===typeof e?document.querySelectorAll(e):e;if(a){var i=n.character||"&mldr;",s=n.classname||"js-shave",o="boolean"!==typeof n.spaces||n.spaces,r='<span class="js-shave-char">'.concat(i,"</span>");"length"in a||(a=[a]);for(var c=0;c<a.length;c+=1){var h=a[c],l=h.style,d=h.querySelector(".".concat(s)),f=void 0===h.textContent?"innerText":"textContent";d&&(h.removeChild(h.querySelector(".js-shave-char")),h[f]=h[f]);var g=h[f],p=o?g.split(" "):g;if(!(p.length<2)){var v=l.height;l.height="auto";var m=l.maxHeight;if(l.maxHeight="none",h.offsetHeight<=t)l.height=v,l.maxHeight=m;else{for(var u=p.length-1,j=0,x=void 0;j<u;)x=j+u+1>>1,h[f]=o?p.slice(0,x).join(" "):p.slice(0,x),h.insertAdjacentHTML("beforeend",r),h.offsetHeight>t?u=x-1:j=x;h[f]=o?p.slice(0,u).join(" "):p.slice(0,u),h.insertAdjacentHTML("beforeend",r);var y=o?" ".concat(p.slice(u).join(" ")):p.slice(u),H=document.createTextNode(y),w=document.createElement("span");w.classList.add(s),w.style.display="none",w.appendChild(H),h.insertAdjacentElement("beforeend",w),l.height=v,l.maxHeight=m}}}}}}}]);
//# sourceMappingURL=241-c14cfb8eccfdae2aae61.chunk.js.map