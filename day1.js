var input = "L1, R3, R1, L5, L2, L5, R4, L2, R2, R2, L2, R1, L5, R3, L4, L1, L2, R3, R5, L2, R5, L1, R2, L5, R4, R2, R2, L1, L1, R1, L3, L1, R1, L3, R5, R3, R3, L4, R4, L2, L4, R1, R1, L193, R2, L1, R54, R1, L1, R71, L4, R3, R191, R3, R2, L4, R3, R2, L2, L4, L5, R4, R1, L2, L2, L3, L2, L1, R4, R1, R5, R3, L5, R3, R4, L2, R3, L1, L3, L3, L5, L1, L3, L3, L1, R3, L3, L2, R1, L3, L1, R5, R4, R3, R2, R3, L1, L2, R4, L3, R1, L1, L1, R5, R2, R4, R5, L1, L1, R1, L2, L4, R3, L1, L3, R5, R4, R3, R3, L2, R2, L1, R4, R2, L3, L4, L2, R2, R2, L4, R3, R5, L2, R2, R4, R5, L2, L3, L2, R5, L4, L2, R3, L5, R2, L1, R1, R3, R3, L5, L2, L2, R5";

var steps = input.split (", "); // create array of steps
var currentDirection = 0;
var currentCoordiantes = [0,0];

steps.forEach(function(step) {
    var turn = step.substring(0,1);
    var distance = parseInt(step.substring(1));
    console.log("direction to turn: " + turn);
    console.log("distance: " + distance);

    currentDirection = calcualteNewDirection(currentDirection, turn);

    console.log("Current direction: " + currentDirection);
    
    currentCoordiantes = calculateNewCoordinate(currentCoordiantes, distance, currentDirection);

    console.log("Current Coordinates: " + currentCoordiantes);

    console.log("distance travelled: " + (Math.abs(currentCoordiantes[0]) + Math.abs (currentCoordiantes[1])));
});


function calculateNewCoordinate(fromtCoordiantes, distance, currentDirection){
    var newCoordinates;

    if (currentDirection % 2){ // odd
        newCoordinates = [fromtCoordiantes[0], fromtCoordiantes[1] + (currentDirection == 1 ? distance : -distance)];
    }
    else {
         newCoordinates = [fromtCoordiantes[0] + (currentDirection == 0 ? distance : -distance), fromtCoordiantes[1]];
    }

    return newCoordinates;
}


function calcualteNewDirection(currentDirection, turn){
    var turnAmmount = turn == "L" ? -1 : 1;

    var newDirection = currentDirection + turnAmmount; 

    if (newDirection == 4) newDirection = 0;
    if (newDirection == -1) newDirection = 3;

    return newDirection;
}
