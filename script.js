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
