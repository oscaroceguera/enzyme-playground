import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)
  const [error, setError] = React.useState()

  const clickBtn = (type) => () => {
    setError()
    let value;

    if (type === 'increment') {
      value = count + 1
    } else {
      if (count === 0) {
        return setError('The counter can not go below zero')
      }
      value = count - 1
    }

    setCount(value)
  }

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter iis currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      <h3 data-test='error'>{error}</h3>
      <button
        data-test='increment-button'
        onClick={clickBtn('increment')}
      >
        Increment Counter
      </button>
      <button
        data-test='decrement-button'
        onClick={clickBtn('decrement')}
      >
        Decrement Counter
      </button>
    </div>
  );
}

export default App;
