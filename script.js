//Pseudocode plan
//create global variables for score
//prompt player to play either rocks papers or scissors
//if not one of the options ask for it again
//get player's answer and store it in a variable
//make function randomizing computer's answer and return it
//compare player's and computer's anwers with another function
//decide winner in last function
//add score to winner and announce it



let playerScore = 0 
let comScore = 0

//prompts user for input then sends it to checker

function askInput(){
    let playerInput = prompt("What do you want to play: Rock, Paper, or Scissors?").toLowerCase();


    //receives user input from askInput, and checks if it matches the avaiable inputs
     if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors" ){
        return playerInput
      }
      else{
           alert("wrong try again");
      }
    
    }


function getComputerChoice(){
    //math floor picks the number thats between 0 and the max, in this case 3
    //math random then selects one of those random numbers
    let rng = Math.floor(Math.random() * 3)

    let comChoice = undefined;

    if (rng == 0){
        comChoice = "rock"
    }
    else if (rng == 1){
        comChoice = "paper"
    }
    else if (rng == 2){
        comChoice = "scissors"
    }

    return comChoice
}

//checks both answers and then announces who won
function roundResult(userIn, comIn){
    //tie checked first, if not a tie continue to next checks
    if (userIn == comIn){
        console.log("It's a tie");
    }
    //checks if player won(or wasnt beaten in this case) with any of the 3 options, if didn't win
    //continue to next check
    //if player won, add one point to score
    else if (userIn == "rock" && comIn != "paper"){
        console.log("You win! rock beats scissors")
        playerScore++
    }
    else if (userIn == "paper" && comIn != "scissors"){
        console.log("You win! paper beats rock")
        playerScore++
    }
    else if (userIn == "scissors" && comIn != "rock"){
        console.log("You win! scissors beats rocks")
        playerScore++
    }
    //if every other check fails it logically means that computer won
    //if computer won, add one point to score
    else{
        console.log("Computer won! " + userIn + " beats " + comIn)
        comScore++
    }

    console.log("Player: "+ playerScore + ", Computer: " + comScore)
}



//starts function to check results, it then asks user for input(userIn), and the gets computer's
//inpute from getComputerChoice for (comIn)
roundResult(askInput(), getComputerChoice())