/*
const lista1 = [
  100,200,300,500,
]
let sumaLista1 = 0;
for(let i = 0;i < lista1.length; i ++){
  sumaLista1 = sumaLista1 + lista1[i];
}
const promedio = sumaLista1 / lista1.length
*/
const lista1 = [
  100,200,300,500,
]
function calcularMediaAritmetica(lista) {

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}