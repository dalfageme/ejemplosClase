let ovejas = [
    'https://images.vexels.com/media/users/3/141725/isolated/preview/a5ae54d03d89f6dbb269a4ef8fd7e539-lana-de-oveja-animal-by-vexels.png',
    'https://img.freepik.com/vector-gratis/dibujos-animados-ovejas-felices-posando-aisladas-sobre-fondo-blanco_29190-2672.jpg?size=626&ext=jpg',
    'https://images.vexels.com/media/users/3/160168/isolated/preview/03a09cda58005f9f8aff25e295f718e6-lindo-cordero-de-lana-de-oveja-cordero-plano-by-vexels.png', 
    'https://png.pngtree.com/element_origin_min_pic/16/06/17/195763db954f728.jpg',
];

let ovejaArrastrando;

window.addEventListener('load', load);
let divDerecha, divIzquierda;


function load(){
    console.log('Pagina cargada');
    divDerecha = document.querySelector('#derecha');
    divIzquierda = document.querySelector('#izquierda');

    ovejas.forEach((urlOveja) => {
        let imgOveja = document.createElement('img');
        imgOveja.setAttribute('src', urlOveja);
        imgOveja.addEventListener('drag', drag)
        imgOveja.addEventListener('dragstart', dragStart);
        imgOveja.addEventListener('dragend', dragEnd);
        divIzquierda.appendChild(imgOveja);
    });

    divDerecha.addEventListener('dragover', dragOver);
    divDerecha.addEventListener('drop', drop);
}

function drag(event){
    // console.log('arrastrando');
}

function dragStart(event){
    console.log('Empiezo a arrastrar');
    let imgOveja = event.currentTarget;
    imgOveja.classList.add('seleccionada');
    console.log(imgOveja);
}

function dragEnd(event){
    let imgOveja = event.currentTarget;
    imgOveja.classList.remove('seleccionada');
    console.log('dragend');
}

function dragOver(event){
    console.log('Drag over');
    event.preventDefault();
}

function drop(event){
    let seleccionada = document.querySelector('.seleccionada');
    let imgSeleccionada = seleccionada.getAttribute('src');

    let x = event.clientX;
    let y = event.clientY;

    let divImg = document.createElement('img');
    divImg.setAttribute('src', imgSeleccionada);
    divImg.style.position = 'absolute';
    
    divImg.style.left = x + 'px';
    divImg.style.top = y + 'px';

    //Añadimos la oveja a la derecha
    divDerecha.appendChild(divImg);
    //Borramos la oveja de la izquierda
    divIzquierda.removeChild(seleccionada);

    console.log(event);
    console.log('Dropped');
}