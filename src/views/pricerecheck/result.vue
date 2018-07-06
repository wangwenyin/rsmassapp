<template>
  <div class="audit-container">
    <div class="audit-detail">
      <div class="item">
        <h3>审核评估报告</h3>
        <el-button size="medium">在线浏览</el-button>
        <el-button size="medium">报告下载</el-button>
      </div>
      <div class="item">
        <h3>审核评估结果</h3>
        <p>单价：67000元/平方米</p>
        <p>面积：100平方米</p>
        <p>总价：6700000元</p>
      </div>
    </div>
    <div class="audit-result">
      <h3>审核结果</h3>
      <el-row>
        <el-col :span="9">
          <el-radio v-model="radio" label="1">通过</el-radio>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" size="small">上传审核结果</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" size="small">提交</el-button>
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
          <el-button type="primary" size="small" class="return">退回估价师</el-button>
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
        radio: '1',
        noPassValue: ''
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .audit-container {
    padding: 30px;
    .audit-detail {
      width: 100%;
      text-align: center;
      overflow: hidden;
      .item { 
        float: left;
        width: 48%;
        height: 250px;
        border: 1px solid #808080;
        border-radius: 5px;
        &:last-child {
          float: right;
        }
        h3 {
          margin-top: 100px;
        }
        .el-button {
          margin-top: 90px;
        }
      }
    }
    .audit-result {
      margin-top: 30px;
      .el-row {
        margin-top: 15px;
        color: #606266
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
