"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[7468],{

/***/ 5404:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6672);
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


/***/ }),

/***/ 6149:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/average","source":"@site/blog/average/index.md","title":"Average","description":"의미","date":"2025-07-04T19:05:00.000Z","tags":[{"inline":true,"label":"자주 쓰는 표현","permalink":"/blog/tags/자주-쓰는-표현"}],"readingTime":0.96,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"average","title":"Average","authors":[],"date":"2025-07-04T19:05","tags":["자주 쓰는 표현"]},"unlisted":false,"prevItem":{"title":"A Dime A Dozen","permalink":"/blog/a-dime-a-dozen"},"nextItem":{"title":"Common As Dirt","permalink":"/blog/common-as-dirt"}}');

/***/ }),

/***/ 7073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_average_index_md_b1a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_average_index_md_b1a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6149);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3420);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5404);


const frontMatter = {
	slug: 'average',
	title: 'Average',
	authors: [],
	date: '2025-07-04T19:05',
	tags: [
		'자주 쓰는 표현'
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
}, {
  "value": "설명",
  "id": "설명",
  "level": 3
}, {
  "value": "예문",
  "id": "예문",
  "level": 3
}, {
  "value": "유사한 영어 표현",
  "id": "유사한-영어-표현",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "의미",
      children: "의미"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
        children: "Average"
      }), "는 평균적인, 보통의, 또는 중간 수준임을 나타냅니다.."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "설명",
      children: "설명"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "이 표현은 어떤 사물이나 사람, 상황이 보통 수준이거나 중간 정도임을 설명할 때 사용됩니다. 통계적인 '평균'을 의미하기도 하며, '그저 그런', '특별할 것 없는'이라는 뉘앙스로도 쓰일 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "예문",
      children: "예문"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.admonition, {
      title: "Example 1",
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "The average student studies about two hours a day."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n(보통 학생들은 하루에 두 시간 정도 공부합니다.)"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.admonition, {
      title: "Example 2",
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "His performance was just average, nothing special."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n(그의 성과는 그저 그랬고, 특별할 것이 없었습니다.)"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.admonition, {
      title: "Example 3",
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "On average, we get about 10 new customers a day."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n(평균적으로 우리는 하루에 약 10명의 새로운 고객을 얻습니다.)"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.admonition, {
      title: "Example 4",
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "The average temperature for July is 25 degrees Celsius."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n(7월의 평균 기온은 섭씨 25도입니다.)"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.admonition, {
      title: "Example 5",
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "He's an average guy, not very tall or short."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n(그는 보통 키의 남자이고, 아주 키가 크거나 작지 않습니다.)"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "유사한-영어-표현",
      children: "유사한 영어 표현"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "On Average"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "('평균적으로'라는 의미로, 'average'를 포함하는 일반적인 구문입니다.)"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Below Average"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "(평균 이하임을 나타냅니다.)"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Above Average"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "(평균 이상임을 나타냅s니다.)"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Run-of-the-Mill"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "(평범하거나 흔하다는 의미로, 종종 부정적인 뉘앙스를 가집니다.)"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Mediocre"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "(보통 수준이거나 그 이하임을 나타내며, 대개 부정적인 의미로 사용됩니다.)"
        })]
      }), "\n"]
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



/***/ })

}]);