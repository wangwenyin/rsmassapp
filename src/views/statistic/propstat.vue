<template> 
<div class="app">
  <div id="app" class='margin10 maxdialog'>
      <el-tabs ref="tabs" >
        <el-tab-pane label="数量统计" ref="num">
          <el-row :gutter="10" style="margin-left:53px;margin-top:5px">
            <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
              <span>用途 :</span>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
              <template>
                <el-radio v-model="radio"   @click.native="searchNum(0)"  label="0">全部</el-radio>
                <el-radio v-model="radio"   @click.native="searchNum(1)"  label="1">办公</el-radio>
                <el-radio v-model="radio"   @click.native="searchNum(2)"  label="2">商业</el-radio>
                <el-radio v-model="radio"   @click.native="searchNum(3)"   label="3">住宅</el-radio>    
                <el-radio v-model="radio"   @click.native="searchNum(4)"   label="4">工业</el-radio>
              </template>
            </el-col>
          </el-row>
            <div id="echartsNum"  style="margin: 20px auto;"   :style="{height:height,width:width}" >  
            </div>  
        </el-tab-pane>
        <el-tab-pane label="面积统计" ref="area">
          <el-row :gutter="10" style="margin-left:53px;margin-top:5px">
            <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
              <span>用途 :</span>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
              <template>
                <el-radio v-model="radio"   @click.native="searchArea(0)"  label="0">全部</el-radio>
                <el-radio v-model="radio"   @click.native="searchArea(1)"  label="1">办公</el-radio>
                <el-radio v-model="radio"   @click.native="searchArea(2)"  label="2">商业</el-radio>
                <el-radio v-model="radio"   @click.native="searchArea(3)"  label="3">住宅</el-radio>    
                <el-radio v-model="radio"   @click.native="searchArea(4)"  label="4">工业</el-radio>
              </template>
             </el-col>
           </el-row>
           <div id="echartsArea"  style="margin: 20px auto;"  :style="{height:height,width:width}" ></div> 
        </el-tab-pane>
        <el-tab-pane label="地图模式">
           <baidu-map class="bm-view1" ref="baiduMap" :center="center" :zoom="12" :map-click="false" :scroll-wheel-zoom="true" style="margin: 0px auto;">
               <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
               <CountOverlayEcharts v-for="item in communities" :key="item.id" :position="{lng: item.lng, lat: item.lat}" :data="item"></CountOverlayEcharts>
           </baidu-map>
        </el-tab-pane>
      </el-tabs> 
  </div>
   </div>
</template>
<script>
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map/components/Map/Map'
import CountOverlayEcharts from '@/views/statistic/components/CountOverlayEcharts'
export default {
  components: { echarts, BaiduMap, CountOverlayEcharts },
  data() {
    return {
      obj: '1',
      radio: '0',
      keyword: '',
      center: { lng: 113.84477, lat: 22.800887 },
      searchValue: '',
      communities: [{
        id: '1',
        lng: 113.895392,
        lat: 22.562495,
        name: '宝安区',
        businessNum: 40274,
        busininessArea: 476.87,
        residenceNum: 263637,
        residenceArea: 2618.64,
        industryNum: 22448,
        industryArea: 1439.53,
        officeNum: 27157,
        officeArea: 251.99
      }, {
        id: '2',
        lng: 114.480822,
        lat: 22.604474,
        name: '大鹏新区',
        businessNum: 1374,
        busininessArea: 24.24,
        industryNum: 24,
        industryArea: 4.33,
        officeNum: 1124,
        officeArea: 9.38,
        residenceNum: 7551,
        residenceArea: 78.72
      }, {
        id: '3',
        lng: 114.060967,
        lat: 22.530986,
        name: '福田区',
        businessNum: 27512,
        busininessArea: 593.08,
        residenceNum: 366902,
        residenceArea: 3441.7,
        industryNum: 6103,
        industryArea: 527.98,
        officeNum: 55938,
        officeArea: 913.39
      }, {
        id: '4',
        lng: 113.922753,
        lat: 22.778617,
        name: '光明新区',
        businessNum: 1457,
        busininessArea: 20.1,
        residenceNum: 19360,
        residenceArea: 166.79,
        industryNum: 1910,
        industryArea: 150.72,
        officeNum: 1140,
        officeArea: 10.38
      }, {
        id: '5',
        lng: 114.252989,
        lat: 22.729534,
        name: '龙岗区',
        businessNum: 65081,
        busininessArea: 591.81,
        residenceNum: 420596,
        residenceArea: 3951.18,
        industryNum: 15849,
        industryArea: 762.48,
        officeNum: 31229,
        officeArea: 245.62
      }, {
        id: '6',
        lng: 114.054068,
        lat: 22.760464,
        name: '龙华新区',
        businessNum: 15269,
        busininessArea: 177.2,
        residenceNum: 160238,
        residenceArea: 1486.13,
        industryNum: 4963,
        industryArea: 419.16,
        officeNum: 5784,
        officeArea: 46.52
      },
      {
        id: '7',
        lng: 114.137431,
        lat: 22.552883,
        name: '罗湖区',
        businessNum: 31842,
        busininessArea: 498.31,
        residenceNum: 288545,
        residenceArea: 2528.67,
        industryNum: 2961,
        industryArea: 388.35,
        officeNum: 25027,
        officeArea: 518.4
      }, {
        id: '8',
        lng: 113.936785,
        lat: 22.541134,
        name: '南山区',
        businessNum: 39813,
        busininessArea: 408.75,
        residenceNum: 338141,
        residenceArea: 3338.69,
        industryNum: 11098,
        industryArea: 537.39,
        officeNum: 29171,
        officeArea: 393.09
      }, {
        id: '9',
        lng: 114.35273,
        lat: 22.697703,
        name: '坪山新区',
        businessNum: 4022,
        busininessArea: 39.49,
        residenceNum: 29380,
        residenceArea: 249.83,
        industryNum: 1822,
        industryArea: 43.64,
        officeNum: 882,
        officeArea: 7.59
      }, {
        id: '10',
        lng: 114.24609,
        lat: 22.564097,
        name: '盐田区',
        businessNum: 3937,
        busininessArea: 69.49,
        residenceNum: 52983,
        residenceArea: 505.9,
        industryNum: 1175,
        industryArea: 168.65,
        officeNum: 4444,
        officeArea: 70.07
      }
      ]
    }
  },
  props: {
    height: {
      type: String,
      'default': '650px'
    },
    width: {
      type: String,
      'default': '1200px'
    }
  },
  mounted() {
    this.searchNum(0)
    this.searchArea(0)
    const tab = this.$refs.tabs.$el
    const tabBar = tab.querySelector('.el-tabs__nav-scroll')
    tabBar.style.marginLeft = '60px'
  },
  methods: {
    searchNum: function(stype) {
      const echartsNum = echarts.init(document.getElementById('echartsNum'))
      var data1 = []
      var label1 = {
        normal: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#999',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            b: {
              fontSize: 16,
              lineHeight: 33
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        }
      }
      if (stype === 0) {
        data1 = [
          { value: this.communities[0].officeNum + this.communities[0].businessNum + this.communities[0].residenceNum + this.communities[0].industryNum, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].officeNum + this.communities[1].businessNum + this.communities[1].residenceNum + this.communities[1].industryNum, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].officeNum + this.communities[2].businessNum + this.communities[2].residenceNum + this.communities[2].industryNum, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].officeNum + this.communities[3].businessNum + this.communities[3].residenceNum + this.communities[3].industryNum, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].officeNum + this.communities[4].businessNum + this.communities[4].residenceNum + this.communities[4].industryNum, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].officeNum + this.communities[5].businessNum + this.communities[5].residenceNum + this.communities[5].industryNum, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].officeNum + this.communities[6].businessNum + this.communities[6].residenceNum + this.communities[6].industryNum, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].officeNum + this.communities[7].businessNum + this.communities[7].residenceNum + this.communities[7].industryNum, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].officeNum + this.communities[8].businessNum + this.communities[8].residenceNum + this.communities[8].industryNum, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].officeNum + this.communities[9].businessNum + this.communities[9].residenceNum + this.communities[9].industryNum, name: this.communities[9].name, label: label1
          }
        ]
      }
      if (stype === 1) {
        data1 = [
          { value: this.communities[0].officeNum, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].officeNum, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].officeNum, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].officeNum, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].officeNum, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].officeNum, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].officeNum, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].officeNum, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].officeNum, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].officeNum, name: this.communities[9].name, label: label1
          }
        ]
      }
      if (stype === 2) {
        data1 = [
          { value: this.communities[0].businessNum, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].businessNum, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].businessNum, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].businessNum, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].businessNum, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].businessNum, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].businessNum, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].businessNum, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].businessNum, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].businessNum, name: this.communities[9].name, label: label1
          }
        ]
      }
      if (stype === 3) {
        data1 = [
          { value: this.communities[0].residenceNum, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].residenceNum, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].residenceNum, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].residenceNum, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].residenceNum, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].residenceNum, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].residenceNum, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].residenceNum, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].residenceNum, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].residenceNum, name: this.communities[9].name, label: label1
          }
        ]
      }
      if (stype === 4) {
        data1 = [
          { value: this.communities[0].industryNum, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].industryNum, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].industryNum, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].industryNum, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].industryNum, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].industryNum, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].industryNum, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].industryNum, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].industryNum, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].industryNum, name: this.communities[9].name, label: label1
          }
        ]
      }
      var optionNum = {
        title: {
          text: '深圳市各区房屋数量统计',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: [this.communities[0].name, this.communities[1].name, this.communities[2].name, this.communities[3].name, this.communities[4].name, this.communities[5].name, this.communities[6].name, this.communities[7].name, this.communities[8].name, this.communities[9].name]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: '房屋数量统计',
            type: 'pie',
            selectedMode: 'single',
            radius: '60%',
            center: ['50%', '50%'],
            data: data1,
            itemStyle: {
              emphasis: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      echartsNum.setOption(optionNum)
    },
    searchArea: function(stype) {
      const echartArea = echarts.init(document.getElementById('echartsArea'))
      var data1 = []
      var label1 = {
        normal: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#999',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            b: {
              fontSize: 16,
              lineHeight: 33
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        }
      }
      if (stype === 0) {
        data1 = [
          { value: this.communities[0].officeArea + this.communities[0].busininessArea + this.communities[0].residenceArea + this.communities[0].industryArea, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].officeArea + this.communities[1].busininessArea + this.communities[1].residenceArea + this.communities[1].industryArea, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].officeArea + this.communities[2].busininessArea + this.communities[2].residenceArea + this.communities[2].industryArea, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].officeArea + this.communities[3].busininessArea + this.communities[3].residenceArea + this.communities[3].industryArea, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].officeArea + this.communities[4].busininessArea + this.communities[4].residenceArea + this.communities[4].industryArea, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].officeArea + this.communities[5].busininessArea + this.communities[5].residenceArea + this.communities[5].industryArea, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].officeArea + this.communities[6].busininessArea + this.communities[6].residenceArea + this.communities[6].industryArea, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].officeArea + this.communities[7].busininessArea + this.communities[7].residenceArea + this.communities[7].industryArea, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].officeArea + this.communities[8].busininessArea + this.communities[8].residenceArea + this.communities[8].industryArea, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].officeArea + this.communities[9].busininessArea + this.communities[9].residenceArea + this.communities[9].industryArea, name: this.communities[9].name, label: label1
          }
        ]
      }
      if (stype === 1) {
        data1 = [
          { value: this.communities[0].officeArea, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].officeArea, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].officeArea, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].officeArea, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].officeArea, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].officeArea, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].officeArea, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].officeArea, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].officeArea, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].officeArea, name: this.communities[9].name, label: label1
          }
        ]
      }
      if (stype === 2) {
        data1 = [
          { value: this.communities[0].busininessArea, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].busininessArea, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].busininessArea, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].busininessArea, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].busininessArea, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].busininessArea, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].busininessArea, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].busininessArea, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].busininessArea, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].busininessArea, name: this.communities[9].name, label: label1
          }
        ]
      }
      if (stype === 3) {
        data1 = [
          { value: this.communities[0].residenceArea, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].residenceArea, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].residenceArea, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].residenceArea, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].residenceArea, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].residenceArea, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].residenceArea, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].residenceArea, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].residenceArea, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].residenceArea, name: this.communities[9].name, label: label1
          }
        ]
      }

      if (stype === 4) {
        data1 = [
          { value: this.communities[0].industryArea, name: this.communities[0].name, label: label1
          },
          { value: this.communities[1].industryArea, name: this.communities[1].name, label: label1
          },
          { value: this.communities[2].industryArea, name: this.communities[2].name, label: label1
          },
          { value: this.communities[3].industryArea, name: this.communities[3].name, label: label1
          },
          { value: this.communities[4].industryArea, name: this.communities[4].name, label: label1
          },
          { value: this.communities[5].industryArea, name: this.communities[5].name, label: label1
          },
          { value: this.communities[6].industryArea, name: this.communities[6].name, label: label1
          },
          { value: this.communities[7].industryArea, name: this.communities[7].name, label: label1
          },
          { value: this.communities[8].industryArea, name: this.communities[8].name, label: label1
          },
          { value: this.communities[9].industryArea, name: this.communities[9].name, label: label1
          }
        ]
      }
      var optionArea = {
        title: {
          text: '深圳市各区房屋面积统计',
          left: 'center',
          subtext: '单位(万平方米）'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: [this.communities[0].name, this.communities[1].name, this.communities[2].name, this.communities[3].name, this.communities[4].name, this.communities[5].name, this.communities[6].name, this.communities[7].name, this.communities[8].name, this.communities[9].name]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: '房屋面积统计',
            type: 'pie',
            selectedMode: 'single',
            radius: '60%',
            center: ['50%', '50%'],
            data: data1,
            itemStyle: {
              emphasis: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      echartArea.setOption(optionArea)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../styles/app.scss';
.el-col-7{
  padding-top: 5px;
}
.el-col-12{
  padding-top: 15px;
}
.img1{
  width: 15px;
}
.el-radio-group{
  margin-left: 30px
}
 .bm-view1 {
    margin-left: 60px;
    margin-right: 60px;

  width: 100%;
  height: 700px;}
</style>