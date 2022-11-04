"use strict";(self.webpackChunkwoof=self.webpackChunkwoof||[]).push([[6081],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return o?r.createElement(f,l(l({ref:t},u),{},{components:o})):r.createElement(f,l({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=o[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6115:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const a={description:"How to link to different markdown files or different url?",sidebar_position:3e3,tags:["docusaurus"]},l="Markdown links",i={unversionedId:"framework/docusaurus/markdown-features/markdown-links",id:"framework/docusaurus/markdown-features/markdown-links",title:"Markdown links",description:"How to link to different markdown files or different url?",source:"@site/docs/framework/docusaurus/markdown-features/markdown-links.mdx",sourceDirName:"framework/docusaurus/markdown-features",slug:"/framework/docusaurus/markdown-features/markdown-links",permalink:"/woof/docs/framework/docusaurus/markdown-features/markdown-links",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/docusaurus/markdown-features/markdown-links.mdx",tags:[{label:"docusaurus",permalink:"/woof/docs/tags/docusaurus"}],version:"current",sidebarPosition:3e3,frontMatter:{description:"How to link to different markdown files or different url?",sidebar_position:3e3,tags:["docusaurus"]},sidebar:"default",previous:{title:"Heading and Table of contents",permalink:"/woof/docs/framework/docusaurus/markdown-features/heading-and-toc"},next:{title:"Assets",permalink:"/woof/docs/framework/docusaurus/markdown-features/assets"}},s={},d=[{value:"URL path",id:"url-path",level:2},{value:"File path",id:"file-path",level:2},{value:'<Color color="var(--not-require-but-good-to-know-font-color)"> Benefits of using file path </Color>',id:"-benefits-of-using-file-path-",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=u("Color"),p=u("Admonition"),m={toc:d};function f(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"markdown-links"},"Markdown links"),(0,n.kt)("p",null,"There are two ways of adding a link to another page through"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"URL path"),(0,n.kt)("li",{parentName:"ul"},"file path.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"- [URL path to another document](./installation)\n- [file path to another document](./installation.md)\n")),(0,n.kt)("h2",{id:"url-path"},"URL path"),(0,n.kt)("p",null,"URL paths are ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," unprocessed ")," by Docusaurus, and you can see them as directly\nrendering to ",(0,n.kt)("inlineCode",{parentName:"p"},'<a href="./installation">'),","),(0,n.kt)(p,{type:"note",title:"note",mdxType:"Admonition"},(0,n.kt)("p",null,"URL paths will be resolved according to the page's URL location, rather than its file-system location.")),(0,n.kt)("h2",{id:"file-path"},"File path"),(0,n.kt)("p",null,"If you want to reference another Markdown file ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," included by ")," ",(0,n.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," the same plugin "),",\nyou could use the ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," relative path ")," of the document you want to link to."),(0,n.kt)("p",null,"Docusaurus' Markdown loader will ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," convert ")," the ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," file path "),"\nto the target ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," file's URL path ")," (and hence remove the .md extension)."),(0,n.kt)("p",null,"For example, if you are in ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/folder/doc1.md")," and you want to reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docs/folder/doc2.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docs/folder/subfolder/doc3.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"docs/otherFolder/doc4.md"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=docs/floder/doc1.md showLineNumbers",title:"docs/floder/doc1.md",showLineNumbers:!0},"I am referencing a [document](doc2.md).\n\nReference to another [document in a subfolder](subfolder/doc3.md).\n\n[Relative document](../otherFolder/doc4.md) referencing works as well.\n")),(0,n.kt)("p",null,"Relative file paths are resolved against the current file's directory."),(0,n.kt)("p",null,"Absolute file paths, on the other hand, are resolved ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," relative to the content root "),",\nusually ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"blog/"),", or localized ones like ",(0,n.kt)("inlineCode",{parentName:"p"},"i18n/zh-Hans/plugin-content-docs/current"),"."),(0,n.kt)(p,{type:"note",title:"note",mdxType:"Admonition"},(0,n.kt)("p",null,"Absolute file paths can also be relative to the site directory."),(0,n.kt)("p",null,"However, beware that links that begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs/")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"/blog/")," are not portable as you would need to manually update them if you create new doc versions or localize them.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"You can write [links](/otherFolder/doc4.md) relative to the content root (`/docs/`).\n\nYou can also write [links](/docs/otherFolder/doc4.md) relative to the site directory, but it's not recommended.\n")),(0,n.kt)(p,{type:"danger",title:"danger",mdxType:"Admonition"},(0,n.kt)("p",null,"Markdown file references only work when the source and target files are processed by the same plugin instance.(eg. docs plugin , blogs plugin)"),(0,n.kt)("p",null,"This is a technical limitation of our Markdown processing architecture and will be fixed in the future.")),(0,n.kt)(p,{type:"danger",title:"danger",mdxType:"Admonition"},(0,n.kt)("p",null,"If you are linking files between plugins (e.g. linking to a doc page from a blog post), you have to use URL links.")),(0,n.kt)("h3",{id:"-benefits-of-using-file-path-"},(0,n.kt)(c,{color:"var(--not-require-but-good-to-know-font-color)",mdxType:"Color"}," Benefits of using file path ")),(0,n.kt)("p",null,"Using relative file paths (with ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," extensions) instead of relative URL links provides the following benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Links will keep working on the GitHub interface and many Markdown editors"),(0,n.kt)("li",{parentName:"ul"},"You can customize the files' slugs without having to update all the links",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," //","\\","\\"," "))," update markdown url without change its references in other files"))),(0,n.kt)("li",{parentName:"ul"},"Moving files around the folders can be tracked by your editor, and some editors may automatically update file links"),(0,n.kt)("li",{parentName:"ul"},"A versioned doc will link to another doc of the exact same version"),(0,n.kt)("li",{parentName:"ul"},"Relative URL links are very likely to break if you update the ",(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/docusaurus-config#trailingSlash"},"trailingSlash config"))),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"sources"},"Sources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/links"},"https://docusaurus.io/docs/markdown-features/links"))))}f.isMDXComponent=!0}}]);