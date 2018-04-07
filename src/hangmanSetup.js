// Testing hangman
// Trying something new...
// Fingers crossed!
console.log('---> Init hangman <--- ');

// setup an array with words
const vocabulary = ["wolverine","thanos","drstrange","groot","rocket","antman","ironman","thor","spiderman"];
console.log('---> vocabulary: '+ vocabulary);

// Pick one word from the array
//const wordToGuess = vocabulary[Math.floor(Math.random() * vocabulary.length)];
const wordToGuess = "thor";
console.log('---> wordToGuess: '+ wordToGuess);

// Enter (temp) guessed letter
const guess = "r";
console.log('---> guess: '+ guess);

// Later: Create buttons + function to set inputLetter > send to showGuess

const displayWord = [];

// Check if entered letter (string) is in wordToGuess
function showGuess(word, inputLetter) {
  let showWord = [];
  let letters = word.split("");
  letters.filter(function(letter) {
    if(inputLetter.indexOf(letter) > -1) {
      // if it's in there push the letter into the array on the right place
      showWord.push(letter);
    }
    else showWord.push("_")
    // if not, just push _ into the array
  })
  showWord = showWord.join(" ");
  return showWord;
  displayWord = showWord;

}


console.log('---> showGuess: '+ showGuess(wordToGuess,guess));
console.log('---> displayWord'+ displayWord);
console.log('---> showGuess: '+ showGuess(wordToGuess,"t"));
console.log('---> displayWord'+ displayWord);















//var foundAtIndex = currentWord.indexOf(Guess);
