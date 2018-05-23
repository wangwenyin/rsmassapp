<template>


<div>
<el-row :gutter="5">
  <el-col :span="3"><AreaSelect :options='options' :size='size'></AreaSelect></el-col>
  <el-col :span="3"><PurposeSelect  :options='options' :size='size'></PurposeSelect></el-col>
  <el-col :span="3"><el-input v-model="input" placeholder="宗地号" ></el-input></el-col>
  <el-col :span="3"><el-input v-model="input" placeholder="项目名称"></el-input></el-col>
  <el-col :span="3"><el-input v-model="input" placeholder="楼栋名称"></el-input></el-col>
  <el-col :span="3"><el-input v-model="input" placeholder="户名称"></el-input></el-col>
  <el-col :span="3"><el-input v-model="input" placeholder="产权证号"></el-input></el-col>
  <el-col :span="1.2"><el-button type="primary">查询</el-button></el-col>
  <el-col :span="1"><el-button >清空</el-button></el-col>
</el-row>
<el-row :gutter="10">
  <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16"><bd-map ></bd-map></el-col>
  <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple-light"></div></el-col>
 
</el-row>
</div>
</template>
<script>
  
  import PurposeSelect from '@/components/Select/PurposeSelect'
  import AreaSelect from '@/components/Select/AreaSelect'
  import BdMap from '@/components/BdMap/index'
  export default {
    components: { PurposeSelect, AreaSelect, BdMap },
    data() {
      return {
        options: [],
        input: '',
        size: 'medium'
      }
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    margin-left: 120px;
    margin-right: 110px;
    margin-top: 10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>