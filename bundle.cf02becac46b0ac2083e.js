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

/***/ "./src/GameBoard.js"
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar GameBoard = /*#__PURE__*/function () {\n  function GameBoard() {\n    var containerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'game-board';\n    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE;\n    _classCallCheck(this, GameBoard);\n    this.containerId = containerId;\n    this.size = size;\n    this.container = null;\n    this.cells = [];\n  }\n  return _createClass(GameBoard, [{\n    key: \"getContainer\",\n    value: function getContainer() {\n      if (!this.container) {\n        this.container = document.getElementById(this.containerId);\n      }\n      if (!this.container) {\n        throw new Error(\"\\u042D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 #\".concat(this.containerId, \" \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D \\u0432 DOM\"));\n      }\n      return this.container;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var container = this.getContainer();\n      container.textContent = '';\n      this.cells = [];\n      for (var index = 0; index < this.size; index += 1) {\n        var cell = document.createElement('button');\n        cell.type = 'button';\n        cell.className = 'cell';\n        cell.dataset.index = String(index);\n        cell.setAttribute('aria-label', \"\\u041B\\u0443\\u043D\\u043A\\u0430 \".concat(index + 1));\n        container.appendChild(cell);\n        this.cells.push(cell);\n      }\n      return this.cells;\n    }\n  }, {\n    key: \"getRandomCellIndex\",\n    value: function getRandomCellIndex() {\n      var excludedIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      if (this.cells.length === 0) {\n        throw new Error('Игровое поле ещё не создано');\n      }\n      if (this.cells.length === 1) {\n        return 0;\n      }\n      var nextIndex = Math.floor(Math.random() * this.cells.length);\n      while (nextIndex === excludedIndex) {\n        nextIndex = Math.floor(Math.random() * this.cells.length);\n      }\n      return nextIndex;\n    }\n  }, {\n    key: \"getCell\",\n    value: function getCell(index) {\n      var _this$cells$index;\n      return (_this$cells$index = this.cells[index]) !== null && _this$cells$index !== void 0 ? _this$cells$index : null;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://hw-dom/./src/GameBoard.js?\n}");

/***/ },

/***/ "./src/GameController.js"
/*!*******************************!*\
  !*** ./src/GameController.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ \"./src/GameBoard.js\");\n/* harmony import */ var _Goblin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Goblin */ \"./src/Goblin.js\");\n/* harmony import */ var _Scoreboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scoreboard */ \"./src/Scoreboard.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\nvar GameController = /*#__PURE__*/function () {\n  function GameController() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$board = _ref.board,\n      board = _ref$board === void 0 ? new _GameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]() : _ref$board,\n      _ref$goblin = _ref.goblin,\n      goblin = _ref$goblin === void 0 ? new _Goblin__WEBPACK_IMPORTED_MODULE_1__[\"default\"]() : _ref$goblin,\n      _ref$scoreboard = _ref.scoreboard,\n      scoreboard = _ref$scoreboard === void 0 ? new _Scoreboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]() : _ref$scoreboard,\n      _ref$visibleDuration = _ref.visibleDuration,\n      visibleDuration = _ref$visibleDuration === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__.GOBLIN_VISIBLE_MS : _ref$visibleDuration,\n      _ref$missLimit = _ref.missLimit,\n      missLimit = _ref$missLimit === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__.MISS_LIMIT : _ref$missLimit;\n    _classCallCheck(this, GameController);\n    this.board = board;\n    this.goblin = goblin;\n    this.scoreboard = scoreboard;\n    this.visibleDuration = visibleDuration;\n    this.missLimit = missLimit;\n    this.score = 0;\n    this.misses = 0;\n    this.isRunning = false;\n    this.timerId = null;\n    this.onCellClick = this.onCellClick.bind(this);\n  }\n  return _createClass(GameController, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n      this.board.render();\n      this.scoreboard.render();\n      this.board.cells.forEach(function (cell) {\n        return cell.addEventListener('click', _this.onCellClick);\n      });\n      this.reset();\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.score = 0;\n      this.misses = 0;\n      this.scoreboard.update(this.score, this.misses);\n      this.scoreboard.setStatus('Игра запущена');\n      this.goblin.hide();\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.stop();\n      this.init();\n      this.isRunning = true;\n      this.spawnGoblin();\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      if (this.timerId) {\n        clearTimeout(this.timerId);\n        this.timerId = null;\n      }\n      this.isRunning = false;\n      this.goblin.hide();\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      var _this2 = this;\n      this.stop();\n      this.board.cells.forEach(function (cell) {\n        return cell.removeEventListener('click', _this2.onCellClick);\n      });\n    }\n  }, {\n    key: \"spawnGoblin\",\n    value: function spawnGoblin() {\n      var _this3 = this;\n      var nextIndex = this.board.getRandomCellIndex(this.goblin.position);\n      var nextCell = this.board.getCell(nextIndex);\n      this.goblin.show(nextCell, nextIndex);\n      this.timerId = setTimeout(function () {\n        return _this3.handleMiss();\n      }, this.visibleDuration);\n    }\n  }, {\n    key: \"handleHit\",\n    value: function handleHit() {\n      this.score += 1;\n      this.scoreboard.update(this.score, this.misses);\n      this.goblin.hide();\n      clearTimeout(this.timerId);\n      this.timerId = null;\n      if (this.isRunning) {\n        this.spawnGoblin();\n      }\n    }\n  }, {\n    key: \"handleMiss\",\n    value: function handleMiss() {\n      this.misses += 1;\n      this.scoreboard.update(this.score, this.misses);\n      this.goblin.hide();\n      this.timerId = null;\n      if (this.misses >= this.missLimit) {\n        this.finish();\n        return;\n      }\n      if (this.isRunning) {\n        this.spawnGoblin();\n      }\n    }\n  }, {\n    key: \"finish\",\n    value: function finish() {\n      this.stop();\n      this.scoreboard.setStatus(\"\\u0418\\u0433\\u0440\\u0430 \\u043E\\u043A\\u043E\\u043D\\u0447\\u0435\\u043D\\u0430. \\u0418\\u0442\\u043E\\u0433\\u043E\\u0432\\u044B\\u0439 \\u0441\\u0447\\u0451\\u0442: \".concat(this.score));\n    }\n  }, {\n    key: \"onCellClick\",\n    value: function onCellClick(event) {\n      if (!this.isRunning) {\n        return;\n      }\n      var cell = event.currentTarget;\n      var clickedIndex = Number(cell.dataset.index);\n      if (this.goblin.visible && clickedIndex === this.goblin.position) {\n        this.handleHit();\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://hw-dom/./src/GameController.js?\n}");

/***/ },

/***/ "./src/Goblin.js"
/*!***********************!*\
  !*** ./src/Goblin.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Goblin)\n/* harmony export */ });\n/* harmony import */ var _goblin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goblin.png */ \"./src/goblin.png\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Goblin = /*#__PURE__*/function () {\n  function Goblin() {\n    _classCallCheck(this, Goblin);\n    this.element = document.createElement('img');\n    this.element.src = _goblin_png__WEBPACK_IMPORTED_MODULE_0__;\n    this.element.className = 'goblin';\n    this.element.alt = 'Гоблин';\n    this.position = null;\n    this.visible = false;\n  }\n  return _createClass(Goblin, [{\n    key: \"show\",\n    value: function show(cell, position) {\n      cell.appendChild(this.element);\n      this.position = position;\n      this.visible = true;\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      if (this.element.parentElement) {\n        this.element.parentElement.removeChild(this.element);\n      }\n      this.position = null;\n      this.visible = false;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://hw-dom/./src/Goblin.js?\n}");

/***/ },

/***/ "./src/HammerCursor.js"
/*!*****************************!*\
  !*** ./src/HammerCursor.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HammerCursor)\n/* harmony export */ });\n/* harmony import */ var _hammer_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hammer.svg */ \"./src/hammer.svg\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar HammerCursor = /*#__PURE__*/function () {\n  function HammerCursor() {\n    var rootId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'game-board';\n    _classCallCheck(this, HammerCursor);\n    this.rootId = rootId;\n    this.root = null;\n    this.element = null;\n    this.onMouseEnter = this.onMouseEnter.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseDown = this.onMouseDown.bind(this);\n    this.onMouseUp = this.onMouseUp.bind(this);\n  }\n  return _createClass(HammerCursor, [{\n    key: \"getRoot\",\n    value: function getRoot() {\n      if (!this.root) {\n        this.root = document.getElementById(this.rootId);\n      }\n      return this.root;\n    }\n  }, {\n    key: \"createElement\",\n    value: function createElement() {\n      if (this.element) {\n        return this.element;\n      }\n      var cursor = document.createElement('div');\n      cursor.className = 'hammer-cursor';\n      cursor.setAttribute('aria-hidden', 'true');\n      cursor.style.backgroundImage = \"url(\".concat(_hammer_svg__WEBPACK_IMPORTED_MODULE_0__, \")\");\n      document.body.appendChild(cursor);\n      this.element = cursor;\n      return cursor;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var root = this.getRoot();\n      if (!root) {\n        return;\n      }\n      this.createElement();\n      root.classList.add('game-board--hammer');\n      root.addEventListener('mouseenter', this.onMouseEnter);\n      root.addEventListener('mousemove', this.onMouseMove);\n      root.addEventListener('mouseleave', this.onMouseLeave);\n      root.addEventListener('mousedown', this.onMouseDown);\n      root.addEventListener('mouseup', this.onMouseUp);\n    }\n  }, {\n    key: \"onMouseEnter\",\n    value: function onMouseEnter(event) {\n      if (!this.element) {\n        return;\n      }\n      this.element.classList.add('hammer-cursor--visible');\n      this.onMouseMove(event);\n    }\n  }, {\n    key: \"onMouseMove\",\n    value: function onMouseMove(event) {\n      if (!this.element) {\n        return;\n      }\n      this.element.style.left = \"\".concat(event.clientX, \"px\");\n      this.element.style.top = \"\".concat(event.clientY, \"px\");\n    }\n  }, {\n    key: \"onMouseLeave\",\n    value: function onMouseLeave() {\n      if (!this.element) {\n        return;\n      }\n      this.element.classList.remove('hammer-cursor--visible', 'hammer-cursor--hit');\n    }\n  }, {\n    key: \"onMouseDown\",\n    value: function onMouseDown() {\n      if (!this.element) {\n        return;\n      }\n      this.element.classList.add('hammer-cursor--hit');\n    }\n  }, {\n    key: \"onMouseUp\",\n    value: function onMouseUp() {\n      if (!this.element) {\n        return;\n      }\n      this.element.classList.remove('hammer-cursor--hit');\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      var _this$element;\n      var root = this.getRoot();\n      if (root) {\n        root.classList.remove('game-board--hammer');\n        root.removeEventListener('mouseenter', this.onMouseEnter);\n        root.removeEventListener('mousemove', this.onMouseMove);\n        root.removeEventListener('mouseleave', this.onMouseLeave);\n        root.removeEventListener('mousedown', this.onMouseDown);\n        root.removeEventListener('mouseup', this.onMouseUp);\n      }\n      if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentElement) {\n        this.element.parentElement.removeChild(this.element);\n      }\n      this.element = null;\n      this.root = null;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://hw-dom/./src/HammerCursor.js?\n}");

/***/ },

/***/ "./src/Scoreboard.js"
/*!***************************!*\
  !*** ./src/Scoreboard.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scoreboard)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Scoreboard = /*#__PURE__*/function () {\n  function Scoreboard() {\n    var rootId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'game-info';\n    _classCallCheck(this, Scoreboard);\n    this.rootId = rootId;\n    this.root = null;\n    this.scoreValue = null;\n    this.missValue = null;\n    this.statusValue = null;\n  }\n  return _createClass(Scoreboard, [{\n    key: \"getRoot\",\n    value: function getRoot() {\n      if (!this.root) {\n        this.root = document.getElementById(this.rootId);\n      }\n      if (!this.root) {\n        throw new Error(\"\\u042D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 #\".concat(this.rootId, \" \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D \\u0432 DOM\"));\n      }\n      return this.root;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var root = this.getRoot();\n      root.innerHTML = \"\\n            <div class=\\\"game-info__item\\\">\\u0421\\u0447\\u0451\\u0442: <span data-role=\\\"score\\\">0</span></div>\\n            <div class=\\\"game-info__item\\\">\\u041F\\u0440\\u043E\\u043C\\u0430\\u0445\\u0438: <span data-role=\\\"misses\\\">0</span></div>\\n            <div class=\\\"game-info__item game-info__status\\\" data-role=\\\"status\\\">\\u0418\\u0433\\u0440\\u0430 \\u0437\\u0430\\u043F\\u0443\\u0449\\u0435\\u043D\\u0430</div>\\n        \";\n      this.scoreValue = root.querySelector('[data-role=\"score\"]');\n      this.missValue = root.querySelector('[data-role=\"misses\"]');\n      this.statusValue = root.querySelector('[data-role=\"status\"]');\n    }\n  }, {\n    key: \"update\",\n    value: function update(score, misses) {\n      this.scoreValue.textContent = String(score);\n      this.missValue.textContent = String(misses);\n    }\n  }, {\n    key: \"setStatus\",\n    value: function setStatus(message) {\n      this.statusValue.textContent = message;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://hw-dom/./src/Scoreboard.js?\n}");

/***/ },

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.startGame)();\n});\nwindow.addEventListener('beforeunload', function () {\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.stopGame)();\n});\n\n//# sourceURL=webpack://hw-dom/./src/app.js?\n}");

/***/ },

/***/ "./src/constants.js"
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BOARD_SIZE: () => (/* binding */ BOARD_SIZE),\n/* harmony export */   GOBLIN_VISIBLE_MS: () => (/* binding */ GOBLIN_VISIBLE_MS),\n/* harmony export */   MISS_LIMIT: () => (/* binding */ MISS_LIMIT)\n/* harmony export */ });\nvar BOARD_SIZE = 16;\nvar MISS_LIMIT = 5;\nvar GOBLIN_VISIBLE_MS = 1000;\n\n//# sourceURL=webpack://hw-dom/./src/constants.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameController: () => (/* reexport safe */ _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   createGame: () => (/* binding */ createGame),\n/* harmony export */   startGame: () => (/* binding */ startGame),\n/* harmony export */   stopGame: () => (/* binding */ stopGame)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/GameController.js\");\n/* harmony import */ var _HammerCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HammerCursor */ \"./src/HammerCursor.js\");\n\n\n\nvar gameController = null;\nvar hammerCursor = null;\nfunction createGame() {\n  gameController = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  return gameController;\n}\nfunction startGame() {\n  if (!gameController) {\n    createGame();\n  }\n  if (!hammerCursor) {\n    hammerCursor = new _HammerCursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    hammerCursor.init();\n  }\n  gameController.start();\n  return gameController;\n}\nfunction stopGame() {\n  if (hammerCursor) {\n    hammerCursor.destroy();\n    hammerCursor = null;\n  }\n  if (gameController) {\n    gameController.destroy();\n    gameController = null;\n  }\n}\n\n\n//# sourceURL=webpack://hw-dom/./src/index.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: inherit;\n}\n\nbody {\n    margin: 0;\n    min-height: 100vh;\n    font-family: Arial, Helvetica, sans-serif;\n    background: linear-gradient(180deg, #d8f2c2 0%, #8ecf74 100%);\n}\n\n.page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 32px 16px 40px;\n}\n\n.page__title {\n    margin: 0 0 16px;\n}\n\n.game-info {\n    display: flex;\n    gap: 24px;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 24px;\n    font-size: 20px;\n    font-weight: 700;\n}\n\n.game-info__status {\n    width: 100%;\n    text-align: center;\n}\n\n#game-board {\n    display: grid;\n    grid-template-columns: repeat(4, 100px);\n    grid-template-rows: repeat(4, 100px);\n    gap: 12px;\n}\n\n.game-board--hammer,\n.game-board--hammer .cell,\n.game-board--hammer .goblin {\n    cursor: none;\n}\n\n.cell {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 0;\n    border-radius: 16px;\n    background: radial-gradient(circle at center, #6f4c2f 0 28px, #4f331f 29px 38px, #35713d 39px);\n    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.35);\n    padding: 0;\n}\n\n.cell:hover {\n    transform: translateY(-2px);\n}\n\n.goblin {\n    width: 72px;\n    height: 72px;\n    user-select: none;\n    -webkit-user-drag: none;\n    pointer-events: none;\n}\n\n.hammer-cursor {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 48px;\n    height: 48px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    pointer-events: none;\n    opacity: 0;\n    transform: translate(-8px, -6px) rotate(25deg);\n    transform-origin: 12px 10px;\n    transition: opacity 0.12s ease, transform 0.06s ease;\n    z-index: 9999;\n}\n\n.hammer-cursor--visible {\n    opacity: 1;\n}\n\n.hammer-cursor--hit {\n    transform: translate(-2px, 0) rotate(60deg) scale(0.96);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hw-dom/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hw-dom/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hw-dom/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hw-dom/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hw-dom/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hw-dom/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hw-dom/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hw-dom/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hw-dom/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hw-dom/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/goblin.png"
/*!************************!*\
  !*** ./src/goblin.png ***!
  \************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"assets/goblin.png\";\n\n//# sourceURL=webpack://hw-dom/./src/goblin.png?\n}");

/***/ },

/***/ "./src/hammer.svg"
/*!************************!*\
  !*** ./src/hammer.svg ***!
  \************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"assets/hammer.svg\";\n\n//# sourceURL=webpack://hw-dom/./src/hammer.svg?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;