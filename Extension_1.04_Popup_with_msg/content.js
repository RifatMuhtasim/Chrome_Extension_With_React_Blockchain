console.log("content script is running")

window.addEventListener("mouseup", wordSelected)

function wordSelected(){
   let selected_text = window.getSelection().toString()
   console.log(selected_text)
   if(selected_text.length > 0){
      let message = {
         text: selected_text
      }
      chrome.runtime.sendMessage(message)
   }
}