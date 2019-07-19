//Global Variables
 let alphabet = [
     "a", "b", "c", 
     "d", "e", "f", 
     "g", "h", "i", 
     "j", "k", "l", 
     "m", "n", "o", 
     "p", "q", "r", 
     "s", "t", "u", 
     "v", "w", "x", 
     "y", "z"];
const words = ["alex", "madison", "kimberly", "robert"];
let rightGuess = [];
let wrongGuess = [];
let trysLeft = 10;
let generatedUnderscores = []

// Randomly picked words
let randomWord = words[Math.floor(Math.random() * words.length)];

// Generate underscores based on word
let underScoreWord = [];
for (let i = 0; i < randomWord.length; i++){
    underScoreWord[i] = "_ ";
    
}
console.log(underScoreWord);

// Check user's guess - push to according array.
document.onkeyup = function(x){
    let userGuess = x.key;

    if(randomWord.indexOf(userGuess) > -1) {
        rightGuess.push(userGuess);
        underScoreWord[randomWord.indexOf(userGuess)] = userGuess;
        // console.log(underScoreWord);
        if(underScoreWord.join("") === randomWord) {
            alert("You Win!");
        }
      

    } else {
        wrongGuess.push(userGuess);
        trysLeft--;
    }
    if(trysLeft === 0) {
        alert("You Lose! Refresh to try again.");
    }
    
    console.log(userGuess);
    console.log(wrongGuess);
    console.log(rightGuess);
    document.getElementById("underscores").innerText = underScoreWord;

    document.getElementById("wrongGuess").innerHTML = wrongGuess;
};
