document.getElementById("btn__registrate").addEventListener("click",Register);
document.getElementById("btn__Inicio_De_Sesion").addEventListener("click",Iniciar);
window.addEventListener("resize", anchoPagina);

//DECLARACION DE LAS VARIABLES
var contenerdo_inicio_de_sesion = document.querySelector(".contenerdo_inicio_de_sesion");
var formulario_inicio_sesion = document.querySelector(".formulario_inicio_sesion");
var formulario_de_registro = document.querySelector(".formulario_de_registro");
var caja_De_Atras_Inicio = document.querySelector(".caja_De_Atras_Inicio");
var caja_De_Atras_registero = document.querySelector(".caja_De_Atras_registero");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_De_Atras_Inicio.style.display = "block";
        caja_De_Atras_registero.style.display = "block";
    }else{
        caja_De_Atras_registero.style.display = "block";
        caja_De_Atras_registero.style.opacity = "1";
        caja_De_Atras_Inicio.style.display = "none";
        formulario_inicio_sesion.style.display = "block";
        formulario_de_registro.style.display = "none";
        contenerdo_inicio_de_sesion.style.left = "0px";
    }
}

anchoPagina();

function Iniciar(){

    if(window.innerHeight > 850){
        formulario_de_registro.style.display = "none";
        contenerdo_inicio_de_sesion.style.left = "10px";
        formulario_inicio_sesion.style.display = "block";
        caja_De_Atras_registero.style.opacity = "1";
        caja_De_Atras_Inicio.style.opacity = "0";
    }else{
        formulario_de_registro.style.display = "none";
        contenerdo_inicio_de_sesion.style.left = "0px";
        formulario_inicio_sesion.style.display = "block";
        caja_De_Atras_registero.style.display = "block";
        caja_De_Atras_Inicio.style.display = "none";
    }

}



function Register(){
    if(window.innerWidth > 850){
        formulario_de_registro.style.display = "block";
        contenerdo_inicio_de_sesion.style.left = "410px";
        formulario_inicio_sesion.style.display = "none";
        caja_De_Atras_registero.style.opacity = "0";
        caja_De_Atras_Inicio.style.opacity = "1";
    }else{
        formulario_de_registro.style.display = "block";
        contenerdo_inicio_de_sesion.style.left = "0px";
        formulario_inicio_sesion.style.display = "none";
        caja_De_Atras_registero.style.display = "none";
        caja_De_Atras_Inicio.style.opacity = "1";
    }
}

