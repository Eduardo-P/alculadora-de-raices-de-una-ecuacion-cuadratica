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
function calcularRaicesComplejas(a, b, c ) {  
  if (discriminante < 0) {
    const parteReal = -b / (2 * a);
    const parteImaginaria = Math.sqrt(Math.abs(discriminante)) / (2 * a);
    
    const raiz1 = `${parteReal.toFixed(2)} + ${parteImaginaria.toFixed(2)}i`;
    const raiz2 = `${parteReal.toFixed(2)} - ${parteImaginaria.toFixed(2)}i`;
  }  
    return [raiz1, raiz2];
}
