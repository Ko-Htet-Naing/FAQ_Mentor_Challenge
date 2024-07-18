document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".toggle-button")
    .closest(".faq-box")
    .querySelector(".faq-paragraph")
    .classList.add("show");

  let toggleButton = document.querySelectorAll(".faq-title");
  toggleButton.forEach((box) => {
    box.addEventListener("click", function () {
      // to select individual division
      const paragraph =
        this.closest(".faq-box").querySelector(".faq-paragraph");
      const button = this.querySelector(".toggle-button");
      if (paragraph.classList.contains("show")) {
        paragraph.classList.remove("show");
        button.classList.remove("minus");
        button.classList.add("plus");
        button.src = "./assets/images/icon-plus.svg";
      } else {
        paragraph.classList.add("show");
        button.classList.add("minus");
        button.classList.remove("plus");
        button.src = "./assets/images/icon-minus.svg";
      }
    });
  });
});
