<template>
  <div class="task-container">
    <el-tabs type="border-card">
      <el-tab-pane label="我的任务">
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
            <template scope="scope">
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
            prop="shry"
            label="审核人员">
          </el-table-column>
          <el-table-column
            prop="gjry"
            label="估价人员">
          </el-table-column>
          <el-table-column
            prop="zsry"
            label="终审人员">
          </el-table-column>
          <el-table-column
            prop="rwzt"
            label="任务状态">
            <template slot-scope="scope">
              <el-select v-model="scope.row.state" @change="selectRelation(scope.$index,scope.row, $event)" placeholder="请选择" size="small">
                <el-option
                  v-for="item in statusList"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="wcsj"
            label="完成时间">
          </el-table-column>
          <el-table-column
            prop="cz"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handle(scope.row)" type="text" size="small">处理</el-button>
              <el-button @click="check" type="text" size="small">查看</el-button>
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
      </el-tab-pane>
      <el-tab-pane label="所有任务">
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
            <template scope="scope">
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
            prop="shry"
            label="审核人员">
          </el-table-column>
          <el-table-column
            prop="gjry"
            label="估价人员">
          </el-table-column>
          <el-table-column
            prop="zsry"
            label="终审人员">
          </el-table-column>
          <el-table-column
            prop="rwzt"
            label="任务状态">
            <template slot-scope="scope">
              <el-select v-model="scope.row.state" placeholder="请选择" size="small">
                <el-option
                  v-for="item in statusList"
                  :key="item"
                  :value="item">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="wcsj"
            label="完成时间">
          </el-table-column>
          <el-table-column
            prop="cz"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handle(scope.row)" type="text" size="small">处理</el-button>
              <el-button @click="check" type="text" size="small">查看</el-button>
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        tableData: [
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' },
          { id: 1, fcmc: '水榭花都201', wyyt: '住宅', sqsj: '2018-06-26', sqr: '张三', shry: '李四', gjry: '王五', zsry: '周二', wcsj: '2018-06-26' }
        ],
        currentPage: 1,
        pageSize: 10,
        statusList: ['待审核', '待评估', '待终审', '已结束']
      }
    },
    computed: {
      data() {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
    },
    methods: {
      handle(row) {
        // 需要判断角色类型，才能跳转到对应页面
        console.log(row)
      },
      check() {
        this.$router.push({ path: '/recheck/process' })
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
  .task-container {
    padding: 10px;
    .el-pagination {
      margin-top: 10px;
      text-align: center;
    }
  }
  
</style>
