import request from '@/unit/api'

import { RegisterDataType, LoginDataType } from '@/typings/shims'

import {
  // 将密码转化为密文
  decryptPassword
 } from '@/unit/security'
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
  decryptPassword(data)
  return request({
    url: '/register-info/registerInfo',
    method: 'post',
    data: data
  })
}

export function login(data:LoginDataType) {
  // decryptPassword(data)
  return request({
    url: '/register-info/login',
    method: 'post',
    data: data
  })
}

export function getAccountOneKey(resultKey: string, queryKey: string, queryValue:string) {
  return request({
    url: '/register-info/getOneAccountKey',
    method: 'get',
    params: {
      queryKey: queryKey,
      queryValue: queryValue,
      resultKey: resultKey
    }
  })
}