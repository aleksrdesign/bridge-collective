const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});
