document.addEventListener('DOMContentLoaded', function() {

const buttonEnviar = document.getElementById("enviar");

buttonEnviar.addEventListener("click", function () {

var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var nacimiento = document.getElementById("fdn").value;

fetch('https://jsonplaceholder.typicode.com/users', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    nombre: nombre,
    apellido : apellido,
    fechaNacimiento : nacimiento,
  })
})
.then(response => response.json())
.then(data => console.log(data))

});

});