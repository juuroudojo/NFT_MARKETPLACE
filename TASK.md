# NFT auction

1. Write NFT contract, implementing the function:
    
    - mint(): only marketplace contract can access the function
    
2. Write an NFT marketplace contract, including the following functions:
    
    - createItem(): calls mint() of NFT contract.
    - listItem(): puts an item on sale on the marketplace.
    - buyItem(): buys an item.
    - cancel(): delisting of an item from a marketplace.
    - listItemOnAuction(): puts an item on auction.
    - makeBid(): makes a bid for a particular item.
    - finishAuction(): finishes the auction and sends an item to the auction winner (someone with the highest bid)
    - cancelAuction(): cancels an auction.
    
    In the first 3 days of an auction it cannot be canceled. If by the end of the third day there are more than 2 bids made, then the auction creator finishes it (NFT is transferred to the winner, tokens are transferred to the auction creator). Otherwise tokens are returned to the last person who made a bid and the NFT stays with the initial owner.
    
3. Write tests.
4. Write deploy script.
5. Deploy on testnet.
6. Write tasks for mint and listItem.
7. Verify the contract.

### Tips

It is worth creating Events for all significant transactions, so that later data could be easily retrieved from the blockchain.
