(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--es--ptz-camera-md"],{

/***/ "+uDZ":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/ptz-camera.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/es/ptz-camera.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "0QQ/":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/ptz-camera.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Control de cámara PTZ en Home Assistant\",\n  \"contributors\": [\"nakata5321\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/es/ptz-camera.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "84Y1":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/ptz-camera.md?vue&type=template&id=d1c60b8c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"Este artículo cubre un proceso de configuración de una cámara PTZ en Home Assistant. \\nSe utilizará el protocolo ONVIF. Esto requiere una cuenta de cámara local.\")]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\"}},[_vm._v(\"\\nEl proceso de configuración de la cuenta de cámara local no se cubre en este artículo.\\n\")]),_c('p',[_vm._v(\"Requisitos:\")]),_c('ul',[_c('li',[_vm._v(\"Cámara PTZ\")]),_c('li',[_vm._v(\"Cuenta de cámara local\")]),_c('li',[_vm._v(\"Dirección IP de la cámara\")]),_c('li',[_vm._v(\"Home Assistant configurado\")])]),_c('h2',{attrs:{\"id\":\"integración-onvif\"}},[_c('a',{attrs:{\"href\":\"#integraci%C3%B3n-onvif\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Integración ONVIF\")]),_c('p',[_vm._v(\"Comencemos con la instalación de la integración de \"),_c('strong',[_vm._v(\"ONVIF\")]),_vm._v(\". \")]),_c('p',[_vm._v(\"Ve a \\\"Devices & Services\\\" en \\\"Settings\\\" y presiona el botón \\\"ADD INTEGRATION\\\".\\nEscribe \\\"ONVIF\\\" y elige la integración. Verás la siguiente ventana.\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/onvifsetup.jpg\"}}),_c('p',[_vm._v(\"Presiona el botón \\\"Submit\\\". Intentará buscar automáticamente tu cámara. Si tiene éxito, \\nelige tu cámara de la lista y completa los campos vacíos. \\nDe lo contrario, tendrás que completar todos los campos manualmente. Verás la siguiente ventana.\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/onvifconfig.jpg\"}}),_c('p',[_vm._v(\"Completa los espacios en blanco:\")]),_c('ul',[_c('li',[_vm._v(\"Name - asigna un nombre a tu cámara\")]),_c('li',[_vm._v(\"Host - proporciona la dirección IP de tu cámara\")]),_c('li',[_vm._v(\"Port - generalmente es común que sea 2020, pero tu proveedor de cámaras puede cambiarlo\")]),_c('li',[_vm._v(\"Username - escribe el nombre de usuario de tu cuenta local de la cámara\"),_c('ul',[_c('li',[_vm._v(\"Password - escribe una contraseña para tu cuenta local de la cámara\")])])])]),_c('p',[_vm._v(\"y presiona \\\"Submit\\\". Elige un área para tu cámara y haz clic en \\\"Finish\\\".\")]),_c('h2',{attrs:{\"id\":\"agrega-el-control-de-la-cámara-al-panel-de-control\"}},[_c('a',{attrs:{\"href\":\"#agrega-el-control-de-la-c%C3%A1mara-al-panel-de-control\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Agrega el control de la cámara al panel de control\")]),_c('p',[_vm._v(\"Ahora que has configurado completamente la cámara, puedes agregar su transmisión y botones de control al panel de control.\")]),_c('p',[_vm._v(\"Ve al panel de control y comienza creando una nueva tarjeta. Elige la opción \\\"Picture Glance\\\".\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/glance.jpg\"}}),_c('p',[_vm._v(\"Completa los datos:\")]),_c('ul',[_c('li',[_vm._v(\"Title - elige el título de la imagen de la cámara\")]),_c('li',[_vm._v(\"Camera Entity - elige una entidad de cámara de la lista desplegable\")]),_c('li',[_vm._v(\"Camera View - elige \\\"live\\\" para obtener menos retraso\")])]),_c('p',[_vm._v(\"A continuación, cambia al modo \\\"Code Editor\\\" presionando el botón en la parte inferior izquierda. Verás el siguiente código:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"camera_view: live\\ntype: picture-glance\\ntitle: Kitchen\\nimage: https://demo.home-assistant.io/stub_config/kitchen.png\\nentities: []\\ncamera_image: camera.tapo_mainstream\")])]),_c('p',[_vm._v(\"Reemplaza el contenido de \"),_c('code',{pre:true},[_vm._v(\"entities: []\")]),_vm._v(\" según el ejemplo a continuación (\"),_c('code',{pre:true},[_vm._v(\"<TU_ENTIDAD_DE_CÁMARA>\")]),_vm._v(\" es lo mismo que el parámetro \"),_c('code',{pre:true},[_vm._v(\"camera_image\")]),_vm._v(\"):\")]),_c('code-helper',{attrs:{\"copy\":\"\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"entities:\\n  - entity: <YOUR_CAMERA_ENTITY>\\n    tap_action:\\n      action: call-service\\n      service: onvif.ptz\\n      service_data:\\n        entity_id: <YOUR_CAMERA_ENTITY>\\n        pan: LEFT\\n        speed: 1\\n        distance: 0.3\\n        move_mode: ContinuousMove\\n    name: Pan Left\\n    show_state: false\\n    icon: 'mdi:arrow-left'\\n    show_icon: true\\n  - entity: <YOUR_CAMERA_ENTITY>\\n    tap_action:\\n      action: call-service\\n      service: onvif.ptz\\n      service_data:\\n        entity_id: <YOUR_CAMERA_ENTITY>\\n        tilt: UP\\n        speed: 1\\n        distance: 0.3\\n        move_mode: ContinuousMove\\n    name: Tilt Up\\n    icon: 'mdi:arrow-up'\\n  - entity: <YOUR_CAMERA_ENTITY>\\n    tap_action:\\n      action: call-service\\n      service: onvif.ptz\\n      service_data:\\n        entity_id: <YOUR_CAMERA_ENTITY>\\n        tilt: DOWN\\n        speed: 1\\n        distance: 0.3\\n        move_mode: ContinuousMove\\n    name: Tilt Down\\n    icon: 'mdi:arrow-down'\\n  - entity: <YOUR_CAMERA_ENTITY>\\n    tap_action:\\n      action: call-service\\n      service: onvif.ptz\\n      service_data:\\n        entity_id: <YOUR_CAMERA_ENTITY>\\n        pan: RIGHT\\n        speed: 1\\n        distance: 0.3\\n        move_mode: ContinuousMove\\n    name: Pan Right\\n    icon: 'mdi:arrow-right'\\n    show_icon: true\\n\")])])]),_c('p',[_vm._v(\"Eso es todo. Ahora deberías ver la tarjeta de la cámara PTZ en el panel de control junto con los botones de control..\")]),_c('h2',{attrs:{\"id\":\"solución-de-problemas\"}},[_c('a',{attrs:{\"href\":\"#soluci%C3%B3n-de-problemas\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Solución de problemas\")]),_c('p',[_vm._v(\"Si estás utilizando Home Assistant Core y no ves una transmisión de la cámara, debes instalar las integraciones \\\"stream\\\" y \\\"FFMPEG\\\". \\nPara hacer esto, debes agregar las cadenas \"),_c('code',{pre:true},[_vm._v(\"stream:\")]),_vm._v(\" y \"),_c('code',{pre:true},[_vm._v(\"ffmpeg:\")]),_vm._v(\" al final de configuration.yaml.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/es/ptz-camera.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "8VJ5":
/*!*******************************!*\
  !*** ./docs/es/ptz-camera.md ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ptz_camera_md_vue_type_template_id_d1c60b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ptz-camera.md?vue&type=template&id=d1c60b8c& */ \"pz8P\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ptz-camera.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"ac9h\");\n/* harmony import */ var _ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ptz-camera.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"AAcl\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _ptz_camera_md_vue_type_template_id_d1c60b8c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ptz_camera_md_vue_type_template_id_d1c60b8c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/es/ptz-camera.md?");

/***/ }),

/***/ "AAcl":
/*!****************************************************************************************!*\
  !*** ./docs/es/ptz-camera.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./ptz-camera.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"0QQ/\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/ptz-camera.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "ac9h":
/*!***********************************************************************************!*\
  !*** ./docs/es/ptz-camera.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./ptz-camera.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"+uDZ\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/ptz-camera.md?");

/***/ }),

/***/ "pz8P":
/*!**************************************************************!*\
  !*** ./docs/es/ptz-camera.md?vue&type=template&id=d1c60b8c& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_template_id_d1c60b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./ptz-camera.md?vue&type=template&id=d1c60b8c& */ \"84Y1\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_template_id_d1c60b8c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_template_id_d1c60b8c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/es/ptz-camera.md?");

/***/ })

}]);