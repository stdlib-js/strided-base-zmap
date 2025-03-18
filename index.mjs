// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(e,r,t,n,s,d,i,o){var a,f,m;if(e<=0)return s;for(a=n,f=i,m=0;m<e;m++)s.set(o(r.get(a)),f),a+=t,f+=d;return s}function n(e,n,s,d,i,o){return t(e,n,s,r(e,s),d,i,r(e,i),o)}e(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
