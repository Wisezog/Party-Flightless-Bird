window.addEventListener("keydown", detectKey);
//Listens for key presses. 


/**
 * Checks which key was pressed, and calls any associated functionality.
 * @param {*} event the event of a key press being detected. 
 */
function detectKey(event) {
    switch (event.keyCode) {
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
            console.log("Space Pressed");
            break;
    }
}

/**
 * This method moves the alien in a specific direction.
 * @param {*} direction in which the alien will be moved in.
 */
function moveAlien(direction) {
    let alien = document.getElementById("alien");
    let positionX = Number((alien.style.left).replace("px", ""));
    //Retrieves current x-coordinate of the alien.

    const moveAmount = 10;
    //Increase this value to increase movement speed

    switch (direction) {
        case "left":
            positionX = positionX - moveAmount;
            console.log("left: " + positionX);
            alien.style.left = positionX + "px";
            //Move the alien left.
            break;
        case "right":
            positionX = positionX + moveAmount;
            console.log("right: " + positionX);
            alien.style.left = positionX + "px";
            //Move the alien right.
            break;
    }
}