import { ethers } from "./ethers-5.6.esm.min.js";
import { abi_UA, contractAddress_UA } from "./constants.js";

let walletConnected = sessionStorage.getItem("walletConnected") === "true";
const connectButton = document.getElementById("connectButton");
const disconnectButton = document.getElementById("disconnectButton");
const generateButton = document.getElementById("generateButton");
const validateButton = document.getElementById("validateButton");
const downloadButton = document.getElementById("downloadButton");
const uploadButton = document.getElementById("uploadButton");

// Check walletConnected and set button states accordingly
if (walletConnected) {
  connectButton.innerHTML = "Connected";
  disconnectButton.style.display = "flex";
  generateButton.disabled = false;
  validateButton.disabled = false;
  downloadButton.disabled = false;
  uploadButton.disabled = false;
} else {
  disconnectButton.style.display = "none";
  generateButton.disabled = true;
  validateButton.disabled = true;
  downloadButton.disabled = true;
  uploadButton.disabled = true;
}

connectButton.onclick = connect;
disconnectButton.onclick = disconnect;
generateButton.onclick = generateCertificate;
validateButton.onclick = () => redirectToPage("validate.html");
downloadButton.onclick = () => redirectToPage("download.html");
uploadButton.onclick = () => redirectToPage("upload.html");

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    connectButton.innerHTML = "Connected";
    disconnectButton.style.display = "block";
    walletConnected = true;
    sessionStorage.setItem("walletConnected", "true");
    enableButtons();
    attachButtonEventListeners();
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    alert("Please install MetaMask");
  }
}

function attachButtonEventListeners() {
  generateButton.onclick = generateCertificate;
  validateButton.onclick = () => redirectToPage("validate.html");
  downloadButton.onclick = () => redirectToPage("download.html");
  uploadButton.onclick = () => redirectToPage("upload.html");
}

function disconnect() {
  connectButton.innerHTML = "Connect";
  disconnectButton.style.display = "none";
  walletConnected = false;
  sessionStorage.setItem("walletConnected", "false");
  disableButtons();
  connectButton.onclick = connect;
  alert("You have been disconnected from your wallet.");
}

function enableButtons() {
  generateButton.disabled = false;
  validateButton.disabled = false;
  downloadButton.disabled = false;
  uploadButton.disabled = false;
}

function disableButtons() {
  generateButton.disabled = true;
  validateButton.disabled = true;
  downloadButton.disabled = true;
  uploadButton.disabled = true;
}

function redirectToPage(page) {
  if (walletConnected) {
    window.location.href = page;
  } else {
    alert("Please connect your wallet.");
  }
}

async function generateCertificate() {
  console.log("Verifying Access!");
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress_UA, abi_UA, signer);

    try {
      const response = await contract.checkAccess();
      console.log(response);
      if (!response) {
        alert(
          "Generator access not granted! Please contact admin to get access."
        );
      } else {
        window.location.href = "./generate.html"; // Redirect to generate.html
      }
    } catch (error) {
      console.log(error);
    }
  }
}
