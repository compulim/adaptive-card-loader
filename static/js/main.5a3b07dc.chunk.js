(this["webpackJsonpadaptive-card-loader"]=this["webpackJsonpadaptive-card-loader"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n,r=a(2),c=a.n(r),s=a(29),o=a.n(s),i=(a(36),a(5)),d=(a(37),a(11)),l=a.n(d),u=(a(38),a(1)),j=function(e){var t=e.className,a=e.onChange,n=e.value,c=Object(r.useCallback)((function(e){var t=e.target.value;a&&a(t)}),[a]);return Object(u.jsx)("textarea",{className:l()("ac-json-panel",t),onChange:c,value:n})},b=a(31),v=a(16),p=a(30),O=a.n(p);a(98);function f(e,t){var a=Object(r.useMemo)((function(){try{return window.sessionStorage}catch(e){n||console.warn("useSessionState: Browser blocked access to sessionStorage, state will not be saved."),n=!0}}),[]),c=Object(r.useState)((function(){return a&&a.getItem(t)||e})),s=Object(i.a)(c,2),o=s[0],d=s[1];return[o,Object(r.useCallback)((function(e){d(e),a&&a.setItem(t,e)}),[t,a])]}var h=function(e){var t=e.className,a=e.json,n=f("false","ENABLE_MARKDOWN"),c=Object(i.a)(n,2),s=c[0],o=c[1],d=Object(r.useRef)(),j="true"===s,p=Object(r.useCallback)((function(e){return o(!!e+"")}),[o]),h=Object(r.useCallback)((function(e){var t=e.target.checked;p(t)}),[p]),m=Object(r.useMemo)((function(){return j&&new O.a}),[j]),C=Object(r.useMemo)((function(){try{var e=new v.AdaptiveCard;e.constructor.onProcessMarkdown=m?function(e,t){t.outputHtml=m.render(e),t.didProcess=!0}:void 0;var t=JSON.parse(a),n=new v.SerializationContext;e.parse(t,n);var r=n.eventCount;if(r){for(var c=[],s=0;s<r;s++)c.push(n.getEventAt(s));return{error:c.join(", ")}}return{adaptiveCard:e}}catch(o){return{error:o.message}}}),[a,m]),x=C.adaptiveCard,g=C.error;return Object(r.useEffect)((function(){if(x){for(var e=d.current,t=x.render(),a=0,n=Object(b.a)(e.children);a<n.length;a++){var r=n[a];e.removeChild(r)}e.appendChild(t)}}),[x,d]),Object(u.jsxs)("div",{className:l()("ac-render-panel",t),children:[Object(u.jsx)("div",{className:"ac-render-panel__button-bar",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:j,onChange:h}),"Enable Markdown"]})}),g?Object(u.jsx)("div",{className:"ac-render-panel__error",children:g}):Object(u.jsx)("div",{className:"ac-render-panel__adaptive-card",ref:d})]})};var m=function(){var e=f("","ADAPTIVE_CARD_JSON"),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"app__set",children:[Object(u.jsx)("div",{className:"app__panel-title",children:"Adaptive Card JSON"}),Object(u.jsx)(j,{onChange:n,value:a})]}),Object(u.jsxs)("div",{className:"app__set",children:[Object(u.jsx)("div",{className:"app__panel-title",children:"Adaptive Card render"}),Object(u.jsx)(h,{json:a})]})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),C()}},[[99,1,2]]]);
//# sourceMappingURL=main.5a3b07dc.chunk.js.map