document.addEventListener("DOMContentLoaded", ()=>{

    const squares = document.querySelectorAll(".grid div");
    const result = document.querySelector("#result");
    const displayCurrentPlayer = document.querySelector("#current-player");
    let currentPlayer = 1;
    let i = 0;

    squares.forEach(element => {
        element.textContent = i;
        i++
    });

    //add a button to each square so that it changes it's background to either blue or red

    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", () => {

            if(currentPlayer === 1 && squares[i].className === "available"){
                
                squares[i].setAttribute("class", "playerOne");
     
                //check for win function
                checkForWin("playerOne", i);

                if(i > 6){
                    let x = i - 7;
                    squares[x].setAttribute("class", "available");
                }     

                currentPlayer = 2;
                displayCurrentPlayer.textContent = 2;

            } else if(currentPlayer === 2 && squares[i].className === "available"){
                
                squares[i].setAttribute("class", "playerTwo");

                //check for win function
                checkForWin("playerTwo", i);


                if(i > 6){
                    let x = i - 7;
                    squares[x].setAttribute("class", "available");
                }

                currentPlayer = 1;
                displayCurrentPlayer.textContent = 1;

            }
        })


        function checkForWin(player, squareNumber){
            console.log(squareNumber);
            let hWin = true;
            let vWin = false;
            let dWin = false;
            let nextSquareNumber = squareNumber;
            nextSquareNumber++;
            console.log(player);
            console.log(nextSquareNumber);

            //check for horizontal win

            for(i = 0; i < 3; i++){

                if(squares[nextSquareNumber].contains != player){
                    hWin = false;
                }
                nextSquareNumber++;
            }



           //check for vertical win

            //check for diagnonal win

            if(hWin || vWin || dWin){
                alert(`Player ${currentPlayer} wins!`);
            }

        }
    };
});