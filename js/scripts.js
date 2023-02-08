// Funcionamiento de la licuadora
let estadoLicuadora = "apagado";
let sonidoLicuadora = document.getElementById("licuadora-sonido");
let botonLicuadora = document.getElementById("licuadora-boton-sonido");
let licuadora = document.getElementById("licuadora");

function controlarLicuadora() {
    if (estadoLicuadora == "apagado") {
        estadoLicuadora = "encendido";
        reproducirSonido();
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagado"
        reproducirSonido();
        licuadora.classList.remove("active");
    }
}

function reproducirSonido() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; // Resetear audio cuando se deja de usar
    }
}