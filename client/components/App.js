import React from 'react'
import Title from './Title'
import Board from './Board'
import PlayerPanel from './PlayerPanel'
import {createGame, selectColumn} from '../api'


export default class App extends React.Component {
  constructor() {
    super();
    this.startGame   = this.startGame.bind(this)
    this.updateBoard = this.updateBoard.bind(this)
    this.state = {
      gameIdentifier: 0,
      currentPlayer: 0,
      tokenColumn: '',
      showTurn: false,
      board: []
    };
  }

  startGame() {
    createGame().then((response) => {
      const attributes     = response.data.attributes
      const currentPlayer  = attributes["player-one-turn"] == true ? 1 : 2
  
      this.setState({
        currentPlayer: currentPlayer,
        showTurn: true,
        gameIdentifier: response.data.id,
        board: attributes.board
      })
    })
  }


  updateBoard(col) {
    selectColumn(this.state.gameIdentifier, col).then((response) => {
      const attributes    = response.data.attributes
      const currentPlayer = attributes["player-one-turn"] === true ? 1 : 2

      this.setState({
        currentPlayer: currentPlayer,
        board: attributes.board 
      })
    })
  }

  render() {
    return (
      <div>
        <Title />
        <Board 
          currentBoard={this.state.board} 
          currentPlayer={this.state.currentPlayer} 
          gameIdentifier={this.state.gameIdentifier}
          showColumnSelector={this.state.showTurn}
          updateBoard={this.updateBoard}/>
        <PlayerPanel 
          startGame={this.startGame} 
          currentPlayer={this.state.currentPlayer}/>
      </div>
    )
  }
}

