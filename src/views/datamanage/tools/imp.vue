<template>
<div class="app">
  <div class="margin10">
    <el-row class="el-row-title"> 
        <el-col :span="24">
            <div class="title">导入数据</div> 
                <div class="border"></div> 
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-left:37px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
   <span>1.选择导入对象 :</span>
  </el-col>
  <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
   <template>
      <el-radio v-model="radio" label="1">宗地</el-radio>
      <el-radio v-model="radio" label="2">项目</el-radio>
      <el-radio v-model="radio" label="3">楼栋</el-radio>
      <el-radio v-model="radio" label="4">户</el-radio>
   </template>
  </el-col>
   <el-col :span="3"><router-link to="housegrid"> <span style="color:#007eff">下载模板</span></router-link>
   </el-col>
</el-row>
   <el-row :gutter="10" style="margin-left:37px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" style="margin-top: 7px;">
   <span>2.选择导入数据 :</span>
  </el-col>
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
   <el-input size="small" v-model="input" placeholder=" "></el-input>
  </el-col>
  <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
   <el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
</el-upload>
  </el-col>
</el-row>
<el-row :gutter="10" style="margin-left:37px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" >
   <span>3.导入数据检查 :</span>
  </el-col>
</el-row>
<el-row>
<el-table
    :data="tableData2"
    style="width: 90%;margin-left:24px;"  border
    :row-class-name="tableRowClassName">
    <el-table-column 
      prop="buildingId"
      label="属性"
     >
    </el-table-column>
    <el-table-column 
      prop="building"
      label="检查结果"
     >
    </el-table-column>
    <el-table-column label="备注">
       <template slot-scope="scope">
        <el-button type="text" size="small">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-row>
<el-row :gutter="10" >
  <el-col :span="3">
  
  <span> <el-button  size="small" class="btn_l">历史记录</el-button></span>
 </el-col>
<el-col :span="15">
  
  <span> <el-button type="primary" size="small" class="btn_l">开始导入</el-button></span>
 </el-col>
 <el-col :span="4">
    <span><el-button size="small"   class="btn_l1">下载导入报告</el-button></span>
  
 </el-col>
</el-row>
<el-row :gutter="10" style="margin-left:37px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" >
   <span>4.导入日志 :</span>
  </el-col>
</el-row>
<el-row>
<el-table
    :data="tableData2"
    style="width: 90%;margin-left:24px;"  border
    :row-class-name="tableRowClassName">
    <el-table-column 
      prop="buildingId"
      label="导入结果"
     >
    </el-table-column>
    <el-table-column 
      prop="building"
      label="结果说明"
     >
    </el-table-column>
    <el-table-column label="操作">
       <template slot-scope="scope">
        <el-button type="text" size="small">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-row>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      building: '绿海湾花园A座',
      buildingId: '54662',
      alias: '无',
      price: '11.9万',
      located: '中心路1号',
      completionDate: '2017年',
      areaCovered: '56235',
      landArea: '5647',
      region: '南山区',
      street: '蛇口街道',
      group: 'NS014',
      builtUpArea: '45862',
      buildingNum: '50',
      onLayers: '32',
      underLayers: '3',
      nature: '商品房',
      houseNum: '658',
      height: '100',
      structure: '框架结构',
      purpose1: '住宅',
      purpose2: '普通住宅',
      tableData2: [{
        buildingId: '1',
        building: '101',
        builtUpArea: '563',
        layers: '12',
        type: '六室三厅三卫',
        orientation: '东南',
        price: '98564'
      }, {
        buildingId: '2',
        building: '102',
        builtUpArea: '263',
        layers: '12',
        type: '四室两厅三卫',
        orientation: '东南',
        price: '108564'
      }]
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
 @import '../../../styles/app.scss';
.title{
     font-size: 17px;
     font-weight:bold;
     margin-top: 10px;
     margin-left:20px;
      margin-bottom: 10px;
   }
   .border{
     border:0.5px solid #c0c4cc;
     margin-bottom: 20px;
   }
    .el-row-title {
    margin-top: 0px !important;
  }
   .el-row {
    margin-bottom:7px;
    margin-top: 20px;
    height:100%;
    margin-left: 20px;
    margin-right: 10px;
  }
   .btn_l{
     float: right;
     margin-top: 3px;
     margin-right: 9%;
     margin-bottom: 20px;
   }
    .btn_l1{
     float: right;
     margin-top: 3px;
     margin-right: 55%;
     margin-bottom: 20px;
   }
</style>