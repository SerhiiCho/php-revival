!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=0)}([function(e,n,r){r(1),e.exports=r(2)},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={faviconSrc:"https://raw.githubusercontent.com/SerhiiCho/php_revival/master/src/images/icon-48.png",selectors:{codeExamples:".example-contents .phpcode code span span",phpVersionInfo:"#layout-content .refnamediv .verinfo"}},o=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}();var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.phpVersion=document.querySelector(t.selectors.phpVersionInfo)}return o(e,[{key:"animatePhpVersionAppearing",value:function(){return this.phpVersion?(this.phpVersion.classList.add("verinfo--show"),this):this}}]),e}(),a=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}();var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.codeAreas=document.querySelectorAll(t.selectors.codeExamples)}return a(e,[{key:"beautifyPhpCodeExamples",value:function(){return this.codeAreas?(this.codeAreas.forEach(function(e){var n=e.innerHTML.replace("&lt;?php<br><br>","&lt;?php<br>").replace("&lt;?php<br>","&lt;?php<br><br>").replace(/([;]+)<br>([a-z\/])/,";<br><br>$2").replace(/function\(/,"function (");e.innerHTML=n}),this):this}}]),e}(),u=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}();var l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.link=document.createElement("link")}return u(e,[{key:"replaceWithCustomIcon",value:function(){return this.link?(link.rel="shortcut icon",link.href=t.faviconSrc,document.head.appendChild(link),this):this}}]),e}(),s=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}();var f=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.searchBar=document.querySelector(".search-query.tt-query")}return s(e,[{key:"focusOnSearchBarOnHomePage",value:function(){return this.searchBar&&"/"===window.location.pathname?(this.searchBar.focus(),this):this}}]),e}(),p=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}();(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return p(e,[{key:"execute",value:function(){(new f).focusOnSearchBarOnHomePage(),(new l).replaceWithCustomIcon(),(new c).beautifyPhpCodeExamples(),(new i).animatePhpVersionAppearing()}}]),e}())).execute()},function(e,n){}]);