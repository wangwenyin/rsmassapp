<template>
  <div class="detail-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="数据审核" name="first">
        <audit></audit>
      </el-tab-pane>
      <el-tab-pane label="复核评估" name="second">
        <appraise></appraise>
      </el-tab-pane>
      <el-tab-pane label="现场查勘" name="third">
         <survey></survey>
      </el-tab-pane>
      <el-tab-pane label="结果终审" name="fourth">
        <result></result>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Audit from '@/views/pricerecheck/audit'
  import Appraise from '@/views/pricerecheck/appraise'
  import Survey from '@/views/pricerecheck/appraise/survey'
  import Result from '@/views/pricerecheck/result'

  export default {
    components: {
      Audit, Appraise, Survey, Result
    },
    data() {
      return {
        activeName: 'first'
      }
    },
    mounted() {
      switch (this.$route.params.dqjd) {
        case '数据审核':
          this.activeName = 'first'
          break
        case '复核评估':
          this.activeName = 'second'
          break
        case '现场查勘':
          this.activeName = 'third'
          break
        case '结果终审':
          this.activeName = 'fourth'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .detail-container {
    padding-left: 10px;
    .el-tabs__header {
      margin: 0 0 15px 30px;
    }
  }
</style>