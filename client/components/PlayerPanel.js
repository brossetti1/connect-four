import React from 'react'

export default class PlayerPanel extends React.Component {

  render() {
    return(
      <div className="players__container">
        <div className="players__player-one">
          <h1>Player One</h1>
        </div>
        <div className="players__turn">
          <h3>Player One's turn</h3>
          <span>👈</span>
        </div>
        <div className="players__player-two">
          <h1>Player Two</h1>
        </div>
      </div>
    )
  }
}