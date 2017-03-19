import React from 'react';
import Column from './Column'

export default class Board extends React.Component {

  render(){
    return(
      <div className="board">
        <Column/>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
        <Column/>
      </div>
    )
  }
}

