"use strict";(self.webpackChunkpoc_docs=self.webpackChunkpoc_docs||[]).push([[2860],{34931:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var c=s(74848),i=s(28453);const t={slug:"tiangongarticle006",title:"Exchange Server(CVE-2023-36439)\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u5206\u6790",authors:"mazhenbang",tags:["Microsoft","Exchange"]},r="Exchange Server(CVE-2023-36439)\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u5206\u6790",a={permalink:"/blog/tiangongarticle006",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-11-17-cve-2023-36439-exchange-server/index.md",source:"@site/blog/2023-11-17-cve-2023-36439-exchange-server/index.md",title:"Exchange Server(CVE-2023-36439)\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u5206\u6790",description:"0x01 \u6f0f\u6d1e\u63cf\u8ff0",date:"2023-11-17T00:00:00.000Z",formattedDate:"2023\u5e7411\u670817\u65e5",tags:[{label:"Microsoft",permalink:"/blog/tags/microsoft"},{label:"Exchange",permalink:"/blog/tags/exchange"}],readingTime:4.095,hasTruncateMarker:!0,authors:[{name:"m4yfly",url:"https://github.com/m4yfly",title:"https://github.com/m4yfly",imageURL:"https://github.com/m4yfly.png",key:"mazhenbang"}],frontMatter:{slug:"tiangongarticle006",title:"Exchange Server(CVE-2023-36439)\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\u5206\u6790",authors:"mazhenbang",tags:["Microsoft","Exchange"]},unlisted:!1,prevItem:{title:"IoT \u8bbe\u5907\u4e2d\u7684\u8ba4\u8bc1\u7ed5\u8fc7\u6f0f\u6d1e\u5206\u6790",permalink:"/blog/tiangongarticle007"},nextItem:{title:"WAF\u9632\u62a4\u7ed5\u8fc7\u6280\u5de7\u5206\u6790",permalink:"/blog/tiangongarticle005"}},d={authorsImageUrls:[void 0]},l=[{value:"0x01 \u6f0f\u6d1e\u63cf\u8ff0",id:"0x01-\u6f0f\u6d1e\u63cf\u8ff0",level:2},{value:"0x02 \u80cc\u666f\u4ecb\u7ecd",id:"0x02-\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"0x03 \u6f0f\u6d1e\u5206\u6790",id:"0x03-\u6f0f\u6d1e\u5206\u6790",level:2},{value:"0x04 \u603b\u7ed3",id:"0x04-\u603b\u7ed3",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"0x01-\u6f0f\u6d1e\u63cf\u8ff0",children:"0x01 \u6f0f\u6d1e\u63cf\u8ff0"}),"\n",(0,c.jsxs)(n.p,{children:["2023\u5e7411\u6708\u5fae\u8f6f\u53d1\u5e03\u7684\u5b89\u5168\u66f4\u65b0\u4e2d\uff0c\u4fee\u590d\u4e86\u7b14\u8005\u62a5\u9001\u7684",(0,c.jsx)(n.strong,{children:"CVE-2023-36439"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5229\u7528\u8be5\u6f0f\u6d1e\uff0c\u5728\u4e0eExchange\u670d\u52a1\u5668\u4f4d\u4e8e\u540c\u4e00\u5185\u90e8\u7f51\u7edc\u7684\u60c5\u51b5\u4e0b\uff0c\u7ecf\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u7684\u653b\u51fb\u8005\u53ef\u4ee5\u901a\u8fc7PowerShell\u8fdc\u7a0b\u4f1a\u8bdd\u5b9e\u73b0\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u3002\u653b\u51fb\u8005\u5229\u7528CVE-2023-36439\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u90ae\u7bb1\u540e\u7aef\u83b7\u5f97NT AUTHORITY\\SYSTEM\u7684\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6743\u9650\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"0x02-\u80cc\u666f\u4ecb\u7ecd",children:"0x02 \u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,c.jsx)(n.p,{children:"Exchange \u547d\u4ee4\u884c\u7ba1\u7406\u7a0b\u5e8f\u57fa\u4e8eWindows PowerShell\u6280\u672f\u6784\u5efa\uff0c\u5e76\u63d0\u4f9b\u5f3a\u5927\u7684\u547d\u4ee4\u884c\u754c\u9762\uff0c\u53ef\u5b9e\u73b0 Exchange \u7ba1\u7406\u4efb\u52a1\u7684\u81ea\u52a8\u5316\u3002 \u53ef\u4ee5\u4f7f\u7528 Exchange \u547d\u4ee4\u884c\u7ba1\u7406\u7a0b\u5e8f \u6765\u7ba1\u7406 Exchange \u7684\u5404\u4e2a\u65b9\u9762\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u521b\u5efa\u7535\u5b50\u90ae\u4ef6\u5e10\u6237\u3001\u521b\u5efa\u53d1\u9001\u8fde\u63a5\u5668\u548c\u63a5\u6536\u8fde\u63a5\u5668\u3001\u914d\u7f6e\u90ae\u7bb1\u6570\u636e\u5e93\u5c5e\u6027\u4ee5\u53ca\u7ba1\u7406\u901a\u8baf\u7ec4\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u6f0f\u6d1e\u4f4d\u4e8eExchange\u9488\u5bf9Powershell\u6570\u636e\u7684\u53cd\u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\uff0c\u7406\u89e3proxynotshell\u76f8\u5173\u6f0f\u6d1e\u539f\u7406\u6709\u52a9\u4e8e\u7406\u89e3\u672c\u6f0f\u6d1e\u89e6\u53d1\u903b\u8f91\uff0c\u76f8\u5173\u5206\u6790\u53ef\u53c2\u8003",(0,c.jsxs)(n.a,{href:"https://www.zerodayinitiative.com/blog/2022/11/14/control-your-types-or-get-pwned-remote-code-execution-in-exchange-powershell-backend",children:["\u300a",(0,c.jsx)(n.strong,{children:"CONTROL YOUR TYPES OR GET PWNED: REMOTE CODE EXECUTION IN EXCHANGE POWERSHELL BACKEND"}),"\u300b"]}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"0x03-\u6f0f\u6d1e\u5206\u6790",children:"0x03 \u6f0f\u6d1e\u5206\u6790"}),"\n",(0,c.jsx)(n.p,{children:"\u672c\u6f0f\u6d1e\u7f16\u53f7\u572811\u6708\u53d1\u5e03\uff0c\u4f46\u6f0f\u6d1e\u572810\u6708\u8865\u4e01\u4e2d\u5df2\u7ecf\u88ab\u4fee\u8865\u3002\u540c\u65f611\u6708\u8865\u4e01\u4e2d\u63d0\u5230\u65b0\u589e\u4e86\u201cSerialized Data Signing feature\u201d\u673a\u5236\u6765\u7f13\u89e3\u53cd\u5e8f\u5217\u5316\u76f8\u5173\u6f0f\u6d1e\u95ee\u9898\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u4ee5\u572811\u6708\u8865\u4e01\u7684",(0,c.jsx)(n.code,{children:"SerializationTypeConverter.cs"})," \u4e2d\u53ef\u4ee5\u89c2\u5bdf\u5230\u9488\u5bf9\u88ab\u53cd\u5e8f\u5217\u5316\u6570\u636e\u7684\u6821\u9a8c\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(61891).A+"",width:"1801",height:"795"})}),"\n",(0,c.jsx)(n.p,{children:"\u800c\u572810\u6708\u8865\u4e01\u4e2d\uff0c\u901a\u8fc7\u5bf9\u4e0d\u540c\u7248\u672cChainedSerializationBinder.cs\u8fdb\u884c\u5bf9\u6bd4\u53ef\u76f4\u89c2\u53d1\u73b0\u4ee5\u4e0b\u7ed3\u679c\uff1a"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(39294).A+"",width:"865",height:"215"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728",(0,c.jsx)(n.code,{children:"BuildDisallowedTypesForDeserialization"}),"\u51fd\u6570\u4e2d\u65b0\u589e\u4e86\u9ed1\u540d\u5355\u7c7b\u578b",(0,c.jsx)(n.code,{children:"System.Xaml.XamlServices"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"System.Xaml.XamlServices.Parse"}),"\u65b9\u6cd5\u4e0e\u5e38\u89c1\u7684",(0,c.jsx)(n.code,{children:"XamlReader.Parse"}),"\u5176\u5b9e\u5728\u529f\u80fd\u3001\u5371\u5bb3\u53ca\u5229\u7528\u65b9\u6cd5\u4e0a\u5176\u5b9e\u6ca1\u6709\u672c\u8d28\u533a\u522b\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(33392).A+"",width:"865",height:"386"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6bd4\u5982\u6267\u884c\u4ee5\u4e0a\u4ee3\u7801\u5c06\u8c03\u7528\u8ba1\u7b97\u5668\uff0c\u6240\u4ee5\u672c\u6f0f\u6d1e\u5b9e\u9645\u4e0a\u662f",(0,c.jsx)(n.code,{children:"CVE-2022-41082"}),"\u7684\u4e00\u4e2a\u53d8\u79cd\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f46\u5176\u5b9e\u4ece",(0,c.jsx)(n.code,{children:"CVE-2022-41082"}),"\u4ee5\u540e\uff0c\u589e\u52a0\u4e86",(0,c.jsx)(n.code,{children:"ValidateTypeToDeserialize"}),"\u51fd\u6570\u5bf9\u7c7b\u578b\u8fdb\u884c\u9ed1\u540d\u5355\u6821\u9a8c\uff1b\u5728",(0,c.jsx)(n.code,{children:"CVE-2023-21529"}),"\u3001",(0,c.jsx)(n.code,{children:"CVE-2023-28310"})," \u4ee5\u540e\u589e\u52a0\u4e86",(0,c.jsx)(n.code,{children:"vistor"}),"\u6a21\u5f0f\u7684\u9012\u5f52\u9ed1\u540d\u5355\u6821\u9a8c\uff1b\u5728",(0,c.jsx)(n.code,{children:"CVE-2023-36745"}),"\u3001",(0,c.jsx)(n.code,{children:"CVE-2023-35388"}),"\u7b49\u6f0f\u6d1e\u540e\u589e\u52a0\u4e86",(0,c.jsx)(n.code,{children:"vistor"}),"\u6a21\u5f0f\u7684\u767d\u540d\u5355\u6821\u9a8c\uff0c\u4e3a\u4ec0\u4e48\u8fd9\u4e2a\u6f0f\u6d1e\u8fd8\u80fd\u591f\u89e6\u53d1\uff1f"]}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u662fExchange\u53cd\u5e8f\u5217\u5316\u65f6\uff0c\u767d\u540d\u5355\u6821\u9a8c\u7684\u903b\u8f91"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(61756).A+"",width:"1308",height:"766"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u5f53",(0,c.jsx)(n.code,{children:"typeToDeserialize.IsAbstract"}),"\u4e3atrue\uff0c\u4e14\u7c7b\u578b\u540d\u79f0\u4e0d\u4e3a",(0,c.jsx)(n.code,{children:"System.Type"}),"\u65f6\uff0c\u8ba4\u4e3a\u7c7b\u578b\u5408\u6cd5\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(99753).A+"",width:"881",height:"286"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230",(0,c.jsx)(n.code,{children:"XamlServices"}),"\u5e76\u6ca1\u6709\u88ab\u58f0\u660e\u4e3aAbstract\uff0c\u4f46IsAbstract\u7684\u5c5e\u6027\u4e3atrue"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(46187).A+"",width:"865",height:"261"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u662f\u56e0\u4e3a\u5728C#\u4e2d\uff0c\u5982\u679c\u4e00\u4e2a\u7c7b\u88ab\u58f0\u660e\u4e3a",(0,c.jsx)(n.code,{children:"static"}),"\uff0c\u5219\u5b83\u7684",(0,c.jsx)(n.code,{children:"IsAbstract"}),"\u5c5e\u6027\u4f1a\u662ftrue\u3002\u5728C#\u4e2d\uff0c\u9759\u6001\u7c7b\u5728\u6982\u5ff5\u4e0a\u662f\u62bd\u8c61\u7684\uff0c\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u4ee5",(0,c.jsx)(n.code,{children:"XamlServices"}),"\u4ee5\u8fd9\u79cd\u2018\u53cd\u76f4\u89c9\u2019\u7684\u65b9\u5f0f\u6210\u4e3a\u4e86\u6f0f\u7f51\u4e4b\u9c7c\uff0c\u53ea\u9700\u8981\u7b80\u5355\u66ff\u6362\u76ee\u6807\u7c7b\uff0c\u5229\u7528\u65b9\u6cd5\u4e0e",(0,c.jsx)(n.code,{children:"CVE-2022-41082"}),"\u5b8c\u5168\u4e00\u81f4\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"0x04-\u603b\u7ed3",children:"0x04 \u603b\u7ed3"}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u6587\u5206\u6790\u4e86",(0,c.jsx)(n.code,{children:"CVE-2023-36439"}),"\u7684\u8865\u4e01\u53ca\u6f0f\u6d1e\u6210\u56e0\uff0c\u540c\u65f6\u7b80\u5355\u7edf\u8ba1\u53ef\u4ee5\u53d1\u73b0\u5173\u4e8eExchange Powershell\u6a21\u5757\u5df2\u7ecf\u62ab\u9732\u4e86\u8d85\u8fc710\u4e2a\u76f8\u5173\u6f0f\u6d1e\uff0c\u5e76\u4e14\u5927\u90e8\u5206\u90fd\u53ef\u4ee5\u901a\u8fc7\u53d8\u79cd\u5206\u6790\u6765\u53d1\u73b0\uff0c\u6587\u4e2d\u63d0\u5230\u7684\u591a\u4e2a\u6f0f\u6d1e\u7f16\u53f7\u5176\u5b9e\u5747\u4e3a",(0,c.jsx)(n.code,{children:"CVE-2022-41082"}),"(proxynotshell)\u7684\u53d8\u79cd\u6f0f\u6d1e\uff0c\u540c\u65f6\u6bd4\u598210\u6708\u8865\u4e01\u7684",(0,c.jsx)(n.code,{children:"CVE-2023-36778"}),"\u5176\u5b9e\u4e5f\u662f",(0,c.jsx)(n.code,{children:"CVE-2022-41076"}),"\u7684\u76f8\u4f3c\u6f0f\u6d1e\u3002\u901a\u8fc7\u672c\u6587\u5e0c\u671b\u80fd\u5e2e\u52a9\u8bfb\u8005\u66f4\u597d\u7406\u89e3Exchange Powershell\u6a21\u5757\u7684\u76f8\u5173\u6f0f\u6d1e\u539f\u7406\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},61891:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/02a3b6fa-1f64-4f4b-a6b3-983b1b0464dd-6ca5c88698f5e7bfd1680efbb7b53f6d.png"},46187:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/1cb8f567-b972-45b6-9c1e-ab41351bb304-5e3ce2adc7c811844d9195bdf91c42ee.png"},61756:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/9d6e7656-e8fd-4c81-81c8-62234fa2969c-21d47de6be11d40b4e20e5d33febb384.png"},33392:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/b7b42215-2566-42f9-a0e7-643b012a1897-fd431614b8aff1fd6c8a333ec03a9db0.png"},99753:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/baad71dd-233b-4a43-99da-31cee674ea4f-be3baa963c8af9b56ec1b0134f24f446.png"},39294:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/fd7b4f53-f96b-4af3-ba47-92cac719e1e4-ac7d91f599103b219172e8df7aba78ab.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var c=s(96540);const i={},t=c.createContext(i);function r(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);