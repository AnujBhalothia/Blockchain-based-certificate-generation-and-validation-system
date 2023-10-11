import { ethers } from "./ethers-5.6.esm.min.js";
import { abi_UA, contractAddress_UA } from "./constants.js";

const grantButton = document.getElementById("grantButton");
grantButton.onclick = grantAccess;
const aadharNumber = document.getElementById("aadharNumber");
const accountAddress = document.getElementById("accountAddress");

async function grantAccess() {
  console.log(
    `Granting Access to aadhar ${aadharNumber.value} having account ${accountAddress.value}`
  );
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress_UA, abi_UA, signer);
    try {
      const transactionResponse = await contract.grantAccess(
        aadharNumber.value,
        accountAddress.value
      );
      console.log(transactionResponse);
      await listenForTransactionMine(transactionResponse, provider);
      console.log("Access Granted!");
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
