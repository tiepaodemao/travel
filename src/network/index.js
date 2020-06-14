import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'http://localhost:7777',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log('错误')
  })
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log('错误')
  })
  return instance(config)
}

