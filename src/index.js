import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import { render } from 'react-dom';

//const mountNode = document.getElementById('app');
//ReactDOM.render(<App name='Jane' />, mountNode);

render(
  //Provider passes down the redux store to our App/
      <React.StrictMode>
          <App />
      </React.StrictMode>
  ,document.getElementById('root')
  );
