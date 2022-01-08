import request from '@/unit/api'

export function savePicApi(postsInfo:{file: File}) {
  return request({
    url: '/editor/savePic',
    method: 'post',
    data: postsInfo
  })
}
