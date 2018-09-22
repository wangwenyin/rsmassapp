<template>
    <div :id="id" ref='echart' :style="{height:height,width:width}"></div>
</template>
<style>
</style>
<script>
import echarts from 'echarts'
export default {
  components: {
    echarts
  },
  props: {
    id: {
      type: String,
      default: 'echarts'
    },
    height: {
      type: String,
      default: '350px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw: function() {
      try {
        const echart = echarts.init(document.getElementById(this.id))
        var option = {
          tooltip: {
            trigger: 'axis'
          },
          calculable: true,
          legend: {
            data: []
          },
          xAxis: [
            {
              type: 'category',
              name: '回归标准化残差',
              data: [
                '-6',
                '-5',
                '-4',
                '-3',
                '-2',
                '-1',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6'
              ]
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '频率'
            },
            {
              type: 'value',
              name: ''
            }
          ],
          series: [
            {
              name: '频率',
              type: 'bar',
              data: [
                2.0,
                4.9,
                7.0,
                23.2,
                25.6,
                76.7,
                135.6,
                162.2,
                32.6,
                20.0,
                6.4,
                3.3
              ]
            },
            {
              name: '残差',
              type: 'line',
              yAxisIndex: 1,
              data: [
                2.0,
                2.2,
                3.3,
                4.5,
                6.3,
                10.2,
                20.3,
                23.4,
                23.0,
                16.5,
                12.0,
                6.2
              ]
            }
          ]
        }
        echart.setOption(option)
      } catch (e) {
        console.log('出错')
        console.log(e)
      }
    }
  }
}
</script>