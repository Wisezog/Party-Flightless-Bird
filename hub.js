'use strict';

window.addEventListener("keydown",detectKey);

function detectKey(key){
    
    switch(key.keyCode){
        case 38:
            //up arrow
            moveShip("up");
            break;
        case 40:
            //down arrow
            moveShip("down");
            break;
        case 37:
            //left arrow
            moveShip("left");
            break;
        case 39:
            //right arrow  
            moveShip("right");
            break;
        case 32:
            alert("Space pressed");
            break;             
    }
}

function moveShip(direction){
    let ship = document.getElementById("ship");
    let positionY = Number((ship.style.top).replace("px",""));
    let positionX = Number((ship.style.left).replace("px",""));
    const moveAmount = 10;
    switch(direction){
        case "up":
            positionY = positionY - moveAmount;
            console.log("up: " + positionY);
            ship.style.top = positionY +"px";
            break;
        case "down":
            positionY = positionY + moveAmount;
            console.log("down: " + positionY);
            ship.style.top = positionY  +"px";
            break;
        case "left":
            positionX = positionX - moveAmount;
            console.log("left: " + positionX);
            ship.style.left = positionX +"px";
            break;
        case "right":
            positionX = positionX + moveAmount;
            console.log("right: " + positionX);
            ship.style.left = positionX +"px";
            break;
    }
}