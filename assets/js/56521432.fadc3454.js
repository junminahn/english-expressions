"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[5643],{

/***/ 9643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_uphill_battle_index_md_317_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_uphill_battle_index_md_317_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39728);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23420);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65404);


const frontMatter = {
	slug: 'uphill-battle',
	title: 'Uphill Battle',
	authors: [],
	date: '2025-07-24T00:00',
	tags: [
		'관용구'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};



const toc = [{
  "value": "의미",
  "id": "의미",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "의미",
      children: "의미"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
        children: "Uphill Battle"
      }), "은 힘들고 많은 노력이 필요한 어려운 싸움이나 과제를 의미합니다."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 39728:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/uphill-battle","source":"@site/blog/uphill-battle/index.md","title":"Uphill Battle","description":"의미","date":"2025-07-24T00:00:00.000Z","tags":[{"inline":true,"label":"관용구","permalink":"/blog/tags/관용구"}],"readingTime":1,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"uphill-battle","title":"Uphill Battle","authors":[],"date":"2025-07-24T00:00","tags":["관용구"]},"unlisted":false,"prevItem":{"title":"Tough Nut To Crack","permalink":"/blog/tough-nut-to-crack"},"nextItem":{"title":"A Blessing in Disguise","permalink":"/blog/a-blessing-in-disguise"}}');

/***/ }),

/***/ 65404:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36672);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);