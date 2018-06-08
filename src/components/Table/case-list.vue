<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      id="el-table"
    >
      <el-table-column
        prop="number"
        label="编号"
        width="50"
      >
      </el-table-column>
      <el-table-column
        prop="name"
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
        prop="tradingTime"
        label="交易时间">
      </el-table-column>
      <el-table-column
        prop="region"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="district"
        label="片区">
      </el-table-column>
      <el-table-column
        prop="area"
        label="建筑面积">
      </el-table-column>
      <el-table-column
        prop="houseType"
        label="户型">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="总价">
      </el-table-column>
    </el-table>
    <el-pagination
      size="medium"
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        total: 100,
        tableData: [
          {
          id: '1',
          number: '1',
          lng: 113.939897,
          lat: 22.519751,
          name: '海洋之心',
          building: 'A',
          house: '4G',
          tradingTime: '2017-01-06',
          region: '南山',
          district: '后海',
          area: '62.12',
          houseType: '2室2厅',
          price: '69220.86',
          totalPrice: '4300000',
          caseNum: 3
        }, {
          id: '2',
          number: '2',
          lng: 113.944151,
          lat: 22.497102,
          name: '后海公馆',
          building: '1栋',
          house: '1603',
          tradingTime: '2017-01-11',
          region: '南山',
          district: '后海',
          area: '128.2',
          houseType: '4室2厅',
          price: '82683.31',
          totalPrice: '10600000',
          caseNum: 7
        }, {
          id: '3',
          number: '3',
          lng: 113.939995,
          lat: 22.516735,
          name: '育德佳园',
          building: '4栋A单元',
          house: '702',
          tradingTime: '2017-01-11',
          region: '南山',
          district: '后海',
          area: '72.63',
          houseType: '2室2厅',
          price: '72284.18',
          totalPrice: '5250000',
          caseNum: 5
        }, {
          id: '4',
          number: '4',
          lng: 113.942688,
          lat: 22.505098,
          name: '天骄华庭',
          building: '1栋A单元',
          house: '402',
          tradingTime: '2017-01-08',
          region: '南山',
          district: '后海',
          area: '39.26',
          houseType: '1室0厅',
          price: '84055.02',
          totalPrice: '3300000',
          caseNum: 1
        }, {
          id: '5',
          number: '5',
          lng: 113.939589,
          lat: 22.518062,
          name: '瑞铧苑',
          building: '2栋',
          house: '26A',
          tradingTime: '2017-01-08',
          region: '南山',
          district: '后海',
          area: '116.55',
          houseType: '2室2厅',
          price: '61776.06',
          totalPrice: '7200000',
          caseNum: 7
        }, {
          id: '6',
          number: '6',
          lng: 113.948524,
          lat: 22.497403,
          name: '皇庭港湾',
          building: 'G栋',
          house: '3AB',
          tradingTime: '2017-01-03',
          region: '南山',
          district: '后海',
          area: '87.91',
          houseType: '2室2厅',
          price: '72232.97',
          totalPrice: '6350000',
          caseNum: 9
        }, {
          id: '7',
          number: '7',
          lng: 113.940575,
          lat: 22.504367,
          name: '半岛花园A区',
          building: '10栋(海康阁)',
          house: '201',
          tradingTime: '2017-02-07',
          region: '南山',
          district: '后海',
          area: '90.63',
          houseType: '3室2厅',
          price: '54728.02',
          totalPrice: '4960000',
          caseNum: 4
        }, {
          id: '8',
          number: '8',
          lng: 113.94339,
          lat: 22.51736,
          name: '蔚蓝海岸三期',
          building: '30栋',
          house: '3H',
          tradingTime: '2017-02-22',
          region: '南山',
          district: '后海',
          area: '122.55',
          houseType: '3室2厅',
          price: '79804.16',
          totalPrice: '9780000',
          caseNum: 8
        }, {
          id: '9',
          number: '9',
          lng: 113.946829,
          lat: 22.495973,
          name: '阳光海滨花园',
          building: 'H栋',
          house: '308',
          tradingTime: '2017-03-28',
          region: '南山',
          district: '后海',
          area: '75.54',
          houseType: '3室1厅',
          price: '94890.12',
          totalPrice: '7168000',
          caseNum: 5
        }, {
          id: '10',
          number: '10',
          lng: 113.945282,
          lat: 22.493235,
          name: '澳城花园',
          building: 'b栋2单元',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '5室2厅',
          price: '88398.6',
          totalPrice: '12100000',
          caseNum: 3
        }]
      }
    },
    methods: {
      getTableData(data) {
        this.tableData = data
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-table {
    margin: 0 10px;
  }
  .el-pagination {
    margin-top: 10px;
    text-align: center;
  }
  #el-table td {
    padding: 5px 0;
  }
</style>
