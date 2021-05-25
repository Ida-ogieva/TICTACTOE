let box1El = document.getElementById("box1");
let box2El = document.getElementById("box2");
let box3El = document.getElementById("box3");
let box4El = document.getElementById("box4");
let box5El = document.getElementById("box5");
let box6El = document.getElementById("box6");
let box7El = document.getElementById("box7");
let box8El = document.getElementById("box8");
let box9El = document.getElementById("box9");
let buttonEl = document.getElementById("btn");
let boxEl = document.getElementById("box");

let count = 0;


boxEl.addEventListener("click", display);
function display () {

    count= count + 1;

    box1El.addEventListener("click", displayText)
    function displayText () {

    if (count === 1 && displayText) {
        box1El.innerHTML = "X";
        box1El.style.backgroundColor = "red";
    } else if (count === 3 && displayText) {
    box2El.innerHTML = "X";
    box2El.style.backgroundColor = "red";
}
}
}

buttonEl.addEventListener("click", clearPage);
function clearPage () {
    box1El.style.backgroundColor = "white";
    box2El.style.backgroundColor = "white";
    box3El.style.backgroundColor = "White";
    box4El.style.backgroundColor = "white";
    box5El.style.backgroundColor = "White";
    box6El.style.backgroundColor = "white";
    box7El.style.backgroundColor = "white";
    box8El.style.backgroundColor = "white";
    box9El.style.backgroundColor = "white";

    box1El.innerHTML = " ";
    box2El.innerHTML = " ";
}
















// box2El.addEventListener("click", displayText2);
// function displayText2 () {
//     box2El.style.backgroundColor = "red";
//     box2El.innerHTML = "X";
//     box2El.style.color = "black";
// }














