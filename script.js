let a, b, c;

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