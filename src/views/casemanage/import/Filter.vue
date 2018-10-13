<template>
  <div class="app">
    <div class="content">
      <imp-step style="width: 80%;margin: 0 auto" active=3></imp-step>
      <el-row>
        <el-select v-model="method" @change="handleMethodChange" placeholder="请选择筛选方法" size="small" class="fl">
          <el-option
            v-for="item in methodList"
            :key="item"
            :value="item">
          </el-option>
        </el-select>
        <el-button size="small" type="primary" class="fl" style="margin-left: 10px">开始筛选</el-button>
        <el-button size="small" type="plain" class="fr">历史记录</el-button>
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
        method: '',
        methodList: ['评估筛选法', '基于正态分布的筛选法', '基于高斯分布的筛选法']
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
      .fl {
        float: left;
      }
      .fr {
        float: right;
      }
    }
  }
</style>
