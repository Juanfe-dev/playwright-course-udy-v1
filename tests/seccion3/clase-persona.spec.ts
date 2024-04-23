//Definimos el nombre de la clase
class Persona {
    //Definimos los atributos de la clase
    nombre: string
    edad: number;

    //Constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //Metodo de clase (no necesita que se indique que es una function -> function mostrarDetalles(){})
    //Los metodos de clase como bien se infiere estan dentro del bloque de codigo de la clase
    //Su ventaja es que TypeScript de manera automatica le asigna el 'this'
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`)
        //Con la comilla inclinada `` podemos concatenar con el uso de ${}
    }
}

//Funcion fuera de clase (necesita que se indique que es una function)
function restar(a: number, b: number): number {
    return a - b;
}