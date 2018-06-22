<template>
  <div>
    <el-row :gutter="10" style="margin-left: 10px">
      <el-col :span="4">
        <input-box placeholder="项目名称"></input-box>
      </el-col>
      <el-col :span="4">
        <input-box placeholder="楼栋名称"></input-box>
      </el-col>
      <el-col :span="4">
        <input-box placeholder="户名称"></input-box>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" size="small">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import InputBox from '@/components/Input'
  export default{
    components: { InputBox },
    data() {
      return {}
    }
  }
</script>

<style>

</style>
