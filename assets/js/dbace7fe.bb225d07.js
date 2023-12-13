"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7359],{3905:(e,n,t)=>{t.d(n,{Zo:()=>_,kt:()=>d});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},_=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||r;return t?i.createElement(d,p(p({ref:n},_),{},{components:t})):i.createElement(d,p({ref:n},_))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<r;c++)p[c]=t[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={slug:"tiangongarticle002",title:"Microsoft Hyper-V \u865a\u62df TPM \u8bbe\u5907\u6f0f\u6d1e\u5206\u6790",authors:["hongzhenhao"],tags:["Microsoft","Hyper-V","TPM"]},p="Microsoft Hyper-V \u865a\u62df TPM \u8bbe\u5907\u6f0f\u6d1e\u5206\u6790",l={permalink:"/blog/tiangongarticle002",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-10-25-microsoft-hyper-vtpm/index.md",source:"@site/blog/2023-10-25-microsoft-hyper-vtpm/index.md",title:"Microsoft Hyper-V \u865a\u62df TPM \u8bbe\u5907\u6f0f\u6d1e\u5206\u6790",description:"\u4e00\u3001\u6f0f\u6d1e\u63cf\u8ff0",date:"2023-10-25T00:00:00.000Z",formattedDate:"2023\u5e7410\u670825\u65e5",tags:[{label:"Microsoft",permalink:"/blog/tags/microsoft"},{label:"Hyper-V",permalink:"/blog/tags/hyper-v"},{label:"TPM",permalink:"/blog/tags/tpm"}],readingTime:6.785,hasTruncateMarker:!0,authors:[{name:"HongZhenhao",title:"\u5fae\u8f6f MSRC \u5168\u7403\u6700\u5177\u4ef7\u503c\u5b89\u5168\u7cbe\u82f1\u699c\u4e0a\u699c\u8005\u3001BlackHat USA \u4e16\u754c\u9ed1\u5e3d\u5927\u4f1a Speaker",imageURL:"https://tiangonglab.github.io/img/authors/hongzhenhao.jpg",key:"hongzhenhao"}],frontMatter:{slug:"tiangongarticle002",title:"Microsoft Hyper-V \u865a\u62df TPM \u8bbe\u5907\u6f0f\u6d1e\u5206\u6790",authors:["hongzhenhao"],tags:["Microsoft","Hyper-V","TPM"]},prevItem:{title:"Windows\u5185\u6838\u7ade\u6001\u6761\u4ef6\u6f0f\u6d1e\u7814\u7a76",permalink:"/blog/tiangongarticle003"},nextItem:{title:"CVE-2023-0179 Linux\u5185\u6838\u63d0\u6743",permalink:"/blog/tiangongarticle001"}},o={authorsImageUrls:[void 0]},c=[{value:"\u4e00\u3001\u6f0f\u6d1e\u63cf\u8ff0",id:"\u4e00\u6f0f\u6d1e\u63cf\u8ff0",level:2},{value:"\u4e8c\u3001\u80cc\u666f\u4ecb\u7ecd",id:"\u4e8c\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u4e09\u3001\u73af\u5883\u642d\u5efa",id:"\u4e09\u73af\u5883\u642d\u5efa",level:2},{value:"\u56db\u3001\u6f0f\u6d1e\u5206\u6790CVE-2023-36717",id:"\u56db\u6f0f\u6d1e\u5206\u6790cve-2023-36717",level:2},{value:"\u4e94\u3001\u6f0f\u6d1e\u5206\u6790CVE-2023-36718",id:"\u4e94\u6f0f\u6d1e\u5206\u6790cve-2023-36718",level:2},{value:"\u516d\u3001\u603b\u7ed3",id:"\u516d\u603b\u7ed3",level:2}],_={toc:c},u="wrapper";function s(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,i.Z)({},_,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u6f0f\u6d1e\u63cf\u8ff0"},"\u4e00\u3001\u6f0f\u6d1e\u63cf\u8ff0"),(0,a.kt)("p",null,"2023\u5e7410\u6708\u5fae\u8f6f\u53d1\u5e03\u7684\u5b89\u5168\u66f4\u65b0\u4e2d\uff0c\u4fee\u590d\u4e862\u4e2a\u7531\u7b14\u8005\u62a5\u9001\u7684Hyper-V\u865a\u62dfTPM\u8bbe\u5907\u6f0f\u6d1e\u3002\u672c\u6b21\u4fee\u590d\u7684Hyper-V\u865a\u62dfTPM\u7ec4\u4ef6\u7684\u6f0f\u6d1e\u53ef\u4ee5\u901a\u8fc7\u8fdc\u7a0b\u8bbf\u95ee\u865a\u62df\u673a\u7684\u65b9\u5f0f\u89e6\u53d1\u6f0f\u6d1e\uff0c\u9020\u6210\u5bbf\u4e3b\u673a\u62d2\u7edd\u670d\u52a1\u6216\u8005\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\uff0c\u5bf9\u5bbf\u4e3b\u673a\u4e0a\u7684\u5176\u4ed6\u865a\u62df\u673a\u6216\u4e1a\u52a1\u9020\u6210\u635f\u5931\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u80cc\u666f\u4ecb\u7ecd"},"\u4e8c\u3001\u80cc\u666f\u4ecb\u7ecd"),(0,a.kt)("p",null,"Hyper-V\u7684\u865a\u62dfTPM\u7ec4\u4ef6\u65e8\u5728\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u6a21\u62df\u7684TPM\u8bbe\u5907\uff0c\u865a\u62dfTPM\u8bbe\u5907\u53ef\u4ee5\u4e3a\u4f9d\u8d56TPM\u8bbe\u5907\u7684\u670d\u52a1\u6216\u8005\u64cd\u4f5c\u7cfb\u7edf\uff08\u4f8b\u5982Windows 11\uff09\u63d0\u4f9b\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u6f0f\u6d1e\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"vmsp.exe"),"\u8fdb\u7a0b\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM.dll"),"\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u672c\u6b21\u4ecb\u7ecd\u7684\u4e24\u4e2a\u865a\u62dfTPM\u7ec4\u4ef6\u7684\u6f0f\u6d1e\u5c31\u662f\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM.dll"),"\u8fd9\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"vmsp.exe"),"\u8fdb\u7a0b\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"vmwp.exe"),"\u8fdb\u7a0b\u76f8\u4f3c\uff0c\u90fd\u662f\u4e00\u4e2a\u865a\u62df\u673a\u5b9e\u4f8b\u542f\u52a8\u4e00\u4e2a\u8fdb\u7a0b\u3002\u4f46\u662f\u4e0d\u540c\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"vmsp.exe"),"\u8fdb\u7a0b\u662f\u9694\u79bb\u7528\u6237\u6a21\u5f0f(IUM)\u8fdb\u7a0b\uff0c\u4e5f\u5c31\u662f\u8bf4",(0,a.kt)("inlineCode",{parentName:"p"},"vmsp.exe"),"\u8fdb\u7a0b\u65e0\u6cd5\u5728windows\u7528\u6237\u6001\u4e0b\u88ab\u6b63\u5e38attach\u3002\u6240\u4ee5\u5728\u8c03\u8bd5\u4e0a\uff0c\u9488\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"vmsp.exe"),"\u8fdb\u7a0b\u7684\u8c03\u8bd5\u5c31\u9700\u8981\u989d\u5916\u7684\u201c\u624b\u811a\u201d\uff0c\u8fd9\u91cc\u6211\u4eec\u5f15\u7528Quarkslab\u535a\u5ba2\u7684\u6587\u7ae0\uff08",(0,a.kt)("a",{parentName:"p",href:"https://blog.quarkslab.com/debugging-windows-isolated-user-mode-ium-processes.html%EF%BC%89%EF%BC%8C%E6%84%9F%E5%85%B4%E8%B6%A3%E7%9A%84%E8%AF%BB%E8%80%85%E5%8F%AF%E4%BB%A5%E5%8E%BB%E4%BA%86%E8%A7%A3%E5%B9%B6%E5%AE%9E%E8%B7%B5%E4%B8%8B%EF%BC%8C%E8%BF%99%E9%87%8C%E4%B8%8D%E5%81%9A%E8%AE%A8%E8%AE%BA%E3%80%82"},"https://blog.quarkslab.com/debugging-windows-isolated-user-mode-ium-processes.html\uff09\uff0c\u611f\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u53bb\u4e86\u89e3\u5e76\u5b9e\u8df5\u4e0b\uff0c\u8fd9\u91cc\u4e0d\u505a\u8ba8\u8bba\u3002")),(0,a.kt)("h2",{id:"\u4e09\u73af\u5883\u642d\u5efa"},"\u4e09\u3001\u73af\u5883\u642d\u5efa"),(0,a.kt)("p",null,"\u865a\u62dfTPM\u7ec4\u4ef6\u6f0f\u6d1e\u7684\u89e6\u53d1\u9700\u8981\u5728Hyper-V\u865a\u62df\u673a\u8bbe\u7f6e\u4e2d\u7684\u201c\u5b89\u5168\u201d\u8bbe\u7f6e\u4e2d\uff0c\u52fe\u9009\u201c\u542f\u7528\u53d7\u4fe1\u4efb\u7684\u5e73\u53f0\u6a21\u5757\u201d\u3002"),(0,a.kt)("p",null," ",(0,a.kt)("img",{src:t(3220).Z,width:"1214",height:"869"})),(0,a.kt)("h2",{id:"\u56db\u6f0f\u6d1e\u5206\u6790cve-2023-36717"},"\u56db\u3001\u6f0f\u6d1e\u5206\u6790CVE-2023-36717"),(0,a.kt)("p",null,"\u8be5\u6f0f\u6d1e\u662f\u4e00\u4e2a\u62d2\u7edd\u670d\u52a1\u6f0f\u6d1e\uff0c\u5f53\u8fd9\u4e2a\u6f0f\u6d1e\u88ab\u89e6\u53d1\u65f6\u4f1a\u5bfc\u81f4\u5bbf\u4e3b\u673a",(0,a.kt)("inlineCode",{parentName:"p"},"vmsp.exe"),"\u8fdb\u7a0b\u8fdb\u5165\u6b7b\u5faa\u73af\uff0c\u5e76\u5360\u7528\u5927\u91cfCPU\u8ba1\u7b97\u8d44\u6e90\u3002\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"vmsp.exe"),"\u8fdb\u7a0b\u662fIUM\u8fdb\u7a0b\uff0c\u6240\u4ee5\u5f53\u6f0f\u6d1e\u88ab\u89e6\u53d1\u540e\uff0c\u7ba1\u7406\u5458\u65e0\u6cd5\u4ece\u7528\u6237\u6001\u7ed3\u675f\u6389\u8fd9\u4e2a\u8fdb\u7a0b\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u9664\u975e\u91cd\u542f\u5bbf\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u5426\u5219\u8ba1\u7b97\u8d44\u6e90\u4e00\u76f4\u65e0\u6cd5\u88ab\u91ca\u653e\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6f0f\u6d1e\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!TPM2_ECDH_KeyGen"),"\u51fd\u6570\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"__int64 __fastcall TPM2_ECDH_KeyGen(unsigned int *a1, __int64 a2)\n{\n  OBJECT *v3; // rax\n  OBJECT *v4; // rsi\n  unsigned int v5; // eax\n  unsigned int v6; // ebx\n  unsigned __int16 v8[28]; // [rsp+20h] [rbp-58h] BYREF\n\n  v3 = ObjectGet(*a1);\n  v4 = v3;\n  if ( v3->public_type != 0x23\n    || (v3->public_objectAttributes & 0x10000) != 0\n    || (v3->public_objectAttributes & 0x20000) == 0 )\n  {\n    return 0x19Ci64;\n  }\n  while ( !(unsigned __int16)cpri__GetEphemeralEcc(\n                               (unsigned __int16 *)(a2 + 104),\n                               v8,\n                               v4->public_parameters_Detail_keyBits) )\n  {\n    *(_WORD *)(a2 + 0x66) = TPMS_ECC_POINT_Marshal((_BYTE *)(a2 + 104), 0i64, 0i64);\n    v5 = CryptEccPointMultiply(\n           (_WORD *)(a2 + 2),\n           v4->public_parameters_Detail_keyBits,\n           v8,\n           (__int64)&v4->public_unique_ecc_x);\n    v6 = v5;\n    if ( v5 == 0xA7 )\n      break;\n    if ( v5 != 0x154 )\n      goto LABEL_9;\n  }\n  v6 = 156;\nLABEL_9:\n  if ( !v6 )\n    *(_WORD *)a2 = TPMS_ECC_POINT_Marshal((_BYTE *)(a2 + 2), 0i64, 0i64);\n  return v6;\n}\n")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!TPM2_ECDH_KeyGen"),"\u51fd\u6570\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"v4->public_unique_ecc_x"),"\u6210\u5458\u53ef\u4ee5\u4eceGuest\u4e2d\u88ab\u63a7\u5236\uff0c\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"v4->public_unique_ecc_x"),"\u6210\u5458\u662f\u4e00\u4e2aNULL ECC Point\u7684\u60c5\u51b5\u4e0b\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"TPM2B_ECC_PARAMETER.size"),"\u4e3a0x00,\u5e76\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"TPM2B_ECC_PARAMETER.buffer"),"\u6570\u7ec4\u88ab0\u586b\u5145\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!CryptEccPointMultiply"),"\u4f1a\u4e00\u76f4\u8fd4\u56de\u9519\u8bef\u78010x154\uff0c\u5e76\u4e0d\u505c\u7684\u5faa\u73af\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!CryptEccPointMultiply"),"\u51fd\u6570\uff0c\u6700\u7ec8\u9020\u6210vmsp.exe\u8fdb\u7a0b\u6b7b\u5faa\u73af\uff0c\u5bfc\u81f4\u5bbf\u4e3b\u673a\u62d2\u7edd\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u4e94\u6f0f\u6d1e\u5206\u6790cve-2023-36718"},"\u4e94\u3001\u6f0f\u6d1e\u5206\u6790CVE-2023-36718"),(0,a.kt)("p",null,"\u8be5\u6f0f\u6d1e\u662f\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e\uff0c\u5f53\u8fd9\u4e2a\u6f0f\u6d1e\u88ab\u89e6\u53d1\u65f6\u4f1a\u4f7f\u7528\u672a\u521d\u59cb\u5316\u7684\u6808\u7a7a\u95f4\u53d8\u91cf\u3002\u8fd9\u4e2a\u6f0f\u6d1e\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!CryptSecretEncrypt"),"\u51fd\u6570\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"__int64 __fastcall CryptSecretEncrypt(unsigned int a1, _BYTE *a2_plabel, __int64 a3, __int16 *a4)\n{\n  unsigned int v7; // ebx\n  OBJECT *v8_obj; // rax\n  OBJECT *v9_obj; // rdi\n  unsigned __int16 DigestSize; // ax\n  unsigned __int16 public_parameters_Detail_keyBits; // cx\n  __int16 public_nameAlg; // cx\n  void *v14; // [rsp+40h] [rbp-C0h] BYREF\n  __int16 v15[28]; // [rsp+48h] [rbp-B8h] BYREF\n  __int16 v16[56]; // [rsp+80h] [rbp-80h] BYREF\n  __int16 v17_Z_eccpointaftermul[56]; // [rsp+F0h] [rbp-10h] BYREF\n\n  v7 = 0;\n  v8_obj = ObjectGet(a1);\n  v9_obj = v8_obj;\n\n......\n\n  DigestSize = cpri__GetDigestSize(v8_obj->public_nameAlg);\n  *(_WORD *)a3 = DigestSize;\n  \n......\n\n\n  if ( v9_obj->public_type == 1 )\n  {\n \n......\n\n\n  }\n  else\n  {\n    if ( v9_obj->public_type != 0x23 )\n    {\n\n......\n\n    }\n    public_parameters_Detail_keyBits = v9_obj->public_parameters_Detail_keyBits;\n    v14 = a4 + 1;\n    if ( (unsigned int)cpri__EccIsPointOnCurve(\n                         public_parameters_Detail_keyBits,\n                         (__int64)&v9_obj->public_unique_ecc_x) )\n    {\n      cpri__GetEphemeralEcc((unsigned __int16 *)v16, (unsigned __int16 *)v15, v9_obj->public_parameters_Detail_keyBits);\n      *a4 = TPMS_ECC_POINT_Marshal(v16, &v14, 0i64);\n      if ( (unsigned int)CryptEccPointMultiply(\n                           v17_Z_eccpointaftermul,\n                           v9_obj->public_parameters_Detail_keyBits,\n                           (unsigned __int16 *)v15,\n                           (__int64)&v9_obj->public_unique_ecc_x) )\n      {\n        v7 = 0x9C;\n      }\n      else if ( BitIsSet((unsigned __int16)v9_obj->public_nameAlg, (__int64)&g_toTest, 9u) )\n      {\n        public_nameAlg = v9_obj->public_nameAlg;\n        if ( public_nameAlg != 0x10 )\n          TestAlgorithm(public_nameAlg, 0i64);\n      }\n      cpri__KDFe(\n        v9_obj->public_nameAlg,\n        (unsigned __int16 *)v17_Z_eccpointaftermul,\n        a2_plabel,\n        (unsigned __int16 *)v16,\n        (unsigned __int16 *)&v9_obj->public_unique_ecc_x,\n        8 * *(unsigned __int16 *)a3,\n        (_BYTE *)(a3 + 2));\n    }\n    else\n    {\n      return 0x9C;\n    }\n  }\n  return v7;\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"v17_Z_eccpointaftermul"),"\u662f\u4e00\u4e2a\u6808\u4e0a\u7684\u6570\u7ec4\uff08\u4e5f\u53ef\u80fd\u662f\u4e2a\u7ed3\u6784\u4f53\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"v17_Z_eccpointaftermul"),"\u7684\u5927\u5c0f\u662f0x70\u5b57\u8282\u3002\u4ee3\u7801\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"v9_obj->public_unique_ecc_x"),"\u6210\u5458\u53ef\u4ee5\u4eceGuest\u4e2d\u88ab\u63a7\u5236\uff0c\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"v9_obj->public_unique_ecc_x"),"\u6210\u5458\u662f\u4e00\u4e2aNULL ECC Point\u7684\u60c5\u51b5\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"\uff08TPM2B_ECC_PARAMETER.size"),"\u4e3a0x00,\u5e76\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"TPM2B_ECC_PARAMETER.buffer"),"\u6570\u7ec4\u88ab0\u586b\u5145\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!CryptEccPointMultiply"),"\u51fd\u6570\u4f1a\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u7801\u5e76\u5c06v7\u8bbe\u7f6e\u4e3a0x9C\u3002"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5b8cv7\u7684\u503c\u4e4b\u540e\uff0c\u7a0b\u5e8f\u7ee7\u7eed\u8d70\u5230\u8981\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!cpri__KDFe"),"\u51fd\u6570\u8fd9\u91cc\uff0c\u6b64\u65f6",(0,a.kt)("inlineCode",{parentName:"p"},"v17_Z_eccpointaftermul"),"\u662f\u4e00\u4e2a\u6808\u4e0a\u672a\u521d\u59cb\u5316\u7684\u6570\u7ec4\uff0c\u5e76\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!cpri__KDFe"),"\u51fd\u6570\u7684\u7b2c\u4e8c\u53c2\u6570\u8fdb\u5165\u5230\u4e4b\u540e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!cpri__KDFe"),"\u51fd\u6570\u7684\u4ee3\u7801\u6d41\u7a0b\u91cc\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"TpmEngUM!cpri__KDFe"),"\u51fd\u6570\u540e\u7eed\u7684\u4ee3\u7801\u6d41\u7a0b\u4e2d\uff0c\u4f7f\u7528\u4e86\u672a\u521d\u59cb\u5316\u7684\u6808\u4e0a\u7684\u6570\u636e\uff0c\u5bfc\u81f4\u8d8a\u754c\u8bfb\u6216\u8005\u5185\u5b58\u635f\u574f\u3002\u4e0b\u9762\u662f\u5d29\u6e83\u65f6\u7684\u73b0\u573a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"(4afc.2f4c): Access violation - code c0000005 (first chance)\nFirst chance exceptions are reported before any exception handling.\nThis exception may be expected and handled.\nTpmEngUM!SymCryptSha512AppendBlocks_ull+0xa7:\n00007ffb`38d9a42f 4d8b41f0        mov     r8,qword ptr [r9-10h] ds:00000000`00153ffe=????????????????\n0:000> k\n # Child-SP          RetAddr           Call Site\n00 00000000`0014ec80 00007ffb`38d99e01 TpmEngUM!SymCryptSha512AppendBlocks_ull+0xa7\n01 00000000`0014eed0 00007ffb`38d99e59 TpmEngUM!SymCryptSha512Append+0x95\n02 00000000`0014ef10 00007ffb`38d87724 TpmEngUM!SymCryptSha384Append+0x9\n03 00000000`0014ef40 00007ffb`38d66cd7 TpmEngUM!cpri__KDFe+0x1a4\n04 00000000`0014f110 00007ffb`38d7c7cd TpmEngUM!CryptSecretEncrypt+0x143\n05 00000000`0014f2c0 00007ffb`38d70a54 TpmEngUM!TPM2_MakeCredential+0x7d\n06 00000000`0014f340 00007ffb`38d61c54 TpmEngUM!CommandDispatcher+0xa78\n07 00000000`0014f420 00007ffb`38d61313 TpmEngUM!ExecuteCommand+0x460\n08 00000000`0014f530 00000001`400c3862 TpmEngUM!VTpmExecuteCommand+0x73\n")),(0,a.kt)("h2",{id:"\u516d\u603b\u7ed3"},"\u516d\u3001\u603b\u7ed3"),(0,a.kt)("p",null,"\u501f\u52a9\u6b64\u6587\u7b80\u5355\u7684\u4ecb\u7ecd\u4e86\u4e0bHyper-V\u865a\u62dfTPM\u7ec4\u4ef6\u7684\u4e24\u4e2a\u6f0f\u6d1e\uff0c\u53ef\u4ee5\u53d1\u73b0\u8fd9\u4e24\u4e2a\u6f0f\u6d1e\u90fd\u662fHyper-V\u865a\u62dfTPM\u7ec4\u4ef6\u5728\u5904\u7406Guest\u6570\u636e\u65f6\u53d1\u751f\u4e86\u9519\u8bef\u5bfc\u81f4\u5bbf\u4e3b\u673a\u8fdb\u7a0b\u53d7\u5230\u4e86\u5f71\u54cd\u3002\u901a\u8fc7\u672c\u6587\u5e2e\u52a9\u8bfb\u8005\u66f4\u597d\u5730\u7406\u89e3\u865a\u62dfTPM\u7ec4\u4ef6\u6f0f\u6d1e\u7684\u6210\u56e0\uff0c\u4ee5\u53ca\u5e0c\u671b\u80fd\u591f\u5728TPM\u7ec4\u4ef6\u7684\u6f0f\u6d1e\u6316\u6398\u5de5\u4f5c\u4e2d\u5e2e\u5230\u5927\u5bb6\u3002"))}s.isMDXComponent=!0},3220:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/0c7d620e-97ff-45cc-a12f-b4c66a317e2a-73d520780556ca0a4fe552ce77213993.png"}}]);