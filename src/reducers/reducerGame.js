
import {wordToGuess,hangmanArray,displayShow} from '../lib/game2'
const chosenWord = wordToGuess;
let dashes = displayShow;

const initialState = {
  displayWord: dashes,
  wordToGuess: chosenWord,
  isEverythingGuessed: false,
  guesses: 0,
  badGuesses: 0
};

export default (state = initialState, { type, payload } = {}) => {
  return state
}
