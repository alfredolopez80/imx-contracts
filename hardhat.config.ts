import "@nomiclabs/hardhat-waffle";
import 'hardhat-typechain'
import '@typechain/ethers-v5'
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";

dotenv.config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    dev: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.INFURE_API_KEY}`,
      accounts: [`0x${process.env.DEPLOYER_ROPSTEN_PRIVATE_KEY}`],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURE_API_KEY}`,
      accounts: [`0x${process.env.DEPLOYER_ROPSTEN_PRIVATE_KEY}`],
    },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURE_API_KEY}`,
    //   accounts: [`0x${process.env.DEPLOYER_MAINNET_PRIVATE_KEY}`],
    // },
  },
  typechain: {
    outDir: "artifacts/typechain",
    target: "ethers-v5",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
};

