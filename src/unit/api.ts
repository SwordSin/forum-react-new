import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 50000
})

// 设置拦截器
service.interceptors.response.use(response => {
  if (response.status !== 200) {
    console.log('发生错误')
    return Promise.reject(new Error(response.data || 'Error'))
  } else {
    return response
  }
})


export default service