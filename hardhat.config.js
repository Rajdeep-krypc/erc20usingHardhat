require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      
    },
    mumbaiPolygon: {
      url: `https://polygon-mumbai-bor.publicnode.com`,
      accounts: [`${process.env.PrivateKey}`]
    }
  }
};
