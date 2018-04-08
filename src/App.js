import React from 'react';
import GameInfo from './containers/gameInfo'
import DisplayWord from './containers/displayWord'
import './css/App.css';

const App = () => (
      <div className="App">
        <h1 className="title">Hangman!</h1>
        <br />
        <br />
        <DisplayWord />
        <br />
        <br />
        <GameInfo />

      </div>
);



export default App;
