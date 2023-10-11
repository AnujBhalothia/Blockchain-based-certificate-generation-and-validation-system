import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";
import certificateData from "./download.js";

// const downloadingButton = document.getElementById("downloadingButton");
// downloadingButton.onclick = verifyDownloadCertificate;

// const certificateId = document.getElementById("blockchainID");

const webpage = document.getElementById("certificateBody");
webpage.onload = generateTemplate;
console.log(certificateData);

// async function generateTemplate() {
//   console.log("Generating Template!");
//   if (typeof window.ethereum !== "undefined") {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     console.log(signer);
//     const contract = new ethers.Contract(contractAddress, abi, signer);
//     try {
//       const query = BigInt(certificateID.value);
//       console.log(response);
//       const certificateData = await contract.downloadCertificate(query);
//       console.log(certificateData);
//       document.getElementById("recipient-name").innerHTML =
//         certificateData.firstName;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
