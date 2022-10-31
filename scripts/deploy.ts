import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";
import { ERC1155__factory, ERC20__factory, ERC721__factory } from "../typechain-types";
import { NFT721__factory } from "../typechain-types";
import { NFT1155__factory } from "../typechain-types";

async function main() {
  let ERC20: ContractFactory;
  let erc20: Contract;
  let ERC721: ContractFactory;
  let erc721: Contract;
  let ERC1155: ContractFactory;
  let erc1155: Contract;
  let Marketplace: ContractFactory;
  let marketplace: Contract;

  ERC20 = await ethers.getContractFactory("ERC20") as ERC20__factory;
  erc20 = await ERC20.deploy("Bober", "BBR", 18);
  await erc20.deployed();
  console.log("ERC20 deployed to:", erc20.address);

  ERC721 = await ethers.getContractFactory("NFT721") as NFT721__factory;
  erc721 = await ERC721.deploy();
  await erc721.deployed();
  console.log("NFT721 deployed to:", erc721.address);

  ERC1155 = await ethers.getContractFactory("NFT1155") as NFT1155__factory;
  erc1155 = await ERC1155.deploy();
  await erc1155.deployed();
  console.log("NFT1155 deployed to:", erc1155.address);

  Marketplace = await ethers.getContractFactory("Marketplace");
  marketplace = await Marketplace.deploy(erc20.address, erc721.address, erc1155.address);
  await marketplace.deployed();
  console.log("Marketplace deployed to:", marketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });