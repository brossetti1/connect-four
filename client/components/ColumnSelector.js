import React from 'react'

export default class ColumnSelector extends React.Component {

  render() {
    return (
      <div className="board__row">
        <div className="board__column-selector"></div>
        <div className="board__column-selector"></div>
        <div className="board__column-selector"></div>
        <div className="board__column-selector"></div>
        <div className="board__column-selector"></div>
        <div className="board__column-selector"></div>
        <div className="board__column-selector"></div>
      </div>
    );
  }
}
