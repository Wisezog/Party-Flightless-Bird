'use strict'

var currentIndex = 0; // Records the current/previous index to ensure the next is different.

function loadParty(){

    let index = Math.floor(Math.random() * insults.length);

    const array = ['firstSong.mp3', ''];

    while (index == currentIndex) {
        index = Math.floor(Math.random() * array.length);
    }
    currentIndex = index;

    commenceParty(array[index]);
}

function commenceParty(song){
    var audio = new Audio(song);
    audio.play();
}