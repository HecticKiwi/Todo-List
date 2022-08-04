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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: \"Open Sans\", sans-serif;\n  --primary: hsl(32, 100%, 57%);\n  --secondary: hsl(0, 0%, 93%);\n  --transition-time: 400ms;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2 {\n  color: rgb(34, 34, 34);\n}\n\nh1 {\n  margin: 0;\n}\n\nh2 {\n  margin-top: 0;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\n.header,\n.projects li,\n.new-project,\n.todo .summary {\n  display: flex;\n  align-items: center;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template: min-content 1fr/15rem 1fr;\n  gap: 1px;\n  background-color: black;\n}\n\n.header {\n  grid-column: 1/span 2;\n  background-color: var(--primary);\n  padding: 1rem;\n}\n.header .logo-img {\n  width: 3rem;\n  margin-right: 1rem;\n}\n\n.sidebar {\n  background-color: var(--secondary);\n  padding: 2rem;\n}\n.sidebar .projects li,\n.sidebar .new-project {\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  cursor: pointer;\n}\n.sidebar .projects li:hover {\n  font-weight: bold;\n}\n.sidebar .delete {\n  margin-left: auto;\n}\n.sidebar .projects li:hover .delete {\n  display: inline-block;\n}\n.sidebar .todo-count {\n  border: 1px solid var(--primary);\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n  flex: 0 0 auto;\n}\n.sidebar .todo-count,\n.sidebar .new-project img {\n  width: 1.75rem;\n  height: 1.75rem;\n  margin-right: 1rem;\n}\n\n.main {\n  padding: 2rem;\n  background-color: white;\n  min-width: 0;\n}\n\n.container {\n  width: min(100%, 40rem);\n  margin: 0 auto;\n}\n\n.todo {\n  border-left: 2px solid transparent;\n  padding: 0.5rem;\n}\n.todo.high-priority {\n  border-color: red;\n}\n.todo.medium-priority {\n  border-color: orange;\n}\n.todo.low-priority {\n  border-color: green;\n}\n.todo:hover {\n  background-color: var(--secondary);\n}\n.todo:hover .delete,\n.todo:hover .edit {\n  display: inline-block;\n}\n\n.summary {\n  gap: 0.5rem;\n  line-height: normal;\n  min-height: 1.5rem;\n}\n\n.name,\n.todo .title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.edit,\n.delete {\n  display: none;\n}\n\n.todo + .todo {\n  border-top: 1px solid rgb(146, 146, 146);\n}\n\n.checkbox {\n  flex: 0 0 1rem;\n  height: 1rem;\n  border: 1px solid rgb(87, 87, 87);\n  border-radius: 2px;\n  cursor: pointer;\n}\n.checkbox.checked {\n  background-color: rgb(70, 70, 70);\n}\n\n.checked ~ *:not(.edit):not(.delete) {\n  opacity: 0.4;\n}\n\n.due-date {\n  margin-left: auto;\n  font-size: 0.85rem;\n  color: rgb(66, 66, 66);\n}\n\n.edit,\n.delete {\n  cursor: pointer;\n}\n\n.details {\n  margin-left: calc(1.5rem + 2px);\n  font-size: 0.9rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.new-todo-button {\n  opacity: 0.5;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.new-todo-button:hover {\n  opacity: 1;\n}\n\ndialog {\n  border: 1px solid black;\n  padding: 0;\n  width: min(100%, 40rem);\n}\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\ndialog .container {\n  padding: 1rem;\n}\ndialog #name,\ndialog #title,\ndialog #description,\ndialog #due-date,\ndialog .priority-buttons label {\n  outline: 1px solid lightgray;\n  padding: 0.5rem;\n  border: none;\n}\ndialog button {\n  outline: 1px solid black;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.new-todo.modal #title,\n.new-todo.modal #description {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  box-shadow: none;\n  resize: none;\n}\n.new-todo.modal #description {\n  font-size: 0.9rem;\n  color: gray;\n}\n.new-todo.modal #description::placeholder {\n  color: lightgray;\n}\n.new-todo.modal .form-bottom {\n  margin-block: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.new-todo.modal label[for=due-date],\n.new-todo.modal legend {\n  font-size: 0.9rem;\n}\n.new-todo.modal .priority-buttons {\n  display: flex;\n  border: none;\n  padding: 0.4rem 0 0 0;\n  margin: 0;\n}\n.new-todo.modal input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n.new-todo.modal .priority-buttons label {\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.new-todo.modal #low + label:hover,\n.new-todo.modal #low:checked + label {\n  background-color: rgba(0, 128, 0, 0.5);\n}\n.new-todo.modal #medium + label:hover,\n.new-todo.modal #medium:checked + label {\n  background-color: rgba(255, 166, 0, 0.5);\n}\n.new-todo.modal #high + label:hover,\n.new-todo.modal #high:checked + label {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\nlabel {\n  display: block;\n  margin-bottom: 0.4rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,oCAAA;EACA,6BAAA;EACA,4BAAA;EACA,wBAAA;AAAJ;;AAGA;EACI,sBAAA;AAAJ;;AAGA;;EAEI,sBAAA;AAAJ;;AAGA;EACI,SAAA;AAAJ;;AAGA;EACI,aAAA;AAAJ;;AAGA;EACI,UAAA;EACA,gBAAA;AAAJ;;AAGA;;;;EAII,aAAA;EACA,mBAAA;AAAJ;;AAGA;EACI,iBAAA;EACA,aAAA;EACA,wCAAA;EACA,QAAA;EACA,uBAAA;AAAJ;;AAGA;EACI,qBAAA;EACA,gCAAA;EACA,aAAA;AAAJ;AAEI;EACI,WAAA;EACA,kBAAA;AAAR;;AAIA;EACI,kCAAA;EACA,aAAA;AADJ;AAGI;;EAEI,iBAAA;EACA,iBAAA;EACA,eAAA;AADR;AAII;EACI,iBAAA;AAFR;AAKI;EACI,iBAAA;AAHR;AAMI;EACI,qBAAA;AAJR;AAOI;EACI,gCAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,cAAA;AALR;AAQI;;EAEI,cAAA;EACA,eAAA;EACA,kBAAA;AANR;;AAUA;EACI,aAAA;EACA,uBAAA;EACA,YAAA;AAPJ;;AAUA;EACI,uBAAA;EACA,cAAA;AAPJ;;AAUA;EACI,kCAAA;EACA,eAAA;AAPJ;AASI;EACI,iBAAA;AAPR;AAUI;EACI,oBAAA;AARR;AAWI;EACI,mBAAA;AATR;AAYI;EACI,kCAAA;AAVR;AAYQ;;EAEI,qBAAA;AAVZ;;AAeA;EACI,WAAA;EACA,mBAAA;EACA,kBAAA;AAZJ;;AAeA;;EAEI,mBAAA;EACA,gBAAA;EACA,uBAAA;AAZJ;;AAeA;;EAEI,aAAA;AAZJ;;AAeA;EACI,wCAAA;AAZJ;;AAeA;EACI,cAAA;EACA,YAAA;EACA,iCAAA;EACA,kBAAA;EACA,eAAA;AAZJ;AAcI;EACI,iCAAA;AAZR;;AAgBA;EACI,YAAA;AAbJ;;AAgBA;EACI,iBAAA;EACA,kBAAA;EACA,sBAAA;AAbJ;;AAgBA;;EAEI,eAAA;AAbJ;;AAgBA;EACI,+BAAA;EACA,iBAAA;AAbJ;;AAgBA;EACI,aAAA;AAbJ;;AAgBA;EACI,YAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbJ;;AAgBA;EACI,UAAA;AAbJ;;AAgBA;EACI,uBAAA;EACA,UAAA;EACA,uBAAA;AAbJ;AAeI;EACI,oCAAA;AAbR;AAgBI;EACI,aAAA;AAdR;AAiBI;;;;;EAKI,4BAAA;EACA,eAAA;EACA,YAAA;AAfR;AAkBI;EACI,wBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AAhBR;;AA0BI;;EAEI,WAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;AAvBR;AA0BI;EACI,iBAAA;EACA,WAAA;AAxBR;AA2BI;EACI,gBAAA;AAzBR;AA4BI;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;AA1BR;AA6BI;;EAEI,iBAAA;AA3BR;AA8BI;EACI,aAAA;EACA,YAAA;EACA,qBAAA;EACA,SAAA;AA5BR;AA+BI;EACI,eAAA;EACA,UAAA;EACA,oBAAA;AA7BR;AAgCI;EACI,eAAA;EACA,yBAAA;AA9BR;AAiCI;;EAEI,sCAAA;AA/BR;AAkCI;;EAEI,wCAAA;AAhCR;AAmCI;;EAEI,sCAAA;AAjCR;;AAsCA;EACI,cAAA;EACA,qBAAA;AAnCJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n\r\n:root {\r\n    font-family: 'Open Sans', sans-serif;\r\n    --primary: hsl(32, 100%, 57%);\r\n    --secondary: hsl(0, 0%, 93%);\r\n    --transition-time: 400ms;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2 {\r\n    color: rgb(34, 34, 34);\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    margin-top: 0;\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.header,\r\n.projects li,\r\n.new-project,\r\n.todo .summary {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template: min-content 1fr / 15rem 1fr;\r\n    gap: 1px;\r\n    background-color: black;\r\n}\r\n\r\n.header {\r\n    grid-column: 1 / span 2;\r\n    background-color: var(--primary);\r\n    padding: 1rem;\r\n\r\n    .logo-img {\r\n        width: 3rem;\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n.sidebar {\r\n    background-color: var(--secondary);\r\n    padding: 2rem;\r\n\r\n    .projects li,\r\n    .new-project {\r\n        font-size: 1.1rem;\r\n        padding: 0.5rem 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .projects li:hover {\r\n        font-weight: bold;\r\n    }\r\n\r\n    .delete {\r\n        margin-left: auto;\r\n    }\r\n\r\n    .projects li:hover .delete {\r\n        display: inline-block;\r\n    }\r\n\r\n    .todo-count {\r\n        border: 1px solid var(--primary);\r\n        border-radius: 50%;\r\n        display: grid;\r\n        place-content: center;\r\n        flex: 0 0 auto;\r\n    }\r\n\r\n    .todo-count,\r\n    .new-project img {\r\n        width: 1.75rem;\r\n        height: 1.75rem;\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n.main {\r\n    padding: 2rem;\r\n    background-color: white;\r\n    min-width: 0;\r\n}\r\n\r\n.container {\r\n    width: min(100%, 40rem);\r\n    margin: 0 auto;\r\n}\r\n\r\n.todo {\r\n    border-left: 2px solid transparent;\r\n    padding: 0.5rem;\r\n\r\n    &.high-priority {\r\n        border-color: red;\r\n    }\r\n\r\n    &.medium-priority {\r\n        border-color: orange;\r\n    }\r\n\r\n    &.low-priority {\r\n        border-color: green;\r\n    }\r\n\r\n    &:hover {\r\n        background-color: var(--secondary);\r\n\r\n        .delete,\r\n        .edit {\r\n            display: inline-block;\r\n        }\r\n    }\r\n}\r\n\r\n.summary {\r\n    gap: 0.5rem;\r\n    line-height: normal;\r\n    min-height: 1.5rem;\r\n}\r\n\r\n.name,\r\n.todo .title {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    display: none;\r\n}\r\n\r\n.todo+.todo {\r\n    border-top: 1px solid rgb(146, 146, 146);\r\n}\r\n\r\n.checkbox {\r\n    flex: 0 0 1rem;\r\n    height: 1rem;\r\n    border: 1px solid rgb(87, 87, 87);\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n\r\n    &.checked {\r\n        background-color: rgb(70, 70, 70);\r\n    }\r\n}\r\n\r\n.checked~*:not(.edit):not(.delete) {\r\n    opacity: 0.4;\r\n}\r\n\r\n.due-date {\r\n    margin-left: auto;\r\n    font-size: 0.85rem;\r\n    color: rgb(66, 66, 66);\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    cursor: pointer;\r\n}\r\n\r\n.details {\r\n    margin-left: calc(1.5rem + 2px);\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.new-todo-button {\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.new-todo-button:hover {\r\n    opacity: 1;\r\n}\r\n\r\ndialog {\r\n    border: 1px solid black;\r\n    padding: 0;\r\n    width: min(100%, 40rem);\r\n\r\n    &::backdrop {\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n    }\r\n\r\n    .container {\r\n        padding: 1rem;\r\n    }\r\n\r\n    #name,\r\n    #title,\r\n    #description,\r\n    #due-date,\r\n    .priority-buttons label {\r\n        outline: 1px solid lightgray;\r\n        padding: 0.5rem;\r\n        border: none;\r\n    }\r\n\r\n    button {\r\n        outline: 1px solid black;\r\n        border: none;\r\n        padding: 0.5rem;\r\n        cursor: pointer;\r\n    }\r\n\r\n}\r\n\r\n.project.modal {}\r\n\r\n.new-todo.modal {\r\n\r\n\r\n    #title,\r\n    #description {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        box-shadow: none;\r\n        resize: none;\r\n    }\r\n\r\n    #description {\r\n        font-size: 0.9rem;\r\n        color: gray;\r\n    }\r\n\r\n    #description::placeholder {\r\n        color: lightgray;\r\n    }\r\n\r\n    .form-bottom {\r\n        margin-block: 1rem;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 1rem;\r\n    }\r\n\r\n    label[for=\"due-date\"],\r\n    legend {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    .priority-buttons {\r\n        display: flex;\r\n        border: none;\r\n        padding: 0.4rem 0 0 0;\r\n        margin: 0;\r\n    }\r\n\r\n    input[type=\"radio\"] {\r\n        position: fixed;\r\n        opacity: 0;\r\n        pointer-events: none;\r\n    }\r\n\r\n    .priority-buttons label {\r\n        cursor: pointer;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    #low+label:hover,\r\n    #low:checked+label {\r\n        background-color: rgba(0, 128, 0, 0.5);\r\n    }\r\n\r\n    #medium+label:hover,\r\n    #medium:checked+label {\r\n        background-color: rgba(255, 166, 0, 0.5);\r\n    }\r\n\r\n    #high+label:hover,\r\n    #high:checked+label {\r\n        background-color: rgba(255, 0, 0, 0.5);\r\n    }\r\n\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 0.4rem;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage */ "./src/modules/LocalStorage.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
// import Project from './Project';




class UI {
  static createElement(tag, text, className = '') {
    const el = document.createElement(tag);
    el.innerText = text;
    el.className = className;
    return el;
  }

  static getTodoIndex(clickedEl) {
    const liEl = clickedEl.parentNode.parentNode;
    const todosEl = document.querySelector('.todos');
    const index = Array.prototype.indexOf.call(todosEl.children, liEl);
    return index;
  }

  static addTodoEvent(todo) {
    todo.addEventListener('click', (e) => {
      const { target } = e;
      if (target === todo || target.classList.contains('summary') || target.classList.contains('title') || target.classList.contains('due-date') || target.classList.contains('details')) {
        todo.classList.toggle('expanded');
        todo.querySelector('.details').classList.toggle('hidden');
      }
    });
  }

  static addModalCloseEvents() {
    const dialogs = document.querySelectorAll('.modal');
    dialogs.forEach((dialog) => {
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
          dialog.close();
        }
      });
    });
  }

  static addNewProjectEvent() {
    const newProjectEl = document.querySelector('.new-project');
    newProjectEl.addEventListener('click', () => {
      document.querySelector('.project-form').reset();
      document.querySelector('.project.modal').showModal();
    });
  }

  constructor() {
    this.currTodoID = null;
    this.projects = _LocalStorage__WEBPACK_IMPORTED_MODULE_1__.readProjects();
    [this.currProject] = this.projects;
  }

  setupPage() {
    this.populateProjectsHTML();
    this.populateTodosHTML(this.currProject);
    this.addEventListeners();
  }

  populateProjectsHTML() {
    document.querySelector('.projects').innerHTML = '';
    this.projects.forEach((project) => {
      this.addProjectEl(project);
    });
  }

  addProjectEl(project) {
    const projectEl = UI.createElement('li', '', 'project');
    projectEl.appendChild(UI.createElement('span', project.todos.length, 'todo-count'));
    projectEl.appendChild(UI.createElement('span', project.name, 'name'));
    const deleteEl = UI.createElement('img', '', 'delete');
    deleteEl.src = '../../dist/images/delete-bin-line.svg';
    projectEl.append(deleteEl);
    this.addProjectDeleteEvent(deleteEl);
    projectEl.addEventListener('click', () => {
      this.currProject = project;
      this.populateTodosHTML(this.currProject);
    });
    const projectsEl = document.querySelector('.projects');
    projectsEl.append(projectEl);
  }

  populateTodosHTML(project) {
    document.querySelector('.projects-header').innerHTML = project.name;
    document.querySelector('.todos').innerHTML = '';
    for (let i = 0; i < project.todos.length; i += 1) {
      this.addTodoEl(project.todos[i], i);
    }
  }

  addEventListeners() {
    this.addTodoButtonEvent();
    UI.addModalCloseEvents();
    this.addTodoModalSubmitEvent();
    UI.addNewProjectEvent();
    this.addProjectModalSubmitEvent();
  }

  addCheckboxEvent(checkbox) {
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('checked');

      const index = UI.getTodoIndex(checkbox);
      this.currProject.todos[index].completed = !this.currProject.todos[index].completed;
      _LocalStorage__WEBPACK_IMPORTED_MODULE_1__.writeProjects(this.projects);
    });
  }

  addTodoButtonEvent() {
    const newTodo = document.querySelector('.new-todo-button');
    newTodo.addEventListener('click', () => {
      document.querySelector('.todo-form').reset();
      document.querySelector('.add-text').innerText = 'New Todo';
      this.currTodoID = this.currProject.todos.length;
      document.querySelector('.new-todo.modal').showModal();
    });
  }

  addProjectModalSubmitEvent() {
    document.querySelector('.project-form').addEventListener('click', () => {
      const name = document.querySelector('#name').value;
      const project = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](name);
      this.addProjectEl(project);
      this.projects.push(project);
      _LocalStorage__WEBPACK_IMPORTED_MODULE_1__.writeProjects(this.projects);
    });
  }

  addTodoModalSubmitEvent() {
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

    // Create todo DOM element
    const todoEl = UI.createElement('li', '', 'todo');
    todoEl.className += ` ${priority}-priority`;
    const summaryEl = UI.createElement('div', '', 'summary');
    const checkboxEl = UI.createElement('div', '', 'checkbox');
    if (completed) {
      checkboxEl.classList.add('checked');
    }
    const titleEl = UI.createElement('span', title, 'title');
    const dueDateEl = UI.createElement('span', dueDate, 'due-date');
    const editEl = UI.createElement('img', '', 'edit');
    editEl.src = '../../dist/images/edit-box-line.svg';
    const deleteEl = UI.createElement('img', '', 'delete');
    deleteEl.src = '../../dist/images/delete-bin-line.svg';
    summaryEl.append(checkboxEl, titleEl, dueDateEl, editEl, deleteEl);
    todoEl.appendChild(summaryEl);
    const detailsEl = UI.createElement('p', description, 'details hidden');

    const todosEl = document.querySelector('.todos');
    const todoEls = document.querySelector('.todos').children;

    if (i === todoEls.length) {
      todosEl.append(todoEl);
    } else {
      todosEl.replaceChild(todoEl, todoEls[i]);
    }

    this.currProject.todos[i] = todo;
    _LocalStorage__WEBPACK_IMPORTED_MODULE_1__.writeProjects(this.projects);

    todoEl.appendChild(detailsEl);

    this.addCheckboxEvent(checkboxEl);
    this.addEditEvent(editEl);
    this.addTodoDeleteEvent(deleteEl);
    UI.addTodoEvent(todoEl);
  }

  addEditEvent(editEl) {
    editEl.addEventListener('click', () => {
      this.currTodoID = UI.getTodoIndex(editEl);
      document.querySelector('.form-header').innerHTML = 'Edit Todo';
      document.querySelector('#title').value = this.currProject.todos[this.currTodoID].title;
      document.querySelector('#description').value = this.currProject.todos[this.currTodoID].description;
      document.querySelector('#due-date').value = this.currProject.todos[this.currTodoID].dueDate;
      document.querySelector(`#${this.currProject.todos[this.currTodoID].priority}`).checked = true;
      document.querySelector('.new-todo.modal').showModal();
    });
  }

  addProjectDeleteEvent(deleteEl) {
    deleteEl.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = Array.prototype.indexOf.call(document.querySelector('.projects').children, deleteEl.parentNode);
      deleteEl.parentNode.remove();
      this.projects.splice(index, 1);
      _LocalStorage__WEBPACK_IMPORTED_MODULE_1__.writeProjects(this.projects);
      this.populateTodosHTML(this.projects[index - 1]);
    });
  }

  addTodoDeleteEvent(deleteEl) {
    deleteEl.addEventListener('click', () => {
      const index = UI.getTodoIndex(deleteEl);
      this.currProject.todos.splice(index, 1);
      deleteEl.parentNode.parentNode.remove();
      _LocalStorage__WEBPACK_IMPORTED_MODULE_1__.writeProjects(this.projects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sVUFBVSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcseUdB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O0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQXFCO0FBQzNCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDeE5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1E7QUFDOUI7QUFDQSxlQUFlLG1EQUFFO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1wcmltYXJ5OiBoc2woMzIsIDEwMCUsIDU3JSk7XFxuICAtLXNlY29uZGFyeTogaHNsKDAsIDAlLCA5MyUpO1xcbiAgLS10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxudWwge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIsXFxuLnByb2plY3RzIGxpLFxcbi5uZXctcHJvamVjdCxcXG4udG9kbyAuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBtaW4tY29udGVudCAxZnIvMTVyZW0gMWZyO1xcbiAgZ2FwOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5oZWFkZXIgLmxvZ28taW1nIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuLnNpZGViYXIgLnByb2plY3RzIGxpLFxcbi5zaWRlYmFyIC5uZXctcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZWJhciAucHJvamVjdHMgbGk6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5zaWRlYmFyIC5kZWxldGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5zaWRlYmFyIC5wcm9qZWN0cyBsaTpob3ZlciAuZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnNpZGViYXIgLnRvZG8tY291bnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5zaWRlYmFyIC50b2RvLWNvdW50LFxcbi5zaWRlYmFyIC5uZXctcHJvamVjdCBpbWcge1xcbiAgd2lkdGg6IDEuNzVyZW07XFxuICBoZWlnaHQ6IDEuNzVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5tYWluIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogbWluKDEwMCUsIDQwcmVtKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udG9kbyB7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4udG9kby5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG4udG9kby5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxufVxcbi50b2RvLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG4udG9kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG4udG9kbzpob3ZlciAuZGVsZXRlLFxcbi50b2RvOmhvdmVyIC5lZGl0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnN1bW1hcnkge1xcbiAgZ2FwOiAwLjVyZW07XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWluLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ubmFtZSxcXG4udG9kbyAudGl0bGUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLmVkaXQsXFxuLmRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyArIC50b2RvIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBmbGV4OiAwIDAgMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NywgODcsIDg3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoZWNrYm94LmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbn1cXG5cXG4uY2hlY2tlZCB+ICo6bm90KC5lZGl0KTpub3QoLmRlbGV0ZSkge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IDAuODVyZW07XFxuICBjb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xcbn1cXG5cXG4uZWRpdCxcXG4uZGVsZXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMS41cmVtICsgMnB4KTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uZXctdG9kby1idXR0b24ge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5kaWFsb2cgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5kaWFsb2cgI25hbWUsXFxuZGlhbG9nICN0aXRsZSxcXG5kaWFsb2cgI2Rlc2NyaXB0aW9uLFxcbmRpYWxvZyAjZHVlLWRhdGUsXFxuZGlhbG9nIC5wcmlvcml0eS1idXR0b25zIGxhYmVsIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbmRpYWxvZyBidXR0b24ge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LXRvZG8ubW9kYWwgI3RpdGxlLFxcbi5uZXctdG9kby5tb2RhbCAjZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5uZXctdG9kby5tb2RhbCAjZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxufVxcbi5uZXctdG9kby5tb2RhbCAuZm9ybS1ib3R0b20ge1xcbiAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMXJlbTtcXG59XFxuLm5ldy10b2RvLm1vZGFsIGxhYmVsW2Zvcj1kdWUtZGF0ZV0sXFxuLm5ldy10b2RvLm1vZGFsIGxlZ2VuZCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLm5ldy10b2RvLm1vZGFsIC5wcmlvcml0eS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjRyZW0gMCAwIDA7XFxuICBtYXJnaW46IDA7XFxufVxcbi5uZXctdG9kby5tb2RhbCBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5uZXctdG9kby5tb2RhbCAucHJpb3JpdHktYnV0dG9ucyBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgI2xvdyArIGxhYmVsOmhvdmVyLFxcbi5uZXctdG9kby5tb2RhbCAjbG93OmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcXG59XFxuLm5ldy10b2RvLm1vZGFsICNtZWRpdW0gKyBsYWJlbDpob3ZlcixcXG4ubmV3LXRvZG8ubW9kYWwgI21lZGl1bTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41KTtcXG59XFxuLm5ldy10b2RvLm1vZGFsICNoaWdoICsgbGFiZWw6aG92ZXIsXFxuLm5ldy10b2RvLm1vZGFsICNoaWdoOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxubGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0FBQUo7O0FBR0E7O0VBRUksc0JBQUE7QUFBSjs7QUFHQTtFQUNJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBOzs7O0VBSUksYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFBSjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBSUE7RUFDSSxrQ0FBQTtFQUNBLGFBQUE7QUFESjtBQUdJOztFQUVJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRFI7QUFJSTtFQUNJLGlCQUFBO0FBRlI7QUFLSTtFQUNJLGlCQUFBO0FBSFI7QUFNSTtFQUNJLHFCQUFBO0FBSlI7QUFPSTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTFI7QUFRSTs7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTlI7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBUEo7O0FBVUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFVQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtBQVBKO0FBU0k7RUFDSSxpQkFBQTtBQVBSO0FBVUk7RUFDSSxvQkFBQTtBQVJSO0FBV0k7RUFDSSxtQkFBQTtBQVRSO0FBWUk7RUFDSSxrQ0FBQTtBQVZSO0FBWVE7O0VBRUkscUJBQUE7QUFWWjs7QUFlQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBWko7O0FBZUE7O0VBRUksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBWko7O0FBZUE7O0VBRUksYUFBQTtBQVpKOztBQWVBO0VBQ0ksd0NBQUE7QUFaSjs7QUFlQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFaSjtBQWNJO0VBQ0ksaUNBQUE7QUFaUjs7QUFnQkE7RUFDSSxZQUFBO0FBYko7O0FBZ0JBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBYko7O0FBZ0JBOztFQUVJLGVBQUE7QUFiSjs7QUFnQkE7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksYUFBQTtBQWJKOztBQWdCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxVQUFBO0FBYko7O0FBZ0JBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFiSjtBQWVJO0VBQ0ksb0NBQUE7QUFiUjtBQWdCSTtFQUNJLGFBQUE7QUFkUjtBQWlCSTs7Ozs7RUFLSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBZlI7QUFrQkk7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWhCUjs7QUEwQkk7O0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBdkJSO0FBMEJJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBeEJSO0FBMkJJO0VBQ0ksZ0JBQUE7QUF6QlI7QUE0Qkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTFCUjtBQTZCSTs7RUFFSSxpQkFBQTtBQTNCUjtBQThCSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBNUJSO0FBK0JJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQTdCUjtBQWdDSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQTlCUjtBQWlDSTs7RUFFSSxzQ0FBQTtBQS9CUjtBQWtDSTs7RUFFSSx3Q0FBQTtBQWhDUjtBQW1DSTs7RUFFSSxzQ0FBQTtBQWpDUjs7QUFzQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFuQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXByaW1hcnk6IGhzbCgzMiwgMTAwJSwgNTclKTtcXHJcXG4gICAgLS1zZWNvbmRhcnk6IGhzbCgwLCAwJSwgOTMlKTtcXHJcXG4gICAgLS10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIge1xcclxcbiAgICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIsXFxyXFxuLnByb2plY3RzIGxpLFxcclxcbi5uZXctcHJvamVjdCxcXHJcXG4udG9kbyAuc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogbWluLWNvbnRlbnQgMWZyIC8gMTVyZW0gMWZyO1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIC5sb2dvLWltZyB7XFxyXFxuICAgICAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0cyBsaSxcXHJcXG4gICAgLm5ldy1wcm9qZWN0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RzIGxpOmhvdmVyIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZWxldGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RzIGxpOmhvdmVyIC5kZWxldGUge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNvdW50IHtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNvdW50LFxcclxcbiAgICAubmV3LXByb2plY3QgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxLjc1cmVtO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1pbi13aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgNDByZW0pO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgICYuaGlnaC1wcmlvcml0eSB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLm1lZGl1bS1wcmlvcml0eSB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLmxvdy1wcmlvcml0eSB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG5cXHJcXG4gICAgICAgIC5kZWxldGUsXFxyXFxuICAgICAgICAuZWRpdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUsXFxyXFxuLnRvZG8gLnRpdGxlIHtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LFxcclxcbi5kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbysudG9kbyB7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICAgIGZsZXg6IDAgMCAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NywgODcsIDg3KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICYuY2hlY2tlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWR+Kjpub3QoLmVkaXQpOm5vdCguZGVsZXRlKSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYig2NiwgNjYsIDY2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQsXFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxLjVyZW0gKyAycHgpO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1idXR0b24ge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1idXR0b246aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxyXFxuXFxyXFxuICAgICY6OmJhY2tkcm9wIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25hbWUsXFxyXFxuICAgICN0aXRsZSxcXHJcXG4gICAgI2Rlc2NyaXB0aW9uLFxcclxcbiAgICAjZHVlLWRhdGUsXFxyXFxuICAgIC5wcmlvcml0eS1idXR0b25zIGxhYmVsIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC5tb2RhbCB7fVxcclxcblxcclxcbi5uZXctdG9kby5tb2RhbCB7XFxyXFxuXFxyXFxuXFxyXFxuICAgICN0aXRsZSxcXHJcXG4gICAgI2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgICAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tYm90dG9tIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ibG9jazogMXJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGFiZWxbZm9yPVxcXCJkdWUtZGF0ZVxcXCJdLFxcclxcbiAgICBsZWdlbmQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW9yaXR5LWJ1dHRvbnMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwIDAgMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpb3JpdHktYnV0dG9ucyBsYWJlbCB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNsb3crbGFiZWw6aG92ZXIsXFxyXFxuICAgICNsb3c6Y2hlY2tlZCtsYWJlbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVkaXVtK2xhYmVsOmhvdmVyLFxcclxcbiAgICAjbWVkaXVtOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaGlnaCtsYWJlbDpob3ZlcixcXHJcXG4gICAgI2hpZ2g6Y2hlY2tlZCtsYWJlbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbi8vIGltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZFByb2plY3RzKCkge1xyXG4gIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xyXG4gICAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuICAgIHByb2plY3RzID0gcHJvamVjdHMubWFwKCh7IG5hbWUsIHRvZG9zIH0pID0+IG5ldyBQcm9qZWN0KG5hbWUsIHRvZG9zKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0RlZmF1bHQnKSk7XHJcbiAgICB3cml0ZVByb2plY3RzKHByb2plY3RzKTtcclxuICB9XHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3QnLCAnYXNkZicpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnVW5uYW1lZCcsIHRvZG9zID0gW10pIHtcclxuICAgIHRoaXMudG9kb3MgPSB0b2RvcztcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG8pIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gPz8gJyc7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XHJcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9Mb2NhbFN0b3JhZ2UnO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZywgdGV4dCwgY2xhc3NOYW1lID0gJycpIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgZWwuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRUb2RvSW5kZXgoY2xpY2tlZEVsKSB7XHJcbiAgICBjb25zdCBsaUVsID0gY2xpY2tlZEVsLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRvZG9zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcclxuICAgIGNvbnN0IGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0b2Rvc0VsLmNoaWxkcmVuLCBsaUVsKTtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRUb2RvRXZlbnQodG9kbykge1xyXG4gICAgdG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xyXG4gICAgICBpZiAodGFyZ2V0ID09PSB0b2RvIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1bW1hcnknKSB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0aXRsZScpIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2R1ZS1kYXRlJykgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGV0YWlscycpKSB7XHJcbiAgICAgICAgdG9kby5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkTW9kYWxDbG9zZUV2ZW50cygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKTtcclxuICAgIGRpYWxvZ3MuZm9yRWFjaCgoZGlhbG9nKSA9PiB7XHJcbiAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpIHtcclxuICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGROZXdQcm9qZWN0RXZlbnQoKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcclxuICAgIG5ld1Byb2plY3RFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Lm1vZGFsJykuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jdXJyVG9kb0lEID0gbnVsbDtcclxuICAgIHRoaXMucHJvamVjdHMgPSBzdG9yYWdlLnJlYWRQcm9qZWN0cygpO1xyXG4gICAgW3RoaXMuY3VyclByb2plY3RdID0gdGhpcy5wcm9qZWN0cztcclxuICB9XHJcblxyXG4gIHNldHVwUGFnZSgpIHtcclxuICAgIHRoaXMucG9wdWxhdGVQcm9qZWN0c0hUTUwoKTtcclxuICAgIHRoaXMucG9wdWxhdGVUb2Rvc0hUTUwodGhpcy5jdXJyUHJvamVjdCk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVByb2plY3RzSFRNTCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkUHJvamVjdEVsKHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0RWwocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEVsID0gVUkuY3JlYXRlRWxlbWVudCgnbGknLCAnJywgJ3Byb2plY3QnKTtcclxuICAgIHByb2plY3RFbC5hcHBlbmRDaGlsZChVSS5jcmVhdGVFbGVtZW50KCdzcGFuJywgcHJvamVjdC50b2Rvcy5sZW5ndGgsICd0b2RvLWNvdW50JykpO1xyXG4gICAgcHJvamVjdEVsLmFwcGVuZENoaWxkKFVJLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBwcm9qZWN0Lm5hbWUsICduYW1lJykpO1xyXG4gICAgY29uc3QgZGVsZXRlRWwgPSBVSS5jcmVhdGVFbGVtZW50KCdpbWcnLCAnJywgJ2RlbGV0ZScpO1xyXG4gICAgZGVsZXRlRWwuc3JjID0gJy4uLy4uL2Rpc3QvaW1hZ2VzL2RlbGV0ZS1iaW4tbGluZS5zdmcnO1xyXG4gICAgcHJvamVjdEVsLmFwcGVuZChkZWxldGVFbCk7XHJcbiAgICB0aGlzLmFkZFByb2plY3REZWxldGVFdmVudChkZWxldGVFbCk7XHJcbiAgICBwcm9qZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VyclByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICB0aGlzLnBvcHVsYXRlVG9kb3NIVE1MKHRoaXMuY3VyclByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9qZWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgICBwcm9qZWN0c0VsLmFwcGVuZChwcm9qZWN0RWwpO1xyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVUb2Rvc0hUTUwocHJvamVjdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWhlYWRlcicpLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHRoaXMuYWRkVG9kb0VsKHByb2plY3QudG9kb3NbaV0sIGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmFkZFRvZG9CdXR0b25FdmVudCgpO1xyXG4gICAgVUkuYWRkTW9kYWxDbG9zZUV2ZW50cygpO1xyXG4gICAgdGhpcy5hZGRUb2RvTW9kYWxTdWJtaXRFdmVudCgpO1xyXG4gICAgVUkuYWRkTmV3UHJvamVjdEV2ZW50KCk7XHJcbiAgICB0aGlzLmFkZFByb2plY3RNb2RhbFN1Ym1pdEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBhZGRDaGVja2JveEV2ZW50KGNoZWNrYm94KSB7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xyXG5cclxuICAgICAgY29uc3QgaW5kZXggPSBVSS5nZXRUb2RvSW5kZXgoY2hlY2tib3gpO1xyXG4gICAgICB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zW2luZGV4XS5jb21wbGV0ZWQgPSAhdGhpcy5jdXJyUHJvamVjdC50b2Rvc1tpbmRleF0uY29tcGxldGVkO1xyXG4gICAgICBzdG9yYWdlLndyaXRlUHJvamVjdHModGhpcy5wcm9qZWN0cyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG9CdXR0b25FdmVudCgpIHtcclxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tYnV0dG9uJyk7XHJcbiAgICBuZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJykucmVzZXQoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXh0JykuaW5uZXJUZXh0ID0gJ05ldyBUb2RvJztcclxuICAgICAgdGhpcy5jdXJyVG9kb0lEID0gdGhpcy5jdXJyUHJvamVjdC50b2Rvcy5sZW5ndGg7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby5tb2RhbCcpLnNob3dNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0TW9kYWxTdWJtaXRFdmVudCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcclxuICAgICAgdGhpcy5hZGRQcm9qZWN0RWwocHJvamVjdCk7XHJcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgICAgc3RvcmFnZS53cml0ZVByb2plY3RzKHRoaXMucHJvamVjdHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvTW9kYWxTdWJtaXRFdmVudCgpIHtcclxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xyXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xyXG4gICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS52YWx1ZTtcclxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgICAgdGhpcy5hZGRUb2RvRWwodG9kbywgdGhpcy5jdXJyVG9kb0lEKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kb0VsKHRvZG8sIGkpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkLFxyXG4gICAgfSA9IHRvZG87XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRvZG8gRE9NIGVsZW1lbnRcclxuICAgIGNvbnN0IHRvZG9FbCA9IFVJLmNyZWF0ZUVsZW1lbnQoJ2xpJywgJycsICd0b2RvJyk7XHJcbiAgICB0b2RvRWwuY2xhc3NOYW1lICs9IGAgJHtwcmlvcml0eX0tcHJpb3JpdHlgO1xyXG4gICAgY29uc3Qgc3VtbWFyeUVsID0gVUkuY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICdzdW1tYXJ5Jyk7XHJcbiAgICBjb25zdCBjaGVja2JveEVsID0gVUkuY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICdjaGVja2JveCcpO1xyXG4gICAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgICBjaGVja2JveEVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpdGxlRWwgPSBVSS5jcmVhdGVFbGVtZW50KCdzcGFuJywgdGl0bGUsICd0aXRsZScpO1xyXG4gICAgY29uc3QgZHVlRGF0ZUVsID0gVUkuY3JlYXRlRWxlbWVudCgnc3BhbicsIGR1ZURhdGUsICdkdWUtZGF0ZScpO1xyXG4gICAgY29uc3QgZWRpdEVsID0gVUkuY3JlYXRlRWxlbWVudCgnaW1nJywgJycsICdlZGl0Jyk7XHJcbiAgICBlZGl0RWwuc3JjID0gJy4uLy4uL2Rpc3QvaW1hZ2VzL2VkaXQtYm94LWxpbmUuc3ZnJztcclxuICAgIGNvbnN0IGRlbGV0ZUVsID0gVUkuY3JlYXRlRWxlbWVudCgnaW1nJywgJycsICdkZWxldGUnKTtcclxuICAgIGRlbGV0ZUVsLnNyYyA9ICcuLi8uLi9kaXN0L2ltYWdlcy9kZWxldGUtYmluLWxpbmUuc3ZnJztcclxuICAgIHN1bW1hcnlFbC5hcHBlbmQoY2hlY2tib3hFbCwgdGl0bGVFbCwgZHVlRGF0ZUVsLCBlZGl0RWwsIGRlbGV0ZUVsKTtcclxuICAgIHRvZG9FbC5hcHBlbmRDaGlsZChzdW1tYXJ5RWwpO1xyXG4gICAgY29uc3QgZGV0YWlsc0VsID0gVUkuY3JlYXRlRWxlbWVudCgncCcsIGRlc2NyaXB0aW9uLCAnZGV0YWlscyBoaWRkZW4nKTtcclxuXHJcbiAgICBjb25zdCB0b2Rvc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XHJcbiAgICBjb25zdCB0b2RvRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJykuY2hpbGRyZW47XHJcblxyXG4gICAgaWYgKGkgPT09IHRvZG9FbHMubGVuZ3RoKSB7XHJcbiAgICAgIHRvZG9zRWwuYXBwZW5kKHRvZG9FbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2Rvc0VsLnJlcGxhY2VDaGlsZCh0b2RvRWwsIHRvZG9FbHNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VyclByb2plY3QudG9kb3NbaV0gPSB0b2RvO1xyXG4gICAgc3RvcmFnZS53cml0ZVByb2plY3RzKHRoaXMucHJvamVjdHMpO1xyXG5cclxuICAgIHRvZG9FbC5hcHBlbmRDaGlsZChkZXRhaWxzRWwpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2hlY2tib3hFdmVudChjaGVja2JveEVsKTtcclxuICAgIHRoaXMuYWRkRWRpdEV2ZW50KGVkaXRFbCk7XHJcbiAgICB0aGlzLmFkZFRvZG9EZWxldGVFdmVudChkZWxldGVFbCk7XHJcbiAgICBVSS5hZGRUb2RvRXZlbnQodG9kb0VsKTtcclxuICB9XHJcblxyXG4gIGFkZEVkaXRFdmVudChlZGl0RWwpIHtcclxuICAgIGVkaXRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jdXJyVG9kb0lEID0gVUkuZ2V0VG9kb0luZGV4KGVkaXRFbCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWhlYWRlcicpLmlubmVySFRNTCA9ICdFZGl0IFRvZG8nO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZSA9IHRoaXMuY3VyclByb2plY3QudG9kb3NbdGhpcy5jdXJyVG9kb0lEXS50aXRsZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWUgPSB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zW3RoaXMuY3VyclRvZG9JRF0uZGVzY3JpcHRpb247XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlID0gdGhpcy5jdXJyUHJvamVjdC50b2Rvc1t0aGlzLmN1cnJUb2RvSURdLmR1ZURhdGU7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuY3VyclByb2plY3QudG9kb3NbdGhpcy5jdXJyVG9kb0lEXS5wcmlvcml0eX1gKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLm1vZGFsJykuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3REZWxldGVFdmVudChkZWxldGVFbCkge1xyXG4gICAgZGVsZXRlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuY2hpbGRyZW4sIGRlbGV0ZUVsLnBhcmVudE5vZGUpO1xyXG4gICAgICBkZWxldGVFbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHN0b3JhZ2Uud3JpdGVQcm9qZWN0cyh0aGlzLnByb2plY3RzKTtcclxuICAgICAgdGhpcy5wb3B1bGF0ZVRvZG9zSFRNTCh0aGlzLnByb2plY3RzW2luZGV4IC0gMV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvRGVsZXRlRXZlbnQoZGVsZXRlRWwpIHtcclxuICAgIGRlbGV0ZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IFVJLmdldFRvZG9JbmRleChkZWxldGVFbCk7XHJcbiAgICAgIHRoaXMuY3VyclByb2plY3QudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgZGVsZXRlRWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICBzdG9yYWdlLndyaXRlUHJvamVjdHModGhpcy5wcm9qZWN0cyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcclxuXHJcbmNvbnN0IHVpID0gbmV3IFVJKCk7XHJcbnVpLnNldHVwUGFnZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=