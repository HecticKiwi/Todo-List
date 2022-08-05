/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: \"Open Sans\", sans-serif;\n  --primary: hsl(209, 91%, 68%);\n  --secondary: hsl(0, 0%, 95%);\n  --border: rgb(194, 194, 194);\n  --transition-time: 400ms;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2 {\n  color: rgb(36, 36, 36);\n}\n\nh1 {\n  margin: 0;\n}\n\nh2 {\n  margin-top: 0;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\n.header,\n.projects li,\n.new-project,\n.todo .summary {\n  display: flex;\n  align-items: center;\n}\n\nbody {\n  line-height: normal;\n  min-height: 100vh;\n  display: grid;\n  grid-template: min-content 1fr/15rem 1fr;\n  gap: 1px;\n  background-color: rgb(194, 194, 194);\n}\n\n.header {\n  grid-column: 1/span 2;\n  background-color: var(--primary);\n  padding: 1rem;\n}\n.header .logo-img {\n  width: 3rem;\n  margin-right: 1rem;\n}\n\n.sidebar {\n  background-color: var(--secondary);\n  padding: 2rem;\n}\n.sidebar .projects-header {\n  font-size: 1.2rem;\n}\n.sidebar .projects li,\n.sidebar .new-project {\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  cursor: pointer;\n}\n.sidebar .projects li:hover {\n  font-weight: bold;\n}\n.sidebar .delete {\n  margin-left: auto;\n}\n.sidebar .projects li:hover .delete {\n  display: inline-block;\n}\n.sidebar .todo-count {\n  border: 1px solid var(--primary);\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n  flex: 0 0 auto;\n}\n.sidebar .todo-count,\n.sidebar .new-project img {\n  width: 1.75rem;\n  height: 1.75rem;\n  margin-right: 1rem;\n}\n.sidebar .new-project {\n  opacity: 0.5;\n}\n.sidebar .new-project:hover {\n  opacity: 1;\n}\n\n.main {\n  padding: 2rem;\n  background-color: white;\n  min-width: 0;\n}\n\n.container {\n  width: min(100%, 40rem);\n  margin: 0 auto;\n}\n\n.todos-header {\n  font-size: 1.75rem;\n}\n\n.todo {\n  border-left: 1px solid transparent;\n  padding: 0.5rem;\n}\n.todo.high-priority {\n  border-color: red;\n}\n.todo.medium-priority {\n  border-color: orange;\n}\n.todo.low-priority {\n  border-color: green;\n}\n.todo:hover {\n  background-color: var(--secondary);\n}\n.todo:hover .delete,\n.todo:hover .edit {\n  display: inline-block;\n}\n\n.summary {\n  gap: 0.5rem;\n  min-height: 1.5rem;\n}\n\n.name,\n.todo .title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.edit,\n.delete {\n  display: none;\n}\n\n.todo + .todo {\n  border-top: 1px solid var(--border);\n}\n\n.checkbox {\n  flex: 0 0 1rem;\n  height: 1rem;\n  border: 1px solid rgb(87, 87, 87);\n  border-radius: 2px;\n  cursor: pointer;\n}\n.checkbox.checked {\n  background-color: rgb(70, 70, 70);\n}\n\n.checked ~ *:not(.edit):not(.delete) {\n  opacity: 0.4;\n}\n\n.due-date {\n  margin-left: auto;\n  font-size: 0.85rem;\n  color: rgb(66, 66, 66);\n  white-space: nowrap;\n}\n\n.edit,\n.delete {\n  cursor: pointer;\n}\n\n.details {\n  margin-left: calc(1.5rem + 2px);\n  font-size: 0.9rem;\n  color: gray;\n}\n\n.hidden {\n  display: none;\n}\n\n.new-todo-button {\n  opacity: 0.5;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.new-todo-button:hover {\n  opacity: 1;\n}\n\ndialog {\n  border: 1px solid var(--border);\n  padding: 0;\n  width: min(100%, 40rem);\n}\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\ndialog .container {\n  padding: 1rem;\n}\ndialog #name,\ndialog #title,\ndialog #description,\ndialog #due-date,\ndialog .priority-buttons label {\n  outline: 1px solid lightgray;\n  padding: 0.5rem;\n  border: none;\n  line-height: normal;\n}\ndialog button {\n  outline: 1px solid black;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  display: block;\n  margin-top: 1rem;\n}\n\ndialog.project {\n  width: fit-content;\n}\n\n.new-todo.modal #title,\n.new-todo.modal #description {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  box-shadow: none;\n  resize: none;\n}\n.new-todo.modal #description {\n  font-size: 0.9rem;\n  color: gray;\n}\n.new-todo.modal #description::placeholder {\n  color: lightgray;\n}\n.new-todo.modal .form-bottom {\n  margin-block: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.new-todo.modal label[for=due-date],\n.new-todo.modal legend {\n  font-size: 0.9rem;\n}\n.new-todo.modal .priority-buttons {\n  display: flex;\n  border: none;\n  padding: 0.4rem 0 0 0;\n  margin: 0;\n}\n.new-todo.modal input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n.new-todo.modal .priority-buttons label {\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.new-todo.modal #low + label:hover,\n.new-todo.modal #low:checked + label {\n  background-color: rgba(0, 128, 0, 0.5);\n}\n.new-todo.modal #medium + label:hover,\n.new-todo.modal #medium:checked + label {\n  background-color: rgba(255, 166, 0, 0.5);\n}\n.new-todo.modal #high + label:hover,\n.new-todo.modal #high:checked + label {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\nlabel {\n  display: block;\n  margin-bottom: 0.4rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n\r\n:root {\r\n    font-family: 'Open Sans', sans-serif;\r\n    --primary: hsl(209, 91%, 68%);\r\n    --secondary: hsl(0, 0%, 95%);\r\n    --border: rgb(194, 194, 194);\r\n    --transition-time: 400ms;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2 {\r\n    color: rgb(36, 36, 36);\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    margin-top: 0;\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.header,\r\n.projects li,\r\n.new-project,\r\n.todo .summary {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody {\r\n    line-height: normal;\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template: min-content 1fr / 15rem 1fr;\r\n    gap: 1px;\r\n    background-color: rgb(194, 194, 194);\r\n}\r\n\r\n.header {\r\n    grid-column: 1 / span 2;\r\n    background-color: var(--primary);\r\n    padding: 1rem;\r\n\r\n    .logo-img {\r\n        width: 3rem;\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n.sidebar {\r\n    background-color: var(--secondary);\r\n    padding: 2rem;\r\n\r\n    .projects-header {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .projects li,\r\n    .new-project {\r\n        font-size: 1.1rem;\r\n        padding: 0.5rem 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .projects li:hover {\r\n        font-weight: bold;\r\n    }\r\n\r\n    .delete {\r\n        margin-left: auto;\r\n    }\r\n\r\n    .projects li:hover .delete {\r\n        display: inline-block;\r\n    }\r\n\r\n    .todo-count {\r\n        border: 1px solid var(--primary);\r\n        border-radius: 50%;\r\n        display: grid;\r\n        place-content: center;\r\n        flex: 0 0 auto;\r\n    }\r\n\r\n    .todo-count,\r\n    .new-project img {\r\n        width: 1.75rem;\r\n        height: 1.75rem;\r\n        margin-right: 1rem;\r\n    }\r\n\r\n    .new-project {\r\n        opacity: 0.5;\r\n    }\r\n\r\n    .new-project:hover {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.main {\r\n    padding: 2rem;\r\n    background-color: white;\r\n    min-width: 0;\r\n}\r\n\r\n.container {\r\n    width: min(100%, 40rem);\r\n    margin: 0 auto;\r\n}\r\n\r\n.todos-header {\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.todo {\r\n    border-left: 1px solid transparent;\r\n    padding: 0.5rem;\r\n\r\n    &.high-priority {\r\n        border-color: red;\r\n    }\r\n\r\n    &.medium-priority {\r\n        border-color: orange;\r\n    }\r\n\r\n    &.low-priority {\r\n        border-color: green;\r\n    }\r\n\r\n    &:hover {\r\n        background-color: var(--secondary);\r\n\r\n        .delete,\r\n        .edit {\r\n            display: inline-block;\r\n        }\r\n    }\r\n}\r\n\r\n.summary {\r\n    gap: 0.5rem;\r\n    min-height: 1.5rem;\r\n}\r\n\r\n.name,\r\n.todo .title {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    display: none;\r\n}\r\n\r\n.todo+.todo {\r\n    border-top: 1px solid var(--border);\r\n}\r\n\r\n.checkbox {\r\n    flex: 0 0 1rem;\r\n    height: 1rem;\r\n    border: 1px solid rgb(87, 87, 87);\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n\r\n    &.checked {\r\n        background-color: rgb(70, 70, 70);\r\n    }\r\n}\r\n\r\n.checked~*:not(.edit):not(.delete) {\r\n    opacity: 0.4;\r\n}\r\n\r\n.due-date {\r\n    margin-left: auto;\r\n    font-size: 0.85rem;\r\n    color: rgb(66, 66, 66);\r\n    white-space: nowrap;\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    cursor: pointer;\r\n}\r\n\r\n.details {\r\n    margin-left: calc(1.5rem + 2px);\r\n    font-size: 0.9rem;\r\n    color: gray;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.new-todo-button {\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.new-todo-button:hover {\r\n    opacity: 1;\r\n}\r\n\r\ndialog {\r\n    border: 1px solid var(--border);\r\n    padding: 0;\r\n    width: min(100%, 40rem);\r\n\r\n    &::backdrop {\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n    }\r\n\r\n    .container {\r\n        padding: 1rem;\r\n    }\r\n\r\n    #name,\r\n    #title,\r\n    #description,\r\n    #due-date,\r\n    .priority-buttons label {\r\n        outline: 1px solid lightgray;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        line-height: normal;\r\n    }\r\n\r\n    button {\r\n        outline: 1px solid black;\r\n        border: none;\r\n        padding: 0.5rem;\r\n        cursor: pointer;\r\n        display: block;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n}\r\n\r\ndialog.project {\r\n    width: fit-content;\r\n}\r\n\r\n.new-todo.modal {\r\n\r\n\r\n    #title,\r\n    #description {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        box-shadow: none;\r\n        resize: none;\r\n    }\r\n\r\n    #description {\r\n        font-size: 0.9rem;\r\n        color: gray;\r\n    }\r\n\r\n    #description::placeholder {\r\n        color: lightgray;\r\n    }\r\n\r\n    .form-bottom {\r\n        margin-block: 1rem;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 1rem;\r\n    }\r\n\r\n    label[for=\"due-date\"],\r\n    legend {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    .priority-buttons {\r\n        display: flex;\r\n        border: none;\r\n        padding: 0.4rem 0 0 0;\r\n        margin: 0;\r\n    }\r\n\r\n    input[type=\"radio\"] {\r\n        position: fixed;\r\n        opacity: 0;\r\n        pointer-events: none;\r\n    }\r\n\r\n    .priority-buttons label {\r\n        cursor: pointer;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    #low+label:hover,\r\n    #low:checked+label {\r\n        background-color: rgba(0, 128, 0, 0.5);\r\n    }\r\n\r\n    #medium+label:hover,\r\n    #medium:checked+label {\r\n        background-color: rgba(255, 166, 0, 0.5);\r\n    }\r\n\r\n    #high+label:hover,\r\n    #high:checked+label {\r\n        background-color: rgba(255, 0, 0, 0.5);\r\n    }\r\n\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 0.4rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/LocalStorage.js":
/*!*************************************!*\
  !*** ./src/modules/LocalStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readProjects": () => (/* binding */ readProjects),
/* harmony export */   "writeProjects": () => (/* binding */ writeProjects)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");



function readProjects() {
  let projects = [];
  if (localStorage.getItem('projects')) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects = projects.map(({ name, todos }) => new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](name, todos));
  } else {
    const defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Default');
    defaultProject.addTodo(new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Learn about webpack', 'Especially look into configuration and loaders... tricky stuff.', '2022-08-20', 'low'));
    defaultProject.addTodo(new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Check out michalosman's project submissions on The Odin Project", 'His projects are consistently top-loved. I could learn a thing or two from his source code.', '2022-09-10', 'medium'));
    defaultProject.addTodo(new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Contribute to an open source project', 'I bet this would look good an a resume.', '2023-02-30', 'high'));
    projects.push(defaultProject);
    writeProjects(projects);
  }
  return projects;
}

function writeProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('test', 'asdf');
}


/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name = 'Unnamed', todos = []) {
    this.todos = todos;
    this.name = name;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}


/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description ?? '';
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalStorage */ "./src/modules/LocalStorage.js");
// import Project from './Project';




class UI {
  static #addTodoEvent(todo) {
    todo.addEventListener('click', () => {
      todo.querySelector('.details').classList.toggle('hidden');
    });
  }

  static #addModalCloseEvents() {
    const dialogs = document.querySelectorAll('.modal');
    dialogs.forEach((dialog) => {
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
          dialog.close();
        }
      });
    });
  }

  static #addNewProjectEvent() {
    const newProjectEl = document.querySelector('.new-project');
    newProjectEl.addEventListener('click', () => {
      document.querySelector('.project-form').reset();
      document.querySelector('.project.modal').showModal();
    });
  }

  constructor() {
    this.projects = _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.readProjects();
    [this.currProject] = this.projects;
    this.currTodoID = null;
  }

  setupPage() {
    this.#populateProjectsHTML();
    this.#populateTodosHTML(this.currProject);
    this.#addEventListeners();
  }

  #populateProjectsHTML() {
    document.querySelector('.projects').innerHTML = '';
    this.projects.forEach((project) => {
      this.#addProjectEl(project);
    });
  }

  #addProjectEl(project) {
    const frag = document.createRange().createContextualFragment(`
      <li class="project">
        <span class="todo-count">${project.todos.length}</span>
        <span class="name">${project.name}</span>
      </li>
    `);
    if (document.querySelector('.projects').childElementCount !== 0) {
      const deleteEl = document.createRange().createContextualFragment('<img class="delete" src="./images/delete-bin-line.svg">');
      frag.querySelector('.project').appendChild(deleteEl);
      this.addProjectDeleteEvent(frag.querySelector('.delete'), project);
    }
    frag.querySelector('.project').addEventListener('click', () => {
      this.currProject = project;
      this.#populateTodosHTML(this.currProject);
    });
    document.querySelector('.projects').appendChild(frag);
  }

  #populateTodosHTML(project) {
    document.querySelector('.todos-header').innerHTML = project.name;
    document.querySelector('.todos').innerHTML = '';
    for (let i = 0; i < project.todos.length; i++) {
      this.addTodoEl(project.todos[i], i);
    }
  }

  #addEventListeners() {
    this.#addTodoButtonEvent();
    UI.#addModalCloseEvents();
    this.#addTodoModalSubmitEvent();
    UI.#addNewProjectEvent();
    this.#addProjectModalSubmitEvent();
  }

  #addCheckboxEvent(checkbox, todo) {
    checkbox.addEventListener('click', (e) => {
      e.stopPropagation();
      checkbox.classList.toggle('checked');
      todo.completed = !todo.completed;
      _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.writeProjects(this.projects);
    });
  }

  #addTodoButtonEvent() {
    const newTodo = document.querySelector('.new-todo-button');
    newTodo.addEventListener('click', () => {
      document.querySelector('.todo-form').reset();
      document.querySelector('.add-text').innerText = 'New Todo';
      this.currTodoID = this.currProject.todos.length;
      document.querySelector('.new-todo.modal').showModal();
    });
  }

  #addProjectModalSubmitEvent() {
    document.querySelector('.project-form').addEventListener('submit', () => {
      const name = document.querySelector('#name').value;
      const project = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](name);
      this.#addProjectEl(project);
      this.projects.push(project);
      _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.writeProjects(this.projects);
    });
  }

  #addTodoModalSubmitEvent() {
    const todoForm = document.querySelector('.todo-form');
    todoForm.addEventListener('submit', () => {
      const title = document.querySelector('#title').value;
      const details = document.querySelector('#description').value;
      const dueDate = document.querySelector('#due-date').value;
      const priority = document.querySelector('input[name="priority"]:checked').value;
      const todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, details, dueDate, priority);
      this.addTodoEl(todo, this.currTodoID);
    });
  }

  addTodoEl(todo, i) {
    const {
      title, description, dueDate, priority, completed,
    } = todo;

    const frag = document.createRange().createContextualFragment(`
      <li class="todo ${priority}-priority">
        <div class="summary">
          <div class="checkbox${completed ? ' checked' : ''}"></div>
          <span class="title">${title}</span>
          <span class="due-date">${dueDate}</span>
          <img class="edit" src="./images/edit-box-line.svg">
          <img class="delete" src="./images/delete-bin-line.svg">
        </div>
        <p class="details hidden">${description}</p>
      </li>
    `);

    this.#addCheckboxEvent(frag.querySelector('.checkbox'), todo);
    this.addEditEvent(frag.querySelector('.edit'), todo);
    this.addTodoDeleteEvent(frag.querySelector('.delete'), todo);
    UI.#addTodoEvent(frag.querySelector('.todo'));

    const todosEl = document.querySelector('.todos');
    const todoEls = document.querySelector('.todos').children;

    if (i === todoEls.length) {
      todosEl.append(frag);
    } else {
      todosEl.replaceChild(frag, todoEls[i]);
    }

    this.currProject.todos[i] = todo;
    _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.writeProjects(this.projects);
  }

  addEditEvent(editEl, todo) {
    editEl.addEventListener('click', (e) => {
      e.stopPropagation();
      this.currTodoID = this.currProject.todos.indexOf(todo);
      document.querySelector('.new-todo .form-header').innerHTML = 'Edit Todo';
      document.querySelector('#title').value = this.currProject.todos[this.currTodoID].title;
      document.querySelector('#description').value = this.currProject.todos[this.currTodoID].description;
      document.querySelector('#due-date').value = this.currProject.todos[this.currTodoID].dueDate;
      document.querySelector(`#${this.currProject.todos[this.currTodoID].priority}`).checked = true;
      document.querySelector('.new-todo.modal').showModal();
    });
  }

  addProjectDeleteEvent(deleteEl, project) {
    deleteEl.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteEl.parentNode.remove();
      const index = this.projects.indexOf(project);
      this.projects.splice(index, 1);
      _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.writeProjects(this.projects);
      [this.currProject] = this.projects;
      this.#populateTodosHTML(this.currProject);
    });
  }

  addTodoDeleteEvent(deleteEl, todo) {
    deleteEl.addEventListener('click', () => {
      const index = this.currProject.todos.indexOf(todo);
      this.currProject.todos.splice(index, 1);
      deleteEl.parentNode.parentNode.remove();
      _LocalStorage__WEBPACK_IMPORTED_MODULE_2__.writeProjects(this.projects);
    });
  }
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");



const ui = new _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"]();
ui.setupPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SDtBQUN2SDtBQUNBLGlEQUFpRCwyQ0FBMkMsa0NBQWtDLGlDQUFpQyxpQ0FBaUMsNkJBQTZCLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxhQUFhLDJCQUEyQixHQUFHLFFBQVEsY0FBYyxHQUFHLFFBQVEsa0JBQWtCLEdBQUcsUUFBUSxlQUFlLHFCQUFxQixHQUFHLDREQUE0RCxrQkFBa0Isd0JBQXdCLEdBQUcsVUFBVSx3QkFBd0Isc0JBQXNCLGtCQUFrQiw2Q0FBNkMsYUFBYSx5Q0FBeUMsR0FBRyxhQUFhLDBCQUEwQixxQ0FBcUMsa0JBQWtCLEdBQUcscUJBQXFCLGdCQUFnQix1QkFBdUIsR0FBRyxjQUFjLHVDQUF1QyxrQkFBa0IsR0FBRyw2QkFBNkIsc0JBQXNCLEdBQUcsaURBQWlELHNCQUFzQixzQkFBc0Isb0JBQW9CLEdBQUcsK0JBQStCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyx1Q0FBdUMsMEJBQTBCLEdBQUcsd0JBQXdCLHFDQUFxQyx1QkFBdUIsa0JBQWtCLDBCQUEwQixtQkFBbUIsR0FBRyxvREFBb0QsbUJBQW1CLG9CQUFvQix1QkFBdUIsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcsK0JBQStCLGVBQWUsR0FBRyxXQUFXLGtCQUFrQiw0QkFBNEIsaUJBQWlCLEdBQUcsZ0JBQWdCLDRCQUE0QixtQkFBbUIsR0FBRyxtQkFBbUIsdUJBQXVCLEdBQUcsV0FBVyx1Q0FBdUMsb0JBQW9CLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLHlCQUF5Qix5QkFBeUIsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsZUFBZSx1Q0FBdUMsR0FBRywyQ0FBMkMsMEJBQTBCLEdBQUcsY0FBYyxnQkFBZ0IsdUJBQXVCLEdBQUcsMEJBQTBCLHdCQUF3QixxQkFBcUIsNEJBQTRCLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLG1CQUFtQix3Q0FBd0MsR0FBRyxlQUFlLG1CQUFtQixpQkFBaUIsc0NBQXNDLHVCQUF1QixvQkFBb0IsR0FBRyxxQkFBcUIsc0NBQXNDLEdBQUcsMENBQTBDLGlCQUFpQixHQUFHLGVBQWUsc0JBQXNCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLGNBQWMsb0NBQW9DLHNCQUFzQixnQkFBZ0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLHNCQUFzQixpQkFBaUIsb0JBQW9CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLGVBQWUsR0FBRyxZQUFZLG9DQUFvQyxlQUFlLDRCQUE0QixHQUFHLG9CQUFvQix5Q0FBeUMsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsMEdBQTBHLGlDQUFpQyxvQkFBb0IsaUJBQWlCLHdCQUF3QixHQUFHLGlCQUFpQiw2QkFBNkIsaUJBQWlCLG9CQUFvQixvQkFBb0IsbUJBQW1CLHFCQUFxQixHQUFHLG9CQUFvQix1QkFBdUIsR0FBRywyREFBMkQsZ0JBQWdCLG9CQUFvQixpQkFBaUIscUJBQXFCLGlCQUFpQixHQUFHLGdDQUFnQyxzQkFBc0IsZ0JBQWdCLEdBQUcsNkNBQTZDLHFCQUFxQixHQUFHLGdDQUFnQyx1QkFBdUIsa0JBQWtCLG9CQUFvQixjQUFjLEdBQUcsZ0VBQWdFLHNCQUFzQixHQUFHLHFDQUFxQyxrQkFBa0IsaUJBQWlCLDBCQUEwQixjQUFjLEdBQUcscUNBQXFDLG9CQUFvQixlQUFlLHlCQUF5QixHQUFHLDJDQUEyQyxvQkFBb0IsOEJBQThCLEdBQUcsNkVBQTZFLDJDQUEyQyxHQUFHLG1GQUFtRiw2Q0FBNkMsR0FBRywrRUFBK0UsMkNBQTJDLEdBQUcsV0FBVyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxRQUFRLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFB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QVM7QUFDakM7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVELGdDQUFnQyxNQUFNO0FBQ3RDLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaURBQWlEO0FBQ2xGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFxQjtBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBcUI7QUFDM0IsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUNuTUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDUTtBQUM5QjtBQUNBLGVBQWUsbURBQUU7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLXByaW1hcnk6IGhzbCgyMDksIDkxJSwgNjglKTtcXG4gIC0tc2Vjb25kYXJ5OiBoc2woMCwgMCUsIDk1JSk7XFxuICAtLWJvcmRlcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgLS10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxudWwge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIsXFxuLnByb2plY3RzIGxpLFxcbi5uZXctcHJvamVjdCxcXG4udG9kbyAuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogbWluLWNvbnRlbnQgMWZyLzE1cmVtIDFmcjtcXG4gIGdhcDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmhlYWRlciAubG9nby1pbWcge1xcbiAgd2lkdGg6IDNyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4uc2lkZWJhciAucHJvamVjdHMgbGksXFxuLnNpZGViYXIgLm5ldy1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlYmFyIC5wcm9qZWN0cyBsaTpob3ZlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnNpZGViYXIgLmRlbGV0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnNpZGViYXIgLnByb2plY3RzIGxpOmhvdmVyIC5kZWxldGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uc2lkZWJhciAudG9kby1jb3VudCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuLnNpZGViYXIgLnRvZG8tY291bnQsXFxuLnNpZGViYXIgLm5ldy1wcm9qZWN0IGltZyB7XFxuICB3aWR0aDogMS43NXJlbTtcXG4gIGhlaWdodDogMS43NXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLnNpZGViYXIgLm5ldy1wcm9qZWN0IHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLnNpZGViYXIgLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tYWluIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogbWluKDEwMCUsIDQwcmVtKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udG9kb3MtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnRvZG8uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuLnRvZG8ubWVkaXVtLXByaW9yaXR5IHtcXG4gIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbn1cXG4udG9kby5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuLnRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuLnRvZG86aG92ZXIgLmRlbGV0ZSxcXG4udG9kbzpob3ZlciAuZWRpdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zdW1tYXJ5IHtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWluLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ubmFtZSxcXG4udG9kbyAudGl0bGUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLmVkaXQsXFxuLmRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyArIC50b2RvIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgZmxleDogMCAwIDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODcsIDg3LCA4Nyk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVja2JveC5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG59XFxuXFxuLmNoZWNrZWQgfiAqOm5vdCguZWRpdCk6bm90KC5kZWxldGUpIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgY29sb3I6IHJnYig2NiwgNjYsIDY2KTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5lZGl0LFxcbi5kZWxldGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBtYXJnaW4tbGVmdDogY2FsYygxLjVyZW0gKyAycHgpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctdG9kby1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5kaWFsb2cgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5kaWFsb2cgI25hbWUsXFxuZGlhbG9nICN0aXRsZSxcXG5kaWFsb2cgI2Rlc2NyaXB0aW9uLFxcbmRpYWxvZyAjZHVlLWRhdGUsXFxuZGlhbG9nIC5wcmlvcml0eS1idXR0b25zIGxhYmVsIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5kaWFsb2cgYnV0dG9uIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuZGlhbG9nLnByb2plY3Qge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ubmV3LXRvZG8ubW9kYWwgI3RpdGxlLFxcbi5uZXctdG9kby5tb2RhbCAjZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5uZXctdG9kby5tb2RhbCAjZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxufVxcbi5uZXctdG9kby5tb2RhbCAuZm9ybS1ib3R0b20ge1xcbiAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMXJlbTtcXG59XFxuLm5ldy10b2RvLm1vZGFsIGxhYmVsW2Zvcj1kdWUtZGF0ZV0sXFxuLm5ldy10b2RvLm1vZGFsIGxlZ2VuZCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLm5ldy10b2RvLm1vZGFsIC5wcmlvcml0eS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjRyZW0gMCAwIDA7XFxuICBtYXJnaW46IDA7XFxufVxcbi5uZXctdG9kby5tb2RhbCBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5uZXctdG9kby5tb2RhbCAucHJpb3JpdHktYnV0dG9ucyBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgI2xvdyArIGxhYmVsOmhvdmVyLFxcbi5uZXctdG9kby5tb2RhbCAjbG93OmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcXG59XFxuLm5ldy10b2RvLm1vZGFsICNtZWRpdW0gKyBsYWJlbDpob3ZlcixcXG4ubmV3LXRvZG8ubW9kYWwgI21lZGl1bTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41KTtcXG59XFxuLm5ldy10b2RvLm1vZGFsICNoaWdoICsgbGFiZWw6aG92ZXIsXFxuLm5ldy10b2RvLm1vZGFsICNoaWdoOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7QUFBSjs7QUFHQTs7RUFFSSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksU0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7Ozs7RUFJSSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUlBO0VBQ0ksa0NBQUE7RUFDQSxhQUFBO0FBREo7QUFHSTtFQUNJLGlCQUFBO0FBRFI7QUFJSTs7RUFFSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBS0k7RUFDSSxpQkFBQTtBQUhSO0FBTUk7RUFDSSxpQkFBQTtBQUpSO0FBT0k7RUFDSSxxQkFBQTtBQUxSO0FBUUk7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQU5SO0FBU0k7O0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVBSO0FBVUk7RUFDSSxZQUFBO0FBUlI7QUFXSTtFQUNJLFVBQUE7QUFUUjs7QUFhQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFWSjs7QUFhQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQVZKOztBQWFBO0VBQ0ksa0JBQUE7QUFWSjs7QUFhQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtBQVZKO0FBWUk7RUFDSSxpQkFBQTtBQVZSO0FBYUk7RUFDSSxvQkFBQTtBQVhSO0FBY0k7RUFDSSxtQkFBQTtBQVpSO0FBZUk7RUFDSSxrQ0FBQTtBQWJSO0FBZVE7O0VBRUkscUJBQUE7QUFiWjs7QUFrQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFmSjs7QUFrQkE7O0VBRUksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBZko7O0FBa0JBOztFQUVJLGFBQUE7QUFmSjs7QUFrQkE7RUFDSSxtQ0FBQTtBQWZKOztBQWtCQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFmSjtBQWlCSTtFQUNJLGlDQUFBO0FBZlI7O0FBbUJBO0VBQ0ksWUFBQTtBQWhCSjs7QUFtQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWhCSjs7QUFtQkE7O0VBRUksZUFBQTtBQWhCSjs7QUFtQkE7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWhCSjs7QUFtQkE7RUFDSSxhQUFBO0FBaEJKOztBQW1CQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoQko7O0FBbUJBO0VBQ0ksVUFBQTtBQWhCSjs7QUFtQkE7RUFDSSwrQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQWhCSjtBQWtCSTtFQUNJLG9DQUFBO0FBaEJSO0FBbUJJO0VBQ0ksYUFBQTtBQWpCUjtBQW9CSTs7Ozs7RUFLSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFsQlI7QUFxQkk7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW5CUjs7QUF3QkE7RUFDSSxrQkFBQTtBQXJCSjs7QUEyQkk7O0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBeEJSO0FBMkJJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBekJSO0FBNEJJO0VBQ0ksZ0JBQUE7QUExQlI7QUE2Qkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTNCUjtBQThCSTs7RUFFSSxpQkFBQTtBQTVCUjtBQStCSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBN0JSO0FBZ0NJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQTlCUjtBQWlDSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQS9CUjtBQWtDSTs7RUFFSSxzQ0FBQTtBQWhDUjtBQW1DSTs7RUFFSSx3Q0FBQTtBQWpDUjtBQW9DSTs7RUFFSSxzQ0FBQTtBQWxDUjs7QUF1Q0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFwQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXByaW1hcnk6IGhzbCgyMDksIDkxJSwgNjglKTtcXHJcXG4gICAgLS1zZWNvbmRhcnk6IGhzbCgwLCAwJSwgOTUlKTtcXHJcXG4gICAgLS1ib3JkZXI6IHJnYigxOTQsIDE5NCwgMTk0KTtcXHJcXG4gICAgLS10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIge1xcclxcbiAgICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIsXFxyXFxuLnByb2plY3RzIGxpLFxcclxcbi5uZXctcHJvamVjdCxcXHJcXG4udG9kbyAuc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogbWluLWNvbnRlbnQgMWZyIC8gMTVyZW0gMWZyO1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAubG9nby1pbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcblxcclxcbiAgICAucHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0cyBsaSxcXHJcXG4gICAgLm5ldy1wcm9qZWN0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RzIGxpOmhvdmVyIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZWxldGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RzIGxpOmhvdmVyIC5kZWxldGUge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNvdW50IHtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNvdW50LFxcclxcbiAgICAubmV3LXByb2plY3QgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxLjc1cmVtO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXctcHJvamVjdCB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ldy1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWluLXdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3MtaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgJi5oaWdoLXByaW9yaXR5IHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYubWVkaXVtLXByaW9yaXR5IHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYubG93LXByaW9yaXR5IHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcblxcclxcbiAgICAgICAgLmRlbGV0ZSxcXHJcXG4gICAgICAgIC5lZGl0IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkge1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSxcXHJcXG4udG9kbyAudGl0bGUge1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQsXFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvKy50b2RvIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICAgIGZsZXg6IDAgMCAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NywgODcsIDg3KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICYuY2hlY2tlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWR+Kjpub3QoLmVkaXQpOm5vdCguZGVsZXRlKSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYig2NiwgNjYsIDY2KTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQsXFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxLjVyZW0gKyAycHgpO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tYnV0dG9uIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxyXFxuXFxyXFxuICAgICY6OmJhY2tkcm9wIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hbWUsXFxyXFxuICAgICN0aXRsZSxcXHJcXG4gICAgI2Rlc2NyaXB0aW9uLFxcclxcbiAgICAjZHVlLWRhdGUsXFxyXFxuICAgIC5wcmlvcml0eS1idXR0b25zIGxhYmVsIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby5tb2RhbCB7XFxyXFxuXFxyXFxuXFxyXFxuICAgICN0aXRsZSxcXHJcXG4gICAgI2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgICAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tYm90dG9tIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ibG9jazogMXJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGFiZWxbZm9yPVxcXCJkdWUtZGF0ZVxcXCJdLFxcclxcbiAgICBsZWdlbmQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW9yaXR5LWJ1dHRvbnMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwIDAgMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpb3JpdHktYnV0dG9ucyBsYWJlbCB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNsb3crbGFiZWw6aG92ZXIsXFxyXFxuICAgICNsb3c6Y2hlY2tlZCtsYWJlbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVkaXVtK2xhYmVsOmhvdmVyLFxcclxcbiAgICAjbWVkaXVtOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaGlnaCtsYWJlbDpob3ZlcixcXHJcXG4gICAgI2hpZ2g6Y2hlY2tlZCtsYWJlbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZFByb2plY3RzKCkge1xyXG4gIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xyXG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuICAgIHByb2plY3RzID0gcHJvamVjdHMubWFwKCh7IG5hbWUsIHRvZG9zIH0pID0+IG5ldyBQcm9qZWN0KG5hbWUsIHRvZG9zKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcclxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8oJ0xlYXJuIGFib3V0IHdlYnBhY2snLCAnRXNwZWNpYWxseSBsb29rIGludG8gY29uZmlndXJhdGlvbiBhbmQgbG9hZGVycy4uLiB0cmlja3kgc3R1ZmYuJywgJzIwMjItMDgtMjAnLCAnbG93JykpO1xyXG4gICAgZGVmYXVsdFByb2plY3QuYWRkVG9kbyhuZXcgVG9kbyhcIkNoZWNrIG91dCBtaWNoYWxvc21hbidzIHByb2plY3Qgc3VibWlzc2lvbnMgb24gVGhlIE9kaW4gUHJvamVjdFwiLCAnSGlzIHByb2plY3RzIGFyZSBjb25zaXN0ZW50bHkgdG9wLWxvdmVkLiBJIGNvdWxkIGxlYXJuIGEgdGhpbmcgb3IgdHdvIGZyb20gaGlzIHNvdXJjZSBjb2RlLicsICcyMDIyLTA5LTEwJywgJ21lZGl1bScpKTtcclxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8oJ0NvbnRyaWJ1dGUgdG8gYW4gb3BlbiBzb3VyY2UgcHJvamVjdCcsICdJIGJldCB0aGlzIHdvdWxkIGxvb2sgZ29vZCBhbiBhIHJlc3VtZS4nLCAnMjAyMy0wMi0zMCcsICdoaWdoJykpO1xyXG4gICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcbiAgICB3cml0ZVByb2plY3RzKHByb2plY3RzKTtcclxuICB9XHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3QnLCAnYXNkZicpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnVW5uYW1lZCcsIHRvZG9zID0gW10pIHtcclxuICAgIHRoaXMudG9kb3MgPSB0b2RvcztcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG8pIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gPz8gJyc7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9Mb2NhbFN0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gIHN0YXRpYyAjYWRkVG9kb0V2ZW50KHRvZG8pIHtcclxuICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljICNhZGRNb2RhbENsb3NlRXZlbnRzKCkge1xyXG4gICAgY29uc3QgZGlhbG9ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpO1xyXG4gICAgZGlhbG9ncy5mb3JFYWNoKChkaWFsb2cpID0+IHtcclxuICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRpYWxvZykge1xyXG4gICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljICNhZGROZXdQcm9qZWN0RXZlbnQoKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcclxuICAgIG5ld1Byb2plY3RFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Lm1vZGFsJykuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHN0b3JhZ2UucmVhZFByb2plY3RzKCk7XHJcbiAgICBbdGhpcy5jdXJyUHJvamVjdF0gPSB0aGlzLnByb2plY3RzO1xyXG4gICAgdGhpcy5jdXJyVG9kb0lEID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldHVwUGFnZSgpIHtcclxuICAgIHRoaXMuI3BvcHVsYXRlUHJvamVjdHNIVE1MKCk7XHJcbiAgICB0aGlzLiNwb3B1bGF0ZVRvZG9zSFRNTCh0aGlzLmN1cnJQcm9qZWN0KTtcclxuICAgIHRoaXMuI2FkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICAjcG9wdWxhdGVQcm9qZWN0c0hUTUwoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLiNhZGRQcm9qZWN0RWwocHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNhZGRQcm9qZWN0RWwocHJvamVjdCkge1xyXG4gICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGBcclxuICAgICAgPGxpIGNsYXNzPVwicHJvamVjdFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPiR7cHJvamVjdC50b2Rvcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIGApO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmNoaWxkRWxlbWVudENvdW50ICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUVsID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoJzxpbWcgY2xhc3M9XCJkZWxldGVcIiBzcmM9XCIuL2ltYWdlcy9kZWxldGUtYmluLWxpbmUuc3ZnXCI+Jyk7XHJcbiAgICAgIGZyYWcucXVlcnlTZWxlY3RvcignLnByb2plY3QnKS5hcHBlbmRDaGlsZChkZWxldGVFbCk7XHJcbiAgICAgIHRoaXMuYWRkUHJvamVjdERlbGV0ZUV2ZW50KGZyYWcucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpLCBwcm9qZWN0KTtcclxuICAgIH1cclxuICAgIGZyYWcucXVlcnlTZWxlY3RvcignLnByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jdXJyUHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgIHRoaXMuI3BvcHVsYXRlVG9kb3NIVE1MKHRoaXMuY3VyclByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5hcHBlbmRDaGlsZChmcmFnKTtcclxuICB9XHJcblxyXG4gICNwb3B1bGF0ZVRvZG9zSFRNTChwcm9qZWN0KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtaGVhZGVyJykuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5hZGRUb2RvRWwocHJvamVjdC50b2Rvc1tpXSwgaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLiNhZGRUb2RvQnV0dG9uRXZlbnQoKTtcclxuICAgIFVJLiNhZGRNb2RhbENsb3NlRXZlbnRzKCk7XHJcbiAgICB0aGlzLiNhZGRUb2RvTW9kYWxTdWJtaXRFdmVudCgpO1xyXG4gICAgVUkuI2FkZE5ld1Byb2plY3RFdmVudCgpO1xyXG4gICAgdGhpcy4jYWRkUHJvamVjdE1vZGFsU3VibWl0RXZlbnQoKTtcclxuICB9XHJcblxyXG4gICNhZGRDaGVja2JveEV2ZW50KGNoZWNrYm94LCB0b2RvKSB7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcclxuICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XHJcbiAgICAgIHN0b3JhZ2Uud3JpdGVQcm9qZWN0cyh0aGlzLnByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgI2FkZFRvZG9CdXR0b25FdmVudCgpIHtcclxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tYnV0dG9uJyk7XHJcbiAgICBuZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJykucmVzZXQoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXh0JykuaW5uZXJUZXh0ID0gJ05ldyBUb2RvJztcclxuICAgICAgdGhpcy5jdXJyVG9kb0lEID0gdGhpcy5jdXJyUHJvamVjdC50b2Rvcy5sZW5ndGg7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby5tb2RhbCcpLnNob3dNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAjYWRkUHJvamVjdE1vZGFsU3VibWl0RXZlbnQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xyXG4gICAgICB0aGlzLiNhZGRQcm9qZWN0RWwocHJvamVjdCk7XHJcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgICAgc3RvcmFnZS53cml0ZVByb2plY3RzKHRoaXMucHJvamVjdHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAjYWRkVG9kb01vZGFsU3VibWl0RXZlbnQoKSB7XHJcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcclxuICAgIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcclxuICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgIHRoaXMuYWRkVG9kb0VsKHRvZG8sIHRoaXMuY3VyclRvZG9JRCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG9FbCh0b2RvLCBpKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCxcclxuICAgIH0gPSB0b2RvO1xyXG5cclxuICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXHJcbiAgICAgIDxsaSBjbGFzcz1cInRvZG8gJHtwcmlvcml0eX0tcHJpb3JpdHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94JHtjb21wbGV0ZWQgPyAnIGNoZWNrZWQnIDogJyd9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImR1ZS1kYXRlXCI+JHtkdWVEYXRlfTwvc3Bhbj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJlZGl0XCIgc3JjPVwiLi9pbWFnZXMvZWRpdC1ib3gtbGluZS5zdmdcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJkZWxldGVcIiBzcmM9XCIuL2ltYWdlcy9kZWxldGUtYmluLWxpbmUuc3ZnXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWxzIGhpZGRlblwiPiR7ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L2xpPlxyXG4gICAgYCk7XHJcblxyXG4gICAgdGhpcy4jYWRkQ2hlY2tib3hFdmVudChmcmFnLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpLCB0b2RvKTtcclxuICAgIHRoaXMuYWRkRWRpdEV2ZW50KGZyYWcucXVlcnlTZWxlY3RvcignLmVkaXQnKSwgdG9kbyk7XHJcbiAgICB0aGlzLmFkZFRvZG9EZWxldGVFdmVudChmcmFnLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKSwgdG9kbyk7XHJcbiAgICBVSS4jYWRkVG9kb0V2ZW50KGZyYWcucXVlcnlTZWxlY3RvcignLnRvZG8nKSk7XHJcblxyXG4gICAgY29uc3QgdG9kb3NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xyXG4gICAgY29uc3QgdG9kb0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpLmNoaWxkcmVuO1xyXG5cclxuICAgIGlmIChpID09PSB0b2RvRWxzLmxlbmd0aCkge1xyXG4gICAgICB0b2Rvc0VsLmFwcGVuZChmcmFnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZG9zRWwucmVwbGFjZUNoaWxkKGZyYWcsIHRvZG9FbHNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VyclByb2plY3QudG9kb3NbaV0gPSB0b2RvO1xyXG4gICAgc3RvcmFnZS53cml0ZVByb2plY3RzKHRoaXMucHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgYWRkRWRpdEV2ZW50KGVkaXRFbCwgdG9kbykge1xyXG4gICAgZWRpdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5jdXJyVG9kb0lEID0gdGhpcy5jdXJyUHJvamVjdC50b2Rvcy5pbmRleE9mKHRvZG8pO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8gLmZvcm0taGVhZGVyJykuaW5uZXJIVE1MID0gJ0VkaXQgVG9kbyc7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlID0gdGhpcy5jdXJyUHJvamVjdC50b2Rvc1t0aGlzLmN1cnJUb2RvSURdLnRpdGxlO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSA9IHRoaXMuY3VyclByb2plY3QudG9kb3NbdGhpcy5jdXJyVG9kb0lEXS5kZXNjcmlwdGlvbjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykudmFsdWUgPSB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zW3RoaXMuY3VyclRvZG9JRF0uZHVlRGF0ZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5jdXJyUHJvamVjdC50b2Rvc1t0aGlzLmN1cnJUb2RvSURdLnByaW9yaXR5fWApLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8ubW9kYWwnKS5zaG93TW9kYWwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdERlbGV0ZUV2ZW50KGRlbGV0ZUVsLCBwcm9qZWN0KSB7XHJcbiAgICBkZWxldGVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGRlbGV0ZUVsLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xyXG4gICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHN0b3JhZ2Uud3JpdGVQcm9qZWN0cyh0aGlzLnByb2plY3RzKTtcclxuICAgICAgW3RoaXMuY3VyclByb2plY3RdID0gdGhpcy5wcm9qZWN0cztcclxuICAgICAgdGhpcy4jcG9wdWxhdGVUb2Rvc0hUTUwodGhpcy5jdXJyUHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG9EZWxldGVFdmVudChkZWxldGVFbCwgdG9kbykge1xyXG4gICAgZGVsZXRlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jdXJyUHJvamVjdC50b2Rvcy5pbmRleE9mKHRvZG8pO1xyXG4gICAgICB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGRlbGV0ZUVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgc3RvcmFnZS53cml0ZVByb2plY3RzKHRoaXMucHJvamVjdHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSSc7XHJcblxyXG5jb25zdCB1aSA9IG5ldyBVSSgpO1xyXG51aS5zZXR1cFBhZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9