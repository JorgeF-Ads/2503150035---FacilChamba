const botonAyuda = document.getElementById("btn-mostrar-ayuda");
const formularioAyuda = document.getElementById("formulario-ayuda");
const mensajeExito = document.getElementById("mensaje-exito");

botonAyuda.addEventListener("click", function() {
    if (formularioAyuda.style.display === "none") {
        formularioAyuda.style.display = "block";
        mensajeExito.style.display = "none";
    } else {
        formularioAyuda.style.display = "none";
    }
});

formularioAyuda.addEventListener("submit", function(e) {
    e.preventDefault();
    formularioAyuda.style.display = "none";
    formularioAyuda.reset();
    mensajeExito.style.display = "block";
});