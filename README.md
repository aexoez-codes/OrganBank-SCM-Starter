# Organ Bank DApp
This project is a decentralized application (DApp) that simulates an organ bank on the Ethereum blockchain. Users can donate, withdraw, and transfer organs represented as tokens. The project utilizes smart contracts, React.js for the frontend, and ethers.js for interacting with the Ethereum blockchain.

## Project Overview

The Organ Bank DApp allows users to:

  * Donate organs: Users can donate organs to the bank, increasing their total organ balance.
  * Withdraw organs: Users can withdraw organs from their balance.
  * Transfer organs: Users can transfer organs to another user's account.

## Getting Started

**Prerequisites**

Before you begin, ensure you have the following installed on your system:
* Node.js and npm
* MetaMask or any Ethereum wallet
* An Ethereum node or test network 

## Installation

1. Clone the Repository.

```
git clone <repository-url>
cd <repository-directory>
```
2. Install the dependencies

```
npm install
```
3. Start a Local Ethereum Node Using Hardhat in the Second Terminal:

```
npx hardhat node
```

4. Run the Application by deploying the smart contract and start the Application

```
npx hardhat run scripts/deploy.js --network localhost
npm run dev
```
5. Open your browser and navigate **http://localhost:3000**

## Smart Contract

The smart contract, Assessment.sol, is written in Solidity. It handles the following operations:

* getRemainingOrgan: Retrieves the number of organs available for a specific account.
* addOrgan: Allows users to add organs to their balance.
* getOrgan: Allows users to withdraw organs.
* transferOrgan: Enables users to transfer organs to another account.

## Frontend

The frontend is built with React.js and uses ethers.js to interact with the Ethereum blockchain. Key features include:

* Connecting to a MetaMask wallet
* Viewing the user's organ balance
* Donating, withdrawing, and transferring organs
