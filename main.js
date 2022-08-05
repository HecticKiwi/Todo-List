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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: \"Open Sans\", sans-serif;\n  --primary: hsl(209, 91%, 68%);\n  --secondary: hsl(0, 0%, 95%);\n  --border: rgb(194, 194, 194);\n  --transition-time: 400ms;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2 {\n  color: rgb(36, 36, 36);\n}\n\nh1 {\n  margin: 0;\n}\n\nh2 {\n  margin-top: 0;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\n.header,\n.projects li,\n.new-project,\n.todo .summary {\n  display: flex;\n  align-items: center;\n}\n\nbody {\n  line-height: normal;\n  min-height: 100vh;\n  display: grid;\n  grid-template: min-content 1fr/15rem 1fr;\n  gap: 1px;\n  background-color: rgb(194, 194, 194);\n}\n\n.header {\n  grid-column: 1/span 2;\n  background-color: var(--primary);\n  padding: 1rem;\n}\n.header .logo-img {\n  width: 3rem;\n  margin-right: 1rem;\n}\n\n.sidebar {\n  background-color: var(--secondary);\n  padding: 2rem;\n}\n.sidebar .projects-header {\n  font-size: 1.2rem;\n}\n.sidebar .projects li,\n.sidebar .new-project {\n  font-size: 1.1rem;\n  padding: 0.5rem 0;\n  cursor: pointer;\n}\n.sidebar .projects li:hover {\n  font-weight: bold;\n}\n.sidebar .delete {\n  margin-left: auto;\n}\n.sidebar .projects li:hover .delete {\n  display: inline-block;\n}\n.sidebar .todo-count {\n  border: 1px solid var(--primary);\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n  flex: 0 0 auto;\n}\n.sidebar .todo-count,\n.sidebar .new-project img {\n  width: 1.75rem;\n  height: 1.75rem;\n  margin-right: 1rem;\n}\n.sidebar .new-project {\n  opacity: 0.5;\n}\n.sidebar .new-project:hover {\n  opacity: 1;\n}\n\n.main {\n  padding: 2rem;\n  background-color: white;\n  min-width: 0;\n}\n\n.container {\n  width: min(100%, 40rem);\n  margin: 0 auto;\n}\n\n.todos-header {\n  font-size: 1.75rem;\n}\n\n.todo {\n  border-left: 1px solid transparent;\n  padding: 0.5rem;\n}\n.todo.high-priority {\n  border-color: red;\n}\n.todo.medium-priority {\n  border-color: orange;\n}\n.todo.low-priority {\n  border-color: green;\n}\n.todo:hover {\n  background-color: var(--secondary);\n}\n.todo:hover .delete,\n.todo:hover .edit {\n  display: inline-block;\n}\n\n.summary {\n  gap: 0.5rem;\n  min-height: 1.5rem;\n}\n\n.name,\n.todo .title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.edit,\n.delete {\n  display: none;\n}\n\n.todo + .todo {\n  border-top: 1px solid var(--border);\n}\n\n.checkbox {\n  flex: 0 0 1rem;\n  height: 1rem;\n  border: 1px solid rgb(87, 87, 87);\n  border-radius: 2px;\n  cursor: pointer;\n}\n.checkbox.checked {\n  background-color: rgb(70, 70, 70);\n}\n\n.checked ~ *:not(.edit):not(.delete) {\n  opacity: 0.4;\n}\n\n.due-date {\n  margin-left: auto;\n  font-size: 0.85rem;\n  color: rgb(66, 66, 66);\n}\n\n.edit,\n.delete {\n  cursor: pointer;\n}\n\n.details {\n  margin-left: calc(1.5rem + 2px);\n  font-size: 0.9rem;\n  color: gray;\n}\n\n.hidden {\n  display: none;\n}\n\n.new-todo-button {\n  opacity: 0.5;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.new-todo-button:hover {\n  opacity: 1;\n}\n\ndialog {\n  border: 1px solid var(--border);\n  padding: 0;\n  width: min(100%, 40rem);\n}\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\ndialog .container {\n  padding: 1rem;\n}\ndialog #name,\ndialog #title,\ndialog #description,\ndialog #due-date,\ndialog .priority-buttons label {\n  outline: 1px solid lightgray;\n  padding: 0.5rem;\n  border: none;\n  line-height: normal;\n}\ndialog button {\n  outline: 1px solid black;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.new-todo.modal #title,\n.new-todo.modal #description {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  box-shadow: none;\n  resize: none;\n}\n.new-todo.modal #description {\n  font-size: 0.9rem;\n  color: gray;\n}\n.new-todo.modal #description::placeholder {\n  color: lightgray;\n}\n.new-todo.modal .form-bottom {\n  margin-block: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.new-todo.modal label[for=due-date],\n.new-todo.modal legend {\n  font-size: 0.9rem;\n}\n.new-todo.modal .priority-buttons {\n  display: flex;\n  border: none;\n  padding: 0.4rem 0 0 0;\n  margin: 0;\n}\n.new-todo.modal input[type=radio] {\n  position: fixed;\n  opacity: 0;\n  pointer-events: none;\n}\n.new-todo.modal .priority-buttons label {\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.new-todo.modal #low + label:hover,\n.new-todo.modal #low:checked + label {\n  background-color: rgba(0, 128, 0, 0.5);\n}\n.new-todo.modal #medium + label:hover,\n.new-todo.modal #medium:checked + label {\n  background-color: rgba(255, 166, 0, 0.5);\n}\n.new-todo.modal #high + label:hover,\n.new-todo.modal #high:checked + label {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\nlabel {\n  display: block;\n  margin-bottom: 0.4rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,oCAAA;EACA,6BAAA;EACA,4BAAA;EACA,4BAAA;EACA,wBAAA;AAAJ;;AAGA;EACI,sBAAA;AAAJ;;AAGA;;EAEI,sBAAA;AAAJ;;AAGA;EACI,SAAA;AAAJ;;AAGA;EACI,aAAA;AAAJ;;AAGA;EACI,UAAA;EACA,gBAAA;AAAJ;;AAGA;;;;EAII,aAAA;EACA,mBAAA;AAAJ;;AAGA;EACI,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,wCAAA;EACA,QAAA;EACA,oCAAA;AAAJ;;AAGA;EACI,qBAAA;EACA,gCAAA;EACA,aAAA;AAAJ;AAEI;EACI,WAAA;EACA,kBAAA;AAAR;;AAIA;EACI,kCAAA;EACA,aAAA;AADJ;AAGI;EACI,iBAAA;AADR;AAII;;EAEI,iBAAA;EACA,iBAAA;EACA,eAAA;AAFR;AAKI;EACI,iBAAA;AAHR;AAMI;EACI,iBAAA;AAJR;AAOI;EACI,qBAAA;AALR;AAQI;EACI,gCAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,cAAA;AANR;AASI;;EAEI,cAAA;EACA,eAAA;EACA,kBAAA;AAPR;AAUI;EACI,YAAA;AARR;AAWI;EACI,UAAA;AATR;;AAaA;EACI,aAAA;EACA,uBAAA;EACA,YAAA;AAVJ;;AAaA;EACI,uBAAA;EACA,cAAA;AAVJ;;AAaA;EACI,kBAAA;AAVJ;;AAaA;EACI,kCAAA;EACA,eAAA;AAVJ;AAYI;EACI,iBAAA;AAVR;AAaI;EACI,oBAAA;AAXR;AAcI;EACI,mBAAA;AAZR;AAeI;EACI,kCAAA;AAbR;AAeQ;;EAEI,qBAAA;AAbZ;;AAkBA;EACI,WAAA;EACA,kBAAA;AAfJ;;AAkBA;;EAEI,mBAAA;EACA,gBAAA;EACA,uBAAA;AAfJ;;AAkBA;;EAEI,aAAA;AAfJ;;AAkBA;EACI,mCAAA;AAfJ;;AAkBA;EACI,cAAA;EACA,YAAA;EACA,iCAAA;EACA,kBAAA;EACA,eAAA;AAfJ;AAiBI;EACI,iCAAA;AAfR;;AAmBA;EACI,YAAA;AAhBJ;;AAmBA;EACI,iBAAA;EACA,kBAAA;EACA,sBAAA;AAhBJ;;AAmBA;;EAEI,eAAA;AAhBJ;;AAmBA;EACI,+BAAA;EACA,iBAAA;EACA,WAAA;AAhBJ;;AAmBA;EACI,aAAA;AAhBJ;;AAmBA;EACI,YAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAhBJ;;AAmBA;EACI,UAAA;AAhBJ;;AAmBA;EACI,+BAAA;EACA,UAAA;EACA,uBAAA;AAhBJ;AAkBI;EACI,oCAAA;AAhBR;AAmBI;EACI,aAAA;AAjBR;AAoBI;;;;;EAKI,4BAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;AAlBR;AAqBI;EACI,wBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AAnBR;;AA2BI;;EAEI,WAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;AAxBR;AA2BI;EACI,iBAAA;EACA,WAAA;AAzBR;AA4BI;EACI,gBAAA;AA1BR;AA6BI;EACI,kBAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;AA3BR;AA8BI;;EAEI,iBAAA;AA5BR;AA+BI;EACI,aAAA;EACA,YAAA;EACA,qBAAA;EACA,SAAA;AA7BR;AAgCI;EACI,eAAA;EACA,UAAA;EACA,oBAAA;AA9BR;AAiCI;EACI,eAAA;EACA,yBAAA;AA/BR;AAkCI;;EAEI,sCAAA;AAhCR;AAmCI;;EAEI,wCAAA;AAjCR;AAoCI;;EAEI,sCAAA;AAlCR;;AAuCA;EACI,cAAA;EACA,qBAAA;AApCJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n\r\n:root {\r\n    font-family: 'Open Sans', sans-serif;\r\n    --primary: hsl(209, 91%, 68%);\r\n    --secondary: hsl(0, 0%, 95%);\r\n    --border: rgb(194, 194, 194);\r\n    --transition-time: 400ms;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nh1,\r\nh2 {\r\n    color: rgb(36, 36, 36);\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    margin-top: 0;\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.header,\r\n.projects li,\r\n.new-project,\r\n.todo .summary {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nbody {\r\n    line-height: normal;\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template: min-content 1fr / 15rem 1fr;\r\n    gap: 1px;\r\n    background-color: rgb(194, 194, 194);\r\n}\r\n\r\n.header {\r\n    grid-column: 1 / span 2;\r\n    background-color: var(--primary);\r\n    padding: 1rem;\r\n\r\n    .logo-img {\r\n        width: 3rem;\r\n        margin-right: 1rem;\r\n    }\r\n}\r\n\r\n.sidebar {\r\n    background-color: var(--secondary);\r\n    padding: 2rem;\r\n\r\n    .projects-header {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .projects li,\r\n    .new-project {\r\n        font-size: 1.1rem;\r\n        padding: 0.5rem 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .projects li:hover {\r\n        font-weight: bold;\r\n    }\r\n\r\n    .delete {\r\n        margin-left: auto;\r\n    }\r\n\r\n    .projects li:hover .delete {\r\n        display: inline-block;\r\n    }\r\n\r\n    .todo-count {\r\n        border: 1px solid var(--primary);\r\n        border-radius: 50%;\r\n        display: grid;\r\n        place-content: center;\r\n        flex: 0 0 auto;\r\n    }\r\n\r\n    .todo-count,\r\n    .new-project img {\r\n        width: 1.75rem;\r\n        height: 1.75rem;\r\n        margin-right: 1rem;\r\n    }\r\n\r\n    .new-project {\r\n        opacity: 0.5;\r\n    }\r\n\r\n    .new-project:hover {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.main {\r\n    padding: 2rem;\r\n    background-color: white;\r\n    min-width: 0;\r\n}\r\n\r\n.container {\r\n    width: min(100%, 40rem);\r\n    margin: 0 auto;\r\n}\r\n\r\n.todos-header {\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.todo {\r\n    border-left: 1px solid transparent;\r\n    padding: 0.5rem;\r\n\r\n    &.high-priority {\r\n        border-color: red;\r\n    }\r\n\r\n    &.medium-priority {\r\n        border-color: orange;\r\n    }\r\n\r\n    &.low-priority {\r\n        border-color: green;\r\n    }\r\n\r\n    &:hover {\r\n        background-color: var(--secondary);\r\n\r\n        .delete,\r\n        .edit {\r\n            display: inline-block;\r\n        }\r\n    }\r\n}\r\n\r\n.summary {\r\n    gap: 0.5rem;\r\n    min-height: 1.5rem;\r\n}\r\n\r\n.name,\r\n.todo .title {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    display: none;\r\n}\r\n\r\n.todo+.todo {\r\n    border-top: 1px solid var(--border);\r\n}\r\n\r\n.checkbox {\r\n    flex: 0 0 1rem;\r\n    height: 1rem;\r\n    border: 1px solid rgb(87, 87, 87);\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n\r\n    &.checked {\r\n        background-color: rgb(70, 70, 70);\r\n    }\r\n}\r\n\r\n.checked~*:not(.edit):not(.delete) {\r\n    opacity: 0.4;\r\n}\r\n\r\n.due-date {\r\n    margin-left: auto;\r\n    font-size: 0.85rem;\r\n    color: rgb(66, 66, 66);\r\n}\r\n\r\n.edit,\r\n.delete {\r\n    cursor: pointer;\r\n}\r\n\r\n.details {\r\n    margin-left: calc(1.5rem + 2px);\r\n    font-size: 0.9rem;\r\n    color: gray;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.new-todo-button {\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.new-todo-button:hover {\r\n    opacity: 1;\r\n}\r\n\r\ndialog {\r\n    border: 1px solid var(--border);\r\n    padding: 0;\r\n    width: min(100%, 40rem);\r\n\r\n    &::backdrop {\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n    }\r\n\r\n    .container {\r\n        padding: 1rem;\r\n    }\r\n\r\n    #name,\r\n    #title,\r\n    #description,\r\n    #due-date,\r\n    .priority-buttons label {\r\n        outline: 1px solid lightgray;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        line-height: normal;\r\n    }\r\n\r\n    button {\r\n        outline: 1px solid black;\r\n        border: none;\r\n        padding: 0.5rem;\r\n        cursor: pointer;\r\n    }\r\n\r\n}\r\n\r\n.new-todo.modal {\r\n\r\n\r\n    #title,\r\n    #description {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        box-shadow: none;\r\n        resize: none;\r\n    }\r\n\r\n    #description {\r\n        font-size: 0.9rem;\r\n        color: gray;\r\n    }\r\n\r\n    #description::placeholder {\r\n        color: lightgray;\r\n    }\r\n\r\n    .form-bottom {\r\n        margin-block: 1rem;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 1rem;\r\n    }\r\n\r\n    label[for=\"due-date\"],\r\n    legend {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    .priority-buttons {\r\n        display: flex;\r\n        border: none;\r\n        padding: 0.4rem 0 0 0;\r\n        margin: 0;\r\n    }\r\n\r\n    input[type=\"radio\"] {\r\n        position: fixed;\r\n        opacity: 0;\r\n        pointer-events: none;\r\n    }\r\n\r\n    .priority-buttons label {\r\n        cursor: pointer;\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    #low+label:hover,\r\n    #low:checked+label {\r\n        background-color: rgba(0, 128, 0, 0.5);\r\n    }\r\n\r\n    #medium+label:hover,\r\n    #medium:checked+label {\r\n        background-color: rgba(255, 166, 0, 0.5);\r\n    }\r\n\r\n    #high+label:hover,\r\n    #high:checked+label {\r\n        background-color: rgba(255, 0, 0, 0.5);\r\n    }\r\n\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 0.4rem;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFB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QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlEQUFpRDtBQUNsRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBcUI7QUFDM0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQXFCO0FBQzNCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDbk1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1E7QUFDOUI7QUFDQSxlQUFlLG1EQUFFO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1wcmltYXJ5OiBoc2woMjA5LCA5MSUsIDY4JSk7XFxuICAtLXNlY29uZGFyeTogaHNsKDAsIDAlLCA5NSUpO1xcbiAgLS1ib3JkZXI6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG4gIC0tdHJhbnNpdGlvbi10aW1lOiA0MDBtcztcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5wcm9qZWN0cyBsaSxcXG4ubmV3LXByb2plY3QsXFxuLnRvZG8gLnN1bW1hcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IG1pbi1jb250ZW50IDFmci8xNXJlbSAxZnI7XFxuICBnYXA6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5oZWFkZXIgLmxvZ28taW1nIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRlciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLnNpZGViYXIgLnByb2plY3RzIGxpLFxcbi5zaWRlYmFyIC5uZXctcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2lkZWJhciAucHJvamVjdHMgbGk6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5zaWRlYmFyIC5kZWxldGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5zaWRlYmFyIC5wcm9qZWN0cyBsaTpob3ZlciAuZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnNpZGViYXIgLnRvZG8tY291bnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5zaWRlYmFyIC50b2RvLWNvdW50LFxcbi5zaWRlYmFyIC5uZXctcHJvamVjdCBpbWcge1xcbiAgd2lkdGg6IDEuNzVyZW07XFxuICBoZWlnaHQ6IDEuNzVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5zaWRlYmFyIC5uZXctcHJvamVjdCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5zaWRlYmFyIC5uZXctcHJvamVjdDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnRvZG9zLWhlYWRlciB7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi50b2RvIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi50b2RvLmhpZ2gtcHJpb3JpdHkge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcbi50b2RvLm1lZGl1bS1wcmlvcml0eSB7XFxuICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG59XFxuLnRvZG8ubG93LXByaW9yaXR5IHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxufVxcbi50b2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcbi50b2RvOmhvdmVyIC5kZWxldGUsXFxuLnRvZG86aG92ZXIgLmVkaXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc3VtbWFyeSB7XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLm5hbWUsXFxuLnRvZG8gLnRpdGxlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5lZGl0LFxcbi5kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8gKyAudG9kbyB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGZsZXg6IDAgMCAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg3LCA4NywgODcpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2hlY2tib3guY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxufVxcblxcbi5jaGVja2VkIH4gKjpub3QoLmVkaXQpOm5vdCguZGVsZXRlKSB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGNvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XFxufVxcblxcbi5lZGl0LFxcbi5kZWxldGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBtYXJnaW4tbGVmdDogY2FsYygxLjVyZW0gKyAycHgpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctdG9kby1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0MHJlbSk7XFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5kaWFsb2cgLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5kaWFsb2cgI25hbWUsXFxuZGlhbG9nICN0aXRsZSxcXG5kaWFsb2cgI2Rlc2NyaXB0aW9uLFxcbmRpYWxvZyAjZHVlLWRhdGUsXFxuZGlhbG9nIC5wcmlvcml0eS1idXR0b25zIGxhYmVsIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5kaWFsb2cgYnV0dG9uIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy10b2RvLm1vZGFsICN0aXRsZSxcXG4ubmV3LXRvZG8ubW9kYWwgI2Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLm5ldy10b2RvLm1vZGFsICNkZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgI2Rlc2NyaXB0aW9uOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgLmZvcm0tYm90dG9tIHtcXG4gIG1hcmdpbi1ibG9jazogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFyZW07XFxufVxcbi5uZXctdG9kby5tb2RhbCBsYWJlbFtmb3I9ZHVlLWRhdGVdLFxcbi5uZXctdG9kby5tb2RhbCBsZWdlbmQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5uZXctdG9kby5tb2RhbCAucHJpb3JpdHktYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC40cmVtIDAgMCAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ubmV3LXRvZG8ubW9kYWwgLnByaW9yaXR5LWJ1dHRvbnMgbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm5ldy10b2RvLm1vZGFsICNsb3cgKyBsYWJlbDpob3ZlcixcXG4ubmV3LXRvZG8ubW9kYWwgI2xvdzpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XFxufVxcbi5uZXctdG9kby5tb2RhbCAjbWVkaXVtICsgbGFiZWw6aG92ZXIsXFxuLm5ldy10b2RvLm1vZGFsICNtZWRpdW06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNSk7XFxufVxcbi5uZXctdG9kby5tb2RhbCAjaGlnaCArIGxhYmVsOmhvdmVyLFxcbi5uZXctdG9kby5tb2RhbCAjaGlnaDpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0FBQUo7O0FBR0E7O0VBRUksc0JBQUE7QUFBSjs7QUFHQTtFQUNJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBOzs7O0VBSUksYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFJQTtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0k7RUFDSSxpQkFBQTtBQURSO0FBSUk7O0VBRUksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGUjtBQUtJO0VBQ0ksaUJBQUE7QUFIUjtBQU1JO0VBQ0ksaUJBQUE7QUFKUjtBQU9JO0VBQ0kscUJBQUE7QUFMUjtBQVFJO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFOUjtBQVNJOztFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVVJO0VBQ0ksWUFBQTtBQVJSO0FBV0k7RUFDSSxVQUFBO0FBVFI7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBVko7O0FBYUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUFWSjs7QUFhQTtFQUNJLGtCQUFBO0FBVko7O0FBYUE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7QUFWSjtBQVlJO0VBQ0ksaUJBQUE7QUFWUjtBQWFJO0VBQ0ksb0JBQUE7QUFYUjtBQWNJO0VBQ0ksbUJBQUE7QUFaUjtBQWVJO0VBQ0ksa0NBQUE7QUFiUjtBQWVROztFQUVJLHFCQUFBO0FBYlo7O0FBa0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBZko7O0FBa0JBOztFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWZKOztBQWtCQTs7RUFFSSxhQUFBO0FBZko7O0FBa0JBO0VBQ0ksbUNBQUE7QUFmSjs7QUFrQkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZko7QUFpQkk7RUFDSSxpQ0FBQTtBQWZSOztBQW1CQTtFQUNJLFlBQUE7QUFoQko7O0FBbUJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBaEJKOztBQW1CQTs7RUFFSSxlQUFBO0FBaEJKOztBQW1CQTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBaEJKOztBQW1CQTtFQUNJLGFBQUE7QUFoQko7O0FBbUJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhCSjs7QUFtQkE7RUFDSSxVQUFBO0FBaEJKOztBQW1CQTtFQUNJLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBaEJKO0FBa0JJO0VBQ0ksb0NBQUE7QUFoQlI7QUFtQkk7RUFDSSxhQUFBO0FBakJSO0FBb0JJOzs7OztFQUtJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWxCUjtBQXFCSTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBbkJSOztBQTJCSTs7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF4QlI7QUEyQkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUF6QlI7QUE0Qkk7RUFDSSxnQkFBQTtBQTFCUjtBQTZCSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBM0JSO0FBOEJJOztFQUVJLGlCQUFBO0FBNUJSO0FBK0JJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUE3QlI7QUFnQ0k7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBOUJSO0FBaUNJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FBL0JSO0FBa0NJOztFQUVJLHNDQUFBO0FBaENSO0FBbUNJOztFQUVJLHdDQUFBO0FBakNSO0FBb0NJOztFQUVJLHNDQUFBO0FBbENSOztBQXVDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQXBDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tcHJpbWFyeTogaHNsKDIwOSwgOTElLCA2OCUpO1xcclxcbiAgICAtLXNlY29uZGFyeTogaHNsKDAsIDAlLCA5NSUpO1xcclxcbiAgICAtLWJvcmRlcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcclxcbiAgICAtLXRyYW5zaXRpb24tdGltZTogNDAwbXM7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMiB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcixcXHJcXG4ucHJvamVjdHMgbGksXFxyXFxuLm5ldy1wcm9qZWN0LFxcclxcbi50b2RvIC5zdW1tYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiBtaW4tY29udGVudCAxZnIgLyAxNXJlbSAxZnI7XFxyXFxuICAgIGdhcDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIC5sb2dvLWltZyB7XFxyXFxuICAgICAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RzIGxpLFxcclxcbiAgICAubmV3LXByb2plY3Qge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdHMgbGk6aG92ZXIge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlbGV0ZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdHMgbGk6aG92ZXIgLmRlbGV0ZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG8tY291bnQge1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG8tY291bnQsXFxyXFxuICAgIC5uZXctcHJvamVjdCBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEuNzVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ldy1wcm9qZWN0IHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3LXByb2plY3Q6aG92ZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtaW4td2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogbWluKDEwMCUsIDQwcmVtKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2Rvcy1oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcblxcclxcbiAgICAmLmhpZ2gtcHJpb3JpdHkge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5tZWRpdW0tcHJpb3JpdHkge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5sb3ctcHJpb3JpdHkge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuXFxyXFxuICAgICAgICAuZGVsZXRlLFxcclxcbiAgICAgICAgLmVkaXQge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSB7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLFxcclxcbi50b2RvIC50aXRsZSB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCxcXHJcXG4uZGVsZXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8rLnRvZG8ge1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gICAgZmxleDogMCAwIDFyZW07XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg3LCA4NywgODcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgJi5jaGVja2VkIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZH4qOm5vdCguZWRpdCk6bm90KC5kZWxldGUpIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGUge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgICBjb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCxcXHJcXG4uZGVsZXRlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEuNXJlbSArIDJweCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1idXR0b24ge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctdG9kby1idXR0b246aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogbWluKDEwMCUsIDQwcmVtKTtcXHJcXG5cXHJcXG4gICAgJjo6YmFja2Ryb3Age1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmFtZSxcXHJcXG4gICAgI3RpdGxlLFxcclxcbiAgICAjZGVzY3JpcHRpb24sXFxyXFxuICAgICNkdWUtZGF0ZSxcXHJcXG4gICAgLnByaW9yaXR5LWJ1dHRvbnMgbGFiZWwge1xcclxcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8ubW9kYWwge1xcclxcblxcclxcblxcclxcbiAgICAjdGl0bGUsXFxyXFxuICAgICNkZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICAgICAgY29sb3I6IGdyYXk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2Rlc2NyaXB0aW9uOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtLWJvdHRvbSB7XFxyXFxuICAgICAgICBtYXJnaW4tYmxvY2s6IDFyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGxhYmVsW2Zvcj1cXFwiZHVlLWRhdGVcXFwiXSxcXHJcXG4gICAgbGVnZW5kIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmlvcml0eS1idXR0b25zIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMCAwIDA7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW9yaXR5LWJ1dHRvbnMgbGFiZWwge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbG93K2xhYmVsOmhvdmVyLFxcclxcbiAgICAjbG93OmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21lZGl1bStsYWJlbDpob3ZlcixcXHJcXG4gICAgI21lZGl1bTpjaGVja2VkK2xhYmVsIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hpZ2grbGFiZWw6aG92ZXIsXFxyXFxuICAgICNoaWdoOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG4vLyBpbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRQcm9qZWN0cygpIHtcclxuICBsZXQgcHJvamVjdHMgPSBbXTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHtcclxuICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLm1hcCgoeyBuYW1lLCB0b2RvcyB9KSA9PiBuZXcgUHJvamVjdChuYW1lLCB0b2RvcykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdEZWZhdWx0JykpO1xyXG4gICAgd3JpdGVQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgfVxyXG4gIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlUHJvamVjdHMocHJvamVjdHMpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgJ2FzZGYnKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJ1VubmFtZWQnLCB0b2RvcyA9IFtdKSB7XHJcbiAgICB0aGlzLnRvZG9zID0gdG9kb3M7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uID8/ICcnO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gIH1cclxufVxyXG4iLCIvLyBpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gJy4vTG9jYWxTdG9yYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICBzdGF0aWMgI2FkZFRvZG9FdmVudCh0b2RvKSB7XHJcbiAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyAjYWRkTW9kYWxDbG9zZUV2ZW50cygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKTtcclxuICAgIGRpYWxvZ3MuZm9yRWFjaCgoZGlhbG9nKSA9PiB7XHJcbiAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkaWFsb2cpIHtcclxuICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyAjYWRkTmV3UHJvamVjdEV2ZW50KCkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XHJcbiAgICBuZXdQcm9qZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKS5yZXNldCgpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC5tb2RhbCcpLnNob3dNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBzdG9yYWdlLnJlYWRQcm9qZWN0cygpO1xyXG4gICAgW3RoaXMuY3VyclByb2plY3RdID0gdGhpcy5wcm9qZWN0cztcclxuICAgIHRoaXMuY3VyclRvZG9JRCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXR1cFBhZ2UoKSB7XHJcbiAgICB0aGlzLiNwb3B1bGF0ZVByb2plY3RzSFRNTCgpO1xyXG4gICAgdGhpcy4jcG9wdWxhdGVUb2Rvc0hUTUwodGhpcy5jdXJyUHJvamVjdCk7XHJcbiAgICB0aGlzLiNhZGRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgI3BvcHVsYXRlUHJvamVjdHNIVE1MKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgdGhpcy4jYWRkUHJvamVjdEVsKHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAjYWRkUHJvamVjdEVsKHByb2plY3QpIHtcclxuICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChgXHJcbiAgICAgIDxsaSBjbGFzcz1cInByb2plY3RcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj4ke3Byb2plY3QudG9kb3MubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke3Byb2plY3QubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICBgKTtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKS5jaGlsZEVsZW1lbnRDb3VudCAhPT0gMCkge1xyXG4gICAgICBjb25zdCBkZWxldGVFbCA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCc8aW1nIGNsYXNzPVwiZGVsZXRlXCIgc3JjPVwiLi4vLi4vZGlzdC9pbWFnZXMvZGVsZXRlLWJpbi1saW5lLnN2Z1wiPicpO1xyXG4gICAgICBmcmFnLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JykuYXBwZW5kQ2hpbGQoZGVsZXRlRWwpO1xyXG4gICAgICB0aGlzLmFkZFByb2plY3REZWxldGVFdmVudChmcmFnLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKSwgcHJvamVjdCk7XHJcbiAgICB9XHJcbiAgICBmcmFnLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VyclByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICB0aGlzLiNwb3B1bGF0ZVRvZG9zSFRNTCh0aGlzLmN1cnJQcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQoZnJhZyk7XHJcbiAgfVxyXG5cclxuICAjcG9wdWxhdGVUb2Rvc0hUTUwocHJvamVjdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWhlYWRlcicpLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYWRkVG9kb0VsKHByb2plY3QudG9kb3NbaV0sIGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2FkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy4jYWRkVG9kb0J1dHRvbkV2ZW50KCk7XHJcbiAgICBVSS4jYWRkTW9kYWxDbG9zZUV2ZW50cygpO1xyXG4gICAgdGhpcy4jYWRkVG9kb01vZGFsU3VibWl0RXZlbnQoKTtcclxuICAgIFVJLiNhZGROZXdQcm9qZWN0RXZlbnQoKTtcclxuICAgIHRoaXMuI2FkZFByb2plY3RNb2RhbFN1Ym1pdEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICAjYWRkQ2hlY2tib3hFdmVudChjaGVja2JveCwgdG9kbykge1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XHJcbiAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xyXG4gICAgICBzdG9yYWdlLndyaXRlUHJvamVjdHModGhpcy5wcm9qZWN0cyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICNhZGRUb2RvQnV0dG9uRXZlbnQoKSB7XHJcbiAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLWJ1dHRvbicpO1xyXG4gICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGV4dCcpLmlubmVyVGV4dCA9ICdOZXcgVG9kbyc7XHJcbiAgICAgIHRoaXMuY3VyclRvZG9JRCA9IHRoaXMuY3VyclByb2plY3QudG9kb3MubGVuZ3RoO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8ubW9kYWwnKS5zaG93TW9kYWwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgI2FkZFByb2plY3RNb2RhbFN1Ym1pdEV2ZW50KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcclxuICAgICAgdGhpcy4jYWRkUHJvamVjdEVsKHByb2plY3QpO1xyXG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICAgIHN0b3JhZ2Uud3JpdGVQcm9qZWN0cyh0aGlzLnByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgI2FkZFRvZG9Nb2RhbFN1Ym1pdEV2ZW50KCkge1xyXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XHJcbiAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlO1xyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcbiAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICB0aGlzLmFkZFRvZG9FbCh0b2RvLCB0aGlzLmN1cnJUb2RvSUQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvRWwodG9kbywgaSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQsXHJcbiAgICB9ID0gdG9kbztcclxuXHJcbiAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYFxyXG4gICAgICA8bGkgY2xhc3M9XCJ0b2RvICR7cHJpb3JpdHl9LXByaW9yaXR5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveCR7Y29tcGxldGVkID8gJyBjaGVja2VkJyA6ICcnfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPiR7dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkdWUtZGF0ZVwiPiR7ZHVlRGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwiZWRpdFwiIHNyYz1cIi4uLy4uL2Rpc3QvaW1hZ2VzL2VkaXQtYm94LWxpbmUuc3ZnXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwiZGVsZXRlXCIgc3JjPVwiLi4vLi4vZGlzdC9pbWFnZXMvZGVsZXRlLWJpbi1saW5lLnN2Z1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGV0YWlscyBoaWRkZW5cIj4ke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9saT5cclxuICAgIGApO1xyXG5cclxuICAgIHRoaXMuI2FkZENoZWNrYm94RXZlbnQoZnJhZy5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKSwgdG9kbyk7XHJcbiAgICB0aGlzLmFkZEVkaXRFdmVudChmcmFnLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0JyksIHRvZG8pO1xyXG4gICAgdGhpcy5hZGRUb2RvRGVsZXRlRXZlbnQoZnJhZy5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyksIHRvZG8pO1xyXG4gICAgVUkuI2FkZFRvZG9FdmVudChmcmFnLnF1ZXJ5U2VsZWN0b3IoJy50b2RvJykpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcclxuICAgIGNvbnN0IHRvZG9FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKS5jaGlsZHJlbjtcclxuXHJcbiAgICBpZiAoaSA9PT0gdG9kb0Vscy5sZW5ndGgpIHtcclxuICAgICAgdG9kb3NFbC5hcHBlbmQoZnJhZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2Rvc0VsLnJlcGxhY2VDaGlsZChmcmFnLCB0b2RvRWxzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zW2ldID0gdG9kbztcclxuICAgIHN0b3JhZ2Uud3JpdGVQcm9qZWN0cyh0aGlzLnByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGFkZEVkaXRFdmVudChlZGl0RWwsIHRvZG8pIHtcclxuICAgIGVkaXRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuY3VyclRvZG9JRCA9IHRoaXMuY3VyclByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvIC5mb3JtLWhlYWRlcicpLmlubmVySFRNTCA9ICdFZGl0IFRvZG8nO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZSA9IHRoaXMuY3VyclByb2plY3QudG9kb3NbdGhpcy5jdXJyVG9kb0lEXS50aXRsZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWUgPSB0aGlzLmN1cnJQcm9qZWN0LnRvZG9zW3RoaXMuY3VyclRvZG9JRF0uZGVzY3JpcHRpb247XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlID0gdGhpcy5jdXJyUHJvamVjdC50b2Rvc1t0aGlzLmN1cnJUb2RvSURdLmR1ZURhdGU7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuY3VyclByb2plY3QudG9kb3NbdGhpcy5jdXJyVG9kb0lEXS5wcmlvcml0eX1gKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLm1vZGFsJykuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3REZWxldGVFdmVudChkZWxldGVFbCwgcHJvamVjdCkge1xyXG4gICAgZGVsZXRlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBkZWxldGVFbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcclxuICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzdG9yYWdlLndyaXRlUHJvamVjdHModGhpcy5wcm9qZWN0cyk7XHJcbiAgICAgIFt0aGlzLmN1cnJQcm9qZWN0XSA9IHRoaXMucHJvamVjdHM7XHJcbiAgICAgIHRoaXMuI3BvcHVsYXRlVG9kb3NIVE1MKHRoaXMuY3VyclByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvRGVsZXRlRXZlbnQoZGVsZXRlRWwsIHRvZG8pIHtcclxuICAgIGRlbGV0ZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuY3VyclByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKTtcclxuICAgICAgdGhpcy5jdXJyUHJvamVjdC50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBkZWxldGVFbC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgICAgIHN0b3JhZ2Uud3JpdGVQcm9qZWN0cyh0aGlzLnByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUknO1xyXG5cclxuY29uc3QgdWkgPSBuZXcgVUkoKTtcclxudWkuc2V0dXBQYWdlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==