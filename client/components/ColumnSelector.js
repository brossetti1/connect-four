import React from 'react'
import {selectColumn} from '../api'

export default class ColumnSelector extends React.Component {

  constructor(props) {
    super(props)
    this.updateBoard = this.updateBoard.bind(this);
  }

  render() {
    return (
      <div className="board__row board__row-height">
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
