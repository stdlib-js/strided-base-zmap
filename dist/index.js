"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=f(function(h,c){
function z(r,e,t,i,a,u,m,y){var n,s,v;if(r<=0)return a;for(n=i,s=m,v=0;v<r;v++)a.set(y(e.get(n)),s),n+=t,s+=u;return a}c.exports=z
});var x=f(function(j,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),g=o();function l(r,e,t,i,a,u){return g(r,e,t,p(r,t),i,a,p(r,a),u)}q.exports=l
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),R=o();O(d,"ndarray",R);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
