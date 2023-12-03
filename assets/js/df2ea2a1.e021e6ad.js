"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"tiangongarticle004",title:"\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",authors:"wangyao04",tags:["Cryptography"]},i="\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",s={permalink:"/blog/tiangongarticle004",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-11-03-analysis-of-pseudorandom-number-problems/index.md",source:"@site/blog/2023-11-03-analysis-of-pseudorandom-number-problems/index.md",title:"\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",description:"0x01 \u524d\u8a00",date:"2023-11-03T00:00:00.000Z",formattedDate:"2023\u5e7411\u67083\u65e5",tags:[{label:"Cryptography",permalink:"/blog/tags/cryptography"}],readingTime:16.91,hasTruncateMarker:!0,authors:[{name:"wangyao",title:"\u4e13\u6ce8\u4e8eweb \u5b89\u5168\u4e0e\u534f\u8bae\u5b89\u5168\u9886\u57df\n",imageURL:"https://tiangonglab.github.io/img/authors/wangyao04.jpg",key:"wangyao04"}],frontMatter:{slug:"tiangongarticle004",title:"\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",authors:"wangyao04",tags:["Cryptography"]},prevItem:{title:"WAF\u9632\u62a4\u7ed5\u8fc7\u6280\u5de7\u5206\u6790",permalink:"/blog/tiangongarticle005"},nextItem:{title:"Windows\u5185\u6838\u7ade\u6001\u6761\u4ef6\u6f0f\u6d1e\u7814\u7a76",permalink:"/blog/tiangongarticle003"}},o={authorsImageUrls:[void 0]},p=[{value:"0x01 \u524d\u8a00",id:"0x01-\u524d\u8a00",level:2},{value:"0x02 \u968f\u673a\u6570\u76f8\u5173\u57fa\u7840\u77e5\u8bc6",id:"0x02-\u968f\u673a\u6570\u76f8\u5173\u57fa\u7840\u77e5\u8bc6",level:2},{value:"0x03 \u7ecf\u5178\u6848\u4f8b\u5206\u6790",id:"0x03-\u7ecf\u5178\u6848\u4f8b\u5206\u6790",level:2},{value:"\u6848\u4f8b1\u2014\u2014JumpServer \u4efb\u610f\u8d26\u6237\u5bc6\u7801\u91cd\u7f6e(CVE-2023-42820)",id:"\u6848\u4f8b1jumpserver-\u4efb\u610f\u8d26\u6237\u5bc6\u7801\u91cd\u7f6ecve-2023-42820",level:3},{value:"\u4fee\u590d",id:"\u4fee\u590d",level:3},{value:"\u6848\u4f8b2\u2014\u2014Inductive Ignition session\u52ab\u6301(CVE-2022-35890)",id:"\u6848\u4f8b2inductive-ignition-session\u52ab\u6301cve-2022-35890",level:3},{value:"\u4fee\u590d",id:"\u4fee\u590d-1",level:3},{value:"0x04 \u6f0f\u6d1e\u6a21\u5f0f\u603b\u7ed3",id:"0x04-\u6f0f\u6d1e\u6a21\u5f0f\u603b\u7ed3",level:2},{value:"0x05 Reference",id:"0x05-reference",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"0x01-\u524d\u8a00"},"0x01 \u524d\u8a00"),(0,r.kt)("p",null,"\u968f\u673a\u6570\u5728\u8bb8\u591a\u79d1\u5b66\u548c\u5de5\u7a0b\u9886\u57df\u626e\u6f14\u7740\u91cd\u8981\u89d2\u8272\uff0c\u5c24\u5176\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u548c\u4fe1\u606f\u5b89\u5168\u9886\u57df\uff0c\u5b83\u7684\u91cd\u8981\u610f\u4e49\u66f4\u662f\u4e0d\u53ef\u5c0f\u89d1\u3002\u5728\u8fd9\u4e2a\u5168\u7403\u6570\u5b57\u5316\u7684\u65f6\u4ee3\uff0c\u6570\u636e\u662f\u6211\u4eec\u7ecf\u6d4e\u548c\u751f\u6d3b\u7684\u6838\u5fc3\uff0c\u6570\u636e\u7684\u5b89\u5168\u548c\u4fdd\u5bc6\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u3002\u6211\u4eec\u4f7f\u7528\u5bc6\u7801\u4fdd\u62a4\u6211\u4eec\u7684\u94f6\u884c\u8d26\u6237\u3001\u7535\u5b50\u90ae\u4ef6\u3001\u793e\u4ea4\u5a92\u4f53\u8d26\u6237\uff0c\u6211\u4eec\u4f7f\u7528\u52a0\u5bc6\u6280\u672f\u4fdd\u62a4\u6211\u4eec\u901a\u4fe1\u7684\u9690\u79c1\u6027\u3002\u5728\u8fd9\u4e9b\u8fc7\u7a0b\u4e2d\uff0c\u968f\u673a\u6570\u662f\u5176\u4e2d\u6700\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u7528\u4e8e\u5bc6\u7801\u751f\u6210\u3001\u6570\u636e\u52a0\u5bc6\u3001\u8eab\u4efd\u9a8c\u8bc1\u548c\u7f51\u7edc\u534f\u8bae\u5b89\u5168\uff0c\u662f\u4fdd\u8bc1\u7535\u5b50\u4ea4\u6d41\u5b89\u5168\u7684\u4ee4\u724c\u3002\u5982\u679c\u6211\u4eec\u4e0d\u80fd\u4fdd\u8bc1\u6240\u751f\u6210\u7684\u968f\u673a\u6570\u5b9e\u9645\u4e0a\u662f\u968f\u673a\u7684\uff0c\u90a3\u4e48\u5b83\u4eec\u5c31\u53ef\u80fd\u88ab\u9884\u6d4b\uff0c\u8fd9\u5c06\u8ba9\u6211\u4eec\u9762\u4e34\u5b89\u5168\u98ce\u9669\u3002\u56e0\u6b64\uff0c\u5728\u63a2\u8ba8\u968f\u673a\u6570\u7684\u540c\u65f6\uff0c\u6211\u4eec\u987b\u6df1\u5316\u7406\u89e3\u968f\u673a\u6027\u7684\u5b89\u5168\u6027\uff0c\u4ee5\u4fbf\u66f4\u6709\u6548\u5730\u4f7f\u7528\u968f\u673a\u6570\uff0c\u4fdd\u62a4\u81ea\u8eab\u548c\u6570\u636e\u514d\u53d7\u653b\u51fb\u3002"),(0,r.kt)("p",null,"\u672c\u6b21\u5206\u4eab\u7684\u4e24\u4e2a\u6848\u4f8b\uff08CVE-2023-42820\u548cCVE-2022-35890\uff09\u5747\u662f\u7531\u4e8e\u968f\u673a\u6570\u4f7f\u7528\u4e0d\u5f53\u4ece\u800c\u5bfc\u81f4\u4e86\u66f4\u52a0\u4e25\u91cd\u7684\u5b89\u5168\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"0x02-\u968f\u673a\u6570\u76f8\u5173\u57fa\u7840\u77e5\u8bc6"},"0x02 \u968f\u673a\u6570\u76f8\u5173\u57fa\u7840\u77e5\u8bc6"),(0,r.kt)("p",null,"\u6839\u636e\u5bc6\u7801\u5b66\u539f\u7406\uff0c\u968f\u673a\u6570\u7684\u968f\u673a\u6027\u68c0\u9a8c\u53ef\u4ee5\u5206\u4e3a\u4e09\u4e2a\u6807\u51c6\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7edf\u8ba1\u5b66\u4f2a\u968f\u673a\u6027\uff1a\u5728\u7ed9\u5b9a\u7684\u968f\u673a\u6bd4\u7279\u6d41\u6837\u672c\u4e2d\uff0c1\u7684\u6570\u91cf\u5927\u81f4\u7b49\u4e8e0\u7684\u6570\u91cf\uff0c\u6ee1\u8db3\u8fd9\u7c7b\u8981\u6c42\u7684\u6570\u5b57\u5728\u4eba\u7c7b\u201c\u4e00\u773c\u770b\u4e0a\u53bb\u201d\u662f\u968f\u673a\u7684"),(0,r.kt)("li",{parentName:"ol"},"\u5bc6\u7801\u5b66\u5b89\u5168\u4f2a\u968f\u673a\u6027\uff1a\u7ed9\u5b9a\u968f\u673a\u6837\u672c\u7684\u4e00\u90e8\u5206\u548c\u968f\u673a\u7b97\u6cd5\uff0c\u4e0d\u80fd\u6709\u6548\u7684\u6f14\u7b97\u51fa\u968f\u673a\u6837\u672c\u7684\u5269\u4f59\u90e8\u5206"),(0,r.kt)("li",{parentName:"ol"},"\u771f\u968f\u673a\u6027\uff1a\u968f\u673a\u6837\u672c\u4e0d\u53ef\u91cd\u73b0")),(0,r.kt)("p",null,"\u76f8\u5e94\u7684\uff0c\u968f\u673a\u6570\u4e5f\u5206\u4e3a\u4e09\u7c7b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4f2a\u968f\u673a\u6570"),"\uff1a\u6ee1\u8db3\u7b2c\u4e00\u4e2a\u6761\u4ef6\u7684\u968f\u673a\u6570")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5bc6\u7801\u5b66\u5b89\u5168\u7684\u4f2a\u968f\u673a\u6570"),"\uff1a\u540c\u65f6\u6ee1\u8db3\u524d\u4e24\u4e2a\u6761\u4ef6\u7684\u968f\u673a\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bc6\u7801\u5b66\u5b89\u5168\u4f2a\u968f\u673a\u6570\u751f\u6210\u5668\u8ba1\u7b97\u5f97\u51fa")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u771f\u968f\u673a\u6570"),"\uff1a\u540c\u65f6\u6ee1\u8db3\u4e09\u4e2a\u6761\u4ef6\u7684\u968f\u673a\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u5b66\u5b89\u5168\u4f2a\u968f\u673a\u6570\u751f\u6210\u5668\uff08CSPRNG\uff09")),(0,r.kt)("p",{parentName:"li"},"\u76f8\u8f83\u4e8e\u7edf\u8ba1\u5b66\u4f2a\u968f\u673a\u6570\u751f\u6210\u5668\u548c\u66f4\u5f31\u7684\u4f2a\u968f\u673a\u6570\u751f\u6210\u5668\uff0cCSPRNG\u6240\u751f\u6210\u7684\u5bc6\u7801\u5b66\u5b89\u5168\u4f2a\u968f\u673a\u6570\u5177\u6709\u989d\u5916\u7684\u4f2a\u968f\u673a\u5c5e\u6027\uff0c\u7b80\u5355\u6765\u8bf4CSPRNG\u672c\u8d28\u4e0a\u5c5e\u4e8e\u4e00\u79cd\u5355\u5411\u51fd\u6570"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"\u968f\u673a\u6570\u5206\u7c7b\u4e0e\u5173\u7cfb\u56fe",src:n(45).Z,width:"1920",height:"670"})))),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528python random\u5e93\u751f\u6210\u968f\u673a\u6570\u7684\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> import random\n>>> random.seed(123)\n>>> random.random()\n0.052363598850944326\n>>> random.random()\n0.08718667752263232\n>>> random.seed(123)\n>>> random.random()\n0.052363598850944326\n>>> random.random()\n0.08718667752263232\n>>> random.random()\n0.4072417636703983\n>>> random.seed(123)\n>>> random.random()\n0.052363598850944326\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u968f\u673a\u6570\u7684\u4f7f\u7528\uff0c\u4e00\u822c\u662f\u5148\u64ad\u79cd\uff0c\u7136\u540e\u4f7f\u7528rand\u6765\u83b7\u53d6\u968f\u673a\u6570\u3002\u4e0d\u64ad\u79cd\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u79cd\u5b50\uff0c\u4e0d\u540c\u7684\u8bed\u8a00\u4e0d\u901a\u7248\u672c\u79cd\u5b50\u53ef\u80fd\u4e0d\u4e00\u6837\u3002\u8fd9\u79cd\u901a\u8fc7rand\u51fa\u6765\u7684\u968f\u673a\u6570\uff0c\u5c31\u662f\u4f2a\u968f\u673a\u6570\uff0c\u53ea\u8981\u79cd\u5b50\u56fa\u5b9a\u90a3\u4e48\u6bcf\u6b21\u751f\u6210\u7684\u968f\u673a\u6570\u5e8f\u5217\u5c31\u4f1a\u4e00\u6837\uff0c\u540c\u65f6\u901a\u8fc7\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u53ef\u4ee5\u53d1\u73b0\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u64ad\u79cd\u540e\u4f1a\u91cd\u7f6e\u968f\u673a\u5e8f\u5217")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"random.seed()\u8fdb\u884c\u64ad\u79cd\u65f6\u5e76\u6ca1\u6709\u4ea7\u751f\u65b0\u7684\u5bf9\u8c61\uff0c\u5c31\u4f1a\u5bf9\u540e\u9762\u7684random\u4ea7\u751f\u5f71\u54cd\uff0c\u90a3\u4e48\u63a8\u65ad",(0,r.kt)("strong",{parentName:"p"},"\u64ad\u79cd\u540e\u79cd\u5b50\u5bf9\u64ad\u79cd\u65f6\u7684\u6574\u4e2a\u8fdb\u7a0b\u751f\u6548")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8eJava\u8fd9\u79cd\u6709\u65b0\u5bf9\u8c61\u751f\u6210\u7684\u8bed\u8a00\u6765\u8bf4\uff0c\u5982\u679c\u6bcf\u6b21\u90fd\u662f\u8c03\u7528\u7684\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u4e0e\u4e0a\u9762\u7684\u60c5\u51b5\u4e00\u81f4\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u64ad\u79cd\u540e\u4f1a\u5bf9\u8fd9\u4e2a\u5bf9\u8c61\u540e\u9762\u751f\u6210\u7684\u968f\u673a\u6570\u4ea7\u751f\u5f71\u54cd"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class A{\n    public Random random;\n    public void init(){\n        long seed = 123456L;\n        this.random = new Random(seed);\n    }\n    public static void main(){\n        this.init();\n        int num = this.random.nextInt(100);\n        int num2 = this.random.nextInt(100);\n        System.out.println(num + " " + num2);\n\n    }\n}\n')))),(0,r.kt)("h2",{id:"0x03-\u7ecf\u5178\u6848\u4f8b\u5206\u6790"},"0x03 \u7ecf\u5178\u6848\u4f8b\u5206\u6790"),(0,r.kt)("h3",{id:"\u6848\u4f8b1jumpserver-\u4efb\u610f\u8d26\u6237\u5bc6\u7801\u91cd\u7f6ecve-2023-42820"},"\u6848\u4f8b1\u2014\u2014JumpServer \u4efb\u610f\u8d26\u6237\u5bc6\u7801\u91cd\u7f6e(CVE-2023-42820)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"JumpServer \u662f\u5e7f\u53d7\u6b22\u8fce\u7684\u56fd\u4ea7\u5f00\u6e90\u5821\u5792\u673a\uff0c\u662f\u7b26\u5408 4A \u89c4\u8303\u7684\u4e13\u4e1a\u8fd0\u7ef4\u5b89\u5168\u5ba1\u8ba1\u7cfb\u7edf"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u4f4d\u4e8e\u627e\u56de\u5bc6\u7801\u65f6\uff0c\u751f\u6210\u76846\u4f4d\u9a8c\u8bc1\u7801\u7b97\u6cd5\u662f\u4f2a\u968f\u673a\uff0c\u4f2a\u968f\u673a\u7684\u79cd\u5b50\u53ef\u83b7\u53d6\uff0c\u4ece\u800c\u53ef\u4ee5\u9884\u6d4b\u9a8c\u8bc1\u7801\uff0c\u6700\u7ec8\u91cd\u7f6e\u4efb\u610f\u8d26\u6237\u5bc6\u7801")),(0,r.kt)("p",null,"jumperserver\u627e\u56de\u5bc6\u7801\u65f6\u7684\u6d41\u7a0b\u5982\u4e0b\u56fe\uff08\u8fd9\u91cc\u501f\u7528\u4e00\u4e2a\u77e5\u8bc6\u661f\u7403\u4e2d\u7684\u6d41\u7a0b\u56fe"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(7206).Z,width:"896",height:"854"})),(0,r.kt)("p",null,"\u770b\u8d77\u6765\u6d41\u7a0b\u4f3c\u4e4e\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u95ee\u9898\u51fa\u73b0\u5728",(0,r.kt)("strong",{parentName:"p"},"\u968f\u673a\u6570\u79cd\u5b50"),"\u5728\u8bf7\u6c42\u9a8c\u8bc1\u7801\u56fe\u7247\u65f6\u76f4\u63a5\u5c55\u793a\u7ed9\u7528\u6237\uff0c\u4e0b\u9762\u4ece\u6e90\u7801\u5165\u624b\u67e5\u770b\u903b\u8f91"),(0,r.kt)("p",null,"\u5148\u770b\u9a8c\u8bc1\u7801\u751f\u6210\u7684\u903b\u8f91"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def captcha_image(request, key, scale=1):\n    if scale == 2 and not settings.CAPTCHA_2X_IMAGE:\n        raise Http404\n    try:\n        store = CaptchaStore.objects.get(hashkey=key)\n    except CaptchaStore.DoesNotExist:\n        # HTTP 410 Gone status so that crawlers don't index these expired urls.\n        return HttpResponse(status=410)\n\n    random.seed(key)  # Do not generate different images for the same key\n                                            # \u8fd9\u91cc\u7684\u79cd\u5b50\u662f\u5916\u9762\u4f20\u8fdb\u6765\u7684\u53c2\u6570\n\n    text = store.challenge\n...\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbi/django-simple-captcha/blob/master/captcha/views.py"},"https://github.com/mbi/django-simple-captcha/blob/master/captcha/views.py")),(0,r.kt)("p",null,"\u5bfb\u627e\u8fd9\u4e2a\u51fd\u6570\u7684\u8c03\u7528\u5904"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from django.urls import re_path\n\nfrom captcha import views\n\nurlpatterns = [\n    re_path(\n        r"image/(?P<key>\\w+)/$",\n        views.captcha_image,\n        name="captcha-image",\n        kwargs={"scale": 1},\n    ),\n    re_path(\n        r"image/(?P<key>\\w+)@2/$",\n        views.captcha_image,\n        name="captcha-image-2x",\n        kwargs={"scale": 2},\n    ),\n    re_path(r"audio/(?P<key>\\w+).wav$", views.captcha_audio, name="captcha-audio"),\n    re_path(r"refresh/$", views.captcha_refresh, name="captcha-refresh"),\n]\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mbi/django-simple-captcha/blob/master/captcha/urls.py#L9"},"https://github.com/mbi/django-simple-captcha/blob/master/captcha/urls.py#L9")),(0,r.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0key\u7684\u503c\u5c31\u5b58\u5728\u4e8e\u8bf7\u6c42\u7684url\u4e2d\uff0c\u5982\u4e0b"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(1229).Z,width:"1080",height:"142"})),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u6ee1\u8db3\u4e86\u968f\u673a\u6570\u79cd\u5b50\u53ef\u77e5\u7684\u6761\u4ef6"),(0,r.kt)("p",null,"\u518d\u770b\u5bc6\u7801\u627e\u56de\u5730\u65b9\u7684\u903b\u8f91"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(1362).Z,width:"1080",height:"570"})),(0,r.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u53d1\u73b0\u751f\u6210\u9a8c\u8bc1\u7801\u4e5f\u4f7f\u7528random\u51fd\u6570\uff0c\u5e76\u4e14\u6ca1\u6709\u8fdb\u884c\u91cd\u65b0\u64ad\u79cd\uff0c\u6545\u540e\u7eed\u7684\u968f\u673a\u5e8f\u5217\u5b8c\u5168\u53ef\u4ee5\u8ba1\u7b97\u51fa\u6765\uff0c\u4ece\u800c\u5bfc\u81f46\u4f4d\u9a8c\u8bc1\u7801\u53ef\u4ee5\u76f4\u63a5\u8ba1\u7b97\u51fa\u6765"),(0,r.kt)("h3",{id:"\u4fee\u590d"},"\u4fee\u590d"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jumpserver/jumpserver/commit/ce645b1710c5821119f313e1b3d801470565aac"},"fix: \u4fee\u590d random error \xb7 jumpserver/jumpserver@ce645b1 \xb7 GitHub")),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(1522).Z,width:"1138",height:"551"})),(0,r.kt)("p",null,"patch\u662f\u76f4\u63a5\u91cd\u65b0\u5c06None\u4f5c\u4e3a\u79cd\u5b50\u8fdb\u884c\u64ad\u79cd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"random.seed(a=None, version=2) If a is omitted or None , the current system time is used. If randomness sources are provided by the operating system, they are used instead of the system time (see the os.urandom() function for details on availability)."))),(0,r.kt)("p",null,"\u67e5\u770b\u624b\u518c\uff0c\u4f7f\u7528None\u4f5c\u4e3a\u79cd\u5b50\uff0c\u5219"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u968f\u673a\u6570\u53d1\u751f\u5668\uff08/dev/urandom\uff09\u4f5c\u4e3a\u79cd\u5b50"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5f53\u524d\u65f6\u95f4\u4f5c\u4e3a\u79cd\u5b50")),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u907f\u514d\u4e86\u751f\u62106\u4f4d\u9a8c\u8bc1\u7801\u65f6\uff0c\u79cd\u5b50\u5df2\u77e5\u4ece\u800c\u53ef\u4ee5\u88ab\u9884\u6d4b\u540e\u7eed\u968f\u673a\u6570\u7684\u60c5\u51b5"),(0,r.kt)("h3",{id:"\u6848\u4f8b2inductive-ignition-session\u52ab\u6301cve-2022-35890"},"\u6848\u4f8b2\u2014\u2014Inductive Ignition session\u52ab\u6301(CVE-2022-35890)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Inductive Automation Ignition\u662f\u7f8e\u56fdInductive Automation\u516c\u53f8\u7684\u4e00\u5957\u7528\u4e8eSCADA\u7cfb\u7edf\u7684\u96c6\u6210\u8f6f\u4ef6\u5e73\u53f0\u3002\u8be5\u5e73\u53f0\u652f\u6301SCADA\uff08\u6570\u636e\u91c7\u96c6\u4e0e\u76d1\u63a7\u7cfb\u7edf\uff09\u3001HMI\uff08\u4eba\u673a\u754c\u9762\uff09\u7b49"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ignition \u662f2022\u5e74pwn2own\u7684\u6bd4\u8d5b\u9879\u76ee\uff0c\u8be5\u6f0f\u6d1e\u5728\u6bd4\u8d5b\u4e2d\u88ab\u4f7f\u7528\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6e90\u4e8e\u751f\u6210session\u4f7f\u7528\u7684\u7b97\u6cd5\u5728Windows\u4e0b\u4e3a\u4f2a\u968f\u673a\u51fd\u6570\uff0c\u4e14\u672a\u4f7f\u7528\u9ed8\u8ba4\u79cd\u5b50\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u7279\u5b9a\u65b9\u6cd5\u6cc4\u9732\u51faseed\u5927\u6982\u8303\u56f4\uff0c\u6700\u7ec8\u7ed3\u5408\u4e00\u5b9a\u6b21\u6570\u7684\u7206\u7834\u5373\u53ef\u52ab\u6301\u771f\u6b63session")),(0,r.kt)("p",null,"\u5148\u770b\u79cd\u5b50\u521d\u59cb\u5316\u7684\u90e8\u5206"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private void initRandom() throws Exception {\n    long seed = System.currentTimeMillis();\n    char[] entropy = ENTROPY;\n    for (int i = 0; i < entropy.length; ++i) {\n        long update = (byte)entropy[i] << i % 8 * 8;\n        seed ^= update;\n    }\n    this.random = new SecureRandom();\n    this.random.setSeed(seed);\n    this.digest = MessageDigest.getInstance("SHA-1");\n}\n')),(0,r.kt)("p",null,"initRandom\u4f4d\u4e8eGatewaySessionManager\u521a\u542f\u52a8\u65f6\uff0c\u8fd9\u91cc\u521d\u59cb\u5316\u4e86\u79cd\u5b50\uff0c\u4f7f\u7528\u7684\u968f\u673a\u51fd\u6570\u4e3ajava.security.SecureRandom()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public GWSession createSession() {\n    GWSession session = new GWSession(this.generateSessionId());\n    session.startup(this.context);\n    this.sessions.put(session.getId(), session);\n    this.log.debug((Object)("Created new session: " + session.getPublicId()));\n    this.statusTags.refresh();\n    return session;\n}\n')),(0,r.kt)("p",null,"\u521b\u5efasession\u4f4d\u4e8e\u7528\u6237\u6210\u529f\u767b\u5f55\u5904\uff0c\u518d\u770b\u5177\u4f53\u751f\u6210session\u7684\u7b97\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected synchronized String generateSessionId() {\n    byte[] random = new byte[16];\n    String result = null;\n    StringBuffer buffer = new StringBuffer();\n    do {\n        int resultLenBytes = 0;\n        if (result != null) {\n            buffer = new StringBuffer();\n            ++this.duplicates;\n        }\n        while (resultLenBytes < this.sessionIdLength) {\n            this.random.nextBytes(random);\n            random = this.digest.digest(random);\n            for (int j = 0; j < random.length && resultLenBytes < this.sessionIdLength; ++resultLenBytes, ++j) {\n                byte b1 = (byte)((random[j] & 0xF0) >> 4);\n                byte b2 = (byte)(random[j] & 0xF);\n                if (b1 < 10) {\n                    buffer.append((char)(48 + b1));\n                } else {\n                    buffer.append((char)(65 + (b1 - 10)));\n                }\n                if (b2 < 10) {\n                    buffer.append((char)(48 + b2));\n                    continue;\n                }\n                buffer.append((char)(65 + (b2 - 10)));\n            }\n        }\n    } while (this.sessions.get(result = buffer.toString()) != null);\n    return result;\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u4e86this.random\u751f\u6210\u968f\u673a\u6570\uff0c\u4e5f\u5c31\u662f\u4e0a\u9762\u64ad\u79cd\u4e86\u65f6\u95f4\u6233\u4f5c\u4e3a\u79cd\u5b50\u7684\u968f\u673a\u51fd\u6570\uff0c\u90a3\u4e48\u53ef\u80fd\u5b58\u5728\u88ab\u9884\u6d4b\u7684\u98ce\u9669"),(0,r.kt)("p",null,"\u67e5\u8be2java.security.SecureRandom\u5728windows\u5e73\u53f0\u4e0a\u5e95\u5c42\u8c03\u7528\u7684\u51fd\u6570\uff0c\u5728stack overflow\u4e0a\u627e\u5230\u4e86\u7c7b\u4f3c\u7684\u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Q: ",(0,r.kt)("em",{parentName:"p"},"I am interested in"),"\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.Random"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"java.security.SecureRandom"),"\xa0classes. I found that\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Random"),"\xa0uses system clock to generate seed and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SecureRandom"),"\xa0uses\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/random"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/urandom"),"\xa0but these files are on Linux, while on Windows it uses some mistic\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"CryptGenRandom"),". Even if that is super secure function, do we know from where does it take values? What is the basement to generate seed?"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u5bf9 java.util.Random \u548c java.security.SecureRandom \u7c7b\u611f\u5174\u8da3\u3002 \u6211\u53d1\u73b0 Random \u4f7f\u7528\u7cfb\u7edf\u65f6\u949f\u751f\u6210\u79cd\u5b50\uff0cSecureRandom \u4f7f\u7528 /dev/random \u6216 /dev/urandom\uff0c\u4f46\u8fd9\u4e9b\u6587\u4ef6\u4f4d\u4e8e Linux \u4e0a\uff0c\u800c\u5728 Windows \u4e0a\u5219\u4f7f\u7528\u4e00\u4e9b\u795e\u79d8\u7684 CryptGenRandom\u3002 \u5373\u4f7f\u8fd9\u662f\u8d85\u7ea7\u5b89\u5168\u7684\u51fd\u6570\uff0c\u6211\u4eec\u77e5\u9053\u5b83\u4ece\u54ea\u91cc\u83b7\u53d6\u503c\u5417\uff1f \u751f\u6210\u79cd\u5b50\u7684\u5e95\u5c42\u903b\u8f91\u662f\u4ec0\u4e48\uff1f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A: ",(0,r.kt)("em",{parentName:"p"},"In Windows\xa0SecureRandom\xa0uses the method\xa0CryptGenRandom\xa0that is part of WinCrypt Windows library (Included in Advapi32.dll of Windows System libraries).")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5728 Windows SecureRandom \u4e2d\uff0c\u4f7f\u7528 CryptGenRandom \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u662f WinCrypt Windows \u5e93\u7684\u4e00\u90e8\u5206\uff08\u5305\u542b\u5728 Windows \u7cfb\u7edf\u5e93\u7684 Advapi32.dll \u4e2d\uff09")))),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5fae\u8f6f\u5b98\u65b9\u624b\u518c\u5bf9",(0,r.kt)("em",{parentName:"p"},"CryptGenRandom"),"\u7684\u63cf\u8ff0\uff08\u8282\u9009\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Software random number generators work in fundamentally the same way. They start with a random number, known as the seed, and then use an algorithm to generate a pseudo-random sequence of bits based on it. The most difficult part of this process is to get a seed that is truly random. This is usually based on user input latency, or the jitter from one or more hardware components.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u8f6f\u4ef6\u968f\u673a\u6570\u751f\u6210\u5668\u7684\u5de5\u4f5c\u65b9\u5f0f\u57fa\u672c\u76f8\u540c\u3002 \u4ed6\u4eec\u4ece\u4e00\u4e2a\u968f\u673a\u6570\uff08\u79f0\u4e3a\u79cd\u5b50\uff09\u5f00\u59cb\uff0c\u7136\u540e\u4f7f\u7528\u7b97\u6cd5\u751f\u6210\u57fa\u4e8e\u5b83\u7684","`",(0,r.kt)("strong",{parentName:"p"},"\u4f2a\u968f\u673a\u4f4d\u5e8f\u5217"),"\u3002 \u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u6700\u56f0\u96be\u7684\u90e8\u5206\u662f\u83b7\u5f97\u771f\u6b63\u968f\u673a\u7684\u79cd\u5b50\u3002 \u8fd9\u901a\u5e38\u57fa\u4e8e\u7528\u6237\u8f93\u5165\u5ef6\u8fdf\u6216\u6765\u81ea\u4e00\u4e2a\u6216\u591a\u4e2a\u786c\u4ef6\u7ec4\u4ef6\u7684\u6296\u52a8\u3002")))),(0,r.kt)("p",null,"\u901a\u8fc7\u624b\u518c\uff0c\u6211\u4eec\u53ef\u77e5Windows\u5e95\u5c42\u8c03\u7528\u7684\u662f\u4e2a\u4f2a\u968f\u673a\u51fd\u6570\uff0c\u5e76\u4e14\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u79cd\u5b50\u662f\u4e00\u4e2a\u5f88\u96be\u9884\u6d4b\u7684\u503c\uff0c\u4f46\u662fignition\u4e2d\u9519\u8bef\u7684\u4f7f\u7528\u4e86\u7cfb\u7edf\u65f6\u95f4\u4f5c\u4e3a\u79cd\u5b50"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u83b7\u5f97\u4f2a\u968f\u673a\u79cd\u5b50\uff1f")),(0,r.kt)("p",null,"\u5728ignition gateway\u4e2d\uff0c\u6709\u4e00\u4e2a\u7279\u6b8a\u7684servlet\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"scriptModules")," \u7528\u4e8e\u83b7\u53d6\u7b2c\u4e09\u65b9\u7684\u811a\u672c\uff0c\u6700\u7ec8\u5c06\u5176\u6253\u5305\u8fd4\u56de\u4e00\u4e2azip"),(0,r.kt)("p",null,"\u76f4\u63a5\u8ddf\u5230\u5bf9\u5e94\u903b\u8f91\u5904"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'void zipThirdPartyScriptModulesAndCalcHash() {\n      this.thirdPartyZipValid = false;\n      Object object = this.thirdPartyZipLock;\n      synchronized (object) {\n          if (this.thirdPartyZipValid) {\n              return;\n          }\n          try {\n              File pylibDir = this.getThirdPartyScriptModulesDir();\n              ZipMap zipMap = new ZipMap();\n              this.addDirToZip(pylibDir, pylibDir, zipMap);\n              File tempFile = new File(this.systemManager.getTempDir(), "pylib_compressed.zip");\n              zipMap.writeToFile(tempFile);\n              this.thirdPartyScriptModulesHash = Files.hash((File)tempFile, (HashFunction)Hashing.md5()).toString();\n          }\n          catch (Exception e) {\n              this.log.error("Error calculating 3rd party script zip hash.", (Throwable)e);\n              this.thirdPartyScriptModulesHash = null;\n          }\n          finally {\n              this.thirdPartyZipValid = true;\n              this.thirdPartyZipLock.notifyAll();\n          }\n      }\n}\n')),(0,r.kt)("p",null,"pylib_compressed.zip\u5728\u6bcf\u6b21ignition\u542f\u52a8\u65f6\u90fd\u4f1a\u91cd\u65b0\u751f\u6210\uff0c\u5bf9\u4e8e\u6587\u4ef6\u6765\u8bf4\u4f1a\u6709\u4e00\u4e2a\u6700\u540e\u4fee\u6539\u65f6\u95f4\u7684\u5c5e\u6027\uff0c\u540c\u65f6\u4e0a\u9762\u6240\u8bf4\u7684\u968f\u673a\u6570\u521d\u59cb\u5316\u65f6\u4f7f\u7528\u7684\u65f6\u95f4\u6233\u4e5f\u4f1a\u4e0e\u8fd9\u4e2a\u65f6\u95f4\u63a5\u8fd1"),(0,r.kt)("p",null,"\u67e5\u770b\u542f\u52a8\u65e5\u5fd7\u53ef\u4ee5\u770b\u5230\u5148\u751f\u6210\u4e86seed\u540e\u542f\u52a8ignition gateway\uff0c\u90a3\u4e48\u53ea\u9700\u8981\u5728zip\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4\u503c\u51cf\u53bbdelay\u5373\u53ef\uff0c\u4e00\u822c\u6765\u8bf42s\u8db3\u77e3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u90a3\u4e48\u5728\u7206\u7834seed\u65f6\u5982\u4f55\u77e5\u9053\u5f53\u524dsession\u662f\u5426\u6b63\u786e\uff1f")),(0,r.kt)("p",null,"\u5728gateway\u4e2d\u5904\u7406\u6570\u636e\u5305\u65f6\u5b58\u5728\u5982\u4e0b\u903b\u8f91"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'if (!versionHash.isDev() && msg.getVersion() != 0L && versionHash.getHash() != msg.getVersion()) {\n        if (session != null) {\n            session.setMaxInactiveInterval(10);\n        }\n        this.printErrorResponse((PrintWriter)out, 309, "Version mismatch", false);\n        return;\n}\n')),(0,r.kt)("p",null,"\u6b64\u5904\u903b\u8f91\u4f4d\u4e8esession\u6821\u9a8c\u4e4b\u540e\uff0c\u4e5f\u5c31\u662f\u8bf4\u6545\u610f\u8bbe\u7f6e\u9519\u8bef\u7684version\uff0c\u5f53session\u9a8c\u8bc1\u901a\u8fc7\u65f6\uff0c\u5373\u53ef\u5728\u8fd4\u56de\u5305\u4e2d\u770b\u5230309\u7684\u54cd\u5e94"),(0,r.kt)("p",null,"\u81f3\u6b64\u5b8c\u6210\u4e86\u6574\u4e2asession\u52ab\u6301\u7684\u6d41\u7a0b"),(0,r.kt)("p",null,"\u91cd\u65b0\u68b3\u7406\u4e00\u4e0b\u6574\u4e2a\u6d41\u7a0b\uff1a"),(0,r.kt)("p",null,"\u901a\u8fc7scriptModules\u83b7\u53d6\u5230ignition\u542f\u52a8\u7684\u65f6\u95f4 \u2192 \u5c06\u65f6\u95f4-delay\u4f5c\u4e3a\u521d\u59cb\u79cd\u5b50 \u2192 \u4f7f\u7528\u521d\u59cb\u79cd\u5b50\u8ba1\u7b97session \u2192 \u9a8c\u8bc1\u5f53\u524dsession\u662f\u5426\u6b63\u786e \u2192 \u79cd\u5b50+1\uff08\u76f4\u81f3\u6b63\u786e\uff09"),(0,r.kt)("h3",{id:"\u4fee\u590d-1"},"\u4fee\u590d"),(0,r.kt)("p",null,"\u67e5\u770b\u4fee\u590d\u540e\u7684\u7248\u672c\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"protected synchronized String generateSessionId() {\n    String result;\n    do {\n        result = AuthUtil.generateRandomBase64String(32);\n    } while(this.sessions.get(result) != null);\n\n    return result;\n}\n")),(0,r.kt)("p",null,"\u65b0\u7248\u672c\u76f4\u63a5\u5220\u6389\u4e86initRandom\u51fd\u6570\uff0c\u5e76\u4fee\u6539\u4e86\u751f\u6210session\u7684\u903b\u8f91\uff0c\u8ddf\u8fdb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public static String generateRandomBase64String(int entropyCountInBytes) {\n      assert entropyCountInBytes > 0;\n    \n      byte[] bytes = new byte[entropyCountInBytes];\n      SecureRandomProvider.get().nextBytes(bytes);\n      return BASE64_ENCODER.encodeToString(bytes);\n}\n")),(0,r.kt)("p",null,"\u7ee7\u7eed\u8ddf\u8fdb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public void nextBytes(byte[] bytes) {\n      LOG.tracef("nextBytes(bytes.length=%s)...", new Object[]{bytes.length});\n      this.secureRandom.nextBytes(bytes);\n      LOG.trace("Done.");\n}\n')),(0,r.kt)("p",null,"\u770b\u5230\u4f7f\u7528\u7684\u51fd\u6570\u4ecd\u7136\u662f\u4f2a\u968f\u673a\u51fd\u6570\uff0c\u67e5\u770bseed\u662f\u5426\u53ef\u4ee5\u63a8\u6d4b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private SecureRandomProvider() throws NoSuchAlgorithmException {\n    LOG.debug("Creating SecureRandom object...");\n    this.secureRandom = SecureRandom.getInstance("SHA1PRNG");\n    byte[] seed = new byte[128];\n    (new Random()).nextBytes(seed);\n    this.secureRandom.setSeed(seed);\n    this.secureRandom.nextBytes(new byte[128]);\n    (new Thread(new SeedGenerator(), "secure-random-seed-gen")).start();\n    LOG.debug("... SecureRandom Created.");\n}\n')),(0,r.kt)("p",null,"\u8fd9\u91ccseed\u751f\u6210\u867d\u7136\u4f7f\u7528\u4e86\u4f2a\u968f\u673a\u51fd\u6570random().nextbytes()\uff0c\uff08random\u51fd\u6570\u9ed8\u8ba4\u4f7f\u7528timestamp\u4f5c\u4e3a\u79cd\u5b50\uff09\u4f46\u662f\u7531\u4e8e\u6bcf\u6b21\u751f\u6210session\u65f6\u90fd\u9700\u8981\u8c03\u7528\u4e00\u904d\u8fd9\u4e2a\u6d41\u7a0b\uff0c\u4f7f\u7528\u7684seed\u4e3a\u5f53\u524d\u65f6\u95f4\uff0c\u6240\u4ee5\u6bcf\u6b21\u751f\u6210session\u65f6\u7684seed\u6ca1\u6cd5\u901a\u8fc7\u4e4b\u524d\u7684\u65b9\u6cd5\u8fdb\u884c\u63a8\u6d4b\uff0c\u4ece\u800c\u4f7f\u5f97session\u7684\u503c\u4e0d\u53ef\u8ba1\u7b97\uff0c\u6700\u7ec8\u9632\u6b62\u4e86session\u88ab\u52ab\u6301\u7684\u98ce\u9669"),(0,r.kt)("p",null,"\u8fd9\u91cc\u8fd8\u6709\u53e6\u4e00\u79cd\u4fee\u590d\u65b9\u6cd5\uff0c\u5373\u4f7f\u7528java.security.SecureRandom\u9ed8\u8ba4\u79cd\u5b50\u5373\u53ef\uff0c\u4e0d\u8fdb\u884csetseed"),(0,r.kt)("h2",{id:"0x04-\u6f0f\u6d1e\u6a21\u5f0f\u603b\u7ed3"},"0x04 \u6f0f\u6d1e\u6a21\u5f0f\u603b\u7ed3"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0d\u5b89\u5168\u7684\u968f\u673a\u51fd\u6570 \u2192 \u79cd\u5b50\u53ef\u77e5/\u53ef\u9884\u6d4b \u2192 \u968f\u673a\u6570\u53ef\u8ba1\u7b97 \u2192 \u9020\u6210\u66f4\u4e25\u91cd\u7684\u5b89\u5168\u95ee\u9898"),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4e24\u4e2a\u6848\u4f8b\u7684\u4fee\u590d\u65b9\u6cd5\u5747\u662f\u5bf9\u79cd\u5b50\u8fdb\u884c\u5904\u7406\uff0c\u9632\u6b62\u79cd\u5b50\u53ef\u4ee5\u88ab\u9884\u6d4b\uff0c\u4ece\u800c\u4fee\u590d\u539f\u6709\u7684\u5b89\u5168\u95ee\u9898"),(0,r.kt)("p",null,"\u540c\u6837\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,r.kt)("strong",{parentName:"p"},"\u4f2a\u968f\u673a\u51fd\u6570"),"\u4fee\u6539\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u5b89\u5168\u968f\u673a\u51fd\u6570"),"\u7684\u65b9\u6cd5\u6765\u89e3\u51b3\u4e0a\u8ff0\u5b89\u5168\u95ee\u9898\uff08\u4f46\u5b89\u5168\u968f\u673a\u51fd\u6570\u53ef\u80fd\u5e76\u6ca1\u6709\u4f2a\u968f\u673a\u51fd\u6570\u6548\u7387\u9ad8\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8bed\u8a00"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e38\u89c1\u4f2a\u968f\u673a\u51fd\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b89\u5168\u968f\u673a\u51fd\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"srand"),(0,r.kt)("td",{parentName:"tr",align:null},"linux \u4f7f\u7528/dev/urandom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"rand"),(0,r.kt)("td",{parentName:"tr",align:null},"Windows\u4f7f\u7528CryptGenRandom\u5e76\u4f7f\u7528\u9ed8\u8ba4\u79cd\u5b50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"mt19937"),(0,r.kt)("td",{parentName:"tr",align:null},"C++\u4f7f\u7528std::random_device \u7c7b\u6765\u83b7\u53d6\u5b89\u5168\u7684\u968f\u673a\u79cd\u5b50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"default_random_engine"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"python"),(0,r.kt)("td",{parentName:"tr",align:null},"random"),(0,r.kt)("td",{parentName:"tr",align:null},"secrets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"java"),(0,r.kt)("td",{parentName:"tr",align:null},"java.security.SecureRandom  //\u5f3a\u4f2a\u968f\u673a\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"SecureRandom.getInstanceStrong")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"java.util.Random   //\u5f31\u4f2a\u968f\u673a\u6570"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"php"),(0,r.kt)("td",{parentName:"tr",align:null},"mt_scrand   mt_rand"),(0,r.kt)("td",{parentName:"tr",align:null},"random_bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C#"),(0,r.kt)("td",{parentName:"tr",align:null},"Random"),(0,r.kt)("td",{parentName:"tr",align:null},"System.Security.Cryptography.RNGCryptoServiceProvider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"golang"),(0,r.kt)("td",{parentName:"tr",align:null},"math/rand"),(0,r.kt)("td",{parentName:"tr",align:null},"crypto/rand")))),(0,r.kt)("p",null,"\u5982\u679c\u79cd\u5b50\u4e0d\u53ef\u9884\u6d4b\uff0c\u90a3\u4e48\u4f2a\u968f\u673a\u6570\u5e8f\u5217\u5c31\u96be\u4ee5\u9884\u6d4b\uff0c\u79f0\u4e3a\u5f3a\u4f2a\u968f\u673a\u6570"),(0,r.kt)("p",null,"\u5982\u679c\u79cd\u5b50\u53ef\u9884\u6d4b\uff0c\u90a3\u4e48\u968f\u673a\u6570\u5e8f\u5217\u5c31\u901a\u5e38\u53ef\u4ee5\u9884\u6d4b\uff0c\u79f0\u4e3a\u5f31\u968f\u673a\u6570"),(0,r.kt)("h2",{id:"0x05-reference"},"0x05 Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/VShjaDI1McerX843YyOENw"},"https://mp.weixin.qq.com/s/VShjaDI1McerX843YyOENw")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/vulhub/vulhub/blob/master/jumpserver/CVE-2023-42820/README.zh-cn.md"},"https://github.com/vulhub/vulhub/blob/master/jumpserver/CVE-2023-42820/README.zh-cn.md")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.leavesongs.com/PENETRATION/jumpserver-sep-2023-multiple-vulnerabilities-go-through.html"},"https://www.leavesongs.com/PENETRATION/jumpserver-sep-2023-multiple-vulnerabilities-go-through.html")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sourceincite/randy"},"https://github.com/sourceincite/randy")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53496652/seed-to-java-security-securerandom-on-windows-os"},"https://stackoverflow.com/questions/53496652/seed-to-java-security-securerandom-on-windows-os")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/api/wincrypt/nf-wincrypt-cryptgenrandom"},"https://learn.microsoft.com/en-us/windows/win32/api/wincrypt/nf-wincrypt-cryptgenrandom")))}d.isMDXComponent=!0},45:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/25e7fb3b-96a3-4eac-87c0-7f570b849279-c4e876978ac0e1dded9bfc991a531436.png"},1522:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/80ed7e56-6479-4e15-8d03-805762876ac8-303a4ff4c68a734c2eb0cf43ce198d15.png"},1229:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/90c8eae3-425b-4b89-89ae-fd933b7ddf01-f36aaeac6089c1bb655d69c0e91e91ef.png"},1362:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bb7fd835-eebe-4b21-a9e7-c1eaa1f7e5a3-f06193bcc235d972c841b6a9ec74b52a.png"},7206:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/d840c8a2-98ab-433f-9af9-dbef59d82ffb-02f96f540e225fa2657a29ca38f05c9f.png"}}]);