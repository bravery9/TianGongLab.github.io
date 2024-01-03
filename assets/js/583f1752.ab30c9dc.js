"use strict";(self.webpackChunkpoc_docs=self.webpackChunkpoc_docs||[]).push([[7661],{2345:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=e(5893),o=e(1151);const i={slug:"tiangongarticle008",title:"Datacon 2023 \u6f0f\u6d1e\u5206\u6790\u8d5b\u9053\u8d5b\u9898\u4e8c\u5b98\u65b9\u9898\u89e3",authors:"liujiamu",tags:["Datacon","Static Analysis"]},s="Datacon 2023 \u6f0f\u6d1e\u5206\u6790\u8d5b\u9053\u8d5b\u9898\u4e8c\u5b98\u65b9\u9898\u89e3",c={permalink:"/blog/tiangongarticle008",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-11-30-Datacon2023WP/index.md",source:"@site/blog/2023-11-30-Datacon2023WP/index.md",title:"Datacon 2023 \u6f0f\u6d1e\u5206\u6790\u8d5b\u9053\u8d5b\u9898\u4e8c\u5b98\u65b9\u9898\u89e3",description:"0x00 \u524d\u8a00",date:"2023-11-30T00:00:00.000Z",formattedDate:"2023\u5e7411\u670830\u65e5",tags:[{label:"Datacon",permalink:"/blog/tags/datacon"},{label:"Static Analysis",permalink:"/blog/tags/static-analysis"}],readingTime:27.25,hasTruncateMarker:!0,authors:[{name:"w00d",title:"Asuri \u6218\u961f\u961f\u957f\uff0c\u4fe1\u606f\u5b89\u5168\u94c1\u4eba\u4e09\u9879\u8d5b\u4e00\u7b49\u5956\uff0cDatacon 2023 \u51fa\u9898\u4eba",imageURL:"https://github.com/Wood1314.png",key:"liujiamu"}],frontMatter:{slug:"tiangongarticle008",title:"Datacon 2023 \u6f0f\u6d1e\u5206\u6790\u8d5b\u9053\u8d5b\u9898\u4e8c\u5b98\u65b9\u9898\u89e3",authors:"liujiamu",tags:["Datacon","Static Analysis"]},unlisted:!1,prevItem:{title:"CodeDom \u6f0f\u6d1e\u6a21\u5f0f\u4e0e SharePoint RCE",permalink:"/blog/tiangongarticle009"},nextItem:{title:"IoT \u8bbe\u5907\u4e2d\u7684\u8ba4\u8bc1\u7ed5\u8fc7\u6f0f\u6d1e\u5206\u6790",permalink:"/blog/tiangongarticle007"}},r={authorsImageUrls:[void 0]},l=[{value:"0x00 \u524d\u8a00",id:"0x00-\u524d\u8a00",level:2}];function u(t){const n={a:"a",h2:"h2",p:"p",...(0,o.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"0x00-\u524d\u8a00",children:"0x00 \u524d\u8a00"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{target:"_blank",href:e(1054).Z+"",children:"\u8d5b\u9898\u4e8c\u9644\u4ef6.zip"})}),"\n",(0,a.jsxs)(n.p,{children:["\u200b\u672c\u9898\u76ee\u6765\u6e90\u4e8e\u5bf9",(0,a.jsx)(n.a,{href:"https://github.com/openwrt/openwrt",children:"openwrt\u9879\u76ee\u6e90\u7801"}),"\u9b54\u6539\u3002\u57fa\u4e8e\u5b9e\u6218\u4e2d\u7684\u573a\u666f\uff0c\u5728\u9898\u76ee\u4e2d\u8bbe\u7f6e\u4e86\u4e09\u79cd\u76f8\u5bf9\u56fa\u5b9a\u4e14\u5e38\u89c1\u7684\u6f0f\u6d1e\u6a21\u5f0f\uff0c\u5e0c\u671b\u9009\u624b\u4eec\u5728\u5bf9\u56fa\u5b9a\u6f0f\u6d1e\u6a21\u5f0f\u7406\u89e3\u7684\u57fa\u7840\u4e0a\uff0c\u53ef\u4ee5\u5229\u7528\u9759\u6001\u5206\u6790\u5de5\u5177\u8f85\u52a9\u8fdb\u884c\u5206\u6790\uff0c\u63a2\u7d22\u5404\u79cd\u6f0f\u6d1e\u5206\u6790\u5de5\u5177\u4e0e\u4eba\u5de5\u5206\u6790\u76f8\u7ed3\u5408\u7684\u6f0f\u6d1e\u6316\u6398\u6a21\u5f0f\uff0c\u51cf\u5c11\u4e00\u5b9a\u91cf\u7684\u91cd\u590d\u4eba\u5de5\u5ba1\u8ba1\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u200b\u9759\u6001\u5206\u6790\u5de5\u5177\u90fd\u6709\u5176\u81ea\u8eab\u7684\u7f3a\u9677\uff0c\u5206\u6790\u7684\u7ed3\u679c\u5f88\u96be\u505a\u5230\u5c3d\u5584\u5c3d\u7f8e\u3002\u56e0\u6b64\u7ad9\u5728\u4e00\u4f4d\u6f0f\u6d1e\u6316\u6398\u5de5\u7a0b\u5e08\u7684\u89d2\u5ea6\uff0c\u6211\u8bbe\u7f6e\u672c\u9898\u7684\u76ee\u6807\u662f\u63a2\u7d22\u5982\u4f55\u5408\u7406\u7684\u4f7f\u7528\u9759\u6001\u5206\u6790\u5de5\u5177\uff0c\u5e76\u6700\u5927\u7a0b\u5ea6\u7684\u5229\u7528\u8fd9\u79cd\u81ea\u52a8\u5316\u7684\u65b9\u5f0f\u5e2e\u52a9\u6211\u4eec\u51cf\u5c11\u4eba\u5de5\u5206\u6790\u7684\u5de5\u4f5c\u3002"})]})}function p(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(u,{...t})}):u(t)}},1054:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/files/finnal-3390a0108f6c33c52557dfce05f17628.zip"},1151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>s});var a=e(7294);const o={},i=a.createContext(o);function s(t){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),a.createElement(i.Provider,{value:n},t.children)}}}]);