var formulario = document.querySelector("#form"); //Agrega ;

formulario.onsubmit = function (e) {

  e.preventDefault(); /* se corrige la funcion */

  var n = formulario.elements[0]; //Agrega ;
  var e = formulario.elements[1]; //Agrega ;
  var na = formulario.elements[2]; //Agrega ;

  var nombre = n.value; //Agrega ;
  var edad = e.value; //Agrega ;

  var i = na.selectedIndex; //Agrega ;
  var nacionalidad = na.options[i].value; //Agrega ;
  console.log(nombre, edad); //Agrega ;
  console.log(nacionalidad); //Agrega ;

  if (nombre.length === 0) {
    n.classList.add("error"); //Agrega ;
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error"); //Agrega ;
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad); //Agrega ;
  }
}

// Se elimina ya que se encuentra duplicado
/* var botonBorrar = document.createElement("button"); //Agrega ;
botonBorrar.textContent = "Eliminar invitado"; //Agrega ;
botonBorrar.id = "boton-borrar"; //Agrega ;
var corteLinea = document.createElement("br"); //Agrega ;
document.body.appendChild(corteLinea); //Agrega ;
document.body.appendChild(botonBorrar);
 */
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"; //Agrega ;
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"; //Agrega ;
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"; //Agrega ;
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"; //Agrega ;
  }

  var lista = document.getElementById("lista-de-invitados"); //Agrega ;

  var elementoLista = document.createElement("div"); //Agrega ;
  elementoLista.classList.add("elemento-lista") // Se corrige el metodo add y se agrega ;
  lista.appendChild(elementoLista); //Agrega ;

  // Se "elimina" ya que esta duplicado y fuera de la función
  /* var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
   */
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span"); //Agrega ;
    var inputNombre = document.createElement("input"); //Agrega ;
    var espacio = document.createElement("br"); //Agrega ;
    spanNombre.textContent = descripcion + ": "; //Agrega ;
    inputNombre.value = valor; //Agrega ;
    elementoLista.appendChild(spanNombre); //Agrega ;
    elementoLista.appendChild(inputNombre); //Agrega ;
    elementoLista.appendChild(espacio); //Agrega ;
  }

  crearElemento("Nombre", nombre); //Agrega ;
  crearElemento("Edad", edad); //Agrega ;
  crearElemento("Nacionalidad", nacionalidad); //Agrega ;


  var botonBorrar = document.createElement("button"); //Agrega ;
  botonBorrar.textContent = "Eliminar invitado"; //Agrega ;
  botonBorrar.id = "boton-borrar"; //Agrega ;
  var corteLinea = document.createElement("br"); //Agrega ;
  elementoLista.appendChild(corteLinea); //Agrega ;
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove(); //Agrega ;
  }
}