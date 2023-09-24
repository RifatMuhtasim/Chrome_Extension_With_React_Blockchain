import React from "react";
import Web3 from "web3";
import abi from "./blockchain_abi.json";



const Run_blockchain = async () => {
  console.log("Successfully runs on background.");

  // const web3 = new Web3(Web3.givenProvider);
  // const web3 = new Web3(Web3.currentProvider);
  var web3 = new Web3("https://goerli.infura.io/v3/dbd362faf34244d9ab7bc537f359bd68");
  console.log('web3-data', web3);

  const address = "0xcDF61F77246ab97BCa9cA88f39c926E877d02df2"
  const contract = new web3.eth.Contract(abi, address);

  const nft_domain = "genesiex"
  const result = await contract.methods.Read_NFT_Domain_block(nft_domain).call();
  console.log('result', result);


  if (result[0] === "IPAA") {
    Navigate_to_IPAA(result[1]);
  } else if (result[0] === "IPFS"){
    // Navigate to IPFS function
  } else if (result[0] === "HTML") {
    // Navigate to HTML function
  } else {
    // Navigate to nothings., 
  }

}


const Navigate_to_IPAA = (url_link) => {
  if (url_link) {
    chrome.tabs.update({ url: url_link });
  }
  // var newURL = "http://18.142.55.241";
  // chrome.tabs.update({ url: newURL });
}


const Navigate_to_HTML = () => {
  console.log("Navigate to HTML")
  let ip_address1 = "http://91.198.174.192"
  let ip_address2 = "http://192.168.3.1"
  let ip_address3 = "http://104.16.248.249"
  let ip_address4 = "http://wasiex"
  let ip_address5 = "http://wasitavex/"
  chrome.tabs.update({url: ip_address5})
}



chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  var url = new URL(details.url);
  console.log(url)
  if (!url.host.includes(".") && url.host !== "" && url.protocol === "http:" && url.host !== "wasitavex") {
    // Run_blockchain();
    Navigate_to_HTML()
  }
})

