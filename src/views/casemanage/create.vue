<template>
  <div class="createTask">
    <el-row :gutter="10" style="margin-left: 10px">
      <el-col :span="2">任务名称：</el-col>
      <el-col :span="4">
        <el-input v-model="input" size="small"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button plain size="small">保存</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-left: 10px">
      <el-col :span="6">任务分配：</el-col>
      <el-col :span="2">
        <span>用途/区域：</span>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value5" size="small" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select
          v-model="value11"
          size="small"
          multiple
          collapse-tags
          style="margin-left: 20px;"
          placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <span>成员名称：</span>
      </el-col>
      <el-col :span="2">
        <el-select v-model="value5" size="small" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="1.5">
        <el-button plain size="small">分配</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button plain size="small">撤销</el-button>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      border
      :data="tableData"
      tooltip-effect="dark"
      style="width: 94%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="number"
        label="编号">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="house"
        label="户名称">
      </el-table-column>
      <el-table-column
        prop="region"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="use"
        label="用途">
      </el-table-column>
      <el-table-column
        prop="caseNum"
        label="案例数量">
      </el-table-column>
      <el-table-column
        prop="operator"
        label="操作人员">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .createTask {
    padding: 10px;
    .el-col-2, .el-col-6 {
      height: 32px;
      line-height: 32px;
    }
    .el-table {
      margin-top: 5px;
    }
  }
</style>
