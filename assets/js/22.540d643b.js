(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "GyJ5":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoboWikiFeedbackForm.vue?vue&type=style&index=0&id=35272c72&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "N/jY":
/*!*************************************************!*\
  !*** ./src/components/RoboWikiFeedbackForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RoboWikiFeedbackForm_vue_vue_type_template_id_35272c72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoboWikiFeedbackForm.vue?vue&type=template&id=35272c72&scoped=true& */ \"mfxs\");\n/* harmony import */ var _RoboWikiFeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoboWikiFeedbackForm.vue?vue&type=script&lang=js& */ \"usLH\");\n/* empty/unused harmony star reexport *//* harmony import */ var _RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_35272c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoboWikiFeedbackForm.vue?vue&type=style&index=0&id=35272c72&scoped=true&lang=css& */ \"jaMw\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _RoboWikiFeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _RoboWikiFeedbackForm_vue_vue_type_template_id_35272c72_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _RoboWikiFeedbackForm_vue_vue_type_template_id_35272c72_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"35272c72\",\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?");

/***/ }),

/***/ "Ve8W":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoboWikiFeedbackForm.vue?vue&type=template&id=35272c72&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"robo-wiki-feedback-form__wrapper\"},[_c('div',{staticClass:\"robo-wiki-feedback-form__header\"},[_c('div',[(_vm.$store.state.currentReaction === _vm.text)?_c('span',{staticClass:\"robo-wiki-feedback-form__check\"}):_vm._e(),_c('h3',[_vm._v(_vm._s(_vm.$store.state.currentReaction))])]),_c('span',{staticClass:\"robo-wiki-feedback-form__close\",attrs:{\"tabindex\":\"0\"},on:{\"click\":function($event){return _vm.$emit('closeForm')}}},[_c('font-awesome-icon',{attrs:{\"icon\":\"fa-solid fa-xmark\",\"aria-hidden\":\"true\"}})],1)]),(_vm.result !== 'success' && _vm.$store.state.currentReaction === _vm.text)?_c('gsp-form',{staticClass:\"robo-wiki-feedback-form__form\",class:_vm.result,attrs:{\"gscriptID\":_vm.gscript,\"siteKey\":_vm.siteKey}},[_c('div',[_c('input',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.email),expression:\"email\"}],attrs:{\"type\":\"email\",\"placeholder\":\"Your email\",\"required\":\"\",\"data-gsp-name\":\"Email (optional)\",\"data-gsp-data\":_vm.email},domProps:{\"value\":(_vm.email)},on:{\"input\":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_c('textarea',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.comment),expression:\"comment\"}],attrs:{\"type\":\"text\",\"placeholder\":\"Your comment\",\"data-gsp-name\":\"Feedback (optional)\",\"data-gsp-data\":_vm.comment},domProps:{\"value\":(_vm.comment)},on:{\"input\":function($event){if($event.target.composing){ return; }_vm.comment=$event.target.value}}}),_c('input',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.location),expression:\"location\"}],attrs:{\"type\":\"hidden\",\"placeholder\":\"location\",\"data-gsp-name\":\"Location\",\"data-gsp-data\":_vm.location},domProps:{\"value\":(_vm.location)},on:{\"input\":function($event){if($event.target.composing){ return; }_vm.location=$event.target.value}}}),_c('input',{directives:[{name:\"model\",rawName:\"v-model\",value:(_vm.$store.state.currentReaction),expression:\"$store.state.currentReaction\"}],attrs:{\"type\":\"hidden\",\"placeholder\":\"reaction\",\"data-gsp-name\":\"Reaction\",\"data-gsp-data\":_vm.$store.state.currentReaction},domProps:{\"value\":(_vm.$store.state.currentReaction)},on:{\"input\":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$store.state, \"currentReaction\", $event.target.value)}}}),_c('button',{staticClass:\"robo-wiki-feedback-form__btn\",attrs:{\"disabled\":_vm.result === 'wait'},on:{\"click\":_vm.form}},[(_vm.result === 'init' || _vm.result === 'error')?_c('div',{staticClass:\"robo-wiki-feedback-form__btn-wrapper\"},[_c('font-awesome-icon',{attrs:{\"icon\":\"fa-solid fa-envelope\",\"aria-hidden\":\"true\"}}),_c('span',[_vm._v(_vm._s(_vm.$t('Tell us more')))])],1):_vm._e(),(_vm.result === 'wait')?_c('div',{staticClass:\"robo-wiki-feedback-form__btn-wrapper\"},[_c('Loader',{staticClass:\"loader\"}),_c('span',[_vm._v(_vm._s(_vm.$t('Sending your info...')))])],1):_vm._e()])])]):_vm._e(),(_vm.result === 'success')?_c('div',{staticClass:\"robo-wiki-feedback-form__success\"},[_c('font-awesome-icon',{attrs:{\"icon\":\"fa-solid fa-envelope\",\"aria-hidden\":\"true\"}}),_c('div',[_vm._v(_vm._s(_vm.$t('Thanks'))+\",\"),_c('br'),_vm._v(\" \"+_vm._s(_vm.$t(\"we'll keep in touch!\")))])],1):_vm._e()],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "jaMw":
/*!**********************************************************************************************************!*\
  !*** ./src/components/RoboWikiFeedbackForm.vue?vue&type=style&index=0&id=35272c72&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_35272c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./RoboWikiFeedbackForm.vue?vue&type=style&index=0&id=35272c72&scoped=true&lang=css& */ \"GyJ5\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_35272c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_35272c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_35272c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_style_index_0_id_35272c72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?");

/***/ }),

/***/ "mfxs":
/*!********************************************************************************************!*\
  !*** ./src/components/RoboWikiFeedbackForm.vue?vue&type=template&id=35272c72&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_template_id_35272c72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./RoboWikiFeedbackForm.vue?vue&type=template&id=35272c72&scoped=true& */ \"Ve8W\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_template_id_35272c72_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_template_id_35272c72_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?");

/***/ }),

/***/ "sGdO":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RoboWikiFeedbackForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"07d7\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"PKPk\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"3bBZ\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"R5XZ\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Loader: function Loader() {\n      return Promise.all(/*! import() */[__webpack_require__.e(\"styles\"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ~/components/Spinner.vue */ \"I3XD\"));\n    }\n  },\n  props: {\n    text: {\n      type: String,\n      required: true,\n      \"default\": ''\n    }\n  },\n  data: function data() {\n    return {\n      gscript: \"\",\n      siteKey: \"\",\n      email: '',\n      result: this.$response,\n      location: '',\n      comment: '',\n      interval: null,\n      captchaStyle: {\n        width: 100,\n        height: 25,\n        textBaseline: 'top',\n        font: '25px Roboto',\n        textAlign: 'left',\n        fillStyle: '#F38488'\n      }\n    };\n  },\n  methods: {\n    form: function form() {\n      var _this = this;\n\n      this.interval = setInterval(function () {\n        _this.result = _this.$response; // console.log(this.result)\n      }, 1000); // if (this.$response === 'success' || this.$response === 'error') {\n      //   clearInterval(this.interval)\n      // }\n    }\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n\n    this.location = 'https://wiki.robonomics.network' + this.$route.path;\n\n    if (this.$response === 'success' || this.$response === 'error') {\n      clearInterval(this.interval);\n      this.result = 'init';\n    }\n\n    document.body.addEventListener('click', function (e) {\n      if (_this2.$store.state.currentReaction && !e.target.closest('form')) {\n        _this2.$emit('closeForm');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "usLH":
/*!**************************************************************************!*\
  !*** ./src/components/RoboWikiFeedbackForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./RoboWikiFeedbackForm.vue?vue&type=script&lang=js& */ \"sGdO\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoboWikiFeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/RoboWikiFeedbackForm.vue?");

/***/ })

}]);