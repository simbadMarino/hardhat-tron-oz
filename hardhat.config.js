require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-chai-matchers');
require('@openzeppelin/hardhat-tron');

module.exports = {
  solidity: {
    version: '0.8.26',
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: 'cancun',
      viaIR: true,
      // Embed source as literal text in metadata so verification
      // services (Sourcify, etc.) can reconstruct it deterministically.
      metadata: { bytecodeHash: 'ipfs', useLiteralContent: true },
    },
  },
  tre: {
    image: 'tronbox/tre:dev', // default
    port: 9090, // default; host side, container exposes 9090
    jarPath: './tre/FullNode.jar', // optional patched-jar bind mount
    autoStart: true, // default — master switch
    autoStartOnTest: true, // default — per-task gate
    keepRunning: false, // default — set true to skip teardown
    readinessTimeoutMs: 60_000, // default — wait-for-ready budget
  },
  defaultNetwork: 'tre',
  networks: {
    tre: {
      url: process.env.TRE_URL || 'http://127.0.0.1:9090/jsonrpc',
      tron: true,
      accounts: [process.env.TRE_PRIVATE_KEY || '0xdd23ca549a97cb330b011aebb674730df8b14acaee42d211ab45692699ab8ba5'],
    },
    nile: {
      url: 'https://nile.trongrid.io/jsonrpc',
      tron: true,
      accounts: [process.env.NILE_PRIVATE_KEY],
    }
  },
};