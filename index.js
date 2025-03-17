$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
    initProjects();
    initTimeline();
    initTecnologias();
    gsapAnimations();

    let fechaInicioLaboral = "2023-04-03";
    $("#experience-years").text(calcularExperiencia(fechaInicioLaboral));
});

//#region Projects

const initProjects = () => {
    let projectHTML = projects.map(project => {
        let techIcons = project.technologies.map(tech => 
            `<i class='devicon-${tech}-plain colored'></i>`).join(" ");
    
        return `
            <div class="col-12 col-sm-12 col-md-5 col-lg-3 project-item">
                <div class="glasmorphism-bg p-4 rounded-5 d-flex flex-column h-100">
                    <h4 class="pt-2 project-name">${project.title}</h4>
                    <p class="text-muted"><small>${project.year}</small></p>
                    <p>${techIcons}</p>
                    <p class="flex-grow-1">${project.description}</p>
                    <a href="${project.link}" class="btn btn-outline-dark mt-auto border-dashed" target="_blank">Conocer</a>
                </div>
            </div>`;
    }).join("");
    
    $("#projects-container").html(projectHTML);
    
    // Animaciones GSAP con ScrollTrigger
    gsap.utils.toArray(".project-item").forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 85%", // Inicia la animación cuando el 85% del elemento entra en la vista
                toggleActions: "play none none none",
            }
        });
    });

    // Animación de hover para proyectos
    $(".project-item").hover(
        function() {
            gsap.to(this, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        },
        function() {
            gsap.to(this, { scale: 1, duration: 0.3, ease: "power1.out" });
        }
    );
};


const projects = [
    {
        title: "XSLAYCC",
        year: "2024-2025",
        technologies: ["bootstrap", "jquery", "csharp", "dotnetcore", "microsoftsqlserver", "mysql", "azuredevops", "git"],
        description: "Diseñé y desarrollé un ERP para los clientes internos de XCF.",
        link: "https://www.xcf.com.mx/xslaycc"
    },
    {
        title: "Página XCF",
        year: "2023",
        technologies: ["bootstrap", "jquery", "csharp", "dotnetcore", "mysql", "azuredevops"],
        description: "Desarrollé una página web corporativa para XCF.",
        link: "https://www.xcf.com.mx/"
    },
    {
        title: "JARTICS",
        year: "2023",
        technologies: ["html5", "css3", "javascript", "git"],
        description: "Página Web para ATICS de estudiantes del área de la salud.",
        link: "https://jartics.github.io"
    }
];

//#endregion 

const initTimeline = () => {
    let timelineHTML = timelineEvents.map((event, index) => {
        let techBadges = event.technologies.map(tech => 
            `<span class="badge bg-primary">${tech}</span>`
        ).join(" ");

        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-line ${index === timelineEvents.length - 1 ? 'last' : ''}"></div>
                <div class="timeline-content">
                    <div class="timeline-title">
                        ${event.title} 
                        <small class="text-muted fw-light fs-6">${event.date}</small>
                    </div>
                    <p class="mb-0 pb-0">${event.description}</p>
                    <div class="tech-tags d-flex flex-wrap gap-2 my-2">${techBadges}</div>
                </div>
            </div>`;
    }).join("");

    $("#timeline-container").html(timelineHTML);

    // Animación de entrada
    $(".timeline-item").each(function(i) {
        $(this).delay(i * 150).fadeIn(500);
    });

    gsap.utils.toArray(".timeline-item").forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%", // La animación inicia cuando el 80% del elemento entra en la vista
                toggleActions: "play none none none" // La animación solo se ejecuta una vez
            }
        });
    });

    // Efecto de rebote en los puntos de la línea de tiempo
    gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.from(dot, {
            scale: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: dot,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });
};




const timelineEvents = [
    {
        title: "Universidad",
        date: "2018-2022",
        description: "Desarrollo web y aplicaciones básico.",
        technologies: ["HTML", "JavaScript", "CSS", "C#", "Java", "Python", "SQL", "Git"]
    },
    {
        title: "XCF",
        date: "2023",
        description: "Comencé practicas en desarrollo web.",
        technologies: ["Bootstrap 3 y 5","jQuery" , ".NET", "MYSQL", "TFS"]
    },
    {
        title: "XCF",
        date: "2024",
        description: "Trabajé como líder de proyecto en la creación de el ERP de la empresa.",
        technologies: ["Metodología SCRUM", "Azure DevOps", "IIS Internet Information Services", "Draw.io"]
    },
    {
        title: "XCF",
        date: "2025",
        description: "Trabajo actualmente como líder de equipo de desarrollo para la migración del sistema actual al ERP.",
        technologies: ["JWT", "SSMA Migration Assistant", "Open AI GPTs", "Sonar Qube"]
    }
];

const deviconMap = {
    "HTML": "devicon-html5-plain",
    "CSS": "devicon-css3-plain",
    "JavaScript": "devicon-javascript-plain",
    "C#": "devicon-csharp-plain",
    "Java": "devicon-java-plain",
    "Python": "devicon-python-plain",
    "SQL": "devicon-mysql-plain",
    "Git": "devicon-git-plain",
    "Bootstrap 3 y 5": "devicon-bootstrap-plain",
    "jQuery": "devicon-jquery-plain",
    ".NET": "devicon-dotnetcore-plain",
    "MYSQL": "devicon-mysql-plain",
    "TFS": "devicon-tfs-plain",
    "Azure DevOps": "devicon-azuredevops-plain",
    "JWT": "devicon-jwt-plain",
    "Open AI GPTs": "devicon-openai-plain",
    "Sonar Qube": "devicon-sonarqube-plain"
};

const initTecnologias = () => {
    // Extraer tecnologías únicas
    const uniqueTechnologies = [...new Set(timelineEvents.flatMap(event => event.technologies))];

    // Generar spans con íconos si están en el mapa
    let techHTML = uniqueTechnologies.map(tech => {
        let iconClass = deviconMap[tech] || ""; // Si no hay ícono, queda vacío
        return `
            <span class="badge tech-item bg-secondary text-white p-2 m-2">
                ${iconClass ? `<i class="${iconClass}"></i> ` : ""}${tech}
            </span>
        `;
    }).join(" ");

    $("#tecnologias-container").html(techHTML);

    // Animación con GSAP y ScrollTrigger
    gsap.utils.toArray(".tech-item").forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
            delay: index * 0.1, // Pequeña diferencia de tiempo entre cada tecnología
            scrollTrigger: {
                trigger: item,
                start: "top 85%", // Se activa cuando el 85% del elemento entra en la vista
                toggleActions: "play none none none"
            }
        });
    });
};

const gsapAnimations = () => {
    // Animación de entrada para la sección About
    gsap.from("#about .row", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });

    // Imagen con efecto de escala y fade-in
    gsap.from("#about img", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)"
    });

    // Texto aparece en secuencia con un efecto fluido
    gsap.from("#about h1, #about p", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "power3.out"
    });
}


function copyEmail() {
    var email = "leonardorsaenz@gmail.com"; // Reemplaza con tu correo real
    navigator.clipboard.writeText(email).then(function() {
        toastr.success('Correo ' +  email + ' copiado.','', {
            closeButton: true,
            progressBar: false,
            positionClass: 'toast-top-center'
        });
    }, function(err) {
        console.error("Error al copiar: ", err);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        toastr.success('¡Copiado al portapapeles!','', {
            closeButton: true,
            progressBar: false,
            positionClass: 'toast-top-center'
        });
    }).catch(err => {
        toastr.error('Error al copiar. Intenta nuevamente.', 'Error', {
            closeButton: true,
            progressBar: false,
            positionClass: 'toast-top-center'
        });
    });
}

function calcularExperiencia(fechaInicio) {
    let inicio = new Date(fechaInicio);
    let hoy = new Date();
    let años = hoy.getFullYear() - inicio.getFullYear();
    let meses = hoy.getMonth() - inicio.getMonth();

    if (meses < 0) {
        años--;
        meses += 12;
    }

    if (años > 0 && meses > 0) {
        return `${años} año${años > 1 ? 's' : ''} y ${meses} mes${meses > 1 ? 'es' : ''}`;
    } else if (años > 0) {
        return `${años} año${años > 1 ? 's' : ''}`;
    } else {
        return `${meses} mes${meses > 1 ? 'es' : ''}`;
    }
}