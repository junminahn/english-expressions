"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[6969],{

/***/ 682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocVersionBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6672);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3526);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4658);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8414);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8160);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3099);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2528);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4325);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4516);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3420);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel({siteTitle,versionMetadata}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle,versionLabel:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:versionMetadata.label})},children:'This is unreleased documentation for {siteTitle} {versionLabel} version.'});}function UnmaintainedVersionLabel({siteTitle,versionMetadata}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle,versionLabel:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:versionMetadata.label})},children:'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'});}const BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){const BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BannerLabelComponent,{...props});}function LatestVersionSuggestionLabel({versionLabel,to,onClick}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel,latestVersionLink:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{to:to,onClick:onClick,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'});}function DocVersionBannerEnabled({className,versionMetadata}){const{siteConfig:{title:siteTitle}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const{pluginId}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useActivePlugin */ .vT)({failfast:true});const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);const{savePreferredVersionName}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_6__/* .useDocsPreferredVersion */ .g1)(pluginId);const{latestDocSuggestion,latestVersionSuggestion}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useDocVersionSuggestions */ .HW)(pluginId);// Try to link to same doc in latest version (not always possible), falling
// back to main doc of latest version
const latestVersionSuggestedDoc=latestDocSuggestion??getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(className,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames */ .G.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin-top--md",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:()=>savePreferredVersionName(latestVersionSuggestion.name)})})]});}function DocVersionBanner({className}){const versionMetadata=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_9__/* .useDocsVersion */ .r)();if(versionMetadata.banner){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DocVersionBannerEnabled,{className:className,versionMetadata:versionMetadata});}return null;}

/***/ }),

/***/ 1738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6672);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3526);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8414);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3420);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){const{permalink,title,subLabel,isNext}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink,children:[subLabel&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pagination-nav__sublabel",children:subLabel}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pagination-nav__label",children:title})]});}

/***/ }),

/***/ 4579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocPaginator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6672);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3526);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8160);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1738);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3420);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){const{className,previous,next}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(className,'pagination-nav'),"aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages',description:'The ARIA label for the docs pagination'}),children:[previous&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{...previous,subLabel:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),next&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{...next,subLabel:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:true})]});}

/***/ }),

/***/ 4862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocCategoryGeneratedIndexPage)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(6672);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(5539);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19._4c1e549e4a604f0b4054d4c9197d9722/node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(1489);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(1201);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8414);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(5018);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(9830);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(8160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(9687);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cardContainer":"cardContainer_l4uB","cardTitle":"cardTitle_pKl7","cardDescription":"cardDescription_HYvN"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCategoryItemsPlural(){const{selectMessage}=(0,usePluralForm/* usePluralForm */.W)();return count=>selectMessage(count,(0,Translate/* translate */.T)({message:'1 item|{count} items',id:'theme.docs.DocCard.categoryDescription.plurals',description:'The default description for a category card in the generated index about how many items this category includes'},{count}));}function CardContainer({className,href,children}){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:href,className:(0,clsx/* default */.A)('card padding--lg',styles_module.cardContainer,className),children:children});}function CardLayout({className,href,icon,title,description}){return/*#__PURE__*/(0,jsx_runtime.jsxs)(CardContainer,{href:href,className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Heading/* default */.A,{as:"h2",className:(0,clsx/* default */.A)('text--truncate',styles_module.cardTitle),title:title,children:[icon," ",title]}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:(0,clsx/* default */.A)('text--truncate',styles_module.cardDescription),title:description,children:description})]});}function CardCategory({item}){const href=(0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);const categoryItemsPlural=useCategoryItemsPlural();// Unexpected: categories that don't have a link have been filtered upfront
if(!href){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{className:item.className,href:href,icon:"\uD83D\uDDC3\uFE0F",title:item.label,description:item.description??categoryItemsPlural(item.items.length)});}function CardLink({item}){const icon=(0,isInternalUrl/* default */.A)(item.href)?'📄️':'🔗';const doc=(0,docsUtils/* useDocById */.cC)(item.docId??undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLayout,{className:item.className,href:item.href,icon:icon,title:item.label,description:item.description??doc?.description});}function DocCard({item}){switch(item.type){case'link':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardLink,{item:item});case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(CardCategory,{item:item});default:throw new Error(`unknown item type ${JSON.stringify(item)}`);}}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocCardList_styles_module = ({"docCardListItem":"docCardListItem_ZCTn"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCardListForCurrentSidebarCategory({className}){const items=(0,docsUtils/* useCurrentSidebarSiblings */.a4)();return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:items,className:className});}function DocCardListItem({item}){return/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:(0,clsx/* default */.A)(DocCardList_styles_module.docCardListItem,'col col--6'),children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCard,{item:item})});}function DocCardList(props){const{items,className}=props;if(!items){return/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListForCurrentSidebarCategory,{...props});}const filteredItems=(0,docsUtils/* filterDocCardListItems */.d1)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.A)('row',className),children:filteredItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardListItem,{item:item},index))});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
var DocPaginator = __webpack_require__(4579);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
var DocVersionBanner = __webpack_require__(682);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
var DocVersionBadge = __webpack_require__(5463);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js + 6 modules
var DocBreadcrumbs = __webpack_require__(9259);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocCategoryGeneratedIndexPage_styles_module = ({"generatedIndexPage":"generatedIndexPage_jXEB","title":"title_sI5u"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCategoryGeneratedIndexPageMetadata({categoryGeneratedIndex}){return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:categoryGeneratedIndex.title,description:categoryGeneratedIndex.description,keywords:categoryGeneratedIndex.keywords// TODO `require` this?
,image:(0,useBaseUrl/* default */.Ay)(categoryGeneratedIndex.image)});}function DocCategoryGeneratedIndexPageContent({categoryGeneratedIndex}){const category=(0,docsUtils/* useCurrentSidebarCategory */.$S)();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:DocCategoryGeneratedIndexPage_styles_module.generatedIndexPage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBanner/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocBreadcrumbs/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocVersionBadge/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:DocCategoryGeneratedIndexPage_styles_module.title,children:categoryGeneratedIndex.title}),categoryGeneratedIndex.description&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:categoryGeneratedIndex.description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:"margin-top--lg",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocCardList,{items:category.items,className:DocCategoryGeneratedIndexPage_styles_module.list})}),/*#__PURE__*/(0,jsx_runtime.jsx)("footer",{className:"margin-top--md",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocPaginator/* default */.A,{previous:categoryGeneratedIndex.navigation.previous,next:categoryGeneratedIndex.navigation.next})})]});}function DocCategoryGeneratedIndexPage(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocCategoryGeneratedIndexPageMetadata,{...props}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocCategoryGeneratedIndexPageContent,{...props})]});}

/***/ }),

/***/ 5018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ usePluralForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6672);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4658);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(pf=>pluralForms.includes(pf));}// Hardcoded english/fallback implementation
const EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:count=>count===1?'one':'other'};function createLocalePluralForms(locale){const pluralRules=new Intl.PluralRules(locale);return{locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:count=>pluralRules.select(count)};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){const{i18n:{currentLocale}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{try{return createLocalePluralForms(currentLocale);}catch(err){console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){const separator='|';const parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);}const pluralForm=localePluralForms.select(count);const pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){const localePluralForm=useLocalePluralForms();return{selectMessage:(count,pluralMessages)=>selectPluralMessage(pluralMessages,count,localePluralForm)};}

/***/ }),

/***/ 5463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocVersionBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6672);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3526);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8160);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2528);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4516);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3420);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocVersionBadge({className}){const versionMetadata=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocsVersion */ .r)();if(versionMetadata.badge){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(className,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames */ .G.docs.docVersionBadge,'badge badge--secondary'),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.docs.versionBadge.label",values:{versionLabel:versionMetadata.label},children:'Version: {versionLabel}'})});}return null;}

/***/ }),

/***/ 9259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocBreadcrumbs)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(6672);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(2528);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19._4c1e549e4a604f0b4054d4c9197d9722/node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(1489);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+theme-common@3.8.1_@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1._4d16d18b5150c35992dd15378cb7e1a4/node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(226);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8414);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(8160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(1201);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconHome(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"breadcrumbHomeIcon":"breadcrumbHomeIcon_YhwE"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function HomeBreadcrumbItem(){const homeHref=(0,useBaseUrl/* default */.Ay)('/');return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"breadcrumbs__item",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.breadcrumbs.home',message:'Home page',description:'The ARIA label for the home page in the breadcrumbs'}),className:"breadcrumbs__link",href:homeHref,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconHome,{className:styles_module.breadcrumbHomeIcon})})});}
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(7492);
// EXTERNAL MODULE: ./node_modules/.pnpm/@docusaurus+core@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0__acorn@8.15_748ba51041b8ac3576a761f0834a8595/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4658);
;// ./node_modules/.pnpm/@docusaurus+plugin-content-docs@3.8.1_@mdx-js+react@3.1.0_@types+react@19.1.8_react@19._4c1e549e4a604f0b4054d4c9197d9722/node_modules/@docusaurus/plugin-content-docs/lib/client/structuredDataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBreadcrumbsStructuredData({breadcrumbs}){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:breadcrumbs// We filter breadcrumb items without links, they are not allowed
// See also https://github.com/facebook/docusaurus/issues/9319#issuecomment-2643560845
.filter(breadcrumb=>breadcrumb.href).map((breadcrumb,index)=>({'@type':'ListItem',position:index+1,name:breadcrumb.label,item:`${siteConfig.url}${breadcrumb.href}`}))};}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/StructuredData/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocBreadcrumbsStructuredData(props){const structuredData=useBreadcrumbsStructuredData({breadcrumbs:props.breadcrumbs});return/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(structuredData)})});}
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_eD4m"});
;// ./node_modules/.pnpm/@docusaurus+theme-classic@3.8.1_@types+react@19.1.8_acorn@8.15.0_react-dom@19.1.0_react_58a32f521a68200d0a0528fd0de718ff/node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to design system folder
function BreadcrumbsItemLink({children,href,isLast}){const className='breadcrumbs__link';if(isLast){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:className,children:children});}return href?/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:className,href:href,children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:children})}):/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:className,children:children});}// TODO move to design system folder
function BreadcrumbsItem({children,active}){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:(0,clsx/* default */.A)('breadcrumbs__item',{'breadcrumbs__item--active':active}),children:children});}function DocBreadcrumbs(){const breadcrumbs=(0,docsUtils/* useSidebarBreadcrumbs */.OF)();const homePageRoute=(0,routesUtils/* useHomePageRoute */.Dt)();if(!breadcrumbs){return null;}return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DocBreadcrumbsStructuredData,{breadcrumbs:breadcrumbs}),/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docBreadcrumbs,DocBreadcrumbs_styles_module.breadcrumbsContainer),"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.breadcrumbs.navAriaLabel',message:'Breadcrumbs',description:'The ARIA label for the breadcrumbs'}),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{className:"breadcrumbs",children:[homePageRoute&&/*#__PURE__*/(0,jsx_runtime.jsx)(HomeBreadcrumbItem,{}),breadcrumbs.map((item,idx)=>{const isLast=idx===breadcrumbs.length-1;const href=item.type==='category'&&item.linkUnlisted?undefined:item.href;return/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsItem,{active:isLast,children:/*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsItemLink,{href:href,isLast:isLast,children:item.label})},idx);})]})})]});}

/***/ })

}]);