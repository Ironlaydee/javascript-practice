 const saveBtn = document.getElementById("save-btn")
 let data = [
    {
        player: "Ann",
        score: 52
    },
    {
        player: "Titus"
        score: 41
    }
 ]

 saveBtn.addEventListener("click", function() {
    console.log(data[0].score)
 })