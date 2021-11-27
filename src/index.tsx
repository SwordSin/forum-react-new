import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.scss'

import { Provider } from 'react-redux'
// import store from './store'
import store from './store'
import { persistor } from './store'

// 引入PersistGate标签，和persistor
import { PersistGate } from 'redux-persist/lib/integration/react'

ReactDOM.render(
  // react的严格模式
  <React.StrictMode>
    <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
        <App></App>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
