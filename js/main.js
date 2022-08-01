let nombreUsuario = prompt("Ingrese su nombre de usuario"); 
let password = prompt("Ingrese una palabra clave")

if ((nombreUsuario !="Tomas") && (password != "auto")){
    alert("El nombre de usuario o palabra clave son incorrectos");
}
function promedioNotas (primeraNota, segundaNota, terceraNota, divisor) {
    resultado = primeraNota + segundaNota + terceraNota / divisor
}

function mostrar (mensaje) {
    console.log(mensaje)
}

promedioNotas(10, 4, 8, 3);
mostrar(resultado);