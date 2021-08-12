(this["webpackJsonpadaptive-card-loader"]=this["webpackJsonpadaptive-card-loader"]||[]).push([[0],{34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n,r=t(2),c=t.n(r),s=t(27),l=t.n(s),o=(t(34),t(4)),i=(t(35),t(10)),d=t.n(i),u=(t(36),t(0)),b=function(e){var a=e.className,t=e.onChange,n=e.value,c=Object(r.useCallback)((function(e){var a=e.target.value;t&&t(a)}),[t]);return Object(u.jsx)("div",{className:"ac-json-panel",children:Object(u.jsx)("textarea",{className:d()("ac-json-panel__text-area",a),onChange:c,spellCheck:"false",value:n})})},j=t(7),f=t(28),p=t.n(f),h=t(29),v=t.n(h);t(96);function g(e,a){var t=Object(r.useMemo)((function(){try{return window.sessionStorage}catch(e){n||console.warn("useSessionState: Browser blocked access to sessionStorage, state will not be saved."),n=!0}}),[]),c=Object(r.useState)((function(){return t&&t.getItem(a)||e})),s=Object(o.a)(c,2),l=s[0],i=s[1];return[l,Object(r.useCallback)((function(e){i(e),t&&t.setItem(a,e)}),[a,t])]}var m=function(e){var a=e.className,t=e.json,n=g("false","ENABLE_HOST_CONFIG"),c=Object(o.a)(n,2),s=c[0],l=c[1],i=g("false","ENABLE_MARKDOWN"),b=Object(o.a)(i,2),f=b[0],h=b[1],m=Object(r.useRef)(),O="true"===s,C=Object(r.useCallback)((function(e){return l(!!e+"")}),[l]),_=Object(r.useCallback)((function(e){var a=e.target.checked;return C(a)}),[C]),x="true"===f,N=Object(r.useCallback)((function(e){return h(!!e+"")}),[h]),k=Object(r.useCallback)((function(e){var a=e.target.checked;return N(a)}),[N]),F=Object(r.useMemo)((function(){return O&&function(){var e=["Calibri","Helvetica Neue","Arial","sans-serif"].map((function(e){return"'".concat(e,"'")})).join(", "),a="#767676";return new j.HostConfig({containerStyles:{default:{foregroundColors:{default:{default:"Black",subtle:a},accent:{default:"#0063B1",subtle:"#0078D4"},attention:{default:"#D13438",subtle:"#A4262C"},dark:{default:"#000000",subtle:"#646464"},good:{default:"#0B6A0B",subtle:"#028A02"},light:{default:"#FFFFFF",subtle:a},warning:{default:"#B75C00",subtle:"#986F0B"}}},emphasis:{backgroundColor:"#F0F0F0",foregroundColors:{default:{default:"#000000",subtle:"#484644"}}},accent:{backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#333333",subtle:"#484644"}}},good:{backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#484644"}}},attention:{backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#484644"}}},warning:{backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#484644"}}}},supportsInteractivity:!0,fontFamily:e,imageSizes:{small:40,medium:80,large:160},actions:{actionAlignment:"stretch",actionsOrientation:"vertical",buttonSpacing:8,maxActions:100,showCard:{actionMode:"inline",inlineTopMargin:8},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},imageSet:{imageSize:"medium",maxImageHeight:100},factSet:{title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0,maxWidth:150},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:8}})}()}),[O]),w=Object(r.useMemo)((function(){return x&&new p.a}),[x]),S=Object(r.useMemo)((function(){try{var e=new j.AdaptiveCard;F&&(e.hostConfig=F),e.constructor.onProcessMarkdown=w?function(e,a){a.outputHtml=w.render(e),a.didProcess=!0}:void 0;var a=v.a.parse(t),n=new j.SerializationContext;e.parse(a,n);var r=n.eventCount,c=e.validateProperties().validationEvents;if(r){for(var s=[],l=0;l<r;l++)s.push(n.getEventAt(l));return{error:s.join(", ")}}return{adaptiveCard:e,validationEvents:c}}catch(o){return{error:o.message}}}),[F,t,w]),A=S.adaptiveCard,E=S.error,B=S.validationEvents;return Object(r.useEffect)((function(){if(A){for(var e=m.current,a=A.render();e.children.length;)e.removeChild(e.children[0]);e.appendChild(a)}}),[A,m]),Object(u.jsxs)("div",{className:d()("ac-render-panel",a),children:[Object(u.jsxs)("div",{className:"ac-render-panel__section ac-render-panel__button-bar",children:[Object(u.jsx)("h2",{className:"ac-render-panel__header",children:"Options"}),Object(u.jsx)("div",{className:"ac-render-panel__option",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:x,onChange:k}),"Enable Markdown"]})}),Object(u.jsx)("div",{className:"ac-render-panel__option",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:O,onChange:_}),"Use Adaptive Cards host config from Web Chat"]})})]}),E?Object(u.jsxs)("div",{className:"ac-render-panel__section ac-render-panel__error",children:[Object(u.jsx)("h2",{className:"ac-render-panel__header",children:"Fatal error"}),Object(u.jsx)("div",{className:"ac-render-panel__error-message",children:E})]}):Object(u.jsxs)("div",{className:"ac-render-panel__section",children:[Object(u.jsx)("h2",{className:"ac-render-panel__header",children:"Rendering"}),Object(u.jsx)("div",{className:"ac-render-panel__adaptive-card",ref:m}),!!B.length&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"ac-render-panel__header",children:"Validation issues (non-fatal)"}),Object(u.jsx)("ul",{className:"ac-render-panel__validation-events-list",children:B.map((function(e,a){var t=e.message;return Object(u.jsx)("li",{children:t},a)}))})]})]})]})};var O=function(){var e=g('\n{\n  type: "AdaptiveCard",\n  "body": [\n  ]\n}\n',"ADAPTIVE_CARD_JSON"),a=Object(o.a)(e,2),t=a[0],n=a[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"app__set",children:[Object(u.jsx)("h1",{className:"app__panel-title",children:"Adaptive Card JSON"}),Object(u.jsx)(b,{onChange:n,value:t})]}),Object(u.jsxs)("div",{className:"app__set",children:[Object(u.jsx)("h1",{className:"app__panel-title",children:"Render"}),Object(u.jsx)(m,{json:t})]})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,98)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),c(e),s(e)}))};l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),C()}},[[97,1,2]]]);
//# sourceMappingURL=main.cb1cf3e3.chunk.js.map