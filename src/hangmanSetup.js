// Testing hangman
// Trying something new...
// Fingers crossed!
console.log('---> Init hangman <--- ');
console.log('');

function createVocabulary(){
  return ["wolverine","thanos","drstrange","groot","rocket","antman","ironman","thor","spiderman"];
}

function pickWord(vocabulary){
  //return 'thor';
  return vocabulary[Math.floor(Math.random() * vocabulary.length)];
}
//shamefully copied from SO
function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
}
function getGuess(){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  //simulate human waiting time
  sleep(1500);
  //alphabet = 'thoriq';

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getHangmanInfo(wordToGuess){
  //convert string to array and
  //use map on array to create letters + guessed
  let hangmanInfo = wordToGuess.split("").map(x => [x,0]);
  //return mapped stuff
  //console.log('hangmanInfo: ', hangmanInfo);
  return hangmanInfo;
}

function checkGuess(lastGuess, hangmanArray){
  hangmanArray.filter(function(info) {
      if(lastGuess.indexOf(info[0]) > -1) {
        info[1] = 1;
      }
    })
    //console.log('hangmanArray: ', hangmanArray);
    return hangmanArray;

}
function wasGuessBad(hangmanArray, lastGuess){
  var bad = 1;
  hangmanArray.filter(function(info) {
      if(lastGuess.indexOf(info[0]) > -1) {
        //console.log('1 goodGuess')
        bad = 0;
      }
  })
  return bad;
}
function tooManyBadGuesses(badguesses){
  return badguesses >= bodyParts.length-1;
}

function gameNotOver(hangmanArray, badguesses){
  if (tooManyBadGuesses(badguesses)) {
    return false;
  }
  //and also check for this
  if (isEverythingGuessed(hangmanArray)){
    return false
  }
  return true;
}

function isEverythingGuessed(hangmanArray){
  var calculateGoodGuesses = (accumulator, info) => accumulator + info[1];
   // function calculateGoodGuesses(accumulator, info) {
   //   return accumulator + info[1];
   // }
  var total = hangmanArray.reduce(calculateGoodGuesses, 0);
  //console.log("total ", total)
  if(total === hangmanArray.length) {
    return true;
  }
  return false;

  // var ok = 0;
  // hangmanArray.filter(function(info) {
  //   //check if guess is good.
  //     if(info[1] === 1) {
  //       ok += 1;
  //     }
  // })
  // if(ok === hangmanArray.length) {
  //   return true;
  // }
  // return false;

}



function getDisplayWord(hangmanArray){
  // Which letters are guessed?
  function getDisplayReducer(accumulator, info) {
    let letter = "";
    if(info[1]===0){
      letter = "_"
    }else{
      letter = info[0];
    }
    return accumulator + letter + " ";
  }

  let word = hangmanArray.reduce(getDisplayReducer,"");
  return word;
}

function showOutput(hangmanArray, guess, guesses, badguesses){
  console.log("guesses: " + guesses);
  console.log("badguesses: " + badguesses);
  //console.log("guess: ", guess);
  console.log("Last guessed letter: ",guess[(guess.length-1)]);

 //magic
 let word = getDisplayWord(hangmanArray);
  console.log(word);
  console.log(bodyParts[badguesses]);
  // imagename + badguesses
  console.log("");

}

// setup an array with words
let badguesses = 0;
let guesses = 0;
let guess = [];

//prep the shit
let vocabulary = createVocabulary(); //get  vocabulary array
let wordToGuess = pickWord(vocabulary); //get the word
let hangmanArray = getHangmanInfo(wordToGuess); //transform word into array with some extra data
let bodyParts = ["","foundation","pole up","hangbar","crossbar","rope","tie the noose","Step on up","insert head","hang out..." ];
//start gameloop
while(gameNotOver(hangmanArray, badguesses)) {
  let lastGuess = getGuess();//get the input from somewhere.
  guess.push(lastGuess);
  //console.log(lastGuess);

  hangmanArray = checkGuess(lastGuess, hangmanArray); //check the guess against the word and returns the new Array
  badguesses += wasGuessBad(hangmanArray, lastGuess);
  guesses += 1;
  showOutput(hangmanArray, guess, guesses, badguesses);
}
//out of loop, what happened?
if(isEverythingGuessed(hangmanArray)) {
  console.log("YOU WON!!!!!!!!");
} else if (tooManyBadGuesses(badguesses)){
  console.log("dangle dangle little guy..")
} else {
  console.log("wtf?");
}
//show game over or game won.

// Later: Create buttons + function to set inputLetter > send to showGuess
