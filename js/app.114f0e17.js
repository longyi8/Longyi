(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2086:function(e,t,n){"use strict";n("ee1b")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},s=i,l=(n("7c55"),n("2877")),c=n("6544"),u=n.n(c),d=n("7496"),f=n("f6c4"),p=Object(l["a"])(s,a,o,!1,null,null,null),v=p.exports;u()(p,{VApp:d["a"],VMain:f["a"]});var h=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-overlay",{attrs:{value:e.overlay}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),n("div",{staticClass:"bg"}),n("div",{staticClass:"bg-overlay"},[n("canvas",{attrs:{id:"snowCanvas"}}),n("v-container",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-card",{staticClass:"mx-auto title-important",attrs:{color:"#00000000",elevation:"0",dark:""}},[n("h1",{staticClass:"font-strengthen"},[e._v(e._s(e.noticeTitle))]),n("p",{staticClass:"font-strengthen"},[e._v(e._s(e.noticeText))])])],1)],1)],1)],1)],1)},w=[],y=(n("cb29"),{data:function(){return{overlay:!0,noticeTitle:"Longyi test",noticeText:"All contents are for test only",imgUrl:"https://start.cery.cc/ys/img/anime.png"}},beforeCreate:function(){this.overlay=!0},mounted:function(){var e=this,t=new Image;t.src=this.imgUrl,t.onload=function(){e.overlay=!1},function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};window.requestAnimationFrame=e}();var n=[],r=document.getElementById("snowCanvas"),a=r.getContext("2d"),o=400,i=-100,s=-100;function l(){a.clearRect(0,0,r.width,r.height);for(var e=0;e<o;e++){var t=n[e],u=i,d=s,f=150,p=t.x,v=t.y,h=Math.sqrt((p-u)*(p-u)+(v-d)*(v-d));if(h<f){var m=f/(h*h),w=(u-p)/h,y=(d-v)/h,g=m/2;t.velX-=g*w,t.velY-=g*y}else t.velX*=.98,t.velY<=t.speed&&(t.velY=t.speed),t.velX+=Math.cos(t.step+=.05)*t.stepSize;a.fillStyle="rgba(255,255,255,"+t.opacity+")",t.y+=t.velY,t.x+=t.velX,(t.y>=r.height||t.y<=0)&&c(t),(t.x>=r.width||t.x<=0)&&c(t),a.beginPath(),a.arc(t.x,t.y,t.size,0,2*Math.PI),a.fill()}requestAnimationFrame(l)}function c(e){e.x=Math.floor(Math.random()*r.width),e.y=0,e.size=3*Math.random()+2,e.speed=1*Math.random()+.5,e.velY=e.speed,e.velX=0,e.opacity=.5*Math.random()+.3}function u(){for(var e=0;e<o;e++){var t=Math.floor(Math.random()*r.width),a=Math.floor(Math.random()*r.height),i=3*Math.random()+2,s=1*Math.random()+.5,c=.5*Math.random()+.3;n.push({speed:s,velY:s,velX:0,x:t,y:a,size:i,stepSize:Math.random()/30,step:0,opacity:c})}l()}r.width=window.innerWidth,r.height=window.innerHeight,r.addEventListener("mousemove",(function(e){i=e.clientX,s=e.clientY})),window.addEventListener("resize",(function(){r.width=window.innerWidth,r.height=window.innerHeight})),u()}}),g=y,b=(n("2086"),n("b0af")),M=n("62ad"),x=n("a523"),C=n("a797"),O=n("490a"),_=n("0fd9"),j=Object(l["a"])(g,m,w,!1,null,"6f04a276",null),A=j.exports;u()(j,{VApp:d["a"],VCard:b["a"],VCol:M["a"],VContainer:x["a"],VOverlay:C["a"],VProgressCircular:O["a"],VRow:_["a"]}),r["a"].use(h["a"]);var P=[{path:"/",name:"Home",component:A},{path:"*",name:"Home",component:A}],S=new h["a"]({routes:P}),V=S,z=n("f309");r["a"].use(z["a"]);var T=new z["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:V,vuetify:T,render:function(e){return e(v)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")},ee1b:function(e,t,n){}});
//# sourceMappingURL=app.114f0e17.js.map
