import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from 'react-router-dom'

if (module.hot) module.hot.accept();

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>, document.getElementById('root')
)