// no usar
function puedoEntrar(edad){
    if(edad < 18){
        return false;
    } else {
        return true;
    }
}

// no usar
function puedoEntrar2(edad){
    if(edad < 18){
        return false;
    }
    return true;
}

// no usar
function puedoEntrar3(edad){
    // Mala praxis ver funcion 4
    return edad < 18 ? false : true;
}

//Opcion buena
function puedoEntrar4(edad){
    return edad >= 18;
}

//Funcion anónima con arguments
var puedoEntrar5 = function(){
    return arguments[0] >= 18;
}

// Usando arguments para comprobar si todos pueden entrar
function puedenEntrar(){
    for (var edad of arguments) {
        if (edad < 18){
            return false;
        } 
    }
    return true;
}

//Llamando a la función pueden entrar
var puedenGrupo1 = puedenEntrar(27, 28, 112); // true
console.log(pueden ? 'Adelante podeis entrar': 'atrás');
var puedenGrupo2 = puedenEntrar(20, 15, 20); // true
console.log(pueden ? 'Adelante podeis entrar': 'atrás');
