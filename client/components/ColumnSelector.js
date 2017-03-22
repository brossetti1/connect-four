import React from 'react'

export default class ColumnSelector extends React.Component {

  render() {
    return (
      <div className="board__row">
        <div className="board__column-selector" data-column='1'></div>
        <div className="board__column-selector" data-column='2'></div>
        <div className="board__column-selector" data-column='3'></div>
        <div className="board__column-selector" data-column='4'></div>
        <div className="board__column-selector" data-column='5'></div>
        <div className="board__column-selector" data-column='6'></div>
        <div className="board__column-selector" data-column='7'></div>
      </div>
    );
  }
}
