function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  elements.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(response => response.text())
      .then(html => {
        el.innerHTML = html;

        // Highlight correct nav
        const path = window.location.pathname.split("/").pop();
        if (path === "" || path === "index.html") {
          document.getElementById("nav-home")?.classList.add("active");
        }
        if (path === "results.html") {
          document.getElementById("nav-results")?.classList.add("active");
        }
        if (path === "pictures.html") {
          document.getElementById("nav-pictures")?.classList.add("active");
        }
      });
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
