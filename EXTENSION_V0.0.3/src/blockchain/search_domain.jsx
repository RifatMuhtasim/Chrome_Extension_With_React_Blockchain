import Web3 from "web3";
import abi from "./blockchain_abi.json"
import { Dns_resolver } from "../dns_resolver/dns_resolver.jsx";



export const Run_blockchain =  async (domain) => {
   console.log("Successfully runs on background.");

   // const web3 = new Web3(Web3.givenProvider);
   // const web3 = new Web3(Web3.currentProvider);
   var web3 = new Web3("https://goerli.infura.io/v3/dbd362faf34244d9ab7bc537f359bd68");
   console.log('web3-data', web3);

   const address = "0xcDF61F77246ab97BCa9cA88f39c926E877d02df2"
   const contract = new web3.eth.Contract(abi, address);

   console.log(domain)
   const nft_domain = "genesiex"
   const result = await contract.methods.Read_NFT_Domain_block(nft_domain).call();
   console.log('result', result);


   if(result[0] === "IPAA") {
     Navigate_to_IPAA(result[1]);
   } else if (result[0] === "IPFS"){
     Navigate_to_IPFS(result[1])
   } else if (result[0] === "HTML"){
     Navigate_to_HTML(result[1])
   } else {
     alert("Problem")
   }
}


const Navigate_to_IPAA = (url_link) => {
   if(url_link) {
      chrome.tabs.update( {url: url_link}); 
   } else {

      // var newURL = "http://18.142.55.241";
      const newURL = "https://example.com"
      chrome.tabs.update( {url: newURL}); 
   }
}


const Navigate_to_IPFS = (url_link) => {

}


const Navigate_to_HTML = (html_doc) => {
 console.log(html_doc)
 const doc = "<html><body><div><center><h1>Tavlav World</h1></center></div></body></html>"
 const newURL = "https://example/"
 chrome.tabs.update( {url: newURL}); 
}
