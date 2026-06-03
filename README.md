# TRON Hardhat Demo


This project goal is to serve as a playground to test the hardhat-tron plugin capabilities as well as the [tron-contracts](https://github.com/OpenZeppelin/tron-contracts) libraries which are being ported from [openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)

Requirements :
- Hardhat v2
TODO: Add any other req later.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test    #Leverages hardhat-tron patched node (make sure to generate your patched FullNode.jar first from hardhat-tron repo isntructions)
npx hardhat node    # Keeps a tronbox/tre docker instance running 
npx hardhat ignition deploy ./ignition/modules/Lock.js
npx hardhat run scripts/deploy.js --network nile
```

TO-DO: Add hardhat-tron specific instructions to generate the FullNode patched tre docker as well as consider including a link to MIGRATION.md considerations.