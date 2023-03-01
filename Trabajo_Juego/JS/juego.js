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

    myButtonJugar.addEventListener("click",(ev)=>
        {
            Juego();
        }
    )

    function Juego()
    {
        let myDivContent = document.getElementById("Contenedor");
        myDivContent.innerHTML = "";

        let myDivTablero = document.createElement("div");
        myDivTablero.id = "DivTablero";

        let myDivExtras = document.createElement("div");
        myDivExtras.id = "DivExtras";

        let myTable = document.createElement("table");
        myTable.id = "Tablero";
        

        myDivContent.appendChild(myDivTablero);
        myDivContent.appendChild(myDivExtras);
        myDivTablero.appendChild(myTable);

        for(let i = 0; i < 10; i++)
        {
            let myTr = document.createElement("tr");
            myTr.id = i;

            myTable.appendChild(myTr);

            for(let x = 0; x < 10; x++)
            {
                let myTd = document.createElement("td");
                myTd.id = myTr.id+x;
                if(i == 9 && x == 9)
                {
                    myTd.className = "Meta";
                }
                myTr.appendChild(myTd);
            }
        }
    }
}
window.onload = Jugar;
export { Jugar };