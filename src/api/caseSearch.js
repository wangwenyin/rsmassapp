import request from '@/utils/request'

// 获取项目详情数据
export function getCases(params) {
  return request({
    url: '/case/cases',
    method: 'get',
    params
  })
}

// 获取行政区数据
export function getXzqs(params) {
  return request({
    url: '/case/xzq',
    method: 'get',
    params
  })
}

// 街道办
export function getJdbs(params) {
  return request({
    url: '/case/jdb',
    method: 'get',
    params
  })
}

// 项目
export function getProjects(params) {
  return request({
    url: '/case/project',
    method: 'get',
    params
  })
}

// 根据角色获取用户
export function getUsers(params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}
