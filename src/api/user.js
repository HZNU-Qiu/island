import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/v1/token/signin',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/v1/user/detail',
    method: 'get'
  })
}

export function modifyInfo(data){
  return request({
    url:'/v1/user/modify',
    method:'post',
    data
  })
}