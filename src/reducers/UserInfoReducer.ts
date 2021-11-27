import { UserInfoType } from '@/shims'
const initUserInfoData: UserInfoType = {
    userId: 0,
    username: '',
    email: '',
    netName: '',
    password: '',
    headImg: '',
    param1: '',
    param2: '',
    param3: '',
    param4: ''
}

export default function UserInfoReducer(state:UserInfoType = initUserInfoData, action: any) {
    switch (action.type) {
        case 'SET_USER_INFO':
          return {
            ...state,
            ...action.payload
          }
        default:
          return state
      }
}