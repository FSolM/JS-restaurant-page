!function(n){var t={};function e(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)e.d(o,a,function(t){return n[t]}.bind(null,a));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);var o=n=>{n.innerHTML='\n  <div class="container container-nav">\n    <div class="row">\n      <div class="col-3">\n        <img src="#" alt="myRestaurant Logo">\n      </div>\n      <div class="col-9">\n        <input type="radio" id="tab-home" name="tab-control" checked>\n        <input type="radio" id="tab-menu" name="tab-control">\n        <input type="radio" id="tab-contact" name="tab-control">\n        <ul>\n          <li title="nav-tab-home">\n            <label for="tab-home" role="button">\n              <img src="../src/assets/icons/icon-nav-home.svg" alt="Home Icon">\n              <br>\n              <span>Home</span>\n            </label>\n          </li>\n          <li title="nav-tab-menu">\n            <label for="tab-menu" role="button">\n              <img src="../src/assets/icons/icon-nav-menu.svg" alt="Menu Icon">\n              <br>\n              <span>Menu</span>\n            </label>\n          </li>\n          <li title="nav-tab-contact">\n            <label for="tab-contact" role="button">\n              <img src="../src/assets/icons/icon-nav-contact.svg" alt="Contact Icon">\n              <br>\n              <span>Contact</span>\n            </label>\n          </li>\n        </ul>  \n        <div class="slider">\n          <div class="indicator"></div>\n        </div>\n        <div class="content">\n          <section><h2>Features</h2></section>\n          <section><h2>Delivery Contents</h2></section>\n          <section><h2>Shipping</h2></section>\n        </div>\n      </div>\n    </div>\n  </div>\n  '};const a=document.getElementById("navbar");document.getElementById("content-page"),document.getElementById("footer");o(a)}]);