'use strict'

/* 
    Inicializacion de variables de:
    - Contador de tiradas del dado 
    - Controlador de juego para ver si se puede seguir jugando o no
*/
let contadorTiradas = 0;
let controladorPartida = false;

/* 
    Funcion principal "Jugar" en la cual se genera:
    - Un input de tipo boton que se agrega al formulario de inicio de sesion / registro pero que esta desactivado
    - EventListener del boton de jugar que llama a la funcion de Juego
*/
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

/*
    Funcion de "Juego"
    - En esta funcion lo que se lleva a cabo es la limpieza del div con id Contenedor y la creacion de 
    - un espacio para el tablero de juego, un div extra y un boton de "Tirar el dado"
    - Posterior a la creacion de los elementos estos se introducen en sus correspondientes espacios.
    - Tambien se llama a la funcion que tiene como uso "Tirar el dado" y se crean unas coordenadas
    - del tablero de juego.
*/
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
/*
    Funcion "Generacion de Tablero"
    - En esta funcion se lleva a cabo la generacion de un tablero de juego con una posicion inicial
    - pasada por parametros en la funcion anterior. Tambien se inserta el elemento img que hace
    - referencia al sprite / imagen del personaje. 

    Funciones que engloba:
        Si el tablero ya ha sido creado anteriormente este ultimo es borrado para generar otro con los valores del anterior.
        Se les da a las celdas una id para ser identificadas en cuanto a los movimientos que tenga el jugador.
        Si una de las celdas tiene el id 99 esta contendra una clase y una futura alerta en caso de llegar a ella.
*/
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

/*
    Funcion "Tirar dado"
    - Esta funcion es muy basica en cuanto a comportamiento y este lo unico que hace es introducir
    - el boton de "Tirar el dado" en su correspondiente espacio(div).
    - Seguido de esto el boton es administrado con una evento click que llama a la funcion de "Construir Dado"
*/
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

/*
    Funcion "Construir Dado"
    - Principalmente esta funcion se encarga de la generacion de dado y sus correspondientes caras y la
    - insercion de estas en su correspondiente lugar.
    - A parte lleva a cabo la recogida de tiradas y el uso del controlador de partida generado anteriormente.

    Funciones que engloba:
        Si el dado ya ha sido tirado se obtiene un texto y si existe se quita.
        Se genera un resultado aleatorio con valores del 1 al 6 y mientras sea resultado 0 se realizara otra vez.
        Se recoge un div por id y si ya existia se borra para generar uno nuevo. En este tambien se insertan
            el boton de "Tirar el dado" y un div que contiene el dado en cuestion con sus caras. Tambien se 
            inserta un texto informativo de las tiradas ejecutadas por el jugador.
        Por ultimo se le agrega un timeout a la llamada de funcion de "Casillas" de un tiempo de 1.5 segundos
            para que el jugador vea terminar la animacion del dado antes de ver las casillas a las que se puede
            desplazar.
*/
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

        setTimeout(() =>
        {
            Sections(result);
        }, 1500);
    }
}

/*
    Funcion "Casillas"
    - Esta funcion consiste principalmente en la generacion de las casillas a las que el jugador se
    - puede desplazar. Esta funcion consta de un parametro dado en la funcion de "Construir dado".
    - Al inicio de esta se recogen mediante id el tablero y la posicion inicial, la cual sirve
    - como variable origen a la hora de contar las casillas a desplazar y seleccionarlas.
    - A las casillas desplazables se les añade una clase para mostrar con css el lugar de desplazamiento.
    - En caso de no tener una casilla a la cual desplazarse por falta de casillas adyacentes el
    - jugador recibira un alert con un mensaje de que vuelva a tirar.
*/
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