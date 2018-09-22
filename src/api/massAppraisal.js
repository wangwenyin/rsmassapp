import request from '@/utils/request'
// import request from '@/utils/requestLocal_price'

/* 参数管理 */

// 获取参数列表任务
export function getParamtask(params) {
  return request({
    url: '/cost/paramtask',
    method: 'get',
    params
  })
}

// 获取使用年期修正系数参数信息
export function getTermFactor() {
  return request({
    url: '/cost/term',
    method: 'get'
  })
}

// 获取容积率修正系数参数信息
export function getRjlFactor() {
  return request({
    url: '/cost/rjl',
    method: 'get'
  })
}

// 获取价格地图参数列表
export function getCommunities(params) {
  return request({
    url: '/cost/baseprice',
    method: 'get',
    params
  })
}

// 获取建安造价参数信息
export function getHcDetail() {
  return request({
    url: '/cost/const',
    method: 'get'
  })
}

// 获取建筑物折旧参数信息
export function getBdDetail() {
  return request({
    url: '/cost/building',
    method: 'get'
  })
}

// 获取成本参数信息
export function getCpDetail() {
  return request({
    url: '/cost/list',
    method: 'get'
  })
}

