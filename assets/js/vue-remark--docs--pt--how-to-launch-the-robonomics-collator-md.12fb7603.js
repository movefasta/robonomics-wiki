(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--pt--how-to-launch-the-robonomics-collator-md"],{

/***/ "1JnV":
/*!*****************************************************************************************!*\
  !*** ./docs/pt/how-to-launch-the-robonomics-collator.md?vue&type=template&id=5784fd7b& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_template_id_5784fd7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./how-to-launch-the-robonomics-collator.md?vue&type=template&id=5784fd7b& */ \"1b4a\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_template_id_5784fd7b___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_template_id_5784fd7b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/pt/how-to-launch-the-robonomics-collator.md?");

/***/ }),

/***/ "1b4a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/how-to-launch-the-robonomics-collator.md?vue&type=template&id=5784fd7b& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('robo-wiki-note',{attrs:{\"type\":\"note\",\"title\":\"Note\"}},[_vm._v(\"\\n  No screencast e nas capturas de tela deste artigo, usamos a versão 1.4.0 do Robonomics. Você precisa usar os mesmos comandos, mas substituir a versão do Robonomics pela atual.\\n\")]),_c('div',{staticClass:\"youtube-embed\"},[_c('div',{staticStyle:{\"width\":\"100%\",\"margin\":\"0 auto\"}},[_c('div',{staticStyle:{\"position\":\"relative\",\"padding-bottom\":\"56.25%\",\"padding-top\":\"25px\",\"height\":\"0\"}},[_c('iframe',{staticStyle:{\"position\":\"absolute\",\"top\":\"0\",\"left\":\"0\",\"width\":\"100%\",\"height\":\"100%\"},attrs:{\"src\":\"https://www.youtube-nocookie.com/embed/wUTDDLDbzTg\",\"allow\":\"autoplay; encrypted-media\",\"allowfullscreen\":\"\"}})])])]),_c('p',[_vm._v(\"Atualmente, a rede Robonomics é mantida principalmente pelos desenvolvedores iniciais, mas qualquer pessoa pode apoiar o projeto. Cada nó completo adicional da blockchain ajuda a torná-la mais sustentável e tolerante a falhas. Os binários do nó Robonomics estão disponíveis em \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/robonomics/releases\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"release\")]),_vm._v(\" ou podem ser \"),_c('a',{attrs:{\"href\":\"/docs/how-to-build-collator-node/\"}},[_vm._v(\"construídos a partir do código-fonte\")]),_vm._v(\".\")]),_c('h2',{attrs:{\"id\":\"o-que-é-um-colator\"}},[_c('a',{attrs:{\"href\":\"#o-que-%C3%A9-um-colator\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"O que é um colator\")]),_c('p',[_vm._v(\"Um Collator faz parte do parachain Robonomics. Esse tipo de nó cria novos blocos para a cadeia Robonomics.\")]),_c('blockquote',[_c('p',[_vm._v(\"Os colatores mantêm as parachains coletando transações de parachain dos usuários e produzindo provas de transição de estado para os validadores da Relay Chain. Em outras palavras, os colatores mantêm as parachains agregando transações de parachain em candidatos a blocos de parachain e produzindo provas de transição de estado para os validadores com base nesses blocos.\")])]),_c('p',[_vm._v(\"Você pode aprender mais sobre collators na página wiki relacionada do \"),_c('a',{attrs:{\"href\":\"https://wiki.polkadot.network/docs/learn-collator\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Polkadot\")])]),_c('p',[_vm._v(\"No parachain Robonomics, cada agrupador recebe recompensas de (\"),_c('strong',[_vm._v(\"0,001598184 XRT\")]),_vm._v(\") para cada bloco que o agrupador constrói (as recompensas ocorrem quando os blocos são selados à cadeia).\\nAlém disso, o collator que constrói o bloco recebe \"),_c('strong',[_vm._v(\"50% das taxas de transação\")]),_vm._v(\" contidas no bloco que eles criam.\")]),_c('h2',{attrs:{\"id\":\"requisitos\"}},[_c('a',{attrs:{\"href\":\"#requisitos\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Requisitos\")]),_c('p',[_vm._v(\"Recomenda-se lançar um collator usando os \"),_c('strong',[_vm._v(\"requisitos de hardware padrão\")]),_vm._v(\" para \"),_c('a',{attrs:{\"href\":\"https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#standard-hardware\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"validadores Polkadot\")]),_vm._v(\":\")]),_c('ul',[_c('li',[_vm._v(\"Compatível com x86-64.\")]),_c('li',[_vm._v(\"Intel Ice Lake, ou mais recente (Xeon ou série Core); AMD Zen3, ou mais recente (EPYC ou Ryzen).\")]),_c('li',[_vm._v(\"4 núcleos físicos @ 3.4GHz.\")]),_c('li',[_vm._v(\"Multithreading simultâneo desativado (Hyper-Threading na Intel, SMT na AMD).\")]),_c('li',[_vm._v(\"Armazenamento - Um SSD NVMe de 1 TB (Deve ter um tamanho razoável para lidar com o crescimento da blockchain).\")]),_c('li',[_vm._v(\"Memória - 32 GB DDR4 ECC\")])]),_c('p',[_vm._v(\"Neste artigo, usamos as seguintes especificações:\")]),_c('ul',[_c('li',[_vm._v(\"4 vCPU\")]),_c('li',[_vm._v(\"700 GB de espaço NVMe para bancos de dados do collator. A capacidade de expandir esse espaço em disco é necessária.\")]),_c('li',[_vm._v(\"8GB de RAM\")])]),_c('h2',{attrs:{\"id\":\"informações-importantes\"}},[_c('a',{attrs:{\"href\":\"#informa%C3%A7%C3%B5es-importantes\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Informações importantes\")]),_c('ol',[_c('li',[_c('p',[_vm._v(\"Usamos algumas variáveis nessas instruções e você precisará substituir os valores pelos seus próprios em todos os comandos:\")]),_c('ul',[_c('li',[_c('strong',[_vm._v(\"%NODE_NAME%\")]),_vm._v(\" é o nome do nó. Exemplo: \"),_c('em',[_vm._v(\"meu-robonomics-kusama-collator\")])]),_c('li',[_c('strong',[_vm._v(\"%BASE_PATH%\")]),_vm._v(\" é o caminho para o volume montado. Exemplo: \"),_c('em',[_vm._v(\"/mnt/HC_Volume_16056435/\")])]),_c('li',[_c('strong',[_vm._v(\"%POLKADOT_ACCOUNT_ADDRESS%\")]),_vm._v(\" é o endereço da conta no ecossistema Polkadot no formato SS58. Exemplo: \"),_c('em',[_vm._v(\"4Gp3QpacQhp4ZReGhJ47pzExQiwoNPgqTWYqEQca9XAvrYsu\")])])])]),_c('li',[_c('p',[_vm._v(\"Observe que você precisa incluir \"),_c('em',[_vm._v(\"--state-cache-size=0\")]),_vm._v(\" no lançamento do serviço do collator. Esse parâmetro é importante para a estabilidade do collator.\\nVocê pode ver mais informações no \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/robonomics/issues/234\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"issue\")]),_vm._v(\" relacionado no github.\")])])]),_c('h2',{attrs:{\"id\":\"lançar-facilmente-um-robonomics-collator-pela-primeira-vez\"}},[_c('a',{attrs:{\"href\":\"#lan%C3%A7ar-facilmente-um-robonomics-collator-pela-primeira-vez\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Lançar facilmente um Robonomics collator pela primeira vez\")]),_c('p',[_vm._v(\"Você pode lançar facilmente um collator diretamente na linha de comando para verificar erros.\\nDepois de fazer isso, é altamente recomendável lançar o Robonomics collator como um serviço (veja o próximo passo).\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# robonomics \\\\\\n  --parachain-id=2048 \\\\\\n  --name=\\\"%NODE_NAME%\\\" \\\\\\n  --validator \\\\\\n  --lighthouse-account=\\\"%POLKADOT_ACCOUNT_ADDRESS%\\\" \\\\\\n  --telemetry-url=\\\"wss://telemetry.parachain.robonomics.network/submit/ 0\\\" \\\\\\n  --base-path=\\\"%BASE_PATH%\\\" \\\\\\n  --state-cache-size=0 \\\\\\n  -- \\\\\\n  --database=RocksDb \\n\")])]),_c('h2',{attrs:{\"id\":\"lançar-o-robonomics-collator-como-um-serviço\"}},[_c('a',{attrs:{\"href\":\"#lan%C3%A7ar-o-robonomics-collator-como-um-servi%C3%A7o\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Lançar o Robonomics collator como um serviço\")]),_c('ol',[_c('li',[_c('p',[_vm._v(\"Crie o usuário para o serviço com diretório home\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# useradd -m robonomics\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Baixe, extraia e mova o binário do Robonomics para o diretório \"),_c('em',[_vm._v(\"/usr/local/bin/\")]),_vm._v(\". Você precisa substituir \"),_c('em',[_vm._v(\"$ROBONOMICS_VERSION\")]),_vm._v(\" pela versão atual do Robonomics nos comandos desta seção. Você pode encontrar a versão atual na \"),_c('a',{attrs:{\"href\":\"https://github.com/airalab/robonomics/releases\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"página de lançamentos do repositório Robonomics no github\")]),_vm._v(\".\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# wget https://github.com/airalab/robonomics/releases/download/v$ROBONOMICS_VERSION/robonomics-$ROBONOMICS_VERSION-x86_64-unknown-linux-gnu.tar.gz\\nroot@robokusama-collator-screencast:~# tar -xf robonomics-$ROBONOMICS_VERSION-x86_64-unknown-linux-gnu.tar.gz\\nroot@robokusama-collator-screencast:~# mv robonomics /usr/local/bin/\\n\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Download%20Robonomics%201.4.0%20binary!../images/how-to-launch-the-robonomics-collator/wget_binary.png */ \"DckE\"),\"alt\":\"Download Robonomics 1.4.0 binary\"}})],1)])]),_c('ol',{attrs:{\"start\":\"3\"}},[_c('li',[_c('p',[_vm._v(\"Crie o arquivo de serviço systemd chamado \"),_c('em',[_vm._v(\"robonomics.service\")]),_vm._v(\":\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# nano /etc/systemd/system/robonomics.service\\n\")])]),_c('p',[_vm._v(\"E adicione as seguintes linhas no arquivo de serviço:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"[Unit]\\nDescription=robonomics\\nAfter=network.target\\n\\n[Service]\\nUser=robonomics\\nGroup=robonomics\\nType=simple\\nRestart=on-failure\\n\\nExecStart=/usr/local/bin/robonomics \\\\\\n  --parachain-id=2048 \\\\\\n  --name=\\\"%NODE_NAME%\\\" \\\\\\n  --validator \\\\\\n  --lighthouse-account=\\\"%POLKADOT_ACCOUNT_ADDRESS%\\\" \\\\\\n  --telemetry-url=\\\"wss://telemetry.parachain.robonomics.network/submit/ 0\\\" \\\\\\n  --base-path=\\\"%BASE_PATH%\\\" \\\\\\n  --state-cache-size=0 \\\\\\n  --execution=Wasm \\\\\\n  -- \\\\\\n  --database=RocksDb \\\\\\n  --execution=Wasm\\n\\n[Install]\\nWantedBy=multi-user.target\\n\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Create%20Robonomics%20service%20file!../images/how-to-launch-the-robonomics-collator/nano_robonomics_service.png */ \"uVHJ\"),\"alt\":\"Create Robonomics service file\"}})],1)])]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\nroot@robokusama-collator-screencast:~# chown -R robonomics:robonomics %BASE_PATH%\\n```\\n\")])]),_c('ol',{attrs:{\"start\":\"4\"}},[_c('li',[_vm._v(\"Salve este arquivo, em seguida, habilite e inicie o serviço:\"),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# systemctl enable robonomics.service \\nroot@robokusama-collator-screencast:~# systemctl start robonomics.service\\n\")])])])]),_c('p',[_vm._v(\"URL de telemetria: \"),_c('a',{attrs:{\"href\":\"https://telemetry.parachain.robonomics.network/#/Robonomics\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"https://telemetry.parachain.robonomics.network/#/Robonomics\")])]),_c('p',[_vm._v(\"Os logs dos agrupadores podem ser monitorados com: \"),_c('code',{pre:true},[_vm._v(\"journalctl -u robonomics.service -f\")])]),_c('p',[_vm._v(\"Assim que o coletor Robonomics for iniciado, ele começará a sincronizar com o Kusama Relay Chain. Isso pode levar um tempo considerável, dependendo da velocidade da rede e das especificações do sistema, por isso recomendamos baixar um instantâneo do Kusama.\")]),_c('h2',{attrs:{\"id\":\"acelerando-o-processo-de-sincronização-usando-um-snapshot-do-kusama\"}},[_c('a',{attrs:{\"href\":\"#acelerando-o-processo-de-sincroniza%C3%A7%C3%A3o-usando-um-snapshot-do-kusama\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Acelerando o processo de sincronização usando um snapshot do Kusama\")]),_c('p',[_vm._v(\"Recomendamos fazer isso imediatamente após criar e iniciar o serviço Robonomics. Você pode encontrar mais informações sobre snapshots e instruções de uso na seguinte página: \"),_c('a',{attrs:{\"href\":\"https://ksm-rocksdb.polkashots.io/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"https://ksm-rocksdb.polkashots.io/\")])]),_c('p',[_vm._v(\"Instruções:\")]),_c('ol',[_c('li',[_c('p',[_vm._v(\"Pare o serviço Robonomics e remova o diretório do banco de dados atual do Kusama:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# systemctl stop robonomics.service\\nroot@robokusama-collator-screencast:~# rm -rf %BASE_PATH%/polkadot/chains/ksmcc3/db/\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Baixe o snapshot atual e extraia-o:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# wget https://ksm-rocksdb.polkashots.io/snapshot -O kusama.RocksDb.tar.lz4\\nroot@robokusama-collator-screencast:~# lz4 -c -d kusama.RocksDb.tar.lz4 | tar -x -C %BASE_PATH%/polkadot/chains/ksmcc3\\n\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Download%20Kusama%20snapshot!../images/how-to-launch-the-robonomics-collator/wget_kusama_snapshot.png */ \"5AcP\"),\"alt\":\"Download Kusama snapshot\"}})],1),_c('p',[_vm._v(\"Você pode remover o arquivo baixado após descompactar com sucesso:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# rm -v kusama.RocksDb.tar.lz4\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Definindo a propriedade correta para a pasta do banco de dados:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# chown -R robonomics:robonomics %BASE_PATH%/polkadot/chains/ksmcc3\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Inicie o serviço Robonomics novamente:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# systemctl start robonomics.service\\n\")])])]),_c('li',[_c('p',[_vm._v(\"Verifique os logs do serviço:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# journalctl -u robonomics.service -f\\n\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Check%20service%20logs!../images/how-to-launch-the-robonomics-collator/finish_journalctl.png */ \"0J1J\"),\"alt\":\"Check service logs\"}})],1)])]),_c('h2',{attrs:{\"id\":\"solucionando-problemas\"}},[_c('a',{attrs:{\"href\":\"#solucionando-problemas\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Solucionando Problemas\")]),_c('h3',{attrs:{\"id\":\"erro-state-database-error-too-many-sibling-blocks-inserted\"}},[_c('a',{attrs:{\"href\":\"#erro-state-database-error-too-many-sibling-blocks-inserted\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Erro: \\\"State Database error: Too many sibling blocks inserted\\\"\")]),_c('p',[_vm._v(\"Para corrigir esse erro, você pode simplesmente iniciar seu agrupador no modo de arquivamento:\")]),_c('p',[_vm._v(\"1) Primeiro, pare o serviço Robonomics: \")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"root@robokusama-collator-screencast:~# systemctl stop robonomics.service\\n\")])]),_c('p',[_vm._v(\"2) Em seguida, adicione o parâmetro \"),_c('code',{pre:true},[_vm._v(\"--state-pruning=archive\")]),_vm._v(\" à parte da parachain do arquivo de serviço. Exemplo do arquivo de serviço editado:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\n[Unit]\\nDescription=robonomics\\nAfter=network.target\\n\\n[Service]\\nUser=robonomics\\nGroup=robonomics\\nType=simple\\nRestart=on-failure\\n\\nExecStart=/usr/local/bin/robonomics \\\\\\n--parachain-id=2048 \\\\\\n--name=\\\"%NODE_NAME%\\\" \\\\\\n--validator \\\\\\n--lighthouse-account=\\\"%POLKADOT_ACCOUNT_ADDRESS%\\\" \\\\\\n--telemetry-url=\\\"wss://telemetry.parachain.robonomics.network/submit/ 0\\\" \\\\\\n--base-path=\\\"%BASE_PATH%\\\" \\\\\\n--state-cache-size=0 \\\\\\n--execution=Wasm \\\\\\n--state-pruning=archive \\\\\\n-- \\\\\\n--database=RocksDb \\\\\\n--execution=Wasm \\n\\n[Instalar]\\nWantedBy=multi-user.target\\n```\\n\")])]),_c('p',[_vm._v(\"3) Recarregue a configuração do gerenciador do systemd:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\nroot@robokusama-collator-screencast:~# systemctl daemon-reload\\n```\\n\")])]),_c('p',[_vm._v(\"4) Remova o banco de dados da parachain existente:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\nroot@robokusama-collator-screencast:~# rm -rf %BASE_PATH%/chains/robonomics/db/\\n```\\n\")])]),_c('p',[_vm._v(\"5) Inicie o serviço robonomics:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"```\\nroot@robokusama-collator-screencast:~# systemctl start robonomics.service\\n```\\n\\nDepois disso, é necessário aguardar a sincronização do banco de dados da parachain.\\n\")])]),_c('h3',{attrs:{\"id\":\"erro-cannot-create-module-compilation-settings-are-not-compatible-with-the-native-host\"}},[_c('a',{attrs:{\"href\":\"#erro-cannot-create-module-compilation-settings-are-not-compatible-with-the-native-host\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Erro: \\\"cannot create module: compilation settings are not compatible with the native host\\\"\")]),_c('p',[_vm._v(\"Esse erro está relacionado aos parâmetros de virtualização. É necessário usar o tipo de processador emulado \\\"host-model\\\". Você pode configurar isso no host de virtualização.\")]),_c('p',[_vm._v(\"No entanto, se você encontrar esse erro em qualquer hospedagem, é necessário entrar em contato com o suporte técnico apenas sobre esse problema.\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/pt/how-to-launch-the-robonomics-collator.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "6myN":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/how-to-launch-the-robonomics-collator.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/pt/how-to-launch-the-robonomics-collator.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "KIsf":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/how-to-launch-the-robonomics-collator.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Como lançar o Robonomics collator\",\n  \"contributors\": [\"dergudzon\", \"Leemo94\"],\n  \"tools\": [\"Ubuntu 22.04.1 https://releases.ubuntu.com/22.04/\", \"Robonomics 2.6.0 https://github.com/airalab/robonomics\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/pt/how-to-launch-the-robonomics-collator.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "OmKc":
/*!*******************************************************************************************************************!*\
  !*** ./docs/pt/how-to-launch-the-robonomics-collator.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./how-to-launch-the-robonomics-collator.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"KIsf\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/how-to-launch-the-robonomics-collator.md?");

/***/ }),

/***/ "nK27":
/*!**************************************************************************************************************!*\
  !*** ./docs/pt/how-to-launch-the-robonomics-collator.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./how-to-launch-the-robonomics-collator.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"6myN\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/how-to-launch-the-robonomics-collator.md?");

/***/ }),

/***/ "vW74":
/*!**********************************************************!*\
  !*** ./docs/pt/how-to-launch-the-robonomics-collator.md ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _how_to_launch_the_robonomics_collator_md_vue_type_template_id_5784fd7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-to-launch-the-robonomics-collator.md?vue&type=template&id=5784fd7b& */ \"1JnV\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./how-to-launch-the-robonomics-collator.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"nK27\");\n/* harmony import */ var _how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-to-launch-the-robonomics-collator.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"OmKc\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _how_to_launch_the_robonomics_collator_md_vue_type_template_id_5784fd7b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _how_to_launch_the_robonomics_collator_md_vue_type_template_id_5784fd7b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_how_to_launch_the_robonomics_collator_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/pt/how-to-launch-the-robonomics-collator.md?");

/***/ })

}]);