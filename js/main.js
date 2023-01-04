(() => {
  // <stdin>
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelector(".theme-toggle").addEventListener("click", () => {
        if (document.documentElement.hasAttribute("data-bs-theme")) {
          document.documentElement.removeAttribute("data-bs-theme");
          localStorage.removeItem("theme");
        } else {
          document.documentElement.setAttribute("data-bs-theme", "dark");
          localStorage.setItem("theme", "dark");
        }
      });
    });
  })();
})();

;
(()=>{var Dt=Object.create;var Ue=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var Vt=Object.getOwnPropertyNames;var Wt=Object.getPrototypeOf,Bt=Object.prototype.hasOwnProperty;var Gt=(E,s)=>()=>(s||E((s={exports:{}}).exports,s),s.exports);var Yt=(E,s,g,y)=>{if(s&&typeof s=="object"||typeof s=="function")for(let $ of Vt(s))!Bt.call(E,$)&&$!==g&&Ue(E,$,{get:()=>s[$],enumerable:!(y=Kt(s,$))||y.enumerable});return E};var Ut=(E,s,g)=>(g=E!=null?Dt(Wt(E)):{},Yt(s||!E||!E.__esModule?Ue(g,"default",{value:E,enumerable:!0}):g,E));var Je=Gt((be,$e)=>{(function(E,s){typeof be=="object"&&typeof $e<"u"?$e.exports=s():typeof define=="function"&&define.amd?define(s):(E=typeof globalThis<"u"?globalThis:E||self,E.Fuse=s())})(be,function(){"use strict";function E(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?E(Object(e),!0).forEach(function(n){k(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function g(t){return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},g(t)}function y(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function $(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _(t,r,e){return r&&$(t.prototype,r),e&&$(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function k(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function R(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),r&&H(t,r)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(t)}function H(t,r){return H=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},H(t,r)}function me(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ce(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pe(t,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ce(t)}function P(t){var r=me();return function(){var n=z(t),i;if(r){var a=z(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return pe(this,i)}}function V(t){return oe(t)||O(t)||C(t)||A()}function oe(t){if(Array.isArray(t))return M(t)}function O(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function C(t,r){if(!!t){if(typeof t=="string")return M(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M(t,r)}}function M(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function A(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(t){return Array.isArray?Array.isArray(t):Ce(t)==="[object Array]"}var Xe=1/0;function Ze(t){if(typeof t=="string")return t;var r=t+"";return r=="0"&&1/t==-Xe?"-0":r}function qe(t){return t==null?"":Ze(t)}function W(t){return typeof t=="string"}function Ie(t){return typeof t=="number"}function et(t){return t===!0||t===!1||tt(t)&&Ce(t)=="[object Boolean]"}function Oe(t){return g(t)==="object"}function tt(t){return Oe(t)&&t!==null}function D(t){return t!=null}function ye(t){return!t.trim().length}function Ce(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}var Qt="Extended search is not available",nt="Incorrect 'index' type",rt=function(r){return"Invalid value for key ".concat(r)},it=function(r){return"Pattern length exceeds max of ".concat(r,".")},at=function(r){return"Missing ".concat(r," property in key")},st=function(r){return"Property 'weight' in key '".concat(r,"' must be a positive integer")},Te=Object.prototype.hasOwnProperty,ct=function(){function t(r){var e=this;y(this,t),this._keys=[],this._keyMap={};var n=0;r.forEach(function(i){var a=Ne(i);n+=a.weight,e._keys.push(a),e._keyMap[a.id]=a,n+=a.weight}),this._keys.forEach(function(i){i.weight/=n})}return _(t,[{key:"get",value:function(e){return this._keyMap[e]}},{key:"keys",value:function(){return this._keys}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),t}();function Ne(t){var r=null,e=null,n=null,i=1,a=null;if(W(t)||j(t))n=t,r=Fe(t),e=Me(t);else{if(!Te.call(t,"name"))throw new Error(at("name"));var o=t.name;if(n=o,Te.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(st(o));r=Fe(o),e=Me(o),a=t.getFn}return{path:r,id:e,weight:i,src:n,getFn:a}}function Fe(t){return j(t)?t:t.split(".")}function Me(t){return j(t)?t.join("."):t}function ot(t,r){var e=[],n=!1,i=function a(o,c,h){if(!!D(o))if(!c[h])e.push(o);else{var l=c[h],u=o[l];if(!D(u))return;if(h===c.length-1&&(W(u)||Ie(u)||et(u)))e.push(qe(u));else if(j(u)){n=!0;for(var d=0,f=u.length;d<f;d+=1)a(u[d],c,h+1)}else c.length&&a(u,c,h+1)}};return i(t,W(r)?r.split("."):r,0),n?e:e[0]}var ht={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ut={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(r,e){return r.score===e.score?r.idx<e.idx?-1:1:r.score<e.score?-1:1}},lt={location:0,threshold:.6,distance:100},ft={useExtendedSearch:!1,getFn:ot,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},v=s(s(s(s({},ut),ht),lt),ft),dt=/[^ ]+/g;function vt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,e=new Map,n=Math.pow(10,r);return{get:function(a){var o=a.match(dt).length;if(e.has(o))return e.get(o);var c=1/Math.pow(o,.5*t),h=parseFloat(Math.round(c*n)/n);return e.set(o,h),h},clear:function(){e.clear()}}}var _e=function(){function t(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.getFn,n=e===void 0?v.getFn:e,i=r.fieldNormWeight,a=i===void 0?v.fieldNormWeight:i;y(this,t),this.norm=vt(a,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}return _(t,[{key:"setSources",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];this.docs=e}},{key:"setIndexRecords",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];this.records=e}},{key:"setKeys",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];this.keys=n,this._keysMap={},n.forEach(function(i,a){e._keysMap[i.id]=a})}},{key:"create",value:function(){var e=this;this.isCreated||!this.docs.length||(this.isCreated=!0,W(this.docs[0])?this.docs.forEach(function(n,i){e._addString(n,i)}):this.docs.forEach(function(n,i){e._addObject(n,i)}),this.norm.clear())}},{key:"add",value:function(e){var n=this.size();W(e)?this._addString(e,n):this._addObject(e,n)}},{key:"removeAt",value:function(e){this.records.splice(e,1);for(var n=e,i=this.size();n<i;n+=1)this.records[n].i-=1}},{key:"getValueForItemAtKeyId",value:function(e,n){return e[this._keysMap[n]]}},{key:"size",value:function(){return this.records.length}},{key:"_addString",value:function(e,n){if(!(!D(e)||ye(e))){var i={v:e,i:n,n:this.norm.get(e)};this.records.push(i)}}},{key:"_addObject",value:function(e,n){var i=this,a={i:n,$:{}};this.keys.forEach(function(o,c){var h=o.getFn?o.getFn(e):i.getFn(e,o.path);if(!!D(h)){if(j(h))(function(){for(var u=[],d=[{nestedArrIndex:-1,value:h}];d.length;){var f=d.pop(),p=f.nestedArrIndex,m=f.value;if(!!D(m))if(W(m)&&!ye(m)){var L={v:m,i:p,n:i.norm.get(m)};u.push(L)}else j(m)&&m.forEach(function(x,S){d.push({nestedArrIndex:S,value:x})})}a.$[c]=u})();else if(W(h)&&!ye(h)){var l={v:h,n:i.norm.get(h)};a.$[c]=l}}}),this.records.push(a)}},{key:"toJSON",value:function(){return{keys:this.keys,records:this.records}}}]),t}();function Pe(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.getFn,i=n===void 0?v.getFn:n,a=e.fieldNormWeight,o=a===void 0?v.fieldNormWeight:a,c=new _e({getFn:i,fieldNormWeight:o});return c.setKeys(t.map(Ne)),c.setSources(r),c.create(),c}function gt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.getFn,n=e===void 0?v.getFn:e,i=r.fieldNormWeight,a=i===void 0?v.fieldNormWeight:i,o=t.keys,c=t.records,h=new _e({getFn:n,fieldNormWeight:a});return h.setKeys(o),h.setIndexRecords(c),h}function he(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.errors,n=e===void 0?0:e,i=r.currentLocation,a=i===void 0?0:i,o=r.expectedLocation,c=o===void 0?0:o,h=r.distance,l=h===void 0?v.distance:h,u=r.ignoreLocation,d=u===void 0?v.ignoreLocation:u,f=n/t.length;if(d)return f;var p=Math.abs(c-a);return l?f+p/l:p?1:f}function mt(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v.minMatchCharLength,e=[],n=-1,i=-1,a=0,o=t.length;a<o;a+=1){var c=t[a];c&&n===-1?n=a:!c&&n!==-1&&(i=a-1,i-n+1>=r&&e.push([n,i]),n=-1)}return t[a-1]&&a-n>=r&&e.push([n,a-1]),e}var Q=32;function pt(t,r,e){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=n.location,a=i===void 0?v.location:i,o=n.distance,c=o===void 0?v.distance:o,h=n.threshold,l=h===void 0?v.threshold:h,u=n.findAllMatches,d=u===void 0?v.findAllMatches:u,f=n.minMatchCharLength,p=f===void 0?v.minMatchCharLength:f,m=n.includeMatches,L=m===void 0?v.includeMatches:m,x=n.ignoreLocation,S=x===void 0?v.ignoreLocation:x;if(r.length>Q)throw new Error(it(Q));for(var b=r.length,N=t.length,w=Math.max(0,Math.min(a,N)),T=l,F=w,B=p>1||L,X=B?Array(N):[],G;(G=t.indexOf(r,F))>-1;){var We=he(r,{currentLocation:G,expectedLocation:w,distance:c,ignoreLocation:S});if(T=Math.min(We,T),F=G+b,B)for(var ee=0;ee<b;)X[G+ee]=1,ee+=1}F=-1;for(var te=[],fe=1,de=b+N,zt=1<<b-1,Z=0;Z<b;Z+=1){for(var ve=0,J=de;ve<J;){var Ht=he(r,{errors:Z,currentLocation:w+J,expectedLocation:w,distance:c,ignoreLocation:S});Ht<=T?ve=J:de=J,J=Math.floor((de-ve)/2+ve)}de=J;var Be=Math.max(1,w-J+1),Ee=d?N:Math.min(w+J,N)+b,ne=Array(Ee+2);ne[Ee+1]=(1<<Z)-1;for(var Y=Ee;Y>=Be;Y-=1){var ge=Y-1,Ge=e[t.charAt(ge)];if(B&&(X[ge]=+!!Ge),ne[Y]=(ne[Y+1]<<1|1)&Ge,Z&&(ne[Y]|=(te[Y+1]|te[Y])<<1|1|te[Y+1]),ne[Y]&zt&&(fe=he(r,{errors:Z,currentLocation:ge,expectedLocation:w,distance:c,ignoreLocation:S}),fe<=T)){if(T=fe,F=ge,F<=w)break;Be=Math.max(1,2*w-F)}}var jt=he(r,{errors:Z+1,currentLocation:w,expectedLocation:w,distance:c,ignoreLocation:S});if(jt>T)break;te=ne}var ke={isMatch:F>=0,score:Math.max(.001,fe)};if(B){var Ye=mt(X,p);Ye.length?L&&(ke.indices=Ye):ke.isMatch=!1}return ke}function yt(t){for(var r={},e=0,n=t.length;e<n;e+=1){var i=t.charAt(e);r[i]=(r[i]||0)|1<<n-e-1}return r}var Re=function(){function t(r){var e=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.location,a=i===void 0?v.location:i,o=n.threshold,c=o===void 0?v.threshold:o,h=n.distance,l=h===void 0?v.distance:h,u=n.includeMatches,d=u===void 0?v.includeMatches:u,f=n.findAllMatches,p=f===void 0?v.findAllMatches:f,m=n.minMatchCharLength,L=m===void 0?v.minMatchCharLength:m,x=n.isCaseSensitive,S=x===void 0?v.isCaseSensitive:x,b=n.ignoreLocation,N=b===void 0?v.ignoreLocation:b;if(y(this,t),this.options={location:a,threshold:c,distance:l,includeMatches:d,findAllMatches:p,minMatchCharLength:L,isCaseSensitive:S,ignoreLocation:N},this.pattern=S?r:r.toLowerCase(),this.chunks=[],!!this.pattern.length){var w=function(ee,te){e.chunks.push({pattern:ee,alphabet:yt(ee),startIndex:te})},T=this.pattern.length;if(T>Q){for(var F=0,B=T%Q,X=T-B;F<X;)w(this.pattern.substr(F,Q),F),F+=Q;if(B){var G=T-Q;w(this.pattern.substr(G),G)}}else w(this.pattern,0)}}return _(t,[{key:"searchIn",value:function(e){var n=this.options,i=n.isCaseSensitive,a=n.includeMatches;if(i||(e=e.toLowerCase()),this.pattern===e){var o={isMatch:!0,score:0};return a&&(o.indices=[[0,e.length-1]]),o}var c=this.options,h=c.location,l=c.distance,u=c.threshold,d=c.findAllMatches,f=c.minMatchCharLength,p=c.ignoreLocation,m=[],L=0,x=!1;this.chunks.forEach(function(b){var N=b.pattern,w=b.alphabet,T=b.startIndex,F=pt(e,N,w,{location:h+T,distance:l,threshold:u,findAllMatches:d,minMatchCharLength:f,includeMatches:a,ignoreLocation:p}),B=F.isMatch,X=F.score,G=F.indices;B&&(x=!0),L+=X,B&&G&&(m=[].concat(V(m),V(G)))});var S={isMatch:x,score:x?L/this.chunks.length:1};return x&&a&&(S.indices=m),S}}]),t}(),U=function(){function t(r){y(this,t),this.pattern=r}return _(t,[{key:"search",value:function(){}}],[{key:"isMultiMatch",value:function(e){return ze(e,this.multiRegex)}},{key:"isSingleMatch",value:function(e){return ze(e,this.singleRegex)}}]),t}();function ze(t,r){var e=t.match(r);return e?e[1]:null}var Mt=function(t){R(e,t);var r=P(e);function e(n){return y(this,e),r.call(this,n)}return _(e,[{key:"search",value:function(i){var a=i===this.pattern;return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"exact"}},{key:"multiRegex",get:function(){return/^="(.*)"$/}},{key:"singleRegex",get:function(){return/^=(.*)$/}}]),e}(U),_t=function(t){R(e,t);var r=P(e);function e(n){return y(this,e),r.call(this,n)}return _(e,[{key:"search",value:function(i){var a=i.indexOf(this.pattern),o=a===-1;return{isMatch:o,score:o?0:1,indices:[0,i.length-1]}}}],[{key:"type",get:function(){return"inverse-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"$/}},{key:"singleRegex",get:function(){return/^!(.*)$/}}]),e}(U),xt=function(t){R(e,t);var r=P(e);function e(n){return y(this,e),r.call(this,n)}return _(e,[{key:"search",value:function(i){var a=i.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}],[{key:"type",get:function(){return"prefix-exact"}},{key:"multiRegex",get:function(){return/^\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^\^(.*)$/}}]),e}(U),Lt=function(t){R(e,t);var r=P(e);function e(n){return y(this,e),r.call(this,n)}return _(e,[{key:"search",value:function(i){var a=!i.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,i.length-1]}}}],[{key:"type",get:function(){return"inverse-prefix-exact"}},{key:"multiRegex",get:function(){return/^!\^"(.*)"$/}},{key:"singleRegex",get:function(){return/^!\^(.*)$/}}]),e}(U),St=function(t){R(e,t);var r=P(e);function e(n){return y(this,e),r.call(this,n)}return _(e,[{key:"search",value:function(i){var a=i.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[i.length-this.pattern.length,i.length-1]}}}],[{key:"type",get:function(){return"suffix-exact"}},{key:"multiRegex",get:function(){return/^"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^(.*)\$$/}}]),e}(U),wt=function(t){R(e,t);var r=P(e);function e(n){return y(this,e),r.call(this,n)}return _(e,[{key:"search",value:function(i){var a=!i.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,i.length-1]}}}],[{key:"type",get:function(){return"inverse-suffix-exact"}},{key:"multiRegex",get:function(){return/^!"(.*)"\$$/}},{key:"singleRegex",get:function(){return/^!(.*)\$$/}}]),e}(U),He=function(t){R(e,t);var r=P(e);function e(n){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.location,c=o===void 0?v.location:o,h=a.threshold,l=h===void 0?v.threshold:h,u=a.distance,d=u===void 0?v.distance:u,f=a.includeMatches,p=f===void 0?v.includeMatches:f,m=a.findAllMatches,L=m===void 0?v.findAllMatches:m,x=a.minMatchCharLength,S=x===void 0?v.minMatchCharLength:x,b=a.isCaseSensitive,N=b===void 0?v.isCaseSensitive:b,w=a.ignoreLocation,T=w===void 0?v.ignoreLocation:w;return y(this,e),i=r.call(this,n),i._bitapSearch=new Re(n,{location:c,threshold:l,distance:d,includeMatches:p,findAllMatches:L,minMatchCharLength:S,isCaseSensitive:N,ignoreLocation:T}),i}return _(e,[{key:"search",value:function(i){return this._bitapSearch.searchIn(i)}}],[{key:"type",get:function(){return"fuzzy"}},{key:"multiRegex",get:function(){return/^"(.*)"$/}},{key:"singleRegex",get:function(){return/^(.*)$/}}]),e}(U),je=function(t){R(e,t);var r=P(e);function e(n){return y(this,e),r.call(this,n)}return _(e,[{key:"search",value:function(i){for(var a=0,o,c=[],h=this.pattern.length;(o=i.indexOf(this.pattern,a))>-1;)a=o+h,c.push([o,a-1]);var l=!!c.length;return{isMatch:l,score:l?0:1,indices:c}}}],[{key:"type",get:function(){return"include"}},{key:"multiRegex",get:function(){return/^'"(.*)"$/}},{key:"singleRegex",get:function(){return/^'(.*)$/}}]),e}(U),xe=[Mt,je,xt,Lt,wt,St,_t,He],De=xe.length,Et=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,kt="|";function bt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t.split(kt).map(function(e){for(var n=e.trim().split(Et).filter(function(m){return m&&!!m.trim()}),i=[],a=0,o=n.length;a<o;a+=1){for(var c=n[a],h=!1,l=-1;!h&&++l<De;){var u=xe[l],d=u.isMultiMatch(c);d&&(i.push(new u(d,r)),h=!0)}if(!h)for(l=-1;++l<De;){var f=xe[l],p=f.isSingleMatch(c);if(p){i.push(new f(p,r));break}}}return i})}var $t=new Set([He.type,je.type]),At=function(){function t(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.isCaseSensitive,i=n===void 0?v.isCaseSensitive:n,a=e.includeMatches,o=a===void 0?v.includeMatches:a,c=e.minMatchCharLength,h=c===void 0?v.minMatchCharLength:c,l=e.ignoreLocation,u=l===void 0?v.ignoreLocation:l,d=e.findAllMatches,f=d===void 0?v.findAllMatches:d,p=e.location,m=p===void 0?v.location:p,L=e.threshold,x=L===void 0?v.threshold:L,S=e.distance,b=S===void 0?v.distance:S;y(this,t),this.query=null,this.options={isCaseSensitive:i,includeMatches:o,minMatchCharLength:h,findAllMatches:f,ignoreLocation:u,location:m,threshold:x,distance:b},this.pattern=i?r:r.toLowerCase(),this.query=bt(this.pattern,this.options)}return _(t,[{key:"searchIn",value:function(e){var n=this.query;if(!n)return{isMatch:!1,score:1};var i=this.options,a=i.includeMatches,o=i.isCaseSensitive;e=o?e:e.toLowerCase();for(var c=0,h=[],l=0,u=0,d=n.length;u<d;u+=1){var f=n[u];h.length=0,c=0;for(var p=0,m=f.length;p<m;p+=1){var L=f[p],x=L.search(e),S=x.isMatch,b=x.indices,N=x.score;if(S){if(c+=1,l+=N,a){var w=L.constructor.type;$t.has(w)?h=[].concat(V(h),V(b)):h.push(b)}}else{l=0,c=0,h.length=0;break}}if(c){var T={isMatch:!0,score:l/c};return a&&(T.indices=h),T}}return{isMatch:!1,score:1}}}],[{key:"condition",value:function(e,n){return n.useExtendedSearch}}]),t}(),ue=[];function It(){ue.push.apply(ue,arguments)}function Le(t,r){for(var e=0,n=ue.length;e<n;e+=1){var i=ue[e];if(i.condition(t,r))return new i(t,r)}return new Re(t,r)}var le={AND:"$and",OR:"$or"},Se={PATH:"$path",PATTERN:"$val"},we=function(r){return!!(r[le.AND]||r[le.OR])},Ot=function(r){return!!r[Se.PATH]},Ct=function(r){return!j(r)&&Oe(r)&&!we(r)},Ke=function(r){return k({},le.AND,Object.keys(r).map(function(e){return k({},e,r[e])}))};function Ve(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.auto,i=n===void 0?!0:n,a=function o(c){var h=Object.keys(c),l=Ot(c);if(!l&&h.length>1&&!we(c))return o(Ke(c));if(Ct(c)){var u=l?c[Se.PATH]:h[0],d=l?c[Se.PATTERN]:c[u];if(!W(d))throw new Error(rt(u));var f={keyId:Me(u),pattern:d};return i&&(f.searcher=Le(d,r)),f}var p={children:[],operator:h[0]};return h.forEach(function(m){var L=c[m];j(L)&&L.forEach(function(x){p.children.push(o(x))})}),p};return we(t)||(t=Ke(t)),a(t)}function Tt(t,r){var e=r.ignoreFieldNorm,n=e===void 0?v.ignoreFieldNorm:e;t.forEach(function(i){var a=1;i.matches.forEach(function(o){var c=o.key,h=o.norm,l=o.score,u=c?c.weight:null;a*=Math.pow(l===0&&u?Number.EPSILON:l,(u||1)*(n?1:h))}),i.score=a})}function Nt(t,r){var e=t.matches;r.matches=[],D(e)&&e.forEach(function(n){if(!(!D(n.indices)||!n.indices.length)){var i=n.indices,a=n.value,o={indices:i,value:a};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),r.matches.push(o)}})}function Ft(t,r){r.score=t.score}function Pt(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.includeMatches,i=n===void 0?v.includeMatches:n,a=e.includeScore,o=a===void 0?v.includeScore:a,c=[];return i&&c.push(Nt),o&&c.push(Ft),t.map(function(h){var l=h.idx,u={item:r[l],refIndex:l};return c.length&&c.forEach(function(d){d(h,u)}),u})}var q=function(){function t(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;y(this,t),this.options=s(s({},v),e),this.options.useExtendedSearch,this._keyStore=new ct(this.options.keys),this.setCollection(r,n)}return _(t,[{key:"setCollection",value:function(e,n){if(this._docs=e,n&&!(n instanceof _e))throw new Error(nt);this._myIndex=n||Pe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}},{key:"add",value:function(e){!D(e)||(this._docs.push(e),this._myIndex.add(e))}},{key:"remove",value:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){return!1},n=[],i=0,a=this._docs.length;i<a;i+=1){var o=this._docs[i];e(o,i)&&(this.removeAt(i),i-=1,a-=1,n.push(o))}return n}},{key:"removeAt",value:function(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}},{key:"getIndex",value:function(){return this._myIndex}},{key:"search",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.limit,a=i===void 0?-1:i,o=this.options,c=o.includeMatches,h=o.includeScore,l=o.shouldSort,u=o.sortFn,d=o.ignoreFieldNorm,f=W(e)?W(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Tt(f,{ignoreFieldNorm:d}),l&&f.sort(u),Ie(a)&&a>-1&&(f=f.slice(0,a)),Pt(f,this._docs,{includeMatches:c,includeScore:h})}},{key:"_searchStringList",value:function(e){var n=Le(e,this.options),i=this._myIndex.records,a=[];return i.forEach(function(o){var c=o.v,h=o.i,l=o.n;if(!!D(c)){var u=n.searchIn(c),d=u.isMatch,f=u.score,p=u.indices;d&&a.push({item:c,idx:h,matches:[{score:f,value:c,norm:l,indices:p}]})}}),a}},{key:"_searchLogical",value:function(e){var n=this,i=Ve(e,this.options),a=function l(u,d,f){if(!u.children){var p=u.keyId,m=u.searcher,L=n._findMatches({key:n._keyStore.get(p),value:n._myIndex.getValueForItemAtKeyId(d,p),searcher:m});return L&&L.length?[{idx:f,item:d,matches:L}]:[]}for(var x=[],S=0,b=u.children.length;S<b;S+=1){var N=u.children[S],w=l(N,d,f);if(w.length)x.push.apply(x,V(w));else if(u.operator===le.AND)return[]}return x},o=this._myIndex.records,c={},h=[];return o.forEach(function(l){var u=l.$,d=l.i;if(D(u)){var f=a(i,u,d);f.length&&(c[d]||(c[d]={idx:d,item:u,matches:[]},h.push(c[d])),f.forEach(function(p){var m,L=p.matches;(m=c[d].matches).push.apply(m,V(L))}))}}),h}},{key:"_searchObjectList",value:function(e){var n=this,i=Le(e,this.options),a=this._myIndex,o=a.keys,c=a.records,h=[];return c.forEach(function(l){var u=l.$,d=l.i;if(!!D(u)){var f=[];o.forEach(function(p,m){f.push.apply(f,V(n._findMatches({key:p,value:u[m],searcher:i})))}),f.length&&h.push({idx:d,item:u,matches:f})}}),h}},{key:"_findMatches",value:function(e){var n=e.key,i=e.value,a=e.searcher;if(!D(i))return[];var o=[];if(j(i))i.forEach(function(p){var m=p.v,L=p.i,x=p.n;if(!!D(m)){var S=a.searchIn(m),b=S.isMatch,N=S.score,w=S.indices;b&&o.push({score:N,key:n,value:m,idx:L,norm:x,indices:w})}});else{var c=i.v,h=i.n,l=a.searchIn(c),u=l.isMatch,d=l.score,f=l.indices;u&&o.push({score:d,key:n,value:c,norm:h,indices:f})}return o}}]),t}();q.version="6.6.2",q.createIndex=Pe,q.parseIndex=gt,q.config=v,q.parseQuery=Ve,It(At);var Rt=q;return Rt})});var Qe=Ut(Je());var I={case_sensitive:!1,distance:100,expand_results_meta:!1,icons:{heading:`
  
  
  
    
  
    <svg class="bi bi-hashbi bi-hash hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
</svg>`,home:`
  
  
  
    
  
    <svg class="bi bi-housebi bi-house hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>`,meta:`
  
  
  
    
  
    <svg class="bi bi-info-circlebi bi-info-circle hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`,page:`
  
  
  
    
  
    <svg class="bi bi-file-earmark-richtextbi bi-file-earmark-richtext hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
  <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
</svg>`,section:`
  
  
  
    
  
    <svg class="bi bi-listbi bi-list hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`,taxonomy:`
  
  
  
    
  
    <svg class="bi bi-tagsbi bi-tags hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
  <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
</svg>`,term:`
  
  
  
    
  
    <svg class="bi bi-tagbi bi-tag hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
</svg>`},ignore_location:!1,indices:["/hugo-mod-search/search.json","/hugo-mod-search/zh-hans/search.json","/hugo-mod-search/zh-hant/search.json"],input_placeholder:"Type to search",location:0,max_results:100,min_match_char_length:1,paginate:20,shortcut_close:["Escape"],shortcut_search:["Control","k"],stall_threshold:300,threshold:.6};var re=class{index;constructor(s){this.index=new Qe.default(s,{isCaseSensitive:I.case_sensitive,minMatchCharLength:I.min_match_char_length,location:I.location,threshold:I.threshold,distance:I.distance,ignoreLocation:I.ignore_location,keys:["title","summary","headings.title","lang"],includeMatches:!0,useExtendedSearch:!0,includeScore:!0})}search(s,g=""){let y={};return g&&(y.$and=[{lang:"="+g},{$or:[{title:s},{summary:s},{$path:"headings.title",$val:s}]}]),this.index.search(Object.keys(y).length?y:s,{limit:I.max_results})}};var Ae={},K=class{element;input;constructor(s){this.element=s instanceof HTMLElement?s:document.querySelector(s),this.input=this.element.querySelector(".search-input")}hide(){document.body.classList.remove("search-modal-active"),this.element.classList.remove("active")}show(){document.body.classList.add("search-modal-active"),this.element.classList.add("active"),this.input.focus()}static getOrCreate(s){return s in Ae||(Ae[s]=new K(s)),Ae[s]}};var ie=class{container;lang="";stat;page=1;paginate=20;query="";results;time=0;metaClasses="search-result-meta";constructor(s,g){this.container=document.querySelector(s),this.stat=document.querySelector(g),this.paginate=Math.max(this.paginate,I.paginate),this.lang=document.documentElement.getAttribute("lang")??"en-US",I.expand_results_meta&&(this.metaClasses+=" show")}clean(){this.container.innerHTML=""}icon(s){return s.kind in I.icons?I.icons[s.kind]:I.icons.page}taxonomies(s){let g="";for(let y in s.taxonomies)g+=`<span class="search-result-taxonomy">${s.taxonomies[y]}</span> `;return g}date(s){return s.date<=0?"":new Date(s.date*1e3).toLocaleDateString(this.lang,{dateStyle:"long"})}title(s){return this.highlight(s.item.title,s.matches.filter(g=>g.key==="title"))}desc(s){return!s.item.summary||s.item.summary===""?"":'<div class="search-result-desc">'+this.highlight(s.item.summary,s.matches.filter(g=>g.key==="summary"))+"</div>"}highlight(s,g){if(g.length===0)return s;let y="",$=0;for(let _ in g){let k=g[_];for(let R in k.indices){let z=Math.max($,k.indices[R][0]),H=k.indices[R][1]+1;z>=H||(y+=`${s.substring($,z)}<mark>${s.substring(z,H)}</mark>`,$=H)}}return y+=s.substring($),y}render(s,g,y){this.clean(),this.container.closest(".search-modal-body").scrollTop=0,this.page=1,this.results=g,this.time=y,this.query=s,this.renderStat(),this.renderPage()}renderStat(){if(this.query===""){this.stat.innerHTML="";return}this.stat.innerHTML=`Found <span class="search-stat-results">${this.results.length}</span> results in ${this.prettifyTime()}.`}prettifyTime(){return this.time>=100?parseFloat((this.time/1e3).toFixed(2))+"s":this.time+"ms"}score(s){return((1-s)*100).toFixed(0)+"%"}loadMore(){this.renderPage(++this.page)}renderPage(s=1){let g=s*this.paginate,y=g-this.paginate,$="";for(let _=y;_<this.results.length&&_<g;_++){let k=this.results[_];$+=`<a title="${k.item.title}" href="${k.item.url}" class="search-result">
  <div class="search-result-icon">${this.icon(k.item)}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.title(k)}</div>
    ${this.desc(k)}
  </div>
  <div class="${this.metaClasses}">
    <span class="search-result-score">${this.score(k.score)}</span>
    <span class="search-result-lang">${k.item.lang}</span>
    <span class="search-result-date">${this.date(k.item)}</span>
    ${this.taxonomies(k.item)}
  </div>
  <div class="search-result-actions">
    <div class="search-result-action search-result-action-meta">${I.icons.meta}</div>
  </div>
</a>`,$+=this.renderHeadings(k)}this.container.insertAdjacentHTML("beforeend",$)}renderHeadings(s){if(!s.item.headings||s.item.headings.length==0)return"";let g=s.matches.filter($=>$.key==="headings.title");if(g.length==0)return"";let y="";for(let $ in s.item.headings){let _=s.item.headings[$];for(let k in g)g[k].value===_.title&&(y+=`<a title="${_.title} - ${s.item.title}" href="${s.item.url}${_.anchor}" class="search-result search-result-heading">
  <div class="search-result-icon search-result-heading-icon">${I.icons.heading}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.highlight(_.title,[g[k]])}</div>
    <div class="search-result-desc">${s.item.title}</div>
  </div>
</a>`)}return y}};var ae=class{element;constructor(s){this.element=document.querySelector(s)}hide(){this.element.classList.add("disabled")}show(){this.element.classList.remove("disabled")}};var se=class{current(){return document.querySelector(".search-result.active")}active(s,g){!s||(g==="prev"&&s?.nextElementSibling?.classList.remove("active"),g==="next"&&s?.previousElementSibling?.classList.remove("active"),s.focus(),s.classList.add("active"))}first(){return document.querySelector(".search-result")}prev(){let s=this.current();this.active(s?s.previousElementSibling:this.first(),"prev")}next(){let s=this.current();this.active(s?s.nextElementSibling:this.first(),"next")}};(()=>{"use strict";let E=new se,s,g=()=>{let O=[];for(let C in I.indices){let M=fetch(I.indices[C]).then(A=>A.json());O.push(M)}return Promise.all(O).then(C=>{let M=C[0];for(let A=1;A<C.length;A++)M=M.concat(C[A]);s=new re(M)})},y=0,$=I.stall_threshold,_=new ie(".search-results",".search-stat"),k={},R=O=>{O.type==="keydown"?k[O.key]=!0:delete k[O.key]},z=O=>{if(O.length===0)return!1;for(let C in O)if(!(O[C]in k))return!1;return!0},H,me=()=>H?H.value:"",ce=O=>{if(O=O.trim(),O===""){_.render(O,[],0);return}P.show();let C=new Promise(A=>{setTimeout(()=>{A(s.search(O,me()))},1)}),M=new Date().getTime();C.then(A=>{_.render(O,A,new Date().getTime()-M)}).finally(()=>{P.hide()})},pe=()=>{P.show(),new Promise(C=>{setTimeout(()=>{C(_.loadMore())},1)}).finally(()=>{P.hide()})},P,V=()=>document.querySelector(".search-modal-container.active"),oe=()=>V()!==null;document.addEventListener("DOMContentLoaded",()=>{P=new ae(".search-spinner"),document.querySelector(".search-form")?.addEventListener("submit",M=>{M.preventDefault()});let C=document.querySelector(".search-input");C.addEventListener("keyup",()=>{clearTimeout(y),y=setTimeout(()=>{ce(C.value)},$)}),g().then(()=>{C.removeAttribute("disabled"),P.hide()}).catch(M=>{C.value="failed to initial index.",console.error(M)}),document.querySelectorAll(".search-modal-toggle").forEach(M=>{M.addEventListener("click",A=>{K.getOrCreate(M.getAttribute("data-target")??".search-modal-container").show()})}),document.querySelectorAll(".search-modal-close").forEach(M=>{M.addEventListener("click",()=>{K.getOrCreate(M.closest(".search-modal-container")).hide()})}),document.addEventListener("keydown",M=>{R(M),z(I.shortcut_close)&&document.querySelectorAll(".search-modal-container.active").forEach(A=>{K.getOrCreate(A).hide()}),z(I.shortcut_search)&&(document.querySelector(".search-modal-container:not(.active)")&&K.getOrCreate(document.querySelector(".search-modal-container:not(.active)")).show(),M.preventDefault()),oe()&&z(["ArrowUp"])&&(M.preventDefault(),E.prev()),oe()&&z(["ArrowDown"])&&(M.preventDefault(),E.next())}),document.addEventListener("keyup",R),document.querySelectorAll(".search-modal-body").forEach(M=>{M.addEventListener("scroll",()=>{M.scrollHeight-M.scrollTop===M.clientHeight&&pe()})}),document.addEventListener("click",M=>{let A=M.target.closest(".search-result-action");if(A&&A.classList.contains("search-result-action-meta")){M.preventDefault();let j=A.closest(".search-result").querySelector(".search-result-meta");j.classList.contains("show")?j.classList.remove("show"):j.classList.add("show")}else M.target.closest(".search-result")&&K.getOrCreate(V()).hide()}),document.querySelector(".search-modal-container")?.addEventListener("click",M=>{let A=V();A&&!M.target.closest(".search-modal")&&K.getOrCreate(A).hide()}),H=document.querySelector("select.search-filter-lang"),H&&H.addEventListener("change",()=>{ce(C.value)})})})();})();
