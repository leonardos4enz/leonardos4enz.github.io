# 🌐 Portafolio personal – Leonardo Sáenz

![Vista previa](Captura%20de%20pantalla%202025-07-12%20143023.png)

[Demo en vivo → leonardos4enz.github.io](https://leonardos4enz.github.io/)

![Captura](Captura%20de%20pantalla%202025-07-12%20143023.png)

## Índice

1. [Descripción](#descripción)
2. [Características](#características)
3. [Tecnologías](#tecnologías)
4. [Instalación](#instalación)
5. [Personalización](#personalización)
6. [Estructura del proyecto](#estructura-del-proyecto)
7. [Contribuir](#contribuir)
8. [Licencia](#licencia)

---

## Descripción

Este repositorio contiene el código de mi portafolio personal desplegado con **GitHub Pages**. El objetivo es mostrar de forma clara y atractiva mi experiencia, stack tecnológico y proyectos destacados como Desarrollador Web Full Stack Jr. y líder de proyectos.

El sitio es totalmente estático (solo **HTML, CSS y JavaScript**), responsivo y sin dependencia de *build tools*. Puedes usarlo como plantilla para tu propio portafolio o inspiración para mejorar el tuyo.

## Características

* **Navbar** flotante con anclas a secciones: Inicio, Tecnologías y Proyectos.
* **Hero** con fotografía redonda, años de experiencia (cálculo dinámico) y *badges* de rol.
* **Frase motivacional** en el centro de la página.
* **Grid de tecnologías** — iconos + nombres.
* **Línea de tiempo (Trayectoria)** que resume estudios y experiencia profesional.
* **Galería de proyectos** con tarjetas; al hacer clic se abre un modal con detalles.
* **Barra social** fija (LinkedIn, Email, WhatsApp, GitHub) siempre accesible.
* **Diseño responsivo** (desktop, tablet y mobile) con layout fluido.
* Animaciones sutiles (hover, aparición) usando CSS y JavaScript.

## Tecnologías

| Herramienta                                  | Uso principal                                         |
| -------------------------------------------- | ----------------------------------------------------- |
| **HTML5**                                    | Estructura del documento                              |
| **CSS3**                                     | Estilos, grillas y responsividad                      |
| **JavaScript (ES6)**                         | Interactividad (scroll, modales, contador experience) |
| **[Font Awesome](https://fontawesome.com/)** | Iconos de tech stack y redes                          |
| **GitHub Pages**                             | Hosting estático                                      |

## Instalación

> *No se requieren dependencias ni compilación.*

```bash
# Clonar el repositorio
$ git clone https://github.com/leonardos4enz/leonardos4enz.github.io.git
$ cd leonardos4enz.github.io

# Abrir index.html con Live Server (VS Code) o cualquier servidor estático
# Live Server recarga automáticamente y evita problemas CORS con assets remotos.
```

También puedes abrir `index.html` directamente en tu navegador; sin embargo, para desarrollo Live Server es más cómodo.

## Personalización

El contenido se encuentra “hard‑coded” en `index.html` para mayor simplicidad. Solo necesitas editar el archivo y modificar:

* **Datos personales** (nombre, roles, mensaje, links sociales).
* **Technologies**: busca la sección `<!-- Tecnologías -->` y añade/quita tarjetas.
* **Timeline**: edita los bloques bajo `<!-- Trayectoria -->`.
* **Projects**: cada tarjeta y su modal asociado están agrupados en `<!-- Proyectos -->`.

Sigue la misma estructura HTML — no hay lógica adicional.

> **Tip:** Si prefieres una fuente de datos externa, es sencillo migrar la información a un objeto JSON y construir las secciones dinámicamente con JS.

## Estructura del proyecto

```
├── assets/              # Fotos, iconos y recursos estáticos
├── css/                 # Hojas de estilo (opcional, si las separas)
├── js/                  # Scripts (opcional, si los separas)
├── index.html           # Página principal (todo en uno actualmente)
├── Captura ... .png     # Captura de pantalla utilizada en este README
└── README.md            # Este archivo
```

*(Los subdirectorios `assets`, `css` o `js` aparecerán si decides modularizar.)*

## Contribuir

Las *pull requests* son bienvenidas. Para cambios significativos abre primero un *issue* para discutir la propuesta.

1. *Fork* → `git checkout -b feature/mi-mejora`
2. `git commit -m "Descripción breve"`
3. `git push origin feature/mi-mejora`
4. Abre un PR

## Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.
