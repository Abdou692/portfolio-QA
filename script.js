const buttons = document.querySelectorAll(".filter-btn");
const rows = document.querySelectorAll(".test-row");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    rows.forEach(row => {
      const category = row.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });

  });
});