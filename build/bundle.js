/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Routes.js":
/*!*******************!*\
  !*** ./Routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Home = __webpack_require__(/*! ./src/container/Home */ \"./src/container/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Translation = __webpack_require__(/*! ./src/container/Translation */ \"./src/container/Translation/index.js\");\n\nvar _Translation2 = _interopRequireDefault(_Translation);\n\nvar _NotFound = __webpack_require__(/*! ./src/container/NotFound */ \"./src/container/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _App = __webpack_require__(/*! ./src/App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  path: '/',\n  component: _App2.default,\n  loadData: _App2.default.loadData,\n  routes: [{\n    path: '/',\n    component: _Home2.default,\n    key: 'home',\n    exact: true,\n    loadData: _Home2.default.loadData\n  }, {\n    path: '/translation',\n    component: _Translation2.default,\n    key: 'translation',\n    exact: true,\n    loadData: _Translation2.default.loadData\n  }, {\n    component: _NotFound2.default // 挂载 NotFound 页面\n  }]\n}];\n\n//# sourceURL=webpack:///./Routes.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/components/Header/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/Header/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_test_2H-qk {\\n  background: greenyellow;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"test\": \"style_test_2H-qk\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/container/Home/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/container/Home/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\n  background: orange;\\n}\\n.style_test_2kLXD {\\n  background: orangered;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"test\": \"style_test_2kLXD\"\n};\n\n//# sourceURL=webpack:///./src/container/Home/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/container/Translation/style.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/container/Translation/style.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".style_test_3uOOR {\\n  background: blueviolet;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"test\": \"style_test_3uOOR\"\n};\n\n//# sourceURL=webpack:///./src/container/Translation/style.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pSlice = Array.prototype.slice;\nvar objectKeys = __webpack_require__(/*! ./lib/keys.js */ \"./node_modules/deep-equal/lib/keys.js\");\nvar isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ \"./node_modules/deep-equal/lib/is_arguments.js\");\n\nvar deepEqual = module.exports = function (actual, expected, opts) {\n  if (!opts) opts = {};\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (actual === expected) {\n    return true;\n\n  } else if (actual instanceof Date && expected instanceof Date) {\n    return actual.getTime() === expected.getTime();\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object',\n  // equivalence is determined by ==.\n  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {\n    return opts.strict ? actual === expected : actual == expected;\n\n  // 7.4. For all other Object pairs, including Array objects, equivalence is\n  // determined by having the same number of owned properties (as verified\n  // with Object.prototype.hasOwnProperty.call), the same set of keys\n  // (although not necessarily the same order), equivalent values for every\n  // corresponding key, and an identical 'prototype' property. Note: this\n  // accounts for both named and indexed properties on Arrays.\n  } else {\n    return objEquiv(actual, expected, opts);\n  }\n}\n\nfunction isUndefinedOrNull(value) {\n  return value === null || value === undefined;\n}\n\nfunction isBuffer (x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') return false;\n  return true;\n}\n\nfunction objEquiv(a, b, opts) {\n  var i, key;\n  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))\n    return false;\n  // an identical 'prototype' property.\n  if (a.prototype !== b.prototype) return false;\n  //~~~I've managed to break Object.keys through screwy arguments passing.\n  //   Converting to array solves the problem.\n  if (isArguments(a)) {\n    if (!isArguments(b)) {\n      return false;\n    }\n    a = pSlice.call(a);\n    b = pSlice.call(b);\n    return deepEqual(a, b, opts);\n  }\n  if (isBuffer(a)) {\n    if (!isBuffer(b)) {\n      return false;\n    }\n    if (a.length !== b.length) return false;\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) return false;\n    }\n    return true;\n  }\n  try {\n    var ka = objectKeys(a),\n        kb = objectKeys(b);\n  } catch (e) {//happens when one is a string literal and the other isn't\n    return false;\n  }\n  // having the same number of owned properties (keys incorporates\n  // hasOwnProperty)\n  if (ka.length != kb.length)\n    return false;\n  //the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  //~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i])\n      return false;\n  }\n  //equivalent values for every corresponding key, and\n  //~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!deepEqual(a[key], b[key], opts)) return false;\n  }\n  return typeof a === typeof b;\n}\n\n\n//# sourceURL=webpack:///./node_modules/deep-equal/index.js?");

/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/*!*****************************************************!*\
  !*** ./node_modules/deep-equal/lib/is_arguments.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var supportsArgumentsClass = (function(){\n  return Object.prototype.toString.call(arguments)\n})() == '[object Arguments]';\n\nexports = module.exports = supportsArgumentsClass ? supported : unsupported;\n\nexports.supported = supported;\nfunction supported(object) {\n  return Object.prototype.toString.call(object) == '[object Arguments]';\n};\n\nexports.unsupported = unsupported;\nfunction unsupported(object){\n  return object &&\n    typeof object == 'object' &&\n    typeof object.length == 'number' &&\n    Object.prototype.hasOwnProperty.call(object, 'callee') &&\n    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||\n    false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/deep-equal/lib/is_arguments.js?");

/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/*!*********************************************!*\
  !*** ./node_modules/deep-equal/lib/keys.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports = module.exports = typeof Object.keys === 'function'\n  ? Object.keys : shim;\n\nexports.shim = shim;\nfunction shim (obj) {\n  var keys = [];\n  for (var key in obj) keys.push(key);\n  return keys;\n}\n\n\n//# sourceURL=webpack:///./node_modules/deep-equal/lib/keys.js?");

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2015 Jed Watson.\n  Based on code that is Copyright 2013-2015, Facebook, Inc.\n  All rights reserved.\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar canUseDOM = !!(\n\t\ttypeof window !== 'undefined' &&\n\t\twindow.document &&\n\t\twindow.document.createElement\n\t);\n\n\tvar ExecutionEnvironment = {\n\n\t\tcanUseDOM: canUseDOM,\n\n\t\tcanUseWorkers: typeof Worker !== 'undefined',\n\n\t\tcanUseEventListeners:\n\t\t\tcanUseDOM && !!(window.addEventListener || window.attachEvent),\n\n\t\tcanUseViewport: canUseDOM && !!window.screen\n\n\t};\n\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn ExecutionEnvironment;\n\t\t}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n\n}());\n\n\n//# sourceURL=webpack:///./node_modules/exenv/index.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.__esModule = true;\nexports.Helmet = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactSideEffect = __webpack_require__(/*! react-side-effect */ \"./node_modules/react-side-effect/lib/index.js\");\n\nvar _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);\n\nvar _deepEqual = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n\nvar _deepEqual2 = _interopRequireDefault(_deepEqual);\n\nvar _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ \"./node_modules/react-helmet/lib/HelmetUtils.js\");\n\nvar _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ \"./node_modules/react-helmet/lib/HelmetConstants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Helmet = function Helmet(Component) {\n    var _class, _temp;\n\n    return _temp = _class = function (_React$Component) {\n        _inherits(HelmetWrapper, _React$Component);\n\n        function HelmetWrapper() {\n            _classCallCheck(this, HelmetWrapper);\n\n            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n        }\n\n        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {\n            return !(0, _deepEqual2.default)(this.props, nextProps);\n        };\n\n        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {\n            if (!nestedChildren) {\n                return null;\n            }\n\n            switch (child.type) {\n                case _HelmetConstants.TAG_NAMES.SCRIPT:\n                case _HelmetConstants.TAG_NAMES.NOSCRIPT:\n                    return {\n                        innerHTML: nestedChildren\n                    };\n\n                case _HelmetConstants.TAG_NAMES.STYLE:\n                    return {\n                        cssText: nestedChildren\n                    };\n            }\n\n            throw new Error(\"<\" + child.type + \" /> elements are self-closing and can not contain children. Refer to our API for more information.\");\n        };\n\n        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {\n            var _extends2;\n\n            var child = _ref.child,\n                arrayTypeChildren = _ref.arrayTypeChildren,\n                newChildProps = _ref.newChildProps,\n                nestedChildren = _ref.nestedChildren;\n\n            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));\n        };\n\n        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {\n            var _extends3, _extends4;\n\n            var child = _ref2.child,\n                newProps = _ref2.newProps,\n                newChildProps = _ref2.newChildProps,\n                nestedChildren = _ref2.nestedChildren;\n\n            switch (child.type) {\n                case _HelmetConstants.TAG_NAMES.TITLE:\n                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));\n\n                case _HelmetConstants.TAG_NAMES.BODY:\n                    return _extends({}, newProps, {\n                        bodyAttributes: _extends({}, newChildProps)\n                    });\n\n                case _HelmetConstants.TAG_NAMES.HTML:\n                    return _extends({}, newProps, {\n                        htmlAttributes: _extends({}, newChildProps)\n                    });\n            }\n\n            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));\n        };\n\n        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {\n            var newFlattenedProps = _extends({}, newProps);\n\n            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {\n                var _extends5;\n\n                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));\n            });\n\n            return newFlattenedProps;\n        };\n\n        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {\n            if (true) {\n                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {\n                    return child.type === name;\n                })) {\n                    if (typeof child.type === \"function\") {\n                        return (0, _HelmetUtils.warn)(\"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.\");\n                    }\n\n                    return (0, _HelmetUtils.warn)(\"Only elements types \" + _HelmetConstants.VALID_TAG_NAMES.join(\", \") + \" are allowed. Helmet does not support rendering <\" + child.type + \"> elements. Refer to our API for more information.\");\n                }\n\n                if (nestedChildren && typeof nestedChildren !== \"string\" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {\n                    return typeof nestedChild !== \"string\";\n                }))) {\n                    throw new Error(\"Helmet expects a string as a child of <\" + child.type + \">. Did you forget to wrap your children in braces? ( <\" + child.type + \">{``}</\" + child.type + \"> ) Refer to our API for more information.\");\n                }\n            }\n\n            return true;\n        };\n\n        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {\n            var _this2 = this;\n\n            var arrayTypeChildren = {};\n\n            _react2.default.Children.forEach(children, function (child) {\n                if (!child || !child.props) {\n                    return;\n                }\n\n                var _child$props = child.props,\n                    nestedChildren = _child$props.children,\n                    childProps = _objectWithoutProperties(_child$props, [\"children\"]);\n\n                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);\n\n                _this2.warnOnInvalidChildren(child, nestedChildren);\n\n                switch (child.type) {\n                    case _HelmetConstants.TAG_NAMES.LINK:\n                    case _HelmetConstants.TAG_NAMES.META:\n                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:\n                    case _HelmetConstants.TAG_NAMES.SCRIPT:\n                    case _HelmetConstants.TAG_NAMES.STYLE:\n                        arrayTypeChildren = _this2.flattenArrayTypeChildren({\n                            child: child,\n                            arrayTypeChildren: arrayTypeChildren,\n                            newChildProps: newChildProps,\n                            nestedChildren: nestedChildren\n                        });\n                        break;\n\n                    default:\n                        newProps = _this2.mapObjectTypeChildren({\n                            child: child,\n                            newProps: newProps,\n                            newChildProps: newChildProps,\n                            nestedChildren: nestedChildren\n                        });\n                        break;\n                }\n            });\n\n            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);\n            return newProps;\n        };\n\n        HelmetWrapper.prototype.render = function render() {\n            var _props = this.props,\n                children = _props.children,\n                props = _objectWithoutProperties(_props, [\"children\"]);\n\n            var newProps = _extends({}, props);\n\n            if (children) {\n                newProps = this.mapChildrenToProps(children, newProps);\n            }\n\n            return _react2.default.createElement(Component, newProps);\n        };\n\n        _createClass(HelmetWrapper, null, [{\n            key: \"canUseDOM\",\n\n\n            // Component.peek comes from react-side-effect:\n            // For testing, you may use a static peek() method available on the returned component.\n            // It lets you get the current state without resetting the mounted instance stack.\n            // Don’t use it for anything other than testing.\n\n            /**\n            * @param {Object} base: {\"target\": \"_blank\", \"href\": \"http://mysite.com/\"}\n            * @param {Object} bodyAttributes: {\"className\": \"root\"}\n            * @param {String} defaultTitle: \"Default Title\"\n            * @param {Boolean} defer: true\n            * @param {Boolean} encodeSpecialCharacters: true\n            * @param {Object} htmlAttributes: {\"lang\": \"en\", \"amp\": undefined}\n            * @param {Array} link: [{\"rel\": \"canonical\", \"href\": \"http://mysite.com/example\"}]\n            * @param {Array} meta: [{\"name\": \"description\", \"content\": \"Test description\"}]\n            * @param {Array} noscript: [{\"innerHTML\": \"<img src='http://mysite.com/js/test.js'\"}]\n            * @param {Function} onChangeClientState: \"(newState) => console.log(newState)\"\n            * @param {Array} script: [{\"type\": \"text/javascript\", \"src\": \"http://mysite.com/js/test.js\"}]\n            * @param {Array} style: [{\"type\": \"text/css\", \"cssText\": \"div { display: block; color: blue; }\"}]\n            * @param {String} title: \"Title\"\n            * @param {Object} titleAttributes: {\"itemprop\": \"name\"}\n            * @param {String} titleTemplate: \"MySite.com - %s\"\n            */\n            set: function set(canUseDOM) {\n                Component.canUseDOM = canUseDOM;\n            }\n        }]);\n\n        return HelmetWrapper;\n    }(_react2.default.Component), _class.propTypes = {\n        base: _propTypes2.default.object,\n        bodyAttributes: _propTypes2.default.object,\n        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),\n        defaultTitle: _propTypes2.default.string,\n        defer: _propTypes2.default.bool,\n        encodeSpecialCharacters: _propTypes2.default.bool,\n        htmlAttributes: _propTypes2.default.object,\n        link: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        onChangeClientState: _propTypes2.default.func,\n        script: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        style: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        title: _propTypes2.default.string,\n        titleAttributes: _propTypes2.default.object,\n        titleTemplate: _propTypes2.default.string\n    }, _class.defaultProps = {\n        defer: true,\n        encodeSpecialCharacters: true\n    }, _class.peek = Component.peek, _class.rewind = function () {\n        var mappedState = Component.rewind();\n        if (!mappedState) {\n            // provide fallback if mappedState is undefined\n            mappedState = (0, _HelmetUtils.mapStateOnServer)({\n                baseTag: [],\n                bodyAttributes: {},\n                encodeSpecialCharacters: true,\n                htmlAttributes: {},\n                linkTags: [],\n                metaTags: [],\n                noscriptTags: [],\n                scriptTags: [],\n                styleTags: [],\n                title: \"\",\n                titleAttributes: {}\n            });\n        }\n\n        return mappedState;\n    }, _temp;\n};\n\nvar NullComponent = function NullComponent() {\n    return null;\n};\n\nvar HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);\n\nvar HelmetExport = Helmet(HelmetSideEffects);\nHelmetExport.renderStatic = HelmetExport.rewind;\n\nexports.Helmet = HelmetExport;\nexports.default = HelmetExport;\n\n//# sourceURL=webpack:///./node_modules/react-helmet/lib/Helmet.js?");

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetConstants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.__esModule = true;\nvar ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {\n    BODY: \"bodyAttributes\",\n    HTML: \"htmlAttributes\",\n    TITLE: \"titleAttributes\"\n};\n\nvar TAG_NAMES = exports.TAG_NAMES = {\n    BASE: \"base\",\n    BODY: \"body\",\n    HEAD: \"head\",\n    HTML: \"html\",\n    LINK: \"link\",\n    META: \"meta\",\n    NOSCRIPT: \"noscript\",\n    SCRIPT: \"script\",\n    STYLE: \"style\",\n    TITLE: \"title\"\n};\n\nvar VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {\n    return TAG_NAMES[name];\n});\n\nvar TAG_PROPERTIES = exports.TAG_PROPERTIES = {\n    CHARSET: \"charset\",\n    CSS_TEXT: \"cssText\",\n    HREF: \"href\",\n    HTTPEQUIV: \"http-equiv\",\n    INNER_HTML: \"innerHTML\",\n    ITEM_PROP: \"itemprop\",\n    NAME: \"name\",\n    PROPERTY: \"property\",\n    REL: \"rel\",\n    SRC: \"src\"\n};\n\nvar REACT_TAG_MAP = exports.REACT_TAG_MAP = {\n    accesskey: \"accessKey\",\n    charset: \"charSet\",\n    class: \"className\",\n    contenteditable: \"contentEditable\",\n    contextmenu: \"contextMenu\",\n    \"http-equiv\": \"httpEquiv\",\n    itemprop: \"itemProp\",\n    tabindex: \"tabIndex\"\n};\n\nvar HELMET_PROPS = exports.HELMET_PROPS = {\n    DEFAULT_TITLE: \"defaultTitle\",\n    DEFER: \"defer\",\n    ENCODE_SPECIAL_CHARACTERS: \"encodeSpecialCharacters\",\n    ON_CHANGE_CLIENT_STATE: \"onChangeClientState\",\n    TITLE_TEMPLATE: \"titleTemplate\"\n};\n\nvar HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {\n    obj[REACT_TAG_MAP[key]] = key;\n    return obj;\n}, {});\n\nvar SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];\n\nvar HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = \"data-react-helmet\";\n\n//# sourceURL=webpack:///./node_modules/react-helmet/lib/HelmetConstants.js?");

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.__esModule = true;\nexports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _objectAssign = __webpack_require__(/*! object-assign */ \"object-assign\");\n\nvar _objectAssign2 = _interopRequireDefault(_objectAssign);\n\nvar _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ \"./node_modules/react-helmet/lib/HelmetConstants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar encodeSpecialCharacters = function encodeSpecialCharacters(str) {\n    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (encode === false) {\n        return String(str);\n    }\n\n    return String(str).replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\").replace(/'/g, \"&#x27;\");\n};\n\nvar getTitleFromPropsList = function getTitleFromPropsList(propsList) {\n    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);\n    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);\n\n    if (innermostTemplate && innermostTitle) {\n        // use function arg to avoid need to escape $ characters\n        return innermostTemplate.replace(/%s/g, function () {\n            return innermostTitle;\n        });\n    }\n\n    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);\n\n    return innermostTitle || innermostDefaultTitle || undefined;\n};\n\nvar getOnChangeClientState = function getOnChangeClientState(propsList) {\n    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};\n};\n\nvar getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {\n    return propsList.filter(function (props) {\n        return typeof props[tagType] !== \"undefined\";\n    }).map(function (props) {\n        return props[tagType];\n    }).reduce(function (tagAttrs, current) {\n        return _extends({}, tagAttrs, current);\n    }, {});\n};\n\nvar getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {\n    return propsList.filter(function (props) {\n        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== \"undefined\";\n    }).map(function (props) {\n        return props[_HelmetConstants.TAG_NAMES.BASE];\n    }).reverse().reduce(function (innermostBaseTag, tag) {\n        if (!innermostBaseTag.length) {\n            var keys = Object.keys(tag);\n\n            for (var i = 0; i < keys.length; i++) {\n                var attributeKey = keys[i];\n                var lowerCaseAttributeKey = attributeKey.toLowerCase();\n\n                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {\n                    return innermostBaseTag.concat(tag);\n                }\n            }\n        }\n\n        return innermostBaseTag;\n    }, []);\n};\n\nvar getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {\n    // Calculate list of tags, giving priority innermost component (end of the propslist)\n    var approvedSeenTags = {};\n\n    return propsList.filter(function (props) {\n        if (Array.isArray(props[tagName])) {\n            return true;\n        }\n        if (typeof props[tagName] !== \"undefined\") {\n            warn(\"Helmet: \" + tagName + \" should be of type \\\"Array\\\". Instead found type \\\"\" + _typeof(props[tagName]) + \"\\\"\");\n        }\n        return false;\n    }).map(function (props) {\n        return props[tagName];\n    }).reverse().reduce(function (approvedTags, instanceTags) {\n        var instanceSeenTags = {};\n\n        instanceTags.filter(function (tag) {\n            var primaryAttributeKey = void 0;\n            var keys = Object.keys(tag);\n            for (var i = 0; i < keys.length; i++) {\n                var attributeKey = keys[i];\n                var lowerCaseAttributeKey = attributeKey.toLowerCase();\n\n                // Special rule with link tags, since rel and href are both primary tags, rel takes priority\n                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === \"canonical\") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === \"stylesheet\")) {\n                    primaryAttributeKey = lowerCaseAttributeKey;\n                }\n                // Special case for innerHTML which doesn't work lowercased\n                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {\n                    primaryAttributeKey = attributeKey;\n                }\n            }\n\n            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {\n                return false;\n            }\n\n            var value = tag[primaryAttributeKey].toLowerCase();\n\n            if (!approvedSeenTags[primaryAttributeKey]) {\n                approvedSeenTags[primaryAttributeKey] = {};\n            }\n\n            if (!instanceSeenTags[primaryAttributeKey]) {\n                instanceSeenTags[primaryAttributeKey] = {};\n            }\n\n            if (!approvedSeenTags[primaryAttributeKey][value]) {\n                instanceSeenTags[primaryAttributeKey][value] = true;\n                return true;\n            }\n\n            return false;\n        }).reverse().forEach(function (tag) {\n            return approvedTags.push(tag);\n        });\n\n        // Update seen tags with tags from this instance\n        var keys = Object.keys(instanceSeenTags);\n        for (var i = 0; i < keys.length; i++) {\n            var attributeKey = keys[i];\n            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);\n\n            approvedSeenTags[attributeKey] = tagUnion;\n        }\n\n        return approvedTags;\n    }, []).reverse();\n};\n\nvar getInnermostProperty = function getInnermostProperty(propsList, property) {\n    for (var i = propsList.length - 1; i >= 0; i--) {\n        var props = propsList[i];\n\n        if (props.hasOwnProperty(property)) {\n            return props[property];\n        }\n    }\n\n    return null;\n};\n\nvar reducePropsToState = function reducePropsToState(propsList) {\n    return {\n        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),\n        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),\n        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),\n        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),\n        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),\n        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),\n        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),\n        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),\n        onChangeClientState: getOnChangeClientState(propsList),\n        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),\n        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),\n        title: getTitleFromPropsList(propsList),\n        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)\n    };\n};\n\nvar rafPolyfill = function () {\n    var clock = Date.now();\n\n    return function (callback) {\n        var currentTime = Date.now();\n\n        if (currentTime - clock > 16) {\n            clock = currentTime;\n            callback(currentTime);\n        } else {\n            setTimeout(function () {\n                rafPolyfill(callback);\n            }, 0);\n        }\n    };\n}();\n\nvar cafPolyfill = function cafPolyfill(id) {\n    return clearTimeout(id);\n};\n\nvar requestAnimationFrame = typeof window !== \"undefined\" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;\n\nvar cancelAnimationFrame = typeof window !== \"undefined\" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;\n\nvar warn = function warn(msg) {\n    return console && typeof console.warn === \"function\" && console.warn(msg);\n};\n\nvar _helmetCallback = null;\n\nvar handleClientStateChange = function handleClientStateChange(newState) {\n    if (_helmetCallback) {\n        cancelAnimationFrame(_helmetCallback);\n    }\n\n    if (newState.defer) {\n        _helmetCallback = requestAnimationFrame(function () {\n            commitTagChanges(newState, function () {\n                _helmetCallback = null;\n            });\n        });\n    } else {\n        commitTagChanges(newState);\n        _helmetCallback = null;\n    }\n};\n\nvar commitTagChanges = function commitTagChanges(newState, cb) {\n    var baseTag = newState.baseTag,\n        bodyAttributes = newState.bodyAttributes,\n        htmlAttributes = newState.htmlAttributes,\n        linkTags = newState.linkTags,\n        metaTags = newState.metaTags,\n        noscriptTags = newState.noscriptTags,\n        onChangeClientState = newState.onChangeClientState,\n        scriptTags = newState.scriptTags,\n        styleTags = newState.styleTags,\n        title = newState.title,\n        titleAttributes = newState.titleAttributes;\n\n    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);\n    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);\n\n    updateTitle(title, titleAttributes);\n\n    var tagUpdates = {\n        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),\n        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),\n        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),\n        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),\n        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),\n        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)\n    };\n\n    var addedTags = {};\n    var removedTags = {};\n\n    Object.keys(tagUpdates).forEach(function (tagType) {\n        var _tagUpdates$tagType = tagUpdates[tagType],\n            newTags = _tagUpdates$tagType.newTags,\n            oldTags = _tagUpdates$tagType.oldTags;\n\n\n        if (newTags.length) {\n            addedTags[tagType] = newTags;\n        }\n        if (oldTags.length) {\n            removedTags[tagType] = tagUpdates[tagType].oldTags;\n        }\n    });\n\n    cb && cb();\n\n    onChangeClientState(newState, addedTags, removedTags);\n};\n\nvar flattenArray = function flattenArray(possibleArray) {\n    return Array.isArray(possibleArray) ? possibleArray.join(\"\") : possibleArray;\n};\n\nvar updateTitle = function updateTitle(title, attributes) {\n    if (typeof title !== \"undefined\" && document.title !== title) {\n        document.title = flattenArray(title);\n    }\n\n    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);\n};\n\nvar updateAttributes = function updateAttributes(tagName, attributes) {\n    var elementTag = document.getElementsByTagName(tagName)[0];\n\n    if (!elementTag) {\n        return;\n    }\n\n    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);\n    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(\",\") : [];\n    var attributesToRemove = [].concat(helmetAttributes);\n    var attributeKeys = Object.keys(attributes);\n\n    for (var i = 0; i < attributeKeys.length; i++) {\n        var attribute = attributeKeys[i];\n        var value = attributes[attribute] || \"\";\n\n        if (elementTag.getAttribute(attribute) !== value) {\n            elementTag.setAttribute(attribute, value);\n        }\n\n        if (helmetAttributes.indexOf(attribute) === -1) {\n            helmetAttributes.push(attribute);\n        }\n\n        var indexToSave = attributesToRemove.indexOf(attribute);\n        if (indexToSave !== -1) {\n            attributesToRemove.splice(indexToSave, 1);\n        }\n    }\n\n    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {\n        elementTag.removeAttribute(attributesToRemove[_i]);\n    }\n\n    if (helmetAttributes.length === attributesToRemove.length) {\n        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);\n    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(\",\")) {\n        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(\",\"));\n    }\n};\n\nvar updateTags = function updateTags(type, tags) {\n    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);\n    var tagNodes = headElement.querySelectorAll(type + \"[\" + _HelmetConstants.HELMET_ATTRIBUTE + \"]\");\n    var oldTags = Array.prototype.slice.call(tagNodes);\n    var newTags = [];\n    var indexToDelete = void 0;\n\n    if (tags && tags.length) {\n        tags.forEach(function (tag) {\n            var newElement = document.createElement(type);\n\n            for (var attribute in tag) {\n                if (tag.hasOwnProperty(attribute)) {\n                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {\n                        newElement.innerHTML = tag.innerHTML;\n                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {\n                        if (newElement.styleSheet) {\n                            newElement.styleSheet.cssText = tag.cssText;\n                        } else {\n                            newElement.appendChild(document.createTextNode(tag.cssText));\n                        }\n                    } else {\n                        var value = typeof tag[attribute] === \"undefined\" ? \"\" : tag[attribute];\n                        newElement.setAttribute(attribute, value);\n                    }\n                }\n            }\n\n            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, \"true\");\n\n            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.\n            if (oldTags.some(function (existingTag, index) {\n                indexToDelete = index;\n                return newElement.isEqualNode(existingTag);\n            })) {\n                oldTags.splice(indexToDelete, 1);\n            } else {\n                newTags.push(newElement);\n            }\n        });\n    }\n\n    oldTags.forEach(function (tag) {\n        return tag.parentNode.removeChild(tag);\n    });\n    newTags.forEach(function (tag) {\n        return headElement.appendChild(tag);\n    });\n\n    return {\n        oldTags: oldTags,\n        newTags: newTags\n    };\n};\n\nvar generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {\n    return Object.keys(attributes).reduce(function (str, key) {\n        var attr = typeof attributes[key] !== \"undefined\" ? key + \"=\\\"\" + attributes[key] + \"\\\"\" : \"\" + key;\n        return str ? str + \" \" + attr : attr;\n    }, \"\");\n};\n\nvar generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {\n    var attributeString = generateElementAttributesAsString(attributes);\n    var flattenedTitle = flattenArray(title);\n    return attributeString ? \"<\" + type + \" \" + _HelmetConstants.HELMET_ATTRIBUTE + \"=\\\"true\\\" \" + attributeString + \">\" + encodeSpecialCharacters(flattenedTitle, encode) + \"</\" + type + \">\" : \"<\" + type + \" \" + _HelmetConstants.HELMET_ATTRIBUTE + \"=\\\"true\\\">\" + encodeSpecialCharacters(flattenedTitle, encode) + \"</\" + type + \">\";\n};\n\nvar generateTagsAsString = function generateTagsAsString(type, tags, encode) {\n    return tags.reduce(function (str, tag) {\n        var attributeHtml = Object.keys(tag).filter(function (attribute) {\n            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);\n        }).reduce(function (string, attribute) {\n            var attr = typeof tag[attribute] === \"undefined\" ? attribute : attribute + \"=\\\"\" + encodeSpecialCharacters(tag[attribute], encode) + \"\\\"\";\n            return string ? string + \" \" + attr : attr;\n        }, \"\");\n\n        var tagContent = tag.innerHTML || tag.cssText || \"\";\n\n        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;\n\n        return str + \"<\" + type + \" \" + _HelmetConstants.HELMET_ATTRIBUTE + \"=\\\"true\\\" \" + attributeHtml + (isSelfClosing ? \"/>\" : \">\" + tagContent + \"</\" + type + \">\");\n    }, \"\");\n};\n\nvar convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {\n    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    return Object.keys(attributes).reduce(function (obj, key) {\n        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];\n        return obj;\n    }, initProps);\n};\n\nvar convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {\n    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    return Object.keys(props).reduce(function (obj, key) {\n        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];\n        return obj;\n    }, initAttributes);\n};\n\nvar generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {\n    var _initProps;\n\n    // assigning into an array to define toString function on it\n    var initProps = (_initProps = {\n        key: title\n    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);\n    var props = convertElementAttributestoReactProps(attributes, initProps);\n\n    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];\n};\n\nvar generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {\n    return tags.map(function (tag, i) {\n        var _mappedTag;\n\n        var mappedTag = (_mappedTag = {\n            key: i\n        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);\n\n        Object.keys(tag).forEach(function (attribute) {\n            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;\n\n            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {\n                var content = tag.innerHTML || tag.cssText;\n                mappedTag.dangerouslySetInnerHTML = { __html: content };\n            } else {\n                mappedTag[mappedAttribute] = tag[attribute];\n            }\n        });\n\n        return _react2.default.createElement(type, mappedTag);\n    });\n};\n\nvar getMethodsForTag = function getMethodsForTag(type, tags, encode) {\n    switch (type) {\n        case _HelmetConstants.TAG_NAMES.TITLE:\n            return {\n                toComponent: function toComponent() {\n                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);\n                },\n                toString: function toString() {\n                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);\n                }\n            };\n        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:\n        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:\n            return {\n                toComponent: function toComponent() {\n                    return convertElementAttributestoReactProps(tags);\n                },\n                toString: function toString() {\n                    return generateElementAttributesAsString(tags);\n                }\n            };\n        default:\n            return {\n                toComponent: function toComponent() {\n                    return generateTagsAsReactComponent(type, tags);\n                },\n                toString: function toString() {\n                    return generateTagsAsString(type, tags, encode);\n                }\n            };\n    }\n};\n\nvar mapStateOnServer = function mapStateOnServer(_ref) {\n    var baseTag = _ref.baseTag,\n        bodyAttributes = _ref.bodyAttributes,\n        encode = _ref.encode,\n        htmlAttributes = _ref.htmlAttributes,\n        linkTags = _ref.linkTags,\n        metaTags = _ref.metaTags,\n        noscriptTags = _ref.noscriptTags,\n        scriptTags = _ref.scriptTags,\n        styleTags = _ref.styleTags,\n        _ref$title = _ref.title,\n        title = _ref$title === undefined ? \"\" : _ref$title,\n        titleAttributes = _ref.titleAttributes;\n    return {\n        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),\n        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),\n        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),\n        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),\n        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),\n        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),\n        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),\n        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),\n        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)\n    };\n};\n\nexports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;\nexports.handleClientStateChange = handleClientStateChange;\nexports.mapStateOnServer = mapStateOnServer;\nexports.reducePropsToState = reducePropsToState;\nexports.requestAnimationFrame = requestAnimationFrame;\nexports.warn = warn;\n\n//# sourceURL=webpack:///./node_modules/react-helmet/lib/HelmetUtils.js?");

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }\n\nvar React = __webpack_require__(/*! react */ \"react\");\nvar React__default = _interopDefault(React);\nvar ExecutionEnvironment = _interopDefault(__webpack_require__(/*! exenv */ \"./node_modules/exenv/index.js\"));\nvar shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ \"./node_modules/shallowequal/index.js\"));\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {\n  if (typeof reducePropsToState !== 'function') {\n    throw new Error('Expected reducePropsToState to be a function.');\n  }\n  if (typeof handleStateChangeOnClient !== 'function') {\n    throw new Error('Expected handleStateChangeOnClient to be a function.');\n  }\n  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {\n    throw new Error('Expected mapStateOnServer to either be undefined or a function.');\n  }\n\n  function getDisplayName(WrappedComponent) {\n    return WrappedComponent.displayName || WrappedComponent.name || 'Component';\n  }\n\n  return function wrap(WrappedComponent) {\n    if (typeof WrappedComponent !== 'function') {\n      throw new Error('Expected WrappedComponent to be a React component.');\n    }\n\n    var mountedInstances = [];\n    var state = void 0;\n\n    function emitChange() {\n      state = reducePropsToState(mountedInstances.map(function (instance) {\n        return instance.props;\n      }));\n\n      if (SideEffect.canUseDOM) {\n        handleStateChangeOnClient(state);\n      } else if (mapStateOnServer) {\n        state = mapStateOnServer(state);\n      }\n    }\n\n    var SideEffect = function (_Component) {\n      _inherits(SideEffect, _Component);\n\n      function SideEffect() {\n        _classCallCheck(this, SideEffect);\n\n        return _possibleConstructorReturn(this, _Component.apply(this, arguments));\n      }\n\n      // Try to use displayName of wrapped component\n      SideEffect.peek = function peek() {\n        return state;\n      };\n\n      // Expose canUseDOM so tests can monkeypatch it\n\n\n      SideEffect.rewind = function rewind() {\n        if (SideEffect.canUseDOM) {\n          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');\n        }\n\n        var recordedState = state;\n        state = undefined;\n        mountedInstances = [];\n        return recordedState;\n      };\n\n      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {\n        return !shallowEqual(nextProps, this.props);\n      };\n\n      SideEffect.prototype.componentWillMount = function componentWillMount() {\n        mountedInstances.push(this);\n        emitChange();\n      };\n\n      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {\n        emitChange();\n      };\n\n      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {\n        var index = mountedInstances.indexOf(this);\n        mountedInstances.splice(index, 1);\n        emitChange();\n      };\n\n      SideEffect.prototype.render = function render() {\n        return React__default.createElement(WrappedComponent, this.props);\n      };\n\n      return SideEffect;\n    }(React.Component);\n\n    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';\n    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;\n\n\n    return SideEffect;\n  };\n}\n\nmodule.exports = withSideEffect;\n\n\n//# sourceURL=webpack:///./node_modules/react-side-effect/lib/index.js?");

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n\nmodule.exports = function shallowEqual(objA, objB, compare, compareContext) {\n  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;\n\n  if (ret !== void 0) {\n    return !!ret;\n  }\n\n  if (objA === objB) {\n    return true;\n  }\n\n  if (typeof objA !== \"object\" || !objA || typeof objB !== \"object\" || !objB) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);\n\n  // Test for A's keys different from B.\n  for (var idx = 0; idx < keysA.length; idx++) {\n    var key = keysA[idx];\n\n    if (!bHasOwnProperty(key)) {\n      return false;\n    }\n\n    var valueA = objA[key];\n    var valueB = objB[key];\n\n    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;\n\n    if (ret === false || (ret === void 0 && valueA !== valueB)) {\n      return false;\n    }\n  }\n\n  return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/shallowequal/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./components/Header/ */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _store = __webpack_require__(/*! ./components/Header/store/ */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, { staticContext: props.staticContext }),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\n\nApp.loadData = function (store) {\n  return store.dispatch(_store.actions.getHeaderInfo());\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: '/api/'\n});\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! ./store/ */ \"./src/components/Header/store/index.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          login = _props.login,\n          handleLogin = _props.handleLogin,\n          handleLogout = _props.handleLogout;\n\n      return _react2.default.createElement(\n        'div',\n        { className: _style2.default.test },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/' },\n          '\\u9996\\u9875'\n        ),\n        login ? _react2.default.createElement(\n          _react.Fragment,\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/translation' },\n            '\\u7FFB\\u8BD1\\u5217\\u8868'\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'div',\n            { onClick: handleLogout },\n            '\\u9000\\u51FA'\n          )\n        ) : _react2.default.createElement(\n          'div',\n          { onClick: handleLogin },\n          '\\u767B\\u9646'\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    login: state.header.login\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      dispatch(_store.actions.login());\n    },\n    handleLogout: function handleLogout() {\n      dispatch(_store.actions.logout());\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Header, _style2.default));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.logout = exports.login = exports.getHeaderInfo = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar changeLogin = function changeLogin(value) {\n  return {\n    type: _constants.CHANGE_LOGIN,\n    value: value\n  };\n};\n\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/isLogin').then(function (d) {\n      d = d.data;\n      console.log(d);\n      dispatch(changeLogin(d.data.login));\n    });\n  };\n};\n\nvar login = exports.login = function login() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/login').then(function (d) {\n      d = d.data;\n      dispatch(changeLogin(true));\n    });\n  };\n};\n\nvar logout = exports.logout = function logout() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/logout').then(function (d) {\n      d = d.data;\n      console.log(d);\n      dispatch(changeLogin(false));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'HEADER/CHANGE_LOGIN';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar defaultState = {\n  login: true\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LOGIN:\n      return _extends({}, state, {\n        login: action.value\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/container/Home/store/actions.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/container/Home/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'getList',\n    value: function getList() {\n      var list = this.props.list;\n\n      return list.map(function (item) {\n        return _react2.default.createElement(\n          'div',\n          { key: item.id },\n          item.title\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'the testing title'\n          ),\n          _react2.default.createElement('meta', { name: 'description', content: 'testing description' })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: _style2.default.test },\n          this.getList(),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                console.log('clicked');\n              } },\n            'click'\n          )\n        )\n      );\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getHomeList();\n      }\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.home.newsList\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch((0, _actions.getHomeList)());\n    }\n  };\n};\n\nvar ExportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Home, _style2.default)); // 直接使用该函数即可\n\nExportHome.loadData = function (store) {\n  return store.dispatch((0, _actions.getHomeList)());\n};\n\nexports.default = ExportHome;\n\n//# sourceURL=webpack:///./src/container/Home/index.js?");

/***/ }),

/***/ "./src/container/Home/store/actions.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHomeList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Home/store/constants.js\");\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList(server) {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/homelist.json').then(function (d) {\n      d = d.data;\n      dispatch(changeList(d));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/actions.js?");

/***/ }),

/***/ "./src/container/Home/store/constants.js":
/*!***********************************************!*\
  !*** ./src/container/Home/store/constants.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/container/Home/store/constants.js?");

/***/ }),

/***/ "./src/container/Home/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Home/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/container/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/container/Home/store/index.js?");

/***/ }),

/***/ "./src/container/Home/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/reducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Home/store/constants.js\");\n\nvar defaultState = {\n  newsList: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LIST:\n      return _extends({}, state, {\n        newsList: action.list\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/container/Home/store/reducer.js?");

/***/ }),

/***/ "./src/container/Home/style.css":
/*!**************************************!*\
  !*** ./src/container/Home/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/container/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/Home/style.css?");

/***/ }),

/***/ "./src/container/NotFound/index.js":
/*!*****************************************!*\
  !*** ./src/container/NotFound/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFound = function (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      // 这段代码只在服务端渲染可用\n      var staticContext = this.props.staticContext;\n\n      staticContext && (staticContext.NOT_FOUND = true); // 修改 context\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        '404, not found'\n      );\n    }\n  }]);\n\n  return NotFound;\n}(_react.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/container/NotFound/index.js?");

/***/ }),

/***/ "./src/container/Translation/index.js":
/*!********************************************!*\
  !*** ./src/container/Translation/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/container/Translation/store/actions.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/container/Translation/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Translation = function (_Component) {\n  _inherits(Translation, _Component);\n\n  function Translation() {\n    _classCallCheck(this, Translation);\n\n    return _possibleConstructorReturn(this, (Translation.__proto__ || Object.getPrototypeOf(Translation)).apply(this, arguments));\n  }\n\n  _createClass(Translation, [{\n    key: 'render',\n    value: function render() {\n      return this.props.login ? _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'the testing title for translation page'\n          ),\n          _react2.default.createElement('meta', { name: 'description', content: 'testing description for translation page' })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: _style2.default.test },\n          this.getList()\n        )\n      ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n    }\n  }, {\n    key: 'getList',\n    value: function getList() {\n      // 数据渲染逻辑\n      var list = this.props.list;\n\n\n      return list.map(function (item) {\n        return _react2.default.createElement(\n          'div',\n          { key: item.id },\n          item.title\n        );\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // 需要客户端渲染数据 调用 props 的方法\n      if (!this.props.list.length) {\n        this.props.getTranslationList();\n      }\n    }\n  }]);\n\n  return Translation;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { // 获取 state 渲染数据\n    list: state.translation.translationList,\n    login: state.header.login\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getTranslationList: function getTranslationList() {\n      // 客户端渲染数据方法\n      dispatch((0, _actions.getTranslationList)());\n    }\n  };\n};\n\nvar ExportTranslation = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Translation, _style2.default));\nExportTranslation.loadData = function (store) {\n  return store.dispatch((0, _actions.getTranslationList)());\n};\nexports.default = ExportTranslation;\n\n//# sourceURL=webpack:///./src/container/Translation/index.js?");

/***/ }),

/***/ "./src/container/Translation/store/actions.js":
/*!****************************************************!*\
  !*** ./src/container/Translation/store/actions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getTranslationList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Translation/store/constants.js\");\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getTranslationList = exports.getTranslationList = function getTranslationList(server) {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/translations').then(function (d) {\n      d = d.data; // 服务端自身判断用户是否登陆\n      if (d.success) {\n        var list = d.data;\n        dispatch(changeList(list));\n      } else {\n        var _list = [];\n        dispatch(changeList(_list));\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/container/Translation/store/actions.js?");

/***/ }),

/***/ "./src/container/Translation/store/constants.js":
/*!******************************************************!*\
  !*** ./src/container/Translation/store/constants.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'TRANSLATION/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/container/Translation/store/constants.js?");

/***/ }),

/***/ "./src/container/Translation/store/index.js":
/*!**************************************************!*\
  !*** ./src/container/Translation/store/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/container/Translation/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/container/Translation/store/index.js?");

/***/ }),

/***/ "./src/container/Translation/store/reducer.js":
/*!****************************************************!*\
  !*** ./src/container/Translation/store/reducer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/container/Translation/store/constants.js\");\n\nvar defaultState = {\n  translationList: [] // 定义 reducer 的默认 state\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LIST:\n      return _extends({}, state, {\n        translationList: action.list // 根据 action.type 改变 state\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/container/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/container/Translation/style.css":
/*!*********************************************!*\
  !*** ./src/container/Translation/style.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"./node_modules/css-loader/index.js?!./src/container/Translation/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/container/Translation/style.css?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../../Routes */ \"./Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\napp.use('/api', (0, _expressHttpProxy2.default)('http://localhost:3001', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    var url = '' + req.url;\n    return url;\n  }\n}));\n\napp.get('*', function (req, res) {\n  var store = (0, _store.getStore)(req);\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = { css: [] // 用于渲染 css\n    };var html = (0, _utils.render)(store, _Routes2.default, req, context);\n    if (context.action === 'REPLACE') {\n      res.redirect(301, context.url);\n    } else if (context.NOT_FOUND) {\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  });\n});\n\nvar server = app.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createInstance = function createInstance(req) {\n  return _axios2.default.create({\n    baseURL: 'http://localhost:3001/',\n    headers: { // 获得 req 并在 headers 中设置 cookie\n      cookie: req.get('cookie') || ''\n    }\n  });\n};\n\nexports.default = createInstance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(store, Routes, req, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(Routes)\n      )\n    )\n  ));\n  var helmet = _reactHelmet.Helmet.renderStatic();\n\n  // 将 css 数组转换为字符串\n  var cssStr = context.css.length ? context.css.join('\\n') : '';\n\n  return '\\n  <!DOCTYPE html>\\n  <html lang=\"en\">\\n  <head>\\n      <meta charset=\"UTF-8\">\\n      ' + helmet.title.toString() + '\\n      ' + helmet.meta.toString() + '\\n      <style>' + cssStr + '</style>\\n  </head>\\n  <body>\\n      <div id=\"root\">' + content + '</div>\\n      <script>\\n      window.context = { state: ' + JSON.stringify(store.getState()) + ' }\\n      </script>\\n      <script src=\"/index.js\"></script>\\n  </body>\\n  </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../container/Home/store */ \"./src/container/Home/store/index.js\");\n\nvar _store2 = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n\nvar _store3 = __webpack_require__(/*! ../container/Translation/store */ \"./src/container/Translation/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store.reducer,\n  header: _store2.reducer,\n  translation: _store3.reducer // 合并 reducer\n});\n\nvar getStore = exports.getStore = function getStore(req) {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req))));\n};\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  var defaultState = window.context.state;\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 本质上是一个函数；函数返回一个新的组件；这个组件名为高阶组件；部分参数需要外部传入；\n\n\nexports.default = function (DecoratedComponent, style) {\n  return function (_Component) {\n    _inherits(NewComponent, _Component);\n\n    function NewComponent() {\n      _classCallCheck(this, NewComponent);\n\n      return _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));\n    }\n\n    _createClass(NewComponent, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        if (this.props.staticContext) {\n          this.props.staticContext.css.push(style._getCss()); // style 样式需要外部传入\n        }\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        // DecoratedComponent 也需要外部传入\n        return _react2.default.createElement(DecoratedComponent, this.props);\n      }\n    }]);\n\n    return NewComponent;\n  }(_react.Component);\n};\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"object-assign\");\n\n//# sourceURL=webpack:///external_%22object-assign%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });