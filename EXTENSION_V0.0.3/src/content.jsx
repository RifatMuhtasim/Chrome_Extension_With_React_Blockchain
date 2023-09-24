console.log("content script is running. ")


const body = document.getElementsByTagName("html")
console.log("body", body)

if(body[0].baseURI === "https://example.com/"){
   body[0].innerHTML = "<html><body><div><center><h1>Tavlav World</h1></center></div></body></html>"
}

