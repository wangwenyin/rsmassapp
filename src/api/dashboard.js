import request from '@/utils/request'
// 获取某个用户的待办任务列表
// params = { username: 用户名，非中文名}
export function todoTasks(params) {
  return request({
    url: '/todoTasks',
    method: 'get',
    params
  })
}

export function notices(params) {
  return request({
    url: '/sysmanagement/notices',
    method: 'get',
    params
  })
}

export function messages(params) {
  return request({
    url: '/sysmanagement/messages',
    method: 'get',
    params
  })
}

export function priceIndex(id) {
  return request({
    url: `/parameters/priceindexs/${id}`,
    method: 'get'
  })
}

export function realEstate(params) {
  return request({
    url: '/statistic/realEstate',
    method: 'get',
    params
  })
}

export function subjectProperty(params) {
  return request({
    url: '/statistic/subjectProperty',
    method: 'get',
    params
  })
}

export function cases(params) {
  return request({
    url: '/statistic/cases',
    method: 'get',
    params
  })
}

