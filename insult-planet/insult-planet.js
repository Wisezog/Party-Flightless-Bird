'use strict'

var currentIndex = 0; // Records the current/previous index to ensure the next is different.

function insult(file) {
    let insults = file.toString().split('\n')

    let index = Math.floor(Math.random() * insults.length);
    while (index == currentIndex) {
        index = Math.floor(Math.random() * insults.length);
    }
    currentIndex = index;

    return insults[index];
}