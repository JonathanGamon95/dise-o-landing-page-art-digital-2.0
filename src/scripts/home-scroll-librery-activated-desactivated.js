function desactivateLibreryScroll() {
    const LinkLibrery = document.getElementById("SCROLL-HOME-LIBRERY")
    if (window.innerWidth < 768) {
        console.log("dispositivo mobile detectado");
        LinkLibrery.disabled = true;
    } else {
        console.log("pc/table detectado");
        LinkLibrery.disabled = false;
    }
}
desactivateLibreryScroll()