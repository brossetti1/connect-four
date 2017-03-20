import React from 'react'
import InlineEdit from 'react-edit-inline'
import PlayerTurn from './PlayerTurn'

export default class PlayerPanel extends React.Component {

  constructor(props){
    super(props);
    this.dataChanged = this.dataChanged.bind(this);
    this.state = {
      playerOneName: 'Player One',
      playerTwoName: 'Player Two',
      showTurn: false
    }
  }

  dataChanged(data) {
    this.setState(data)
  }

  render() {
    return(
      <div className="players__container">
        <div className="players__player-one">
          <InlineEdit
            className="players__name"
            activeClassName="players__editing"
            text={this.state.playerOneName}
            paramName="playerOneName"
            change={this.dataChanged}
          />
          <span>(click to edit)</span>
        </div>
          
        <PlayerTurn />

        <div className="players__player-two">
          <InlineEdit
            className="players__name"
            activeClassName="players__editing"
            text={this.state.playerTwoName}
            paramName="playerTwoName"
            change={this.dataChanged}
          />
          <span>(click to edit)</span>
        </div>
      </div>
    )
  }
}