// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {VestingWallet} from "openzeppelin-tron-solidity/contracts/finance/VestingWallet.sol";

/**
 * @dev A simple vesting wallet that inherits OpenZeppelin's {VestingWallet}.
 *
 * It linearly releases native currency and TRC-20 tokens to a beneficiary over
 * a fixed duration starting at a given timestamp.
 */
contract VestingWalletTRON is VestingWallet {
    constructor(
        address beneficiary,
        uint64 startTimestamp,
        uint64 durationSeconds
    ) VestingWallet(beneficiary, startTimestamp, durationSeconds) {}
}
