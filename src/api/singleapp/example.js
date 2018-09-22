// 个案估计 可比实例相关接口
import request from '@/utils/requestTest'
// 根据任务编号查询可比实例列表
export function getcomparable(id) {
  return request({
    url: `/tang/singleapp/comparable/${id}`,
    method: 'get'
  })
}
// 删除指定任务编号指定交易编号的可比实例记录
export function delcomparable(task_id, sale_id) {
  return request({
    url: `/tang/singleapp/comparable/${task_id}/${sale_id}`,
    method: 'delete'
  })
}

// 添加可比实例到指定任务编号下的任务
export function addcomparable(data) {
  return request({
    url: '/tang/singleapp/comparable',
    method: 'post',
    data
  })
}
