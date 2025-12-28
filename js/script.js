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

  // Burger
  burger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Tap dehors => ferme
  document.addEventListener("click", (e) => {
    if (!navbarContainer.contains(e.target)) closeMenu();
  });

  // ✅ Liens : on force le scroll (Safari iOS friendly)
  navLinks.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault(); // on gère nous-même

      const targetId = a.getAttribute("href");
      const target = document.querySelector(targetId);

      closeMenu();

      if (target) {
        // petit delay pour laisser le menu se fermer
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          // option : mettre à jour l'URL
          history.pushState(null, "", targetId);
        }, 50);
      }
    });
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}
