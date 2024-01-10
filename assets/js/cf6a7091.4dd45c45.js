"use strict";(self.webpackChunkpoc_docs=self.webpackChunkpoc_docs||[]).push([[1660],{71:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=s(5893),i=s(1151);const l={slug:"tiangongarticle013",title:"ESXi SLP\u6f0f\u6d1e\u590d\u73b0",authors:"zhenghao02",tags:["VMware","ESXi","SLP"]},t="ESXi SLP \u6f0f\u6d1e\u590d\u73b0",c={permalink:"/blog/tiangongarticle013",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2024-01-03-esxi-slp/index.md",source:"@site/blog/2024-01-03-esxi-slp/index.md",title:"ESXi SLP\u6f0f\u6d1e\u590d\u73b0",description:"\u4e00\u3001\u524d\u8a00",date:"2024-01-03T00:00:00.000Z",formattedDate:"2024\u5e741\u67083\u65e5",tags:[{label:"VMware",permalink:"/blog/tags/v-mware"},{label:"ESXi",permalink:"/blog/tags/es-xi"},{label:"SLP",permalink:"/blog/tags/slp"}],readingTime:12.385,hasTruncateMarker:!0,authors:[{name:"S1duku",title:"GeekCon2023 \u53c2\u8d5b\u9009\u624b",imageURL:"https://tiangonglab.github.io/img/authors/S1duku.jpg",key:"zhenghao02"}],frontMatter:{slug:"tiangongarticle013",title:"ESXi SLP\u6f0f\u6d1e\u590d\u73b0",authors:"zhenghao02",tags:["VMware","ESXi","SLP"]},unlisted:!1,prevItem:{title:"\u7834\u58f3\u5206\u6790\uff1aLinksys\u8bbe\u5907\u591a\u4e2a0-day\u6f0f\u6d1e",permalink:"/blog/tiangongarticle014"},nextItem:{title:"\u4ece\u4f20\u7edf\u5230 AI \u63a2\u8ba8 Webshell \u68c0\u6d4b\u653b\u9632\u5bf9\u6297",permalink:"/blog/tiangongarticle012"}},d={authorsImageUrls:[void 0]},a=[{value:"\u4e00\u3001\u524d\u8a00",id:"\u4e00\u524d\u8a00",level:2},{value:"\u4e8c\u3001SLP\u5386\u53f2\u6f0f\u6d1e",id:"\u4e8cslp\u5386\u53f2\u6f0f\u6d1e",level:2},{value:"\u4e09\u3001CVE-2021-21974\u6f0f\u6d1e\u5229\u7528",id:"\u4e09cve-2021-21974\u6f0f\u6d1e\u5229\u7528",level:2},{value:"3.1 \u6f0f\u6d1e\u5206\u6790",id:"31-\u6f0f\u6d1e\u5206\u6790",level:3},{value:"3.2 \u60b2\u5267\u7684\u8bde\u751f",id:"32-\u60b2\u5267\u7684\u8bde\u751f",level:3},{value:"\u56db\u3001CVE-2019-5544\u6f0f\u6d1e\u5229\u7528",id:"\u56dbcve-2019-5544\u6f0f\u6d1e\u5229\u7528",level:2},{value:"4.1 \u6f0f\u6d1e\u5206\u6790",id:"41-\u6f0f\u6d1e\u5206\u6790",level:3},{value:"4.2 \u6f0f\u6d1e\u5229\u7528",id:"42-\u6f0f\u6d1e\u5229\u7528",level:3},{value:"\u4e94\u3001\u603b\u7ed3",id:"\u4e94\u603b\u7ed3",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4e00\u524d\u8a00",children:"\u4e00\u3001\u524d\u8a00"}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4e8eSLP\u51e0\u4e2a\u6f0f\u6d1e\u7684\u6210\u56e0\u4e0e\u5229\u7528\uff0c\u7f51\u4e0a\u5df2\u7ecf\u6709\u5f6d\u535a\u58eb\u975e\u5e38\u7cbe\u5f69\u4e14\u8be6\u7ec6\u7684\u5206\u4eab\uff08",(0,r.jsx)(n.a,{href:"https://github.com/knownsec/KCon/blob/master/2023/vSphere%20%E6%94%BB%E9%98%B2%E6%8A%80%E6%B3%95%E5%88%86%E4%BA%AB.pdf",children:"vSphere \u653b\u9632\u6280\u6cd5\u5206\u4eab"}),"\uff09\uff0c\u8fd9\u91cc\u4e0d\u4f1a\u505a\u8fc7\u591a\u7684\u8d58\u8ff0\uff0c\u5199\u8fd9\u4e2a\u7684\u610f\u4e49\u53ea\u662f\u8bb0\u5f55\u4e00\u4e0b\u9488\u5bf9\u7279\u5b9a\u4f4e\u7248\u672cESXi\u573a\u666f\u4e0b32\u4f4dSLP\u7684\u5229\u7528\u5fc3\u8def\u3002\u7f51\u4e0a\u7684\u4e00\u4e9b\u516c\u5f00\u5229\u7528\uff0c\u5728\u4f4e\u7248\u672c\u60c5\u51b5\u4e0b\u7686\u65e0\u6cd5\u6210\u529f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5b89\u5168\u7814\u7a76\u4eba\u5458\u5728\u5bf9\u67d0\u4e2a\u76ee\u6807\u8fdb\u884c\u7814\u7a76\u65f6\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230\u4e00\u4e2a\u573a\u666f\uff0c\u7814\u7a76\u4eba\u5458\u5728\u4e00\u4e2a\u6b63\u5728\u5f00\u53d1\u7684\u529f\u80fd\u4e2d\u53d1\u73b0\u6f0f\u6d1e\uff0c\u4f46\u56e0\u6b64\u529f\u80fd\u672a\u5b8c\u5584\uff0c\u65e0\u6cd5\u8fdb\u4e00\u6b65\u5229\u7528\u7684\u9057\u61be\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7b14\u8005\u9047\u5230\u7684\u6b63\u662f\u7c7b\u4f3c\u4e8e\u6b64\u7c7b\u573a\u666f\uff0c\u4e0d\u8fc7\u4e0d\u662f\u6b63\u5728\u5f00\u53d1\u7684\u529f\u80fd\u573a\u666f\uff0c\u800c\u662f\u4e00\u4e2a\u6f0f\u6d1e\u7684\u89e6\u53d1\u8def\u5f84\u4e0a\u5b58\u5728\u53e6\u4e00\u4e2a\u6f0f\u6d1e\uff0c\u4e24\u4e2a\u6f0f\u6d1e\u7684\u76f8\u4e92\u5f71\u54cd\u4e0b\uff0c\u5bfc\u81f4\u5229\u7528\u65e0\u6cd5\u5b8c\u6210\u7684\u60b2\u4f24\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e8cslp\u5386\u53f2\u6f0f\u6d1e",children:"\u4e8c\u3001SLP\u5386\u53f2\u6f0f\u6d1e"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662fSLP\u7684\u5386\u5e74\u6f0f\u6d1e"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"CVE\u7f16\u53f7"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u6f0f\u6d1e\u7c7b\u578b"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CVE-2019-5544"}),(0,r.jsx)(n.td,{children:"\u5806\u6ea2\u51fa"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CVE-2020-3992"}),(0,r.jsx)(n.td,{children:"UAF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CVE-2021-21974"}),(0,r.jsx)(n.td,{children:"\u5806\u6ea2\u51fa"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CVE-2022-31699"}),(0,r.jsx)(n.td,{children:"\u5806\u6ea2\u51fa"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e09cve-2021-21974\u6f0f\u6d1e\u5229\u7528",children:"\u4e09\u3001CVE-2021-21974\u6f0f\u6d1e\u5229\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u7b14\u8005\u6700\u521d\u9009\u62e9\u7684\u662fCVE-2021-21974\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u6f0f\u6d1e\u5b58\u5728\u4e8eSLP\u7684\u201c\u76ee\u5f55\u4ee3\u7406\u901a\u544a\u201d\uff0c\u76ee\u5f55\u4ee3\u7406 (DA) \u662f\u53ef\u9009\u7684 SLP \u4ee3\u7406\uff0c\u7528\u4e8e\u5b58\u50a8\u548c\u7ef4\u62a4\u670d\u52a1\u4ee3\u7406 (SA) \u53d1\u9001\u7684\u670d\u52a1\u5e7f\u544a\u7684\u7f13\u5b58\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(7120).Z+"",width:"706",height:"438"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"SLPParseSrvUrl"}),"\u51fd\u6570\u4e2d\uff0c\u4f1a\u89e3\u6790\u201c\u76ee\u5f55\u4ee3\u7406\u901a\u544a\u201d\u4e2d\u7684URL\u5b57\u6bb5\uff0c\u5982\u4e0b\u9762\u4ee3\u7801\u6240\u793a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'/* allocate space for structure + srvurl + longest net family tag */\n   *parsedurl = (SLPParsedSrvUrl *)xmalloc(sizeof(SLPParsedSrvUrl) \n         + SLP_NF_MAX_SIZE    /* long enough for longest net family */\n         + srvurllen + 1);    /* +1 for null-terminator */\n   if (*parsedurl == 0)\n      return ENOMEM;\n\n   /* point to family tag buffer, copy url to buffer space */\n   (*parsedurl)->family = (char *)*parsedurl + sizeof(SLPParsedSrvUrl);\n   slider1 = slider2 = (*parsedurl)->family + SLP_NF_MAX_SIZE;\n   memcpy(slider1, srvurl, srvurllen);\n\n   /* find end and terminate url copy */\n   endptr = slider1 + srvurllen;\n   *endptr = 0;\n\n   /* parse out the service type */\n   (*parsedurl)->srvtype = slider1;\n   slider2 = strstr(slider1, "://");\n   if (slider2 == 0)\n   {\n      xfree(*parsedurl);\n      *parsedurl = 0;\n      return EINVAL;       /* ill-formatted URL - missing "://" */\n   }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u95ee\u9898\u51fa\u73b0\u5728 ",(0,r.jsx)(n.code,{children:'slider2 = strstr(slider1, "://")'})]}),"\n",(0,r.jsx)(n.h3,{id:"31-\u6f0f\u6d1e\u5206\u6790",children:"3.1 \u6f0f\u6d1e\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u5206\u6790\u8fd9\u4e2a\u95ee\u9898\uff0c\u5148\u4ecewireshark\u7684\u6293\u5305\u770b\u8d77\uff0c\u4e0b\u56fe\u662f\u53d1\u751f\u201c\u76ee\u5f55\u4ee3\u7406\u901a\u544a\u201d\u65f6\u6355\u83b7\u7684\u6570\u636e\u5305"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(5931).Z+"",width:"1897",height:"295"})}),"\n",(0,r.jsxs)(n.p,{children:["\u91cd\u70b9\u5173\u6ce8",(0,r.jsx)(n.code,{children:"Scope List Length"}),"\u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u7684\u5927\u5c0f\u88ab\u5b9a\u4e49\u4e3auint16\uff0c\u4e14\u7d27\u8ddf\u5728URL\u5b57\u6bb5\u540e\u9762\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5e26\u7740\u8fd9\u4e9b\u77e5\u8bc6\uff0c\u6765\u5206\u6790",(0,r.jsx)(n.code,{children:'slider2 = strstr(slider1, "://")'}),"\u7684\u95ee\u9898\u6240\u5728\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:'slider2 = strstr(slider1, "://")'}),"\u7684\u672c\u610f\u662f\u89e3\u6790URL\u5b57\u6bb5\uff0c\u83b7\u53d6",(0,r.jsx)(n.code,{children:"://"}),"\u540e\u9762\u7684\u5185\u5bb9\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["URL\u7684\u6b63\u5e38\u6784\u9020\u793a\u4f8b\uff1a",(0,r.jsx)(n.code,{children:"service:daytime://www.mtjones.com"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u65f6\u5047\u8bbe\u4e00\u4e2a\u60c5\u51b5\uff0c\u5982\u679c\u53d1\u5305\u65f6URL\u5b57\u6bb5\u4e0d\u5e26\u6709",(0,r.jsx)(n.code,{children:"://"}),"\uff0c\u4e14",(0,r.jsx)(n.code,{children:"Scope List Length"}),"\u5b57\u6bb5\u7684\u503c\u5c0f\u4e8e0x100\u3002",(0,r.jsx)(n.code,{children:'slider2 = strstr(slider1, "://")'}),"\u904d\u5386\u5b8cURL\u540e\u9047\u5230",(0,r.jsx)(n.code,{children:"Scope List Length"}),"\u7684\\x00\uff0c\u5c06\\x00\u89c6\u4e3aURL\u5b57\u6bb5\u7684\u7ec8\u6b62\u7b26\uff0c",(0,r.jsx)(n.code,{children:"strstr"}),"\u51fd\u6570\u7ed3\u675f\uff0c\u672a\u627e\u5230\u76ee\u6807\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u7a7a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c",(0,r.jsx)(n.code,{children:"Scope List Length"}),"\u5b57\u6bb5\u7684\u503c\u5927\u4e8e0x100\uff0c",(0,r.jsx)(n.code,{children:"strstr"}),"\u51fd\u6570\u5c31\u4f1a\u641c\u5bfb\u5230",(0,r.jsx)(n.code,{children:"Scope List Length"}),"\u5b57\u6bb5\u751a\u81f3",(0,r.jsx)(n.code,{children:"Scope List"}),"\u5b57\u6bb5\uff0c\u5728\u7bad\u5934\u6240\u6307\u7684\u5730\u65b9\u4ea7\u751f\u8d8a\u754c\u5199"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'  v4 = calloc(1u, srvurllen + 29);\n  result = 12;\n  if ( !v4 )\n    return result;\n  v5 = strstr(srvurl, ":/");\n  v21 = v5;\n  if ( !v5 )\n  {\n    free(v4);\n    return 22;\n  }\n  v6 = &srvurl[srvurllen];\n  haystack = (char *)(v5 - srvurl);\n  memcpy((char *)v4 + 21, srvurl, v5 - srvurl);  <---------\n'})}),"\n",(0,r.jsx)(n.h3,{id:"32-\u60b2\u5267\u7684\u8bde\u751f",children:"3.2 \u60b2\u5267\u7684\u8bde\u751f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8d70\u5b8c\u6709\u6f0f\u6d1e\u7684",(0,r.jsx)(n.code,{children:"SLPParseSrvUrl"}),"\u51fd\u6570\u540e\uff0c\u7d27\u8ddf\u7740\u7684\u662f\u4e0b\u9762\u4ee3\u7801\u6240\u793a\u7684",(0,r.jsx)(n.code,{children:"SLPNetResolveHostToAddr"}),'\uff0c\u8be5\u51fd\u6570\u5927\u610f\u662f\u5c06"',(0,r.jsx)(n.a,{href:"http://www.test.com",children:"www.test.com"}),'"\u4e4b\u7c7b\u7684\u8f6c\u4e3aIP\uff0c\u8fd9\u4e2aHost\u4ece\u4e0a\u8ff0\u7684',(0,r.jsx)(n.code,{children:"URL"}),"\u5b57\u6bb5\u4e2d\u83b7\u53d6"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"if ( SLPParseSrvUrl(a1[43], (const char *)a1[44], &ptr) )\n    goto LABEL_3;\n  if ( SLPNetResolveHostToAddr(*((_DWORD *)ptr + 1), v14) )\n  {\n    free(ptr);\n  }\n  else\n  {\n    ......\n  }\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b63\u5e38URL\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"\u793a\u4f8b\uff1a\nURL\u4e3aservice:daytime://www.mtjones.com\n\u5219\u83b7\u53d6www.mtjones.com\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f88\u4e0d\u5e78\uff0c\u6b64\u65f6\u89e6\u53d1\u6f0f\u6d1e\u9700\u8981\u7684URL\u4e0d\u662f\u6b63\u5e38\u7684\u6784\u9020\uff0c\u8981\u60f3\u89e6\u53d1\u6f0f\u6d1e\u4e14\u8fdb\u884c\u6b63\u5e38\u5229\u7528\uff0c\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u51e0\u4e2a\u6761\u4ef6\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Scope List Length"}),"\u9700\u8981\u5927\u4e8e\u7b49\u4e8e0x100"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Scope List"}),"\u4e2d",(0,r.jsx)(n.code,{children:'"://"'}),"\u51fa\u73b0\u7684\u4f4d\u7f6e\u4e0d\u80fd\u8fc7\u4e8e\u540e\u9762\uff0c\u4e0d\u7136\u4f1a\u5bfc\u81f4\u8d8a\u754c\u5199\u5165\u8fc7\u591a\u7684\u5185\u5b58\uff0c\u7834\u574f\u4e0b\u4e00\u4e2a\u5806\u7684\u7ed3\u6784"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"SLP\u7684\u5904\u7406\u4ee3\u7801\u7b80\u5316\u4e3a\uff1a\nv4 = calloc(1u, srvurllen + 0x1D);\nv5 = strstr(srvurl, \":/\");\nmemcpy((char *)v4 + 0x15, srvurl, v5 - srvurl);\n\u793a\u4f8b\uff1a\nsrvurl = b'A' * 24\nscope_list = b'B' * 13 + struct.pack('<H', size + flag) + b':/' + b'C' * 647\n\u4f1a\u4ea7\u751f0x38\u7684\u5806\u5757(32\u4f4d\u4e0b)\uff0c0x15+24+13+2=0x3c\uff0c\u4e0b\u4e00\u4e2a\u4f4d\u7f6e\u521a\u597d\u662f\u4e0b\u4e00\u4e2a\u5806\u5757\u7684size\u4f4d\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u5c31\u6784\u6210\u4e86\u4e00\u4e2a\u6096\u8bba\uff0c\u8981\u60f3\u5229\u7528\uff0c",(0,r.jsx)(n.code,{children:"Scope List Length"}),'\u5fc5\u987b>=0x100\uff0c\u8981\u60f3>=0x100\uff0c"://"\u540e\u7684\u6570\u636e\u8981\u8db3\u591f\u957f\uff0c\u6570\u636e\u8db3\u591f\u957f\u53c8\u5bfc\u81f4\u65e0\u6cd5\u901a\u8fc7',(0,r.jsx)(n.code,{children:"SLPNetResolveHostToAddr"}),"\uff0c\u5bfc\u81f4\u7a0b\u5e8f\u6267\u884c\u6d41\u8f6c\u5165\u4e0b\u9762\u6240\u793a\u7684",(0,r.jsx)(n.code,{children:"LABEL_3"}),"\u4e2d\u8fdb\u884c",(0,r.jsx)(n.code,{children:"SLPBufferFree"}),'\uff08\u8fd8\u6709\u4e00\u79cd\u53ef\u80fd\u662f\u7533\u8bf7\u4e00\u4e2a\u8db3\u591f\u957f\u7684\u57df\u540d\uff0c\u643a\u5e26\u5728"://"\u540e\u8fdb\u884c\u89e3\u6790\uff0c\u4f46\u662f\u5728\u5b9e\u6218\u4e2d\uff0c\u6709\u6cc4\u9732\u4fe1\u606f\u7684\u98ce\u9669\uff0c\u8fd9\u91cc\u4e0d\u4e88\u8003\u8651\uff09']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"LABEL_3:\n  SLPMessageFree(a1);\n  SLPBufferFree(a2);\n  SLPDatabaseClose(v12, v10);\nLABEL_4:\n  HIDWORD(result) = __readgsdword(0x14u) ^ v15;\n  LODWORD(result) = v2;\n  return result;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u7740\u53c8\u5728\u4e0b\u9762\u8fdb\u884c\u4e86\u4e00\u6b21",(0,r.jsx)(n.code,{children:"SLPBufferFree"}),"\uff0c\u6784\u6210\u4e86\u65e0\u6cd5\u907f\u514d\u7684\uff0c\u5b8c\u7f8e\u7684Double Free"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"if ( v21[1] == 8 || v21[1] == 3 )\n      {\n        if ( !v5 )\n          goto LABEL_27;\n        v17 = v3;\n        v3 = 0;\n        v20 = v7;\n        SLPBufferFree(v17);\n        v7 = v20;\n      }\n      SLPMessageFree(v7);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u7a0d\u5fae\u9ad8\u4e00\u70b9\u7684\u7248\u672c\u4e2d\u8fdb\u884c\u4e86\u5185\u90e8\u4fee\u590d\uff0c\u5728\u8fdb\u884c\u7b2c\u4e00\u6b21",(0,r.jsx)(n.code,{children:"SLPBufferFree"}),"\u540e\u5bf9\u6307\u9488\u8fdb\u884c\u4e86\u7f6e\u96f6\u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.h2,{id:"\u56dbcve-2019-5544\u6f0f\u6d1e\u5229\u7528",children:"\u56db\u3001CVE-2019-5544\u6f0f\u6d1e\u5229\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u6362\u4e2a\u6d1e\uff0c\u5f00\u59cb\u7b2c\u4e8c\u6b21\u5229\u7528\u5c1d\u8bd5\uff0c\u8fd9\u6b21\u9009\u62e9CVE-2019-5544"}),"\n",(0,r.jsx)(n.h3,{id:"41-\u6f0f\u6d1e\u5206\u6790",children:"4.1 \u6f0f\u6d1e\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Service Registration\u62a5\u6587"})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u62a5\u6587\u65e8\u5728\u6ce8\u518c\u76f8\u5e94\u7684\u670d\u52a1"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(2744).Z+"",width:"686",height:"364"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Service Request\u62a5\u6587"})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u62a5\u6587\u65e8\u5728\u5b9a\u4f4d\u670d\u52a1\u5e76\u67e5\u8be2\u4ed6\u4eec\u7684\u4fe1\u606f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(1221).Z+"",width:"749",height:"367"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b63\u5e38\u4ea4\u4e92\u903b\u8f91\u662f\uff0c\u5148\u5411SLP\u53d1\u9001Service Registration\u62a5\u6587\uff0c\u5728SLP\u4e2d\u6ce8\u518c\u67d0\u7c7b\u670d\u52a1\u3002\u540e\u7eed\u5982\u679c\u6709\u7528\u6237\u60f3\u8981\u67e5\u8be2\u8be5\u670d\u52a1\u4fe1\u606f\uff0c\u5c31\u5411SLP\u53d1\u9001Service Request\u62a5\u6587\u8fdb\u884c\u67e5\u8be2\u3002\u800c\u6f0f\u6d1e\u5c31\u8bde\u751f\u5728\u5411SLP\u8fdb\u884c\u67e5\u8be2\u65f6\u5019\u7684\u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.p,{children:"SLP\u4f1a\u91cd\u65b0\u5b9a\u4e49\u8fd4\u56de\u7684\u4fe1\u606f\u5305\u5927\u5c0f\uff0c\u8be5\u5927\u5c0f\u7531\u4f60\u53d1\u9001Service Request\u62a5\u6587\u7684langtaglen\u5b57\u6bb5\u51b3\u5b9a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"/* reallocate the result buffer */\n   result = SLPBufferRealloc(result, size);\n   if (result == 0)\n   {\n      errorcode = SLP_ERROR_INTERNAL_ERROR;\n      goto FINISHED;\n   }\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u7740\u6839\u636eService Request\u62a5\u6587\u4e2d\u8bf7\u6c42\u7684\u670d\u52a1\u5728SLPDataBase\u4e2d\u67e5\u627e\uff0c\u770b\u8be5\u670d\u52a1\u662f\u5426\u5df2\u7ecf\u88ab\u6ce8\u518c\uff0c\u5982\u679c\u88ab\u6ce8\u518c\u5c31\u53d6\u51fa\u3001\u8bfb\u53d6\u670d\u52a1\u4fe1\u606f\u5230\u8fd4\u56de\u5305\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u5f88\u4e0d\u5e78\uff0c\u8bfb\u53d6\u670d\u52a1\u4fe1\u606f\u8fd9\u4e00\u64cd\u4f5c\u7684\u8bfb\u53d6\u5927\u5c0f\uff0c\u662f\u7531\u6ce8\u518c\u65f6\u670d\u52a1\u7684urllen\u51b3\u5b9a\u7684\uff0c\u5176\u6ca1\u6709\u6821\u9a8c\u670d\u52a1\u7684urllen\u5927\u5c0f\u4e0e\u8fd4\u56de\u5305\u5927\u5c0f\u4e4b\u95f4\u7684\u5dee\u5f02\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"PutUINT16(&result->curpos, db->urlcount);\n      for (i = 0; i < db->urlcount; i++)\n      {\n         /* urlentry is the url from the db result */\n         urlentry = db->urlarray[i];\n\n#ifdef ENABLE_SLPv1\n         if (urlentry->opaque == 0)\n         {\n            /* url-entry reserved */\n            *result->curpos++ = 0;\n\n            /* url-entry lifetime */\n            PutUINT16(&result->curpos, urlentry->lifetime);\n\n            /* url-entry urllen */\n            PutUINT16(&result->curpos, urlentry->urllen);\n\n            /* url-entry url */\n            memcpy(result->curpos, urlentry->url, urlentry->urllen);\n            result->curpos += urlentry->urllen;\n\n            /* url-entry auths */\n            *result->curpos++ = 0;\n         }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"42-\u6f0f\u6d1e\u5229\u7528",children:"4.2 \u6f0f\u6d1e\u5229\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u90e8\u5206\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53c2\u8003\u5f6d\u535a\u58eb\u7684\u5229\u7528\u624b\u6cd5\uff0c\u4f46\u4e0d\u5b8c\u5168\u76f8\u540c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u601d\u8def"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u6cc4\u9732libc"}),"\n",(0,r.jsx)(n.li,{children:"\u5e03\u5c40\u51fa\u4efb\u610f\u5199"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7\u4efb\u610f\u5199\u8986\u5199free_hook"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6e05\u7406\u5185\u5b58\u788e\u7247"})}),"\n",(0,r.jsx)(n.p,{children:"\u53d1\u9001\u5927\u91cfSLP\u7684Service Request\u62a5\u6587\u6e05\u7406\u788e\u7247"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6cc4\u9732libc"})}),"\n",(0,r.jsxs)(n.p,{children:["\u548c\u5f6d\u535a\u58eb\u7684\u624b\u6cd5\u4e00\u6837\uff0c\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5e03\u5c40SLP SendBuffer\u548cRecvBuffer\u7684\u540c\u65f6\uff0c\u4e5f\u8981\u4e00\u5e76\u5e03\u5c40SLPSocket\u7ed3\u6784\u4f53\uff0c\u5728\u76ee\u6807\u5806\u88ab\u653e\u5165LargeBin\u65f6\u7acb\u9a6c\u4fee\u6539\u5bf9\u5e94SLPSocket\u7684\u72b6\u6001\uff0c\u5c06\u5176\u8f6c\u53d8\u4e3a",(0,r.jsx)(n.code,{children:"STREAM_WRITE_FIRST"}),"\uff0c\u8bfb\u56deglibc\u5730\u5740"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(9559).Z+"",width:"1271",height:"432"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"#define SOCKET_PENDING_IO       100\n#define SOCKET_LISTEN           0\n#define SOCKET_CLOSE            1\n#define DATAGRAM_UNICAST        2\n#define DATAGRAM_MULTICAST      3\n#define DATAGRAM_BROADCAST      4\n#define STREAM_CONNECT_IDLE     5\n#define STREAM_CONNECT_BLOCK    6   + SOCKET_PENDING_IO\n#define STREAM_CONNECT_CLOSE    7   + SOCKET_PENDING_IO\n#define STREAM_READ             8   + SOCKET_PENDING_IO\n#define STREAM_READ_FIRST       9   + SOCKET_PENDING_IO\n#define STREAM_WRITE            10  + SOCKET_PENDING_IO\n#define STREAM_WRITE_FIRST      11  + SOCKET_PENDING_IO\n#define STREAM_WRITE_WAIT       12  + SOCKET_PENDING_IO\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6cc4\u9732libc\u65f6\uff0c\u6d89\u53ca\u5230\u4fee\u6539SLPSocket\uff0c\u8fd9\u662f\u4e00\u4e2a\u9700\u8981\u5173\u6ce8\u7684\u70b9\uff0c\u4fee\u6539\u64cd\u4f5c\u7834\u574f\u4e86SLPSocket\u94fe\u8868\u7684\u5b8c\u6574\u6027\uff0c\u5bfc\u81f4\u94fe\u8868\u88ab\u65ad\u94fe\uff0c\u4e00\u4e9bSocket\u8fde\u63a5\u65e0\u6cd5\u88ab\u641c\u5bfb\u5230\uff0c\u4e14\u65e0\u6cd5\u4ea7\u751f\u65b0\u7684Socket\u8fde\u63a5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u4ee5\u5728\u4efb\u610f\u5199\u64cd\u4f5c\u8fdb\u884c\u524d\uff0c\u9700\u8981\u4fee\u590dSLPSocket\u94fe\u8868\uff0c\u4f7f\u5176\u6062\u590d\u6b63\u5e38\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662fSLPSocket\u94fe\u8868\u7ed3\u6784\u3001\u63d2\u5165\u3001\u4f7f\u7528\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"typedef struct _SLPList\n{\n   SLPListItem * head;\n   SLPListItem * tail;\n   int count;\n} SLPList;\n\ntypedef struct _SLPListItem\n{\n   struct _SLPListItem * previous;\n   struct _SLPListItem * next;\n} SLPListItem;\n\ntypedef struct _SLPDSocket\n{\n   SLPListItem listitem;   \n   ......\n}\n\nSLPListItem * SLPListLinkHead(SLPList * list, SLPListItem * item)\n{\n   item->previous = 0;\n   item->next = list->head;\n\n   if (list->head)\n      list->head->previous = item;\n\n   list->head = item;\n\n   if (list->tail == 0)\n      list->tail = item;\n\n   list->count = list->count + 1;\n\n   return item;\n}\n\nvoid SLPDOutgoingHandler(int * fdcount, SLPD_fdset * fdset)\n{\n   SLPDSocket * sock;\n   sock = (SLPDSocket *) G_OutgoingSocketList.head;\n   ......\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"SLPSocket\u94fe\u8868\u63d2\u5165\u662f\u5934\u63d2\u6cd5\uff0c\u4f7f\u7528\u65f6\u4ece\u5934\u90e8\u5f00\u59cb\u83b7\u53d6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u8bbe\u4e00\u5171\u670930\u4e2aSLPSocket\u8fde\u63a5\uff0c\u7b2c\u5341\u4e94\u53f7SLPSocket\u8fde\u63a5\u88ab\u4fee\u6539\uff0c\u4ea7\u751f\u4e86\u65ad\u94fe\uff0c1\u53f7-14\u53f7\u8fde\u63a5\u5c31\u65e0\u6cd5\u88ab\u641c\u5bfb\u5230\u3002\u5f88\u4e0d\u5e78\u7684\u662f\uff0cSLP\u8fde\u63a5\u7684\u76d1\u542c\u63cf\u8ff0\u7b26\u662f8\uff0c\u4e00\u65e6\u65ad\u94fe\uff0c\u5c31\u65e0\u6cd5\u518d\u88ab\u5bfb\u627e\u5230\uff0c\u65b0\u8fde\u63a5\u4e5f\u5c31\u65e0\u6cd5\u63a5\u5165\u3002\u9700\u8981\u4eba\u4e3a\u8fdb\u884c\u4f2a\u9020\uff0c\u6062\u590d\u529f\u80fd\uff0c\u5728\u8bbe\u8ba1\u5229\u7528\u65f6\u9700\u8981\u7279\u522b\u6ce8\u610f\u8fd9\u4e00\u70b9\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5e03\u5c40\u4efb\u610f\u5199"})}),"\n",(0,r.jsx)(n.p,{children:"CVE-2019-5544\u7684\u4efb\u610f\u5199\u624b\u6cd5\u4e0e\u5f6d\u535a\u58eb\u4ecb\u7ecd\u7684\u624b\u6cd5\u7a0d\u6709\u4e0d\u540c\uff0c\u8be5CVE\u7684\u89e6\u53d1\u8def\u5f84\u4e0a\u6709\u5927\u91cf\u5806\u5757\u7684\u7533\u8bf7\u64cd\u4f5c\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e9b\u5927\u5806\u5757\u7684\u7533\u8bf7\uff0c\u8981\u60f3\u518d\u6b21\u4fdd\u8bc1\u76ee\u6807\u5806\u5757\u5728unsorted bin\u4e2d\uff0c\u9700\u65b0\u521b\u5efa\u5927\u91cf\u8fde\u63a5\u8fdb\u884c\u5e03\u5c40\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(3946).Z+"",width:"780",height:"342"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f6d\u535a\u58eb\u7684\u624b\u6cd5\u66f4\u503e\u5411\u5b9e\u6218\uff0c\u6784\u9020\u4e00\u4e2a\u6c38\u4e45\u6027\u7684\u4efb\u610f\u5199\uff0c\u80fd\u591a\u6b21\u4f7f\u7528\u3002\u4f46\u7406\u8bba\u4e0a\u4e0d\u8003\u8651\u5176\u4ed6\u56e0\u7d20\u7684\u8bdd\uff0c\u53ea\u590d\u73b0\uff0c\u62ffshell\uff0c\u8fdb\u884c\u4e00\u6b21\u4efb\u610f\u5199\u5373\u53ef\u5b8c\u6210\u3002\u6545\u7b14\u8005\u8f6c\u53d8\u601d\u8def\uff0c\u4f7f\u7528\u5806\u6ea2\u51fa\u4fee\u6539RecvBuf\u7684start\u3001curpos\u3001end\u6307\u5411\u76ee\u6807\u5185\u5b58"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(6410).Z+"",width:"330",height:"277"})}),"\n",(0,r.jsx)(n.p,{children:'\u7136\u540e\u901a\u8fc7\u5806\u6ea2\u51fa\u4fee\u6539\u8be5RecvBuf\u7684SLPSocket\uff0c\u4f7f\u5176\u8f6c\u4e3a"STREAM_READ"\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u7b49\u5f85\u7528\u6237\u7684\u6570\u636e\u8f93\u5165\u3002\u6b64\u65f6\u7528\u6237\u5f80\u8fde\u63a5\u4e2d\u53d1\u9001payload\u5373\u53ef\u5728\u76ee\u6807\u5185\u5b58\u91cc\u4fee\u6539\u3002'}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540e\u901a\u8fc7SLP\u8fde\u63a5\uff0c\u6784\u9020\u4e00\u4e2a\u5e26\u6709shellcode\u7684\u5806\uff0c\u5c06\u5176\u91ca\u653e\u5373\u53ef\u5b8c\u6210\u5229\u7528\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e94\u603b\u7ed3",children:"\u4e94\u3001\u603b\u7ed3"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u89e3\u6790\u4e86CVE-2021-21974\u548cCVE-2019-5544\uff0c\u5e76\u5c1d\u8bd5\u5728\u4f4e\u7248\u672cESXi\u4e0a\u8fdb\u884c\u6f0f\u6d1e\u5229\u7528\uff0c\u5229\u7528\u672c\u8eab\u5e76\u4e0d\u590d\u6742\u3002\u5728\u4e4b\u540e\u7684\u7248\u672c\u4e2d\uff0cVMware\u5c06ESXi\u4e2d\u7684SLP\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u5173\u95ed\uff0c\u4f7f\u5f97SLP\u4e0d\u518d\u662f\u4e00\u4e2a\u7814\u7a76\u4f18\u5148\u5ea6\u9ad8\u7684\u653b\u51fb\u9762\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},7120:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/2023031310314073-048aa3922f60bfd4e26e716b9ee55a98.jpg"},5931:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/3b2059e3-4f8e-408a-8c0c-649a183e3bd1-ccd9ac1ef9a5afdc65e2f08908bb2e2c.png"},1221:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/44ee70a9-cc07-43ea-839d-1bfcd20ad560-43b883c76f9efcc5d3fa0136687ccc9f.png"},2744:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/5463c7b1-126f-450b-9aa6-1d441637b08b-b35a46c19a0c2a7156721f6f01255290.png"},9559:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/79f012af-959c-482c-b501-ebb9341d3fc1-0ba3baba186e9fa500bd34af7922ecbc.png"},3946:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/8b200b24-dda8-4d32-ae89-bb6e92d68e3a-692db6eab034a82733c4895b0bfebec2.png"},6410:(e,n,s)=>{s.d(n,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var r=s(7294);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);