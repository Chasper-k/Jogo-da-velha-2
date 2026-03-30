var player, winner = null;
var selectedPlayer = document.getElementById("selected-player");
var selectedWinner = document.getElementById("selected-winner");
var boxes = document.getElementsByClassName("box");

changePlayer("X");

function pickBox(id) {

    if( winner !== null) {
        return;
    }
    
    var box = document.getElementById(id);
    if (box.innerHTML !== "-") {
        return; 
    }

    box.innerHTML = player;
    box.style.color = "#a5f72b";

    if (player === "X") { 
        player = "O";
    } else {
        player = "X";
    }
 
    changePlayer(player);
    checkWinner();

} 

function changePlayer(valor) {
    player = valor;
    selectedPlayer.innerHTML = player;
}

function checkWinner() {
    var box1 = document.getElementById(1);
    var box2 = document.getElementById(2);
    var box3 = document.getElementById(3);
    var box4 = document.getElementById(4);
    var box5 = document.getElementById(5);
    var box6 = document.getElementById(6);
    var box7 = document.getElementById(7);
    var box8 = document.getElementById(8);
    var box9 = document.getElementById(9);

    if(checkSequence(box1, box2, box3)) {
       changeColorBox(box1, box2, box3);
       changeWinner(box1);
       return;
    }

    if(checkSequence(box4, box5, box6)) {
       changeColorBox(box4, box5, box6);
       changeWinner(box4);
       return;

    }

    if(checkSequence(box7, box8, box9)) {
       changeColorBox(box7, box8, box9);
       changeWinner(box7);
       return;
    }

     if(checkSequence(box2, box5, box8)) {
       changeColorBox(box2, box5, box8);
       changeWinner(box2);
       return;
    }

     if(checkSequence(box3, box6, box9)) {
       changeColorBox(box3, box6, box9);
       changeWinner(box3);
       return;
    }

     if(checkSequence(box1, box5, box9)) {
       changeColorBox(box1, box5, box9);
       changeWinner(box1);
       return;
    }

     if(checkSequence(box3, box5, box7)) {
       changeColorBox(box3, box5, box7);
       changeWinner(box3);
       return;
    }

    if(checkSequence(box1, box4, box7)) {
       changeColorBox(box1, box4, box7);
       changeWinner(box1);
    }
    
}

function changeWinner(box) {
    winner = box.innerHTML;
    selectedWinner.innerHTML = winner;
}

function changeColorBox(box1, box2, box3) { 
    box1.style.background = "#06402B";
    box2.style.background = "#06402B";
    box3.style.background = "#06402B";

}


function checkSequence (box1, box2, box3) {
    var equals = false; 

    if(box1.innerHTML !== '-' && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) {
        equals = true;
}
    return equals;
}


function restart() {
    winner = null;
    selectedWinner.innerHTML = "";

    for (var i = 1; i <= 9; i++) {
        var box = document.getElementById(i); 
        box.innerHTML = "-";
        box.style.background = "#000";
        box.style.color = "#000"; 
    }
        changePlayer("X");
 }