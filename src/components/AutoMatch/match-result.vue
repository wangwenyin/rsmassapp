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
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="总价">
      </el-table-column>
      <el-table-column
        prop="source"
        label="房源编码">
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
        total: 100,
        tableData: [{
          number: '1',
          project: '绿海湾花园',
          building: '7栋',
          house: '703',
          region: '南山',
          houseType: '住宅',
          area: '103',
          tradeDate: '2017-03-11',
          price: '90873.79',
          totalPrice: '9360000',
          source: '184888081756'
        },
        {
          id: '17',
          number: '2',
          lng: 113.94339,
          lat: 22.51736,
          project: '蔚蓝海岸三期',
          building: '30栋',
          house: '3H',
          tradeDate: '2017-02-22',
          region: '南山',
          district: '后海',
          area: '122.55',
          houseType: '3室2厅',
          price: '79804.16',
          totalPrice: '9780000',
          caseNum: 8,
          source: '182888081753'
        }, {
          id: '18',
          number: '3',
          lng: 113.946829,
          lat: 22.495973,
          project: '阳光海滨花园',
          building: 'H栋',
          house: '308',
          tradeDate: '2017-03-28',
          region: '南山',
          district: '后海',
          area: '75.54',
          houseType: '3室1厅',
          price: '94890.12',
          totalPrice: '7168000',
          caseNum: 5,
          source: '184888081715'
        }, {
          id: '19',
          number: '4',
          lng: 113.945282,
          lat: 22.493235,
          project: '澳城花园',
          building: 'b栋2单元',
          house: '4A',
          tradeDate: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '5室2厅',
          price: '88398.6',
          totalPrice: '12100000',
          caseNum: 3,
          source: '174884081751'
        },
        {
          id: '6',
          number: '5',
          lng: 113.944151,
          lat: 22.497102,
          project: '后海公馆',
          building: '1栋',
          house: '205',
          tradeDate: '2017-03-15',
          region: '南山',
          district: '后海',
          area: '131.26',
          houseType: '4室2厅',
          price: '89136.07',
          totalPrice: '11700000',
          caseNum: 4,
          source: '177888081718'
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
