import request from '@/unit/api'

import { RegisterDataType, LoginDataType } from '@/shims'

import { decryptPassword } from '@/unit/security'
/**
    export interface RegisterInfo {
        username: string;
        password: string;
        netName: string;
        email: string;
        phone: string;
    }
*/
export function registerUser(data:RegisterDataType) {
  // 将密码转化为密文
  decryptPassword(data)
  return request({
    url: '/userInfo/registerInfo',
    method: 'post',
    data: data
  })
}

export function login(data:LoginDataType) {
  // 将密码转化为密文
  decryptPassword(data)
  return request({
    url: '/userInfo/login',
    method: 'post',
    data: data
  })
}

export function getAccountOneKey(resultKey: string, queryKey: string, queryValue:string) {
  return request({
    url: '/userInfo/getOneAccountKey',
    method: 'get',
    params: {
      queryKey: queryKey,
      queryValue: queryValue,
      resultKey: resultKey
    }
  })
}