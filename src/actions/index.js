import { GUESSING_LETTER } from './types'
export const PassTheLetter = (guessedLetter) => {

  return{
    type: "GUESSING_LETTER",
    payload: {
      guessedLetter: guessedLetter }
  }
};
