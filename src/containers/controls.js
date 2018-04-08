// src/containers/gameInfo.js
import React, { Component } from 'react'
// import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../css/gameInfo.css'

class Controls extends Component {

  function handleKeyPress(e){
    console.log('keypress: ', e.key);
    //this.setState =

  }

  render(){
    return(
      <div>

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
