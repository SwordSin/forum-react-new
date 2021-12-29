import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.scss'

import { Provider } from 'react-redux'
// import store from './store'
import store from './store'
import { persistor } from './store'

// 引入PersistGate标签 实现redux
import { PersistGate } from 'redux-persist/lib/integration/react'

// antd中文
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

ReactDOM.render(
  // react的严格模式
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={zh_CN}>
          <App></App>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

