// src/containers/displayWord.js
import React, { Component } from 'react'
// import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../css/displayWord.css'

class DisplayWord extends Component {


  render(){
    return(
      <div>
        <h2>{this.props.gameinfo.displayWord}</h2>
      </div>
    )

  }

}

function mapStateToProps(state){
  return {
    gameinfo: state.reducerGame
  };
}

export default connect(mapStateToProps)(DisplayWord);
