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

function checkValid() {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns - 2; c++) {
        let candy1 = board[r][c];
        let candy2 = board[r][c + 1];
        let candy3 = board[r][c + 2];
        if (
          candy1.src == candy2.src &&
          candy2.src == candy3.src &&
          !candy1.src.includes("blank")
        ) {
          return true;
        }
      }
    }
  
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows - 2; r++) {
        let candy1 = board[r][c];
        let candy2 = board[r + 1][c];
        let candy3 = board[r + 2][c];
        if (
          candy1.src == candy2.src &&
          candy2.src == candy3.src &&
          !candy1.src.includes("blank")
        ) {
          return true;
        }
      }
    }
    return false;
}

function resetBoard() {
    board = [];
    document.getElementById("board").innerHTML = "";
    startGame();
}

function slideCandy() {
    for (let c = 0; c < columns; c++) {
      let ind = rows - 1;
  
      for (let r = rows - 1; r >= 0; r--) {
        if (!board[r][c].src.includes("blank")) {
          board[ind][c].src = board[r][c].src;
          if (ind !== r) {
            board[r][c].src = "./images/blank.png";
          }
          ind -= 1;
        }
      }
    }
}
  
function generateCandy() {
    for (let c = 0; c < columns; c++) {
      if (board[0][c].src.includes("blank")) {
        board[0][c].src = "./images/" + randomCandy() + ".png";
      }
    }
}

function dragStart() {
    selectedCandy = this;
}
  
function dragOver(e) {
    e.preventDefault();
}
  
function dragEnter(e) {
    e.preventDefault();
}
  
function dragLeave() {}
  
function dragDrop() {
    targetCandy = this;
}

function dragEnd() {
    if (selectedCandy.src.includes("blank") || targetCandy.src.includes("blank")) {
      return;
    }
  
    let currCoords = selectedCandy.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);
  
    let otherCoords = targetCandy.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);
  
    let moveLeft = c2 == c - 1 && r == r2;
    let moveRight = c2 == c + 1 && r == r2;
  
    let moveUp = r2 == r - 1 && c == c2;
    let moveDown = r2 == r + 1 && c == c2;
  
    let isValidSwap = moveLeft || moveRight || moveUp || moveDown;
  
    if (isValidSwap) {
      let currImg = selectedCandy.src;
      let otherImg = targetCandy.src;
      selectedCandy.src = otherImg;
      targetCandy.src = currImg;
  
      let validMove = checkValid();
      if (!validMove) {
        let currImg = selectedCandy.src;
        let otherImg = targetCandy.src;
        selectedCandy.src = otherImg;
        targetCandy.src = currImg;
  
        shakeCells(selectedCandy, targetCandy);
      }
    }
}


function crushCandy() {
    let matched = true;
    while (matched) {
      matched = false;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 2; c++) {
          let candy = board[r][c];
          let matchCount = 1;
  
          while (c + matchCount < columns && board[r][c + matchCount].src === candy.src && !candy.src.includes("blank")) {
            matchCount++;
          }
  
          if (matchCount >= 3) {
            for (let i = 0; i < matchCount; i++) {
              board[r][c + i].src = "./images/blank.png";
            }
            score += matchCount * 10;
            matched = true;
  
            if (matchCount === 3) {
              playCandySound(matchCount);
            } else if (matchCount > 3) {
              playCandySound(matchCount);
            }
          }
        }
      }
  
      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 2; r++) {
          let candy = board[r][c];
          let matchCount = 1;
  
          while (r + matchCount < rows && board[r + matchCount][c].src === candy.src && !candy.src.includes("blank")) {
            matchCount++;
          }
  
          if (matchCount >= 3) {
            for (let i = 0; i < matchCount; i++) {
              board[r + i][c].src = "./images/blank.png";
            }
            score += matchCount * 10; 
            matched = true;
  
            if (matchCount === 3) {
              playCandySound(matchCount);
            } else if (matchCount > 3) {
              playCandySound(matchCount);
            }
          }
        }
      }
    }

    document.getElementById("score").innerText = score + "/500"; 
  
    crushLongerMatches();
}