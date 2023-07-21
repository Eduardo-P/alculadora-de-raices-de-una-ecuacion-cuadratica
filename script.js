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