import request from '@/utils/request'
// 查询户列表信息
// param={xmmc:"项目名称(必填)",ldmc:"楼栋名称(必填)", hh:"户号(必填)", xzq:"行政区", yt1:"用途",zbdm:"组别代码"}
export function units(params) {
  return request({
    url: '/data/units',
    method: 'get',
    params
  })
}
// 根据户代码获取其影响因素数据
// param={hdm:"户代码"}
export function unitFactors(params) {
  return request({
    url: '/data/unit/factors',
    method: 'get',
    params
  })
}
// 根据户代码获取户基本信息
// param={hdm:"户代码"}
export function unitInfo(params) {
  return request({
    url: `/data/units/${params.hdm}`,
    method: 'get',
    params
  })
}

// 根据户代码查询其历次评估价格
// param={hdm:"户代码"}
export function unitValue(params) {
  return request({
    url: '/data/unit/value',
    method: 'get',
    params
  })
}

// 更新户基本信息
export function UpdateHouseInfo(hdm, data) {
  return request({
    url: `/data/units/${hdm}`,
    method: 'put',
    data
  })
}

// 更新户的影响因素数据（以住宅为例）
export function UpdateUnitFactors(data) {
  return request({
    url: 'data/unit/factors',
    method: 'post',
    data
  })
}
