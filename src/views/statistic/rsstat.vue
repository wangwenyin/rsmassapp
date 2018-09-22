<template> 
<div class="app">
  <div id="app" class='margin10 maxdialog'>
      <el-tabs ref="tabs" >
        <el-tab-pane label="数量统计" ref="num">
            <div id="echarts" :style="{height:height,width:width}"  style="margin: 20px auto;"></div>  
        </el-tab-pane>
        <el-tab-pane label="面积统计" ref="area">
           <div id="echarts1" :style="{height:height,width:width}"  style="margin: 20px auto;" ></div> 
        </el-tab-pane>
        <el-tab-pane label="地图模式">
           <baidu-map class="bm-view1" ref="baiduMap" :center="center" :zoom="12" :map-click="false" :scroll-wheel-zoom="true" style="margin: 0px auto;">
               <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
               <CountOverlay v-for="item in communities" :key="item.id" :position="{lng: item.lng, lat: item.lat}" :data="item"></CountOverlay>
           </baidu-map>
        </el-tab-pane>
      </el-tabs> 
 </div>
 </div>
</template>
<script>
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map/components/Map/Map'
import CountOverlay from '@/views/statistic/components/CountOverlay'
export default {
  components: { echarts, BaiduMap, CountOverlay },
  data() {
    return {
      obj: '1',
      radio: '统计',
      keyword: '',
      center: { lng: 113.84477, lat: 22.800887 },
      searchValue: '',
      communities: [{
        id: '1',
        lng: 114.137431,
        lat: 22.552883,
        name: '罗湖区',
        businessNum: 31874,
        busininessArea: 4985890.27,
        residenceNum: 28851,
        residenceArea: 2528388.04,
        industryNum: 2961,
        industryArea: 3883509.59,
        officeNum: 25027,
        officeArea: 5184021.47
      }, {
        id: '2',
        lng: 114.060967,
        lat: 22.530986,
        name: '福田区',
        businessNum: 27512,
        busininessArea: 5930814.96,
        residenceNum: 36690,
        residenceArea: 3441696.5,
        industryNum: 6103,
        industryArea: 5279820.02,
        officeNum: 55938,
        officeArea: 9133906.17
      }, {
        id: '3',
        lng: 113.936785,
        lat: 22.541134,
        name: '南山区',
        businessNum: 39834,
        busininessArea: 4088726.52,
        residenceNum: 28851,
        residenceArea: 3338688.04,
        industryNum: 11098,
        industryArea: 5373925.15,
        officeNum: 29187,
        officeArea: 3933311.39
      }, {
        id: '4',
        lng: 113.895392,
        lat: 22.562495,
        name: '宝安区',
        businessNum: 40274,
        busininessArea: 4768733.77,
        residenceNum: 0,
        residenceArea: 0,
        industryNum: 22448,
        industryArea: 14395268.44,
        officeNum: 27157,
        officeArea: 2519894.39
      }, {
        id: '5',
        lng: 114.24609,
        lat: 22.564097,
        name: '盐田区',
        businessNum: 3937,
        busininessArea: 694903.68,
        residenceNum: 5298,
        residenceArea: 505895.78,
        industryNum: 1175,
        industryArea: 1686526.29,
        officeNum: 4444,
        officeArea: 700676.6
      }, {
        id: '6',
        lng: 114.252989,
        lat: 22.729534,
        name: '龙岗区',
        businessNum: 65081,
        busininessArea: 5918061.25,
        residenceNum: 42059,
        residenceArea: 3951180.57,
        industryNum: 15849,
        industryArea: 7624826.93,
        officeNum: 31229,
        officeArea: 2456157.91
      }, {
        id: '7',
        lng: 114.054068,
        lat: 22.760464,
        name: '龙华新区',
        businessNum: 15269,
        busininessArea: 1771981.18,
        residenceNum: 16023,
        residenceArea: 1486130.16,
        industryNum: 4963,
        industryArea: 4191606.59,
        officeNum: 5784,
        officeArea: 465198.76
      }, {
        id: '8',
        lng: 113.922753,
        lat: 22.778617,
        name: '光明新区',
        businessNum: 1457,
        busininessArea: 200972.06,
        residenceNum: 1936,
        residenceArea: 166792.55,
        industryNum: 1910,
        industryArea: 1507187.74,
        officeNum: 1140,
        officeArea: 103794.37
      }, {
        id: '9',
        lng: 114.35273,
        lat: 22.697703,
        name: '坪山新区',
        businessNum: 4022,
        busininessArea: 394866.4,
        residenceNum: 2938,
        residenceArea: 249831.5,
        industryNum: 1822,
        industryArea: 436422.25,
        officeNum: 882,
        officeArea: 75905.55
      },
      {
        id: '10',
        lng: 114.480822,
        lat: 22.604474,
        name: '大鹏新区',
        businessNum: 1374,
        busininessArea: 242422.57,
        residenceNum: 755,
        residenceArea: 78719.21,
        industryNum: 24,
        industryArea: 43325.45,
        officeNum: 1124,
        officeArea: 93809.29
      }]
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
    this.draw()
    const tab = this.$refs.tabs.$el
    const tabBar = tab.querySelector('.el-tabs__nav-scroll')
    tabBar.style.marginLeft = '60px'
  },
  methods: {
    draw: function() {
      const echart = echarts.init(document.getElementById('echarts'))
      var option = {
        title: {
          text: '深圳市各区房屋数量统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['办公', '商业', '住宅', '工业']
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
        xAxis: [
          {
            type: 'category',
            data: [this.communities[0].name, this.communities[1].name, this.communities[2].name, this.communities[3].name, this.communities[4].name, this.communities[5].name, this.communities[6].name, this.communities[7].name, this.communities[8].name, this.communities[9].name]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '办公',
            type: 'bar',
            data: [this.communities[0].officeNum, this.communities[1].officeNum, this.communities[2].officeNum, this.communities[3].officeNum, this.communities[4].officeNum, this.communities[5].officeNum, this.communities[6].officeNum, this.communities[7].officeNum, this.communities[8].officeNum, this.communities[9].officeNum],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '商业',
            type: 'bar',
            data: [this.communities[0].businessNum, this.communities[1].businessNum, this.communities[2].businessNum, this.communities[3].businessNum, this.communities[4].businessNum, this.communities[5].businessNum, this.communities[6].businessNum, this.communities[7].businessNum, this.communities[8].businessNum, this.communities[9].businessNum],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '住宅',
            type: 'bar',
            data: [this.communities[0].residenceNum, this.communities[1].residenceNum, this.communities[2].residenceNum, this.communities[3].residenceNum, this.communities[4].residenceNum, this.communities[5].residenceNum, this.communities[6].residenceNum, this.communities[7].residenceNum, this.communities[8].residenceNum, this.communities[9].residenceNum],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '工业',
            type: 'bar',
            data: [this.communities[0].industryNum, this.communities[1].industryNum, this.communities[2].industryNum, this.communities[3].industryNum, this.communities[4].industryNum, this.communities[5].industryNum, this.communities[6].industryNum, this.communities[7].industryNum, this.communities[8].industryNum, this.communities[9].industryNum],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      }
      echart.setOption(option)

      const echart1 = echarts.init(document.getElementById('echarts1'))
      var option1 = {
        title: {
          text: '深圳市各区房屋面积统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['办公', '商业', '住宅', '工业']
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
        xAxis: [
          {
            type: 'category',
            data: [this.communities[0].name, this.communities[1].name, this.communities[2].name, this.communities[3].name, this.communities[4].name, this.communities[5].name, this.communities[6].name, this.communities[7].name, this.communities[8].name, this.communities[9].name]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '办公',
            type: 'bar',
            data: [this.communities[0].officeArea, this.communities[1].officeArea, this.communities[2].officeArea, this.communities[3].officeArea, this.communities[4].officeArea, this.communities[5].officeArea, this.communities[6].officeArea, this.communities[7].officeArea, this.communities[8].officeArea, this.communities[9].officeArea],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '商业',
            type: 'bar',
            data: [this.communities[0].busininessArea, this.communities[1].busininessArea, this.communities[2].busininessArea, this.communities[3].busininessArea, this.communities[4].busininessArea, this.communities[5].busininessArea, this.communities[6].busininessArea, this.communities[7].busininessArea, this.communities[8].busininessArea, this.communities[9].busininessArea],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '住宅',
            type: 'bar',
            data: [this.communities[0].residenceArea, this.communities[1].residenceArea, this.communities[2].residenceArea, this.communities[3].residenceArea, this.communities[4].residenceArea, this.communities[5].residenceArea, this.communities[6].residenceArea, this.communities[7].residenceArea, this.communities[8].residenceArea, this.communities[9].residenceArea],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '工业',
            type: 'bar',
            data: [this.communities[0].industryArea, this.communities[1].industryArea, this.communities[2].industryArea, this.communities[3].industryArea, this.communities[4].industryArea, this.communities[5].industryArea, this.communities[6].industryArea, this.communities[7].industryArea, this.communities[8].industryArea, this.communities[9].industryArea],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      }
      echart1.setOption(option1)
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