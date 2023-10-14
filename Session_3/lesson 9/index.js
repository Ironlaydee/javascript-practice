let saveEl =  document.getElementById("save-el")
let countEl = document.getElementById("countel")
let count = 0

console.log(saveEl)
  function increment () {
    count += 1
    countEl.textContent = count
  }
  
function save() {
    let saveentries = count + " - "
    saveEl.textContent +=  saveentries 
    countEl.textContent = 0
    count = 0
}

  