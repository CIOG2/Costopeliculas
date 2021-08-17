const listaDeCuentasPagadas = [];
let nexflix = false, youtube = false, hboMax = false, disney = false, primeVideo = false, paramount = false, hulu = false, appleTv = false, starzPlay = false, blimTv = false, crunchyroll = false, claroVideo = false; 
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
function markedStarzPlay(plataforma) {
    if(starzPlay){
        document.getElementById(plataforma).classList.remove('marked');
        starzPlay = false;
    } else {
        document.getElementById(plataforma).classList.add('marked');
        starzPlay = true;
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
    let NEprecio1 = document.getElementById('nexflixRES1').checked;
    let NEprecio2 = document.getElementById('nexflixRES2').checked;
    let NEprecio3 = document.getElementById('nexflixRES3').checked;
    let HUprecio1 = document.getElementById('huluRES1').checked;
    let HUprecio2 = document.getElementById('huluRES2').checked;
    let HUprecio3 = document.getElementById('huluRES3').checked;
    let CRprecio1 = document.getElementById('crunchyrollRES1').checked;
    let CRprecio2 = document.getElementById('crunchyrollRES2').checked;

    if(NEprecio1){
        precio = 139;
        listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
    }
        if(NEprecio2){
            precio = 196;
            listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
        }
            if(NEprecio3){
                precio = 266;
                listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
            }
                if(HUprecio1){
                    precio = 120;
                    listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                }  
                    if(HUprecio2){
                        precio = 240;
                        listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                    }
                        if(HUprecio3){
                            precio = 1305;
                            listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                        }
                            if(CRprecio1){
                                precio = 99;
                                listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                            }    
                                if(CRprecio2){
                                    precio = 125;
                                    listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                                }

    if(youtube){
        precio = 119;
        listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
    }   
        if(hboMax){
            precio = 104;
            listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
        }        
            if(disney){
                precio = 159;
                listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
            }    
                if(primeVideo){
                    precio = 99;
                    listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                }            
                    if(paramount){
                        precio = 79;
                        listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                    }
                        if(blimTv){
                            precio = 109;
                            listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                        }                        
                            if(claroVideo){
                                    precio = 69;
                                    listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                            }
                                if(appleTv){
                                        precio = 69;
                                        listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                                }
                                    if(starzPlay){
                                            precio = 89;
                                            listaDeCuentasPagadas[listaDeCuentasPagadas.length] = precio;
                                        }

    let total = 0;
    for (let i = 0; i < listaDeCuentasPagadas.length; i++) {    
        total += listaDeCuentasPagadas[i];
    }
    

    for (let i = listaDeCuentasPagadas.length; i > 0; i--) {
        listaDeCuentasPagadas.pop();
      }

      return total;
}

function calcularPrecios() {
   let RentaStreaming = CALCULAR();
   let peliculasVistas = document.getElementById("peliculasVistasPorMes").value;
   let CostoBoleto = document.getElementById("costoBoletoCine").value;
   let respuesta = document.getElementById("respuestaTexto");   
   

if (RentaStreaming <= 0){
    swal(':(', 'Seleciones las plataformas que esta pagando', 'error')
} 
    else if (peliculasVistas <= 0){
        swal(':(', 'No ingresate cuantas peliculas vez', 'error')
    } 
        else if (CostoBoleto <= 0){
            swal(':(', 'No ingresaste cuanto vale el boleto de tu cine', 'error')
        } 
else{
    let resultadoCine = peliculasVistas * CostoBoleto;
    
    agregarRespueta();
    if(RentaStreaming < resultadoCine){
        respuesta.innerText = `Gastas $${RentaStreaming} pesos al mes pagando tus servicios de Streaming y te resulta mas barato que ir al cine.
        
        En el cine pagarias $${resultadoCine} pesos por ver ${peliculasVistas} peliculas.`;
    }
    else{
        respuesta.innerText = `Gastas $${resultadoCine} pesos al mes por ir a ver ${peliculasVistas} peliculas en el cine.

       Es mejor ir al cine que pagar $${RentaStreaming} pesos por sitios de streaming que no usas.`;
    }
     
}





}

function agregarRespueta() {
    document.getElementById('respuestas').classList.remove('DISPLAYnone');
}


