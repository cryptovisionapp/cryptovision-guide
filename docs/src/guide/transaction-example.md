# Classify common transactions.

You will see every transaction classification explained comprehensively in [Understanding different transaction classifications](./transaction-journal.md).
However, many of you probably still want to  know how to classify actual transactions.
Therefore, in this article, we will actually perform transaction classification for common transactions with specific examples.

## Exchahged 1ETH (market value is 2,300 dollars) for 0.06 BTC (market value 2,300 dollars).
This transaction is "Exchange", since you exchanged tokens with each other.

### ①Acquired tokens
Profit/Loss is not going to be calculated, but the 2,300 dollars market value of the BTC acquired at the time of the transaction is going to be added to the acquisition price.

### ②Lost tokens
If the market value at the time of acquisition of ETH was 2,000 dollars, then "market value at the time of transaction - acquisition price" = 2,300 dollars - 2,000 dollars = 300 dollars is going to be the profit on the transaction.

## Purchased 1ETH for 1,600 dollars.
This transaction is "Purchase", since you purchased token with legal tender.

### ①Acquired tokens
Profit/Loss is not going to be calculated, but the 1,600 dollars market value of ETH at the time of the transaction will be added to the acquisition price.

### ②Lost tokens
1,600 dollars paid to purchase the token.
Profit/Loss is not going to be calculated.

## Sold 1ETH for 1,600 dollars.
This transaction is "Sell" because you sold the token and received legal tender.

### ①Acquired tokens
1,600 dollars received. Profit/Loss is not going to be calculated.

### ②Lost tokens
If the market value of the lost ETH was 1,200 dollars at the time of purchase, the "market value at the time of transaction - acquisition price" = 1,600 dollars - 1,200 dollars = 400 dollars is the profit on the transaction.

## Transferred 1ETH from Address A, which you own, to Address B, which you also own.
This transaction is "MoveBetweenWallets" because you are transferring assets between wallets (addresses) that you own.

### ①Acquired tokens
It is not used for "MoveBetweenWallets".

### ②Lost tokens
Lost tokens are not used for "MoveBetweenWallets".

### ③ Moved token (*Used only for "MoveBetweenWallets")
1ETH transferred. Profit/Loss is not going to be calculated.

## Transferred 1ETH from address A which you own to your Binance account.
This transaction is "SendToCEX" because you transferred the money from your address on the blockchain to your account on the (centralized) exchange.

### ①Acquired tokens
Not used for "SendToCEX"

### ②Lost tokens
This is 1ETH transferred from your wallet to your Binance account. Profit/Loss is not going to be calculated.

## Transferred 1ETH from your Binance account to address A which you own.
This transaction is "ReceiveFromCEX" because you transferred the money from your account on the (centralized) exchange to your address on the blockchain.

### ①Acquired tokens
This is 1ETH transferred from your Binance account to your wallet. Profit/Loss is not going to be calculated.

### ②Lost tokens
Not used for "ReceiveFromCEX"


## Using the Polygon Web Wallet, 1ETH was transferred from the Ethereum chain to the Polygon chain. (Assume the market value on both chains is 2,300 dollars.)

This transaction is a combination of  "BridgeDeposit" and ""BridgeWithdraw" because the token is being moved from one chain to another.  

(for BridgeDeposit)
### ①Acquired tokens
Not used for "BridgeDeposit"


### ②Lost tokens  
1ETH on the Ethereum chain is going to be lost. If the acquisition price is 2,000 dollars, "Market value at the time of transaction - Acquisition price" = 2,300 dollars - 2,000 dollars = 50,000 dollars is going to be the profit on the transaction.

(for BridgeWithraw)

### ①Acquired tokens
1 WETH is acquired on the Polygon chain. Profit/Loss is not going to be calculated, but 2,300 dollars is going to be added to the acquisition price.

### ②Lost tokens 
Not used for "BridgeWithdraw"




## I received 10XRP (market value 4 dollars) as an airdrop from an exchange campaign.
This transaction is "Airdrop" because you received the tokens for free.

### ①Acquired tokens
Airdropped 10XRP. The market value of 4 dollars is earned as "Airdrop (income)" and the market value at this point will be added to the acquisition price.

### ②Lost tokens
*Not used for "Airdrop".

## Staked to Solana and received 20SOL (market value 7,000 dollars)
This transaction is a "StakingReward" because you earned tokens by staking (depositing) tokens to a specific address.

### ①Acquired tokens
20SOL acquired through staking. 7,000 dollars of the token market value at the time of acquisition is going to be  calculated as "Interest and Staking Reward (income)".
The market value of 100,000 yen is also going to be added to the acquisition price.

### ②Lost tokens
Not used for "Staking Reward".

## Lent some amount of DAI to Aave (lending platform) and received 100 DAI (market value 100 dollars) as interest.
This transaction is "Interest" because it is interest earned by lending the token.

### ①Acquired tokens
100 DAI acquired as "Interest".
The token market value of 100 dollars at the time of acquisition is calculated as "Interest and Staking Compensation (income)".
The market value of 100 dollars is also going to be added to the acquisition price.

### ②Lost tokens
Not used for "Interest".


## Participated in crowd mining and earned 1BTC (40,000 dollars)
This transaction is "Mining" because you have earned tokens as a reward for mining (one way of verifying and approving blockchain transactions).

### ①Acquired tokens
1BTC acquired through mining. The market value of 40,000 dollars at the time of acquisition will be calculated as "Income" and also will be added to the acquisition price.

### ②Lost tokens
Not used for "Mining".

## Earned 50 GST (market value 700 dollars) in STEPN (blockchain game).
This transaction is "Income", since you received tokens as income (profit) other than "Airdrop," "StakingReward," and "Interest" (without paying).

### ①Acquired tokens
The 50 GST received. 700 dollars, the market value of 50 GST, is calculated as "income". Also, the market value of 700 dollars is going to be added to the acquisition price.

### ②Lost tokens
Not used forI"income".


## Worked at DAO and earned 1000 USDC (market value 1,000 dollars).
This transaction is "Income", since you received tokens as income (profit) other than "Airdrop," "StakingReward," and "Interest" (without paying).

### ①Acquired tokens
1000 USDC received. Market value of 1,000 dollars is calculated as "oncome". Also, 1,000 dollars of market value is going to be added to the acquisition price.

### ②Lost tokens
Not used for "Income".

### A friend gave you 1ETH (market value 2,300 dollars) as a gift.
This transaction is "Received" because the transaction is not income(profit) and the token was received without payment of consideration.

### ①Acquired tokens
This is 1ETH acquired.
Profit/Loss is not going to be calculated, but the market value of 2,300 dollars at the time of the transaction is going to be added to the acquisition price.

### ②Lost tokens
Not used for "Receive".

## An unrecognized token was suddenly sent to my wallet.
An unrecognized/suspicious token has been sent suddenly and is a "Scam".

### ①Acquired tokens
Tokens sent to you. No profit and loss calculation is performed and it is not added to the acquisition price.

### ②Lost tokens
Not used for "Scam".


## Crypto asset and NFT tax seminar paid for with 1ETH (market value 2,300 dollars).
This transaction is "Pay" because the crypto asset is sent to another address and the payment is going to be recorded as an expense for tax purposes.

### ①Acquired tokens
Not used for "Pay".


### ②Lost tokens
1ETH paid is forfeited. if the market value at the time of acquisition of ETH is 1,600 dollars, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen is the gain on the transaction.
Also, the 2,300 dollars you paid is going to be the "cost".

## Gave 1ETH (market value 2,300 dollars) to your friend.
This is a "transfer" because the crypto asset is sent to another address and the payment is a transaction that cannot be recorded as an expense for tax purposes.

### ①Acquired tokens
Not used in a "transfer".

### ②Lost tokens
1ETH (2,300 dollars) transferred. If the market value at the time of acquisition is 1,600 dollars, then "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen is the gain on the transaction.

## NFT creator minted his own NFT art to Onpensea
It is "freeminted" because NFT is minted for free.

### ①Acquired tokens
Minted NFT art. It is not subject to profit and loss calculation and is added to the acquisition price as value 0 since the market value at the time of issue is 0.

### ②Lost tokens
Not used in the "Freemint".

## NFT art created by the management and minted for free
It is "freeminted" because the NFT is minted for free.

### ①Acquired tokens
Minted NFT art. It is not subject to profit and loss calculation and is added to the acquisition price as value 0 since the market value at the time of issuance is 0.

### ②Lost tokens
Not used in the "Freemint".


## NFT Art minted (primary distribution) by NFT Art's management team for 1ETH (market value 2,300 dollars).
The NFT is minted in a way that the issuance (minting) fee is incurred in addition to the gas fee, so it is "NFT minted".  
### ①Acquired tokens  
This is minted NFT art. No profit and loss is calculated, but the market value of 2,300 dollars for 1ETH of mint fee is added to the acquisition price. 

### ②Lost tokens
1ETH paid for NFT minted. If 1ETH was 1,600 dollars at the time of acquisition, "Market value at the time of transaction - Acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen will be the gain on the transaction.

## I bought NFT art on Opensea for 1ETH (market value 2,300 dollars) (secondary distribution).

Since you paid for the NFT with crypto assets, it is an "NFT purchase".  
### ①Acquired tokens 
This is the NFT art purchased. No profit and loss is calculated, but the market value of 2,300 dollars for the price of 1ETH is added to the acquisition price. 
### ②Lost tokens  
This is the 1ETH paid for the NFT purchase. If 1ETH was 1,600 dollars at the time of acquisition, "Market value at the time of transaction - Acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen will be the gain on the transaction.


## I sold NFT art on Opensea for 1ETH (market value 2,300 dollars).
It is an "NFT sale" because you sold NFT and got a crypto asset as consideration instead.

### ①Acquired tokens
1ETH obtained as consideration. No profit and loss will be calculated, but the market value of 2,300 dollars will be added to the transaction price.
### ②Lost tokens 
This is the NFT that was sold. If the value was 1,600 dollars at the time of acquisition, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen will be the gain on the transaction.

## You acquired NFT art (market value 50,000 yen) for free through a Giveaway.
Since you received NFT from another party, it is "NFT acquisition".

### ①Acquired tokens
This is the NFT art you received. The market value of 50,000 yen is added to the acquisition price.
### ②Lost tokens
Not used for "NFT acquisition".

## NFT art A held by you was transferred to another person without compensation.
This is "NFT transfer" because you send NFT to another address without compensation.

### ①Acquired tokens
Not used in "NFT transfer".

### ②Lost tokens 
The transferred NFT is forfeited. It is not subject to profit and loss calculation.

## NFT Art "A" was exchanged for NFT Art "A'" because the management found a defect in the NFT Art "A" contract.
This is an "NFT exchange" because the token itself has been replaced, although it is of the same value.

### ①Acquired tokens
NFT Art "A'" exchanged for NFT Art "A'". The acquisition price of the lost NFT Art "A" is added to the acquisition price of the acquired NFT Art "A'".

### ②Lost tokens 
This is the NFT Art "A" from which the exchange was made. no profit/loss calculation will be performed since the acquisition price is transferred to the NFT Art "A'".

## Deposit 2000 USDT (market value 2,300 dollars) and 1ETH (market value 2,300 dollars) in PancakeSwap and received 60 CAKE-LP (market value 600,000 yen)
This is an "LP offering" since we are offering multiple tokens to the liquidity pool.

### ①Acquired tokens
This is the 30CAKE-LP token that was granted. No profit and loss will be calculated, but the market value of 2,300 dollars will be added to the acquisition price.

### ②Lost tokens
If the price of 2000USDT and 1ETH were 1,600 dollars each at the time of acquisition, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen for each, resulting in a total of 1,600 dollars as transaction profit.

## PancakeSwap returned 60CAKE-LP (market value 650,000 yen) and received 2000USDT (market value 330,000 yen) and 1ETH (market value 220,000 yen)
This process is to withdraw tokens deposited by "LP Offer", so it is "LP Release".

### ①Acquired tokens
2000USDT and 1ETH received. No profit and loss will be calculated, but the acquisition price of 330,000 yen and 220,000 yen, respectively, will be added to the acquisition price.

### ②Lost tokens
This is the returned 60CAKE-LP. If the acquisition price is 600,000 yen, "Market value at the time of transaction - Acquisition price" = 650,000 yen - 600,000 yen = 50,000 yen is the gain on the transaction.


## Staking started by depositing 100 ADA (market value 10,000 yen) in the staking pool.

Since the token is deposited to a different address, it is a "deposit".  
### ①Acquired tokens  
In this example, there are no tokens acquired.  
### ②Lost tokens 
The 100 ADA deposited is lost. No profit and loss calculation will be performed.


## I deposited 1ETH at Lido and received 1st ETH (market value 1,600 dollars) as a credit token.
Since the token is deposited to a different address, it is a "deposit".  
### ①Acquired tokens 
You receive 1stETH against staking. No profit and loss will be calculated, but the market value of 1,600 dollars will be added to the acquisition price.
### ②Lost tokens  
You will lose the deposited tokens. No profit and loss will be calculated.

## 100ADA (market value 10,000JPY) deposited in the staking pool is received.
This is a "withdrawal" because you withdrew the tokens from the address where you deposited the tokens.

### ①Acquired tokens 
You receive the 100 ADA that was deposited. No profit and loss calculation is performed.
### ②Lost tokens 
In this example, there are no lost tokens.

## You deposited 1ETH at Lido and received 1st ETH (market value 300,000) as a credit token.
Since the token was withdrawn from the address where it was deposited, it is a "withdrawal".  
### ①Acquired tokens 
You receive the 1ETH that was deposited. No profit and loss calculation is performed.
### ② Forfeited token
You lose the 1STETH credit token. If the market value at the time of acquisition was 1,600 dollars, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen will be the gain on the transaction.

## I borrowed 1ETH (market value 1,600 dollars) from a friend.
It is a "borrowing" because you borrowed the token from another address.

### ①Acquired tokens  
Acquire the borrowed 1ETH. No profit and loss will be calculated, but the market value of 1,600 dollars at the time of acquisition will be added to the acquisition price.
### ②Lost tokens
In this example, there are no lost tokens.

## Borrowed 1ETH (market value 1,600 dollars) from a friend and deposited 0.1 BTC (market value 1,600 dollars) as collateral instead.
### ①Acquired tokens 
Acquired 1ETH borrowed. No profit and loss will be calculated, but the market value of 1,600 dollars at the time of acquisition will be added to the acquisition price.
### ②Lost tokens
You will lose the 0.1BTC deposited. No profit and loss will be calculated.


## I returned 1ETH (market value 2,300 dollars) borrowed from a friend.
This is a "repayment of borrowing" because you have returned the borrowed token from another address.

### ①Acquired tokens  
In this example, there are no tokens acquired.  
### ②Lost tokens
1ETH to be repaid is lost. If the market value at the time of acquisition was 1,600 dollars, then "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen is the gain on the transaction.

## You returned 1ETH (market value 2,300 dollars) borrowed from a friend and instead received back 0.1 BTC (market value 2,300 dollars) that you had deposited as collateral.
This is a "repayment of loan" because you are returning a token that was borrowed from another address.

### ①Acquired tokens 
0.1BTC deposited as collateral is acquired, but is not subject to profit and loss calculation.
### ②Lost tokens
You forfeit 1ETH to be repaid. If the market value at the time of acquisition was 1,600 dollars, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 100,000 yen will be the gain on the transaction.


## I gave Approve (permission to sell) to sell USDC at UNISWAP.
Approve" because you have given a third party address permission to move tokens in your wallet.

### ①Acquired tokens
* Not used for "Approve".

### ②Lost tokens
* Not used in "Approve".






















