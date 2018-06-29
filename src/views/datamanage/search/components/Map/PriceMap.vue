<template>
<baidu-map class="bm-view" ref="baiduMap" :center="center" :zoom="16" :map-click="false" :scroll-wheel-zoom="true">
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP','BMAP_PERSPECTIVE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <!-- <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 10}">
        <el-button plain size="small" @click="regain">大图</el-button>
      </bm-control> -->
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 50}">
         <el-tabs type="border-card" style="width: 90%;margin-left:60px;margin-right60px;" >
            <el-tab-pane label="交通"></el-tab-pane>
            <el-tab-pane label="教育"></el-tab-pane>
            <el-tab-pane label="医疗"></el-tab-pane>
            <el-tab-pane label="购物"></el-tab-pane>
            <el-tab-pane label="生活"></el-tab-pane>
            <el-tab-pane label="娱乐"></el-tab-pane>
         </el-tabs>
      </bm-control>
      <bm-control anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{width: 10, height: 40}">
        <!-- <el-input v-model="keyword" size="mini" clearable placeholder="请输入关键词"></el-input> -->
           <el-popover
          width="200"
          trigger="click">
          <el-button  size="small" slot="reference" type="primary">买卖</el-button>
        </el-popover>
              <el-popover
          width="200"
          trigger="click">
          <el-button  size="small" slot="reference" type="primary">租赁</el-button>
        </el-popover>
              <el-popover
          width="200"
          trigger="click">
          <el-button  size="small" slot="reference" type="primary">挂牌</el-button>
        </el-popover>
               <el-popover
          width="200"
          trigger="click">
          <el-button  size="small" slot="reference" type="primary">抵押</el-button>
        </el-popover>
               <el-popover
          width="200"
          trigger="click">
          <el-button  size="small" slot="reference" type="primary">评估</el-button>
        </el-popover>
      </bm-control>
      <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
      <prj-overlay v-for="item in communities" :key="item.id"
                   :position="{lng: item.lng, lat: item.lat}"
                   :data="item"
                   :active="searchValue && item.name.indexOf(searchValue)  > -1 ? true : false"
      ></prj-overlay>
    </baidu-map>

  
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/Map/Map'
import PrjOverlay from '@/components/MapOverlay/PrjOverlay'
export default {
  components: { BaiduMap, PrjOverlay },
  props: {
    searchValue: {
      type: String,
      default: null
    },
    center: {
      type: Object,
      default: function() {
        return { lng: 113.939897, lat: 22.519751 }
      }
    }
  },
  data() {
    return {
      keyword: '',
      communities: [
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
          id: '100',
          number: '1',
          lng: 113.949271,
          lat: 22.511945,
          name: '深圳湾一号',
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
          id: '101',
          number: '1',
          lng: 113.946829,
          lat: 22.495973,
          name: '阳光海滨花园',
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
          id: '102',
          number: '1',
          lng: 113.945851,
          lat: 22.509343,
          name: '君汇新天',
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
          id: '103',
          number: '1',
          lng: 113.946281,
          lat: 22.498561,
          name: '绿海湾花园',
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
          id: '104',
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
        }]
    }
  }
}
</script>
<style>
 .bm-view {
  width: 100%;
  height: 580px;
}
</style>
