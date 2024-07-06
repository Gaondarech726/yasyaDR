const btn = document.querySelector("button");
const yasya = document.querySelector(".yasya");
const imgyasya = yasya.querySelector("img")
const textyasya = yasya.querySelector("p")

btn.addEventListener("click", () => {
    yasya.style.animation = "an 2s linear forwards"
})