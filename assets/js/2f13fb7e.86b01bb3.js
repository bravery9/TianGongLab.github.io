"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[8051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={slug:"research-on-windows-kernel-race-condition-vulnerabilities",title:"Windows\u5185\u6838\u7ade\u6001\u6761\u4ef6\u6f0f\u6d1e\u7814\u7a76",authors:"zhangshuqiao",tags:["Microsoft","Windows","Race Condition"]},a="Windows\u5185\u6838\u7ade\u6001\u6761\u4ef6\u6f0f\u6d1e\u7814\u7a76",l={permalink:"/blog/research-on-windows-kernel-race-condition-vulnerabilities",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-11-01-research-on-windows-kernel-race-condition-vulnerabilities/index.md",source:"@site/blog/2023-11-01-research-on-windows-kernel-race-condition-vulnerabilities/index.md",title:"Windows\u5185\u6838\u7ade\u6001\u6761\u4ef6\u6f0f\u6d1e\u7814\u7a76",description:"\u4e00\u3001\u7814\u7a76\u80cc\u666f",date:"2023-11-01T00:00:00.000Z",formattedDate:"2023\u5e7411\u67081\u65e5",tags:[{label:"Microsoft",permalink:"/blog/tags/microsoft"},{label:"Windows",permalink:"/blog/tags/windows"},{label:"Race Condition",permalink:"/blog/tags/race-condition"}],readingTime:29.195,hasTruncateMarker:!0,authors:[{name:"\u7c73\u7c73",key:"zhangshuqiao"}],frontMatter:{slug:"research-on-windows-kernel-race-condition-vulnerabilities",title:"Windows\u5185\u6838\u7ade\u6001\u6761\u4ef6\u6f0f\u6d1e\u7814\u7a76",authors:"zhangshuqiao",tags:["Microsoft","Windows","Race Condition"]},prevItem:{title:"\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",permalink:"/blog/research-on-windows-kernel-race-condition-vulnerabilities"},nextItem:{title:"Microsoft Hyper-V \u865a\u62df TPM \u8bbe\u5907\u6f0f\u6d1e\u5206\u6790",permalink:"/blog/microsoft-hyper-vtpm"}},c={authorsImageUrls:[void 0]},s=[{value:"\u4e00\u3001\u7814\u7a76\u80cc\u666f",id:"\u4e00\u7814\u7a76\u80cc\u666f",level:2},{value:"\uff08\u4e00\uff09\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u6f0f\u6d1e",id:"\u4e00\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u6f0f\u6d1e",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u7814\u7a76\u80cc\u666f"},"\u4e00\u3001\u7814\u7a76\u80cc\u666f"),(0,o.kt)("h3",{id:"\u4e00\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u6f0f\u6d1e"},"\uff08\u4e00\uff09\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u6f0f\u6d1e"),(0,o.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf\u662f\u8ba1\u7b97\u673a\u7cfb\u7edf\u7684\u6838\u5fc3\u8f6f\u4ef6\uff0c\u5176\u4e3b\u8981\u529f\u80fd\u5728\u4e8e\u7ba1\u7406\u8ba1\u7b97\u673a\u7cfb\u7edf\u4e2d\u7684\u5404\u79cd\u8f6f\u786c\u4ef6\u8d44\u6e90\uff0c\u5e76\u4e3a\u8ba1\u7b97\u673a\u7528\u6237\u548c\u7528\u6237\u7a0b\u5e8f\u63d0\u4f9b\u8bbf\u95ee\u8fd9\u4e9b\u8d44\u6e90\u7684\u7edf\u4e00\u62bd\u8c61\u3002\u4e3a\u8fbe\u5230\u8fd9\u4e00\u8bbe\u8ba1\u76ee\u6807\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u901a\u5e38\u8fd0\u884c\u5728\u79f0\u4e3a\u5185\u6838\u6001\u7684\u9ad8\u7279\u6743\u7ea7\u6267\u884c\u73af\u5883\u4e2d\u3002\u4e00\u65e6\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u88ab\u6076\u610f\u653b\u51fb\u8005\u975e\u6cd5\u4fb5\u5165\uff0c\u653b\u51fb\u8005\u4fbf\u53ef\u7acb\u5373\u62e5\u6709\u5bf9\u6574\u4e2a\u8ba1\u7b97\u673a\u7cfb\u7edf\u7684\u63a7\u5236\u6743\uff0c\u9020\u6210\u6781\u5927\u5371\u5bb3\u3002\u56e0\u6b64\uff0c\u9488\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u7684\u6f0f\u6d1e\u6316\u6398\u4e00\u76f4\u662f\u5b66\u672f\u754c\u548c\u5de5\u4e1a\u754c\u7684\u7814\u7a76\u91cd\u70b9\u3002"))}d.isMDXComponent=!0}}]);