<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
import { cases } from '@/api/dashboard'
const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  data() {
    return {
      chart: null,
      residential: [],
      commercial: [],
      office: [],
      industrial: [],
      xAxis: []
    }
  },
  mounted() {
    this.fetchData()
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHanlder)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    fetchData() {
      cases().then(response => {
        for (var i = 0; i < 12; i++) {
          this.residential.push(response.data.residential[i])
        }
        for (var j = 0; j < 12; j++) {
          this.commercial.push(response.data.commercial[j])
        }
        for (var k = 0; k < 12; k++) {
          this.office.push(response.data.office[k])
        }
        for (var l = 0; l < 12; l++) {
          this.industrial.push(response.data.industrial[l])
        }
        this.initChart()
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          left: 'center',
          bottom: 10,
          data: ['住宅', '商业', '办公', '工业']
        },
        calculable: true,
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '住宅',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: this.residential,
          animationDuration
        }, {
          name: '商业',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: this.commercial,
          animationDuration
        }, {
          name: '办公',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: this.office,
          animationDuration
        },
        {
          name: '工业',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: this.industrial,
          animationDuration
        }]
      })
    }
  }
}
</script>
