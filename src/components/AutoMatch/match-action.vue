<template>
  <el-row :gutter="10" style="margin-left: 10px">
    <el-col :span="3">
      <el-select v-model="value" placeholder="请选择案列类型" clearable size="medium">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select v-model="value" placeholder="请选择匹配粒度" clearable size="medium">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
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
        options1: [{
          value: '选项1',
          label: '买卖'
        }, {
          value: '选项2',
          label: '租赁'
        }, {
          value: '选项3',
          label: '挂牌'
        }, {
          value: '选项4',
          label: '估价'
        }, {
          value: '选项5',
          label: '询价'
        }],
        options2: [{
          value: '选项1',
          label: '到项目'
        }, {
          value: '选项2',
          label: '到楼栋'
        }, {
          value: '选项3',
          label: '到户'
        }],
        value: ''
      }
    },
    methods: {
      matchTask() {
        this.$router.push({path: '/case/create'})
      }
    }
  }
</script>

<style>

</style>
