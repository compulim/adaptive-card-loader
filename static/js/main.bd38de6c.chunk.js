(this["webpackJsonpadaptive-card-loader"]=this["webpackJsonpadaptive-card-loader"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n,r=a(2),c=a.n(r),s=a(28),l=a.n(s),o=(a(34),a(4)),i=(a(35),a(11)),d=a.n(i),u=a(7),b=a.n(u),j=(a(36),a(0)),f=function(e){var t=e.className,a=e.onChange,n=e.value,c=Object(r.useRef)();c.current=n;var s=Object(r.useCallback)((function(e){var t=e.target.value;a&&a(t)}),[a]),l=Object(r.useCallback)((function(){a(JSON.stringify({type:"AdaptiveCard",body:[{text:"Hello, World!",type:"TextBlock"}]},null,2))}),[a]),o=Object(r.useCallback)((function(){a(JSON.stringify(Object(i.parse)(c.current||""),null,2)+"\n")}),[a,c]);return Object(j.jsxs)("div",{className:"ac-json-panel",children:[Object(j.jsxs)("div",{className:"ac-json-panel--buttons",children:[Object(j.jsx)("button",{className:"ac-json-panel--button",onClick:o,children:"Make it pretty"}),Object(j.jsx)("button",{className:"ac-json-panel--button",onClick:l,children:"Load a Hello World"})]}),Object(j.jsx)("textarea",{className:b()("ac-json-panel__text-area",t),onChange:s,spellCheck:"false",value:n})]})},p=a(8),h=a(29),v=a.n(h);a(96);function O(e,t){var a=Object(r.useMemo)((function(){try{return window.sessionStorage}catch(e){n||console.warn("useSessionState: Browser blocked access to sessionStorage, state will not be saved."),n=!0}}),[]),c=Object(r.useState)((function(){return a&&a.getItem(t)||e})),s=Object(o.a)(c,2),l=s[0],i=s[1];return[l,Object(r.useCallback)((function(e){i(e),a&&a.setItem(t,e)}),[t,a])]}var C=function(e){var t=e.className,a=e.json,n=O("false","ENABLE_HOST_CONFIG"),c=Object(o.a)(n,2),s=c[0],l=c[1],i=O("false","ENABLE_MARKDOWN"),u=Object(o.a)(i,2),f=u[0],h=u[1],C=Object(r.useRef)(),g="true"===s,m=Object(r.useCallback)((function(e){return l(!!e+"")}),[l]),_=Object(r.useCallback)((function(e){var t=e.target.checked;return m(t)}),[m]),x="true"===f,N=Object(r.useCallback)((function(e){return h(!!e+"")}),[h]),k=Object(r.useCallback)((function(e){var t=e.target.checked;return N(t)}),[N]),F=Object(r.useMemo)((function(){return g&&function(){var e=["Calibri","Helvetica Neue","Arial","sans-serif"].map((function(e){return"'".concat(e,"'")})).join(", "),t="#767676";return new p.HostConfig({containerStyles:{default:{foregroundColors:{default:{default:"Black",subtle:t},accent:{default:"#0063B1",subtle:"#0078D4"},attention:{default:"#D13438",subtle:"#A4262C"},dark:{default:"#000000",subtle:"#646464"},good:{default:"#0B6A0B",subtle:"#028A02"},light:{default:"#FFFFFF",subtle:t},warning:{default:"#B75C00",subtle:"#986F0B"}}},emphasis:{backgroundColor:"#F0F0F0",foregroundColors:{default:{default:"#000000",subtle:"#484644"}}},accent:{backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#333333",subtle:"#484644"}}},good:{backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#484644"}}},attention:{backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#484644"}}},warning:{backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#484644"}}}},supportsInteractivity:!0,fontFamily:e,imageSizes:{small:40,medium:80,large:160},actions:{actionAlignment:"stretch",actionsOrientation:"vertical",buttonSpacing:8,maxActions:100,showCard:{actionMode:"inline",inlineTopMargin:8},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},imageSet:{imageSize:"medium",maxImageHeight:100},factSet:{title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0,maxWidth:150},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:8}})}()}),[g]),w=Object(r.useMemo)((function(){return x&&new v.a}),[x]),S=Object(r.useMemo)((function(){try{var e=new p.AdaptiveCard;F&&(e.hostConfig=F),e.constructor.onProcessMarkdown=w?function(e,t){t.outputHtml=w.render(e),t.didProcess=!0}:void 0;var t=d.a.parse(a),n=new p.SerializationContext;e.parse(t,n);var r=n.eventCount,c=e.validateProperties().validationEvents;if(r){for(var s=[],l=0;l<r;l++)s.push(n.getEventAt(l));return{error:s.join(", ")}}return{adaptiveCard:e,validationEvents:c}}catch(o){return{error:o.message}}}),[F,a,w]),A=S.adaptiveCard,y=S.error,B=S.validationEvents,E=Object(r.useCallback)((function(){var e=C.current;e&&e.requestFullscreen()}),[C]);return Object(r.useEffect)((function(){if(A){for(var e=C.current,t=A.render();e.children.length;)e.removeChild(e.children[0]);e.appendChild(t)}}),[A,C]),Object(j.jsxs)("div",{className:b()("ac-render-panel",t),children:[Object(j.jsxs)("div",{className:"ac-render-panel__section ac-render-panel__button-bar",children:[Object(j.jsx)("h2",{className:"ac-render-panel__header",children:"Options"}),Object(j.jsx)("div",{className:"ac-render-panel__option",children:Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:x,onChange:k}),"Enable Markdown"]})}),Object(j.jsx)("div",{className:"ac-render-panel__option",children:Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:g,onChange:_}),"Use Adaptive Cards host config from Web Chat"]})})]}),y?Object(j.jsxs)("div",{className:"ac-render-panel__section ac-render-panel__error",children:[Object(j.jsx)("h2",{className:"ac-render-panel__header",children:"Fatal error"}),Object(j.jsx)("div",{className:"ac-render-panel__error-message",children:y})]}):Object(j.jsxs)("div",{className:"ac-render-panel__section",children:[Object(j.jsx)("h2",{className:"ac-render-panel__header",children:"Rendering"}),Object(j.jsx)("button",{className:"ac-render-panel__render-action",onClick:E,children:"Go fullscreen"}),Object(j.jsx)("div",{className:b()("ac-render-panel__adaptive-card",{"ac-render-panel--web-chat":!!F}),ref:C}),!!B.length&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"ac-render-panel__header",children:"Validation issues (non-fatal)"}),Object(j.jsx)("ul",{className:"ac-render-panel__validation-events-list",children:B.map((function(e,t){var a=e.message;return Object(j.jsx)("li",{children:a},t)}))})]})]})]})};var g=function(){var e=O('\n{\n  type: "AdaptiveCard",\n  "body": [\n  ]\n}\n',"ADAPTIVE_CARD_JSON"),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"app__set",children:[Object(j.jsx)("h1",{className:"app__panel-title",children:"Adaptive Card JSON"}),Object(j.jsx)(f,{onChange:n,value:a})]}),Object(j.jsxs)("div",{className:"app__set",children:[Object(j.jsx)("h1",{className:"app__panel-title",children:"Render"}),Object(j.jsx)(C,{json:a})]})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),m()}},[[97,1,2]]]);
//# sourceMappingURL=main.bd38de6c.chunk.js.map