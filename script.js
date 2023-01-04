let audioImagen = document.getElementById('AudioMostrar');

let opacidad = 0;
let pulsarVeces = 5;

function AumentarOpacidad(){
    pulsarVeces-=1;
    let audioImagen = document.getElementById('AudioMostrar');
    opacidad +=0.2;
    audioImagen.style.opacity =opacidad;
    document.getElementById('btnPulsar').innerHTML = `Pulsa ${pulsarVeces} veces al botón`;
}
function MostrarFormulario(){
    setTimeout(()=>{
        mostrarFormulario();
    },10090);
}
function mostrarFormulario(){
    document.getElementById('formPablito').style.display = "block";
}
function Comprobar(){
    
}