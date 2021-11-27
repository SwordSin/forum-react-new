import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.scss'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  // react的严格模式
  <React.StrictMode>
    <Provider store={ store }>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
