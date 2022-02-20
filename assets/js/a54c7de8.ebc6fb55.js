"use strict";(self.webpackChunkstarknet_docs=self.webpackChunkstarknet_docs||[]).push([[186],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return N}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(t),N=s,k=u["".concat(o,".").concat(N)]||u[N]||c[N]||r;return t?n.createElement(k,m(m({ref:a},l),{},{components:t})):n.createElement(k,m({ref:a},l))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=u;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},286:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),m=["components"],p={},o="Contract Storage",i={unversionedId:"Contracts/contract-storage",id:"Contracts/contract-storage",title:"Contract Storage",description:"Storage Layout",source:"@site/docs/Contracts/contract-storage.md",sourceDirName:"Contracts",slug:"/Contracts/contract-storage",permalink:"/starknet-docs/docs/Contracts/contract-storage",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Contracts/contract-storage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract Hash",permalink:"/starknet-docs/docs/Contracts/contract-hash"}},l=[{value:"Storage Layout",id:"storage-layout",children:[],level:2},{value:"Storage Low Level Functions",id:"storage-low-level-functions",children:[],level:2},{value:"Storage Variables",id:"storage-variables",children:[],level:2}],c={toc:l};function u(e){var a=e.components,t=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-storage"},"Contract Storage"),(0,r.kt)("h2",{id:"storage-layout"},"Storage Layout"),(0,r.kt)("p",null,"Contract storage is a persistent storage space where you can read, write, modify, and persist data. The storage is a map with ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mn",{parentName:"msup"},"251"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{251}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"5"),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))))))))," slots, where each slot is a felt which is initialized to 0."),(0,r.kt)("h2",{id:"storage-low-level-functions"},"Storage Low Level Functions"),(0,r.kt)("p",null,"The basic function for reading storage returns value stored in key is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let (value) = storage_read(key)\n")),(0,r.kt)("p",null,"The basic function for writing to storage writes value to key is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"storage_write(key, value);\n")),(0,r.kt)("p",null,"Both are system calls that can be imported by adding the line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"from starkware.starknet.common.syscalls import storage_read, storage_write\n")),(0,r.kt)("p",null,"Another basic function is used for getting the storage address, this function is created by the compiler when defining a storage variable, as explained below. This function returns the address of the storage variable. Below we discuss how this address is determined from the variable\u2019s name and keys."),(0,r.kt)("h2",{id:"storage-variables"},"Storage Variables"),(0,r.kt)("p",null,"The most common way for interacting with a contract's storage is through storage variables."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@storage_var")," decorator declares a variable that will be kept as part of the contract storage. The variable can consist of a single felt, or it can be a mapping from multiple arguments to a tuple of felts or structs. To use this variable, the ",(0,r.kt)("inlineCode",{parentName:"p"},"var.read(args)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"var.write(args, value)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"var.addr(args)")," functions are automatically created by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@storage_var")," decorator, for reading the storge value, writing the storage value and getting the storage address, respectively.\nThe StarkNet contract compiler generates the Cairo code that maps the storage variable\u2019s name and argument values to an address \u2013 so that it can be part of the generated proof. The address of a storage variable is computed as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If it is a single value, then the address is ",(0,r.kt)("inlineCode",{parentName:"li"},"sn_keccak(variable_name)"),", where variable_name is the ASCII encoding of the variable\u2019s name."),(0,r.kt)("li",{parentName:"ul"},"If it is a (nested) mapping, then the address of the value at key ",(0,r.kt)("inlineCode",{parentName:"li"},"k_1,...,k_n")," is\n",(0,r.kt)("inlineCode",{parentName:"li"},"h(...h(h(sn_keccak(variable_name),k_1),k_2),...,k_n)")," where ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"h")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," is the\nPedersen hash and the final value is taken ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"\u200a"),(0,r.kt)("mo",{parentName:"mrow",lspace:"0.22em",rspace:"0.22em"},(0,r.kt)("mrow",{parentName:"mo"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"d"))),(0,r.kt)("mtext",{parentName:"mrow"},"\u200a"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mn",{parentName:"msup"},"251")),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"256"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\bmod (2^{251}-256)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.064108em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.05555555555555555em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathrm"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathrm"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathrm"},"d"))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.05555555555555555em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"5"),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord"},"5"),(0,r.kt)("span",{parentName:"span",className:"mord"},"6"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("li",{parentName:"ul"},"If it is a mapping to complex values (e.g., tuples or structs), then this complex value lies in a continuous segment starting from the address calculated in the previous point. Note that 256 field elements is the current limitation on the maximal size of a complex storage value."),(0,r.kt)("li",{parentName:"ul"},"Note that when calling ",(0,r.kt)("inlineCode",{parentName:"li"},"var.addr(args)")," for a storage variable with complex values, the returned value is the address of the first element in the storage.")),(0,r.kt)("p",null,"Roughly, we can summarize the above as follows:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"storage variable address := pedersen(keccak(variable name), keys)")),(0,r.kt)("p",null,"In the following example we define a storage variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," that is a mapping from a key to a Tuple of two values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"@storage_var\nfunc range(user : felt) -> (res : (felt, felt)):\nend\n")))}u.isMDXComponent=!0}}]);