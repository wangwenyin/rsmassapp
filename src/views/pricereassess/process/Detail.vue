<template>
  <div class="app">
    <div class="detail-container content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="数据审核" name="first">
          <audit class="reset" :disabled="disabled"></audit>
        </el-tab-pane>
        <el-tab-pane label="复核评估" name="second" v-if="showSecond">
          <appraise class="reset" :disabled="disabled"></appraise>
        </el-tab-pane>
        <el-tab-pane label="结果终审" name="third" v-if="showThird">
          <result class="reset" :disabled="disabled"></result>
        </el-tab-pane> 
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import Audit from '@/views/pricereassess/Audit'
  import Appraise from '@/views/pricereassess/Appraise'
  import Result from '@/views/pricereassess/Result'

  export default {
    components: {
      Audit, Appraise, Result
    },
    data() {
      return {
        activeName: 'first',
        disabled: true,
        showSecond: true,
        showThird: true
      }
    },
    mounted() {
      switch (this.$route.params.dqjd) {
        case '3':
          this.showSecond = false
          this.showThird = false
          break
        case '4':
          this.showThird = false
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .detail-container {
    padding: 10px;
    .reset {
      margin: -10px;
    }
    .el-tabs__header {
      margin: 0 0 15px 30px;
    }
  }
</style>