import React from 'react'
import Column from './Column'
import ColumnSelector from './ColumnSelector'

export default class Board extends React.Component {

  render(){
    return(
      <div className="board__container">
        <ColumnSelector/>
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

