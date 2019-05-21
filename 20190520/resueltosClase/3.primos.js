function esPrimo(num){
    for(let i = num-1; i>=2; i --){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}


function esPrimo2(num){
    for(let i = 2; i < num; i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}


