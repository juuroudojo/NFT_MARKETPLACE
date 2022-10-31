import * as dotenv from "dotenv";
import { task } from "hardhat/config";
import "@nomicfoundation/hardhat-chai-matchers";
dotenv.config();

task("listItem", "Lists an item")
  .addParam("standart", "721 or 1155")
  .addParam("id", "Id of the item")
  .addParam("amount", "Must be 1 if 721!")
  .addParam("price", "Price of the item")
  .setAction(async function (taskArgs, hre) {
    let transaction;

    const marketplaceAddress = "0xba09F7C46565DbEE84DC2BbF5d8B2D74b2dB736C";
    const nft721address = "0xdCE70D68588CCD2A2f79B994b6b4f1FA36ACf734";
    const nft1155address = "0x7e48eB74946404D2db690e2c4E509A75cD60Ba5B";


    const Marketplace = await hre.ethers.getContractFactory("Marketplace");
    const marketplace = Marketplace.attach(marketplaceAddress);

    const NFT721 = await hre.ethers.getContractFactory("NFT721");
    const erc721 = NFT721.attach(nft721address);

    const NFT1155 = await hre.ethers.getContractFactory("NFT1155");
    const erc1155 = NFT1155.attach(nft1155address);

    await erc721.grantRole(erc721.OWNER(), marketplaceAddress);
    await erc1155.grantRole(erc1155.OWNER(), marketplaceAddress);

    transaction = await marketplace.listItem(taskArgs.standart, taskArgs.id, taskArgs.amount, taskArgs.price);
    console.log(transaction);
  });