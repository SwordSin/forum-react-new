import { UserInfoType } from '@/shims'

// reduces 
const userInfoReducer = (state:UserInfoType, action: {type: string, payload: UserInfoType}) => {
    return {...state, ...action.payload}
}

export default userInfoReducer
