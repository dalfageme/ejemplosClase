window.addEventListener('load', () => {
    // Guardar una cadena de texto
    localStorage.setItem('miCadena', 'valorDeTextoGuardado');
    localStorage.setItem('nombre', 'Paco');

    //Guardar arrays o objetos
    let persona = {
        nombre: 'david'
    }
    localStorage.setItem('persona', JSON.stringify(persona));


    //Recuperar strings
    let cadena = localStorage.getItem('miCadena'); 
    console.log(cadena); // valorDeTextoGuardado

    //Recueprar objetos o arrays
    let personaRecueprada = JSON.parse(localStorage.getItem('persona'));
    console.log(personaRecueprada); // {nombre: "david"}
})