import { BoardInfoType } from '@/typings/shims'

const InitBoardInfoData:BoardInfoType[] = [{
    boardId: 0, 
    boardName: '',
    param1: '',
    param2: '',
    param3: '',
    param4: ''
}]

export default function BoardInfoReducer(state:BoardInfoType[] = InitBoardInfoData, action: any) {
    switch (action.type) {
        case 'SET_BOARD_INFO':
          // debugger
          return {
            // ...state,
            ...action.payload
          }
        default:
          return state
      }
}