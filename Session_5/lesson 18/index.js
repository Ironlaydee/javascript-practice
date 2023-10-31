let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    //ulEl.textcontent += "<li>" + myLeads[i] + "</li>"

//an alternative for this will be 
    const li = document.createElement(li)
    li.textcontent = myLeads[i]
    ulEl.append(li)
}
