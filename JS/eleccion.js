const listaDeCuentasPagadas = [];
let nexflix = false, youtube = false, hboMax = false, disney = false, primeVideo = false, paramount = false, hulu = false, appleTv = false, plutoTv = false, blimTv = false, crunchyroll = false, claroVideo = false; 
let precio = 0;

function markedNexflix() {
    let nexflixmarked = document.getElementById('nexflix');
    
    if (nexflix) {
        document.getElementById('nexflix').classList.remove('marked');
        document.getElementById('nexflixRES1').checked = false;
        document.getElementById('nexflixRES2').checked = false;
        document.getElementById('nexflixRES3').checked = false;
        
        nexflix = false;
    } else {
        document.getElementById('nexflix').classList.add('marked');

        setTimeout(() => {
            document.getElementById('nexflixPlanes').classList.add('display'); 
        }, 50); 

        nexflix = true;
    }    
}
function markedHulu() {
    
    if (hulu) {
        document.getElementById('hulu').classList.remove('marked');
        document.getElementById('huluRES1').checked = false;
        document.getElementById('huluRES2').checked = false;
        document.getElementById('huluRES3').checked = false;
        
        hulu = false;
    } else {
        document.getElementById('hulu').classList.add('marked');
        setTimeout(() => {
            document.getElementById('HuluPlanes').classList.add('display'); 
        }, 50); 
        hulu = true;
    }    
}

function markedCrunchyroll() {
    
    if (crunchyroll) {
        document.getElementById('crunchyroll').classList.remove('marked');
        document.getElementById('crunchyrollRES1').checked = false;
        document.getElementById('crunchyrollRES2').checked = false;

        crunchyroll = false;
    } else {
        document.getElementById('crunchyroll').classList.add('marked');

        setTimeout(() => {
            document.getElementById('crunchyrollPlanes').classList.add('display'); 
        }, 50); 

        crunchyroll = true;
    }    
}





function markedYoutube() {
    if(youtube){
        document.getElementById('youtube').classList.remove('marked');
        youtube = false;
    } else {
        document.getElementById('youtube').classList.add('marked');
        youtube = true;
    } 
}
function markedHBO(plataforma) {
    if(hboMax){
        document.getElementById(plataforma).classList.remove('marked');
        hboMax = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        hboMax = true;
    } 
}
function markedDisney(plataforma) {
    if(disney){
        document.getElementById(plataforma).classList.remove('marked');
        disney = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        disney = true;
    } 
}
function markedPrimeVideo(plataforma) {
    if(primeVideo){
        document.getElementById(plataforma).classList.remove('marked');
        primeVideo = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        primeVideo = true;
    } 
}
function markedParamount(plataforma) {
    if(paramount){
        document.getElementById(plataforma).classList.remove('marked');
        paramount = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        paramount = true;
    } 
}
function markedAppleTv(plataforma) {
    if(appleTv){
        document.getElementById(plataforma).classList.remove('marked');
        appleTv = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        appleTv = true;
    } 
}
function markedPlutoTv(plataforma) {
    if(plutoTv){
        document.getElementById(plataforma).classList.remove('marked');
        plutoTv = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        plutoTv = true;
    } 
}
function markedBlimTv(plataforma) {
    if(blimTv){
        document.getElementById(plataforma).classList.remove('marked');
        blimTv = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        blimTv = true;
    } 
}
function markedClaroVideo(plataforma) {
    if(claroVideo){
        document.getElementById(plataforma).classList.remove('marked');
        claroVideo = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        claroVideo = true;
    } 
}


function removeDisplay(id) {        
    setTimeout(() => {
        document.getElementById(id).classList.remove('display');  
    }, 200);
}



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