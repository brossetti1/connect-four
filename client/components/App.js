import React from 'react';
import Title from './Title';
import Board from './Board';
import PlayerPanel from './PlayerPanel';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Board />
        <PlayerPanel />
      </div>
    )
  }
}

