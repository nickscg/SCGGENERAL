var L;(a=>(a.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,a.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),a.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),a.isSafari=a.isWebKit&&!a.isChrome,a.isSafariDesktop=a.isSafari&&!a.isTouch,a.isWindows=/Win/u.test(navigator.platform),a.isMacOS=/Mac/u.test(navigator.platform),a.isAndroidWebView=a.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),a.isIosWebView=a.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),a.isWebView=a.isAndroidWebView||a.isIosWebView))(L||={});var B="framer_",y="editSite";var D="__framer_hide_editorbar_until",C="2147483647";var w="__framer-editorbar-smooth-gutter-transition";function P(e,r){return function(u,o){let[i,t]=r(!1);return e(()=>{let l=c=>{c.origin===u&&typeof c.data=="object"&&c.data&&"apiVersion"in c.data&&"type"in c.data&&"component"in c.data&&c.data.apiVersion===1&&c.data.type==="initializeComponent"&&c.data.component===o&&t(!0)};return window.addEventListener("message",l),()=>{window.removeEventListener("message",l)}},[u,o]),i}}function z(e,r){let s=P(e,r);function u(o,i){let t=()=>{o?.current&&o.current.contentWindow?.postMessage({apiVersion:1,type:"updateScrollPosition",position:{top:window.scrollY}},i)};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)}return function(i,t){let l=s(t,"OnPageSandboxStore/scrollRelayer");e(()=>{if(!l)return;let c=u(i,t);return()=>c()},[t,i,l])}}function V(e,r,s,u,o){return function(){let t=e(),l=s()?.activeLocale??void 0,{collectionUtils:c}=u(),[E,a]=o(),I=t?.id,x=t?.collectionId,N=t?.pathVariables;return r(()=>{if(!I)return;let b=!1;return oe(l,x,c,N).then(O=>{b||a({collectionItemNodeId:O,webPageNodeId:I})}).catch(()=>{b||a({collectionItemNodeId:void 0,webPageNodeId:I})}),()=>{b=!0}},[l,x,c,N,I]),E}}async function oe(e,r,s,u){if(!r)return;let o=Object.values(u??{}),[i]=o;if(o.length!==1||!i||typeof i!="string")return;let t=s?.[r];return await(await t?.())?.getRecordIdBySlug(i,e)}function H(e,r,s,u,o){let i=V(e,r,s,u,o),t=P(r,o);return function(c,E){let a=i(),I=t(E,"OnPageActiveRouteStore");r(()=>{I&&c.current?.contentWindow?.postMessage({apiVersion:1,type:"updateNodeIds",nodeIds:a},E)},[c,a,E,I])}}var M=12,G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApNJREFUSA2tlUtLlFEYgEe7mtFFQ8NLFBG1SJAwahtiLVy5ceVSEPQH1LZf0Lp9FO1bdYNyI7gyBFcS2kAzilYq3sfxeYZ55Zv6FGfohWfOd97vnPd23u9MXeZoaeb1Q7gPHXAFzsAS5GACxiEPqVKXqs1kmtAPQi+cAtedToz1PJ8ExxPwDl7CAlRImoN7rBiF86ABHTiGAzMIh8n3O+ifwWc4EL0n5TGTYQijvjNSxbUadozInUeGZ3nuh1WYgpIkM+hGMwYajAgdrfUn+AaLoLTCAxiAOxCZxL4RdB+gZMjxEjwHo4hS8Jh5DR9hz0mKaNizegoNEI7Wee6FXJTISG6AUgDr+QImoAiHie+mwZJow/PRps4uwnsnRj8Epqc4voVJJ8eULOtW4BFYYjPpgjc+3IWI2sh/wFeoVl6xYQ48dDGLfjOwc/ygQqz595hUMVouS9QHBm4l6k3HWpnBLqicgVrlCxujSbR1Swd+UDpQYRS/oVaZZ2MWwlZBB9Zdxf+QTYw8SRgq6sAvz7vH6JULEB9USVHFjzZskgPRQR4ayxoXXIdaHdg9HrB2rErByWxZERnYtrWUzD0esDbtTmXPhzXwHrKLxEUbYGbVyDkWWwkdadfqbPmwDXZSCyh2VAf8BM/nOOJH5Y0QopMt2I5U/KO4DZZJB47XwEX+ex0mGroMV8sLwp56gyuGwiyW4SZ4c8bt2cZzO7jBNeqtsRHbeZ1g9krsMbhfYPv/c5gecA+4yAVuitFszE5Hjva872OMdXagF19JIoOYWyozMTI3J0tmA6gLvXPfO1cc/XOqOLe/HbjwD8yCXRD3VNJROEgatiRZMJsKsbZHia3nAdphtq8fkiWyXJbBe8uM1aXKPouNnz2Bm1kwAAAAAElFTkSuQmCC",v="__framer-editorbar-container",S="__framer-editorbar-label",_="__framer-editorbar-button",U="__framer-editorbar-loading-spinner",re=`
#${v} {
    align-items: center;
    bottom: 50%;
    display: flex;
    gap: 8px;
    position: fixed;
    right: 10px;
    transform: translateY(50%);
    z-index: ${C};
}

#${S} {
    background-color: #111;
    border-radius: 8px;
    font-family: "Inter", "Inter-Regular", system-ui, Arial, sans-serif;
    font-size: 12px;
    height: fit-content;
    opacity: 0;
    padding: 4px 8px;
    transition: opacity 0.4s ease-out;
    font-weight: 500;
}

#${_} {
    all: unset;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
}

#${S}:has(+ #${_}:hover) {
    opacity: 1;
}

#${S}, #${_} {
    background-color: #111;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1);
    color: #fff;
}

#${S}, #${_}:hover {
    background-color: #282828;
}

#${U} {
    width: ${M}px;
    height: ${M}px;
    -webkit-mask: url(${G});
    mask: url(${G});
    -webkit-mask-size: ${M}px;
    mask-size: ${M}px;
    background-color: #fff;


    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-name: __framer-loading-spin;
    animation-timing-function: linear;
}

@keyframes __framer-loading-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`,W=document.createElement("style");W.type="text/css";W.innerHTML=re;document.head.appendChild(W);function Y(e){function r(){return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",fill:"none",children:[e("path",{d:"M 0 1.414 C 0 0.633 0.633 0 1.414 0 L 1.414 0 C 2.195 0 2.828 0.633 2.828 1.414 L 2.828 12.021 L 1.414 13.435 L 0 12.021 Z",transform:"translate(4.336 -0.468) rotate(45 1.5 6.75)",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M 7 11 L 11 11",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round"})]})}function s(){return e("div",{id:U})}return function({isLoading:o,onClick:i}){return e("div",{children:[e("span",{children:"Edit Content",id:S}),e("button",{"aria-labelledby":S,children:o?s():r(),id:_,onClick:i})],id:v})}}function X(e,r){return function(u=!0){let[o,i]=r(j);return e(()=>{if(!u)return;let t=new ResizeObserver(()=>{i(j())});return t.observe(document.documentElement),()=>{t.disconnect()}},[u]),o}}function j(){return window.innerWidth-document.documentElement.clientWidth}function Z(e,r){let s=X(e,r);return function(o){let t=s(o)>0;e(()=>{if(o&&t)document.documentElement.classList.add(w);else{let l=()=>document.documentElement.classList.remove(w);if(t){let c=window.setTimeout(l,300);return()=>{window.clearTimeout(c)}}else l()}},[o,t])}}var ae=Date.now();function ie(){let e=localStorage.getItem(D);if(!e)return!1;let r=Date.now(),s=Number(e);return r>=s||Number.isNaN(s)?(localStorage.removeItem(D),!1):!0}function se(){return window.self!==window.top}var ce=`
#__framer-editorbar {
    --padding-right: 10px;
    color-scheme: light;
    overflow: hidden;
    position: fixed;
    right: var(--padding-right);
    border: none;
    z-index: ${C};
    top: 0;
    width: calc(100vw - var(--padding-right));
    height: 100vh;
}

#__framer-editorbar.status_hidden {
    display: none;
}

#__framer-editorbar.status_measuring {
    clip-path: unset;
}

#__framer-editorbar.fullscreen {
    --padding-right: 0px;
    left: 0;
    right: initial;
}

body:has(#__framer-editorbar.fullscreen) {
    overflow: hidden;
}

html.${w}:has(#__framer-editorbar:not(.status_hidden)) {
    scrollbar-gutter: stable;
}
`,F=document.createElement("style");F.type="text/css";F.innerHTML=ce;document.head.appendChild(F);var A=new URL(import.meta.url).origin;function de(){let e=new URL(window.location.href),r=e.searchParams.has(y),s=e.searchParams.has(y.toLowerCase());if(!r&&!s)return!1;let u=r?y:y.toLowerCase(),o=e.searchParams.get(u);if(o!==""&&o!==null)return!1;for(let i of e.searchParams.keys())if(i!==y&&i!==y.toLowerCase()&&!i.startsWith(B))return!1;return e.searchParams.delete(y),e.searchParams.delete(y.toLowerCase()),window.history.replaceState({},"",e.toString()),!0}var ue=de();function ke({dependencies:e}){if(e.__version!==1)throw new Error("Unsupported dependencies version");if(ie()||se()||L.isWebView)return function(){return null};let{createElement:r,memo:s,useCallback:u,useEffect:o,useRef:i,useState:t}=e.react,{createPortal:l}=e["react-dom"],{useCurrentRoute:c,useLocaleInfo:E,useRouter:a}=e.framer,I=z(o,t);function x(){let[m,p]=t(!1),d=u(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{p(!0)}):setTimeout(()=>{p(!0)},300)},[]);return o(()=>{document.readyState==="complete"?d():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&d()},{once:!0})},[d]),m}let N=Z(o,t);function b(m){let[p,d]=t({className:"status_hidden"});return N(p.className!=="status_hidden"&&p.className!=="fullscreen"),o(()=>{if(m)return;function f(n){n.origin===A&&typeof n.data=="object"&&n.data?.apiVersion===1&&(n.data.type==="beginSizeMeasuring"&&d({className:"status_measuring"}),n.data.type==="updateStyle"&&d({style:{clipPath:n.data.clipPath}}),n.data.type==="editorBarHidden"&&(d({className:"status_hidden"}),window.removeEventListener("message",f)),n.data.type==="enterFullscreen"&&d({className:"fullscreen"}))}return window.addEventListener("message",f),()=>{window.removeEventListener("message",f)}},[]),p}function O(m){let[p,d]=t(!1);return o(()=>{if(p||m)return;function f(n){if(n.origin===A&&typeof n.data=="object"&&n.data?.apiVersion===1&&n.data.type==="editorBarHidden"&&!p){let h=Date.now()+6048e5;localStorage.setItem(D,h.toString()),d(!0),window.removeEventListener("message",f)}}return window.addEventListener("message",f),()=>{window.removeEventListener("message",f)}},[]),p}function $(m){let[p,d]=t(!1),[f,n]=t(!1),[R,h]=t("hidden");return o(()=>{if(!m)return;function T(g){g.origin===A&&typeof g.data=="object"&&g.data?.apiVersion===1&&(g.data.type==="accessResult"&&g.data.data.status==="success"?d(!0):g.data.type==="exitFullscreen"?h("hidden"):g.data.type==="sandboxReadyState"&&n(g.data.data.status==="loading"))}return window.addEventListener("message",T),()=>{window.removeEventListener("message",T)}},[d,n,h]),{showEntrypointButton:p,entrypointButtonLoading:f,iframeState:R,setIframeState:h}}let J=H(c,o,E,a,t);function K({framerSiteId:m,features:p,iframeRef:d,measuringProps:f}){J(d,A);let n=new URL(import.meta.url),R=n.pathname.lastIndexOf("/");if(R<0)throw new Error("Invalid pathname");let h=p?.editorBarDisableFrameAncestorsSecurity?"fake-domain.example":window.location.hostname;return n.pathname=n.pathname.slice(0,R),n.searchParams.set("framerSiteId",m),n.searchParams.set("source",h),n.searchParams.set("features",JSON.stringify(p||{})),n.searchParams.set("loadStart",ae.toString()),ue&&n.searchParams.set("forceShow","true"),r("iframe",{...f,id:"__framer-editorbar",ref:d,src:n.href})}let Q=Y(r);function q({framerSiteId:m,features:p}){let d=p?.editorBarSimplifiedEntrypointUI||!1,f=i(null),n=x(),R=b(d);O(d),I(f,A);let{showEntrypointButton:h,entrypointButtonLoading:T,iframeState:g,setIframeState:ee}=$(d);if(!n)return null;let k=r(K,{framerSiteId:m,features:p,iframeRef:f,measuringProps:d?{className:g==="fullscreen"?"fullscreen":"status_hidden"}:R}),te=h?r(Q,{isLoading:T,onClick:()=>{f.current?.contentWindow&&(f.current.contentWindow.postMessage({type:"enterFullscreen"},"*"),ee("fullscreen"))}}):null;return l(d?[te,k]:k,document.body)}return s(q)}export{ke as createEditorBar};
