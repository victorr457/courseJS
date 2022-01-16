function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}



const lista1 = [
  100,
  200,
  500,
  400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
  ]);
  
  mediana = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}


// Ordenando la lista
var numbers = [4, 2, 5, 1, 3,-100,500,8];
numbers.sort(function(a, b) {
  return a - b;
});
//console.log(numbers);

function calcularMediana(lista) {
  lista.sort(function(a, b) {
    return a - b;
  });
  const longitud = lista.length;
  const mitadLista = parseInt(longitud / 2);
  const isPar = (longitud  % 2 === 0) ? true: false;
  if(isPar){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    mediana = (elemento1 +  elemento2) / 2;
  }else{
    mediana = lista[mitadLista];
  }
  return mediana;
}
console.log(calcularMediana(numbers))