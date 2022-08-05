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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: \"Open Sans\", sans-serif;\n  --primary: hsl(32, 100%, 57%);\n  --secondary: hsl(0, 0%, 93%);\n  --transition-time: 400ms;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2 {\n  color: rgb(34, 34, 34);\n}\n\nh1 {\n  margin: 0;\n}\n\nh2 {\n  margin-top: 0;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\n.header,\n.projects li,\n.new-project,\n.todo .summary {\n  display: flex;\n  align-items: center;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template: min-content 1fr/15rem 1fr;\n  gap: 1px;\n  background-color: black;\n}\n\n.header {\n  grid-column: 1/span 2;\n  background-color: var(--primary);\n  padding: 1rem;\n}\n.header .logo-img {\n  width: 3rem;\n  margin-right: 1rem;\n}\n\n.sidebar {\n  background-color: var(--secondary);\n  padding: 2rem;\n}\n.sidebar .projects li,\n.sidebar .new-project {\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  cursor: pointer;\n}\n.sidebar .projects li:hover {\n  font-weight: bold;\n}\n.sidebar .delete {\n  margin-left: auto;\n}\n.sidebar .projects li:hover .delete {\n  display: inline-block;\n}\n.sidebar .todo-count {\n  border: 1px solid var(--primary);\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n  flex: 0 0 auto;\n}\n.sidebar .todo-count,\n.sidebar .new-project img {\n  width: 1.75rem;\n  height: 1.75rem;\n  margin-right: 1rem;\n}\n\n.main {\n  padding: 2rem;\n  background-color: white;\n  min-width: 0;\n}\n\n.container {\n  width: min(100%, 40rem);\n  margin: 0 auto;\n}\n\n.todo {\n  border-left: 2px solid transparent;\n  padding: 0.5rem;\n}\n.todo.high-priority {\n  border-color: red;\n}\n.todo.medium-priority {\n  border-color: orange;\n}\n.todo.low-priority {\n  border-color: green;\n}\n.todo:hover {\n  background-color: var(--secondary);\n}\n.todo:hover .delete,\n.todo:hover .edit {\n  display: inline-block;\n}\n\n.summary {\n  gap: 0.5rem;\n  line-height: normal;\n  min-height: 1.5rem;\n}\n\n.name,\n.todo .title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.edit,\n.delete {\n  display: none;\n}\n\n.todo + .todo {\n  border-top: 1px solid rgb(146, 146, 146);\n}\n\n.checkbox {\n  flex: 0 0 1rem;\n  height: 1rem;\n  border: 1px solid rgb(87, 87, 87);\n  border-radius: 2px;\n  cursor: pointer;\n}\n.checkbox.checked {\n  background-color: rgb(70, 70, 70);\n}\n\n.checked ~ *:not(.edit):not(.delete) {\n  opacity: 0.4;\n}\n\n.due-date {\n  margin-left: auto;\n  font-size: 0.85rem;\n  color: rgb(66, 66, 66);\n}\n\n.edit,\n.delete {\n  cursor: pointer;\n}\n\n.details {\n  margin-left: calc(1.5rem + 2px);\n  font-size: 0.9rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.new-todo-button {\n  opacity: 0.5;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.new-todo-button:hover {\n  opacity: 1;\n}\n\ndialog {\n  border: 1px solid black;\n  padding: 0;\n  width: min(100%, 40rem);\n}\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\ndialog .container {\n  padding: 1rem;\n}\ndialog #name,\ndialog #title,\ndialog #description,\ndialog #due-date,\ndialog .priority-buttons label {\n  outline: 1px solid lightgray;\n  padding: 0.5rem;\n  border: none;\n}\ndialog button {\n  outline: 1px solid black;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.new-todo.modal #title,\n.new-todo.modal #description {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  box-shadow: none;\n  resize: none;\n}\n.new-todo.modal #description {\n  font-size: 0.9rem;\n  color: gray;\n}\n.new-todo.modal #description::placeholder {\n  color: lightgray;\n}\n.new-todo.modal .form-bottom {\n  margin-block: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.new-todo.modal label[for=due-date],\n.new-todo.modal legend {\n  font-size: 0.9rem;\n}\n.new-todo.modal .priority-buttons {\n  display: flex;\n  border: none;\n  padding: 0.4rem 0 0 0;\n  margin: 0;\n}\n.new-todo.modal input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n.new-todo.modal .priority-buttons label {\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.new-todo.modal #low + label:hover,\n.new-todo.modal #low:checked + label {\n  background-color: rgba(0, 128, 0, 0.5);\n}\n.new-todo.modal #medium + label:hover,\n.new-todo.modal #medium:checked + label {\n  background-color: rgba(255, 166, 0, 0.5);\n}\n.new-todo.modal #high + label:hover,\n.new-todo.modal #high:checked + label {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\nlabel {\n  display: block;\n  margin-bottom: 0.4rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,oCAAA;EACA,6BAAA;EACA,4BAAA;EACA,wBAAA;AAAJ;;AAGA;EACI,sBAAA;AAAJ;;AAGA;;EAEI,sBAAA;AAAJ;;AAGA;EACI,SAAA;AAAJ;;AAGA;EACI,aAAA;AAAJ;;AAGA;EACI,UAAA;EACA,gBAAA;AAAJ;;AAGA;;;;EAII,aAAA;EACA,mBAAA;AAAJ;;AAGA;EACI,iBAAA;EACA,aAAA;EACA,wCAAA;EACA,QAAA;EACA,uBAAA;AAAJ;;AAGA;EACI,qBAAA;EACA,gCAAA;EACA,aAAA;AAAJ;AAEI;EACI,WAAA;EACA,kBAAA;AAAR;;AAIA;EACI,kCAAA;EACA,aAAA;AADJ;AAGI;;EAEI,iBAAA;EACA,iBAAA;EACA,eAAA;AADR;AAII;EACI,iBAAA;AAFR;AAKI;EACI,iBAAA;AAHR;AAMI;EACI,qBAAA;AAJR;AAOI;EACI,gCAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,cAAA;AALR;AAQI;;EAEI,cAAA;EACA,eAAA;EACA,kBAAA;AANR;;AAUA;EACI,aAAA;EACA,uBAAA;EACA,YAAA;AAPJ;;AAUA;EACI,uBAAA;EACA,cAAA;AAPJ;;AAUA;EACI,kCAAA;EACA,eAAA;AAPJ;AASI;EACI,iBAAA;AAPR;AAUI;EACI,oBAAA;AARR;AAWI;EACI,mBAAA;AATR;AAYI;EACI,kCAAA;AAVR;AAYQ;;EAEI,qBAAA;AAVZ;;AAeA;EACI,WAAA;EACA,mBAAA;EACA,kBAAA;AAZJ;;AAeA;;EAEI,mBAAA;EACA,gBAAA;EACA,uBAAA;AAZJ;;AAeA;;EAEI,aAAA;AAZJ;;AAeA;EACI,wCAAA;AAZJ;;AAeA;EACI,cAAA;EACA,YAAA;EACA,iCAAA;EACA,kBAAA;EACA,eAAA;AAZJ;AAcI;EACI,iCAAA;AAZR;;AAgBA;EACI,YAAA;AAbJ;;AAgBA;EACI,iBAAA;EACA,kBAAA;EACA,sBAAA;AAbJ;;AAgBA;;EAEI,eAAA;AAbJ;;AAgBA;EACI,+BAAA;EACA,iBAAA;AAbJ;;AAgBA;EACI,aAAA;AAbJ;;AAgBA;EACI,YAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbJ;;AAgBA;EACI,UAAA;AAbJ;;AAgBA;EACI,uBAAA;EACA,UAAA;EACA,uBAAA;AAbJ;AAeI;EACI,oCAAA;AAbR;AAgBI;EACI,aAAA;AAdR;AAiBI;;;;;EAKI,4BAAA;EACA,eAAA;EACA,YAAA;AAfR;AAkBI;EACI,wBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AAhBR;;AAwBI;;EAEI,WAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;AArBR;AAwBI;EACI,iBAAA;EACA,WAAA;AAtBR;AAyBI;EACI,gBAAA;AAvBR;AA0BI;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;AAxBR;AA2BI;;EAEI,iBAAA;AAzBR;AA4BI;EACI,aAAA;EACA,YAAA;EACA,qBAAA;EACA,SAAA;AA1BR;AA6BI;EACI,eAAA;EACA,UAAA;EACA,oBAAA;AA3BR;AA8BI;EACI,eAAA;EACA,yBAAA;AA5BR;AA+BI;;EAEI,sCAAA;AA7BR;AAgCI;;EAEI,wCAAA;AA9BR;AAiCI;;EAEI,sCAAA;AA/BR;;AAoCA;EACI,cAAA;EACA,qBAAA;AAjCJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n\r\n:root {\r\n    font-family: 'Open Sans', sans-serif;\r\n    --primary: hsl(32, 100%, 57%);\r\n    --secondary: hsl(0, 0%, 93%);\r\n    --transition-time: 400ms;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2 {\r\n    color: rgb(34, 34, 34);\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    margin-top: 0;\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.header,\r\n.projects li,\r\n.new-project,\r\n.todo .summary {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template: min-content 1fr / 15rem 1fr;\r\n    gap: 1px;\r\n    background-color: black;\r\n}\r\n\r\n.header {\r\n    grid-column: 1 / span 2;\r\n    background-color: var(--primary);\r\n    padding: 1rem;\r\n\r\n    .logo-img {\r\n        width: 3rem;\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n.sidebar {\r\n    background-color: var(--secondary);\r\n    padding: 2rem;\r\n\r\n    .projects li,\r\n    .new-project {\r\n        font-size: 1.1rem;\r\n        padding: 0.5rem 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .projects li:hover {\r\n        font-weight: bold;\r\n    }\r\n\r\n    .delete {\r\n        margin-left: auto;\r\n    }\r\n\r\n    .projects li:hover .delete {\r\n        display: inline-block;\r\n    }\r\n\r\n    .todo-count {\r\n        border: 1px solid var(--primary);\r\n        border-radius: 50%;\r\n        display: grid;\r\n        place-content: center;\r\n        flex: 0 0 auto;\r\n    }\r\n\r\n    .todo-count,\r\n    .new-project img {\r\n        width: 1.75rem;\r\n        height: 1.75rem;\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n.main {\r\n    padding: 2rem;\r\n    background-color: white;\r\n    min-width: 0;\r\n}\r\n\r\n.container {\r\n    width: min(100%, 40rem);\r\n    margin: 0 auto;\r\n}\r\n\r\n.todo {\r\n    border-left: 2px solid transparent;\r\n    padding: 0.5rem;\r\n\r\n    &.high-priority {\r\n        border-color: red;\r\n    }\r\n\r\n    &.medium-priority {\r\n        border-color: orange;\r\n    }\r\n\r\n    &.low-priority {\r\n        border-color: green;\r\n    }\r\n\r\n    &:hover {\r\n        background-color: var(--secondary);\r\n\r\n        .delete,\r\n        .edit {\r\n            display: inline-block;\r\n        }\r\n    }\r\n}\r\n\r\n.summary {\r\n    gap: 0.5rem;\r\n    line-height: normal;\r\n    min-height: 1.5rem;\r\n}\r\n\r\n.name,\r\n.todo .title {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    display: none;\r\n}\r\n\r\n.todo+.todo {\r\n    border-top: 1px solid rgb(146, 146, 146);\r\n}\r\n\r\n.checkbox {\r\n    flex: 0 0 1rem;\r\n    height: 1rem;\r\n    border: 1px solid rgb(87, 87, 87);\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n\r\n    &.checked {\r\n        background-color: rgb(70, 70, 70);\r\n    }\r\n}\r\n\r\n.checked~*:not(.edit):not(.delete) {\r\n    opacity: 0.4;\r\n}\r\n\r\n.due-date {\r\n    margin-left: auto;\r\n    font-size: 0.85rem;\r\n    color: rgb(66, 66, 66);\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    cursor: pointer;\r\n}\r\n\r\n.details {\r\n    margin-left: calc(1.5rem + 2px);\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.new-todo-button {\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.new-todo-button:hover {\r\n    opacity: 1;\r\n}\r\n\r\ndialog {\r\n    border: 1px solid black;\r\n    padding: 0;\r\n    width: min(100%, 40rem);\r\n\r\n    &::backdrop {\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n    }\r\n\r\n    .container {\r\n        padding: 1rem;\r\n    }\r\n\r\n    #name,\r\n    #title,\r\n    #description,\r\n    #due-date,\r\n    .priority-buttons label {\r\n        outline: 1px solid lightgray;\r\n        padding: 0.5rem;\r\n        border: none;\r\n    }\r\n\r\n    button {\r\n        outline: 1px solid black;\r\n        border: none;\r\n        padding: 0.5rem;\r\n        cursor: pointer;\r\n    }\r\n\r\n}\r\n\r\n.new-todo.modal {\r\n\r\n\r\n    #title,\r\n    #description {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        box-shadow: none;\r\n        resize: none;\r\n    }\r\n\r\n    #description {\r\n        font-size: 0.9rem;\r\n        color: gray;\r\n    }\r\n\r\n    #description::placeholder {\r\n        color: lightgray;\r\n    }\r\n\r\n    .form-bottom {\r\n        margin-block: 1rem;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 1rem;\r\n    }\r\n\r\n    label[for=\"due-date\"],\r\n    legend {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    .priority-buttons {\r\n        display: flex;\r\n        border: none;\r\n        padding: 0.4rem 0 0 0;\r\n        margin: 0;\r\n    }\r\n\r\n    input[type=\"radio\"] {\r\n        position: fixed;\r\n        opacity: 0;\r\n        pointer-events: none;\r\n    }\r\n\r\n    .priority-buttons label {\r\n        cursor: pointer;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    #low+label:hover,\r\n    #low:checked+label {\r\n        background-color: rgba(0, 128, 0, 0.5);\r\n    }\r\n\r\n    #medium+label:hover,\r\n    #medium:checked+label {\r\n        background-color: rgba(255, 166, 0, 0.5);\r\n    }\r\n\r\n    #high+label:hover,\r\n    #high:checked+label {\r\n        background-color: rgba(255, 0, 0, 0.5);\r\n    }\r\n\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 0.4rem;\r\n}"],"sourceRoot":""}]);
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

// import Todo from './Todo';

function readProjects() {
  let projects = [];
  if (localStorage.getItem('projects')) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects = projects.map(({ name, todos }) => new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](name, todos));
  } else {
    projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Default'));
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
      const deleteEl = document.createRange().createContextualFragment('<img class="delete" src="../../dist/images/delete-bin-line.svg">');
      frag.querySelector('.project').appendChild(deleteEl);
      this.addProjectDeleteEvent(frag.querySelector('.delete'));
    }
    frag.querySelector('.project').addEventListener('click', () => {
      this.currProject = project;
      this.#populateTodosHTML(this.currProject);
    });
    document.querySelector('.projects').appendChild(frag);
  }

  #populateTodosHTML(project) {
    document.querySelector('.projects-header').innerHTML = project.name;
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
          <img class="edit" src="../../dist/images/edit-box-line.svg">
          <img class="delete" src="../../dist/images/delete-bin-line.svg">
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
      document.querySelector('.form-header').innerHTML = 'Edit Todo';
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
      this.#populateTodosHTML(this.projects[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SDtBQUN2SDtBQUNBLGlEQUFpRCwyQ0FBMkMsa0NBQWtDLGlDQUFpQyw2QkFBNkIsR0FBRyxPQUFPLDJCQUEyQixHQUFHLGFBQWEsMkJBQTJCLEdBQUcsUUFBUSxjQUFjLEdBQUcsUUFBUSxrQkFBa0IsR0FBRyxRQUFRLGVBQWUscUJBQXFCLEdBQUcsNERBQTRELGtCQUFrQix3QkFBd0IsR0FBRyxVQUFVLHNCQUFzQixrQkFBa0IsNkNBQTZDLGFBQWEsNEJBQTRCLEdBQUcsYUFBYSwwQkFBMEIscUNBQXFDLGtCQUFrQixHQUFHLHFCQUFxQixnQkFBZ0IsdUJBQXVCLEdBQUcsY0FBYyx1Q0FBdUMsa0JBQWtCLEdBQUcsaURBQWlELHNCQUFzQixzQkFBc0Isb0JBQW9CLEdBQUcsK0JBQStCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyx1Q0FBdUMsMEJBQTBCLEdBQUcsd0JBQXdCLHFDQUFxQyx1QkFBdUIsa0JBQWtCLDBCQUEwQixtQkFBbUIsR0FBRyxvREFBb0QsbUJBQW1CLG9CQUFvQix1QkFBdUIsR0FBRyxXQUFXLGtCQUFrQiw0QkFBNEIsaUJBQWlCLEdBQUcsZ0JBQWdCLDRCQUE0QixtQkFBbUIsR0FBRyxXQUFXLHVDQUF1QyxvQkFBb0IsR0FBRyx1QkFBdUIsc0JBQXNCLEdBQUcseUJBQXlCLHlCQUF5QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxlQUFlLHVDQUF1QyxHQUFHLDJDQUEyQywwQkFBMEIsR0FBRyxjQUFjLGdCQUFnQix3QkFBd0IsdUJBQXVCLEdBQUcsMEJBQTBCLHdCQUF3QixxQkFBcUIsNEJBQTRCLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLG1CQUFtQiw2Q0FBNkMsR0FBRyxlQUFlLG1CQUFtQixpQkFBaUIsc0NBQXNDLHVCQUF1QixvQkFBb0IsR0FBRyxxQkFBcUIsc0NBQXNDLEdBQUcsMENBQTBDLGlCQUFpQixHQUFHLGVBQWUsc0JBQXNCLHVCQUF1QiwyQkFBMkIsR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcsY0FBYyxvQ0FBb0Msc0JBQXNCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxzQkFBc0IsaUJBQWlCLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0QixlQUFlLEdBQUcsWUFBWSw0QkFBNEIsZUFBZSw0QkFBNEIsR0FBRyxvQkFBb0IseUNBQXlDLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLDBHQUEwRyxpQ0FBaUMsb0JBQW9CLGlCQUFpQixHQUFHLGlCQUFpQiw2QkFBNkIsaUJBQWlCLG9CQUFvQixvQkFBb0IsR0FBRywyREFBMkQsZ0JBQWdCLG9CQUFvQixpQkFBaUIscUJBQXFCLGlCQUFpQixHQUFHLGdDQUFnQyxzQkFBc0IsZ0JBQWdCLEdBQUcsNkNBQTZDLHFCQUFxQixHQUFHLGdDQUFnQyx1QkFBdUIsa0JBQWtCLG9CQUFvQixjQUFjLEdBQUcsZ0VBQWdFLHNCQUFzQixHQUFHLHFDQUFxQyxrQkFBa0IsaUJBQWlCLDBCQUEwQixjQUFjLEdBQUcscUNBQXFDLG9CQUFvQixlQUFlLHlCQUF5QixHQUFHLDJDQUEyQyxvQkFBb0IsOEJBQThCLEdBQUcsNkVBQTZFLDJDQUEyQyxHQUFHLG1GQUFtRiw2Q0FBNkMsR0FBRywrRUFBK0UsMkNBQTJDLEdBQUcsV0FBVyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sUUFBUSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sVUFBVSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcseUdB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QTs7Ozs7OztVQ2xNQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNRO0FBQzlCO0FBQ0EsZUFBZSxtREFBRTtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tcHJpbWFyeTogaHNsKDMyLCAxMDAlLCA1NyUpO1xcbiAgLS1zZWNvbmRhcnk6IGhzbCgwLCAwJSwgOTMlKTtcXG4gIC0tdHJhbnNpdGlvbi10aW1lOiA0MDBtcztcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5wcm9qZWN0cyBsaSxcXG4ubmV3LXByb2plY3QsXFxuLnRvZG8gLnN1bW1hcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogbWluLWNvbnRlbnQgMWZyLzE1cmVtIDFmcjtcXG4gIGdhcDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uaGVhZGVyIC5sb2dvLWltZyB7XFxuICB3aWR0aDogM3JlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbi5zaWRlYmFyIC5wcm9qZWN0cyBsaSxcXG4uc2lkZWJhciAubmV3LXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNpZGViYXIgLnByb2plY3RzIGxpOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc2lkZWJhciAuZGVsZXRlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc2lkZWJhciAucHJvamVjdHMgbGk6aG92ZXIgLmRlbGV0ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5zaWRlYmFyIC50b2RvLWNvdW50IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uc2lkZWJhciAudG9kby1jb3VudCxcXG4uc2lkZWJhciAubmV3LXByb2plY3QgaW1nIHtcXG4gIHdpZHRoOiAxLjc1cmVtO1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnRvZG8ge1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnRvZG8uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuLnRvZG8ubWVkaXVtLXByaW9yaXR5IHtcXG4gIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbn1cXG4udG9kby5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuLnRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuLnRvZG86aG92ZXIgLmRlbGV0ZSxcXG4udG9kbzpob3ZlciAuZWRpdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zdW1tYXJ5IHtcXG4gIGdhcDogMC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLm5hbWUsXFxuLnRvZG8gLnRpdGxlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5lZGl0LFxcbi5kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gKyAudG9kbyB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE0NiwgMTQ2LCAxNDYpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgZmxleDogMCAwIDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODcsIDg3LCA4Nyk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVja2JveC5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG59XFxuXFxuLmNoZWNrZWQgfiAqOm5vdCguZWRpdCk6bm90KC5kZWxldGUpIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgY29sb3I6IHJnYig2NiwgNjYsIDY2KTtcXG59XFxuXFxuLmVkaXQsXFxuLmRlbGV0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDEuNXJlbSArIDJweCk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctdG9kby1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgNDByZW0pO1xcbn1cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuZGlhbG9nIC5jb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuZGlhbG9nICNuYW1lLFxcbmRpYWxvZyAjdGl0bGUsXFxuZGlhbG9nICNkZXNjcmlwdGlvbixcXG5kaWFsb2cgI2R1ZS1kYXRlLFxcbmRpYWxvZyAucHJpb3JpdHktYnV0dG9ucyBsYWJlbCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5kaWFsb2cgYnV0dG9uIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy10b2RvLm1vZGFsICN0aXRsZSxcXG4ubmV3LXRvZG8ubW9kYWwgI2Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLm5ldy10b2RvLm1vZGFsICNkZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgI2Rlc2NyaXB0aW9uOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgLmZvcm0tYm90dG9tIHtcXG4gIG1hcmdpbi1ibG9jazogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFyZW07XFxufVxcbi5uZXctdG9kby5tb2RhbCBsYWJlbFtmb3I9ZHVlLWRhdGVdLFxcbi5uZXctdG9kby5tb2RhbCBsZWdlbmQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5uZXctdG9kby5tb2RhbCAucHJpb3JpdHktYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC40cmVtIDAgMCAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgLnByaW9yaXR5LWJ1dHRvbnMgbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm5ldy10b2RvLm1vZGFsICNsb3cgKyBsYWJlbDpob3ZlcixcXG4ubmV3LXRvZG8ubW9kYWwgI2xvdzpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XFxufVxcbi5uZXctdG9kby5tb2RhbCAjbWVkaXVtICsgbGFiZWw6aG92ZXIsXFxuLm5ldy10b2RvLm1vZGFsICNtZWRpdW06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNSk7XFxufVxcbi5uZXctdG9kby5tb2RhbCAjaGlnaCArIGxhYmVsOmhvdmVyLFxcbi5uZXctdG9kby5tb2RhbCAjaGlnaDpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBOztFQUVJLHNC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IkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1wcmltYXJ5OiBoc2woMzIsIDEwMCUsIDU3JSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5OiBoc2woMCwgMCUsIDkzJSk7XFxyXFxuICAgIC0tdHJhbnNpdGlvbi10aW1lOiA0MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyIHtcXHJcXG4gICAgY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLFxcclxcbi5wcm9qZWN0cyBsaSxcXHJcXG4ubmV3LXByb2plY3QsXFxyXFxuLnRvZG8gLnN1bW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IG1pbi1jb250ZW50IDFmciAvIDE1cmVtIDFmcjtcXHJcXG4gICAgZ2FwOiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAubG9nby1pbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcblxcclxcbiAgICAucHJvamVjdHMgbGksXFxyXFxuICAgIC5uZXctcHJvamVjdCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0cyBsaTpob3ZlciB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVsZXRlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0cyBsaTpob3ZlciAuZGVsZXRlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kby1jb3VudCB7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kby1jb3VudCxcXHJcXG4gICAgLm5ldy1wcm9qZWN0IGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMS43NXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMS43NXJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtaW4td2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogbWluKDEwMCUsIDQwcmVtKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcblxcclxcbiAgICAmLmhpZ2gtcHJpb3JpdHkge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5tZWRpdW0tcHJpb3JpdHkge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5sb3ctcHJpb3JpdHkge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuXFxyXFxuICAgICAgICAuZGVsZXRlLFxcclxcbiAgICAgICAgLmVkaXQge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSB7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLFxcclxcbi50b2RvIC50aXRsZSB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCxcXHJcXG4uZGVsZXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8rLnRvZG8ge1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE0NiwgMTQ2LCAxNDYpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgICBmbGV4OiAwIDAgMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODcsIDg3LCA4Nyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAmLmNoZWNrZWQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jaGVja2Vkfio6bm90KC5lZGl0KTpub3QoLmRlbGV0ZSkge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICAgIGNvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LFxcclxcbi5kZWxldGUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS41cmVtICsgMnB4KTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tYnV0dG9uIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgNDByZW0pO1xcclxcblxcclxcbiAgICAmOjpiYWNrZHJvcCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYW1lLFxcclxcbiAgICAjdGl0bGUsXFxyXFxuICAgICNkZXNjcmlwdGlvbixcXHJcXG4gICAgI2R1ZS1kYXRlLFxcclxcbiAgICAucHJpb3JpdHktYnV0dG9ucyBsYWJlbCB7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLm1vZGFsIHtcXHJcXG5cXHJcXG5cXHJcXG4gICAgI3RpdGxlLFxcclxcbiAgICAjZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNkZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiBncmF5O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNkZXNjcmlwdGlvbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1ib3R0b20ge1xcclxcbiAgICAgICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBsYWJlbFtmb3I9XFxcImR1ZS1kYXRlXFxcIl0sXFxyXFxuICAgIGxlZ2VuZCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpb3JpdHktYnV0dG9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZzogMC40cmVtIDAgMCAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmlvcml0eS1idXR0b25zIGxhYmVsIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2xvdytsYWJlbDpob3ZlcixcXHJcXG4gICAgI2xvdzpjaGVja2VkK2xhYmVsIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtZWRpdW0rbGFiZWw6aG92ZXIsXFxyXFxuICAgICNtZWRpdW06Y2hlY2tlZCtsYWJlbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNoaWdoK2xhYmVsOmhvdmVyLFxcclxcbiAgICAjaGlnaDpjaGVja2VkK2xhYmVsIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuLy8gaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkUHJvamVjdHMoKSB7XHJcbiAgbGV0IHByb2plY3RzID0gW107XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB7XHJcbiAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5tYXAoKHsgbmFtZSwgdG9kb3MgfSkgPT4gbmV3IFByb2plY3QobmFtZSwgdG9kb3MpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnRGVmYXVsdCcpKTtcclxuICAgIHdyaXRlUHJvamVjdHMocHJvamVjdHMpO1xyXG4gIH1cclxuICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZVByb2plY3RzKHByb2plY3RzKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsICdhc2RmJyk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICdVbm5hbWVkJywgdG9kb3MgPSBbXSkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kbykge1xyXG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiA/PyAnJztcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICB9XHJcbn1cclxuIiwiLy8gaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tICcuL0xvY2FsU3RvcmFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XHJcbiAgc3RhdGljICNhZGRUb2RvRXZlbnQodG9kbykge1xyXG4gICAgdG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdG9kby5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscycpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgI2FkZE1vZGFsQ2xvc2VFdmVudHMoKSB7XHJcbiAgICBjb25zdCBkaWFsb2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJyk7XHJcbiAgICBkaWFsb2dzLmZvckVhY2goKGRpYWxvZykgPT4ge1xyXG4gICAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZGlhbG9nKSB7XHJcbiAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgI2FkZE5ld1Byb2plY3RFdmVudCgpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xyXG4gICAgbmV3UHJvamVjdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJykucmVzZXQoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QubW9kYWwnKS5zaG93TW9kYWwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gc3RvcmFnZS5yZWFkUHJvamVjdHMoKTtcclxuICAgIFt0aGlzLmN1cnJQcm9qZWN0XSA9IHRoaXMucHJvamVjdHM7XHJcbiAgICB0aGlzLmN1cnJUb2RvSUQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBQYWdlKCkge1xyXG4gICAgdGhpcy4jcG9wdWxhdGVQcm9qZWN0c0hUTUwoKTtcclxuICAgIHRoaXMuI3BvcHVsYXRlVG9kb3NIVE1MKHRoaXMuY3VyclByb2plY3QpO1xyXG4gICAgdGhpcy4jYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gICNwb3B1bGF0ZVByb2plY3RzSFRNTCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuI2FkZFByb2plY3RFbChwcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgI2FkZFByb2plY3RFbChwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxyXG4gICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWNvdW50XCI+JHtwcm9qZWN0LnRvZG9zLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgYCk7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuY2hpbGRFbGVtZW50Q291bnQgIT09IDApIHtcclxuICAgICAgY29uc3QgZGVsZXRlRWwgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCgnPGltZyBjbGFzcz1cImRlbGV0ZVwiIHNyYz1cIi4uLy4uL2Rpc3QvaW1hZ2VzL2RlbGV0ZS1iaW4tbGluZS5zdmdcIj4nKTtcclxuICAgICAgZnJhZy5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpLmFwcGVuZENoaWxkKGRlbGV0ZUVsKTtcclxuICAgICAgdGhpcy5hZGRQcm9qZWN0RGVsZXRlRXZlbnQoZnJhZy5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykpO1xyXG4gICAgfVxyXG4gICAgZnJhZy5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJQcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgdGhpcy4jcG9wdWxhdGVUb2Rvc0hUTUwodGhpcy5jdXJyUHJvamVjdCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmFwcGVuZENoaWxkKGZyYWcpO1xyXG4gIH1cclxuXHJcbiAgI3BvcHVsYXRlVG9kb3NIVE1MKHByb2plY3QpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1oZWFkZXInKS5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmFkZFRvZG9FbChwcm9qZWN0LnRvZG9zW2ldLCBpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuI2FkZFRvZG9CdXR0b25FdmVudCgpO1xyXG4gICAgVUkuI2FkZE1vZGFsQ2xvc2VFdmVudHMoKTtcclxuICAgIHRoaXMuI2FkZFRvZG9Nb2RhbFN1Ym1pdEV2ZW50KCk7XHJcbiAgICBVSS4jYWRkTmV3UHJvamVjdEV2ZW50KCk7XHJcbiAgICB0aGlzLiNhZGRQcm9qZWN0TW9kYWxTdWJtaXRFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgI2FkZENoZWNrYm94RXZlbnQoY2hlY2tib3gsIHRvZG8pIHtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xyXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgc3RvcmFnZS53cml0ZVByb2plY3RzKHRoaXMucHJvamVjdHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAjYWRkVG9kb0J1dHRvbkV2ZW50KCkge1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1idXR0b24nKTtcclxuICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5yZXNldCgpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRleHQnKS5pbm5lclRleHQgPSAnTmV3IFRvZG8nO1xyXG4gICAgICB0aGlzLmN1cnJUb2RvSUQgPSB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zLmxlbmd0aDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLm1vZGFsJykuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNhZGRQcm9qZWN0TW9kYWxTdWJtaXRFdmVudCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XHJcbiAgICAgIHRoaXMuI2FkZFByb2plY3RFbChwcm9qZWN0KTtcclxuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgICBzdG9yYWdlLndyaXRlUHJvamVjdHModGhpcy5wcm9qZWN0cyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNhZGRUb2RvTW9kYWxTdWJtaXRFdmVudCgpIHtcclxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xyXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xyXG4gICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS52YWx1ZTtcclxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgICAgdGhpcy5hZGRUb2RvRWwodG9kbywgdGhpcy5jdXJyVG9kb0lEKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kb0VsKHRvZG8sIGkpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkLFxyXG4gICAgfSA9IHRvZG87XHJcblxyXG4gICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGBcclxuICAgICAgPGxpIGNsYXNzPVwidG9kbyAke3ByaW9yaXR5fS1wcmlvcml0eVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gke2NvbXBsZXRlZCA/ICcgY2hlY2tlZCcgOiAnJ31cIj48L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj4ke3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHVlLWRhdGVcIj4ke2R1ZURhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cImVkaXRcIiBzcmM9XCIuLi8uLi9kaXN0L2ltYWdlcy9lZGl0LWJveC1saW5lLnN2Z1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cImRlbGV0ZVwiIHNyYz1cIi4uLy4uL2Rpc3QvaW1hZ2VzL2RlbGV0ZS1iaW4tbGluZS5zdmdcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImRldGFpbHMgaGlkZGVuXCI+JHtkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvbGk+XHJcbiAgICBgKTtcclxuXHJcbiAgICB0aGlzLiNhZGRDaGVja2JveEV2ZW50KGZyYWcucXVlcnlTZWxlY3RvcignLmNoZWNrYm94JyksIHRvZG8pO1xyXG4gICAgdGhpcy5hZGRFZGl0RXZlbnQoZnJhZy5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpLCB0b2RvKTtcclxuICAgIHRoaXMuYWRkVG9kb0RlbGV0ZUV2ZW50KGZyYWcucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpLCB0b2RvKTtcclxuICAgIFVJLiNhZGRUb2RvRXZlbnQoZnJhZy5xdWVyeVNlbGVjdG9yKCcudG9kbycpKTtcclxuXHJcbiAgICBjb25zdCB0b2Rvc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XHJcbiAgICBjb25zdCB0b2RvRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJykuY2hpbGRyZW47XHJcblxyXG4gICAgaWYgKGkgPT09IHRvZG9FbHMubGVuZ3RoKSB7XHJcbiAgICAgIHRvZG9zRWwuYXBwZW5kKGZyYWcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kb3NFbC5yZXBsYWNlQ2hpbGQoZnJhZywgdG9kb0Vsc1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyUHJvamVjdC50b2Rvc1tpXSA9IHRvZG87XHJcbiAgICBzdG9yYWdlLndyaXRlUHJvamVjdHModGhpcy5wcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICBhZGRFZGl0RXZlbnQoZWRpdEVsLCB0b2RvKSB7XHJcbiAgICBlZGl0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLmN1cnJUb2RvSUQgPSB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9kbyk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWhlYWRlcicpLmlubmVySFRNTCA9ICdFZGl0IFRvZG8nO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZSA9IHRoaXMuY3VyclByb2plY3QudG9kb3NbdGhpcy5jdXJyVG9kb0lEXS50aXRsZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWUgPSB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zW3RoaXMuY3VyclRvZG9JRF0uZGVzY3JpcHRpb247XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlID0gdGhpcy5jdXJyUHJvamVjdC50b2Rvc1t0aGlzLmN1cnJUb2RvSURdLmR1ZURhdGU7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuY3VyclByb2plY3QudG9kb3NbdGhpcy5jdXJyVG9kb0lEXS5wcmlvcml0eX1gKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLm1vZGFsJykuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3REZWxldGVFdmVudChkZWxldGVFbCwgcHJvamVjdCkge1xyXG4gICAgZGVsZXRlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBkZWxldGVFbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcclxuICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzdG9yYWdlLndyaXRlUHJvamVjdHModGhpcy5wcm9qZWN0cyk7XHJcbiAgICAgIHRoaXMuI3BvcHVsYXRlVG9kb3NIVE1MKHRoaXMucHJvamVjdHNbMF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvRGVsZXRlRXZlbnQoZGVsZXRlRWwsIHRvZG8pIHtcclxuICAgIGRlbGV0ZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuY3VyclByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKTtcclxuICAgICAgdGhpcy5jdXJyUHJvamVjdC50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBkZWxldGVFbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgICAgIHN0b3JhZ2Uud3JpdGVQcm9qZWN0cyh0aGlzLnByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUknO1xyXG5cclxuY29uc3QgdWkgPSBuZXcgVUkoKTtcclxudWkuc2V0dXBQYWdlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==