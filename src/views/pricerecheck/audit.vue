<template>
  <div class="audit-container">
    <div class="sqr-detail">
      <h3>申请人信息</h3>
      <el-row>
        <el-col :span="6">权利人名称:</el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6">公民身份证号或组织代码:</el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">联系人电话:</el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6">申请日期:</el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <div class="fc-detail">
      <h3>房产信息</h3>
      <el-row>
        <el-col :span="6">房产名称:</el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6">房产类别:</el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row>
        <el-col :span="4">权利人身份证或营业执照:</el-col>
        <el-col :span="3">
          <el-button type="plain" size="small">查看</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">房地产证书:</el-col>
        <el-col :span="3">
          <el-button type="plain" size="small">查看</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">授权书:</el-col>
        <el-col :span="3">
          <el-button type="plain" size="small">查看</el-button>
        </el-col>
      </el-row>
      <el-row class="explain">说明：如果委托代理人，需要业主签名的授权书扫描件；如业主本人申请，则跳过此步。</el-row>
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
    <div class="audit-result">
      <h3>审核结果</h3>
      <el-row>
        <el-col :span="3">
          <el-radio v-model="radio" label="1">通过</el-radio>
        </el-col>
        <el-col :span="3">
          分配复核估价师：
        </el-col>
        <el-col :span="4">
          <el-select v-model="name" placeholder="请选择" size="medium">
            <el-option
              v-for="item in names"
              :key="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" size="small">确定</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <el-radio v-model="radio" label="2">不通过</el-radio>
        </el-col>
        <el-col :span="9">
          <textarea v-model="noPassValue" placeholder="不通过的原因..."></textarea>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" size="small" class="return">退回申请人</el-button>
        </el-col>
      </el-row>
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
  .audit-container {
    padding-left: 20px;
    .sqr-detail, .fc-detail, .reason-state, .audit-result {
      margin-top: 30px;
      .el-row {
        margin-top: 15px;
        color: #606266
      }
      .explain {
        font-size: 14px;
        color: red;
      }
      .text {
        width: 50%;
        padding: 10px;
        font-size: 14px;
        text-indent:30px;
        border: 1px solid #7b7676;
        border-radius: 5px;
      }
      textarea {
        width: 100%;
        height: 100px;
        border-radius: 5px;
        border: 1px solid #808080;
      }
      .return {
        margin: 65px 0 0 20px;
      }
    }
  }
  
</style>
