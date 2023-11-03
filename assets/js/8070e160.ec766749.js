"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[651],{3905:(t,n,e)=>{e.d(n,{Zo:()=>k,kt:()=>N});var l=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n){if(null==t)return{};var e,l,a=function(t,n){if(null==t)return{};var e,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var p=l.createContext({}),u=function(t){var n=l.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},k=function(t){var n=u(t.components);return l.createElement(p.Provider,{value:n},t.children)},o="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=u(e),m=a,N=o["".concat(p,".").concat(m)]||o[m]||g[m]||r;return e?l.createElement(N,i(i({ref:n},k),{},{components:e})):l.createElement(N,i({ref:n},k))}));function N(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,i=new Array(r);i[0]=m;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=t,d[o]="string"==typeof t?t:a,i[1]=d;for(var u=2;u<r;u++)i[u]=e[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}m.displayName="MDXCreateElement"},1047:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var l=e(7462),a=(e(7294),e(3905));const r={sidebar_position:1},i="VQL \u4f7f\u7528\u624b\u518c",d={unversionedId:"quickstart",id:"quickstart",title:"VQL \u4f7f\u7528\u624b\u518c",description:"\u7b80\u4ecb",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/docs/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"CVE-2018-18708: \u817e\u8fbe\u8def\u7531\u5668\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e",permalink:"/docs/\u4f7f\u7528\u6837\u4f8b/cve-2018-18708/"}},p={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"Cypher \u8bed\u53e5\u4f7f\u7528",id:"cypher-\u8bed\u53e5\u4f7f\u7528",level:2},{value:"\u8282\u70b9\u67e5\u8be2",id:"\u8282\u70b9\u67e5\u8be2",level:3},{value:"\u8def\u5f84\u67e5\u8be2",id:"\u8def\u5f84\u67e5\u8be2",level:3},{value:"\u5b50\u53e5",id:"\u5b50\u53e5",level:3},{value:"\u5e38\u89c1\u7684\u8282\u70b9\u7c7b\u578b\u4f7f\u7528",id:"\u5e38\u89c1\u7684\u8282\u70b9\u7c7b\u578b\u4f7f\u7528",level:2},{value:"\u4f7f\u7528\u5b9e\u5217",id:"\u4f7f\u7528\u5b9e\u5217",level:2},{value:"\u8282\u70b9 id \u83b7\u53d6",id:"\u8282\u70b9-id-\u83b7\u53d6",level:3},{value:"\u8def\u5f84\u4e2d\u5173\u7cfb\u83b7\u53d6",id:"\u8def\u5f84\u4e2d\u5173\u7cfb\u83b7\u53d6",level:3},{value:"\u6c61\u70b9\u8def\u5f84\u83b7\u53d6",id:"\u6c61\u70b9\u8def\u5f84\u83b7\u53d6",level:3},{value:"\u6f0f\u6d1e\u5b9e\u4f8b\u68c0\u6d4b",id:"\u6f0f\u6d1e\u5b9e\u4f8b\u68c0\u6d4b",level:3},{value:"Cypher \u4e0e VQL \u7ed3\u5408\u4f7f\u7528",id:"cypher-\u4e0e-vql-\u7ed3\u5408\u4f7f\u7528",level:2},{value:"\u9644\u5f55 A. VQL \u529f\u80fd\u51fd\u6570\u63cf\u8ff0",id:"\u9644\u5f55-a-vql-\u529f\u80fd\u51fd\u6570\u63cf\u8ff0",level:2}],k={toc:u},o="wrapper";function g(t){let{components:n,...e}=t;return(0,a.kt)(o,(0,l.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vql-\u4f7f\u7528\u624b\u518c"},"VQL \u4f7f\u7528\u624b\u518c"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"VQL\uff08",(0,a.kt)("strong",{parentName:"p"},"Vulnerability Query Language"),"\uff09\u662f\u57fa\u4e8e Cypher\uff08",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u79cd\u58f0\u660e\u5f0f\u7684\u56fe\u6570\u636e\u5e93\u67e5\u8be2\u8bed\u8a00"),"\uff09\u5f00\u53d1\u7684\u6f0f\u6d1e\u67e5\u8be2\u8bed\u8a00\u63d2\u4ef6\uff0c\u5b83\u65e2\u5305\u542b\u4e86 Cypher \u7cbe\u7b80\u548c\u7075\u6d3b\uff0c\u540c\u65f6\u4e5f\u517c\u987e\u4e86\u7b80\u5355\u548c\u5b9e\u7528\u7684\u7279\u6027\uff0c\u80fd\u591f\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u8fdb\u884c\u6f0f\u6d1e\u6316\u6398\u3002\u672c\u5e73\u53f0\u7684\u56fe\u4e2d\u5305\u542b\u51fd\u6570\u8c03\u7528\u56fe\u3001\u63a7\u5236\u6d41\u56fe\u3001\u6570\u636e\u6d41\u56fe\u7b49\u591a\u79cd\u80fd\u8f85\u52a9\u6f0f\u6d1e\u6316\u6398\u7684\u7684\u56fe\u3002"),(0,a.kt)("h2",{id:"cypher-\u8bed\u53e5\u4f7f\u7528"},"Cypher \u8bed\u53e5\u4f7f\u7528"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cypher \u662f \u4e00\u79cd\u56fe\u6570\u636e\u5e93\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u5c31\u5982\u540c SQL \u4e4b\u4e8e\u5176\u4ed6\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e00\u6837\u3002\u5728\u56fe\u6570\u636e\u5e93\u4e2d\uff0c\u6570\u636e\u5747\u4ee5\u8282\u70b9\u3001\u5173\u7cfb\u6765\u5b58\u50a8\u3002\u6240\u4ee5 Cypher \u5e94\u8be5\u80fd\u591f\u6709\u67d0\u79cd\u8bed\u6cd5\u6765\u63cf\u8ff0\u8282\u70b9\u548c\u5173\u7cfb\uff0c\u5e76\u80fd\u8868\u5f81\u4ed6\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u3002")),(0,a.kt)("h3",{id:"\u8282\u70b9\u67e5\u8be2"},"\u8282\u70b9\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"MATCH (n:identifier) RETURN id(n) LIMIT 25\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u67e5\u8be2\u53d8\u91cf\u8282\u70b9\uff0c\u5e76\u8fd4\u56de\u5176\u8282\u70b9 id \u9650\u5236\u6570\u91cf\u4e3a 25"),(0,a.kt)("h3",{id:"\u8def\u5f84\u67e5\u8be2"},"\u8def\u5f84\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"MATCH p=()-[r:dfg]->() RETURN p LIMIT 25\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u67e5\u627e\u8282\u70b9\u5173\u7cfb\u4e3a\u6570\u636e\u6d41\u56fe\u5173\u7cfb(dfg,data flow graph)\u7684\u8def\u5f84\u9650\u5236\u6570\u91cf\u4e3a 25"),(0,a.kt)("h3",{id:"\u5b50\u53e5"},"\u5b50\u53e5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u540c SQL \u4e2d\u7684\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE"),"\xa0\u7b49\u5b50\u53e5\uff0c\u5728 cypher \u4e2d\u4e5f\u6709\u8fd9\u7c7b\u5b50\u53e5\uff0c\u7528\u6765\u8fdb\u884c\u67e5\u627e\u3001\u8fc7\u6ee4\u3001\u6392\u5e8f\u7b49\u64cd\u4f5c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'MATCH (n:identifier) WHERE n.callee = "lxmldbc_system" AND (n.index=2 or n.index=3 or n.index=4) WITH collect(id(n)) AS sinkSet RETURN sinkSet\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u67e5\u627e\u8c03\u7528\u51fd\u6570 lxmldbc_system \u7b2c 3\uff0c4\uff0c5 \u53c2\u6570\u4f4d\u7f6e\u4e0a\u7684\u6240\u6709\u53d8\u91cf(\u6ce8\uff1a\u51fd\u6570\u8c03\u7528\u8f93\u51fa\u503c\u4e3a-1\uff0cindex\u4ece0\u5f00\u59cb\u8ba1\u6570)\uff0c\u5e76\u5c06\u5176\u8282\u70b9 id \u4f5c\u4e3a\u96c6\u5408\u8f93\u51fa"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WITH"),"\xa0\u80fd\u5c06\u591a\u4e2a\u8bed\u53e5\u8fde\u63a5\u8d77\u6765\uff0c\u5c31\u50cf\u7ba1\u9053\u4e00\u6837\uff0c\u524d\u4e00\u4e2a\u8bed\u53e5\u7684\u8f93\u51fa\u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u8bed\u53e5\u7684\u8f93\u5165"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"collect"),"\xa0\u53ef\u4ee5\u5c06\u591a\u4e2a\u5339\u914d\u6536\u96c6\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WHERE"),"\xa0\u4e2d\u8fd8\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6a21\u5f0f\uff0c\u53ef\u4ee5\u8fc7\u6ee4\u6389\u7b26\u5408\u6216\u8005\u4e0d\u7b26\u5408\u8fd9\u4e2a\u6a21\u5f0f\u7684\u7ed3\u679c"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u7684\u8282\u70b9\u7c7b\u578b\u4f7f\u7528"},"\u5e38\u89c1\u7684\u8282\u70b9\u7c7b\u578b\u4f7f\u7528"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"node"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u503c\u4e3a\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u503c\u4e3a\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"taintPropagationPath"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u503c\u4e3a\u6c61\u70b9\u8def\u5f84\uff08\u6ce8\uff1a\u82e5\u9700\u8981\u5728\u5e73\u53f0\u663e\u793a\u4ee3\u7801\u8def\u5f84\uff0c\u8fd4\u56de\u503c\u9700\u8981\u547d\u540d\u4e3ataintPropagationPath\uff09")))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5b9e\u5217"},"\u4f7f\u7528\u5b9e\u5217"),(0,a.kt)("h3",{id:"\u8282\u70b9-id-\u83b7\u53d6"},"\u8282\u70b9 id \u83b7\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"CALL VQL.getAllFunctions() YIELD node WITH COLLECT(id(node)) AS functionId RETURN functionId\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u627e\u51fa\u6240\u6709\u51fd\u6570\u8282\u70b9\uff0c\u5e76\u8fd4\u56de\u6240\u6709\u8282\u70b9\u7684 id"),(0,a.kt)("h3",{id:"\u8def\u5f84\u4e2d\u5173\u7cfb\u83b7\u53d6"},"\u8def\u5f84\u4e2d\u5173\u7cfb\u83b7\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"CALL VQL.getChildren(958080, 1, 1) YIELD path WITH relationships(path) AS r RETURN r\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u627e\u51faid\u4e3a958080\u8282\u70b9\u7684\u8df3\u6570\u4e3a1\u8df3\u7684ast\u5173\u7cfb\u8282\u70b9"),(0,a.kt)("h3",{id:"\u6c61\u70b9\u8def\u5f84\u83b7\u53d6"},"\u6c61\u70b9\u8def\u5f84\u83b7\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"CALL VQL.taintPropagation([845623], [845593, 845664], 1, [845658]) YIELD taintPropagationPath RETURN taintPropagationPath ORDER BY SIZE(taintPropagationPath)\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u67e5\u627eid\u96c6\u5408 ","[845623]"," \u5230id\u96c6\u5408 ","[845593, 845664]"," \u4e4b\u95f4\u7684\u5355\u5411\u6c61\u70b9\u8def\u5f84\uff0c\u5e76\u4e14\u9014\u4e2d\u9700\u8981\u7ecf\u8fc7\u96c6\u5408 ","[845658]","\uff0c\u5e76\u5c06\u8def\u5f84\u6309\u957f\u5ea6\u7531\u5c0f\u5230\u5927\u6392\u5217"),(0,a.kt)("h3",{id:"\u6f0f\u6d1e\u5b9e\u4f8b\u68c0\u6d4b"},"\u6f0f\u6d1e\u5b9e\u4f8b\u68c0\u6d4b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'CALL VQL.getArgument("system", 0) YIELD node WITH collect(id(node)) AS SinkSet \nCALL VQL.getArgument("getenv", -1) YIELD node WITH SinkSet,collect(id(node)) AS SourceSet \nCALL VQL.taintPropagation(SourceSet, SinkSet, 1) YIELD taintPropagationPath RETURN taintPropagationPath order by size(taintPropagationPath)\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u627e\u51fa\u51fd\u6570 system \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f4d\u7f6e\u7684\u6240\u6709\u53d8\u91cf\u4f5c\u4e3a sink \u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u51fa\u4f4d\u4e8e\u51fd\u6570 getenv \u7684\u8fd4\u56de\u503c\u4f4d\u7f6e\u7684\u6240\u6709\u53d8\u91cf\u4f5c\u4e3a source \u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528\u5355\u5411\u6c61\u70b9\u4f20\u64ad\u51fd\u6570\u627e\u5230\u6240\u6709\u7684\u6c61\u70b9\u8def\u5f84\uff0c\u5e76\u6309\u7167\u6c61\u70b9\u8def\u5f84\u7684\u957f\u5ea6\u4ece\u5c0f\u5230\u5927\u6392\u5217")),(0,a.kt)("h2",{id:"cypher-\u4e0e-vql-\u7ed3\u5408\u4f7f\u7528"},"Cypher \u4e0e VQL \u7ed3\u5408\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'MATCH (n:identifier) WHERE n.callee = "getenv" AND n.index=-1 WITH COLLECT(id(n)) AS sourceSet\nMATCH (n:identifier) WHERE n.callee = "lxmldbc_system" AND (n.index=2 or n.index=3 or n.index=4) WITH sourceSet,COLLECT(id(n)) AS sinkSet \nCALL VQL.taintPropagation(sourceSet, sinkSet) YIELD taintPropagationPath RETURN taintPropagationPath ORDER BY size(taintPropagationPath)\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u627e\u51fa\u4f4d\u4e8e\u51fd\u6570 getenv \u7684\u8fd4\u56de\u503c\u4f4d\u7f6e\u7684\u6240\u6709\u53d8\u91cf\u4f5c\u4e3a source \u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u51fa\u4f4d\u4e8e\u51fd\u6570 lxmldbc_system \u7b2c 3\uff0c4\uff0c5 \u53c2\u6570\u4f4d\u7f6e\u4e0a\u7684\u6240\u6709\u53d8\u91cf\u4f5c\u4e3a sink \u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528\u5355\u5411\u6c61\u70b9\u4f20\u64ad\u51fd\u6570\u627e\u5230\u6240\u6709\u7684\u6c61\u70b9\u8def\u5f84\uff0c\u5e76\u6309\u7167\u6c61\u70b9\u8def\u5f84\u7684\u957f\u5ea6\u4ece\u5c0f\u5230\u5927\u6392\u5217")),(0,a.kt)("h2",{id:"\u9644\u5f55-a-vql-\u529f\u80fd\u51fd\u6570\u63cf\u8ff0"},"\u9644\u5f55 A. VQL \u529f\u80fd\u51fd\u6570\u63cf\u8ff0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,a.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8f93\u51fa"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u627e\u51fa source \u5230 sink \u4e4b\u95f4\u7684\u4f20\u8f93\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.taintPropagation"),(0,a.kt)("td",{parentName:"tr",align:null},"List<Long",">"," source ",(0,a.kt)("br",null)," List<Long",">","sink ",(0,a.kt)("br",null)," Integer flag ",(0,a.kt)("br",null)," List<Long",">","should ",(0,a.kt)("br",null)," List<Long",">","shouldNot"),(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8def\u4e0a\u70b9\u7684\u96c6\u5408"),(0,a.kt)("td",{parentName:"tr",align:null},"source \u4e3a source \u70b9 ID \u96c6\u5408\uff0csink \u4e3a sink \u70b9 ID \u96c6\u5408\uff0c ",(0,a.kt)("br",null)," should \u4e3a\u671f\u671b\u7ecf\u8fc7\u7684\u70b9ID\u96c6\u5408\uff0c shouldNot \u4e3a\u6392\u9664\u70b9ID\u7684\u96c6\u5408\uff0c ",(0,a.kt)("br",null)," flag \u9ed8\u8ba4\u4e3a\u7a7a\u4e3a\u4ecesource\u548csink\u4e2d\u8f83\u5c11\u7684\u4e00\u65b9\u4f20\u9012 \uff0c ",(0,a.kt)("br",null)," flag=1 \u65f6\u4e3a\u6709\u65b9\u5411\u4ece source \u5230 sink\uff1b ",(0,a.kt)("br",null)," flag=2 \u65f6\u4e3a\u6709\u65b9\u5411\u4ece sink \u5230 source\uff1b ",(0,a.kt)("br",null)," flag=3 \u65f6\u6c61\u70b9\u5206\u6790\u4e3a\u65e0\u5411"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.taintPropagation(","[845623]",", ","[845593, 845664]",", 1, ","[845658]",") ",(0,a.kt)("br",null)," \u67e5\u627e\u96c6\u5408","[845623]","\u5230\u96c6\u5408","[845593, 845664]","\u4e4b\u95f4\u7684\u5355\u5411\u6c61\u70b9\u8def\u5f84,\u5e76\u4e14\u9014\u4e2d\u9700\u8981\u7ecf\u8fc7\u96c6\u5408","[845658]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53cc\u5411\u627e\u51fa source \u5230 sink \u4e4b\u95f4\u7684\u4f20\u8f93\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.doubleTaintPropagation"),(0,a.kt)("td",{parentName:"tr",align:null},"Long sourceId ",(0,a.kt)("br",null)," Long sinkId ",(0,a.kt)("br",null)," Integer flag ",(0,a.kt)("br",null)," List<Long",">"," should ",(0,a.kt)("br",null)," List<Long",">"," shouldNot"),(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8def\u4e0a\u70b9\u7684\u96c6\u5408"),(0,a.kt)("td",{parentName:"tr",align:null},"flag=1\u65f6\u4e3a\u6709\u65b9\u5411\uff1bflag=2\u65f6\u4e3a\u65e0\u65b9\u5411;"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.doubleTaintPropagation(845623,845664,1) ",(0,a.kt)("br",null)," \u540c\u65f6\u4ece\u70b9845623\u548c845664\u5411\u4e2d\u95f4\u67e5\u627e\u6709\u5411\u6c61\u70b9\u8def\u5f84\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6700\u77ed\u8def\u5f84\u627e\u51fa source \u5230 sink \u4e4b\u95f4\u901a\u8def"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.simpleTaintPropagation"),(0,a.kt)("td",{parentName:"tr",align:null},"List<Long",">","source ",(0,a.kt)("br",null)," List<Long",">","sink ",(0,a.kt)("br",null)," Integer flag"),(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8def\u4e0a\u70b9\u7684\u96c6\u5408"),(0,a.kt)("td",{parentName:"tr",align:null},"flag=1\u65f6\u4e3a\u6709\u65b9\u5411\uff1bflag=2\u65f6\u4e3a\u65e0\u65b9\u5411\uff1bflag=3\u65f6\u627e\u51fa\u5168\u90e8\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.simpleTaintPropagation(","[845623]",",","[845664]",",1) ",(0,a.kt)("br",null)," \u4f7f\u7528\u6700\u77ed\u8def\u5f84\u627e\u51fa\u96c6\u5408","[845623]","\u5230\u96c6\u5408","[845664]","\u7684\u6709\u5411\u6c61\u70b9\u4f20\u8f93\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u5f53\u524d\u9879\u76ee\u6240\u6709\u57fa\u672c\u5757"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getAllBasicblocks"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c\u5757\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getAllBasicblocks ",(0,a.kt)("br",null)," \u627e\u51fa\u5f53\u524d\u5206\u6790\u9879\u76ee\u4e2d\u6240\u6709\u7684\u57fa\u672c\u5757\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u5f53\u524d\u9879\u76ee\u6240\u6709\u51fd\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getAllFunctions"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getAllFunctions ",(0,a.kt)("br",null)," \u627e\u51fa\u5f53\u524d\u5206\u6790\u9879\u76ee\u4e2d\u6240\u6709\u51fd\u6570\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u5f53\u524d\u9879\u76ee\u6240\u6709\u6587\u4ef6"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getAllFiles"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getAllFiles ",(0,a.kt)("br",null)," \u627e\u51fa\u5f53\u524d\u5206\u6790\u9879\u76ee\u4e2d\u6240\u6709\u6587\u4ef6\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9acode_line\u7684AST\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getASTOfCodeline"),(0,a.kt)("td",{parentName:"tr",align:null},"String function ",(0,a.kt)("br",null)," Long nodeId ",(0,a.kt)("br",null)," Long line"),(0,a.kt)("td",{parentName:"tr",align:null},"AST \u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"function \u4e3a\u51fd\u6570\u540d\uff0cline \u4e3a\u884c\u53f7\uff0c\u5f53 nodeId \u4e3a\u7a7a\u65f6\u6309\u7167\u8fd9\u4e24\u4e2a\u5c5e\u6027\u8fdb\u884c\u67e5\u8be2\uff0cnodeId \u4e3a\u8282\u70b9 ID\uff0c\u6309\u7167 code_line \u7684 id \u8fdb\u884c\u67e5\u8be2"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getASTOfCodeline("_mgfini_BFDD",11) ',(0,a.kt)("br",null)," \u627e\u51fa\u51fd\u6570\u4e2d\u7b2c\u5341\u4e00\u884ccode_line\u5bf9\u5e94\u7684ast\u8def\u5f84 ",(0,a.kt)("br",null)," CALL VQL.getASTOfCodeline(31687) ",(0,a.kt)("br",null)," \u627e\u51facode_line\u7684id\u4e3a31687\u5bf9\u5e94\u7684ast\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u51fd\u6570\u7684\u57fa\u672c\u5757"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getBasicblockOfFunction"),(0,a.kt)("td",{parentName:"tr",align:null},"Long functionId ",(0,a.kt)("br",null)," String start_address"),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u672c\u5757\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"start_address\u4e3a\u51fd\u6570\u5165\u53e3\u70b9\u5730\u5740\uff0c\u8868\u793a\u51fd\u6570\u540d\uff0c\u4e8c\u8005\u9009\u4e00\u8f93\u5165\u5373\u53ef"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getBasicblockOfFunction(\u201d0805be6b\u201d) ",(0,a.kt)("br",null)," \u627e\u51fa\u5165\u53e3\u5730\u5740\u4e3a0805be6b\u51fd\u6570\u7684\u6240\u6709\u57fa\u672c\u5757 ",(0,a.kt)("br",null)," CALL VQL.getBasicblockOfFunction(22947) ",(0,a.kt)("br",null)," \u627e\u51faid\u53f7\u4e3a22947\u51fd\u6570\u7684\u6240\u6709\u57fa\u672c\u5757")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u53d8\u91cf\u88ab\u8c03\u7528\u7684\u51fd\u6570\u548c\u53c2\u6570\u987a\u5e8f\u5b9a\u4f4d\u53d8\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getArgument"),(0,a.kt)("td",{parentName:"tr",align:null},"String callee ",(0,a.kt)("br",null)," Long index"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"callee\u4e3a\u8c03\u7528\u51fd\u6570\uff0cindex\u4e3a\u53c2\u6570\u4f4d\u7f6e\uff0c ",(0,a.kt)("br",null)," -1 \u4ee3\u8868\u8f93\u51fa\uff0c0 \u4ee3\u8868\u7b2c\u4e00\u4e2a\u53c2\u6570\u30011 \u4ee3\u8868\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3001\u4ee5\u6b64\u7c7b\u63a8"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getArgument("malloc",0) ',(0,a.kt)("br",null)," \u627e\u51fa\u4f4d\u4e8e\u51fd\u6570malloc\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f4d\u7f6e\u4e0a\u7684\u6240\u6709\u53d8\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u8282\u70b9\u6307\u5b9a\u5c42\u6570\u7684\u5b50\u8282\u70b9\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getChildren"),(0,a.kt)("td",{parentName:"tr",align:null},"Long nodeId ",(0,a.kt)("br",null)," Long stepStart ",(0,a.kt)("br",null)," Long stepStop"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5230\u8fbe\u5b50\u8282\u70b9\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"nodeId\u662f\u6307\u5b9a\u8282\u70b9\u7684id\uff0cstepStart\u4e3a\u6700\u5c0f\u8df3\u6570\u3001stepStop\u4e3a\u6700\u5927\u8df3\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getChildren(958080,1,1) ",(0,a.kt)("br",null)," \u627e\u51fa\u8ddd\u79bb\u8282\u70b9958080\u4e00\u8df3\u8ddd\u79bb\u7684\u5b50\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u5165\u53e3\u5730\u5740\u67e5\u627e\u51fd\u6570\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getFunctionByAddress"),(0,a.kt)("td",{parentName:"tr",align:null},"String entry_point"),(0,a.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"fucntion \u4e3a\u6307\u5b9a\u51fd\u6570\u7684\u5165\u53e3\u5730\u5740"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getFunctionByAddress("080f316c") ',(0,a.kt)("br",null)," \u627e\u51fa\u5165\u53e3\u5730\u5740\u4e3a 0x080f316c \u7684\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u51fd\u6570\u540d\u79f0\u67e5\u627e\u51fd\u6570\u8282\u70b9\uff0c\u652f\u6301\u6a21\u7cca\u5339\u914d"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getFunctionsByName"),(0,a.kt)("td",{parentName:"tr",align:null},"String function"),(0,a.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"fucntion \u4e3a\u6307\u5b9a\u51fd\u6570\u7684\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getFunctionsByName("zclient") ',(0,a.kt)("br",null)," \u627e\u51fa\u51fd\u6570\u540d\u4e3a zclient \u7684\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u6587\u4ef6\u7684\u6240\u6709\u51fd\u6570\uff0c\u652f\u6301\u6a21\u7cca\u5339\u914d"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getFunctionsOfFile"),(0,a.kt)("td",{parentName:"tr",align:null},"String name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"name \u4e3a\u6307\u5b9a\u6587\u4ef6\u7684\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getFunctionsOfFile("bgpd") ',(0,a.kt)("br",null)," \u627e\u51fa\u6587\u4ef6\u540d\u4e3a bgpd \u4e0b\u9762\u7684\u6240\u6709\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u53d8\u91cf\u83b7\u53d6\u5176\u6240\u5728\u7684\u8bed\u53e5\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getInfluencedCodeline"),(0,a.kt)("td",{parentName:"tr",align:null},"Long nodeId ",(0,a.kt)("br",null)," Long stepStart ",(0,a.kt)("br",null)," Long stepStop"),(0,a.kt)("td",{parentName:"tr",align:null},"code_line \u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"nodeId \u662f\u6307\u5b9a\u8282\u70b9\u7684 id\uff0cstepStart \u4e3a\u6700\u5c0f\u8df3\u6570\u3001stepStop \u4e3a\u6700\u5927\u8df3\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getInfluencedCodeline(150523, 1, 1) ",(0,a.kt)("br",null)," \u627e\u51fa\u8ddd\u79bb\u53d8\u91cf\u8282\u70b9 50523 \u6b65\u957f\u4e3a 1 \u7684 code_line")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u8282\u70b9\u6240\u5f52\u5c5eAST\u7684\u8f93\u2f0a\u53d8\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getInputsOfCodeline"),(0,a.kt)("td",{parentName:"tr",align:null},"Long nodeId"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"nodeId \u662f\u6307\u5b9a\u4ee3\u7801\u884c code_line \u7684 id"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getInputsOfCodeline(987013) ",(0,a.kt)("br",null)," \u627e\u51fa code_line 987013 \u901a\u8fc7 asts \u8f93\u5165\u7684\u76f8\u5e94\u53d8\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u8bed\u53e5\u5185\u5bb9\u6765\u83b7\u53d6code_line\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getCodelineByName"),(0,a.kt)("td",{parentName:"tr",align:null},"String name"),(0,a.kt)("td",{parentName:"tr",align:null},"code_line\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"name\u662f\u6307\u5b9a\u4ee3\u7801\u884ccode_line\u7684\u5185\u5bb9"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getCodelineByName("11: ',"*",'DAT_080f1264 = iVar1;") ',(0,a.kt)("br",null)," \u627e\u51fa\u5185\u5bb9\u4e3a 11: *DAT_080f1264 = iVar1 \u6240\u5bf9\u5e94\u7684 code_line")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u57fa\u672c\u5757\u5730\u5740\u6765\u83b7\u53d6 code_line \u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getCodelineOfBasicblock"),(0,a.kt)("td",{parentName:"tr",align:null},"String start_address ",(0,a.kt)("br",null)," String stop_address"),(0,a.kt)("td",{parentName:"tr",align:null},"code_line \u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"start_address \u662f\u8d77\u59cb\u5730\u5740\u3001stop_address \u662f\u7ec8\u6b62\u5730\u5740"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getCodelineOfBasicblock("0804e0f3", "0804e10d") ',(0,a.kt)("br",null)," \u627e\u51fa\u8d77\u59cb\u5730\u5740\u4e3a: 0x0804e0f3\uff0c\u7ec8\u6b62\u5730\u5740\u4e3a: 0x0804e10d \u7684\u57fa\u672c\u5757\u5bf9\u5e94\u7684 code_line")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u51fd\u6570\u540d\u6216\u8005\u5165\u53e3\u5730\u5740\u83b7\u53d6code_line\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getCodelineOfFunction"),(0,a.kt)("td",{parentName:"tr",align:null},"String function ",(0,a.kt)("br",null)," String entry_point"),(0,a.kt)("td",{parentName:"tr",align:null},"code_line \u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"function \u662f\u51fd\u6570\u540d\u3001entry_point \u662f\u51fd\u6570\u5165\u53e3\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getCodelineOfFunction("_sub_I_01001_0.0", null) ',(0,a.kt)("br",null)," \u627e\u51fa\u51fd\u6570\u540d\u4e3a _sub_I_01001_0.0 \u5bf9\u5e94\u7684\u6240\u6709 code_line ",(0,a.kt)("br",null),' CALL VQL.getCodelineOfFunction(null, "0804e645") ',(0,a.kt)("br",null)," \u627e\u51fa\u5165\u53e3\u5730\u5740\u4e3a 0x0804e645 \u7684\u51fd\u6570\u5bf9\u5e94\u7684\u6240\u6709 code_line")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u8bed\u53e5\u8282\u70b9\u6240\u5f52\u5c5eAST\u7684\u8f93\u51fa\u53d8\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getOutputsOfCodeline"),(0,a.kt)("td",{parentName:"tr",align:null},"Long nodeId"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"nodeId\u4e3a\u6307\u5b9a\u8bed\u53e5\u8282\u70b9\u7684id\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getOutputsOfCodeline(31683) ",(0,a.kt)("br",null)," \u627e\u51facode_line31683\u901a\u8fc7asts\u8f93\u51fa\u7684\u76f8\u5e94\u53d8\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u8282\u70b9\u6307\u5b9a\u5c42\u6570\u7684\u7236\u8282\u70b9\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getParents"),(0,a.kt)("td",{parentName:"tr",align:null},"Long nodeId ",(0,a.kt)("br",null)," Long stepStart ",(0,a.kt)("br",null)," Long stepStop"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5230\u8fbe\u7236\u8282\u70b9\u8def\u5f84"),(0,a.kt)("td",{parentName:"tr",align:null},"nodeId\u662f\u6307\u5b9a\u8282\u70b9\u7684id\uff0cstepStart\u4e3a\u6700\u5c0f\u8df3\u6570\u3001stepStop\u4e3a\u6700\u5927\u8df3\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getParents(31683, 1, 1) ",(0,a.kt)("br",null)," \u627e\u51fa\u8ddd\u79bb\u8282\u70b931683\u6b65\u957f\u4e3a1\u7684\u6240\u6709\u7236\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u6587\u4ef6\u540d\u83b7\u53d6\u6587\u4ef6\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getFileByName"),(0,a.kt)("td",{parentName:"tr",align:null},"String name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"name\u4e3a\u6307\u5b9a\u6587\u4ef6\u6587\u4ef6\u540d"),(0,a.kt)("td",{parentName:"tr",align:null},'CALL VQL.getFileByName("bgpd") ',(0,a.kt)("br",null)," \u627e\u51fa\u6587\u4ef6\u540d\u4e3abgpd\u7684\u6240\u6709\u6587\u4ef6\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u547d\u540d\u7a7a\u95f4\u83b7\u53d6\u7c7b\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getClassByNameSpace"),(0,a.kt)("td",{parentName:"tr",align:null},"String namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7c7b\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"namespace\u4e3a\u6307\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getClassByNameSpace(\u201dstd::verify\u201d) ",(0,a.kt)("br",null)," \u627e\u51fa\u547d\u540d\u7a7a\u95f4\u540d\u79f0\u4e3astd::verify\u7684\u6240\u6709\u7c7b\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u7c7b\u578b\u7684\u7c7b\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getClassByType"),(0,a.kt)("td",{parentName:"tr",align:null},"String type"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7c7b\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"type\u4e3a\u5236\u5b9a\u7684\u7c7b\u7c7b\u578b"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getClassByType(\u201dUser-defined\u201d) ",(0,a.kt)("br",null)," \u627e\u51fa\u7c7b\u7c7b\u578b\u4e3aUser-defined\u7684\u6240\u6709\u7c7b\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u540d\u79f0\u7684\u7c7b\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getClassByName"),(0,a.kt)("td",{parentName:"tr",align:null},"String name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7c7b\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"name\u4e3a\u6307\u5b9a\u7684\u7c7b\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getClassByName(\u201dencryption\u201d) ",(0,a.kt)("br",null)," \u627e\u51fa\u7c7b\u540d\u79f0\u4e3aencryption\u7684\u7c7b\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u6587\u4ef6\u4e2d\u7684\u7c7b\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getClassOfFile"),(0,a.kt)("td",{parentName:"tr",align:null},"String name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7c7b\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"name\u4e3a\u6307\u5b9a\u7684\u7c7b\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getClassOfFile(\u201dbgpd\u201d) ",(0,a.kt)("br",null)," \u627e\u51fa\u6587\u4ef6\u540d\u4e3abgpd\u4e2d\u7684\u6240\u6709\u7c7b\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u7c7b\u4e2d\u7684\u6210\u5458\u51fd\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getFunctionOfClass"),(0,a.kt)("td",{parentName:"tr",align:null},"String name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"name\u4e3a\u6307\u5b9a\u7684\u7c7b\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getFunctionOfClass(\u201dencr\u201d) ",(0,a.kt)("br",null)," \u627e\u51fa\u7c7bencryption\u4e2d\u7684\u6240\u6709\u51fd\u6570\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6307\u5b9a\u7c7b\u4e2d\u7684\u6210\u5458\u53d8\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getFileldOfClass"),(0,a.kt)("td",{parentName:"tr",align:null},"String name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"name\u4e3a\u6307\u5b9a\u7684\u7c7b\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getFileldOfClass(\u201dencryption\u201d) ",(0,a.kt)("br",null)," \u627e\u51fa\u7c7bencryption\u4e2d\u6240\u6709\u7684\u7c7b\u6210\u5458\u53d8\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u540d\u79f0\u83b7\u53d6\u64cd\u4f5c\u7b26"),(0,a.kt)("td",{parentName:"tr",align:null},"VQL.getOperatorByName"),(0,a.kt)("td",{parentName:"tr",align:null},"String name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7b26\u8282\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"name\u4e3a\u64cd\u4f5c\u7b26\u7684\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},"CALL VQL.getOperatorByName(\u201d+\u201d) ",(0,a.kt)("br",null)," \u627e\u51fa\u6240\u6709\u7684+\u64cd\u4f5c\u7b26\u53d8\u91cf")))))}g.isMDXComponent=!0}}]);