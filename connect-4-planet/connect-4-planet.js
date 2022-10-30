'use strict'

var array = new Array[3][3];
// 0 = empty
// 1 = X (player)
// 2 = O (Computer)
var win = false;
var error = false;

array.forEach(element => {
    element = 0;
});

function play(x, y) {
    if (array[x][y] != 0) {
        error = true;
        callError();
    } else {
        array[x][y] = 1;
    }
    checkWin();
}

function checkWin() {
    for (let index = 0; index < array.length; index++) {
        if (array[index][0] == 1 && array[index][1] == 1 && array[index][2] == 1){
            win = true;
        }
        if (array[0][index] == 1 && array[1][index] == 1 && array[2][index] == 1){
            win = true;
        }
        if (array[index][index] == 1 && array[index][index] == 1 && array[index][index] == 1){
            win = true;
        }
        if (array[array.length- index][index] == 1 && array[index][index] == 1 && array[array.length][index] == 1){
            win = true;
        }
    }

    if (win){

    }
}

function callError() {

}