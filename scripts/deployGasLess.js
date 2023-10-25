const { ethers } = require("hardhat")

const main = async() =>{
    const deployer = await ethers.getSigners();
    console.log("deployer", deployer)
    const myERC20GasLess = await ethers.deployContract("MyERC20GasLess",[1000000,18,"krypcCoin","krypc","0xCb233FeEAEeF59215B5226ca80DbE78c2FA9f663","0xdB4dFB11b6B74487c744c251d01718fEEb19279a"]);
    await myERC20GasLess.waitForDeployment();
    console.log("krypc coin contract deployed at",myERC20GasLess.target);
}

main()
.then(() =>{process.exit(0)})
.catch((error) =>{
    console.error(error);
    process.exit(1);
})