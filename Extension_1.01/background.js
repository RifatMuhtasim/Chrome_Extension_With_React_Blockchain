console.log("background running")


chrome.browserAction.onClicked.addListener(helloWorld)


function helloWorld(tab){
   console.log(tab)
   let msg = {
      text: "color_change"
   }
   chrome.tabs.sendMessage(tab.id, msg)
}