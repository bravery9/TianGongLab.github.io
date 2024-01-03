"use strict";(self.webpackChunkpoc_docs=self.webpackChunkpoc_docs||[]).push([[9833],{6208:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(5893),a=n(1151);const r={slug:"tiangongarticle004",title:"\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",authors:"wangyao04",tags:["Cryptography"]},i="\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",s={permalink:"/blog/tiangongarticle004",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-11-03-analysis-of-pseudorandom-number-problems/index.md",source:"@site/blog/2023-11-03-analysis-of-pseudorandom-number-problems/index.md",title:"\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",description:"0x01 \u524d\u8a00",date:"2023-11-03T00:00:00.000Z",formattedDate:"2023\u5e7411\u67083\u65e5",tags:[{label:"Cryptography",permalink:"/blog/tags/cryptography"}],readingTime:17.195,hasTruncateMarker:!0,authors:[{name:"wangyao",title:"Datacon 2021~2023 \u51fa\u9898\u4eba\uff0cGeekPwn 2019 \u53c2\u8d5b\u9009\u624b",imageURL:"https://tiangonglab.github.io/img/authors/wangyao.jpg",key:"wangyao04"}],frontMatter:{slug:"tiangongarticle004",title:"\u4f2a\u968f\u673a\u6570\u95ee\u9898\u6d45\u6790",authors:"wangyao04",tags:["Cryptography"]},unlisted:!1,prevItem:{title:"WAF\u9632\u62a4\u7ed5\u8fc7\u6280\u5de7\u5206\u6790",permalink:"/blog/tiangongarticle005"},nextItem:{title:"Windows\u5185\u6838\u7ade\u6001\u6761\u4ef6\u6f0f\u6d1e\u7814\u7a76",permalink:"/blog/tiangongarticle003"}},l={authorsImageUrls:[void 0]},c=[{value:"0x01 \u524d\u8a00",id:"0x01-\u524d\u8a00",level:2}];function g(t){const e={h2:"h2",p:"p",...(0,a.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"0x01-\u524d\u8a00",children:"0x01 \u524d\u8a00"}),"\n",(0,o.jsx)(e.p,{children:"\u968f\u673a\u6570\u5728\u8bb8\u591a\u79d1\u5b66\u548c\u5de5\u7a0b\u9886\u57df\u626e\u6f14\u7740\u91cd\u8981\u89d2\u8272\uff0c\u5c24\u5176\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u548c\u4fe1\u606f\u5b89\u5168\u9886\u57df\uff0c\u5b83\u7684\u91cd\u8981\u610f\u4e49\u66f4\u662f\u4e0d\u53ef\u5c0f\u89d1\u3002\u5728\u8fd9\u4e2a\u5168\u7403\u6570\u5b57\u5316\u7684\u65f6\u4ee3\uff0c\u6570\u636e\u662f\u6211\u4eec\u7ecf\u6d4e\u548c\u751f\u6d3b\u7684\u6838\u5fc3\uff0c\u6570\u636e\u7684\u5b89\u5168\u548c\u4fdd\u5bc6\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u3002\u6211\u4eec\u4f7f\u7528\u5bc6\u7801\u4fdd\u62a4\u6211\u4eec\u7684\u94f6\u884c\u8d26\u6237\u3001\u7535\u5b50\u90ae\u4ef6\u3001\u793e\u4ea4\u5a92\u4f53\u8d26\u6237\uff0c\u6211\u4eec\u4f7f\u7528\u52a0\u5bc6\u6280\u672f\u4fdd\u62a4\u6211\u4eec\u901a\u4fe1\u7684\u9690\u79c1\u6027\u3002\u5728\u8fd9\u4e9b\u8fc7\u7a0b\u4e2d\uff0c\u968f\u673a\u6570\u662f\u5176\u4e2d\u6700\u91cd\u8981\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u7528\u4e8e\u5bc6\u7801\u751f\u6210\u3001\u6570\u636e\u52a0\u5bc6\u3001\u8eab\u4efd\u9a8c\u8bc1\u548c\u7f51\u7edc\u534f\u8bae\u5b89\u5168\uff0c\u662f\u4fdd\u8bc1\u7535\u5b50\u4ea4\u6d41\u5b89\u5168\u7684\u4ee4\u724c\u3002\u5982\u679c\u6211\u4eec\u4e0d\u80fd\u4fdd\u8bc1\u6240\u751f\u6210\u7684\u968f\u673a\u6570\u5b9e\u9645\u4e0a\u662f\u968f\u673a\u7684\uff0c\u90a3\u4e48\u5b83\u4eec\u5c31\u53ef\u80fd\u88ab\u9884\u6d4b\uff0c\u8fd9\u5c06\u8ba9\u6211\u4eec\u9762\u4e34\u5b89\u5168\u98ce\u9669\u3002\u56e0\u6b64\uff0c\u5728\u63a2\u8ba8\u968f\u673a\u6570\u7684\u540c\u65f6\uff0c\u6211\u4eec\u987b\u6df1\u5316\u7406\u89e3\u968f\u673a\u6027\u7684\u5b89\u5168\u6027\uff0c\u4ee5\u4fbf\u66f4\u6709\u6548\u5730\u4f7f\u7528\u968f\u673a\u6570\uff0c\u4fdd\u62a4\u81ea\u8eab\u548c\u6570\u636e\u514d\u53d7\u653b\u51fb\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u672c\u6b21\u5206\u4eab\u7684\u4e24\u4e2a\u6848\u4f8b\uff08CVE-2023-42820\u548cCVE-2022-35890\uff09\u5747\u662f\u7531\u4e8e\u968f\u673a\u6570\u4f7f\u7528\u4e0d\u5f53\u4ece\u800c\u5bfc\u81f4\u4e86\u66f4\u52a0\u4e25\u91cd\u7684\u5b89\u5168\u95ee\u9898\u3002"})]})}function p(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(g,{...t})}):g(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>i});var o=n(7294);const a={},r=o.createContext(a);function i(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);