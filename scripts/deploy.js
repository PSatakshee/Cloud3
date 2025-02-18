const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.deployContract("Upload");
  await Upload.waitForDeployment();
  console.log("Upload deployed to:", await Upload.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
