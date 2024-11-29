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


$(document).ready(function () {
    //#region Habilidades de programación
    function initHabilidadesProgramacion() {
        const habilidades = [
            { titulo: "Lenguajes", items: ["HTML", "JavaScript", "CSS", "C#", "SQL", "MySQL"] },
            { titulo: "Tecnologías", items: [".NET", "MVC", "jQuery", "Bootstrap"] },
            { titulo: "Metodologías", items: ["SCRUM"] },
            { titulo: "Herramientas", items: ["Azure DevOps", "Draw.io"] },
            { titulo: "Control de Versiones e Infraestructura", items: ["Git", "IIS"] }
        ];

        function crearColumna(titulo, items) {
            return `
                <div class="col-6 my-4">
                    <h4>${titulo}</h4>
                    <div class="d-flex flex-wrap gap-2 justify-content-center">
                        ${items.map(item => `<span class="badge rounded-pill bg-light border border-secondary px-3 py-2 text-dark">${item}</span>`).join("")}
                    </div>
                </div>
            `;
        }

        const contenedor = $("#skills .row");
        habilidades.forEach(habilidad => {
            const columna = crearColumna(habilidad.titulo, habilidad.items);
            contenedor.append(columna);
        });
    }
    //#endregion

    //#region Línea de aprendizaje
    function initLineaAprendizaje() {
        const lineaAprendizaje = [
            {
                fecha: "Universidad",
                descripcion: "Conocimiento básico de lenguajes",
                habilidades: ["HTML", "Javascript", "CSS", "C#", "SQL", "Git"]
            },
            {
                fecha: "Abril 2023",
                descripcion: "Comencé mi experiencia laboral",
                habilidades: ["jQuery", "MVC", "MySQL"]
            },
            {
                fecha: "Junio 2023",
                descripcion: "Realicé mi primera página web empresarial",
                habilidades: ["Bootstrap", "Azure DevOps", ".NET"]
            },
            {
                fecha: "Diciembre 2023",
                descripcion: "Aprendí el uso de la metodología",
                habilidades: ["SCRUM"]
            },
            {
                fecha: "Enero 2024",
                descripcion: "Comienzo de nuevo proyecto ERP",
                habilidades: ["IIS", "SQL", "Draw.io"]
            }
        ];

        function crearPaso(fecha, descripcion, habilidades) {
            return `
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="${descripcion}">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">${fecha}</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">
                            <div class="mb-1">${descripcion}</div>
                            ${habilidades.map(habilidad => `<span class="badge rounded-pill bg-light border border-secondary px-3 my-1 text-dark me-2">${habilidad}</span>`).join("")}
                        </p>
                    </div>
                </div>
            `;
        }

        const contenedor = $("#timeline");
        lineaAprendizaje.forEach(paso => {
            const elemento = crearPaso(paso.fecha, paso.descripcion, paso.habilidades);
            contenedor.append(elemento);
        });
        AOS.init();
    }
    //#endregion

    //#region Proyectos
    function initProyectos() {
        const proyectos = [
            {
                titulo: "ERP (Enterprise Resource Planning)",
                fecha: "Enero 2024 - Actualidad",
                descripcion: "Diseñé y desarrollé un ERP para los clientes internos de la empresa, implementado en múltiples departamentos para optimizar operaciones diarias y mejorar la eficiencia en los procesos internos.",
                habilidades: ["HTML", "JavaScript", "CSS", "C#", ".NET", "MVC", "SQL", "MySQL", "jQuery", "Bootstrap", "IIS", "SCRUM", "Azure DevOps", "Git", "Draw.io"],
                imagen: "/assets/img/erp.png",
                link: "https://www.xcf.com.mx/xslaycc"
            },
            {
                titulo: "Página corporativa",
                fecha: "Junio 2023 - Julio 2023",
                descripcion: "Desarrollé una página web corporativa para XCF, especializada en el transporte de carga consolidada, que facilita la interacción entre clientes, proveedores y demandantes con un diseño intuitivo y optimizado para todos los dispositivos.",
                habilidades: ["HTML", "JavaScript", "CSS", "C#", ".NET", "MVC", "jQuery", "Bootstrap", "Azure DevOps"],
                imagen: "/assets/img/webpage.png",
                link: "https://www.xcf.com.mx/"
            },
            {
                titulo: "Ventas de proyectos de ATICS / APTI",
                fecha: "Agosto 2023",
                descripcion: "Desarrollé una página web para un servicio especializado en apoyar a estudiantes del área de la salud con tareas académicas en el campo de las Tecnologías de la Información en Ciencias de la Salud (ATICS).",
                habilidades: ["HTML", "JavaScript", "CSS", "jQuery", "Bootstrap", "Git"],
                imagen: "/assets/img/jartics.png",
                link: "https://jartics.github.io"
            }
        ];

        function crearTarjeta(proyecto) {
            return `
                <div class="col-md-4 mb-4" data-aos="fade-up">
                    <div class="card h-100 shadow-sm bg-light">
                        <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${proyecto.titulo}</h5>
                            <p><small>${proyecto.fecha}</small></p>
                            <p class="card-text">${proyecto.descripcion}</p>
                            ${proyecto.habilidades.map(habilidad => `<span class="badge rounded-pill bg-light border border-secondary px-3 my-1 mb-2 text-dark me-2">${habilidad}</span>`).join("")}
                        </div>
                        <div class="card-footer">
                            <a href="${proyecto.link}" target="_blank" class="btn btn-rounded btn-primary btn-sm">Entrar a ver</a>
                        </div>
                    </div>
                </div>
            `;
        }

        const contenedor = $("#project-cards");
        proyectos.forEach(proyecto => {
            const tarjeta = crearTarjeta(proyecto);
            contenedor.append(tarjeta);
        });
    }
    //#endregion

    //#region Habilidades Blandas
    function initHabilidadesBlandas() {
        const softSkills = [
            { categoria: "Comunicación", habilidades: ["Comunicación asertiva", "Presentaciones efectivas", "Negociación con clientes"] },
            { categoria: "Trabajo en equipo", habilidades: ["Colaboración", "Resolución de conflictos", "Delegación", "Actividades de integración", "Retrospectivas"] },
            { categoria: "Liderazgo", habilidades: ["Toma de decisiones", "Gestión del cambio"] },
            { categoria: "Gestión del tiempo", habilidades: ["Priorización", "Planificación auto-organizada", "Manejo de plazos"] }
        ];

        function crearFila(categoria, habilidades) {
            const badges = habilidades
                .map(habilidad => `<span class="badge rounded-pill bg-light border border-secondary px-3 py-2 text-dark">${habilidad}</span>`)
                .join("");

            return `
                <div class="col-6 my-4">
                    <h4>${categoria}</h4>
                    <div class="d-flex flex-wrap gap-2 justify-content-center">
                        ${badges}
                    </div>
                </div>
            `;
        }

        const container = $("#soft-skills-container");
        softSkills.forEach(skillSet => {
            const fila = crearFila(skillSet.categoria, skillSet.habilidades);
            container.append(fila);
        });
    }
    //#endregion

    // Inicializar todas las secciones
    initHabilidadesProgramacion();
    initLineaAprendizaje();
    initProyectos();
    initHabilidadesBlandas();
});
