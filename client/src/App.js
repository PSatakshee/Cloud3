import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import AccessControl from './components/AccessControl';
import uploadAbi from './artifacts/contracts/Upload.sol/Upload.json';
import './App.css'
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function App() {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // const init = async () => {
    //   if (window.ethereum) {
    //     try {
    //       // Request account access
    //       await window.ethereum.request({ method: 'eth_requestAccounts' });
    //       // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //       const provider = new ethers.BrowserProvider(window.ethereum);

    //       const signer = provider.getSigner();
    //       const address = await signer.getAddress();
    //       setAccount(address);

    //       const uploadContract = new ethers.Contract(contractAddress, uploadAbi.abi, signer);
    //       setContract(uploadContract);
    //     } catch (error) {
    //       console.error("Error connecting to MetaMask", error);
    //     }
    //   } else {
    //     console.log("Please install MetaMask!");
    //   }
    // };
    const init = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);
    
          const uploadContract = new ethers.Contract(contractAddress, uploadAbi.abi, signer);
          setContract(uploadContract);
        } catch (error) {
          console.error("Error connecting to MetaMask", error);
        }
      } else {
        console.log("Please install MetaMask!");
      }
    };
    init();
  }, []);

  if (!account) {
    return <div>Please connect to MetaMask</div>;
  }

  return (
    <div className="App">
      <h1>☁️CLOUD 3</h1>
      <p>Connected Account: {account}</p>
      {contract && (
        <>
          <FileUpload contract={contract} />
          <FileList contract={contract} />
          <AccessControl contract={contract} />
        </>
      )}
    </div>
  );
}

export default App;
