

// export { default as userInfo } from './UserInfoReducer'
import { combineReducers } from 'redux'
import userInfo from './UserInfoReducer'
import boardInfo from './BoardInfoReducer'
import titleList from './TitlistPageReducer'


// 通过combineReducers把多个reducer进行合并
const rootReducers = combineReducers({
    userInfo: userInfo,
    boardInfo: boardInfo,
    titleList: titleList
})

export default rootReducers
