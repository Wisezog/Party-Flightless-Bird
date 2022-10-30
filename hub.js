'use strict';

window.addEventListener("keydown",detectKey);
//Listens for key presses.

/**
 * Checks which key was pressed, and calls any associated functionality.
 * @param {*} event the event of a key press being detected. 
 */
function detectKey(event){
    
    switch(event.keyCode){
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
            //Space bar
            console.log("Space Pressed");
            visitPlanet();
            break;             
    }
}

/**
 * This method moves the ship in a specific direction.
 * @param {*} direction in which the ship will be moved in.
 */
function moveShip(direction){
    let ship = document.getElementById("ship");
    let positionY = Number((ship.style.top).replace("px",""));
    let positionX = Number((ship.style.left).replace("px",""));
    //Retrieves current 'coordinates' of the ship.

    const moveAmount = 10;
    //Increase this value to increase movement speed

    switch(direction){
        case "up":
            positionY = positionY - moveAmount;
            console.log("up: " + positionY);
            ship.style.top = positionY +"px";
            //Moves the ship up.
            break;
        case "down":
            positionY = positionY + moveAmount;
            console.log("down: " + positionY);
            ship.style.top = positionY  +"px";
            //Moves the ship down.
            break;
        case "left":
            positionX = positionX - moveAmount;
            console.log("left: " + positionX);
            ship.style.left = positionX +"px";
            //Move the ship left.
            break;
        case "right":
            positionX = positionX + moveAmount;
            console.log("right: " + positionX);
            ship.style.left = positionX +"px";
            //Move the ship right.
            break;
    }
}

function visitPlanet(){
    let ship = document.getElementById("ship");
    let shipCoordinates = [ship.offsetLeft,ship.offsetTop]

    let planet1 = document.getElementById("planet1");
    let planet1Coordinates = [planet1.offsetLeft,planet1.offsetTop]

    let planet2 = document.getElementById("planet2");
    let planet2Coordinates = [planet2.offsetLeft,planet2.offsetTop]

    let planet3 = document.getElementById("planet3");
    let planet3Coordinates = [planet3.offsetLeft,planet3.offsetTop]

    let planet4 = document.getElementById("planet4");
    let planet4Coordinates = [planet4.offsetLeft,planet4.offsetTop]

    let planet5 = document.getElementById("planet5");
    let planet5Coordinates = [planet5.offsetLeft,planet5.offsetTop]

    if(compareLocation(shipCoordinates,planet1Coordinates)){
        window.location.href = "./party-planet/party-planet.html";
    }else if(compareLocation(shipCoordinates,planet2Coordinates)){
        window.location.href = "./snake-planet/snake-planet.html";
    }else if(compareLocation(shipCoordinates,planet3Coordinates)){
        window.location.href = "./insult-planet/insult-planet.html";
    }else if(compareLocation(shipCoordinates,planet4Coordinates)){
        window.location.href = "./chat-room-planet/chat-room-planet.html";
    }else if(compareLocation(shipCoordinates,planet5Coordinates)){
        window.location.href = "./connect-4-planet/connect-4-planet.html";
    }else{
        console.log("No planet found")
    }
    
}

function compareLocation(ship,planet){
    let matching = false;
    const range = 20;

    for(let i = 0; i < 2; i++){
        if(ship[i] <= (planet[i]+ range) && ship[i] >= (planet[i]- range)){
            matching = true;
        }else{
            matching = false
        }
    }
    return matching;
    
}