(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[16],{538:function(e){e.exports=JSON.parse('[{"id":"photo1","src":"/img/furniture/object1.png"},{"id":"photo2","src":"/img/furniture/object2.png"},{"id":"photo3","src":"/img/furniture/object3.png"}]')},619:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(76),i=c(0),a=c(613),d=c(15),o=c(538);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,c=e+Math.random()*(t+1-e);return Math.floor(c)}var u=function(e){var t=e.img,c=e.setAddedImage;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{id:t.id,src:t.src,alt:"image",width:80,height:80}),Object(n.jsx)("button",{onClick:function(){c(Object(d.a)(Object(d.a)({},t),{},{key:s()}))},children:"+"})]})},j=function(e){var t=e.setAddedImage;return Object(n.jsx)("div",{style:{display:"flex",gap:"10px",overflow:"scroll"},children:o.map((function(e){return Object(n.jsx)(u,{img:e,setAddedImage:t},e.id)}))})},b=c(593),l=c(594),h=c(106),f=c(592),g=c.n(f),O=function(e){var t=e.src,c=e.x,i=e.y,a=g()(t),d=Object(r.a)(a,1)[0];return Object(n.jsx)(l.a,{x:c,y:i,image:d,width:100,height:100,draggable:!0})},m=function(e){var t=e.addedImage,c=Object(i.useState)([]),a=Object(r.a)(c,2),o=a[0],s=a[1],u=Object(i.useState)(0),j=Object(r.a)(u,2),f=j[0],g=j[1],m=Object(i.useRef)(null);Object(i.useEffect)((function(){t&&s([].concat(Object(b.a)(o),[Object(d.a)(Object(d.a)({},t),{},{x:10,y:10})]))}),[null===t||void 0===t?void 0:t.key]),Object(i.useEffect)((function(){document.querySelector("canvas").style.background="white",g(document.querySelector(".konvajs-content").parentElement.offsetWidth)}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.c,{width:f,height:500,ref:m,children:Object(n.jsx)(l.b,{children:o.map((function(e){return Object(n.jsx)(O,{src:e.src,x:e.x,y:e.y})}))})}),Object(n.jsx)(h.a,{type:"link",onClick:function(){!function(e,t){var c=document.createElement("a");c.download=t,c.href=e,document.body.appendChild(c),c.click(),document.body.removeChild(c)}(m.current.toDataURL(),"planner.png")},children:"Export plan image"})]})};t.default=function(){var e=Object(i.useState)(),t=Object(r.a)(e,2),c=t[0],d=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(a.a,{bodyStyle:{padding:"10px"},children:Object(n.jsx)(j,{setAddedImage:d})}),Object(n.jsx)(m,{addedImage:c})]})}}}]);
//# sourceMappingURL=16.9dcc984d.chunk.js.map