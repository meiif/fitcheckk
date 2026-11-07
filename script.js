document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");
  const waterFill = document.querySelector(".water-fill");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggles.forEach((btn) => btn.classList.remove("active"));
      toggle.classList.add("active");
    });
  });

  if (waterFill) {
    waterFill.style.height = "76%";
  }
});
