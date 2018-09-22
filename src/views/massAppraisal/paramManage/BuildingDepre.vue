<template>
  <div class="app">
    <div class="content">
      <el-row class="header">
        <el-col :span="12">
            <div class="big-title">{{task.name}}</div> 
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
            prop="bldg_struc"
            label="建筑结构">
          </el-table-column>
          <el-table-column
            prop="bldg_type"
            label="物业类型">
          </el-table-column>
          <el-table-column
            prop="costName"
            label="参数名称">
          </el-table-column>
          <el-table-column
            prop="basisReference"
            label="费用率及参考基准">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { getBdDetail } from '@/api/massAppraisal'

  export default {
    data() {
      return {
        task: JSON.parse(localStorage.getItem('curTask')),
        tableData: []
      }
    },
    created() {
      // 获取建筑物折旧参数信息
      this.getBdDetail()
    },
    methods: {
      getBdDetail() {
        getBdDetail().then(res => {
          console.log(res)
          const list = res.data
          this.processingData(list)
        })
      },
      // 处理数据
      processingData(list) {
        const newList = []
        list.forEach(item => {
          const newItem = Object.assign({}, item)
          item.costName = '经济寿命'
          newItem.costName = '残值率'
          item.basisReference = item.term
          newItem.basisReference = this.toPercent(item.left_rate)
          newList.unshift(item, newItem)
        })
        this.tableData = newList
      },
      toPercent(num) {
        let str = Number(num * 100)
        str += '%'
        return str
      },
      // 合并行或列
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 1) {
          if (rowIndex % 6 === 0) {
            return [6, 1]
          } else {
            return [0, 0]
          }
        } else if (columnIndex === 2) {
          if (rowIndex % 2 === 0) {
            return [2, 1]
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
