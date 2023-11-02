const imgs = [
    "images/hip1.jpg",
    "images/hip1.jpg",
    "images/hip1.jpg" 
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `img alt="Pictures of our team members" class="team-img" src="${imgs[i]}`
    }   
    container.innerHTML = imgsDOM

}
renderImages()