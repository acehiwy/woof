"use strict";(self.webpackChunkwoof=self.webpackChunkwoof||[]).push([[3402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,b=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(b,r(r({ref:t},p),{},{components:n})):a.createElement(b,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={description:"How to multiple sidebar work in Docusaurus",sidebar_position:3e3,tags:["docusaurus"]},r="Multiple sidebars",s={unversionedId:"framework/docusaurus/docs/sidebar/multiple-sidebars",id:"framework/docusaurus/docs/sidebar/multiple-sidebars",title:"Multiple sidebars",description:"How to multiple sidebar work in Docusaurus",source:"@site/docs/framework/docusaurus/docs/sidebar/multiple-sidebars.mdx",sourceDirName:"framework/docusaurus/docs/sidebar",slug:"/framework/docusaurus/docs/sidebar/multiple-sidebars",permalink:"/woof/docs/framework/docusaurus/docs/sidebar/multiple-sidebars",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/docusaurus/docs/sidebar/multiple-sidebars.mdx",tags:[{label:"docusaurus",permalink:"/woof/docs/tags/docusaurus"}],version:"current",sidebarPosition:3e3,frontMatter:{description:"How to multiple sidebar work in Docusaurus",sidebar_position:3e3,tags:["docusaurus"]},sidebar:"default",previous:{title:"Autogenerated",permalink:"/woof/docs/framework/docusaurus/docs/sidebar/autogenerated"},next:{title:"Pages",permalink:"/woof/docs/framework/docusaurus/pages"}},l={},d=[{value:"Understanding sidebar association",id:"understanding-sidebar-association",level:2},{value:"Forcibly display specific sidebar",id:"forcibly-display-specific-sidebar",level:3},{value:"Generating pagination",id:"generating-pagination",level:2},{value:"The <code>ref</code> item",id:"the-ref-item",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=p("Color"),u=p("Tabs"),m=p("TabItem"),b=p("Admonition"),k={toc:d};function g(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multiple-sidebars"},"Multiple sidebars"),(0,i.kt)("p",null,"You can create a sidebar for each ",(0,i.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," set of Markdown ")," files that you want to ",(0,i.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," group together "),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example results "),(0,i.kt)(u,{mdxType:"Tabs"},(0,i.kt)(m,{value:"docsPageSidebar",label:"Docs Page Sidebar",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6841).Z,width:"957",height:"1258"}))),(0,i.kt)(m,{value:"apiPageSidebar",label:"Api Page Sidebar",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(631).Z,width:"958",height:"1232"}))))),(0,i.kt)("p",null,"Consider this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebar.js  showLineNumbers",title:"sidebar.js","":!0,showLineNumbers:!0},'module.exports = {\n  tutorialSidebar: {\n    "Category A": ["doc1", "doc2"],\n  },\n  apiSidebar: ["doc3", "doc4"],\n};\n')),(0,i.kt)("p",null,"When browsing ",(0,i.kt)("inlineCode",{parentName:"p"},"doc1")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"doc2"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorialSidebar")," will be displayed."),(0,i.kt)("p",null,"When browsing ",(0,i.kt)("inlineCode",{parentName:"p"},"doc3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"doc4"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiSidebar")," will be displayed."),(0,i.kt)("h2",{id:"understanding-sidebar-association"},"Understanding sidebar association"),(0,i.kt)("p",null,"Following the example above, if a commonDoc is included in both sidebars:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebar.js  showLineNumbers",title:"sidebar.js","":!0,showLineNumbers:!0},'module.exports = {\n  tutorialSidebar: {\n    "Category A": ["doc1", "doc2", "commonDoc"],\n  },\n  apiSidebar: ["doc3", "doc4", "commonDoc"],\n};\n')),(0,i.kt)("p",null,"How does Docusaurus know which sidebar to display when browsing ",(0,i.kt)("inlineCode",{parentName:"p"},"commonDoc"),"? Answer: it doesn't, and we ",(0,i.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," don't guarantee which sidebar it will pick "),"."),(0,i.kt)("p",null,"When you add doc Y to sidebar X, it creates a ",(0,i.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," two-way binding "),"\nsidebar X contains a link to doc Y, and when browsing doc Y, sidebar X will be displayed."),(0,i.kt)(c,{color:"var(--not-require-but-good-to-know-font-color)",mdxType:"Color"},(0,i.kt)("p",null,"But sometimes, we want to break either implicit binding:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How do I generate a link to doc Y in sidebar X without making sidebar X displayed on Y?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, when I include doc Y in multiple sidebars as in the example above, and I want to explicitly tell Docusaurus to display one sidebar?"))),(0,i.kt)("li",{parentName:"ul"},"How do I make sidebar X displayed when browsing doc Y, but sidebar X shouldn't contain the link to Y?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'For example, when Y is a "doc home page" and the sidebar is purely used for navigation?'))))),(0,i.kt)("h3",{id:"forcibly-display-specific-sidebar"},"Forcibly display specific sidebar"),(0,i.kt)("p",null,"Front matter option ",(0,i.kt)("inlineCode",{parentName:"p"},"displayed_sidebar")," will ",(0,i.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," forcibly ")," set the sidebar association."),(0,i.kt)("p",null,"For the same example, you can still use doc shorthands without any special configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebar.js showLineNumbers",title:"sidebar.js",showLineNumbers:!0},'module.exports = {\n  tutorialSidebar: {\n    "Category A": ["doc1", "doc2"],\n  },\n  apiSidebar: ["doc3", "doc4"],\n};\n')),(0,i.kt)("p",null,"And then add a front matter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=commonDoc.md showLineNumbers",title:"commonDoc.md",showLineNumbers:!0},"---\ndisplayed_sidebar: apiSidebar\n---\n")),(0,i.kt)("p",null,"Which explicitly tells Docusaurus to display ",(0,i.kt)("inlineCode",{parentName:"p"},"apiSidebar")," when browsing ",(0,i.kt)("inlineCode",{parentName:"p"},"commonDoc"),"."),(0,i.kt)("p",null,"Using the same method, you can make sidebar X, which doesn't contain doc Y, appear on doc Y:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=foo.md  showLineNumbers",title:"foo.md","":!0,showLineNumbers:!0},"---\ndisplayed_sidebar: tutorialSidebar\n---\n")),(0,i.kt)("p",null,"Even when ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorialSidebar")," doesn't contain a link to ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", it will still be displayed when viewing ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,i.kt)("h2",{id:"generating-pagination"},"Generating pagination"),(0,i.kt)("p",null,"Docusaurus uses the sidebar to generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"previous")," pagination links at the bottom of each doc page.\nIt strictly uses the sidebar that is displayed: if no sidebar is associated, it doesn't generate pagination either."),(0,i.kt)("p",null,"However, the docs linked as ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"previous")," are not guaranteed to display the same sidebar:\nthey are included in this sidebar, but in their front matter, they may have a different ",(0,i.kt)("inlineCode",{parentName:"p"},"displayed_sidebar"),"."),(0,i.kt)(c,{color:"var(--not-nesary-for-now-future-font-color)",mdxType:"Color"},(0,i.kt)("p",null,"If a sidebar is displayed by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"displayed_sidebar")," front matter, and this sidebar doesn't contain the doc itself, no pagination is displayed.")),(0,i.kt)("p",null,"You can customize pagination with front matter ",(0,i.kt)("inlineCode",{parentName:"p"},"pagination_next")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pagination_prev"),". Consider this sidebar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebar.js showLineNumbers",title:"sidebar.js",showLineNumbers:!0},'module.exports = {\n  tutorial: [\n    "introduction",\n    {\n      installation: ["windows", "linux", "macos"],\n    },\n    "getting-started",\n  ],\n};\n')),(0,i.kt)("p",null,"The pagination next link on ",(0,i.kt)("inlineCode",{parentName:"p"},"windows")," points to ",(0,i.kt)("inlineCode",{parentName:"p"},"linux"),", but that doesn't make sense:\nyou would want readers to proceed to ",(0,i.kt)("inlineCode",{parentName:"p"},"getting started")," after ",(0,i.kt)("inlineCode",{parentName:"p"},"installation"),"."),(0,i.kt)("p",null,"In this case, you can set the pagination manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=windows.md showLineNumbers",title:"windows.md",showLineNumbers:!0},"---\npagination_next: getting-started\n---\n\n# Installation on Windows\n")),(0,i.kt)(b,{type:"note",title:"note",mdxType:"Admonition"},(0,i.kt)("p",null,"You can also disable displaying a pagination link with ",(0,i.kt)("inlineCode",{parentName:"p"},"pagination_next: null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pagination_prev: null"),".")),(0,i.kt)(b,{type:"note",title:"note",mdxType:"Admonition"},(0,i.kt)("p",null,"The pagination label by default is the ",(0,i.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," sidebar label "),".\nYou can use the ",(0,i.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," front matter ")," ",(0,i.kt)("inlineCode",{parentName:"p"},"pagination_label")," to customize how this doc appears in the pagination.")),(0,i.kt)("h2",{id:"the-ref-item"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"ref")," item"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," type is identical to the ",(0,i.kt)("inlineCode",{parentName:"p"},"doc")," type in every way, except that it ",(0,i.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," doesn't ")," participate in ",(0,i.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," generating navigation metadata "),". It only registers itself as a link."),(0,i.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"},(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"#generating-pagination"},"generating pagination")," and ",(0,i.kt)("a",{parentName:"p",href:"#understanding-sidebar-association"},"displaying sidebar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," items are completely ",(0,i.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," ignored. "))),(0,i.kt)("p",null,"It is particularly useful where you wish to link to the same document from multiple sidebars. The document only belongs to one sidebar (the one where it's registered as type: 'doc' or from an autogenerated directory), but its link will appear in all sidebars that it's registered in."),(0,i.kt)("p",null,"Consider this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebar.js  showLineNumbers",title:"sidebar.js","":!0,showLineNumbers:!0},"module.exports = {\n  tutorialSidebar: {\n    'Category A': [\n      'doc1',\n      'doc2',\n      // highlight-next-line\n      {type: 'ref', id: 'commonDoc'},\n      'doc5',\n    ],\n  },\n  apiSidebar: ['doc3', 'doc4', 'commonDoc'],\n};\n}\n")),(0,i.kt)("p",null,"You can think of the ref type as the equivalent to doing the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setting ",(0,i.kt)("inlineCode",{parentName:"li"},"displayed_sidebar : tutorialSidebar")," for commonDoc (",(0,i.kt)("inlineCode",{parentName:"li"},"ref")," is ignored in sidebar association)"),(0,i.kt)("li",{parentName:"ul"},"Setting ",(0,i.kt)("inlineCode",{parentName:"li"},"pagination_next: doc5")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"doc2")," and setting ",(0,i.kt)("inlineCode",{parentName:"li"},"pagination_prev: doc2")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"doc5")," (",(0,i.kt)("inlineCode",{parentName:"li"},"ref")," is ignored in pagination generation)")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"sources"},"Sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar/multiple-sidebars"},"https://docusaurus.io/docs/sidebar/multiple-sidebars"))))}g.isMDXComponent=!0},631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sidebar-api-page-9ae9452d64e3dd57a8d19ced8cf5bb1d.png"},6841:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sidebar-docs-page-c8dffd4dbeca1952ecd0dcd65eb8273b.png"}}]);