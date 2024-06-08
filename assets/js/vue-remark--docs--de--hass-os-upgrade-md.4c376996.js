(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--de--hass-os-upgrade-md"],{

/***/ "A7hs":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/de/hass-os-upgrade.md?vue&type=template&id=79541145& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"Dieser Artikel enthält Anweisungen zum Upgrade Ihres bestehenden Home Assistant OS mit Robonomics Integration.\")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/homeassistant_os.png\"}}),_c('h2',{attrs:{\"id\":\"installierenieren-ipfs-add-on\"}},[_c('a',{attrs:{\"href\":\"#installierenieren-ipfs-add-on\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Installierenieren IPFS Add-on\")]),_c('p',[_vm._v(\"Robonomics Integration speichert die Daten mit Hilfe des lokalen IPFS-Daemons, daher müssen Sie ihn zuerst installieren. \")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmdAmUHW9bpTU6sUwBYu4ai4DVJ6nZ5xerjM9exvooGKGq', type:'mp4'}]}}),_c('ol',[_c('li',[_c('p',[_vm._v(\"Es gibt ein \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/ipfs-addon\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"IPFS Add-on für Home Assistant\")]),_vm._v(\". Um es zu installieren, gehen Sie zu \"),_c('code',{pre:true},[_vm._v(\"Settings\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Add-ons\")]),_vm._v(\" und drücken Sie die Schaltfläche \"),_c('code',{pre:true},[_vm._v(\"ADD-ON STORE\")]),_vm._v(\" in der unteren rechten Ecke.\")])]),_c('li',[_c('p',[_vm._v(\"Drücken Sie auf die drei Punkte in der oberen rechten Ecke und wählen Sie \"),_c('code',{pre:true},[_vm._v(\"Repositories\")]),_vm._v(\". Fügen Sie dort den folgenden Link hinzu:\")])])]),_c('code-helper',{attrs:{\"copy\":\"\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"https://github.com/airalab/ipfs-addon\\n\")])])]),_c('ol',{attrs:{\"start\":\"3\"}},[_c('li',[_c('p',[_vm._v(\"Drücken Sie die Schaltfläche \"),_c('code',{pre:true},[_vm._v(\"ADD\")]),_vm._v(\".\")])]),_c('li',[_c('p',[_vm._v(\"Schließen Sie den Repository-Manager und aktualisieren Sie die Seite. Jetzt können Sie am Ende der Seite das IPFS Daemon Add-on sehen.\")])]),_c('li',[_c('p',[_vm._v(\"Öffnen Sie das Add-on und drücken Sie \"),_c('code',{pre:true},[_vm._v(\"INSTALL\")]),_vm._v(\". Nach der Installation drücken Sie \"),_c('code',{pre:true},[_vm._v(\"START\")]),_vm._v(\".\")])])]),_c('h2',{attrs:{\"id\":\"installieren-sie-hacs\"}},[_c('a',{attrs:{\"href\":\"#installieren-sie-hacs\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Installieren Sie HACS\")]),_c('p',[_c('a',{attrs:{\"href\":\"https://hacs.xyz/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Home Assistant Community Store (HACS)\")]),_vm._v(\" ermöglicht Ihnen die Installation von benutzerdefinierten Integrationen.\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmYJFpxrww9PRvcAUhdgKufeDbyUFoBZTREZHPgV452kzs', type:'mp4'}]}}),_c('ol',[_c('li',[_vm._v(\"Bevor Sie beginnen, müssen Sie das Add-on für die Verbindung mit dem Home Assistant-Gerät über SSH installieren. Suchen Sie im Add-on Store nach \"),_c('code',{pre:true},[_vm._v(\"ssh\")]),_vm._v(\". Wir empfehlen die Installation des Add-ons \"),_c('code',{pre:true},[_vm._v(\"SSH & Web Terminal\")]),_vm._v(\".\")])]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"Warning\"}},[_c('p',[_vm._v(\"  Wenn das SSH-Add-on nicht gefunden wird, versuchen Sie, den erweiterten Modus in Ihren Benutzerprofil-Einstellungen zu aktivieren. Klicken Sie dazu auf das Profilsymbol in der unteren linken Ecke und suchen Sie die Option Erweiterter Modus.\")])]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_c('p',[_vm._v(\"Wählen Sie das Add-on aus und drücken Sie \"),_c('code',{pre:true},[_vm._v(\"INSTALL\")]),_vm._v(\". Nach Abschluss der Installation gehen Sie zum Tab \"),_c('code',{pre:true},[_vm._v(\"Konfiguration\")]),_vm._v(\" und fügen Sie \"),_c('code',{pre:true},[_vm._v(\"password\")]),_vm._v(\" oder \"),_c('code',{pre:true},[_vm._v(\"authorized_keys\")]),_vm._v(\" hinzu. Vergessen Sie nicht, diesen Teil der Konfiguration zu speichern.\")])]),_c('li',[_c('p',[_vm._v(\"Drücken Sie im Tab \"),_c('code',{pre:true},[_vm._v(\"Info\")]),_vm._v(\" auf \"),_c('code',{pre:true},[_vm._v(\"START\")]),_vm._v(\". Wenn Sie das Add-on in der Seitenleiste sehen möchten, vergessen Sie nicht, \"),_c('code',{pre:true},[_vm._v(\"Show in sidebar\")]),_vm._v(\" zu aktivieren.\")])])]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmcijfJ45fmW9omB67xWyPKvHhZuwLMTTQ7DBqnyxHUXR1', type:'mp4'}]}}),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Öffnen Sie das SSH Add-on und führen Sie den folgenden Befehl aus:\")])]),_c('code-helper',{attrs:{\"copy\":\"\",\"additionalLine\":\"Home Assistant Command Line\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"wget -O - https://get.hacs.xyz | bash -\")])])]),_c('ol',{attrs:{\"start\":\"5\"}},[_c('li',[_c('p',[_vm._v(\"Starten Sie Home Assistant neu (Sie können dies unter \"),_c('code',{pre:true},[_vm._v(\"Settings\")]),_vm._v(\"->\"),_c('code',{pre:true},[_vm._v(\"System\")]),_vm._v(\"). \")])]),_c('li',[_c('p',[_vm._v(\"Jetzt steht die HACS Integration im Menü \"),_c('code',{pre:true},[_vm._v(\"Integrations\")]),_vm._v(\" zur Verfügung. Gehen Sie zu \"),_c('code',{pre:true},[_vm._v(\"Settings\")]),_vm._v(\"->\"),_c('code',{pre:true},[_vm._v(\"Devices & Services\")]),_vm._v(\", drücken Sie \"),_c('code',{pre:true},[_vm._v(\"Add Integration\")]),_vm._v(\"  und suchen Sie HACS.\")])])]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"Warning\"}},[_c('p',[_vm._v(\"  Um HACS zu verwenden, benötigen Sie ein Github-Konto.\")])]),_c('ol',{attrs:{\"start\":\"7\"}},[_c('li',[_vm._v(\"Klicken Sie darauf und folgen Sie den Installationsanweisungen. \")])]),_c('h2',{attrs:{\"id\":\"installieren-sie-robonomics-integration\"}},[_c('a',{attrs:{\"href\":\"#installieren-sie-robonomics-integration\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Installieren Sie Robonomics Integration\")]),_c('p',[_vm._v(\"Jetzt können Sie Robonomics Integration mit HACS installieren.\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmUodGanHyTE8hCJdcCHzvdnmuyVVGvnfTuYvYTPVKhh5d', type:'mp4'}]}}),_c('p',[_vm._v(\"Öffnen Sie HACS im Seitenmenü und navigieren Sie zu \"),_c('code',{pre:true},[_vm._v(\"Integrations\")]),_vm._v(\". Klicken Sie auf \"),_c('code',{pre:true},[_vm._v(\"Explore & Download Repositories\")]),_vm._v(\", suchen Sie nach \"),_c('code',{pre:true},[_vm._v(\"Robonomics\")]),_vm._v(\" und klicken Sie auf die Schaltfläche \"),_c('code',{pre:true},[_vm._v(\"Download\")]),_vm._v(\" in der unteren rechten Ecke. Sobald der Download abgeschlossen ist, starten Sie Home Assistant neu.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/de/hass-os-upgrade.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "C9tJ":
/*!************************************!*\
  !*** ./docs/de/hass-os-upgrade.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hass_os_upgrade_md_vue_type_template_id_79541145___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=template&id=79541145& */ \"DyCp\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"XRtM\");\n/* harmony import */ var _hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Ixye\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hass_os_upgrade_md_vue_type_template_id_79541145___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hass_os_upgrade_md_vue_type_template_id_79541145___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/de/hass-os-upgrade.md?");

/***/ }),

/***/ "DyCp":
/*!*******************************************************************!*\
  !*** ./docs/de/hass-os-upgrade.md?vue&type=template&id=79541145& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_79541145___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=template&id=79541145& */ \"A7hs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_79541145___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_template_id_79541145___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/de/hass-os-upgrade.md?");

/***/ }),

/***/ "Ixye":
/*!*********************************************************************************************!*\
  !*** ./docs/de/hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"NP66\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/de/hass-os-upgrade.md?");

/***/ }),

/***/ "NP66":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/de/hass-os-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Upgrade Your Home Assistant OS\",\n  \"contributors\": [\"LoSk-p\"],\n  \"tools\": [\"Home Assistant OS 64-9.5 for RaspPi https://github.com/home-assistant/operating-system\", \"HACS 1.31.0 https://github.com/hacs/integration/\", \"Robonomics Home Assistant Integration 1.4.1 https://github.com/airalab/homeassistant-robonomics-integration\", \"IPFS Home Assistant Addon 1.1.0 https://github.com/airalab/ipfs-addon\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/de/hass-os-upgrade.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "XRtM":
/*!****************************************************************************************!*\
  !*** ./docs/de/hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"yH+6\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_os_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/de/hass-os-upgrade.md?");

/***/ }),

/***/ "yH+6":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/de/hass-os-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/de/hass-os-upgrade.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);