console.log("content script is running")


chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message, sender, sendResponse){
   console.log(message.text)

   if(message.text === "color_change"){
      let paragraphs = document.getElementsByTagName("p")
      for(elt of paragraphs){
         elt.style['background-color'] = "#FF00FF"
      }
   }

}