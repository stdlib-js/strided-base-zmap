"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=f(function(h,c){
function z(e,r,a,i,t,u,m,y){var n,s,v;if(e<=0)return t;for(n=i,s=m,v=0;v<e;v++)t.set(y(r.get(n)),s),n+=a,s+=u;return t}c.exports=z
});var x=f(function(j,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),g=o();function l(e,r,a,i,t,u){return g(e,r,a,p(e,a),i,t,p(e,t),u)}q.exports=l
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),R=o();O(d,"ndarray",R);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
