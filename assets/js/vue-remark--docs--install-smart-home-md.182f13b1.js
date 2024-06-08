(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--install-smart-home-md"],{

/***/ "8lsi":
/*!*********************************************************************************************!*\
  !*** ./docs/install-smart-home.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_install_smart_home_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--16-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./install-smart-home.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"gDmY\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_install_smart_home_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/install-smart-home.md?");

/***/ }),

/***/ "KAoD":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/install-smart-home.md?vue&type=template&id=b4aa5950& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"Welcome to the guide on installing Home Assistant with Robonomics integration. Home Assistant is an open-source home automation system that provides \\na centralized hub for controlling smart devices in your home network. By integrating with Robonomics, a decentralized cloud service, you can enhance the functionality and\\nsecurity of your smart home. In this article, we will provide step-by-step instructions on how to install Home Assistant with Robonomics, giving you the ability to \\nautomate and control various aspects of your home using a secure and decentralized solution. Let's get started!\")])]),_c('h2',{attrs:{\"id\":\"demo\"}},[_c('a',{attrs:{\"href\":\"#demo\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Demo\")]),_c('p',[_vm._v(\"Here is an example of a complete Smart Home and Robonomics integration installation. Keep in mind that the time required may vary depending on the Internet connection.\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://ipfs.living/ipfs/QmULXX4rjkuHuCF42c3V37MxEk6HpnFpJF4bZSQPR2c3Xo', type:'mp4'}]}}),_c('h2',{attrs:{\"id\":\"hardware-you-need-for-installation\"}},[_c('a',{attrs:{\"href\":\"#hardware-you-need-for-installation\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Hardware you need for installation\")]),_c('p',[_vm._v(\"If you haven't already incorporated Home Assistant into your smart home setup, it's important to be aware of the equipment you'll need to establish a complete smart home \\nsystem from the ground up. The Robonomics team recommend to use Raspberry Pi 4 as smart home server. \"),_c('strong',[_vm._v(\"But it's possible to set up everything on your PC.\")])]),_c('robo-wiki-grid-element-wrapper',{attrs:{\"textAlign\":\"center\",\"columns\":3,\"flexible\":\"\"}},[_c('robo-wiki-grid-element',[_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/need_2.png\"}}),_c('b',[_vm._v(\"Raspberry Pi 4 (at least 2 GB RAM)\")])],1),_c('robo-wiki-grid-element',[_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/need_3.png\"}}),_c('b',[_vm._v(\"SD card 16Gb+\")])],1),_c('robo-wiki-grid-element',[_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/need_7.png\"}}),_c('a',{attrs:{\"href\":\"https://www.zigbee2mqtt.io/information/supported_adapters.html\",\"target\":\"_blank\"}},[_c('b',[_vm._v(\"Zigbee adapter(Optionally)\")])])],1)],1),_c('robo-wiki-grid-element-wrapper',{attrs:{\"textAlign\":\"center\",\"columns\":2}},[_c('robo-wiki-grid-element',[_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/need_5.png\"}}),_c('a',{attrs:{\"href\":\"https://www.zigbee2mqtt.io/supported-devices/\",\"target\":\"_blank\"}},[_c('b',[_vm._v(\"Zigbee smart devices(Optionally)\")])])],1),_c('robo-wiki-grid-element',[_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/need_9.png\"}}),_c('b',[_vm._v(\"Desktop for setup\")])],1)],1),_c('h2',{attrs:{\"id\":\"1-install-pre-requirements\"}},[_c('a',{attrs:{\"href\":\"#1-install-pre-requirements\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1. Install Pre-requirements\")]),_c('p',[_vm._v(\"Robonomics Docker contains:\")]),_c('ul',[_c('li',[_vm._v(\"Home Assistant\")]),_c('li',[_vm._v(\"IPFS\")]),_c('li',[_vm._v(\"MQTT Broker and Integration\")]),_c('li',[_vm._v(\"Zigbee2MQTT\")]),_c('li',[_vm._v(\"libp2p proxy\")]),_c('li',[_vm._v(\"Robonomics Integration\")])]),_c('p',[_vm._v(\"This article will show the installation process on Ubuntu system. First you need to install next packages:\")]),_c('code-helper',{attrs:{\"copy\":\"\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"sudo apt-get install wget unzip git\\n\")])])]),_c('p',[_vm._v(\"Then you need to install Docker on PC. Installation instruction find on \"),_c('a',{attrs:{\"href\":\"https://docs.docker.com/engine/install/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"the official website\")]),_vm._v(\".\")]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"Important information\"}},[_c('p',[_vm._v(\"  Add your user to docker group, to start docker containers without root permissions. Find \"),_c('a',{attrs:{\"href\":\"https://docs.docker.com/engine/install/linux-postinstall/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"instruction here\")]),_vm._v(\".\")])]),_c('h2',{attrs:{\"id\":\"2-configure\"}},[_c('a',{attrs:{\"href\":\"#2-configure\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"2. Configure\")]),_c('p',[_vm._v(\"Download the GitHub repository and navigate inside it:\")]),_c('code-helper',{attrs:{\"copy\":\"\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"git clone https://github.com/airalab/home-assistant-web3-build.git\\ncd home-assistant-web3-build/\\n\")])])]),_c('p',[_vm._v(\"Then, create a \"),_c('code',{pre:true},[_vm._v(\".env\")]),_vm._v(\" file from the \"),_c('code',{pre:true},[_vm._v(\"template.env\")]),_vm._v(\":\")]),_c('code-helper',{attrs:{\"copy\":\"\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"mv template.env .env\\n\")])])]),_c('p',[_vm._v(\"After that, you may open the \"),_c('code',{pre:true},[_vm._v(\".env\")]),_vm._v(\" file and edit default values such as:  \")]),_c('ul',[_c('li',[_vm._v(\"Versions of packages\")]),_c('li',[_vm._v(\"path to repository where will be stored all configurations folders.\")]),_c('li',[_vm._v(\"time zone in \"),_c('a',{attrs:{\"href\":\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"\\\"tz database name\\\"\")]),_vm._v(\".\")])]),_c('h2',{attrs:{\"id\":\"3-start\"}},[_c('a',{attrs:{\"href\":\"#3-start\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"3. Start\")]),_c('p',[_vm._v(\"Run the bash script and wait until it installs all required packages:\")]),_c('code-helper',{attrs:{\"copy\":\"\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"bash setup.sh\\n\")])])]),_vm._v(\"\\nThe script will check all required actions that you completed in the previous steps and will throw an error if something is wrong.\\n\"),_c('p',[_vm._v(\"During the installation process the following situations may occur:\")]),_c('ul',[_c('li',[_vm._v(\"If you decide not to use the Zigbee coordinator, you will see a dialog line confirming whether to continue the installation:\")])]),_c('code-helper',[_c('pre',[_c('code',{pre:true},[_vm._v(\"this script will create all necessary repositories and start docker containers\\nCannot find zigbee coordinator location. Please insert it and run script again. The directory /dev/serial/by-id/ does not exist\\nDo you want to continue without zigbee coordinator? It will not start Zigbee2MQTT container.\\nDo you want to proceed? (y/n) \\n\")])])]),_c('ul',[_c('li',[_vm._v(\"If there are several devices on your PC that use serial ports, the script will ask which device to use:\")])]),_c('code-helper',[_c('pre',[_c('code',{pre:true},[_vm._v(\"this script will create all necessary repositories and start docker containers\\nthe zigbee coordinator is installed\\nYou have more that 1 connected devices. Please choose one\\n1) /dev/serial/by-id/usb-ITEAD_SONOFF_Zigbee_3.0_USB_Dongle_Plus_V2_20240123142833-if00\\n2) /dev/serial/by-id/usb-Silicon_Labs_Sonoff_Zigbee_3.0_USB_Dongle_Plus_0001-if00-port0\\n#? \\n\")])])]),_c('p',[_vm._v(\"That's all. Continue to the next article.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/install-smart-home.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "gDmY":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/install-smart-home.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Smart Home Installation\",\n  \"contributors\": [\"nakata5321\", \"PaTara43\"],\n  \"tools\": [\"Home Assistant 2024.4.4 https://github.com/home-assistant/core\", \"Robonomics Home Assistant Integration 1.8.3 https://github.com/airalab/homeassistant-robonomics-integration\", \"IPFS 0.27.0 https://docs.ipfs.tech/\", \"Zigbee2MQTT 1.37.1 https://github.com/Koenkk/zigbee2mqtt\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/install-smart-home.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "hoA3":
/*!*******************************************************************!*\
  !*** ./docs/install-smart-home.md?vue&type=template&id=b4aa5950& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_install_smart_home_md_vue_type_template_id_b4aa5950___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./install-smart-home.md?vue&type=template&id=b4aa5950& */ \"KAoD\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_install_smart_home_md_vue_type_template_id_b4aa5950___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_install_smart_home_md_vue_type_template_id_b4aa5950___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/install-smart-home.md?");

/***/ }),

/***/ "jT7h":
/*!****************************************************************************************!*\
  !*** ./docs/install-smart-home.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_install_smart_home_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--15-0!../node_modules/vue-loader/lib??ref--17-0!../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./install-smart-home.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"n73r\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_install_smart_home_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/install-smart-home.md?");

/***/ }),

/***/ "n73r":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/install-smart-home.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/install-smart-home.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "pxHB":
/*!************************************!*\
  !*** ./docs/install-smart-home.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _install_smart_home_md_vue_type_template_id_b4aa5950___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./install-smart-home.md?vue&type=template&id=b4aa5950& */ \"hoA3\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _install_smart_home_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./install-smart-home.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"jT7h\");\n/* harmony import */ var _install_smart_home_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./install-smart-home.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"8lsi\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _install_smart_home_md_vue_type_template_id_b4aa5950___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _install_smart_home_md_vue_type_template_id_b4aa5950___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _install_smart_home_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_install_smart_home_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _install_smart_home_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_install_smart_home_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/install-smart-home.md?");

/***/ })

}]);