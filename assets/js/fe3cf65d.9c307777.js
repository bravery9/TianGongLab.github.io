"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={slug:"tiangongaritcle001",title:"CVE-2023-0179 Linux\u5185\u6838\u63d0\u6743",authors:"limin06",tags:["Linux","Privilege Escalation"]},o="CVE-2023-0179 Linux\u5185\u6838\u63d0\u6743",l={permalink:"/blog/tiangongaritcle001",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-10-18-cve-2023-0179-linux/index.md",source:"@site/blog/2023-10-18-cve-2023-0179-linux/index.md",title:"CVE-2023-0179 Linux\u5185\u6838\u63d0\u6743",description:"0x00 \u524d\u8a00",date:"2023-10-18T00:00:00.000Z",formattedDate:"2023\u5e7410\u670818\u65e5",tags:[{label:"Linux",permalink:"/blog/tags/linux"},{label:"Privilege Escalation",permalink:"/blog/tags/privilege-escalation"}],readingTime:7.63,hasTruncateMarker:!0,authors:[{name:"\u4f5c\u8005\uff1alm0963",key:"limin06"}],frontMatter:{slug:"tiangongaritcle001",title:"CVE-2023-0179 Linux\u5185\u6838\u63d0\u6743",authors:"limin06",tags:["Linux","Privilege Escalation"]},prevItem:{title:"Microsoft Hyper-V \u865a\u62df TPM \u8bbe\u5907\u6f0f\u6d1e\u5206\u6790",permalink:"/blog/microsoft-hyper-vtpm"}},c={authorsImageUrls:[void 0]},u=[{value:"0x00 \u524d\u8a00",id:"0x00-\u524d\u8a00",level:2}],p={toc:u},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"0x00-\u524d\u8a00"},"0x00 \u524d\u8a00"),(0,a.kt)("p",null,"2022\u5e747\u6708\u4e3a\u5929\u5e9c\u676f\u51c6\u5907\u7684Linux\u63d0\u6743\u6f0f\u6d1e\uff0c\u4f46\u662f22\u5e74\u5929\u5e9c\u676f\u6ca1\u529e\uff0c23\u5e741\u6708\u88ab\u5916\u56fd\u4eba\u62a5\u4e86\u3002"),(0,a.kt)("p",null,"\u601d\u8def\u6765\u6e90\u4e8e\u8fd9\u7bc7\u6587\u7ae0\uff0c\u5728\u770b\u5230\u8fd9\u7bc7\u6587\u7ae0\u540e\u51b3\u5b9a\u53bb\u597d\u597d\u8fc7\u4e00\u4e0bnetfilter\u76f8\u5173\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u6587\u7ae0\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=Mzk0OTU2ODQ4Mw==&mid=2247483772&idx=1&sn=d1a48ae8f391d42e9d8981b67747ccc5&chksm=c35717f0f4209ee67e547252ef5ad6a75654aa19708987f849c1748fc370755562879d39ae48&token=665487310&lang=zh_CN"},"How The Tables Have Turned: An analysis of two new Linux vulnerabilities in nf_tables")))}f.isMDXComponent=!0}}]);