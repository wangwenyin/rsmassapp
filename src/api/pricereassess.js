import request from '@/utils/request'
// import request from '@/utils/requestLocal_price'

// 获取复核申请任务列表
export function getTasks(params) {
  return request({
    url: '/dispute/apply',
    method: 'get',
    params
  })
}

// 提交数据审核结果
export function audit(data) {
  return request({
    url: '/dispute/audit/audit',
    method: 'post',
    data
  })
}

// 从复核评估进入终审(价格不调整)
export function toResult(data) {
  return request({
    url: '/dispute/audit/check',
    method: 'post',
    data
  })
}

// 提交终审结果
export function finalAudit(data) {
  return request({
    url: '/dispute/audit/final',
    method: 'post',
    data
  })
}

// 获取日志信息
export function getLogs(params) {
  return request({
    url: `/dispute/log/${params.id}`,
    method: 'get'
  })
}

// 根据查勘任务id获取查勘信息
export function getSurveyData(id) {
  return request({
    url: `/survey/tasks/${id}`,
    method: 'get'
  })
}

// 进入个案估价系统
export function toAppraisal(data) {
  return request({
    url: '/dispute/audit/appraisal',
    method: 'post',
    data
  })
}

// 创建查勘任务
export function createSurveyTask(data) {
  return request({
    url: '/dispute/audit/dissurvey',
    method: 'post',
    data
  })
}

// 根据fhid获取调整前单价
export function getUnitValue(id) {
  return request({
    url: `/dispute/apply/${id}`,
    method: 'get'
  })
}

// 获取个案估价报告
export function getReport(id) {
  return request({
    url: `/singleapp/report/download/${id}`,
    method: 'get'
  })
}

// 获取个案估价报告内容
export function getReportContent(id) {
  return request({
    url: `/singleapp/report/${id}`,
    method: 'get'
  })
}

// 评估价格上线
export function priceOnline(data) {
  return request({
    url: '/dispute/audit/priceOnline',
    method: 'post',
    data
  })
}

// 管理员删除复核任务
export function deleteTask(data) {
  return request({
    url: '/dispute/apply/delete',
    method: 'post',
    data
  })
}
