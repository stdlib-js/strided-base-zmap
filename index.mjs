// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,t,n,a,i){var o,s,f;if(r<=0)return n;for(o=t<0?(1-r)*t:0,s=a<0?(1-r)*a:0,f=0;f<r;f++)n.set(i(e.get(o)),s),o+=t,s+=a;return n},t=function(r,e,t,n,a,i,o,s){var f,u,d;if(r<=0)return a;for(f=n,u=o,d=0;d<r;d++)a.set(s(e.get(f)),u),f+=t,u+=i;return a};r(e,"ndarray",t);var n=e;export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
