"use strict";(self.webpackChunkcodeprime=self.webpackChunkcodeprime||[]).push([[888],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return f}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(i),f=r,d=h["".concat(p,".").concat(f)]||h[f]||c[f]||o;return i?n.createElement(d,a(a({ref:t},u),{},{components:i})):n.createElement(d,a({ref:t},u))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},1978:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),a=["components"],s={sidebar_position:1},p="Prerequisites",l={unversionedId:"DSA/Bit Magic/Prerequisite",id:"DSA/Bit Magic/Prerequisite",title:"Prerequisites",description:"Every thing you need to know before starting Bit Manipulation.",source:"@site/docs/DSA/Bit Magic/Prerequisite.md",sourceDirName:"DSA/Bit Magic",slug:"/DSA/Bit Magic/Prerequisite",permalink:"/CP/docs/DSA/Bit Magic/Prerequisite",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DSA/Bit Magic/Prerequisite.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/CP/docs/intro"},next:{title:"Length of the Longest Consecutive 1s in Binary Representation",permalink:"/CP/docs/DSA/Bit Magic/Longest_ones_in_binary_representation"}},u=[{value:"Bitwise Operators:",id:"bitwise-operators",children:[{value:"NOT ( ~ ):",id:"not---",children:[],level:3},{value:"AND ( &amp; ):",id:"and---",children:[],level:3},{value:"OR ( | ):",id:"or---",children:[],level:3},{value:"XOR ( ^ ):",id:"xor---",children:[],level:3},{value:"Left Shift ( &lt;&lt; ):",id:"left-shift---",children:[],level:3},{value:"Right Shift ( &gt;&gt; ):",id:"right-shift---",children:[],level:3}],level:2}],c={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Every thing you need to know before starting Bit Manipulation."),(0,o.kt)("h2",{id:"bitwise-operators"},"Bitwise Operators:"),(0,o.kt)("p",null,"There are different bitwise operations used in the bit manipulation. These bit operations operate on the individual bits of the bit patterns. Bit operations are fast and can be used in optimizing time complexity. Some common bit operators are:"),(0,o.kt)("h3",{id:"not---"},"NOT ( ~ ):"),(0,o.kt)("p",null,"Bitwise NOT is an unary operator that flips the bits of the number i.e., if the ith bit is 0, it will change it to 1 and vice versa. Bitwise NOT is nothing but simply the one\u2019s complement of a number. Lets take an example. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"N = 5 = (101)\n~N = ~5 = ~(101) = (010) = 2\n")),(0,o.kt)("h3",{id:"and---"},"AND ( & ):"),(0,o.kt)("p",null,"Bitwise AND is a binary operator that operates on two equal-length bit patterns. If both bits in the compared position of the bit patterns are 1, the bit in the resulting bit pattern is 1, otherwise 0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A = 5 = (101)\nB = 3 = (011)\nA & B = (101) & (011) = (001) = 1\n")),(0,o.kt)("h3",{id:"or---"},"OR ( | ):"),(0,o.kt)("p",null,"Bitwise OR is also a binary operator that operates on two equal-length bit patterns, similar to bitwise AND. If both bits in the compared position of the bit patterns are 0, the bit in the resulting bit pattern is 0, otherwise 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A = 5 = (101)\nB = 3 = (011)2\nA | B = (101)2 | (011)2 = (111)2 = 7\n")),(0,o.kt)("h3",{id:"xor---"},"XOR ( ^ ):"),(0,o.kt)("p",null,"Bitwise XOR also takes two equal-length bit patterns. If both bits in the compared position of the bit patterns are 0 or 1, the bit in the resulting bit pattern is 0, otherwise 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A = 5 = (101)\nB = 3 = (011)\nA ^ B = (101) ^ (011) = (110) = 6\n")),(0,o.kt)("h3",{id:"left-shift---"},"Left Shift ( << ):"),(0,o.kt)("p",null,"Left shift operator is a binary operator which shift the some number of bits, in the given bit pattern, to the left and append 0 at the end. Left shift is equivalent to multiplying the bit pattern with 2k ( if we are shifting k bits )."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1 << 1 = 2 = 21\n1 << 2 = 4 = 22 1 << 3 = 8 = 23\n1 << 4 = 16 = 24 \n\u2026\n1 << n = 2n\n")),(0,o.kt)("h3",{id:"right-shift---"},"Right Shift ( >> ):"),(0,o.kt)("p",null,"Right shift operator is a binary operator which shift the some number of bits, in the given bit pattern, to the right and append 1 at the end. Right shift is equivalent to dividing the bit pattern with 2k ( if we are shifting k bits )."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"4 >> 1 = 2\n6 >> 1 = 3\n5 >> 1 = 2\n16 >> 4 = 1\n")))}h.isMDXComponent=!0}}]);