

function addWindowEvent(){
   window.addEventListener('keydown', function (e) {
    document.querySelector('a').innerHTML = `You pressed ${e.key}`;
  }, false); 
}


function detectKey(key){
    alert("here");
    switch(key.keyCode){
        case 38:
            //up arrow
            moveShip(up);
            break;
        case 40:
            //down arrow
            moveShip(down);
            break;
        case 37:
            //left arrow
            moveShip(left);
            break;
        case 39:
            //right arrow  
            moveShip(right);
            break;
        case 32:
            alert("Space pressed");
            break;             
    }
}

function moveShip(direction){
    let ship = document.getElementsByClassName("ship");
    let positionY = (ship.style.top).replace("px","");
    let positionX = (ship.style.left).replace("px","");

    switch(direction){
        case "up":
            ship.style.top = (positionY + 0.01) +"px";
            break;
        case "down":
            ship.style.top = (positionY - 0.01) +"px";
            break;
        case "left":
            ship.style.left = (positionX + 0.01) +"px";
            break;
        case "right":
            ship.style.left = (positionX - 0.01) +"px";
            break;
    }
}