// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const overlay = document.querySelector(".overlay");

    menuToggle.addEventListener("click", () => {
        const isMenuOpen = nav.classList.toggle("open");
        overlay.classList.toggle("visible", isMenuOpen);
    });

    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove("open");
            overlay.classList.remove("visible");
        }
    });

    nav.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            nav.classList.remove("open");
            overlay.classList.remove("visible");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".footer-heading");

    headings.forEach((heading) => {
        heading.addEventListener("click", () => {
            const content = heading.nextElementSibling;

            // Alternar la clase 'expanded'
            if (content.classList.contains("expanded")) {
                content.classList.remove("expanded");
            } else {
                // Abrir la sección seleccionada
                content.classList.add("expanded");
            }
        });
    });
});

