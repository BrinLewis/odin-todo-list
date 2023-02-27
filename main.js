/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n* {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n:root {\\n  --header-height: 80px;\\n  --sidebar-width: 350px;\\n  --transition-timing: 350ms;\\n  --standard-border: 2px solid black;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\n.header-btn {\\n  width: 50px;\\n}\\n\\n.icon:hover {\\n  cursor: pointer;\\n}\\n\\n.icon:active {\\n  transform: scale(0.9);\\n}\\n\\n.header {\\n  position: sticky;\\n  top: 0;\\n  z-index: 1;\\n  display: flex;\\n  height: var(--header-height);\\n  width: 100%;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: var(--standard-border);\\n  background-color: white;\\n}\\n\\n.container {\\n  display: flex;\\n  height: calc(100% - var(--header-height));\\n}\\n\\n.sidebar {\\n  width: var(--sidebar-width);\\n  height: 100%;\\n  border-right: var(--standard-border);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  position: relative;\\n  transition: transform var(--transition-timing) ease-in-out,\\n    width var(--transition-timing) ease-in-out;\\n}\\n\\n.closed {\\n  width: 0;\\n  transform: translateX(calc(var(--sidebar-width) * -1));\\n}\\n\\n.closed > .folders {\\n  transform: translateX(calc(var(--sidebar-width) * -1));\\n}\\n\\n.folders {\\n  width: 200px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: fit-content 1fr;\\n  align-items: center;\\n  justify-items: center;\\n  row-gap: 20px;\\n  padding-top: 20px;\\n  transition: transform var(--transition-timing) ease-in-out;\\n}\\n\\n.folders-heading {\\n  font-size: 2rem;\\n  font-weight: bold;\\n}\\n\\n#add-folder-btn {\\n  width: 30px;\\n}\\n\\n.folders > ul {\\n  grid-column-start: 1;\\n  grid-column-end: 3;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n.folders > ul {\\n  font-size: 1.5rem;\\n  width: 170px;\\n}\\n\\n.folders > ul > li {\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.folder {\\n  padding: 0 2px;\\n}\\n\\n.folder .selected {\\n  border: var(--standard-border);\\n  border-radius: 5px;\\n}\\n\\n.selected ~ .delete-folder {\\n  display: block;\\n}\\n\\n.delete-folder {\\n  display: none;\\n  width: 20px;\\n}\\n\\n.new-folder-form {\\n  width: 100%;\\n  border: var(--standard-border);\\n  border-radius: 10px;\\n  grid-column-start: 1;\\n  grid-column-end: 3;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 10px;\\n  padding: 5px;\\n}\\n\\n.folder-form-heading {\\n  font-weight: bold;\\n}\\n\\n.form-name-input {\\n  width: 90%;\\n  border: var(--standard-border);\\n  border-radius: 20px;\\n  padding-left: 10px;\\n}\\n\\n.btns-container {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n\\n.btns-container > button {\\n  width: 70px;\\n  border: var(--standard-border);\\n  border-radius: 7px;\\n  margin-bottom: 6px;\\n}\\n\\n.new-folder-form,\\n.form-name-input,\\n.btns-container > button {\\n  font-size: 18px;\\n}\\n\\n.content {\\n  width: 100%;\\n  min-height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 30px;\\n}\\n\\n.todo-list {\\n  width: 100%;\\n  height: max-content;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 15px;\\n}\\n\\n.todo {\\n  position: relative;\\n  width: 70%;\\n}\\n\\n.todo,\\n.add-todo-form {\\n  display: flex;\\n  border: var(--standard-border);\\n  border-radius: 5px;\\n  background-color: white;\\n  align-items: center;\\n}\\n\\n.priority {\\n  height: 100%;\\n  width: 10px;\\n  border-top-left-radius: 3px;\\n  border-bottom-left-radius: 3px;\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n  display: none;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked + label {\\n  background-color: rgb(42, 211, 253);\\n  box-shadow: inset 0 0 0px 5px rgb(255, 255, 255);\\n}\\n\\n.todo > label:hover {\\n  background-color: rgba(0, 194, 243, 0.178);\\n  box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0.281);\\n}\\n\\n.todo > label:active {\\n  transform: scale(0.9);\\n}\\n\\n.todo > label {\\n  margin: 0 15px;\\n  width: 30px;\\n  height: 30px;\\n  border: var(--standard-border);\\n  border-radius: 50%;\\n}\\n\\n.todo-info {\\n  flex-grow: 1;\\n  padding: 10px 0;\\n}\\n\\n.todo,\\n.todo-info,\\nlabel {\\n  cursor: pointer;\\n}\\n\\n.todo-info > * {\\n  cursor: auto;\\n}\\n\\n.todo-title {\\n  font-size: 25px;\\n  width: max-content;\\n}\\n\\n.todo-desc {\\n  font-size: 20px;\\n  font-weight: 300;\\n  display: none;\\n  width: max-content;\\n}\\n\\n.expanded {\\n  width: 75%;\\n  height: fit-content;\\n}\\n\\n.expanded > .todo-info > .todo-desc {\\n  display: block;\\n}\\n\\n.todo select {\\n  font-size: 18px;\\n}\\n\\ninput[type=\\\"date\\\"] {\\n  width: 180px;\\n  appearance: none;\\n  border: none;\\n  border-radius: 9px;\\n  font-size: 25px;\\n  margin-right: 10px;\\n  text-align: center;\\n}\\n\\ninput[type=\\\"date\\\"]:disabled {\\n  background-color: transparent;\\n}\\n\\n.delete-todo {\\n  position: absolute;\\n  right: -30px;\\n  width: 25px;\\n}\\n\\n.add-todo-form {\\n  width: 50%;\\n  flex-direction: column;\\n  padding: 10px 20px;\\n  gap: 10px;\\n}\\n\\n.new-item-heading {\\n  font-weight: 600;\\n}\\n\\n.new-todo-info {\\n  display: flex;\\n  width: 80%;\\n  justify-content: center;\\n  gap: 10px;\\n}\\n\\n.new-todo-info > input {\\n  width: 100%;\\n  height: 1.3em;\\n  padding-left: 10px;\\n  border: var(--standard-border);\\n  border-radius: 20px;\\n}\\n\\n.date-prio-container {\\n  display: flex;\\n  gap: 80px;\\n}\\n\\n#date {\\n  font-size: 20px;\\n  border: var(--standard-border);\\n  border-radius: 20px;\\n}\\n\\n.add-todo-form * {\\n  align-items: center;\\n  font-size: 20px;\\n}\\n\\n.add-todo-form select {\\n  padding-bottom: 3px;\\n}\\n\\n.select {\\n  background-color: white;\\n  border: var(--standard-border);\\n  border-radius: 20px;\\n  padding-left: 5px;\\n}\\n\\n.form-btns {\\n  display: flex;\\n  gap: 30px;\\n}\\n\\n.form-btns > button {\\n  height: 30px;\\n  width: 100px;\\n  border: var(--standard-border);\\n  border-radius: 10px;\\n}\\n\\n#submit-todo-btn,\\n#submit-folder-btn {\\n  background-color: rgb(42, 211, 253);\\n}\\n\\n#cancel-todo-btn,\\n#cancel-folder-btn {\\n  background-color: rgb(204, 49, 49);\\n}\\n\\n#add-todo-button {\\n  width: 50px;\\n  margin: 20px;\\n}\\n\\n#folderEmptyText {\\n  margin-top: 10%;\\n  font-size: 25px;\\n  margin-bottom: 5%;\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-todo-form.js":
/*!******************************!*\
  !*** ./src/add-todo-form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allFieldsFilled\": () => (/* binding */ allFieldsFilled),\n/* harmony export */   \"clearForm\": () => (/* binding */ clearForm),\n/* harmony export */   \"renderForm\": () => (/* binding */ renderForm)\n/* harmony export */ });\n/* harmony import */ var _todo_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-creator */ \"./src/todo-creator.js\");\n/* harmony import */ var _folder_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder-logic */ \"./src/folder-logic.js\");\n\n\n\n\n\nfunction renderForm() {\n  // Create Elements\n  const form = document.createElement(\"form\");\n  form.classList.add(\"add-todo-form\");\n\n  const heading = document.createElement(\"p\");\n  heading.classList.add(\"new-item-heading\");\n  heading.textContent = \"Add New ToDo:\";\n\n  const titleContainer = document.createElement(\"div\");\n  titleContainer.classList.add(\"new-todo-info\");\n\n  const titleLabel = document.createElement(\"label\");\n  titleLabel.setAttribute(\"for\", \"title\");\n  titleLabel.textContent = \"Title:\";\n\n  const title = document.createElement(\"input\");\n  title.setAttribute(\"type\", \"text\");\n  title.id = \"title\";\n  title.setAttribute(\"placeholder\", \"E.g. Visit Grandma\");\n\n  const descContainer = document.createElement(\"div\");\n  descContainer.classList.add(\"new-todo-info\");\n\n  const descLabel = document.createElement(\"label\");\n  descLabel.setAttribute(\"for\", \"desc\");\n  descLabel.textContent = \"Description:\";\n\n  const description = document.createElement(\"input\");\n  description.setAttribute(\"type\", \"text\");\n  description.id = \"desc\";\n  description.setAttribute(\"placeholder\", \"Bring her some chocolate\");\n\n  const datePriorityContainer = document.createElement(\"div\");\n  datePriorityContainer.classList.add(\"date-prio-container\");\n\n  const dateContainer = document.createElement(\"div\");\n\n  const dateLabel = document.createElement(\"label\");\n  dateLabel.setAttribute(\"for\", \"date\");\n  dateLabel.textContent = \"Due Date: \";\n\n  const date = document.createElement(\"input\");\n  date.setAttribute(\"type\", \"date\");\n  date.id = \"date\";\n\n  const priorityContainer = document.createElement(\"div\");\n\n  const priorityLabel = document.createElement(\"label\");\n  priorityLabel.setAttribute(\"for\", \"priority-level\");\n  priorityLabel.textContent = \"Priority Level: \";\n\n  const prioritySelect = document.createElement(\"select\");\n  prioritySelect.setAttribute(\"name\", \"priority\");\n  prioritySelect.id = \"priority-level\";\n  prioritySelect.classList.add(\"select\");\n\n  const options = [];\n  function renderOption(value, textContent, isSelected) {\n    const option = document.createElement(\"option\");\n    option.value = value;\n    option.textContent = textContent;\n    option.selected = isSelected;\n    options.push(option);\n  }\n  renderOption(\"red\", \"High\");\n  renderOption(\"orange\", \"Medium\");\n  renderOption(\"white\", \"Low\", true);\n\n  const folderSelectorContainer = document.createElement(\"div\");\n  folderSelectorContainer.classList.add(\"folder-selector-container\");\n\n  const folderSelectorLabel = document.createElement(\"label\");\n  folderSelectorLabel.setAttribute(\"for\", \"folder-selector\");\n  folderSelectorLabel.textContent = \"Folder: \"\n\n  const folderSelector = document.createElement(\"select\");\n  folderSelector.setAttribute(\"name\", \"new-todo-folder-select\");\n  folderSelector.classList.add(\"select\");\n  folderSelector.id = \"folder-selector\";\n\n  (0,_folder_logic__WEBPACK_IMPORTED_MODULE_1__.folderDropdownOptions)(folderSelector);\n\n  const formBtns = document.createElement(\"div\");\n  formBtns.classList.add(\"form-btns\");\n\n  const submitBtn = document.createElement(\"button\");\n  submitBtn.id = \"submit-todo-btn\";\n  submitBtn.textContent = \"Add\";\n\n  const cancelBtn = document.createElement(\"button\");\n  cancelBtn.setAttribute(\"type\", \"button\");\n  cancelBtn.id = \"cancel-todo-btn\";\n  cancelBtn.textContent = \"Cancel\";\n\n  // Structure Elements\n  const content = document.querySelector(\".content\");\n  content.appendChild(form);\n\n  const formItems = [\n    heading,\n    titleContainer,\n    descContainer,\n    datePriorityContainer,\n    folderSelectorContainer,\n    formBtns,\n  ];\n\n  formItems.forEach((item) => {\n    form.appendChild(item);\n  });\n\n  titleContainer.appendChild(titleLabel);\n  titleContainer.appendChild(title);\n\n  descContainer.appendChild(descLabel);\n  descContainer.appendChild(description);\n\n  datePriorityContainer.appendChild(dateContainer);\n  dateContainer.appendChild(dateLabel);\n  dateContainer.appendChild(date);\n\n  datePriorityContainer.appendChild(priorityContainer);\n  priorityContainer.appendChild(priorityLabel);\n  priorityContainer.appendChild(prioritySelect);\n\n  options.forEach((option) => {\n    prioritySelect.appendChild(option);\n  });\n\n  folderSelectorContainer.appendChild(folderSelectorLabel);\n  folderSelectorContainer.appendChild(folderSelector);\n\n  formBtns.appendChild(submitBtn);\n  formBtns.appendChild(cancelBtn);\n\n  // Add the event listeners once form is rendered\n  formEventListeners();\n}\n\nfunction allFieldsFilled(todoObj) {\n  if (Object.values(todoObj).includes(\"\")) {\n    alert(\"One or more fields are empty, please fill in all fields\");\n    return false;\n  } else {\n    return true;\n  }\n}\n\nfunction clearForm() {\n  const content = document.querySelector(\".content\");\n  const form = document.querySelector(\".add-todo-form\");\n  content.removeChild(form);\n}\n\nfunction getFormValues() {\n  const title = document.getElementById(\"title\");\n  const description = document.getElementById(\"desc\");\n  const dueDate = document.getElementById(\"date\");\n  const priority = document.getElementById(\"priority-level\");\n  const folder = document.getElementById(\"folder-selector\");\n  return {\n    title: title.value,\n    description: description.value,\n    dueDate: dueDate.value,\n    priority: priority.value,\n    folder: folder.value\n  };\n}\n\nfunction formEventListeners() {\n  // Form/Add button Event Listener\n  const form = document.querySelector(\".add-todo-form\");\n\n  form.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n\n    const valuesObj = getFormValues();\n\n    if (allFieldsFilled(valuesObj)) {\n      (0,_todo_creator__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\n        valuesObj.title,\n        valuesObj.description,\n        valuesObj.dueDate,\n        valuesObj.priority,\n        valuesObj.folder\n      );\n\n      clearForm();\n    }\n  });\n\n  // Cancel button Event Listener\n  const cancel = document.getElementById(\"cancel-todo-btn\");\n  cancel.addEventListener(\"click\", () => {\n    clearForm();\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/add-todo-form.js?");

/***/ }),

/***/ "./src/folder-logic.js":
/*!*****************************!*\
  !*** ./src/folder-logic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"folderDropdownOptions\": () => (/* binding */ folderDropdownOptions),\n/* harmony export */   \"renderFolders\": () => (/* binding */ renderFolders),\n/* harmony export */   \"updateFolder\": () => (/* binding */ updateFolder)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _todo_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-creator */ \"./src/todo-creator.js\");\n/* harmony import */ var _todo_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-manipulation */ \"./src/todo-manipulation.js\");\n\n\n\n\n\nlet allFolders = [\"Home\", \"Daily\", \"Weekly\", \"Homework\"];\n\nfunction renderFolders() {\n  clearFolders();\n\n  const foldersContainer = document.querySelector(\".folders\");\n  const folderList = document.createElement(\"ul\");\n  foldersContainer.appendChild(folderList);\n\n  allFolders.forEach((item) => {\n    // Create Elements\n    const folder = document.createElement(\"li\");\n\n    const folderName = document.createElement(\"p\");\n    folderName.textContent = item;\n    folderName.classList.add(\"folder\");\n\n    const deleteFolderBtn = document.createElement(\"img\");\n    deleteFolderBtn.src = \"./assets/close-blue.svg\";\n    deleteFolderBtn.alt = `delete ${item} folder button`;\n    deleteFolderBtn.classList.add(\"delete-folder\");\n\n    // Structure Elements\n    folderList.appendChild(folder);\n    folder.appendChild(folderName);\n    folder.appendChild(deleteFolderBtn);\n\n    //Add Event Listeners\n    folderName.addEventListener(\"click\", () => {\n      selectFolder(folderName);\n\n      const folderToRender = folderName.textContent;\n      (0,_todo_creator__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(folderToRender);\n    });\n\n    (0,___WEBPACK_IMPORTED_MODULE_0__.hoverCloseBtn)(deleteFolderBtn);\n\n    deleteFolderBtn.addEventListener(\"click\", () => {\n      deleteFolder(deleteFolderBtn);\n    });\n  });\n}\n\nfunction selectFolder(targetFolder) {\n  const folders = document.querySelectorAll(\".folder\");\n  folders.forEach((folder) => {\n    if (folder !== targetFolder) {\n      folder.classList.remove(\"selected\");\n    }\n  });\n  targetFolder.classList.toggle(\"selected\");\n}\n\nfunction deleteFolder(clickedBtn) {\n  const folderTextEl = clickedBtn.previousElementSibling;\n  const folderName = folderTextEl.textContent;\n\n  if (folderName === \"Home\") {\n    alert(\"You cannot delete the home page\");\n    return;\n  }\n\n  const index = allFolders.indexOf(folderName);\n  if (index !== -1) {\n    allFolders.splice(index, 1);\n  }\n\n  (0,_todo_manipulation__WEBPACK_IMPORTED_MODULE_2__.deleteTodosFromFolder)(folderName);\n\n  renderFolders();\n}\n\nfunction clearFolders() {\n  const folderContainer = document.querySelector(\".folders\");\n  const existingList = folderContainer.querySelector(\"ul\");\n  if (existingList) {\n    folderContainer.removeChild(existingList);\n  }\n}\n\nfunction renderFolderForm() {\n  // Create Elements\n  const folderFormContainer = document.createElement(\"form\");\n  folderFormContainer.classList.add(\"new-folder-form\");\n\n  const formHeading = document.createElement(\"p\");\n  formHeading.classList.add(\"folder-form-heading\");\n  formHeading.textContent = \"New Folder:\";\n\n  const formNameInput = document.createElement(\"input\");\n  formNameInput.setAttribute(\"type\", \"text\");\n  formNameInput.classList.add(\"form-name-input\");\n\n  const btnsContainer = document.createElement(\"div\");\n  btnsContainer.classList.add(\"btns-container\");\n\n  const submitBtn = document.createElement(\"button\");\n  submitBtn.setAttribute(\"type\", \"button\");\n  submitBtn.id = \"submit-folder-btn\";\n  submitBtn.textContent = \"Add\";\n\n  const cancelBtn = document.createElement(\"button\");\n  cancelBtn.setAttribute(\"type\", \"button\");\n  cancelBtn.id = \"cancel-folder-btn\";\n  cancelBtn.textContent = \"Cancel\";\n\n  // Structure Elements\n  const foldersContainer = document.querySelector(\".folders\");\n  foldersContainer.appendChild(folderFormContainer);\n\n  folderFormContainer.appendChild(formHeading);\n  folderFormContainer.appendChild(formNameInput);\n  folderFormContainer.appendChild(btnsContainer);\n\n  btnsContainer.appendChild(submitBtn);\n  btnsContainer.appendChild(cancelBtn);\n\n  // Event Listeners\n  submitBtn.addEventListener(\"click\", () => {\n    clearFolderForm();\n    addNewFolder(formNameInput.value);\n  });\n\n  cancelBtn.addEventListener(\"click\", () => {\n    clearFolderForm();\n  });\n}\n\nfunction addNewFolder(folderName) {\n  allFolders.push(folderName);\n  renderFolders();\n}\n\nconst addFolderBtn = document.getElementById(\"add-folder-btn\");\naddFolderBtn.addEventListener(\"click\", () => {\n  let folderForm = document.querySelector(\".new-folder-form\");\n\n  if (!folderForm) {\n    renderFolderForm();\n  }\n});\n\nfunction clearFolderForm() {\n  const foldersContainer = document.querySelector(\".folders\");\n  const folderFormContainer = document.querySelector(\".new-folder-form\");\n  foldersContainer.removeChild(folderFormContainer);\n}\n\nfunction folderDropdownOptions(parent, folderName) {\n  allFolders.forEach((folder) => {\n    const option = document.createElement(\"option\");\n    option.value = folder;\n    option.textContent = folder;\n    if (folder === folderName) {\n      option.selected = true;\n    }\n    parent.appendChild(option);\n  });\n}\n\nfunction updateFolder(selectElement) {\n  const todoObject = (0,_todo_manipulation__WEBPACK_IMPORTED_MODULE_2__.getRelatedObject)(selectElement);\n  todoObject.folder = selectElement.value;\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/folder-logic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hoverCloseBtn\": () => (/* binding */ hoverCloseBtn)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/menu.svg */ \"./src/assets/menu.svg\");\n/* harmony import */ var _assets_home_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/home.svg */ \"./src/assets/home.svg\");\n/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/plus.svg */ \"./src/assets/plus.svg\");\n/* harmony import */ var _assets_close_blue_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/close-blue.svg */ \"./src/assets/close-blue.svg\");\n/* harmony import */ var _assets_close_red_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/close-red.svg */ \"./src/assets/close-red.svg\");\n/* harmony import */ var _folder_logic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder-logic */ \"./src/folder-logic.js\");\n/* harmony import */ var _todo_creator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-creator */ \"./src/todo-creator.js\");\n/* harmony import */ var _add_todo_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-todo-form */ \"./src/add-todo-form.js\");\n\n\n\n\n\n\n\n\n\n\nsidebarToggle();\n(0,_todo_creator__WEBPACK_IMPORTED_MODULE_7__.createTodo)(\n  \"Wash dishes\",\n  \"Make sure to get all of them!\",\n  \"2024-02-12\",\n  \"orange\",\n  \"Daily\"\n);\n(0,_todo_creator__WEBPACK_IMPORTED_MODULE_7__.createTodo)(\"Do nothing\", \"Shut up\", \"2023-04-15\", \"red\", \"Daily\");\n(0,_todo_creator__WEBPACK_IMPORTED_MODULE_7__.createTodo)(\n  \"Play video games\",\n  \"COD, Halo, Flappy Bird\",\n  \"2023-01-25\",\n  \"cyan\",\n  \"Weekly\"\n);\n(0,_folder_logic__WEBPACK_IMPORTED_MODULE_6__.renderFolders)();\n\n// Plus button to call renderForm() - Event Listener\nconst plusBtn = document.getElementById(\"add-todo-button\");\nplusBtn.addEventListener(\"click\", () => {\n  let form = document.querySelector(\".add-todo-form\");\n\n  if (!form) {\n    (0,_add_todo_form__WEBPACK_IMPORTED_MODULE_8__.renderForm)();\n  }\n});\n\nfunction hoverCloseBtn(btn) {\n  btn.addEventListener(\"mouseover\", () => {\n    btn.src = \"./assets/close-red.svg\";\n  });\n  btn.addEventListener(\"mouseout\", () => {\n    btn.src = \"./assets/close-blue.svg\";\n  });\n}\n\nfunction sidebarToggle() {\n  const toggleBtn = document.getElementById(\"sidebar-toggle\");\n  const sidebar = document.querySelector(\".sidebar\");\n  toggleBtn.addEventListener(\"click\", () => {\n    sidebar.classList.toggle(\"closed\");\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo-creator.js":
/*!*****************************!*\
  !*** ./src/todo-creator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allTodos\": () => (/* binding */ allTodos),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"renderTodos\": () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _todo_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-manipulation */ \"./src/todo-manipulation.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _folder_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder-logic */ \"./src/folder-logic.js\");\n\n\n\n\n\n\nlet allTodos = [];\n\nfunction createTodo(title, description, dueDate, priority, folder = \"Home\") {\n  let todo = {\n    title,\n    description,\n    dueDate,\n    priority,\n    folder,\n  };\n\n  allTodos.push(todo);\n  renderTodos();\n  return todo;\n}\n\nfunction renderTodos(folderToRender = \"Home\") {\n  clearTodos();\n\n  let todosEmpty = true;\n\n  allTodos.forEach((item, index) => {\n    if (folderToRender === \"Home\" || folderToRender === item.folder) {\n      todosEmpty = false;\n\n      // Create elements\n      const todoContainer = document.createElement(\"div\");\n      todoContainer.classList.add(\"todo\");\n      todoContainer.id = `todo-item-${index + 1}`;\n\n      const priorityIndicator = document.createElement(\"div\");\n      priorityIndicator.classList.add(\"priority\");\n      priorityIndicator.style.backgroundColor = item.priority;\n\n      const checkbox = document.createElement(\"input\");\n      checkbox.setAttribute(\"type\", \"checkbox\");\n      checkbox.id = `checkbox-${index + 1}`;\n\n      const checkboxLabel = document.createElement(`label`);\n      checkboxLabel.setAttribute(\"for\", `${checkbox.id}`);\n\n      const infoContainer = document.createElement(\"div\");\n      infoContainer.classList.add(\"todo-info\");\n\n      const title = document.createElement(\"p\");\n      title.classList.add(\"todo-title\");\n      title.classList.add(\"info-item\");\n      title.setAttribute(\"contenteditable\", true);\n      title.textContent = item.title;\n\n      const description = document.createElement(\"p\");\n      description.classList.add(\"todo-desc\");\n      description.classList.add(\"info-item\");\n      description.setAttribute(\"contenteditable\", true);\n      description.textContent = item.description;\n\n      const folderSelect = document.createElement(\"select\");\n      folderSelect.setAttribute(\"name\", \"folder-select\");\n      folderSelect.classList.add(\"select\");\n\n      (0,_folder_logic__WEBPACK_IMPORTED_MODULE_2__.folderDropdownOptions)(folderSelect, item.folder);\n\n      const date = document.createElement(\"input\");\n      date.setAttribute(\"type\", \"date\");\n      date.setAttribute(\"name\", `duedate-${index + 1}`);\n      date.setAttribute(\"id\", `duedate-${index + 1}`);\n      date.setAttribute(\"value\", `${item.dueDate}`);\n\n      const deleteBtn = document.createElement(\"img\");\n      deleteBtn.src = \"./assets/close-blue.svg\";\n      deleteBtn.setAttribute(\"alt\", \"delete todo button\");\n      deleteBtn.classList.add(\"delete-todo\");\n\n      // Structure elements\n      const todoList = document.querySelector(\".todo-list\");\n      todoList.appendChild(todoContainer);\n\n      const todoContainerChildren = [\n        priorityIndicator,\n        checkbox,\n        checkboxLabel,\n        infoContainer,\n        folderSelect,\n        date,\n        deleteBtn,\n      ];\n\n      todoContainerChildren.forEach((element) => {\n        todoContainer.appendChild(element);\n      });\n\n      infoContainer.appendChild(title);\n      infoContainer.appendChild(description);\n    }\n  });\n\n  if (todosEmpty) {\n    const todoList = document.querySelector(\".todo-list\");\n    const folderEmptyText = document.createElement(\"p\");\n    folderEmptyText.id = \"folderEmptyText\";\n    folderEmptyText.textContent =\n      \"This folder is empty, press the plus button below to add a todo!\";\n\n    todoList.appendChild(folderEmptyText);\n  }\n\n  todoEventListeners();\n}\n\nfunction clearTodos() {\n  const todoList = document.querySelector(\".todo-list\");\n\n  while (todoList.firstChild) {\n    todoList.removeChild(todoList.lastChild);\n  }\n}\n\nfunction todoEventListeners() {\n  // Expand todo\n  const allTodoElements = document.querySelectorAll(\".todo\");\n  allTodoElements.forEach((todo) => {\n    const infoContainer = todo.querySelector(\".todo-info\");\n\n    todo.addEventListener(\"click\", (event) => {\n      if (todo !== event.target && infoContainer !== event.target) {\n        return;\n      }\n      (0,_todo_manipulation__WEBPACK_IMPORTED_MODULE_0__.expandTodo)(todo);\n    });\n  });\n\n  // Checkbox\n  const allCheckboxes = document.querySelectorAll(\"input[type='checkbox']\");\n  allCheckboxes.forEach((checkbox) => {\n    checkbox.addEventListener(\"click\", () => {\n      (0,_todo_manipulation__WEBPACK_IMPORTED_MODULE_0__.toggleTodoChecked)(checkbox);\n    });\n  });\n\n  // Delete btn\n  const allDeleteTodoBtns = document.querySelectorAll(\".delete-todo\");\n  allDeleteTodoBtns.forEach((btn) => {\n    (0,___WEBPACK_IMPORTED_MODULE_1__.hoverCloseBtn)(btn);\n\n    btn.addEventListener(\"click\", () => {\n      (0,_todo_manipulation__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(btn);\n    });\n  });\n\n  // Priority color\n  const allPriorityBtns = document.querySelectorAll(\".priority\");\n  allPriorityBtns.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n      (0,_todo_manipulation__WEBPACK_IMPORTED_MODULE_0__.changePriority)(btn);\n    });\n  });\n\n  // Update object info with inputted DOM info\n  const allInfoItems = document.querySelectorAll(\".info-item\");\n  allInfoItems.forEach((item) => {\n    item.addEventListener(\"blur\", () => {\n      (0,_todo_manipulation__WEBPACK_IMPORTED_MODULE_0__.updateText)(item);\n    });\n  });\n\n  // Change folder when dropdown list is changed\n  const allSelectFolders = document.querySelectorAll(\".todo select\");\n  allSelectFolders.forEach((selectFolder) => {\n    selectFolder.addEventListener(\"change\", () => {\n      (0,_folder_logic__WEBPACK_IMPORTED_MODULE_2__.updateFolder)(selectFolder);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/todo-creator.js?");

/***/ }),

/***/ "./src/todo-manipulation.js":
/*!**********************************!*\
  !*** ./src/todo-manipulation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePriority\": () => (/* binding */ changePriority),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"deleteTodosFromFolder\": () => (/* binding */ deleteTodosFromFolder),\n/* harmony export */   \"expandTodo\": () => (/* binding */ expandTodo),\n/* harmony export */   \"getRelatedObject\": () => (/* binding */ getRelatedObject),\n/* harmony export */   \"toggleTodoChecked\": () => (/* binding */ toggleTodoChecked),\n/* harmony export */   \"updateText\": () => (/* binding */ updateText)\n/* harmony export */ });\n/* harmony import */ var _todo_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-creator */ \"./src/todo-creator.js\");\n\n\n\n\nfunction expandTodo(target) {\n  const todoElements = document.querySelectorAll(\".todo\");\n  todoElements.forEach((el) => {\n    if (el !== target) {\n      el.classList.remove(\"expanded\");\n    }\n  });\n\n  target.classList.toggle(\"expanded\");\n}\n\nfunction toggleTodoChecked(box) {\n  const todo = box.parentNode;\n  const infoContainer = todo.querySelector(\".todo-info\");\n  const date = todo.querySelector(\"input[type='date']\");\n\n  if (box.checked) {\n    todo.setAttribute(\"style\", \"background-color: rgba(209, 209, 209, 0.651)\");\n    infoContainer.setAttribute(\n      \"style\",\n      \"text-decoration: line-through; color: rgb(90, 90, 90);\"\n    );\n    date.disabled = true;\n  } else {\n    todo.setAttribute(\"style\", \"background-color: white\");\n    infoContainer.removeAttribute(\n      \"style\",\n      \"text-decoration: line-through; color: black;\"\n    );\n    date.disabled = false;\n  }\n}\n\nfunction changePriorityColor(priorityBtn) {\n  switch (priorityBtn.style.backgroundColor) {\n    case \"red\":\n      priorityBtn.style.backgroundColor = \"orange\";\n      break;\n    case \"orange\":\n      priorityBtn.style.backgroundColor = \"cyan\";\n      break;\n    case \"cyan\":\n      priorityBtn.style.backgroundColor = \"red\";\n      break;\n    default:\n      priorityBtn.style.backgroundColor = \"red\";\n  }\n}\n\nfunction getRelatedObject(element) {\n  let todoContainer;\n  if (element.classList.contains(\"todo\")) {\n    todoContainer = element;\n  } else if (element.classList.contains(\"info-item\")) {\n    todoContainer = element.parentNode.parentNode;\n  } else {\n    todoContainer = element.parentNode;\n  }\n\n  const todoId = todoContainer.id;\n  const index = todoId.slice(-1) - 1;\n  const object = _todo_creator__WEBPACK_IMPORTED_MODULE_0__.allTodos[index];\n\n  return object;\n}\n\nfunction changePriority(priorityBtn) {\n  changePriorityColor(priorityBtn);\n\n  const todoObject = getRelatedObject(priorityBtn);\n  todoObject.priority = priorityBtn.style.backgroundColor;\n}\n\nfunction updateText(infoItem) {\n  const todoObject = getRelatedObject(infoItem);\n  if (infoItem.classList.contains(\"todo-title\")) {\n    todoObject.title = infoItem.textContent;\n  } else {\n    todoObject.description = infoItem.textContent;\n  }\n}\n\nfunction deleteTodo(clickedBtn) {\n  const todoObj = getRelatedObject(clickedBtn);\n  const index = _todo_creator__WEBPACK_IMPORTED_MODULE_0__.allTodos.indexOf(todoObj);\n  _todo_creator__WEBPACK_IMPORTED_MODULE_0__.allTodos.splice(index, 1);\n  (0,_todo_creator__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();\n}\n\nfunction deleteTodosFromFolder(folderName) {\n  let i = 0;\n\n  while (i < _todo_creator__WEBPACK_IMPORTED_MODULE_0__.allTodos.length) {\n    const todo = _todo_creator__WEBPACK_IMPORTED_MODULE_0__.allTodos[i];\n\n    if (todo.folder === folderName) {\n      _todo_creator__WEBPACK_IMPORTED_MODULE_0__.allTodos.splice(i, 1);\n    } else {\n      i += 1;\n    }\n  }\n\n  (0,_todo_creator__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/todo-manipulation.js?");

/***/ }),

/***/ "./src/assets/close-blue.svg":
/*!***********************************!*\
  !*** ./src/assets/close-blue.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/close-blue.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/assets/close-blue.svg?");

/***/ }),

/***/ "./src/assets/close-red.svg":
/*!**********************************!*\
  !*** ./src/assets/close-red.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/close-red.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/assets/close-red.svg?");

/***/ }),

/***/ "./src/assets/home.svg":
/*!*****************************!*\
  !*** ./src/assets/home.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/home.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/assets/home.svg?");

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/menu.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/assets/menu.svg?");

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/plus.svg\";\n\n//# sourceURL=webpack://odin-todo-list/./src/assets/plus.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;