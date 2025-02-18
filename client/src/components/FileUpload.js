import React, { useState } from "react";
import { pinFileToIPFS } from "../utils/ipfs";
import { ethers } from "ethers";

const FileUpload = ({ contract }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    try {
      const ipfsHash = await pinFileToIPFS(file);
      await contract.add(
        ethers.getAddress(window.ethereum.selectedAddress),
        ipfsHash
      );
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading file");
    }
    setUploading(false);
    setFile(null);
  };

  return (
    <div>
      <h2>Upload File</h2>
      <div className="fileupload">
        <input
          type="file"
          onChange={handleFileChange}
          disabled={uploading}
          id="uploadfile"
        />
        <button onClick={handleUpload} disabled={!file || uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
