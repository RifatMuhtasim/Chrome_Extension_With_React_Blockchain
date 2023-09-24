import Web3 from "web3";
import abi from "./blockchain/blockchain_abi.json";
import { Dns_resolver } from "./dns_resolver/dns_resolver.jsx";
import { Run_blockchain } from "./blockchain/search_domain.jsx";


chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  var url = new URL(details.url);
  if (!url.host.includes(".") && url.host !== "" && url.protocol === "http:" ) {
    // Run_blockchain(url.host);

    const newUrl = "https://127.0.0.1"
    const wikiUrl = "http://91.198.174.192"
    chrome.tabs.update({ url: wikiUrl });


  }
})



/*
const dnsMappings = {
  "life": "127.0.0.1:8000",
  "example.com": "192.168.1.100",
  "google.com": "8.8.8.8",
};

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const { tabId , url} = details;
  // console.log(details)
  const urlx = new URL(details.url);
  // console.log(url)
  if (!urlx.host.includes(".") && urlx.host !== "" && urlx.protocol === "http:" ) {

    const domain = urlx.hostname;
    const resolvedIP = dnsMappings[domain];
    if (resolvedIP) {
      const newUrl = url.replace(domain, resolvedIP);
      chrome.tabs.update(tabId, { url: newUrl });
    }

    // Test_one(tabId, urlx.hostname)

  }
})



const Test_one = (tabId, domain_name) => {
  console.log("test_one", domain_name)

  const resolvedIP = dnsMappings[domain_name];
  if (resolvedIP) {
    // const newUrl = url.replace(domain_name, resolvedIP);
    const newUrl = "http://127.0.0.1"
    chrome.tabs.update(tabId, { url: newUrl });
  } 

  const newURL = "http://127.0.0.1:8000"
  // chrome.tabs.update( {url: newURL}); 
}

*/