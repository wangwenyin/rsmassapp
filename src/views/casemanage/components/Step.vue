<template>
  <el-steps :active="active">
    <el-step title="导入" icon="el-icon-upload" @click.native="toggle(0)"></el-step>
    <el-step title="匹配" icon="el-icon-view" @click.native="toggle(1)"></el-step>
    <el-step title="筛选" icon="el-icon-search" @click.native="toggle(2)"></el-step>
  </el-steps>
</template>

<script>
  export default {
    props: {
      active: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
  
      }
    },
    methods: {
      toggle(step) {
        switch (step) {
          case 0:
            this.$router.push({ name: 'CaseImp' })
            break
          case 1:
            this.$router.push({ name: 'ImpMatch' })
            break
          default:
            this.$router.push({ name: 'ImpFilter' })
            break
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-step {
    cursor: pointer;
    margin-bottom: 20px;
  }
</style>
