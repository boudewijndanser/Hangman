// src/containers/gameInfo.js
import React, { Component } from 'react'
// import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../css/gameInfo.css'

class GameInfo extends Component {


  render(){
    return(
      <div>
        <p>wordToGuess:</p> <h4>{this.props.gameinfo.wordToGuess}</h4>
        <p>isEverythingGuessed: {this.props.gameinfo.isEverythingGuessed}</p>
        <p>guesses: {this.props.gameinfo.guesses}</p>
        <p>badGuesses: {this.props.gameinfo.badGuesses}</p>
        <p>guessedLetter: {this.props.gameinfo.guessedLetter}</p>
      </div>
    )

  }

}

function mapStateToProps(state){
  return {
    gameinfo: state.reducerGame
  };
}

export default connect(mapStateToProps)(GameInfo);
