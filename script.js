var candies = ["red","orange","yellow","green","blue","purple"];
var board = [];
var rows = 9;
var columns = 9;
var score = 0;
var selectedCandy;
var targetCandy;

window.onload = function() {
    startGame();
    document.getElementById("score").innerText = "0/500"; 

    window.setInterval(function() {
        crushCandy();
        slideCandy();
        generateCandy();
    }, 100);
};

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)];
}

function startGame() {
    for(let r = 0; r < rows; r++) {
        let row = [];
        for(let c = 0; c < columns; c++) {
            let cell = document.createElement("img");
            cell.classList.add("cell");
            cell.id = r.toString() + "-" + c.toString();
            cell.src = "./images/" + randomCandy() + ".png";

            cell.addEventListener("dragstart", dragStart);
            cell.addEventListener("dragover", dragOver);
            cell.addEventListener("dragenter", dragEnter);
            cell.addEventListener("dragleave", dragLeave);
            cell.addEventListener("drop", dragDrop);
            cell.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(cell);
            row.push(cell);            
        }
        board.push(row);
    }

    if(checkInitialMatches()) {
        resetBoard();
    } else {
        console.log("Board is valid at start");
    }
    console.log(board);
}

function checkInitialMatches() {
    return checkValid();
}