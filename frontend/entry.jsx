import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root />, rootEl);
});