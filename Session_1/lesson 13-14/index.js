let countEl = document.getElementById("countel")
console.log(countEl)

let count = 0

  function increment () {
    count = (count + 1)
    countEl.innerText = count
  }
  
increment()

  console.log(count)