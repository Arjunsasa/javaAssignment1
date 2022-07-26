var word = ["f", "o", "x"];

var guess = ["_", "_", "_"];

var userGuess = null

function predictLetter(userGuess){
    var userGuess = prompt("any letter from a to z");
    for(i = 0; i < word.length; i++){
        if(userGuess == word[i]) {
            guess[i] = (word[i])
            console.log("congrats you found a letter")
            console.log(guess)
        }
       }
    var result = JSON.stringify(word) == JSON.stringify(guess)
    if (result == true){
        console.log("You have found the word")
    }
    else {
        console.log("There are still letters to be found.")
    }
}

