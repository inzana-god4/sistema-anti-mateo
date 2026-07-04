const msg = document.getElementById("msg");

// Función para mostrar mensajes
function mostrarMensaje(texto) {
    msg.textContent = texto;
}

// Todas las imágenes de Mateo
document.querySelectorAll(".mateo").forEach(img => {

    img.addEventListener("click", () => {

        mostrarMensaje("❌ Ese definitivamente era Mateo.");

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);

    });

});

// La mosca
document.getElementById("correct").addEventListener("click", () => {

    mostrarMensaje("✅ Mosca detectada. Continuando verificación...");

    setTimeout(() => {
        window.location.href = "microwave.html";
    }, 2000);

});