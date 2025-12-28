const burger = document.querySelector(".burger");
const navLinks = document.querySelector("#nav-links");

function closeMenu() {
  burger.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = burger.classList.toggle("is-open");
  navLinks.classList.toggle("is-open", isOpen);
  burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

/* ✅ Le plus fiable sur mobile : pointerup */
burger.addEventListener("pointerup", (e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleMenu();
});

/* Empêche la fermeture immédiate quand on clique/tap dans le menu */
navLinks.addEventListener("pointerup", (e) => {
  e.stopPropagation();
});

/* Ferme le menu quand on clique sur un lien */
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

/* Ferme si tap/clic en dehors */
document.addEventListener("pointerup", (e) => {
  const inside = e.target.closest(".navbar-container");
  if (!inside) closeMenu();
});

/* Ferme avec ESC (desktop) */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
