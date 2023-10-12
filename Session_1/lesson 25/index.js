let saveEl =  document.getElementById("save-el")
let countEl = document.getElementById("countel")
let count = 0

console.log(saveEl)
  function increment () {
    count += 1
    countEl.innerText = count
  }
  
function save() {
    let saveentries = count + " - "
    saveEl.innerText +=  saveentries 

    console.log(count)
}

  