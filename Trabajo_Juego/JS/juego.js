'use strict'

let contadorTiradas = 0;
let controladorPartida = false;

function Jugar()
{       
    let FormHelp = document.getElementById("Formu"); 

    let myPlayButton = document.createElement("input");
    myPlayButton.id = "Jugar";
    myPlayButton.type = "button";
    myPlayButton.name = "Jugar";
    myPlayButton.value = "JUGAR";
    myPlayButton.disabled = "true";
    FormHelp.appendChild(myPlayButton);

    myPlayButton.addEventListener("click",(ev)=>
        {
            Juego();
        }
    )
}

function Juego()
{
    let myDivContent = document.getElementById("Contenedor");
    myDivContent.innerHTML = "";

    let myDivTablero = document.createElement("div");
    myDivTablero.id = "DivTablero";
    myDivTablero.className= "DivTablero";

    let myDivExtras = document.createElement("div");
    myDivExtras.id = "DivExtras";
    myDivExtras.className = "DivExtras";

    let myDiceButton = document.createElement("input");
    myDiceButton.id = "DiceButton";
    myDiceButton.type = "button";
    myDiceButton.value = "Tira el dado";
    myDiceButton.className = "DiceButton";

    myDivContent.appendChild(myDivTablero);
    myDivContent.appendChild(myDivExtras);
    myDivExtras.appendChild(myDiceButton);

    DiceThrow();

    let positionX = 0;
    let positionY = 0;
    TableGeneration(`${positionX}${positionY}`);
}

function TableGeneration(initialPosition)
{
    let myTablero = document.getElementById("Tablero");
    let myDivTablero = document.getElementById("DivTablero");

    if(myTablero)
    {
        myTablero.remove();
    }

    let myTable = document.createElement("table");
    myTable.id = "Tablero";
    myTable.setAttribute("initialPosition", initialPosition);
    myDivTablero.appendChild(myTable);

    for(let i = 0; i < 10; i++)
    {
        let myTr = document.createElement("tr");
        myTr.id = i;

        myTable.appendChild(myTr);

        for(let x = 0; x < 10; x++)
        {
            let myTd = document.createElement("td");
            myTd.id = myTr.id + x;

            if(myTd.id == initialPosition)
            {
                let myCharacter = document.createElement("img");
                myCharacter.src = "http://pa1.narvii.com/6370/6788f359494be1579b8d003358b19f80d77ceafd_00.gif";
                myCharacter.className = "PJ";
                myTd.appendChild(myCharacter);
            }

            if(i == 9 && x == 9)
            {
                myTd.className = "Meta";
            }
            myTr.appendChild(myTd);
        }
    }
    if(initialPosition == 99)
    {
        alert("ENHORABUENA HEROE HAS ENCONTRADO UN TESORO");
    }
}

function DiceThrow()
{
    let DivExtras = document.getElementById("DivExtras");
    let DiceButton = document.getElementById("DiceButton");
    DivExtras.appendChild(DiceButton);
    DiceButton.addEventListener("click", (ev) =>
        {
            Dice();
        }
    )
}
function Dice()
{
    let myDivExtras = document.getElementById("myDivExtras");
    if(controladorPartida == false)
    {
        controladorPartida = true;
        contadorTiradas++;

        let checkDice = document.getElementById("DiceRoll");
        if(checkDice)
        {
            checkDice.remove();
        }

        let result = Math.floor(Math.random()*7); 
        while(result == 0)
        {
            result = Math.floor(Math.random()*7);
        }

        let Draft3D = document.getElementById("DiceFaces");
        if(Draft3D)
        {
            Draft3D.remove();
        }
        let myDiv3D = document.createElement("div");
        myDiv3D.id = "DiceFaces";
        myDiv3D.className = "Div3D";

        let DiceButton = document.getElementById("DiceButton");
        DiceButton.before(myDiv3D);

        let myDice3D = document.createElement("div");
        myDice3D.className = "myDice3D";
        myDiv3D.appendChild(myDice3D);
        
        let myBase = document.createElement("div");
        myBase.className = "myBase";
        myDice3D.appendChild(myBase);

        let myFace1 = document.createElement("aside");
        myFace1.className = "myFace myFace1";
        myDice3D.appendChild(myFace1);
        let myFace2 = document.createElement("aside");
        myFace2.className = "myFace myFace2";
        myDice3D.appendChild(myFace2);
        let myFace3 = document.createElement("aside");
        myFace3.className = "myFace myFace3";
        myDice3D.appendChild(myFace3);
        let myFace4 = document.createElement("aside");
        myFace4.className = "myFace myFace4";
        myDice3D.appendChild(myFace4);
        let myFace5 = document.createElement("aside");
        myFace5.className = "myFace myFace5";
        myDice3D.appendChild(myFace5);
        let myFace6 = document.createElement("aside");
        myFace6.className = "myFace myFace6";
        myDice3D.appendChild(myFace6);

        switch(result)
        {
            case 1:
                myFace1.style = "background-image: url(../IMG/1.jpg";
                myFace2.style = "background-image: url(../IMG/2.jpg";
                myFace3.style = "background-image: url(../IMG/3.jpg";
                myFace4.style = "background-image: url(../IMG/4.jpg";
                myFace5.style = "background-image: url(../IMG/5.jpg";
                myFace6.style = "background-image: url(../IMG/6.jpg";
                break;
            case 2:
                myFace1.style = "background-image: url(../IMG/2.jpg";
                myFace2.style = "background-image: url(../IMG/1.jpg";
                myFace3.style = "background-image: url(../IMG/3.jpg";
                myFace4.style = "background-image: url(../IMG/4.jpg";
                myFace5.style = "background-image: url(../IMG/6.jpg";
                myFace6.style = "background-image: url(../IMG/5.jpg";
                break;
            case 3:
                myFace1.style = "background-image: url(../IMG/3.jpg";
                myFace2.style = "background-image: url(../IMG/2.jpg";
                myFace3.style = "background-image: url(../IMG/1.jpg";
                myFace4.style = "background-image: url(../IMG/6.jpg";
                myFace5.style = "background-image: url(../IMG/5.jpg";
                myFace6.style = "background-image: url(../IMG/4.jpg";
                break;
            case 4:
                myFace1.style = "background-image: url(../IMG/4.jpg";
                myFace2.style = "background-image: url(../IMG/5.jpg";
                myFace3.style = "background-image: url(../IMG/6.jpg";
                myFace4.style = "background-image: url(../IMG/1.jpg";
                myFace5.style = "background-image: url(../IMG/2.jpg";
                myFace6.style = "background-image: url(../IMG/3.jpg";
                break;
            case 5:
                myFace1.style = "background-image: url(../IMG/5.jpg";
                myFace2.style = "background-image: url(../IMG/6.jpg";
                myFace3.style = "background-image: url(../IMG/4.jpg";
                myFace4.style = "background-image: url(../IMG/3.jpg";
                myFace5.style = "background-image: url(../IMG/1.jpg";
                myFace6.style = "background-image: url(../IMG/2.jpg";
                break;
            case 6:
                myFace1.style = "background-image: url(../IMG/6.jpg";
                myFace2.style = "background-image: url(../IMG/5.jpg";
                myFace3.style = "background-image: url(../IMG/4.jpg";
                myFace4.style = "background-image: url(../IMG/3.jpg";
                myFace5.style = "background-image: url(../IMG/2.jpg";
                myFace6.style = "background-image: url(../IMG/1.jpg";
                break;
        }
        let RollsMade = document.getElementById("RollsMade");
        if(RollsMade)
        {
            RollsMade.remove();
        }
        let myRollsDiv = document.createElement("div");
        myRollsDiv.id = "RollsMade";
        
        let myH2 = document.createElement("h2");
        myH2.textContent = "Tiradas realizadas: " + contadorTiradas;
        DiceButton.before(myRollsDiv);
        myRollsDiv.appendChild(myH2);

        Sections(result);
    }
}
function Sections(result)
{
    for(let i = 0; i < 10; i++)
    {
        for(let x = 0; x < 10; x++)            
        {
            let Table = document.getElementById("Tablero");
            let Position = Table.getAttribute("initialPosition");

            console.log(result);
            if(`${i}${x}` == Position)
            {
                let Section1 = document.getElementById(`${i + result}${x}`);
                let Section2 = document.getElementById(`${i}${x + result}`);
                let Section3 = document.getElementById(`${i - result}${x}`);
                let Section4 = document.getElementById(`${i}${x - result}`);

                if(Section1 !== null)
                {
                    Section1.className = "Movible";
                    Section1.addEventListener("click", (ev) =>
                        {
                            TableGeneration(Section1.id);
                            controladorPartida = false;
                        }
                    )
                }
                if(Section2 !== null)
                {
                    Section2.className = "Movible";
                    Section2.addEventListener("click", (ev) =>
                        {
                            TableGeneration(Section2.id);
                            controladorPartida = false;
                        }
                    )
                }
                if(Section3 !== null)
                {
                    Section3.className = "Movible";
                    Section3.addEventListener("click", (ev) =>
                        {
                            TableGeneration(Section3.id);
                            controladorPartida = false;
                        }
                    )
                }
                if(Section4 !== null)
                {
                    Section4.className = "Movible";
                    Section4.addEventListener("click", (ev) =>
                        {
                            TableGeneration(Section4.id);
                            controladorPartida = false;
                        }
                    )
                }
                if(Section1 == null && Section2 == null && Section3 == null && Section4 == null)
                {
                    alert("Las olas te empujan al fondo pero sales del agua para moverte una vez mas");
                    controladorPartida = false;
                }
            }
        }
    }
}

window.onload = Jugar;
export { Jugar };