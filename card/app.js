const sumBtn = document.querySelector(".sum-btn");
const closeBtn = document.querySelector(".close-icon")
const containerModal = document.querySelector(".container-modal");

sumBtn.addEventListener("click", () => {
    containerModal.style.display = "flex"
})

closeBtn.addEventListener("click", () => {
    containerModal.style.display = "none"
})


