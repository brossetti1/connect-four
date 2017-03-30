import React from 'react'
import Title from './Title'
import ColumnSelector from './ColumnSelector'
import Board from './Board'
import PlayerPanel from './PlayerPanel'
import {createGame} from '../api'



export default class App extends React.Component {
  constructor() {
    super();
    this.startGame = this.startGame.bind(this)
    this.state = {
      gameIdentifier: 0,
      currentPlayer: 0,
      tokenColumn: ''
    };
  }

  startGame() {
    createGame().then((response) => {
      const attributes     = response.data.attributes
      const currentPlayer  = attributes["player-one-turn"] == true ? 1 : 2
      const gameIdentifier = response.data.id
  
      this.setState({
        currentPlayer: currentPlayer,
        showTurn: true,
        gameIdentifier: gameIdentifier
      })
    })
  }

  render() {
    return (
      <div>
        <Title />
        <div className="board__container">
          <ColumnSelector 
            currentPlayer={this.state.currentPlayer} 
            gameIdentifier={this.state.gameIdentifier}
          />
          <Board />
        </div>
        <PlayerPanel startGame={this.startGame} currentPlayer={this.state.currentPlayer}/>
      </div>
    )
  }
}

