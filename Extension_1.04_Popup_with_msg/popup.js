
(function(){
   console.log("Pop Page Running")

   let bg_page = chrome.extension.getBackgroundPage()
   let word = bg_page.word
   console.log("word is :", word)

   let paragraph = document.getElementsByTagName("p")
   paragraph[0].innerText = word


   let domain_name = "world.com"
   let url = `https://api.dynadot.com/api3.json?key=6D9O638I7W7tS8f7u7p9G9H7p6I7c7s&command=domain_info&domain=${domain_name}`

   loadJSON(url, Got_data)
   function Got_data(data){
      console.log(data)
   }
   
})()

