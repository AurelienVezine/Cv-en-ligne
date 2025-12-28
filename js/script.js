const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".navbar-links");
const navbarContainer = document.querySelector(".navbar-container");

if (burger && navLinks && navbarContainer) {
  const openMenu = () => {
    burger.classList.add("is-open");
    navLinks.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    navLinks.classList.contains("is-open") ? closeMenu() : openMenu();
  };

  // ✅ Le bouton burger uniquement
  burger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // ✅ Clique/tap en dehors => ferme
  document.addEventListener("pointerdown", (e) => {
    if (!navbarContainer.contains(e.target)) closeMenu();
  });

  // ✅ Clique sur un lien => laisse naviguer puis ferme
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      // on ferme après que le navigateur ait géré l’ancre
      setTimeout(closeMenu, 0);
    });
  });

  // ✅ ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}
