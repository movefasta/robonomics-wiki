(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--uk--sls-gateway-md"],{

/***/ "1MRx":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/uk/sls-gateway.md?vue&type=template&id=3bf7f29a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"У цій статті ви налаштуєте Robonomics SLS Шлюз. Ви встановите необхідне програмне забезпечення для шлюзу, налаштуєте його та підключите його до Home Assistant.\")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/sls_gateway.png\"}}),_c('h2',{attrs:{\"id\":\"прошивка\"}},[_c('a',{attrs:{\"href\":\"#%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Прошивка\")]),_c('p',[_vm._v(\"Спочатку вам потрібно встановити прошивку мікроконтролера шлюзу. Підготуйте шлюз, встановивши перемикачі \"),_c('code',{pre:true},[_vm._v(\"1\")]),_vm._v(\" та \"),_c('code',{pre:true},[_vm._v(\"3\")]),_vm._v(\" в нижній частині SLS Шлюзу в положення \"),_c('code',{pre:true},[_vm._v(\"ON\")]),_vm._v(\", інші повинні бути \"),_c('code',{pre:true},[_vm._v(\"OFF\")]),_vm._v(\".\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/sls-gateway-13.gif\"}}),_c('p',[_vm._v(\"Підключіть шлюз до Raspberry Pi за допомогою порту USB type-C на шлюзі.\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/sls-rpi.gif\"}}),_c('p',[_vm._v(\"Клонуйте репозиторій з прошивкою на Raspberry Pi:\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"git clone https://github.com/airalab/robonomics-hass-utils.git\")])])]),_c('p',[_vm._v(\"Перейдіть до \"),_c('code',{pre:true},[_vm._v(\"robonomics-hass-utils/esp_firmware/linux\")]),_vm._v(\". Щоб прошити SLS шлюз, вам потрібно запустити скрипти \"),_c('code',{pre:true},[_vm._v(\"Clear\")]),_vm._v(\" та \"),_c('code',{pre:true},[_vm._v(\"Flash_16mb\")]),_vm._v(\".\")]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"cd robonomics-hass-utils/esp_firmware/linux\\nsudo chmod +x Clear.sh\\nsudo chmod +x Flash_16mb.sh\\n./Clear.sh\\n./Flash_16mb.sh\")])])]),_c('h3',{attrs:{\"id\":\"усунення-неполадок\"}},[_c('a',{attrs:{\"href\":\"#%D1%83%D1%81%D1%83%D0%BD%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BD%D0%B5%D0%BF%D0%BE%D0%BB%D0%B0%D0%B4%D0%BE%D0%BA\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Усунення неполадок\")]),_c('p',[_vm._v(\"Якщо у вас виникають проблеми з оновленням прошивки шлюзу, вам потрібно виконати додаткові кроки:\")]),_c('ol',[_c('li',[_vm._v(\"Переконайтеся, що встановлено модуль pySerial:\")])]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"pip install pyserial\")])])]),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_vm._v(\"Надайте своєму користувачеві права доступу до USB-порту та перезавантажте комп'ютер:\")])]),_c('code-helper',{attrs:{\"additionalLine\":\"rasppi_username@rasppi_hostname\"}},[_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-shell\"}},[_vm._v(\"sudo usermod -a -G dialout $USER\\nsudo reboot\")])])]),_c('ol',{attrs:{\"start\":\"3\"}},[_c('li',[_vm._v(\"У деяких випадках необхідно змінити налаштування пропускної здатності в скрипті для оновлення прошивки. Відкрийте скрипт \"),_c('code',{pre:true},[_vm._v(\"Flash_16mb.sh\")]),_vm._v(\" за допомогою редактора \"),_c('code',{pre:true},[_vm._v(\"nano\")]),_vm._v(\" та змініть параметр baud з \"),_c('code',{pre:true},[_vm._v(\"921600\")]),_vm._v(\" на менше значення (наприклад, \"),_c('code',{pre:true},[_vm._v(\"115200\")]),_vm._v(\").\")])]),_c('h2',{attrs:{\"id\":\"конфігурація\"}},[_c('a',{attrs:{\"href\":\"#%D0%BA%D0%BE%D0%BD%D1%84%D1%96%D0%B3%D1%83%D1%80%D0%B0%D1%86%D1%96%D1%8F\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Конфігурація\")]),_c('ol',[_c('li',[_vm._v(\"Відключіть SLS Шлюз від комп'ютера. Встановіть перемикачі на задній панелі шлюзу в правильне положення. Перемикачі \"),_c('code',{pre:true},[_vm._v(\"5\")]),_vm._v(\" (RX Zigbee до ESP) та \"),_c('code',{pre:true},[_vm._v(\"6\")]),_vm._v(\" (TX Zigbee до ESP) повинні бути в положенні \"),_c('code',{pre:true},[_vm._v(\"ON\")]),_vm._v(\", інші повинні бути \"),_c('code',{pre:true},[_vm._v(\"OFF\")]),_vm._v(\". \")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/sls-gateway-56.gif\"}}),_c('ol',{attrs:{\"start\":\"2\"}},[_c('li',[_vm._v(\"Підключіть кабель живлення типу C. Індикаторне світло в центрі повинно загорітися зеленим.\")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/sls-gateway-connect.gif\"}}),_c('ol',{attrs:{\"start\":\"3\"}},[_c('li',[_vm._v(\"При першому запуску шлюз буде починати роздавати Wi-Fi з SSID \"),_c('code',{pre:true},[_vm._v(\"zgw****\")]),_vm._v(\". Підключіться до цієї мережі. Майте на увазі, що сигнал може бути досить слабким, тому краще тримати SLS шлюз ближче до комп'ютера. \")])]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/sls-gateway-wifi.gif\"}}),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_c('p',[_vm._v(\"Якщо підключення вдале, відкриється веб-інтерфейс (або ви можете знайти його за адресою 192.168.1.1). \")])]),_c('li',[_c('p',[_vm._v(\"Ви побачите сторінку \"),_c('code',{pre:true},[_vm._v(\"Wi-Fi Settings\")]),_vm._v(\". Виберіть свою Wi-Fi та введіть пароль. Натисніть кнопку \"),_c('code',{pre:true},[_vm._v(\"Apply\")]),_vm._v(\". Шлюз перезавантажиться та підключиться до вашої Wi-Fi мережі. \")])])]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]}}),_c('ol',{attrs:{\"start\":\"6\"}},[_c('li',[_c('p',[_vm._v(\"Знайдіть локальну IP-адресу SLS шлюзу для доступу до веб-інтерфейсу. Щоб знайти його, ви можете використовувати \"),_c('a',{attrs:{\"href\":\"https://www.fing.com/products\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"мобільний додаток Fing\")]),_vm._v(\" або \"),_c('a',{attrs:{\"href\":\"https://vitux.com/find-devices-connected-to-your-network-with-nmap/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"інструмент командного рядка nmap\")]),_vm._v(\". Ім'я шлюзу повинно виглядати так: \"),_c('code',{pre:true},[_vm._v(\"zgw****\")]),_vm._v(\". Відкрийте веб-інтерфейс шлюзу, вставивши IP-адресу шлюзу в браузер.\")])]),_c('li',[_c('p',[_vm._v(\"Перейдіть до \"),_c('code',{pre:true},[_vm._v(\"Setting\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Hardware\")]),_vm._v(\" та переконайтеся, що налаштування виглядають так, як на зображенні. Виправте налаштування за потреби та натисніть кнопку \"),_c('code',{pre:true},[_vm._v(\"Save\")]),_vm._v(\":\")])])]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]}}),_c('p',[_vm._v(\"Таблиця з необхідними значеннями:\")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v(\"Field\")]),_c('th',{attrs:{\"align\":\"left\"}},[_vm._v(\"Value\")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v(\"Zigbee module\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"TI\")])]),_c('tr',[_c('td',[_vm._v(\"Zigbee UART RX\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"22\")])]),_c('tr',[_c('td',[_vm._v(\"Zigbee UART TX\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"23\")])]),_c('tr',[_c('td',[_vm._v(\"Zigbee RST Pin\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"18\")])]),_c('tr',[_c('td',[_vm._v(\"Zigbee BSL Pin\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"19\")])]),_c('tr',[_c('td',[_vm._v(\"Service Button Pin\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"33 (pullUP - true)\")])]),_c('tr',[_c('td',[_vm._v(\"Number addressable leds\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"0\")])]),_c('tr',[_c('td',[_vm._v(\"Led Red (or addr)\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"21\")])]),_c('tr',[_c('td',[_vm._v(\"Led Green\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"5\")])]),_c('tr',[_c('td',[_vm._v(\"Led Blue\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"27\")])]),_c('tr',[_c('td',[_vm._v(\"I2C SDA\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"255\")])]),_c('tr',[_c('td',[_vm._v(\"I2C SCL\")]),_c('td',{attrs:{\"align\":\"left\"}},[_vm._v(\"255\")])])])]),_c('ol',{attrs:{\"start\":\"8\"}},[_c('li',[_c('p',[_vm._v(\"Потім перезавантажте шлюз. Виберіть \"),_c('code',{pre:true},[_vm._v(\"Actions\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Reboot system\")]),_vm._v(\" в правому верхньому куті.\")])]),_c('li',[_c('p',[_vm._v(\"Переконайтеся, що шлюз працює належним чином у вікні інформації Zigbee. DeviceState повинен бути \"),_c('code',{pre:true},[_vm._v(\"OK\")]),_vm._v(\".\")])]),_c('li',[_c('p',[_vm._v(\"Налаштуйте автоматичне додавання пристроїв до Home Assistant. Перейдіть до \"),_c('code',{pre:true},[_vm._v(\"Zigbee\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Config\")]),_vm._v(\", потім виберіть \"),_c('code',{pre:true},[_vm._v(\"Home Assistant MQTT Discovery\")]),_vm._v(\" та \"),_c('code',{pre:true},[_vm._v(\"Clear States\")]),_vm._v(\". Збережіть зміни та знову \"),_c('strong',[_vm._v(\"перезавантажте\")]),_vm._v(\" SLS шлюз.\")])])]),_c('robo-wiki-note',{attrs:{\"type\":\"warning\"}},[_c('p',[_vm._v(\"Якщо у вас вже є активний SLS шлюз у вашому будинку, і ви зараз налаштовуєте ще один, то вони будуть конфліктувати один з одним. Щоб вирішити цю проблему, вам потрібно змінити канал на новому пристрої. Для цього перейдіть до \"),_c('code',{pre:true},[_vm._v(\"Zigbee\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Config\")]),_vm._v(\" та змініть канал на інший (наприклад, канал 15).\")])]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]}}),_c('h2',{attrs:{\"id\":\"парування-sls-з-mqtt\"}},[_c('a',{attrs:{\"href\":\"#%D0%BF%D0%B0%D1%80%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-sls-%D0%B7-mqtt\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Парування SLS з MQTT\")]),_c('p',[_vm._v(\"Після налаштування SLS Шлюзу вам потрібно підключити SLS Шлюз до Home Assistant. Відкрийте веб-інтерфейс SLS Шлюзу та перейдіть до \"),_c('code',{pre:true},[_vm._v(\"Settings/Link\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"MQTT Setup\")]),_vm._v(\":\")]),_c('p',[_vm._v(\"Додайте адресу вашого брокера (адреса Raspberry Pi з Home Assistant у локальній мережі, ви можете знайти її за допомогою \"),_c('a',{attrs:{\"href\":\"https://www.fing.com/products\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"мобільного додатку Fing\")]),_vm._v(\" або \"),_c('a',{attrs:{\"href\":\"https://vitux.com/find-devices-connected-to-your-network-with-nmap/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"інструменту командного рядка nmap\")]),_vm._v(\"), порт (за замовчуванням \"),_c('code',{pre:true},[_vm._v(\"1883\")]),_vm._v(\"), ім'я користувача та пароль брокера (які ви створили раніше) та назву теми (ви можете вибрати будь-яку). Також, IP-адреса Raspberry Pi повинна бути статичною. Натисніть \"),_c('code',{pre:true},[_vm._v(\"Enable\")]),_vm._v(\" та \"),_c('code',{pre:true},[_vm._v(\"Retain states\")]),_vm._v(\".\")]),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]}}),_c('p',[_vm._v(\"Збережіть зміни. Тепер пристрої будуть автоматично відображатися в Home Assistant.\")]),_c('h2',{attrs:{\"id\":\"підключення-пристроїв\"}},[_c('a',{attrs:{\"href\":\"#%D0%BF%D1%96%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BF%D1%80%D0%B8%D1%81%D1%82%D1%80%D0%BE%D1%97%D0%B2\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Підключення пристроїв\")]),_c('p',[_vm._v(\"Підключіть ваші пристрої, перейшовши до розділу \"),_c('code',{pre:true},[_vm._v(\"Zigbee\")]),_vm._v(\" -> \"),_c('code',{pre:true},[_vm._v(\"Join\")]),_vm._v(\". Поставте ваші сенсори в режим парування, найпоширеніший спосіб переключити пристрій в режим підключення - утримувати його кнопку живлення або включати / вимикати його 5 разів. Натисніть кнопку \"),_c('code',{pre:true},[_vm._v(\"Enable Join\")]),_vm._v(\", щоб почати пошук пристроїв Zigbee. Ви побачите активні сенсори.\")]),_c('robo-wiki-picture',{attrs:{\"src\":\"home-assistant/switch-device.gif\"}}),_c('robo-wiki-video',{attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\",\"videos\":[{src: 'https://cloudflare-ipfs.com/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]}}),_c('p',[_vm._v(\"Тепер ви можете перейти до розділу \"),_c('a',{attrs:{\"href\":\"/docs/sub-activate\"}},[_c('strong',[_vm._v(\"Підписка на IoT\")])]),_vm._v(\" та почати активувати підписку Robonomics.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/uk/sls-gateway.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "78iD":
/*!********************************!*\
  !*** ./docs/uk/sls-gateway.md ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sls_gateway_md_vue_type_template_id_3bf7f29a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=template&id=3bf7f29a& */ \"UnLV\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"h02M\");\n/* harmony import */ var _sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"l9Si\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _sls_gateway_md_vue_type_template_id_3bf7f29a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sls_gateway_md_vue_type_template_id_3bf7f29a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/uk/sls-gateway.md?");

/***/ }),

/***/ "Jqpi":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/uk/sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Robonomics SLS Шлюз\",\n  \"contributors\": [\"LoSk-p\", \"Fingerling42\", \"nakata5321\"],\n  \"tools\": [\"SLS Firmware 2022.08.13 https://github.com/airalab/robonomics-hass-utils\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/uk/sls-gateway.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "MGEb":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/uk/sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/uk/sls-gateway.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "UnLV":
/*!***************************************************************!*\
  !*** ./docs/uk/sls-gateway.md?vue&type=template&id=3bf7f29a& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_3bf7f29a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=template&id=3bf7f29a& */ \"1MRx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_3bf7f29a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_template_id_3bf7f29a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/uk/sls-gateway.md?");

/***/ }),

/***/ "h02M":
/*!************************************************************************************!*\
  !*** ./docs/uk/sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"MGEb\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/uk/sls-gateway.md?");

/***/ }),

/***/ "l9Si":
/*!*****************************************************************************************!*\
  !*** ./docs/uk/sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Jqpi\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/uk/sls-gateway.md?");

/***/ })

}]);