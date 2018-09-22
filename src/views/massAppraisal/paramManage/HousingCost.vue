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
      <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
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
        prop="qttj"
        label="其他条件">
        <template slot-scope="scope">
          <span>{{scope.row.qttj.key1 + scope.row.qttj.key2}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="land_const"
        label="土建工程">
      </el-table-column>
      <el-table-column
        prop="decoration"
        label="装饰装修工程">
      </el-table-column>
      <el-table-column
        prop="elec_const"
        label="机电安装工程">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
  import { getHcDetail } from '@/api/massAppraisal'
  
  export default {
    data() {
      return {
        task: JSON.parse(localStorage.getItem('curTask')),
        tableData: []
      }
    },
    created() {
      // 获取建安造价详情
      this.getHcDetail()
    },
    methods: {
      getHcDetail() {
        getHcDetail().then(res => {
          console.log(res)
          this.processingData(res.data)
        })
      },
      // 数据处理
      processingData(list) {
        list.forEach(item => {
          if (item.term) {
            item.qttj = {
              key1: item.term + '：',
              key2: item.val_1 + (item.val_2 ? '-' + item.val_2 : '')
            }
          } else {
            item.qttj = {
              key1: '',
              key2: ''
            }
          }
        })
        this.tableData = list
      },
      // 合并行或列
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 1) {
          if (rowIndex === 0) {
            return {
              rowspan: 7,
              colspan: 1
            }
          } else if (rowIndex === 7) {
            return {
              rowspan: 9,
              colspan: 1
            }
          } else if (rowIndex === 16) {
            return {
              rowspan: 8,
              colspan: 1
            }
          } else if (rowIndex === 24) {
            return {
              rowspan: 5,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        } else if (columnIndex === 2) {
          if (rowIndex === 0 || rowIndex === 7) {
            return {
              rowspan: 4,
              colspan: 1
            }
          } else if (rowIndex === 11) {
            return {
              rowspan: 5,
              colspan: 1
            }
          } else if ((rowIndex > 3 && rowIndex < 7) || rowIndex > 23) {
            // 正常的占一行一列
            return {
              rowspan: 1,
              colspan: 1
            }
          } else if (rowIndex === 16 || rowIndex === 20) {
            return {
              rowspan: 4,
              colspan: 1
            }
          } else {
            // 不占（去掉）
            return {
              rowspan: 0,
              colspan: 0
            }
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

