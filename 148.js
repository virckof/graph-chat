(self.webpackChunkGraphChat=self.webpackChunkGraphChat||[]).push([[148],{598:(e,t,n)=>{"use strict";n.r(t);var r=n(5558),o=n.n(r),a=n(2169),l=n.n(a),c=(n(4039),n(8973),n(8548),n(9713)),s=n.n(c),u=n(3038),i=n.n(u),d=n(1079),f=n(1072),m=n(8655),p=n.n(m);function g(){var e=p()(["\n    subscription {\n        messages {\n            id\n            content\n            user\n        }\n    }\n"]);return g=function(){return e},e}function h(){var e=p()(["\n    mutation($user: String!, $content: String!){\n        sendMessage(user: $user, content: $content)\n    }\n"]);return h=function(){return e},e}function y(){var e=p()(["\n    query {\n        messages {\n            id\n            content\n            user\n        }\n    }\n"]);return y=function(){return e},e}(0,d.gql)(y());var v=(0,d.gql)(h()),b=(0,d.gql)(g()),C=function(e){var t=e.user,n=(0,d.useSubscription)(b).data;(0,r.useEffect)((function(){a()}),[n]);var a=function(){var e=document.getElementById("chatMessages");e&&(e.scrollTop=e.scrollHeight)};if(!n)return null;var l=n.messages.map((function(e){var n={display:"flex",justifyContent:t===e.user?"flex-end":"flex-start",paddingBottom:"1em"},r={background:t===e.user?"#58bf56":"#e5e6ea",color:t===e.user?"white":"black",padding:"1em",borderRadius:"1em",maxWidth:"60%"};return o().createElement("div",{style:n},o().createElement("div",{style:{height:50,width:50,marginRight:"0.5em",border:"2px solid #e5e6ea",borderRadius:25,textAlign:"center",fontSize:"15pt",paddingTop:8}}," ",e.user.slice(0,2).toUpperCase()),o().createElement("div",{style:r}," ",e.content))}));return o().createElement("div",{style:{overflowY:"scroll",maxHeight:400,marginBottom:10},id:"chatMessages"},l)},E=n(6620),w=function(e){var t=e.user,n=e.content,r=e.onUserChange,a=e.onContentChange,l=e.onSend,c={paddingLeft:10};return o().createElement(E.Row,null,o().createElement(E.Col,{xs:2,style:c},o().createElement(E.FormInput,{label:"User",value:t,onChange:function(e){return r(e.target.value)}})),o().createElement(E.Col,{xs:8,style:c},o().createElement(E.FormInput,{label:"Content",value:n,onChange:function(e){return a(e.target.value)},onKeyUp:function(e){13===e.keyCode&&l()}})),o().createElement(E.Col,{xs:2,style:c},o().createElement(E.Button,{style:{width:"100%"},onClick:l}," Send ")))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=new f.A({uri:"ws://localhost:4000",options:{reconnect:!0}}),k=new d.ApolloClient({uri:"http://localhost:4000",cache:new d.InMemoryCache,link:j}),P=function(){var e=(0,r.useState)({user:"Pachi",content:""}),t=i()(e,2),n=t[0],a=t[1],l=(0,d.useMutation)(v),c=i()(l,1)[0];return o().createElement(E.Card,{style:{maxWidth:"700px",width:"50%",height:"50%",marginTop:"10%",marginLeft:"25%"}},o().createElement(E.CardHeader,null,"Graph Chat"),o().createElement(E.CardBody,null,o().createElement(E.Container,{style:{overflow:"hidden"}},o().createElement(C,{style:{overflowY:"scroll"},user:n.user}),o().createElement(w,{user:n.user,content:n.content,onUserChange:function(e){a(x(x({},n),{},{user:e}))},onContentChange:function(e){a(x(x({},n),{},{content:e}))},onSend:function(){n.content&&""!==n.content&&(c({variables:n}),a(x(x({},n),{},{content:""})))}}))))};const S=function(){return o().createElement(d.ApolloProvider,{client:k},o().createElement(P,null))};var B=function(){return o().createElement(S,null)};l().render(o().createElement(B,null),document.getElementById("app"))},1424:(e,t,n)=>{(t=n(3645)(!1)).push([e.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}",""]),e.exports=t},8548:(e,t,n)=>{var r=n(3379),o=n(1424);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}}}]);