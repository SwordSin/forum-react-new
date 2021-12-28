import request from '@/unit/api'
import { PostsDataType, TitleListPageType } from '@/typings/shims'


export function getBoardInfoList() {
  return request({
    url: '/board/getBoardInfo',
    method: 'get'
  })
}

export function savePostsInfoApi(postsInfo:PostsDataType) {
  return request({
    url: '/board/savePostsInfo',
    method: 'post',
    data: postsInfo
  })
}


// 获取postsList
export function getPostsPageInfoApi(params: TitleListPageType) {
  return request({
    url: '/board/getPagePostsInfo',
    method: 'get',
    params: params
  })
}

export function getPostsPageInfoOneApi(boardId: number) {
  return request({
    url: '/board/getPostsInfoOne',
    method: 'get',
    params: {
      postsId: boardId
    }
  })
}