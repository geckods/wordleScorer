// content.js

let totalGuesses = 0.0
let totalWords = 0.0
let failurePenalty = 10
let wordleScore = 0.0

guessMap = JSON.parse(localStorage.getItem("statistics"))["guesses"]

for(let i=1;i<=6;i++){
    totalGuesses+=i*guessMap[i]
    totalWords+=guessMap[i]
}

totalWords+=guessMap["fail"]
totalGuesses+=failurePenalty*guessMap["fail"]

wordleScore = totalGuesses/totalWords
console.log("Your wordle score is ")
console.log(wordleScore)

// chrome.runtime.sendMessage({
//     wordleScore:wordleScore
// });

chrome.storage.sync.set({"wordleScore":wordleScore}, function () {
    console.log("SET WORDLE SCORE!")
});