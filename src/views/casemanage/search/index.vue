<template>
  <div class="caseSearch">
    <el-row :gutter="10" style="margin-left: 10px">
      <el-col :span="4">
        <SelectBox placeholder='请选择案列类型' :options="caseTypes" @caseTypeChange="change"></SelectBox>
      </el-col>
      <el-col :span="10">
        <date-picker></date-picker>
      </el-col>
      <el-col :span="6">
        <el-input
          placeholder="请输入项目名称"
          size="medium"
          v-model="searchValue"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" size="medium" @click="searchCase">查询</el-button>
      </el-col>
    </el-row>
    <div class="line"></div>
    <div class="btn">
      <span>
        <el-button type="primary" size="small">添加案例</el-button>
        <el-button type="primary" size="small">导出案例</el-button>
      </span>
      <span>
        <el-button :type="mapType" size="small" @click="showMap">地图模式</el-button>
        <el-button :type="listType" size="small" @click="showList">列表模式</el-button>
      </span>
    </div>
    <baidu-map class="bm-view" ref="baiduMap" v-show="isShow" :center="center" :zoom="16" :map-click="false" :scroll-wheel-zoom="true" @ready="mapReady">
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP', 'BMAP_PERSPECTIVE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <!--<bm-control anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 10}">
        <el-button plain size="small" @click="regain">大图</el-button>
      </bm-control>-->
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT">
        <el-button  size="small" type="primary" @click="handleSale">买卖</el-button>
        <el-button  size="small" type="primary" @click="handleRent">租赁</el-button>
        <el-button  size="small" type="primary">挂牌</el-button>
        <el-button  size="small" type="primary">抵押</el-button>
        <el-button  size="small" type="primary">评估</el-button>
      </bm-control>
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 50}">
        <el-popover
          title="请选择图层："
          width="200"
          trigger="click">
          <el-button plain size="small">行政区划</el-button>
          <el-button plain size="small">评估分区</el-button>
          <el-button plain size="small" style="margin-left: 0;margin-top: 5px">生活配套</el-button>
          <el-button plain size="small" style="margin-top: 5px">教育配套</el-button>
          <el-button plain size="small" style="margin-left: 0;margin-top: 5px">交通配套</el-button>
          <el-button plain size="small" slot="reference">图层</el-button>
        </el-popover>
      </bm-control>
      <bm-control anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{width: 10, height: 40}">
        <el-input v-model="keyword" size="mini" clearable placeholder="请输入关键词"></el-input>
      </bm-control>
      <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
      <prj-overlay v-for="item in communities" :key="item.id"
                   :position="{lng: item.lng, lat: item.lat}"
                   :data="item"
                   :tableData="searchedCaseList"
                   ref="prjOverlay"
      ></prj-overlay>
    </baidu-map>
    <case-list v-show="!isShow" ref="caseList"></case-list>
  </div>
</template>

<script>
  import SelectBox from '@/components/Select/select'
  import BaiduMap from 'vue-baidu-map/components/Map/Map'
  import PrjOverlay from '@/components/MapOverlay/PrjOverlay'
  import DatePicker from '@/components/DateTimePicker'
  import InputBox from '@/components/Input'
  import CaseList from '@/components/Table/case-list'

  export default {
    components: { SelectBox, BaiduMap, PrjOverlay, DatePicker, InputBox, CaseList },
    data() {
      return {
        center: { lng: 0, lat:0},
        mapType: 'primary',
        listType: 'plain',
        caseType: 0,
        caseTypes: ['买卖', '租赁', '挂牌', '估价', '询价'],
        isShow: true,
        flag: false,
        keyword: '',
        searchValue: '',
        saleCase: null,
        rentCase: null,
        searchedCaseList: [],
        communities: []
      }
    },
    created() {
      this.communities = [
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
          number: '1',
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
          caseNum: 4
        }, {
          id: '3',
          number: '2',
          lng: 113.944151,
          lat: 22.497102,
          name: '后海公馆',
          building: '4栋',
          house: '701',
          tradingTime: '2017-02-25',
          region: '南山',
          district: '后海',
          area: '103',
          houseType: '3室2厅',
          price: '90873.79',
          totalPrice: '9360000',
          caseNum: 4
        }, {
          id: '4',
          number: '3',
          lng: 113.944151,
          lat: 22.497102,
          name: '后海公馆',
          building: '3栋',
          house: '904',
          tradingTime: '2017-03-21',
          region: '南山',
          district: '后海',
          area: '66.24',
          houseType: '2室1厅',
          price: '89070.05',
          totalPrice: '5900000',
          caseNum: 4
        }, {
          id: '5',
          number: '4',
          lng: 113.944151,
          lat: 22.497102,
          name: '后海公馆',
          building: '4栋',
          house: '2802',
          tradingTime: '2017/3/11',
          region: '南山',
          district: '后海',
          area: '103',
          houseType: '3室2厅',
          price: '97087.38',
          totalPrice: '10000000',
          caseNum: 4
        }, {
          id: '6',
          number: '5',
          lng: 113.944151,
          lat: 22.497102,
          name: '后海公馆',
          building: '1栋',
          house: '205',
          tradingTime: '2017-03-15',
          region: '南山',
          district: '后海',
          area: '131.26',
          houseType: '4室2厅',
          price: '89136.07',
          totalPrice: '11700000',
          caseNum: 4
        }, {
          id: '7',
          number: '6',
          lng: 113.944151,
          lat: 22.497102,
          name: '后海公馆',
          building: '3栋',
          house: '1704',
          tradingTime: '2017-09-13',
          region: '南山',
          district: '后海',
          area: '66.34',
          houseType: '2室1厅',
          price: '90443.17',
          totalPrice: '6000000',
          caseNum: 4
        }, {
          id: '8',
          number: '7',
          lng: 113.944151,
          lat: 22.497102,
          name: '后海公馆',
          building: '2栋',
          house: '1904',
          tradingTime: '2017-10-22',
          region: '南山',
          district: '后海',
          area: '66.34',
          houseType: '4室2厅',
          price: '90865.24',
          totalPrice: '6028000',
          caseNum: 4
        }, {
          id: '9',
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
          id: '10',
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
          id: '11',
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
          id: '12',
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
          id: '13',
          number: '1',
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
          id: '14',
          number: '2',
          lng: 113.940575,
          lat: 22.504367,
          name: '半岛花园A区',
          building: '3栋',
          house: '410',
          tradingTime: '2017-04-12',
          region: '南山',
          district: '后海',
          area: '91.39',
          houseType: '3室2厅',
          price: '55968.92',
          totalPrice: '5115000',
          caseNum: 4
        }, {
          id: '15',
          number: '3',
          lng: 113.940575,
          lat: 22.504367,
          name: '半岛花园A区',
          building: '10栋(海麟阁)',
          house: '802',
          tradingTime: '2017-06-16',
          region: '南山',
          district: '后海',
          area: '100.24',
          houseType: '4室2厅',
          price: '55167.6',
          totalPrice: '5530000',
          caseNum: 4
        }, {
          id: '16',
          number: '4',
          lng: 113.940575,
          lat: 22.504367,
          name: '半岛花园A区',
          building: '3栋',
          house: '409',
          tradingTime: '2017-08-17',
          region: '南山',
          district: '后海',
          area: '61.75',
          houseType: '3室2厅',
          price: '113765.18',
          totalPrice: '7025000',
          caseNum: 4
        }, {
          id: '17',
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
          id: '18',
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
          id: '19',
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
        },{
          id: '20',
          number: '11',
          lng: 113.945851,
          lat: 22.509343,
          name: '君汇新天花园',
          building: 'b栋',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '3室2厅',
          price: '87882.82',
          totalPrice: '12100000',
          caseNum: 5
        },{
          id: '21',
          number: '11',
          lng: 113.948092,
          lat: 22.503225,
          name: '卓越维港',
          building: 'b栋',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '3室2厅',
          price: '108932.46',
          totalPrice: '12100000',
          caseNum: 3
        } ,{
          id: '22',
          number: '11',
          lng: 113.946281,
          lat: 22.498561,
          name: '绿海湾花园',
          building: 'b栋',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '3室2厅',
          price: '105858.17',
          totalPrice: '12100000',
          caseNum: 6
        },{
          id: '23',
          number: '11',
          lng: 113.937918,
          lat: 22.514552,
          name: '后海名苑居',
          building: 'b栋',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '3室2厅',
          price: '57007',
          totalPrice: '12100000',
          caseNum: 8
        },{
          id: '24',
          number: '11',
          lng: 113.934616,
          lat: 22.504396,
          name: '翠薇园',
          building: 'b栋',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '3室2厅',
          price: '68125',
          totalPrice: '12100000',
          caseNum: 2
        },{
          id: '25',
          number: '11',
          lng: 113.936674,
          lat: 22.50903,
          name: '榆桂小区',
          building: 'b栋',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '3室2厅',
          price: '101375',
          totalPrice: '12100000',
          caseNum: 3
        },{
          id: '26',
          number: '11',
          lng: 113.949271,
          lat: 22.511945,
          name: '深圳湾1号',
          building: 'b栋',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '3室2厅',
          price: '117058',
          totalPrice: '12100000',
          caseNum: 7
        },{
          id: '27',
          number: '11',
          lng: 113.945174,
          lat: 22.525352,
          name: '漾日湾畔',
          building: 'b栋',
          house: '4A',
          tradingTime: '2017-03-11',
          region: '南山',
          district: '后海',
          area: '136.88',
          houseType: '3室2厅',
          price: '117058',
          totalPrice: '102101.68',
          caseNum: 5
        }]
      this.saleCase = {
        type: 0,
        caseList: [
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
            number: '1',
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
            caseNum: 4
          }, {
            id: '3',
            number: '2',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '4栋',
            house: '701',
            tradingTime: '2017-02-25',
            region: '南山',
            district: '后海',
            area: '103',
            houseType: '3室2厅',
            price: '90873.79',
            totalPrice: '9360000',
            caseNum: 4
          }, {
            id: '4',
            number: '3',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '3栋',
            house: '904',
            tradingTime: '2017-03-21',
            region: '南山',
            district: '后海',
            area: '66.24',
            houseType: '2室1厅',
            price: '89070.05',
            totalPrice: '5900000',
            caseNum: 4
          }, {
            id: '5',
            number: '4',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '4栋',
            house: '2802',
            tradingTime: '2017/3/11',
            region: '南山',
            district: '后海',
            area: '103',
            houseType: '3室2厅',
            price: '97087.38',
            totalPrice: '10000000',
            caseNum: 4
          }, {
            id: '6',
            number: '5',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '1栋',
            house: '205',
            tradingTime: '2017-03-15',
            region: '南山',
            district: '后海',
            area: '131.26',
            houseType: '4室2厅',
            price: '89136.07',
            totalPrice: '11700000',
            caseNum: 4
          }, {
            id: '7',
            number: '6',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '3栋',
            house: '1704',
            tradingTime: '2017-09-13',
            region: '南山',
            district: '后海',
            area: '66.34',
            houseType: '2室1厅',
            price: '90443.17',
            totalPrice: '6000000',
            caseNum: 4
          }, {
            id: '8',
            number: '7',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '2栋',
            house: '1904',
            tradingTime: '2017-10-22',
            region: '南山',
            district: '后海',
            area: '66.34',
            houseType: '4室2厅',
            price: '90865.24',
            totalPrice: '6028000',
            caseNum: 4
          }, {
            id: '9',
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
            id: '10',
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
            id: '11',
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
            id: '12',
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
            id: '13',
            number: '1',
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
            id: '14',
            number: '2',
            lng: 113.940575,
            lat: 22.504367,
            name: '半岛花园A区',
            building: '3栋',
            house: '410',
            tradingTime: '2017-04-12',
            region: '南山',
            district: '后海',
            area: '91.39',
            houseType: '3室2厅',
            price: '55968.92',
            totalPrice: '5115000',
            caseNum: 4
          }, {
            id: '15',
            number: '3',
            lng: 113.940575,
            lat: 22.504367,
            name: '半岛花园A区',
            building: '10栋（海麟阁）',
            house: '802',
            tradingTime: '2017-06-16',
            region: '南山',
            district: '后海',
            area: '100.24',
            houseType: '4室2厅',
            price: '55167.6',
            totalPrice: '5530000',
            caseNum: 4
          }, {
            id: '16',
            number: '4',
            lng: 113.940575,
            lat: 22.504367,
            name: '半岛花园A区',
            building: '3栋',
            house: '409',
            tradingTime: '2017-08-17',
            region: '南山',
            district: '后海',
            area: '61.75',
            houseType: '3室2厅',
            price: '113765.18',
            totalPrice: '7025000',
            caseNum: 4
          }, {
            id: '17',
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
            id: '18',
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
            id: '19',
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
          },{
            id: '20',
            number: '11',
            lng: 113.945851,
            lat: 22.509343,
            name: '君汇新天花园',
            building: 'b栋',
            house: '4A',
            tradingTime: '2017-03-11',
            region: '南山',
            district: '后海',
            area: '136.88',
            houseType: '3室2厅',
            price: '88398.6',
            totalPrice: '12100000',
            caseNum: 3
          },{
            id: '20',
            number: '11',
            lng: 113.948092,
            lat: 22.503225,
            name: '卓越维港',
            building: 'b栋',
            house: '4A',
            tradingTime: '2017-03-11',
            region: '南山',
            district: '后海',
            area: '136.88',
            houseType: '3室2厅',
            price: '88398.6',
            totalPrice: '12100000',
            caseNum: 3
          },{
            id: '20',
            number: '11',
            lng: 113.94735,
            lat: 22.494152,
            name: '翡翠海岸',
            building: 'b栋',
            house: '4A',
            tradingTime: '2017-03-11',
            region: '南山',
            district: '后海',
            area: '136.88',
            houseType: '3室2厅',
            price: '88398.6',
            totalPrice: '12100000',
            caseNum: 3
          },{
            id: '20',
            number: '11',
            lng: 113.946281,
            lat: 22.498561,
            name: '绿海湾花园',
            building: 'b栋',
            house: '4A',
            tradingTime: '2017-03-11',
            region: '南山',
            district: '后海',
            area: '136.88',
            houseType: '3室2厅',
            price: '88398.6',
            totalPrice: '12100000',
            caseNum: 3
          }]
      }
      this.rentCase = {
        type: 1,
        caseList: [
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '4300000',
            caseNum: 3
          }, {
            id: '2',
            number: '1',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '10600000',
            caseNum: 4
          }, {
            id: '3',
            number: '2',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '4栋',
            house: '701',
            tradingTime: '2017-02-25',
            region: '南山',
            district: '后海',
            area: '103',
            houseType: '3室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '9360000',
            caseNum: 4
          }, {
            id: '4',
            number: '3',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '3栋',
            house: '904',
            tradingTime: '2017-03-21',
            region: '南山',
            district: '后海',
            area: '66.24',
            houseType: '2室1厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '5900000',
            caseNum: 4
          }, {
            id: '5',
            number: '4',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '4栋',
            house: '2802',
            tradingTime: '2017/3/11',
            region: '南山',
            district: '后海',
            area: '103',
            houseType: '3室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '10000000',
            caseNum: 4
          }, {
            id: '6',
            number: '5',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '1栋',
            house: '205',
            tradingTime: '2017-03-15',
            region: '南山',
            district: '后海',
            area: '131.26',
            houseType: '4室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '11700000',
            caseNum: 4
          }, {
            id: '7',
            number: '6',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '3栋',
            house: '1704',
            tradingTime: '2017-09-13',
            region: '南山',
            district: '后海',
            area: '66.34',
            houseType: '2室1厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '6000000',
            caseNum: 4
          }, {
            id: '8',
            number: '7',
            lng: 113.944151,
            lat: 22.497102,
            name: '后海公馆',
            building: '2栋',
            house: '1904',
            tradingTime: '2017-10-22',
            region: '南山',
            district: '后海',
            area: '66.34',
            houseType: '4室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '6028000',
            caseNum: 4
          }, {
            id: '9',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '5250000',
            caseNum: 5
          }, {
            id: '10',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '3300000',
            caseNum: 1
          }, {
            id: '11',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '7200000',
            caseNum: 7
          }, {
            id: '12',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '6350000',
            caseNum: 9
          }, {
            id: '13',
            number: '1',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '4960000',
            caseNum: 4
          }, {
            id: '14',
            number: '2',
            lng: 113.940575,
            lat: 22.504367,
            name: '半岛花园A区',
            building: '3栋',
            house: '410',
            tradingTime: '2017-04-12',
            region: '南山',
            district: '后海',
            area: '91.39',
            houseType: '3室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '5115000',
            caseNum: 4
          }, {
            id: '15',
            number: '3',
            lng: 113.940575,
            lat: 22.504367,
            name: '半岛花园A区',
            building: '10栋（海麟阁）',
            house: '802',
            tradingTime: '2017-06-16',
            region: '南山',
            district: '后海',
            area: '100.24',
            houseType: '4室2厅',
            price:(Math.random()*10000).toFixed(0),
            totalPrice: '5530000',
            caseNum: 4
          }, {
            id: '16',
            number: '4',
            lng: 113.940575,
            lat: 22.504367,
            name: '半岛花园A区',
            building: '3栋',
            house: '409',
            tradingTime: '2017-08-17',
            region: '南山',
            district: '后海',
            area: '61.75',
            houseType: '3室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '7025000',
            caseNum: 4
          }, {
            id: '17',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '9780000',
            caseNum: 8
          }, {
            id: '18',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '7168000',
            caseNum: 5
          }, {
            id: '19',
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
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '12100000',
            caseNum: 3
          },{
            id: '20',
            number: '11',
            lng: 113.945851,
            lat: 22.509343,
            name: '君汇新天花园',
            building: 'b栋',
            house: '4A',
            tradingTime: '2017-03-11',
            region: '南山',
            district: '后海',
            area: '136.88',
            houseType: '3室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '12100000',
            caseNum: 3
          },{
            id: '20',
            number: '11',
            lng: 113.948092,
            lat: 22.503225,
            name: '卓越维港',
            building: 'b栋',
            house: '4A',
            tradingTime: '2017-03-11',
            region: '南山',
            district: '后海',
            area: '136.88',
            houseType: '3室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '12100000',
            caseNum: 3
          },{
            id: '20',
            number: '11',
            lng: 113.94735,
            lat: 22.494152,
            name: '翡翠海岸',
            building: 'b栋',
            house: '4A',
            tradingTime: '2017-03-11',
            region: '南山',
            district: '后海',
            area: '136.88',
            houseType: '3室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '12100000',
            caseNum: 3
          },{
            id: '20',
            number: '11',
            lng: 113.946281,
            lat: 22.498561,
            name: '绿海湾花园',
            building: 'b栋',
            house: '4A',
            tradingTime: '2017-03-11',
            region: '南山',
            district: '后海',
            area: '136.88',
            houseType: '3室2厅',
            price: (Math.random()*10000).toFixed(0),
            totalPrice: '12100000',
            caseNum: 3
          }]
      }
    },
    methods: {
      change(val) {
        switch(val) {
          case '租赁':
            this.caseType = 1
            break;
          case '挂牌':
            this.caseType = 2
            break;
          case '估价':
            this.caseType = 3
            break;
          case '询价':
            this.caseType = 4
            break;
          default:
            this.caseType = 0
        }
      },
      searchCase() {
        let searchValue = this.searchValue.trim()
        /*if (!searchValue) {
          return
        }*/
        if (this.caseType === 0) {
          this.communities = this.saleCase.caseList
          this.searchedCaseList = this.communities.filter(item => {
            return item.name.indexOf(searchValue) > -1
          })
        } else {
          this.communities = this.rentCase.caseList
          this.searchedCaseList = this.communities.filter(item => {
            return item.name.indexOf(searchValue) > -1
          })
        }
  
        this.searchedCaseList.length ? (this.center = { lng: this.searchedCaseList[0].lng, lat: this.searchedCaseList[0].lat }) : this.$message('很遗憾, 未能查询到案例！')
        
        let prjOverlayList = this.$refs.prjOverlay
        for (let i = 0; i < prjOverlayList.length; i++) {
          prjOverlayList[i].change(searchValue)
        }
        
        this.$refs.caseList.getTableData(this.searchedCaseList)
      },
      handleSale() {
        this.caseType = 0
        this.searchCase()
      },
      handleRent() {
        this.caseType = 1
        this.searchCase()
      },
      mapReady() {
        this.center = { lng: 113.940575, lat: 22.504367 }
      },
      showMap() {
        this.isShow = true
        this.mapType = 'primary'
        this.listType = 'plain'
        // map的display为none带来center为0，marker偏离
        setTimeout(() => {
          this.center = { lng: 113.940575, lat: 22.504367 }
        }, 1000)
      },
      showList() {
        this.isShow = false
        this.mapType = 'plain'
        this.listType = 'primary'
      },
      regain() {
        if (!this.flag) {
          this.$refs.baiduMap.$el.style.width = '70%'
        } else {
          this.$refs.baiduMap.$el.style.width = '100%'
        }
        this.flag = !this.flag
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .caseSearch {
    .el-row {
      div:first-child {
        input::-webkit-input-placeholder {
          color: #000;
        }
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background: #797979;
      margin: 10px 0 5px 0;
      
    }
    .btn {
      overflow: hidden;
      margin-bottom: 10px;
      span {
        &:nth-child(1) {
        float: left;
        margin-left: 10px;
        }
        &:nth-child(2) {
          float: right;
          margin-right: 10px;
        }
        .el-button {
          border-radius: 0;
          margin-left: 0;
        }
      }
    }
    .bm-view {
      width: 100%;
      height: 700px;
      transition: .2s width;
    }
  }
</style>





