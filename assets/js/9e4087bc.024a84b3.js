"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[2711],{

/***/ 56285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useDateTimeFormat)
/* harmony export */ });
/* unused harmony export useCalendar */
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44658);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCalendar(){const{i18n:{currentLocale,localeConfigs}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();return localeConfigs[currentLocale].calendar;}function useDateTimeFormat(options={}){const{i18n:{currentLocale}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();const calendar=useCalendar();return new Intl.DateTimeFormat(currentLocale,{calendar,...options});}

/***/ }),

/***/ 57119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogArchive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36672);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58414);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88160);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85539);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56285);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39571);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29687);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23420);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Year({year,posts}){const dateTimeFormat=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useDateTimeFormat */ .i)({day:'numeric',month:'long',timeZone:'UTC'});const formatDate=lastUpdated=>dateTimeFormat.format(new Date(lastUpdated));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{as:"h3",id:year,children:year}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul",{children:posts.map(post=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{to:post.metadata.permalink,children:[formatDate(post.metadata.date)," - ",post.metadata.title]})},post.metadata.date))})]});}function YearsSection({years}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section",{className:"margin-vert--lg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"container",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"row",children:years.map((_props,idx)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"col col--4 margin-vert--lg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Year,{..._props})},idx))})})});}function listPostsByYears(blogPosts){const postsByYear=blogPosts.reduce((posts,post)=>{const year=post.metadata.date.split('-')[0];const yearPosts=posts.get(year)??[];return posts.set(year,[post,...yearPosts]);},new Map());return Array.from(postsByYear,([year,posts])=>({year,posts}));}function BlogArchive({archive}){const title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.blog.archive.title',message:'Archive',description:'The page & hero title of the blog archive page'});const description=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.blog.archive.description',message:'Archive',description:'The page & hero description of the blog archive page'});const years=listPostsByYears(archive.blogPosts);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .PageMetadata */ .be,{title:title,description:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("header",{className:"hero hero--primary",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{as:"h1",className:"hero__title",children:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{className:"hero__subtitle",children:description})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("main",{children:years.length>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(YearsSection,{years:years})})]})]});}

/***/ })

}]);