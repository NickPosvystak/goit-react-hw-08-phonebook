(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[68],{7068:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return fn}});var t,o,a,i,c=r(1413),s=r(9195),l=r(9434),u=r(4664),d=r(6916),p=function(n){return n.phonebook},f=(0,d.P1)(p,(function(n){return n.contacts})),x=(0,d.P1)(p,(function(n){return n.isLoading})),m=(0,d.P1)(p,(function(n){return n.error})),g=((0,d.P1)(p,(function(n){return n.filterTerm})),(0,d.P1)((function(n){return n.filter}),(function(n){return n.filterTerm}))),h=r(168),v=r(6487),b=v.ZP.form(t||(t=(0,h.Z)(["\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 10px;\n  /* border: 2px solid black; */\n  border-radius: 6px;\n  justify-content: center;\n\n  margin-right: auto;\n  margin-left: auto;\n\n \n"]))),Z=v.ZP.h1(o||(o=(0,h.Z)(["\n  text-align: center;\n\n  margin-bottom: 15px;\n"]))),j=v.ZP.input(a||(a=(0,h.Z)(["\n  flex: 1 0 140px;\n  width: 100%;\n  margin-bottom: 10px;\n  border-radius: 6px;\n  border: 0;\n"]))),w=v.ZP.button(i||(i=(0,h.Z)(["\n  border-radius: 6px;\n  flex: 1 0 50px;\n\n  // Style\n  background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);\n  box-sizing: border-box;\n  color: #ffffff;\n  display: flex;\n  font-size: 16px;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 1.75rem;\n  text-decoration: none;\n  width: 100%;\n  border: 0;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n\n  @media only screen and (min-width: 768px) {\n    margin-top: 10px;\n    padding: 1rem 2rem;\n  }\n  &:hover {\n    background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);\n  }\n"]))),y=r(3329),I=function(){var n=(0,s.cI)(),e=n.register,r=n.handleSubmit,t=n.reset,o=n.formState.errors,a=(0,l.I0)(),i=(0,l.v9)(f);return(0,y.jsxs)(b,{onSubmit:r((function(n){i&&i.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts")):a((0,u.uK)(n)),t()})),children:[(0,y.jsx)(Z,{children:"Phonebook"}),(0,y.jsxs)("label",{children:[(0,y.jsx)(j,(0,c.Z)((0,c.Z)({},e("name",{required:!0})),{},{type:"text",placeholder:" Rosa Andersen"})),o.name&&(0,y.jsx)("span",{children:"This field is required"})]}),(0,y.jsxs)("label",{children:[(0,y.jsx)(j,(0,c.Z)((0,c.Z)({},e("number",{required:!0})),{},{type:"number",placeholder:" 123456789"})),o.number&&(0,y.jsx)("span",{children:"This field is required"})]}),(0,y.jsx)(w,{type:"submit",children:"Add contact"})]})},z=r(2791),S=r(493),k=r(3366),P=r(7462),C=r(3733),R=r(4419),F=r(9480),M=r(6934),L=r(1402),_=r(5878),T=r(1217);function A(n){return(0,T.Z)("MuiListItemAvatar",n)}(0,_.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var q=["className"],E=(0,M.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,"flex-start"===r.alignItems&&e.alignItemsFlexStart]}})((function(n){var e=n.ownerState;return(0,P.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})})),N=z.forwardRef((function(n,e){var r=(0,L.Z)({props:n,name:"MuiListItemAvatar"}),t=r.className,o=(0,k.Z)(r,q),a=z.useContext(F.Z),i=(0,P.Z)({},r,{alignItems:a.alignItems}),c=function(n){var e=n.alignItems,r=n.classes,t={root:["root","flex-start"===e&&"alignItemsFlexStart"]};return(0,R.Z)(t,A,r)}(i);return(0,y.jsx)(E,(0,P.Z)({className:(0,C.Z)(c.root,t),ownerState:i,ref:e},o))})),O=r(3044),B=r(4942),V=r(2065),H=r(3701),W=r(4036);function D(n){return(0,T.Z)("MuiIconButton",n)}var G,K,X,Y,J,Q,U=(0,_.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),$=["edge","children","className","color","disabled","disableFocusRipple","size"],nn=(0,M.ZP)(H.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,"default"!==r.color&&e["color".concat((0,W.Z)(r.color))],r.edge&&e["edge".concat((0,W.Z)(r.edge))],e["size".concat((0,W.Z)(r.size))]]}})((function(n){var e=n.theme,r=n.ownerState;return(0,P.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette.action.activeChannel," / ").concat(e.vars.palette.action.hoverOpacity,")"):(0,V.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(function(n){var e,r=n.theme,t=n.ownerState,o=null==(e=(r.vars||r).palette)?void 0:e[t.color];return(0,P.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,P.Z)({color:null==o?void 0:o.main},!t.disableRipple&&{"&:hover":(0,P.Z)({},o&&{backgroundColor:r.vars?"rgba(".concat(o.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,V.Fq)(o.main,r.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:r.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:r.typography.pxToRem(28)},(0,B.Z)({},"&.".concat(U.disabled),{backgroundColor:"transparent",color:(r.vars||r).palette.action.disabled}))})),en=z.forwardRef((function(n,e){var r=(0,L.Z)({props:n,name:"MuiIconButton"}),t=r.edge,o=void 0!==t&&t,a=r.children,i=r.className,c=r.color,s=void 0===c?"default":c,l=r.disabled,u=void 0!==l&&l,d=r.disableFocusRipple,p=void 0!==d&&d,f=r.size,x=void 0===f?"medium":f,m=(0,k.Z)(r,$),g=(0,P.Z)({},r,{edge:o,color:s,disabled:u,disableFocusRipple:p,size:x}),h=function(n){var e=n.classes,r=n.disabled,t=n.color,o=n.edge,a=n.size,i={root:["root",r&&"disabled","default"!==t&&"color".concat((0,W.Z)(t)),o&&"edge".concat((0,W.Z)(o)),"size".concat((0,W.Z)(a))]};return(0,R.Z)(i,D,e)}(g);return(0,y.jsx)(nn,(0,P.Z)({className:(0,C.Z)(h.root,i),centerRipple:!0,focusRipple:!p,disabled:u,ref:e,ownerState:g},m,{children:a}))})),rn=r(3717),tn=r(7247),on=(v.ZP.div(G||(G=(0,h.Z)(["\n  background-color: red;\n"]))),v.ZP.ul(K||(K=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  margin-right: auto;\n\n  margin-left: auto;\n"])))),an=v.ZP.li(X||(X=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: floralwhite;\n  font-size: 16px;\n\n  padding: 4px 10px;\n  margin-bottom: 15px;\n\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n  transition: 350ms;\n  &:hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      hsla(240, 7%, 97%, 1) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n    transform: translateY(-2px) translateX(6px);\n    transition: 250ms;\n  }\n\n  /* p {\n    margin-left: auto;\n    margin-right: 20px;\n    font-size: 16px;\n    width: 100%;\n    text-align: start;\n  } */\n"]))),cn=v.ZP.p(Y||(Y=(0,h.Z)(["\n  margin-left: auto;\n  margin-right: 20px;\n  font-size: 16px;\n  width: 100%;\n  text-align: start;\n"]))),sn=function(n){n.contacts;var e=(0,l.v9)(f),r=(0,l.v9)(x),t=(0,l.v9)(g),o=(0,l.I0)(),a=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,y.jsxs)("div",{children:[r&&(0,y.jsx)("p",{children:"Loading..."}),(0,y.jsx)(on,{children:(0,y.jsx)(S.Z,{children:Array.isArray(a)&&a.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,y.jsxs)(an,{children:[(0,y.jsx)(N,{children:(0,y.jsx)(O.Z,{children:(0,y.jsx)(rn.Z,{})})}),(0,y.jsx)(cn,{children:r}),(0,y.jsx)("p",{children:t}),(0,y.jsx)(en,{edge:"end","aria-label":"delete",onClick:function(){var n;n=e,o((0,u.GK)(n))},children:(0,y.jsx)(tn.Z,{})})]},e)}))})})]})},ln=v.ZP.div(J||(J=(0,h.Z)(["\n  padding-left: 10px;\n  input {\n    padding: 4px 8px;\n    border-radius: 6px;\n    outline-color: #0000ff;\n    margin-bottom: 15px;\n    border: 0;\n    width: 200px;\n  }\n  h3 {\n    margin-bottom: 10px;\n  }\n"]))),un=r(6895),dn=function(){var n=(0,l.I0)(),e=(0,l.v9)(g);return(0,y.jsxs)(ln,{children:[(0,y.jsx)("h3",{children:"Find contact by name"}),(0,y.jsx)("input",{type:"text",placeholder:"Search contact",value:e,onChange:function(e){n((0,un.c)(e.target.value))}})]})},pn=v.ZP.h2(Q||(Q=(0,h.Z)(["\npadding-left: 10px;\npadding-top: 10px;\n"]))),fn=function(){var n=(0,l.I0)(),e=(0,l.v9)(f),r=(0,l.v9)(x),t=(0,l.v9)(m);return(0,z.useEffect)((function(){n((0,u.yF)())}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(I,{}),(0,y.jsx)(pn,{children:"Contacts"}),r&&!t&&(0,y.jsx)("h3",{children:"Loading..."}),e&&0!==e.length?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(dn,{}),(0,y.jsx)(sn,{})]}):(0,y.jsx)("p",{children:"There is no any contacts here yet"})]})}},7247:function(n,e,r){"use strict";var t=r(4836);e.Z=void 0;var o=t(r(5649)),a=r(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=i},3717:function(n,e,r){"use strict";var t=r(4836);e.Z=void 0;var o=t(r(5649)),a=r(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");e.Z=i},5649:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(4454)},4454:function(n,e,r){"use strict";r.r(e),r.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return j},unstable_useEnhancedEffect:function(){return x.Z},unstable_useId:function(){return m},unsupportedProp:function(){return g},useControlled:function(){return h.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return Z.Z}});var t=r(5902),o=r(4036),a=r(8949).Z,i=r(9201),c=r(3199);var s=function(n,e){return function(){return null}},l=r(9103),u=r(8301),d=r(7602);r(7462);var p=function(n,e){return function(){return null}},f=r(2971).Z,x=r(162),m=r(8252).Z;var g=function(n,e,r,t,o){return null},h=r(5158),v=r(9683),b=r(2071),Z=r(3031),j={configure:function(n){t.Z.configure(n)}}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=68.fc277771.chunk.js.map