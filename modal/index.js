const openmodalbutton = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const modalContent = modal.getElementsByClassName(".modal__content");

openmodalbutton.addEventListener("click", () => {
  modal.classList.add("open");
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});
