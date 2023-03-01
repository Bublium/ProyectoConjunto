'use strict'

function Jugar()
{       
    let controlDeJuego = 0;
    let contarTiradas = 0;

    let myDiv = document.createElement("div");
    myDiv.id = "DivGen";
    myDiv.className = "DivGen";

    let myBr = document.createElement("br");
    let myBr2 = document.createElement("br");
    
    let myButton = document.createElement("input");    
    myButton.id = "BotonJugar";
    myButton.type = "button";
    myButton.value = "Jugar";
    myButton.className = "BotonJugar";

    let myButton2 = document.createElement("input");
    myButton2.id = "BotonTirarDado";
    myButton2.type = "button";
    myButton2.value = "Tirar Dado";
    myButton2.className = "BotonTirarDado";
    myButton2.style.display = "none";

    let myTable = document.createElement("table");
    myTable.id = "Tablero";
    myTable.border = "2px solid black";
    myTable.className = "Tablero"

    document.body.appendChild(myDiv);
    myDiv.appendChild(myButton);
    myDiv.appendChild(myButton2);
    myDiv.appendChild(myBr);
    myDiv.appendChild(myTable);

    myButton.addEventListener("click", (ev) =>
        {
            if(controlDeJuego == 0)
            {
                myButton.style.pointerEvents = "none";
                myButton2.removeAttribute("style");            

                for(let i = 0; i < 10; i++)
                {
                    let myTr = document.createElement("tr");
                    myTr.id = "myTr"+i;

                    myTable.appendChild(myTr);

                    for(let x = 0; x < 10; x++)
                    {
                        let myTd = document.createElement("td");
                        myTd.id = "myTd"+i+x;
                        myTr.appendChild(myTd);
                    }
                }
                ayuda++;
            }    
            else
            {
                alert("Termina la partida para volver a jugar.");
            }        
        }
    );

    myButton2.addEventListener("click", (ev) =>
        {
            contarTiradas++;        
        }
    );
/* Funcion de uso futuro

    let myTd99 = document.getElementById("myTd99");
    myTd99.addEventListener("click", (ev) =>
        {
            ayuda = 0;
            alert("Felicidades has llegado al tesoro");    
            console.log("Bien hecho");  
        }
    );
*/
}
window.onload = Jugar;