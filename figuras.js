// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Aquí interactuamos con el HTML
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputLado1");
  const lado1 = Number(input1.value);
  const input2 = document.getElementById("InputLado2");
  const lado2 = Number(input2.value);
  const input3 = document.getElementById("InputBase");
  const base = Number(input3.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const input1 = document.getElementById("InputBase2");
  const base = Number(input1.value);
  const input2 = document.getElementById("InputAltura");
  const altura = Number(input2.value);
  
  const area = areaTriangulo(base,altura);
  alert(area);
}

// Aquí interactuamos con el HTML Circulo

function calcularDiametroCirculo() {
  const input = document.getElementById("InputRadio");
  const radio = Number(input.value);

  const diametro = diametroCirculo(radio);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputRadio");
  const radio = Number(input.value);

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputRadio");
  const radio = Number(input.value);
  
  const area = areaCirculo(radio);
  alert(area);
}


function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
      console.error("Los lados a y b no son iguales");
  } else {
      const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
      const trianguloPequenoLadoBase = trianguloGrandeLadoA;

      const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
      const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

      const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

      const trianguloGrandeAltura = trianguloPequenoLadoA;
      return trianguloGrandeAltura;
  }
}
