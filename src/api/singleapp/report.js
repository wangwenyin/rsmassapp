// 个案估计 报告撰写相关接口
import request from '@/utils/requestTest'

// 获取房地产估价机构列表
export function getreportcompany(params) {
  return request({
    url: '/tang/singleapp/report/company',
    method: 'get',
    params
  })
}
// 根据任务编号获取估价报告内容
export function getreport(id) {
  return request({
    url: `/tang/singleapp/report/${id}`,
    method: 'get'
  })
}

// 获得估价报告某组成内容的所有模板项
export function getreportmodel(item) {
  return request({
    url: `/tang/singleapp/report/model/${item}`,
    method: 'get'
  })
}

// 更新报告内容
export function editreport(data) {
  return request({
    url: `/v1/singleapp/report`,
    method: 'post',
    data
  })
}

