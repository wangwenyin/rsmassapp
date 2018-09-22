<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample1: true}"
    pane="labelPane"
    @draw="draw"
    >
     <el-popover
placement="right"
width="500px"
trigger="click"
@show="refreshChart">
<div id="chart" ref="chart" style="height:400px;width:600px"></div>
<div slot="reference" v-html="getText" > </div>    
</el-popover>
  </bm-overlay>
</template>
<script>
import echarts from 'echarts'
export default {
  components: {
    echarts
  },
  props: ['data', 'position', 'active'],
  data() {
    return {
    }
  },
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  computed: {
    getText() {
      return this.data.name + '<br/>' + (this.data.businessNum + this.data.residenceNum + this.data.industryNum + this.data.officeNum).toFixed(1) + '套' + '<br/>' + ((this.data.busininessArea + this.data.residenceArea + this.data.industryArea + this.data.officeArea) / 10000).toFixed(1) + '万平方'
    }
  },
  methods: {
    refreshChart() {
      var myChart = echarts.init(this.$refs.chart)
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['数量', '建筑面积']
        },
        xAxis: [
          {
            type: 'category',
            data: ['商业', '住宅', '工业', '办公'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',

            axisLabel: {
              formatter: '{value} 套'
            }
          },
          {
            type: 'value',
            name: '建筑面积',

            axisLabel: {
              formatter: '{value} 万平米'
            }
          }
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            data: [this.data.businessNum, this.data.residenceNum, this.data.industryNum, this.data.officeNum]
          },
          {
            name: '建筑面积',
            type: 'bar',
            yAxisIndex: 1,
            data: [this.data.busininessArea, this.data.residenceArea, this.data.industryArea, this.data.officeArea]
          }
        ]
      }
      myChart.setOption(option)
    },
    draw({ el, BMap, map }) {
      const { lng, lat } = this.position
      const point = new BMap.Point(lng, lat)
      const pixel = map.pointToOverlayPixel(point)
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sample1 {
    min-width: 50px;
    padding: 20px;
    display: block;
    background: #409EFF;
    color: #fff;
    text-align: center;
    position: absolute;
    font-size: 12px;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 50%
  }
  .sample1.active {
    background: #B00000;
    color: #fff;
  }
</style>
