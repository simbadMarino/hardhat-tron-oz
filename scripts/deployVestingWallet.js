const hre = require("hardhat");

async function main() {
    const BENEFICIARY_ACCOUNT = "TJDMQzjJSh5eC8WezVtnDXDuWXAwjV23eF";
    const START_TIMESTAMP = 1780530931;
    const DURATION_SECONDS = 10;
    const Contract = await hre.ethers.getContractFactory("VestingWalletTRON");   // Creates a new Contract instance from contract name
    const contract = await Contract.deploy(BENEFICIARY_ACCOUNT, START_TIMESTAMP, DURATION_SECONDS);  //deploy method receives constructor arguments and TRX initial asset when specified, in this case it will take TRX_ON_DEPLOY_AMOUNT_SUN

    console.log("Contract deployed to:", contract.target);
}

main().catch(console.error);