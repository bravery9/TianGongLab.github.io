"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const c={sidebar_position:7},i="CVE-2021-27239: Netgear strncpy\u6808\u6ea2\u51fa\u6f0f\u6d1e",o={unversionedId:"\u4f7f\u7528\u6837\u4f8b/cve-2021-27239-netgear-strncpy/index",id:"\u4f7f\u7528\u6837\u4f8b/cve-2021-27239-netgear-strncpy/index",title:"CVE-2021-27239: Netgear strncpy\u6808\u6ea2\u51fa\u6f0f\u6d1e",description:"0x00 \u6f0f\u6d1e\u4ecb\u7ecd",source:"@site/docs/\u4f7f\u7528\u6837\u4f8b/cve-2021-27239-netgear-strncpy/index.md",sourceDirName:"\u4f7f\u7528\u6837\u4f8b/cve-2021-27239-netgear-strncpy",slug:"/\u4f7f\u7528\u6837\u4f8b/cve-2021-27239-netgear-strncpy/",permalink:"/\u4f7f\u7528\u6837\u4f8b/cve-2021-27239-netgear-strncpy/",draft:!1,editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/docs/\u4f7f\u7528\u6837\u4f8b/cve-2021-27239-netgear-strncpy/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"CVE-2019\u201317621: D-Link DIR-859 \u672a\u6388\u6743\u547d\u4ee4\u6267\u884c\u6f0f\u6d1e",permalink:"/\u4f7f\u7528\u6837\u4f8b/cve-2019-17621-d-link-dir-859/"},next:{title:"Datacon 2023 \u6f0f\u6d1e\u5206\u6790\u8d5b\u9053\u8d5b\u9898\u4e8c\u5b98\u65b9\u9898\u89e3",permalink:"/\u4f7f\u7528\u6837\u4f8b/DataCon 2023\u6f0f\u6d1e\u5206\u6790\u8d5b\u9898\u4e8c\u5b98\u65b9\u9898\u89e3/"}},l={},p=[{value:"0x00 \u6f0f\u6d1e\u4ecb\u7ecd",id:"0x00-\u6f0f\u6d1e\u4ecb\u7ecd",level:2},{value:"0x01 \u6f0f\u6d1e\u5206\u6790",id:"0x01-\u6f0f\u6d1e\u5206\u6790",level:2},{value:"0x02 \u6f0f\u6d1e\u67e5\u8be2",id:"0x02-\u6f0f\u6d1e\u67e5\u8be2",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...c}=e;return(0,a.kt)(d,(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cve-2021-27239-netgear-strncpy\u6808\u6ea2\u51fa\u6f0f\u6d1e"},"CVE-2021-27239: Netgear strncpy\u6808\u6ea2\u51fa\u6f0f\u6d1e"),(0,a.kt)("h2",{id:"0x00-\u6f0f\u6d1e\u4ecb\u7ecd"},"0x00 \u6f0f\u6d1e\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u6f0f\u6d1e\u4f4d\u4e8e/usr/sbin/upnpd\uff0c\u662fssdp\uff08UDP 1900\uff09\u534f\u8bae\u7684\u89e3\u6790\u8fc7\u7a0b\u4e2d\uff0c\u5bf9MX\u5b57\u6bb5\u7684strncpy\u5f15\u53d1\u7684\u6808\u6ea2\u51fa\u3002"),(0,a.kt)("p",null,"\u9644\u4ef6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(7222).Z},"challenge 523564")),(0,a.kt)("h2",{id:"0x01-\u6f0f\u6d1e\u5206\u6790"},"0x01 \u6f0f\u6d1e\u5206\u6790"),(0,a.kt)("p",null,"\u6f0f\u6d1e\u6210\u56e0\u662f\u56e0\u4e3a\u76f4\u63a5\u5c06MX\u5b57\u6bb5\u5230\u201d","\\","r","\\","n\u201d\u5b57\u6bb5\u4e2d\u95f4\u7684\u7684\u5185\u5bb9\u62f7\u8d1d\u5230\u4e86\u7f13\u51b2\u533a\u4e0a\uff0c\u7136\u800c\u5374\u5e76\u6ca1\u6709\u5224\u65ad\u8fd9\u6bb5\u5b57\u7b26\u7684\u957f\u5ea6\u662f\u4e0d\u662f\u8981\u5c0f\u4e8e\u8981\u62f7\u8d1d\u7684\u7f13\u51b2\u533a\u7684\u5927\u5c0f\uff0c\u56e0\u6b64\u9020\u6210\u4e86\u6808\u6ea2\u51fa\u3002"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(9810).Z,width:"1234",height:"494"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u89c2\u5bdf\u5230\u9020\u6210\u8fd9\u4e2a\u6f0f\u6d1e\u7684\u5371\u9669\u51fd\u6570\u662fstrncpy"),(0,a.kt)("p",null,"\u6211\u4eec\u60f3\u76f4\u63a5\u5b9a\u4f4d\u4e00\u4e0b\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u91cc\u6709\u6ca1\u6709\u8fd9\u79cd\u7c7b\u4f3c\u7684\u6f0f\u6d1e\u7684\u8bdd\u76f4\u63a5\u4f7f\u7528\u4ea4\u53c9\u5f15\u7528\u67e5\u770bstrncpy\u7684\u8c03\u7528\u53d1\u73b0\u6709350\u5904\uff0c\u76f4\u63a5\u4eba\u5de5\u53bb\u8fc7\u5de5\u4f5c\u91cf\u592a\u5927\u4e86"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(9134).Z,width:"1648",height:"1256"})),(0,a.kt)("h2",{id:"0x02-\u6f0f\u6d1e\u67e5\u8be2"},"0x02 \u6f0f\u6d1e\u67e5\u8be2"),(0,a.kt)("p",null,"\u89c2\u5bdf\u6b64\u5904\u6f0f\u6d1e\u70b9\u7684\u6f0f\u6d1e\u6a21\u5f0f\uff0cstrncpy\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570n\u9996\u5148\u4e0d\u662f\u4e00\u4e2a\u5b9a\u503c\u4e14\u8fd9\u4e2a\u503c\u548c\u7b2c\u4e00\u4e2a\u53c2\u6570\u6ca1\u6709\u5173\u7cfb\u5373\u4ed6\u4eec\u7a7a\u95f4\u5927\u5c0f\u6ca1\u6709\u6765\u81ea\u4e8e\u540c\u4e00\u4e2a\u53d8\u91cf"),(0,a.kt)("p",null,"\u6839\u636e\u8fd9\u79cd\u6f0f\u6d1e\u6a21\u5f0f\u7684\u67e5\u8be2\u601d\u8def\u6211\u4eec\u53ef\u4ee5\u6784\u9020\u51fa\u4e0b\u9762\u7684\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'match (n:identifier{callee:"strncpy",index:0}), (m:identifier{callee:"strncpy",index:2})where n.function=m.function and m.line=n.line and not (m)-[:dfg]-(n) return m.function limit 1000\n')),(0,a.kt)("p",null,"\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"not (m)-[:dfg]-(n)"),"\u8fd9\u4e00\u53e5\u662f\u8fc7\u6ee4\u4e86\u7b2c\u4e00\u4e2a\u53c2\u6570\u548c\u7b2c\u4e09\u4e2a\u53c2\u6570\u5b58\u5728\u6570\u636e\u6d41\u7684\u60c5\u51b5"),(0,a.kt)("p",null,"\u5728\u7834\u58f3\u5e73\u53f0\u4e0a\u6267\u884c\u67e5\u8be2\u6307\u4ee4\u5f97\u5230\u7ed3\u679c\uff0c\u67e5\u8be2\u7ed3\u679c\u7f29\u51cf\u4e3a\u4e8622\u6761\uff0c\u4e14\u6f0f\u6d1e\u6240\u5728\u51fd\u6570\u4f4d\u4e8e\u67e5\u8be2\u7ed3\u679c\u4e2d\u3002\u8fd9\u4e2a\u67e5\u8be2\u65b9\u6cd5\u4e0d\u53d7source\uff0csink\u70b9\u7684\u5f71\u54cd\u53ef\u4ee5\u66f4\u5e7f\u6cdb\u7684\u7528\u5728\u591a\u6570\u56fa\u4ef6\u4e0a\u3002"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:n(4755).Z,width:"3524",height:"1354"})))}u.isMDXComponent=!0},7222:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/519e1137-b916-4221-a8e8-fdbc637462b3-d1242e8487ccf98c996a5199f01a4caf.false"},4755:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/6ea85aef-dbc9-4ede-aea1-541c16c07194-e744348be91d2ebdde983078845b72b5.png"},9810:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/7214e1b0-cd20-40d7-8927-37fc9656dad8-ef17bc60d5b6f7ca9a37a27537c69eb5.png"},9134:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/a842ec97-0d08-4fb6-9a2c-97af9ee8942c-14a68303857518f2b38f2bf8a47a3093.png"}}]);