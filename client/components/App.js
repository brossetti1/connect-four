import React from 'react';
import Title from './Title';
import Board from './Board';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Board />
      </div>
    )
  }
}

