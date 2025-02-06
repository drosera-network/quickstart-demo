// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {ResponseContract} from "../src/ResponseContract.sol";

contract DeployScript is Script {
    uint256 deployerPrivateKey;

    function run() public {
        if (block.chainid == 31337) {
            deployerPrivateKey = vm.envUint("ANVIL_PRIVATE_KEY");
        } else {
            deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        }
        vm.startBroadcast(deployerPrivateKey);

        new ResponseContract();

        vm.stopBroadcast();
    }
}

contract SetTrapScript is Script {
    uint256 deployerPrivateKey;

    function run() public {
        if (block.chainid == 31337) {
            deployerPrivateKey = vm.envUint("ANVIL_PRIVATE_KEY");
        } else {
            deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        }
        vm.startBroadcast(deployerPrivateKey);

        // make sure to set the contract and the trap address correctly
        ResponseContract(address(0)).setTrap(address(0));

        vm.stopBroadcast();
    }
}

contract SetUserScript is Script {
    uint256 deployerPrivateKey;

    function run() public {
        if (block.chainid == 31337) {
            deployerPrivateKey = vm.envUint("ANVIL_PRIVATE_KEY");
        } else {
            deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        }
        vm.startBroadcast(deployerPrivateKey);

        // make sure to set the contract and the user address correctly
        ResponseContract(address(0)).setUser(address(0));

        vm.stopBroadcast();
    }
}
