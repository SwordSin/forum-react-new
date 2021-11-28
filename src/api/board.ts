import request from '@/unit/api'
import { PostsDataType } from '@/shims'


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