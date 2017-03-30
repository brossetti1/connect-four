import React from 'react'
import Column from './Column'
import ColumnSelector from './ColumnSelector'

export default class Board extends React.Component {
  constructor(props) {
    super(props)
  }


  updateBoard(col) {

    selectColumn(this.props.gameIdentifier, col).then((response) => {
      debugger
      const attributes    = response.data.attributes
      const currentPlayer = attributes["player-one-turn"] == true ? 1 : 2
      const currentBoard  = attributes.board 

      this.setState({
        currentPlayer: currentPlayer,
        board: currentBoard
      })
    })
  }

  currentColumn(n) {
    if(this.props.currentBoard.length > 1) {
      return this.props.currentBoard[n]
    }
  }

  render(){
    if(this.props.showTurn === true) {
      return(
        <div className="board__container">
          <ColumnSelector />
          <div className="board__columns-container">
            <Column column={this.currentColumn(1)}/>
            <Column column={this.currentColumn(2)}/>
            <Column column={this.currentColumn(3)}/>
            <Column column={this.currentColumn(4)}/>
            <Column column={this.currentColumn(5)}/>
            <Column column={this.currentColumn(6)}/>
            <Column column={this.currentColumn(7)}/>
          </div>
        </div>
      ) 
    } else {
      return(
        <div className="board__container">
          <div className="board__row-height"></div>
          <div className="board__columns-container">
            <Column column='1'/>
            <Column column='2'/>
            <Column column='3'/>
            <Column column='4'/>
            <Column column='5'/>
            <Column column='6'/>
            <Column column='7'/>
          </div>
        </div>
      )
    }
  }
}

