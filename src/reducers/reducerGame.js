// export default function (){
//   return
//     {
//       displayWord: "chicken",
//       isEverythingGuessed: false,
//       guesses: 0,
//       badGuesses: 0
//     }
//
//
// }

const initialState = {
  displayWord: "",
  wordToGuess: "",
  isEverythingGuessed: false,
  guesses: 0,
  badGuesses: 0
};

export default (state = initialState, { type, payload } = {}) => {
  return state
}
