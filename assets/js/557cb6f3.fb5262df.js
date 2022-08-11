"use strict";(self.webpackChunkwoof=self.webpackChunkwoof||[]).push([[556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||s;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<s;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),s=n(6010),l=n(2389),o=n(7392),i=n(7094),d=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:g,groupId:b,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[x,j]=(0,r.useState)(N),L=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=b){const e=v[b];null!=e&&e!==x&&y.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=L.indexOf(t),a=y[n].value;a!==x&&(T(t),j(a),null!=b&&w(b,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=L.indexOf(e.currentTarget)+1;n=null!=(a=L[t])?a:L[0];break}case"ArrowLeft":{var r;const t=L.indexOf(e.currentTarget)-1;n=null!=(r=L[t])?r:L[L.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>L.push(e),onKeyDown:S,onFocus:C,onClick:C},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),s=n(5488),l=n(5162);const o={description:"Docusaurus Sidebar items",tags:["docusaurus","documentation","tool"]},i="Sidebar Items",d={unversionedId:"docusaurus/docs/sidebar/items",id:"docusaurus/docs/sidebar/items",title:"Sidebar Items",description:"Docusaurus Sidebar items",source:"@site/docs/docusaurus/docs/sidebar/items.mdx",sourceDirName:"docusaurus/docs/sidebar",slug:"/docusaurus/docs/sidebar/items",permalink:"/woof/docs/docusaurus/docs/sidebar/items",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docusaurus/docs/sidebar/items.mdx",tags:[{label:"docusaurus",permalink:"/woof/docs/tags/docusaurus"},{label:"documentation",permalink:"/woof/docs/tags/documentation"},{label:"tool",permalink:"/woof/docs/tags/tool"}],version:"current",frontMatter:{description:"Docusaurus Sidebar items",tags:["docusaurus","documentation","tool"]},sidebar:"tutorialSidebar",previous:{title:"Autogenerated",permalink:"/woof/docs/docusaurus/docs/sidebar/autogenerated"},next:{title:"Installation",permalink:"/woof/docs/docusaurus/installation"}},u={},c=[{value:"Type of sidebar",id:"type-of-sidebar",level:2},{value:"Doc: link to a doc",id:"doc",level:2},{value:"Example",id:"example",level:3},{value:"Link: link to any page",id:"link",level:2},{value:"HTML: render custom markup",id:"html",level:2},{value:"Category: create a hierarchy",id:"category",level:2},{value:"Example",id:"example-1",level:3},{value:"Category links",id:"category-links",level:3},{value:"Generated index page",id:"generated-index-page",level:4},{value:"Doc link",id:"doc-link",level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",level:4},{value:"Collapsible categories",id:"collapsible-categories",level:4},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:4}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sidebar-items"},"Sidebar Items"),(0,r.kt)("h2",{id:"type-of-sidebar"},"Type of sidebar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#doc"},"Doc")),": link to a doc page, associating it with the sidebar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#link"},"Link")),": link to any internal or external page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#html"},"HTML")),": renders pure HTML in the item's position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#category"},"Category")),": creates a dropdown of sidebar items"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"./autogenerated"},"Autogenerated")),": generate a sidebar slice automatically"),(0,r.kt)("li",{parentName:"ul"},"*","Ref: link to a doc page, without making the item take part in navigation generation")),(0,r.kt)("h2",{id:"doc"},"Doc: link to a doc"),(0,r.kt)("p",null,"Use the doc type to link to a doc page and assign that doc to a sidebar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: "doc";\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n      customProps?: Record<string, unknown>; // Custom props\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n')),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  mySidebar: [\n    // Normal syntax:\n    {\n      type: "doc",\n      id: "doc1", // document ID\n      label: "Getting started", // sidebar label\n    },\n\n    // Shorthand syntax:\n    "doc2", // document ID\n  ],\n};\n')),(0,r.kt)("p",null,"An item with type doc can be simply a string representing its ID:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"longHand",label:"Longhand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  sidebar: [\n    {\n      type: "doc",\n      id: "myDoc",\n    },\n  ],\n};\n'))),(0,r.kt)(l.Z,{value:"shorthand",label:"Shorthand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  sidebar: ["myDoc"],\n};\n')))),(0,r.kt)("p",null,"If you use the doc shorthand or ",(0,r.kt)("a",{parentName:"p",href:"./autogenerated"},"autogenerated sidebar"),"\nyou would lose the ability to customize the sidebar ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," through item definition."),(0,r.kt)("p",null,"You can, however, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_label")," Markdown front matter within that doc, which has higher precedence over the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," key in the sidebar item.\nSimilarly, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_custom_props")," to declare custom metadata for a doc page."),(0,r.kt)("h2",{id:"link"},"Link: link to any page"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," type to link to any page (internal or external) that is not a doc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'type SidebarItemLink = {\n  type: "link";\n  label: string;\n  href: string;\n  className?: string;\n};\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  myLinksSidebar: [\n    // External link\n    {\n      type: "link",\n      label: "Facebook", // The link label\n      href: "https://facebook.com", // The external URL\n    },\n\n    // Internal link\n    {\n      type: "link",\n      label: "Home", // The link label\n      href: "/", // The internal path\n    },\n  ],\n};\n')),(0,r.kt)("h2",{id:"html"},"HTML: render custom markup"),(0,r.kt)("p",null,"Use the html type to render ",(0,r.kt)("span",{style:{color:"var(--secondary-font-color)"}}," custom HTML sidebar ")," within the item's ",(0,r.kt)("inlineCode",{parentName:"p"},"<li>")," tag."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"html value will be rendered inside ",(0,r.kt)("inlineCode",{parentName:"p"},"li")," tag")),(0,r.kt)("p",null,"This can be useful for inserting custom items such as dividers, section titles, ads, and images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'type SidebarItemHtml = {\n  type: "html";\n  value: string;\n  defaultStyle?: boolean; // Use default menu item styles\n  className?: string;\n};\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  myHtmlSidebar: [\n    {\n      type: "html",\n      value: \'<img src="sponsor.png" alt="Sponsor" />\', // The HTML to be rendered\n      defaultStyle: true, // Use the default menu item styling\n    },\n  ],\n};\n')),(0,r.kt)("h2",{id:"category"},"Category: create a hierarchy"),(0,r.kt)("p",null,"Use the category type to create a hierarchy ( expandable group ) of sidebar items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'type SidebarItemCategory = {\n  type: "category";\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n')),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  docs: [\n    {\n      type: "category",\n      label: "Guides",\n      collapsible: true,\n      collapsed: false,\n      items: [\n        "creating-pages",\n        {\n          type: "category",\n          label: "Docs",\n          items: ["introduction", "sidebar", "markdown-features", "versioning"],\n        },\n      ],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"A category item can be represented by an object whose ",(0,r.kt)("span",{style:{color:"var(--secondary-font-color)"}}," key is its label "),", and the ",(0,r.kt)("span",{style:{color:"var(--secondary-font-color)"}}," value is an array of subitems "),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"longhand",label:"Longhand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  sidebar: [\n    {\n      type: "category",\n      label: "Getting started",\n      items: ["doc1", "doc2"],\n    },\n  ],\n};\n'))),(0,r.kt)(l.Z,{value:"shorthand",label:"Shorthand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  sidebar: [\n    {\n      "Getting started": ["doc1", "doc2"],\n    },\n  ],\n};\n')))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"lh",label:"Longhand",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  mySidebar: [\n    {\n      type: "category",\n      label: "Getting Started",\n      items: [\n        {\n          type: "doc",\n          id: "doc1",\n        },\n      ],\n    },\n\n    {\n      type: "category",\n      label: "Docusaurus",\n      items: [\n        {\n          type: "doc",\n          id: "doc2",\n        },\n        {\n          type: "doc",\n          id: "doc3",\n        },\n      ],\n    },\n\n    {\n      type: "link",\n      label: "Learn more",\n      href: "https://example.com",\n    },\n  ],\n};\n'))),(0,r.kt)(l.Z,{value:"sim",label:"Simplified",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      "Getting started": ["doc1"],\n    },\n    {\n      Docusaurus: ["doc2", "doc3"],\n    },\n    // highlight-end\n    {\n      type: "link",\n      label: "Learn more",\n      href: "https://example.com",\n    },\n  ],\n};\n'))),(0,r.kt)(l.Z,{value:"msim",label:"Further Simplified",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      "Getting started": ["doc1"],\n      Docusaurus: ["doc2", "doc3"],\n    },\n    // highlight-end\n    {\n      type: "link",\n      label: "Learn more",\n      href: "https://example.com",\n    },\n  ],\n};\n')))),(0,r.kt)("p",null,"Note how the two consecutive category ( in Further Simplified tab ) shorthands are ",(0,r.kt)("span",{style:{color:"var(--secondary-font-color)"}}," compressed into one object with two entries "),"."),(0,r.kt)("p",null,"This syntax generates a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("span",{style:{color:"var(--primary-font-color)"}}," sidebar slice ")),":"),(0,r.kt)("p",null,"you shouldn't see that object as one bulk item\u2014this object is unwrapped,\nwith each entry becoming a separate item, and they ",(0,r.kt)("span",{style:{color:"var(--secondary-font-color)"}}," spliced together with the rest of the items ")," to form the final sidebar level."),(0,r.kt)("p",null,"Sidebar slices are also important when discussing ",(0,r.kt)("a",{parentName:"p",href:"./autogenerated"},"autogenerated sidebars"),"."),(0,r.kt)("p",null,"You can also omit that enclosing array wherever you have an array of items that is reduced to ",(0,r.kt)("span",{style:{color:"var(--primary-font-color)"}}," one ")," ",(0,r.kt)("span",{style:{color:"var(--secondary-font-color)"}}," category shorthand "),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  sidebar: [\n    {\n      "Getting started": ["doc1"],\n      // highlight-start\n      Docusaurus: [\n        {\n          "Basic guides": ["doc2", "doc3"],\n          "Advanced guides": ["doc4", "doc5"],\n        },\n      ],\n      // highlight-end\n    },\n  ],\n};\n'))),(0,r.kt)(l.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  sidebar: {\n    "Getting started": ["doc1"],\n    // highlight-start\n    Docusaurus: {\n      "Basic guides": ["doc2", "doc3"],\n      "Advanced guides": ["doc4", "doc5"],\n    },\n    // highlight-end\n  },\n};\n')))),(0,r.kt)("h3",{id:"category-links"},"Category links"),(0,r.kt)("p",null,"With category links, ",(0,r.kt)("span",{style:{color:"var(--secondary-font-color)"}}," clicking on a category can navigate you to another page "),"."),(0,r.kt)("h4",{id:"generated-index-page"},"Generated index page"),(0,r.kt)("p",null,"You can auto-generate an index page that displays all the direct children of this category.\nThe slug allows you to customize the generated page's route, which defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/category/[categoryName]"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null," Example "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  docs: [\n    {\n      type: "category",\n      label: "Guides",\n      // highlight-start\n      link: {\n        type: "generated-index",\n        title: "Docusaurus Guides",\n        description: "Learn about the most important Docusaurus concepts!",\n        slug: "/category/docusaurus-guides",\n        keywords: ["guides"],\n        image: "/img/docusaurus.png",\n      },\n      // highlight-end\n      items: ["pages", "docs", "blog", "search"],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"result :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6060).Z,width:"1374",height:"1218"}))),(0,r.kt)("h4",{id:"doc-link"},"Doc link"),(0,r.kt)("p",null,"A category can link to an existing document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  docs: [\n    {\n      type: "category",\n      label: "Guides",\n      // highlight-next-line\n      link: { type: "doc", id: "introduction" },\n      items: ["pages", "docs", "blog", "search"],\n    },\n  ],\n};\n')),(0,r.kt)("h4",{id:"embedding-generated-index-in-doc-page"},"Embedding generated index in doc page"),(0,r.kt)("p",null,"You can embed the ",(0,r.kt)("span",{style:{color:"var(--secondary-font-color)"}}," generated cards ")," list in a normal doc page as well, as long as the doc is ",(0,r.kt)("span",{style:{color:"var(--primary-font-color)"}}," used as a category index page "),"."),(0,r.kt)("p",null,"To do so, you need to use the DocCardList component, paired with the useCurrentSidebarCategory hook."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=a-category-index-page.md showLineNumbers",title:"a-category-index-page.md",showLineNumbers:!0},"import DocCardList from '@theme/DocCardList';\nimport {useCurrentSidebarCategory} from '@docusaurus/theme-common';\n\nIn this section, we will introduce the following concepts:\n\n<DocCardList items={useCurrentSidebarCategory().items}/>\n"))),(0,r.kt)(l.Z,{value:"result",label:"Result",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9465).Z,width:"1063",height:"919"})))),(0,r.kt)("h4",{id:"collapsible-categories"},"Collapsible categories"),(0,r.kt)("p",null,"We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsible: false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  docs: [\n    {\n      type: "category",\n      label: "Guides",\n      items: [\n        "creating-pages",\n        {\n          type: "category",\n          // highlight-next-line\n          collapsible: false,\n          label: "Docs",\n          items: ["introduction", "sidebar", "markdown-features", "versioning"],\n        },\n      ],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"To make all categories non-collapsible by default, set the sidebarCollapsible option in plugin-content-docs to false:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=docusaurus.config.js showLineNumbers",title:"docusaurus.config.js",showLineNumbers:!0},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The option in sidebars.js takes precedence over plugin configuration")),(0,r.kt)("h4",{id:"expanded-categories-by-default"},"Expanded categories by default"),(0,r.kt)("p",null,"Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set collapsed to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  docs: {\n    Guides: [\n      "creating-pages",\n      {\n        type: "category",\n        label: "Docs",\n        // highlight-next-line\n        collapsed: false,\n        items: ["markdown-features", "sidebar", "versioning"],\n      },\n    ],\n  },\n};\n')),(0,r.kt)("p",null,"global config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=docusaurus.config.js  showLineNumbers",title:"docusaurus.config.js","":!0,showLineNumbers:!0},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n')),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar/items"},"https://docusaurus.io/docs/sidebar/items"))))}m.isMDXComponent=!0},9465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/embeded-generated-index-fe9e393b004e98662144ac64b679ebf8.png"},6060:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generated-index-page-8893687bf06e27587126c98cd8344ef3.png"}}]);