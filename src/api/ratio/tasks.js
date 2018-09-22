// 比例分析相关接口
import request from '@/utils/requestTest'

// 获取价值时点列表
// params = { id: '任务编号', result: '结论'
export function getValuedate() {
  return request({
    url: '/v1/test/valuedate',
    method: 'get'
  })
}

// 删除检验审核任务
// id: '任务ID'
export function deleteTestTask(id) {
  return request({
    url: `/v1/test/tasks/${id}`,
    method: 'delete'
  })
}

// 根据任务编号获取检验审核任务
export function getTestTaskById(taskId) {
  return request({
    url: `/v1/test/tasks/${taskId}`,
    method: 'get'
  })
}

// 保存检验审核任务，以及提交任务进入下一步
export function saveTestTasks(data) {
  return request({
    url: '/v1/test/tasks',
    method: 'post',
    data
  })
}

// 获取检验审核任务列表
// params  {name:任务名称  creator:创建人员  usage:物业用途  offset:偏移量}
export function getTestTaskList(params) {
  return request({
    url: '/v1/test/tasks',
    method: 'get',
    params
  })
}

// 获取价格指数列表信息
// params  {name:指数名  propertyType:物业类型  propertyUsage:物业用途  timeType:时间类型 regionType：区域类型}
export function getPriceIndexs(params) {
  return request({
    url: '/v1/parameters/priceindexs',
    method: 'get',
    params
  })
}
