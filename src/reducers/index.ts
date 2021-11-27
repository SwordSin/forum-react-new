import { combineReducers } from 'redux'
import userInfoReduce from './myReudcer'

// 通过combineReducers把多个reducer进行合并
const rootReducers = combineReducers({
  user: userInfoReduce
})

export default rootReducers
