import request from '@/utils/request'

export function getCases(params) {
  return request({
    url: '/case/cases',
    method: 'get',
    params
  })
}
