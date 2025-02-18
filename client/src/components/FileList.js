import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const FileList = ({ contract }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const address = ethers.getAddress(window.ethereum.selectedAddress);
        const fileUrls = await contract.display(address);
        setFiles(fileUrls);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, [contract]);

  return (
    <div>
      <h2>Your Files</h2>
      <ul>
        {files.map((fileUrl, index) => (
          <li key={index}>
            <a href={`https://ipfs.io/ipfs/${fileUrl}`} target="_blank" rel="noopener noreferrer">
              {fileUrl}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
