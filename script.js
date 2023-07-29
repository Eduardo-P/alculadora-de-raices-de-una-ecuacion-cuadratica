var a, b, c, discriminante, raiz1, raiz2;
// modificacion nro 1
function ingresarValor(variable) {
  const valor = prompt(`Ingrese el valor de ${variable}:`);
  if (valor !== null) {
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      switch (variable) {
        case 'A':
          a = numero;
          break;
        case 'B':
          b = numero;
          break;
        case 'C':
          c = numero;
          break;
      }
    } else {
      alert('Por favor, ingrese un valor numérico válido.');
    }
  }
}

function HallarDiscriminante() {
    discriminante = b * b - 4 * a * c;
}
function Raices() {
  HallarDiscriminante()
  if (discriminante > 0){
    alert("La ecuacion tiene dos raices reales");
    HallarRaices();
  } else if (discriminante == 0){
    alert("La ecuacion tiene una raiz");
    HallarUnicaRaíz();
  } else {
    alert("La ecuacion tiene dos raices complejas");
    HallarRaicesComplejas();
  }
}

function HallarRaices() {
    raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
}

function HallarUnicaRaíz() {
    raiz1= -b /(2*a);
}

function HallarRaicesComplejas() {
  const parteReal = -b / (2 * a);
  const parteImaginaria = Math.sqrt(Math.abs(discriminante)) / (2 * a);
  raiz1 = `${parteReal.toFixed(2)} + ${parteImaginaria.toFixed(2)}i`;
  raiz2 = `${parteReal.toFixed(2)} - ${parteImaginaria.toFixed(2)}i`;
}

function VerEcuacionCuadratica(){
  var ecuacion = a + "x^2 ";
  if (b < 0){
    ecuacion += b + "x";
  } else {
    ecuacion += "+ " + b + "x";
  }
  if (c < 0){
    ecuacion += c;
  } else {
    ecuacion += " + " + c;
  }
  document.getElementById("resultado").innerHTML = "Ecuacion cuadratica: " + ecuacion;
}
function VerDiscriminante(){
  document.getElementById("resultado").innerHTML += "<br>Discriminante: " + discriminante;
}
function VerRaices(){
	if (discriminante == 0){
    document.getElementById("resultado").innerHTML += "<br>Raiz: "+ raiz1;
  } else {
    document.getElementById("resultado").innerHTML += "<br>Raiz 1: "+ raiz1 + " Raiz 2: " + raiz2;
  }
}
function Imprimir() {
  Raices()
  VerEcuacionCuadratica();
  VerDiscriminante();
  VerRaices();
}