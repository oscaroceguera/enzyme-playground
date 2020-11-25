import { actionTypes } from '../actions'

const guessedReducer = (state = [], action) => {
  switch(action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload]
    default:
      return state
  }
}

export default guessedReducer