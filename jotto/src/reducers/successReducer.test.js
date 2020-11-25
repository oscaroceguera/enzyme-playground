import { actionTypes } from '../actions'
import successReducer from './successReducer'

test('returns default initial state of false whe no action passed', () => {
  const newState = successReducer(undefined, { })
  expect(newState).toBe(false)
})
test('returns state ot true upon receeiving action of type CORRECT_GUESS', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
  expect(newState).toBe(true)
})

