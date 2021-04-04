webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/react-loader-spinner/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loader;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _loader = __webpack_require__(/*! ./loader */ "./node_modules/react-loader-spinner/dist/loader/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var componentNames = ["Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots", "Watch", "RevolvingDot", "Triangle", "Plane", "MutatingDots", "CradleLoader"];

function componentName(type) {
  if (componentNames.includes(type)) {
    return _loader.Spinner[type];
  }

  return _loader.Spinner.Audio;
}
/**
 * @return {null}
 */


function Loader(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      display = _useState2[0],
      setDisplay = _useState2[1];

  (0, _react.useEffect)(function () {
    var timer;

    if (props.timeout && props.timeout > 0) {
      timer = setTimeout(function () {
        setDisplay(false);
      }, props.timeout);
    }

    return function () {
      if (timer) clearTimeout(timer);
    };
  });

  if (!props.visible || props.visible === "false") {
    return null;
  }

  return display ? /*#__PURE__*/_react["default"].createElement("div", {
    "aria-busy": "true",
    className: props.className,
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement(componentName(props.type), _objectSpread({}, props))) : null;
}

Loader.propTypes = {
  type: _propTypes["default"].oneOf([].concat(componentNames)),
  style: _propTypes["default"].objectOf(_propTypes["default"].string),
  className: _propTypes["default"].string,
  visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  timeout: _propTypes["default"].number
};
Loader.defaultProps = {
  type: "Audio",
  style: {},
  className: "",
  visible: true,
  timeout: 0
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Audio.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Audio.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audio = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Audio = function Audio(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    height: props.height,
    width: props.width,
    fill: props.color,
    viewBox: "0 0 55 80",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(1 0 0 -1 0 80)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "10",
    height: "20",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "4.3s",
    values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "15",
    width: "10",
    height: "80",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "80;55;33;5;75;23;73;33;12;14;60;80",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "30",
    width: "10",
    height: "50",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1.4s",
    values: "50;34;78;23;56;23;34;76;80;54;21;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "45",
    width: "10",
    height: "30",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "30;45;13;80;56;72;45;76;34;23;67;30",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

exports.Audio = Audio;
Audio.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Audio.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/BallTriangle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BallTriangle = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BallTriangle = function BallTriangle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    height: props.height,
    width: props.width,
    stroke: props.color,
    viewBox: "0 0 57 57",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "5",
    cy: "50",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;5;50;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    values: "5;27;49;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "27",
    cy: "5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    from: "5",
    to: "5",
    values: "5;50;50;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    from: "27",
    to: "27",
    values: "27;49;5;27",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "49",
    cy: "50",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;50;5;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    from: "49",
    to: "49",
    begin: "0s",
    dur: "2.2s",
    values: "49;5;27;49",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
};

exports.BallTriangle = BallTriangle;
BallTriangle.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
BallTriangle.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 5,
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Bars.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Bars.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bars = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Bars = function Bars(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    fill: props.color,
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.Bars = Bars;
Bars.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Bars.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Circles.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Circles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circles = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Circles = function Circles(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 135 135",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "-360 67 67",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "360 67 67",
    dur: "8s",
    repeatCount: "indefinite"
  })));
};

exports.Circles = Circles;
Circles.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Circles.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/CradleLoader.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CradleLoader = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CradleLoader = function CradleLoader(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "aria-label": props.label,
    role: "presentation",
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing-l"
  }), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing-r"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow-l"
  }), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow-r"
  })));
};

exports.CradleLoader = CradleLoader;
CradleLoader.propTypes = {
  label: _propTypes["default"].string
};
CradleLoader.defaultProps = {
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Grid.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Grid.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Grid = function Grid(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 105 105",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "100ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "300ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "600ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "800ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "400ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "700ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "500ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "200ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.Grid = Grid;
Grid.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Grid.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 12.5,
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Hearts.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Hearts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hearts = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hearts = function Hearts(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 140 64",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0.7s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
  }));
};

exports.Hearts = Hearts;
Hearts.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Hearts.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/MutatingDots.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MutatingDots = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MutatingDots = function MutatingDots(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    id: "goo-loader",
    width: props.width,
    height: props.height,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "fancy-goo"
  }, /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "6",
    result: "blur"
  }), /*#__PURE__*/_react["default"].createElement("feColorMatrix", {
    "in": "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
    result: "goo"
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    "in": "SourceGraphic",
    in2: "goo",
    operator: "atop"
  })), /*#__PURE__*/_react["default"].createElement("g", {
    filter: "url(#fancy-goo)"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    id: "mainAnim",
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    from: "0 50 50",
    to: "359 50 50",
    dur: "1.2s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50%",
    cy: "40",
    r: props.radius,
    fill: props.color
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    id: "cAnim1",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0;cAnim1.end+0.2s",
    calcMode: "spline",
    values: "40;20;40",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50%",
    cy: "60",
    r: props.radius,
    fill: props.secondaryColor
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    id: "cAnim2",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0.4s;cAnim2.end+0.2s",
    calcMode: "spline",
    values: "60;80;60",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  }))));
};

exports.MutatingDots = MutatingDots;
MutatingDots.propTypes = {
  width: _propTypes["default"].number,
  secondaryColor: _propTypes["default"].string,
  height: _propTypes["default"].number,
  color: _propTypes["default"].string,
  radius: _propTypes["default"].number,
  label: _propTypes["default"].string
};
MutatingDots.defaultProps = {
  width: 80,
  height: 90,
  color: "green",
  radius: 11,
  secondaryColor: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Oval.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Oval.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Oval = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Oval = function Oval(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: props.radius
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite"
  })))));
};

exports.Oval = Oval;
Oval.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Oval.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 18
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Plane.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Plane.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Plane = function Plane(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "react-spinner-loader-svg-calLoader",
    xmlns: "http://www.w3.org/2000/svg",
    width: "230",
    height: "230",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("desc", null, "Plane animation. Loading "), /*#__PURE__*/_react["default"].createElement("path", {
    className: "react-spinner-loader-cal-loader__path",
    style: {
      stroke: props.secondaryColor
    },
    d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
    fill: "none",
    stroke: "#0099cc",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "10 10 10 10 10 10 10 432",
    strokeDashoffset: "77"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    className: "cal-loader__plane",
    style: {
      fill: props.color
    },
    d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
    fill: "#000033"
  }));
};

exports.Plane = Plane;
Plane.propTypes = {
  secondaryColor: _propTypes["default"].string,
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Plane.defaultProps = {
  secondaryColor: "grey",
  color: "#FFA500",
  label: "async-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Puff.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Puff.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Puff = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Puff = function Puff(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
};

exports.Puff = Puff;
Puff.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Puff.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 1
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RevolvingDot = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RevolvingDot = function RevolvingDot(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    version: "1.1",
    width: props.width,
    height: props.height,
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "none",
    stroke: props.color,
    strokeWidth: "4",
    cx: "50",
    cy: "50",
    r: props.radius + 38,
    style: {
      opacity: 0.5
    }
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: props.color,
    stroke: props.color,
    strokeWidth: "3",
    cx: "8",
    cy: "54",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 48",
    to: "360 50 52",
    repeatCount: "indefinite"
  })));
};

exports.RevolvingDot = RevolvingDot;
RevolvingDot.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
RevolvingDot.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 6
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Rings.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Rings.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rings = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Rings = function Rings(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius,
    strokeOpacity: "0"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius,
    strokeOpacity: "0"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeWidth",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius + 2
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

exports.Rings = Rings;
Rings.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Rings.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 6,
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/TailSpin.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TailSpin = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TailSpin = function TailSpin(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
    x1: "8.042%",
    y1: "0%",
    x2: "65.682%",
    y2: "23.865%",
    id: "a"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    stopOpacity: "0",
    offset: "0%"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    stopOpacity: ".631",
    offset: "63.146%"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    offset: "100%"
  }))), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    id: "Oval-2",
    stroke: props.color,
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#fff",
    cx: "36",
    cy: "18",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })))));
};

exports.TailSpin = TailSpin;
TailSpin.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
TailSpin.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 1,
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/ThreeDots.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreeDots = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThreeDots = function ThreeDots(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 120 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "15",
    cy: "15",
    r: props.radius + 6
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "60",
    cy: "15",
    r: props.radius,
    attributeName: "fillOpacity",
    from: "1",
    to: "0.3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "105",
    cy: "15",
    r: props.radius + 6
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.ThreeDots = ThreeDots;
ThreeDots.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
ThreeDots.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 9
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Triangle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Triangle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Triangle = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Triangle = function Triangle(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-svg"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    id: "triangle",
    width: props.width,
    height: props.height,
    viewBox: "-3 -4 39 39",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: "transparent",
    stroke: props.color,
    strokeWidth: "1",
    points: "16,0 32,32 0,32"
  })));
};

exports.Triangle = Triangle;
Triangle.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Triangle.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Watch.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Watch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Watch = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Watch = function Watch(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    version: "1.1",
    id: "L2",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "none",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    cx: "50",
    cy: "50",
    r: props.radius
  }), /*#__PURE__*/_react["default"].createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "85",
    y2: "50.5"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "49.5",
    y2: "74"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "15s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })));
};

exports.Watch = Watch;
Watch.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Watch.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 48
};

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;

var _Circles = __webpack_require__(/*! ./Circles */ "./node_modules/react-loader-spinner/dist/loader/Circles.js");

var _Watch = __webpack_require__(/*! ./Watch */ "./node_modules/react-loader-spinner/dist/loader/Watch.js");

var _Audio = __webpack_require__(/*! ./Audio */ "./node_modules/react-loader-spinner/dist/loader/Audio.js");

var _BallTriangle = __webpack_require__(/*! ./BallTriangle */ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js");

var _Bars = __webpack_require__(/*! ./Bars */ "./node_modules/react-loader-spinner/dist/loader/Bars.js");

var _CradleLoader = __webpack_require__(/*! ./CradleLoader */ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js");

var _Grid = __webpack_require__(/*! ./Grid */ "./node_modules/react-loader-spinner/dist/loader/Grid.js");

var _Hearts = __webpack_require__(/*! ./Hearts */ "./node_modules/react-loader-spinner/dist/loader/Hearts.js");

var _MutatingDots = __webpack_require__(/*! ./MutatingDots */ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js");

var _Oval = __webpack_require__(/*! ./Oval */ "./node_modules/react-loader-spinner/dist/loader/Oval.js");

var _Plane = __webpack_require__(/*! ./Plane */ "./node_modules/react-loader-spinner/dist/loader/Plane.js");

var _Puff = __webpack_require__(/*! ./Puff */ "./node_modules/react-loader-spinner/dist/loader/Puff.js");

var _RevolvingDot = __webpack_require__(/*! ./RevolvingDot */ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js");

var _Rings = __webpack_require__(/*! ./Rings */ "./node_modules/react-loader-spinner/dist/loader/Rings.js");

var _TailSpin = __webpack_require__(/*! ./TailSpin */ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js");

var _ThreeDots = __webpack_require__(/*! ./ThreeDots */ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js");

var _Triangle = __webpack_require__(/*! ./Triangle */ "./node_modules/react-loader-spinner/dist/loader/Triangle.js");

var Spinner = {
  Circles: _Circles.Circles,
  Audio: _Audio.Audio,
  BallTriangle: _BallTriangle.BallTriangle,
  Bars: _Bars.Bars,
  CradleLoader: _CradleLoader.CradleLoader,
  Grid: _Grid.Grid,
  Hearts: _Hearts.Hearts,
  MutatingDots: _MutatingDots.MutatingDots,
  Oval: _Oval.Oval,
  Plane: _Plane.Plane,
  Puff: _Puff.Puff,
  RevolvingDot: _RevolvingDot.RevolvingDot,
  Rings: _Rings.Rings,
  TailSpin: _TailSpin.TailSpin,
  ThreeDots: _ThreeDots.ThreeDots,
  Triangle: _Triangle.Triangle,
  Watch: _Watch.Watch
};
exports.Spinner = Spinner;

/***/ }),

/***/ "./src/components/SignUp.tsx":
/*!***********************************!*\
  !*** ./src/components/SignUp.tsx ***!
  \***********************************/
/*! exports provided: FormContainer, Header, StyledForm, InputContainer, Input, Button, StyledError, StyledSwitchAction, StyledInform, StyledSocial, Divider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainer", function() { return FormContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return InputContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledError", function() { return StyledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSwitchAction", function() { return StyledSwitchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInform", function() { return StyledInform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSocial", function() { return StyledSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/Modal */ "./src/components/modal/Modal.tsx");
/* harmony import */ var _context_AuthContextProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/AuthContextProvider */ "./src/context/AuthContextProvider.tsx");
/* harmony import */ var _apollo_mutations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../apollo/mutations */ "./src/apollo/mutations.ts");





var _jsxFileName = "C:\\Users\\Legion\\Desktop\\petkub-project\\petkub-frontend-tsx\\src\\components\\SignUp.tsx",
    _this = undefined,
    _s = $RefreshSig$();











var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SignUp__FormContainer",
  componentId: "zkzfi9-0"
})(["width:95%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin:2.5rem 0;"]);
_c = FormContainer;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SignUp__Header",
  componentId: "zkzfi9-1"
})(["width:100%;display:flex;justify-content:center;align-items:center;padding:0;margin:0;h2{margin:0;}"]);
_c2 = Header;
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "SignUp__StyledForm",
  componentId: "zkzfi9-2"
})(["width:100%;display:flex;flex-direction:column;justify-content:stretch;align-items:center;.email_section_label{margin:0;padding:0;color:", ";}"], function (props) {
  return props.theme.colors.teal;
});
_c3 = StyledForm;
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SignUp__InputContainer",
  componentId: "zkzfi9-3"
})(["width:100%;margin:0.5rem;display:flex;flex-direction:column;justify-content:stretch;align-items:stretch;"]);
_c4 = InputContainer;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].input.withConfig({
  displayName: "SignUp__Input",
  componentId: "zkzfi9-4"
})(["width:100%;height:4rem;border:0.5px solid ", ";border-radius:", ";margin:0.2rem 0;padding:1rem;font-size:1.4rem;outline:none;box-shadow:2px 2px 4px ", ";"], function (props) {
  return props.theme.colors.teal;
}, function (props) {
  return props.theme.radius;
}, function (props) {
  return props.theme.colors.lightGrey;
});
_c5 = Input;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "SignUp__Button",
  componentId: "zkzfi9-5"
})(["width:100%;height:4rem;background:", ";color:white;font-size:1.8rem;margin-top:2rem;&:hover{background:", ";}"], function (props) {
  return props.theme.backgroundColors.main;
}, function (props) {
  return props.theme.colors.darkTeal;
});
_c6 = Button;
var StyledError = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "SignUp__StyledError",
  componentId: "zkzfi9-6"
})(["margin:0;padding:0;color:red;font-size:1.3rem;"]);
_c7 = StyledError;
var StyledSwitchAction = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SignUp__StyledSwitchAction",
  componentId: "zkzfi9-7"
})(["margin:0;padding:0;width:100%;p{font-size:1.2rem;color:black;padding:0;margin:0;margin-top:1rem;}"]);
_c8 = StyledSwitchAction;
var StyledInform = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SignUp__StyledInform",
  componentId: "zkzfi9-8"
})(["margin:0;padding:0.2rem;width:100%;p{font-size:1.4rem;color:", ";padding:0;}"], function (props) {
  return props.theme.colors.teal;
});
var StyledSocial = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SignUp__StyledSocial",
  componentId: "zkzfi9-9"
})(["margin:1rem auto;padding:0.2rem;width:100%;button{width:100%;margin:1rem auto;padding:4%;display:flex;justify-content:space-around;align-items:center;color:white;a{color:white;text-decoration:none;}}.facebook{background:", ";&:hover{background:", ";}}.google{background:", ";&:hover{background:", ";}}"], function (props) {
  return props.theme.colors.fbBlue;
}, function (props) {
  return props.theme.colors.fbDarkBlue;
}, function (props) {
  return props.theme.colors.googleRed;
}, function (props) {
  return props.theme.colors.googleDarkRed;
});
_c9 = StyledSocial;
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].hr.withConfig({
  displayName: "SignUp__Divider",
  componentId: "zkzfi9-10"
})(["background-color:", ";height:1px;width:100%;"], function (props) {
  return props.theme.colors.lightGrey;
});
_c10 = Divider;

var SignUp = function SignUp() {
  _s();

  var _error$graphQLErrors$;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_AuthContextProvider__WEBPACK_IMPORTED_MODULE_12__["AuthContext"]),
      handleAuthAction = _useContext.handleAuthAction,
      setAuthUser = _useContext.setAuthUser;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(_apollo_mutations__WEBPACK_IMPORTED_MODULE_13__["SIGN_UP"]),
      _useMutation2 = Object(C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      signup = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  var submitSignup = handleSubmit( /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
      var username, email, password, _response$data, response, _signup;

      return C_Users_Legion_Desktop_petkub_project_petkub_frontend_tsx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = _ref.username, email = _ref.email, password = _ref.password;
              _context.prev = 1;
              _context.next = 4;
              return signup({
                variables: {
                  username: username,
                  email: email,
                  password: password
                }
              });

            case 4:
              response = _context.sent;

              if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.signup) {
                _signup = response.data.signup;

                if (_signup) {
                  // Close form
                  handleAuthAction('close'); // Set loggedInUser in context api

                  setAuthUser(_signup); // Push user to their dashboard

                  router.push('/dashboard');
                }
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              setAuthUser(null);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  console.log(loading);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modal_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledSocial, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "facebook",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: ['fab', 'facebook-f'],
            size: "lg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Sign in with Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "google",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: ['fab', 'google']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Sign in with Google"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledForm, {
        onSubmit: submitSignup,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "email_section_label",
          children: "or sign up with an email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputContainer, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            type: "text",
            name: "username",
            id: "username",
            placeholder: "Your username",
            autoComplete: "new-password",
            ref: register('username')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputContainer, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            type: "text",
            name: "email",
            id: "email",
            placeholder: "Your email",
            autoComplete: "new-password",
            ref: register('email')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputContainer, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Your password",
            ref: register('password')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_10___default.a, {
            type: "Oval",
            color: "white",
            height: 30,
            width: 30,
            timeout: 30000
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 15
          }, _this) : 'Submit'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledError, {
          children: ((_error$graphQLErrors$ = error.graphQLErrors[0]) === null || _error$graphQLErrors$ === void 0 ? void 0 : _error$graphQLErrors$.message) || 'Sorry, something went wrong'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledSwitchAction, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Already have account?", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              cursor: 'pointer',
              color: 'red'
            },
            onClick: function onClick() {
              return handleAuthAction('signin');
            },
            children: "sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, _this), ' ', "instead."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 204,
    columnNumber: 5
  }, _this);
};

_s(SignUp, "7/tUH8xg9Mu4xrVIYeelW0RMsYE=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"], next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"]];
});

_c11 = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "FormContainer");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "StyledForm");
$RefreshReg$(_c4, "InputContainer");
$RefreshReg$(_c5, "Input");
$RefreshReg$(_c6, "Button");
$RefreshReg$(_c7, "StyledError");
$RefreshReg$(_c8, "StyledSwitchAction");
$RefreshReg$(_c9, "StyledSocial");
$RefreshReg$(_c10, "Divider");
$RefreshReg$(_c11, "SignUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9BdWRpby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0JhbGxUcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0JhcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9DaXJjbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvQ3JhZGxlTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvR3JpZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0hlYXJ0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL011dGF0aW5nRG90cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL092YWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9QbGFuZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL1B1ZmYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9SZXZvbHZpbmdEb3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9SaW5ncy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL1RhaWxTcGluLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvVGhyZWVEb3RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvVHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9XYXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWduVXAudHN4Il0sIm5hbWVzIjpbIkZvcm1Db250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJTdHlsZWRGb3JtIiwiZm9ybSIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJ0ZWFsIiwiSW5wdXRDb250YWluZXIiLCJJbnB1dCIsImlucHV0IiwicmFkaXVzIiwibGlnaHRHcmV5IiwiQnV0dG9uIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9ycyIsIm1haW4iLCJkYXJrVGVhbCIsIlN0eWxlZEVycm9yIiwicCIsIlN0eWxlZFN3aXRjaEFjdGlvbiIsIlN0eWxlZEluZm9ybSIsIlN0eWxlZFNvY2lhbCIsImZiQmx1ZSIsImZiRGFya0JsdWUiLCJnb29nbGVSZWQiLCJnb29nbGVEYXJrUmVkIiwiRGl2aWRlciIsImhyIiwiU2lnblVwIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaGFuZGxlQXV0aEFjdGlvbiIsInNldEF1dGhVc2VyIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJTSUdOX1VQIiwic2lnbnVwIiwibG9hZGluZyIsImVycm9yIiwic3VibWl0U2lnbnVwIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFyaWFibGVzIiwicmVzcG9uc2UiLCJkYXRhIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJncmFwaFFMRXJyb3JzIiwibWVzc2FnZSIsImN1cnNvciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsdUJBQXVCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRXhYO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEscUNBQXFDLG1CQUFPLENBQUMsNENBQU87O0FBRXBELHdDQUF3QyxtQkFBTyxDQUFDLHNEQUFZOztBQUU1RCxjQUFjLG1CQUFPLENBQUMsMEVBQVU7O0FBRWhDLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRixxQ0FBcUMsZ0RBQWdELDJCQUEyQixpRUFBaUUsY0FBYyxHQUFHLGNBQWM7O0FBRWhOLHVDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLDhFQUE4RSxTQUFTLGtCQUFrQixFQUFFLHdDQUF3QywrQkFBK0IsdUJBQXVCLEVBQUUsaUJBQWlCLHNGQUFzRix1QkFBdUIsc0RBQXNELHFGQUFxRixzQ0FBc0MsMENBQTBDLEVBQUUsT0FBTyx3QkFBd0IsRUFBRSxFQUFFLEVBQUUseUJBQXlCLGFBQWEsd0JBQXdCLEVBQUUsZUFBZTs7QUFFNXVCLDBDQUEwQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsZ0VBQWdFLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhOztBQUVuVixnQ0FBZ0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHVEQUF1RCwyQ0FBMkMsRUFBRSxFQUFFLEVBQUUsNkNBQTZDLDJFQUEyRSxFQUFFLE9BQU8saURBQWlELGtGQUFrRixFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRXBoQiwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL00saUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRywwRkFBMEY7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pHYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCx3Q0FBd0MsbUJBQU8sQ0FBQyxzREFBWTs7QUFFNUQsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHO0FBQ3hFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDN0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM5QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzlDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDckZhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELHdDQUF3QyxtQkFBTyxDQUFDLHNEQUFZOztBQUU1RCxzQ0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLEdBQUc7QUFDckI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLEdBQUcsR0FBRztBQUNyQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxHQUFHLEdBQUc7QUFDckI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEdBQUcsRUFBRTtBQUNyQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsR0FBRyxFQUFFO0FBQ3JCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLEdBQUc7QUFDckI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDeEdhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELHdDQUF3QyxtQkFBTyxDQUFDLHNEQUFZOztBQUU1RCxzQ0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUk7QUFDL0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSTtBQUMvQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSTtBQUMvQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJO0FBQy9DO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxH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NTFlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9hZGVyO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9sb2FkZXIgPSByZXF1aXJlKFwiLi9sb2FkZXJcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxudmFyIGNvbXBvbmVudE5hbWVzID0gW1wiQXVkaW9cIiwgXCJCYWxsVHJpYW5nbGVcIiwgXCJCYXJzXCIsIFwiQ2lyY2xlc1wiLCBcIkdyaWRcIiwgXCJIZWFydHNcIiwgXCJPdmFsXCIsIFwiUHVmZlwiLCBcIlJpbmdzXCIsIFwiVGFpbFNwaW5cIiwgXCJUaHJlZURvdHNcIiwgXCJXYXRjaFwiLCBcIlJldm9sdmluZ0RvdFwiLCBcIlRyaWFuZ2xlXCIsIFwiUGxhbmVcIiwgXCJNdXRhdGluZ0RvdHNcIiwgXCJDcmFkbGVMb2FkZXJcIl07XG5cbmZ1bmN0aW9uIGNvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAoY29tcG9uZW50TmFtZXMuaW5jbHVkZXModHlwZSkpIHtcbiAgICByZXR1cm4gX2xvYWRlci5TcGlubmVyW3R5cGVdO1xuICB9XG5cbiAgcmV0dXJuIF9sb2FkZXIuU3Bpbm5lci5BdWRpbztcbn1cbi8qKlxuICogQHJldHVybiB7bnVsbH1cbiAqL1xuXG5cbmZ1bmN0aW9uIExvYWRlcihwcm9wcykge1xuICB2YXIgX3VzZVN0YXRlID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkodHJ1ZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGRpc3BsYXkgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RGlzcGxheSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGltZXI7XG5cbiAgICBpZiAocHJvcHMudGltZW91dCAmJiBwcm9wcy50aW1lb3V0ID4gMCkge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0RGlzcGxheShmYWxzZSk7XG4gICAgICB9LCBwcm9wcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIGlmICghcHJvcHMudmlzaWJsZSB8fCBwcm9wcy52aXNpYmxlID09PSBcImZhbHNlXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkaXNwbGF5ID8gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgXCJhcmlhLWJ1c3lcIjogXCJ0cnVlXCIsXG4gICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50TmFtZShwcm9wcy50eXBlKSwgX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpKSkgOiBudWxsO1xufVxuXG5Mb2FkZXIucHJvcFR5cGVzID0ge1xuICB0eXBlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZihbXS5jb25jYXQoY29tcG9uZW50TmFtZXMpKSxcbiAgc3R5bGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdE9mKF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyksXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB2aXNpYmxlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICB0aW1lb3V0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJcbn07XG5Mb2FkZXIuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiBcIkF1ZGlvXCIsXG4gIHN0eWxlOiB7fSxcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICB2aXNpYmxlOiB0cnVlLFxuICB0aW1lb3V0OiAwXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5BdWRpbyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBBdWRpbyA9IGZ1bmN0aW9uIEF1ZGlvKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgZmlsbDogcHJvcHMuY29sb3IsXG4gICAgdmlld0JveDogXCIwIDAgNTUgODBcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcIm1hdHJpeCgxIDAgMCAtMSAwIDgwKVwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICB3aWR0aDogXCIxMFwiLFxuICAgIGhlaWdodDogXCIyMFwiLFxuICAgIHJ4OiBcIjNcIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJoZWlnaHRcIixcbiAgICBiZWdpbjogXCIwc1wiLFxuICAgIGR1cjogXCI0LjNzXCIsXG4gICAgdmFsdWVzOiBcIjIwOzQ1OzU3OzgwOzY0OzMyOzY2OzQ1OzY0OzIzOzY2OzEzOzY0OzU2OzM0OzM0OzI7MjM7NzY7Nzk7MjBcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogXCIxNVwiLFxuICAgIHdpZHRoOiBcIjEwXCIsXG4gICAgaGVpZ2h0OiBcIjgwXCIsXG4gICAgcng6IFwiM1wiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgZHVyOiBcIjJzXCIsXG4gICAgdmFsdWVzOiBcIjgwOzU1OzMzOzU7NzU7MjM7NzM7MzM7MTI7MTQ7NjA7ODBcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogXCIzMFwiLFxuICAgIHdpZHRoOiBcIjEwXCIsXG4gICAgaGVpZ2h0OiBcIjUwXCIsXG4gICAgcng6IFwiM1wiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgZHVyOiBcIjEuNHNcIixcbiAgICB2YWx1ZXM6IFwiNTA7MzQ7Nzg7MjM7NTY7MjM7MzQ7NzY7ODA7NTQ7MjE7NTBcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogXCI0NVwiLFxuICAgIHdpZHRoOiBcIjEwXCIsXG4gICAgaGVpZ2h0OiBcIjMwXCIsXG4gICAgcng6IFwiM1wiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgZHVyOiBcIjJzXCIsXG4gICAgdmFsdWVzOiBcIjMwOzQ1OzEzOzgwOzU2OzcyOzQ1Ozc2OzM0OzIzOzY3OzMwXCIsXG4gICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pKSkpO1xufTtcblxuZXhwb3J0cy5BdWRpbyA9IEF1ZGlvO1xuQXVkaW8ucHJvcFR5cGVzID0ge1xuICBoZWlnaHQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgd2lkdGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgY29sb3I6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbkF1ZGlvLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVpZ2h0OiA4MCxcbiAgd2lkdGg6IDgwLFxuICBjb2xvcjogXCJncmVlblwiLFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkJhbGxUcmlhbmdsZSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBCYWxsVHJpYW5nbGUgPSBmdW5jdGlvbiBCYWxsVHJpYW5nbGUocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgIHZpZXdCb3g6IFwiMCAwIDU3IDU3XCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxIDEpXCIsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMlwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjVcIixcbiAgICBjeTogXCI1MFwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJjeVwiLFxuICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgZHVyOiBcIjIuMnNcIixcbiAgICB2YWx1ZXM6IFwiNTA7NTs1MDs1MFwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwiY3hcIixcbiAgICBiZWdpbjogXCIwc1wiLFxuICAgIGR1cjogXCIyLjJzXCIsXG4gICAgdmFsdWVzOiBcIjU7Mjc7NDk7NVwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjI3XCIsXG4gICAgY3k6IFwiNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJjeVwiLFxuICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgZHVyOiBcIjIuMnNcIixcbiAgICBmcm9tOiBcIjVcIixcbiAgICB0bzogXCI1XCIsXG4gICAgdmFsdWVzOiBcIjU7NTA7NTA7NVwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwiY3hcIixcbiAgICBiZWdpbjogXCIwc1wiLFxuICAgIGR1cjogXCIyLjJzXCIsXG4gICAgZnJvbTogXCIyN1wiLFxuICAgIHRvOiBcIjI3XCIsXG4gICAgdmFsdWVzOiBcIjI3OzQ5OzU7MjdcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI0OVwiLFxuICAgIGN5OiBcIjUwXCIsXG4gICAgcjogcHJvcHMucmFkaXVzXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImN5XCIsXG4gICAgYmVnaW46IFwiMHNcIixcbiAgICBkdXI6IFwiMi4yc1wiLFxuICAgIHZhbHVlczogXCI1MDs1MDs1OzUwXCIsXG4gICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJjeFwiLFxuICAgIGZyb206IFwiNDlcIixcbiAgICB0bzogXCI0OVwiLFxuICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgZHVyOiBcIjIuMnNcIixcbiAgICB2YWx1ZXM6IFwiNDk7NTsyNzs0OVwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSkpKSk7XG59O1xuXG5leHBvcnRzLkJhbGxUcmlhbmdsZSA9IEJhbGxUcmlhbmdsZTtcbkJhbGxUcmlhbmdsZS5wcm9wVHlwZXMgPSB7XG4gIGhlaWdodDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICB3aWR0aDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBjb2xvcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICByYWRpdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlclxufTtcbkJhbGxUcmlhbmdsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogODAsXG4gIHdpZHRoOiA4MCxcbiAgY29sb3I6IFwiZ3JlZW5cIixcbiAgcmFkaXVzOiA1LFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkJhcnMgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgQmFycyA9IGZ1bmN0aW9uIEJhcnMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICBmaWxsOiBwcm9wcy5jb2xvcixcbiAgICB2aWV3Qm94OiBcIjAgMCAxMzUgMTQwXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHk6IFwiMTBcIixcbiAgICB3aWR0aDogXCIxNVwiLFxuICAgIGhlaWdodDogXCIxMjBcIixcbiAgICByeDogXCI2XCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgYmVnaW46IFwiMC41c1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxMjA7MTEwOzEwMDs5MDs4MDs3MDs2MDs1MDs0MDsxNDA7MTIwXCIsXG4gICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJ5XCIsXG4gICAgYmVnaW46IFwiMC41c1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxMDsxNTsyMDsyNTszMDszNTs0MDs0NTs1MDswOzEwXCIsXG4gICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pKSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHg6IFwiMzBcIixcbiAgICB5OiBcIjEwXCIsXG4gICAgd2lkdGg6IFwiMTVcIixcbiAgICBoZWlnaHQ6IFwiMTIwXCIsXG4gICAgcng6IFwiNlwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgIGJlZ2luOiBcIjAuMjVzXCIsXG4gICAgZHVyOiBcIjFzXCIsXG4gICAgdmFsdWVzOiBcIjEyMDsxMTA7MTAwOzkwOzgwOzcwOzYwOzUwOzQwOzE0MDsxMjBcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcInlcIixcbiAgICBiZWdpbjogXCIwLjI1c1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxMDsxNTsyMDsyNTszMDszNTs0MDs0NTs1MDswOzEwXCIsXG4gICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pKSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgIHg6IFwiNjBcIixcbiAgICB3aWR0aDogXCIxNVwiLFxuICAgIGhlaWdodDogXCIxNDBcIixcbiAgICByeDogXCI2XCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgYmVnaW46IFwiMHNcIixcbiAgICBkdXI6IFwiMXNcIixcbiAgICB2YWx1ZXM6IFwiMTIwOzExMDsxMDA7OTA7ODA7NzA7NjA7NTA7NDA7MTQwOzEyMFwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwieVwiLFxuICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgZHVyOiBcIjFzXCIsXG4gICAgdmFsdWVzOiBcIjEwOzE1OzIwOzI1OzMwOzM1OzQwOzQ1OzUwOzA7MTBcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogXCI5MFwiLFxuICAgIHk6IFwiMTBcIixcbiAgICB3aWR0aDogXCIxNVwiLFxuICAgIGhlaWdodDogXCIxMjBcIixcbiAgICByeDogXCI2XCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgYmVnaW46IFwiMC4yNXNcIixcbiAgICBkdXI6IFwiMXNcIixcbiAgICB2YWx1ZXM6IFwiMTIwOzExMDsxMDA7OTA7ODA7NzA7NjA7NTA7NDA7MTQwOzEyMFwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwieVwiLFxuICAgIGJlZ2luOiBcIjAuMjVzXCIsXG4gICAgZHVyOiBcIjFzXCIsXG4gICAgdmFsdWVzOiBcIjEwOzE1OzIwOzI1OzMwOzM1OzQwOzQ1OzUwOzA7MTBcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgeDogXCIxMjBcIixcbiAgICB5OiBcIjEwXCIsXG4gICAgd2lkdGg6IFwiMTVcIixcbiAgICBoZWlnaHQ6IFwiMTIwXCIsXG4gICAgcng6IFwiNlwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgIGJlZ2luOiBcIjAuNXNcIixcbiAgICBkdXI6IFwiMXNcIixcbiAgICB2YWx1ZXM6IFwiMTIwOzExMDsxMDA7OTA7ODA7NzA7NjA7NTA7NDA7MTQwOzEyMFwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwieVwiLFxuICAgIGJlZ2luOiBcIjAuNXNcIixcbiAgICBkdXI6IFwiMXNcIixcbiAgICB2YWx1ZXM6IFwiMTA7MTU7MjA7MjU7MzA7MzU7NDA7NDU7NTA7MDsxMFwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSkpO1xufTtcblxuZXhwb3J0cy5CYXJzID0gQmFycztcbkJhcnMucHJvcFR5cGVzID0ge1xuICBoZWlnaHQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgd2lkdGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgY29sb3I6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbkJhcnMuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6IDgwLFxuICB3aWR0aDogODAsXG4gIGNvbG9yOiBcImdyZWVuXCIsXG4gIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ2lyY2xlcyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBDaXJjbGVzID0gZnVuY3Rpb24gQ2lyY2xlcyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgIHZpZXdCb3g6IFwiMCAwIDEzNSAxMzVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNjcuNDQ3IDU4YzUuNTIzIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc3LTEwLTEwLTEwLTEwIDQuNDc3LTEwIDEwIDQuNDc3IDEwIDEwIDEwem05LjQ0OCA5LjQ0N2MwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDUuNTIyIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc4LTEwLTEwLTEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwem0tOS40NDggOS40NDhjLTUuNTIzIDAtMTAgNC40NzctMTAgMTAgMCA1LjUyMiA0LjQ3NyAxMCAxMCAxMHMxMC00LjQ3OCAxMC0xMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwek01OCA2Ny40NDdjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHMtMTAgNC40NzctMTAgMTAgNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTB6XCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICBmcm9tOiBcIjAgNjcgNjdcIixcbiAgICB0bzogXCItMzYwIDY3IDY3XCIsXG4gICAgZHVyOiBcIjIuNXNcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjguMTkgNDAuMzFjNi42MjcgMCAxMi01LjM3NCAxMi0xMiAwLTYuNjI4LTUuMzczLTEyLTEyLTEyLTYuNjI4IDAtMTIgNS4zNzItMTIgMTIgMCA2LjYyNiA1LjM3MiAxMiAxMiAxMnptMzAuNzItMTkuODI1YzQuNjg2IDQuNjg3IDEyLjI4NCA0LjY4NyAxNi45NyAwIDQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3LTQuNjg2LTQuNjg3LTEyLjI4NC00LjY4Ny0xNi45NyAwLTQuNjg3IDQuNjg2LTQuNjg3IDEyLjI4NCAwIDE2Ljk3em0zNS43NCA3LjcwNWMwIDYuNjI3IDUuMzcgMTIgMTIgMTIgNi42MjYgMCAxMi01LjM3MyAxMi0xMiAwLTYuNjI4LTUuMzc0LTEyLTEyLTEyLTYuNjMgMC0xMiA1LjM3Mi0xMiAxMnptMTkuODIyIDMwLjcyYy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NyA0LjY4NyA0LjY4NiAxMi4yODUgNC42ODYgMTYuOTcgMCA0LjY4Ny00LjY4NiA0LjY4Ny0xMi4yODQgMC0xNi45Ny00LjY4NS00LjY4Ny0xMi4yODMtNC42ODctMTYuOTcgMHptLTcuNzA0IDM1Ljc0Yy02LjYyNyAwLTEyIDUuMzctMTIgMTIgMCA2LjYyNiA1LjM3MyAxMiAxMiAxMnMxMi01LjM3NCAxMi0xMmMwLTYuNjMtNS4zNzMtMTItMTItMTJ6bS0zMC43MiAxOS44MjJjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAwLTQuNjg2IDQuNjg3LTQuNjg2IDEyLjI4NSAwIDE2Ljk3IDQuNjg2IDQuNjg3IDEyLjI4NCA0LjY4NyAxNi45NyAwIDQuNjg3LTQuNjg1IDQuNjg3LTEyLjI4MyAwLTE2Ljk3em0tMzUuNzQtNy43MDRjMC02LjYyNy01LjM3Mi0xMi0xMi0xMi02LjYyNiAwLTEyIDUuMzczLTEyIDEyczUuMzc0IDEyIDEyIDEyYzYuNjI4IDAgMTItNS4zNzMgMTItMTJ6bS0xOS44MjMtMzAuNzJjNC42ODctNC42ODYgNC42ODctMTIuMjg0IDAtMTYuOTctNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDAtNC42ODcgNC42ODYtNC42ODcgMTIuMjg0IDAgMTYuOTcgNC42ODYgNC42ODcgMTIuMjg0IDQuNjg3IDE2Ljk3IDB6XCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICBmcm9tOiBcIjAgNjcgNjdcIixcbiAgICB0bzogXCIzNjAgNjcgNjdcIixcbiAgICBkdXI6IFwiOHNcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpKTtcbn07XG5cbmV4cG9ydHMuQ2lyY2xlcyA9IENpcmNsZXM7XG5DaXJjbGVzLnByb3BUeXBlcyA9IHtcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG5DaXJjbGVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVpZ2h0OiA4MCxcbiAgd2lkdGg6IDgwLFxuICBjb2xvcjogXCJncmVlblwiLFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNyYWRsZUxvYWRlciA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBDcmFkbGVMb2FkZXIgPSBmdW5jdGlvbiBDcmFkbGVMb2FkZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbCxcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250YWluZXJcIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc3dpbmdcIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc3dpbmctbFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc3dpbmctclwiXG4gIH0pKSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXItbG9hZGVyLXNoYWRvd1wiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyLWxvYWRlci1zaGFkb3ctbFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc2hhZG93LXJcIlxuICB9KSkpO1xufTtcblxuZXhwb3J0cy5DcmFkbGVMb2FkZXIgPSBDcmFkbGVMb2FkZXI7XG5DcmFkbGVMb2FkZXIucHJvcFR5cGVzID0ge1xuICBsYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xuQ3JhZGxlTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5HcmlkID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIEdyaWQgPSBmdW5jdGlvbiBHcmlkKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgdmlld0JveDogXCIwIDAgMTA1IDEwNVwiLFxuICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMi41XCIsXG4gICAgY3k6IFwiMTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCIwc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMi41XCIsXG4gICAgY3k6IFwiNTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCIxMDBtc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI1Mi41XCIsXG4gICAgY3k6IFwiMTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCIzMDBtc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI1Mi41XCIsXG4gICAgY3k6IFwiNTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCI2MDBtc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI5Mi41XCIsXG4gICAgY3k6IFwiMTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCI4MDBtc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI5Mi41XCIsXG4gICAgY3k6IFwiNTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCI0MDBtc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMi41XCIsXG4gICAgY3k6IFwiOTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCI3MDBtc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI1Mi41XCIsXG4gICAgY3k6IFwiOTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCI1MDBtc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI5Mi41XCIsXG4gICAgY3k6IFwiOTIuNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCIyMDBtc1wiLFxuICAgIGR1cjogXCIxc1wiLFxuICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpKTtcbn07XG5cbmV4cG9ydHMuR3JpZCA9IEdyaWQ7XG5HcmlkLnByb3BUeXBlcyA9IHtcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJhZGl1czogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXG59O1xuR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogODAsXG4gIHdpZHRoOiA4MCxcbiAgY29sb3I6IFwiZ3JlZW5cIixcbiAgcmFkaXVzOiAxMi41LFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkhlYXJ0cyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBIZWFydHMgPSBmdW5jdGlvbiBIZWFydHMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICB2aWV3Qm94OiBcIjAgMCAxNDAgNjRcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMzAuMjYyIDU3LjAyTDcuMTk1IDQwLjcyM2MtNS44NC0zLjk3Ni03LjU2LTEyLjA2LTMuODQyLTE4LjA2MyAzLjcxNS02IDExLjQ2Ny03LjY1IDE3LjMwNi0zLjY4bDQuNTIgMy43NiAyLjYtNS4yNzRjMy43MTctNi4wMDIgMTEuNDctNy42NSAxNy4zMDUtMy42OCA1Ljg0IDMuOTcgNy41NiAxMi4wNTQgMy44NDIgMTguMDYyTDM0LjQ5IDU2LjExOGMtLjg5NyAxLjUxMi0yLjc5MyAxLjkxNS00LjIyOC45elwiLFxuICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgZnJvbTogXCIwXCIsXG4gICAgdG86IFwiLjVcIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBiZWdpbjogXCIwc1wiLFxuICAgIGR1cjogXCIxLjRzXCIsXG4gICAgdmFsdWVzOiBcIjAuNTsxOzAuNVwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMDUuNTEyIDU2LjEybC0xNC40NC0yNC4yNzJjLTMuNzE2LTYuMDA4LTEuOTk2LTE0LjA5MyAzLjg0My0xOC4wNjIgNS44MzUtMy45NyAxMy41ODgtMi4zMjIgMTcuMzA2IDMuNjhsMi42IDUuMjc0IDQuNTItMy43NmM1Ljg0LTMuOTcgMTMuNTkyLTIuMzIgMTcuMzA3IDMuNjggMy43MTggNi4wMDMgMS45OTggMTQuMDg4LTMuODQyIDE4LjA2NEwxMDkuNzQgNTcuMDJjLTEuNDM0IDEuMDE0LTMuMzMuNjEtNC4yMjgtLjl6XCIsXG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICBmcm9tOiBcIjBcIixcbiAgICB0bzogXCIuNVwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImZpbGwtb3BhY2l0eVwiLFxuICAgIGJlZ2luOiBcIjAuN3NcIixcbiAgICBkdXI6IFwiMS40c1wiLFxuICAgIHZhbHVlczogXCIwLjU7MTswLjVcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNjcuNDA4IDU3LjgzNGwtMjMuMDEtMjQuOThjLTUuODY0LTYuMTUtNS44NjQtMTYuMTA4IDAtMjIuMjQ4IDUuODYtNi4xNCAxNS4zNy02LjE0IDIxLjIzNCAwTDcwIDE2LjE2OGw0LjM2OC01LjU2MmM1Ljg2My02LjE0IDE1LjM3NS02LjE0IDIxLjIzNSAwIDUuODYzIDYuMTQgNS44NjMgMTYuMDk4IDAgMjIuMjQ3bC0yMy4wMDcgMjQuOThjLTEuNDMgMS41NTYtMy43NTcgMS41NTYtNS4xODggMHpcIlxuICB9KSk7XG59O1xuXG5leHBvcnRzLkhlYXJ0cyA9IEhlYXJ0cztcbkhlYXJ0cy5wcm9wVHlwZXMgPSB7XG4gIGhlaWdodDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICB3aWR0aDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBjb2xvcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xuSGVhcnRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVpZ2h0OiA4MCxcbiAgd2lkdGg6IDgwLFxuICBjb2xvcjogXCJncmVlblwiLFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk11dGF0aW5nRG90cyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBNdXRhdGluZ0RvdHMgPSBmdW5jdGlvbiBNdXRhdGluZ0RvdHMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGlkOiBcImdvby1sb2FkZXJcIixcbiAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJmaWx0ZXJcIiwge1xuICAgIGlkOiBcImZhbmN5LWdvb1wiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJmZUdhdXNzaWFuQmx1clwiLCB7XG4gICAgXCJpblwiOiBcIlNvdXJjZUdyYXBoaWNcIixcbiAgICBzdGREZXZpYXRpb246IFwiNlwiLFxuICAgIHJlc3VsdDogXCJibHVyXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJmZUNvbG9yTWF0cml4XCIsIHtcbiAgICBcImluXCI6IFwiYmx1clwiLFxuICAgIG1vZGU6IFwibWF0cml4XCIsXG4gICAgdmFsdWVzOiBcIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDE5IC05XCIsXG4gICAgcmVzdWx0OiBcImdvb1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZmVDb21wb3NpdGVcIiwge1xuICAgIFwiaW5cIjogXCJTb3VyY2VHcmFwaGljXCIsXG4gICAgaW4yOiBcImdvb1wiLFxuICAgIG9wZXJhdG9yOiBcImF0b3BcIlxuICB9KSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBmaWx0ZXI6IFwidXJsKCNmYW5jeS1nb28pXCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgIGlkOiBcIm1haW5BbmltXCIsXG4gICAgYXR0cmlidXRlTmFtZTogXCJ0cmFuc2Zvcm1cIixcbiAgICBhdHRyaWJ1dGVUeXBlOiBcIlhNTFwiLFxuICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgZnJvbTogXCIwIDUwIDUwXCIsXG4gICAgdG86IFwiMzU5IDUwIDUwXCIsXG4gICAgZHVyOiBcIjEuMnNcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjUwJVwiLFxuICAgIGN5OiBcIjQwXCIsXG4gICAgcjogcHJvcHMucmFkaXVzLFxuICAgIGZpbGw6IHByb3BzLmNvbG9yXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBpZDogXCJjQW5pbTFcIixcbiAgICBhdHRyaWJ1dGVUeXBlOiBcIlhNTFwiLFxuICAgIGF0dHJpYnV0ZU5hbWU6IFwiY3lcIixcbiAgICBkdXI6IFwiMC42c1wiLFxuICAgIGJlZ2luOiBcIjA7Y0FuaW0xLmVuZCswLjJzXCIsXG4gICAgY2FsY01vZGU6IFwic3BsaW5lXCIsXG4gICAgdmFsdWVzOiBcIjQwOzIwOzQwXCIsXG4gICAga2V5VGltZXM6IFwiMDswLjM7MVwiLFxuICAgIGtleVNwbGluZXM6IFwiMC4wOSwgMC40NSwgMC4xNiwgMTswLjA5LCAwLjQ1LCAwLjE2LCAxXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCI1MCVcIixcbiAgICBjeTogXCI2MFwiLFxuICAgIHI6IHByb3BzLnJhZGl1cyxcbiAgICBmaWxsOiBwcm9wcy5zZWNvbmRhcnlDb2xvclxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgaWQ6IFwiY0FuaW0yXCIsXG4gICAgYXR0cmlidXRlVHlwZTogXCJYTUxcIixcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImN5XCIsXG4gICAgZHVyOiBcIjAuNnNcIixcbiAgICBiZWdpbjogXCIwLjRzO2NBbmltMi5lbmQrMC4yc1wiLFxuICAgIGNhbGNNb2RlOiBcInNwbGluZVwiLFxuICAgIHZhbHVlczogXCI2MDs4MDs2MFwiLFxuICAgIGtleVRpbWVzOiBcIjA7MC4zOzFcIixcbiAgICBrZXlTcGxpbmVzOiBcIjAuMDksIDAuNDUsIDAuMTYsIDE7MC4wOSwgMC40NSwgMC4xNiwgMVwiXG4gIH0pKSkpO1xufTtcblxuZXhwb3J0cy5NdXRhdGluZ0RvdHMgPSBNdXRhdGluZ0RvdHM7XG5NdXRhdGluZ0RvdHMucHJvcFR5cGVzID0ge1xuICB3aWR0aDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBzZWNvbmRhcnlDb2xvcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBoZWlnaHQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgY29sb3I6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcmFkaXVzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIGxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG5NdXRhdGluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogODAsXG4gIGhlaWdodDogOTAsXG4gIGNvbG9yOiBcImdyZWVuXCIsXG4gIHJhZGl1czogMTEsXG4gIHNlY29uZGFyeUNvbG9yOiBcImdyZWVuXCIsXG4gIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuT3ZhbCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBPdmFsID0gZnVuY3Rpb24gT3ZhbChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgIHZpZXdCb3g6IFwiMCAwIDM4IDM4XCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEgMSlcIixcbiAgICBzdHJva2VXaWR0aDogXCIyXCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgc3Ryb2tlT3BhY2l0eTogXCIuNVwiLFxuICAgIGN4OiBcIjE4XCIsXG4gICAgY3k6IFwiMThcIixcbiAgICByOiBwcm9wcy5yYWRpdXNcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlVHJhbnNmb3JtXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgZnJvbTogXCIwIDE4IDE4XCIsXG4gICAgdG86IFwiMzYwIDE4IDE4XCIsXG4gICAgZHVyOiBcIjFzXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pKSkpKTtcbn07XG5cbmV4cG9ydHMuT3ZhbCA9IE92YWw7XG5PdmFsLnByb3BUeXBlcyA9IHtcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJhZGl1czogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXG59O1xuT3ZhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogODAsXG4gIHdpZHRoOiA4MCxcbiAgY29sb3I6IFwiZ3JlZW5cIixcbiAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiLFxuICByYWRpdXM6IDE4XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QbGFuZSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBQbGFuZSA9IGZ1bmN0aW9uIFBsYW5lKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc3ZnLWNhbExvYWRlclwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgd2lkdGg6IFwiMjMwXCIsXG4gICAgaGVpZ2h0OiBcIjIzMFwiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGVzY1wiLCBudWxsLCBcIlBsYW5lIGFuaW1hdGlvbi4gTG9hZGluZyBcIiksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItY2FsLWxvYWRlcl9fcGF0aFwiLFxuICAgIHN0eWxlOiB7XG4gICAgICBzdHJva2U6IHByb3BzLnNlY29uZGFyeUNvbG9yXG4gICAgfSxcbiAgICBkOiBcIk04Ni40MjkgNDBjNjMuNjE2LTIwLjA0IDEwMS41MTEgMjUuMDggMTA3LjI2NSA2MS45MyA2LjQ4NyA0MS41NC0xOC41OTMgNzYuOTktNTAuNiA4Ny42NDMtNTkuNDYgMTkuNzkxLTEwMS4yNjItMjMuNTc3LTEwNy4xNDItNjIuNjE2QzI5LjM5OCA4My40NDEgNTkuOTQ1IDQ4LjM0MyA4Ni40MyA0MHpcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IFwiIzAwOTljY1wiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjRcIixcbiAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIixcbiAgICBzdHJva2VEYXNoYXJyYXk6IFwiMTAgMTAgMTAgMTAgMTAgMTAgMTAgNDMyXCIsXG4gICAgc3Ryb2tlRGFzaG9mZnNldDogXCI3N1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImNhbC1sb2FkZXJfX3BsYW5lXCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIGZpbGw6IHByb3BzLmNvbG9yXG4gICAgfSxcbiAgICBkOiBcIk0xNDEuNDkzIDM3LjkzYy0xLjA4Ny0uOTI3LTIuOTQyLTIuMDAyLTQuMzItMi41MDEtMi4yNTktLjgyNC0zLjI1Mi0uOTU1LTkuMjkzLTEuMTcyLTQuMDE3LS4xNDYtNS4xOTctLjIzLTUuNDctLjM3LS43NjYtLjQwNy0xLjUyNi0xLjQ0OC03LjExNC05Ljc3My00LjgtNy4xNDUtNS4zNDQtNy45MTQtNi4zMjctOC45NzYtMS4yMTQtMS4zMDYtMS4zOTYtMS4zNzgtMy43OS0xLjQ3My0xLjAzNi0uMDQtMi0uMDQzLTIuMTUzLS4wMDItLjM1My4xLS44Ny41ODYtMSAuOTUyLS4xMzkuMzk5LS4wNzYuNzEuNDMxIDIuMjIuMjQxLjcyIDEuMDI5IDMuMzg2IDEuNzQyIDUuOTE4IDEuNjQ0IDUuODQ0IDIuMzc4IDguMzQzIDIuODYzIDkuNzA1LjIwNi42MDEuMzMgMS4xLjI3NSAxLjEyNS0uMjQuMDk3LTEwLjU2IDEuMDY2LTExLjAxNCAxLjAzMmEzLjUzMiAzLjUzMiAwIDAgMS0xLjAwMi0uMjc2bC0uNDg3LS4yNDYtMi4wNDQtMi42MTNjLTIuMjM0LTIuODctMi4yMjgtMi44NjQtMy4zNS0zLjMwOS0uNzE3LS4yODctMi44Mi0uMzg2LTMuMjc2LS4xNjMtLjQ1Ny4yMzctLjcyNy42NDQtLjczNyAxLjE1Mi0uMDE4LjM5LjE2Ny44MDUgMS45MTYgNC4zNzMgMS4wNiAyLjE2NiAxLjk2NCA0LjA4MyAxLjk5OCA0LjI3LjA0LjE3OS4wMDQuNTIxLS4wNzYuNzUtLjA5My4yMjgtMS4xMDkgMi4wNjQtMi4yNjkgNC4wODgtMS45MjEgMy4zNC0yLjExIDMuNzExLTIuMTIzIDQuMTA3LS4wMDguMjUuMDYxLjU1Ny4xNjguNzI1LjMyOC41MTIuNzIuNjQ0IDEuOTY2LjY3NiAxLjMyLjAyOSAyLjM1Mi0uMjM2IDMuMDUtLjc2Mi4yMjItLjE3MSAxLjI3NS0xLjMxMyAyLjQxMi0yLjYxMSAxLjkxOC0yLjE4NSAyLjA0OC0yLjMyIDIuNDUtMi41MDUuMjQxLS4xMTEuNjAxLS4yMzIuODItLjI3MS4yNjctLjA1OCAyLjIxMy4yMDEgNS45MTIuOCAzLjAzNi40OCA1LjUyNS44OTQgNS41MTguOTE0IDAgLjAyNi0uMTIxLjMwNi0uMjcuNjM4LS41NCAxLjE5OC0xLjUxNSAzLjg0Mi0zLjM1IDkuMDIxLTEuMDI5IDIuOTEzLTIuMTA3IDUuODk3LTIuNCA2LjYyLS43MDMgMS43NDgtLjcyNSAxLjgzMy0uNTk0IDIuMjg2LjEzNy40Ni40NS44MzMuODcyIDEuMDEyLjQxLjE3NyAzLjgyMy4yNCA0LjM3LjA4NS44NTItLjI1IDEuNDQtLjY4OCAyLjMxMi0xLjcyNCAxLjE2Ni0xLjM5IDMuMTY5LTMuOTQ4IDYuNzcxLTguNjYxIDUuOC03LjU4MyA2LjU2MS04LjQ5IDcuMzg3LTguNzAyLjIzMy0uMDY1IDIuODI4LS4wNTYgNS43ODQuMDExIDUuODI3LjEzOCA2LjY0LjA5IDguNjItLjUgMi4yNC0uNjcgNC4wMzUtMS42NSA1LjUxNy0zLjAxNiAxLjEzNi0xLjA1NCAxLjEzNS0xLjAxNC4yMDctMS45NjItLjM1Ny0uMzgtLjc2Ny0uNzc3LS45MDItLjg5M3pcIixcbiAgICBmaWxsOiBcIiMwMDAwMzNcIlxuICB9KSk7XG59O1xuXG5leHBvcnRzLlBsYW5lID0gUGxhbmU7XG5QbGFuZS5wcm9wVHlwZXMgPSB7XG4gIHNlY29uZGFyeUNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG5QbGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlY29uZGFyeUNvbG9yOiBcImdyZXlcIixcbiAgY29sb3I6IFwiI0ZGQTUwMFwiLFxuICBsYWJlbDogXCJhc3luYy1sb2FkaW5nXCJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlB1ZmYgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgUHVmZiA9IGZ1bmN0aW9uIFB1ZmYocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICB2aWV3Qm94OiBcIjAgMCA0NCA0NFwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBzdHJva2VXaWR0aDogXCIyXCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMjJcIixcbiAgICBjeTogXCIyMlwiLFxuICAgIHI6IHByb3BzLnJhZGl1c1xuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgYmVnaW46IFwiMHNcIixcbiAgICBkdXI6IFwiMS44c1wiLFxuICAgIHZhbHVlczogXCIxOyAyMFwiLFxuICAgIGNhbGNNb2RlOiBcInNwbGluZVwiLFxuICAgIGtleVRpbWVzOiBcIjA7IDFcIixcbiAgICBrZXlTcGxpbmVzOiBcIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJzdHJva2VPcGFjaXR5XCIsXG4gICAgYmVnaW46IFwiMHNcIixcbiAgICBkdXI6IFwiMS44c1wiLFxuICAgIHZhbHVlczogXCIxOyAwXCIsXG4gICAgY2FsY01vZGU6IFwic3BsaW5lXCIsXG4gICAga2V5VGltZXM6IFwiMDsgMVwiLFxuICAgIGtleVNwbGluZXM6IFwiMC4zLCAwLjYxLCAwLjM1NSwgMVwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjIyXCIsXG4gICAgY3k6IFwiMjJcIixcbiAgICByOiBwcm9wcy5yYWRpdXNcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgIGJlZ2luOiBcIi0wLjlzXCIsXG4gICAgZHVyOiBcIjEuOHNcIixcbiAgICB2YWx1ZXM6IFwiMTsgMjBcIixcbiAgICBjYWxjTW9kZTogXCJzcGxpbmVcIixcbiAgICBrZXlUaW1lczogXCIwOyAxXCIsXG4gICAga2V5U3BsaW5lczogXCIwLjE2NSwgMC44NCwgMC40NCwgMVwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwic3Ryb2tlT3BhY2l0eVwiLFxuICAgIGJlZ2luOiBcIi0wLjlzXCIsXG4gICAgZHVyOiBcIjEuOHNcIixcbiAgICB2YWx1ZXM6IFwiMTsgMFwiLFxuICAgIGNhbGNNb2RlOiBcInNwbGluZVwiLFxuICAgIGtleVRpbWVzOiBcIjA7IDFcIixcbiAgICBrZXlTcGxpbmVzOiBcIjAuMywgMC42MSwgMC4zNTUsIDFcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpKSk7XG59O1xuXG5leHBvcnRzLlB1ZmYgPSBQdWZmO1xuUHVmZi5wcm9wVHlwZXMgPSB7XG4gIGhlaWdodDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICB3aWR0aDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBjb2xvcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICByYWRpdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlclxufTtcblB1ZmYuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6IDgwLFxuICB3aWR0aDogODAsXG4gIGNvbG9yOiBcImdyZWVuXCIsXG4gIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIixcbiAgcmFkaXVzOiAxXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5SZXZvbHZpbmdEb3QgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgUmV2b2x2aW5nRG90ID0gZnVuY3Rpb24gUmV2b2x2aW5nRG90KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICB2ZXJzaW9uOiBcIjEuMVwiLFxuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHg6IFwiMHB4XCIsXG4gICAgeTogXCIwcHhcIixcbiAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICBzdHJva2VXaWR0aDogXCI0XCIsXG4gICAgY3g6IFwiNTBcIixcbiAgICBjeTogXCI1MFwiLFxuICAgIHI6IHByb3BzLnJhZGl1cyArIDM4LFxuICAgIHN0eWxlOiB7XG4gICAgICBvcGFjaXR5OiAwLjVcbiAgICB9XG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBmaWxsOiBwcm9wcy5jb2xvcixcbiAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgIHN0cm9rZVdpZHRoOiBcIjNcIixcbiAgICBjeDogXCI4XCIsXG4gICAgY3k6IFwiNTRcIixcbiAgICByOiBwcm9wcy5yYWRpdXNcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgZHVyOiBcIjJzXCIsXG4gICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICBmcm9tOiBcIjAgNTAgNDhcIixcbiAgICB0bzogXCIzNjAgNTAgNTJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpKTtcbn07XG5cbmV4cG9ydHMuUmV2b2x2aW5nRG90ID0gUmV2b2x2aW5nRG90O1xuUmV2b2x2aW5nRG90LnByb3BUeXBlcyA9IHtcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJhZGl1czogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXG59O1xuUmV2b2x2aW5nRG90LmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVpZ2h0OiA4MCxcbiAgd2lkdGg6IDgwLFxuICBjb2xvcjogXCJncmVlblwiLFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCIsXG4gIHJhZGl1czogNlxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUmluZ3MgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgUmluZ3MgPSBmdW5jdGlvbiBSaW5ncyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgIHZpZXdCb3g6IFwiMCAwIDQ1IDQ1XCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMSAxKVwiLFxuICAgIHN0cm9rZVdpZHRoOiBcIjJcIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIyMlwiLFxuICAgIGN5OiBcIjIyXCIsXG4gICAgcjogcHJvcHMucmFkaXVzLFxuICAgIHN0cm9rZU9wYWNpdHk6IFwiMFwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcInJcIixcbiAgICBiZWdpbjogXCIxLjVzXCIsXG4gICAgZHVyOiBcIjNzXCIsXG4gICAgdmFsdWVzOiBcIjY7MjJcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcInN0cm9rZS1vcGFjaXR5XCIsXG4gICAgYmVnaW46IFwiMS41c1wiLFxuICAgIGR1cjogXCIzc1wiLFxuICAgIHZhbHVlczogXCIxOzBcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcInN0cm9rZS13aWR0aFwiLFxuICAgIGJlZ2luOiBcIjEuNXNcIixcbiAgICBkdXI6IFwiM3NcIixcbiAgICB2YWx1ZXM6IFwiMjswXCIsXG4gICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pKSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IFwiMjJcIixcbiAgICBjeTogXCIyMlwiLFxuICAgIHI6IHByb3BzLnJhZGl1cyxcbiAgICBzdHJva2VPcGFjaXR5OiBcIjBcIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgYmVnaW46IFwiM3NcIixcbiAgICBkdXI6IFwiM3NcIixcbiAgICB2YWx1ZXM6IFwiNjsyMlwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwic3Ryb2tlT3BhY2l0eVwiLFxuICAgIGJlZ2luOiBcIjNzXCIsXG4gICAgZHVyOiBcIjNzXCIsXG4gICAgdmFsdWVzOiBcIjE7MFwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwic3Ryb2tlV2lkdGhcIixcbiAgICBiZWdpbjogXCIzc1wiLFxuICAgIGR1cjogXCIzc1wiLFxuICAgIHZhbHVlczogXCIyOzBcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIyMlwiLFxuICAgIGN5OiBcIjIyXCIsXG4gICAgcjogcHJvcHMucmFkaXVzICsgMlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgYmVnaW46IFwiMHNcIixcbiAgICBkdXI6IFwiMS41c1wiLFxuICAgIHZhbHVlczogXCI2OzE7MjszOzQ7NTs2XCIsXG4gICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pKSkpO1xufTtcblxuZXhwb3J0cy5SaW5ncyA9IFJpbmdzO1xuUmluZ3MucHJvcFR5cGVzID0ge1xuICBoZWlnaHQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgd2lkdGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgY29sb3I6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcmFkaXVzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJcbn07XG5SaW5ncy5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogODAsXG4gIHdpZHRoOiA4MCxcbiAgY29sb3I6IFwiZ3JlZW5cIixcbiAgcmFkaXVzOiA2LFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRhaWxTcGluID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIFRhaWxTcGluID0gZnVuY3Rpb24gVGFpbFNwaW4ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICB2aWV3Qm94OiBcIjAgMCAzOCAzOFwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIsIG51bGwsIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJsaW5lYXJHcmFkaWVudFwiLCB7XG4gICAgeDE6IFwiOC4wNDIlXCIsXG4gICAgeTE6IFwiMCVcIixcbiAgICB4MjogXCI2NS42ODIlXCIsXG4gICAgeTI6IFwiMjMuODY1JVwiLFxuICAgIGlkOiBcImFcIlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7XG4gICAgc3RvcENvbG9yOiBwcm9wcy5jb2xvcixcbiAgICBzdG9wT3BhY2l0eTogXCIwXCIsXG4gICAgb2Zmc2V0OiBcIjAlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdG9wXCIsIHtcbiAgICBzdG9wQ29sb3I6IHByb3BzLmNvbG9yLFxuICAgIHN0b3BPcGFjaXR5OiBcIi42MzFcIixcbiAgICBvZmZzZXQ6IFwiNjMuMTQ2JVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7XG4gICAgc3RvcENvbG9yOiBwcm9wcy5jb2xvcixcbiAgICBvZmZzZXQ6IFwiMTAwJVwiXG4gIH0pKSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMSAxKVwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFwiLFxuICAgIGlkOiBcIk92YWwtMlwiLFxuICAgIHN0cm9rZTogcHJvcHMuY29sb3IsXG4gICAgc3Ryb2tlV2lkdGg6IFwiMlwiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlVHJhbnNmb3JtXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgZnJvbTogXCIwIDE4IDE4XCIsXG4gICAgdG86IFwiMzYwIDE4IDE4XCIsXG4gICAgZHVyOiBcIjAuOXNcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBmaWxsOiBcIiNmZmZcIixcbiAgICBjeDogXCIzNlwiLFxuICAgIGN5OiBcIjE4XCIsXG4gICAgcjogcHJvcHMucmFkaXVzXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlVHJhbnNmb3JtXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgZnJvbTogXCIwIDE4IDE4XCIsXG4gICAgdG86IFwiMzYwIDE4IDE4XCIsXG4gICAgZHVyOiBcIjAuOXNcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpKSkpO1xufTtcblxuZXhwb3J0cy5UYWlsU3BpbiA9IFRhaWxTcGluO1xuVGFpbFNwaW4ucHJvcFR5cGVzID0ge1xuICBoZWlnaHQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgd2lkdGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgY29sb3I6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcmFkaXVzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXJcbn07XG5UYWlsU3Bpbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogODAsXG4gIHdpZHRoOiA4MCxcbiAgY29sb3I6IFwiZ3JlZW5cIixcbiAgcmFkaXVzOiAxLFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRocmVlRG90cyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBUaHJlZURvdHMgPSBmdW5jdGlvbiBUaHJlZURvdHMocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICB2aWV3Qm94OiBcIjAgMCAxMjAgMzBcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxNVwiLFxuICAgIGN5OiBcIjE1XCIsXG4gICAgcjogcHJvcHMucmFkaXVzICsgNlxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgZnJvbTogXCIxNVwiLFxuICAgIHRvOiBcIjE1XCIsXG4gICAgYmVnaW46IFwiMHNcIixcbiAgICBkdXI6IFwiMC44c1wiLFxuICAgIHZhbHVlczogXCIxNTs5OzE1XCIsXG4gICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsT3BhY2l0eVwiLFxuICAgIGZyb206IFwiMVwiLFxuICAgIHRvOiBcIjFcIixcbiAgICBiZWdpbjogXCIwc1wiLFxuICAgIGR1cjogXCIwLjhzXCIsXG4gICAgdmFsdWVzOiBcIjE7LjU7MVwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGN4OiBcIjYwXCIsXG4gICAgY3k6IFwiMTVcIixcbiAgICByOiBwcm9wcy5yYWRpdXMsXG4gICAgYXR0cmlidXRlTmFtZTogXCJmaWxsT3BhY2l0eVwiLFxuICAgIGZyb206IFwiMVwiLFxuICAgIHRvOiBcIjAuM1wiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcInJcIixcbiAgICBmcm9tOiBcIjlcIixcbiAgICB0bzogXCI5XCIsXG4gICAgYmVnaW46IFwiMHNcIixcbiAgICBkdXI6IFwiMC44c1wiLFxuICAgIHZhbHVlczogXCI5OzE1OzlcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICBhdHRyaWJ1dGVOYW1lOiBcImZpbGxPcGFjaXR5XCIsXG4gICAgZnJvbTogXCIwLjVcIixcbiAgICB0bzogXCIwLjVcIixcbiAgICBiZWdpbjogXCIwc1wiLFxuICAgIGR1cjogXCIwLjhzXCIsXG4gICAgdmFsdWVzOiBcIi41OzE7LjVcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgICBjeDogXCIxMDVcIixcbiAgICBjeTogXCIxNVwiLFxuICAgIHI6IHByb3BzLnJhZGl1cyArIDZcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgIGZyb206IFwiMTVcIixcbiAgICB0bzogXCIxNVwiLFxuICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgZHVyOiBcIjAuOHNcIixcbiAgICB2YWx1ZXM6IFwiMTU7OTsxNVwiLFxuICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbE9wYWNpdHlcIixcbiAgICBmcm9tOiBcIjFcIixcbiAgICB0bzogXCIxXCIsXG4gICAgYmVnaW46IFwiMHNcIixcbiAgICBkdXI6IFwiMC44c1wiLFxuICAgIHZhbHVlczogXCIxOy41OzFcIixcbiAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpKTtcbn07XG5cbmV4cG9ydHMuVGhyZWVEb3RzID0gVGhyZWVEb3RzO1xuVGhyZWVEb3RzLnByb3BUeXBlcyA9IHtcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHJhZGl1czogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXG59O1xuVGhyZWVEb3RzLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVpZ2h0OiA4MCxcbiAgd2lkdGg6IDgwLFxuICBjb2xvcjogXCJncmVlblwiLFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCIsXG4gIHJhZGl1czogOVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJpYW5nbGUgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgVHJpYW5nbGUgPSBmdW5jdGlvbiBUcmlhbmdsZShwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXItbG9hZGVyLXN2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGlkOiBcInRyaWFuZ2xlXCIsXG4gICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgIHZpZXdCb3g6IFwiLTMgLTQgMzkgMzlcIixcbiAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInBvbHlnb25cIiwge1xuICAgIGZpbGw6IFwidHJhbnNwYXJlbnRcIixcbiAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgIHN0cm9rZVdpZHRoOiBcIjFcIixcbiAgICBwb2ludHM6IFwiMTYsMCAzMiwzMiAwLDMyXCJcbiAgfSkpKTtcbn07XG5cbmV4cG9ydHMuVHJpYW5nbGUgPSBUcmlhbmdsZTtcblRyaWFuZ2xlLnByb3BUeXBlcyA9IHtcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZywgX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGxhYmVsOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG5UcmlhbmdsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogODAsXG4gIHdpZHRoOiA4MCxcbiAgY29sb3I6IFwiZ3JlZW5cIixcbiAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XYXRjaCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBXYXRjaCA9IGZ1bmN0aW9uIFdhdGNoKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgdmVyc2lvbjogXCIxLjFcIixcbiAgICBpZDogXCJMMlwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgeDogXCIwcHhcIixcbiAgICB5OiBcIjBweFwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDEwMCAxMDBcIixcbiAgICBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgMTAwIDEwMFwiLFxuICAgIHhtbFNwYWNlOiBcInByZXNlcnZlXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogcHJvcHMuY29sb3IsXG4gICAgc3Ryb2tlV2lkdGg6IFwiNFwiLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IFwiMTBcIixcbiAgICBjeDogXCI1MFwiLFxuICAgIGN5OiBcIjUwXCIsXG4gICAgcjogcHJvcHMucmFkaXVzXG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZTogcHJvcHMuY29sb3IsXG4gICAgc3Ryb2tlV2lkdGg6IFwiNFwiLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IFwiMTBcIixcbiAgICB4MTogXCI1MFwiLFxuICAgIHkxOiBcIjUwXCIsXG4gICAgeDI6IFwiODVcIixcbiAgICB5MjogXCI1MC41XCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgZHVyOiBcIjJzXCIsXG4gICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICBmcm9tOiBcIjAgNTAgNTBcIixcbiAgICB0bzogXCIzNjAgNTAgNTBcIixcbiAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwibGluZVwiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgIHN0cm9rZTogcHJvcHMuY29sb3IsXG4gICAgc3Ryb2tlV2lkdGg6IFwiNFwiLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IFwiMTBcIixcbiAgICB4MTogXCI1MFwiLFxuICAgIHkxOiBcIjUwXCIsXG4gICAgeDI6IFwiNDkuNVwiLFxuICAgIHkyOiBcIjc0XCJcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgZHVyOiBcIjE1c1wiLFxuICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgZnJvbTogXCIwIDUwIDUwXCIsXG4gICAgdG86IFwiMzYwIDUwIDUwXCIsXG4gICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gIH0pKSk7XG59O1xuXG5leHBvcnRzLldhdGNoID0gV2F0Y2g7XG5XYXRjaC5wcm9wVHlwZXMgPSB7XG4gIGhlaWdodDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICB3aWR0aDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBjb2xvcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBsYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICByYWRpdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlclxufTtcbldhdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVpZ2h0OiA4MCxcbiAgd2lkdGg6IDgwLFxuICBjb2xvcjogXCJncmVlblwiLFxuICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCIsXG4gIHJhZGl1czogNDhcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNwaW5uZXIgPSB2b2lkIDA7XG5cbnZhciBfQ2lyY2xlcyA9IHJlcXVpcmUoXCIuL0NpcmNsZXNcIik7XG5cbnZhciBfV2F0Y2ggPSByZXF1aXJlKFwiLi9XYXRjaFwiKTtcblxudmFyIF9BdWRpbyA9IHJlcXVpcmUoXCIuL0F1ZGlvXCIpO1xuXG52YXIgX0JhbGxUcmlhbmdsZSA9IHJlcXVpcmUoXCIuL0JhbGxUcmlhbmdsZVwiKTtcblxudmFyIF9CYXJzID0gcmVxdWlyZShcIi4vQmFyc1wiKTtcblxudmFyIF9DcmFkbGVMb2FkZXIgPSByZXF1aXJlKFwiLi9DcmFkbGVMb2FkZXJcIik7XG5cbnZhciBfR3JpZCA9IHJlcXVpcmUoXCIuL0dyaWRcIik7XG5cbnZhciBfSGVhcnRzID0gcmVxdWlyZShcIi4vSGVhcnRzXCIpO1xuXG52YXIgX011dGF0aW5nRG90cyA9IHJlcXVpcmUoXCIuL011dGF0aW5nRG90c1wiKTtcblxudmFyIF9PdmFsID0gcmVxdWlyZShcIi4vT3ZhbFwiKTtcblxudmFyIF9QbGFuZSA9IHJlcXVpcmUoXCIuL1BsYW5lXCIpO1xuXG52YXIgX1B1ZmYgPSByZXF1aXJlKFwiLi9QdWZmXCIpO1xuXG52YXIgX1Jldm9sdmluZ0RvdCA9IHJlcXVpcmUoXCIuL1Jldm9sdmluZ0RvdFwiKTtcblxudmFyIF9SaW5ncyA9IHJlcXVpcmUoXCIuL1JpbmdzXCIpO1xuXG52YXIgX1RhaWxTcGluID0gcmVxdWlyZShcIi4vVGFpbFNwaW5cIik7XG5cbnZhciBfVGhyZWVEb3RzID0gcmVxdWlyZShcIi4vVGhyZWVEb3RzXCIpO1xuXG52YXIgX1RyaWFuZ2xlID0gcmVxdWlyZShcIi4vVHJpYW5nbGVcIik7XG5cbnZhciBTcGlubmVyID0ge1xuICBDaXJjbGVzOiBfQ2lyY2xlcy5DaXJjbGVzLFxuICBBdWRpbzogX0F1ZGlvLkF1ZGlvLFxuICBCYWxsVHJpYW5nbGU6IF9CYWxsVHJpYW5nbGUuQmFsbFRyaWFuZ2xlLFxuICBCYXJzOiBfQmFycy5CYXJzLFxuICBDcmFkbGVMb2FkZXI6IF9DcmFkbGVMb2FkZXIuQ3JhZGxlTG9hZGVyLFxuICBHcmlkOiBfR3JpZC5HcmlkLFxuICBIZWFydHM6IF9IZWFydHMuSGVhcnRzLFxuICBNdXRhdGluZ0RvdHM6IF9NdXRhdGluZ0RvdHMuTXV0YXRpbmdEb3RzLFxuICBPdmFsOiBfT3ZhbC5PdmFsLFxuICBQbGFuZTogX1BsYW5lLlBsYW5lLFxuICBQdWZmOiBfUHVmZi5QdWZmLFxuICBSZXZvbHZpbmdEb3Q6IF9SZXZvbHZpbmdEb3QuUmV2b2x2aW5nRG90LFxuICBSaW5nczogX1JpbmdzLlJpbmdzLFxuICBUYWlsU3BpbjogX1RhaWxTcGluLlRhaWxTcGluLFxuICBUaHJlZURvdHM6IF9UaHJlZURvdHMuVGhyZWVEb3RzLFxuICBUcmlhbmdsZTogX1RyaWFuZ2xlLlRyaWFuZ2xlLFxuICBXYXRjaDogX1dhdGNoLldhdGNoXG59O1xuZXhwb3J0cy5TcGlubmVyID0gU3Bpbm5lcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJ1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbC9Nb2RhbCdcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dFByb3ZpZGVyJ1xuaW1wb3J0IHsgU0lHTl9VUCB9IGZyb20gJy4uL2Fwb2xsby9tdXRhdGlvbnMnXG5pbXBvcnQgeyBVc2VyLCBTaWdudXBBcmdzIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyLjVyZW0gMDtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuXG4gIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuZW1haWxfc2VjdGlvbl9sYWJlbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGVhbH07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuYFxuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlcjogMC41cHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZWFsfTtcbiAgYm9yZGVyLXJhZGl1czogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJhZGl1c307XG4gIG1hcmdpbjogMC4ycmVtIDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAycHggMnB4IDRweCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JleX07XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZENvbG9ycy5tYWlufTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmRhcmtUZWFsfTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkRXJyb3IgPSBzdHlsZWQucGBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEuM3JlbTtcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFN3aXRjaEFjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEluZm9ybSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC4ycmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZWFsfTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTb2NpYWwgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgcGFkZGluZzogMC4ycmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIHBhZGRpbmc6IDQlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZmJCbHVlfTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5mYkRhcmtCbHVlfTtcbiAgICB9XG4gIH1cblxuICAuZ29vZ2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdvb2dsZVJlZH07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ29vZ2xlRGFya1JlZH07XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBEaXZpZGVyID0gc3R5bGVkLmhyYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JleX07XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgU2lnblVwOiBSZWFjdC5GQzxQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgaGFuZGxlQXV0aEFjdGlvbiwgc2V0QXV0aFVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTx7XG4gICAgdXNlcm5hbWU6IHN0cmluZ1xuICAgIGVtYWlsOiBzdHJpbmdcbiAgICBwYXNzd29yZDogc3RyaW5nXG4gIH0+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IFtzaWdudXAsIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbjxcbiAgICB7IHNpZ251cDogVXNlciB9LFxuICAgIFNpZ251cEFyZ3NcbiAgPihTSUdOX1VQKVxuXG4gIGNvbnN0IHN1Ym1pdFNpZ251cCA9IGhhbmRsZVN1Ym1pdChhc3luYyAoeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWdudXAoe1xuICAgICAgICB2YXJpYWJsZXM6IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9LFxuICAgICAgfSlcblxuICAgICAgaWYgKHJlc3BvbnNlPy5kYXRhPy5zaWdudXApIHtcbiAgICAgICAgY29uc3QgeyBzaWdudXAgfSA9IHJlc3BvbnNlLmRhdGFcblxuICAgICAgICBpZiAoc2lnbnVwKSB7XG4gICAgICAgICAgLy8gQ2xvc2UgZm9ybVxuICAgICAgICAgIGhhbmRsZUF1dGhBY3Rpb24oJ2Nsb3NlJylcblxuICAgICAgICAgIC8vIFNldCBsb2dnZWRJblVzZXIgaW4gY29udGV4dCBhcGlcbiAgICAgICAgICBzZXRBdXRoVXNlcihzaWdudXApXG5cbiAgICAgICAgICAvLyBQdXNoIHVzZXIgdG8gdGhlaXIgZGFzaGJvYXJkXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEF1dGhVc2VyKG51bGwpXG4gICAgfVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcpXG4gIHJldHVybiAoXG4gICAgPE1vZGFsPlxuICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgPGgyPlNpZ24gVXA8L2gyPlxuICAgICAgICA8L0hlYWRlcj5cblxuICAgICAgICA8U3R5bGVkU29jaWFsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmYWNlYm9vayc+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2ZhY2Vib29rLWYnXX0gc2l6ZT0nbGcnIC8+XG4gICAgICAgICAgICA8YT5TaWduIGluIHdpdGggRmFjZWJvb2s8L2E+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2dvb2dsZSc+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2dvb2dsZSddfSAvPlxuICAgICAgICAgICAgPGE+U2lnbiBpbiB3aXRoIEdvb2dsZTwvYT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9TdHlsZWRTb2NpYWw+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8U3R5bGVkRm9ybSBvblN1Ym1pdD17c3VibWl0U2lnbnVwfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2VtYWlsX3NlY3Rpb25fbGFiZWwnPm9yIHNpZ24gdXAgd2l0aCBhbiBlbWFpbDwvcD5cbiAgICAgICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICBpZD0ndXNlcm5hbWUnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIHVzZXJuYW1lJ1xuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J25ldy1wYXNzd29yZCdcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigndXNlcm5hbWUnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0lucHV0Q29udGFpbmVyPlxuXG4gICAgICAgICAgPElucHV0Q29udGFpbmVyPlxuICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cblxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIGVtYWlsJ1xuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J25ldy1wYXNzd29yZCdcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcignZW1haWwnKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvSW5wdXRDb250YWluZXI+XG5cbiAgICAgICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuXG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICBpZD0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIHBhc3N3b3JkJ1xuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCdwYXNzd29yZCcpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgIDwvSW5wdXRDb250YWluZXI+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgIDxMb2FkZXJcbiAgICAgICAgICAgICAgICB0eXBlPSdPdmFsJ1xuICAgICAgICAgICAgICAgIGNvbG9yPSd3aGl0ZSdcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICB0aW1lb3V0PXszMDAwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICdTdWJtaXQnXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxTdHlsZWRFcnJvcj5cbiAgICAgICAgICAgICAge2Vycm9yLmdyYXBoUUxFcnJvcnNbMF0/Lm1lc3NhZ2UgfHwgJ1NvcnJ5LCBzb21ldGhpbmcgd2VudCB3cm9uZyd9XG4gICAgICAgICAgICA8L1N0eWxlZEVycm9yPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3R5bGVkRm9ybT5cbiAgICAgICAgPFN0eWxlZFN3aXRjaEFjdGlvbj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhY2NvdW50P3snICd9XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGhBY3Rpb24oJ3NpZ25pbicpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBzaWduIGluXG4gICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgIGluc3RlYWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L1N0eWxlZFN3aXRjaEFjdGlvbj5cbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgICA8L01vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==