import React from 'react'

class Column extends React.Component {
  constructor(props) {
    super(props)
  }

  renderRow(index) {
    if(this.props.column[0][index] === 1){
      return(<div className={"board__column-row token-1"}></div>)
    } else if(this.props.column[0][index] === 2) {
      return(<div className={"board__column-row token-2"}></div>)
    } else {
      return(<div className={"board__column-row"}></div>)
    }
  }

  render() {
    return (
      <div className="board__column">
        {this.renderRow(5)}
        {this.renderRow(4)}
        {this.renderRow(3)}
        {this.renderRow(2)}
        {this.renderRow(1)}
        {this.renderRow(0)}
      </div>
    );
  }
}

export default Column;