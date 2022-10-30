//Listens for key presses. 
window.addEventListener("keydown", detectKey);

/**
 * Checks which key was pressed, and calls any associated functionality.
 * @param {*} event the event of a key press being detected. 
 */
function detectKey(event) {
    switch (event.keyCode) {
        case 38:
            //up arrow
            moveAlien("jump")
            break;
        case 37:
            //left arrow
            moveAlien("left");
            break;
        case 39:
            //right arrow  
            moveAlien("right");
            break;
        case 32:
            //Space bar
            leavePlanet()
            break;
    }
}

/**
 * This method moves the alien in a specific direction.
 * @param {*} direction in which the alien will be moved in.
 */
function moveAlien(direction) {
    //Retrieves current x-coordinate of the alien.
    let alien = document.getElementById("alien");
    let positionX = Number((alien.style.left).replace("%", ""));
    
    //Increase this value to increase movement speed
    const moveAmount = 0.5;
    

    switch (direction) {
        case "left":
            //Move the alien left.
            positionX = positionX - moveAmount;
            console.log("left: " + positionX);
            alien.style.left = positionX + "%";
            
            break;
        case "right":
            //Move the alien right.
            positionX = positionX + moveAmount;
            console.log("right: " + positionX);
            alien.style.left = positionX + "%";
    
            break;

    }
    alien.style.display = "block";
}

/**
 * Function to leave a planet and return to the hub.
 */
function leavePlanet() {
    //Gets the "hit box" or alien and planet.
    let alien = document.getElementById("alien");
    let alienHitBox = alien.getBoundingClientRect();

    let ship = document.getElementById("ship");
    let shipHitBox = ship.getBoundingClientRect();

    //Checks if alien is inside the ships hit box
    if (compareLocation(alienHitBox, shipHitBox)) {
        window.location.href = "../hub.html";
    } else {
        console.log("No ship found")
    }

}

/**
 * Checks if location of the alien and ship
 * @param {*} alien 
 * @param {*} ship 
 * @returns 
 */
function compareLocation(alien, ship) {
    if (alien.x > ship.x && alien.y > ship.y && alien.right < ship.right && alien.bottom < ship.bottom) {
        return true;
    }

}