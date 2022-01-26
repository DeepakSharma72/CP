"use strict";(self.webpackChunkcp=self.webpackChunkcp||[]).push([[877],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),o=n(2389),s=n(9443);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(3616),u=n(6010),c="tabItem_vU9c";function m(e){var t,n,o,s=e.lazy,m=e.block,p=e.defaultValue,d=e.values,f=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),N=k.tabGroupChoices,w=k.setTabGroupChoices,E=(0,r.useState)(y),O=E[0],C=E[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var M=N[f];null!=M&&M!==O&&b.some((function(e){return e.value===M}))&&C(M)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==O&&(x(t),C(a),null!=f&&w(f,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},h)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:j,onClick:j},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},8811:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=n(6396),i=n(8215),l=["components"],u={sidebar_position:2},c="Not So Easy Math",m={unversionedId:"Coding Blocks/Bit Magic/NotSoEasyMath",id:"Coding Blocks/Bit Magic/NotSoEasyMath",title:"Not So Easy Math",description:"Problem statement",source:"@site/docs/Coding Blocks/Bit Magic/02-NotSoEasyMath.md",sourceDirName:"Coding Blocks/Bit Magic",slug:"/Coding Blocks/Bit Magic/NotSoEasyMath",permalink:"/CP/docs/Coding Blocks/Bit Magic/NotSoEasyMath",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Coding Blocks/Bit Magic/02-NotSoEasyMath.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Length of the Longest Consecutive 1s in Binary Representation",permalink:"/CP/docs/Coding Blocks/Bit Magic/longest_ones_in_binary_representation"},next:{title:"Create a Page",permalink:"/CP/docs/tutorial-basics/create-a-page"}},p=[{value:"Problem statement",id:"problem-statement",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"not-so-easy-math"},"Not So Easy Math"),(0,o.kt)("h2",{id:"problem-statement"},"Problem statement"),(0,o.kt)("p",null,"After the release of Avengers, Ironman and Thor got into a fight and Ironman challenged Thor to find out the number of numbers between 1 and n which are divisible by any of the prime numbers less than 20. Ironman being great at maths quickly answered the question but then Thor asked him to write a program for it. Ironman however found it quite difficult as he did not wanted to write so many lines of code. He knows that you are smart and can code this up easily. Can you do it?"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Bruteforce using bitmask.\nTime complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("msup",{parentName:"mrow"},(0,o.kt)("mn",{parentName:"msup"},"2"),(0,o.kt)("mn",{parentName:"msup"},"8")),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(2^8)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1.064108em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord"},"2"),(0,o.kt)("span",{parentName:"span",className:"msupsub"},(0,o.kt)("span",{parentName:"span",className:"vlist-t"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"8")))))))),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\nusing namespace std;\n#define lli long long int\n\nlli prime[8] = {2, 3, 5, 7, 11, 13, 17, 19};\n\nint main() {\n    int t;\n    cin >> t;\n    while (t--) {\n        lli n;\n        cin >> n;\n        lli ans = 0;\n        for (int i = 1; i < (1 << 8); i++) {\n            int setbit = __builtin_popcount(i);\n            int deno = 1;\n            for (int j = 0; j < 8; j++) {\n                int mask = 1 << j;\n                if (mask & i) {\n                    deno *= prime[j];\n                }\n            }\n            if (setbit & 1) {\n                ans += n / deno;\n            } else {\n                ans -= n / deno;\n            }\n        }\n        cout << ans << '\\n';\n    }\n}\n")))))}f.isMDXComponent=!0}}]);