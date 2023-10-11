import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const downloadingButton = document.getElementById("downloadingButton");
downloadingButton.onclick = verifyDownloadCertificate;

const certificateId = document.getElementById("blockchainID");

async function verifyDownloadCertificate() {
  console.log("Downloading certificate!");
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const query = BigInt(certificateId.value);
      const response = await contract.validateCertificates(query);
      console.log(response);
      if (response == "Verified") {
        const certificateData = await contract.downloadCertificate(query);
        console.log(certificateData);
        validationResult.innerHTML = "";
        //setTimeout(500);
        window.location.href = "./certificate/certificate2.html";
      } else {
        //task invalid id given for downloading certificate
        console.log("Certificate id not valid!");
        validationResult.innerHTML = "Not Valid!";
        validationResult.textContent = "Certificate is not valid or not found.";
        validationResult.style.color = "red";
      }
    } catch (error) {
      console.log(error);
    }
  }
}
