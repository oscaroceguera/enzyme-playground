import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input, {UnconnectedInput} from './input'

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive().dive()
  // console.log(wrapper.debug())
  return wrapper
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    })
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
  })
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)
    })
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})


describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success

    expect(successProp).toBe(success)
  })
  test('guessword action creator is a function prop', ()  => {
    const wrapper = setup()
    const guessWordProp = wrapper.instance().props.guessWord

    expect(guessWordProp).toBeInstanceOf(Function)
  })
})

describe('guessWord action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train'
  beforeEach(() => {
    guessWordMock = jest.fn()

    const props = {
      guessedWord: guessWordMock
    }

     // set up app component with guessWordMock as the guessWord prop
    wrapper = shallow(<UnconnectedInput {...props} />)

    // add value to input box
    wrapper.setState({ currentGuess: guessedWord })
    // simulate clicked
    const submitBtn = findByTestAttr(wrapper, 'submit-button')
    submitBtn.simulate('click', { preventDefault() {} })

  })
  test('calls guessWord when button is clicked', () => {
    // check to see if mock ran
    const guessWordCallCount = guessWordMock.mock.calls.length
    expect(guessWordCallCount).toBe(1)
  })

  test('calls guessWord with input value as argument', () => {
    console.log(guessWordMock.mock.calls)
    const guessWordArg = guessWordMock.mock.calls[0][0]
    expect(guessWordArg).toBe(guessedWord)
  })

  test('input box clears on submit', () => {
    expect(wrapper.state('currentGuess')).toBe('')
  })
})