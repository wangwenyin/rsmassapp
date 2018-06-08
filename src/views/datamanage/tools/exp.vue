<template>
  <div style="margin-top:40px">
    <el-row :gutter="10" style="margin-left:60px;margin-right:20px">
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
   <el-row :gutter="10" style="margin-left:60px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
   <span>2.选择导出路径 :</span>
  </el-col>
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
   <el-input v-model="input" placeholder=" "></el-input>
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
<el-row :gutter="10" style="margin-left:60px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
   <span>3.导出条件设置 :</span> 
  </el-col>
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
    <el-button>条件设置</el-button>
  </el-col>
</el-row>
<el-row style="margin-left:60px;margin-right:60px;">
<el-input
  type="textarea"
  :rows="3"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
</el-row>
<el-row :gutter="10" style="margin-left:60px;margin-right:20px">
  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
   <span>4.导出预览 :</span>
  </el-col>
</el-row>
<el-row>
<el-table
    :data="tableData2"
    style="width: 90%;margin-left:60px;"  border
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
<el-row :gutter="10" style="margin-left:60px;margin-right:20px;margin-top:40px;margin-bottom:40px;">
   <el-button type="primary">开始导出</el-button>
</el-row>


  </div>
</template>
<script>
import Carousel from '@/components/Carousel/index'

export default {
  components: { Carousel },
  data() {
    return {
      textarea: '导出字段：编号、项目名称、楼栋名称，户名称，占地面积，建筑年代，面积导出条件：建筑面积 > 90 and 项目名称 = “绿海湾花园”'
    }
  }
}
</script>
<style>
  .area{
   margin-left: auto ;
   float: right;
  }
  .con {
     margin-top: 13px;
     margin-bottom: 13px;
     margin-left:20px;
     color:#7b7676;
  }
  .val {
     margin-top: 13px;
     margin-bottom: 13px;
     margin-left:20px;
    font-weight:bold;
  }
  .el-row {
      margin-left: 0;
      margin-right: 0;
  }

  .el-card {
      height: 150px;
  }

  .el-card__body {
      height: 100%;
      padding: 10px;
      overflow: hidden;
  }

  .el-col-offset-2 {
      margin-left: 0;
      margin-top: 10px
  }

  .text {
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    float: left;
    font-size: 12px;
  }

  .project_d {
    font-size: 23px;
    font-weight: bold;
  }
  .el-tag--mini
  {
    padding:0 4.8px;
    margin-left: 3px
  }
</style>