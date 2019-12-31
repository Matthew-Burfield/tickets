webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
      'If you don’t need unpredictable IDs, you can use `nanoid/non-secure`. ' +
      'For secure ID install `expo-random` locally and use `nanoid/async`.'
    )
  }
  if (typeof self === 'undefined' || (!self.crypto && !self.msCrypto)) {
    throw new Error(
      'Your browser does not have secure random generator. ' +
      'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

var crypto = self.crypto || self.msCrypto

/*
 * This alphabet uses a-z A-Z 0-9 _- symbols.
 * Symbols order was changed for better gzip compression.
 */
var url = 'QLUint8ARdomValuesObj0h6345-79BCrypgJzHKTNYDSMkXPZ_FfG1WcqvwxEI2'

module.exports = function (size) {
  size = size || 21
  var id = ''
  var bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    id += url[bytes[size] & 63]
  }
  return id
}


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_12__);










var _jsxFileName = "/Users/matthewburfield/Development/tickets/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





var reducer = function reducer(state, action) {
  switch (action.type) {
    case "set-current":
      {
        return Object(immer__WEBPACK_IMPORTED_MODULE_11__["produce"])(state, function (draft) {
          draft.currentTodo = action.payload;
        });
      }

    case "add":
      {
        return Object(immer__WEBPACK_IMPORTED_MODULE_11__["produce"])(state, function (draft) {
          draft.todos.push(action.payload);
        });
      }

    case "update":
      {
        var todoIndex = state.todos.findIndex(function (todo) {
          return todo.id === action.payload.id;
        });
        if (todoIndex === -1) return state;
        return Object(immer__WEBPACK_IMPORTED_MODULE_11__["produce"])(state, function (draft) {
          draft.todos[todoIndex] = _objectSpread({}, action.payload);
        });
      }

    case "delete":
      {
        var _todoIndex = state.todos.findIndex(function (todo) {
          return todo.id === action.payload.id;
        });

        if (_todoIndex === -1) return state;
        return Object(immer__WEBPACK_IMPORTED_MODULE_11__["produce"])(state, function (draft) {
          draft.todos.splice(_todoIndex, 1);
        });
      }

    default:
      {
        throw new Error("Unsupported action ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(action)));
      }
  }
};

var App = function App() {
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_10__["useReducer"](reducer, {
    currentTodo: "",
    todos: []
  }),
      _React$useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var add = function add() {
    dispatch({
      type: "add",
      payload: {
        id: nanoid__WEBPACK_IMPORTED_MODULE_12___default()(),
        name: name.currentTodo,
        completed: false,
        createdAt: "".concat(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default()())
      }
    });
    dispatch({
      type: "set-current",
      payload: ""
    });
  };

  var edit = function edit(todo) {
    dispatch({
      type: "update",
      payload: todo
    });
  };

  var del = function del(todo) {
    dispatch({
      type: "delete",
      payload: todo
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "To Do List")), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      add(state.currentTodo);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    value: state.currentTodo,
    onChange: function onChange(event) {
      dispatch({
        type: "set-current",
        payload: event.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Add")), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, state.todos.map(function (todo) {
    return __jsx("li", {
      key: todo.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      value: todo.name,
      onChange: function onChange(event) {
        edit(_objectSpread({}, todo, {
          name: event.target.value
        }));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("button", {
      onClick: function onClick() {
        del(todo);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Delete"));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.efb9d0cc934ab25269ce.hot-update.js.map