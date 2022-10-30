'use strict';

var currentIndex = 0; // Records the current/previous index to ensure the next is different.

function insult(file) {
    let insults = file.toString().split('\n')

    let index = Math.floor(Math.random() * insults.length);

    while (index == currentIndex) {
        console.log(index);
        index = Math.floor(Math.random() * insults.length);
   
    }
    currentIndex = index;

    return insults[index];
}

//Listens for key presses. 
window.addEventListener("keydown", detectKey);

/**
 * Checks which key was pressed, and calls any associated functionality.
 * @param {*} event the event of a key press being detected. 
 */
function detectKey(event) {
    switch (event.keyCode) {
        case 32:
            //Space bar
            pressButton()
            break;
    }
}

/**
 * Function to leave a planet and return to the hub.
 */
function pressButton() {
    //Gets the "hit box" or alien and planet.
    let alien = document.getElementById("alien");
    let alienHitBox = alien.getBoundingClientRect();

    let button = document.getElementById("button");
    let buttonHitBox = button.getBoundingClientRect();

    //Checks if button is inside the aliens hit box
    if (compareLocation( alienHitBox,buttonHitBox)) {
        insultDisplay();
    } else {
        console.log("Not near button")
    }

}

/**
 * This has been reused from other code so and ship = button
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
