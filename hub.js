'use strict';

window.addEventListener("keydown", detectKey);
//Listens for key presses. 



function defaultShip(){
    let ship = document.getElementById("ship");
    ship.style.left = "500px";
    ship.style.top = "300px";    
}


/**
 * Checks which key was pressed, and calls any associated functionality.
 * @param {*} event the event of a key press being detected. 
 */
function detectKey(event) {

    switch (event.keyCode) {
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
function moveShip(direction) {
    let ship = document.getElementById("ship");
    let positionY = Number((ship.style.top).replace("px", ""));
    let positionX = Number((ship.style.left).replace("px", ""));
    //Retrieves current 'coordinates' of the ship.

    const moveAmount = 10;
    //Increase this value to increase movement speed

    switch (direction) {
        case "up":
            positionY = positionY - moveAmount;
            console.log("up: " + positionY);
            ship.style.top = positionY + "px";
            //Moves the ship up.
            break;
        case "down":
            positionY = positionY + moveAmount;
            console.log("down: " + positionY);
            ship.style.top = positionY + "px";
            //Moves the ship down.
            break;
        case "left":
            positionX = positionX - moveAmount;
            console.log("left: " + positionX);
            ship.style.left = positionX + "px";
            //Move the ship left.
            break;
        case "right":
            positionX = positionX + moveAmount;
            console.log("right: " + positionX);
            ship.style.left = positionX + "px";
            //Move the ship right.
            break;
    }
}

function visitPlanet() {
    let ship = document.getElementById("ship");
    let shipHitBox = ship.getBoundingClientRect();
    
    let planet1 = document.getElementById("planet1");
    let planet1HitBox = planet1.getBoundingClientRect();

    let planet2 = document.getElementById("planet2");
    let planet2HitBox = planet2.getBoundingClientRect();

    let planet3 = document.getElementById("planet3");
    let planet3HitBox = planet3.getBoundingClientRect();

    let planet4 = document.getElementById("planet4");
    let planet4HitBox = planet4.getBoundingClientRect();

    let planet5 = document.getElementById("planet5");
    let planet5HitBox = planet5.getBoundingClientRect();


    if (compareLocation(shipHitBox, planet1HitBox)) {
        window.location.href = "./party-planet/party-planet.html";
    } else if (compareLocation(shipHitBox, planet2HitBox)) {
        window.location.href = "./snake-planet/snake-planet.html";
    } else if (compareLocation(shipHitBox, planet3HitBox)) {
        window.location.href = "./insult-planet/insult-planet.html";
    } else if (compareLocation(shipHitBox, planet4HitBox)) {
        window.location.href = "./chat-room-planet/chat-room-planet.html";
    } else if (compareLocation(shipHitBox, planet5HitBox)) {
        window.location.href = "./connect-4-planet/connect-4-planet.html";
    } else {
        console.log("No planet found")
    }

}

function compareLocation(ship, planet) {
    if(ship.x > planet.x && ship.y > planet.y && ship.right < planet.right && ship.bottom < planet.bottom){
        return true;
    }

}
