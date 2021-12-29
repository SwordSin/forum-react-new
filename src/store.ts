// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import reducers from './reducers/index'

// yige ceshi 

// // //  只要用上 persistStore 和 autoRehydrate 就行啦
// // import {persistStore, persistReducer} from 'redux-persist'
// // //  存储机制，可换成cookie等其他机制
// // import storage  from  'redux-persist/lib/storage'

// // const persistConfig = {
// //   key: 'root',
// //   storage: storage
// // }

// // const myPersistReducer = persistReducer(persistConfig, reducers)


// const _reducers = combineReducers(reducers)
// // 开启chrome redux-dev-tool调试
// // const extension = window.__REDUX_DEVTOOLS_EXTENSION__;
// // const devTool = extension ? extension() : f => f;

// const enhancer = compose(
//   applyMiddleware(thunk)
//   // devTool
// )

// export default createStore(_reducers, enhancer)


import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

// store持久化
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage
}

const myPersistReducer = persistReducer(persistConfig, rootReducers)
const store = createStore(myPersistReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
export default store

// const store = createStore(
//   rootReducers,
//   compose(
//     applyMiddleware(...[thunk])
//   )
// ) // 创建一个storage

// export default store
