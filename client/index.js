import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener('DOMContentLoaded', function() {
  let componentEntry = document.getElementById('connect4-entry');

  componentEntry && ReactDOM.render(<App />, componentEntry);
});