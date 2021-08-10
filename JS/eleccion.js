const listaDeCuentasPagadas = [];
let nexflix = false, precio = 0;

function done() {
    let nexflixDone = document.getElementById('nexflix');
    
    if (nexflix) {
        document.getElementById('nexflix').classList.remove('done');
        document.getElementById('nexflixRES1').checked = false;
        document.getElementById('nexflixRES2').checked = false;
        document.getElementById('nexflixRES3').checked = false;
        
        nexflix = false;
    } else {
        document.getElementById('nexflix').classList.add('done');

        setTimeout(() => {
            document.getElementById('nexflixPlanes').classList.add('display'); 
        }, 50); 

        nexflix = true;
    }    
}



function removeDisplay(id) {
        
    setTimeout(() => {
        document.getElementById(id).classList.remove('display');  
    }, 200);
}



console.log(listaDeCuentasPagadas.length);





















function CALCULAR() {
    let precio1 = document.getElementById('nexflixRES1').checked;
    let precio2 = document.getElementById('nexflixRES2').checked;
    let precio3 = document.getElementById('nexflixRES3').checked;

    if(precio1){
        precio = 139;
        listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
    }
    if(precio2){
        precio = 196;
        listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
    }
    if(precio3){
        precio = 266;
        listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
    }
}