<template>
 <div id="echarts"  :style="{height:height,width:width}" ></div> 
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
    height: {
      type: String,
      'default': '350px'
    },
    width: {
      type: String,
      'default': '100%'
    }
  },
  data() {
    return {
      json: [{ 'name': '1月', 'num': 140112 }, { 'name': '2月', 'num': 126678 }, { 'name': '3月', 'num': 147495 }, { 'name': '4月', 'num': 125116 }, { 'name': '5月', 'num': 130112 }, { 'name': '6月', 'num': 140102 }, { 'name': '7月', 'num': 127495 }],
      name: [],
      num: []
    }
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw: function() {
      const echart = echarts.init(document.getElementById('echarts'))
      if (this.json) {
        for (var i = 0; i < this.json.length; i++) {
          this.name.push(this.json[i].name)
          this.num.push(this.json[i].num)
        }
      }
      var option = {
        title: {
          subtext: '均价元(平米)'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {

        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.name
        },
        yAxis: {
          type: 'value',
          min: 120000,
          axisLabel: {
            formatter: '{value} '
          }
        },
        series: [
          {
            name: '评估价格',
            type: 'line',
            data: this.num,
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
    }
  }
}
</script>