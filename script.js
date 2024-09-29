let about = document.getElementById("about")
let contact = document.getElementById("contact")
let service = document.getElementById("services")
let work = document.getElementById("work")

about.addEventListener("click", () => {
    window.document.querySelector("main").scroll(0, 100)
})
service.addEventListener("click", () => {
    window.document.querySelector("main").scroll(0, 1100)
})
work.addEventListener("click", () => {
    window.document.querySelector("main").scroll(0, 1600)
})
contact.addEventListener("click", () => {
    window.document.querySelector("main").scroll(0, 1800)
})