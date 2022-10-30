//Listens for key presses. 
window.addEventListener("keydown", detectKey);



/**
 * Checks which key was pressed, and calls any associated functionality.
 * @param {*} event the event of a key press being detected. 
 */
function detectKey(event) {

    switch (event.keyCode) {
        case 13:
            //Enter pressed
            console.log("Enter Pressed");
            askQuestion();
            break;
    }
}

function askQuestion() {
    let input = document.getElementById("Question");
    let inputValue = input.value;
    let output = ["yes", "no", "sometimes", "maybe"];
    let answer = document.getElementById("Answer");
    if (inputValue.endsWith("?")) {
        let index = Math.floor(Math.random() * output.length);
        answer.innerHTML = output[index];
    }else{
        answer.innerHTML = "Ask a question"
    }


    input.value = "";

}