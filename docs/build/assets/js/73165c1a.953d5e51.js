"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52],{5318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7378),o=n(8944),a=n(5161),i=n(1884),c=n(5626),l=n(9213);const s={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function m(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},n)}function p(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function u(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},7125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(5773),o=(n(7378),n(5318)),a=n(5162);const i={sidebar_label:"Examples",hide_table_of_contents:!0},c="Examples: Toolkits",l={unversionedId:"modules/agents/toolkits/examples/index",id:"modules/agents/toolkits/examples/index",title:"Examples: Toolkits",description:"",source:"@site/docs/modules/agents/toolkits/examples/index.mdx",sourceDirName:"modules/agents/toolkits/examples",slug:"/modules/agents/toolkits/examples/",permalink:"/langchainjs/docs/modules/agents/toolkits/examples/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/agents/toolkits/examples/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Examples",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Toolkits",permalink:"/langchainjs/docs/modules/agents/toolkits/"},next:{title:"JSON Agent Toolkit",permalink:"/langchainjs/docs/modules/agents/toolkits/examples/json"}},s={},m=[],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples-toolkits"},"Examples: Toolkits"),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);