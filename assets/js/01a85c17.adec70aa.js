"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[209],{

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "in": () => (/* reexport */ BlogPostProvider),
  OU: () => (/* reexport */ BlogSidebarItemList),
  Ki: () => (/* reexport */ groupBlogSidebarItemsByYear),
  kJ: () => (/* reexport */ useBlogListPageStructuredData),
  x: () => (/* reexport */ useBlogMetadata),
  e7: () => (/* reexport */ useBlogPost),
  J_: () => (/* reexport */ useBlogPostStructuredData),
  Gx: () => (/* reexport */ useVisibleBlogSidebarItems)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(6672);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(6453);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
var useRouteContext = __webpack_require__(1819);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
;// ./node_modules/.pnpm/@docusaurus+plugin-content-blog@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+rea_c5f1ec32c69a6d6b69b1ffdc7e83d9e9/node_modules/@docusaurus/plugin-content-blog/lib/client/contexts.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBlogMetadata(){const routeContext=(0,useRouteContext/* default */.A)();const blogMetadata=routeContext?.data?.blogMetadata;if(!blogMetadata){throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");}return blogMetadata;}const Context=/*#__PURE__*/react.createContext(null);/**
 * Note: we don't use `PropBlogPostContent` as context value on purpose.
 * Metadata is currently stored inside the MDX component, but we may want to
 * change that in the future.
 */function useContextValue({content,isBlogPostPage}){return (0,react.useMemo)(()=>({metadata:content.metadata,frontMatter:content.frontMatter,assets:content.assets,toc:content.toc,isBlogPostPage}),[content,isBlogPostPage]);}/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the blog post to the children tree.
 */function BlogPostProvider({children,content,isBlogPostPage=false}){const contextValue=useContextValue({content,isBlogPostPage});return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}/**
 * Returns the data of the currently browsed blog post. Gives access to
 * front matter, metadata, TOC, etc.
 * When swizzling a low-level component (e.g. the "Edit this page" link)
 * and you need some extra metadata, you don't have to drill the props
 * all the way through the component tree: simply use this hook instead.
 */function useBlogPost(){const blogPost=(0,react.useContext)(Context);if(blogPost===null){throw new reactUtils/* ReactContextError */.dV('BlogPostProvider');}return blogPost;}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(1201);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4658);
;// ./node_modules/.pnpm/@docusaurus+plugin-content-blog@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+rea_c5f1ec32c69a6d6b69b1ffdc7e83d9e9/node_modules/@docusaurus/plugin-content-blog/lib/client/structuredDataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const convertDate=dateMs=>new Date(dateMs).toISOString();function getBlogPost(blogPostContent,siteConfig,withBaseUrl){const{assets,frontMatter,metadata}=blogPostContent;const{date,title,description,lastUpdatedAt}=metadata;const image=assets.image??frontMatter.image;const keywords=frontMatter.keywords??[];const blogUrl=`${siteConfig.url}${metadata.permalink}`;const dateModified=lastUpdatedAt?convertDate(lastUpdatedAt):undefined;return{'@type':'BlogPosting','@id':blogUrl,mainEntityOfPage:blogUrl,url:blogUrl,headline:title,name:title,description,datePublished:date,...(dateModified?{dateModified}:{}),...getAuthor(metadata.authors),...getImage(image,withBaseUrl,title),...(keywords?{keywords}:{})};}function getAuthor(authors){const authorsStructuredData=authors.map(createPersonStructuredData);return{author:authorsStructuredData.length===1?authorsStructuredData[0]:authorsStructuredData};}function getImage(image,withBaseUrl,title){return image?{image:createImageStructuredData({imageUrl:withBaseUrl(image,{absolute:true}),caption:`title image for the blog post: ${title}`})}:{};}function useBlogListPageStructuredData(props){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.hH)();const{metadata:{blogDescription,blogTitle,permalink}}=props;const url=`${siteConfig.url}${permalink}`;// details on structured data support: https://schema.org/Blog
return{'@context':'https://schema.org','@type':'Blog','@id':url,mainEntityOfPage:url,headline:blogTitle,description:blogDescription,blogPost:props.items.map(blogItem=>getBlogPost(blogItem.content,siteConfig,withBaseUrl))};}function useBlogPostStructuredData(){const blogMetadata=useBlogMetadata();const{assets,metadata}=useBlogPost();const{siteConfig}=(0,useDocusaurusContext/* default */.A)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.hH)();const{date,title,description,frontMatter,lastUpdatedAt}=metadata;const image=assets.image??frontMatter.image;const keywords=frontMatter.keywords??[];const dateModified=lastUpdatedAt?convertDate(lastUpdatedAt):undefined;const url=`${siteConfig.url}${metadata.permalink}`;// details on structured data support: https://schema.org/BlogPosting
// BlogPosting is one of the structured data types that Google explicitly
// supports: https://developers.google.com/search/docs/appearance/structured-data/article#structured-data-type-definitions
return{'@context':'https://schema.org','@type':'BlogPosting','@id':url,mainEntityOfPage:url,url,headline:title,name:title,description,datePublished:date,...(dateModified?{dateModified}:{}),...getAuthor(metadata.authors),...getImage(image,withBaseUrl,title),...(keywords?{keywords}:{}),isPartOf:{'@type':'Blog','@id':`${siteConfig.url}${blogMetadata.blogBasePath}`,name:blogMetadata.blogTitle}};}/** @returns A {@link https://schema.org/Person} constructed from the {@link Author} */function createPersonStructuredData(author){return{'@type':'Person',...(author.name?{name:author.name}:{}),...(author.title?{description:author.title}:{}),...(author.url?{url:author.url}:{}),...(author.email?{email:author.email}:{}),...(author.imageURL?{image:author.imageURL}:{})};}/** @returns A {@link https://schema.org/ImageObject} */function createImageStructuredData({imageUrl,caption}){return{'@type':'ImageObject','@id':imageUrl,url:imageUrl,contentUrl:imageUrl,caption};}
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@5.3.4_react@19.1.0/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(5291);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8414);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(6801);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(226);
;// ./node_modules/.pnpm/@docusaurus+plugin-content-blog@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+rea_c5f1ec32c69a6d6b69b1ffdc7e83d9e9/node_modules/@docusaurus/plugin-content-blog/lib/client/sidebarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isVisible(item,pathname){if(item.unlisted&&!(0,routesUtils/* isSamePath */.ys)(item.permalink,pathname)){return false;}return true;}/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */function useVisibleBlogSidebarItems(items){const{pathname}=(0,react_router/* useLocation */.zy)();return (0,react.useMemo)(()=>items.filter(item=>isVisible(item,pathname)),[items,pathname]);}function groupBlogSidebarItemsByYear(items){const groupedByYear=(0,jsUtils/* groupBy */.$z)(items,item=>{return`${new Date(item.date).getFullYear()}`;});// "as" is safe here
// see https://github.com/microsoft/TypeScript/pull/56805#issuecomment-2196526425
const entries=Object.entries(groupedByYear);// We have to use entries because of https://x.com/sebastienlorber/status/1806371668614369486
// Objects with string/number keys are automatically sorted asc...
// Even if keys are strings like "2024"
// We want descending order for years
// Alternative: using Map.groupBy (not affected by this "reordering")
entries.reverse();return entries;}function BlogSidebarItemList({items,ulClassName,liClassName,linkClassName,linkActiveClassName}){return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:ulClassName,children:items.map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:liClassName,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{isNavLink:true,to:item.permalink,className:linkClassName,activeClassName:linkActiveClassName,children:item.title})},item.permalink))});}
;// ./node_modules/.pnpm/@docusaurus+plugin-content-blog@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+rea_c5f1ec32c69a6d6b69b1ffdc7e83d9e9/node_modules/@docusaurus/plugin-content-blog/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ }),

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogTagsListPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(6672);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(8160);
;// ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const translateTagsPageTitle=()=>(0,Translate/* translate */.T)({id:'theme.tags.tagsPageTitle',message:'Tags',description:'The title of the tag list page'});function getTagLetter(tag){return tag[0].toUpperCase();}/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */function listTagsByLetters(tags){const groups={};Object.values(tags).forEach(tag=>{const initial=getTagLetter(tag.label);groups[initial]??=[];groups[initial].push(tag);});return Object.entries(groups)// Sort letters
.sort(([letter1],[letter2])=>letter1.localeCompare(letter2)).map(([letter,letterTags])=>{// Sort tags inside a letter
const sortedTags=letterTags.sort((tag1,tag2)=>tag1.label.localeCompare(tag2.label));return{letter,tags:sortedTags};});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(5539);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(2528);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 6 modules
var BlogLayout = __webpack_require__(5189);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(3845);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(9687);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_b2M_"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagLetterEntryItem({letterEntry}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h2",id:letterEntry.letter,children:letterEntry.letter}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"padding--none",children:letterEntry.tags.map(tag=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:styles_module.tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* default */.A,{...tag})},tag.permalink))}),/*#__PURE__*/(0,jsx_runtime.jsx)("hr",{})]});}function TagsListByLetter({tags}){const letterList=listTagsByLetters(tags);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"margin-vert--lg",children:letterList.map(letterEntry=>/*#__PURE__*/(0,jsx_runtime.jsx)(TagLetterEntryItem,{letterEntry:letterEntry},letterEntry.letter))});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(275);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogTagsListPage({tags,sidebar}){const title=translateTagsPageTitle();return/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.blogPages,ThemeClassNames/* ThemeClassNames */.G.page.blogTagsListPage),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"blog_tags_list"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogLayout/* default */.A,{sidebar:sidebar,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListByLetter,{tags:tags})]})]});}

/***/ }),

/***/ 3845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(6672);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8414);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_uWCl","tagRegular":"tagRegular_CJUJ","tagWithCount":"tagWithCount_Hh9_"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag({permalink,label,count,description}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{rel:"tag",href:permalink,title:description,className:(0,clsx/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}

/***/ }),

/***/ 5189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(6672);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(7724);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(3126);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(8160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+plugin-content-blog@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+rea_c5f1ec32c69a6d6b69b1ffdc7e83d9e9/node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(304);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6055);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(9687);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarYearGroup({year,yearGroupHeadingClassName,children}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{role:"group",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",className:yearGroupHeadingClassName,children:year}),children]});}function BlogSidebarContent({items,yearGroupHeadingClassName,ListComponent}){const themeConfig=(0,useThemeConfig/* useThemeConfig */.p)();if(themeConfig.blog.sidebar.groupByYear){const itemsByYear=(0,client/* groupBlogSidebarItemsByYear */.Ki)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:itemsByYear.map(([year,yearItems])=>/*#__PURE__*/(0,jsx_runtime.jsx)(BlogSidebarYearGroup,{year:year,yearGroupHeadingClassName:yearGroupHeadingClassName,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListComponent,{items:yearItems})},year))});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)(ListComponent,{items:items});}}/* harmony default export */ const Content = (/*#__PURE__*/(0,react.memo)(BlogSidebarContent));
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_vFJx","sidebarItemTitle":"sidebarItemTitle_Xvl7","sidebarItemList":"sidebarItemList_Xw8K","sidebarItem":"sidebarItem_joML","sidebarItemLink":"sidebarItemLink_Gt82","sidebarItemLinkActive":"sidebarItemLinkActive_hb6O","yearGroupHeading":"yearGroupHeading_rqJF"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const ListComponent=({items})=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(client/* BlogSidebarItemList */.OU,{items:items,ulClassName:(0,clsx/* default */.A)(styles_module.sidebarItemList,'clean-list'),liClassName:styles_module.sidebarItem,linkClassName:styles_module.sidebarItemLink,linkActiveClassName:styles_module.sidebarItemLinkActive});};function BlogSidebarDesktop({sidebar}){const items=(0,client/* useVisibleBlogSidebarItems */.Gx)(sidebar.items);return/*#__PURE__*/(0,jsx_runtime.jsx)("aside",{className:"col col--3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:(0,clsx/* default */.A)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.T)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(styles_module.sidebarItemTitle,'margin-bottom--md'),children:sidebar.title}),/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{items:items,ListComponent:ListComponent,yearGroupHeadingClassName:styles_module.yearGroupHeading})]})});}/* harmony default export */ const Desktop = (/*#__PURE__*/(0,react.memo)(BlogSidebarDesktop));
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(6109);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Mobile_styles_module = ({"yearGroupHeading":"yearGroupHeading_exsU"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Mobile_ListComponent=({items})=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(client/* BlogSidebarItemList */.OU,{items:items,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"});};function BlogSidebarMobileSecondaryMenu({sidebar}){const items=(0,client/* useVisibleBlogSidebarItems */.Gx)(sidebar.items);return/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{items:items,ListComponent:Mobile_ListComponent,yearGroupHeadingClassName:Mobile_styles_module.yearGroupHeading});}function BlogSidebarMobile(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX,{component:BlogSidebarMobileSecondaryMenu,props:props});}/* harmony default export */ const Mobile = (/*#__PURE__*/(0,react.memo)(BlogSidebarMobile));
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar({sidebar}){const windowSize=(0,useWindowSize/* useWindowSize */.l)();if(!sidebar?.items.length){return null;}// Mobile sidebar doesn't need to be server-rendered
if(windowSize==='mobile'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Mobile,{sidebar:sidebar});}return/*#__PURE__*/(0,jsx_runtime.jsx)(Desktop,{sidebar:sidebar});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){const{sidebar,toc,children,...layoutProps}=props;const hasSidebar=sidebar&&sidebar.items.length>0;return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{...layoutProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogSidebar,{sidebar:sidebar}),/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:(0,clsx/* default */.A)('col',{'col--7':hasSidebar,'col--9 col--offset-1':!hasSidebar}),children:children}),toc&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--2",children:toc})]})})});}

/***/ })

}]);