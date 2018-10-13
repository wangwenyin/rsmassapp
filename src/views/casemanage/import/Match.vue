<template>
  <div class="app">
    <div class="content">
      <imp-step style="width: 80%;margin: 0 auto" active=2></imp-step>
      <el-row>
        <el-button size="small" type="primary">开始匹配</el-button>
        <el-button size="small" type="plain">历史记录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ImpStep from '@/views/casemanage/components/Step'

  export default {
    components: { ImpStep },
    data() {
      return {
      }
    },
    mounted() {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .content {
    padding: 20px;
    .el-row {
      .el-button:first-child {
        float: left;
      }
      .el-button:last-child {
        float: right;
      }
    }
  }
</style>
