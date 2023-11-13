// Valores iniciales
var cantidades = [0, 0, 0, 0, 0, 0, 0, 0];
var acumulado = 0;

// Función para incrementar la cantidad
function incrementar(id) {
  var index = obtenerIndice(id);
  cantidades[index]++;
  actualizarCantidad(id);
}

// Función para decrementar la cantidad
function decrementar(id) {
  var index = obtenerIndice(id);
  if (cantidades[index] > 1) {
    cantidades[index]--;
    actualizarCantidad(id);
  }
}

// Función para actualizar el valor mostrado
function actualizarCantidad(id) {
  var index = obtenerIndice(id);
  document.getElementById(id).innerHTML = cantidades[index];
  actualizarAcumulado();
}

// Función para obtener el índice correspondiente al ID
function obtenerIndice(id) {
  return parseInt(id.replace("producto", "")) - 1;
}

//Alert de botones
function bottonAgregarCarrito() {
  alert("Agregaste este producto al carrito");
}

/**/
function informacionConocenos() {
  var informacion = "Somos una tienda virtual encargada de vender todo tipo de productos para mascotas, nos aseguramos que tu amigo peludo sea feliz con nuestros productos.";
  alert(informacion);
}

function informacionUbicaciones() {
  var informacion = "Estamos ubicados en Medellín Carrera 50 con diagonal 38 local 202 (Al frente del éxito).";
  alert(informacion);
}

function informacionContactanos() {
  var informacion = "Puedes contactarnos en redes sociales facebook, instagram y twitter, encuentra los datos al final de la página.";
  alert(informacion);
}