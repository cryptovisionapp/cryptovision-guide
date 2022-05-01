# Aurora アカウントの追加方法

このページでは CryptoVision に Aurora アカウントを追加する方法を説明します。  
Aurora アカウントを追加するには Aurora Block Explorer API Key が必要になるので、その取得方法も解説します。

## Aurora Block Explorer API Key の取得方法

![](../../assets/img/aurorascan-apikey-1.jpg)

Aurora Block Explorer ([aurorascan.dev](https://aurorascan.dev)) にアクセスし、「Sign In」ボタンをクリックします。

![](../../assets/img/aurorascan-apikey-2.jpg)

Username と Password を入力してログインします。  
※ アカウントがない場合は「Click to sign up」ボタンを押してアカウントを作成してください。

![](../../assets/img/aurorascan-apikey-3.jpg)

ログインしたら「API Keys」ボタンを押して API Key の管理ページに移動します。

![](../../assets/img/aurorascan-apikey-4.jpg)

![](../../assets/img/aurorascan-apikey-5.jpg)

API Key がない場合は「Add」ボタンをクリックして新しい API Key の作成モーダルを開き、「Create New API Key」ボタンをクリックして API Key を作成します。

![](../../assets/img/aurorascan-apikey-6.jpg)

API Key の作成に完了したらコピーしてください。

※ 作成した API Key は削除しないでください

## Aurora アカウントの登録

### 単一ウォレットを追加する場合

![](../../assets/img/account-chain-aurora-ja-1.jpg)

API Key の欄に Aurora Block Explorer で取得した API Key を入力します。  
Wallet Address にはあなたの Aurora ウォレットのアドレスを入力してください。  
ERC1155 CSV Datas には Aurora Block Explorer で取得した ERC 1155 Token Txns の CSV ファイルを必要であればアップロードしてください。

入力後、「登録」ボタンをクリックするとアカウントの登録が完了し、トランザクションの取得・解析が開始されます。

### 複数ウォレットを一括追加する場合

![](../../assets/img/account-chain-aurora-ja-2.jpg)

API Key の欄に Aurora Block Explorer で取得した API Key を入力します。  
Wallet Information の欄にウォレット名とアドレスを１行ずつ入力します。

入力後、「登録」ボタンをクリックするとアカウントの登録が完了し、トランザクションの取得・解析が開始されます。

※ 複数ウォレット一括追加では ERC1155 CSV Data を登録することができません

---

このドキュメントの解説の中でわかりにくいと感じたい部分がありましたら、是非ドキュメントの改善にご協力ください。
