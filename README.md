# Organ Bank DApp

Welcome to the **Organ Bank DApp**, a decentralized application (DApp) designed to simulate an organ bank on the Ethereum blockchain. This project leverages smart contracts to allow users to donate, withdraw, and transfer organs represented as unique tokens. The DApp is built using React.js for the frontend and ethers.js for blockchain interaction.

## Project Overview

The **Organ Bank DApp** provides users with the following capabilities:

* **Donate Organs**: Increase your total organ balance by donating organs to the bank.
* **Withdraw Organs**: Withdraw organs from your balance whenever needed.
* **Transfer Organs**: Seamlessly transfer organs to another user's account.

## Features

- **Decentralized**: Operates on the Ethereum blockchain, ensuring transparency and security.
- **User-Friendly Interface**: Intuitive design for smooth user interaction.
- **Real-Time Updates**: Instant updates on balances and transactions.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Smart Contract Overview](#smart-contract-overview)
  - [Frontend Overview](#frontend-overview)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Getting Started

Follow the steps below to get a local copy of the project up and running.

### Prerequisites

Ensure you have the following tools and dependencies installed:

- **Node.js** and **npm**: Required for JavaScript development.
- **MetaMask** or any Ethereum-compatible wallet: To interact with the DApp.
- **Ethereum Node or Test Network**: For blockchain connectivity.

### Installation

1. **Clone the Repository**

   Clone the project repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   
2. **Install Dependencies**

Navigate to the project directory and install the required npm packages:

```
npm install
```
3. **Start a Local Ethereum Node Using Hardhat**
Open a second terminal and run the following command to start a local Ethereum node:

```bash
npx hardhat node
```
4. **Deploy the Smart Contract**

Deploy the smart contract to the local Ethereum network:

```bash
npx hardhat run scripts/deploy.js --network localhost
```
5. **Run the Application**

```bash
npm run dev
```
6. **Access the DApp**

Open your preferred web browser and navigate to http://localhost:3000 to access the DApp.

### Usage
This section provides an overview of the smart contract and frontend functionalities of the Organ Bank DApp.

### Smart Contract Overview
The smart contract, ```Assessment.sol```, is developed in Solidity and manages the core operations of the DApp:

```getRemainingOrgan```: Retrieve the number of organs available for a specific account.
```addOrgan```: Add organs to a user's balance.
```getOrgan```: Withdraw organs from a user's balance.
```transferOrgan```: Transfer organs to another account.
