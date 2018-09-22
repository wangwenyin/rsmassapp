<template>
  <div class="app">
    <div class="process-container content">
      <el-row class="search-box">
        <el-col :span="6">
          <el-input
            placeholder="请输入房产名称"
            size="small"
            v-model.trim="fcmc"
            @change="inputChange"
            @keyup.enter.native="search"
            clearable>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" size="small" @click="search">查询</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="data"
        border
        stripe
        style="width: 100%"
        id="el-table">
        <el-table-column
          prop="id"
          label="序号"
          width="50">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="fcmc"
          label="房产名称">
        </el-table-column>
        <el-table-column
          prop="cqzh"
          label="产权证号">
        </el-table-column>
        <el-table-column
          prop="pgbgbh"
          label="评估报告编号">
        </el-table-column>
        <el-table-column
          prop="pgjg"
          label="评估价格">
        </el-table-column>
        <el-table-column
          prop="fclb"
          label="物业用途">
        </el-table-column>
        <el-table-column
          prop="sqsj"
          label="申请时间">
          <template slot-scope="scope">
            <span>{{scope.row.sqrq.slice(0, 10)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="sqr"
          label="申请人">
        </el-table-column>
        <el-table-column
          prop="dqjd"
          label="当前节点">
          <template slot-scope="scope">
            <span>
              {{scope.row.dqjd === '0' ? '数据审核'
              :(scope.row.dqjd === '1' ? '现场查勘'
              :(scope.row.dqjd === '2' ? '估价'
              :(scope.row.dqjd === '3' ? '复核评估'
              :'结果终审')))}}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="cz"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <router-link :to="{name: 'Detail', params: {dqjd: scope.row.dqjd}}">
              <el-button type="text" size="small">查看流程</el-button>
            </router-link>
            <router-link :to="{name: 'Log'}">
              <el-button type="text" size="small">操作日志</el-button>
            </router-link>
            <el-popover
              title="当前进度:"
              placement="top"
              offset=300
              width="600"
              trigger="click">
              <el-steps :active="active" align-center>
                <el-step title="数据审核"></el-step>
                <el-step title="现场查勘"></el-step>
                <el-step title="复核评估"></el-step>
                <el-step title="终审"></el-step>
              </el-steps>
              <el-button slot="reference" type="text" size="small" @click="handleProcess(scope.row)">进度查询</el-button>
            </el-popover>
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
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        tableData: [],
        tableData_origin: [],
        fcmc: '',
        currentPage: 1,
        pageSize: 10,
        active: 1
      }
    },
    created() {
      // 由于后台分页，也需调用接口
      this.tableData = JSON.parse(localStorage.getItem('taskList'))
      this.tableData_origin = this.tableData.slice()
    },
    computed: {
      data() {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
    },
    methods: {
      inputChange(value) {
        if (!value) {
          this.tableData = this.tableData_origin
        }
      },
      search() {
        this.tableData = this.tableData_origin.filter(item => {
          return item.fcmc.indexOf(this.fcmc) > -1
        })
      },
      handleProcess(row) {
        switch (row.dqjd) {
          case '0':
            this.active = 0
            break
          case '1':
            this.active = 1
            break
          case '2':
            this.active = 2
            break
          case '3':
            this.active = 2
            break
          default:
            this.active = 3
        }
      },
      handleSizeChange(size) {
        this.pageSize = size
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .process-container {
    padding: 10px;
    .search-box {
      padding: 10px;
      margin-bottom: 10px;
      .el-col-2 {
        margin-left: 10px
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
