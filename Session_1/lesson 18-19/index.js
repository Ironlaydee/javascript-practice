let countEl = document.getElementById("countel")
console.log(countEl)

let count = 0

  function increment () {
    count += 1
    countEl.innerText = count
  }
  
increment()

  console.log(count)

  function save() {
    console.log(count)
  }

  save()
  
