import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title'

document.addEventListener('DOMContentLoaded', function() {
  let componentEntry = document.getElementById('connect4-entry');

  componentEntry && ReactDOM.render(<Title/>, componentEntry);
});