import request from '@/unit/api'


export function getBoardInfoList() {
  console.log('执行一次boardApi')
    return request({
      url: '/board/getBoardInfo',
      method: 'get'
    })
  }