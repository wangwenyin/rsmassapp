// 个案估计 对象描述相关接口
import request from '@/utils/requestTest'
export function saveproperty(id, data) {
  return request({
    url: `/tang/singleapp/property/${id}`,
    method: 'put',
    data
  })
}

// 根据任务编号查询估价对象状况描述
export function getproperty(task_id) {
  return request({
    url: `/tang/singleapp/property/${task_id}`,
    method: 'get'
  })
}
