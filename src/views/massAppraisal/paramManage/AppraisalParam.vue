<template>
  <div class="app">
    <div class="content">
      <el-row class="control">
        <el-col :span="2">
          <el-button type="primary" size="small">新建参数</el-button>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model.trim="keyWord" @change="inputChange" @keyup.enter.native="handleSearchTask" size="small">
            <el-select v-model="type" slot="prepend" placeholder="请选择">
              <el-option v-for="item in typeList" :key="item" :value="item">
              </el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="handleSearchTask"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table
        :data="tableData"
        border
        stripe
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
          prop="name"
          label="参数名称"
          width="300">
        </el-table-column>
        <el-table-column
          prop="creator"
          label="创建人员">
        </el-table-column>
        <el-table-column
          prop="create_date"
          label="创建时间">
          <template slot-scope="scope">
            <span>{{scope.row.create_date.slice(0, 10)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="prop_usage"
          label="物业用途">
        </el-table-column>
        <el-table-column
          prop="district"
          label="行政区">
        </el-table-column>
        <el-table-column
          prop="param_type"
          label="参数类型">
        </el-table-column>
        <el-table-column
          prop="param_source"
          label="参数来源">
        </el-table-column>
        <el-table-column
          prop="cz"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click.native="toDetail(scope.row, scope.$index)">详情</el-button> 
          </template>
        </el-table-column>
      </el-table>
      <el-pagination 
        size="medium" 
        background 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="currentPage" 
        :page-sizes="[5, 10, 50, 100]" 
        :page-size="pageSize" 
        layout="total, sizes, prev, pager, next, jumper" 
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { getParamtask } from '@/api/massAppraisal'

  export default {
    data() {
      return {
        keyWord: '',
        type: '参数名称',
        typeList: ['参数名称', '创建人员', '物业用途'],
        searchObj: {
          name: '',
          creator: '',
          prop_usage: ''
        },
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        total: 100
      }
    },
    created() {
      // 获取参数任务列表
      this.getParamtask()
    },
    methods: {
      getParamtask() {
        getParamtask(
          {
            pageIndex: this.currentPage,
            pageSize: this.pageSize,
            ...this.searchObj
          }).then(res => {
          console.log(res)
          this.tableData = res.data
          this.total = res.total
        })
      },
      inputChange(value) {
        if (!value) {
          this.searchObj = {}
          this.getParamtask()
        }
      },
      // 查询
      handleSearchTask() {
        if (this.currentPage !== 1) {
          this.currentPage = 1
        }
        switch (this.type) {
          case '创建人员':
            this.searchObj.creator = this.keyWord
            this.getParamtask()
            break
          case '物业用途':
            this.searchObj.prop_usage = this.keyWord
            this.getParamtask()
            break
          default:
            this.searchObj.name = this.keyWord
            this.getParamtask()
        }
      },
      handleSizeChange(size) {
        this.pageSize = size
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
        this.getParamtask()
      },
      // 进入详情页面
      toDetail(row, index) {
        switch (row.param_type) {
          case '基准地价':
            this.$router.push({ name: 'BasicLandPrice' })
            break
          case '建安造价':
            this.$router.push({ name: 'HousingCost' })
            break
          case '建筑物折旧':
            this.$router.push({ name: 'BuildingDepre' })
            break
          default:
            this.$router.push({ name: 'CostParam' })
        }
        const task = JSON.stringify(this.tableData[index])
        localStorage.setItem('curTask', task)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .content {
    .control {
      padding: 10px;
      .el-col-8 {
        float: right;
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

<style>
  .control .el-input-group__prepend {
    width: 105px
  }
</style>


