//Pseudocode plan
//create global variables for score
//prompt player to play either rocks papers or scissors
//if not one of the options ask for it again
//get player's answer and store it in a variable
//make function randomizing computer's answer and return it
//compare player's and computer's anwers with another function
//decide winner in last function
//add score to winner and announce it

const max_round = 5;
let current_round = 0;

let playerScore = 0; 
let comScore = 0;


const div = document.querySelector("div")

const rockbtn = document.createElement("button");
rockbtn.textContent = "Rock"
div.appendChild(rockbtn);
const paperbtn = document.createElement("button");
paperbtn.textContent = "Paper"
div.appendChild(paperbtn);
const scibtn = document.createElement("button");
scibtn.textContent = "Scissors"
div.appendChild(scibtn);

rockbtn.addEventListener("click", () =>{
    roundManager("rock")
})
paperbtn.addEventListener("click", () =>{
    roundManager("paper")
})
scibtn.addEventListener("click",  () =>{
    roundManager("scissors")
})

const resultDisplay = document.createElement("div");
const resultText = document.createElement("p");
const roundMessage = document.createElement("p");
resultText.textContent = "COM: " + comScore + " Player: " + playerScore;
resultDisplay.appendChild(resultText);
resultDisplay.appendChild(roundMessage)
div.appendChild(resultDisplay)



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
        resultText.textContent = "COM: " + comScore + " Player: " + playerScore;
    }
    else if (userIn == "paper" && comIn != "scissors"){
        console.log("You win! paper beats rock")
        playerScore++
        resultText.textContent = "COM: " + comScore + " Player: " + playerScore;
    }
    else if (userIn == "scissors" && comIn != "rock"){
        console.log("You win! scissors beats rocks")
        playerScore++
        resultText.textContent = "COM: " + comScore + " Player: " + playerScore;
    }
    //if every other check fails it logically means that computer won
    //if computer won, add one point to score
    else{
        console.log("Computer won! " + userIn + " beats " + comIn)
        comScore++
        resultText.textContent = "COM: " + comScore + " Player: " + playerScore;
    }

    console.log("Player: "+ playerScore + ", Computer: " + comScore)
    return playerScore && comScore
}


//round manager controls how many rounds a game will have, in this case 5(max_round)
//current round starts at 0 and goes up by one every round, if it is not 5 it calls the function to ask for input and check
//results for round, then calls round manager again to check and see if round is still not 5
//kinda of like an while loop
function roundManager(choice){
    if (current_round != max_round){
        //starts function to check results, it then asks user for input(userIn), and the gets computer's
        //inpute from getComputerChoice for (comIn)
        roundResult(choice, getComputerChoice());
        current_round++;
    }
    //if current round is 5, checks whose score is bigger, then announces the winner,ending the script
    else{
        if(playerScore == comScore){
            console.log("The game ended in a tie!!")
        }
        else if(comScore > playerScore){
            console.log("The computer won the game!!")
        }
        else if(comScore < playerScore){
            console.log("The player won the game!!")
        }
    }

}

