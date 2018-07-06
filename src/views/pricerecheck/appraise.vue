<template>
  <div class="appraise-container">
    <div class="sqr-detail">
      <h3>申请人信息</h3>
      <el-row>
        <el-col :span="2">权利人名称:</el-col>
        <el-col :span="4" class="data">张三</el-col>
        <el-col :span="2">联系人电话:</el-col>
        <el-col :span="4" class="data">13971608536</el-col>
        <el-col :span="2">申请日期:</el-col>
        <el-col :span="4" class="data">2018-7-3</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">公民身份证号或组织代码:</el-col>
        <el-col :span="6" class="data">4211261975364312</el-col>
      </el-row>
    </div>
    <div class="fc-detail">
      <h3>房产信息</h3>
      <el-row>
        <el-col :span="2">房产名称:</el-col>
        <el-col :span="4" class="data">水榭花都</el-col>
        <el-col :span="2">房产类别:</el-col>
        <el-col :span="4" class="data">住宅</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">权利人身份证或营业执照:</el-col>
        <el-col :span="3">
          <el-button type="plain" size="small">查看</el-button>
        </el-col>
        <el-col :span="4">房地产证书:</el-col>
        <el-col :span="3">
          <el-button type="plain" size="small">查看</el-button>
        </el-col>
        <el-col :span="4">授权书:</el-col>
        <el-col :span="3">
          <el-button type="plain" size="small">查看</el-button>
        </el-col>
      </el-row>
      <el-row class="explain">授权书说明：如果委托代理人，需要业主签名的授权书扫描件；如业主本人申请，则跳过此步。</el-row>
    </div>
    <div class="reason-state">
      <h3>正当理由陈述</h3>
      <div class="text">
        首页：用户看到任务列表。
        流程查看：用户可以查看自己参加了的流程。
        数据审核：审核人员对申请者提交的材料、填写的内容进行初审，并分派估价人员和终审人员。
        复核估价：估价人员跳转至个案评估系统。
        结果终审：对估价报告和估价结果进行终审，并提交数据或退回申请人。
        复核统计：对复核基本情况进行统计。
      </div>
    </div>
    <div class="btn"> 
      <router-link :to="{name: 'Reason'}">
        <el-button type="primary" size="small">填写不调整价格原因</el-button>
      </router-link>
      <router-link :to="{name: 'Survey'}">
        <el-button type="primary" size="small" class="btn2">填写现场查勘结果</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        name: '',
        names: ['张三', '李四', '王五'],
        radio: '1',
        noPassValue: ''
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .appraise-container {
    padding-left: 30px;
    .sqr-detail, .fc-detail, .reason-state {
      margin-top: 30px;
      h3 {
        margin-bottom: 30px;
        color: #585858;
      }
      .el-row {
        display: flex;
        align-items: center;
        margin-top: 20px;
        color: #606266;
        .data {
          color: #585858;
          text-decoration: underline
        }
      }
      .explain {
        font-size: 14px;
        color: red;
      }
      .text {
        width: 80%;
        margin-top: 20px;
        padding: 10px;
        font-size: 14px;
        text-indent:30px;
        border: 1px solid #7b7676;
        border-radius: 5px;
      }
    }
    .btn {
      margin-top: 20px;
      margin-left: 20%;
      .btn2 {
        margin-left: 20%
      }
    }
  }
  
</style>