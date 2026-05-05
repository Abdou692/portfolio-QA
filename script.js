// Filtrage des cas de test
const filterButtons = document.querySelectorAll(".filter-btn");
const testRows = document.querySelectorAll(".test-row");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    testRows.forEach((row) => {
      const category = row.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});

// Fermeture automatique du menu burger après clic
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      const collapse = new bootstrap.Collapse(navbarCollapse);
      collapse.hide();
    }
  });
});

const scrollBtn = document.getElementById("scrollTopBtn");

// afficher le bouton quand on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// remonter en haut
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});