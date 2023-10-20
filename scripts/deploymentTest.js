const { ethers } = require("hardhat")

const main = async() =>{
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 60;
    const deployer = await ethers.getSigners();
    console.log("deployer", deployer)
    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime);
    console.log("Lock contract deployed at",lock.target);
}

main()
.then(() =>{process.exit(0)})
.catch((error) =>{
    console.error(error);
    process.exit(1);
})