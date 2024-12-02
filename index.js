$(document).ready(async function () {
    //showLoading();
    await cargarComponentes();

    

    //#region Habilidades de programación
    function initHabilidadesProgramacion() {
        const habilidades = [
            { titulo: "Lenguajes", items: ["HTML", "JavaScript", "CSS", "C#", "SQL", "MySQL"], descripcion: "Lenguajes de programacion" },
            { titulo: "Tecnologías", items: [".NET", "MVC", "jQuery", "Bootstrap"] },
            { titulo: "Metodologías ágiles", items: ["SCRUM"] },
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

    //#region Roles Desempeñados
    function initRolesDesempenados() {
        const roles = [
            "Practicante de desarrollo",
            "Desarrollador Web Full Stack Jr.",
            "Líder de proyectos"
        ];

        function crearBadge(titulo) {
            return `
                <span class="badge rounded-pill bg-light border border-secondary px-3 my-1 text-dark me-2">
                    ${titulo}
                </span>
            `;
        }

        const contenedor = $("#roles");
        roles.forEach(titulo => {
            const badge = crearBadge(titulo);
            contenedor.append(badge);
        });
    }
    //#endregion



    //#region Línea de aprendizaje
    function initLineaAprendizaje() {
        const lineaAprendizaje = [
            {
                fecha: "2018 - 2022",
                descripcion: "Facultad de Ciencias Físico Matemáticas",
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
                descripcion:
                    "Diseñé y desarrollé un ERP para los clientes internos de la empresa, implementado en múltiples departamentos para optimizar operaciones diarias y mejorar la eficiencia en los procesos internos.",
                habilidades: [
                    "HTML", "CSS", "JavaScript", "C#", ".NET", "MVC",
                    "SQL", "MySQL", "jQuery", "Bootstrap", "IIS",
                    "SCRUM", "Azure DevOps", "Git", "Draw.io"
                ],
                imagen: "/assets/img/erp.png",
                link: "https://www.xcf.com.mx/xslaycc"
            },
            {
                titulo: "Página corporativa",
                fecha: "Junio 2023 - Julio 2023",
                descripcion:
                    "Desarrollé una página web corporativa para XCF, especializada en el transporte de carga consolidada, que facilita la interacción entre clientes, proveedores y demandantes con un diseño intuitivo y optimizado para todos los dispositivos.",
                habilidades: [
                    "HTML", "CSS", "JavaScript", "C#", ".NET", "MVC",
                    "jQuery", "Bootstrap", "Azure DevOps"
                ],
                imagen: "/assets/img/webpage.png",
                link: "https://www.xcf.com.mx/"
            },
            {
                titulo: "Ventas de proyectos de ATICS / APTI",
                fecha: "Agosto 2023",
                descripcion:
                    "Desarrollé una página web para un servicio especializado en apoyar a estudiantes del área de la salud con tareas académicas en el campo de las Tecnologías de la Información en Ciencias de la Salud (ATICS).",
                habilidades: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git"],
                imagen: "/assets/img/jartics.png",
                link: "https://jartics.github.io"
            }
        ];
        

        function crearTarjeta(proyecto) {
            return `
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div class="card h-100 shadow-sm bg-light">
                        <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
                        <div class="card-body text-start">
                            <h5 class="card-title">${proyecto.titulo}</h5>
                            <p><small>${proyecto.fecha}</small></p>
                            <p class="card-text">${proyecto.descripcion}</p>
                            <div class="">
                            ${proyecto.habilidades.map(habilidad => `<span class="badge rounded-pill bg-light border border-secondary px-3 my-1 mb-2 text-dark me-2">${habilidad}</span>`).join("")}
                            </div>
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
    initRolesDesempenados();

    //#region Temas oscuro y claro
    const body = $("body");
    const navbar = $(".navbar");
    console.log(navbar)
    const footer = $("footer");
    const toggleButton = $(".theme-toggle");
    const themeIcon = $(".theme-icon");

    // Restaurar tema desde localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }

    // Alternar tema al hacer clic
    toggleButton.on("click", function () {
        if (body.hasClass("bg-light")) {
            applyDarkTheme();
            localStorage.setItem("theme", "dark");
        } else {
            applyLightTheme();
            localStorage.setItem("theme", "light");
        }
    });

    // Función para aplicar tema oscuro
    function applyDarkTheme() {
        body.removeClass("bg-light text-dark").addClass("bg-dark text-light");
        navbar.removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
        themeIcon.removeClass("fa-sun").addClass("fa-moon");

        // Cambiar tema de badges y cards dinámicamente
        updateDynamicElements("dark");
    }

    // Función para aplicar tema claro
    function applyLightTheme() {
        body.removeClass("bg-dark text-light").addClass("bg-light text-dark");
        navbar.removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
        themeIcon.removeClass("fa-moon").addClass("fa-sun");

        // Cambiar tema de badges y cards dinámicamente
        updateDynamicElements("light");
    }

    // Función para actualizar elementos dinámicos
    function updateDynamicElements(theme) {
        const badgeTheme = theme === "dark" ? ["bg-light", "text-dark", "bg-dark", "text-light"] : ["bg-dark", "text-light", "bg-light", "text-dark"];
        $(".badge").removeClass(badgeTheme[0] + " " + badgeTheme[1]).addClass(badgeTheme[2] + " " + badgeTheme[3]);
        $(".card").removeClass(badgeTheme[0] + " " + badgeTheme[1]).addClass(badgeTheme[2] + " " + badgeTheme[3]);
    }

    // Observa dinámicamente la adición de elementos
    $(document).on("DOMNodeInserted", ".badge, .card", function () {
        const currentTheme = body.hasClass("bg-dark") ? "dark" : "light";
        updateDynamicElements(currentTheme);
    });

    //#endregion

    hideLoading();
});

const cargarComponentes = async () => {
    const cargarComponente = (selector, url) => {
        return new Promise((resolve, reject) => {
            $(selector).load(url, function (response, status, xhr) {
                if (status === "error") {
                    console.error(`Error al cargar el componente en ${selector}:`, xhr.status, xhr.statusText);
                    reject(xhr);
                } else {
                    resolve(response);
                }
            });
        });
    };

    try {
        //await cargarComponente("#components-loading-spinner-container", "components/loading-spinner/loading-spinner.html");
        
        await cargarComponente("#components-footer-container", "components/footer/footer.html");
        await cargarComponente("#components-navbar-container", "components/navbar/navbar.html");
        console.log("Componentes cargados exitosamente");
    } catch (error) {
        console.error("Error al cargar los componentes:", error);
    }
};


