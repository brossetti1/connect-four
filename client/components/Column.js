import React from 'react'

class Column extends React.Component {

  renderToken(index) {
    if(this.props.column) {
      if(this.props.column[index] == 1){
        return "token-1"
      } else if(this.props.column[index] == 2) {
        return "token-2"
      }
    }
  }

  render() {
    return (
      <div className="board__column">
        <div className={`board__column-row ${this.renderToken(1)}`}></div>
        <div className={`board__column-row ${this.renderToken(2)}`}></div>
        <div className={`board__column-row ${this.renderToken(3)}`}></div>
        <div className={`board__column-row ${this.renderToken(4)}`}></div>
        <div className={`board__column-row ${this.renderToken(5)}`}></div>
        <div className={`board__column-row ${this.renderToken(6)}`}></div>
      </div>
    );
  }
}

export default Column;