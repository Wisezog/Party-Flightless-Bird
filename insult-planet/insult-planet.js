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

/**
 * Checks if location of the alien and ship
 * @param {*} alien 
 * @param {*} button 
 * @returns 
 */
 function compareLocation(alien, button) {
    if (alien.x > ship.x && alien.y > ship.y && alien.right < ship.right && alien.bottom < ship.bottom) {
        return true;
    }

}