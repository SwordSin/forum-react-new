

// export { default as userInfo } from './UserInfoReducer'
import { combineReducers } from 'redux'
import userInfo from './UserInfoReducer'
import boardInfo from './BoardInfoReducer'


// 通过combineReducers把多个reducer进行合并
const rootReducers = combineReducers({
    userInfo: userInfo,
    boardInfo: boardInfo
})

export default rootReducers
