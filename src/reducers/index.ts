

// export { default as userInfo } from './UserInfoReducer'
import { combineReducers } from 'redux'
import userInfo from './UserInfoReducer'


// 通过combineReducers把多个reducer进行合并
const rootReducers = combineReducers({
    userInfo: userInfo
})

export default rootReducers
