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
5th commit - Validation check and reset board

#JS
The checkValid() function does horizontal and vertical check. 

Horizontal Check:
The first loop (for (let r = 0; r < rows; r++)) goes through each row of the board
The second loop (for (let c = 0; c < columns - 2; c++)) goes through each column within that row, except the last 2 columns. By stopping at columns - 2, we ensure that there will always be 3 cells available to check for a match (the cells at positions c, c+1, and c+2)

Vertical Check:
The first loop (for (let c = 0; c < columns; c++)) goes through each column of the board
The second loop (for (let r = 0; r < rows - 2; r++)) goes through each row, except the last 2 rows. By stopping at rows - 2, we ensure there will always be 3 cells available to check for a mach (the cells at positions r, r+1, and r+2)

Then, we assign variables to the three cells we want to compare. We check if three consecutive candies in a horizontal or vertical line have the same image based on their image source (src) and ensure they are not blank. If both conditions are met, the function returns true, indicating a valid match, otherwise the function returns false 

resetBoard() function is reseting the board array, clear its current state, and then restart the game
***********************
6th commit - Add functionality for candy movement and automatic refill

#JS
In the slideCandy() function the loop starts from the bottom of the column (rows - 1) and moves upwards (r >= 0)
For each cell, it checks if the candy in that position is not blank by examining the src property
If the candy is not blank, it is moved to the position tracked by index, which represents the next available row below any other non-blank candy
After moving the candy, index is decremented by 1, so the next non-blank candy will be placed just below the previously moved candy
So, yhe function ensures that candies above the cleared spaces fall down to fill in the gaps

The generateCandy() function checks the top row of each column for blank cells and replaces them with random candies. When candies are cleared, new ones are generated at the top to fill the spaces
************************
7th commit - Add drag and drop logic for candy selection and swapping

#JS
dragStart() function stores the candy being dragged in the selectedCandy variable when the drag starts

dragOver() function allows the dragged candy to be dropped by preventing the default behavior

dragEnter() function prepares the target area to accept the dragged candy by preventing the default behavior

dragLeave() function triggered when the dragged candy leaves the target area

dragDrop() function records the target candy where the dragged candy is dropped and stores it in targetCandy

dragEnd() function checks if the selected or target candy is blank and stops the process if so. Checks if the two candies are validSwaps (left, right, up, down). If the swap is valid, the candies are swapped. If the swap is invalid, the candies are swapped back and a shake effect is triggered on the cells
**************************