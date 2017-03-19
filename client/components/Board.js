import React from 'react';
import Column from './Column'
import ColumnSelectorRow from './ColumnSelectorRow'

export default class Board extends React.Component {

  render(){
    return(
      <div className="board__container">
        <ColumnSelectorRow/>
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

