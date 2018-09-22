// 个案估计 价格评估相关接口
import request from '@/utils/requestTest'

// 更新估价对象及其可比实例的说明和指数信息、评估价值和任务进度（价格评估页面保存和下一步按钮功能）
export function editappraisal(data) {
  return request({
    url: '/tang/singleapp/appraisal',
    method: 'post',
    data
  })
}
// 根据任务编号获取估价对象及其可比实例的说明和指数信息（包括使用的和未使用的因素）
export function getappraisal(id) {
  return request({
    url: `/tang/singleapp/appraisal/${id}`,
    method: 'get'
  })
}
// 根据任务编号和因素类型获取某类型未使用的因素列表
export function getnousefactor(task_id, type) {
  return request({
    url: `/tang/singleapp/factor/${task_id}/${type}`,
    method: 'get'
  })
}
// 选择估价方法
export function appraisalchoose(data) {
  return request({
    url: '/tang/singleapp/appraisal/choose',
    method: 'post',
    data
  })
}
