import request from '@/utils/requestLocal'

// 根据机构名称模糊查询机构名称列表
// params = { jgmc: '机构名称', jgfl: '机构分类(0：调度中心，1：调查机构)' }
export function organizations(params) {
  return request({
    url: '/survey/organizationsByJgmc',
    method: 'get',
    params
  })
}
// 更新人员角色信息
// params = { id: '人员主键(必填)',jsbm: '角色编码，多个用分号（;）分割，0：查勘，1：审核(必填,可为空)',jsmc: '角色名称，多个用分号（;）(必填,可为空)'}
export function psnlRole(params) {
  return request({
    url: `/survey/psnlRole/{params.id}`,
    method: 'put',
    params
  })
}
// 根据楼栋代码查询其内部所有户列表
// params = { lddm: '楼栋代码'}
export function buildingsUnits(params) {
  return request({
    url: '/data/building/units',
    method: 'get',
    params
  })
}
// 根据楼栋代码查询其住宅影响因素数据
// params = { lddm: '楼栋代码'}
export function buildingsFactorsResidential(params) {
  return request({
    url: '/data/building/factors/residential',
    method: 'get',
    params
  })
}

// 根据楼栋代码查询其历次评估价格
// params = { lddm: '楼栋代码'}
export function buildingValue(params) {
  return request({
    url: 'data/building/value',
    method: 'get',
    params
  })
}

// 更新楼栋基本信息
export function UpdateBuildingInfo(lddm, data) {
  return request({
    url: `/data/buildings/${lddm}`,
    method: 'put',
    data
  })
}

// 更新楼栋住宅影响因素数据
export function UpdateBuildingFactorsResidential(data) {
  return request({
    url: '/data/building/factors/residential',
    method: 'post',
    data
  })
}
