// src/containers/gameInfo.js
import React, { Component } from 'react'
// import React from 'react'
//import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import { PassTheLetter } from '../actions/index'
import '../css/gameInfo.css'
import { GUESSING_LETTER } from '../actions/types'
//import { LetterButton } from '../components/letterButton'

const A = 65 // ASCII character code

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }

  handleClick(e) {
      var sending = e.target.dataset.letter;
      this.props.dispatch(PassTheLetter(sending))

    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} data-letter={letter} onClick={this.handleClick}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    gameinfo: state.reducerGame
  };
}

export default connect(mapStateToProps)(Controls);
