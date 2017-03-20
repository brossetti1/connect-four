import React from 'react'
import {createGame} from '../api'
   
export default class playerTurn extends React.Component {
  constructor(props) {
    super(props);
    this.createGame = this.createGame.bind(this);
  }
  
  
  createGame() {
    createGame().then((response) => {
      debugger
      const currentPlayer = response.player_one_turn == true ? 1 : 2
      this.setState({
        currentPlayer: currentPlayer,
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if(JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) // Check if it's a new user, you can also use some unique, like the ID
    {
           this.updateUser();
    }
  }

  render() {
    if(this.props.showTurn) {
      if(this.props.currentPlayer === 1) {
        return(
          <div className="players__turn">
            <h3>Player One's turn</h3>
            <span>
              👉 
              <span className="token-1"></span>
              👈
            </span>
          </div>
        )
      }  
      if(this.props.currentPlayer === 2){
        return(
          <div className="players__turn">
            <h3>{this.props.player_two_name} turn</h3>
            <span>
              👉 
              <span className="token-2"></span>
              👈
            </span>
          </div>
        )
      }
    } else {
      return(
        <div className="players__turn">
          <button onClick={() => createGame()}>Start Game!</button>
        </div>
      )
    }
  }
}

