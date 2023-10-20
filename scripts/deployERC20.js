const { ethers } = require("hardhat")

const main = async() =>{
    const deployer = await ethers.getSigners();
    console.log("deployer", deployer)
    const krypcCoin = await ethers.deployContract("KrypcCoin");
    await krypcCoin.waitForDeployment();
    console.log("krypc coin contract deployed at",krypcCoin.target);
}

main()
.then(() =>{process.exit(0)})
.catch((error) =>{
    console.error(error);
    process.exit(1);
})