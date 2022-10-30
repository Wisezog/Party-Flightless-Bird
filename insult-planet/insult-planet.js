'use strict';

var currentIndex = 0; // Records the current/previous index to ensure the next is different.

function insult(file) {
<<<<<<< HEAD
    let insults = file.toString().split('\n')
=======
  
    let insults = file.toString().split("\n")
>>>>>>> 19d5f1cf8ea48c10f74d8ffa2abef9ea78894a0a

    let index = Math.floor(Math.random() * insults.length);

    while (index == currentIndex) {
        console.log(index);
        index = Math.floor(Math.random() * insults.length);
   
    }
    currentIndex = index;

    return insults[index];
}