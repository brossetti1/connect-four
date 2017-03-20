import React from 'react'

class Column extends React.Component {

  render() {
    const columnId = `column-${this.props.column}`
    return (
      <div className="board__column" id={columnId}>
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