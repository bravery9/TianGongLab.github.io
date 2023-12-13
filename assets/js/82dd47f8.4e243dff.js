"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>C});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,C=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return n?o.createElement(C,l(l({ref:t},s),{},{components:n})):o.createElement(C,l({ref:t},s))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=n(7462),r=(n(7294),n(3905));const a={slug:"tiangongarticle009",title:"CodeDom \u6f0f\u6d1e\u6a21\u5f0f\u4e0e SharePoint RCE",authors:"wanghao23",tags:["CodeDom","SharePoint","Vulnerability Pattern"]},l="CodeDom \u6f0f\u6d1e\u6a21\u5f0f\u4e0e SharePoint RCE",i={permalink:"/blog/tiangongarticle009",editUrl:"https://github.com/TianGongLab/poc_docs/tree/main/blog/2023-12-06-CodeDom-vulnerability-pattern-and-SharePoint-RCE/index.md",source:"@site/blog/2023-12-06-CodeDom-vulnerability-pattern-and-SharePoint-RCE/index.md",title:"CodeDom \u6f0f\u6d1e\u6a21\u5f0f\u4e0e SharePoint RCE",description:"\u4e00\u3001\u4ecb\u7ecd CodeDom \u673a\u5236",date:"2023-12-06T00:00:00.000Z",formattedDate:"2023\u5e7412\u67086\u65e5",tags:[{label:"CodeDom",permalink:"/blog/tags/code-dom"},{label:"SharePoint",permalink:"/blog/tags/share-point"},{label:"Vulnerability Pattern",permalink:"/blog/tags/vulnerability-pattern"}],readingTime:9.225,hasTruncateMarker:!0,authors:[{name:"HuanGMz",title:"\u5929\u5de5\u5b9e\u9a8c\u5ba4\u5b89\u5168\u7814\u7a76\u5458",imageURL:"https://tiangonglab.github.io/img/authors/HuanGMz.jpg",key:"wanghao23"}],frontMatter:{slug:"tiangongarticle009",title:"CodeDom \u6f0f\u6d1e\u6a21\u5f0f\u4e0e SharePoint RCE",authors:"wanghao23",tags:["CodeDom","SharePoint","Vulnerability Pattern"]},prevItem:{title:"BMC \u6f0f\u6d1e\u5b9e\u4f8b\u5206\u6790",permalink:"/blog/tiangongarticle010"},nextItem:{title:"Datacon 2023 \u6f0f\u6d1e\u5206\u6790\u8d5b\u9053\u8d5b\u9898\u4e8c\u5b98\u65b9\u9898\u89e3",permalink:"/blog/tiangongarticle008"}},p={authorsImageUrls:[void 0]},m=[{value:"\u4e00\u3001\u4ecb\u7ecd CodeDom \u673a\u5236",id:"\u4e00\u4ecb\u7ecd-codedom-\u673a\u5236",level:2},{value:"\u4e8c\u3001\u5173\u4e8e CodeDom \u7684\u4f8b\u5b50",id:"\u4e8c\u5173\u4e8e-codedom-\u7684\u4f8b\u5b50",level:2},{value:"\u4e09\u3001CodeDom \u7684\u5371\u9669\u7ec6\u8282",id:"\u4e09codedom-\u7684\u5371\u9669\u7ec6\u8282",level:2},{value:"\u56db\u3001 <strong>CVE-2020-0646</strong>",id:"\u56db-cve-2020-0646",level:2},{value:"\u4e94\u3001 CVE-2023-24955",id:"\u4e94-cve-2023-24955",level:2},{value:"\u516d\u3001 \u603b\u7ed3",id:"\u516d-\u603b\u7ed3",level:2}],s={toc:m},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u4ecb\u7ecd-codedom-\u673a\u5236"},"\u4e00\u3001\u4ecb\u7ecd CodeDom \u673a\u5236"),(0,r.kt)("p",null,".NET Framework \u63d0\u4f9b\u4e00\u79cd\u53eb\u505a ",(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u6587\u6863\u5bf9\u8c61\u6a21\u578b (CodeDom)"),"  \u7684\u673a\u5236\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 CodeDom \u5143\u7d20\u7ec4\u5408\u6210 CodeDom \u56fe\u6765\u8868\u793a\u4e00\u6bb5\u6e90\u4ee3\u7801\u7684\u903b\u8f91\u3002"),(0,r.kt)("p",null,"CodeDom \u6709\u4e24\u4e2a\u4e3b\u8981\u7684\u529f\u80fd\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e CodeDom \u56fe\u751f\u6210\u6e90\u4ee3\u7801\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u6e90\u4ee3\u7801\u5373\u65f6\u7f16\u8bd1\u4e3a\u7a0b\u5e8f\u96c6\u3002")),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u5ffd\u7565\u4e2d\u95f4\u8fc7\u7a0b\uff0c\u76f4\u63a5\u5c06 CodeDom \u56fe\u7f16\u8bd1\u4e3a\u7a0b\u5e8f\u96c6\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u5173\u4e8e-codedom-\u7684\u4f8b\u5b50"},"\u4e8c\u3001\u5173\u4e8e CodeDom \u7684\u4f8b\u5b50"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4ecb\u7ecd CodeDom \u7684\u4e00\u822c\u7528\u6cd5\uff0c\u4e0b\u9762\u662f\u63d0\u4f9b\u4e00\u4e2a\u5173\u4e8e CodeDom \u4f8b\u5b50\u3002\u8be5\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u4e00\u6bb5 CodeDom \u7a0b\u5e8f\u63cf\u8ff0\u4e00\u6bb5\u6e90\u7801\u7684\u903b\u8f91\u3002"),(0,r.kt)("p",null,"\u76ee\u6807\u6e90\u7801\u7c7b\u4f3c\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace MyNamespace {\n    using System;\n\n    public class MyClass {\n        public static void MyMethod() {\n         Console.WriteLine("Hello, World!");\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u5bf9\u5e94\u7684 CodeDom \u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.CodeDom;\nusing System.CodeDom.Compiler;\nusing Microsoft.CSharp;\nusing System.Reflection;\n\nnamespace CodeDomExample\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            /************************************************************\n            // \u7b2c\u4e00\u90e8\u5206\uff1a\u521b\u5efa CodeCompileUnit\uff0c\u6784\u5efa CodeDom \u56fe\u4ee5\u8868\u793a\u4e00\u6bb5\u4ee3\u7801\u903b\u8f91\n            ************************************************************/\n            // \u521b\u5efa\u4e00\u4e2a CodeCompileUnit \u5bf9\u8c61\uff0c\u8868\u793a\u8981\u7f16\u8bd1\u7684\u4ee3\u7801\u5355\u5143\n            CodeCompileUnit compileUnit = new CodeCompileUnit();\n\n            // \u521b\u5efa\u4e00\u4e2a CodeNamespace \u5bf9\u8c61\uff0c\u8868\u793a\u4ee3\u7801\u7684\u547d\u540d\u7a7a\u95f4\n            CodeNamespace codeNamespace = new CodeNamespace("MyNamespace");\n\n            // \u6dfb\u52a0\u9700\u8981\u5f15\u7528\u7684\u547d\u540d\u7a7a\u95f4\n            codeNamespace.Imports.Add(new CodeNamespaceImport("System"));\n\n            // \u521b\u5efa\u4e00\u4e2a CodeTypeDeclaration \u5bf9\u8c61\uff0c\u8868\u793a\u8981\u7f16\u8bd1\u7684\u7c7b\u578b\n            CodeTypeDeclaration codeType = new CodeTypeDeclaration("MyClass");\n            codeType.IsClass = true;\n\n            // \u5728\u7c7b\u578b\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b9\u6cd5\n            CodeMemberMethod codeMethod = new CodeMemberMethod();\n            codeMethod.Name = "MyMethod";\n            codeMethod.Attributes = MemberAttributes.Public | MemberAttributes.Static;\n            codeMethod.ReturnType = new CodeTypeReference(typeof(void));\n\n            // \u65b9\u6cd5\u4f53\u4e2d\u7684\u4ee3\u7801\n            CodeSnippetStatement codeSnippet = new CodeSnippetStatement("Console.WriteLine(\\"Hello, World!\\");");\n            codeMethod.Statements.Add(codeSnippet);\n\n            // \u5c06\u65b9\u6cd5\u6dfb\u52a0\u5230\u7c7b\u578b\u4e2d\n            codeType.Members.Add(codeMethod);\n\n            // \u5c06\u7c7b\u578b\u6dfb\u52a0\u5230\u547d\u540d\u7a7a\u95f4\u4e2d\n            codeNamespace.Types.Add(codeType);\n\n            // \u5c06\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u5230\u4ee3\u7801\u5355\u5143\u4e2d\n            compileUnit.Namespaces.Add(codeNamespace);\n\n            /*************************************************************\n            // \u7b2c\u4e8c\u90e8\u5206\uff1a\u5c06 CodeDom \u56fe\u7f16\u8bd1\u4e3a\u7a0b\u5e8f\u96c6\n            **************************************************************/\n            // \u521b\u5efa\u4e00\u4e2a CSharpCodeProvider \u5bf9\u8c61\uff0c\u7528\u4e8e\u7f16\u8bd1\u4ee3\u7801\n            CodeDomProvider provider = new CSharpCodeProvider();\n\n            // \u521b\u5efa\u4e00\u4e2a\u7f16\u8bd1\u53c2\u6570\u5bf9\u8c61\n            CompilerParameters parameters = new CompilerParameters();\n            parameters.GenerateExecutable = true;\n            parameters.OutputAssembly = "MyCode.exe";\n\n            // \u7f16\u8bd1\u4ee3\u7801\n            CompilerResults results = provider.CompileAssemblyFromDom(parameters, compileUnit);\n\n            // \u68c0\u67e5\u7f16\u8bd1\u662f\u5426\u6210\u529f\n            if (results.Errors.HasErrors)\n            {\n                foreach (CompilerError error in results.Errors)\n                {\n                    Console.WriteLine("Error: {0}", error.ErrorText);\n                }\n            }\n            else\n            {\n                Console.WriteLine("Code compiled successfully!");\n            }\n\n            /*****************************************************\n            // \u7b2c\u4e09\u90e8\u5206\uff1a\u901a\u8fc7\u53cd\u5c04\u52a0\u8f7d\u751f\u6210\u7684\u7a0b\u5e8f\u96c6\uff0c\u5e76\u8c03\u7528\u76f8\u5e94\u7684\u65b9\u6cd5\n            ******************************************************/\n            // \u52a0\u8f7d\u5e76\u6267\u884c\u7f16\u8bd1\u751f\u6210\u7684\u7a0b\u5e8f\u96c6\n            Assembly assembly = Assembly.LoadFrom("MyCode.exe");\n            Type type = assembly.GetType("MyNamespace.MyClass");\n            MethodInfo method = type.GetMethod("MyMethod");\n            method.Invoke(null, null);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u50cf\u8fd9\u6837\u4e00\u4e2a\u5178\u578b\u7684 CodeDom \u7a0b\u5e8f\u5f80\u5f80\u5305\u62ec\u4e09\u90e8\u5206\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f9d\u636e\u67d0\u4e9b\u4fe1\u606f\uff0c\u4f7f\u7528 CodeDom \u5143\u7d20 \u63cf\u8ff0 \u4e00\u6bb5\u6e90\u4ee3\u7801\u7684\u903b\u8f91")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 CodeDom \u56fe\u8f6c\u6362\u4e3a\u6e90\u7801\uff0c\u7136\u540e\u8fdb\u884c\u7f16\u8bd1\uff0c\u6216\u8005 \u76f4\u63a5\u5c06 CodeDom \u56fe\u7f16\u8bd1\u4e3a\u7a0b\u5e8f\u96c6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// \u6839\u636e CompileUnit (CodeDom\u56fe) \u751f\u6210\u6e90\u7801\nCodeDomProvider.GenerateCodeFromCompileUnit();\n// \u4ece\u4e0d\u540c\u7684\u6e90\u7801\u8868\u793a\u5f62\u5f0f\u7f16\u8bd1\u7a0b\u5e8f\u96c6\nCodeDomProvider.CompileAssemblyFromDom();\nCodeDomProvider.CompileAssemblyFromFile();\nCodeDomProvider.CompileAssemblyFromSource();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u53cd\u5c04\u52a0\u8f7d\u524d\u9762\u751f\u6210\u7684\u7a0b\u5e8f\u96c6\uff0c\u5e76\u8c03\u7528\u5176\u4e2d\u7684\u65b9\u6cd5\u3002"))),(0,r.kt)("h2",{id:"\u4e09codedom-\u7684\u5371\u9669\u7ec6\u8282"},"\u4e09\u3001CodeDom \u7684\u5371\u9669\u7ec6\u8282"),(0,r.kt)("p",null,"CodeDom \u4e2d\u6709\u5927\u91cf\u7684\u5143\u7d20\u7528\u4e8e\u63cf\u8ff0\u6e90\u4ee3\u7801\u4e2d\u7684\u7ed3\u6784\uff0c\u6bd4\u5982 \u7b97\u672f\u8fd0\u7b97\u3001\u8d4b\u503c\u8bed\u53e5\u3001\u51fd\u6570\u8c03\u7528\u3001\u5faa\u73af\u8bed\u53e5\u3001\u6761\u4ef6\u8bed\u53e5\u7b49\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u4e3e\u5176\u4e2d\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class CodeTypeOfExpression : System.CodeDom.CodeExpression\n{\n    public CodeTypeOfExpression(string type);\n    ...\n}\n")),(0,r.kt)("p",null,"CodeTypeOfExpression \u7528\u4e8e\u63cf\u8ff0\u4e00\u4e2a typeof() \u8bed\u53e5\uff0c\u5176\u53c2\u6570\u662f\u6307\u5b9a\u7684",(0,r.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u540d\u79f0\u6807\u8bc6\u7b26"),"\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'CodeTypeOfExpression("System.String");\n\n// \u5bf9\u5e94\u7684\u6e90\u7801\u5982\u4e0b\uff1a\ntypeof(System.String)\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5728 ComDOM \u5143\u7d20\u91cc\uff0c\u6211\u4eec\u4f20\u5165\u7684\u662f\u4e00\u4e2a \u5b57\u7b26\u4e32\u3002\u4f46\u5728\u751f\u6210\u7684\u6e90\u7801\u91cc\uff0c\u5b83\u53d8\u6210\u4e86\u4e00\u4e2a\u7c7b\u578b\u540d\u79f0\u6807\u8bc6\u7b26\u3002"),(0,r.kt)("p",null,'\u5047\u5982\u4f20\u5165\u7684 "System.String" \u5b57\u7b26\u4e32\u7528\u6237\u53ef\u63a7\u5462\uff1f\u662f\u5426\u5b58\u5728\u6ce8\u5165\uff1f'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'CodeTypeOfExpression typeof1 =  new CodeTypeOfExpression(@"System.String); Object/**/test2 = System.Diagnostics.Process.Start(""cmd.exe"", "" /c calc"");//");\n\nCodeVariableDeclarationStatement myVariable = new CodeVariableDeclarationStatement( typeof(Type), "test", typeof1);\n\nmyMethod.Statements.Add(myVariable);\n')),(0,r.kt)("p",null,"\u751f\u4ea7\u7684C#\u6e90\u7801\u4f1a\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'System.Type test = typeof(System.String); \nObject/**/test2 = System.Diagnostics.Process.Start("cmd.exe", " / c calc");//);\n')),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5373\u4fbf\u8df3\u8fc7\u751f\u6210\u6e90\u7801\u7684\u4e2d\u95f4\u8fc7\u7a0b\uff0c\u76f4\u63a5\u5c06 CodeDom \u7f16\u8bd1\u4e3a\u7a0b\u5e8f\u96c6\uff0c\u4e5f\u662f\u4f1a\u88ab\u6ce8\u5165\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CodeDom \u4e2d\u7684\u6240\u6709\u6807\u8bc6\u7b26\u5143\u7d20\u90fd\u53ef\u4ee5\u88ab\u6ce8\u5165\uff0c\u6bd4\u5982\u53d8\u91cf\u540d\u3001\u7c7b\u578b\u540d\u3001\u547d\u540d\u7a7a\u95f4\u540d"),"\u3002"),(0,r.kt)("h2",{id:"\u56db-cve-2020-0646"},"\u56db\u3001 ",(0,r.kt)("strong",{parentName:"h2"},"CVE-2020-0646")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SharePoint WorkFlow RCE \u6f0f\u6d1e")),(0,r.kt)("p",null,"SharePoint \u7684 WorkFlow \u63d0\u4f9b\u4e00\u4e9b\u53d7\u9650\u7684 Activity \u4ee5\u4f9b\u7528\u6237\u7f16\u8f91\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41\uff0c\u6bd4\u5982\u4e8b\u4ef6\u5230\u8fbe\u67d0\u4e2a\u8282\u70b9\u540e\u7ed9\u67d0\u4e2a\u4eba\u53d1\u4e00\u5c01\u90ae\u4ef6\u3002\u5176\u4e2d\u53d1\u4e00\u5c01\u90ae\u4ef6\u5c31\u662f\u4e00\u4e2a Activity\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u4f7f\u7528 XOML \u683c\u5f0f\u7684\u6587\u4ef6\u5b9a\u4e49\u4e00\u6bb5\u5de5\u4f5c\u6d41\uff0cSharePoint \u6839\u636e XOML \u4e2d\u4f7f\u7528\u7684 Activity \u751f\u6210 CodeDom \u56fe\uff0c\u7136\u540e\u751f\u6210\u76f8\u5e94\u6e90\u7801\uff0c\u518d\u7f16\u8bd1\u6210\u4e3a\u76f8\u5e94\u7684\u7a0b\u5e8f\u96c6\u3002\u6700\u540e\u5f53\u5de5\u4f5c\u6d41\u542f\u52a8\u65f6\uff0c\u5c31\u4f1a\u52a0\u8f7d\u8be5\u7a0b\u5e8f\u96c6\u5e76\u8c03\u7528\u5176\u4e2d\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u8fc7\u7a0b\u53d1\u751f\u5728\uff1aSystem.Workflow.ComponentModel.dll \u7684 WorkflowCompiler.Compile() \u51fd\u6570\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u7531\u4e8e CodeDom \u7684\u6ce8\u5165\u95ee\u9898\uff0c\u800c Workflow \u5728\u7f16\u8bd1\u65f6\u53c8\u6ca1\u6709\u68c0\u67e5\uff0c\u5bfc\u81f4\u4e86\u901a\u8fc7\u5de5\u4f5c\u6d41\u8fdb\u884c\u4ee3\u7801\u6ce8\u5165\u3002"),(0,r.kt)("p",null,"payload \u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<SequentialWorkflowActivity x:Class="MyWorkflow" x:Name="foobar" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns="http://schemas.microsoft.com/winfx/2006/xaml/workflow">\n  <CallExternalMethodActivity x:Name="codeActivity1" MethodName=\'test1\' InterfaceType=\'System.String);}Object/**/test2=System.Diagnostics.Process.Start("cmd.exe","/c calc");private/**/void/**/foobar(){//\' />\n</SequentialWorkflowActivity>\n')),(0,r.kt)("p",null,"InterfaceType \u5c5e\u6027\u6307\u5b9a\u7684\u63a5\u53e3\u7c7b\u578b\uff0c\u5728\u6784\u9020 CodeDom \u56fe\u65f6\u88ab\u7528\u4f5c CodeTypeOfExpression \u7684\u53c2\u6570\uff0c\u5373\u88ab\u4f20\u9012\u7ed9 typeof() \u8bed\u53e5\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5bf9 InterfaceType \u6ce8\u5165\u53ef\u4ee5\u5b9e\u73b0\u4ee3\u7801\u6267\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8865\u4e01\uff1a")),(0,r.kt)("p",null,"\u5728\u8fdb\u884c\u7f16\u8bd1\u524d\uff0c\u8c03\u7528 CodeGenerator.ValidateIdentifiers(CodeObject) \u65b9\u6cd5\u6765\u68c0\u67e5 CodeDom \u56fe\u4e2d\u7684\u6807\u8bc6\u7b26\u662f\u5426\u7b26\u5408\u8bed\u8a00\u8981\u6c42\u3002"),(0,r.kt)("p",null,"CodeGenerator.ValidateIdentifiers() \u662f CodeDom \u63d0\u4f9b\u7684\u4e00\u4e2a\u68c0\u67e5\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u8865\u4e01\u662f\u4fee\u8865\u5728 System.Workflow.ComponentModel.dll \u4e2d\u7684\uff0c\u6240\u4ee5\u8fd9\u4e2a\u7528\u4e8e\u7f16\u8bd1\u5de5\u4f5c\u6d41\u7684\u516c\u5171\u7ec4\u4ef6\u662f\u5df2\u7ecf\u88ab\u4fee\u590d\u4e86\u3002\u90a3\u8fd8\u4f1a\u6709\u4eba/\u7ec4\u4ef6 \u8fd9\u6837\u4f7f\u7528 CodeDom \u5417\uff1f"),(0,r.kt)("h2",{id:"\u4e94-cve-2023-24955"},"\u4e94\u3001 CVE-2023-24955"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2023 P2O SharePoint RCE \u6f0f\u6d1e")),(0,r.kt)("p",null,"\u4e0b\u9762\u662f SharePoint \u7684\u8865\u4e01\u6bd4\u8f83\u5185\u5bb9\uff0c\u7ea2\u8272\u4e3a\u65b0\u52a0\u4ee3\u7801\uff1a"),(0,r.kt)("p",null," ",(0,r.kt)("img",{src:n(3554).Z,width:"1233",height:"555"})),(0,r.kt)("p",null,"\u7ecf\u8fc7\u524d\u9762\u7684\u5b66\u4e60\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u4e9b\u5173\u952e\u5b57\uff1aCodeDom\u3001IsValidIdentifier\uff0cNamespaceName\u3002"),(0,r.kt)("p",null,"Namespace \u4e5f\u662f\u6807\u8bc6\u7b26\uff0c\u6240\u4ee5\u5728 CodeDom \u4e2d\u4e5f\u662f\u5b58\u5728\u6ce8\u5165\u98ce\u9669\u7684\uff0c\u8fd9\u91cc\u52a0\u4e0a\u4e86 IsValidIdentifier \u4f3c\u4e4e\u8868\u660e\u8fd9\u91cc\u53ef\u4ee5\u88ab\u6ce8\u5165\uff0cproxyNamespaceName \u53ef\u4ee5\u88ab\u7528\u6237\u63a7\u5236\u5417\uff1f\u8981\u5982\u4f55\u89e6\u53d1\u8be5\u4f4d\u7f6e\uff1f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5bfb\u627e\u89e6\u53d1\u8def\u5f84\uff1a")),(0,r.kt)("p",null,"\u8865\u4e01\u5728  Microsoft.SharePoint.BusinessData.SystemSpecific.Wcf \u547d\u540d\u7a7a\u95f4\u4e0b\u7684 WcfProxyGenerator.GenerateProxyAssembly() \u65b9\u6cd5\u9644\u8fd1\u3002\u8be5\u547d\u540d\u7a7a\u95f4\u5c5e\u4e8e  Microsoft Business Connectivity Services (BCS)  \u7ec4\u4ef6\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7BCS\uff0c\u7528\u6237\u53ef\u4ee5\u5728SharePoint\u4e2d\u521b\u5efa",(0,r.kt)("strong",{parentName:"p"},"\u5916\u90e8\u5185\u5bb9\u7c7b\u578b"),"\uff08External Content Type\uff09\uff0c\u8fd9\u4e9b\u5185\u5bb9\u7c7b\u578b",(0,r.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u4e86\u4e0e\u5916\u90e8\u6570\u636e\u6e90\u7684\u8fde\u63a5\u548c\u8bbf\u95ee\u65b9\u5f0f"),"\u3002\u4f7f\u7528\u8fd9\u4e9b\u5916\u90e8\u5185\u5bb9\u7c7b\u578b\uff0c\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u5916\u90e8\u5217\u8868\uff08External List\uff09\u3001\u5916\u90e8\u6570\u636e\u5217\uff08External Data Column\uff09\u548c\u5916\u90e8\u5185\u5bb9\u7f51\u7ad9\uff08External Content Site\uff09\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u5916\u90e8\u6570\u636e\u7684\u5c55\u793a\u548c\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"GenerateProxyAssembly\u3001\u5916\u90e8\u5185\u5bb9\u7c7b\u578b\u3001\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\u3001Wcf Service\uff0c\u7ed3\u5408\u8fd9\u4e9b\u5173\u952e\u8bcd\uff0c\u5df2\u7ecf\u53ef\u4ee5\u7406\u6e05\u6f0f\u6d1e\u89e6\u53d1\u7684\u539f\u56e0\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u4e00\u4e2a \u6076\u610f\u7684 Wcf Service")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 SharePoint \u91cc\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90\uff0c\u5e76\u6307\u5411\u6211\u4eec\u7684 \u6076\u610f Wcf Service")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 SharePoint \u91cc\u5b9a\u4e49\u4e00\u4e2a\u5916\u90e8\u5217\u8868\uff0c\u5e76\u4e0e\u6211\u4eec\u7684\u5916\u90e8\u6570\u636e\u6e90\u7ed1\u5b9a")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u5916\u90e8\u5217\u8868\uff0cSharePoint \u5c31\u4f1a\u8bf7\u6c42\u6211\u4eec\u7684 Wcf Service\uff0c\u4e5f\u610f\u5473\u7740 SharePoint \u4f1a\u901a\u8fc7 GenerateProxyAssembly \u6765\u7f16\u8bd1\u51fa\u4e00\u4e2a\u5ba2\u6237\u7aef\u4ee3\u7406\u7a0b\u5e8f\u96c6\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(1830).Z,width:"399",height:"419"})))),(0,r.kt)("p",null,"\u5728\u521b\u5efa wcf \u5916\u90e8\u6570\u636e\u6e90\u7684\u65f6\u5019\uff0c\u5f88\u660e\u663e\u53ef\u4ee5\u770b\u5230 \u201c\u4ee3\u7406\u547d\u540d\u7a7a\u95f4\u201d \u8fd9\u4e2a\u53ef\u63a7\u5b57\u6bb5\uff0c\u5b9e\u9645\u8bc1\u660e\u8fd9\u91cc\u5c31\u662f\u6ce8\u5165\u70b9\u3002"),(0,r.kt)("h2",{id:"\u516d-\u603b\u7ed3"},"\u516d\u3001 \u603b\u7ed3"),(0,r.kt)("p",null,"CodeDom \u5728\u751f\u6210\u6e90\u7801\u548c\u7f16\u8bd1\u65f6\uff0c\u4e0d\u4f1a\u81ea\u5df1\u68c0\u67e5\u6807\u8bc6\u7b26\u91cc\u662f\u5426\u542b\u6709\u8fdd\u6cd5\u5b57\u7b26\uff0c\u800c\u662f\u63d0\u4f9b\u4e86 Validate \u65b9\u6cd5\u7531\u5f00\u53d1\u8005\u8c03\u7528\u4ee5\u8fdb\u884c\u68c0\u67e5\u3002\u4e0d\u4e86\u89e3 CodeDom \u5b89\u5168\u95ee\u9898\u7684\u5f00\u53d1\u8005\u5f88\u53ef\u80fd\u4f1a\u5ffd\u7565\u8fd9\u4e2a\u68c0\u67e5\u3002"),(0,r.kt)("p",null,"CodeDom \u673a\u5236\u5e38\u88ab\u7528\u4e8e\u5373\u65f6\u4ee3\u7801\u7f16\u8bd1\uff08wcf\u5ba2\u6237\u7aef\uff09\uff0c\u6216\u8005\u7ed9\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u6709\u9650\u7684\u53ef\u7f16\u7a0b\u529f\u80fd\uff08workflow \u7f16\u7a0b\uff09\u3002\u5728\u5ba1\u8ba1\u7c7b\u4f3c\u529f\u80fd\u65f6\u53ef\u68c0\u67e5\u662f\u5426\u4f7f\u7528\u4e86 CodeDom\uff0c\u4ee5\u53ca\u662f\u5426\u4f7f\u7528\u4e86 CodeGenerator.ValidateIdentifiers() \u6216 CodeDomProvider.IsValidIdentifier() \u8fdb\u884c\u5b89\u5168\u9632\u62a4\u3002"))}c.isMDXComponent=!0},3554:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/17906c31-6410-4352-9021-30b0f5a98ea9-9d5d606c995b608c044a62860cc03bba.png"},1830:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/c914d1a7-4fbf-4a21-a774-e35bc83afa16-32e92566e900a91ad6018544f031ed02.png"}}]);