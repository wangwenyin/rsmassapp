<template>
  <div class="auto-filter-container">
    <el-row :gutter="10">
      <el-col :span="4">
        <selectBox placeholder="请选择筛选方法" :options="filterMethods" size="small"></selectBox>
      </el-col>
      <el-col :span="4">
        <inputBox placeholder="偏离评估价阀值" size="small"></inputBox>
      </el-col>
      <el-col :span="4">
        <inputBox placeholder="项目案列数阀值" size="small"></inputBox>
      </el-col>
      <el-col :span="4">
        <inputBox placeholder="项目内异常案列数阀值" size="small"></inputBox>
      </el-col>
      <el-col :span="2.5">
        <el-button plain size="small">价格指数设置</el-button>
      </el-col>
      <el-col :span="2.5">
        <el-button type="primary" size="small">开始筛选</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24">
        <textarea v-model="value" placeholder="自动筛选日志……"></textarea>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-button type="primary" size="small">任务分配</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" size="small">任务统计</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-table
          :data="tableData1"
          border>
          <el-table-column
            prop="number"
            label="组号">
          </el-table-column>
          <el-table-column
            prop="caseNum"
            label="案列数">
          </el-table-column>
          <el-table-column
            prop="person"
            label="人员">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <el-table
          :data="tableData2"
          border>
          <el-table-column
            prop="person"
            label="人员">
          </el-table-column>
          <el-table-column
            prop="caseNum"
            label="案列数">
          </el-table-column>
          <el-table-column
            prop="compNum"
            label="完成数">
          </el-table-column>
          <el-table-column
            prop="progress"
            label="进度">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SelectBox from '@/components/Select/select'
  import InputBox from '@/components/Input'
  
  export default {
    components: {
      SelectBox,
      InputBox
    },
    data() {
      return {
        filterMethods: ['评估价筛选方法', '基于正态分布的筛选方法', '基于高斯分布的筛选方法'],
        value: '',
        tableData1: [{}, {}, {}, {}, {}, {}],
        tableData2: [{}, {}, {}, {}, {}, {}]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .auto-filter-container {
    padding: 0 10px;
    .el-row {
      margin-top: 10px;
      textarea {
        width: 100%;
        height: 300px;
        border-radius: 5px;
        border: 1px solid #808080;
      }
    }
  }
</style>
