// 现场查勘相关接口
import request from '@/utils/request'
// 查询符合条件的用户列表
// params:department  roles  查询参与人员时可以不填参数
export function getuser(params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}
