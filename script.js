
const fixedImg = document.querySelector("#fixedImg");
const elemContainer = document.querySelector("#elemContainer");

elemContainer.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
})
elemContainer.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
})

const elem = document.querySelectorAll(".elem");
elem.forEach(elem => {
    elem.addEventListener("mouseenter", function () {
        let image = elem.getAttribute("image")
        fixedImg.style.backgroundImage = `url(${image})`
    })
});
