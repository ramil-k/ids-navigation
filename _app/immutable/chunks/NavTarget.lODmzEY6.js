import{s as E,n as P,c as j,o as Y,x as m,a as L,u as R,g as M,b as U,y as V,e as F}from"./scheduler.CFpRn4Gx.js";import{S as A,i as S,s as q,e as g,f as z,c as _,a as p,d as h,n as d,g as w,z as B,A as G,t as J,b as K,h as v,j as O,p as Q,q as W}from"./index.DyAufIVq.js";import{w as D}from"./index.DAhuT6dn.js";const X=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function N(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function y(l,t,s){const a=l.slice();return a[3]=t[s],a[5]=s,a}function T(l){let t,s,a=l[3].itemtext+"",u,c,n,i;return{c(){t=g("li"),s=g("a"),u=J(a),i=q(),this.h()},l(o){t=_(o,"LI",{class:!0});var e=p(t);s=_(e,"A",{class:!0,href:!0});var f=p(s);u=K(f,a),f.forEach(h),i=z(e),e.forEach(h),this.h()},h(){d(s,"class",c=m(l[5]===l[1]?"current":"")+" svelte-w5t1j5"),d(s,"href",n=`#${l[3].id}`),d(t,"class","svelte-w5t1j5")},m(o,e){w(o,t,e),v(t,s),v(s,u),v(t,i)},p(o,e){e&1&&a!==(a=o[3].itemtext+"")&&O(u,a),e&2&&c!==(c=m(o[5]===o[1]?"current":"")+" svelte-w5t1j5")&&d(s,"class",c),e&1&&n!==(n=`#${o[3].id}`)&&d(s,"href",n)},d(o){o&&h(t)}}}function Z(l){let t,s,a,u,c=N(l[0]),n=[];for(let i=0;i<c.length;i+=1)n[i]=T(y(l,c,i));return{c(){t=q(),s=g("ul");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){t=z(i),s=_(i,"UL",{class:!0});var o=p(s);for(let e=0;e<n.length;e+=1)n[e].l(o);o.forEach(h),this.h()},h(){d(s,"class","svelte-w5t1j5")},m(i,o){w(i,t,o),w(i,s,o);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(s,null);a||(u=B(document,"scroll",l[2]),a=!0)},p(i,[o]){if(o&3){c=N(i[0]);let e;for(e=0;e<c.length;e+=1){const f=y(i,c,e);n[e]?n[e].p(f,o):(n[e]=T(f),n[e].c(),n[e].m(s,null))}for(;e<n.length;e+=1)n[e].d(1);n.length=c.length}},i:P,o:P,d(i){i&&(h(t),h(s)),G(n,i),a=!1,u()}}}let b=D([]),I=D(0);const C=l=>b.update(t=>{console.log("adding",l,"to",t);let s=t.find(a=>a.id===l.id);return s?(s.itemtext=l.itemtext,s.topPosition=l.topPosition,t):[...t,l]}),k=l=>b.update(t=>t.filter(s=>s.id!==l));function x(l,t,s){let a,u;j(l,b,n=>s(0,a=n)),j(l,I,n=>s(1,u=n));const c=()=>{let n=a.toSorted((e,f)=>e.topPosition-f.topPosition),i=0,o=0;console.log("onscroll",{arr:n,highestTopPosition:i,highestTopPositionIndex:o},window.scrollY,window.innerHeight);for(let e=0;e<n.length;e++)n[e].topPosition>i&&n[e].topPosition<window.scrollY+window.innerHeight/2&&(o=e,i=n[e].topPosition);I.set(o),console.log("onscroll__res",{arr:n,highestTopPosition:i,highestTopPositionIndex:o})};return Y(c),[a,u,c]}class oe extends A{constructor(t){super(),S(this,t,x,Z,E,{})}}const{window:$}=X;function ee(l){let t,s,a,u,c,n;const i=l[7].default,o=L(i,l,l[6],null);return{c(){t=g("div"),o&&o.c(),this.h()},l(e){t=_(e,"DIV",{class:!0,id:!0,style:!0});var f=p(t);o&&o.l(f),f.forEach(h),this.h()},h(){d(t,"class",s=m(`nav-target ${l[2]}`)+" svelte-js4e06"),d(t,"id",l[0]),d(t,"style",a=`--margin-top: 3em; ${l[1]}`)},m(e,f){w(e,t,f),o&&o.m(t,null),l[8](t),u=!0,c||(n=B($,"resize",l[4]),c=!0)},p(e,[f]){o&&o.p&&(!u||f&64)&&R(o,i,e,e[6],u?U(i,e[6],f,null):M(e[6]),null),(!u||f&4&&s!==(s=m(`nav-target ${e[2]}`)+" svelte-js4e06"))&&d(t,"class",s),(!u||f&1)&&d(t,"id",e[0]),(!u||f&2&&a!==(a=`--margin-top: 3em; ${e[1]}`))&&d(t,"style",a)},i(e){u||(Q(o,e),u=!0)},o(e){W(o,e),u=!1},d(e){e&&h(t),o&&o.d(e),l[8](null),c=!1,n()}}}function te(l,t,s){let{$$slots:a={},$$scope:u}=t,{id:c}=t,{itemtext:n}=t,{style:i}=t,{className:o=""}=t,e;C({id:c,itemtext:n});let f=()=>{let r=e.getBoundingClientRect().top+window.scrollY;console.log(r,e.getBoundingClientRect().top,window.scrollY),C({id:c,itemtext:n,topPosition:r})};Y(f),V(()=>{k(c)});function H(r){F[r?"unshift":"push"](()=>{e=r,s(3,e)})}return l.$$set=r=>{"id"in r&&s(0,c=r.id),"itemtext"in r&&s(5,n=r.itemtext),"style"in r&&s(1,i=r.style),"className"in r&&s(2,o=r.className),"$$scope"in r&&s(6,u=r.$$scope)},[c,i,o,e,f,n,u,a,H]}class ie extends A{constructor(t){super(),S(this,t,te,ee,E,{id:0,itemtext:5,style:1,className:2})}}export{oe as N,ie as a};
