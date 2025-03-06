//Pseudocode plan
//prompt player to play either rocks papers or scissors
//if not one of the options ask for it again
//get player's answer and store it in a variable
//make function randomizing computer's answer and return it
//compare player's and computer's anwers with another function
//decide winner in last function



//prompts user for input then sends it to checker
function askInput(){
    let playerInput = prompt("What do you want to play: Rock, Paper, or Scissors?").toLowerCase();
    checkInput(playerInput);
}

//receives user input from askInput, and checks if it matches the avaiable inputs
function checkInput(answer){
   if (answer == "rock" || answer == "paper" || answer == "scissors" ){
    alert("good answer");
   }
   else{
    alert("wrong try again");
    askInput();
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



console.log(getComputerChoice())
console.log(askInput())