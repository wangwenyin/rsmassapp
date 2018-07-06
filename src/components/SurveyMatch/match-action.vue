<template>
  <el-row :gutter="10" style="margin-left: 10px">
    <el-col :span="3">
      <el-select v-model="rwlx" placeholder="任务类型" clearable size="medium">
        <el-option
          v-for="item in taskTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select v-model="wczt" placeholder="完成状态" clearable size="medium">
        <el-option
          v-for="item in state"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select v-model="yt" placeholder="用途" clearable size="medium">
        <el-option
          v-for="item in application"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input v-model="rwmc" placeholder="任务名称"></el-input>
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
