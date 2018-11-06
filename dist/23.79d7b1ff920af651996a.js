(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./components/get_ios_app/get_ios_app.jsx":
/*!************************************************!*\
  !*** ./components/get_ios_app/get_ios_app.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GetIosApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var utils_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/url */ \"./utils/url.jsx\");\n/* harmony import */ var images_app_store_button_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/app-store-button.png */ \"./images/app-store-button.png\");\n/* harmony import */ var images_app_store_button_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(images_app_store_button_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var images_iphone_6_mockup_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! images/iphone-6-mockup.png */ \"./images/iphone-6-mockup.png\");\n/* harmony import */ var images_iphone_6_mockup_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(images_iphone_6_mockup_png__WEBPACK_IMPORTED_MODULE_6__);\n// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.\n// See LICENSE.txt for license information.\n\n\n\n\n\n\n\nfunction GetIosApp(_ref) {\n  var iosAppDownloadLink = _ref.iosAppDownloadLink;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"get-app get-ios-app\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"get-app__header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], {\n    id: \"get_app.iosHeader\",\n    defaultMessage: \"Mattermost works best if you switch to our iPhone app\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"get-ios-app__app-store-link\",\n    href: Object(utils_url__WEBPACK_IMPORTED_MODULE_4__[\"useSafeUrl\"])(iosAppDownloadLink),\n    rel: \"noopener noreferrer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: images_app_store_button_png__WEBPACK_IMPORTED_MODULE_5___default.a\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"get-app__screenshot\",\n    src: images_iphone_6_mockup_png__WEBPACK_IMPORTED_MODULE_6___default.a\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"get-ios-app__already-have-it\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], {\n    id: \"get_app.alreadyHaveIt\",\n    defaultMessage: \"Already have it?\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"btn btn-primary get-ios-app__open-mattermost\",\n    href: \"mattermost://\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], {\n    id: \"get_app.openMattermost\",\n    defaultMessage: \"Open Mattermost\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"get-app__continue-with-browser\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], {\n    id: \"get_app.continueWithBrowser\",\n    defaultMessage: \"Or {link}\",\n    values: {\n      link: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], {\n        id: \"get_app.continueWithBrowserLink\",\n        defaultMessage: \"continue with browser\"\n      }))\n    }\n  })));\n}\nGetIosApp.propTypes = {\n  iosAppDownloadLink: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldF9pb3NfYXBwL2dldF9pb3NfYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2V0X2lvc19hcHAvZ2V0X2lvc19hcHAuanN4PzZiYWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQgTWF0dGVybW9zdCwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU2VlIExJQ0VOU0UudHh0IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge3VzZVNhZmVVcmx9IGZyb20gJ3V0aWxzL3VybCc7XG5pbXBvcnQgQXBwU3RvcmVCdXR0b24gZnJvbSAnaW1hZ2VzL2FwcC1zdG9yZS1idXR0b24ucG5nJztcbmltcG9ydCBJUGhvbmU2TW9ja3VwIGZyb20gJ2ltYWdlcy9pcGhvbmUtNi1tb2NrdXAucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0SW9zQXBwKHtpb3NBcHBEb3dubG9hZExpbmt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dldC1hcHAgZ2V0LWlvcy1hcHAnPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZ2V0LWFwcF9faGVhZGVyJz5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZD0nZ2V0X2FwcC5pb3NIZWFkZXInXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSdNYXR0ZXJtb3N0IHdvcmtzIGJlc3QgaWYgeW91IHN3aXRjaCB0byBvdXIgaVBob25lIGFwcCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ2V0LWlvcy1hcHBfX2FwcC1zdG9yZS1saW5rJ1xuICAgICAgICAgICAgICAgIGhyZWY9e3VzZVNhZmVVcmwoaW9zQXBwRG93bmxvYWRMaW5rKX1cbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0FwcFN0b3JlQnV0dG9ufS8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdnZXQtYXBwX19zY3JlZW5zaG90J1xuICAgICAgICAgICAgICAgIHNyYz17SVBob25lNk1vY2t1cH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdnZXQtaW9zLWFwcF9fYWxyZWFkeS1oYXZlLWl0Jz5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZD0nZ2V0X2FwcC5hbHJlYWR5SGF2ZUl0J1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nQWxyZWFkeSBoYXZlIGl0PydcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnkgZ2V0LWlvcy1hcHBfX29wZW4tbWF0dGVybW9zdCdcbiAgICAgICAgICAgICAgICBocmVmPSdtYXR0ZXJtb3N0Oi8vJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPSdnZXRfYXBwLm9wZW5NYXR0ZXJtb3N0J1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nT3BlbiBNYXR0ZXJtb3N0J1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dldC1hcHBfX2NvbnRpbnVlLXdpdGgtYnJvd3Nlcic+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWQ9J2dldF9hcHAuY29udGludWVXaXRoQnJvd3NlcidcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J09yIHtsaW5rfSdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2dldF9hcHAuY29udGludWVXaXRoQnJvd3NlckxpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nY29udGludWUgd2l0aCBicm93c2VyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuR2V0SW9zQXBwLnByb3BUeXBlcyA9IHtcbiAgICBpb3NBcHBEb3dubG9hZExpbms6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFIQTtBQUhBO0FBaUJBO0FBRUE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/get_ios_app/get_ios_app.jsx\n");

/***/ }),

/***/ "./images/app-store-button.png":
/*!*************************************!*\
  !*** ./images/app-store-button.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"files/505c49d5d174abb66fdde63b21d599a8.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbWFnZXMvYXBwLXN0b3JlLWJ1dHRvbi5wbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZXMvYXBwLXN0b3JlLWJ1dHRvbi5wbmc/MmE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmaWxlcy81MDVjNDlkNWQxNzRhYmI2NmZkZGU2M2IyMWQ1OTlhOC5wbmdcIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./images/app-store-button.png\n");

/***/ }),

/***/ "./images/iphone-6-mockup.png":
/*!************************************!*\
  !*** ./images/iphone-6-mockup.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"files/fabc8183ff4619599dacbafce858e1f4.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbWFnZXMvaXBob25lLTYtbW9ja3VwLnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ltYWdlcy9pcGhvbmUtNi1tb2NrdXAucG5nPzZiNWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmlsZXMvZmFiYzgxODNmZjQ2MTk1OTlkYWNiYWZjZTg1OGUxZjQucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./images/iphone-6-mockup.png\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./components/get_ios_app/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./components/get_ios_app/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ \"./node_modules/mattermost-redux/selectors/entities/general.js\");\n/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _get_ios_app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_ios_app.jsx */ \"./components/get_ios_app/get_ios_app.jsx\");\n// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.\n// See LICENSE.txt for license information.\n\n\n\n\nfunction mapStateToProps(state) {\n  var config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_1__[\"getConfig\"])(state);\n  var iosAppDownloadLink = config.IosAppDownloadLink;\n  return {\n    iosAppDownloadLink: iosAppDownloadLink\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps)(_get_ios_app_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9jb21wb25lbnRzL2dldF9pb3NfYXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nZXRfaW9zX2FwcC9pbmRleC5qcz85N2EwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50IE1hdHRlcm1vc3QsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNlZSBMSUNFTlNFLnR4dCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2dldENvbmZpZ30gZnJvbSAnbWF0dGVybW9zdC1yZWR1eC9zZWxlY3RvcnMvZW50aXRpZXMvZ2VuZXJhbCc7XG5cbmltcG9ydCBHZXRJb3NBcHAgZnJvbSAnLi9nZXRfaW9zX2FwcC5qc3gnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoc3RhdGUpO1xuICAgIGNvbnN0IGlvc0FwcERvd25sb2FkTGluayA9IGNvbmZpZy5Jb3NBcHBEb3dubG9hZExpbms7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpb3NBcHBEb3dubG9hZExpbmssXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEdldElvc0FwcCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./components/get_ios_app/index.js\n");

/***/ })

}]);