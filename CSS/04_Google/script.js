// script.js

// Escucha cuando el DOM se ha cargado completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el botón para alternar el menú
    const menuToggle = document.querySelector(".menu-toggle");
    // Selecciona el contenedor de la navegación
    const nav = document.querySelector(".nav");
    // Selecciona el elemento de superposición que aparece al abrir el menú
    const overlay = document.querySelector(".overlay");

    // Añade un evento de clic al botón para alternar el menú
    menuToggle.addEventListener("click", () => {
        // Alterna la clase 'open' en el menú y guarda su estado actual
        const isMenuOpen = nav.classList.toggle("open");
        // Alterna la visibilidad de la superposición según el estado del menú
        overlay.classList.toggle("visible", isMenuOpen);
    });

    // Detecta clics en cualquier parte del documento
    document.addEventListener("click", (event) => {
        // Si el clic ocurre fuera del menú y del botón de alternar
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            // Cierra el menú
            nav.classList.remove("open");
            // Oculta la superposición
            overlay.classList.remove("visible");
        }
    });

    // Añade un evento al menú para manejar clics dentro de él
    nav.addEventListener("click", (event) => {
        // Si el elemento clicado es un enlace (<a>)
        if (event.target.tagName === "A") {
            // Cierra el menú
            nav.classList.remove("open");
            // Oculta la superposición
            overlay.classList.remove("visible");
        }
    });
});

// Escucha cuando el DOM se ha cargado completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los encabezados en el pie de página
    const headings = document.querySelectorAll(".footer-heading");

    // Añade un evento de clic a cada encabezado
    headings.forEach((heading) => {
        heading.addEventListener("click", () => {
            // Selecciona el siguiente elemento hermano (contenido) del encabezado
            const content = heading.nextElementSibling;

            // Alterna la clase 'expanded' para mostrar u ocultar el contenido
            if (content.classList.contains("expanded")) {
                // Si ya está expandido, lo colapsa
                content.classList.remove("expanded");
            } else {
                // Si no está expandido, lo expande
                content.classList.add("expanded");
            }
        });
    });
});