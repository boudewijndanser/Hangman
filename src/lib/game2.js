
// setup an array with words
export let badGuesses = 0;
export let guesses = 0;
export let guess = [];

//prep the shit
export let vocabulary = createVocabulary(); //get  vocabulary array
export let wordToGuess = pickWord(vocabulary); //get the word
export let hangmanArray = getHangmanInfo(wordToGuess); //transform word into array with some extra data
export let bodyParts = ["","foundation","pole up","hangbar","crossbar","rope","tie the noose","Step on up","insert head","hang out..." ];
export let displayShow = getDisplayWord(hangmanArray); // get the dashes for starting...
//start gameloop

function createVocabulary(){
  return ["wolverine","thanos","drstrange","groot","rocket","antman","ironman","thor","spiderman"];
}

function pickWord(vocabulary){
  //return 'thor';
  return vocabulary[Math.floor(Math.random() * vocabulary.length)];
}

function getHangmanInfo(wordToGuess){
  //convert string to array and
  //use map on array to create letters + guessed
  let hangmanInfo = wordToGuess.split("").map(x => [x,0]);
  //return mapped stuff
  console.log('---> hangmanInfo: ', hangmanInfo);
  return hangmanInfo;
}

function getDisplayWord(hangmanArray){
  // Which letters are guessed?
  console.log('---> hangmanArray in getDisplayWord: ', hangmanArray);
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
