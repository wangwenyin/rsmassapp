<template>
  <div>
    <div class="task-title">
      <span>分配任务信息：</span>
      <el-select v-model="value" placeholder="任务名称" clearable size="medium">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <el-table
      :data="tableData"
      border
      ref="table"
      style="width: 50%">
      <el-table-column
        prop="person"
        label="人员">
      </el-table-column>
      <el-table-column
        prop="caseType"
        label="案例类型">
      </el-table-column>
      <el-table-column
        prop="taskNum"
        label="任务数量">
      </el-table-column>
      <el-table-column
        prop="compNum"
        label="完成数量">
      </el-table-column>
      <el-table-column
        prop="progress"
        label="进度">
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
          person: '王二',
          caseType: '租赁',
          taskNum: '14',
          compNum: '7',
          progress: '50%'
        },
        {
          person: '王二',
          caseType: '租赁',
          taskNum: '14',
          compNum: '7',
          progress: '50%'
        },
        {
          person: '王二',
          caseType: '租赁',
          taskNum: '14',
          compNum: '7',
          progress: '50%'
        },
        {
          person: '王二',
          caseType: '租赁',
          taskNum: '14',
          compNum: '7',
          progress: '50%'
        }],
        value: '',
        options: []
      }
    }
  }
</script>

<style>
  .task-title {
    margin-bottom: 10px
  }
</style>
