'use strict'

var array = [0,0,0,0,0,0,0,0,0];

// 0 = empty
// 1 = X (player)
// 2 = O (Computer)
var win = false;
var error = false;
var currentPlayer = 1;

array.forEach(element => {
    element = 0;
});

function play(cell) {

    if (array[cell] != 0) {
        error = true;
        callError();
    } else {
        array[cell] = currentPlayer;
        let button = document.getElementById("cell"+cell);
        button.value = currentPlayer;
        checkWin(currentPlayer,cell);
        if(currentPlayer == 1){
            currentPlayer = 2;
        }else{
            currentPlayer = 1;
        }
    }

}

function checkWin(currentPlayer,cell) {
    for (let index = 0; index < array.length; index++) {
        if(array[0] == currentPlayer && array[1] == currentPlayer && array[2] == currentPlayer){
            win = true
        }else if(array[3] == currentPlayer && array[4] == currentPlayer && array[5] == currentPlayer){
            win = true
        }else if(array[6] == currentPlayer && array[7] == currentPlayer && array[8] == currentPlayer){
            win = true
        }else if(array[0] == currentPlayer && array[3] == currentPlayer && array[6] == currentPlayer){
            win = true
        }else if(array[1] == currentPlayer && array[4] == currentPlayer && array[7] == currentPlayer){
            win = true
        }else if(array[2] == currentPlayer && array[5] == currentPlayer && array[6] == currentPlayer){
            win = true
        }else if(array[0] == currentPlayer && array[4] == currentPlayer && array[8] == currentPlayer){
            win = true
        }else if(array[2] == currentPlayer && array[4] == currentPlayer && array[6] == currentPlayer){
            win = true
        }
    }

    if (win){
        alert("Player " + currentPlayer + " wins");
        array = [0,0,0,0,0,0,0,0,0];
        for(let i = 0; i < 9; i++){
            let button = document.getElementById("cell"+i);
            button.value = 0;
        }
    }
}

function callError() {

}