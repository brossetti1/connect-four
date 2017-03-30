import React from 'react'
   
export default class playerTurn extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps(nextProps) {
  //   if(JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) // Check if it's a new user, you can also use some unique, like the ID
  //   {
  //     this.updateUser();
  //   }
  // }

  render() {
    if(this.props.currentPlayer === 0) {
      return(
        <div className="players__turn">
          <button onClick={() => this.props.startGame()}>Start Game!</button>
        </div>
      )
    } else if (this.props.currentPlayer === 1) {
      return(
        <div className="players__turn">
          <h3>{this.props.playerOneName}'s turn</h3>
          <div className='player__wrapper'>
            <span>👈</span>
            <div className="token-1"></div>
            <span>👈</span>
          </div>
        </div>
      )
    } else if (this.props.currentPlayer === 2) {
      return(
        <div className="players__turn">
          <h3>{this.props.playerTwoName}'s turn</h3>
          <div className='player__wrapper'>
            <span>👉</span>
            <div className="token-2"></div>
            <span>👉</span>
          </div>
        </div>
      )
    }
  }
}

