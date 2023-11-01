let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
localStorage.clear()
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON stringify(myLeads))
    renderLeads()
    
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target='_blank' href' - '>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href'${myLeads[i]}>
                ${myLeads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
    }