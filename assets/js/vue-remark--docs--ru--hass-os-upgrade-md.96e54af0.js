(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ru--hass-os-upgrade-md"],{

/***/ "0C6d":
/*!****************************************************************************************!*\
  !*** ./docs/ru/hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"3I8s\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/hass-os-upgrade.md?");

/***/ }),

/***/ "3I8s":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ru/hass-os-upgrade.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "8aMB":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Обновите вашу Home Assistant OS\",\n  \"contributors\": [\"LoSk-p\"],\n  \"tools\": [\"Home Assistant OS 10.5 for RaspPi https://github.com/home-assistant/operating-system\", \"HACS 1.32.1 https://github.com/hacs/integration/\", \"Robonomics Home Assistant Integration 1.6.1 https://github.com/airalab/homeassistant-robonomics-integration\", \"IPFS Home Assistant Addon 1.1.0 https://github.com/airalab/ipfs-addon\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ru/hass-os-upgrade.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "DzhG":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/hass-os-upgrade.md?vue&type=template&id=d05245fe& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"Эта статья содержит инструкции по обновлению вашей существующей Home Assistant OS с интеграцией Robonomics.\")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/homeassistant_os.png\"}}),_c('h2',{attrs:{\"id\":\"установка-ipfs-add-on\"}},[_c('a',{attrs:{\"href\":\"#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-ipfs-add-on\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Установка IPFS Add-on\")]),_c('p',[_vm._v(\"Интеграция Робономики хранит данные с помощью локального демона IPFS, поэтому его необходимо сначала установить.\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmdAmUHW9bpTU6sUwBYu4ai4DVJ6nZ5xerjM9exvooGKGq', type:'mp4'}]}}),_c('ol',[_c('li',[_c('p',[_vm._v(\"Для Home Assistant существует \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/ipfs-addon\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"дополнение IPFS\")]),_vm._v(\". Чтобы установить его, перейдите в  \"),_c('code',{pre:true},[_vm._v(\"Settings\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Add-ons\")]),_vm._v(\" и нажмите кнопку \"),_c('code',{pre:true},[_vm._v(\"ADD-ON STORE\")]),_vm._v(\" в правом нижнем углу.\")])]),_c('li',[_c('p',[_vm._v(\"Нажмите на три точки в правом верхнем углу и выберите \"),_c('code',{pre:true},[_vm._v(\"Repositories\")]),_vm._v(\". Добавьте туда следующую ссылку:\")])])]),_c('code-helper',{attrs:{\"copy\":\"\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"https://github.com/airalab/ipfs-addon\\n\")])])]),_c('ol',{attrs:{\"start\":\"3\"}},[_c('li',[_c('p',[_vm._v(\"Нажмите кнопку \"),_c('code',{pre:true},[_vm._v(\"ADD\")]),_vm._v(\".\")])]),_c('li',[_c('p',[_vm._v(\"Закройте менеджер репозиториев и обновите страницу. Теперь в конце страницы вы увидите дополнение IPFS Daemon.\")])]),_c('li',[_c('p',[_vm._v(\"Откройте дополнение и нажмите \"),_c('code',{pre:true},[_vm._v(\"INSTALL\")]),_vm._v(\". После установки нажмите \"),_c('code',{pre:true},[_vm._v(\"START\")]),_vm._v(\".\")])])]),_c('h2',{attrs:{\"id\":\"установите-hacs\"}},[_c('a',{attrs:{\"href\":\"#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D0%B5-hacs\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Установите HACS\")]),_c('p',[_c('a',{attrs:{\"href\":\"https://hacs.xyz/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Home Assistant Community Store (HACS)\")]),_vm._v(\" позволяет устанавливать пользовательские интеграции.\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmYJFpxrww9PRvcAUhdgKufeDbyUFoBZTREZHPgV452kzs', type:'mp4'}]}}),_c('ol',[_c('li',[_vm._v(\"Прежде чем начать, вам нужно установить дополнение для подключения к устройству Home Assistant с помощью SSH. В магазине дополнений найдите \"),_c('code',{pre:true},[_vm._v(\"ssh\")]),_vm._v(\". Мы рекомендуем установить дополнение \"),_c('code',{pre:true},[_vm._v(\"SSH & Web Terminal\")]),_vm._v(\".\")])]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"Warning\"}},[_c('p',[_vm._v(\"  Если дополнение SSH не найдено, попробуйте включить режим расширенного режима в настройках вашего профиля пользователя. Для этого нажмите на значок профиля в левом нижнем углу и найдите опцию Расширенный режим.\")])]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Выберите дополнение и нажмите \"),_c('code',{pre:true},[_vm._v(\"INSTALL\")]),_vm._v(\". После завершения установки перейдите на вкладку \"),_c('code',{pre:true},[_vm._v(\"Configuration\")]),_vm._v(\" и добавьте \"),_c('code',{pre:true},[_vm._v(\"password\")]),_vm._v(\" или \"),_c('code',{pre:true},[_vm._v(\"authorized_keys\")]),_vm._v(\". Не забудьте сохранить эту часть конфигурации.\")])]),_c('li',[_c('p',[_vm._v(\"На вкладке \"),_c('code',{pre:true},[_vm._v(\"Info\")]),_vm._v(\" нажмите \"),_c('code',{pre:true},[_vm._v(\"START\")]),_vm._v(\". Если вы хотите видеть дополнение в боковой панели, не забудьте включить \"),_c('code',{pre:true},[_vm._v(\"Показывать в боковой панели\")]),_vm._v(\".\")])])]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmcijfJ45fmW9omB67xWyPKvHhZuwLMTTQ7DBqnyxHUXR1', type:'mp4'}]}}),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Откройте SSH Add-on и выполните следующую команду:\")])]),_c('code-helper',{attrs:{\"copy\":\"\",\"additionalLine\":\"Home Assistant Command Line\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"wget -O - https://get.hacs.xyz | bash -\")])])]),_c('ol',{attrs:{\"start\":\"5\"}},[_c('li',[_c('p',[_vm._v(\"Перезагрузите Home Assistant (вы можете сделать это в \"),_c('code',{pre:true},[_vm._v(\"Settings\")]),_vm._v(\"->\"),_c('code',{pre:true},[_vm._v(\"System\")]),_vm._v(\"). \")])]),_c('li',[_c('p',[_vm._v(\"Теперь интеграция HACS будет доступна для добавления в меню \"),_c('code',{pre:true},[_vm._v(\"Integrations\")]),_vm._v(\". Перейдите в \"),_c('code',{pre:true},[_vm._v(\"Settings\")]),_vm._v(\"->\"),_c('code',{pre:true},[_vm._v(\"Devices & Services\")]),_vm._v(\", нажмите \"),_c('code',{pre:true},[_vm._v(\"Add Integration\")]),_vm._v(\" и найдите HACS.\")])])]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"Warning\"}},[_c('p',[_vm._v(\"  Для использования HACS вам понадобится учетная запись Github.\")])]),_c('ol',{attrs:{\"start\":\"7\"}},[_c('li',[_vm._v(\"Нажмите на нее и следуйте инструкциям по установке. \")])]),_c('h2',{attrs:{\"id\":\"установите-интеграцию-robonomics\"}},[_c('a',{attrs:{\"href\":\"#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D0%B5-%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8E-robonomics\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Установите интеграцию Robonomics\")]),_c('p',[_vm._v(\"Теперь вы можете установить интеграцию Robonomics с помощью HACS.\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmUodGanHyTE8hCJdcCHzvdnmuyVVGvnfTuYvYTPVKhh5d', type:'mp4'}]}}),_c('p',[_vm._v(\"Откройте HACS в меню боковой панели и перейдите к  \"),_c('code',{pre:true},[_vm._v(\"Integrations\")]),_vm._v(\". Нажмите \"),_c('code',{pre:true},[_vm._v(\"Explore & Download Repositories\")]),_vm._v(\", затем найдите \"),_c('code',{pre:true},[_vm._v(\"Robonomics\")]),_vm._v(\" и нажмите кнопку \"),_c('code',{pre:true},[_vm._v(\"Download\")]),_vm._v(\", расположенную в правом нижнем углу. После завершения загрузки перезапустите Home Assistant.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ru/hass-os-upgrade.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "fSqe":
/*!************************************!*\
  !*** ./docs/ru/hass-os-upgrade.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hass_os_upgrade_md_vue_type_template_id_d05245fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=template&id=d05245fe& */ \"xVJq\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"0C6d\");\n/* harmony import */ var _hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"hpuz\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hass_os_upgrade_md_vue_type_template_id_d05245fe___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hass_os_upgrade_md_vue_type_template_id_d05245fe___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ru/hass-os-upgrade.md?");

/***/ }),

/***/ "hpuz":
/*!*********************************************************************************************!*\
  !*** ./docs/ru/hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"8aMB\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/hass-os-upgrade.md?");

/***/ }),

/***/ "xVJq":
/*!*******************************************************************!*\
  !*** ./docs/ru/hass-os-upgrade.md?vue&type=template&id=d05245fe& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_d05245fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=template&id=d05245fe& */ \"DzhG\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_d05245fe___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_d05245fe___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ru/hass-os-upgrade.md?");

/***/ })

}]);