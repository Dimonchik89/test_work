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
exports.id = "pages/api/product/[id]";
exports.ids = ["pages/api/product/[id]"];
exports.modules = {

/***/ "(api)/./src/pages/api/product/[id].js":
/*!***************************************!*\
  !*** ./src/pages/api/product/[id].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db.json */ \"(api)/./db.json\");\n\nconst getProduct = (req, res)=>{\n    const { id  } = req.query;\n    const product = _db_json__WEBPACK_IMPORTED_MODULE_0__.find((item)=>item.id == id);\n    return res.json(product);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProduct);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQyxNQUFNQyxhQUFhLENBQUNDLEtBQUtDLE1BQVE7SUFDN0IsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0YsSUFBSUcsS0FBSztJQUN4QixNQUFNQyxVQUFVTiwwQ0FBYSxDQUFDUSxDQUFBQSxPQUFRQSxLQUFLSixFQUFFLElBQUlBO0lBQ2pELE9BQU9ELElBQUlNLElBQUksQ0FBQ0g7QUFDcEI7QUFDQSxpRUFBZUwsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvcHJvZHVjdC9baWRdLmpzPzY3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi8uLi8uLi8uLi9kYi5qc29uXCI7XG5cbmNvbnN0IGdldFByb2R1Y3QgPSAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKVxuICAgIHJldHVybiByZXMuanNvbihwcm9kdWN0KVxufVxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvZHVjdCJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImdldFByb2R1Y3QiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/product/[id].js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/product/[id].js"));
module.exports = __webpack_exports__;

})();