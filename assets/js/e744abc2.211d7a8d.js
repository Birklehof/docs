"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3},i="24-Stunden-Lauf-App",o={unversionedId:"stunden-lauf-app-v2",id:"stunden-lauf-app-v2",title:"24-Stunden-Lauf-App",description:"Allgemein",source:"@site/docs/24-stunden-lauf-app-v2.mdx",sourceDirName:".",slug:"/stunden-lauf-app-v2",permalink:"/docs/stunden-lauf-app-v2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/24-stunden-lauf-app-v2.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/firebase/Authentication"},next:{title:"Teams-Namens-Generator",permalink:"/docs/teams-name-generator"}},p={},u=[{value:"Allgemein",id:"allgemein",level:2},{value:"Wichtige Befehle",id:"wichtige-befehle",level:2},{value:"Beitragen",id:"beitragen",level:2},{value:"Deployment",id:"deployment",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"24-stunden-lauf-app"},"24-Stunden-Lauf-App"),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribut"),(0,a.kt)("th",{parentName:"tr",align:null},"Wert"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Systematischer Name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"24-stunden-lauf-app-v2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Funktionalit\xe4t"),(0,a.kt)("td",{parentName:"tr",align:null},"Z\xe4hlung der Runden beim j\xe4hrlichen 24-Stunden-Lauf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stack"),(0,a.kt)("td",{parentName:"tr",align:null},"Next.js, Firebase, daisyUI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,a.kt)("td",{parentName:"tr",align:null},"Vercel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://24-stunden-lauf.birklehof.space/"},"https://24-stunden-lauf.birklehof.space/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Code"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/Birklehof/24-stunden-lauf-app-v2"},"https://github.com/Birklehof/24-stunden-lauf-app-v2"))))),(0,a.kt)("h2",{id:"wichtige-befehle"},"Wichtige Befehle"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"beitragen"},"Beitragen"),(0,a.kt)("p",null,"Es gibt immer etwas zu tun! Hier findet du ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Birklehof/24-stunden-lauf-app-v2/issues"},"ausstehende Issues"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Du kannst das Repository f\xfcr das Repository mit dem folgenden Befehl klonen:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Birklehof/24-stunden-lauf-app-v2.git\n"))),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Das Deployment erfolgt automatisch \xfcber Vercel. Jeder Push auf den ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"-Branch l\xf6st ein neues Deployment aus. Falls das Repository nicht mehr mit Vercel verbunden ist,\nkann es nach dieser ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy"},"Anleitung")," importiert werden. Diese Art des Deployments ist relativ\nschnell und unkompliziert, allerdings gibt es gewisse ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/pricing"},(0,a.kt)("strong",{parentName:"a"},"Einschr\xe4nkungen durch die kostenlose Version")),"."))}c.isMDXComponent=!0}}]);