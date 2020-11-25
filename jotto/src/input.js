import React from 'react'
import { connect } from 'react-redux'

import { guessWord } from './actions'

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGuess: ''
    }

    this.submitGuessedWord = this.submitGuessedWord.bind(this)
  }

  submitGuessedWord(e) {
    e.preventDefault()
    const {currentGuess} = this.state

    if (currentGuess && currentGuess.length > 0) {
      this.props.guessWord(currentGuess)
    }
    this.setState({ currentGuess: '' })
  }


  render() {
    const contents = this.props.success
      ? null
      : (
        <form className='form-line'>
          <input
            data-test='input-box'
            className='mb-12 mx-sm-3'
            type='text'
            placeholder='enter guess'
            valuue={this.state.currentGuess}
            onChange={e => this.setState({ currentGuess: e.target.value })}
          />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          type='submit'
          onClick={this.submitGuessedWord}
        >
          Submit
        </button>
        </form>
      )
    return (
      <div data-test='component-input'>
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)