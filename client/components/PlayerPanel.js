import React from 'react'
import InlineEdit from 'react-edit-inline'

export default class PlayerPanel extends React.Component {

  constructor(props){
    super(props);
    this.dataChanged = this.dataChanged.bind(this);
    this.state = {
      player_one_name: 'Player One',
      player_two_name: 'Player Two',
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
            text={this.state.player_one_name}
            paramName="player_one_name"
            change={this.dataChanged}
          />
          <span>(click to edit)</span>
        </div>
          
        <div className="players__turn">
          <h3>Player One's turn</h3>
          <span>👈</span>
        </div>

      <div className="players__player-two">
        <InlineEdit
          className="players__name"
          activeClassName="players__editing"
          text={this.state.player_two_name}
          paramName="player_two_name"
          change={this.dataChanged}
        />
        <span>(click to edit)</span>
      </div>
    </div>
    )
  }
}