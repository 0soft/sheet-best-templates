!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SheetBest=t():e.SheetBest=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n={input:e=>{const t=e.getAttribute("data-sheet-best"),n=t=>{const n=e.querySelectorAll("[type=submit]");for(let e=0;e<n.length;e++){const o=n[e];t?o.removeAttribute("disabled"):o.setAttribute("disabled","disabled")}};e.addEventListener("submit",async o=>{n(!1),o.preventDefault();const r=new FormData(e),u=Array.from(r),i={};u.forEach(([e,t])=>{i[e]=t}),e.querySelectorAll("[type=submit]");const s=await fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify([i])}).then(e=>e.json());e.dispatchEvent(new Event("submit-finished",{response:s})),n(!0)})},output:async e=>{const t=e.getAttribute("data-sheet-best"),n=e.innerHTML;e.innerHTML="";const o=(await fetch(t).then(e=>e.json())).map(e=>(Object.keys(e).forEach(t=>{e[t.trim()]=e[t]}),n.replace(/{{([^{}]*)}}/g,(t,n)=>e[n.trim()])));e.innerHTML=o.join("")},setup:async()=>{const e=document.querySelectorAll("[data-sheet-best]"),t=[];for(let o=0;o<e.length;o++){const r=e[o];"FORM"===r.tagName?n.input(r):t.push(n.output(r))}return Promise.all(t)}};document.addEventListener("DOMContentLoaded",n.setup),e.exports=n}])});