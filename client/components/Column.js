import React from 'react'

class Column extends React.Component {

  render() {
    return (
      <div className="board__column">
        <div className="board__column-row"></div>
        <div className="board__column-row"></div>
        <div className="board__column-row"></div>
        <div className="board__column-row"></div>
        <div className="board__column-row"></div>
        <div className="board__column-row"></div>
      </div>
    );
  }
}

export default Column;