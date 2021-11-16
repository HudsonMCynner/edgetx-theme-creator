(this["webpackJsonpedgetx-theme"]=this["webpackJsonpedgetx-theme"]||[]).push([[0],{285:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(36),o=n.n(a),i=n(347),s=n(345),l=n(341),j=n(348),u=n(349),b=n(331),d=n(351),h=n(16),O=n(5),x=n(25),m=n(3),f={summary:{name:"EdgeTX",author:"EdgeTX Team",info:"The EdgeTX default colors"},colors:{PRIMARY1:"#000000",PRIMARY2:"#FFFFFF",PRIMARY3:"#0C3F66",SECONDARY1:"#125E99",SECONDARY2:"#B6E0F2",SECONDARY3:"#E4EEF2",FOCUS:"#14A1E5",EDIT:"#009909",ACTIVE:"#FFDE00",WARNING:"#E00000",DISABLED:"#8C8C8C"}},g=Object(c.createContext)({theme:f,onColorChange:function(){},onSummaryChange:function(){},onReset:function(){},onPrefill:function(){}}),v=function(e){var t=e.children,n=Object(c.useState)(f),r=Object(h.a)(n,2),a=r[0],o=r[1],i=Object(c.useCallback)((function(e,t){o((function(n){var c;return Object(x.a)(Object(x.a)({},n),{},{colors:Object(x.a)(Object(x.a)({},null!==(c=n.colors)&&void 0!==c?c:{}),{},Object(O.a)({},e,t))})}))}),[]),s=Object(c.useCallback)((function(e,t){o((function(n){var c;return Object(x.a)(Object(x.a)({},n),{},{summary:Object(x.a)(Object(x.a)({},null!==(c=n.summary)&&void 0!==c?c:{}),{},Object(O.a)({},e,t))})}))}),[]),l=Object(c.useCallback)((function(){return o(f)}),[]),j=Object(c.useCallback)((function(e){return o(e)}),[]),u=Object(c.useMemo)((function(){return{theme:a,onColorChange:i,onSummaryChange:s,onReset:l,onPrefill:j}}),[a,i,s,l,j]);return Object(m.jsx)(g.Provider,{value:u,children:t})},C=function(){var e;return null!==(e=Object(c.useContext)(g).theme.colors)&&void 0!==e?e:{}},p=n(339),y=n(340),S=n(337),E=n(145);function R(e){var t=e.name,n=e.value,r=e.title,a=Object(c.useState)(),o=Object(h.a)(a,2),i=o[0],s=o[1],l=Object(c.useCallback)((function(e){return s(e.currentTarget)}),[]),j=Object(c.useCallback)((function(){return s(void 0)}),[]),u=Object(c.useContext)(g).onColorChange,b=Object(c.useCallback)((function(e){return u(t,e.hex)}),[t,u]);return Object(m.jsxs)(d.a,{children:[Object(m.jsx)(p.a,{size:"small",avatar:Object(m.jsx)(y.a,{sx:{backgroundColor:n},children:"\xa0"}),label:r,onClick:l,component:"button"}),Object(m.jsx)(S.a,{open:!!i,anchorEl:i,onClose:j,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:Object(m.jsx)(E.a,{color:n,onChange:b})})]})}var A={Primary:{PRIMARY1:"Primary 1",PRIMARY2:"Primary 2",PRIMARY3:"Primary 3"},Secondary:{SECONDARY1:"Secondary 1",SECONDARY2:"Secondary 2",SECONDARY3:"Secondary 3"},State:{FOCUS:"Focus",EDIT:"Edit",ACTIVE:"Active",WARNING:"Warning",DISABLED:"Disabled"}};function w(){var e=C();return Object(m.jsx)(d.a,{children:Object.entries(A).map((function(t){var n=Object(h.a)(t,2),c=n[0],r=n[1];return Object(m.jsxs)(d.a,{children:[Object(m.jsx)(s.a,{variant:"caption",color:"textSecondary",children:c}),Object(m.jsx)(l.a,{container:!0,spacing:1,marginBottom:1,direction:"row",flexWrap:"wrap",children:Object.entries(r).map((function(t){var n=Object(h.a)(t,2),c=n[0],r=n[1];return Object(m.jsx)(l.a,{item:!0,xs:"auto",children:Object(m.jsx)(R,{name:c,value:e[c],title:r})})}))})]})}))})}var D=n(332),I=n(333),T=n(335),k=n(346),Y=n(342),F=n(103),P=n.n(F),N=n(144);var M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.reduce((function(t,n){return t[n]=null===e||void 0===e?void 0:e[n],t}),{})};var B=n(330),W=n(147);function X(){var e=Object(W.a)({accept:".yml"}),t=Object(h.a)(e,2),n=t[0],r=t[1].filesContent,a=function(){var e=Object(c.useContext)(g).onPrefill;return Object(c.useCallback)((function(t){var n,c=P.a.parse(t),r={summary:M(c.summary,["name","author","info"]),colors:(n=M(c.colors,["PRIMARY1","PRIMARY2","PRIMARY3","SECONDARY1","SECONDARY2","SECONDARY3","FOCUS","EDIT","ACTIVE","WARNING","DISABLED"]),Object.entries(n).reduce((function(e,t){var n=Object(h.a)(t,2),c=n[0],r="#"+(+n[1]).toString(16).padStart(6,"0").toUpperCase();return e[c]=r,e}),{}))};console.log(r),e(r)}),[e])}();return Object(c.useEffect)((function(){var e,t;r.length>0&&null!=(null===r||void 0===r||null===(e=r[0])||void 0===e?void 0:e.content)&&a(null===r||void 0===r||null===(t=r[0])||void 0===t?void 0:t.content)}),[r]),Object(m.jsxs)(Y.a,{variant:"outlined",onClick:n,children:[Object(m.jsx)(B.a,{sx:{marginRight:.5}}),"Open"]})}function L(){var e=function(){var e=Object(c.useContext)(g).theme;return Object(c.useCallback)((function(){var t,n=P.a.stringify(e).replace(/"#(.+)"/g,(function(e,t){return"0x"+t.toUpperCase()})),c=new Blob([n]);Object(N.saveAs)(c,(null===(t=e.summary)||void 0===t?void 0:t.name)+".yml")}),[e])}(),t=Object(c.useContext)(g).onReset;return Object(m.jsxs)(b.a,{spacing:1,direction:"row",width:"100%",justifyContent:"flex-end",children:[Object(m.jsx)(X,{}),Object(m.jsx)(d.a,{sx:{flexGrow:1}}),Object(m.jsx)(T.a,{title:"Reset to default",color:"primary",children:Object(m.jsx)(k.a,{onClick:t,children:Object(m.jsx)(D.a,{})})}),Object(m.jsxs)(Y.a,{variant:"contained",onClick:e,children:[Object(m.jsx)(I.a,{sx:{marginRight:.5}}),"Save"]})]})}function U(){return Object(m.jsx)(d.a,{paddingY:1,justifySelf:"end",sx:{position:"sticky",top:"100%",display:"flex",justifyContent:"center"},children:Object(m.jsxs)(s.a,{align:"center",color:"textSecondary",variant:"caption",children:["Made for FPV pilots by an FPV pilot"," ",Object(m.jsx)("a",{href:"https://www.youtube.com/user/edriskus",children:"@edriskus"})]})})}function V(){return Object(m.jsx)("div",{})}function z(){return Object(m.jsx)("div",{})}function G(){var e=C().SECONDARY1;return Object(m.jsx)(d.a,{sx:{backgroundColor:e},width:"100%",height:"17%"})}function H(e){var t=e.top,n=e.left,c=e.right,r=e.bottom,a=e.rotation,o=C().SECONDARY1;return Object(m.jsxs)(d.a,{position:"absolute",top:t,left:n,right:c,bottom:r,sx:{transform:"rotate(".concat(null!==a&&void 0!==a?a:"0deg",")"),display:"flex",flexDirection:"row"},children:[Object(m.jsx)(d.a,{children:new Array(40).fill(!0).map((function(e,t){return Object(m.jsx)(d.a,{sx:{width:9,height:"1px",backgroundColor:o},marginY:"3px"})}))}),Object(m.jsx)(d.a,{width:8,height:160,sx:{backgroundColor:o},marginLeft:"7px"})]})}function J(e){var t=e.children;return Object(m.jsxs)(d.a,{height:"83%",position:"relative",width:"100%",children:[Object(m.jsx)(d.a,{paddingTop:"2%",paddingRight:"9%",paddingLeft:"9%",paddingBottom:"10%",height:"100%",boxSizing:"border-box",children:t}),Object(m.jsx)(H,{top:"8%",left:".8%"}),Object(m.jsx)(H,{top:"8%",right:".8%",rotation:"180deg"}),Object(m.jsx)(H,{bottom:"-29%",left:"16%",rotation:"-90deg"}),Object(m.jsx)(H,{bottom:"-29%",right:"16%",rotation:"-90deg"})]})}var _=n.p+"static/media/ETX_bg_480x272.0654e17a.png";function q(){return Object(m.jsxs)(d.a,{position:"relative",width:"100vw",maxWidth:480,height:"56.66vw",maxHeight:272,sx:{backgroundImage:"url(".concat(_,")")},children:[Object(m.jsx)(G,{}),Object(m.jsx)(J,{children:Object(m.jsxs)(d.a,{width:"100%",height:"100%",children:[Object(m.jsx)(V,{}),Object(m.jsx)(z,{})]})})]})}var K=n(336);function Q(){var e=function(){var e;return null!==(e=Object(c.useContext)(g).theme.summary)&&void 0!==e?e:{}}(),t=e.name,n=e.author,r=e.info,a=Object(c.useContext)(g).onSummaryChange,o=Object(c.useCallback)((function(e){return function(t){a(e,t.target.value)}}),[a]),i={fullWidth:!0,size:"small"};return Object(m.jsxs)(b.a,{spacing:2,width:"100%",children:[Object(m.jsx)(K.a,Object(x.a)({label:"Name",value:t,onChange:o("name")},i)),Object(m.jsx)(K.a,Object(x.a)({label:"Author",value:n,onChange:o("author")},i)),Object(m.jsx)(K.a,Object(x.a)({label:"Info",multiline:!0,value:r,onChange:o("info")},i))]})}var Z=function(){return Object(m.jsxs)(i.a,{maxWidth:"md",sx:{display:"flex",justifyContent:"center",flexDirection:"column",minHeight:"100vh"},children:[Object(m.jsxs)(d.a,{padding:2,sx:{display:"flex",flexDirection:"column"},children:[Object(m.jsx)(s.a,{variant:"h2",children:"EdgeTX Theme Creator"}),Object(m.jsxs)(s.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",children:["This is an experimental tool that has only been tested with"," ",Object(m.jsx)("b",{children:"Edge TX 2.5"})," and on ",Object(m.jsx)("b",{children:"Radiomaster TX16S"}),". The resulting theme might display differently using different radios and might not work with upcoming EdgeTX releases."]})]}),Object(m.jsxs)(l.a,{container:!0,spacing:2,children:[Object(m.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(m.jsx)(j.a,{elevation:4,children:Object(m.jsx)(u.a,{children:Object(m.jsxs)(b.a,{spacing:2,width:"100%",children:[Object(m.jsx)(w,{}),Object(m.jsx)(Q,{}),Object(m.jsx)(L,{})]})})})}),Object(m.jsxs)(l.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)(q,{}),Object(m.jsxs)(s.a,{variant:"body2",gutterBottom:!0,color:"textSecondary",sx:{paddingTop:2},children:["Copy the downloaded file into THEMES directory of you SD card. Then power on the radio and select the theme in UI settings menu.",Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Note:"})," Some widgets might not display the theme colors because they're configurable individually from the widgets menu"]})]})]}),Object(m.jsx)(U,{})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,352)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},ee=n(350),te=n(146),ne=Object(ee.a)(Object(te.a)({palette:{}})),ce=n(343),re=n(334);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsxs)(ce.a,{theme:ne,children:[Object(m.jsx)(re.a,{}),Object(m.jsx)(v,{children:Object(m.jsx)(Z,{})})]})}),document.getElementById("root")),$()}},[[285,1,2]]]);
//# sourceMappingURL=main.bfa9698d.chunk.js.map