<template>
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
</template>

<script>
  export default {
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
        }]
      }
    }
  }
</script>
