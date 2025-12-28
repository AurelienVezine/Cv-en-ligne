const burger = document.querySelector(".burger");
const navLinks = document.querySelector("#nav-links");

if (burger && navLinks) {
  let lastTouchTime = 0;

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
    const isOpen = navLinks.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  };
  // ✅ 1) Tactile (le plus fiable sur mobile)
  burger.addEventListener(
    "touchstart",
    (e) => {
      lastTouchTime = Date.now();
      e.preventDefault(); // évite ghost click / double déclenchement
      e.stopPropagation();
      toggleMenu();
    },
    { passive: false }
  );

  // ✅ 2) Click (desktop + fallback)
  burger.addEventListener("click", (e) => {
    // ignore si un touch vient d’arriver (évite double toggle)
    if (Date.now() - lastTouchTime < 600) return;
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Empêche de fermer quand on tape dans le menu
  navLinks.addEventListener("touchstart", (e) => e.stopPropagation(), {
    passive: true,
  });
  navLinks.addEventListener("click", (e) => e.stopPropagation());

  // Ferme au clic sur un lien
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
    a.addEventListener("touchstart", () => closeMenu(), { passive: true });
  });

  // Ferme si tap/clic en dehors
  document.addEventListener(
    "touchstart",
    (e) => {
      const inside = e.target.closest(".navbar-container");
      if (!inside) closeMenu();
    },
    { passive: true }
  );

  document.addEventListener("click", (e) => {
    const inside = e.target.closest(".navbar-container");
    if (!inside) closeMenu();
  });

  // Ferme avec ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}
