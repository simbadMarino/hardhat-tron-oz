const hre = require("hardhat");

async function main() {
    const ONE_YEAR = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;
    const TRX_ON_DEPLOY_AMOUNT_SUN = 1000_000;  //Initial Asset : Send 1 TRX during deployment

    const Contract = await hre.ethers.getContractFactory("Lock");   // Creates a new Contract instance from contract name
    const contract = await Contract.deploy(ONE_YEAR, { value: TRX_ON_DEPLOY_AMOUNT_SUN });  //deploy method receives constructor arguments and TRX initial asset when specified, in this case it will take TRX_ON_DEPLOY_AMOUNT_SUN

    console.log("Contract deployed to:", contract.target);
}

main().catch(console.error);