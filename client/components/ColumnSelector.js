import React from 'react'

export default class ColumnSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gameIdentifier: this.props.gameIdentifier
    }
  }

  render() {
    return (
      <div className="board__row board__row-height">
        <div className="board__column-selector" onClick={() => this.props.updateBoard(1)}></div>
        <div className="board__column-selector" onClick={() => this.props.updateBoard(2)}></div>
        <div className="board__column-selector" onClick={() => this.props.updateBoard(3)}></div>
        <div className="board__column-selector" onClick={() => this.props.updateBoard(4)}></div>
        <div className="board__column-selector" onClick={() => this.props.updateBoard(5)}></div>
        <div className="board__column-selector" onClick={() => this.props.updateBoard(6)}></div>
        <div className="board__column-selector" onClick={() => this.props.updateBoard(7)}></div>
      </div>
    );
  }
}
