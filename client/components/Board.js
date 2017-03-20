import React from 'react'
import Column from './Column'
import ColumnSelector from './ColumnSelector'

export default class Board extends React.Component {

  render(){
    return(
      <div className="board__container">
        <ColumnSelector/>
        <div className="board__columns-container">
          <Column/>
          <Column/>
          <Column/>
          <Column/>
          <Column/>
          <Column/>
          <Column/>
        </div>
      </div>
    )
  }
}

