(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(130),a=n(0),c=n(26),s=n.n(c),i=n(5),l=n(133),u=n(47),j=n(128),b=n(136),d=n(127),f=n(129),m=n(131),g=n(135),p=n(132),x=n(126),h=n(36),O=n(72),v=n.n(O);function S(e){var t=e.username,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],l=Object(m.a)(),u=Object(a.useState)(!1),j=Object(i.a)(u,2),b=j[0],d=j[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),d(!0),c&&v.a.post("http://localhost:4000/new_message",{text:c,username:t}).then((function(e){s("")})).catch((function(e){console.log("error sending message:",e),l({title:"Error sending",description:e.message,status:"error",duration:9e3,isClosable:!0})})).finally((function(){return d(!1)}))},autoComplete:"off",children:Object(o.jsxs)(g.a,{direction:"row",bg:"gray.100",mt:"5",children:[Object(o.jsx)(p.a,{name:"message",placeholder:"Enter a message",onChange:function(e){return s(e.target.value)},value:c,bg:"white",border:"none",autoFocus:!0}),Object(o.jsx)(x.a,{colorScheme:"teal","aria-label":"Send",fontSize:"20px",icon:Object(o.jsx)(h.c,{}),type:"submit",disabled:!c,isLoading:b})]})})}var w=n(134),y=n(78),C=function(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){return e.current.scrollIntoView()})),Object(o.jsx)("div",{ref:e})},E=n(76),k=n.n(E),F=n(77),R=n.n(F);function T(e){var t=e.message,n=e.isYou;return Object(o.jsx)(d.a,{display:"grid",justifyItems:n?"end":"start",children:Object(o.jsxs)(j.a,{templateColumns:"1fr 1fr",templateRows:"30px 1fr",w:"70%",px:"3",py:"2",borderRadius:"5px",borderTopLeftRadius:n?"5px":"0",borderTopRightRadius:n?"0":"5px",bg:"gray.100",mt:"5",position:"relative",_after:{position:"absolute",content:"''",width:0,height:0,borderStyle:"solid",borderWidth:n?"0px 0px 10px 10px":"0px 10px 10px 0",borderColor:n?"transparent transparent transparent #EDF2F7":"transparent #EDF2F7 transparent transparent",top:0,left:n?"auto":"-10px",right:n?"-10px":"auto"},children:[Object(o.jsx)(j.b,{fontWeight:"500",fontSize:"md",justifySelf:"start",colSpan:2,color:"gray.500",mb:"2",children:n?"You":t.username}),Object(o.jsx)(j.b,{justifySelf:"start",textAlign:"left",wordBreak:"break-word",fontSize:"md",children:t.text}),Object(o.jsx)(j.b,{fontSize:"sm",justifySelf:"end",alignSelf:"end",children:new Date(t.timestamp).toLocaleTimeString()})]})})}function z(e){var t=e.username,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),j=u[0],b=u[1],f=null,m=function(){console.log("called connectToStream()"),b(!1),window.EventSource&&(console.log("connecting to source"),(f=new EventSource("http://localhost:4000/stream")).onopen=function(){console.log("Connection was opened")},f.addEventListener("connected",(function(e){console.log("connected event:",e.data);var t=JSON.parse(e.data);s(t)}),!1),f.addEventListener("new_message",(function(e){var t=JSON.parse(e.data);console.log("new_message event:",t),s(t)})),f.onmessage=function(e){var t=JSON.parse(e.data);console.log("message event:",t),s(t)},f.onerror=function(e){console.log("Stream error:",e),0===e.currentTarget.readyState&&(b(!0),f.close(),console.log("Connection was closed"))})};return Object(a.useEffect)((function(){return console.log("effect ran"),m(),function(){f&&f.close(),console.log("Connection was closed by useEffect unmount")}}),[]),Object(o.jsxs)(o.Fragment,{children:[c.length?c.map((function(e,n){var r=e.username===t;return Object(o.jsxs)("div",{children:[Object(o.jsx)(T,{message:e,isYou:r}),Object(o.jsx)(C,{})]},n)})):Object(o.jsx)(d.a,{as:"h3",textAlign:"center",children:"No messages \ud83d\ude1e"}),j&&Object(o.jsxs)(w.a,{status:"error",mt:"20px",children:["Disconnected from server",Object(o.jsx)(y.a,{ml:"5px",onClick:m,colorScheme:"red",variant:"link",children:"try to reconnect"})]})]})}k.a.extend(R.a);n(112);function D(e){var t=e.username,n=e.setUsername,r=Object(a.useState)(t),c=Object(i.a)(r,2),s=c[0],l=c[1],u=Object(a.useState)(!1),j=Object(i.a)(u,2),b=j[0],d=j[1],f=function(){d(!b)},m=Object(a.useRef)(null);Object(a.useEffect)((function(){b&&m.current.focus()}),[b]),Object(a.useEffect)((function(){l(t)}),[t]);var O=function(e){e.preventDefault(),f(),s?(n(s),localStorage.setItem("username",s)):l(t)};return Object(o.jsx)("form",{onSubmit:O,children:Object(o.jsxs)(g.a,{direction:"row",children:[b?Object(o.jsx)(p.a,{name:"username",placeholder:"Choose a username",onChange:function(e){return l(e.target.value)},value:s,bg:"gray.100",size:"sm",border:"none",onBlur:O,ref:m}):Object(o.jsxs)("span",{onClick:f,style:{cursor:"pointer"},children:["Welcome ",Object(o.jsx)("strong",{children:s})]}),Object(o.jsx)(x.a,{size:"sm",pb:"3px",variant:"outline",colorScheme:"teal","aria-label":"Save",fontSize:"15px",icon:b?Object(o.jsx)(h.b,{}):Object(o.jsx)(h.a,{}),border:"none",onClick:function(e){b?O(e):f()}})]})})}var I=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("username");console.log("localName :>> ",e),r(e||"Guest")}),[]),Object(o.jsx)(l.a,{theme:u.b,children:Object(o.jsxs)(j.a,{minH:"100vh",templateRows:"min-content auto",children:[Object(o.jsxs)(j.a,{templateColumns:"1fr 1fr",justifyItems:"center",children:[Object(o.jsx)(j.b,{justifySelf:"start",m:"2",children:Object(o.jsx)(b.a,{src:"/rchat_logo.png",height:"60px"})}),Object(o.jsx)(j.b,{justifySelf:"end",alignSelf:"center",mr:"5",children:Object(o.jsx)(D,{username:n,setUsername:r})})]}),Object(o.jsx)(d.a,{bg:"gray.100",children:Object(o.jsxs)(f.a,{maxW:"600px",mt:"5",display:"grid",gridTemplateRows:"1fr 60px",height:"96%",pb:"12px",children:[Object(o.jsx)(d.a,{bg:"white",p:"5",overflow:"auto",borderRadius:"10px",children:Object(o.jsx)(z,{username:n})}),Object(o.jsx)(S,{username:n})]})})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(o.jsxs)(a.StrictMode,{children:[Object(o.jsx)(r.a,{}),Object(o.jsx)(I,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),L()}},[[113,1,2]]]);
//# sourceMappingURL=main.88ea932c.chunk.js.map