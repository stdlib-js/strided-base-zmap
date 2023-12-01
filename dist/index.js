"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=c(function(b,p){
function g(r,e,u,s,a,v){var i,n,t;if(r<=0)return s;for(u<0?i=(1-r)*u:i=0,a<0?n=(1-r)*a:n=0,t=0;t<r;t++)s.set(v(e.get(i)),n),i+=u,n+=a;return s}p.exports=g
});var m=c(function(h,l){
function z(r,e,u,s,a,v,i,n){var t,f,o;if(r<=0)return a;for(t=s,f=i,o=0;o<r;o++)a.set(n(e.get(t)),f),t+=u,f+=v;return a}l.exports=z
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=x(),O=m();y(q,"ndarray",O);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
