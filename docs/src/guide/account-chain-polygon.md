# How to add "Polygon" accounts

This page explains how to add an Polygon account to CryptoVision.  
To add an Polygon account, you will need an PolygonScan API Key, so I will also show you how to get one.

## How to get PolygonScan API Key

![](../assets/img/polygonscan-apikey-1.jpg)

Go to PolygonScan ([polygonscan.com](https://polygonscan.com)) and click the "Sign In" button.

![](../assets/img/polygonscan-apikey-2.jpg)

Enter your username and password to sign in.  
If you do not have an account, please click the "Click to sign up" button to create an account.

![](../assets/img/polygonscan-apikey-3.jpg)

After signing in, click the "API Keys" button to go to the API Key management page.

![](../assets/img/polygonscan-apikey-4.jpg)

![](../assets/img/polygonscan-apikey-5.jpg)

If you do not have an API Key, click the "Add" button to open the Create New API Key modal, then click the "Create New API Key" button to create new API Key.

![](../assets/img/polygonscan-apikey-6.jpg)

Once you have completed the creation of the API Key, copy it.

Do not delete the created API Key.

### Adding a Single Wallet

![](../assets/img/account-chain-polygon-1.jpg)

Enter the API Key obtained from PolygonScan in the API Key field.  
Enter your Polygon wallet address in the Wallet Address field.  
Upload the CSV file of the ERC 1155 Token Txns obtained by PolygonScan to the ERC1155 CSV Datas if necessary.

After entering the information, click the "Register" button to complete account registration and begin retrieving and analyzing transactions.

### ERC1155 CSV Data の取得方法

![](../assets/img/account-chain-polygon-3.jpg)

Go to PolygonScan ([polygonscan.com](https://polygonscan.com)) and enter and search for your wallet address.

![](../assets/img/account-chain-polygon-4.jpg)

![](../assets/img/account-chain-polygon-5.jpg)

Go to the "ERC1155 Token Txns" tab and click the "Download CSV Export" button.

![](../assets/img/account-chain-polygon-6.jpg)

Select the period for which you want to output the history as CSV, and click the "Download" button to download the CSV data.

### Adding Multiple Wallets at once

![](../assets/img/account-chain-polygon-2.jpg)

Enter the API Key obtained from PolygonScan in the API Key field.  
Enter the wallet name and address on one line in the Wallet Information field.

After entering the information, click the "Register" button to complete account registration and begin retrieving and analyzing transactions.

※ ERC1155 CSV Data cannot be registered for adding multiple wallets at once

---

If you find any part of the explanations in this document that you feel is difficult to understand, please help us improve the document.
