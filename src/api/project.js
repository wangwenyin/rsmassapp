import request from '@/utils/request'

// 查询项目列表信息
// params = { xmmc: '项目名称', xzq: '行政区', yt1: '用途', zbdm: '组别代码', zddm: '宗地代码，即宗地号' }
export function projects(params) {
  return request({
    url: '/data/projects',
    method: 'get',
    params
  })
}

// 根据项目代码查询其商业影响因素数据
// params = { xmdm: '项目代码'}
export function projectFactorsCommerce(params) {
  return request({
    url: '/data/project/factors/commerce',
    method: 'get',
    params
  })
}
// 根据项目代码查询其住宅影响因素数据
export function projectFactorsResidential(yt, xmdm) {
  return request({
    url: `/data/project/factorQuantification/${yt}/${xmdm}`,
    method: 'get'
  })
}
// 根据项目代码获取项目基本信息
//  xmdm: '项目代码'
export function projectInfo(xmdm) {
  return request({
    url: `/data/projects/${xmdm}`,
    method: 'get'
  })
}
// 根据项目代码查询其历次评估价格
// params = { xmdm: '项目代码'}
export function projectValue(params) {
  return request({
    url: '/data/project/value',
    method: 'get',
    params
  })
}
// 根据项目代码查询其内部所有楼栋列表
// params = { xmdm: '项目代码'}
export function projectBuildings(params) {
  return request({
    url: '/data/project/buildings',
    method: 'get',
    params
  })
}

// 根据项目代码更新项目基本信息
// params = { xmdm: '项目代码'}
export function UpdateProjectInfo(xmdm, data) {
  return request({
    url: `/data/projects/${xmdm}`,
    method: 'put',
    data
  })
}

// 根据项目代码更新其住宅影响因素数据
export function UpdateFactorsResidential(yt, xmdm, data) {
  return request({
    url: `/data/project/factorQuantification/${yt}/${xmdm}`,
    method: 'put',
    data
  })
}
// 跟据项目代码和用途获取组别内其他项目信息
export function GetSameGroup(yt, xmdm) {
  return request({
    url: `/data/project/sameGroup/${yt}/${xmdm}`,
    method: 'get'
  })
}
