'use strict'

function Jugar()
{       
    let contadorTiradas = 0;

    let FormHelp = document.getElementById("Formu"); 
    let ButtonLogin = document.getElementById("ButtonLogin");
    let ButtonRegister = document.getElementById("ButtonRegister");

    let myButtonJugar = document.createElement("input");
    myButtonJugar.id = "Jugar";
    myButtonJugar.type = "button";
    myButtonJugar.name = "Jugar";
    myButtonJugar.value = "JUGAR";
    myButtonJugar.disabled = "true";
    FormHelp.appendChild(myButtonJugar);

    
}
window.onload = Jugar;
export { Jugar };