/*INICIO*/

let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert ("Bienvenido/a al sitio web");
} else {
    alert ("Sos menor, entras al sitio web bajo tu responsabilidad");
}
/*PARA COMPRAR*/
function calcularEnvio() {
    var var1 = prompt("¿A cuantos kilómetros se encuentra de San Nicolás de los Arroyos?:");
    
    if (var1 <= 800) {
        alert("El servicio a domicilio es gratis");
    } else {
        alert("El servicio a domicilio tiene un costo de $800");
    }
}

/*PARA SALIR */
window.onbeforeunload = function() {
    return "¿Estás seguro que quieres salir?";
};