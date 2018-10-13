import request from '@/utils/request'

// 获取配套设施分类
export function GetClassData() {
  return request({
    url: '/space/classData',
    method: 'get'
  })
}

// 查询配套信息
// params = { subclass: '配套类别，可传多个参数，英文逗号分隔' ,x:项目地理坐标x  ,y:项目地理坐标y}
export function GetspaceMatching(params) {
  return request({
    url: '/space/matching',
    method: 'get',
    params
  })
}
