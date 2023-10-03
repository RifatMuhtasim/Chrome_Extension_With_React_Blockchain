console.log("chrome extension is running")

const body = document.getElementsByTagName("body");
console.log(body)
console.log(body[0].baseURI)

body[0].baseURI = "dotex.com"


// const html = `<div style='padding-top: 100px'><center><h1>Tavlav.com</h1><h2>${body[0].baseURI}</h2></center></div>`
// body[0].innerHTML = html



