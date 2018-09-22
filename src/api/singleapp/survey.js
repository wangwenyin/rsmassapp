// 现场查勘相关接口
import request from '@/utils/requestLocal'
// 根据任务主键获取任务信息
export function surveyByTaskId(id) {
  return request({
    url: `/survey/tasks/${id}`,
    method: 'get'
  })
}
