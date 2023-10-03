console.log("content script message is running")

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, senderResponse){
   console.log(message.txt)

}