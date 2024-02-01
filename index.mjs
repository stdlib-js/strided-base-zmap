// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function e(r,e,t,n,a,s){var i,o,d;if(r<=0)return n;for(i=t<0?(1-r)*t:0,o=a<0?(1-r)*a:0,d=0;d<r;d++)n.set(s(e.get(i)),o),i+=t,o+=a;return n}function t(r,e,t,n,a,s,i,o){var d,f,u;if(r<=0)return a;for(d=n,f=i,u=0;u<r;u++)a.set(o(e.get(d)),f),d+=t,f+=s;return a}r(e,"ndarray",t);export{e as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
