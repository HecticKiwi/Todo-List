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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: \"Open Sans\", sans-serif;\n  --primary: hsl(32, 100%, 57%);\n  --secondary: hsl(0, 0%, 93%);\n  --transition-time: 400ms;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2 {\n  margin: 0;\n  color: rgb(34, 34, 34);\n}\n\nul {\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n.header,\n.projects li,\n.summary {\n  display: flex;\n  align-items: center;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 15rem 1fr;\n  grid-template-rows: min-content 1fr;\n  gap: 1px;\n  background-color: black;\n}\n\n.header {\n  grid-column: 1/span 2;\n  background-color: var(--primary);\n  padding: 1rem;\n  gap: 1rem;\n}\n.header .logo-img {\n  width: 3rem;\n}\n\n.sidebar {\n  background-color: var(--secondary);\n  padding: 2rem;\n}\n.sidebar .projects li {\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  cursor: pointer;\n}\n.sidebar .projects li:hover,\n.sidebar .selected {\n  font-weight: bold;\n}\n.sidebar .todo-count {\n  border: 1px solid var(--primary);\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n}\n.sidebar .todo-count,\n.sidebar .add-project img {\n  width: 1.75rem;\n  height: 1.75rem;\n  margin-right: 1rem;\n}\n\n.main {\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  background-color: white;\n  min-width: 0;\n}\n\n.container {\n  width: min(100%, 40rem);\n}\n\n.todo {\n  border-left: 2px solid transparent;\n  padding: 0.5rem;\n  height: 2.5rem;\n  overflow: hidden;\n}\n.todo.high-priority {\n  border-color: red;\n}\n.todo.medium-priority {\n  border-color: orange;\n}\n.todo.low-priority {\n  border-color: green;\n}\n.todo:hover {\n  background-color: var(--secondary);\n}\n.todo:hover .delete,\n.todo:hover .edit {\n  display: inline-block;\n}\n\n.summary {\n  gap: 0.5rem;\n  line-height: normal;\n  min-height: 1.5rem;\n}\n\n.todo:not(.expanded) .title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.edit,\n.delete {\n  display: none;\n}\n\n.todo + .todo,\n.add {\n  border-top: 1px solid rgb(146, 146, 146);\n}\n\n.checkbox {\n  width: 1rem;\n  height: 1rem;\n  flex: 0 0 auto;\n  border: 1px solid rgb(87, 87, 87);\n  border-radius: 2px;\n  cursor: pointer;\n}\n.checkbox.checked {\n  background-color: rgb(70, 70, 70);\n}\n\n.checked ~ *:not(.edit):not(.delete) {\n  opacity: 0.4;\n}\n\n.due-date {\n  margin-left: auto;\n  font-size: 0.85rem;\n  color: rgb(66, 66, 66);\n}\n\n.edit,\n.delete {\n  cursor: pointer;\n}\n\n.details {\n  margin-left: calc(1.5rem + 2px);\n  font-size: 0.9rem;\n}\n\n.expanded {\n  height: fit-content;\n}\n\n.add {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n.add:hover {\n  opacity: 1;\n}\n\ndialog {\n  border: 1px solid black;\n  padding: 0;\n  width: min(100%, 40rem);\n}\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.507);\n}\ndialog .container {\n  padding: 1rem;\n}\ndialog .form-header {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\ndialog #title,\ndialog #description,\ndialog #due-date,\ndialog .priority-buttons label {\n  outline: 1px solid lightgray;\n  padding: 0.5rem;\n}\ndialog input[type=text],\ndialog textarea {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  box-shadow: none;\n  resize: none;\n}\ndialog #description {\n  font-size: 0.9rem;\n  color: gray;\n}\ndialog #description::placeholder {\n  color: lightgray;\n}\ndialog .form-bottom {\n  margin-block: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\ndialog label[for=due-date],\ndialog legend {\n  font-size: 0.9rem;\n}\ndialog #due-date {\n  border: none;\n}\ndialog .priority-buttons {\n  display: flex;\n  border: none;\n  padding: 0.4rem 0 0 0;\n  margin: 0;\n}\ndialog .priority-buttons label {\n  cursor: pointer;\n  text-transform: uppercase;\n}\ndialog #low + label:hover,\ndialog #low:checked + label {\n  background-color: rgba(0, 128, 0, 0.5);\n}\ndialog #medium + label:hover,\ndialog #medium:checked + label {\n  background-color: rgba(255, 166, 0, 0.5);\n}\ndialog #high + label:hover,\ndialog #high:checked + label {\n  background-color: rgba(255, 0, 0, 0.5);\n}\ndialog #add {\n  outline: 1px solid black;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 0.4rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,oCAAA;EACA,6BAAA;EACA,4BAAA;EACA,wBAAA;AAAJ;;AAGA;EACI,sBAAA;AAAJ;;AAGA;;EAEI,SAAA;EACA,sBAAA;AAAJ;;AAGA;EACI,UAAA;AAAJ;;AAGA;EACI,gBAAA;AAAJ;;AAGA;;;EAGI,aAAA;EACA,mBAAA;AAAJ;;AAGA;EACI,iBAAA;EACA,aAAA;EACA,gCAAA;EACA,mCAAA;EACA,QAAA;EACA,uBAAA;AAAJ;;AAGA;EACI,qBAAA;EACA,gCAAA;EACA,aAAA;EACA,SAAA;AAAJ;AAEI;EACI,WAAA;AAAR;;AAIA;EACI,kCAAA;EACA,aAAA;AADJ;AAGI;EACI,iBAAA;EACA,iBAAA;EACA,eAAA;AADR;AAII;;EAEI,iBAAA;AAFR;AAKI;EACI,gCAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;AAHR;AAMI;;EAEI,cAAA;EACA,eAAA;EACA,kBAAA;AAJR;;AAQA;EACI,aAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,YAAA;AALJ;;AAQA;EACI,uBAAA;AALJ;;AAQA;EACI,kCAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;AALJ;AAOI;EACI,iBAAA;AALR;AAQI;EACI,oBAAA;AANR;AASI;EACI,mBAAA;AAPR;AAUI;EACI,kCAAA;AARR;AAUQ;;EAEI,qBAAA;AARZ;;AAaA;EACI,WAAA;EACA,mBAAA;EACA,kBAAA;AAVJ;;AAaA;EACI,mBAAA;EACA,gBAAA;EACA,uBAAA;AAVJ;;AAaA;;EAEI,aAAA;AAVJ;;AAaA;;EAEI,wCAAA;AAVJ;;AAaA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iCAAA;EACA,kBAAA;EACA,eAAA;AAVJ;AAYI;EACI,iCAAA;AAVR;;AAcA;EACI,YAAA;AAXJ;;AAcA;EACI,iBAAA;EACA,kBAAA;EACA,sBAAA;AAXJ;;AAcA;;EAEI,eAAA;AAXJ;;AAcA;EACI,+BAAA;EACA,iBAAA;AAXJ;;AAcA;EACI,mBAAA;AAXJ;;AAcA;EACI,YAAA;EACA,eAAA;AAXJ;;AAcA;EACI,UAAA;AAXJ;;AAcA;EACI,uBAAA;EACA,UAAA;EACA,uBAAA;AAXJ;AAaI;EACI,sCAAA;AAXR;AAcI;EACI,aAAA;AAZR;AAeI;EACI,iBAAA;EACA,iBAAA;EACA,mBAAA;AAbR;AAgBI;;;;EAII,4BAAA;EACA,eAAA;AAdR;AAiBI;;EAEI,WAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;AAfR;AAkBI;EACI,iBAAA;EACA,WAAA;AAhBR;AAmBI;EACI,gBAAA;AAjBR;AAoBI;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;AAlBR;AAqBI;;EAEI,iBAAA;AAnBR;AAsBI;EACI,YAAA;AApBR;AAuBI;EACI,aAAA;EACA,YAAA;EACA,qBAAA;EACA,SAAA;AArBR;AAwBI;EACI,eAAA;EACA,yBAAA;AAtBR;AAyBI;;EAEI,sCAAA;AAvBR;AA0BI;;EAEI,wCAAA;AAxBR;AA2BI;;EAEI,sCAAA;AAzBR;AA4BI;EACI,wBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AA1BR;;AA8BA;EACI,cAAA;EACA,qBAAA;AA3BJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n\r\n:root {\r\n    font-family: 'Open Sans', sans-serif;\r\n    --primary: hsl(32, 100%, 57%);\r\n    --secondary: hsl(0, 0%, 93%);\r\n    --transition-time: 400ms;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2 {\r\n    margin: 0;\r\n    color: rgb(34, 34, 34);\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\n.header,\r\n.projects li,\r\n.summary {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 15rem 1fr;\r\n    grid-template-rows: min-content 1fr;\r\n    gap: 1px;\r\n    background-color: black;\r\n}\r\n\r\n.header {\r\n    grid-column: 1 / span 2;\r\n    background-color: var(--primary);\r\n    padding: 1rem;\r\n    gap: 1rem;\r\n\r\n    .logo-img {\r\n        width: 3rem;\r\n    }\r\n}\r\n\r\n.sidebar {\r\n    background-color: var(--secondary);\r\n    padding: 2rem;\r\n\r\n    .projects li {\r\n        font-size: 1.1rem;\r\n        padding: 0.5rem 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .projects li:hover,\r\n    .selected {\r\n        font-weight: bold;\r\n    }\r\n\r\n    .todo-count {\r\n        border: 1px solid var(--primary);\r\n        border-radius: 50%;\r\n        display: grid;\r\n        place-content: center;\r\n    }\r\n\r\n    .todo-count,\r\n    .add-project img {\r\n        width: 1.75rem;\r\n        height: 1.75rem;\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n.main {\r\n    padding: 2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: white;\r\n    min-width: 0;\r\n}\r\n\r\n.container {\r\n    width: min(100%, 40rem);\r\n}\r\n\r\n.todo {\r\n    border-left: 2px solid transparent;\r\n    padding: 0.5rem;\r\n    height: 2.5rem;\r\n    overflow: hidden;\r\n\r\n    &.high-priority {\r\n        border-color: red;\r\n    }\r\n\r\n    &.medium-priority {\r\n        border-color: orange;\r\n    }\r\n\r\n    &.low-priority {\r\n        border-color: green;\r\n    }\r\n\r\n    &:hover {\r\n        background-color: var(--secondary);\r\n\r\n        .delete,\r\n        .edit {\r\n            display: inline-block;\r\n        }\r\n    }\r\n}\r\n\r\n.summary {\r\n    gap: 0.5rem;\r\n    line-height: normal;\r\n    min-height: 1.5rem;\r\n}\r\n\r\n.todo:not(.expanded) .title {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    display: none;\r\n}\r\n\r\n.todo+.todo,\r\n.add {\r\n    border-top: 1px solid rgb(146, 146, 146);\r\n}\r\n\r\n.checkbox {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    flex: 0 0 auto;\r\n    border: 1px solid rgb(87, 87, 87);\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n\r\n    &.checked {\r\n        background-color: rgb(70, 70, 70);\r\n    }\r\n}\r\n\r\n.checked~*:not(.edit):not(.delete) {\r\n    opacity: 0.4;\r\n}\r\n\r\n.due-date {\r\n    margin-left: auto;\r\n    font-size: 0.85rem;\r\n    color: rgb(66, 66, 66);\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    cursor: pointer;\r\n}\r\n\r\n.details {\r\n    margin-left: calc(1.5rem + 2px);\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.expanded {\r\n    height: fit-content;\r\n}\r\n\r\n.add {\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n}\r\n\r\n.add:hover {\r\n    opacity: 1;\r\n}\r\n\r\ndialog {\r\n    border: 1px solid black;\r\n    padding: 0;\r\n    width: min(100%, 40rem);\r\n\r\n    &::backdrop {\r\n        background-color: rgba(0, 0, 0, 0.507);\r\n    }\r\n\r\n    .container {\r\n        padding: 1rem;\r\n    }\r\n\r\n    .form-header {\r\n        font-size: 1.5rem;\r\n        font-weight: bold;\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    #title,\r\n    #description,\r\n    #due-date,\r\n    .priority-buttons label {\r\n        outline: 1px solid lightgray;\r\n        padding: 0.5rem;\r\n    }\r\n\r\n    input[type=\"text\"],\r\n    textarea {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        box-shadow: none;\r\n        resize: none;\r\n    }\r\n\r\n    #description {\r\n        font-size: 0.9rem;\r\n        color: gray;\r\n    }\r\n\r\n    #description::placeholder {\r\n        color: lightgray;\r\n    }\r\n\r\n    .form-bottom {\r\n        margin-block: 1rem;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 1rem;\r\n    }\r\n\r\n    label[for=\"due-date\"],\r\n    legend {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    #due-date {\r\n        border: none;\r\n    }\r\n\r\n    .priority-buttons {\r\n        display: flex;\r\n        border: none;\r\n        padding: 0.4rem 0 0 0;\r\n        margin: 0;\r\n    }\r\n\r\n    .priority-buttons label {\r\n        cursor: pointer;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    #low+label:hover,\r\n    #low:checked+label {\r\n        background-color: rgba(0, 128, 0, 0.5);\r\n    }\r\n\r\n    #medium+label:hover,\r\n    #medium:checked+label {\r\n        background-color: rgba(255, 166, 0, 0.5);\r\n    }\r\n\r\n    #high+label:hover,\r\n    #high:checked+label {\r\n        background-color: rgba(255, 0, 0, 0.5);\r\n    }\r\n\r\n    #add {\r\n        outline: 1px solid black;\r\n        border: none;\r\n        padding: 0.5rem;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 0.4rem;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addEventListeners)
/* harmony export */ });
function addEventListeners() {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => checkbox.classList.toggle('checked'));
  });

  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => {
    todo.addEventListener('click', () => {
      todo.classList.toggle('expanded');
    });
  });

  const newTodo = document.querySelector('.add');
  newTodo.addEventListener('click', () => {
    document.querySelector('.new-todo').showModal();
  });

  const dialog = document.querySelector('.new-todo');
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
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



(0,_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssU0FBUyxXQUFXLFVBQVUsS0FBSyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyx5R0FBeUcsZUFBZSw2Q0FBNkMsc0NBQXNDLHFDQUFxQyxpQ0FBaUMsS0FBSyxXQUFXLCtCQUErQixLQUFLLG1CQUFtQixrQkFB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QTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDdUI7QUFDN0M7QUFDQSx1REFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1wcmltYXJ5OiBoc2woMzIsIDEwMCUsIDU3JSk7XFxuICAtLXNlY29uZGFyeTogaHNsKDAsIDAlLCA5MyUpO1xcbiAgLS10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIsXFxuLnByb2plY3RzIGxpLFxcbi5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICBnYXA6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuLmhlYWRlciAubG9nby1pbWcge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG4uc2lkZWJhciAucHJvamVjdHMgbGkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNpZGViYXIgLnByb2plY3RzIGxpOmhvdmVyLFxcbi5zaWRlYmFyIC5zZWxlY3RlZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnNpZGViYXIgLnRvZG8tY291bnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG4uc2lkZWJhciAudG9kby1jb3VudCxcXG4uc2lkZWJhciAuYWRkLXByb2plY3QgaW1nIHtcXG4gIHdpZHRoOiAxLjc1cmVtO1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxufVxcblxcbi50b2RvIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi50b2RvLmhpZ2gtcHJpb3JpdHkge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcbi50b2RvLm1lZGl1bS1wcmlvcml0eSB7XFxuICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG59XFxuLnRvZG8ubG93LXByaW9yaXR5IHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxufVxcbi50b2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcbi50b2RvOmhvdmVyIC5kZWxldGUsXFxuLnRvZG86aG92ZXIgLmVkaXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc3VtbWFyeSB7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBtaW4taGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi50b2RvOm5vdCguZXhwYW5kZWQpIC50aXRsZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uZWRpdCxcXG4uZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvICsgLnRvZG8sXFxuLmFkZCB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE0NiwgMTQ2LCAxNDYpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NywgODcsIDg3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoZWNrYm94LmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbn1cXG5cXG4uY2hlY2tlZCB+ICo6bm90KC5lZGl0KTpub3QoLmRlbGV0ZSkge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IDAuODVyZW07XFxuICBjb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xcbn1cXG5cXG4uZWRpdCxcXG4uZGVsZXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMS41cmVtICsgMnB4KTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmFkZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQ6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgNDByZW0pO1xcbn1cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MDcpO1xcbn1cXG5kaWFsb2cgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5kaWFsb2cgLmZvcm0taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5kaWFsb2cgI3RpdGxlLFxcbmRpYWxvZyAjZGVzY3JpcHRpb24sXFxuZGlhbG9nICNkdWUtZGF0ZSxcXG5kaWFsb2cgLnByaW9yaXR5LWJ1dHRvbnMgbGFiZWwge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuZGlhbG9nIGlucHV0W3R5cGU9dGV4dF0sXFxuZGlhbG9nIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuZGlhbG9nICNkZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5kaWFsb2cgI2Rlc2NyaXB0aW9uOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5kaWFsb2cgLmZvcm0tYm90dG9tIHtcXG4gIG1hcmdpbi1ibG9jazogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFyZW07XFxufVxcbmRpYWxvZyBsYWJlbFtmb3I9ZHVlLWRhdGVdLFxcbmRpYWxvZyBsZWdlbmQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbmRpYWxvZyAjZHVlLWRhdGUge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5kaWFsb2cgLnByaW9yaXR5LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwIDAgMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuZGlhbG9nIC5wcmlvcml0eS1idXR0b25zIGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbmRpYWxvZyAjbG93ICsgbGFiZWw6aG92ZXIsXFxuZGlhbG9nICNsb3c6Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xcbn1cXG5kaWFsb2cgI21lZGl1bSArIGxhYmVsOmhvdmVyLFxcbmRpYWxvZyAjbWVkaXVtOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjUpO1xcbn1cXG5kaWFsb2cgI2hpZ2ggKyBsYWJlbDpob3ZlcixcXG5kaWFsb2cgI2hpZ2g6Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbn1cXG5kaWFsb2cgI2FkZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBOztFQUVJLFNBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTs7O0VBR0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFBSjtBQUVJO0VBQ0ksV0FBQTtBQUFSOztBQUlBO0VBQ0ksa0NBQUE7RUFDQSxhQUFBO0FBREo7QUFHSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRFI7QUFJSTs7RUFFSSxpQkFBQTtBQUZSO0FBS0k7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBSFI7QUFNSTs7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSlI7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFDSSx1QkFBQTtBQUxKOztBQVFBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUNJLGlCQUFBO0FBTFI7QUFRSTtFQUNJLG9CQUFBO0FBTlI7QUFTSTtFQUNJLG1CQUFBO0FBUFI7QUFVSTtFQUNJLGtDQUFBO0FBUlI7QUFVUTs7RUFFSSxxQkFBQTtBQVJaOztBQWFBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFWSjs7QUFhQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVZKOztBQWFBOztFQUVJLGFBQUE7QUFWSjs7QUFhQTs7RUFFSSx3Q0FBQTtBQVZKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFWSjtBQVlJO0VBQ0ksaUNBQUE7QUFWUjs7QUFjQTtFQUNJLFlBQUE7QUFYSjs7QUFjQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVhKOztBQWNBOztFQUVJLGVBQUE7QUFYSjs7QUFjQTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7QUFYSjs7QUFjQTtFQUNJLG1CQUFBO0FBWEo7O0FBY0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQVhKOztBQWNBO0VBQ0ksVUFBQTtBQVhKOztBQWNBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFYSjtBQWFJO0VBQ0ksc0NBQUE7QUFYUjtBQWNJO0VBQ0ksYUFBQTtBQVpSO0FBZUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQWdCSTs7OztFQUlJLDRCQUFBO0VBQ0EsZUFBQTtBQWRSO0FBaUJJOztFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWZSO0FBa0JJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBaEJSO0FBbUJJO0VBQ0ksZ0JBQUE7QUFqQlI7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQWxCUjtBQXFCSTs7RUFFSSxpQkFBQTtBQW5CUjtBQXNCSTtFQUNJLFlBQUE7QUFwQlI7QUF1Qkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQXJCUjtBQXdCSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQXRCUjtBQXlCSTs7RUFFSSxzQ0FBQTtBQXZCUjtBQTBCSTs7RUFFSSx3Q0FBQTtBQXhCUjtBQTJCSTs7RUFFSSxzQ0FBQTtBQXpCUjtBQTRCSTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBMUJSOztBQThCQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQTNCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tcHJpbWFyeTogaHNsKDMyLCAxMDAlLCA1NyUpO1xcclxcbiAgICAtLXNlY29uZGFyeTogaHNsKDAsIDAlLCA5MyUpO1xcclxcbiAgICAtLXRyYW5zaXRpb24tdGltZTogNDAwbXM7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIsXFxyXFxuLnByb2plY3RzIGxpLFxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cmVtIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxyXFxuICAgIGdhcDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgICAubG9nby1pbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcblxcclxcbiAgICAucHJvamVjdHMgbGkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdHMgbGk6aG92ZXIsXFxyXFxuICAgIC5zZWxlY3RlZCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9kby1jb3VudCB7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG8tY291bnQsXFxyXFxuICAgIC5hZGQtcHJvamVjdCBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEuNzVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1pbi13aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgNDByZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICYuaGlnaC1wcmlvcml0eSB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLm1lZGl1bS1wcmlvcml0eSB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLmxvdy1wcmlvcml0eSB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG5cXHJcXG4gICAgICAgIC5kZWxldGUsXFxyXFxuICAgICAgICAuZWRpdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG86bm90KC5leHBhbmRlZCkgLnRpdGxlIHtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LFxcclxcbi5kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbysudG9kbyxcXHJcXG4uYWRkIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNDYsIDE0NiwgMTQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NywgODcsIDg3KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICYuY2hlY2tlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrZWR+Kjpub3QoLmVkaXQpOm5vdCguZGVsZXRlKSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYig2NiwgNjYsIDY2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQsXFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxLjVyZW0gKyAycHgpO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZGVkIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgNDByZW0pO1xcclxcblxcclxcbiAgICAmOjpiYWNrZHJvcCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTA3KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0taGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0aXRsZSxcXHJcXG4gICAgI2Rlc2NyaXB0aW9uLFxcclxcbiAgICAjZHVlLWRhdGUsXFxyXFxuICAgIC5wcmlvcml0eS1idXR0b25zIGxhYmVsIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbiAgICB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICAgICAgY29sb3I6IGdyYXk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2Rlc2NyaXB0aW9uOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtLWJvdHRvbSB7XFxyXFxuICAgICAgICBtYXJnaW4tYmxvY2s6IDFyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGxhYmVsW2Zvcj1cXFwiZHVlLWRhdGVcXFwiXSxcXHJcXG4gICAgbGVnZW5kIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNkdWUtZGF0ZSB7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW9yaXR5LWJ1dHRvbnMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwIDAgMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpb3JpdHktYnV0dG9ucyBsYWJlbCB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNsb3crbGFiZWw6aG92ZXIsXFxyXFxuICAgICNsb3c6Y2hlY2tlZCtsYWJlbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVkaXVtK2xhYmVsOmhvdmVyLFxcclxcbiAgICAjbWVkaXVtOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaGlnaCtsYWJlbDpob3ZlcixcXHJcXG4gICAgI2hpZ2g6Y2hlY2tlZCtsYWJlbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjYWRkIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoZWNrYm94LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8nKTtcclxuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKTtcclxuICBuZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvJykuc2hvd01vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kbycpO1xyXG4gIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IGRpYWxvZykge1xyXG4gICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBhZGRFdmVudExpc3RlbmVycyBmcm9tICcuL21vZHVsZXMvVUknO1xyXG5cclxuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9