(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--create-account-in-dapp-md"],{

/***/ "2Wqq":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"4964dc46-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/create-account-in-dapp.md?vue&type=template&id=a6aeea96& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_c('strong',[_vm._v(\"Robonomics Parachain と対話して操作するには、開発者とユーザーは Polkadot / Substrate Portal でアカウントを作成する必要があります。 アカウントはネットワークの基本的な機能を実行します: パブリック ネットワーク アドレス (公開キー)、アドレスと資金へのアクセス制御 (秘密キー)、ネットワークへのトランザクションの送信、トークンとその量の表示など。 ロボノミクス パラチェーンのアカウントを作成する 2 つの主な方法\")])]),_c('h2',{attrs:{\"id\":\"1-polkadotjsブラウザ拡張機能を使用する\"}},[_c('a',{attrs:{\"href\":\"#1-polkadotjs%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1. Polkadot{.js}ブラウザ拡張機能を使用する\")]),_c('p',[_vm._v(\"Polkadot拡張機能は、Robonomicsパラチェーンを含むすべてのPolkadot / Kusamaプロジェクトとのアカウント生成とやり取りを提供します。これはアカウントを管理するための最も安全な方法ではありませんが、セキュリティ/使いやすさのバランスにおいて最も便利な方法です。\")]),_c('h2',{attrs:{\"id\":\"11-ブラウザ拡張機能のインストール\"}},[_c('a',{attrs:{\"href\":\"#11-%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1.1. ブラウザ拡張機能のインストール\")]),_c('p',[_vm._v(\"ブラウザ拡張機能は、 \"),_c('a',{attrs:{\"href\":\"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"FireFox\")]),_vm._v(\" そして \"),_c('a',{attrs:{\"href\":\"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Google Chrome\")]),_vm._v(\" （クロムベースのブラウザを含む）で利用できます。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Browser%20Extension&title=Browser%20Extension!../images/creating-an-account/1.1-polkadot-extension.png */ \"dYIr\"),\"alt\":\"Browser Extension\",\"title\":\"Browser Extension\"}})],1),_c('h2',{attrs:{\"id\":\"12-robonomicsパラチェーンアプリを開く\"}},[_c('a',{attrs:{\"href\":\"#12-robonomics%E3%83%91%E3%83%A9%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E3%81%8F\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1.2. Robonomicsパラチェーンアプリを開く\")]),_c('p',[_vm._v(\"に移動し、 \"),_c('a',{attrs:{\"href\":\"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"RobonomicsパラチェーンアプリをPolkadot / Substrateポータルで開きます。ポータルに初めて入った場合、ブラウザ拡張機能へのアクセスを要求されるので、アクセスを許可してください。\")]),_vm._v(\" アプリを開いたら、左上の角に注目してください。ネットワークの名前、アイコンおよび最後のブロックの番号が表示されます。この領域をクリックすると、テストネットワークやローカルノードを含むすべてのPolkadot / Kusamaネットワークのリストが表示されます。必要なネットワークを選択し、 \")]),_c('p',[_vm._v(\"アプリを開いたら、左上隅を見てください。 そこには、ネットワークの名前、そのアイコン、最後のブロックの番号が表示されます。 この領域をクリックすると、テスト ネットワークやローカル ノードを含む、すべての Polkadot/Kusama ネットワークのリストが開きます。 必要なネットワークを選択して \"),_c('code',{pre:true},[_vm._v(\"Switch\")]),_vm._v(\"ボタンを押すと、ネットワークを切り替えることができます。 \"),_c('strong',[_vm._v(\"今すぐ Robonomics Parachain に接続していることを確認してください\")]),_vm._v(\"。 \")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Robonomics%20Parachain%20app&title=Robonomics%20Parachain%20app!../images/creating-an-account/1.2-robonomics-app.png */ \"kmyX\"),\"alt\":\"Robonomics Parachain app\",\"title\":\"Robonomics Parachain app\"}})],1),_c('h2',{attrs:{\"id\":\"13-拡張機能のメタデータを更新する\"}},[_c('a',{attrs:{\"href\":\"#13-%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%81%AE%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E6%9B%B4%E6%96%B0%E3%81%99%E3%82%8B\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1.3. 拡張機能のメタデータを更新する\")]),_c('p',[_vm._v(\"アプリは、接続しているチェーンに関する正しい情報を表示するために、拡張機能のメタデータを更新するように要求する可能性が高くなります。 \"),_c('strong',[_vm._v(\"Settings -> Metadata\")]),_vm._v(\" に移動し、「 \"),_c('code',{pre:true},[_vm._v(\"Update metadata\")]),_vm._v(\" 」ボタンを押して、ポップアップ ウィンドウで拡張機能による更新を許可します。 \")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Updating%20metadata&title=Updating%20metadata!../images/creating-an-account/1.3-metadata-update.png */ \"/Blg\"),\"alt\":\"Updating metadata\",\"title\":\"Updating metadata\"}})],1),_c('h2',{attrs:{\"id\":\"14-拡張機能でアカウントを作成する\"}},[_c('a',{attrs:{\"href\":\"#14-%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%81%A7%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"1.4. 拡張機能でアカウントを作成する\")]),_c('p',[_vm._v(\"Polkadot{.js} ブラウザ拡張機能を開きます。 大きなプラス ボタンをクリックするか、右上の小さなプラス アイコンから\"),_c('code',{pre:true},[_vm._v(\"Create new account\")]),_vm._v(\" を選択します。 次のメニューが表示され、12 個の単語とアドレスの形式で生成されたニーモニック シードが表示されます。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Account%20creation%2C%20step%20one&title=Account%20creation%2C%20step%20one!../images/creating-an-account/1.4-create-account-step-1.png */ \"1lMu\"),\"alt\":\"Account creation, step one\",\"title\":\"Account creation, step one\"}})],1),_c('p',[_vm._v(\"シードはアカウントへのキーです。 シードを知っていれば、あなた (またはシードを知っている他の人) がこのアカウントを制御できるようになり、パスワードを忘れた場合でもアカウントを再作成できるようになります。 \"),_c('strong',[_vm._v(\"安全な場所に保存することが非常に重要です\")]),_vm._v(\"。デジタル ストレージやコンピュータではなく、できれば紙やその他の非デジタル デバイスに保存してください。 \")]),_c('p',[_vm._v(\"種子を保存して押してください \"),_c('code',{pre:true},[_vm._v(\"Next step\")]),_vm._v(\". 次のメニューが表示されます。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Account%20creation%2C%20step%20two&title=Account%20creation%2C%20step%20two!../images/creating-an-account/1.5-create-account-step-2.png */ \"kRUZ\"),\"alt\":\"Account creation, step two\",\"title\":\"Account creation, step two\"}})],1),_c('ul',[_c('li',[_c('p',[_c('em',[_vm._v(\"Network\")]),_vm._v(\" このアカウントが専用に使用されるネットワークを選択することができます。同じアドレスを複数のネットワークで使用することもできますが、プライバシーのために、使用すネットワークごとに新しいアドレスを作成することをお勧めします。 \\nドロップダウンリストからRobonomicsネットワークを選択してください。Robonomicsネットワークが見つからない場合は、おそらくメタデータを更新していないためですので、戻って更新してください。\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"- アドレスの形式とアカウントアイコンが変わることに気付くでしょう。これは正常です。異なるネットワーク形式は、同じ公開鍵の他の表現に過ぎません。 \\n\")])])]),_c('li',[_c('p',[_c('em',[_vm._v(\"Name\")]),_vm._v(\" は、アカウントの名前であり、あなた自身のためだけのものです。ブロックチェーンには保存されず、他のユーザーには表示されません。 \")])]),_c('li',[_c('p',[_c('em',[_vm._v(\"Password\")]),_vm._v(\" は、アカウントの情報を暗号化するために使用されます。ポータルでトランザクションに署名する際に再入力する必要があります。作成して覚えておいてください。\")])])]),_c('p',[_vm._v(\"その結果、アカウントを作成した後、Polkadot{.js}拡張機能のアカウントリストに表示されます。3つの点をクリックすることで、アカウントの名前を変更したり、エクスポートしたり、拡張機能から削除したり、アカウントに使用するネットワークを変更したりすることができす。 \")]),_c('p',[_vm._v(\"また、アカウントはポータルの \"),_c('strong',[_vm._v(\"Accounts -> Accounts\")]),_vm._v(\"  メニューに表示され、拡張機能を使用して挿入されたことがわかります。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Successful%20account%20creation&title=Successful%20account%20creation!../images/creating-an-account/1.6-account-injected.png */ \"88Yc\"),\"alt\":\"Successful account creation\",\"title\":\"Successful account creation\"}})],1),_c('h2',{attrs:{\"id\":\"ア2-ロボノミクスパラチェーンアプリ上で直接\"}},[_c('a',{attrs:{\"href\":\"#%E3%82%A22-%E3%83%AD%E3%83%9C%E3%83%8E%E3%83%9F%E3%82%AF%E3%82%B9%E3%83%91%E3%83%A9%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%82%A2%E3%83%97%E3%83%AA%E4%B8%8A%E3%81%A7%E7%9B%B4%E6%8E%A5\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"ア2. ロボノミクスパラチェーンアプリ上で直接\")]),_c('p',[_vm._v(\"Polkadot / Substrate Portal のユーザー インターフェイスを使用してアカウントを作成できます。 開発やテストに使用できます。\")]),_c('h2',{attrs:{\"id\":\"21-ロボノミクスパラチェーンアプリを開く\"}},[_c('a',{attrs:{\"href\":\"#21-%E3%83%AD%E3%83%9C%E3%83%8E%E3%83%9F%E3%82%AF%E3%82%B9%E3%83%91%E3%83%A9%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E9%96%8B%E3%81%8F\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"2.1. ロボノミクスパラチェーンアプリを開く\")]),_c('p',[_vm._v(\"に行く \"),_c('a',{attrs:{\"href\":\"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Robonomics Parachain app\")]),_vm._v(\" Polkadot / Substrate Portal で。 \"),_c('strong',[_vm._v(\"左上隅で、ロボノミクス パラチェーンに接続されていることを確認してください\")]),_vm._v(\"。\")]),_c('p',[_vm._v(\"に行く \"),_c('strong',[_vm._v(\"Accounts -> Accounts\")]),_vm._v(\" そして\"),_c('code',{pre:true},[_vm._v(\"Add account\")]),_vm._v(\" ボタンを押してください。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Robonomics%20Parachain%20App&title=Robonomics%20Parachain%20App!../images/creating-an-account/2.1-robonomics-app-main-view.png */ \"oWWt\"),\"alt\":\"Robonomics Parachain App\",\"title\":\"Robonomics Parachain App\"}})],1),_c('h2',{attrs:{\"id\":\"22-アカウントを作成する\"}},[_c('a',{attrs:{\"href\":\"#22-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"2.2. アカウントを作成する\")]),_c('p',[_vm._v(\"アカウント シードを含む次のポップアップ メニューが表示されるはずです。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Generating%20account%20seed&title=Generating%20account%20seed!../images/creating-an-account/2.2-robonomics-app-seed.png */ \"T8Qn\"),\"alt\":\"Generating account seed\",\"title\":\"Generating account seed\"}})],1),_c('p',[_vm._v(\"それには2つの形式があります： \"),_c('em',[_vm._v(\"Mnemonic\")]),_vm._v(\" （人が読める形式）と \"),_c('em',[_vm._v(\"Raw\")]),_vm._v(\" （数字と文字のシーケンス）。シードフレーズを安全に保存し、 \"),_c('code',{pre:true},[_vm._v(\"Next\")]),_vm._v(\".\")]),_c('blockquote',[_c('p',[_vm._v(\"ボタンを押してください。また、アカウントの作成に使用する暗号通貨のタイプを変更することもできます。そのたには、 \"),_c('code',{pre:true},[_vm._v(\"Advanced creation options\")]),_vm._v(\" を開いて、 (\"),_c('code',{pre:true},[_vm._v(\"ed25519\")]),_vm._v(\" を選択してください。).\")])]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=ed25519%20crypto%20type%20account!../images/creating-an-account/ed-account.jpg */ \"ls3s\"),\"alt\":\"ed25519 crypto type account\"}})],1),_c('p',[_vm._v(\"次のメニューでは、アカウント名とパスワードを設定する必要があります。これは、拡張機能の指示に記載されている手順と同様です。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Generating%20account%20name%20and%20password&title=Generating%20account%20name%20and%20password!../images/creating-an-account/2.3-robonomics-app-name-pass.png */ \"6yxK\"),\"alt\":\"Generating account name and password\",\"title\":\"Generating account name and password\"}})],1),_c('p',[_c('code',{pre:true},[_vm._v(\"Next\")]),_vm._v(\" ボタンをクリックすると、最後のウィンドウに移動します。 \"),_c('code',{pre:true},[_vm._v(\"Click\")]),_vm._v(\" をクリックしてアカウントの作成を完了します。 また、安全に保存する必要があるバックアップ JSON ファイルも生成されます。 パスワードを覚えている場合は、後でこのファイルを使用してアカウントを回復できます。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Successful%20account%20creation&title=Successful%20account%20creation!../images/creating-an-account/2.4-robonomics-app-account-created.png */ \"4MYP\"),\"alt\":\"Successful account creation\",\"title\":\"Successful account creation\"}})],1),_c('h2',{attrs:{\"id\":\"23-ed25519アカウントをpolkadot拡張機能に追加する\"}},[_c('a',{attrs:{\"href\":\"#23-ed25519%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%92polkadot%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"2.3 ed25519アカウントをPolkadot拡張機能に追加する\")]),_c('p',[_vm._v(\"作成したアカウントを Polkadot.js 拡張機能に追加する必要がある場合があります (ed25519 アカウントの場合は、バックアップ JSON ファイルでのみ追加できます)。 そのためには、アカウントのバックアップファイルを作成する必要があります。 アカウントの 3 つの点を押して、「このアカウントのバックアップ ファイルを作成する」を選択し、パスワードを入力します。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Backup%20file!../images/creating-an-account/backup-file.jpg */ \"wQgo\"),\"alt\":\"Backup file\"}})],1),_c('p',[_vm._v(\"次に、拡張機能を開いて右上の「+」ボタンを押し、 \"),_c('code',{pre:true},[_vm._v(\"Restore account from backup JSON file\")]),_vm._v(\" を選択します。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Restore%20backup%20in%20extension!../images/creating-an-account/extention-add-backup.jpg */ \"iKFn\"),\"alt\":\"Restore backup in extension\"}})],1),_c('p',[_vm._v(\" 開いたウィンドウで保存したファイルをドロップし、パスワードを入力して\"),_c('code',{pre:true},[_vm._v(\"Restore\")]),_vm._v(\"を押します。\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=Restore%20backup%20in%20extension%202!../images/creating-an-account/file-backup.jpg */ \"BWuA\"),\"alt\":\"Restore backup in extension 2\"}})],1),_c('h2',{attrs:{\"id\":\"3-アカウントの作成に成功しました\"}},[_c('a',{attrs:{\"href\":\"#3-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%AB%E6%88%90%E5%8A%9F%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"3. アカウントの作成に成功しました\")]),_c('p',[_vm._v(\"これで新しく作成したアカウントをフルに操作することができます。トークンの送受信、メッセージの送信、データログの書き込みなどが可能です。アプリのすべての機能を自由に探索してください。アカウントのアドレスをコピーするには、そのアイコンをクリックするだけで、アドレスがクリップボードにコピーされます。 \")]),_c('p',[_vm._v(\"Polkadot/Kusamaアカウントについてさらに詳しく知りたい場合や、それらを作成するための追加の方法については、詳細な情報が見つかります \"),_c('a',{attrs:{\"href\":\"https://wiki.polkadot.network/docs/learn-accounts\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"ここ\")]),_vm._v(\" と \"),_c('a',{attrs:{\"href\":\"https://wiki.polkadot.network/docs/learn-account-generation\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"ここ\")]),_vm._v(\".\")])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ja/create-account-in-dapp.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%224964dc46-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "6FNs":
/*!***********************************************************************************************!*\
  !*** ./docs/ja/create-account-in-dapp.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_create_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./create-account-in-dapp.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"JfKg\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_create_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/create-account-in-dapp.md?");

/***/ }),

/***/ "JfKg":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/create-account-in-dapp.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/create-account-in-dapp.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "K1Xz":
/*!****************************************************************************************************!*\
  !*** ./docs/ja/create-account-in-dapp.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_create_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./create-account-in-dapp.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"UX5l\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_create_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/create-account-in-dapp.md?");

/***/ }),

/***/ "PhR8":
/*!*******************************************!*\
  !*** ./docs/ja/create-account-in-dapp.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_account_in_dapp_md_vue_type_template_id_a6aeea96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account-in-dapp.md?vue&type=template&id=a6aeea96& */ \"k45R\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _create_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-account-in-dapp.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"6FNs\");\n/* harmony import */ var _create_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-account-in-dapp.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"K1Xz\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _create_account_in_dapp_md_vue_type_template_id_a6aeea96___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _create_account_in_dapp_md_vue_type_template_id_a6aeea96___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _create_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_create_account_in_dapp_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _create_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_create_account_in_dapp_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/create-account-in-dapp.md?");

/***/ }),

/***/ "UX5l":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/create-account-in-dapp.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"ロボノミクスパラチェーンのアカウントを作成する\",\n  \"contributors\": [\"PaTara43\", \"Fingerling42\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/create-account-in-dapp.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "k45R":
/*!**************************************************************************!*\
  !*** ./docs/ja/create-account-in-dapp.md?vue&type=template&id=a6aeea96& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_create_account_in_dapp_md_vue_type_template_id_a6aeea96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"4964dc46-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./create-account-in-dapp.md?vue&type=template&id=a6aeea96& */ \"2Wqq\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_create_account_in_dapp_md_vue_type_template_id_a6aeea96___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_4964dc46_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_create_account_in_dapp_md_vue_type_template_id_a6aeea96___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/create-account-in-dapp.md?");

/***/ }),

/***/ "kmyX":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?alt=Robonomics%20Parachain%20app&title=Robonomics%20Parachain%20app!./docs/images/creating-an-account/1.2-robonomics-app.png ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"type\":\"image\",\"mimeType\":\"image/png\",\"src\":\"/assets/static/1.2-robonomics-app.60d3638.b0aff1b0a9975374f4560110d294e88a.png\",\"size\":{\"width\":2157,\"height\":1091},\"sizes\":\"(max-width: 2157px) 100vw, 2157px\",\"srcset\":[\"/assets/static/1.2-robonomics-app.82a2fbd.b0aff1b0a9975374f4560110d294e88a.png 480w\",\"/assets/static/1.2-robonomics-app.cbab2cf.b0aff1b0a9975374f4560110d294e88a.png 1024w\",\"/assets/static/1.2-robonomics-app.60d3638.b0aff1b0a9975374f4560110d294e88a.png 2157w\"],\"dataUri\":\"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2157 1091' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-6caf92e0e309d08c143d6fac383b52c0'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-6caf92e0e309d08c143d6fac383b52c0)' width='2157' height='1091' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAIAAAAt/%2bnTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHnUlEQVRYw9VX229Uxxnf17S1nRoHnBLbJDH4gilJaOhbI1WtGshDCwktEs1bovwBqfrSlyrExSYX5YHQBgqtVNG%2b9K0lqJHjJAIcX8C4rBfWF%2bK9nz33y5yZOXMuO/3m7MXGxsSRUgWPfpr9zXe%2bOee7zDczm/j1sVdfOHjkwPMvHnj%2bpZ/%2b5OfP/ejg9wd%2b%2bL32He1buwDb2h4DtAt0PLK1swrg7Y90xuhYhUe3dv6fIGy411cS/b0/2Nm9t7fnmd39zw7s3j/Qv79je09b62MtzdtaWrZvebSvtb23Zeuuh9u6t7d0djV3bN/yZEtrV9N32pua2ptaOppanwQ0t%2b1sbusG8q2HH3%2boufOh5q4amjprw6YVwnui6UvUtrT3tW7r/W5sybdbQLOj%2bvLEiTeH/3B86MTg8Mmhd94%2b%2bS7gxJtDg28MguT3v339nWNPv/fyUyeP7T11cNeFl/rPHBn4x6Gd7x372YnfvDr8%2bitDr70wdKRn%2bFe7h3/ZP3R0z/DRgcHDO4//AtBdw%2bGe44diyaGeZeFaHNolIPR7a2QN3jo6cBI%2bdHTPWy8/O3hk4I3Dfcdf7APlBOch51Hch7wSVgImEHqcc%2bPW5eDtTv5%2bF//jE/x37fzcPv7PA/xUH//wXU5lzjR%2b8wN%2b%2bgl%2b7il%2b%2bnF%2bpp%2bff0b0f%2brm55/mf94jHoEE%2bF/2CQLvAbW1eH8HP9MrdD7o4X/dz8/t5ad33Euti58CS7r52QF%2bfh//%2b4/5hef42f4EsgxNllRZ0lUZiCaXbUNzbRMjZyE1Y98e5cUpunQF3/iI/PtsOPI3/vGFYOmGW0wBQikZ5cej/ESUG6%2bhykXfEE7cpRAjFDqrMCH6XJ00sPzm%2bjA7FhWuR8XpqHANlBOOZZi6KhXzcqlQzGVLhTxYT5BNXWdxcVF3MKQCsxD5EWKRH/GoUmFRBdmmixy/IhIX1NK3jGgFidaRBxtGeF%2bIDEyMXVWkIoQfYg8A67FjUYwW5tJyIeshkzoGdaA3iW0QSyeO6SGLIksMbYNZ88TMECvvmlkAsXJIzwDBVg7HEuiJucyxKRRCXK5QpULlOpSKVx0qEfSe6EMiMaeEbZ2shlGHnvAwunTxX4vz6Ubgoa%2bShfk5uVQEBRxL1oEToHnLLJimpOtFTctbRsnQioZetAzJ1IumUQKAUNcKplEEiaEV4KmLFOpqxNWwqxKsYaQgWxZDR6FYg6eMmrzi%2bkTFzn2%2bbici30unkp%2bOjkAt6Eq58WCDDmDhwIJtCkNtUxImGkVklw29RFw19O2AWSGzfGr61Ag80/dMRo2GBDgjBhCAR3QQwhDUGNFhIo9QsBEH/js9OTryIejByvmqDtQyYMTxFpGWHKsMngCBMNtW2TJBIju2DJGuxpggCLAKMXadGEjFrgbZwEAcBbJBXN111IDZG8qA5yLDlrLyvKGoLiz0ey2hONLrOsCcJUtbMtSMqWUsPWsbOUvPiV7LmmrW1LIgpEjyieJjOSAKBFXwGAGNe1L2cbkmIXKVB1QNPZUh6cszMDM9NfKfS1DNsBEZqgymiyJemYF4eJ%2b3eDiGKwDF7bmgX0VNSFzI7TqAvYEQSkh1FsEuoRS4mIUsTBlsJ96KsNZJjScYQ0qqMHd5UdMluVgoF/OwsS5nQCrCZI9ghBzq0ajeQmi%2b51HxYVxtLg58PwrFsxg1AsI4hM69AeuWeGxp3M1Mm6Zl245Xuk3ujJmmDZu7axls/mNLhfWpQxAB4oCqEau66ySigCanbnx66ROMLMfUq3voXQ5gcMB1sev7rG6cMMv3CMUukAZAuhY%2bg9xAmNcBGOG6Xn7GySVVVTUNw5MX3Mx1DZoiIVPzMuN6OQ%2bHLJgLAAuFD7YJ6wXFgU4wgku5pTu3kybMkaWq6ctLSIprwEU%2bxWAuEOgZJQIeBR9WoiZvoC7xheb6AJ0g8IMAUhowCpHxgzBkFIY%2boyyMAp8FzKspM7pMGAUjoYhtXXck2PfkEpzHmlJenQHXAetDu4QQsh3H88Q1KW6VCl/dKnyt7H7yeot4JYp1KuKtwOMWD2O%2bznRYGomAOl9k9OQt2bUUyBQcBe4aB0Sww9BjonkwgCKDH08QJn49KqiQxo3SKhqCWBMqh1dN/PogHAgZTs8ujl%2b5AZuQIpVgFTWO5OUlBBWMERXrR4DUyV2Su4WkzuERWZ7ifr0QNQCrLX1zZvKTUQcqIy7i2l1oowfZN4xEhdHrN2cuXbmMTb1cKjQ2ok3jAIFtHmIvSapaVsu19bOZHAgZmU2lr45NmZpczGerW9BmcoBSgr5I68lrNpxwcfirN59N4wCclEuz08mrH9mWBUX81f8PfOMOEDebyydTaV2WwNzNVwOMoHKxeGfujmNqhqpswiIOvNT1a5cvXoQNFFsGBWl8zaJ4kziAscPKOkrnFVuHKyfc1%2bDWRohLKV6Yq53ED/Y54GG6lMGTU9rk5%2bbkhDY%2bZk1NePNpqioLiwuboQYWZqNbKVKWbVVBihIhVIGLl2Xw1MzSZ5%2bVlTJc5h5sB2an%2beJ8xUGRi0K4vMId1XG9UpZPXcyMjG4CBwhFOJOzpmb0qXH4dyyQStJU0stm4iVUeMCX0P8AaNPDY/3B2ScAAAAASUVORK5CYII=' /%3e%3c/svg%3e\"}\n\n//# sourceURL=webpack:///./docs/images/creating-an-account/1.2-robonomics-app.png?./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?alt=Robonomics%2520Parachain%2520app&title=Robonomics%2520Parachain%2520app");

/***/ })

}]);