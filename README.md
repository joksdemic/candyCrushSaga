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
4th commit - Add startGame function to create board and handle drag and drop events

#JS
Inside the startGame() function, we first create an outer loop to iterate over the rows, and an inner loop to iterate over the columns. This nested loop is used to create the game grid, which will be made up of image elements(candies).

For each row and column, a new image element is created using document.createElement("img").
The image is given a class cell, so we could manipulate it in css file.
A unique ID is assigned to each cell, ensuring that each cell can be easily identified.
The src of the image is set to a random candy image. 
The function randomCandy() returns a string that represents the image file name.
Each cell has several event listeners attached to handle drag-and-drop interactions. These events manage the drag-and-drop actions for the cells within the game. Events:

    dragstart: Fired when dragging starts.
    dragover: Fired when a dragged element is over another element.
    dragenter: Fired when the dragged element enters a valid drop target.
    dragleave: Fired when the dragged element leaves a valid drop target.
    drop: Fired when the dragged element is dropped.
    dragend: Fired when the drag operation ends.

Each created cell is added to the board container using document.getElementById("board").append(cell)

Once the board is generated, the function checkInitialMatches() is called to check if there are any initial matches in the grid. If matches are found, the resetBoard() function is called to reset the board. If no matches are found, a message "Board is valid at start" is logged to the console.

We also log the board array to the console to verify that everything is working correctly
************************

