console.log("background script is running")

chrome.runtime.onMessage.addListener(Receiver)

window.word = "tavlav.com"

function Receiver(request, sender, sendResponse ){
   console.log(request.text)
   window.word = request.text

}