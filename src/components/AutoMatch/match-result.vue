<template>
  <div class="tablePagination">
    <el-table
      :data="tableData"
      size="small"
      border
      style="width: 100%">
      <el-table-column
        prop="number"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="building"
        label="楼栋名称">
      </el-table-column>
      <el-table-column
        prop="house"
        label="户名称">
      </el-table-column>
      <el-table-column
        prop="region"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="houseType"
        label="户型">
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
        prop="unitPrice"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="总价">
      </el-table-column>
      <el-table-column
        prop="source"
        label="来源">
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        total:100,
        tableData: [{
          number: '1',
          project: '绿海湾花园',
          building: '7栋',
          house: '9户',
          region: '深圳',
          houseType: '住宅',
          area: '120',
          tradeDate: '2018-5-22',
          unitPrice: '15000',
          totalPrice: '1800000',
          source: '斯维尔'
        },
          {
            number: '1',
            project: '绿海湾花园',
            building: '7栋',
            house: '9户',
            region: '深圳',
            houseType: '住宅',
            area: '120',
            tradeDate: '2018-5-22',
            unitPrice: '15000',
            totalPrice: '1800000',
            source: '斯维尔'
          },
          {
            number: '1',
            project: '绿海湾花园',
            building: '7栋',
            house: '9户',
            region: '深圳',
            houseType: '住宅',
            area: '120',
            tradeDate: '2018-5-22',
            unitPrice: '15000',
            totalPrice: '1800000',
            source: '斯维尔'
          },
          {
            number: '1',
            project: '绿海湾花园',
            building: '7栋',
            house: '9户',
            region: '深圳',
            houseType: '住宅',
            area: '120',
            tradeDate: '2018-5-22',
            unitPrice: '15000',
            totalPrice: '1800000',
            source: '斯维尔'
          },
          {
            number: '1',
            project: '绿海湾花园',
            building: '7栋',
            house: '9户',
            region: '深圳',
            houseType: '住宅',
            area: '120',
            tradeDate: '2018-5-22',
            unitPrice: '15000',
            totalPrice: '1800000',
            source: '斯维尔'
          }]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tablePagination {
    margin-top: 10px;
    .el-table {
      border: 1px solid gray;
    }
    .el-pagination {
      text-align: center;
      margin: 15px 0 10px 0;
    }
  }
</style>
