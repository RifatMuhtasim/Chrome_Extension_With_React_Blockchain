console.log("This is Popup")


const params = {
   active: true,
   currentWindow: true 
}
chrome.tabs.query(params, gotTabs)
function gotTabs(tabs){
   console.log(tabs)

   
   let msg = {
      txt: "hello"
   }
   chrome.tabs.sendMessage(tabs[0].id, msg)
}



// function Setup(){
//    let First_name = select("#first-name")

//    First_name.input(changeText)

//    function changeText(){
//       const params = {
//          active: true,
//          currentWindow: true 
//       }
//       chrome.tabs.query(params, gotTabs)
//       function gotTabs(tabs){
//          console.log(tabs)

//          let message = First_name.value()
//          console.log(message)
//          let msg = {
//             txt: "hello"
//          }
//          chrome.tabs.sendMessage(tabs[0].id, msg)

//       }

//    }

// }
