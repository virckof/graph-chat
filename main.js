(()=>{var e,r,t,n,o,a,l,i,u,s,f,h,d,p,c,v,g,m={},b={};function y(e){if(b[e])return b[e].exports;var r=b[e]={id:e,loaded:!1,exports:{}};return m[e].call(r.exports,r,r.exports,y),r.loaded=!0,r.exports}y.m=m,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>e+".js",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="GraphChat:",y.l=(t,n,o)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==o)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var s=i[u];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){a=s;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,y.nc&&a.setAttribute("nonce",y.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var f=(r,n)=>{a.onerror=a.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{y.S={};var e={},r={};y.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];y.o(y.S,t)||(y.S[t]={});var a=y.S[t],l="GraphChat",i=(e,r,t)=>{var n=a[e]=a[e]||{},o=n[r];(!o||!o.loaded&&l>o.from)&&(n[r]={get:t,from:l})},u=[];switch(t){case"default":i("@apollo/client","3.2.5",(()=>Promise.all([y.e(829),y.e(707),y.e(558),y.e(883)]).then((()=>()=>y(6829))))),i("graphql","15.4.0",(()=>y.e(792).then((()=>()=>y(8792))))),i("react-dom","16.13.1",(()=>Promise.all([y.e(935),y.e(558)]).then((()=>()=>y(3935))))),i("react","16.13.1",(()=>y.e(294).then((()=>()=>y(7294))))),i("shards-react","1.0.3",(()=>Promise.all([y.e(624),y.e(558),y.e(169)]).then((()=>()=>y(1624))))),i("subscriptions-transport-ws","0.9.18",(()=>y.e(313).then((()=>()=>y(5313)))))}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),y.p="http://localhost:8080/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var l=r[n],i=(typeof l)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=l)return o<l;n++}},o=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return r}var l=[];for(a=1;a<e.length;a++){var i=e[a];l.push(0===i?"not("+u()+")":1===i?"("+u()+" || "+u()+")":2===i?l.pop()+" "+l.pop():o(i))}return u();function u(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var l=0,i=1,u=!0;;i++,l++){var s,f,h=i<e.length?(typeof e[i])[0]:"";if(l>=r.length||"o"==(f=(typeof(s=r[l]))[0]))return!u||("u"==h?i>n&&!o:""==h!=o);if("u"==f){if(!u||"u"!=h)return!1}else if(u)if(h==f)if(i<=n){if(s!=e[i])return!1}else{if(o?s>e[i]:s<e[i])return!1;s!=e[i]&&(u=!1)}else if("s"!=h&&"n"!=h){if(o||i<=n)return!1;u=!1,i--}else{if(i<=n||f<h!=o)return!1;u=!1}else"s"!=h&&"n"!=h&&(u=!1,i--)}}var d=[],p=d.pop.bind(d);for(l=1;l<e.length;l++){var c=e[l];d.push(1==c?p()|p():2==c?p()&p():c?a(c,r):!p())}return!!p()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",u=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(i(t,o,n)),f(e[t][o])},s=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},f=e=>(e.loaded=1,e.get()),d=(h=e=>function(r,t,n,o){var a=y.I(r);return a&&a.then?a.then(e.bind(e,r,y.S[r],t,n,o)):e(r,y.S[r],t,n,o)})(((e,r,t,n,o)=>r&&y.o(r,t)?u(r,0,t,n):o())),p=h(((e,r,t,n,o)=>{var a=r&&y.o(r,t)&&s(r,t,n);return a?f(a):o()})),c={},v={5558:()=>d("default","react",[1,16,13,0],(()=>y.e(294).then((()=>()=>y(7294))))),2169:()=>d("default","react-dom",[1,16,13,0],(()=>y.e(935).then((()=>()=>y(3935))))),7883:()=>p("default","graphql",[1,15,4,0],(()=>y.e(792).then((()=>()=>y(8792))))),1079:()=>p("default","@apollo/client",[1,3,2,5],(()=>y.e(829).then((()=>()=>y(6829))))),3835:()=>p("default","subscriptions-transport-ws",[2,0,9,18],(()=>y.e(313).then((()=>()=>y(5313))))),6620:()=>p("default","shards-react",[1,1,0,3],(()=>y.e(624).then((()=>()=>y(1624)))))},g={148:[1079,3835,6620],169:[2169],558:[5558],883:[7883]},y.f.consumes=(e,r)=>{y.o(g,e)&&g[e].forEach((e=>{if(y.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,m[e]=t=>{delete b[e],t.exports=r()}},n=r=>{delete c[e],m[e]=t=>{throw delete b[e],r}};try{var o=v[e]();o.then?r.push(c[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={179:0};y.f.j=(r,t)=>{var n=y.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(169|558|883)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>{n=e[r]=[t,o]}));t.push(n[2]=o);var a=y.p+y.u(r),l=new Error;y.l(a,(t=>{if(y.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+r)}};var r=self.webpackChunkGraphChat=self.webpackChunkGraphChat||[],t=r.push.bind(r);r.push=r=>{for(var n,o,[a,l,i]=r,u=0,s=[];u<a.length;u++)o=a[u],y.o(e,o)&&e[o]&&s.push(e[o][0]),e[o]=0;for(n in l)y.o(l,n)&&(y.m[n]=l[n]);for(i&&i(y),t(r);s.length;)s.shift()()}})(),Promise.all([y.e(707),y.e(355),y.e(558),y.e(169),y.e(883),y.e(148)]).then(y.bind(y,598))})();