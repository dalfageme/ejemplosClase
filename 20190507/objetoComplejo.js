
var miObjeto = {
    nombre: 'david',
    saluda: function(){
        console.log('Hola soy', this.nombre);
    },
    elementos: [
        function(){
            console.log('este es el primero')
        },

        function(nombre){
            console.log('este es el segundo', nombre);

            return function(){
                console.log('se te ha ido');
            }
        }
    ]
}


console.log(miObjeto.nombre); // david
miObjeto.saluda(); // Hola soy David
miObjeto.elementos[1]('david'); // este es el segundo david
miObjeto.elementos[1]('david')(); // este es el segundo david \n se te ha ido