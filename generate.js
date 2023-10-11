import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

// const connectButton = document.getElementById("connectButton");
const generateButton = document.getElementById("generateButton");
// connectButton.onclick = connect;
generateButton.onclick = generateCertificate;
const certificateToken = document.getElementById("certificateToken");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const organization = document.getElementById("organization");
const certifiedFor = document.getElementById("certifiedFor");
const dateOfIssue = document.getElementById("dateOfIssue");

async function generateCertificate() {
  console.log("Generating certificate!");
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.createCertificate(
        firstName.value,
        lastName.value,
        organization.value,
        certifiedFor.value,
        dateOfIssue.value
      );
      console.log(transactionResponse);
      await listenForTransactionMine(transactionResponse, provider);
      console.log("Done");
      const id = await contract.getId();
      console.log(id.toString());
      certificateToken.innerHTML = `Certificate Token: ${id.toString()}`;
    } catch (error) {
      console.log(error);
    }
  }
}

function listenForTransactionMine(transactionResponse, provider) {
  console.log(`Mining: ${transactionResponse.hash}....`);
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Completed with ${transactionReceipt.confirmations} confirmations.`
      );
      console.log(transactionReceipt);
      resolve();
    });
  });
}
