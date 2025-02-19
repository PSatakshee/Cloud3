# 📸 Decentralized Image Upload and Sharing Platform 🌐

Welcome to the **Decentralized Image Upload and Sharing Platform**! This project empowers users to securely upload, manage, and share images using blockchain technology, React, and IPFS. 🚀

---

## **✨ Features**
- 🔒 **Secure Image Storage**: Upload images to IPFS for decentralized storage.
- 👥 **Access Control**: Grant or revoke access to specific users via smart contracts.
- 📂 **Image Management**: View and manage uploaded images through a user-friendly interface.
- 🌍 **Decentralized Infrastructure**: Built on Ethereum blockchain with Solidity smart contracts.

---

## **🛠️ Tech Stack**
- **Blockchain**: Ethereum (Smart Contracts written in Solidity)
- **Frontend**: React.js
- **Storage**: IPFS (via Pinata API)
- **Development Tools**: Hardhat, Ethers.js, MetaMask

---

## **🚀 Getting Started**

### Prerequisites
1. Install [Node.js](https://nodejs.org/) and npm.
2. Install [MetaMask](https://metamask.io/) browser extension.
3. Create a free account on [Pinata](https://www.pinata.cloud/) for IPFS integration.

### Installation

1. Clone the repository:
git clone https://github.com/PSatakshee/Cloud3.git
cd decentralized-cloud-platform


2. Install dependencies:
npm install


3. Navigate to the `client` folder and install frontend dependencies:
cd client
npm install


4. Compile the smart contracts:
npx hardhat compile


5. Deploy the smart contracts locally:
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost


6. Start the React app:
cd client
npm start


---

## **📸 How It Works**
1. Connect your MetaMask wallet to the app.
2. Upload an image, which is stored on IPFS.
3. The IPFS hash is saved on the Ethereum blockchain via a smart contract.
4. Grant or revoke access to other users through the Access Control feature.

---

## **📖 Learn More**
- [Ethereum Documentation](https://ethereum.org/en/developers/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [IPFS Documentation](https://docs.ipfs.io/)


