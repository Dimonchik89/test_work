"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "(api)/./src/pages/api/products.js":
/*!***********************************!*\
  !*** ./src/pages/api/products.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db.json */ \"(api)/./db.json\");\n\nconst getAllProduct = (req, res)=>{\n    res.statusCode = 200;\n    res.setHeader(\"Content-Type\", \"application/json\");\n    const allProducts = _db_json__WEBPACK_IMPORTED_MODULE_0__;\n    return res.json(allProducts);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllProduct);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBRXhDLE1BQU1DLGdCQUFnQixDQUFDQyxLQUFLQyxNQUFRO0lBQ2hDQSxJQUFJQyxVQUFVLEdBQUc7SUFDakJELElBQUlFLFNBQVMsQ0FBQyxnQkFBZ0I7SUFDOUIsTUFBTUMsY0FBY04scUNBQVFBO0lBQzVCLE9BQU9HLElBQUlJLElBQUksQ0FBQ0Q7QUFDcEI7QUFFQSxpRUFBZUwsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvcHJvZHVjdHMuanM/MzUwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uLy4uL2RiLmpzb25cIjtcblxuY29uc3QgZ2V0QWxsUHJvZHVjdCA9IChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXG4gICAgY29uc3QgYWxsUHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICByZXR1cm4gcmVzLmpzb24oYWxsUHJvZHVjdHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbFByb2R1Y3Q7Il0sIm5hbWVzIjpbInByb2R1Y3RzIiwiZ2V0QWxsUHJvZHVjdCIsInJlcSIsInJlcyIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJhbGxQcm9kdWN0cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/products.js\n");

/***/ }),

/***/ "(api)/./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Banana bread","description":"This banana bread has been the most popular recipe on Simply Recipes for over 10 years. Thousands of people make it every day. Why? Because it really is the best banana bread recipe, period. You can mix everything in one bowl, you can vary the amount of sugar or bananas.","image":"static/banana-bread.jpg","pref_time":"10","bake_time":["1","1,15"],"total_time":"1,10","yield":"1 loaf, 12 generousserving"},{"id":2,"title":"Bread","description":"Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures\' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture.","image":"static/bread.jpg","pref_time":"10","bake_time":["1","1,15"],"total_time":"1,10","yield":"1 loaf, 12 generousserving"},{"id":3,"title":"bagel","description":"A bagel is a bread roll originating in the Jewish communities of Poland. It is traditionally shaped by hand into a roughly hand-sized ring from yeasted wheat dough that is first boiled for a short time in water and then baked. The result is a dense, chewy, doughy interior with a browned and sometimes crisp exterior.","image":"static/bagel.jpeg","pref_time":"10","bake_time":["1","1,15"],"total_time":"1,10","yield":"1 loaf, 12 generousserving"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/products.js"));
module.exports = __webpack_exports__;

})();