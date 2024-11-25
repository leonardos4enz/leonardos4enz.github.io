// index.js
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector("footer");
    const toggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const badges = document.querySelectorAll(".badge");
    const cards = document.querySelectorAll(".card");

    // Restaurar tema desde localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }

    // Alternar tema al hacer clic
    toggleButton.addEventListener("click", () => {
        if (body.classList.contains("bg-light")) {
            applyDarkTheme();
            localStorage.setItem("theme", "dark");
        } else {
            applyLightTheme();
            localStorage.setItem("theme", "light");
        }
    });

    // Función para aplicar tema oscuro
    function applyDarkTheme() {
        body.classList.replace("bg-light", "bg-dark");
        body.classList.replace("text-dark", "text-light");
        navbar.classList.replace("navbar-light", "navbar-dark");
        navbar.classList.replace("bg-light", "bg-dark");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    
        // Cambiar el tema de todos los badges
        badges.forEach(badge => {
            badge.classList.replace("bg-light", "bg-dark");
            badge.classList.replace("text-dark", "text-light");
        });
        cards.forEach(badge => {
            badge.classList.replace("bg-light", "bg-dark");
            badge.classList.replace("text-dark", "text-light");
        });
    }
    
    // Función para aplicar tema claro
    function applyLightTheme() {
        body.classList.replace("bg-dark", "bg-light");
        body.classList.replace("text-light", "text-dark");
        navbar.classList.replace("navbar-dark", "navbar-light");
        navbar.classList.replace("bg-dark", "bg-light");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    
        // Cambiar el tema de todos los badges
        badges.forEach(badge => {
            badge.classList.replace("bg-dark", "bg-light");
            badge.classList.replace("text-light", "text-dark");
        });
        cards.forEach(badge => {
            badge.classList.replace("bg-dark", "bg-light");
            badge.classList.replace("text-light", "text-dark");
        });
    }
});
