import React from 'react'
import ReactDOM from 'react-dom'

// import App from './App'
import Header from '@/view/header/Header'
import Content from '@/view/content/Content'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Content></Content>
    {/* <App></App> */}
  </React.StrictMode>,
  document.getElementById('root')
)
