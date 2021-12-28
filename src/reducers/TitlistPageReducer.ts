import { TitleListPageType } from '@/typings/shims'

const TitleListPageData:TitleListPageType = {
    boardId: 1,
    page: 1,
    size: 20
}

export default function BoardInfoReducer(state:TitleListPageType = TitleListPageData, action: any) {
    switch (action.type) {
        case 'SET_TTITLE_LIST_INFO':
          return {
            ...state,
            ...action.payload
          }
        default:
          return state
      }
}