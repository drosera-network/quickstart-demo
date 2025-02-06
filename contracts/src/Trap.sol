// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ITrap} from "drosera-contracts/interfaces/ITrap.sol";
import {IResponseContract} from "./interfaces/IResponseContract.sol";

contract Trap is ITrap {
    address responseContract = 0x416aA3569F8C4C98FE3472701D89e4A8B91bee51; // update this with the correct address of the contract that will be called

    struct CollectOutput {
        bool isUserSet;
    }

    constructor() {}

    function collect() external view returns (bytes memory) {
        address user = IResponseContract(responseContract).getUser();
        if (user == address(0)) {
            return abi.encode(CollectOutput({isUserSet: false}));
        }
        return abi.encode(CollectOutput({isUserSet: true}));
    }

    function shouldRespond(bytes[] calldata data) external pure returns (bool, bytes memory) {
        CollectOutput memory output = abi.decode(data[0], (CollectOutput));
        if (!output.isUserSet) {
            return (false, bytes(""));
        }
        return (true, abi.encode(true));
    }
}
