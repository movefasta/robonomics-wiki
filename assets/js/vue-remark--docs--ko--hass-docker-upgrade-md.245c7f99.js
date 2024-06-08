(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ko--hass-docker-upgrade-md"],{

/***/ "0btR":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/hass-docker-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ko/hass-docker-upgrade.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "1t/M":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/hass-docker-upgrade.md?vue&type=template&id=feb79036& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"이 문서에는 Robonomics 통합을 사용하여 기존의 Home Assistant Docker(Unix-like OS에서)를 업그레이드하는 지침이 포함되어 있습니다.\")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/ha_docker.png\"}}),_c('robo-wiki-note',{attrs:{\"type\":\"warning\",\"title\":\"DISCLAIMER\"}},[_c('ol',[_c('li',[_vm._v(\"Home Assistant의 기본 Docker 이미지와 컨테이너 이름이 \"),_c('u',[_vm._v(\"homeassistant\")]),_vm._v(\"로 가정됩니다.\")]),_c('li',[_vm._v(\"IPFS가 호스트 머신에서 \"),_c('u',[_vm._v(\"systemd\")]),_vm._v(\" 서비스로 설치되고 실행됩니다.\")]),_c('li',[_c('a',{attrs:{\"href\":\"https://www.python.org/downloads/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Python3.9\")]),_vm._v(\" 이상이 설치되어 있다고 가정합니다.\")])])]),_c('h2',{attrs:{\"id\":\"설치\"}},[_c('a',{attrs:{\"href\":\"#%EC%84%A4%EC%B9%98\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"설치\")]),_c('p',[_vm._v(\"설치 스크립트를 다운로드하고 터미널에서 실행하십시오:\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"wget https://raw.githubusercontent.com/airalab/robonomics-hass-utils/main/raspberry_pi/install_integration_docker.sh\\nbash install_integration_docker.sh\")])])]),_c('p',[_vm._v(\"다음 출력이 표시됩니다:\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"<...>\\nadded /dns4/3.pubsub.aira.life/tcp/443/wss/ipfs/QmWZSKTEQQ985mnNzMqhGCrwQ1aTA6sxVsorsycQz9cQrw\\n<...>\\nIPFS daemon installed and launched, use ipfs-daemon.service to manage.\\n<...>\\nExecuting subversion-1.14.2-r1.pre-install\\nExecuting busybox-1.35.0-r17.trigger\\nOK: 157 MiB in 165 packages\\n<...>\\nA    robonomics/utils.py\\nChecked out revision 120.\\nIntegration downloaded!\")])])]),_c('robo-wiki-note',{attrs:{\"type\":\"note\",\"title\":\"Error: `custom_components` exists\"}},[_c('p',[_c('code',{pre:true},[_vm._v(\"mkdir: can't create directory 'custom_components': File exists\")]),_vm._v(\"와 같은 오류가 표시될 수 있습니다. 이는 이미 일부 사용자 정의 구성 요소가 있는 이 폴더가 이미 존재한다는 것을 의미합니다. 이 메시지를 무시하십시오.\")])]),_c('p',[_vm._v(\"컨테이너 재시작:\")]),_c('robo-wiki-tabs',[_c('robo-wiki-tab',{attrs:{\"title\":\"Docker\"}},[_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_vm._v(\"docker restart homeassistant\")])])],1),_c('robo-wiki-tab',{attrs:{\"title\":\"Docker Compose\"}},[_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_vm._v(\"docker compose restart\")])])],1)],1),_c('h2',{attrs:{\"id\":\"확인\"}},[_c('a',{attrs:{\"href\":\"#%ED%99%95%EC%9D%B8\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"확인\")]),_c('p',[_vm._v(\"IPFS 서비스가 실행 중인지 확인하십시오.\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"systemctl status ipfs-daemon.service \")])])]),_c('p',[_vm._v(\"다음 출력이 표시됩니다:\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true},[_vm._v(\"● ipfs-daemon.service - IPFS Daemon Service\\n     Loaded: loaded (/etc/systemd/system/ipfs-daemon.service; enabled; preset: enabled)\\n     Active: active (running) since Thu 2022-11-03 11:30:39 UTC; 14min ago\\n   Main PID: 4400 (ipfs)\\n      Tasks: 12 (limit: 4416)\\n     Memory: 141.9M\\n        CPU: 3min 5.031s\\n     CGroup: /system.slice/ipfs-daemon.service\\n             └─4400 /usr/local/bin/ipfs daemon\\n\")])])])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ko/hass-docker-upgrade.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Kq4f":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/hass-docker-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Unix-like OS에서 Home Assistant Docker를 업그레이드하세요\",\n  \"contributors\": [\"PaTara43\"],\n  \"tools\": [\"Ubuntu Server 22.04 LTS https://ubuntu.com/download/raspberry-pi\", \"Home Assistant 2022.11.3 https://github.com/home-assistant/core\", \"Docker https://www.docker.com/\", \"Robonomics Home Assistant Integration 1.1.3 https://github.com/airalab/homeassistant-robonomics-integration\", \"robonomics-interface 1.3.6 https://github.com/Multi-Agent-io/robonomics-interface/\", \"IPFS 0.17.0 https://docs.ipfs.tech/\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ko/hass-docker-upgrade.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "OHJZ":
/*!*************************************************************************************************!*\
  !*** ./docs/ko/hass-docker-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_docker_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-docker-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Kq4f\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_docker_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/hass-docker-upgrade.md?");

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

/***/ "Vo9Y":
/*!****************************************!*\
  !*** ./docs/ko/hass-docker-upgrade.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hass_docker_upgrade_md_vue_type_template_id_feb79036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hass-docker-upgrade.md?vue&type=template&id=feb79036& */ \"avmQ\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hass_docker_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hass-docker-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"dXxD\");\n/* harmony import */ var _hass_docker_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hass-docker-upgrade.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"OHJZ\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hass_docker_upgrade_md_vue_type_template_id_feb79036___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hass_docker_upgrade_md_vue_type_template_id_feb79036___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hass_docker_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hass_docker_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hass_docker_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hass_docker_upgrade_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ko/hass-docker-upgrade.md?");

/***/ }),

/***/ "avmQ":
/*!***********************************************************************!*\
  !*** ./docs/ko/hass-docker-upgrade.md?vue&type=template&id=feb79036& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_docker_upgrade_md_vue_type_template_id_feb79036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-docker-upgrade.md?vue&type=template&id=feb79036& */ \"1t/M\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_docker_upgrade_md_vue_type_template_id_feb79036___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_docker_upgrade_md_vue_type_template_id_feb79036___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ko/hass-docker-upgrade.md?");

/***/ }),

/***/ "dXxD":
/*!********************************************************************************************!*\
  !*** ./docs/ko/hass-docker-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_docker_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hass-docker-upgrade.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"0btR\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hass_docker_upgrade_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/hass-docker-upgrade.md?");

/***/ })

}]);