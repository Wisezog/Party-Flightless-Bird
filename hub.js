'use strict';

document.onkeydown = detectKey;


function detectKey(key){
    switch(key.keyCode){
        case 38:
            //up arrow
            moveShip(up);
        case 40:
            //down arrow
            moveShip(down);
        case 37:
            //left arrow
            moveShip(left);
        case 39:
            //right arrow  
            moveShip(right);      
    }
}

function moveShip(direction){
    let ship = document.getElementsByClassName("ship");
    let positionY = (ship.style.top).replace("px","");
    let positionX = (ship.style.left).replace("px","");

    switch(direction){
        case "up":
            ship.style.top = (positionY + 0.01) +"px";
            break;
        case "down":
            ship.style.top = (positionY - 0.01) +"px";
            break;
        case "left":
            ship.style.left = (positionX + 0.01) +"px";
            break;
        case "right":
            ship.style.left = (positionX - 0.01) +"px";
            break;
    }
}