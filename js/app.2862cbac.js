(function(e){function t(t){for(var a,c,l=t[0],i=t[1],u=t[2],s=0,d=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},o={app:0},n=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"43f12850"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=a);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var u=new Error;n=function(t){i.onerror=i.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,r[1](u)}o[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue_aframe/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=u;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0c47":function(e,t,r){e.exports=r.p+"img/ground.4959267b.jpeg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),o={class:"frame-container"},n=["src"],c=["src"];function l(e,t,r,l,i,u){var s=Object(a["u"])("a-assets"),b=Object(a["u"])("a-box"),d=Object(a["u"])("a-plane"),p=Object(a["u"])("a-sky"),f=Object(a["u"])("a-entity"),v=Object(a["u"])("a-scene");return Object(a["o"])(),Object(a["c"])("div",o,[Object(a["f"])(v,null,{default:Object(a["z"])((function(){return[Object(a["f"])(s,null,{default:Object(a["z"])((function(){return[Object(a["d"])("img",{id:"wall-image",src:i.wallSrc},null,8,n),Object(a["d"])("img",{id:"ground-image",src:i.groundSrc},null,8,c)]})),_:1}),Object(a["f"])(b,{position:"0 1.5 -1.5",width:"5",height:"3",depth:"0.1",src:"#wall-image"}),Object(a["f"])(b,{position:"-2.5 1.5 1",rotation:"0 90 0",width:"5",height:"3",depth:"0.1",src:"#wall-image"}),Object(a["f"])(b,{position:"2.5 1.5 1",rotation:"0 -90 0",width:"5",height:"3",depth:"0.1",src:"#wall-image"}),Object(a["f"])(b,{position:"0 1.5 3.5",width:"5",height:"3",depth:"0.1",src:"#wall-image"}),Object(a["f"])(b,{position:"0 1.5 1",width:"2",height:"3",depth:"2",src:"#wall-image"}),Object(a["f"])(d,{position:"0 0 0",rotation:"-90 0 0",height:"20",width:"20",src:"#ground-image"}),Object(a["f"])(p,{color:"#cffcf9"}),Object(a["f"])(f,{id:"rig",position:"0 0 0"},{default:Object(a["z"])((function(){return[Object(a["f"])(f,{id:"camera",camera:"","look-controls":""})]})),_:1})]})),_:1})])}var i={data:function(){return{wallSrc:r("ebf9"),groundSrc:r("0c47")}},methods:{test:function(){var e=document.querySelector("a-sphere"),t=e.getAttribute("color");e.setAttribute("color","blue"===t?"green":"blue")}}},u=(r("cf38"),r("6b0d")),s=r.n(u);const b=s()(i,[["render",l]]);var d=b,p=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),f=r("cf05"),v=r.n(f),h={class:"home"},g=Object(a["d"])("img",{alt:"Vue logo",src:v.a},null,-1);function m(e,t,r,o,n,c){var l=Object(a["u"])("HelloWorld");return Object(a["o"])(),Object(a["c"])("div",h,[g,Object(a["f"])(l,{msg:"Welcome to Your Vue.js App"})])}var j={class:"hello"},O=Object(a["e"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function w(e,t,r,o,n,c){return Object(a["o"])(),Object(a["c"])("div",j,[Object(a["d"])("h1",null,Object(a["w"])(r.msg),1),O])}var y={name:"HelloWorld",props:{msg:String}};r("8497");const _=s()(y,[["render",w],["__scopeId","data-v-b9167eee"]]);var k=_,x={name:"Home",components:{HelloWorld:k}};const S=s()(x,[["render",m]]);var P=S,C=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],A=Object(p["a"])({history:Object(p["b"])(),routes:C}),E=A;r("b048"),Object(a["b"])(d).use(E).mount("#app")},8497:function(e,t,r){"use strict";r("c45a")},c45a:function(e,t,r){},cbe9:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},cf38:function(e,t,r){"use strict";r("cbe9")},ebf9:function(e,t,r){e.exports=r.p+"img/wall.4b3452be.png"}});
//# sourceMappingURL=app.2862cbac.js.map