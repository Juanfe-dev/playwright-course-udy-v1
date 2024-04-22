let edad: number = 25;      //Variable 'edad' de tipo number
let altura: number = 175.5; // Variable 'altura' de tipo number

//Operaciones numericas
let suma: number = edad + 10;
let promedio: number = (edad + altura) / 2;

let primerNombre: string = "Juan";  //Variable 'primerNombre' de tipo string
let apellido: string = 'Gomez';     //Se pueden usar comillas dobles o simples ('' o "")

let nombreCompleto: string = primerNombre + " " + apellido; //Concatenacion de cadenas

let estaActivo: boolean = true; //Variable 'estaActivo' de tipo boolean
let estaLogueado: boolean = false; //Variable 'estaLogueado' de tipo boolean

//Condicionales
if (estaActivo){
    console.log("El usuario esta activo");
} else {
    console.log("El usuario no esta activo");
}

//Arreglos
let numeros: number[] = [1,2,3,4,5]; //Arreglo de numeros
let frutas: string[] = ["uva", 'manzana', "pera"] //Arreglo de cadenas

console.log(numeros[2]); //Acceso al tercer elemento (indice 2)
console.log(frutas.length); //Longitud del arreglo de frutas (3)

//Tuplas
let persona: [string, number] = ["Juan", 27]; //Tubla de nombre y edad
let coordenadas: [number, number] = [156.3, -32.8]; //Tupla de coordenadas

console.log(persona[0]); //Acceso al nombre
console.log(coordenadas[1]); //Acceso a la longitud

//Enums
enum Color{
    Rojo,
    Verde,
    Azul
}

let colorElegido: Color = Color.Verde;

if (colorElegido === Color.Verde) {
    console.log("El color elegido es verde");
}

//Inferencia de tipos dinamicos
let nombreInferido = "Alice";//TypeScript infiere que 'nombreInferido' es de tipo string
let edadInferida = 23; //TypeScript infiere que 'edadInferidad' es de tipo number
//nombreInferido = 42; //Error: No se puede asignar un numer a una variable de tipo String

    //Ejemplos
        // JavaScript: Función para sumar dos números
        function sumaJS(a, b) {
        return a + b;
        }
        console.log(sumaJS(5, 3)); // Salida: 8
        console.log(sumaJS(5, "3")); // Salida: "53"
        // TypeScript: Función para sumar dos números con tipado
        function sumaTS(a: number, b: number): number {
        return a + b;
        }
        console.log(sumaTS(5, 3)); // Salida: 8
        // console.log(suma(5, "3")); // Error: Argumento de tipo 'string' no asignable al parámetro de tipo 'number'.