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
    checkInput(playerInput)
}

//receives user input from askInput, and checks if it matches the avaiable inputs
function checkInput(answer){
   if (answer == "rock" || answer == "paper" || answer == "scissors" ){
    alert("good answer")
   }
   else{
    alert("wrong try again")
    askInput()
   }
}

askInput()