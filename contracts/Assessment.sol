// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//import "hardhat/console.sol";

contract Assessment {
    address payable public owner;
    mapping(address => uint256) public remainingOrgans;

    event OrganAdded(address indexed from, uint256 amount);
    event OrganWithdrawn(address indexed to, uint256 amount);
    event OrganTransferred(address indexed from, address indexed to, uint256 amount);

    constructor(uint256 initialOrganSupply) payable {
        owner = payable(msg.sender);
        remainingOrgans[owner] = initialOrganSupply;
    }

    function getRemainingOrgan(address _account) public view returns (uint256) {
        return remainingOrgans[_account];
    }

    function addOrgan(uint256 _amount) public payable {
        remainingOrgans[msg.sender] += _amount;
        emit OrganAdded(msg.sender, _amount);
    }

    function getOrgan(uint256 _withdrawAmount) public {
        require(remainingOrgans[msg.sender] >= _withdrawAmount, "Insufficient balance");

        remainingOrgans[msg.sender] -= _withdrawAmount;
        payable(msg.sender).transfer(_withdrawAmount);  // This transfers ether, not organs

        emit OrganWithdrawn(msg.sender, _withdrawAmount);
    }

    function transferOrgan(address _to, uint256 _amount) public {
        require(remainingOrgans[msg.sender] >= _amount, "Insufficient balance");

        remainingOrgans[msg.sender] -= _amount;
        remainingOrgans[_to] += _amount;

        emit OrganTransferred(msg.sender, _to, _amount);
    }

}
