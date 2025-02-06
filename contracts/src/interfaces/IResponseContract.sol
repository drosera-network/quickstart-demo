// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IResponseContract {
    function setUser(address _user) external;
    function getUser() external view returns (address);
}
