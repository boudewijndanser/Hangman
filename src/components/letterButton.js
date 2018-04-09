//client/src/components/BuyProductButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../css/letterButton.css'
import { GUESSING_LETTER } from '../actions/index'
import { PassTheLetter } from '../actions/index'

export class LetterButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    guessedLetter: PropTypes.string

  }
// label + letter via props

  render() {
    return (
      <button
        onClick={()=>this.props.onClick(this.props.guessedLetter)}
      >
        { this.props.label }
      </button>
    )
  }
}
