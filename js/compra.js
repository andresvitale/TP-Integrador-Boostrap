// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre            = document.getElementById("nombre");
let apellido          = document.getElementById("apellido");
let mail              = document.getElementById("mail");
let cantidadTickets   = document.getElementById("cantidadTickets");
let categoria         = document.getElementById("categoriaSelect");

const costoTotal = () => {
    if (nombre.value === ""){
        alert("Escribe tu Nombre");
        nombre.focus();
        return
    }
    if(apellido.value === ""){
        alert("Escribe tu Apellido");
        apellido.focus();
        return
    }
    if (mail.value === ""){
        alert("Escribe un tu Mail");
        mail.focus();
        return
    }
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if(!emailValido(mail.value)){
        alert("Escribe un Mail Valido");
        mail.focus();
        return
    }
    if(cantidadTickets.value == ""){
        alert("Cuantas entradas Necesitas?");
        cantidadTickets.focus();
        return
    }
    if(categoria.value == ""){
        alert("por favor elije tu categoria");
        categoria.focus();
        return
    }

let montoTotalTickets = (cantidadTickets.value) * valorTicket;

switch (categoria.value) {
    case "0":
        montoTotalTickets = montoTotalTickets;
        break;
    case "1":
        montoTotalTickets = montoTotalTickets - (descuentoEstudiante / 100 * montoTotalTickets);
        break;
    case "2":
        montoTotalTickets = montoTotalTickets - (descuentoTrainee / 100 * montoTotalTickets);
        break;
    case "3":
        montoTotalTickets = montoTotalTickets - (descuentoJunior / 100 * montoTotalTickets);
        break;
}

totalPago.innerHTML = montoTotalTickets;
}

btnSumit.addEventListener('click', costoTotal);

const reset = () => {
    totalPago.innerHTML = ""
}

btnReset.addEventListener('click', reset);




