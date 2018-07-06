<template>
  <div class="process-container">
    <el-table
      :data="data"
      border
      stripe
      style="width: 100%"
      id="el-table"
    >
      <el-table-column
        prop="id"
        label="序号"
        width="50"
      >
        <template slot-scope="scope">
          <span>{{scope.$index+1}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="fcmc"
        label="房产名称">
      </el-table-column>
      <el-table-column
        prop="wyyt"
        label="物业用途">
      </el-table-column>
      <el-table-column
        prop="sqsj"
        label="申请时间">
      </el-table-column>
      <el-table-column
        prop="sqr"
        label="申请人">
      </el-table-column>
      <el-table-column
        prop="dqjd"
        label="当前节点">
      </el-table-column>
      <el-table-column
        prop="cz"
        label="操作">
        <template slot-scope="scope">
          <router-link :to="{name: 'Detail', params: {dqjd: scope.row.dqjd}}">
            <el-button type="text" size="small">查看流程</el-button>
          </router-link>
          <router-link :to="{name: 'Log'}">
            <el-button type="text" size="small">操作日志</el-button>
          </router-link>
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
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        tableData: [
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '数据审核' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '现场查勘' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '复核评估' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '结果终审' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '数据审核' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '现场查勘' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '复核评估' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '复核评估' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '复核评估' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '复核评估' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '复核评估' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '复核评估' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', dqjd: '复核评估' }
        ],
        currentPage: 1,
        pageSize: 10
      }
    },
    computed: {
      data() {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
    },
    methods: {
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
  .process-container {
    padding: 10px;
  .el-pagination {
    margin-top: 10px;
    text-align: center;
  }
  }
</style>
