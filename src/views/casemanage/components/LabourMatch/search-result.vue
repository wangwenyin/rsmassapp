<template>
  <div class="searchResult">
    <el-table
      :data="tableData1"
      border
      ref="table"
      style="width: 49.5%">
      <el-table-column
        prop="number"
        label="编号"
        width="60"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
      >
      </el-table-column>
      <el-table-column
        prop="region"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="street"
        label="街道"
      >
      </el-table-column>
      <el-table-column
        prop="parcel"
        label="宗地号">
      </el-table-column>
      <el-table-column
        prop="time"
        label="建筑年代">
      </el-table-column>
    </el-table>
    <el-table
      class="middleTable"
      :data="tableData2"
      border
      ref="table"
      style="width: 49.5%">
      <el-table-column
        prop="number"
        label="编号"
        width="102"
      >
      </el-table-column>
      <el-table-column
        prop="building"
        label="楼栋名称">
      </el-table-column>
      <el-table-column
        prop="otherName"
        label="别名">
      </el-table-column>
      <el-table-column
        prop="totalFloors"
        label="总层数">
      </el-table-column>
    </el-table>
    <div class="matchBtn">
      <el-button type="primary" size="medium">保存匹配</el-button>
      <el-button type="primary" size="medium">提交匹配</el-button>
    </div>
    <div class="matchResult">已提交{{commitNum}}条匹配结果, 已保存{{saveNum}}条匹配结果, 还有{{remainNum}}条未匹配案例。</div>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        tableData1: [{
          id: '17',
          number: '1',
          lng: 113.94339,
          lat: 22.51736,
          name: '蔚蓝海岸三期',
          building: '30栋',
          buildingNum: '5',
          houseNum: '437',
          house: '3H',
          tradingTime: '2017-02-22',
          region: '南山',
          district: '后海',
          street: '登良路',
          time: '2016',
          parcel: 'T985-3217',
          group: 'NS11-1498',
          processState: '待筛选',
          area: '122.55',
          houseType: '3室2厅',
          price: '79804.16',
          totalPrice: '9780000',
          caseNum: 8
        }, {
          id: '18',
          number: '2',
          lng: 113.946829,
          lat: 22.495973,
          name: '阳光海滨花园',
          building: 'H栋',
          buildingNum: '3',
          houseNum: '268',
          house: '308',
          tradingTime: '2017-03-28',
          region: '南山',
          district: '后海',
          street: '后海滨路',
          time: '2016',
          parcel: 'T209-5107',
          group: 'NS07-0936',
          processState: '待筛选',
          area: '75.54',
          houseType: '3室1厅',
          price: '94890.12',
          totalPrice: '7168000',
          caseNum: 5
        }, {
          id: '19',
          number: '3',
          lng: 113.945282,
          lat: 22.493235,
          name: '澳城花园',
          building: 'b栋2单元',
          buildingNum: '6',
          houseNum: '658',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          street: '后海滨路',
          time: '2015',
          parcel: 'T116-1532',
          group: 'NS16-1532',
          processState: '待筛选',
          area: '136.88',
          houseType: '5室2厅',
          price: '88398.6',
          totalPrice: '12100000',
          caseNum: 3
        }],
        tableData2: [{
          id: '5',
          number: '1',
          lng: 113.939589,
          lat: 22.518062,
          name: '瑞铧苑',
          building: '30栋',
          house: '26A',
          tradingTime: '2017-03-15',
          region: '南山',
          district: '后海',
          area: '116.55',
          houseType: '2室2厅',
          price: '61776.06',
          revisedUnitPrice: '61700',
          layer: '26',
          totalPrice: '7200000',
          caseNum: 7,
          otherName: '暂无',
          totalFloors: '30'
        }, {
          id: '6',
          number: '2',
          lng: 113.948524,
          lat: 22.497403,
          name: '皇庭港湾',
          building: 'H栋',
          house: '3AB',
          tradingTime: '2017-03-03',
          region: '南山',
          district: '后海',
          area: '87.91',
          houseType: '2室2厅',
          price: '72232.97',
          revisedUnitPrice: '72200',
          layer: '3',
          totalPrice: '6350000',
          caseNum: 9,
          otherName: '暂无',
          totalFloors: '24'
        }, {
          id: '7',
          number: '3',
          lng: 113.940575,
          lat: 22.504367,
          name: '半岛花园A区',
          building: 'b栋2单元',
          house: '201',
          tradingTime: '2017-03-07',
          region: '南山',
          district: '后海',
          area: '90.63',
          houseType: '3室2厅',
          price: '54728.02',
          revisedUnitPrice: '54700',
          layer: '2',
          totalPrice: '4960000',
          caseNum: 4,
          otherName: '暂无',
          totalFloors: '28'
        }],
        commitNum: 56,
        saveNum: 78,
        remainNum: 342
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .searchResult {
    width: 100%;
    .el-table {
      float: left;
      margin: 15px 0;
      &.middleTable {
        margin-left: 1%;
      }
      .el-table--scrollable-x .el-table__body-wrapper {
        overflow-x: hidden;
      }
    }
    .matchBtn {
      width: 100%;
      margin-top: 15px;
      overflow: hidden;
      .el-button {
        &:first-child {
          float: left;
        }
        &:last-child {
          float: right;
        }
      }
    }
    .matchResult {
      margin-top: 80px;
      font-size: 13px;
    }
  }
</style>
