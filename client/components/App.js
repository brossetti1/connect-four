import React from 'react'
import Title from './Title'
import ColumnSelector from './ColumnSelector'
import Board from './Board'
import PlayerPanel from './PlayerPanel'



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameIdentifier: '',
      currentPlayer: 1,
      tokenColumn: '',
    };
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
        <PlayerPanel />
      </div>
    )
  }
}

