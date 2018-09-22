// 个案估计 估计任务相关接口
import request from '@/utils/requestTest'

// 创建或保存任务详情
export function savetasks(data) {
  return request({
    url: '/tang/singleapp/tasks',
    method: 'post',
    data
  })
}
// 根据单项条件查询个案估价任务列表
// params = { name: '任务名称。模糊查询', creator: '创建人。精确查询', members: '参与人员。模糊查询', usage: '物业用途。模糊查询' }
export function searchtasks(params) {
  return request({
    // url: '/tang/singleapp/tasks',
    url: '/tang/singleapp/tasks',
    method: 'get',
    params
  })
}
// 根据任务编号查询个案估价任务详情
export function tasksInfo(params) {
  return request({
    url: `/tang/singleapp/tasks/${params.id}`,
    method: 'get',
    params
  })
}
// 根据任务编号删除个案估价任务记录及相关评估表信息
export function deltasks(id) {
  return request({
    url: `/tang/singleapp/tasks/${id}`,
    method: 'delete'
  })
}

