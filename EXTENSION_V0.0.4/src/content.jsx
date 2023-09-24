console.log("content script is running on Wasiex. ")


const body = document.getElementsByTagName("html")
console.log("body", body)
console.log(body[0].baseURI)

if(body[0].baseURI === "http://wasitavex/"){
   body[0].innerHTML = "<html><body><div><center><h1>Wasi Extension</h1></center></div><div><center><h2>End of an Era for Our NFT Domain Browser Extension</h2></center></div><div><center><h3>We announce the discontinuation of our browser extension and the closure of our business</h3></center></div></body></html>"
}


// body[0].innerHTML = "<html><body><div><center><h1>Tavlav World</h1></center></div><div><center><h3>End of an Era for Our Browser Extension</h3></center></div><div><center><h5></h5></center></div></body></html>"
