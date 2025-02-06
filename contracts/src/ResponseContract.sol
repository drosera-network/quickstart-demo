// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract ResponseContract is Ownable {
    address internal user;
    bool internal readyToStart;
    address public trap;

    modifier onlyTrap() {
        require(msg.sender == trap, "Only the trap can call this function");
        _;
    }

    constructor() Ownable(msg.sender) {}

    function setUser(address _user) external {
        user = _user;
        readyToStart = false;
    }

    function getUser() external view returns (address) {
        return user;
    }

    function setReadyToStart(bool _readyToStart) external onlyTrap {
        readyToStart = _readyToStart;
        user = address(0);
    }

    function setTrap(address _trap) external onlyOwner {
        trap = _trap;
    }
}
