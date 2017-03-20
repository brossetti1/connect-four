import React from 'react'
import {selectColumn} from '../api'

export default class ColumnSelector extends React.Component {

  constructor(props) {
    super(props)
    this.updateBoard = this.updateBoard.bind(this);
  }

  updateBoard() {
    // set the current token identifier
    const currentToken = this.props.currentPlayer == 1 ? 1 : 2

    selectColumn(columnPick).then((response) => {
      debugger
      const currentPlayer = response.player_one_turn == true ? 1 : 2
      this.setState({
        currentPlayer: currentPlayer,
      })
    })
  }

  render() {
    return (
      <div className="board__row">
        <div className="board__column-selector" onClick={() => this.updateBoard(1)}></div>
        <div className="board__column-selector" onClick={() => this.updateBoard(2)}></div>
        <div className="board__column-selector" onClick={() => this.updateBoard(3)}></div>
        <div className="board__column-selector" onClick={() => this.updateBoard(4)}></div>
        <div className="board__column-selector" onClick={() => this.updateBoard(5)}></div>
        <div className="board__column-selector" onClick={() => this.updateBoard(6)}></div>
        <div className="board__column-selector" onClick={() => this.updateBoard(7)}></div>
      </div>
    );
  }
}
