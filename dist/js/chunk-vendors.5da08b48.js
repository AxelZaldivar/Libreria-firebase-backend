(self["webpackChunklogin"]=self["webpackChunklogin"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(7045),y=n(7976),v=n(9518),w=n(7674),_=n(5112),b=n(9711),I=n(9909),T=I.enforce,E=I.get,S=c.Int8Array,k=S&&S.prototype,A=c.Uint8ClampedArray,C=A&&A.prototype,R=S&&v(S),x=k&&v(k),N=Object.prototype,D=c.TypeError,O=_("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(U,t)||h(V,t)},B=function(e){var t=v(e);if(l(t)){var n=E(t);return n&&h(n,L)?n[L]:B(t)}},q=function(e){if(!l(e))return!1;var t=d(e);return h(U,t)||h(V,t)},z=function(e){if(q(e))return e;throw D("Target is not a typed array")},$=function(e){if(u(e)&&(!w||y(R,e)))return e;throw D(f(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}x[e]&&!n||m(x,e,n?t:M&&k[e]||t,r)}},G=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in U)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(R[e]&&!n)return;try{return m(R,e,n?t:M&&R[e]||t)}catch(s){}}for(r in U)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in U)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(R)||R===Function.prototype)&&(R=function(){throw D("Incorrect invocation")},M))for(r in U)c[r]&&w(c[r],R);if((!M||!x||x===N)&&(x=R.prototype,M))for(r in U)c[r]&&w(c[r].prototype,x);if(M&&v(C)!==x&&w(C,x),a&&!h(x,O))for(r in F=!0,g(x,O,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:z,aTypedArrayConstructor:$,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:B,isView:j,isTypedArray:q,TypedArray:R,TypedArrayPrototype:x}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,i=r(t),s=new e(i);while(i>n)s[n]=t[n++];return s}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},1572:function(e,t,n){var r=n(6244),i=n(9303),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var _=d("state");f[_]=!0,r=function(e,t){if(l(e,_))throw m(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},s=function(e){return l(e,_)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(w,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4599:function(e,t,n){var r=n(7593),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},1439:function(e,t,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(e,t,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},5315:function(e,t,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3767:function(e,t,n){n(1439)},8585:function(e,t,n){n(7585)},8696:function(e,t,n){n(5315)},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",y=s("Error"),v=s(g),w=function(){u(this,_);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=y(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},_=w.prototype=v.prototype,b="stack"in y(g),I="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,g),E=!!T&&!(T.writable&&T.configurable),S=b&&!E&&!I;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:v});var k=s(g),A=k.prototype;if(A.constructor!==k)for(var C in m||a(A,"constructor",o(1,k)),d)if(c(d,C)){var R=d[C],x=R.s;c(k,x)||a(k,x,o(6,R.c))}},7364:function(e,t,n){"use strict";n.d(t,{$:function(){return Qt},A:function(){return u},D:function(){return d},I:function(){return Qe},J:function(){return et},L:function(){return mt},N:function(){return de},P:function(){return Jr},Q:function(){return St},R:function(){return qr},U:function(){return Rt},V:function(){return xt},W:function(){return Nt},X:function(){return Ct},Y:function(){return Lt},Z:function(){return Mt},_:function(){return jt},a:function(){return Zn},a0:function(){return Jt},a1:function(){return Xt},a2:function(){return Zt},a3:function(){return sn},a4:function(){return on},a5:function(){return an},a6:function(){return cn},a7:function(){return un},a8:function(){return ln},a9:function(){return hn},aA:function(){return T},aB:function(){return Ai},aC:function(){return le},aD:function(){return fe},aE:function(){return Ei},aF:function(){return pi},aG:function(){return fi},aH:function(){return Ke},aL:function(){return nr},aO:function(){return Ot},aa:function(){return dn},ab:function(){return fn},ac:function(){return pn},ad:function(){return gn},ae:function(){return yn},af:function(){return vn},ai:function(){return _n},aj:function(){return bn},ak:function(){return In},an:function(){return $t},ao:function(){return Nn},aq:function(){return Mn},ar:function(){return $n},as:function(){return S},at:function(){return Te},au:function(){return _e},av:function(){return v},aw:function(){return ss},ax:function(){return Ni},ay:function(){return Ee},az:function(){return w},b:function(){return Xn},c:function(){return ii},d:function(){return oi},e:function(){return si},f:function(){return yi},g:function(){return bi},h:function(){return wi},i:function(){return Er},j:function(){return Ti},k:function(){return us},l:function(){return Gr},m:function(){return ds},o:function(){return ks},p:function(){return c},r:function(){return Hr},s:function(){return Kr},u:function(){return Qr}});n(7658);var r=n(223),i=n(1804);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r.LL("auth","Firebase",h()),m=new o.Yd("@firebase/auth");function g(e,...t){m.logLevel<=o["in"].WARN&&m.warn(`Auth (${i.SDK_VERSION}): ${e}`,...t)}function y(e,...t){m.logLevel<=o["in"].ERROR&&m.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw I(e,...t)}function w(e,...t){return I(e,...t)}function _(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function b(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function T(e,t,...n){if(!e)throw I(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw y(t),new Error(t)}function S(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},L=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function F(e,t,n,i,s={}){return U(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function U(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new B(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw q(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _(e,a,o);v(e,a)}}catch(s){if(s instanceof r.ZR)throw s;v(e,"network-request-failed",{message:String(s)})}}async function V(e,t,n,r,i={}){const s=await F(e,t,n,r,i);return"mfaPendingCredential"in s&&v(e,"multi-factor-auth-required",{_serverResponse:s}),s}function j(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return F(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return F(e,"POST","/v1/accounts:update",t)}async function K(e,t){return F(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=Q(i);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:G(W(s.auth_time)),issuedAtTime:G(W(s.iat)),expirationTime:G(W(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function Q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return y("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(y("Failed to decode base64 JWT payload"),null)}catch(s){return y("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function J(e){const t=Q(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,K(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ie(s.providerUserInfo):[],a=re(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ee(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ne(e){const t=(0,r.m9)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t){const n=await U(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=j(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await se(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new oe;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await X(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;T(v&&I,e,"internal-error");const E=oe.fromJSON(this.name,I);T("string"===typeof v,e,"internal-error"),ae(l,e.name),ae(h,e.name),T("boolean"===typeof w,e,"internal-error"),T("boolean"===typeof _,e,"internal-error"),ae(d,e.name),ae(f,e.name),ae(p,e.name),ae(m,e.name),ae(g,e.name),ae(y,e.name);const S=new ce({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function le(e){S(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(le(de),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||le(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ce._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(be(t))return"Blackberry";if(Ie(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||ve(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,r.z$)()){return/firefox\//i.test(e)}function ye(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ve(e=(0,r.z$)()){return/crios\//i.test(e)}function we(e=(0,r.z$)()){return/iemobile/i.test(e)}function _e(e=(0,r.z$)()){return/android/i.test(e)}function be(e=(0,r.z$)()){return/blackberry/i.test(e)}function Ie(e=(0,r.z$)()){return/webos/i.test(e)}function Te(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ee(e=(0,r.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=(0,r.z$)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return(0,r.w1)()&&10===document.documentMode}function Ae(e=(0,r.z$)()){return Te(e)||_e(e)||Ie(e)||be(e)||/windows phone/i.test(e)||we(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t=[]){let n;switch(e){case"Browser":n=me((0,r.z$)());break;case"Worker":n=`${me((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e){return(await F(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ne(e,t){return F(e,"GET","/v2/recaptchaConfig",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){return void 0!==e&&void 0!==e.getResponse}function Oe(e){return void 0!==e&&void 0!==e.enterprise}class Pe{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Me(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Le().appendChild(r)}))}function Fe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ue="https://www.google.com/recaptcha/enterprise.js?render=",Ve="recaptcha-enterprise",je="NO_RECAPTCHA";class Be{constructor(e){this.type=Ve,this.auth=Ke(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Ne(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Pe(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Oe(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(je)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Oe(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Me(Ue+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function qe(e,t,n,r=!1){const i=new Be(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ge(this),this.idTokenSubscription=new Ge(this),this.beforeStateQueue=new ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(le(e))}))}async initializeRecaptchaConfig(){const e=await Ne(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Pe(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Be(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Re(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&g(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ke(e){return(0,r.m9)(e)}class Ge{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e,t){const n=(0,i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;v(e,"already-initialized")}const s=n.initialize({options:t});return s}function We(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(le);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Ke(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Je(t),{host:o,port:a}=Xe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xe(e){const t=Je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ye(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ye(t)}}}function Ye(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return F(e,"POST","/v1/accounts:resetPassword",M(e,t))}async function nt(e,t){return F(e,"POST","/v1/accounts:update",t)}async function rt(e,t){return F(e,"POST","/v1/accounts:update",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t){return V(e,"POST","/v1/accounts:signInWithPassword",M(e,t))}async function st(e,t){return F(e,"POST","/v1/accounts:sendOobCode",M(e,t))}async function ot(e,t){return st(e,t)}async function at(e,t){return st(e,t)}async function ct(e,t){return st(e,t)}async function ut(e,t){return st(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",M(e,t))}async function ht(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new dt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new dt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await qe(e,n,"signInWithPassword");return it(e,t)}return it(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await qe(e,n,"signInWithPassword");return it(e,t)}return Promise.reject(t)}));case"emailLink":return lt(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ht(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t){return V(e,"POST","/v1/accounts:signInWithIdp",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="http://localhost";class mt extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new mt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:pt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e,t){return F(e,"POST","/v1/accounts:sendVerificationCode",M(e,t))}async function yt(e,t){return V(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,t))}async function vt(e,t){const n=await V(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const wt={["USER_NOT_FOUND"]:"user-not-found"};async function _t(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return V(e,"POST","/v1/accounts:signInWithPhoneNumber",M(e,n),wt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new bt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new bt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return yt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return vt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _t(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new bt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tt(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class Et{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=It(null!==(i=c["mode"])&&void 0!==i?i:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Tt(e);try{return new Et(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(){this.providerId=St.PROVIDER_ID}static credential(e,t){return dt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Et.parseLink(t);return T(n,"argument-error"),dt._fromEmailAndCode(e,n.code,n.tenantId)}}St.PROVIDER_ID="password",St.EMAIL_PASSWORD_SIGN_IN_METHOD="password",St.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends kt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ct extends At{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),mt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),mt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ct.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ct.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new Ct(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends At{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch(t){return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Rt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends At{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return xt.credential(t,n)}catch(r){return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com",xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends At{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch(t){return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com",Nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt="http://localhost";class Ot extends et{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Ot(n,i):null}static _create(e,t){return new Ot(e,t)}buildRequest(){return{requestUri:Dt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="saml.";class Lt extends kt{constructor(e){T(e.startsWith(Pt),"argument-error"),super(e)}static credentialFromResult(e){return Lt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Lt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ot.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ot._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends At{constructor(){super("twitter.com")}static credential(e,t){return mt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Mt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(e,t){return V(e,"POST","/v1/accounts:signUp",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.TWITTER_SIGN_IN_METHOD="twitter.com",Mt.PROVIDER_ID="twitter.com";class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),s=Vt(n),o=new Ut({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Vt(n);return new Ut({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Vt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e){var t;const n=Ke(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ut({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ft(n,{returnSecureToken:!0}),i=await Ut._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Bt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Bt(e,t,n,r)}}function qt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t){const n=(0,r.m9)(e);await Gt(!0,n,t);const{providerUserInfo:i}=await $(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=zt(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Kt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ut._forOperation(e,"link",r)}async function Gt(e,t,n){await te(t);const r=zt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await X(e,qt(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=Q(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Ut._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t,n=!1){const r="signIn",i=await qt(e,r,t),s=await Ut._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Qt(e,t){return Wt(Ke(e),t)}async function Jt(e,t){const n=(0,r.m9)(e);return await Gt(!1,n,t.providerId),Kt(n,t)}async function Xt(e,t){return Ht((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t){return V(e,"POST","/v1/accounts:signInWithCustomToken",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){const n=Ke(e),r=await Yt(n,{token:t,returnSecureToken:!0}),i=await Ut._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tn._fromServerResponse(e,t):"totpInfo"in t?nn._fromServerResponse(e,t):v(e,"internal-error")}}class tn extends en{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tn(t)}}class nn extends en{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new nn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t,n){var r;const i=Ke(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}else n&&rn(i,s,n),await at(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await qe(i,s,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}}))}async function on(e,t,n){await tt((0,r.m9)(e),{oobCode:t,newPassword:n})}async function an(e,t){await rt((0,r.m9)(e),{oobCode:t})}async function cn(e,t){const n=(0,r.m9)(e),i=await tt(n,{oobCode:t}),s=i.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(i.mfaInfo,n,"internal-error");default:T(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=en._fromServerResponse(Ke(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function un(e,t){const{data:n}=await cn((0,r.m9)(e),t);return n.email}async function ln(e,t,n){var r;const i=Ke(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"signUpPassword");o=Ft(i,e)}else o=Ft(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await qe(i,s,"signUpPassword");return Ft(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await Ut._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function hn(e,t,n){return Qt((0,r.m9)(e),St.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e,t,n){var r;const i=Ke(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){T(t.handleCodeInApp,i,"argument-error"),t&&rn(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}else o(s,n),await ct(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await qe(i,s,"getOobCode",!0);o(e,n),await ct(i,e)}}))}function fn(e,t){const n=Et.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function pn(e,t,n){const i=(0,r.m9)(e),s=St.credentialWithLink(t,n||k());return T(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Qt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t){return F(e,"POST","/v1/accounts:createAuthUri",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){const n=A()?k():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await mn((0,r.m9)(e),i);return s||[]}async function yn(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&rn(n.auth,s,t);const{email:o}=await ot(n.auth,s);o!==e.email&&await e.reload()}async function vn(e,t,n){const i=(0,r.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&rn(i.auth,o,n);const{email:a}=await ut(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(e,t){return F(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(i,wn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function bn(e,t){return Tn((0,r.m9)(e),t,null)}function In(e,t){return Tn((0,r.m9)(e),null,t)}async function Tn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await X(e,nt(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Q(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new Sn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new An(s,i);case"github.com":return new Cn(s,i);case"google.com":return new Rn(s,i);case"twitter.com":return new xn(s,i,e.screenName||null);case"custom":case"anonymous":return new Sn(s,null);default:return new Sn(s,r,i)}}class Sn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class kn extends Sn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class An extends Sn{constructor(e,t){super(e,"facebook.com",t)}}class Cn extends kn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class Rn extends Sn{constructor(e,t){super(e,"google.com",t)}}class xn extends kn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Nn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:En(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function On(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}class Pn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new Pn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Pn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Pn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Pn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ke(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>en._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=Pn._fromMfaPendingCredential(r.mfaPendingCredential);return new Ln(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Ut._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Ut._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Mn(e,t){var n;const i=(0,r.m9)(e),s=t;return T(t.customData.operationType,i,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Ln._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:start",M(e,t))}function Un(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:finalize",M(e,t))}function Vn(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:start",M(e,t))}function jn(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:finalize",M(e,t))}function Bn(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:withdraw",M(e,t))}class qn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>en._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new qn(e)}async getSession(){return Pn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await X(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await X(this.user,Bn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const zn=new WeakMap;function $n(e){const t=(0,r.m9)(e);return zn.has(t)||zn.set(t,qn._fromUser(t)),zn.get(t)}const Kn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kn,"1"),this.storage.removeItem(Kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(){const e=(0,r.z$)();return ye(e)||Te(e)}const Wn=1e3,Qn=10;class Jn extends Gn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Hn()&&Ce(),this.fallbackToPolling=Ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ke()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Qn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Wn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jn.type="LOCAL";const Xn=Jn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Gn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yn.type="SESSION";const Zn=Yn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await er(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nr(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr.receivers=[];class rr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=nr("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function sr(e){ir().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return"undefined"!==typeof ir()["WorkerGlobalScope"]&&"function"===typeof ir()["importScripts"]}async function ar(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function cr(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ur(){return or()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="firebaseLocalStorageDb",hr=1,dr="firebaseLocalStorage",fr="fbase_key";class pr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mr(e,t){return e.transaction([dr],t?"readwrite":"readonly").objectStore(dr)}function gr(){const e=indexedDB.deleteDatabase(lr);return new pr(e).toPromise()}function yr(){const e=indexedDB.open(lr,hr);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(dr,{keyPath:fr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(dr)?t(n):(n.close(),await gr(),t(await yr()))}))}))}async function vr(e,t,n){const r=mr(e,!0).put({[fr]:t,value:n});return new pr(r).toPromise()}async function wr(e,t){const n=mr(e,!1).get(t),r=await new pr(n).toPromise();return void 0===r?null:r.value}function _r(e,t){const n=mr(e,!0).delete(t);return new pr(n).toPromise()}const br=800,Ir=3;class Tr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Ir)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return or()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tr._getInstance(ur()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await ar(),!this.activeServiceWorker)return;this.sender=new rr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&cr()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yr();return await vr(e,Kn,"1"),await _r(e,Kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>vr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>wr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_r(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mr(e,!1).getAll();return new pr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),br)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tr.type="LOCAL";const Er=Tr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:start",M(e,t))}function kr(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:finalize",M(e,t))}function Ar(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:finalize",M(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=500,Rr=6e4,xr=1e12;class Nr{constructor(e){this.auth=e,this.counter=xr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Dr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||xr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||xr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||xr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Dr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Or(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Rr)}),Cr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Or(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=Fe("rcb"),Lr=new N(3e4,6e4),Mr="https://www.google.com/recaptcha/api.js?";class Fr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=ir().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return T(Ur(t),e,"argument-error"),this.shouldResolveImmediately(t)&&De(ir().grecaptcha)?Promise.resolve(ir().grecaptcha):new Promise(((n,i)=>{const s=ir().setTimeout((()=>{i(w(e,"network-request-failed"))}),Lr.get());ir()[Pr]=()=>{ir().clearTimeout(s),delete ir()[Pr];const r=ir().grecaptcha;if(!r||!De(r))return void i(w(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${Mr}?${(0,r.xO)({onload:Pr,render:"explicit",hl:t})}`;Me(o).catch((()=>{clearTimeout(s),i(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=ir().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ur(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Vr{async load(e){return new Nr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="recaptcha",Br={theme:"light",type:"image"};class qr{constructor(e,t=Object.assign({},Br),n){this.parameters=t,this.type=jr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ke(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vr:new Fr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=ir()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(A()&&!or(),this.auth,"internal-error"),await zr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await xe(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function zr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=bt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Kr(e,t,n){const i=Ke(e),s=await Wr(i,t,(0,r.m9)(n));return new $r(s,(e=>Qt(i,e)))}async function Gr(e,t,n){const i=(0,r.m9)(e);await Gt(!1,i,"phone");const s=await Wr(i.auth,t,(0,r.m9)(n));return new $r(s,(e=>Jt(i,e)))}async function Hr(e,t,n){const i=(0,r.m9)(e),s=await Wr(i.auth,t,(0,r.m9)(n));return new $r(s,(e=>Xt(i,e)))}async function Wr(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===jr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await Fn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await Sr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await gt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Qr(e,t){await Kt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.providerId=Jr.PROVIDER_ID,this.auth=Ke(e)}verifyPhoneNumber(e,t){return Wr(this.auth,e,(0,r.m9)(t))}static credential(e,t){return bt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Jr.credentialFromTaggedObject(t)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?bt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(e,t){return t?le(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jr.PROVIDER_ID="phone",Jr.PHONE_SIGN_IN_METHOD="phone";class Yr extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zr(e){return Wt(e.auth,new Yr(e),e.bypassAuthState)}function ei(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Ht(n,new Yr(e),e.bypassAuthState)}async function ti(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Kt(n,new Yr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zr;case"linkViaPopup":case"linkViaRedirect":return ti;case"reauthViaPopup":case"reauthViaRedirect":return ei;default:v(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new N(2e3,1e4);async function ii(e,t,n){const r=Ke(e);b(e,t,kt);const i=Xr(r,n),s=new ai(r,"signInViaPopup",t,i);return s.executeNotNull()}async function si(e,t,n){const i=(0,r.m9)(e);b(i.auth,t,kt);const s=Xr(i.auth,n),o=new ai(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function oi(e,t,n){const i=(0,r.m9)(e);b(i.auth,t,kt);const s=Xr(i.auth,n),o=new ai(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class ai extends ni{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=nr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ri.get())};e()}}ai.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ci="pendingRedirect",ui=new Map;class li extends ni{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const t=await hi(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function hi(e,t){const n=gi(t),r=mi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function di(e,t){return mi(e)._set(gi(t),"true")}function fi(){ui.clear()}function pi(e,t){ui.set(e._key(),t)}function mi(e){return le(e._redirectPersistence)}function gi(e){return fe(ci,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e,t,n){return vi(e,t,n)}async function vi(e,t,n){const r=Ke(e);b(e,t,kt),await r._initializationPromise;const i=Xr(r,n);return await di(i,r),i._openRedirect(r,t,"signInViaRedirect")}function wi(e,t,n){return _i(e,t,n)}async function _i(e,t,n){const i=(0,r.m9)(e);b(i.auth,t,kt),await i.auth._initializationPromise;const s=Xr(i.auth,n);await di(s,i.auth);const o=await Si(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function bi(e,t,n){return Ii(e,t,n)}async function Ii(e,t,n){const i=(0,r.m9)(e);b(i.auth,t,kt),await i.auth._initializationPromise;const s=Xr(i.auth,n);await Gt(!1,i,t.providerId),await di(s,i.auth);const o=await Si(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function Ti(e,t){return await Ke(e)._initializationPromise,Ei(e,t,!1)}async function Ei(e,t,n=!1){const r=Ke(e),i=Xr(r,t),s=new li(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Si(e){const t=nr(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=6e5;class Ai{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!xi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ri(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ki&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ci(e))}saveEventToCache(e){this.cachedEventUids.add(Ci(e)),this.lastProcessedEventTime=Date.now()}}function Ci(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ri({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function xi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ri(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(e,t={}){return F(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oi=/^https?/;async function Pi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ni(e);for(const r of t)try{if(Li(r))return}catch(n){}v(e,"unauthorized-domain")}function Li(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Oi.test(n))return!1;if(Di.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new N(3e4,6e4);function Fi(){const e=ir().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ui(e){return new Promise(((t,n)=>{var r,i,s;function o(){Fi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fi(),n(w(e,"network-request-failed"))},timeout:Mi.get()})}if(null===(i=null===(r=ir().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ir().gapi)||void 0===s?void 0:s.load)){const t=Fe("iframefcb");return ir()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},Me(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Vi=null,e}))}let Vi=null;function ji(e){return Vi=Vi||Ui(e),Vi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new N(5e3,15e3),qi="__/auth/iframe",zi="emulator/auth/iframe",$i={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ki=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gi(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,zi):`https://${e.config.authDomain}/${qi}`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=Ki.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Hi(e){const t=await ji(e),n=ir().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:Gi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$i,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=ir().setTimeout((()=>{r(i)}),Bi.get());function o(){ir().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qi=500,Ji=600,Xi="_blank",Yi="http://localhost";class Zi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function es(e,t,n,i=Qi,s=Ji){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Wi),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ve(l)?Xi:n),ge(l)&&(t=t||Yi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Se(l)&&"_self"!==c)return ts(t||"",c),new Zi(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Zi(d)}function ts(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="__/auth/handler",rs="emulator/auth/handler",is=encodeURIComponent("fac");async function ss(e,t,n,s,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof kt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof At){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${is}=${encodeURIComponent(l)}`:"";return`${os(e)}?${(0,r.xO)(u).slice(1)}${h}`}function os({config:e}){return e.emulator?D(e,rs):`https://${e.authDomain}/${ns}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="webStorageSupport";class cs{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zn,this._completeRedirectFn=Ei,this._overrideRedirectResult=pi}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await ss(e,t,n,k(),r);return es(e,s,nr())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await ss(e,t,n,k(),r);return sr(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Hi(e),n=new Ai(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(as,{type:as},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[as];void 0!==i&&t(!!i),v(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ae()||ye()||Te()}}const us=cs;class ls{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class hs extends ls{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new hs(e)}_finalizeEnroll(e,t,n){return Un(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return kr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ds{constructor(){}static assertion(e){return hs._fromCredential(e)}}ds.FACTOR_ID="phone";class fs{static assertionForEnrollment(e,t){return ps._fromSecret(e,t)}static assertionForSignIn(e,t){return ps._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;T("undefined"!==typeof t.auth,"internal-error");const n=await Vn(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ms._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}fs.FACTOR_ID="totp";class ps extends ls{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ps(t,void 0,e)}static _fromEnrollmentId(e,t){return new ps(t,e)}async _finalizeEnroll(e,t,n){return T("undefined"!==typeof this.secret,e,"argument-error"),jn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){T(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Ar(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ms{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ms(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(gs(e)||gs(t))&&(r=!0),r&&(gs(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),gs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function gs(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var ys="@firebase/auth",vs="0.23.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bs(e){(0,i._registerComponent)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),T(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Re(e)},u=new $e(r,i,s,c);return We(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i._registerComponent)(new a.wA("auth-internal",(e=>{const t=Ke(e.getProvider("auth").getImmediate());return(e=>new ws(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(ys,vs,_s(e)),(0,i.registerVersion)(ys,vs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=300,Ts=(0,r.Pz)("authIdTokenMaxAge")||Is;let Es=null;const Ss=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ts)return;const i=null===n||void 0===n?void 0:n.token;Es!==i&&(Es=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ks(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=He(e,{popupRedirectResolver:us,persistence:[Er,Xn,Zn]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=Ss(s);On(n,e,(()=>e(n.currentUser))),Dn(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Qe(n,`http://${o}`),n}bs("Browser")},9504:function(e,t,n){"use strict";n.d(t,{u7:function(){return Ym},Jj:function(){return Jp},IX:function(){return Mp},my:function(){return Sp},xU:function(){return ng},Lz:function(){return Xp},WA:function(){return hi},F8:function(){return Zp},$q:function(){return rg},W:function(){return ig},EK:function(){return ki},PU:function(){return Tg},l7:function(){return ro},Ky:function(){return Di},Xb:function(){return Ni},Cf:function(){return _p},K9:function(){return ci},Me:function(){return Hs},yq:function(){return ii},Wi:function(){return gp},ET:function(){return yg},Ab:function(){return xg},vr:function(){return Rg},Fc:function(){return zp},hJ:function(){return Cp},B$:function(){return Rp},at:function(){return Ep},oe:function(){return gg},AK:function(){return Ag},TF:function(){return Gp},JU:function(){return xp},ST:function(){return jp},fH:function(){return Bp},Ix:function(){return Kp},Wu:function(){return Gm},Lx:function(){return Km},qY:function(){return Up},GL:function(){return _g},QT:function(){return ag},kl:function(){return ug},Xk:function(){return lg},PL:function(){return hg},UQ:function(){return dg},zN:function(){return fg},nP:function(){return Ng},b9:function(){return Vm},vh:function(){return jm},Pb:function(){return Hp},L$:function(){return Wp},cf:function(){return vg},sc:function(){return wg},Xo:function(){return Fm},IO:function(){return Dm},iE:function(){return Dp},Eo:function(){return Np},i3:function(){return kg},Bt:function(){return Cg},pl:function(){return pg},Ub:function(){return ti},qK:function(){return og},TQ:function(){return zm},e0:function(){return qm},r7:function(){return mg},Mx:function(){return $p},ar:function(){return Pm}});n(3767),n(8585),n(8696),n(7658),n(2801);var r,i=n(1804),s=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,_.apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(){this.s=this.s,this.o=this.o}var E=0;T.prototype.s=!1,T.prototype.ra=function(){this.s||(this.s=!0,this.N(),0==E)||m(this)},T.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function A(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function C(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function x(e){return/^[\s\xa0]*$/.test(e)}var N=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return e<t?-1:e>t?1:0}function O(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return-1!=O().indexOf(e)}function L(e){return L[" "](e),e}function M(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}L[" "]=d;var F,U=P("Opera"),V=P("Trident")||P("MSIE"),j=P("Edge"),B=j||V,q=P("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),z=-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge");function $(){var e=h.document;return e?e.documentMode:void 0}e:{var K="",G=function(){var e=O();return q?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(G&&(K=G?G[1]:""),V){var H=$();if(null!=H&&H>parseFloat(K)){F=String(H);break e}}F=K}var W,Q={};function J(){return M(Q,9,(function(){let e=0;const t=N(String(F)).split("."),n=N("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&V){var X=$();W=X||(parseInt(F,10)||void 0)}else W=void 0;var Y=W;function Z(e,t){if(C.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q){e:{try{L(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.$.h.call(this)}}I(Z,C);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++ne,this.fa=this.ia=!1}function ie(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function se(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}ue.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new re(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=Ee(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ie(e);if(a||(e[de]=a=new ue(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=be;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=Ee(n),e&&e[te]?e.P(t,n,p(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function ve(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ee(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ie(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[te])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ie(t))?(le(n,e),0==n.h&&(n.src=null,t[de]=null)):ie(e)}}}function _e(e){return e in fe?fe[e]:fe[e]="on"+e}function be(e,t){if(e.fa)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.la||e.src;e.ia&&we(e),e=n.call(r,t)}return e}function Ie(e){return e=e[de],e instanceof ue?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Se(){T.call(this),this.i=new ue(this),this.S=this,this.J=null}function ke(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new C(t,e);else if(t instanceof C)t.target=t.target||e;else{var i=t;t=new C(r,e),ce(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ae(o,r,!0,t)&&i}if(o=t.g=e,i=Ae(o,r,!0,t)&&i,i=Ae(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ae(o,r,!1,t)&&i}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&le(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Se,T),Se.prototype[te]=!0,Se.prototype.removeEventListener=function(e,t,n,r){ve(this,e,t,n,r)},Se.prototype.N=function(){if(Se.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.J=null},Se.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=h.JSON.stringify;function Re(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xe{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ne,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Oe),(e=>e.reset()));class Oe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){h.setTimeout((()=>{throw e}),0)}function Le(e,t){Ne||Me(),Fe||(Ne(),Fe=!0),Ue.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);Ne=function(){e.then(Ve)}}var Fe=!1,Ue=new xe;function Ve(){for(var e;e=Re();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function je(e,t){Se.call(this),this.h=e||1,this.g=t||h,this.j=_(this.qb,this),this.l=Date.now()}function Be(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function ze(e){e.g=qe((()=>{e.g=null,e.i&&(e.i=!1,ze(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(je,Se),r=je.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ke(this,"tick"),this.ga&&(Be(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){je.$.N.call(this),Be(this),delete this.g};class $e extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(e){T.call(this),this.h=e,this.g={}}I(Ke,T);var Ge=[];function He(e,t,n,r){Array.isArray(n)||(n&&(Ge[0]=n.toString()),n=Ge);for(var i=0;i<n.length;i++){var s=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function We(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Qe(){this.g=!0}function Je(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ce(n)}catch(a){return t}}Ke.prototype.N=function(){Ke.$.N.call(this),We(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qe.prototype.Ea=function(){this.g=!1},Qe.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Se}function it(e){C.call(this,tt.Ta,e)}function st(e){const t=rt();ke(t,new it(t))}function ot(e,t){C.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();ke(t,new ot(t,e))}function ct(e,t){C.call(this,tt.Ua,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Ta="serverreachability",I(it,C),tt.STAT_EVENT="statevent",I(ot,C),tt.Ua="timingevent",I(ct,C);var lt={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ht={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var mt,gt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function yt(){C.call(this,"d")}function vt(){C.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ke(this),this.P=It,e=B?125:void 0,this.V=new je(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new bt}function bt(){this.i=null,this.g="",this.h=!1}I(yt,C),I(vt,C),I(wt,dt),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},mt=new wt;var It=45e3,Tt={},Et={};function St(e,t,n){e.L=1,e.v=Ht(qt(t)),e.s=n,e.S=!0,kt(e,null)}function kt(e,t){e.G=Date.now(),xt(e),e.A=qt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.I,e.h=new bt,e.g=hr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $e(_(e.Pa,e,e.g),e.O)),He(e.U,e.g,"readystatechange",e.nb),t=e.I?oe(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),st(),Je(e.j,e.u,e.A,e.m,e.W,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ct(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Rt(e,n),r==Et){4==t&&(e.o=4,at(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,at(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Lt(e,r)}At(e)&&r!=Et&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.L=!0,at(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Ot(e))}function Rt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Et:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?Et:(t=t.substr(r,n),e.C=r+n,t)))}function xt(e){e.Y=Date.now()+e.P,Nt(e,e.P)}function Nt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(_(e.lb,e),t)}function Dt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Ot(e){0==e.l.H||e.J||or(e.l,e)}function Pt(e){Dt(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,Be(e.V),We(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Lt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||mn(n.h,e)))if(!e.K&&mn(n.h,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;sr(n),Wn(n)}nr(n),at(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=ut(_(n.ib,n),6e3));if(1>=pn(n.h)&&n.na){try{n.na()}catch(u){}n.na=void 0}}else cr(n,11)}else if((e.K||n.g==e)&&sr(n),!x(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const t=u[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Gt(r.G,r.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=lr(r,r.I?r.oa:null,r.Y),o.K){yn(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Dt(a),xt(a)),r.g=o}else tr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Hn(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}st(4)}catch(u){}}function Mt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ft(e),r=Mt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Bn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Bn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>l)&&(3!=l||B||this.g&&(this.h.h||this.g.ja()||qn(this.g)))){this.J||4!=l||7==t||st(8==t||0>=d?3:2),Dt(this);var n=this.g.da();this.aa=n;t:if(At(this)){var r=qn(this.g);e="";var i=r.length,s=4==Bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Ot(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Pt(this),Ot(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lt(this,n)}this.S?(Ct(this,l,o),B&&this.i&&3==l&&(He(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,o,null),Lt(this,o)),4==l&&Pt(this),this.i&&!this.J&&(4==l?or(this.l,this):(this.i=!1,xt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Pt(this),Ot(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Bn(this.g),t=this.g.ja();this.C<t.length&&(Dt(this),Ct(this,e,t),this.i&&4!=e&&xt(this))}},r.cancel=function(){this.J=!0,Pt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ze(this.j,this.A),2!=this.L&&(st(),at(17)),Pt(this),this.o=2,Ot(this)):Nt(this,this.Y-e)};var Vt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Bt){this.h=void 0!==t?t:e.h,zt(this,e.j),this.s=e.s,this.g=e.g,$t(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Kt(this,n),this.o=e.o}else e&&(n=String(e).match(Vt))?(this.h=!!t,zt(this,n[1]||"",!0),this.s=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),$t(this,n[4]),this.l=Wt(n[5]||"",!0),Kt(this,n[6]||"",!0),this.o=Wt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function qt(e){return new Bt(e)}function zt(e,t,n){e.j=n?Wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $t(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Kt(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Qt(t,en)),e.i=new nn(t,e.h))}function Gt(e,t,n){e.i.set(t,n)}function Ht(e){return Gt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Qt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Qt(n,"/"==n.charAt(0)?Zt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qt(n,tn)),e.join("")};var Xt=/[#\/\?@]/g,Yt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=cn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=cn(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(cn(e,t),k(n)),e.h+=n.length)}function cn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=cn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.sa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(cn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=cn(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var ln=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function vn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return k(e.i)}function wn(){}function _n(){this.g=new wn}function bn(e,t,n){const r=n||"";try{Ut(e,(function(e,n){let i=e;p(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function In(e,t){const n=new Qe;if(h.Image){const r=new Image;r.onload=b(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=b(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=b(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=b(Tn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function En(e){this.l=e.fc||null,this.j=e.ob||!1}function Sn(e,t){Se.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},I(En,dt),En.prototype.g=function(){return new Sn(this.l,this.j)},En.prototype.i=function(e){return function(){return e}}({}),I(Sn,Se);var kn=0;function An(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Rn(e)}function Rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Sn.prototype,r.open=function(e,t){if(this.readyState!=kn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Rn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Cn(this)),this.readyState=kn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;An(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cn(this):Rn(this),3==this.readyState&&An(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Cn(this))},r.Ya=function(e){this.g&&(this.response=e,Cn(this))},r.ka=function(){this.g&&Cn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var xn=h.JSON.parse;function Nn(e){Se.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dn,this.L=this.M=!1}I(Nn,Se);var Dn="",On=/^https?$/i,Pn=["POST","PUT"];function Ln(e){return V&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fn(e),Vn(e)}function Fn(e){e.F||(e.F=!0,ke(e,"complete"),ke(e,"error"))}function Un(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Bn(e)||2!=e.da()))if(e.v&&4==Bn(e))qe(e.La,0,e);else if(ke(e,"readystatechange"),4==Bn(e)){e.h=!1;try{const c=e.da();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.I).match(Vt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!On.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var o=2<Bn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.da()+"]",Fn(e)}}finally{Vn(e)}}}function Vn(e,t){if(e.g){jn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||ke(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Bn(e){return e.g?e.g.readyState:0}function qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Dn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Jr){return null}}function zn(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function $n(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=zn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Gt(e,t,n))}function Kn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gn(e){this.Ga=0,this.i=[],this.j=new Qe,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kn("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kn("baseRetryDelayMs",5e3,e),this.hb=Kn("retryDelaySeedMs",1e4,e),this.eb=Kn("forwardChannelMaxRetries",2,e),this.xa=Kn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new hn(e&&e.concurrentRequestLimit),this.Ja=new _n,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Hn(e){if(Qn(e),3==e.H){var t=e.W++,n=qt(e.G);Gt(n,"SID",e.J),Gt(n,"RID",t),Gt(n,"TYPE","terminate"),Zn(e,n),t=new _t(e,e.j,t,void 0),t.L=2,t.v=Ht(qt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),xt(t)}ur(e)}function Wn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Qn(e){Wn(e),e.u&&(h.clearTimeout(e.u),e.u=null),sr(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Jn(e){fn(e.h)||e.m||(e.m=!0,Le(e.Na,e),e.C=0)}function Xn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.F.concat(e.i),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ut(_(e.Na,e,t),ar(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.W++;const r=qt(e.G);Gt(r,"SID",e.J),Gt(r,"RID",n),Gt(r,"AID",e.V),Zn(e,r),e.o&&e.s&&$n(r,e.o,e.s),n=new _t(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),gn(e.h,n),St(n,r,t)}function Zn(e,t){e.ma&&se(e.ma,(function(e,n){Gt(t,n,e)})),e.l&&Ut({},(function(e,n){Gt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?_(e.l.Va,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{bn(a,e,"req"+n+"_")}catch(ui){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function tr(e){e.g||e.u||(e.ba=1,Le(e.Ma,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ut(_(e.Ma,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new _t(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=qt(e.wa);Gt(t,"RID","rpc"),Gt(t,"SID",e.J),Gt(t,"CI",e.M?"0":"1"),Gt(t,"AID",e.V),Gt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&$n(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Ht(qt(t)),n.s=null,n.S=!0,kt(n,e)}function sr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){sr(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.F,yn(e.h,t),r=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=rt(),ke(r,new ct(r,n)),Jn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.ta||!(1==r&&Xn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:cr(e,5);break;case 4:cr(e,10);break;case 3:cr(e,6);break;default:cr(e,2)}}function ar(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function cr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=_(e.pb,e);n||(n=new Bt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||zt(n,"https"),Ht(n)),In(n.toString(),r)}else at(2);e.H=0,e.l&&e.l.za(t),ur(e),Qn(e)}function ur(e){if(e.H=0,e.pa=[],e.l){const t=vn(e.h);0==t.length&&0==e.i.length||(A(e.pa,t),A(e.pa,e.i),e.h.i.length=0,k(e.i),e.i.length=0),e.l.ya()}}function lr(e,t,n){var r=n instanceof Bt?qt(n):new Bt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),$t(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Bt(null,void 0);r&&zt(s,r),t&&(s.g=t),i&&$t(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Gt(r,n,t),Gt(r,"VER",e.qa),Zn(e,r),r}function hr(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Nn(new En({ob:!0})):new Nn(e.va),t.Oa(e.I),t}function dr(){}function fr(){if(V&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(e,t){Se.call(this),this.g=new Gn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!x(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!x(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yr(this)}function mr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){vt.call(this),this.status=1}function yr(e){this.g=e}function vr(){this.blockSize=-1}function wr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function _r(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function br(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=Nn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?ft(this.u):ft(mt),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=S(Pn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jn(this),0<this.B&&((this.L=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=qe(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),Vn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),Nn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Un(this):this.kb())},r.kb=function(){Un(this)},r.da=function(){try{return 2<Bn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),xn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Gn.prototype,r.qa=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new _t(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=oe(s),ce(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=qt(this.G),Gt(n,"RID",e),Gt(n,"CVER",22),this.F&&Gt(n,"X-HTTP-Session-Id",this.F),Zn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(zn(s)))+"&"+t:this.o&&$n(n,this.o,s)),gn(this.h,i),this.bb&&Gt(n,"TYPE","init"),this.P?(Gt(n,"$req",t),Gt(n,"SID","null"),i.ba=!0,St(i,n,null)):St(i,n,t),this.H=2}}else 3==this.H&&(e?Yn(this,e):0==this.i.length||fn(this.h)||Yn(this))},r.Ma=function(){if(this.u=null,ir(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=ut(_(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,at(10),Wn(this),ir(this))},r.ib=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),at(19))},r.pb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},I(pr,Se),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=lr(e,null,e.Y),Jn(e)},pr.prototype.close=function(){Hn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ce(e),e=n);t.i.push(new ln(t.fb++,e)),3==t.H&&Jn(t)},pr.prototype.N=function(){this.g.l=null,delete this.j,Hn(this.g),delete this.g,pr.$.N.call(this)},I(mr,yt),I(gr,vt),I(yr,dr),yr.prototype.Ba=function(){ke(this.g,"a")},yr.prototype.Aa=function(e){ke(this.g,new mr(e))},yr.prototype.za=function(e){ke(this.g,new gr)},yr.prototype.ya=function(){ke(this.g,"b")},I(wr,vr),wr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},wr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)_r(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){_r(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){_r(this,r),i=0;break}}this.h=i,this.i+=t},wr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Ir={};function Tr(e){return-128<=e&&128>e?M(Ir,e,(function(e){return new br([0|e],0>e?-1:0)})):new br([0|e],0>e?-1:0)}function Er(e){if(isNaN(e)||!isFinite(e))return Ar;if(0>e)return Dr(Er(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=kr;return new br(t,0)}function Sr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Dr(Sr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(t,8)),r=Ar,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Er(Math.pow(t,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var kr=4294967296,Ar=Tr(0),Cr=Tr(1),Rr=Tr(16777216);function xr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Nr(e){return-1==e.h}function Dr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new br(n,~e.h).add(Cr)}function Or(e,t){return e.add(Dr(t))}function Pr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Lr(e,t){this.g=e,this.h=t}function Mr(e,t){if(xr(t))throw Error("division by zero");if(xr(e))return new Lr(Ar,Ar);if(Nr(e))return t=Mr(Dr(e),t),new Lr(Dr(t.g),Dr(t.h));if(Nr(t))return t=Mr(e,Dr(t)),new Lr(Dr(t.g),t.h);if(30<e.g.length){if(Nr(e)||Nr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=t;0>=r.X(e);)n=Fr(n),r=Fr(r);var i=Ur(n,1),s=Ur(r,1);for(r=Ur(r,2),n=Ur(n,2);!xr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ur(r,1),n=Ur(n,1)}return t=Or(e,i.R(t)),new Lr(i,t)}for(i=Ar;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(t);Nr(o)||0<o.X(e);)n-=r,s=Er(n),o=s.R(t);xr(s)&&(s=Cr),i=i.add(s),e=Or(e,o)}return new Lr(i,e)}function Fr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new br(n,e.h)}function Ur(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new br(i,e.h)}r=br.prototype,r.ea=function(){if(Nr(this))return-Dr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:kr+r)*t,t*=kr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(xr(this))return"0";if(Nr(this))return"-"+Dr(this).toString(e);for(var t=Er(Math.pow(e,6)),n=this,r="";;){var i=Mr(n,t).g;n=Or(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,xr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Or(this,e),Nr(e)?-1:xr(e)?0:1},r.abs=function(){return Nr(this)?Dr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new br(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(xr(this)||xr(e))return Ar;if(Nr(this))return Nr(e)?Dr(this).R(Dr(e)):Dr(Dr(this).R(e));if(Nr(e))return Dr(this.R(Dr(e)));if(0>this.X(Rr)&&0>e.X(Rr))return Er(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Pr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Pr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Pr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Pr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new br(n,0)},r.gb=function(e){return Mr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new br(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new br(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new br(n,this.h^e.h)},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,lt.NO_ERROR=0,lt.TIMEOUT=8,lt.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Se.prototype.listen=Se.prototype.O,Nn.prototype.listenOnce=Nn.prototype.P,Nn.prototype.getLastError=Nn.prototype.Sa,Nn.prototype.getLastErrorCode=Nn.prototype.Ia,Nn.prototype.getStatus=Nn.prototype.da,Nn.prototype.getResponseJson=Nn.prototype.Wa,Nn.prototype.getResponseText=Nn.prototype.ja,Nn.prototype.send=Nn.prototype.ha,Nn.prototype.setWithCredentials=Nn.prototype.Oa,wr.prototype.digest=wr.prototype.l,wr.prototype.reset=wr.prototype.reset,wr.prototype.update=wr.prototype.j,br.prototype.add=br.prototype.add,br.prototype.multiply=br.prototype.R,br.prototype.modulo=br.prototype.gb,br.prototype.compare=br.prototype.X,br.prototype.toNumber=br.prototype.ea,br.prototype.toString=br.prototype.toString,br.prototype.getBits=br.prototype.D,br.fromNumber=Er,br.fromString=Sr;var Vr=u.createWebChannelTransport=function(){return new fr},jr=u.getStatEventTarget=function(){return rt()},Br=u.ErrorCode=lt,qr=u.EventType=ht,zr=u.Event=tt,$r=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Kr=u.FetchXmlHttpFactory=En,Gr=u.WebChannel=pt,Hr=u.XhrIo=Nn,Wr=u.Md5=wr,Qr=u.Integer=br;const Jr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xr.UNAUTHENTICATED=new Xr(null),Xr.GOOGLE_CREDENTIALS=new Xr("google-credentials-uid"),Xr.FIRST_PARTY=new Xr("first-party-uid"),Xr.MOCK_USER=new Xr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yr="9.21.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new o.Yd("@firebase/firestore");function ei(){return Zr.logLevel}function ti(e){Zr.setLogLevel(e)}function ni(e,...t){if(Zr.logLevel<=o["in"].DEBUG){const n=t.map(si);Zr.debug(`Firestore (${Yr}): ${e}`,...n)}}function ri(e,...t){if(Zr.logLevel<=o["in"].ERROR){const n=t.map(si);Zr.error(`Firestore (${Yr}): ${e}`,...n)}}function ii(e,...t){if(Zr.logLevel<=o["in"].WARN){const n=t.map(si);Zr.warn(`Firestore (${Yr}): ${e}`,...n)}}function si(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e="Unexpected state"){const t=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+e;throw ri(t),new Error(t)}function ai(e,t){e||oi()}function ci(e,t){e||oi()}function ui(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hi extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Xr.UNAUTHENTICATED)))}shutdown(){}}class mi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class gi{constructor(e){this.t=e,this.currentUser=Xr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new di;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new di,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ni("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ni("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new di)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ni("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ai("string"==typeof t.accessToken),new fi(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ai(null===e||"string"==typeof e),new Xr(e)}}class yi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Xr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class vi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new yi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Xr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _i{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ni("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ni("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ni("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):ni("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ai("string"==typeof e.token),this.T=e.token,new wi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=bi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ti(e,t){return e<t?-1:e>t?1:0}function Ei(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function Si(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new hi(li.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new hi(li.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new hi(li.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new hi(li.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ki.fromMillis(Date.now())}static fromDate(e){return ki.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ki(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ti(this.nanoseconds,e.nanoseconds):Ti(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ai(e)}static min(){return new Ai(new ki(0,0))}static max(){return new Ai(new ki(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,n){void 0===t?t=0:t>e.length&&oi(),void 0===n?n=e.length-t:n>e.length-t&&oi(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ci.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ri extends Ci{construct(e,t,n){return new Ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new hi(li.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ri(t)}static emptyPath(){return new Ri([])}}const xi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ni extends Ci{construct(e,t,n){return new Ni(e,t,n)}static isValidIdentifier(e){return xi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ni.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ni(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new hi(li.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new hi(li.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new hi(li.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new hi(li.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ni(t)}static emptyPath(){return new Ni([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.path=e}static fromPath(e){return new Di(Ri.fromString(e))}static fromName(e){return new Di(Ri.fromString(e).popFirst(5))}static empty(){return new Di(Ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Di(new Ri(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Pi(e){return e.fields.find((e=>2===e.kind))}function Li(e){return e.fields.filter((e=>2!==e.kind))}Oi.UNKNOWN_ID=-1;class Mi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Fi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Fi(0,ji.min())}}function Ui(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ai.fromTimestamp(1e9===r?new ki(n+1,0):new ki(n,r));return new ji(i,Di.empty(),t)}function Vi(e){return new ji(e.readTime,e.key,-1)}class ji{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ji(Ai.min(),Di.empty(),-1)}static max(){return new ji(Ai.max(),Di.empty(),-1)}}function Bi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Di.comparator(e.documentKey,t.documentKey),0!==n?n:Ti(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(e){if(e.code!==li.FAILED_PRECONDITION||e.message!==qi)throw e;ni("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&oi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ki(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ki?t:Ki.resolve(t)}catch(e){return Ki.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ki.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ki.reject(t)}static resolve(e){return new Ki(((t,n)=>{t(e)}))}static reject(e){return new Ki(((t,n)=>{n(e)}))}static waitFor(e){return new Ki(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ki.resolve(!1);for(const n of e)t=t.next((e=>e?Ki.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ki(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ki(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new di,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Qi(e,t.error)):this.R.resolve()},this.transaction.onerror=t=>{const n=es(t.target.error);this.R.reject(new Qi(e,n))}}static open(e,t,n,r){try{return new Gi(t,e.transaction(r,n))}catch(e){throw new Qi(t,e)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(ni("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Xi(t)}}class Hi{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Hi.S((0,a.z$)())&&ri("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ni("SimpleDb","Removing database:",e),Yi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,a.hl)())return!1;if(Hi.C())return!0;const e=(0,a.z$)(),t=Hi.S(e),n=0<t&&t<10,r=Hi.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(ni("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Qi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new hi(li.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new hi(li.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Qi(e,r))},r.onupgradeneeded=e=>{ni("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.$(t,r.transaction,e.oldVersion,this.version).next((()=>{ni("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.O(e);const t=Gi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),Ki.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ni("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Wi{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Yi(this.L.delete())}}class Qi extends hi{constructor(e,t){super(li.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ji(e){return"IndexedDbTransactionError"===e.name}class Xi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ni("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ni("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Yi(n)}add(e){return ni("SimpleDb","ADD",this.store.name,e,e),Yi(this.store.add(e))}get(e){return Yi(this.store.get(e)).next((t=>(void 0===t&&(t=null),ni("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ni("SimpleDb","DELETE",this.store.name,e),Yi(this.store.delete(e))}count(){return ni("SimpleDb","COUNT",this.store.name),Yi(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ki(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ki(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){ni("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new Ki(((n,r)=>{t.onerror=e=>{const t=es(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new Ki(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Wi(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ki){const e=o.catch((e=>(s.done(),Ki.reject(e))));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}})).next((()=>Ki.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Yi(e){return new Ki(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=es(e.target.error);n(t)}}))}let Zi=!1;function es(e){const t=Hi.S((0,a.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new hi("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Zi||(Zi=!0,setTimeout((()=>{throw e}),0)),e}}return e}class ts{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){ni("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ni("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){Ji(e)?ni("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await $i(e)}await this.et(6e4)}))}}class ns{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let r=t,i=!0;return Ki.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return ni("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.rt(r,n))).next((n=>(ni("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Vi(t);Bi(r,n)>0&&(n=r)})),new ji(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function is(e){return null==e}function ss(e){return 0===e&&1/e==-1/0}function os(e){return"number"==typeof e&&Number.isInteger(e)&&!ss(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=us(t)),t=cs(e.get(n),t);return us(t)}function cs(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function us(e){return e+""}function ls(e){const t=e.length;if(ai(t>=2),2===t)return ai(""===e.charAt(0)&&""===e.charAt(1)),Ri.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&oi(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:oi()}s=t+2}return new Ri(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rs.ct=-1;const hs=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e,t){return[e,as(t)]}function fs(e,t,n){return[e,as(t),n]}const ps={},ms=["prefixPath","collectionGroup","readTime","documentId"],gs=["prefixPath","collectionGroup","documentId"],ys=["collectionGroup","readTime","prefixPath","documentId"],vs=["canonicalId","targetId"],ws=["targetId","path"],_s=["path","targetId"],bs=["collectionId","parent"],Is=["indexId","uid"],Ts=["uid","sequenceNumber"],Es=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ss=["indexId","uid","orderedDocumentKey"],ks=["userId","collectionPath","documentId"],As=["userId","collectionPath","largestBatchId"],Cs=["userId","collectionGroup","largestBatchId"],Rs=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xs=[...Rs,"documentOverlays"],Ns=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ds=Ns,Os=[...Ds,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends zi{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function Ls(e,t){const n=ui(e);return Hi.M(n.at,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Fs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Us(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.comparator=e,this.root=t||Bs.EMPTY}insert(e,t){return new Vs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Bs.BLACK,null,null))}remove(e){return new Vs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new js(this.root,e,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new js(this.root,e,this.comparator,!0)}}class js{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Bs.RED,this.left=null!=r?r:Bs.EMPTY,this.right=null!=i?i:Bs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Bs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Bs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Bs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oi();if(this.right.isRed())throw oi();const e=this.left.check();if(e!==this.right.check())throw oi();return e+(this.isRed()?0:1)}}Bs.EMPTY=null,Bs.RED=!0,Bs.BLACK=!1,Bs.EMPTY=new class{constructor(){this.size=0}get key(){throw oi()}get value(){throw oi()}get color(){throw oi()}get left(){throw oi()}get right(){throw oi()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Bs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{constructor(e){this.comparator=e,this.data=new Vs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zs(this.data.getIterator())}getIteratorFrom(e){return new zs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof qs))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new qs(this.comparator);return t.data=e,t}}class zs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $s(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.fields=e,e.sort(Ni.comparator)}static empty(){return new Ks([])}unionWith(e){let t=new qs(Ni.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ks(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Gs("Invalid base64 string: "+e):e}}(e);return new Ws(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ws(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ti(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ws.EMPTY_BYTE_STRING=new Ws("");const Qs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Js(e){if(ai(!!e),"string"==typeof e){let t=0;const n=Qs.exec(e);if(ai(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Xs(e.seconds),nanos:Xs(e.nanos)}}function Xs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ys(e){return"string"==typeof e?Ws.fromBase64String(e):Ws.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eo(e){const t=e.mapValue.fields.__previous_value__;return Zs(t)?eo(t):t}function to(e){const t=Js(e.mapValue.fields.__local_write_time__.timestampValue);return new ki(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ro{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},so={nullValue:"NULL_VALUE"};function oo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Zs(e)?4:bo(e)?9007199254740991:10:oi()}function ao(e,t){if(e===t)return!0;const n=oo(e);if(n!==oo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return to(e).isEqual(to(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Js(e.timestampValue),r=Js(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ys(e.bytesValue).isEqual(Ys(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Xs(e.geoPointValue.latitude)===Xs(t.geoPointValue.latitude)&&Xs(e.geoPointValue.longitude)===Xs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Xs(e.integerValue)===Xs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Xs(e.doubleValue),r=Xs(t.doubleValue);return n===r?ss(n)===ss(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ei(e.arrayValue.values||[],t.arrayValue.values||[],ao);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ms(n)!==Ms(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ao(n[i],r[i])))return!1;return!0}(e,t);default:return oi()}}function co(e,t){return void 0!==(e.values||[]).find((e=>ao(e,t)))}function uo(e,t){if(e===t)return 0;const n=oo(e),r=oo(t);if(n!==r)return Ti(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ti(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Xs(e.integerValue||e.doubleValue),r=Xs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return lo(e.timestampValue,t.timestampValue);case 4:return lo(to(e),to(t));case 5:return Ti(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ys(e),r=Ys(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ti(n[i],r[i]);if(0!==e)return e}return Ti(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ti(Xs(e.latitude),Xs(t.latitude));return 0!==n?n:Ti(Xs(e.longitude),Xs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=uo(n[i],r[i]);if(e)return e}return Ti(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===io.mapValue&&t===io.mapValue)return 0;if(e===io.mapValue)return 1;if(t===io.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Ti(r[o],s[o]);if(0!==e)return e;const t=uo(n[r[o]],i[s[o]]);if(0!==t)return t}return Ti(r.length,s.length)}(e.mapValue,t.mapValue);default:throw oi()}}function lo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ti(e,t);const n=Js(e),r=Js(t),i=Ti(n.seconds,r.seconds);return 0!==i?i:Ti(n.nanos,r.nanos)}function ho(e){return fo(e)}function fo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Js(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ys(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Di.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=fo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${fo(e.fields[i])}`;return n+"}"}(e.mapValue):oi();var t,n}function po(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function mo(e){return!!e&&"integerValue"in e}function go(e){return!!e&&"arrayValue"in e}function yo(e){return!!e&&"nullValue"in e}function vo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function wo(e){return!!e&&"mapValue"in e}function _o(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Fs(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_o(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_o(e.arrayValue.values[n]);return t}return Object.assign({},e)}function bo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Io(e){return"nullValue"in e?so:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?po(ro.empty(),Di.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:oi()}function To(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?po(ro.empty(),Di.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?io:oi()}function Eo(e,t){const n=uo(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function So(e,t){const n=uo(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.value=e}static empty(){return new ko({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!wo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(t)}setAll(e){let t=Ni.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_o(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());wo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ao(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];wo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Fs(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ko(_o(this.value))}}function Ao(e){const t=[];return Fs(e.fields,((e,n)=>{const r=new Ni([e]);if(wo(n)){const e=Ao(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ks(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Co{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Co(e,0,Ai.min(),Ai.min(),Ai.min(),ko.empty(),0)}static newFoundDocument(e,t,n,r){return new Co(e,1,t,Ai.min(),n,r,0)}static newNoDocument(e,t){return new Co(e,2,t,Ai.min(),Ai.min(),ko.empty(),0)}static newUnknownDocument(e,t){return new Co(e,3,t,Ai.min(),Ai.min(),ko.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ai.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ko.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ko.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ai.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Co&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Co(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.position=e,this.inclusive=t}}function xo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Di.comparator(Di.fromName(o.referenceValue),n.key):uo(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function No(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ao(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t="asc"){this.field=e,this.dir=t}}function Oo(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{}class Lo extends Po{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ko(e,t,n):"array-contains"===t?new Qo(e,n):"in"===t?new Jo(e,n):"not-in"===t?new Xo(e,n):"array-contains-any"===t?new Yo(e,n):new Lo(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Go(e,n):new Ho(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(uo(t,this.value)):null!==t&&oo(this.value)===oo(t)&&this.matchesComparison(uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return oi()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mo extends Po{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Mo(e,t)}matches(e){return Fo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Fo(e){return"and"===e.op}function Uo(e){return"or"===e.op}function Vo(e){return jo(e)&&Fo(e)}function jo(e){for(const t of e.filters)if(t instanceof Mo)return!1;return!0}function Bo(e){if(e instanceof Lo)return e.field.canonicalString()+e.op.toString()+ho(e.value);if(Vo(e))return e.filters.map((e=>Bo(e))).join(",");{const t=e.filters.map((e=>Bo(e))).join(",");return`${e.op}(${t})`}}function qo(e,t){return e instanceof Lo?function(e,t){return t instanceof Lo&&e.op===t.op&&e.field.isEqual(t.field)&&ao(e.value,t.value)}(e,t):e instanceof Mo?function(e,t){return t instanceof Mo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&qo(n,t.filters[r])),!0)}(e,t):void oi()}function zo(e,t){const n=e.filters.concat(t);return Mo.create(n,e.op)}function $o(e){return e instanceof Lo?function(e){return`${e.field.canonicalString()} ${e.op} ${ho(e.value)}`}(e):e instanceof Mo?function(e){return e.op.toString()+" {"+e.getFilters().map($o).join(" ,")+"}"}(e):"Filter"}class Ko extends Lo{constructor(e,t,n){super(e,t,n),this.key=Di.fromName(n.referenceValue)}matches(e){const t=Di.comparator(e.key,this.key);return this.matchesComparison(t)}}class Go extends Lo{constructor(e,t){super(e,"in",t),this.keys=Wo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ho extends Lo{constructor(e,t){super(e,"not-in",t),this.keys=Wo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Di.fromName(e.referenceValue)))}class Qo extends Lo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return go(t)&&co(t.arrayValue,this.value)}}class Jo extends Lo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&co(this.value.arrayValue,t)}}class Xo extends Lo{constructor(e,t){super(e,"not-in",t)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!co(this.value.arrayValue,t)}}class Yo extends Lo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!go(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>co(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function ea(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Zo(e,t,n,r,i,s,o)}function ta(e){const t=ui(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Bo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),is(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ho(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ho(e))).join(",")),t.ft=e}return t.ft}function na(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Oo(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!qo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!No(e.startAt,t.startAt)&&No(e.endAt,t.endAt)}function ra(e){return Di.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ia(e,t){return e.filters.filter((e=>e instanceof Lo&&e.field.isEqual(t)))}function sa(e,t,n){let r=so,i=!0;for(const s of ia(e,t)){let e=so,t=!0;switch(s.op){case"<":case"<=":e=Io(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=so}Eo({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Eo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function oa(e,t,n){let r=io,i=!0;for(const s of ia(e,t)){let e=io,t=!0;switch(s.op){case">=":case">":e=To(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=io}So({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];So({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ca(e,t,n,r,i,s,o,a){return new aa(e,t,n,r,i,s,o,a)}function ua(e){return new aa(e)}function la(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ha(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function da(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function fa(e){return null!==e.collectionGroup}function pa(e){const t=ui(e);if(null===t.dt){t.dt=[];const e=da(t),n=ha(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Do(e)),t.dt.push(new Do(Ni.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Do(Ni.keyField(),e))}}}return t.dt}function ma(e){const t=ui(e);if(!t._t)if("F"===t.limitType)t._t=ea(t.path,t.collectionGroup,pa(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of pa(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Do(i.field,t))}const n=t.endAt?new Ro(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ro(t.startAt.position,t.startAt.inclusive):null;t._t=ea(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ga(e,t){t.getFirstInequalityField(),da(e);const n=e.filters.concat([t]);return new aa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ya(e,t,n){return new aa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function va(e,t){return na(ma(e),ma(t))&&e.limitType===t.limitType}function wa(e){return`${ta(ma(e))}|lt:${e.limitType}`}function _a(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>$o(e))).join(", ")}]`),is(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ho(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ho(e))).join(",")),`Target(${t})`}(ma(e))}; limitType=${e.limitType})`}function ba(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Di.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of pa(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,pa(e),t))&&!(e.endAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,pa(e),t))}(e,t)}function Ia(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ta(e){return(t,n)=>{let r=!1;for(const i of pa(e)){const e=Ea(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ea(e,t,n){const r=e.field.isKeyField()?Di.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?uo(r,i):oi()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return oi()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Us(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Vs(Di.comparator);function Aa(){return ka}const Ca=new Vs(Di.comparator);function Ra(...e){let t=Ca;for(const n of e)t=t.insert(n.key,n);return t}function xa(e){let t=Ca;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Na(){return Oa()}function Da(){return Oa()}function Oa(){return new Sa((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Pa=new Vs(Di.comparator),La=new qs(Di.comparator);function Ma(...e){let t=La;for(const n of e)t=t.add(n);return t}const Fa=new qs(Ti);function Ua(){return Fa}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ss(t)?"-0":t}}function ja(e){return{integerValue:""+e}}function Ba(e,t){return os(t)?ja(t):Va(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this._=void 0}}function za(e,t,n){return e instanceof Ga?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Zs(t)&&(t=eo(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ha?Wa(e,t):e instanceof Qa?Ja(e,t):function(e,t){const n=Ka(e,t),r=Ya(n)+Ya(e.wt);return mo(n)&&mo(e.wt)?ja(r):Va(e.serializer,r)}(e,t)}function $a(e,t,n){return e instanceof Ha?Wa(e,t):e instanceof Qa?Ja(e,t):n}function Ka(e,t){return e instanceof Xa?mo(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ga extends qa{}class Ha extends qa{constructor(e){super(),this.elements=e}}function Wa(e,t){const n=Za(t);for(const r of e.elements)n.some((e=>ao(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Qa extends qa{constructor(e){super(),this.elements=e}}function Ja(e,t){let n=Za(t);for(const r of e.elements)n=n.filter((e=>!ao(e,r)));return{arrayValue:{values:n}}}class Xa extends qa{constructor(e,t){super(),this.serializer=e,this.wt=t}}function Ya(e){return Xs(e.integerValue||e.doubleValue)}function Za(e){return go(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.field=e,this.transform=t}}function tc(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ha&&t instanceof Ha||e instanceof Qa&&t instanceof Qa?Ei(e.elements,t.elements,ao):e instanceof Xa&&t instanceof Xa?ao(e.wt,t.wt):e instanceof Ga&&t instanceof Ga}(e.transform,t.transform)}class nc{constructor(e,t){this.version=e,this.transformResults=t}}class rc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rc}static exists(e){return new rc(void 0,e)}static updateTime(e){return new rc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ic(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class sc{}function oc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new gc(e.key,rc.none()):new hc(e.key,e.data,rc.none());{const n=e.data,r=ko.empty();let i=new qs(Ni.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new dc(e.key,r,new Ks(i.toArray()),rc.none())}}function ac(e,t,n){e instanceof hc?function(e,t,n){const r=e.value.clone(),i=pc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof dc?function(e,t,n){if(!ic(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=pc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(fc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function cc(e,t,n,r){return e instanceof hc?function(e,t,n,r){if(!ic(e.precondition,t))return n;const i=e.value.clone(),s=mc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof dc?function(e,t,n,r){if(!ic(e.precondition,t))return n;const i=mc(e.fieldTransforms,r,t),s=t.data;return s.setAll(fc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ic(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function uc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ka(r.transform,e||null);null!=i&&(null===n&&(n=ko.empty()),n.set(r.field,i))}return n||null}function lc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ei(e,t,((e,t)=>tc(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class hc extends sc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class dc extends sc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function pc(e,t,n){const r=new Map;ai(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,$a(o,a,n[i]))}return r}function mc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,za(e,s,t))}return r}class gc extends sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yc extends sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ac(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=cc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=cc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Da();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=oc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ai.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ma())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,((e,t)=>lc(e,t)))&&Ei(this.baseMutations,e.baseMutations,((e,t)=>lc(e,t)))}}class wc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ai(e.mutations.length===n.length);let r=Pa;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new wc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ic,Tc;function Ec(e){switch(e){default:return oi();case li.CANCELLED:case li.UNKNOWN:case li.DEADLINE_EXCEEDED:case li.RESOURCE_EXHAUSTED:case li.INTERNAL:case li.UNAVAILABLE:case li.UNAUTHENTICATED:return!1;case li.INVALID_ARGUMENT:case li.NOT_FOUND:case li.ALREADY_EXISTS:case li.PERMISSION_DENIED:case li.FAILED_PRECONDITION:case li.ABORTED:case li.OUT_OF_RANGE:case li.UNIMPLEMENTED:case li.DATA_LOSS:return!0}}function Sc(e){if(void 0===e)return ri("GRPC error has no .code"),li.UNKNOWN;switch(e){case Ic.OK:return li.OK;case Ic.CANCELLED:return li.CANCELLED;case Ic.UNKNOWN:return li.UNKNOWN;case Ic.DEADLINE_EXCEEDED:return li.DEADLINE_EXCEEDED;case Ic.RESOURCE_EXHAUSTED:return li.RESOURCE_EXHAUSTED;case Ic.INTERNAL:return li.INTERNAL;case Ic.UNAVAILABLE:return li.UNAVAILABLE;case Ic.UNAUTHENTICATED:return li.UNAUTHENTICATED;case Ic.INVALID_ARGUMENT:return li.INVALID_ARGUMENT;case Ic.NOT_FOUND:return li.NOT_FOUND;case Ic.ALREADY_EXISTS:return li.ALREADY_EXISTS;case Ic.PERMISSION_DENIED:return li.PERMISSION_DENIED;case Ic.FAILED_PRECONDITION:return li.FAILED_PRECONDITION;case Ic.ABORTED:return li.ABORTED;case Ic.OUT_OF_RANGE:return li.OUT_OF_RANGE;case Ic.UNIMPLEMENTED:return li.UNIMPLEMENTED;case Ic.DATA_LOSS:return li.DATA_LOSS;default:return oi()}}(Tc=Ic||(Ic={}))[Tc.OK=0]="OK",Tc[Tc.CANCELLED=1]="CANCELLED",Tc[Tc.UNKNOWN=2]="UNKNOWN",Tc[Tc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tc[Tc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tc[Tc.NOT_FOUND=5]="NOT_FOUND",Tc[Tc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tc[Tc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tc[Tc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tc[Tc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tc[Tc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tc[Tc.ABORTED=10]="ABORTED",Tc[Tc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tc[Tc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tc[Tc.INTERNAL=13]="INTERNAL",Tc[Tc.UNAVAILABLE=14]="UNAVAILABLE",Tc[Tc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ac}static getOrCreateInstance(){return null===Ac&&(Ac=new kc),Ac}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Ac=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Qr([4294967295,4294967295],0);function xc(e){const t=Cc().encode(e),n=new Wr;return n.update(t),new Uint8Array(n.digest())}function Nc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Qr([n,r],0),new Qr([i,s],0)]}class Dc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Oc(`Invalid padding: ${t}`);if(n<0)throw new Oc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Oc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Oc(`Invalid padding when bitmap length is 0: ${t}`);this.yt=8*e.length-t,this.It=Qr.fromNumber(this.yt)}Tt(e,t,n){let r=e.add(t.multiply(Qr.fromNumber(n)));return 1===r.compare(Rc)&&(r=new Qr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}At(e){if(0===this.yt)return!1;const t=xc(e),[n,r]=Nc(t);for(let i=0;i<this.hashCount;i++){const e=this.Tt(n,r,i);if(!this.Et(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Dc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.yt)return;const t=xc(e),[n,r]=Nc(t);for(let i=0;i<this.hashCount;i++){const e=this.Tt(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Oc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Lc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Pc(Ai.min(),r,new Vs(Ti),Aa(),Ma())}}class Lc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Lc(n,t,Ma(),Ma(),Ma())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,n,r){this.vt=e,this.removedTargetIds=t,this.key=n,this.Pt=r}}class Fc{constructor(e,t){this.targetId=e,this.bt=t}}class Uc{constructor(e,t,n=Ws.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Vc{constructor(){this.Vt=0,this.St=qc(),this.Dt=Ws.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Ma(),t=Ma(),n=Ma();return this.St.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:oi()}})),new Lc(this.Dt,this.Ct,e,t,n)}$t(){this.xt=!1,this.St=qc()}Ft(e,t){this.xt=!0,this.St=this.St.insert(e,t)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class jc{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Aa(),this.jt=Bc(),this.zt=new Vs(Ti)}Wt(e){for(const t of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(t,e.Pt):this.Jt(t,e.key,e.Pt);for(const t of e.removedTargetIds)this.Jt(t,e.key,e.Pt)}Yt(e){this.forEachTarget(e,(t=>{const n=this.Xt(t);switch(e.state){case 0:this.Zt(t)&&n.Mt(e.resumeToken);break;case 1:n.qt(),n.Nt||n.$t(),n.Mt(e.resumeToken);break;case 2:n.qt(),n.Nt||this.removeTarget(t);break;case 3:this.Zt(t)&&(n.Ut(),n.Mt(e.resumeToken));break;case 4:this.Zt(t)&&(this.te(t),n.Mt(e.resumeToken));break;default:oi()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Gt.forEach(((e,n)=>{this.Zt(n)&&t(n)}))}ee(e){var t;const n=e.targetId,r=e.bt.count,i=this.ne(n);if(i){const s=i.target;if(ra(s))if(0===r){const e=new Di(s.path);this.Jt(n,e,Co.newNoDocument(e,Ai.min()))}else ai(1===r);else{const i=this.se(n);if(i!==r){const r=this.ie(e,i);if(0!==r){this.te(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(n,e)}null===(t=kc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,e.bt))}}}}ie(e,t){const{unchangedNames:n,count:r}=e.bt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Ys(i).toUint8Array()}catch(e){if(e instanceof Gs)return ii("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Dc(a,s,o)}catch(e){return ii(e instanceof Oc?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.yt?1:r!==t-this.re(e.targetId,c)?2:0}re(e,t){const n=this.Kt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Kt.oe(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.At(s)||(this.Jt(e,n,null),r++)})),r}ue(e){const t=new Map;this.Gt.forEach(((n,r)=>{const i=this.ne(r);if(i){if(n.current&&ra(i.target)){const t=new Di(i.target.path);null!==this.Qt.get(t)||this.ce(r,t)||this.Jt(r,t,Co.newNoDocument(t,e))}n.kt&&(t.set(r,n.Ot()),n.$t())}}));let n=Ma();this.jt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.ne(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Qt.forEach(((t,n)=>n.setReadTime(e)));const r=new Pc(e,t,this.zt,this.Qt,n);return this.Qt=Aa(),this.jt=Bc(),this.zt=new Vs(Ti),r}Ht(e,t){if(!this.Zt(e))return;const n=this.ce(e,t.key)?2:0;this.Xt(e).Ft(t.key,n),this.Qt=this.Qt.insert(t.key,t),this.jt=this.jt.insert(t.key,this.ae(t.key).add(e))}Jt(e,t,n){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,t)?r.Ft(t,1):r.Bt(t),this.jt=this.jt.insert(t,this.ae(t).delete(e)),n&&(this.Qt=this.Qt.insert(t,n))}removeTarget(e){this.Gt.delete(e)}se(e){const t=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let t=this.Gt.get(e);return t||(t=new Vc,this.Gt.set(e,t)),t}ae(e){let t=this.jt.get(e);return t||(t=new qs(Ti),this.jt=this.jt.insert(e,t)),t}Zt(e){const t=null!==this.ne(e);return t||ni("WatchChangeAggregator","Detected inactive target",e),t}ne(e){const t=this.Gt.get(e);return t&&t.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Vc),this.Kt.getRemoteKeysForTarget(e).forEach((t=>{this.Jt(e,t,null)}))}ce(e,t){return this.Kt.getRemoteKeysForTarget(e).has(t)}}function Bc(){return new Vs(Di.comparator)}function qc(){return new Vs(Di.comparator)}const zc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),$c=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Kc=(()=>{const e={and:"AND",or:"OR"};return e})();class Gc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hc(e,t){return e.useProto3Json||is(t)?t:{value:t}}function Wc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Qc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Jc(e,t){return Wc(e,t.toTimestamp())}function Xc(e){return ai(!!e),Ai.fromTimestamp(function(e){const t=Js(e);return new ki(t.seconds,t.nanos)}(e))}function Yc(e,t){return function(e){return new Ri(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Zc(e){const t=Ri.fromString(e);return ai(Su(t)),t}function eu(e,t){return Yc(e.databaseId,t.path)}function tu(e,t){const n=Zc(t);if(n.get(1)!==e.databaseId.projectId)throw new hi(li.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new hi(li.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Di(su(n))}function nu(e,t){return Yc(e.databaseId,t)}function ru(e){const t=Zc(e);return 4===t.length?Ri.emptyPath():su(t)}function iu(e){return new Ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function su(e){return ai(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ou(e,t,n){return{name:eu(e,t),fields:n.value.mapValue.fields}}function au(e,t,n){const r=tu(e,t.name),i=Xc(t.updateTime),s=t.createTime?Xc(t.createTime):Ai.min(),o=new ko({mapValue:{fields:t.fields}}),a=Co.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function cu(e,t){return"found"in t?function(e,t){ai(!!t.found),t.found.name,t.found.updateTime;const n=tu(e,t.found.name),r=Xc(t.found.updateTime),i=t.found.createTime?Xc(t.found.createTime):Ai.min(),s=new ko({mapValue:{fields:t.found.fields}});return Co.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){ai(!!t.missing),ai(!!t.readTime);const n=tu(e,t.missing),r=Xc(t.readTime);return Co.newNoDocument(n,r)}(e,t):oi()}function uu(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:oi()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ai(void 0===t||"string"==typeof t),Ws.fromBase64String(t||"")):(ai(void 0===t||t instanceof Uint8Array),Ws.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?li.UNKNOWN:Sc(e.code);return new hi(t,e.message||"")}(o);n=new Uc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=tu(e,r.document.name),s=Xc(r.document.updateTime),o=r.document.createTime?Xc(r.document.createTime):Ai.min(),a=new ko({mapValue:{fields:r.document.fields}}),c=Co.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Mc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=tu(e,r.document),s=r.readTime?Xc(r.readTime):Ai.min(),o=Co.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Mc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=tu(e,r.document),s=r.removedTargetIds||[];n=new Mc([],s,i,null)}else{if(!("filter"in t))return oi();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new bc(r,i),o=e.targetId;n=new Fc(o,s)}}return n}function lu(e,t){let n;if(t instanceof hc)n={update:ou(e,t.key,t.value)};else if(t instanceof gc)n={delete:eu(e,t.key)};else if(t instanceof dc)n={update:ou(e,t.key,t.data),updateMask:Eu(t.fieldMask)};else{if(!(t instanceof yc))return oi();n={verify:eu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ga)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ha)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Qa)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Xa)return{fieldPath:t.field.canonicalString(),increment:n.wt};throw oi()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Jc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:oi()}(e,t.precondition)),n}function hu(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?rc.updateTime(Xc(e.updateTime)):void 0!==e.exists?rc.exists(e.exists):rc.none()}(t.currentDocument):rc.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)ai("REQUEST_TIME"===t.setToServerValue),n=new Ga;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ha(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Qa(e)}else"increment"in t?n=new Xa(e,t.increment):oi();const r=Ni.fromServerFormat(t.fieldPath);return new ec(r,n)}(e,t))):[];if(t.update){t.update.name;const i=tu(e,t.update.name),s=new ko({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Ks(t.map((e=>Ni.fromServerFormat(e))))}(t.updateMask);return new dc(i,s,e,n,r)}return new hc(i,s,n,r)}if(t.delete){const r=tu(e,t.delete);return new gc(r,n)}if(t.verify){const r=tu(e,t.verify);return new yc(r,n)}return oi()}function du(e,t){return e&&e.length>0?(ai(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Xc(e.updateTime):Xc(t);return n.isEqual(Ai.min())&&(n=Xc(t)),new nc(n,e.transformResults||[])}(e,t)))):[]}function fu(e,t){return{documents:[nu(e,t.path)]}}function pu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=nu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=nu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Tu(Mo.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:bu(e.field),direction:vu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Hc(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function mu(e){let t=ru(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ai(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=yu(e);return t instanceof Mo&&Vo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Do(Iu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,is(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ro(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ro(n,t)}(n.endAt)),ca(t,i,o,s,a,"F",c,u)}function gu(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oi()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function yu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Iu(e.unaryFilter.field);return Lo.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Iu(e.unaryFilter.field);return Lo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Iu(e.unaryFilter.field);return Lo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Iu(e.unaryFilter.field);return Lo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return oi()}}(e):void 0!==e.fieldFilter?function(e){return Lo.create(Iu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oi()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Mo.create(e.compositeFilter.filters.map((e=>yu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return oi()}}(e.compositeFilter.op))}(e):oi()}function vu(e){return zc[e]}function wu(e){return $c[e]}function _u(e){return Kc[e]}function bu(e){return{fieldPath:e.canonicalString()}}function Iu(e){return Ni.fromServerFormat(e.fieldPath)}function Tu(e){return e instanceof Lo?function(e){if("=="===e.op){if(vo(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NAN"}};if(yo(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(vo(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NOT_NAN"}};if(yo(e.value))return{unaryFilter:{field:bu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bu(e.field),op:wu(e.op),value:e.value}}}(e):e instanceof Mo?function(e){const t=e.getFilters().map((e=>Tu(e)));return 1===t.length?t[0]:{compositeFilter:{op:_u(e.op),filters:t}}}(e):oi()}function Eu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Su(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t,n,r,i=Ai.min(),s=Ai.min(),o=Ws.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new ku(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ku(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ku(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ku(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.le=e}}function Cu(e,t){let n;if(t.document)n=au(e.le,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Di.fromSegments(t.noDocument.path),r=Du(t.noDocument.readTime);n=Co.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return oi();{const e=Di.fromSegments(t.unknownDocument.path),r=Du(t.unknownDocument.version);n=Co.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new ki(e[0],e[1]);return Ai.fromTimestamp(t)}(t.readTime)),n}function Ru(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:xu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:eu(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Wc(e,t.version.toTimestamp()),createTime:Wc(e,t.createTime.toTimestamp())}}(e.le,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Nu(t.version)};else{if(!t.isUnknownDocument())return oi();r.unknownDocument={path:n.path.toArray(),version:Nu(t.version)}}return r}function xu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Nu(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Du(e){const t=new ki(e.seconds,e.nanoseconds);return Ai.fromTimestamp(t)}function Ou(e,t){const n=(t.baseMutations||[]).map((t=>hu(e.le,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>hu(e.le,t))),i=ki.fromMillis(t.localWriteTimeMs);return new vc(t.batchId,i,n,r)}function Pu(e){const t=Du(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Du(e.lastLimboFreeSnapshotVersion):Ai.min();let r;var i;return void 0!==e.query.documents?(ai(1===(i=e.query).documents.length),r=ma(ua(ru(i.documents[0])))):r=function(e){return ma(mu(e))}(e.query),new ku(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ws.fromBase64String(e.resumeToken))}function Lu(e,t){const n=Nu(t.snapshotVersion),r=Nu(t.lastLimboFreeSnapshotVersion);let i;i=ra(t.target)?fu(e.le,t.target):pu(e.le,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ta(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Mu(e){const t=mu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ya(t,t.limit,"L"):t}function Fu(e,t){return new _c(t.largestBatchId,hu(e.le,t.overlayMutation))}function Uu(e,t){const n=t.path.lastSegment();return[e,as(t.path.popLast()),n]}function Vu(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Nu(r.readTime),documentKey:as(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{getBundleMetadata(e,t){return Bu(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Du(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Bu(e).put({bundleId:(n=t).id,createTime:Nu(Xc(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return qu(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Mu(t.bundledQuery),readTime:Du(t.readTime)};var t}))}saveNamedQuery(e,t){return qu(e).put(function(e){return{name:e.name,readTime:Nu(Xc(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Bu(e){return Ls(e,"bundles")}function qu(e){return Ls(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.serializer=e,this.userId=t}static fe(e,t){const n=t.uid||"";return new zu(e,n)}getOverlay(e,t){return $u(e).get(Uu(this.userId,t)).next((e=>e?Fu(this.serializer,e):null))}getOverlays(e,t){const n=Na();return Ki.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new _c(t,i);r.push(this.de(e,s))})),Ki.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(as(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push($u(e).J("collectionPathOverlayIndex",r))})),Ki.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Na(),i=as(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return $u(e).j("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Fu(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=Na();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return $u(e).X({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Fu(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}de(e,t){return $u(e).put(function(e,t,n){const[r,i,s]=Uu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:lu(e.le,n.mutation)}}(this.serializer,this.userId,t))}}function $u(e){return Ls(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){}_e(e,t){this.we(e,t),t.me()}we(e,t){if("nullValue"in e)this.ge(t,5);else if("booleanValue"in e)this.ge(t,10),t.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(t,15),t.ye(Xs(e.integerValue));else if("doubleValue"in e){const n=Xs(e.doubleValue);isNaN(n)?this.ge(t,13):(this.ge(t,15),ss(n)?t.ye(0):t.ye(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ge(t,20),"string"==typeof n?t.pe(n):(t.pe(`${n.seconds||""}`),t.ye(n.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,t),this.Te(t);else if("bytesValue"in e)this.ge(t,30),t.Ee(Ys(e.bytesValue)),this.Te(t);else if("referenceValue"in e)this.Ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ge(t,45),t.ye(n.latitude||0),t.ye(n.longitude||0)}else"mapValue"in e?bo(e)?this.ge(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Te(t)):"arrayValue"in e?(this.ve(e.arrayValue,t),this.Te(t)):oi()}Ie(e,t){this.ge(t,25),this.Pe(e,t)}Pe(e,t){t.pe(e)}Re(e,t){const n=e.fields||{};this.ge(t,55);for(const r of Object.keys(n))this.Ie(r,t),this.we(n[r],t)}ve(e,t){const n=e.values||[];this.ge(t,50);for(const r of n)this.we(r,t)}Ae(e,t){this.ge(t,37),Di.fromName(e).path.forEach((e=>{this.ge(t,60),this.Pe(e,t)}))}ge(e,t){e.ye(t)}Te(e){e.ye(2)}}function Gu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Hu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Gu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Ku.be=new Ku;class Wu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Se(n.value),n=t.next();this.De()}Ce(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xe(n.value),n=t.next();this.Ne()}ke(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Se(e);else if(e<2048)this.Se(960|e>>>6),this.Se(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Se(480|e>>>12),this.Se(128|63&e>>>6),this.Se(128|63&e);else{const e=t.codePointAt(0);this.Se(240|e>>>18),this.Se(128|63&e>>>12),this.Se(128|63&e>>>6),this.Se(128|63&e)}}this.De()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.xe(e);else if(e<2048)this.xe(960|e>>>6),this.xe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.xe(480|e>>>12),this.xe(128|63&e>>>6),this.xe(128|63&e);else{const e=t.codePointAt(0);this.xe(240|e>>>18),this.xe(128|63&e>>>12),this.xe(128|63&e>>>6),this.xe(128|63&e)}}this.Ne()}Oe(e){const t=this.$e(e),n=Hu(t);this.Fe(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Be(e){const t=this.$e(e),n=Hu(t);this.Fe(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Se(e){const t=255&e;0===t?(this.qe(0),this.qe(255)):255===t?(this.qe(255),this.qe(0)):this.qe(t)}xe(e){const t=255&e;0===t?(this.Ke(0),this.Ke(255)):255===t?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Qu{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class Ju{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class Xu{constructor(){this.Qe=new Wu,this.je=new Qu(this.Qe),this.ze=new Ju(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return 0===e?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}He(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Yu(this.indexId,this.documentKey,this.arrayValue,n)}}function Zu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=el(e.arrayValue,t.arrayValue),0!==n?n:(n=el(e.directionalValue,t.directionalValue),0!==n?n:Di.comparator(e.documentKey,t.documentKey)))}function el(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const t of e.filters){const e=t;e.isInequality()?this.Xe=e:this.Ye.push(e)}}Ze(e){ai(e.collectionGroup===this.collectionId);const t=Pi(e);if(void 0!==t&&!this.tn(t))return!1;const n=Li(e);let r=0,i=0;for(;r<n.length&&this.tn(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Xe){const e=n[r];if(!this.en(this.Xe,e)||!this.nn(this.Je[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Je.length||!this.nn(this.Je[i++],e))return!1}return!0}tn(e){for(const t of this.Ye)if(this.en(t,e))return!0;return!1}en(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}nn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(e){var t,n;if(ai(e instanceof Lo||e instanceof Mo),e instanceof Lo){if(e instanceof Jo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Lo.create(e.field,"==",t))))||[];return Mo.create(r,"or")}return e}const r=e.filters.map((e=>nl(e)));return Mo.create(r,e.op)}function rl(e){if(0===e.getFilters().length)return[];const t=al(nl(e));return ai(ol(t)),il(t)||sl(t)?[t]:t.getFilters()}function il(e){return e instanceof Lo}function sl(e){return e instanceof Mo&&Vo(e)}function ol(e){return il(e)||sl(e)||function(e){if(e instanceof Mo&&Uo(e)){for(const t of e.getFilters())if(!il(t)&&!sl(t))return!1;return!0}return!1}(e)}function al(e){if(ai(e instanceof Lo||e instanceof Mo),e instanceof Lo)return e;if(1===e.filters.length)return al(e.filters[0]);const t=e.filters.map((e=>al(e)));let n=Mo.create(t,e.op);return n=ll(n),ol(n)?n:(ai(n instanceof Mo),ai(Fo(n)),ai(n.filters.length>1),n.filters.reduce(((e,t)=>cl(e,t))))}function cl(e,t){let n;return ai(e instanceof Lo||e instanceof Mo),ai(t instanceof Lo||t instanceof Mo),n=e instanceof Lo?t instanceof Lo?function(e,t){return Mo.create([e,t],"and")}(e,t):ul(e,t):t instanceof Lo?ul(t,e):function(e,t){if(ai(e.filters.length>0&&t.filters.length>0),Fo(e)&&Fo(t))return zo(e,t.getFilters());const n=Uo(e)?e:t,r=Uo(e)?t:e,i=n.filters.map((e=>cl(e,r)));return Mo.create(i,"or")}(e,t),ll(n)}function ul(e,t){if(Fo(t))return zo(t,e.getFilters());{const n=t.filters.map((t=>cl(e,t)));return Mo.create(n,"or")}}function ll(e){if(ai(e instanceof Lo||e instanceof Mo),e instanceof Lo)return e;const t=e.getFilters();if(1===t.length)return ll(t[0]);if(jo(e))return e;const n=t.map((e=>ll(e))),r=[];return n.forEach((t=>{t instanceof Lo?r.push(t):t instanceof Mo&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Mo.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hl{constructor(){this.sn=new dl}addToCollectionParentIndex(e,t){return this.sn.add(t),Ki.resolve()}getCollectionParents(e,t){return Ki.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return Ki.resolve()}deleteFieldIndex(e,t){return Ki.resolve()}getDocumentsMatchingTarget(e,t){return Ki.resolve(null)}getIndexType(e,t){return Ki.resolve(0)}getFieldIndexes(e,t){return Ki.resolve([])}getNextCollectionGroupToUpdate(e){return Ki.resolve(null)}getMinOffset(e,t){return Ki.resolve(ji.min())}getMinOffsetFromCollectionGroup(e,t){return Ki.resolve(ji.min())}updateCollectionGroup(e,t,n){return Ki.resolve()}updateIndexEntries(e,t){return Ki.resolve()}}class dl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new qs(Ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new qs(Ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Uint8Array(0);class pl{constructor(e,t){this.user=e,this.databaseId=t,this.rn=new dl,this.on=new Sa((e=>ta(e)),((e,t)=>na(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.rn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.rn.add(t)}));const i={collectionId:n,parent:as(r)};return ml(e).put(i)}return Ki.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Si(t),""],!1,!0);return ml(e).j(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(ls(r.parent))}return n}))}addFieldIndex(e,t){const n=yl(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=vl(e);return i.next((e=>{n.put(Vu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=yl(e),r=vl(e),i=gl(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=gl(e);let r=!0;const i=new Map;return Ki.forEach(this.un(t),(t=>this.cn(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Ma();const r=[];return Ki.forEach(i,((i,s)=>{var o;ni("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${ta(t)}`);const a=function(e,t){const n=Pi(t);if(void 0===n)return null;for(const r of ia(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Li(t))for(const t of ia(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Li(t)){const t=0===i.kind?sa(e,i.fieldPath,e.startAt):oa(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Ro(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Li(t)){const t=0===i.kind?oa(e,i.fieldPath,e.endAt):sa(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Ro(n,r)}(s,i),h=this.an(i,s,u),d=this.an(i,s,l),f=this.hn(i,s,c),p=this.ln(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Ki.forEach(p,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=Di.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ki.resolve(null)}))}un(e){let t=this.on.get(e);return t||(t=0===e.filters.length?[e]:rl(Mo.create(e.filters,"and")).map((t=>ea(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.on.set(e,t),t)}ln(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.fn(t[l/c]):fl,h=this.dn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],s),f=o.map((t=>this.dn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}dn(e,t,n,r){const i=new Yu(e,Di.empty(),t,n);return r?i:i.He()}_n(e,t,n,r){const i=new Yu(e,Di.empty(),t,n);return r?i.He():i}cn(e,t){const n=new tl(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ze(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.un(t);return Ki.forEach(r,(t=>this.cn(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new qs(Ni.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}wn(e,t){const n=new Xu;for(const r of Li(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.We(r.kind);Ku.be._e(e,i)}return n.Ge()}fn(e){const t=new Xu;return Ku.be._e(e,t.We(0)),t.Ge()}mn(e,t){const n=new Xu;return Ku.be._e(po(this.databaseId,t),n.We(function(e){const t=Li(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Ge()}hn(e,t,n){if(null===n)return[];let r=[];r.push(new Xu);let i=0;for(const s of Li(e)){const e=n[i++];for(const n of r)if(this.gn(t,s.fieldPath)&&go(e))r=this.yn(r,s,e);else{const t=n.We(s.kind);Ku.be._e(e,t)}}return this.pn(r)}an(e,t,n){return this.hn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ge();return t}yn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Xu;n.seed(e.Ge()),Ku.be._e(s,n.We(t.kind)),i.push(n)}return i}gn(e,t){return!!e.filters.find((e=>e instanceof Lo&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=yl(e),r=vl(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return Ki.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Fi(t.sequenceNumber,new ji(Du(t.readTime),new Di(ls(t.documentKey)),t.largestBatchId)):Fi.empty(),r=e.fields.map((([e,t])=>new Mi(Ni.fromServerFormat(e),t)));return new Oi(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Ti(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=yl(e),i=vl(e);return this.In(e).next((e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ki.forEach(t,(t=>i.put(Vu(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ki.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ki.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ki.forEach(i,(n=>this.Tn(e,t,n).next((t=>{const i=this.En(r,n);return t.isEqual(i)?Ki.resolve():this.An(e,r,n,t,i)})))))))}))}Rn(e,t,n,r){return gl(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,r){return gl(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}Tn(e,t,n){const r=gl(e);let i=new qs(Zu);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},((e,r)=>{i=i.add(new Yu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}En(e,t){let n=new qs(Zu);const r=this.wn(t,e);if(null==r)return n;const i=Pi(t);if(null!=i){const s=e.data.field(i.fieldPath);if(go(s))for(const i of s.arrayValue.values||[])n=n.add(new Yu(t.indexId,e.key,this.fn(i),r))}else n=n.add(new Yu(t.indexId,e.key,fl,r));return n}An(e,t,n,r,i){ni("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=$s(s),c=$s(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=$s(o)):t?(i(a),a=$s(s)):(a=$s(s),c=$s(o))}}(r,i,Zu,(r=>{s.push(this.Rn(e,t,n,r))}),(r=>{s.push(this.vn(e,t,n,r))})),Ki.waitFor(s)}In(e){let t=1;return vl(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Zu(e,t))).filter(((e,t,n)=>!t||0!==Zu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Zu(s,e),i=Zu(s,t);if(0===n)r[0]=e.He();else if(n>0&&i<0)r.push(s),r.push(s.He());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.Pn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,fl,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,fl,[]];i.push(IDBKeyRange.bound(e,t))}return i}Pn(e,t){return Zu(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(wl)}getMinOffset(e,t){return Ki.mapArray(this.un(t),(t=>this.cn(e,t).next((e=>e||oi())))).next(wl)}}function ml(e){return Ls(e,"collectionParents")}function gl(e){return Ls(e,"indexEntries")}function yl(e){return Ls(e,"indexConfiguration")}function vl(e){return Ls(e,"indexState")}function wl(e){ai(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Bi(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ji(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bl{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new bl(e,bl.DEFAULT_COLLECTION_PERCENTILE,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{ai(1===a)})));const u=[];for(const l of n.mutations){const e=fs(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ki.waitFor(s).next((()=>u))}function Tl(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw oi();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bl.DEFAULT_COLLECTION_PERCENTILE=10,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bl.DEFAULT=new bl(41943040,bl.DEFAULT_COLLECTION_PERCENTILE,bl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bl.DISABLED=new bl(-1,0,0);class El{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.bn={}}static fe(e,t,n,r){ai(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new El(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return kl(e).X({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Al(e),s=kl(e);return s.add({}).next((o=>{ai("number"==typeof o);const a=new vc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>lu(e.le,t))),i=n.mutations.map((t=>lu(e.le,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new qs(((e,t)=>Ti(e.canonicalString(),t.canonicalString())));for(const e of r){const t=fs(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,ps))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.bn[o]=a.keys()})),Ki.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return kl(e).get(t).next((e=>e?(ai(e.userId===this.userId),Ou(this.serializer,e)):null))}Vn(e,t){return this.bn[t]?Ki.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.bn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return kl(e).X({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(ai(t.batchId>=n),i=Ou(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return kl(e).X({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return kl(e).j("userMutationsIndex",t).next((e=>e.map((e=>Ou(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ds(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Al(e).X({range:r},((n,r,s)=>{const[o,a,c]=n,u=ls(a);if(o===this.userId&&t.path.isEqual(u))return kl(e).get(c).next((e=>{if(!e)throw oi();ai(e.userId===this.userId),i.push(Ou(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qs(Ti);const r=[];return t.forEach((t=>{const i=ds(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Al(e).X({range:s},((e,r,i)=>{const[s,o,a]=e,c=ls(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Ki.waitFor(r).next((()=>this.Sn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=ds(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new qs(Ti);return Al(e).X({range:s},((e,t,i)=>{const[s,a,c]=e,u=ls(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Sn(e,o)))}Sn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(kl(e).get(t).next((e=>{if(null===e)throw oi();ai(e.userId===this.userId),n.push(Ou(this.serializer,e))})))})),Ki.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Il(e.at,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Dn(t.batchId)})),Ki.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ki.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Al(e).X({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=ls(e[1]);r.push(t)}else n.done()})).next((()=>{ai(0===r.length)}))}))}containsKey(e,t){return Sl(e,this.userId,t)}Cn(e){return Cl(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Sl(e,t,n){const r=ds(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Al(e).X({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function kl(e){return Ls(e,"mutations")}function Al(e){return Ls(e,"documentMutations")}function Cl(e){return Ls(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Rl(0)}static kn(){return new Rl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Mn(e).next((t=>{const n=new Rl(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Mn(e).next((e=>Ai.fromTimestamp(new ki(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Mn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Mn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r))))}addTargetData(e,t){return this.$n(e,t).next((()=>this.Mn(e).next((n=>(n.targetCount+=1,this.Fn(t,n),this.On(e,n))))))}updateTargetData(e,t){return this.$n(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Nl(e).delete(t.targetId))).next((()=>this.Mn(e))).next((t=>(ai(t.targetCount>0),t.targetCount-=1,this.On(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Nl(e).X(((s,o)=>{const a=Pu(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ki.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Nl(e).X(((e,n)=>{const r=Pu(n);t(r)}))}Mn(e){return Dl(e).get("targetGlobalKey").next((e=>(ai(null!==e),e)))}On(e,t){return Dl(e).put("targetGlobalKey",t)}$n(e,t){return Nl(e).put(Lu(this.serializer,t))}Fn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Mn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ta(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Nl(e).X({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Pu(n);na(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Ol(e);return t.forEach((t=>{const s=as(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ki.waitFor(r)}removeMatchingKeys(e,t,n){const r=Ol(e);return Ki.forEach(t,(t=>{const i=as(t.path);return Ki.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Ol(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ol(e);let i=Ma();return r.X({range:n,Y:!0},((e,t,n)=>{const r=ls(e[1]),s=new Di(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=as(t.path),r=IDBKeyRange.bound([n],[Si(n)],!1,!0);let i=0;return Ol(e).X({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}he(e,t){return Nl(e).get(t).next((e=>e?Pu(e):null))}}function Nl(e){return Ls(e,"targets")}function Dl(e){return Ls(e,"targetGlobal")}function Ol(e){return Ls(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl([e,t],[n,r]){const i=Ti(e,n);return 0===i?Ti(t,r):i}class Ll{constructor(e){this.Bn=e,this.buffer=new qs(Pl),this.Ln=0}qn(){return++this.Ln}Un(e){const t=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Pl(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ml{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Kn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return null!==this.Kn}Gn(e){ni("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ji(e)?ni("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await $i(e)}await this.Gn(3e5)}))}}class Fl{constructor(e,t){this.Qn=e,this.params=t}calculateTargetCount(e,t){return this.Qn.jn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ki.resolve(rs.ct);const n=new Ll(t);return this.Qn.forEachTarget(e,(e=>n.Un(e.sequenceNumber))).next((()=>this.Qn.zn(e,(e=>n.Un(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Qn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Qn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ni("LruGarbageCollector","Garbage collection skipped; disabled"),Ki.resolve(_l)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(ni("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_l):this.Wn(e,t)))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,t){let n,r,i,s,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(ni("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),ei()<=o["in"].DEBUG&&ni("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ki.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Ul(e,t){return new Fl(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.db=e,this.garbageCollector=Ul(this,t)}jn(e){const t=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Hn(e){let t=0;return this.zn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}zn(e,t){return this.Jn(e,((e,n)=>t(n)))}addReference(e,t,n){return jl(e,n)}removeReference(e,t,n){return jl(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return jl(e,t)}Yn(e,t){return function(e,t){let n=!1;return Cl(e).Z((r=>Sl(e,r,t).next((e=>(e&&(n=!0),Ki.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Jn(e,((s,o)=>{if(o<=t){const t=this.Yn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,Ai.min()),Ol(e).delete([0,as(s.path)]))))}));r.push(t)}})).next((()=>Ki.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return jl(e,t)}Jn(e,t){const n=Ol(e);let r,i=rs.ct;return n.X({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==rs.ct&&t(new Di(ls(r)),i),i=o,r=s):i=rs.ct})).next((()=>{i!==rs.ct&&t(new Di(ls(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function jl(e,t){return Ol(e).put(function(e,t){return{targetId:0,path:as(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.changes=new Sa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Co.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ki.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Gl(e).put(n)}removeEntry(e,t,n){return Gl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],xu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Xn(e,n))))}getEntry(e,t){let n=Co.newInvalidDocument(t);return Gl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Hl(t))},((e,r)=>{n=this.Zn(t,r)})).next((()=>n))}ts(e,t){let n={size:0,document:Co.newInvalidDocument(t)};return Gl(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Hl(t))},((e,r)=>{n={document:this.Zn(t,r),size:Tl(r)}})).next((()=>n))}getEntries(e,t){let n=Aa();return this.es(e,t,((e,t)=>{const r=this.Zn(e,t);n=n.insert(e,r)})).next((()=>n))}ns(e,t){let n=Aa(),r=new Vs(Di.comparator);return this.es(e,t,((e,t)=>{const i=this.Zn(e,t);n=n.insert(e,i),r=r.insert(e,Tl(t))})).next((()=>({documents:n,ss:r})))}es(e,t,n){if(t.isEmpty())return Ki.resolve();let r=new qs(Ql);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Hl(r.first()),Hl(r.last())),s=r.getIterator();let o=s.getNext();return Gl(e).X({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Di.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Ql(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(Hl(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),xu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gl(e).j(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=Aa();for(const i of e){const e=this.Zn(Di.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(ba(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Aa();const s=Wl(t,n),o=Wl(t,ji.max());return Gl(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Zn(Di.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new $l(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Kl(e).get("remoteDocumentGlobalKey").next((e=>(ai(!!e),e)))}Xn(e,t){return Kl(e).put("remoteDocumentGlobalKey",t)}Zn(e,t){if(t){const e=Cu(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ai.min()))return e}return Co.newInvalidDocument(e)}}function zl(e){return new ql(e)}class $l extends Bl{constructor(e,t){super(),this.rs=e,this.trackRemovals=t,this.os=new Sa((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new qs(((e,t)=>Ti(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.os.get(i);if(t.push(this.rs.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Ru(this.rs.serializer,s);r=r.add(i.path.popLast());const c=Tl(a);n+=c-o.size,t.push(this.rs.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Ru(this.rs.serializer,s.convertToNoDocument(Ai.min()));t.push(this.rs.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.rs.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.rs.updateMetadata(e,n)),Ki.waitFor(t)}getFromCache(e,t){return this.rs.ts(e,t).next((e=>(this.os.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.rs.ns(e,t).next((({documents:e,ss:t})=>(t.forEach(((t,n)=>{this.os.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Kl(e){return Ls(e,"remoteDocumentGlobal")}function Gl(e){return Ls(e,"remoteDocumentsV14")}function Hl(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Wl(e,t){const n=t.documentKey.path.toArray();return[e,xu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Ql(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Ti(n[s],r[s]),i)return i;return i=Ti(n.length,r.length),i||(i=Ti(n[n.length-2],r[r.length-2]),i||Ti(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Jl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&cc(n.mutation,e,Ks.empty(),ki.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ma()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ma()){const r=Na();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ra();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Na();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ma())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Aa();const s=Oa(),o=Oa();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof dc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),cc(o.mutation,t,o.mutation.getFieldMask(),ki.now())):s.set(t.key,Ks.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Jl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Oa();let r=new Vs(((e,t)=>e-t)),i=Ma();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Ks.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Ma()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Da();c.forEach((e=>{if(!i.has(e)){const r=oc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ki.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Di.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ki.resolve(Na());let o=-1,a=i;return s.next((t=>Ki.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ki.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ma()))).next((e=>({batchId:o,changes:xa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Di(t)).next((e=>{let t=Ra();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Ra();return this.indexManager.getCollectionParents(e,r).next((s=>Ki.forEach(s,(s=>{const o=function(e,t){return new aa(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Co.newInvalidDocument(r)))}));let n=Ra();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&cc(s.mutation,i,Ks.empty(),ki.now()),ba(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,t){return Ki.resolve(this.us.get(t))}saveBundleMetadata(e,t){var n;return this.us.set(t.id,{id:(n=t).id,version:n.version,createTime:Xc(n.createTime)}),Ki.resolve()}getNamedQuery(e,t){return Ki.resolve(this.cs.get(t))}saveNamedQuery(e,t){return this.cs.set(t.name,function(e){return{name:e.name,query:Mu(e.bundledQuery),readTime:Xc(e.readTime)}}(t)),Ki.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.overlays=new Vs(Di.comparator),this.hs=new Map}getOverlay(e,t){return Ki.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Na();return Ki.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.de(e,t,r)})),Ki.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hs.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hs.delete(n)),Ki.resolve()}getOverlaysForCollection(e,t,n){const r=Na(),i=t.length+1,s=new Di(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ki.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Vs(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Na(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Na(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ki.resolve(o)}de(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hs.get(r.largestBatchId).delete(n.key);this.hs.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new _c(t,n));let i=this.hs.get(t);void 0===i&&(i=Ma(),this.hs.set(t,i)),this.hs.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.ls=new qs(th.fs),this.ds=new qs(th._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,t){const n=new th(e,t);this.ls=this.ls.add(n),this.ds=this.ds.add(n)}ws(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.gs(new th(e,t))}ys(e,t){e.forEach((e=>this.removeReference(e,t)))}ps(e){const t=new Di(new Ri([])),n=new th(t,e),r=new th(t,e+1),i=[];return this.ds.forEachInRange([n,r],(e=>{this.gs(e),i.push(e.key)})),i}Is(){this.ls.forEach((e=>this.gs(e)))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const t=new Di(new Ri([])),n=new th(t,e),r=new th(t,e+1);let i=Ma();return this.ds.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new th(e,0),n=this.ls.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class th{constructor(e,t){this.key=e,this.Es=t}static fs(e,t){return Di.comparator(e.key,t.key)||Ti(e.Es,t.Es)}static _s(e,t){return Ti(e.Es,t.Es)||Di.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.As=1,this.Rs=new qs(th.fs)}checkEmpty(e){return Ki.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new vc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new th(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ki.resolve(s)}lookupMutationBatch(e,t){return Ki.resolve(this.vs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Ps(n),i=r<0?0:r;return Ki.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ki.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(e){return Ki.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new th(t,0),r=new th(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.vs(e.Es);i.push(t)})),Ki.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qs(Ti);return t.forEach((e=>{const t=new th(e,0),r=new th(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.Es)}))})),Ki.resolve(this.bs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Di.isDocumentKey(i)||(i=i.child(""));const s=new th(new Di(i),0);let o=new qs(Ti);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Es)),!0)}),s),Ki.resolve(this.bs(o))}bs(e){const t=[];return e.forEach((e=>{const n=this.vs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ai(0===this.Vs(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Ki.forEach(t.mutations,(r=>{const i=new th(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Dn(e){}containsKey(e,t){const n=new th(t,0),r=this.Rs.firstAfterOrEqual(n);return Ki.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ki.resolve()}Vs(e,t){return this.Ps(e)}Ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}vs(e){const t=this.Ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.Ss=e,this.docs=new Vs(Di.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ss(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ki.resolve(n?n.document.mutableCopy():Co.newInvalidDocument(t))}getEntries(e,t){let n=Aa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Co.newInvalidDocument(e))})),Ki.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Aa();const s=t.path,o=new Di(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Bi(Vi(o),n)<=0||(r.has(o.key)||ba(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ki.resolve(i)}getAllFromCollectionGroup(e,t,n,r){oi()}Ds(e,t){return Ki.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ih(this)}getSize(e){return Ki.resolve(this.size)}}class ih extends Bl{constructor(e){super(),this.rs=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.rs.addEntry(e,r)):this.rs.removeEntry(n)})),Ki.waitFor(t)}getFromCache(e,t){return this.rs.getEntry(e,t)}getAllFromCache(e,t){return this.rs.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.persistence=e,this.Cs=new Sa((e=>ta(e)),na),this.lastRemoteSnapshotVersion=Ai.min(),this.highestTargetId=0,this.xs=0,this.Ns=new eh,this.targetCount=0,this.ks=Rl.Nn()}forEachTarget(e,t){return this.Cs.forEach(((e,n)=>t(n))),Ki.resolve()}getLastRemoteSnapshotVersion(e){return Ki.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ki.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),Ki.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.xs&&(this.xs=t),Ki.resolve()}$n(e){this.Cs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ks=new Rl(t),this.highestTargetId=t),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,t){return this.$n(t),this.targetCount+=1,Ki.resolve()}updateTargetData(e,t){return this.$n(t),Ki.resolve()}removeTargetData(e,t){return this.Cs.delete(t.target),this.Ns.ps(t.targetId),this.targetCount-=1,Ki.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Cs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Cs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ki.waitFor(i).next((()=>r))}getTargetCount(e){return Ki.resolve(this.targetCount)}getTargetData(e,t){const n=this.Cs.get(t)||null;return Ki.resolve(n)}addMatchingKeys(e,t,n){return this.Ns.ws(t,n),Ki.resolve()}removeMatchingKeys(e,t,n){this.Ns.ys(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ki.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ns.ps(t),Ki.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ns.Ts(t);return Ki.resolve(n)}containsKey(e,t){return Ki.resolve(this.Ns.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t){this.Ms={},this.overlays={},this.Os=new rs(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new sh(this),this.indexManager=new hl,this.remoteDocumentCache=function(e){return new rh(e)}((e=>this.referenceDelegate.Bs(e))),this.serializer=new Au(t),this.Ls=new Yl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ms[e.toKey()];return n||(n=new nh(t,this.referenceDelegate),this.Ms[e.toKey()]=n),n}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,t,n){ni("MemoryPersistence","Starting transaction:",e);const r=new ah(this.Os.next());return this.referenceDelegate.qs(),n(r).next((e=>this.referenceDelegate.Us(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ks(e,t){return Ki.or(Object.values(this.Ms).map((n=>()=>n.containsKey(e,t))))}}class ah extends zi{constructor(e){super(),this.currentSequenceNumber=e}}class ch{constructor(e){this.persistence=e,this.Gs=new eh,this.Qs=null}static js(e){return new ch(e)}get zs(){if(this.Qs)return this.Qs;throw oi()}addReference(e,t,n){return this.Gs.addReference(n,t),this.zs.delete(n.toString()),Ki.resolve()}removeReference(e,t,n){return this.Gs.removeReference(n,t),this.zs.add(n.toString()),Ki.resolve()}markPotentiallyOrphaned(e,t){return this.zs.add(t.toString()),Ki.resolve()}removeTarget(e,t){this.Gs.ps(t.targetId).forEach((e=>this.zs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.zs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}qs(){this.Qs=new Set}Us(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ki.forEach(this.zs,(n=>{const r=Di.fromPath(n);return this.Ws(e,r).next((e=>{e||t.removeEntry(r,Ai.min())}))})).next((()=>(this.Qs=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ws(e,t).next((e=>{e?this.zs.delete(t.toString()):this.zs.add(t.toString())}))}Bs(e){return 0}Ws(e,t){return Ki.or([()=>Ki.resolve(this.Gs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ks(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.serializer=e}$(e,t,n,r){const i=new Gi("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hs,{unique:!0}),e.createObjectStore("documentMutations")}(e),lh(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ki.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),lh(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ai.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hs,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Ki.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Js(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(i))))),n<7&&r>=7&&(s=s.next((()=>this.Xs(i)))),n<8&&r>=8&&(s=s.next((()=>this.Zs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ti(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:ks});t.createIndex("collectionPathOverlayIndex",As,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Cs,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ms});t.createIndex("documentKeyIndex",gs),t.createIndex("collectionGroupIndex",ys)}(e))).next((()=>this.ei(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.ni(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Is}).createIndex("sequenceNumberIndex",Ts,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Es}).createIndex("documentKeyIndex",Ss,{unique:!1})}(e)))),s}Ys(e){let t=0;return e.store("remoteDocuments").X(((e,n)=>{t+=Tl(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Js(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>Ki.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next((n=>Ki.forEach(n,(n=>{ai(n.userId===t.userId);const r=Ou(this.serializer,n);return Il(e,t.userId,r).next((()=>{}))}))))}))))}Xs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.X(((n,i)=>{const s=new Ri(n),o=function(e){return[0,as(e)]}(s);r.push(t.get(o).next((n=>n?Ki.resolve():(n=>t.put({targetId:0,path:as(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Ki.waitFor(r)))}))}Zs(e,t){e.createObjectStore("collectionParents",{keyPath:bs});const n=t.store("collectionParents"),r=new dl,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:as(r)})}};return t.store("remoteDocuments").X({Y:!0},((e,t)=>{const n=new Ri(e);return i(n.popLast())})).next((()=>t.store("documentMutations").X({Y:!0},(([e,t,n],r)=>{const s=ls(t);return i(s.popLast())}))))}ti(e){const t=e.store("targets");return t.X(((e,n)=>{const r=Pu(n),i=Lu(this.serializer,r);return t.put(i)}))}ei(e,t){const n=t.store("remoteDocuments"),r=[];return n.X(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new Di(Ri.fromString(o.document.name).popFirst(5)):o.noDocument?Di.fromSegments(o.noDocument.path):o.unknownDocument?Di.fromSegments(o.unknownDocument.path):oi()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Ki.waitFor(r)))}ni(e,t){const n=t.store("mutations"),r=zl(this.serializer),i=new oh(ch.js,this.serializer.le);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Ma();Ou(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Ki.forEach(n,((e,n)=>{const s=new Xr(n),o=zu.fe(this.serializer,s),a=i.getIndexManager(s),c=El.fe(s,this.serializer,a,i.referenceDelegate);return new Xl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Ps(t,rs.ct),e).next()}))}))}}function lh(e){e.createObjectStore("targetDocuments",{keyPath:ws}).createIndex("documentTargetsIndex",_s,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",vs,{unique:!0}),e.createObjectStore("targetGlobal")}const hh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class dh{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.si=i,this.window=s,this.document=o,this.ii=c,this.ri=u,this.oi=l,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=e=>Promise.resolve(),!dh.D())throw new hi(li.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vl(this,r),this.fi=t+"main",this.serializer=new Au(a),this.di=new Hi(this.fi,this.oi,new uh(this.serializer)),this.Fs=new xl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zl(this.serializer),this.Ls=new ju,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&ri("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new hi(li.FAILED_PRECONDITION,hh);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Fs.getHighestSequenceNumber(e)))})).then((e=>{this.Os=new rs(e,this.ii)})).then((()=>{this.$s=!0})).catch((e=>(this.di&&this.di.close(),Promise.reject(e))))}pi(e){return this.li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget((async()=>{this.started&&await this.wi()})))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ph(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ii(e).next((e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable((()=>this.li(!1))))}))})).next((()=>this.Ti(e))).next((t=>this.isPrimary&&!t?this.Ei(e).next((()=>!1)):!!t&&this.Ai(e).next((()=>!0)))))).catch((e=>{if(Ji(e))return ni("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ni("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.si.enqueueRetryable((()=>this.li(e))),this.isPrimary=e}))}Ii(e){return fh(e).get("owner").next((e=>Ki.resolve(this.Ri(e))))}vi(e){return ph(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ls(e,"clientMetadata");return t.j().next((e=>{const n=this.Vi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ki.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this._i)for(const t of e)this._i.removeItem(this.Si(t.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.wi().then((()=>this.Pi())).then((()=>this.yi()))))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?Ki.resolve(!0):fh(e).get("owner").next((t=>{if(null!==t&&this.bi(t.leaseTimestampMs,5e3)&&!this.Di(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new hi(li.FAILED_PRECONDITION,hh);return!1}}return!(!this.networkEnabled||!this.inForeground)||ph(e).j().next((e=>void 0===this.Vi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&ni("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Ps(e,rs.ct);return this.Ei(t).next((()=>this.vi(t)))})),this.di.close(),this.ki()}Vi(e,t){return e.filter((e=>this.bi(e.updateTimeMs,t)&&!this.Di(e.clientId)))}Mi(){return this.runTransaction("getActiveClients","readonly",(e=>ph(e).j().next((e=>this.Vi(e,18e5).map((e=>e.clientId))))))}get started(){return this.$s}getMutationQueue(e,t){return El.fe(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new pl(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return zu.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,t,n){ni("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.oi)?Os:14===s?Ds:13===s?Ns:12===s?xs:11===s?Rs:void oi();var s;let o;return this.di.runTransaction(e,r,i,(r=>(o=new Ps(r,this.Os?this.Os.next():rs.ct),"readwrite-primary"===t?this.Ii(o).next((e=>!!e||this.Ti(o))).next((t=>{if(!t)throw ri(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable((()=>this.li(!1))),new hi(li.FAILED_PRECONDITION,qi);return n(o)})).next((e=>this.Ai(o).next((()=>e)))):this.Oi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Oi(e){return fh(e).get("owner").next((e=>{if(null!==e&&this.bi(e.leaseTimestampMs,5e3)&&!this.Di(e.ownerId)&&!this.Ri(e)&&!(this.ri||this.allowTabSynchronization&&e.allowTabSynchronization))throw new hi(li.FAILED_PRECONDITION,hh)}))}Ai(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fh(e).put("owner",t)}static D(){return Hi.D()}Ei(e){const t=fh(e);return t.get("owner").next((e=>this.Ri(e)?(ni("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ki.resolve()))}bi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ri(`Detected an update time that is in the future: ${e} > ${n}`),!1))}mi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ci=()=>{this.si.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.wi())))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground="visible"===this.document.visibilityState)}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ui=()=>{this.Ci();const e=/(?:Version|Mobile)\/1[456]/;(0,a.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Si(e)));return ni("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ri("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){ri("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch(e){}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function fh(e){return Ls(e,"owner")}function ph(e){return Ls(e,"clientMetadata")}function mh(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Fi=r}static Bi(e,t){let n=Ma(),r=Ma();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new gh(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.Li=!1}initialize(e,t){this.qi=e,this.indexManager=t,this.Li=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ui(e,t).next((i=>i||this.Ki(e,t,r,n))).next((n=>n||this.Gi(e,t)))}Ui(e,t){if(la(t))return Ki.resolve(null);let n=ma(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ya(t,null,"F"),n=ma(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ma(...r);return this.qi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Qi(t,r);return this.ji(t,s,i,n.readTime)?this.Ui(e,ya(t,null,"F")):this.zi(e,s,t,n)}))))})))))}Ki(e,t,n,r){return la(t)||r.isEqual(Ai.min())?this.Gi(e,t):this.qi.getDocuments(e,n).next((i=>{const s=this.Qi(t,i);return this.ji(t,s,n,r)?this.Gi(e,t):(ei()<=o["in"].DEBUG&&ni("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_a(t)),this.zi(e,s,t,Ui(r,-1)))}))}Qi(e,t){let n=new qs(Ta(e));return t.forEach(((t,r)=>{ba(e,r)&&(n=n.add(r))})),n}ji(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,t){return ei()<=o["in"].DEBUG&&ni("QueryEngine","Using full collection scan to execute query:",_a(t)),this.qi.getDocumentsMatchingQuery(e,t,ji.min())}zi(e,t,n,r){return this.qi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t,n,r){this.persistence=e,this.Wi=t,this.serializer=r,this.Hi=new Vs(Ti),this.Ji=new Sa((e=>ta(e)),na),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(n)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xl(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Hi)))}}function wh(e,t,n,r){return new vh(e,t,n,r)}async function _h(e,t){const n=ui(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Zi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Ma();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({tr:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function bh(e,t){const n=ui(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ki.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ai(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ma();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Ih(e){const t=ui(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Fs.getLastRemoteSnapshotVersion(e)))}function Th(e,t){const n=ui(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Fs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Fs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Ws.EMPTY_BYTE_STRING,Ai.min()).withLastLimboFreeSnapshotVersion(Ai.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Fs.updateTargetData(e,u))}));let a=Aa(),c=Ma();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Eh(e,s,t.documentUpdates).next((e=>{a=e.er,c=e.nr}))),!r.isEqual(Ai.min())){const t=n.Fs.getLastRemoteSnapshotVersion(e).next((t=>n.Fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ki.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Hi=i,e)))}function Eh(e,t,n){let r=Ma(),i=Ma();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Aa();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ai.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ni("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{er:r,nr:i}}))}function Sh(e,t){const n=ui(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function kh(e,t){const n=ui(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Fs.getTargetData(e,t).next((i=>i?(r=i,Ki.resolve(r)):n.Fs.allocateTargetId(e).next((i=>(r=new ku(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Hi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(e.targetId,e),n.Ji.set(t,e.targetId)),e}))}async function Ah(e,t,n){const r=ui(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Ji(e))throw e;ni("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function Ch(e,t,n){const r=ui(e);let i=Ai.min(),s=Ma();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=ui(e),i=r.Ji.get(n);return void 0!==i?Ki.resolve(r.Hi.get(i)):r.Fs.getTargetData(t,n)}(r,e,ma(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Wi.getDocumentsMatchingQuery(e,t,n?i:Ai.min(),n?s:Ma()))).next((e=>(Nh(r,Ia(t),e),{documents:e,sr:s})))))}function Rh(e,t){const n=ui(e),r=ui(n.Fs),i=n.Hi.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.he(e,t).next((e=>e?e.target:null))))}function xh(e,t){const n=ui(e),r=n.Yi.get(t)||Ai.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Xi.getAllFromCollectionGroup(e,t,Ui(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Nh(n,t,e),e)))}function Nh(e,t,n){let r=e.Yi.get(t)||Ai.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Yi.set(t,r)}async function Dh(e,t,n,r){const i=ui(e);let s=Ma(),o=Aa();for(const u of n){const e=t.ir(u.metadata.name);u.document&&(s=s.add(e));const n=t.rr(u);n.setReadTime(t.ur(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await kh(i,function(e){return ma(ua(Ri.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Eh(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Fs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Fs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.er,t.nr))).next((()=>t.er))))))}async function Oh(e,t,n=Ma()){const r=await kh(e,ma(Mu(t.bundledQuery))),i=ui(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Xc(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ls.saveNamedQuery(e,t);const o=r.withResumeToken(Ws.EMPTY_BYTE_STRING,s);return i.Hi=i.Hi.insert(o.targetId,o),i.Fs.updateTargetData(e,o).next((()=>i.Fs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Fs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ls.saveNamedQuery(e,t)))}))}function Ph(e,t){return`firestore_clients_${e}_${t}`}function Lh(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Mh(e,t){return`firestore_targets_${e}_${t}`}class Fh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static cr(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new hi(r.error.code,r.error.message))),s?new Fh(e,t,r.state,i):(ri("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Uh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static cr(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new hi(n.error.code,n.error.message))),i?new Uh(e,n.state,r):(ri("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cr(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Ua();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=os(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Vh(e,i):(ri("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class jh{constructor(e,t){this.clientId=e,this.onlineState=t}static cr(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new jh(t.clientId,t.onlineState):(ri("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Bh{constructor(){this.activeTargetIds=Ua()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qh{constructor(e,t,n,r,i){this.window=e,this.si=t,this.persistenceKey=n,this.dr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new Vs(Ti),this.started=!1,this.gr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.yr=Ph(this.persistenceKey,this.dr),this.pr=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.mr=this.mr.insert(this.dr,new Bh),this.Ir=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Ar=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Rr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const n of e){if(n===this.dr)continue;const e=this.getItem(Ph(this.persistenceKey,n));if(e){const t=Vh.cr(n,e);t&&(this.mr=this.mr.insert(t.clientId,t))}}this.vr();const t=this.storage.getItem(this.Ar);if(t){const e=this.Pr(t);e&&this.br(e)}for(const n of this.gr)this.wr(n);this.gr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let t=!1;return this.mr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,t,n){this.Sr(e,t,n),this.Dr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Mh(this.persistenceKey,e));if(n){const r=Uh.cr(e,n);r&&(t=r.state)}}return this.Cr.hr(e),this.vr(),t}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Mh(this.persistenceKey,e))}updateQueryState(e,t,n){this.Nr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Dr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ni("SharedClientState","READ",e,t),t}setItem(e,t){ni("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ni("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const t=e;if(t.storageArea===this.storage){if(ni("SharedClientState","EVENT",t.key,t.newValue),t.key===this.yr)return void ri("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ir.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.$r(e,null)}{const e=this.Fr(t.key,t.newValue);if(e)return this.$r(e.clientId,e)}}else if(this.Tr.test(t.key)){if(null!==t.newValue){const e=this.Br(t.key,t.newValue);if(e)return this.Lr(e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.qr(t.key,t.newValue);if(e)return this.Ur(e)}}else if(t.key===this.Ar){if(null!==t.newValue){const e=this.Pr(t.newValue);if(e)return this.br(e)}}else if(t.key===this.pr){const e=function(e){let t=rs.ct;if(null!=e)try{const n=JSON.parse(e);ai("number"==typeof n),t=n}catch(e){ri("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==rs.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Kr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Gr(e))))}}else this.gr.push(t)}))}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,t,n){const r=new Fh(this.currentUser,e,t,n),i=Lh(this.persistenceKey,this.currentUser,e);this.setItem(i,r.ar())}Dr(e){const t=Lh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}kr(e){const t={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(t))}Nr(e,t,n){const r=Mh(this.persistenceKey,e),i=new Uh(e,t,n);this.setItem(r,i.ar())}Mr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Ir.exec(e);return t?t[1]:null}Fr(e,t){const n=this.Or(e);return Vh.cr(n,t)}Br(e,t){const n=this.Tr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Fh.cr(new Xr(i),r,t)}qr(e,t){const n=this.Er.exec(e),r=Number(n[1]);return Uh.cr(r,t)}Pr(e){return jh.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);ni("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,t){const n=t?this.mr.insert(e,t):this.mr.remove(e),r=this.Vr(this.mr),i=this.Vr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.zr(s,o).then((()=>{this.mr=n}))}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let t=Ua();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class zh{constructor(){this.Wr=new Bh,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,t,n){this.Hr[e]=t}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Bh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{Jr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ni("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){ni("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh=null;function Hh(){return null===Gh?Gh=268435456+Math.round(2147483648*Math.random()):Gh++,"0x"+Gh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Wh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="WebChannelConnection";class Xh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.wo=t+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,t,n,r,i){const s=Hh(),o=this.Io(e,t);ni("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.To(a,r,i),this.Eo(e,o,a,n).then((t=>(ni("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ii("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Ao(e,t,n,r,i,s){return this.po(e,t,n,r,i)}To(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Io(e,t){const n=Wh[e];return`${this.wo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,t,n,r){const i=Hh();return new Promise(((s,o)=>{const a=new Hr;a.setWithCredentials(!0),a.listenOnce(qr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Br.NO_ERROR:const t=a.getResponseJson();ni(Jh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Br.TIMEOUT:ni(Jh,`RPC '${e}' ${i} timed out`),o(new hi(li.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const n=a.getStatus();if(ni(Jh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(li).indexOf(t)>=0?t:li.UNKNOWN}(t.status);o(new hi(e,t.message))}else o(new hi(li.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new hi(li.UNAVAILABLE,"Connection failed."));break;default:oi()}}finally{ni(Jh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);ni(Jh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=Hh(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Vr(),o=jr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Kr({})),this.To(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");ni(Jh,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new Qh({io:t=>{h?ni(Jh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(ni(Jh,`Opening RPC '${e}' stream ${r} transport.`),u.open(),l=!0),ni(Jh,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},ro:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Gr.EventType.OPEN,(()=>{h||ni(Jh,`RPC '${e}' stream ${r} transport opened.`)})),f(u,Gr.EventType.CLOSE,(()=>{h||(h=!0,ni(Jh,`RPC '${e}' stream ${r} transport closed`),d.fo())})),f(u,Gr.EventType.ERROR,(t=>{h||(h=!0,ii(Jh,`RPC '${e}' stream ${r} transport errored:`,t),d.fo(new hi(li.UNAVAILABLE,"The operation could not be completed")))})),f(u,Gr.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];ai(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ni(Jh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Ic[e];if(void 0!==t)return Sc(t)}(t),i=o.message;void 0===n&&(n=li.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,d.fo(new hi(n,i)),u.close()}else ni(Jh,`RPC '${e}' stream ${r} received:`,i),d._o(i)}})),f(o,zr.STAT_EVENT,(t=>{t.stat===$r.PROXY?ni(Jh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===$r.NOPROXY&&ni(Jh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.lo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){return"undefined"!=typeof window?window:null}function Zh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e){return new Gc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.vo=n,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const t=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),r=Math.max(0,t-n);r>0&&ni("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Do=Date.now(),e()))),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,n,r,i,s,o,a){this.si=e,this.Mo=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new td(e,t)}qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,(()=>this.jo())))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,t){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==e?this.Lo.reset():t&&t.code===li.RESOURCE_EXHAUSTED?(ri(t.toString()),ri("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):t&&t.code===li.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),t=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.$o===t&&this.Xo(e,n)}),(t=>{e((()=>{const e=new hi(li.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Zo(e)}))}))}Xo(e,t){const n=this.Yo(this.$o);this.stream=this.tu(e,t),this.stream.oo((()=>{n((()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener.oo())))})),this.stream.co((e=>{n((()=>this.Zo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Ko(){this.state=5,this.Lo.xo((async()=>{this.state=0,this.start()}))}Zo(e){return ni("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return t=>{this.si.enqueueAndForget((()=>this.$o===e?t():(ni("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rd extends nd{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}tu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.Lo.reset();const t=uu(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ai.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ai.min():t.readTime?Xc(t.readTime):Ai.min()}(e);return this.listener.eu(t,n)}nu(e){const t={};t.database=iu(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ra(r)?{documents:fu(e,r)}:{query:pu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Qc(e,t.resumeToken);const r=Hc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ai.min())>0){n.readTime=Wc(e,t.snapshotVersion.toTimestamp());const r=Hc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=gu(this.serializer,e);n&&(t.labels=n),this.zo(t)}su(e){const t={};t.database=iu(this.serializer),t.removeTarget=e,this.zo(t)}}class id extends nd{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ai(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const t=du(e.writeResults,e.commitTime),n=Xc(e.commitTime);return this.listener.uu(n,t)}return ai(!e.writeResults||0===e.writeResults.length),this.iu=!0,this.listener.cu()}au(){const e={};e.database=iu(this.serializer),this.zo(e)}ou(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>lu(this.serializer,e)))};this.zo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new hi(li.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,t,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.po(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===li.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new hi(li.UNKNOWN,e.toString())}))}Ao(e,t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Ao(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===li.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new hi(li.UNKNOWN,e.toString())}))}terminate(){this.hu=!0}}class od{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve()))))}pu(e){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,"Online"===e&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(ri(t),this.wu=!1):ni("OnlineStateTracker",t)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr((e=>{n.enqueueAndForget((async()=>{gd(this)&&(ni("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ui(e);t.Au.add(4),await ud(t),t.Pu.set("Unknown"),t.Au.delete(4),await cd(t)}(this))}))})),this.Pu=new od(n,r)}}async function cd(e){if(gd(e))for(const t of e.Ru)await t(!0)}async function ud(e){for(const t of e.Ru)await t(!1)}function ld(e,t){const n=ui(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),md(n)?pd(n):Pd(n).Uo()&&dd(n,t))}function hd(e,t){const n=ui(e),r=Pd(n);n.Eu.delete(t),r.Uo()&&fd(n,t),0===n.Eu.size&&(r.Uo()?r.Qo():gd(n)&&n.Pu.set("Unknown"))}function dd(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ai.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Pd(e).nu(t)}function fd(e,t){e.bu.Lt(t),Pd(e).su(t)}function pd(e){e.bu=new jc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Pd(e).start(),e.Pu.mu()}function md(e){return gd(e)&&!Pd(e).qo()&&e.Eu.size>0}function gd(e){return 0===ui(e).Au.size}function yd(e){e.bu=void 0}async function vd(e){e.Eu.forEach(((t,n)=>{dd(e,t)}))}async function wd(e,t){yd(e),md(e)?(e.Pu.pu(t),pd(e)):e.Pu.set("Unknown")}async function _d(e,t,n){if(e.Pu.set("Online"),t instanceof Uc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Eu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Eu.delete(r),e.bu.removeTarget(r))}(e,t)}catch(n){ni("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await bd(e,n)}else if(t instanceof Mc?e.bu.Wt(t):t instanceof Fc?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Ai.min()))try{const t=await Ih(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.bu.ue(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Eu.get(r);i&&e.Eu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Eu.get(t);if(!r)return;e.Eu.set(t,r.withResumeToken(Ws.EMPTY_BYTE_STRING,r.snapshotVersion)),fd(e,t);const i=new ku(r.target,t,n,r.sequenceNumber);dd(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ni("RemoteStore","Failed to raise snapshot:",t),await bd(e,t)}}async function bd(e,t,n){if(!Ji(t))throw t;e.Au.add(1),await ud(e),e.Pu.set("Offline"),n||(n=()=>Ih(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ni("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await cd(e)}))}function Id(e,t){return t().catch((n=>bd(e,n,t)))}async function Td(e){const t=ui(e),n=Ld(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;Ed(t);)try{const e=await Sh(t.localStore,r);if(null===e){0===t.Tu.length&&n.Qo();break}r=e.batchId,Sd(t,e)}catch(e){await bd(t,e)}kd(t)&&Ad(t)}function Ed(e){return gd(e)&&e.Tu.length<10}function Sd(e,t){e.Tu.push(t);const n=Ld(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function kd(e){return gd(e)&&!Ld(e).qo()&&e.Tu.length>0}function Ad(e){Ld(e).start()}async function Cd(e){Ld(e).au()}async function Rd(e){const t=Ld(e);for(const n of e.Tu)t.ou(n.mutations)}async function xd(e,t,n){const r=e.Tu.shift(),i=wc.from(r,t,n);await Id(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Td(e)}async function Nd(e,t){t&&Ld(e).ru&&await async function(e,t){if(n=t.code,Ec(n)&&n!==li.ABORTED){const n=e.Tu.shift();Ld(e).Go(),await Id(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Td(e)}var n}(e,t),kd(e)&&Ad(e)}async function Dd(e,t){const n=ui(e);n.asyncQueue.verifyOperationInProgress(),ni("RemoteStore","RemoteStore received new credentials");const r=gd(n);n.Au.add(3),await ud(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await cd(n)}async function Od(e,t){const n=ui(e);t?(n.Au.delete(2),await cd(n)):t||(n.Au.add(2),await ud(n),n.Pu.set("Unknown"))}function Pd(e){return e.Vu||(e.Vu=function(e,t,n){const r=ui(e);return r.lu(),new rd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{oo:vd.bind(null,e),co:wd.bind(null,e),eu:_d.bind(null,e)}),e.Ru.push((async t=>{t?(e.Vu.Go(),md(e)?pd(e):e.Pu.set("Unknown")):(await e.Vu.stop(),yd(e))}))),e.Vu}function Ld(e){return e.Su||(e.Su=function(e,t,n){const r=ui(e);return r.lu(),new id(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{oo:Cd.bind(null,e),co:Nd.bind(null,e),cu:Rd.bind(null,e),uu:xd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Go(),await Td(e)):(await e.Su.stop(),e.Tu.length>0&&(ni("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))}))),e.Su
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Md{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Md(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hi(li.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fd(e,t){if(ri("AsyncQueue",`${t}: ${e}`),Ji(e))return new hi(li.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Di.comparator(t.key,n.key):(e,t)=>Di.comparator(e.key,t.key),this.keyedMap=Ra(),this.sortedSet=new Vs(this.comparator)}static emptySet(e){return new Ud(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ud))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ud;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.Du=new Vs(Di.comparator)}track(e){const t=e.doc.key,n=this.Du.get(t);n?0!==e.type&&3===n.type?this.Du=this.Du.insert(t,e):3===e.type&&1!==n.type?this.Du=this.Du.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Du=this.Du.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Du=this.Du.remove(t):1===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):oi():this.Du=this.Du.insert(t,e)}Cu(){const e=[];return this.Du.inorderTraversal(((t,n)=>{e.push(n)})),e}}class jd{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new jd(e,t,Ud.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.xu=void 0,this.listeners=[]}}class qd{constructor(){this.queries=new Sa((e=>wa(e)),va),this.onlineState="Unknown",this.Nu=new Set}}async function zd(e,t){const n=ui(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Bd),i)try{s.xu=await n.onListen(r)}catch(e){const n=Fd(e,`Initialization of query '${_a(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&Hd(n)}async function $d(e,t){const n=ui(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Kd(e,t){const n=ui(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Mu(i)&&(r=!0);t.xu=i}}r&&Hd(n)}function Gd(e,t,n){const r=ui(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Hd(e){e.Nu.forEach((e=>{e.next()}))}class Wd{constructor(e,t,n){this.query=e,this.Ou=t,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=n||{}}Mu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new jd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.qu(e),t=!0),this.Fu=e,t}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let t=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),t=!0),t}Lu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Uu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Bu(e){if(e.docChanges.length>0)return!0;const t=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qu(e){e=jd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){this.Ku=e,this.byteLength=t}Gu(){return"metadata"in this.Ku}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.serializer=e}ir(e){return tu(this.serializer,e)}rr(e){return e.metadata.exists?au(this.serializer,e.document,!1):Co.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return Xc(e)}}class Xd{constructor(e,t,n){this.Qu=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Yd(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++t;const n=Ri.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}zu(e){const t=new Map,n=new Jd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.ir(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Ma()).add(e);t.set(n,r)}}return t}async complete(){const e=await Dh(this.localStore,new Jd(this.serializer),this.documents,this.Qu.id),t=this.zu(this.documents);for(const n of this.queries)await Oh(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function Yd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.key=e}}class ef{constructor(e){this.key=e}}class tf{constructor(e,t){this.query=e,this.Ju=t,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Ma(),this.mutatedKeys=Ma(),this.Zu=Ta(e),this.tc=new Ud(this.Zu)}get ec(){return this.Ju}nc(e,t){const n=t?t.sc:new Vd,r=t?t.tc:this.tc;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=ba(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ic(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Zu(l,a)>0||c&&this.Zu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tc:s,sc:n,ji:o,mutatedKeys:i}}ic(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oi()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Zu(e.doc,t.doc))),this.rc(n);const s=t?this.oc():[],o=0===this.Xu.size&&this.current?1:0,a=o!==this.Yu;return this.Yu=o,0!==i.length||a?{snapshot:new jd(this.query,e.tc,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),uc:s}:{uc:s}}ku(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Vd,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach((e=>this.Ju=this.Ju.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ju=this.Ju.delete(e))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Ma(),this.tc.forEach((e=>{this.cc(e.key)&&(this.Xu=this.Xu.add(e.key))}));const t=[];return e.forEach((e=>{this.Xu.has(e)||t.push(new ef(e))})),this.Xu.forEach((n=>{e.has(n)||t.push(new Zd(n))})),t}ac(e){this.Ju=e.sr,this.Xu=Ma();const t=this.nc(e.documents);return this.applyChanges(t,!0)}hc(){return jd.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}}class nf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rf{constructor(e){this.key=e,this.lc=!1}}class sf{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fc={},this.dc=new Sa((e=>wa(e)),va),this._c=new Map,this.wc=new Set,this.mc=new Vs(Di.comparator),this.gc=new Map,this.yc=new eh,this.Ic={},this.Tc=new Map,this.Ec=Rl.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return!0===this.Ac}}async function of(e,t){const n=Lf(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const e=await kh(n.localStore,ma(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await af(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&ld(n.remoteStore,e)}return i}async function af(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.nc(n);i.ji&&(i=await Ch(e.localStore,t.query,!1).then((({documents:e})=>t.view.nc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return _f(e,t.targetId,o.uc),o.snapshot}(e,t,n,r);const s=await Ch(e.localStore,t,!0),o=new tf(t,s.sr),a=o.nc(s.documents),c=Lc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);_f(e,n,u.uc);const l=new nf(t,n,o);return e.dc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function cf(e,t){const n=ui(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!va(e,t)))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ah(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),hd(n.remoteStore,r.targetId),vf(n,r.targetId)})).catch($i)):(vf(n,r.targetId),await Ah(n.localStore,r.targetId,!0))}async function uf(e,t,n){const r=Mf(e);try{const e=await function(e,t){const n=ui(e),r=ki.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ma());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Aa(),c=Ma();return n.Xi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=uc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new dc(e.key,t,Ao(t.value.mapValue),rc.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:xa(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ic[e.currentUser.toKey()];r||(r=new Vs(Ti)),r=r.insert(t,n),e.Ic[e.currentUser.toKey()]=r}(r,e.batchId,n),await Tf(r,e.changes),await Td(r.remoteStore)}catch(e){const t=Fd(e,"Failed to persist write");n.reject(t)}}async function lf(e,t){const n=ui(e);try{const e=await Th(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.gc.get(t);r&&(ai(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.lc=!0:e.modifiedDocuments.size>0?ai(r.lc):e.removedDocuments.size>0&&(ai(r.lc),r.lc=!1))})),await Tf(n,e,t)}catch(e){await $i(e)}}function hf(e,t,n){const r=ui(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.dc.forEach(((n,r)=>{const i=r.view.ku(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ui(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.ku(t)&&(r=!0)})),r&&Hd(n)}(r.eventManager,t),e.length&&r.fc.eu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function df(e,t,n){const r=ui(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let e=new Vs(Di.comparator);e=e.insert(s,Co.newNoDocument(s,Ai.min()));const n=Ma().add(s),i=new Pc(Ai.min(),new Map,new Vs(Ti),e,n);await lf(r,i),r.mc=r.mc.remove(s),r.gc.delete(t),If(r)}else await Ah(r.localStore,t,!1).then((()=>vf(r,t,n))).catch($i)}async function ff(e,t){const n=ui(e),r=t.batch.batchId;try{const e=await bh(n.localStore,t);yf(n,r,null),gf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tf(n,e)}catch(e){await $i(e)}}async function pf(e,t,n){const r=ui(e);try{const e=await function(e,t){const n=ui(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ai(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);yf(r,t,n),gf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Tf(r,e)}catch(n){await $i(n)}}async function mf(e,t){const n=ui(e);gd(n.remoteStore)||ni("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=ui(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Tc.get(e)||[];r.push(t),n.Tc.set(e,r)}catch(e){const n=Fd(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function gf(e,t){(e.Tc.get(t)||[]).forEach((e=>{e.resolve()})),e.Tc.delete(t)}function yf(e,t,n){const r=ui(e);let i=r.Ic[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function vf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach((t=>{e.yc.containsKey(t)||wf(e,t)}))}function wf(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);null!==n&&(hd(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),If(e))}function _f(e,t,n){for(const r of n)r instanceof Zd?(e.yc.addReference(r.key,t),bf(e,r)):r instanceof ef?(ni("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||wf(e,r.key)):oi()}function bf(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ni("SyncEngine","New document in limbo: "+n),e.wc.add(r),If(e))}function If(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new Di(Ri.fromString(t)),r=e.Ec.next();e.gc.set(r,new rf(n)),e.mc=e.mc.insert(n,r),ld(e.remoteStore,new ku(ma(ua(n.path)),r,"TargetPurposeLimboResolution",rs.ct))}}async function Tf(e,t,n){const r=ui(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=gh.Bi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.fc.eu(i),await async function(e,t){const n=ui(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ki.forEach(t,(t=>Ki.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ki.forEach(t.Fi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Ji(e))throw e;ni("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Hi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Hi=n.Hi.insert(e,i)}}}(r.localStore,s))}async function Ef(e,t){const n=ui(e);if(!n.currentUser.isEqual(t)){ni("SyncEngine","User change. New user:",t.toKey());const e=await _h(n.localStore,t);n.currentUser=t,function(e,t){e.Tc.forEach((e=>{e.forEach((e=>{e.reject(new hi(li.CANCELLED,t))}))})),e.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Tf(n,e.tr)}}function Sf(e,t){const n=ui(e),r=n.gc.get(t);if(r&&r.lc)return Ma().add(r.key);{let e=Ma();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.dc.get(t);e=e.unionWith(r.view.ec)}return e}}async function kf(e,t){const n=ui(e),r=await Ch(n.localStore,t.query,!0),i=t.view.ac(r);return n.isPrimaryClient&&_f(n,t.targetId,i.uc),i}async function Af(e,t){const n=ui(e);return xh(n.localStore,t).then((e=>Tf(n,e)))}async function Cf(e,t,n,r){const i=ui(e),s=await function(e,t){const n=ui(e),r=ui(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Vn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Ki.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Td(i.remoteStore):"acknowledged"===n||"rejected"===n?(yf(i,t,r||null),gf(i,t),function(e,t){ui(ui(e).mutationQueue).Dn(t)}(i.localStore,t)):oi(),await Tf(i,s)):ni("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Rf(e,t){const n=ui(e);if(Lf(n),Mf(n),!0===t&&!0!==n.Ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await xf(n,e.toArray());n.Ac=!0,await Od(n.remoteStore,!0);for(const r of t)ld(n.remoteStore,r)}else if(!1===t&&!1!==n.Ac){const e=[];let t=Promise.resolve();n._c.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(vf(n,i),Ah(n.localStore,i,!0)))),hd(n.remoteStore,i)})),await t,await xf(n,e),function(e){const t=ui(e);t.gc.forEach(((e,n)=>{hd(t.remoteStore,n)})),t.yc.Is(),t.gc=new Map,t.mc=new Vs(Di.comparator)}(n),n.Ac=!1,await Od(n.remoteStore,!1)}}async function xf(e,t,n){const r=ui(e),i=[],s=[];for(const o of t){let e;const t=r._c.get(o);if(t&&0!==t.length){e=await kh(r.localStore,ma(t[0]));for(const e of t){const t=r.dc.get(e),n=await kf(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Rh(r.localStore,o);e=await kh(r.localStore,t),await af(r,Nf(t),o,!1,e.resumeToken)}i.push(e)}return r.fc.eu(s),i}function Nf(e){return ca(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Df(e){const t=ui(e);return ui(ui(t.localStore).persistence).Mi()}async function Of(e,t,n,r){const i=ui(e);if(i.Ac)return void ni("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await xh(i.localStore,Ia(s[0])),r=Pc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Ws.EMPTY_BYTE_STRING);await Tf(i,e,r);break}case"rejected":await Ah(i.localStore,t,!0),vf(i,t,r);break;default:oi()}}async function Pf(e,t,n){const r=Lf(e);if(r.Ac){for(const e of t){if(r._c.has(e)){ni("SyncEngine","Adding an already active target "+e);continue}const t=await Rh(r.localStore,e),n=await kh(r.localStore,t);await af(r,Nf(t),n.targetId,!1,n.resumeToken),ld(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await Ah(r.localStore,e,!1).then((()=>{hd(r.remoteStore,e),vf(r,e)})).catch($i)}}function Lf(e){const t=ui(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=lf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=df.bind(null,t),t.fc.eu=Kd.bind(null,t.eventManager),t.fc.vc=Gd.bind(null,t.eventManager),t}function Mf(e){const t=ui(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ff.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pf.bind(null,t),t}function Ff(e,t,n){const r=ui(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=ui(e),r=Xc(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ls.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Yd(r));const i=new Xd(r,e.localStore,t.serializer);let s=await t.Pc();for(;s;){const e=await i.ju(s);e&&n._updateProgress(e),s=await t.Pc()}const o=await i.complete();return await Tf(e,o.Hu,void 0),await function(e,t){const n=ui(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ls.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Wu)}catch(e){return ii("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Uf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ed(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return wh(this.persistence,new yh,e.initialUser,this.serializer)}createPersistence(e){return new oh(ch.js,this.serializer)}createSharedClientState(e){return new zh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vf extends Uf{constructor(e,t,n){super(),this.bc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await Mf(this.bc.syncEngine),await Td(this.bc.remoteStore),await this.persistence.pi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return wh(this.persistence,new yh,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ml(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new ns(t,this.persistence);return new ts(e.asyncQueue,n)}createPersistence(e){const t=mh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?bl.withCacheSize(this.cacheSizeBytes):bl.DEFAULT;return new dh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Yh(),Zh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new zh}}class jf extends Vf{constructor(e,t){super(e,t,!1),this.bc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.bc.syncEngine;this.sharedClientState instanceof qh&&(this.sharedClientState.syncEngine={Qr:Cf.bind(null,t),jr:Of.bind(null,t),zr:Pf.bind(null,t),Mi:Df.bind(null,t),Gr:Af.bind(null,t)},await this.sharedClientState.start()),await this.persistence.pi((async e=>{await Rf(this.bc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Yh();if(!qh.D(t))throw new hi(li.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=mh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new qh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Bf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>hf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ef.bind(null,this.syncEngine),await Od(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qd}createDatastore(e){const t=ed(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Xh(r));var r;return function(e,t,n,r){return new sd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>hf(this.syncEngine,e,0),s=Kh.D()?new Kh:new $h,new ad(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new sf(e,t,n,r,i,s);return o&&(a.Ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ui(e);ni("RemoteStore","RemoteStore shutting down."),t.Au.add(5),await ud(t),t.vu.shutdown(),t.Pu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):ri("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t){this.Dc=e,this.serializer=t,this.metadata=new di,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then((e=>{e&&e.Gu()?this.metadata.resolve(e.Ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Ku)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){const e=await this.Nc();if(null===e)return null;const t=this.Cc.decode(e),n=Number(t);isNaN(n)&&this.kc(`length string (${t}) is not valid number`);const r=await this.Mc(n);return new Qd(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Nc(){for(;this.Oc()<0;)if(await this.$c())break;if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");const t=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}kc(e){throw this.Dc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Dc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new hi(li.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=ui(e),r=iu(n.serializer)+"/documents",i={documents:t.map((e=>eu(n.serializer,e)))},s=await n.Ao("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=cu(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());ai(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new gc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Di.fromPath(t);this.mutations.push(new yc(n,this.precondition(n)))})),await async function(e,t){const n=ui(e),r=iu(n.serializer)+"/documents",i={writes:t.map((e=>lu(n.serializer,e)))};await n.po("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw oi();t=Ai.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new hi(li.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ai.min())?rc.exists(!1):rc.updateTime(t):rc.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ai.min()))throw new hi(li.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return rc.updateTime(t)}return rc.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Fc=n.maxAttempts,this.Lo=new td(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo((async()=>{const e=new Kf(this.datastore),t=this.Lc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.qc(e)}))))})).catch((e=>{this.qc(e)}))}))}Lc(e){try{const t=this.updateFunction(e);return!is(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Bc(),Promise.resolve())))):this.deferred.reject(e)}Uc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Ec(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Xr.UNAUTHENTICATED,this.clientId=Ii.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ni("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ni("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new hi(li.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Fd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress(),ni("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await _h(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Qf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Xf(e);ni("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Dd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Dd(t.remoteStore,n))),e._onlineComponents=t}function Jf(e){return"FirebaseError"===e.name?e.code===li.FAILED_PRECONDITION||e.code===li.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Xf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ni("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Jf(n))throw n;ii("Error using user provided cache. Falling back to memory cache: "+n),await Wf(e,new Uf)}}else ni("FirestoreClient","Using default OfflineComponentProvider"),await Wf(e,new Uf);return e._offlineComponents}async function Yf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ni("FirestoreClient","Using user provided OnlineComponentProvider"),await Qf(e,e._uninitializedComponentsProvider._online)):(ni("FirestoreClient","Using default OnlineComponentProvider"),await Qf(e,new Bf))),e._onlineComponents}function Zf(e){return Xf(e).then((e=>e.persistence))}function ep(e){return Xf(e).then((e=>e.localStore))}function tp(e){return Yf(e).then((e=>e.remoteStore))}function np(e){return Yf(e).then((e=>e.syncEngine))}function rp(e){return Yf(e).then((e=>e.datastore))}async function ip(e){const t=await Yf(e),n=t.eventManager;return n.onListen=of.bind(null,t.syncEngine),n.onUnlisten=cf.bind(null,t.syncEngine),n}function sp(e){return e.asyncQueue.enqueue((async()=>{const t=await Zf(e),n=await tp(e);return t.setNetworkEnabled(!0),function(e){const t=ui(e);return t.Au.delete(0),cd(t)}(n)}))}function op(e){return e.asyncQueue.enqueue((async()=>{const t=await Zf(e),n=await tp(e);return t.setNetworkEnabled(!1),async function(e){const t=ui(e);t.Au.add(0),await ud(t),t.Pu.set("Offline")}(n)}))}function ap(e,t){const n=new di;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=ui(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new hi(li.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Fd(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await ep(e),t,n))),n.promise}function cp(e,t,n={}){const r=new di;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new zf({next:s=>{t.enqueueAndForget((()=>$d(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new hi(li.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new hi(li.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Wd(ua(n.path),s,{includeMetadataChanges:!0,Uu:!0});return zd(e,o)}(await ip(e),e.asyncQueue,t,n,r))),r.promise}function up(e,t){const n=new di;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Ch(e,t,!0),i=new tf(t,r.sr),s=i.nc(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Fd(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await ep(e),t,n))),n.promise}function lp(e,t,n={}){const r=new di;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new zf({next:n=>{t.enqueueAndForget((()=>$d(e,o))),n.fromCache&&"server"===r.source?i.reject(new hi(li.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Wd(n,s,{includeMetadataChanges:!0,Uu:!0});return zd(e,o)}(await ip(e),e.asyncQueue,t,n,r))),r.promise}function hp(e,t){const n=new zf(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){ui(e).Nu.add(t),t.next()}(await ip(e),n))),()=>{n.Sc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){ui(e).Nu.delete(t)}(await ip(e),n)))}}function dp(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?Cc().encode(e):e,function(e,t){return new $f(e,t)}(function(e,t){if(e instanceof Uint8Array)return qf(e,t);if(e instanceof ArrayBuffer)return qf(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,ed(t));e.asyncQueue.enqueueAndForget((async()=>{Ff(await np(e),i,r)}))}function fp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=ui(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ls.getNamedQuery(e,t)))}(await ep(e),t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(e,t,n){if(!n)throw new hi(li.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gp(e,t,n,r){if(!0===t&&!0===r)throw new hi(li.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yp(e){if(!Di.isDocumentKey(e))throw new hi(li.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vp(e){if(Di.isDocumentKey(e))throw new hi(li.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":oi()}function _p(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new hi(li.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wp(e);throw new hi(li.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function bp(e,t){if(t<=0)throw new hi(li.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new hi(li.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new hi(li.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling||void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new hi(li.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new hi(li.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ip(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new pi;switch(e.type){case"firstParty":return new vi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new hi(li.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pp.get(e);t&&(ni("ComponentProvider","Removing Datastore"),pp.delete(e),t.terminate())}(this),Promise.resolve()}}function Ep(e,t,n,r={}){var i;const s=(e=_p(e,Tp))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&ii("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Xr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new hi(li.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Xr(s)}e._authCredentials=new mi(new fi(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ap(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sp(this.firestore,e,this._key)}}class kp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new kp(this.firestore,e,this._query)}}class Ap extends kp{constructor(e,t,n){super(e,t,ua(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sp(this.firestore,null,new Di(e))}withConverter(e){return new Ap(this.firestore,e,this._path)}}function Cp(e,t,...n){if(e=(0,a.m9)(e),mp("collection","path",t),e instanceof Tp){const r=Ri.fromString(t,...n);return vp(r),new Ap(e,null,r)}{if(!(e instanceof Sp||e instanceof Ap))throw new hi(li.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ri.fromString(t,...n));return vp(r),new Ap(e.firestore,null,r)}}function Rp(e,t){if(e=_p(e,Tp),mp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new hi(li.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new kp(e,null,function(e){return new aa(Ri.emptyPath(),e)}(t))}function xp(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Ii.A()),mp("doc","path",t),e instanceof Tp){const r=Ri.fromString(t,...n);return yp(r),new Sp(e,null,new Di(r))}{if(!(e instanceof Sp||e instanceof Ap))throw new hi(li.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ri.fromString(t,...n));return yp(r),new Sp(e.firestore,e instanceof Ap?e.converter:null,new Di(r))}}function Np(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),(e instanceof Sp||e instanceof Ap)&&(t instanceof Sp||t instanceof Ap)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Dp(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),e instanceof kp&&t instanceof kp&&e.firestore===t.firestore&&va(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Op{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new td(this,"async_queue_retry"),this.Yc=()=>{const e=Zh();e&&ni("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Lo.ko()};const e=Zh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=Zh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise((()=>{}));const t=new di;return this.Zc((()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Gc.push(e),this.ta())))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Ji(e))throw e;ni("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo((()=>this.ta()))}}Zc(e){const t=this.Kc.then((()=>(this.Wc=!0,e().catch((e=>{this.zc=e,this.Wc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ri("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Wc=!1,e))))));return this.Kc=t,t}enqueueAfterDelay(e,t,n){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const r=Md.createAndSchedule(this,e,t,n,(e=>this.ea(e)));return this.jc.push(r),r}Xc(){this.zc&&oi()}verifyOperationInProgress(){}async na(){let e;do{e=this.Kc,await e}while(e!==this.Kc)}sa(e){for(const t of this.jc)if(t.timerId===e)return!0;return!1}ia(e){return this.na().then((()=>{this.jc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.jc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.na()}))}ra(e){this.Jc.push(e)}ea(e){const t=this.jc.indexOf(e);this.jc.splice(t,1)}}function Pp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Lp{constructor(){this._progressObserver={},this._taskCompletionResolver=new di,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=-1;class Fp extends Tp{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Op,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vp(this),this._firestoreClient.terminate()}}function Up(e){return e._firestoreClient||Vp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Vp(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new no(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Hf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function jp(e,t){Qp(e=_p(e,Fp));const n=Up(e);if(n._uninitializedComponentsProvider)throw new hi(li.FAILED_PRECONDITION,"SDK cache is already specified.");ii("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new Bf;return qp(n,i,new Vf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Bp(e){Qp(e=_p(e,Fp));const t=Up(e);if(t._uninitializedComponentsProvider)throw new hi(li.FAILED_PRECONDITION,"SDK cache is already specified.");ii("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new Bf;return qp(t,r,new jf(r,n.cacheSizeBytes))}function qp(e,t,n){const r=new di;return e.asyncQueue.enqueue((async()=>{try{await Wf(e,n),await Qf(e,t),r.resolve()}catch(e){const n=e;if(!Jf(n))throw n;ii("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}})).then((()=>r.promise))}function zp(e){if(e._initialized&&!e._terminated)throw new hi(li.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new di;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Hi.D())return Promise.resolve();const t=e+"main";await Hi.delete(t)}(mh(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function $p(e){return function(e){const t=new di;return e.asyncQueue.enqueueAndForget((async()=>mf(await np(e),t))),t.promise}(Up(e=_p(e,Fp)))}function Kp(e){return sp(Up(e=_p(e,Fp)))}function Gp(e){return op(Up(e=_p(e,Fp)))}function Hp(e,t){const n=Up(e=_p(e,Fp)),r=new Lp;return dp(n,e._databaseId,t,r),r}function Wp(e,t){return fp(Up(e=_p(e,Fp)),t).then((t=>t?new kp(e,null,t.query):null))}function Qp(e){if(e._initialized||e._terminated)throw new hi(li.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jp(Ws.fromBase64String(e))}catch(e){throw new hi(li.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Jp(Ws.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new hi(li.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ni(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new hi(li.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new hi(li.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ti(this._lat,e._lat)||Ti(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=/^__.*__$/;class tm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new dc(e,this.data,this.fieldMask,t,this.fieldTransforms):new hc(e,this.data,t,this.fieldTransforms)}}class nm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new dc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oi()}}class im{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.la(e),r}fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Em(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(0===e.length)throw this._a("Document fields must not be empty");if(rm(this.ua)&&em.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class sm{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ed(e)}ga(e,t,n,r=!1){return new im({ua:e,methodName:t,ma:n,path:Ni.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function om(e){const t=e._freezeSettings(),n=ed(e._databaseId);return new sm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function am(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);_m("Data must be an object, but it was:",o,r);const a=vm(r,o);let c,u;if(s.merge)c=new Ks(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=bm(t,r,n);if(!o.contains(i))throw new hi(li.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Sm(e,i)||e.push(i)}c=new Ks(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new tm(new ko(a),c,u)}class cm extends Yp{_toFieldTransform(e){if(2!==e.ua)throw 1===e.ua?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cm}}function um(e,t,n){return new im({ua:3,ma:t.settings.ma,methodName:e._methodName,ha:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class lm extends Yp{_toFieldTransform(e){return new ec(e.path,new Ga)}isEqual(e){return e instanceof lm}}class hm extends Yp{constructor(e,t){super(e),this.ya=t}_toFieldTransform(e){const t=um(this,e,!0),n=this.ya.map((e=>ym(e,t))),r=new Ha(n);return new ec(e.path,r)}isEqual(e){return this===e}}class dm extends Yp{constructor(e,t){super(e),this.ya=t}_toFieldTransform(e){const t=um(this,e,!0),n=this.ya.map((e=>ym(e,t))),r=new Qa(n);return new ec(e.path,r)}isEqual(e){return this===e}}class fm extends Yp{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=new Xa(e.serializer,Ba(e.serializer,this.pa));return new ec(e.path,t)}isEqual(e){return this===e}}function pm(e,t,n,r){const i=e.ga(1,t,n);_m("Data must be an object, but it was:",i,r);const s=[],o=ko.empty();Fs(r,((e,r)=>{const c=Tm(t,e,n);r=(0,a.m9)(r);const u=i.fa(c);if(r instanceof cm)s.push(c);else{const e=ym(r,u);null!=e&&(s.push(c),o.set(c,e))}}));const c=new Ks(s);return new nm(o,c,i.fieldTransforms)}function mm(e,t,n,r,i,s){const o=e.ga(1,t,n),c=[bm(t,r,n)],u=[i];if(s.length%2!=0)throw new hi(li.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(bm(t,s[a])),u.push(s[a+1]);const l=[],h=ko.empty();for(let f=c.length-1;f>=0;--f)if(!Sm(l,c[f])){const e=c[f];let t=u[f];t=(0,a.m9)(t);const n=o.fa(e);if(t instanceof cm)l.push(e);else{const r=ym(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new Ks(l);return new nm(h,d,o.fieldTransforms)}function gm(e,t,n,r=!1){return ym(n,e.ga(r?4:3,t))}function ym(e,t){if(wm(e=(0,a.m9)(e)))return _m("Unsupported field value:",t,e),vm(e,t);if(e instanceof Yp)return function(e,t){if(!rm(t.ua))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&4!==t.ua)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ym(i,t.da(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ba(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ki.fromDate(e);return{timestampValue:Wc(t.serializer,n)}}if(e instanceof ki){const n=new ki(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wc(t.serializer,n)}}if(e instanceof Zp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Jp)return{bytesValue:Qc(t.serializer,e._byteString)};if(e instanceof Sp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${wp(e)}`)}(e,t)}function vm(e,t){const n={};return Us(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fs(e,((e,r)=>{const i=ym(r,t.aa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function wm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ki||e instanceof Zp||e instanceof Jp||e instanceof Sp||e instanceof Yp)}function _m(e,t,n){if(!wm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=wp(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function bm(e,t,n){if((t=(0,a.m9)(t))instanceof Xp)return t._internalPath;if("string"==typeof t)return Tm(e,t);throw Em("Field path arguments must be of type string or ",e,!1,void 0,n)}const Im=new RegExp("[~\\*/\\[\\]]");function Tm(e,t,n){if(t.search(Im)>=0)throw Em(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Xp(...t.split("."))._internalPath}catch(r){throw Em(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Em(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new hi(li.INVALID_ARGUMENT,a+e+c)}function Sm(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Sp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Am(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Am extends km{data(){return super.data()}}function Cm(e,t){return"string"==typeof t?Tm(e,t):t instanceof Xp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new hi(li.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xm{}class Nm extends xm{}function Dm(e,t,...n){let r=[];t instanceof xm&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Lm)).length,n=e.filter((e=>e instanceof Om)).length;if(t>1||t>0&&n>0)throw new hi(li.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Om extends Nm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Om(e,t,n)}_apply(e){const t=this._parse(e);return Jm(e._query,t),new kp(e.firestore,e.converter,ga(e._query,t))}_parse(e){const t=om(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new hi(li.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Qm(o,s);const t=[];for(const n of o)t.push(Wm(r,e,n));a={arrayValue:{values:t}}}else a=Wm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Qm(o,s),a=gm(n,t,o,"in"===s||"not-in"===s);return Lo.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Pm(e,t,n){const r=t,i=Cm("where",e);return Om._create(i,r,n)}class Lm extends xm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lm(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Mo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Jm(n,i),n=ga(n,i)}(e._query,t),new kp(e.firestore,e.converter,ga(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Mm extends Nm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Mm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new hi(li.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new hi(li.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Do(t,n);return function(e,t){if(null===ha(e)){const n=da(e);null!==n&&Xm(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new kp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new aa(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Fm(e,t="asc"){const n=t,r=Cm("orderBy",e);return Mm._create(r,n)}class Um extends Nm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Um(e,t,n)}_apply(e){return new kp(e.firestore,e.converter,ya(e._query,this._limit,this._limitType))}}function Vm(e){return bp("limit",e),Um._create("limit",e,"F")}function jm(e){return bp("limitToLast",e),Um._create("limitToLast",e,"L")}class Bm extends Nm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Bm(e,t,n)}_apply(e){const t=Hm(e,this.type,this._docOrFields,this._inclusive);return new kp(e.firestore,e.converter,function(e,t){return new aa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function qm(...e){return Bm._create("startAt",e,!0)}function zm(...e){return Bm._create("startAfter",e,!1)}class $m extends Nm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new $m(e,t,n)}_apply(e){const t=Hm(e,this.type,this._docOrFields,this._inclusive);return new kp(e.firestore,e.converter,function(e,t){return new aa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Km(...e){return $m._create("endBefore",e,!1)}function Gm(...e){return $m._create("endAt",e,!0)}function Hm(e,t,n,r){if(n[0]=(0,a.m9)(n[0]),n[0]instanceof km)return function(e,t,n,r,i){if(!r)throw new hi(li.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of pa(e))if(o.field.isKeyField())s.push(po(t,r.key));else{const e=r.data.field(o.field);if(Zs(e))throw new hi(li.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new hi(li.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ro(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=om(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new hi(li.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new hi(li.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!fa(e)&&-1!==s.indexOf("/"))throw new hi(li.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ri.fromString(s));if(!Di.isDocumentKey(n))throw new hi(li.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Di(n);a.push(po(t,i))}else{const e=gm(n,r,s);a.push(e)}}return new Ro(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Wm(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new hi(li.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fa(t)&&-1!==n.indexOf("/"))throw new hi(li.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ri.fromString(n));if(!Di.isDocumentKey(r))throw new hi(li.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return po(e,new Di(r))}if(n instanceof Sp)return po(e,n._key);throw new hi(li.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wp(n)}.`)}function Qm(e,t){if(!Array.isArray(e)||0===e.length)throw new hi(li.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Jm(e,t){if(t.isInequality()){const n=da(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new hi(li.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=ha(e);null!==i&&Xm(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new hi(li.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new hi(li.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Xm(e,t,n){if(!n.isEqual(t))throw new hi(li.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ym{convertValue(e,t="none"){switch(oo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw oi()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Fs(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Zp(Xs(e.latitude),Xs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=eo(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const t=Js(e);return new ki(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ri.fromString(e);ai(Su(n));const r=new ro(n.get(1),n.get(3)),i=new Di(n.popFirst(5));return r.isEqual(t)||ri(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class eg extends Ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sp(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ng extends km{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Cm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rg extends ng{data(e={}){return super.data(e)}}class ig{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new tg(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new rg(this._firestore,this._userDataWriter,n.key,n,new tg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new hi(li.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new rg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new tg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new rg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new tg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:sg(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oi()}}function og(e,t){return e instanceof ng&&t instanceof ng?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ig&&t instanceof ig&&e._firestore===t._firestore&&Dp(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(e){e=_p(e,Sp);const t=_p(e.firestore,Fp);return cp(Up(t),e._key).then((n=>bg(t,e,n)))}class cg extends Ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sp(this.firestore,null,t)}}function ug(e){e=_p(e,Sp);const t=_p(e.firestore,Fp),n=Up(t),r=new cg(t);return ap(n,e._key).then((n=>new ng(t,r,e._key,n,new tg(null!==n&&n.hasLocalMutations,!0),e.converter)))}function lg(e){e=_p(e,Sp);const t=_p(e.firestore,Fp);return cp(Up(t),e._key,{source:"server"}).then((n=>bg(t,e,n)))}function hg(e){e=_p(e,kp);const t=_p(e.firestore,Fp),n=Up(t),r=new cg(t);return Rm(e._query),lp(n,e._query).then((n=>new ig(t,r,e,n)))}function dg(e){e=_p(e,kp);const t=_p(e.firestore,Fp),n=Up(t),r=new cg(t);return up(n,e._query).then((n=>new ig(t,r,e,n)))}function fg(e){e=_p(e,kp);const t=_p(e.firestore,Fp),n=Up(t),r=new cg(t);return lp(n,e._query,{source:"server"}).then((n=>new ig(t,r,e,n)))}function pg(e,t,n){e=_p(e,Sp);const r=_p(e.firestore,Fp),i=Zm(e.converter,t,n);return _g(r,[am(om(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,rc.none())])}function mg(e,t,n,...r){e=_p(e,Sp);const i=_p(e.firestore,Fp),s=om(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof Xp?mm(s,"updateDoc",e._key,t,n,r):pm(s,"updateDoc",e._key,t),_g(i,[o.toMutation(e._key,rc.exists(!0))])}function gg(e){return _g(_p(e.firestore,Fp),[new gc(e._key,rc.none())])}function yg(e,t){const n=_p(e.firestore,Fp),r=xp(e),i=Zm(e.converter,t);return _g(n,[am(om(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,rc.exists(!1))]).then((()=>r))}function vg(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Pp(t[o])||(s=t[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Pp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Sp)l=_p(e.firestore,Fp),h=ua(e._key.path),u={next:n=>{t[o]&&t[o](bg(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=_p(e,kp);l=_p(n.firestore,Fp),h=n._query;const r=new cg(l);u={next:e=>{t[o]&&t[o](new ig(l,r,n,e))},error:t[o+1],complete:t[o+2]},Rm(e._query)}return function(e,t,n,r){const i=new zf(r),s=new Wd(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>zd(await ip(e),s))),()=>{i.Sc(),e.asyncQueue.enqueueAndForget((async()=>$d(await ip(e),s)))}}(Up(l),h,c,u)}function wg(e,t){return hp(Up(e=_p(e,Fp)),Pp(t)?t:{next:t})}function _g(e,t){return function(e,t){const n=new di;return e.asyncQueue.enqueueAndForget((async()=>uf(await np(e),t,n))),n.promise}(Up(e),t)}function bg(e,t,n){const r=n.docs.get(t._key),i=new cg(e);return new ng(e,i,t._key,r,new tg(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ig={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=om(e)}set(e,t,n){this._verifyNotCommitted();const r=Eg(e,this._firestore),i=Zm(r.converter,t,n),s=am(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,rc.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Eg(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Xp?mm(this._dataReader,"WriteBatch.update",i._key,t,n,r):pm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,rc.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Eg(e,this._firestore);return this._mutations=this._mutations.concat(new gc(t._key,rc.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new hi(li.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Eg(e,t){if((e=(0,a.m9)(e)).firestore!==t)throw new hi(li.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=om(e)}get(e){const t=Eg(e,this._firestore),n=new eg(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return oi();const r=e[0];if(r.isFoundDocument())return new km(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new km(this._firestore,n,t._key,null,t.converter);throw oi()}))}set(e,t,n){const r=Eg(e,this._firestore),i=Zm(r.converter,t,n),s=am(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Eg(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Xp?mm(this._dataReader,"Transaction.update",i._key,t,n,r):pm(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Eg(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Eg(e,this._firestore),n=new cg(this._firestore);return super.get(e).then((e=>new ng(this._firestore,n,t._key,e._document,new tg(!1,!1),t.converter)))}}function kg(e,t,n){e=_p(e,Fp);const r=Object.assign(Object.assign({},Ig),n);return function(e){if(e.maxAttempts<1)throw new hi(li.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new di;return e.asyncQueue.enqueueAndForget((async()=>{const i=await rp(e);new Gf(e.asyncQueue,i,n,t,r).run()})),r.promise}(Up(e),(n=>t(new Sg(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){return new cm("deleteField")}function Cg(){return new lm("serverTimestamp")}function Rg(...e){return new hm("arrayUnion",e)}function xg(...e){return new dm("arrayRemove",e)}function Ng(e){return new fm("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Yr=e}(i.SDK_VERSION),(0,i._registerComponent)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Fp(new gi(e.getProvider("auth-internal")),new _i(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new hi(li.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(Jr,"3.11.0",e),(0,i.registerVersion)(Jr,"3.11.0","esm2017")}()},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return _},G6:function(){return R},L:function(){return c},LL:function(){return P},Pz:function(){return w},Sg:function(){return b},UG:function(){return E},ZB:function(){return l},ZR:function(){return O},aH:function(){return v},b$:function(){return A},eu:function(){return N},hl:function(){return x},jU:function(){return S},m9:function(){return W},ne:function(){return $},pd:function(){return z},q4:function(){return y},r3:function(){return F},ru:function(){return k},tV:function(){return u},uI:function(){return T},vZ:function(){return V},w1:function(){return C},xO:function(){return B},xb:function(){return U},z$:function(){return I},zd:function(){return q}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},v=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},w=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function E(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function S(){return"object"===typeof self&&self.self===self}function k(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=I();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){return!E()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?L(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new O(r,o,n);return a}}function L(e,t){return e.replace(M,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(j(n)&&j(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function z(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new K(e,t);return n.subscribe.bind(n)}class K{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=H),void 0===r.error&&(r.error=H),void 0===r.complete&&(r.complete=H);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return Ge},IU:function(){return xe},Jd:function(){return E},PG:function(){return ke},SU:function(){return Be},Um:function(){return Te},WL:function(){return ze},X$:function(){return C},X3:function(){return Re},XI:function(){return Ue},Xl:function(){return Ne},dq:function(){return Me},iH:function(){return Fe},j:function(){return k},lk:function(){return S},nZ:function(){return a},qj:function(){return Ie},qq:function(){return _},yT:function(){return Ce}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}function a(){return i}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30;let y;const v=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=y,t=I;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,I=!0,m=1<<++p,p<=g?h(this):b(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,y=this.parent,I=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const T=[];function E(){T.push(I),I=!1}function S(){const e=T.pop();I=void 0===e||e}function k(e,t,n){if(I&&y){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;A(r,i)}}function A(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function C(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"set":(0,r._N)(e)&&u.push(a.get(v));break}if(1===u.length)u[0]&&R(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);R(c(e))}}function R(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&x(r,t);for(const r of n)r.computed||x(r,t)}function x(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),O=V(),P=V(!1,!0),L=V(!0),M=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=xe(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(xe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=xe(this)[t].apply(this,e);return S(),n}})),e}function U(e){const t=xe(this);return k(t,"has",e),t.hasOwnProperty(e)}function V(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?we:ve:t?ye:ge).get(n))return n;const o=(0,r.kJ)(n);if(!e){if(o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);if("hasOwnProperty"===i)return U}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?D.has(i):N(i))?a:(e||k(n,"get",i),t?a:Me(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ee(a):Ie(a):a)}}const j=q(),B=q(!0);function q(e=!1){return function(t,n,i,s){let o=t[n];if(Ae(o)&&Me(o)&&!Me(i))return!1;if(!e&&(Ce(i)||Ae(i)||(o=xe(o),i=xe(i)),!(0,r.kJ)(t)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===xe(s)&&(a?(0,r.aU)(i,o)&&C(t,"set",n,i,o):C(t,"add",n,i)),c}}function z(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&C(e,"delete",t,void 0,i),s}function $(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||k(e,"has",t),n}function K(e){return k(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const G={get:O,set:j,deleteProperty:z,has:$,ownKeys:K},H={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},W=(0,r.l7)({},G,{get:P,set:B}),Q=e=>e,J=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,r=!1){e=e["__v_raw"];const i=xe(e),s=xe(t);n||(t!==s&&k(i,"get",t),k(i,"get",s));const{has:o}=J(i),a=r?Q:n?Oe:De;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=xe(n),i=xe(e);return t||(e!==i&&k(r,"has",e),k(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&k(xe(e),"iterate",v),Reflect.get(e,"size",e)}function ee(e){e=xe(e);const t=xe(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function te(e,t){t=xe(t);const n=xe(this),{has:i,get:s}=J(n);let o=i.call(n,e);o||(e=xe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function ne(e){const t=xe(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=xe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&C(t,"delete",e,void 0,s),o}function re(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=xe(s),a=t?Q:e?Oe:De;return!e&&k(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function se(e,t,n){return function(...i){const s=this["__v_raw"],o=xe(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?Q:t?Oe:De;return!t&&k(o,"iterate",u?w:v),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return X(this,e)},get size(){return Z(this)},has:Y,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return Z(this)},has:Y,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!1)},r={get(e){return X(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)})),[e,n,t,r]}const[ce,ue,le,he]=ae();function de(e,t){const n=t?e?he:le:e?ue:ce;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const fe={get:de(!1,!1)},pe={get:de(!1,!0)},me={get:de(!0,!1)};const ge=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e((0,r.W7)(e))}function Ie(e){return Ae(e)?e:Se(e,!1,G,fe,ge)}function Te(e){return Se(e,!1,W,pe,ye)}function Ee(e){return Se(e,!0,H,me,ve)}function Se(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function ke(e){return Ae(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return!(!e||!e["__v_isShallow"])}function Re(e){return ke(e)||Ae(e)}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Ne(e){return(0,r.Nj)(e,"__v_skip",!0),e}const De=e=>(0,r.Kn)(e)?Ie(e):e,Oe=e=>(0,r.Kn)(e)?Ee(e):e;function Pe(e){I&&y&&(e=xe(e),A(e.dep||(e.dep=c())))}function Le(e,t){e=xe(e);const n=e.dep;n&&R(n)}function Me(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return Ve(e,!1)}function Ue(e){return Ve(e,!0)}function Ve(e,t){return Me(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:xe(e),this._value=t?e:De(e)}get value(){return Pe(this),this._value}set value(e){const t=this.__v_isShallow||Ce(e)||Ae(e);e=t?e:xe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:De(e),Le(this,e))}}function Be(e){return Me(e)?e.value:e}const qe={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return ke(e)?e:new Proxy(e,qe)}var $e;class Ke{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[$e]=!1,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=xe(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Ke(i,s,o||!s,n);return a}$e="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},FN:function(){return hn},Fl:function(){return An},HY:function(){return xt},JJ:function(){return $},Ko:function(){return Fe},P$:function(){return te},Q6:function(){return ae},U2:function(){return re},Uk:function(){return Zt},Us:function(){return Et},Wm:function(){return Qt},Y3:function(){return v},Y8:function(){return Y},YP:function(){return H},_:function(){return Wt},aZ:function(){return ce},f3:function(){return K},h:function(){return Cn},iD:function(){return Bt},ic:function(){return Te},kq:function(){return en},nK:function(){return oe},up:function(){return Oe},w5:function(){return L},wg:function(){return Mt},wy:function(){return xe}});n(7658),n(541);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=k(h[r]);i<e?t=r+1:n=r}return t}function _(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),b())}function b(){u||l||(l=!0,y=g.then(C))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),b()}function E(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function S(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,A=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function C(e){l=!1,u=!0,h.sort(A);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),u=!1,y=null,(h.length||f.length)&&C(e)}}new Set;new Map;function R(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function x(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=x(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,O=null;function P(e){const t=D;return D=e,O=e&&e.type.__scopeId||null,t}function L(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Vt(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&Vt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function M(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const _=P(e);try{if(4&n.shapeFlag){const e=s||r;v=tn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=tn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:F(l)}}catch(I){Pt.length=0,a(I,e,1),v=Qt(Dt)}let b=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.tR)&&(w=U(w,c)),b=Yt(b,w))}return n.dirs&&(b=Yt(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,P(_),v}const F=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},U=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function V(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||j(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?j(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!N(u,n))return!0}}return!1}function j(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!N(n,s))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const q=e=>e.__isSuspense;function z(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):T(e)}function $(e,t){if(ln){let n=ln.provides;const r=ln.parent&&ln.parent.provides;r===n&&(n=ln.provides=Object.create(r)),n[e]=t}else 0}function K(e,t,n=!1){const r=ln||D;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const G={};function H(e,t,n){return W(e,t,n)}function W(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=(0,r.nZ)()===(null===ln||void 0===ln?void 0:ln.scope)?ln:null;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?X(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[y])}:i.dG,t&&a){const e=d;d=()=>X(e())}let g,y=e=>{f=I.onStop=()=>{s(e,h,4)}};if(yn){if(y=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,y]):d(),"sync"!==c)return i.dG;{const e=xn();g=e.__watcherHandles||(e.__watcherHandles=[])}}let v=m?new Array(e.length).fill(G):G;const w=()=>{if(I.active)if(t){const e=I.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(f&&f(),o(t,h,3,[e,v===G?void 0:m&&v[0]===G?[]:v,y]),v=e)}else I.run()};let b;w.allowRecurse=!!t,"sync"===c?b=w:"post"===c?b=()=>Tt(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),b=()=>_(w));const I=new r.qq(d,b);t?n?w():v=I.run():"post"===c?Tt(I.run.bind(I),h&&h.suspense):I.run();const T=()=>{I.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,I)};return g&&g.push(T),T}function Q(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?J(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=ln;dn(this);const c=W(s,o.bind(r),n);return a?dn(a):fn(),c}function J(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function X(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))X(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)X(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{X(e,t)}));else if((0,i.PO)(e))for(const n in e)X(e[n],t);return e}function Y(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return be((()=>{e.isMounted=!0})),Ee((()=>{e.isUnmounting=!0})),e}const Z=[Function,Array],ee={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Z,onEnter:Z,onAfterEnter:Z,onEnterCancelled:Z,onBeforeLeave:Z,onLeave:Z,onAfterLeave:Z,onLeaveCancelled:Z,onBeforeAppear:Z,onAppear:Z,onAfterAppear:Z,onAppearCancelled:Z},setup(e,{slots:t}){const n=hn(),i=Y();let s;return()=>{const o=t.default&&ae(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Dt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ie(a);const l=se(a);if(!l)return ie(a);const h=re(l,c,i,n);oe(l,h);const d=n.subTree,f=d&&se(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Dt&&(!$t(l,f)||p)){const e=re(f,c,i,n);if(oe(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ie(a);"in-out"===u&&l.type!==Dt&&(e.delayLeave=(e,t,n)=>{const r=ne(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},te=ee;function ne(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function re(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:_}=t,b=String(e.key),I=ne(n,e),T=(e,t)=>{e&&o(e,r,9,t)},E=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const i=I[b];i&&$t(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=w||h,i=_||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?E(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?g:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?E(p,[t,o]):o()},clone(e){return re(e,t,n,r)}};return S}function ie(e){if(le(e))return e=Yt(e),e.children=null,e}function se(e){return le(e)?e.children?e.children[0]:void 0:e}function oe(e,t){6&e.shapeFlag&&e.component?oe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ae(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===xt?(128&o.patchFlag&&i++,r=r.concat(ae(o.children,t,a))):(t||o.type!==Dt)&&r.push(null!=a?Yt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ce(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const ue=e=>!!e.type.__asyncLoader;const le=e=>e.type.__isKeepAlive;RegExp,RegExp;function he(e,t){return(0,i.kJ)(e)?e.some((e=>he(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function de(e,t){pe(e,"a",t)}function fe(e,t){pe(e,"da",t)}function pe(e,t,n=ln){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ve(t,r,n),n){let e=n.parent;while(e&&e.parent)le(e.parent.vnode)&&me(r,t,n,e),e=e.parent}}function me(e,t,n,r){const s=ve(t,e,r,!0);Se((()=>{(0,i.Od)(r[t],s)}),n)}function ge(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ye(e){return 128&e.shapeFlag?e.ssContent:e}function ve(e,t,n=ln,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),dn(n);const s=o(t,n,e,i);return fn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const we=e=>(t,n=ln)=>(!yn||"sp"===e)&&ve(e,((...e)=>t(...e)),n),_e=we("bm"),be=we("m"),Ie=we("bu"),Te=we("u"),Ee=we("bum"),Se=we("um"),ke=we("sp"),Ae=we("rtg"),Ce=we("rtc");function Re(e,t=ln){ve("ec",e,t)}function xe(e,t){const n=D;if(null===n)return e;const r=En(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&X(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ne(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const De="components";function Oe(e,t){return Le(De,e,!0,t)||e}const Pe=Symbol();function Le(e,t,n=!0,r=!1){const s=D||ln;if(s){const n=s.type;if(e===De){const e=Sn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Me(s[e]||n[e],t)||Me(s.appContext[e],t);return!o&&r?n:o}}function Me(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Fe(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Ue=e=>e?pn(e)?En(e)||e.proxy:Ue(e.parent):null,Ve=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ue(e.parent),$root:e=>Ue(e.root),$emit:e=>e.emit,$options:e=>He(e),$forceUpdate:e=>e.f||(e.f=()=>_(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>Q.bind(e)}),je=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Be={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(je(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];qe&&(c[t]=0)}}const d=Ve[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return je(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||je(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Ve,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let qe=!0;function ze(e){const t=He(e),n=e.proxy,s=e.ctx;qe=!1,t.beforeCreate&&Ke(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:I,render:T,renderTracked:E,renderTriggered:S,errorCaptured:k,serverPrefetch:A,expose:C,inheritAttrs:R,components:x,directives:N,filters:D}=t,O=null;if(h&&$e(h,s,O,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(qe=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=An({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ge(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{$(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ke(d,e,"c"),P(_e,f),P(be,p),P(Ie,m),P(Te,g),P(de,y),P(fe,v),P(Re,k),P(Ce,E),P(Ae,S),P(Ee,_),P(Se,I),P(ke,A),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=R&&(e.inheritAttrs=R),x&&(e.components=x),N&&(e.directives=N)}function $e(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=Ye(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?K(n.from||o,n.default,!0):K(n.from||o):K(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ke(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ge(e,t,n,r){const s=r.includes(".")?J(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&H(s,n)}else if((0,i.mf)(e))H(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ge(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&H(s,r,e)}else 0}function He(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>We(u,e,a,!0))),We(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function We(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&We(e,s,n,!0),i&&i.forEach((t=>We(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Qe[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Qe={data:Je,props:et,emits:et,methods:et,computed:et,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:et,directives:et,watch:tt,provide:Je,inject:Xe};function Je(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Xe(e,t){return et(Ye(e),Ye(t))}function Ye(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ze(e,t){return e?[...new Set([].concat(e,t))]:t}function et(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function tt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Ze(e[r],t[r]);return n}function nt(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Kt,1),e.propsDefaults=Object.create(null),it(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function rt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;it(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=st(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=st(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function it(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:N(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=st(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function st(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(dn(s),r=i[n]=e.call(null,t),fn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ot(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=ot(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);at(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(at(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=lt(Boolean,r.type),n=lt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function at(e){return"$"!==e[0]}function ct(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ut(e,t){return ct(e)===ct(t)}function lt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ut(t,e))):(0,i.mf)(t)&&ut(t,e)?0:-1}const ht=e=>"_"===e[0]||"$stable"===e,dt=e=>(0,i.kJ)(e)?e.map(tn):[tn(e)],ft=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>dt(t(...e))),n);return r._c=!1,r},pt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ht(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=ft(s,n,r);else if(null!=n){0;const e=dt(n);t[s]=()=>e}}},mt=(e,t)=>{const n=dt(t);e.slots.default=()=>n},gt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):pt(t,e.slots={})}else e.slots={},t&&mt(e,t);(0,i.Nj)(e.slots,Kt,1)},yt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,pt(t,s)),a=t}else t&&(mt(e,t),a={default:1});if(o)for(const i in s)ht(i)||i in a||delete s[i]};function vt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wt=0;function _t(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=vt(),o=new Set;let a=!1;const c=s.app={_uid:wt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Nn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=Qt(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,En(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function bt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>bt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(ue(o)&&!a)return;const c=4&o.shapeFlag?En(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Tt(r,n)):r()}else 0}}function It(){}const Tt=z;function Et(e){return St(e)}function St(e,t){It();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!$t(e,t)&&(r=Y(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Nt:v(e,t,n,r);break;case Dt:w(e,t,n,r);break;case Ot:null==e&&b(t,n,r,o);break;case xt:P(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,ee)}null!=l&&i&&bt(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},C=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:w}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&x(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&Ne(e,null,r,"created"),R(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,X);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&on(p,r,e)}w&&Ne(e,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;_&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||_||w)&&Tt((()=>{p&&on(p,r,e),_&&v.enter(f),w&&Ne(e,null,r,"mounted")}),o)},R=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},x=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?nn(e[u]):tn(e[u]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&kt(n,!1),(g=m.onVnodeBeforeUpdate)&&on(g,n,t,e),f&&Ne(t,e,n,"beforeUpdate"),n&&kt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,u,n,r,y,o):c||z(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)O(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||O(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&Tt((()=>{g&&on(g,n,t,e),f&&Ne(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===xt||!$t(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},O=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),x(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&At(e,t,!0)):z(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):U(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=un(e,r,i);if(le(e)&&(a.ctx.renderer=ee),vn(a),a.asyncDep){if(i&&i.registerDep(a,j),!e.el){const e=a.subTree=Qt(Dt);w(null,e,t,n)}}else j(a,e,t,n,i,s,o)},U=(e,t,n)=>{const r=t.component=e.component;if(V(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void q(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},j=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,kt(e,!1),n?(n.el=l.el,q(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&on(t,u,n,l),kt(e,!0);const d=M(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),Y(p),e,o,a),n.el=d.el,null===h&&B(e,d.el),s&&Tt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Tt((()=>on(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=ue(t);if(kt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&on(r,d,t),kt(e,!0),c&&ne){const n=()=>{e.subTree=M(e),ne(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=M(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&Tt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Tt((()=>on(r,d,e)),o)}(256&t.shapeFlag||d&&ue(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Tt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>_(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,kt(e,!0),h()},q=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,rt(e,t.props,i,n),yt(e,t.children,n),(0,r.Jd)(),E(),(0,r.lk)()},z=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void K(u,h,n,r,i,s,o,a,c);if(256&f)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?K(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&x(h,n,r,i,s,o,a,c))},$=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?nn(t[f]):tn(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):x(t,n,r,s,o,a,c,u,d)},K=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?nn(t[l]):tn(t[l]);if(!$t(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?nn(t[f]):tn(t[f]);if(!$t(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?nn(t[l]):tn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?nn(t[l]):tn(t[l]);null!=e.key&&g.set(e.key,l)}let v,w=0;const _=f-m+1;let b=!1,I=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=_){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&$t(r,t[v])){i=v;break}void 0===i?H(r,s,o,!0):(T[i-m]=l+1,i>=I?I=i:b=!0,y(r,t[i],n,null,s,o,a,c,u),w++)}const E=b?Ct(T):i.Z6;for(v=E.length-1,l=_-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==E[v]?G(i,n,d,2):v--)}}},G=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void G(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===xt){s(o,t,n);for(let e=0;e<u.length;e++)G(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Ot)return void T(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Tt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&bt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!ue(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&on(m,t,e),6&l)J(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Ne(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(s!==xt||h>0&&64&h)?X(u,t,n,!1,!0):(s===xt&&384&h||!i&&16&l)&&X(c,t,n),r&&W(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Tt((()=>{m&&on(m,t,e),f&&Ne(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===xt)return void Q(n,r);if(t===Ot)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&Tt(c,t),Tt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),E(),S(),t._vnode=e},ee={p:y,um:H,m:G,r:W,mt:F,mc:x,pc:z,pbc:D,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:_t(Z,te)}}function kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function At(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=nn(s[i]),t.el=e.el),n||At(e,t)),t.type===Nt&&(t.el=e.el)}}function Ct(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Rt=e=>e.__isTeleport;const xt=Symbol(void 0),Nt=Symbol(void 0),Dt=Symbol(void 0),Ot=Symbol(void 0),Pt=[];let Lt=null;function Mt(e=!1){Pt.push(Lt=e?null:[])}function Ft(){Pt.pop(),Lt=Pt[Pt.length-1]||null}let Ut=1;function Vt(e){Ut+=e}function jt(e){return e.dynamicChildren=Ut>0?Lt||i.Z6:null,Ft(),Ut>0&&Lt&&Lt.push(e),e}function Bt(e,t,n,r,i,s){return jt(Wt(e,t,n,r,i,s,!0))}function qt(e,t,n,r,i){return jt(Qt(e,t,n,r,i,!0))}function zt(e){return!!e&&!0===e.__v_isVNode}function $t(e,t){return e.type===t.type&&e.key===t.key}const Kt="__vInternal",Gt=({key:e})=>null!=e?e:null,Ht=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null;function Wt(e,t=null,n=null,r=0,s=null,o=(e===xt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gt(t),ref:t&&Ht(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(rn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Ut>0&&!a&&Lt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Lt.push(u),u}const Qt=Jt;function Jt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Pe||(e=Dt),zt(e)){const r=Yt(e,t,!0);return n&&rn(r,n),Ut>0&&!a&&Lt&&(6&r.shapeFlag?Lt[Lt.indexOf(e)]=r:Lt.push(r)),r.patchFlag|=-2,r}if(kn(e)&&(e=e.__vccOpts),t){t=Xt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:q(e)?128:Rt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Wt(e,t,n,s,o,c,a,!0)}function Xt(e){return e?(0,r.X3)(e)||Kt in e?(0,i.l7)({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?sn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Ht(t)):[s,Ht(t)]:Ht(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function Zt(e=" ",t=0){return Qt(Nt,null,e,t)}function en(e="",t=!1){return t?(Mt(),qt(Dt,null,e)):Qt(Dt,null,e)}function tn(e){return null==e||"boolean"===typeof e?Qt(Dt):(0,i.kJ)(e)?Qt(xt,null,e.slice()):"object"===typeof e?nn(e):Qt(Nt,null,String(e))}function nn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Yt(e)}function rn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),rn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Kt in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[Zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function sn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function on(e,t,n,r=null){o(e,t,7,[n,r])}const an=vt();let cn=0;function un(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||an,a={uid:cn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ot(s,o),emitsOptions:x(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=R.bind(null,a),e.ce&&e.ce(a),a}let ln=null;const hn=()=>ln||D,dn=e=>{ln=e,e.scope.on()},fn=()=>{ln&&ln.scope.off(),ln=null};function pn(e){return 4&e.vnode.shapeFlag}let mn,gn,yn=!1;function vn(e,t=!1){yn=t;const{props:n,children:r}=e.vnode,i=pn(e);nt(e,n,i,t),gt(e,r);const s=i?wn(e,t):void 0;return yn=!1,s}function wn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Be));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Tn(e):null;dn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),fn(),(0,i.tI)(c)){if(c.then(fn,fn),t)return c.then((n=>{_n(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else _n(e,c,t)}else bn(e,t)}function _n(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),bn(e,n)}function bn(e,t,n){const s=e.type;if(!e.render){if(!t&&mn&&!s.render){const t=s.template||He(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=mn(t,c)}}e.render=s.render||i.dG,gn&&gn(e)}dn(e),(0,r.Jd)(),ze(e),(0,r.lk)(),fn()}function In(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Tn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=In(e))},slots:e.slots,emit:e.emit,expose:t}}function En(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ve?Ve[n](e):void 0},has(e,t){return t in e||t in Ve}}))}function Sn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function kn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const An=(e,t)=>(0,r.Fl)(e,t,yn);function Cn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?zt(t)?Qt(e,null,[t]):Qt(e,t):Qt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&zt(n)&&(n=[n]),Qt(e,t,n))}const Rn=Symbol(""),xn=()=>{{const e=K(Rn);return e}};const Nn="3.2.47"},9242:function(e,t,n){"use strict";n.d(t,{iM:function(){return he},nr:function(){return ce},ri:function(){return me}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"");for(const e in n)f(i,e,n[e])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const y="http://www.w3.org/1999/xlink";function v(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(y,t.slice(6,t.length)):e.setAttributeNS(y,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function _(e,t,n,r){e.addEventListener(t,n,r)}function b(e,t,n,r){e.removeEventListener(t,n,r)}function I(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=E(t);if(r){const o=s[t]=C(r,i);_(e,n,o,a)}else o&&(b(e,n,o,a),s[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function E(e){let t;if(T.test(e)){let n;t={};while(n=e.match(T))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const k=Promise.resolve(),A=()=>S||(k.then((()=>S=0)),S=Date.now());function C(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(R(e,n.value),t,5,[e])};return n.value=e,n.attached=A(),n}function R(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const x=/^on[a-z]/,N=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?l(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||I(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?w(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&x.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!x.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const O="transition",P="animation",L=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);L.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=L.props=(0,r.l7)({},i.P$.props,M),U=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},V=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in M||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=B(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:I,onBeforeAppear:T=v,onAppear:E=w,onAppearCancelled:S=_}=t,k=(e,t,n)=>{$(e,t?h:c),$(e,t?l:a),n&&n()},A=(e,t)=>{e._isLeaving=!1,$(e,d),$(e,p),$(e,f),t&&t()},C=e=>(t,n)=>{const r=e?E:w,s=()=>k(t,e,n);U(r,[t,s]),K((()=>{$(t,e?u:o),z(t,e?h:c),V(r)||H(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(v,[e]),z(e,o),z(e,a)},onBeforeAppear(e){U(T,[e]),z(e,u),z(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>A(e,t);z(e,d),X(),z(e,f),K((()=>{e._isLeaving&&($(e,d),z(e,p),V(b)||H(e,i,y,n))})),U(b,[e,n])},onEnterCancelled(e){k(e,!1),U(_,[e])},onAppearCancelled(e){k(e,!0),U(S,[e])},onLeaveCancelled(e){A(e),U(I,[e])}})}function B(e){if(null==e)return null;if((0,r.Kn)(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){const t=(0,r.He)(e);return t}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function $(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function K(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let G=0;function H(e,t,n,r){const i=e._endId=++G,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=W(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function W(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${O}Delay`),s=r(`${O}Duration`),o=Q(i,s),a=r(`${P}Delay`),c=r(`${P}Duration`),u=Q(a,c);let l=null,h=0,d=0;t===O?o>0&&(l=O,h=o,d=s.length):t===P?u>0&&(l=P,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?O:P:null,d=l?l===O?s.length:c.length:0);const f=l===O&&/\b(transform|all)(,|$)/.test(r(`${O}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>J(t)+J(e[n]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const Y=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},F,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(o[0].el,n.vnode.el,t))return;o.forEach(te),o.forEach(ne);const r=o.filter(re);X(),r.forEach((e=>{const n=e.el,r=n.style;z(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,$(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=j(c);let l=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),Y.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Z.set(e,e.el.getBoundingClientRect())}function re(e){const t=Y.get(e),n=Z.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=W(r);return i.removeChild(r),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function oe(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=se(s);const o=i||s.props&&"number"===s.props.type;_(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),e._assign(i)})),n&&_(e,"change",(()=>{e.value=e.value.trim()})),t||(_(e,"compositionstart",oe),_(e,"compositionend",ae),_(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=se(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ue=["ctrl","shift","alt","meta"],le={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ue.some((n=>e[`${n}Key`]&&!t.includes(n)))},he=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=le[t[e]];if(r&&r(n,t))return}return e(n,...r)};const de=(0,r.l7)({patchProp:N},u);let fe;function pe(){return fe||(fe=(0,i.Us)(de))}const me=(...e)=>{const t=pe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ge(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ge(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return h},DM:function(){return O},E9:function(){return oe},F7:function(){return S},Gg:function(){return G},HD:function(){return F},He:function(){return ie},Kj:function(){return L},Kn:function(){return V},NO:function(){return T},Nj:function(){return ne},Od:function(){return C},PO:function(){return $},Pq:function(){return f},RI:function(){return x},S0:function(){return K},W7:function(){return z},WV:function(){return g},Z6:function(){return b},_A:function(){return Q},_N:function(){return D},aU:function(){return ee},dG:function(){return I},e1:function(){return s},fY:function(){return r},h5:function(){return re},hR:function(){return Z},hq:function(){return y},ir:function(){return te},j5:function(){return o},kC:function(){return Y},kJ:function(){return N},kT:function(){return _},l7:function(){return A},mf:function(){return M},rs:function(){return X},tI:function(){return j},tR:function(){return k},yA:function(){return p},yk:function(){return U},zw:function(){return v}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=F(r)?l(r):o(r);if(i)for(const e in i)t[e]=i[e]}return t}return F(e)||V(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(F(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(d);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=P(e),r=P(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=U(e),r=U(t),n||r)return e===t;if(n=N(e),r=N(t),n||r)return!(!n||!r)&&m(e,t);if(n=V(e),r=V(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex((e=>g(e,t)))}const v=e=>F(e)?e:null==e?"":N(e)||V(e)&&(e.toString===B||!M(e.toString))?JSON.stringify(e,w,2):String(e),w=(e,t)=>t&&t.__v_isRef?w(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:O(t)?{[`Set(${t.size})`]:[...t.values()]}:!V(t)||N(t)||$(t)?t:String(t),_={},b=[],I=()=>{},T=()=>!1,E=/^on[^a-z]/,S=e=>E.test(e),k=e=>e.startsWith("onUpdate:"),A=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,x=(e,t)=>R.call(e,t),N=Array.isArray,D=e=>"[object Map]"===q(e),O=e=>"[object Set]"===q(e),P=e=>"[object Date]"===q(e),L=e=>"[object RegExp]"===q(e),M=e=>"function"===typeof e,F=e=>"string"===typeof e,U=e=>"symbol"===typeof e,V=e=>null!==e&&"object"===typeof e,j=e=>V(e)&&M(e.then)&&M(e.catch),B=Object.prototype.toString,q=e=>B.call(e),z=e=>q(e).slice(8,-1),$=e=>"[object Object]"===q(e),K=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,Q=H((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),J=/\B([A-Z])/g,X=H((e=>e.replace(J,"-$1").toLowerCase())),Y=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=H((e=>e?`on${Y(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ie=e=>{const t=F(e)?Number(e):NaN;return isNaN(t)?e:t};let se;const oe=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(223),i=n(7142),s=n(1804),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.9";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},1804:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return _e},getApps:function(){return be},initializeApp:function(){return we},onLog:function(){return Ee},registerVersion:function(){return Te},setLogLevel:function(){return Se}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),I(h.get(this))}:function(...t){return I(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function b(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],A=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}w((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",D="0.9.9",O=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",z="@firebase/functions",$="@firebase/functions-compat",K="@firebase/installations",G="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.21.0",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[z]:"fire-fn",[$]:"fire-fn-compat",[K]:"fire-iid",[G]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new ye(n,i,c);return ae.set(o,u),u}function _e(e=se){const t=ae.get(e);if(!t&&e===se)return we();if(!t)throw ge.create("no-app",{appName:e});return t}function be(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Te(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Ee(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Se(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Ae=1,Ce="firebase-heartbeat-store";let Re=null;function xe(){return Re||(Re=E(ke,Ae,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Re}async function Ne(e){try{const t=await xe();return t.transaction(Ce).objectStore(Ce).get(Oe(e))}catch(t){if(t instanceof s.ZR)O.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});O.warn(e.message)}}}async function De(e,t){try{const n=await xe(),r=n.transaction(Ce,"readwrite"),i=r.objectStore(Ce);return await i.put(t,Oe(e)),r.done}catch(n){if(n instanceof s.ZR)O.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Fe(),{heartbeatsToSend:t,unsentEntries:n}=Ue(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ue(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){he(new r.wA("platform-logger",(e=>new R(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Te(N,D,e),Te(N,D,"esm2017"),Te("fire-js","")}Be("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},1609:function(e,t,n){"use strict";n.d(t,{v0:function(){return r.o},ck:function(){return r.ai}});var r=n(7364);n(223),n(1804),n(5168),n(7142)},1509:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(2661),i="firebase",s="9.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},5363:function(e,t,n){"use strict";n(7658);var r=n(2661),i=(n(3767),n(8585),n(8696),n(7364)),s=n(223),o=(n(1804),n(5168),n(7142));
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=2e3;async function u(e,t,n){var r;const{BuildInfo:s}=a();(0,i.as)(t.sessionId,"AuthEvent did not contain a session ID");const o=await p(t.sessionId),c={};return(0,i.at)()?c["ibi"]=s.packageName:(0,i.au)()?c["apn"]=s.packageName:(0,i.av)(e,"operation-not-supported-in-this-environment"),s.displayName&&(c["appDisplayName"]=s.displayName),c["sessionId"]=o,(0,i.aw)(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,c)}async function l(e){const{BuildInfo:t}=a(),n={};(0,i.at)()?n.iosBundleId=t.packageName:(0,i.au)()?n.androidPackageName=t.packageName:(0,i.av)(e,"operation-not-supported-in-this-environment"),await(0,i.ax)(e,n)}function h(e){const{cordova:t}=a();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let s=null;r?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,(0,i.ay)()?"_blank":"_system","location=yes"),n(s)}))}))}async function d(e,t,n){const{cordova:r}=a();let s=()=>{};try{await new Promise(((o,a)=>{let u=null;function l(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function h(){u||(u=window.setTimeout((()=>{a((0,i.az)(e,"redirect-cancelled-by-user"))}),c))}function d(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&h()}t.addPassiveListener(l),document.addEventListener("resume",h,!1),(0,i.au)()&&document.addEventListener("visibilitychange",d,!1),s=()=>{t.removePassiveListener(l),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",d,!1),u&&window.clearTimeout(u)}}))}finally{s()}}function f(e){var t,n,r,s,o,c,u,l,h,d;const f=a();(0,i.aA)("function"===typeof(null===(t=null===f||void 0===f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.aA)("undefined"!==typeof(null===(n=null===f||void 0===f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.aA)("function"===typeof(null===(o=null===(s=null===(r=null===f||void 0===f?void 0:f.cordova)||void 0===r?void 0:r.plugins)||void 0===s?void 0:s.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aA)("function"===typeof(null===(l=null===(u=null===(c=null===f||void 0===f?void 0:f.cordova)||void 0===c?void 0:c.plugins)||void 0===u?void 0:u.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aA)("function"===typeof(null===(d=null===(h=null===f||void 0===f?void 0:f.cordova)||void 0===h?void 0:h.InAppBrowser)||void 0===d?void 0:d.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function p(e){const t=m(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function m(e){if((0,i.as)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=20;class y extends i.aB{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function v(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:I(),postBody:null,tenantId:e.tenantId,error:(0,i.az)(e,"no-auth-event")}}function w(e,t){return T()._set(E(e),t)}async function _(e){const t=await T()._get(E(e));return t&&await T()._remove(E(e)),t}function b(e,t){var n,r;const s=k(t);if(s.includes("/__/auth/callback")){const t=A(s),o=t["firebaseError"]?S(decodeURIComponent(t["firebaseError"])):null,a=null===(r=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],c=a?(0,i.az)(a):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function I(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<g;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function T(){return(0,i.aC)(i.b)}function E(e){return(0,i.aD)("authEvent",e.config.apiKey,e.name)}function S(e){try{return JSON.parse(e)}catch(t){return null}}function k(e){const t=A(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=A(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=A(i)["link"];return s||i||r||n||e}function A(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,s.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=500;class R{constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aE,this._overrideRedirectResult=i.aF}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new y(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,i.av)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){f(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),(0,i.aG)(),await this._originValidation(e);const o=v(e,n,r);await w(e,o);const a=await u(e,o,t),c=await h(a);return d(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=l(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=a(),s=setTimeout((async()=>{await _(e),t.onEvent(N())}),C),o=async n=>{clearTimeout(s);const r=await _(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=b(r,n["url"])),t.onEvent(i||N())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const c=r,u=`${i.packageName.toLowerCase()}://`;a().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&o({url:e}),"function"===typeof c)try{c(e)}catch(t){console.error(t)}}}}const x=R;function N(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.az)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){(0,i.aH)(e)._logFramework(t)}var O="@firebase/auth-compat",P="0.4.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L=1e3;function M(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function F(){return"http:"===M()||"https:"===M()}function U(e=(0,s.z$)()){return!("file:"!==M()&&"ionic:"!==M()&&"capacitor:"!==M()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function V(){return(0,s.b$)()||(0,s.UG)()}function j(){return(0,s.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function B(e=(0,s.z$)()){return/Edge\/\d+/.test(e)}function q(e=(0,s.z$)()){return j()||B(e)}function z(){try{const e=self.localStorage,t=i.aL();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!q()||(0,s.hl)()}catch(e){return $()&&(0,s.hl)()}return!1}function $(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function K(){return(F()||(0,s.ru)()||U())&&!V()&&z()&&!$()}function G(){return U()&&"undefined"!==typeof document}async function H(){return!!G()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),L);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function W(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={LOCAL:"local",NONE:"none",SESSION:"session"},J=i.aA,X="persistence";function Y(e,t){J(Object.values(Q).includes(t),e,"invalid-persistence-type"),(0,s.b$)()?J(t!==Q.SESSION,e,"unsupported-persistence-type"):(0,s.UG)()?J(t===Q.NONE,e,"unsupported-persistence-type"):$()?J(t===Q.NONE||t===Q.LOCAL&&(0,s.hl)(),e,"unsupported-persistence-type"):J(t===Q.NONE||z(),e,"unsupported-persistence-type")}async function Z(e){await e._initializationPromise;const t=te(),n=i.aD(X,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function ee(e,t){const n=te();if(!n)return[];const r=i.aD(X,e,t),s=n.getItem(r);switch(s){case Q.NONE:return[i.N];case Q.LOCAL:return[i.i,i.a];case Q.SESSION:return[i.a];default:return[]}}function te(){var e;try{return(null===(e=W())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=i.aA;class re{constructor(){this.browserResolver=i.aC(i.k),this.cordovaResolver=i.aC(x),this.underlyingResolver=null,this._redirectPersistence=i.a,this._completeRedirectFn=i.aE,this._overrideRedirectResult=i.aF}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return G()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ne(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await H();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return e.unwrap()}function se(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return ce(e)}function ae(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new he(e,i.aq(e,t))}else if(r){const e=ce(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function ce(e){const{_tokenResponse:t}=e instanceof s.ZR?e.customData:e;if(!t)return null;if(!(e instanceof s.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return i.P.credentialFromResult(e);const n=t.providerId;if(!n||n===i.p.PASSWORD)return null;let r;switch(n){case i.p.GOOGLE:r=i.V;break;case i.p.FACEBOOK:r=i.U;break;case i.p.GITHUB:r=i.W;break;case i.p.TWITTER:r=i.Z;break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?i.aO._create(n,a):i.L._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new i.X(n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function ue(e,t){return t.catch((t=>{throw t instanceof s.ZR&&ae(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:oe(e),additionalUserInfo:i.ao(e),user:de.getOrCreate(n)}}))}async function le(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>ue(e,n.confirm(t))}}class he{constructor(e,t){this.resolver=t,this.auth=se(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ue(ie(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this._delegate=e,this.multiFactor=i.ar(e)}static getOrCreate(e){return de.USER_MAP.has(e)||de.USER_MAP.set(e,new de(e)),de.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ue(this.auth,i.a0(this._delegate,e))}async linkWithPhoneNumber(e,t){return le(this.auth,i.l(this._delegate,e,t))}async linkWithPopup(e){return ue(this.auth,i.d(this._delegate,e,re))}async linkWithRedirect(e){return await Z(i.aH(this.auth)),i.g(this._delegate,e,re)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ue(this.auth,i.a1(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return le(this.auth,i.r(this._delegate,e,t))}reauthenticateWithPopup(e){return ue(this.auth,i.e(this._delegate,e,re))}async reauthenticateWithRedirect(e){return await Z(i.aH(this.auth)),i.h(this._delegate,e,re)}sendEmailVerification(e){return i.ae(this._delegate,e)}async unlink(e){return await i.an(this._delegate,e),this}updateEmail(e){return i.aj(this._delegate,e)}updatePassword(e){return i.ak(this._delegate,e)}updatePhoneNumber(e){return i.u(this._delegate,e)}updateProfile(e){return i.ai(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i.af(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}de.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe=i.aA;class pe{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;fe(n,"invalid-api-key",{appName:e.name}),fe(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?re:void 0;this._delegate=t.initialize({options:{persistence:ge(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(i.D),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?de.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i.I(this._delegate,e,t)}applyActionCode(e){return i.a5(this._delegate,e)}checkActionCode(e){return i.a6(this._delegate,e)}confirmPasswordReset(e,t){return i.a4(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ue(this._delegate,i.a8(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i.ad(this._delegate,e)}isSignInWithEmailLink(e){return i.ab(this._delegate,e)}async getRedirectResult(){fe(K(),this._delegate,"operation-not-supported-in-this-environment");const e=await i.j(this._delegate,re);return e?ue(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){D(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=me(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=me(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return i.aa(this._delegate,e,t)}sendPasswordResetEmail(e,t){return i.a3(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(Y(this._delegate,e),e){case Q.SESSION:t=i.a;break;case Q.LOCAL:const e=await i.aC(i.i)._isAvailable();t=e?i.i:i.b;break;case Q.NONE:t=i.N;break;default:return i.av("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ue(this._delegate,i._(this._delegate))}signInWithCredential(e){return ue(this._delegate,i.$(this._delegate,e))}signInWithCustomToken(e){return ue(this._delegate,i.a2(this._delegate,e))}signInWithEmailAndPassword(e,t){return ue(this._delegate,i.a9(this._delegate,e,t))}signInWithEmailLink(e,t){return ue(this._delegate,i.ac(this._delegate,e,t))}signInWithPhoneNumber(e,t){return le(this._delegate,i.s(this._delegate,e,t))}async signInWithPopup(e){return fe(K(),this._delegate,"operation-not-supported-in-this-environment"),ue(this._delegate,i.c(this._delegate,e,re))}async signInWithRedirect(e){return fe(K(),this._delegate,"operation-not-supported-in-this-environment"),await Z(this._delegate),i.f(this._delegate,e,re)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i.a7(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function me(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&de.getOrCreate(e));return{next:s,error:t,complete:n}}function ge(e,t){const n=ee(e,t);if("undefined"===typeof self||n.includes(i.i)||n.push(i.i),"undefined"!==typeof window)for(const r of[i.b,i.a])n.includes(r)||n.push(r);return n.includes(i.N)||n.push(i.N),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe.Persistence=Q;class ye{constructor(){this.providerId="phone",this._delegate=new i.P(ie(r.Z.auth()))}static credential(e,t){return i.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ye.PHONE_SIGN_IN_METHOD=i.P.PHONE_SIGN_IN_METHOD,ye.PROVIDER_ID=i.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve=i.aA;class we{constructor(e,t,n=r.Z.app()){var s;ve(null===(s=n.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new i.R(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="auth-compat";function be(e){e.INTERNAL.registerComponent(new o.wA(_e,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new pe(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i.A.EMAIL_SIGNIN,PASSWORD_RESET:i.A.PASSWORD_RESET,RECOVER_EMAIL:i.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i.A.VERIFY_EMAIL}},EmailAuthProvider:i.Q,FacebookAuthProvider:i.U,GithubAuthProvider:i.W,GoogleAuthProvider:i.V,OAuthProvider:i.X,SAMLAuthProvider:i.Y,PhoneAuthProvider:ye,PhoneMultiFactorGenerator:i.m,RecaptchaVerifier:we,TwitterAuthProvider:i.Z,Auth:pe,AuthCredential:i.J,Error:s.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(O,P)}be(r.Z)},8981:function(e,t,n){"use strict";n(3767),n(8585),n(8696);var r=n(2661),i=n(9504),s=n(223),o=n(7142);const a="@firebase/firestore-compat",c="0.3.8";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i.WA("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i.WA("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!(0,i.Me)())throw new i.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i.Jj.fromBase64String(e))}static fromUint8Array(e){return l(),new d(i.Jj.fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return(0,i.ST)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,i.fH)(e._delegate)}clearIndexedDbPersistence(e){return(0,i.Fc)(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i.l7||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||(0,i.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){(0,i.at)(this._delegate,e,t,n)}enableNetwork(){return(0,i.Ix)(this._delegate)}disableNetwork(){return(0,i.TF)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,(0,i.Wi)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,i.Mx)(this._delegate)}onSnapshotsInSync(e){return(0,i.sc)(this._delegate,e)}get app(){if(!this._appCompat)throw new i.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new N(this,(0,i.hJ)(this._delegate,e))}catch(t){throw T(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,(0,i.JU)(this._delegate,e))}catch(t){throw T(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new C(this,(0,i.B$)(this._delegate,e))}catch(t){throw T(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,i.i3)(this._delegate,(t=>e(new w(this,t))))}batch(){return(0,i.qY)(this._delegate),new _(new i.PU(this._delegate,(e=>(0,i.GL)(this._delegate,e))))}loadBundle(e){return(0,i.Pb)(this._delegate,e)}namedQuery(e){return(0,i.L$)(this._delegate,e).then((e=>e?new C(this,e):null))}}class y extends i.u7{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i.Jj(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function v(e){(0,i.Ub)(e)}class w{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new y(e)}get(e){const t=D(e);return this._delegate.get(t).then((e=>new k(this._firestore,new i.xU(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=D(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=D(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=D(e);return this._delegate.delete(t),this}}class _{constructor(e){this._delegate=e}set(e,t,n){const r=D(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=D(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=D(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class b{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i.$q(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new A(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=b.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new b(e,new y(e),t),r.set(t,i)),i}}b.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new y(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i.my(t._delegate,n,new i.Ky(e)))}static forKey(e,t,n){return new I(t,new i.my(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new N(this.firestore,(0,i.hJ)(this._delegate,e))}catch(t){throw T(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,s.m9)(e),e instanceof i.my&&(0,i.Eo)(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?(0,i.pl)(this._delegate,e,t):(0,i.pl)(this._delegate,e)}catch(n){throw T(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?(0,i.r7)(this._delegate,e):(0,i.r7)(this._delegate,e,t,...n)}catch(r){throw T(r,"updateDoc()","DocumentReference.update()")}}delete(){return(0,i.oe)(this._delegate)}onSnapshot(...e){const t=E(e),n=S(e,(e=>new k(this.firestore,new i.xU(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return(0,i.cf)(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?(0,i.kl)(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?(0,i.Xk)(this._delegate):(0,i.QT)(this._delegate),t.then((e=>new k(this.firestore,new i.xU(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function T(e,t,n){return e.message=e.message.replace(t,n),e}function E(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function S(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class k{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,i.qK)(this._delegate,e._delegate)}}class A extends k{data(e){const t=this._delegate.data(e);return(0,i.K9)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class C{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new y(e)}where(e,t,n){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.ar)(e,t,n)))}catch(r){throw T(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.Xo)(e,t)))}catch(n){throw T(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.b9)(e)))}catch(t){throw T(t,"limit()","Query.limit()")}}limitToLast(e){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.vh)(e)))}catch(t){throw T(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.e0)(...e)))}catch(t){throw T(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.TQ)(...e)))}catch(t){throw T(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.Lx)(...e)))}catch(t){throw T(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new C(this.firestore,(0,i.IO)(this._delegate,(0,i.Wu)(...e)))}catch(t){throw T(t,"endAt()","Query.endAt()")}}isEqual(e){return(0,i.iE)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?(0,i.UQ)(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?(0,i.zN)(this._delegate):(0,i.PL)(this._delegate),t.then((e=>new x(this.firestore,new i.W(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=E(e),n=S(e,(e=>new x(this.firestore,new i.W(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return(0,i.cf)(this._delegate,t,n)}withConverter(e){return new C(this.firestore,e?this._delegate.withConverter(b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class R{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new A(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class x{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new C(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new A(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new R(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new A(this._firestore,n))}))}isEqual(e){return(0,i.qK)(this._delegate,e._delegate)}}class N extends C{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?(0,i.JU)(this._delegate):(0,i.JU)(this._delegate,e))}catch(t){throw T(t,"doc()","CollectionReference.doc()")}}add(e){return(0,i.ET)(this._delegate,e).then((e=>new I(this.firestore,e)))}isEqual(e){return(0,i.Eo)(this._delegate,e._delegate)}withConverter(e){return new N(this.firestore,e?this._delegate.withConverter(b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function D(e){return(0,i.Cf)(e,i.my)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(...e){this._delegate=new i.Lz(...e)}static documentId(){return new O(i.Xb.keyField().canonicalString())}isEqual(e){return e=(0,s.m9)(e),e instanceof i.Lz&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this._delegate=e}static serverTimestamp(){const e=(0,i.Bt)();return e._methodName="FieldValue.serverTimestamp",new P(e)}static delete(){const e=(0,i.AK)();return e._methodName="FieldValue.delete",new P(e)}static arrayUnion(...e){const t=(0,i.vr)(...e);return t._methodName="FieldValue.arrayUnion",new P(t)}static arrayRemove(...e){const t=(0,i.Ab)(...e);return t._methodName="FieldValue.arrayRemove",new P(t)}static increment(e){const t=(0,i.nP)(e);return t._methodName="FieldValue.increment",new P(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={Firestore:g,GeoPoint:i.F8,Timestamp:i.EK,Blob:d,Transaction:w,WriteBatch:_,DocumentReference:I,DocumentSnapshot:k,Query:C,QueryDocumentSnapshot:A,QuerySnapshot:x,CollectionReference:N,FieldPath:O,FieldValue:P,setLogLevel:v,CACHE_SIZE_UNLIMITED:i.IX};function M(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},L)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){M(e,((e,t)=>new g(e,t,new m))),e.registerVersion(a,c)}F(r.Z)},6071:function(e,t,n){"use strict";var r=n(2661),i=(n(2801),n(7658),n(3767),n(8585),n(8696),n(1804)),s=n(223),o=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5,h=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d extends s.ZR{constructor(e,t,n=0){super(m(e),`Firebase Storage: ${t} (${m(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return m(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var f,p;function m(e){return"storage/"+e}function g(){const e="An unknown error occurred, please check the error payload for server response.";return new d(f.UNKNOWN,e)}function y(e){return new d(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function v(e){return new d(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function w(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(f.UNAUTHENTICATED,e)}function _(){return new d(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b(e){return new d(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function I(){return new d(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T(){return new d(f.CANCELED,"User canceled the upload/download.")}function E(e){return new d(f.INVALID_URL,"Invalid URL '"+e+"'.")}function S(e){return new d(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function k(){return new d(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function A(){return new d(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C(){return new d(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function R(){return new d(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x(e){return new d(f.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function N(e){return new d(f.INVALID_ARGUMENT,e)}function D(){return new d(f.APP_DELETED,"The Firebase app was deleted.")}function O(e){return new d(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function P(e,t){return new d(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function L(e){throw new d(f.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(f||(f={}));class M{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=M.makeFromUrl(e,t)}catch(r){return new M(e,"")}if(""===n.path)return n;throw S(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",y=new RegExp(`^https?://${m}/${r}/${g}`,"i"),v={bucket:1,path:2},w=[{regex:o,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let a=0;a<w.length;a++){const t=w[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new M(e,i),t.postModify(n);break}}if(null==n)throw E(e);return n}}class F{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function V(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return void 0!==e}function B(e){return"function"===typeof e}function q(e){return"object"===typeof e&&!Array.isArray(e)}function z(e){return"string"===typeof e||e instanceof String}function $(e){return K()&&e instanceof Blob}function K(){return"undefined"!==typeof Blob&&!(0,s.UG)()}function G(e,t,n,r){if(r<t)throw N(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw N(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function W(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(p||(p={}));class J{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new X(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===p.NO_ERROR,i=n.getStatus();if(!t||Q(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===p.ABORT;return void e(!1,new X(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new X(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());j(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=g();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?D():T();r(e)}else{const e=I();r(e)}};this.canceled_?t(!1,new X(!1,null,!0)):this.backoffId_=U(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&V(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class X{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Y(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Z(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function ee(e,t){t&&(e["X-Firebase-GMPID"]=t)}function te(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function ne(e,t,n,r,i,s,o=!0){const a=W(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return ee(u,t),Y(u,n),Z(u,s),te(u,r),new J(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ie(...e){const t=re();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(K())return new Blob(e);throw new d(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function se(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){if("undefined"===typeof atob)throw x("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ce{constructor(e,t){this.data=e,this.contentType=t||null}}function ue(e,t){switch(e){case ae.RAW:return new ce(le(t));case ae.BASE64:case ae.BASE64URL:return new ce(de(e,t));case ae.DATA_URL:return new ce(pe(t),me(t))}throw g()}function le(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function he(e){let t;try{t=decodeURIComponent(e)}catch(n){throw P(ae.DATA_URL,"Malformed data URL.")}return le(t)}function de(e,t){switch(e){case ae.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw P(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ae.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw P(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oe(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw P(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class fe{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw P(ae.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=ge(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function pe(e){const t=new fe(e);return t.base64?de(ae.BASE64,t.rest):he(t.rest)}function me(e){const t=new fe(e);return t.contentType}function ge(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){let n=0,r="";$(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if($(this.data_)){const n=this.data_,r=se(n,e,t);return null===r?null:new ye(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new ye(n,!0)}}static getBlob(...e){if(K()){const t=e.map((e=>e instanceof ye?e.data_:e));return new ye(ie.apply(null,t))}{const t=e.map((e=>z(e)?ue(ae.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new ye(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){let t;try{t=JSON.parse(e)}catch(n){return null}return q(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function _e(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function be(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){return t}class Te{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Ie}}let Ee=null;function Se(e){return!z(e)||e.length<2?e:be(e)}function ke(){if(Ee)return Ee;const e=[];function t(e,t){return Se(t)}e.push(new Te("bucket")),e.push(new Te("generation")),e.push(new Te("metageneration")),e.push(new Te("name","fullPath",!0));const n=new Te("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new Te("size");return i.xform=r,e.push(i),e.push(new Te("timeCreated")),e.push(new Te("updated")),e.push(new Te("md5Hash",null,!0)),e.push(new Te("cacheControl",null,!0)),e.push(new Te("contentDisposition",null,!0)),e.push(new Te("contentEncoding",null,!0)),e.push(new Te("contentLanguage",null,!0)),e.push(new Te("contentType",null,!0)),e.push(new Te("metadata","customMetadata",!0)),Ee=e,Ee}function Ae(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new M(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ce(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return Ae(r,e),r}function Re(e,t,n){const r=ve(t);if(null===r)return null;const i=r;return Ce(e,i,n)}function xe(e,t,n,r){const i=ve(t);if(null===i)return null;if(!z(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=H(a,n,r),u=W({alt:"media",token:t});return c+u}));return c[0]}function Ne(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="prefixes",Oe="items";function Pe(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[De])for(const i of n[De]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new M(t,n));r.prefixes.push(s)}if(n[Oe])for(const i of n[Oe]){const n=e._makeStorageReference(new M(t,i["name"]));r.items.push(n)}return r}function Le(e,t,n){const r=ve(n);if(null===r)return null;const i=r;return Pe(e,t,i)}class Me{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){if(!e)throw g()}function Ue(e,t){function n(n,r){const i=Re(e,r,t);return Fe(null!==i),i}return n}function Ve(e,t){function n(n,r){const i=Le(e,t,r);return Fe(null!==i),i}return n}function je(e,t){function n(n,r){const i=Re(e,r,t);return Fe(null!==i),xe(i,r,e.host,e._protocol)}return n}function Be(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?_():w():402===t.getStatus()?v(e.bucket):403===t.getStatus()?b(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function qe(e){const t=Be(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=y(e.path)),i.serverResponse=r.serverResponse,i}return n}function ze(e,t,n){const r=t.fullServerUrl(),i=H(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Me(i,s,Ue(e,n),o);return a.errorHandler=qe(t),a}function $e(e,t,n,r,i){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=t.bucketOnlyServerUrl(),a=H(o,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new Me(a,c,Ve(e,t.bucket),u);return l.urlParams=s,l.errorHandler=Be(t),l}function Ke(e,t,n){const r=t.fullServerUrl(),i=H(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Me(i,s,je(e,n),o);return a.errorHandler=qe(t),a}function Ge(e,t,n,r){const i=t.fullServerUrl(),s=H(i,e.host,e._protocol),o="PATCH",a=Ne(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new Me(s,o,Ue(e,r),u);return l.headers=c,l.body=a,l.errorHandler=qe(t),l}function He(e,t){const n=t.fullServerUrl(),r=H(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new Me(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=qe(t),a}function We(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Qe(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=We(null,t)),r}function Je(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Qe(t,r,i),l=Ne(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ye.getBlob(h,r,d);if(null===f)throw A();const p={name:u["fullPath"]},m=H(s,e.host,e._protocol),g="POST",y=e.maxUploadRetryTime,v=new Me(m,g,Ue(e,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Be(t),v}class Xe{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Ye(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){Fe(!1)}const r=t||["active"];return Fe(!!n&&-1!==r.indexOf(n)),n}function Ze(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=Qe(t,r,i),a={name:o["fullPath"]},c=H(s,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ne(o,n),d=e.maxUploadRetryTime;function f(e){let t;Ye(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Fe(!1)}return Fe(z(t)),t}const p=new Me(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Be(t),p}function et(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(e){const t=Ye(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Fe(!1)}n||Fe(!1);const i=Number(n);return Fe(!isNaN(i)),new Xe(i,r.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new Me(n,o,s,a);return c.headers=i,c.errorHandler=Be(t),c}const tt=262144;function nt(e,t,n,r,i,s,o,a){const c=new Xe(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw C();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";f=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},m=r.slice(h,d);if(null===m)throw A();function g(e,n){const i=Ye(e,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?Ue(t,s)(e,n):null,new Xe(o,a,"final"===i,u)}const y="POST",v=t.maxUploadRetryTime,w=new Me(n,y,g,v);return w.headers=p,w.body=m.uploadData(),w.progressCallback=a||null,w.errorHandler=Be(e),w}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={STATE_CHANGED:"state_changed"},it={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function st(e){switch(e){case"running":case"pausing":case"canceling":return it.RUNNING;case"paused":return it.PAUSED;case"success":return it.SUCCESS;case"canceled":return it.CANCELED;case"error":return it.ERROR;default:return it.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,n){const r=B(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=null;class ut{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=p.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=p.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw L("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw L("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw L("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw L("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw L("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class lt extends ut{initXhr(){this.xhr_.responseType="text"}}function ht(){return ct?ct():new lt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ke(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(Q(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,h),this._needToFetchStatus=!0,void this.completeTransitions_();e=I()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=Ze(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ht,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=et(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,ht,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=tt*this._chunkMultiplier,t=new Xe(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=nt(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ht,r,i,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=tt*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=ze(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ht,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=Je(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ht,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=T(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=st(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new ot(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(st(this._state)){case it.SUCCESS:at(this._resolve.bind(null,this.snapshot))();break;case it.CANCELED:case it.ERROR:const t=this._reject;at(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=st(this._state);switch(t){case it.RUNNING:case it.PAUSED:e.next&&at(e.next.bind(e,this.snapshot))();break;case it.SUCCESS:e.complete&&at(e.complete.bind(e))();break;case it.CANCELED:case it.ERROR:e.error&&at(e.error.bind(e,this._error))();break;default:e.error&&at(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this._service=e,this._location=t instanceof M?t:M.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ft(e,t)}get root(){const e=new M(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const e=we(this._location.path);if(null===e)return null;const t=new M(this._location.bucket,e);return new ft(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw O(e)}}function pt(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new dt(e,new ye(t),n)}function mt(e){const t={prefixes:[],items:[]};return gt(e,t).then((()=>t))}async function gt(e,t,n){const r={pageToken:n},i=await yt(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await gt(e,t,i.nextPageToken)}function yt(e,t){null!=t&&"number"===typeof t.maxResults&&G("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=$e(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,ht)}function vt(e){e._throwIfRoot("getMetadata");const t=ze(e.storage,e._location,ke());return e.storage.makeRequestWithTokens(t,ht)}function wt(e,t){e._throwIfRoot("updateMetadata");const n=Ge(e.storage,e._location,t,ke());return e.storage.makeRequestWithTokens(n,ht)}function _t(e){e._throwIfRoot("getDownloadURL");const t=Ke(e.storage,e._location,ke());return e.storage.makeRequestWithTokens(t,ht).then((e=>{if(null===e)throw R();return e}))}function bt(e){e._throwIfRoot("deleteObject");const t=He(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ht)}function It(e,t){const n=_e(e._location.path,t),r=new M(e._location.bucket,n);return new ft(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return/^[A-Za-z]+:\/\//.test(e)}function Et(e,t){return new ft(e,t)}function St(e,t){if(e instanceof Rt){const n=e;if(null==n._bucket)throw k();const r=new ft(n,n._bucket);return null!=t?St(r,t):r}return void 0!==t?It(e,t):e}function kt(e,t){if(t&&Tt(t)){if(e instanceof Rt)return Et(e,t);throw N("To use ref(service, url), the first argument must be a Storage instance.")}return St(e,t)}function At(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:M.makeFromBucketSpec(n,e)}function Ct(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:(0,s.Sg)(i,e.app.options.projectId))}class Rt{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?M.makeFromBucketSpec(r,this._host):At(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=M.makeFromBucketSpec(this._url,e):this._bucket=At(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ft(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new F(D());{const s=ne(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const xt="@firebase/storage",Nt="0.11.2",Dt="storage";function Ot(e,t,n){return e=(0,s.m9)(e),pt(e,t,n)}function Pt(e){return e=(0,s.m9)(e),vt(e)}function Lt(e,t){return e=(0,s.m9)(e),wt(e,t)}function Mt(e,t){return e=(0,s.m9)(e),yt(e,t)}function Ft(e){return e=(0,s.m9)(e),mt(e)}function Ut(e){return e=(0,s.m9)(e),_t(e)}function Vt(e){return e=(0,s.m9)(e),bt(e)}function jt(e,t){return e=(0,s.m9)(e),kt(e,t)}function Bt(e,t){return It(e,t)}function qt(e,t,n,r={}){Ct(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Rt(n,r,s,t,i.SDK_VERSION)}function $t(){(0,i._registerComponent)(new o.wA(Dt,zt,"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(xt,Nt,""),(0,i.registerVersion)(xt,Nt,"esm2017")}$t();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Kt(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new Kt(t,this,this._ref))}),t)}on(e,t,n,r){let i;return t&&(i="function"===typeof t?e=>t(new Kt(e,this,this._ref)):{next:t.next?e=>t.next(new Kt(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class Ht{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new Wt(e,this._service)))}get items(){return this._delegate.items.map((e=>new Wt(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Bt(this._delegate,e);return new Wt(t,this.storage)}get root(){return new Wt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Wt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Gt(Ot(this._delegate,e,t),this)}putString(e,t=ae.RAW,n){this._throwIfRoot("putString");const r=ue(t,e),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new Gt(new dt(this._delegate,new ye(r.data,!0),i),this)}listAll(){return Ft(this._delegate).then((e=>new Ht(e,this.storage)))}list(e){return Mt(this._delegate,e||void 0).then((e=>new Ht(e,this.storage)))}getMetadata(){return Pt(this._delegate)}updateMetadata(e){return Lt(this._delegate,e)}getDownloadURL(){return Ut(this._delegate)}delete(){return this._throwIfRoot("delete"),Vt(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw O(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Jt(e))throw N("ref() expected a child path but got a URL, use refFromURL instead.");return new Wt(jt(this._delegate,e),this)}refFromURL(e){if(!Jt(e))throw N("refFromURL() expected a full URL but got a child path, use ref() instead.");try{M.makeFromUrl(e,this._delegate.host)}catch(t){throw N("refFromUrl() expected a valid full URL but got an invalid one.")}return new Wt(jt(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){qt(this._delegate,e,t,n)}}function Jt(e){return/^[A-Za-z]+:\/\//.test(e)}const Xt="@firebase/storage-compat",Yt="0.3.2",Zt="storage-compat";function en(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new Qt(n,r);return i}function tn(e){const t={TaskState:it,TaskEvent:rt,StringFormat:ae,Storage:Qt,Reference:Wt};e.INTERNAL.registerComponent(new o.wA(Zt,en,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Xt,Yt)}tn(r.Z)},9232:function(e,t,n){"use strict";n.d(t,{IO:function(){return r.IO},PL:function(){return r.PL},ar:function(){return r.ar},hJ:function(){return r.hJ}});var r=n(9504)},2483:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return j}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=b(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?_(e,t):l(t)?_(t,e):e===t}function _(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function b(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var I,T;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function E(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const S=/^[^#]+#/;function k(e,t){return e.replace(S,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const C=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=A(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function x(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function D(e,t){N.set(e,t)}function O(e){const t=N.get(e);return N.delete(e),t}let P=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:C()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function F(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?C():null}}function U(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:C()});s(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(e){e=E(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function j(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),V(e)}function B(e){return"string"===typeof e||e&&"object"===typeof e}function q(e){return"string"===typeof e||"symbol"===typeof e}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var K;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(K||(K={}));function G(e,t){return a(new Error,{type:e,[$]:!0},t)}function H(e,t){return e instanceof Error&&$ in e&&(null==t||!!(e.type&t))}const W="[^/]+?",Q={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},Q,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ie(e,t,n){const r=X(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=ae(e);c.aliasOf=r&&r.record;const h=he(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ue(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw G(1,{location:e});0,o=i.record.name,c=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw G(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:le(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,me=/\//g,ge=/=/g,ye=/\?/g,ve=/\+/g,we=/%5B/g,_e=/%5D/g,be=/%5E/g,Ie=/%60/g,Te=/%7B/g,Ee=/%7C/g,Se=/%7D/g,ke=/%20/g;function Ae(e){return encodeURI(""+e).replace(Ee,"|").replace(we,"[").replace(_e,"]")}function Ce(e){return Ae(e).replace(Te,"{").replace(Se,"}").replace(be,"^")}function Re(e){return Ae(e).replace(ve,"%2B").replace(ke,"+").replace(fe,"%23").replace(pe,"%26").replace(Ie,"`").replace(Te,"{").replace(Se,"}").replace(be,"^")}function xe(e){return Re(e).replace(ge,"%3D")}function Ne(e){return Ae(e).replace(fe,"%23").replace(ye,"%3F")}function De(e){return null==e?"":Ne(e).replace(me,"%2F")}function Oe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ve," "),n=e.indexOf("="),s=Oe(n<0?e:e.slice(0,n)),o=n<0?null:Oe(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=xe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol(""),Be=Symbol("");function qe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ze(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(G(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(G(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function $e(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Ke(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(ze(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&ze(u,n,r,s,e)()}))))}}}return i}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.f3)(Ve),n=(0,r.f3)(je),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return Qe(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const He=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.qj)(Ge(e)),{options:s}=(0,r.f3)(Ve),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=He;function Qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(Be),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Ue,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ue,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Fe,l),(0,r.JJ)(Be,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return et(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||Le,h=e.history;const d=qe(),m=qe(),y=qe(),v=(0,i.XI)(z);let w=z;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(e=>""+e)),b=c.bind(null,De),T=c.bind(null,Oe);function E(e,n){let r,i;return q(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function A(e){return!!t.getRecordMatcher(e)}function N(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Oe(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:b(e.params)}),r.params=b(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=_(T(s.params));const u=p(o,a({},e,{hash:Ce(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Le?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function P(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function L(e,t){if(w!==e)return G(8,{from:t,to:e})}function M(e){return V(e)}function F(e){return M(a(P(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=w=N(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,u=U(n);if(u)return V(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&g(o,r,n)&&(h=G(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):B(l,r)).catch((e=>H(e)?H(e,2)?e:te(e):Z(e,l,r))).then((e=>{if(e){if(H(e,2))return V(a({replace:c},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=K(l,r,!0,c,i);return $(l,r,e),e}))}function j(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,s]=it(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(ze(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push(ze(r,e,t));return n.push(o),rt(n)})).then((()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(ze(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(ze(i,e,t));else n.push(ze(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of m.list())n.push(ze(r,e,t));return n.push(o),rt(n)})).catch((e=>H(e,8)?e:Promise.reject(e)))}function $(e,t,n){for(const r of y.list())r(e,t,n)}function K(e,t,n,r,i){const o=L(e,t);if(o)return o;const c=t===z,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,ne(e,t,n,c),te()}let W;function Q(){W||(W=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=N(e),i=U(r);if(i)return void V(a(i,{replace:!0}),r).catch(u);w=r;const o=v.value;s&&D(x(o.fullPath,n.delta),C()),B(r,o).catch((e=>H(e,12)?e:H(e,2)?(V(e.to,r).then((e=>{H(e,20)&&!n.delta&&n.type===I.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||K(r,o,!1),e&&(n.delta&&!H(e,8)?h.go(-n.delta,!1):n.type===I.pop&&H(e,20)&&h.go(-1,!1)),$(r,o,e)})).catch(u)})))}let J,X=qe(),Y=qe();function Z(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return J&&v.value!==z?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return J||(J=!e,Q(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&O(x(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&R(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:v,listening:!0,addRoute:E,removeRoute:S,hasRoute:A,getRoutes:k,resolve:N,options:e,push:M,replace:F,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!ie&&v.value===z&&(ie=!0,M(h.location).catch((e=>{0})));const n={};for(const i in z)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(Ve,t),e.provide(je,(0,i.qj)(n)),e.provide(Be,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(w=z,W&&W(),W=null,v.value=z,ie=!1,J=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>y(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.5da08b48.js.map