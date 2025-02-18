import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const AccessControl = ({ contract }) => {
  const [accessList, setAccessList] = useState([]);
  const [newUserAddress, setNewUserAddress] = useState("");

  useEffect(() => {
    const fetchAccessList = async () => {
      try {
        const list = await contract.shareAccess();
        setAccessList(list);
      } catch (error) {
        console.error("Error fetching access list:", error);
      }
    };

    fetchAccessList();
  }, [contract]);

  const handleAllow = async () => {
    if (!ethers.isAddress(newUserAddress)) {
      alert("Invalid Ethereum address");
      return;
    }
    try {
      await contract.allow(newUserAddress);
      alert("Access granted successfully");
      setNewUserAddress("");
      // Refresh the access list
      const updatedList = await contract.shareAccess();
      setAccessList(updatedList);
    } catch (error) {
      console.error("Error granting access:", error);
      alert("Error granting access");
    }
  };

  const handleDisallow = async (address) => {
    try {
      await contract.disallow(address);
      alert("Access revoked successfully");
      // Refresh the access list
      const updatedList = await contract.shareAccess();
      setAccessList(updatedList);
    } catch (error) {
      console.error("Error revoking access:", error);
      alert("Error revoking access");
    }
  };

  return (
    <div>
      <h2>Access Control</h2>
      <div className="access">
        <input
          type="text"
          value={newUserAddress}
          onChange={(e) => setNewUserAddress(e.target.value)}
          placeholder="Enter Ethereum address"
        />
        <button id="grant-access" onClick={handleAllow}>Grant Access</button>
      </div>
      <div className="access">
      <h3>Users with Access:</h3>
      <ul>
        {accessList.map((access, index) => (
          <li key={index}>
            {access.user} - {access.access ? "Allowed" : "Not Allowed"}
            <button onClick={() => handleDisallow(access.user)}>
              Revoke Access
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default AccessControl;
