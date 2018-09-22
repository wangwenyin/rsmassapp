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
        <el-col :span="2" style="float: right">
          <router-link :to="{ name: 'PriceMap' }">
            <el-button size="mini" type="primary">基准地价图</el-button>
          </router-link> 
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
            <el-form-item label="表现形式：">
                <span>级别地价</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="物业用途：">
                <span>{{task.prop_usage}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="用途子类：">
                <span>城镇住宅用地</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="权属性质：">
                <span>国有</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="土地级别：">
                <span>不限</span>
            </el-form-item>
          </el-col>
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
          <el-col :span="7">
            <el-form-item label="设定容积率：">
                <span>1.00</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="设定使用年限：">
                <span>70</span>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="开发利用程度：">
                <span>七通一平</span>
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
          <div class="small-title">使用年期修正系数表</div> 
        </el-col>
      </el-row>
      <div class="table-container">
        <el-table
          :data="tableData1"
          border
          stripe
          style="width: 28%; float: left">
          <el-table-column
            prop="id"
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span>{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="term"
            label="使用年限">
          </el-table-column>
          <el-table-column
            :prop="usage"
            label="修正系数">
          </el-table-column>
        </el-table>
        <el-table
          :data="tableData2"
          border
          stripe
          style="width: 24%; float: left">
          <el-table-column
            prop="term"
            label="使用年限">
          </el-table-column>
          <el-table-column
            :prop="usage"
            label="修正系数">
          </el-table-column>
        </el-table>
        <el-table
          :data="tableData3"
          border
          stripe
          style="width: 24%; float: left">
          <el-table-column
            prop="term"
            label="使用年限">
          </el-table-column>
          <el-table-column
            :prop="usage"
            label="修正系数">
          </el-table-column>
        </el-table>
        <el-table
          :data="tableData4"
          border
          stripe
          style="width: 24%; float: left">
          <el-table-column
            prop="term"
            label="使用年限">
          </el-table-column>
          <el-table-column
            :prop="usage"
            label="修正系数">
          </el-table-column>
        </el-table>
      </div>
      <el-row> 
        <el-col :span="24">
          <div class="small-title">容积率修正系数表</div> 
        </el-col>
      </el-row>
      <div class="table-container">
        <el-table
          :data="tableData5"
          border
          stripe
          style="width: 28%; float: left">
          <el-table-column
            prop="id"
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span>{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="rjl"
            label="容积率">
          </el-table-column>
          <el-table-column
            :prop="usage"
            label="修正系数">
          </el-table-column>
        </el-table>
        <el-table
          :data="tableData6"
          border
          stripe
          style="width: 24%; float: left">
          <el-table-column
            prop="rjl"
            label="容积率">
          </el-table-column>
          <el-table-column
            :prop="usage"
            label="修正系数">
          </el-table-column>
        </el-table>
        <el-table
          :data="tableData7"
          border
          stripe
          style="width: 24%; float: left">
          <el-table-column
            prop="rjl"
            label="容积率">
          </el-table-column>
          <el-table-column
            :prop="usage"
            label="修正系数">
          </el-table-column>
        </el-table>
        <el-table
          :data="tableData8"
          border
          stripe
          style="width: 24%; float: left">
          <el-table-column
            prop="rjl"
            label="容积率">
          </el-table-column>
          <el-table-column
            :prop="usage"
            label="修正系数">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { getTermFactor, getRjlFactor } from '@/api/massAppraisal'
  const TABLE_LEN = 20
  const TABLE_NUM = 4

  export default {
    data() {
      return {
        task: JSON.parse(localStorage.getItem('curTask')),
        tableData1: [],
        tableData2: [],
        tableData3: [],
        tableData4: [],
        tableData5: [],
        tableData6: [],
        tableData7: [],
        tableData8: []
      }
    },
    computed: {
      // 不同用途的修正系数
      usage() {
        switch (this.task.prop_usage) {
          case '住宅':
            return 'zz_coef'
          case '商业':
            return 'sy_coef'
          case '办公':
            return 'bg_coef'
          case '工业':
            return 'gy_coef'
          default:
            return 'others'
        }
      }
    },
    created() {
      // 使用年期
      this.getTermFactor()
      // 容积率
      this.getRjlFactor()
    },
    methods: {
      getTermFactor() {
        getTermFactor().then(res => {
          const data = res.data
          if (data.length) {
            // 根据常量来遍历
            for (let i = 0; i < TABLE_NUM; i++) {
              if (i === TABLE_NUM - 1) {
                this['tableData' + (i + 1)] = data.slice(TABLE_LEN * i, data.length)
              } else {
                this['tableData' + (i + 1)] = data.slice(TABLE_LEN * i, TABLE_LEN * (i + 1))
              }
            }
          }
        })
      },
      getRjlFactor() {
        getRjlFactor().then(res => {
          const data = res.data
          if (data.length) {
            for (let i = 0; i < TABLE_NUM; i++) {
              this['tableData' + (TABLE_NUM + i + 1)] = data.slice(TABLE_LEN * i, TABLE_LEN * (i + 1))
            }
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .content {
    padding-left: 10px;
    overflow: hidden;
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
    .table-container {
      padding: 0 50px
    }
  }
</style>
