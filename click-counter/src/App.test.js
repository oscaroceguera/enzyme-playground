import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import App from './App';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
});

test('renders button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
});

test('renders counter display', () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper, 'counter-display')
  expect(counter.length).toBe(1)
});

test('counter starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe("0")
});

test('click on button increments counter display', () => {
  // find the button
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  
  // click the button
  button.simulate('click')

  // find the display, and test that number has been increment
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("1")
});

test('click on button decrement counter display', () => {
  // find the button
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'decrement-button')
  
  // click the button
  button.simulate('click')

  // find the display, and test that number has been increment
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("0")
});

test('Show Zero error message', () => {
  // find the button
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'decrement-button')
  
  // click the button
  button.simulate('click')


  const error = findByTestAttr(wrapper, "error").text()
  expect(error).toBe("The counter can not go below zero")
});

test('Hide Zero error message when increment button is clicked', () => {
  const wrapper = setup()
  const decrementBtn = findByTestAttr(wrapper, 'decrement-button')
  const incrementBtn = findByTestAttr(wrapper, 'increment-button')
  
  decrementBtn.simulate('click')

  const error = findByTestAttr(wrapper, "error").text()
  expect(error).toBe("The counter can not go below zero")

  incrementBtn.simulate('click')
  const error2 = findByTestAttr(wrapper, "error").text()
  expect(error2).toBe("")
});
