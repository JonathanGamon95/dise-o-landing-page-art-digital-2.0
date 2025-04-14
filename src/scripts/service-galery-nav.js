const GALERY_SLIDER_SERVICES_1 = document.getElementById("GALERY-SLIDER-SERVICES-1");
const NEXT_BUTTON_SERVICES = document.getElementById("NEXT-BUTTON-SERVICES")

const SERVICES_TITTLE_INFO = document.getElementById("SERVICES-TITTLE-INFO");
const SERVICES_RESUMEN = document.getElementById("SERVICES-RESUMEN");
const SERVICES_IMG = document.getElementById("SERVICES-IMG");



const TITULOS = [
    "Arte Conceptual & Visualización",
    "Diseño de Logos & Branding",
    "Ilustraciones Personalizadas"
];

const RESUMENES = [
    "Creación de conceptos artísticos, bocetos con carácter y visualizaciones digitales que dan vida a ideas y marcas. Especializado en el desarrollo visual para proyectos de branding, videojuegos y experiencias interactivas, con un enfoque creativo que combina estilo, narrativa y funcionalidad. Cada propuesta está pensada para destacar, conectar con el público y dejar una impresión duradera.",
    "Desarrollamos identidades visuales impactantes que capturan y comunican la esencia única de tu marca, asegurando coherencia y reconocimiento en cada punto de contacto. Nuestro enfoque combina estrategia, creatividad y diseño funcional para crear sistemas visuales versátiles que se adaptan a múltiples plataformas, desde entornos digitales hasta impresos, garantizando una presencia sólida, memorable y alineada con tus objetivos de comunicación",
    "Realizamos ilustraciones a medida que se adaptan perfectamente a tus necesidades, ya sea para portadas, materiales promocionales, contenido editorial o cualquier idea que tengas en mente. Cada pieza es concebida con atención al detalle, estilo personalizado y un enfoque narrativo que potencia el mensaje visual. Trabajamos en estrecha colaboración contigo para transformar conceptos en imágenes impactantes, únicas y alineadas con la identidad de tu proyecto o marca."
];



const IMAGENES = [
    "./src/assets/images/Conceptual Art & Visualización.png",
    "./src/assets/images/Diseño de Logos & Branding.jpeg",
    "./src/assets/images/hombre-negocios-trabajando-duro-diagrama-mercado-comercio-financiero-bursatil-diseno-plano-ilustracion-vectorial_1150-39773.jpg"
];





let posicionAtual = 0;
function ventanaServicios() {
    if (posicionAtual == 2) {
        posicionAtual = -1
    }
    posicionAtual++;

    SERVICES_TITTLE_INFO.textContent = TITULOS[posicionAtual];
    SERVICES_RESUMEN.textContent = RESUMENES[posicionAtual];
    SERVICES_IMG.setAttribute("src", IMAGENES[posicionAtual])
}



function fadeOutIn() {
    const el = document.getElementById('GALERY-SLIDER-SERVICES-1');
    NEXT_BUTTON_SERVICES.disabled = true;

    // Aplica opacidad 0 (fade out)
    el.classList.remove('opacity-100');
    el.classList.add('opacity-0');
    // Después de 1 segundo, vuelve a opacidad 100 (fade in)
    setTimeout(() => {
        ventanaServicios();
        el.classList.remove('opacity-0');
        el.classList.add('opacity-100');
        NEXT_BUTTON_SERVICES.disabled = false;
    }, 1000); // 1000 ms = 1 segundo
}