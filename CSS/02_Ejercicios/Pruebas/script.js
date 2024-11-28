// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    // Abrir o cerrar el menú al hacer clic en el botón
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove("open");
        }
    });

    // Cerrar el menú al seleccionar un enlace
    nav.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            nav.classList.remove("open");
        }
    });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".footer-heading");

    headings.forEach((heading) => {
        heading.addEventListener("click", () => {
            const content = heading.nextElementSibling;

            // Alternar la clase 'expanded'
            if (content.classList.contains("expanded")) {
                content.classList.remove("expanded");
            } else {
                // Cerrar cualquier otra sección abierta
                document.querySelectorAll(".footer-content.expanded").forEach((item) => {
                    item.classList.remove("expanded");
                });

                // Abrir la sección seleccionada
                content.classList.add("expanded");
            }
        });
    });
});
