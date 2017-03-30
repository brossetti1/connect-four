import React from 'react'
import Column from './Column'
import ColumnSelector from './ColumnSelector'


export default class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    if(this.props.showColumnSelector === true) {
      return(
        <div className="board__container">
          <ColumnSelector updateBoard={this.props.updateBoard} gameIdentifier={this.props.gameIdentifier}/>
          <div className="board__columns-container">
            <Column column={[this.props.currentBoard[0]]}/>
            <Column column={[this.props.currentBoard[1]]}/>
            <Column column={[this.props.currentBoard[2]]}/>
            <Column column={[this.props.currentBoard[3]]}/>
            <Column column={[this.props.currentBoard[4]]}/>
            <Column column={[this.props.currentBoard[5]]}/>
            <Column column={[this.props.currentBoard[6]]}/>
          </div>
        </div>
      ) 
    } else {
      return(
        <div className="board__container">
          <div className="board__row-height"></div>
          <div className="board__columns-container">
            <Column column={[[0,0,0,0,0,0]]}/>
            <Column column={[[0,0,0,0,0,0]]}/>
            <Column column={[[0,0,0,0,0,0]]}/>
            <Column column={[[0,0,0,0,0,0]]}/>
            <Column column={[[0,0,0,0,0,0]]}/>
            <Column column={[[0,0,0,0,0,0]]}/>
            <Column column={[[0,0,0,0,0,0]]}/>
          </div>
        </div>
      )
    }
  }
}

