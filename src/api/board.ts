import request from '@/unit/api'


export function getBoardInfoList() {
    return request({
      url: '/board/getBoardInfo',
      method: 'get'
    })
  }