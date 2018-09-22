<template>
  <el-row :gutter="10">
    <el-col :span="3">
      <el-select v-model="value1" placeholder="请选择案列类型" clearable size="medium">
        <el-option
          v-for="item in caseTypes"
          :key="item"
          :value="item">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select v-model="value2" placeholder="请选择匹配粒度" clearable size="medium">
        <el-option
          v-for="item in matchLevels"
          :key="item"
          :value="item">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="2">
      <el-button type="primary" size="medium">开始匹配</el-button>
    </el-col>
    <el-col :span="2.5">
      <el-button plain size="medium">查看匹配报告</el-button>
    </el-col>
    <el-col :span="2">
        <el-button plain size="medium" @click="matchTask">任务分配</el-button>
    </el-col>
  </el-row>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        caseTypes: ['买卖', '租赁', '挂牌', '估价', '询价'],
        matchLevels: ['到项目', '到楼栋', '到户'],
        value1: '',
        value2: ''
      }
    },
    methods: {
      matchTask() {
        this.$router.push({ path: '/case/create' })
      }
    }
  }
</script>

<style>

</style>
