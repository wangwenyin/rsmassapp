<template>
  <div class="app">
    <div class="content">
      <el-row class="header">
        <el-col :span="12">
            <div class="big-title">分区分类间接费用及利润表</div> 
        </el-col>
        <el-col :span="2" style="float: right">
          <el-button size="mini" type="primary">删除</el-button> 
        </el-col>
      </el-row>
      <el-form label-width="150px" label-position="right">
        <el-row> 
          <el-col :span="24">
            <div class="small-title">基本信息</div> 
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="系统编号：">
                <span>{{task.id}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="创建人：">
              <span>{{task.creator}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="创建日期：">
                <span>{{task.create_date.slice(0, 10)}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="参数类型：">
              <span>{{task.param_type}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="参数来源：">
              <span>{{task.param_source}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="物业用途：">
                <span>{{task.prop_usage}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="行政区：">
                <span>{{task.district}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="基准日期：">
                <span>{{task.base_date}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
              <el-form-item label="备注：">
                  <span>这段描述很长...............</span>
              </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row> 
        <el-col :span="24">
          <div class="small-title">参数信息</div> 
        </el-col>
      </el-row>
      <div style="padding: 0 50px">
        <el-table
          :data="tableData"
          border
          stripe
          :span-method="arraySpanMethod"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span>{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="yt1"
            label="物业用途">
          </el-table-column>
          <el-table-column
            prop="yt2"
            label="用途子类">
          </el-table-column>
          <el-table-column
            prop="para_name"
            label="费用名称">
          </el-table-column>
          <el-table-column
            prop="para_rate"
            label="费用率及参考基准">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCpDetail } from '@/api/massAppraisal'

  export default {
    data() {
      return {
        task: JSON.parse(localStorage.getItem('curTask')),
        tableData: []
      }
    },
    created() {
      // 获取成本参数详情
      this.getCpDetail()
    },
    methods: {
      getCpDetail() {
        getCpDetail().then(res => {
          console.log(res)
          this.processingData(res.data)
        })
      },
      // 处理数据
      processingData(list) {
        let newList = []
        let zzList = []
        let syList = []
        let bgList = []
        let gyList = []
        list.forEach(item => {
          item.para_rate = this.toPercent(item.para_rate)
          switch (item.yt1) {
            case '住宅':
              zzList.push(item)
              break
            case '商业':
              syList.push(item)
              break
            case '办公':
              bgList.push(item)
              break
            default:
              gyList.push(item)
          }
        })
        // 源数据太乱，只好通过用途子类来过滤和排序
        const list1 = zzList.filter(item => item.yt2 === '普通住宅')
        const list2 = zzList.filter(item => item.yt2 === '低密度住宅')
        const list3 = zzList.filter(item => item.yt2 === '集体宿舍')
        const list4 = zzList.filter(item => item.yt2 === '村民私宅')
        zzList = [...list1, ...list2, ...list3, ...list4]
        const list5 = syList.filter(item => item.yt2 === '零售商业')
        const list6 = syList.filter(item => item.yt2 === '旅游住宿')
        const list7 = syList.filter(item => item.yt2 === '商业配套')
        syList = [...list5, ...list6, ...list7]
        const list8 = bgList.filter(item => item.yt2 === '商务办公')
        const list9 = bgList.filter(item => item.yt2 === '商务公寓')
        const list10 = bgList.filter(item => item.yt2 === '办公配套')
        bgList = [...list8, ...list9, ...list10]
        const list11 = gyList.filter(item => item.yt2 === '厂房')
        const list12 = gyList.filter(item => item.yt2 === '研发')
        const list13 = gyList.filter(item => item.yt2 === '仓储')
        const list14 = gyList.filter(item => item.yt2 === '物流')
        const list15 = gyList.filter(item => item.yt2 === '工业配套')
        gyList = [...list11, ...list12, ...list13, ...list14, ...list15]
        newList = newList.concat(zzList, syList, bgList, gyList)
        this.tableData = newList
        console.log(newList)
      },
      toPercent(num) {
        let str = Number(num * 100)
        str += '%'
        return str
      },
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 1) {
          if (rowIndex === 0) {
            return [24, 1]
          } else if (rowIndex === 24 || rowIndex === 42) {
            return [18, 1]
          } else if (rowIndex === 60) {
            return [30, 1]
          } else {
            return [0, 0]
          }
        } else if (columnIndex === 2) {
          if (rowIndex % 6 === 0) {
            return [6, 1]
          } else {
            return [0, 0]
          }
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .content {
    padding-left: 10px;
    .header {
      padding: 15px;
      border: 1px solid #eee;
      .big-title {
        font-size: 18px;
        color: #1E1E1E;
      }
    }
    .el-form, .el-row {
      .small-title {
        margin: 15px 0;
        font-weight: bold;
        font-size: 18px;
        color: #666666;
      }
      .el-form-item {
        margin-bottom: 5px;
      }
    }
    .el-table {
      margin-top: 5px;
    }
    .el-pagination {
      margin-top: 10px;
      text-align: center;
    }
  }
</style>
