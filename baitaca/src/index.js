import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
if (container.hasChildNodes()) {
  hydrate(<App />, container)
} else {
  render(<App />, container);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
