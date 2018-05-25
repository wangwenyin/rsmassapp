<template>
  <div class="labour-filter-container">
    <p>待筛选项目列表：</p>
    <el-table
      border
      :data="[]"
      style="width: 100%">
      <el-table-column
        prop="number"
        label="编号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="buildingNum"
        label="楼栋数量">
      </el-table-column>
      <el-table-column
        prop="houseNum"
        label="总户数">
      </el-table-column>
      <el-table-column
        prop="compDate"
        label="竣工日期">
      </el-table-column>
      <el-table-column
        prop="parcel"
        label="宗地号">
      </el-table-column>
      <el-table-column
        prop="group"
        label="组别">
      </el-table-column>
      <el-table-column
        prop="processState"
        label="处理状态">
      </el-table-column>
      <el-table-column
        prop="caseNum"
        label="待筛选案例数">
      </el-table-column>
    </el-table>
    <p><span>待筛选案例列表：</span><el-button type="primary" size="small">提交成果</el-button></p>
    <div class="filterList">
      <el-table
        border
        :data="[]"
        style="width: 50%">
        <el-table-column
          prop="building"
          label="楼栋">
        </el-table-column>
        <el-table-column
          prop="house"
          label="户">
        </el-table-column>
        <el-table-column
          prop="area"
          label="建筑面积">
        </el-table-column>
        <el-table-column
          prop="tradeDate"
          label="交易日期">
        </el-table-column>
        <el-table-column
          prop="layer"
          label="所在层">
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源">
        </el-table-column>
        <el-table-column
          prop="unitPrice"
          label="单价">
        </el-table-column>
        <el-table-column
          prop="revisedUnitPrice"
          label="修正后单价">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .labour-filter-container {
    padding: 10px;
    p {
      margin: 5px 0;
    }
    .filterList {
      th {
        width: 60px;
      }
    }
  }
</style>
