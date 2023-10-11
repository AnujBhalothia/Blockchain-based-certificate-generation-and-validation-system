const {ethers} = require("hardhat");

async function main() {
  const CGFactory = await ethers.getContractFactory("CertificatesGenerator");
  console.log("Deploying certificate generator contract....");
  const CertificatesGenerator = await CGFactory.deploy();
  await CertificatesGenerator.waitForDeployment();
  console.log(`Deployed contract to: ${ await CertificatesGenerator.getAddress()}`);

  const UAFactory = await ethers.getContractFactory("UserAccess");
  console.log("Deploying user contract....");
  const UserAccess = await UAFactory.deploy();
  await UserAccess.waitForDeployment();
  console.log(`Deployed contract to: ${ await UserAccess.getAddress()}`);
}



main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
})