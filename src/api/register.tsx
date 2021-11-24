import request from '@/unit/api'
/**
    export interface RegisterInfo {
        username: string;
        password: string;
        netName: string;
        email: string;
        phone: string;
    }
*/
export function registerUser(data:any) {
    console.log('输出传送的文件')
    console.log(data)
  return request({
    url: '/userInfo/registerInfo',
    method: 'post',
    data: data
  })
}