import React from 'react';

export default class PlayerPanel extends React.Component {

  render() {
    return(
      <div className="players__container">
        <div className="players__player-one">
          <h1>Player 1</h1>
        </div>
        <div className="players__turn">
          <span> 👈 </span>
        </div>
        <div className="players__player-two">
          <h1>Player 2</h1>
        </div>
      </div>
    )
  }
}