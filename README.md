# candyCrushSaga
************
1st commit - Initial commit
************
2nd commit - Set up background image, custom font, and game board design
************
3rd commit - Initialize game logic, define candy colors, set starting score

#JS 
Defining candy colors: We create an array candies that holds the possible colors for the candies. This array will be used later to randomly assign a candy color to each cell on the game board.
Defining board dimensions: We initialize the board array, which will hold the individual cells of the game. Both rows and columns are set to 9, so the board will be a 9x9 grid, consisting of 81 cells in total. These cells will hold the different candy colors.
Setting the starting score: The variable score is initialized to 0, keeping track of the player's score as they match candies. Each time a match is made, the score will increase based on the number of matched candies.
Game initialization: The window.onload function is used to initialize the game as soon as the page loads. It calls the startGame() function, which ensures the game is ready to be played immediately.
Starting the game loop: The setInterval function is used to continuously execute key game functions every 100 milliseconds. 
This function includes:  - crushCandy() to check for candy matches,
                         - slideCandy() to move candies down the board,
                         - generateCandy() to generate new candies and fill empty spaces.
*******************************
