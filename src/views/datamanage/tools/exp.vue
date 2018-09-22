<template>
<div class="app">
  <div class="margin10">
    <el-row class="el-row-title"> 
        <el-col :span="24" >
            <div class="title">导出数据</div> 
                <div class="border"></div> 
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-left:36px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
   <span>1.选择导出对象 :</span>
  </el-col>
  <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
   <template>
      <el-radio v-model="radio" label="1">宗地</el-radio>
      <el-radio v-model="radio" label="2">项目</el-radio>
      <el-radio v-model="radio" label="3">楼栋</el-radio>
      <el-radio v-model="radio" label="4">户</el-radio>
   </template>
  </el-col>
</el-row>
   <el-row :gutter="10" style="margin-left:36px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" style="margin-top: 7px;">
   <span>2.选择导出路径 :</span>
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
  
  <el-button slot="trigger" size="small" type="primary">浏览</el-button>
  <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
</el-upload>
  </el-col>
</el-row>
<el-row :gutter="10" style="margin-left:36px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" style="margin-top: 7px;">
   <span>3.导出条件设置 :</span> 
  </el-col>
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
    <el-button size="small" >条件设置</el-button>
  </el-col>
</el-row>
<el-row style="margin-left:36px;margin-right:60px;">
<el-input
  type="textarea"
  :rows="3" style="width: 98%;"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
</el-row>
<el-row :gutter="10" style="margin-left:36px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
   <span>4.导出预览 :</span>
  </el-col>
</el-row>
<el-row>
<el-table
    :data="tableData2"
    style="width: 94%;margin-left:19px;margin-right:40px"  border
    :row-class-name="tableRowClassName">
    <el-table-column 
      prop="buildingId"
      label="编号"
     >
    </el-table-column>
    <el-table-column 
      prop="building"
      label="项目名称"
     >
    </el-table-column>
    <el-table-column label="楼栋名称">
      
    </el-table-column>
    <el-table-column label="...">
       
    </el-table-column>
  </el-table>
</el-row>
<el-row >
   <el-button type="primary" size="small" class="btn_l" >开始导出</el-button>
</el-row>


  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      textarea: '导出字段：编号、项目名称、楼栋名称，户名称，占地面积，建筑年代，面积导出条件：建筑面积 > 90 and 项目名称 = “绿海湾花园”'
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
   .el-row {
    margin-bottom:7px;
    margin-top: 20px;
    height:100%;
    margin-left: 20px;
    margin-right: 10px;
  }
   .btn_l{
     float: right;
     margin-left: -7%;
     margin-top: 3px;
     margin-right: 4.5%;
     margin-bottom: 20px;
   }
    .el-row-title {
    margin-top: 0px !important;
  }
</style>