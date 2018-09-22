<template>
  <div class="app">
    <div class="labour-filter-container content">
      <p>待筛选项目列表：</p>
      <el-table
        border
        :data="tableData1"
        style="width: 100%">
        <el-table-column
          prop="number"
          label="编号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
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
          prop="tradingTime"
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
      <div>
        <div class="filterList" style="width: 59%;float: left">
          <el-table
            border
            :data="tableData2"
            style="width: 100%">
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
              prop="tradingTime"
              label="交易日期">
            </el-table-column>
            <el-table-column
              prop="layer"
              label="所在层">
            </el-table-column>
            <!--<el-table-column
              prop="source"
              label="来源">
            </el-table-column>-->
            <el-table-column
              prop="price"
              label="单价">
            </el-table-column>
            <el-table-column
              prop="revisedUnitPrice"
              label="修正后单价">
            </el-table-column>
            <!--<el-table-column
              prop="state"
              label="状态">
            </el-table-column>-->
          </el-table>
        </div>
        <div id="echarts" style="width: 40%;height:350px;float: left;margin-left: 1%"></div>
      </div>
      <div class="map">
        <bd-map :center="center"></bd-map>
      </div>
    </div>
  </div>
</template>

<script>
  import BdMap from '../components/BdMap'
  import echarts from 'echarts'
  
  export default {
    components: {
      BdMap
    },
    data() {
      return {
        value1: '67455',
        options: [],
        center: { lng: 113.950554, lat: 22.557861 },
        tableData2: [{
          id: '3',
          number: '3',
          lng: 113.939995,
          lat: 22.516735,
          name: '育德佳园',
          building: '4栋A单元',
          house: '702',
          tradingTime: '2017-03-27',
          region: '南山',
          district: '后海',
          area: '72.63',
          houseType: '2室2厅',
          price: '72284.18',
          revisedUnitPrice: '72200',
          layer: '7',
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
          tradingTime: '2017-03-21',
          region: '南山',
          district: '后海',
          area: '39.26',
          houseType: '1室0厅',
          price: '84055.02',
          revisedUnitPrice: '84000',
          layer: '4',
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
          tradingTime: '2017-03-15',
          region: '南山',
          district: '后海',
          area: '116.55',
          houseType: '2室2厅',
          price: '61776.06',
          revisedUnitPrice: '61700',
          layer: '26',
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
          tradingTime: '2017-03-03',
          region: '南山',
          district: '后海',
          area: '87.91',
          houseType: '2室2厅',
          price: '72232.97',
          revisedUnitPrice: '72200',
          layer: '3',
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
          tradingTime: '2017-03-07',
          region: '南山',
          district: '后海',
          area: '90.63',
          houseType: '3室2厅',
          price: '54728.02',
          revisedUnitPrice: '54700',
          layer: '2',
          totalPrice: '4960000',
          caseNum: 4
        }],
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
          parcel: 'T102-4839',
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
          parcel: 'T103-4126',
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
          parcel: 'T154-3575',
          group: 'NS03-0983',
          processState: '待筛选',
          area: '136.88',
          houseType: '5室2厅',
          price: '88398.6',
          totalPrice: '12100000',
          caseNum: 3
        }]
      }
    },
    mounted() {
      this.draw()
    },
    methods: {
      draw() {
        var myChart = echarts.init(document.getElementById('echarts'))
  
        var option = {
          title: {
            text: '3月价格曲线图'
          },
          tooltip: {},
          legend: {
            data: ['3月价格']
          },
          xAxis: {
            type: 'category',
            data: ['3/1', '3/5', '3/10', '3/15', '3/20', '3/25', '3/30']
          },
          yAxis: {
            type: 'value',
            data: [54000, 56000, 58000, 60000, 62000, 64000, 66000, 68000, 70000, 72000, 74000]
          },
          series: [{
            data: [70000, 70500, 66000, 69000, 70500, 64000, 69000, 72000, 71400, 72000, 73000],
            type: 'line',
            smooth: true
          }]
        }

        myChart.setOption(option)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .labour-filter-container {
    padding: 10px;
    p {
        margin: 5px 0;
      }
    .map {
      margin-top: 10px;
    }
  }
</style>
