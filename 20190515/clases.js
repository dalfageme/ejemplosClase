
class Persona {
    // Constructor de la clase persona
    // edad con valor por defecto 0
    constructor( nombre, peso, edad = 0){
        this.edad = edad;
        this.nombre = nombre;
        this.peso = peso;
    }

    saluda(){
        console.log('Hola soy', this.getNombre(), 'y tengo', this.edad);
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre.toUpperCase();
    }
    
    setEdad(edad){
        this.edad = edad;
    }

    toString(){
        return 'Soy una persona y me llamo ' + this.getNombre(); 
    }

}

let jose = new Persona('Jose',3, 29); 
jose.saluda(); //Hola soy Jose y tengo 29 años
console.log(String(jose));  //Soy una persona y me llamo JOSE


class Profesor extends Persona{
    constructor(nombre, edad, materia){
        super(nombre, 60, edad);
        this.materia = materia;
    }

    daClase(){
        console.log('Estoy dando clase de', this.materia);
    }

    saluda(){
        console.log('Hola soy profesor de', this.materia);
    }

    setMateria(materia){
        let found = ['programacion', 'bbdd'].find((m) => materia === m);
        if(found){
            this.materia = materia;
        }else{
            console.log('no se encontro la materia')
        }
    }
    
    static comparaProfesor(profesor1, profesor2){
        return profesor1.getNombre() === profesor2.getNombre();
    }

}


let david = new Profesor('David', 22, 'matematicas');
let juan = new Profesor('Juan', 29, 'Programacion');
david.saluda(); // Hola soy profesor de matematicas
david.setMateria('alta costura'); // No se encontro la materia
david.saluda();  // Hola soy profesor de matematicas
 
// llamada a método estático de la clase profesor
let sonIguales = Profesor.comparaProfesor(david, juan);
console.log( sonIguales ? 'Son iguales' : 'No son iguales' );