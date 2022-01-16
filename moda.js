const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

const lista1Count = [];

lista1.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];

function calcularModa(lista) {
  const listaCount = [];
  lista.map(
    function (elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
  );
  // elemento A: Es un array de dos posiciones
  // elemento B: Es un array de dos posiciones
  const nuevoArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  // Esta lista queda ordenada por el valor que mas se repite
  // Accedemos al último elemento, para saber cual es el que mas se repite.
  const moda = lista1Array[nuevoArray.length - 1];

  return moda;
}
console.log(calcularModa(lista1))