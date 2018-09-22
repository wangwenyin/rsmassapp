// 比例分析相关接口
import request from '@/utils/requestTest'

// 完成比率分析，并提交检验审核结论
// params = { id: '任务编号', result: '结论'
export function submitResult(data) {
  return request({
    url: '/v1/test/ratio',
    method: 'post',
    data
  })
}

// 生成比率分析报告并下载
export function downloadReopot(id) {
  return request({
    url: `/v1/test/ratio/download/${id}`,
    method: 'get'
  })
}

// 根据任务编号保存比率分析结论
// data:{method:分析方式, item:保存的项,  comment:	保存内容}
export function saveRatioResult(id, data) {
  return request({
    url: `/v1/test/ratio/${id}`,
    method: 'put',
    data
  })
}

// 根据任务编号获取比率分析结果
export function getRatioResult(id) {
  return request({
    url: `/v1/test/ratio/${id}`,
    method: 'get'
  })
}
