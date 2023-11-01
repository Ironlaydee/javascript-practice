let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.setItem(myLeads, www.awesomelead.com)

// localStorage.setItem(key, value)
// localStorage.getItem(key)
//localStorage.clear()
//PS: both key and value must be a string

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(myLeads)
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