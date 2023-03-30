"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1042],{5318:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,f=p["".concat(i,".").concat(u)]||p[u]||m[u]||a;return t?o.createElement(f,l(l({ref:n},d),{},{components:t})):o.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(5773),r=(t(7378),t(5318));const a={hide_table_of_contents:!0},l="JSONLines files",s={unversionedId:"modules/indexes/document_loaders/examples/file_loaders/jsonlines",id:"modules/indexes/document_loaders/examples/file_loaders/jsonlines",title:"JSONLines files",description:"This example goes over how to load data from JSONLines or JSONL files. The second argument is a JSONPointer to the property to extract from each JSON object in the file. One document will be created for each JSON object in the file.",source:"@site/docs/modules/indexes/document_loaders/examples/file_loaders/jsonlines.md",sourceDirName:"modules/indexes/document_loaders/examples/file_loaders",slug:"/modules/indexes/document_loaders/examples/file_loaders/jsonlines",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/jsonlines",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/jsonlines.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"JSON files",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/json"},next:{title:"Notion markdown export",permalink:"/langchainjs/docs/modules/indexes/document_loaders/examples/file_loaders/notion_markdown"}},i={},c=[],d={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jsonlines-files"},"JSONLines files"),(0,r.kt)("p",null,"This example goes over how to load data from JSONLines or JSONL files. The second argument is a JSONPointer to the property to extract from each JSON object in the file. One document will be created for each JSON object in the file."),(0,r.kt)("p",null,"Example JSONLines file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"html": "This is a sentence."}\n{"html": "This is another sentence."}\n')),(0,r.kt)("p",null,"Example code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { JSONLinesLoader } from "langchain/document_loaders";\n\nconst loader = new JSONLinesLoader(\n  "src/document_loaders/example_data/example.jsonl",\n  "/html"\n);\n\nconst docs = await loader.load();\n/*\n[\n  Document {\n    "metadata": {\n      "blobType": "application/jsonl+json",\n      "line": 1,\n      "source": "blob",\n    },\n    "pageContent": "This is a sentence.",\n  },\n  Document {\n    "metadata": {\n      "blobType": "application/jsonl+json",\n      "line": 2,\n      "source": "blob",\n    },\n    "pageContent": "This is another sentence.",\n  },\n]\n*/\n')))}m.isMDXComponent=!0}}]);