  let a, b, c, discriminante;

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
    discriminante = b ** 2 - 4 * a * c;
}



function Imprimir() {
    VerEcuacionCuadratica();
    VerDiscriminante();
    VerRaices();
}

function HallarUnicaRaíz() {
    if(discriminante==0){
      const unicaRaíz= -b /(2*a);
      console.log("La unica raiz es: ",unicaRaíz);
    }else{
      console.log("La ecuacion no tiene una única raíz");
    }
}
function VerDiscriminante(){
  return discriminante;
}
function HallarRaicesComplejas(a, b, c ) {  
  if (discriminante < 0) {
    const parteReal = -b / (2 * a);
    const parteImaginaria = Math.sqrt(Math.abs(discriminante)) / (2 * a);
    
    const raiz1 = `${parteReal.toFixed(2)} + ${parteImaginaria.toFixed(2)}i`;
    const raiz2 = `${parteReal.toFixed(2)} - ${parteImaginaria.toFixed(2)}i`;
  }  
   console.log("Raices complejas " raiz1, "; " raiz2);
}
function VerDiscriminante(){
  return discriminante;
}
function VerRaices(){
	HallarRaíz();
	HallarUnicaRaíz();
	HallarRaicesComplejas();
}
function HallarRaices(a, b, c) {
  // Calculamos la discriminante
  const discriminante = b * b - 4 * a * c;

  // Verificamos si la discriminante es mayor a 0
  if (discriminante > 0) {
    // Calculamos las raíces usando la fórmula general
    const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    
    // Devolvemos un objeto con las dos raíces
    return { raiz1, raiz2 };
  } else {
    // Si la discriminante es menor o igual a 0, devolvemos un mensaje indicando que no hay raíces reales
    return "No hay raíces reales, la discriminante es menor o igual a 0.";
  }
}

const raices = HallarRaices(coeficienteA, coefIcienteB, coeficienteC);
console.log(raices);