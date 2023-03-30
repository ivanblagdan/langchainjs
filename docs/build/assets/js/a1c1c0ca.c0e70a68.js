"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3873],{5318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||p;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=a(5773),r=(a(7378),a(5318));const p={id:"prompts.PromptTemplateInput",title:"Interface: PromptTemplateInput",sidebar_label:"prompts.PromptTemplateInput",custom_edit_url:null},l=void 0,i={unversionedId:"api/interfaces/prompts.PromptTemplateInput",id:"api/interfaces/prompts.PromptTemplateInput",title:"Interface: PromptTemplateInput",description:"prompts.PromptTemplateInput",source:"@site/docs/api/interfaces/prompts.PromptTemplateInput.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/prompts.PromptTemplateInput",permalink:"/langchainjs/docs/api/interfaces/prompts.PromptTemplateInput",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"prompts.PromptTemplateInput",title:"Interface: PromptTemplateInput",sidebar_label:"prompts.PromptTemplateInput",custom_edit_url:null},sidebar:"sidebar",previous:{title:"prompts.FewShotPromptTemplateInput",permalink:"/langchainjs/docs/api/interfaces/prompts.FewShotPromptTemplateInput"},next:{title:"schema.ChatGeneration",permalink:"/langchainjs/docs/api/interfaces/schema.ChatGeneration"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"inputVariables",id:"inputvariables",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"outputParser",id:"outputparser",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"partialVariables",id:"partialvariables",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"template",id:"template",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"templateFormat",id:"templateformat",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"validateTemplate",id:"validatetemplate",level:3},{value:"Defined in",id:"defined-in-5",level:4}],m={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts"},"prompts"),".PromptTemplateInput"),(0,r.kt)("p",null,"Inputs to create a ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.PromptTemplate"},"PromptTemplate")),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},(0,r.kt)("inlineCode",{parentName:"a"},"BasePromptTemplateInput"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PromptTemplateInput"))))),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/langchainjs/docs/api/classes/prompts.PromptTemplate"},(0,r.kt)("inlineCode",{parentName:"a"},"PromptTemplate")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"inputvariables"},"inputVariables"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"inputVariables"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("p",null,"A list of variable names the prompt template expects"),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},"BasePromptTemplateInput"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput#inputvariables"},"inputVariables")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/base.ts#L34"},"langchain/src/prompts/base.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"outputparser"},"outputParser"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"outputParser"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/schema.BaseOutputParser"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseOutputParser"))),(0,r.kt)("p",null,"How to parse the output of calling an LLM on this formatted prompt"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},"BasePromptTemplateInput"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput#outputparser"},"outputParser")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/base.ts#L39"},"langchain/src/prompts/base.ts:39")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"partialvariables"},"partialVariables"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"partialVariables"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#partialvalues"},(0,r.kt)("inlineCode",{parentName:"a"},"PartialValues"))),(0,r.kt)("p",null,"Partial variables"),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput"},"BasePromptTemplateInput"),".",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/prompts.BasePromptTemplateInput#partialvariables"},"partialVariables")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/base.ts#L42"},"langchain/src/prompts/base.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"template"},"template"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"template"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The propmt template"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/prompt.ts#L20"},"langchain/src/prompts/prompt.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"templateformat"},"templateFormat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"templateFormat"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts.internal#templateformat"},(0,r.kt)("inlineCode",{parentName:"a"},"TemplateFormat"))),(0,r.kt)("p",null,"The format of the prompt template. Options are 'f-string', 'jinja-2'"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,"'f-string'"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/prompt.ts#L27"},"langchain/src/prompts/prompt.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validatetemplate"},"validateTemplate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"validateTemplate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether or not to try validating the template on initialization"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/prompt.ts#L34"},"langchain/src/prompts/prompt.ts:34")))}c.isMDXComponent=!0}}]);