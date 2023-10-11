import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const validateButton = document.getElementById("validateButton");
const validationResult = document.getElementById("validationResult");
const validationData = document.getElementById("validationData");
validateButton.onclick = validateCertificate;
const certificateId = document.getElementById("blockchainID");

async function validateCertificate() {
  console.log("Validating certificate!");
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
        validationResult.innerHTML =
          '<span class="checkmark">&#10004;</span> Certificate is valid!';
        validationResult.style.color = "#4CAF50";
        const certificateData = await contract.downloadCertificate(query);
        console.log(certificateData);
        validationData.innerHTML = `FirstName: ${certificateData.firstName} <br> Last Name: ${certificateData.lastName} <br> Organization: ${certificateData.organization} <br> Certified for: ${certificateData.certifiedFor} <br> Date of Issue: ${certificateData.dateOfIssue}`;
      } else {
        validationResult.innerHTML = "Not Valid!";
        validationResult.textContent = "Certificate is not valid or not found.";
        validationResult.style.color = "red";
      }
    } catch (error) {
      console.log(error);
    }
  }
}
