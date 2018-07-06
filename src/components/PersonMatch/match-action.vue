<template>
  <el-row :gutter="10" style="margin-left: 10px">
    <el-col :span="3">
      <el-input v-model="rwmc" placeholder="机构名称"></el-input>
    </el-col>
    <el-col :span="3">
      <el-input v-model="rwmc" placeholder="资质等级"></el-input>
    </el-col>
    <el-col :span="3">
      <el-input v-model="rwmc" placeholder="负责人"></el-input>
    </el-col>
    <el-col :span="1.5">
      <el-button plain size="medium">清空</el-button>
    </el-col>
    <el-col :span="1.5">
      <el-button plain size="medium">查询</el-button>
    </el-col>
  </el-row>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        taskTypes: [{
          value: '1',
          label: '所有任务'
        }, {
          value: '2',
          label: '批量调查'
        }],
        state: [{
          value: '1',
          label: '所有'
        }, {
          value: '2',
          label: '已完成'
        }],
        application: [{
          value: '1',
          label: '所有'
        }, {
          value: '2',
          label: '住宅'
        }],
        rwlx: '',
        wczt: '',
        yt: '',
        rwmc: ''
      }
    },
    methods: {
    }
  }
</script>

<style>

</style>
