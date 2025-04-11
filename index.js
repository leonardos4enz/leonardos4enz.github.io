$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
    
    animacionTexto();
    initTimeline();
    initTecnologias();
    initProjects();
    gsapAnimations();

    let fechaInicioLaboral = "2023-04-03";
    $("#experience-years").text(calcularExperiencia(fechaInicioLaboral));

    const riveFile = '/assets/rive/cat_2.riv'; // Asegúrate de que esta ruta sea correcta

    const r = new rive.Rive({
        src: riveFile,
        // OR the path to a discoverable and public Rive asset
        // src: '/public/example.riv',
        canvas: document.getElementById("canvas"),
        autoplay: true,
        // artboard: "Arboard", // Optional. If not supplied the default is selected
        stateMachines: "State Machine 1",
        onLoad: () => {
            r.resizeDrawingSurfaceToCanvas();

            // Animación de fade in para el gato
            gsap.fromTo(r.canvas, 
                { opacity: 0 }, // Comienza completamente transparente
                { opacity: 1, duration: 1 } // Termina completamente visible
            );
        },
    });

    window.addEventListener("resize", () => {
        r.resizeDrawingSurfaceToCanvas();
    });
    
    fetch('/api/nasa')
    .then(res => res.json())
    .then(data => {
      document.body.innerHTML += `
        <h1>${data.title}</h1>
        <p><em>${data.date}</em></p>
        <img src="${data.url}" alt="${data.title}" style="max-width:100%; border-radius: 10px;" />
        <p>${data.explanation}</p>
      `;
    })
    .catch(error => {
      console.error('Error al obtener la imagen de la NASA:', error);
      document.body.innerHTML += `<p>Error al cargar la imagen de la NASA 🚀</p>`;
    });
});


//#region Projects

const initProjects = () => {
    let projectHTML = projects.reverse().map(project => {
        let techIcons = project.technologies.map(tech => 
            `<i class='devicon-${tech}-plain colored'></i>`).join(" ");
        
        const imageHTML = `
            <div class="image-container" style="cursor: ${project.modalBody ? 'pointer' : 'default'};" onclick="${project.modalBody ? `showProjectDetails('${project.title}', \`${project.projectId}\`); $('#projectModal').modal('show');` : ''}">
                <img src="/assets/img/projects/${project.projectId}/1.png" class="card-img-top" alt="${project.title}">
            </div>
        `;

        return `
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 project-item ps-2 pe-2 mb-4">
                <div class="card glasmorphism-bg p-0 m-0 d-flex flex-column h-100 border-0">
                    ${imageHTML} 
                    <div class="card-body p-4 d-flex flex-column">
                        <div class="card-body-content pb-3 flex-grow-1">
                            <h4 class="pt-2 project-name">${project.title}</h4>
                            <p class="text-muted"><small class="me-2">${project.year}</small></p>
                            <p>${project.description}</p>
                            <p>${techIcons}</p>
                        </div>
                        
                        <div class="d-flex justify-content-between mt-3">
                            <a href="${project.link}" class="btn btn-outline-dark rounded-pill" target="_blank">
                                <i class="fas fa-arrow-right"></i> Ver
                            </a>
                            ${project.modalBody ? `
                            <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="modal" data-bs-target="#projectModal" onclick="showProjectDetails('${project.title}', \`${project.projectId}\`)">
                                <i class="fas fa-paper-plane"></i> Arquitectura
                            </button>
                            ` : ''}
                        </div> 
                    </div>
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
                start: "top 85%", // La animación inicia cuando el 80% del elemento entra en la vista
                toggleActions: "play none none none" // La animación solo se ejecuta una vez
            }
        });
    });
}; 

// Función para mostrar detalles en el modal
function showProjectDetails(title, projectId) {
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBodyElement = document.querySelector('.modal-body .container');
    
    modalTitle.textContent = title;

    // Buscar el proyecto por su ID
    const project = projects.find(p => p.projectId === projectId);
    if (project) {
        modalBodyElement.innerHTML = project.modalBody;
    }
}

const projects = [
    {
        title: "JARTICS",
        year: "2023",
        technologies: ["html5", "css3", "javascript", "git"],
        description: "Facilité el acceso a información relevante para los estudiantes del área de la salud, mejorando su aprendizaje.",
        projectId: "jartics",
        link: "https://jartics.github.io"
    },
    {
        title: "Página XCF",
        year: "2023 ",
        technologies: ["bootstrap", "jquery", "csharp", "dotnetcore", "mysql", "azuredevops"],
        description: "Desarrollé una página web corporativa para XCF, para presentar sus servicios y fortalecer su presencia en línea.",
        projectId: "pagina-xcf",
        link: "https://www.xcf.com.mx/",
        modalBody: `
        <h4 class="mb-4 mt-4">¿De qué trata la página?</h4>
        <p class="my-5">
            Es un sitio web <strong>corporativo</strong> desarrollado para la empresa <strong>XCF</strong>, con el objetivo de presentar sus servicios y fortalecer su presencia en línea. Me encargué de implementar la estructura visual y funcional del sitio.
        </p>
        ${createCarousel([
            '/assets/img/projects/pagina-xcf/0.png',
            '/assets/img/projects/pagina-xcf/1.png',
            '/assets/img/projects/pagina-xcf/2.png',
            '/assets/img/projects/pagina-xcf/3.png',
            '/assets/img/projects/pagina-xcf/4.png',
            '/assets/img/projects/pagina-xcf/5.png'
        ], 'carousel-pagina-xcf')}
        <p class="my-5">
            Utilicé <strong>Bootstrap</strong> y <strong>jQuery</strong> para la interfaz de usuario, logrando un diseño <strong>responsivo</strong> y funcional. Del lado del servidor, trabajé con <strong>C#</strong> y <strong>.NET Framework 4.8</strong> para conectar el sitio a una base de datos <strong>MySQL</strong>.
        </p>
        <p class="my-5">
            Este proyecto me permitió fortalecer mis habilidades en <strong>desarrollo web corporativo</strong>, <strong>despliegue en la nube</strong> y en el uso de herramientas de desarrollo profesional como <strong>DevOps</strong>.
        </p>
    `
    },
    {
        title: "XSLAYCC",
        year: "2024-2025",
        technologies: ["bootstrap", "jquery", "csharp", "dotnetcore", "microsoftsqlserver", "mysql", "azuredevops", "git"],
        description: "Desarrollé un ERP que optimizó los procesos internos de XCF, mejorando la eficiencia.",
        projectId: "xslaycc",
        link: "https://www.xcf.com.mx/xslaycc",
        modalBody: `
            <h4 class="mb-4 mt-4">¿Qué es XSLAYCC?</h4>
            <p class="my-5">
                Es un sistema <strong>ERP</strong> diseñado para mejorar la <strong>gestión interna</strong> de la <strong>empresa</strong>, con módulos para <strong>compras</strong>, <strong>inventarios</strong> y <strong>administración de flotillas</strong>. Cada interfaz se adapta a las <strong>necesidades operativas</strong>, desde <strong>catálogos simples</strong> hasta <strong>flujos de trabajo más complejos</strong>.
            </p>
            ${createCarousel([
                '/assets/img/projects/xslaycc/0.png',
                '/assets/img/projects/xslaycc/1.png',
                '/assets/img/projects/xslaycc/2.png',
                '/assets/img/projects/xslaycc/3.png',
                '/assets/img/projects/xslaycc/4.png'
            ], 'carousel-xslaycc')}
            <p class="my-5">
                Este sistema <strong>ERP</strong> ha sido desarrollado utilizando <strong>MVC .Net Core 8</strong> y se compone de <strong>tres proyectos</strong>: <strong>WEB</strong>, <strong>API</strong> y <strong>CLASSES</strong>. Para garantizar la seguridad en la transmisión de datos, se implementó encriptación AES para el envío de información entre la <strong>WEB</strong> y la <strong>API</strong>. Además, se han establecido capas de seguridad en las <strong>CLASSES</strong> para proteger la lógica de negocio.
            </p>
        `
    }
];

//#endregion 

const initTimeline = () => {
    let timelineHTML = timelineEvents.map((event, index) => {
        let techBadges = event.technologies.map(tech => 
            `<span class="badge bg-secondary">${tech}</span>`
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
                    <p class="p-0 mt-2 mb-3">${event.description}</p>
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
            <span class="badge tech-item bg-secondary text-white p-2 m-3 mb-4">
                ${iconClass ? `<i class="${iconClass}"></i> ` : ""}${tech}
            </span>
        `;
    }).join(" ");

    $("#tecnologias-container").html(techHTML).addClass("text-center");

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
                start: "top 90%", // Se activa cuando el 85% del elemento entra en la vista
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

function openImageModal(imageSrc) {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    const modal = new bootstrap.Modal(imageModal);
    modal.show();
}

function createCarousel(images, carouselId) {
    // Comienza a construir el HTML del carrusel
    let carouselHTML = `
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
            <div class="carousel-inner">
    `;

    // Agregar las imágenes al carrusel
    images.forEach((image, index) => {
        carouselHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${image}" class="d-block w-100" alt="Imagen ${index + 1}" style="height: 40vh; object-fit: contain;" onclick="openImageModal('${image}')">
            </div>
        `;
    });

    // Cerrar el HTML del carrusel
    carouselHTML += `
            </div>
    `;

    // Agregar botones solo si hay más de una imagen
    if (images.length > 1) {
        carouselHTML += `
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        `;
    }

    carouselHTML += `
        </div>
    `;

    return carouselHTML; // Devuelve el HTML completo del carrusel
}


const cursorDot = document.getElementById('cursor-dot');
let mouseX = 0;
let mouseY = 0;
let dotX = 0; // Posición actual de la bolita
let dotY = 0;

// Captura la posición del mouse
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Verifica si el puntero está sobre un elemento con cursor: pointer
    const element = document.elementFromPoint(mouseX, mouseY);
    if (element && getComputedStyle(element).cursor === 'pointer') {
        cursorDot.classList.add('square'); // Cambia a triángulo
    } else {
        cursorDot.classList.remove('square'); // Regresa a punto
    }
});

// Función para mover la bolita con un retraso
function moveCursorDot() {
    // Suavizar el movimiento
    dotX += (mouseX - dotX) * 0.3; // Ajusta el factor para más o menos suavizado
    dotY += (mouseY - dotY) * 0.3; // Ajusta el factor para más o menos suavizado

    cursorDot.style.left = `${dotX}px`;
    cursorDot.style.top = `${dotY}px`;

    // Verifica si no está en un celular
    if (window.innerWidth > 768) { // Ajusta el tamaño según sea necesario
        cursorDot.style.borderRadius = '50%'; // Asegúrate de que sea un punto
    }

    requestAnimationFrame(moveCursorDot); // Llama a la función en el siguiente frame
}

// Inicia el movimiento
moveCursorDot();



const animacionTexto = () => {
    // Envolver cada letra en un span
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/(\S+)(\s*)/g, "<span class='letter'>$1</span>$2");

    anime.timeline()
      .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1950,
        delay: (el, i) => 70 * i
      });
}

// Cambiar el color del cursor al abrir el modal
const projectModal = document.getElementById('projectModal');
projectModal.addEventListener('show.bs.modal', function () {
    cursorDot.classList.add('white'); // Cambia a blanco
});

// Restablecer el color del cursor al cerrar el modal
projectModal.addEventListener('hide.bs.modal', function () {
    cursorDot.classList.remove('white'); // Regresa a azul
});











