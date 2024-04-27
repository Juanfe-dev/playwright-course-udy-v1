//Instanciamos una persona de la clase Persona mediante su constructor
const persona = new Persona("Alice", 30);
//usamos la funcion de clase para mostrar detalles
persona.mostrarDetalles

//Una simple funcion
// function nombre(argumentos) tipo de retorno {logica de retorno}
function sumar(a: number, b: number): number {
    return a + b;
}

const resultadoSuma = sumar(5, 3);
console.log("Resultado de la suma: ", resultadoSuma);

//Funcion Flecha Basica
// const nombre = (argumentos): tipo de retorno => {logica de retorno}
const suma = (a: number, b: number): number => {
    return a + b;
}

const resultadoSumaFlecha = suma(5,3);
console.log("Resultado de la suma: ", resultadoSumaFlecha);

//Funcion Flecha sin parentesis alrededor de un solo parametro
const esPar = num => num % 2 === 0;
console.log("El numero 6 es par?: ", esPar(6));

//Funcion Flecha con Cuerpo Implicito
const saludar = nombre => `Hola, ${nombre}`;
console.log(saludar("Alice"));

//Funcion Flecha en Mapeo de Arreglo
const numeros = [1,2,3,4,5];
const alCuadrado = numeros.map(num => num*num);
console.log("Arreglo original: ", numeros);
console.log("Arreglo al cuadrado: ", alCuadrado);