const burger = document.querySelector(".burger");
const navLinks = document.querySelector("#nav-links");

burger.addEventListener("click", () => {
  const isOpen = burger.classList.toggle("is-open");
  navLinks.classList.toggle("is-open", isOpen);
  burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Ferme le menu quand on clique sur un lien
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
});

// Ferme si clic dehors
document.addEventListener("click", (e) => {
  const inside = e.target.closest(".navbar-container");
  if (!inside) {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
});

// Ferme avec ESC (bonus pro)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
});
