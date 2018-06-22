import request from '@/utils/request'
// 根据实体（项目、楼栋或户）编号查询实体图片
// params = { fdcdm: '房地产代码',fdclx:'房地产类型'}
export function imgs(params) {
  return request({
    url: '/imgs/',
    method: 'get',
    params
  })
}
// 根据图片代码获取图片
// zydm: '资源代码'
export function img(zydm) {
  return request({
    url: `/imgs/${zydm}`,
    method: 'get'
  })
}
// 删除实体图片
// zydm: '资源代码'
export function deleteimgs(zydm) {
  return request({
    url: `/imgs/${zydm}`,
    method: 'delete'
  })
}
// 上传实体图片
// params = { fdcdm: '房地产代码' ,fdclx:'房地产类型',zylx:'资源类型' ,file:'图片'}
export function uploadimgs(data) {
  return request({
    url: '/imgs',
    method: 'post',
    data
  })
}
// 更新项目、楼栋或者户的缩略图
// params = { fdcdm: '房地产代码' ,fdclx:'房地产类型',file:'图片'}
export function thumbnails(body) {
  return request({
    url: '/thumbnails',
    method: 'post',
    body
  })
}
