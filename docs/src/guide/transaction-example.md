# Classify common transactions

You will see every transaction classification explained comprehensively in [Understanding different transaction classifications](./transaction-journal.md).
However, many of you probably still want to  know how to classify actual transactions.
Therefore, in this article, we will actually perform transaction classification for common transactions with specific examples.

## Exchahged 1ETH (market value is 2,300 dollars) for 0.06 BTC (market value is 2,300 dollars).
This transaction is "Swap", since you exchanged tokens with each other.

### ①Acquired tokens
Profit/Loss is not going to be calculated, but the 2,300 dollars market value of the BTC acquired at the time of the transaction is going to be added to the acquisition price.

### ②Lost tokens
If the market value at the time of acquisition of ETH was 2,000 dollars, then "market value at the time of transaction - acquisition price" = 2,300 dollars - 2,000 dollars = 300 dollars is going to be the profit on the transaction.

## Purchased 1ETH for 1,600 dollars.
This transaction is "Buy", since you purchased token with legal tender.

### ①Acquired tokens
Profit/Loss is not going to be calculated, but the 1,600 dollars market value of ETH at the time of the transaction is going to be added to the acquisition price.

### ②Lost tokens
1,600 dollars paid to purchase the token.
Profit/Loss is not going to be calculated.

## Sold 1ETH for 1,600 dollars.
This transaction is "Sell" because you sold the token and received legal tender.

### ①Acquired tokens
1,600 dollars received. Profit/Loss is not going to be calculated.

### ②Lost tokens
If the market value of the lost ETH was 1,200 dollars at the time of purchase, the "market value at the time of transaction - acquisition price" = 1,600 dollars - 1,200 dollars = 400 dollars is going to be the profit on the transaction.

## Transferred 1ETH from your Address A to your Address B.
This transaction is "MoveBetweenWallets" because you are transferring assets between wallets (addresses) that you own.

### ①Acquired tokens
※ Not used for "MoveBetweenWallets".

### ②Lost tokens
※ Not used for "MoveBetweenWallets".

### ③ Moved token (*Used only for "MoveBetweenWallets")
1ETH transferred. Profit/Loss is not going to be calculated.

## Transferred 1ETH from your address A to your Binance account.
This transaction is "SendToCEX" because you transferred the money from your address on the blockchain to your account on the (centralized) exchange.

### ①Acquired tokens
※ Not used for "SendToCEX"

### ②Lost tokens
1ETH transferred from your wallet to your Binance account. Profit/Loss is not going to be calculated.

## Transferred 1ETH from your Binance account to address A which you own.
This transaction is "ReceiveFromCEX" because you transferred the money from your account on the (centralized) exchange to your address on the blockchain.

### ①Acquired tokens
This is 1ETH transferred from your Binance account to your wallet. Profit/Loss is not going to be calculated.

### ②Lost tokens
※ Not used for "ReceiveFromCEX"


## Using the Polygon Web Wallet, 1ETH was transferred from the Ethereum chain to the Polygon chain. (Assume the market value on both chains is 2,300 dollars.)

This transaction is a combination of  "BridgeDeposit" and ""BridgeWithdraw" because the token is being moved from one chain to another.  

### (for BridgeDeposit)
### ①Acquired tokens
※ Not used for "BridgeDeposit"


### ②Lost tokens  
1ETH on the Ethereum chain is going to be lost. If the acquisition price is 2,000 dollars, "Market value at the time of transaction - Acquisition price" = 2,300 dollars - 2,000 dollars = 300 dollars is going to be the profit on the transaction.

### (for BridgeWithraw)

### ①Acquired tokens
1 WETH is acquired on the Polygon chain. Profit/Loss is not going to be calculated, but 2,300 dollars is going to be added to the acquisition price.

### ②Lost tokens 
※ Not used for "BridgeWithdraw"

## I received 10XRP (market value 4 dollars) as an airdrop from an exchange campaign.
This transaction is "Airdrop" because you received the tokens for free.

### ①Acquired tokens
Airdropped 10XRP. The market value of 4 dollars is earned as "Airdrop (income)" and the market value at this point is going to be added to the acquisition price.

### ②Lost tokens
※ Not used for "Airdrop".

## Staked to Solana and received 20SOL (market value 7,000 dollars)
This transaction is a "StakingReward" because you earned tokens by staking (depositing) tokens to a specific address.

### ①Acquired tokens
20SOL acquired through staking. 7,000 dollars of the token market value at the time of acquisition is going to be  calculated as "Interest・Staking Reward (income)".
The market value of 7,000 dollars is also going to be added to the acquisition price.

### ②Lost tokens
※ Not used for "Staking Reward".

## Lent some amount of DAI to Aave (lending platform) and received 100 DAI (market value 100 dollars) as interest.
This transaction is "Interest" because it is interest earned by lending the token.

### ①Acquired tokens
100 DAI acquired as "Interest".
The token market value of 100 dollars at the time of acquisition is calculated as "Interest・Staking Reward (income)".
The market value of 100 dollars is also going to be added to the acquisition price.

### ②Lost tokens
※ Not used for "Interest".


## Participated in crowd mining and earned 1BTC (40,000 dollars)
This transaction is "Mining" because you have earned tokens as a reward for mining (one way of verifying and approving blockchain transactions).

### ①Acquired tokens
1BTC acquired through mining. The market value of 40,000 dollars at the time of acquisition will be calculated as "Income" and also will be added to the acquisition price.

### ②Lost tokens
※ Not used for "Mining".

## Earned 50 GST (market value 700 dollars) in STEPN (GameFi).
This transaction is "Income", since you received tokens as income (profit) other than "Airdrop," "StakingReward," and "Interest" (without paying).

### ①Acquired tokens
The 50 GST received. 700 dollars, the market value of 50 GST, is going to be calculated as "income". Also, the market value of 700 dollars is going to be added to the acquisition price.

### ②Lost tokens
※ Not used for "Income".


## Worked at DAO and earned 1000 USDC (market value 1,000 dollars).
This transaction is "Income", since you received tokens as income (profit) other than "Airdrop," "StakingReward," and "Interest" (without paying).

### ①Acquired tokens
1,000 USDC received. Market value of 1,000 dollars is going to be calculated as "income". Also, 1,000 dollars of market value is going to be added to the acquisition price.

### ②Lost tokens
※ Not used for "Income".

## A friend gave you 1ETH (market value 2,300 dollars) as a gift.
This transaction is "Receive" because the transaction is not income(profit) and the token was received without payment of consideration.

### ①Acquired tokens
1ETH acquired.
Profit/Loss is not going to be calculated, but the market value of 2,300 dollars at the time of the transaction is going to be added to the acquisition price.

### ②Lost tokens
※ Not used for "Receive".

## An unrecognized token was suddenly sent to my wallet.
An unrecognized/suspicious token has been sent suddenly and is a "Scam".

### ①Acquired tokens
Tokens sent to you. No profit and loss calculation is performed and it is not added to the acquisition price.

### ②Lost tokens
※ Not used for "Scam".


## Paid 1ETH (market value 2,300 dollars) for participating in cryptocurrencies and NFT tax seminar.
This transaction is "Pay" because cryptocurrency was sent to another address and the payment is going to be recorded as an expense in terms of the tax code.

### ①Acquired tokens
※ Not used for "Pay".


### ②Lost tokens
1ETH paid. If the market value at the time of acquisition of ETH was 1,600 dollars, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 700 dollars is going to be the profit on the transaction.
Also, the 2,300 dollars you paid is going to be the "cost".

## Gave 1ETH (market value 2,300 dollars) to your friend.
This transaction sis a "Gift" because cryptocurrency was sent to another address and the payment was a transaction that was not going to be recorded as an expense in terms of the tax code.

### ①Acquired tokens
※ Not used for "Gift".

### ②Lost tokens
1ETH (2,300 dollars) transferred. If the market value at the time of acquisition is 1,600 dollars, then "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 700 dollars is going to be the profit on the transaction.

## You(NFT creator) minted your own NFT art to Opensea
This transaction is "FreeMint" because NFT was minted for free.

### ①Acquired tokens
Minted NFT art.  Profit/Loss is not going to be calculated, and is going to be added to the acquisition price as value 0 since the market value at the time of issuance is 0.

### ②Lost tokens
※ Not used for "FreeMint".

## NFT art created by NFT Art's management team and minted for free
This transaction is "FreeMint" because NFT was minted for free.

### ①Acquired tokens
Minted NFT art.  Profit/Loss is not going to be calculated, and is going to be added to the acquisition price as value 0 since the market value at the time of issuance is 0.

### ②Lost tokens
※ Not used for "FreeMint".


## NFT Art minted (primary distribution) by NFT Art's management team for 1ETH (market value 2,300 dollars).
This transaction is "NFTMint" , because the NFT was minted in a way that the issuance (minting) fee was incurred in addition to the gas fee.  
### ①Acquired tokens  
This is minted NFT art. Profit/Loss is not going to be calculated, but the market value of 2,300 dollars for 1ETH of mint fee is going to be  added to the acquisition price. 

### ②Lost tokens
1ETH paid for NFT minted. If 1ETH was 1,600 dollars at the time of acquisition, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 700 dollars is going to be the profit on the transaction.

## Bought NFT art on Opensea for 1ETH (market value 2,300 dollars) (secondary distribution).
This transaction is an "BuyNFT", since you paid for the NFT with cryptocurrencies.  
### ①Acquired tokens 
This is the NFT art purchased. Profit/Loss is not going to be calculated, but the market value of 2,300 dollars for the price of 1ETH is going to be added to the acquisition price. 
### ②Lost tokens  
This is the 1ETH paid for the NFT purchase. If 1ETH was 1,600 dollars at the time of acquisition, "market value at the time of transaction - Acquisition price" = 2,300 dollars - 1,600 dollars = 700 dollars is going to be the gain on the transaction.


## I sold NFT art on Opensea for 1ETH (market value 2,300 dollars).
This transaction is an "SellNFT", because you sold NFT and got cryptocurrency in return.

### ①Acquired tokens
1ETH obtained. Profit/Loss is not going to be calculated, but the market value of 2,300 dollars is going to be added to the transaction price.
### ②Lost tokens 
This is the NFT that was sold. If the value was 1,600 dollars at the time of acquisition, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 700 dollars is going to be the gain on the transaction.

## You acquired NFT art (market value 400 dollars) for free through a Giveaway.
This transaction is "ReceiveNFT", since you received NFT from another party.

### ①Acquired tokens
NFT art you received. The market value of 400 dollars is going to be added to the acquisition price.
### ②Lost tokens
※ Not used for "ReceiveNFT".

## NFT art A held by you was transferred to another person without compensation.
This is "SendNFT" because you send NFT to another address for free.

### ①Acquired tokens
※ Not used in "SendNFT".

### ②Lost tokens 
The transferred NFT. Profit/Loss is not going to be calculated.

## NFT Art "A" was exchanged for NFT Art "A'" because the management found a defect in the NFT Art "A" contract.
This transaction is "SwapNFT" because the token itself has been replaced, although it is of the same value.

### ①Acquired tokens
NFT Art "A'" exchanged for NFT Art "A'". The acquisition price of the lost NFT Art "A" is added to the acquisition price of the acquired NFT Art "A'".

### ②Lost tokens 
NFT Art "A" from which the exchange was made. Profit/Loss is not going to be calculated, since the acquisition price is transferred to the NFT Art "A'".

## Deposited 2000 USDT (market value 2,000 dollars) and 1ETH (market 2,000 dollars) in PancakeSwap and received 60 CAKE-LP (market value 4,000 dollars)
This transaction is "AddPair" since you offered multiple tokens to the liquidity pool.

### ①Acquired tokens
30CAKE-LP token that was granted. Profit/Loss is not going to be calculated, but the market value of 2,300 dollars is going to be added to the acquisition price.

### ②Lost tokens
If the price of 2000USDT and 1ETH were 1,600 dollars each at the time of acquisition, "market value at the time of transaction - acquisition price" = 2,000 dollars - 1,600 dollars = 400 dollars for each, resulting in a total of 800 dollars as transaction profit.

## Returned 60CAKE-LP (market value 4,400 dollars) to PancakeSwap and received 2000USDT (market value 2,500 dollars) and 1ETH (market value 1,800 dollars yen) in return.
This transaction is "RemovePair" , since this process is to withdraw tokens deposited by "Addpair".

### ①Acquired tokens
2000USDT and 1ETH received. Profit/Loss is not going to be calculated, but the acquisition price of 2,500 dollars and 1,800 dollars, respectively, are going to be added to the acquisition price.

### ②Lost tokens
Returned 60CAKE-LP. If the acquisition price is 4,000 dollars, "Market value at the time of transaction - Acquisition price" = 4,400 dollars - 4,000 dollars = 400 dollars is going to be the profit on the transaction.


## Staking started by depositing 100 ADA (market value 10,000 yen) at the staking pool.

This transaction is "Deposit", since the token is going to bedeposited to a different address. 
### ①Acquired tokens  
In this example, there are no tokens acquired.  
### ②Lost tokens 
The 100 ADA deposited is going to be lost. Profit/Loss is not going to be calculated.


## Deposited 1ETH at Lido and received 1st ETH (market value 1,600 dollars) as a credit token.
This transaction is "Deposit" , since the token is deposited to a different address.  
### ①Acquired tokens 
You receive 1stETH against staking. Profit/Loss is not going to be calculated, but the market value of 1,600 dollars is going to be added to the acquisition price.
### ②Lost tokens  
You are going to lose the deposited tokens. Profit/Loss is not going to be calculated.

## 100ADA (market value 10,000JPY) deposited in the staking pool is received.
This transaction is "Withdraw" because you withdrew the tokens from the address where you deposited the tokens.

### ①Acquired tokens 
You receive the 100 ADA that was deposited. Profit/Loss is not going to be calculated.
### ②Lost tokens 
In this example, there are no lost tokens.

## You deposited 1ETH at Lido and received 1st ETH (market value 300,000) as a credit token.
This transaction is "Withdraw",since the token was withdrawn from the address where it was deposited.  
### ①Acquired tokens 
You receive the 1ETH that was deposited. Profit/Loss is not going to be calculated.
### ② Forfeited token
You lose the 1stETH credit token. If the market value at the time of acquisition was 1,600 dollars, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 700 dollars is going to be the profit on the transaction.

## Borrowed 1ETH (market value 1,600 dollars) from a friend.
This transaction is "Borrow" because you borrowed the token from another address.

### ①Acquired tokens  
The borrowed 1ETH. Profit/Loss is not going to be calculated, but the market value of 1,600 dollars at the time of acquisition is going to be added to the acquisition price.
### ②Lost tokens
In this example, there are no lost tokens.

## Borrowed 1ETH (market value 1,600 dollars) from a friend and deposited 0.1 BTC (market value 1,600 dollars) as collateral instead.

### ①Acquired tokens 
1ETH borrowed. Profit/Loss is not going to be calculated, but the market value of 1,600 dollars at the time of acquisition is going to be added to the acquisition price.
### ②Lost tokens
You are going to lose the 0.1BTC deposited. Profit/Loss is not going to be calculated.


## Returned 1ETH (market value 2,300 dollars) borrowed from a friend.
This transaction is "BorrowBack" because you returned the borrowed token from another address.

### ①Acquired tokens  
In this example, there are no tokens acquired.  
### ②Lost tokens
1ETH you repaied is going to be lost. If the market value at the time of acquisition was 1,600 dollars, then "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 700 dollars is the profit on the transaction.

## You returned 1ETH (market value 2,300 dollars) borrowed from a friend and instead received back 0.1 BTC (market value 2,300 dollars) that you had deposited as collateral.
This transaction is "BorrowBack" because you returned the borrowed token from another address.

### ①Acquired tokens 
0.1BTC deposited as collateral. Profit/Loss is not going to be calculated.
### ②Lost tokens
1ETH you repaied. If the market value at the time of acquisition was 1,600 dollars, "market value at the time of transaction - acquisition price" = 2,300 dollars - 1,600 dollars = 700 dollars is going to be the profit on the transaction.


## Gave Approval (permission to sell) to sell USDC at UNISWAP.
This transaction is "Approve" because you have given a third party address permission to move tokens in your wallet.

### ①Acquired tokens
* Not used for "Approve".

### ②Lost tokens
* Not used in "Approve".






















