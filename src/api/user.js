/**
 * 用户相关请求模块
 */
import request from '@/utils/request'
import store from '@/store'

export const login = (mobile,code) => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data:{
      mobile,code
    }
  })
}

export const sendCode = (mobile) => {
  return request({
    method: 'POST',
    url: `/v1_0/sms/codes/${mobile}`,
  })
}

export const getUserInfo = () => {
  return request({
    url: '/v1_0/user',
  })
}
