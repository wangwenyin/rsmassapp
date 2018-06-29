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
@show="refreshChart(1)">
<div>
<el-row :gutter="10" style="margin-left:1px">
         
   <span>统计方式 :</span>
        
   <template>
      <el-radio  v-model="radio"   @click.native="refreshChart(1)"    label="1">数量</el-radio>
      <el-radio  v-model="radio"   @click.native="refreshChart(2)"    label="2">建筑面积</el-radio>
   </template>

  </el-row>
  </div>
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
      radio: '1'
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
      return this.data.name + '<br/>' + (this.data.businessNum + this.data.residenceNum + this.data.industryNum + this.data.officeNum).toFixed(1) + '套' + '<br/>' + (this.data.busininessArea + this.data.residenceArea + this.data.industryArea + this.data.officeArea).toFixed(2) + '万平方米'
    }
  },
  methods: {
    refreshChart(type) {
      var myChart = echarts.init(this.$refs.chart)
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
      var text = ''
      var name = ''
      var data = []
      var subtext = ''
      if (type === 1) {
        text = '深圳市' + this.data.name + '房屋数量统计'
        name = '房屋数量统计'
        data = [
          { value: this.data.businessNum, name: '商业', label: label1 },
          { value: this.data.residenceNum, name: '住宅', label: label1 },
          { value: this.data.industryNum, name: '工业', label: label1 },
          { value: this.data.officeNum, name: '办公', label: label1 }
        ]
      }
      if (type === 2) {
        text = '深圳市' + this.data.name + '房屋建筑面积统计'
        name = '建筑面积统计'
        data = [
          { value: this.data.busininessArea, name: '商业', label: label1 },
          { value: this.data.residenceArea, name: '住宅', label: label1 },
          { value: this.data.industryArea, name: '工业', label: label1 },
          { value: this.data.officeArea, name: '办公', label: label1 }
        ]
        subtext = '单位(万平方米）'
      }
      var option = {
        title: {
          text: text,
          left: 'center',
          subtext: subtext
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['商业', '住宅', '工业', '办公']
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
            name: name,
            type: 'pie',
            selectedMode: 'single',
            radius: '55%',
            center: ['50%', '50%'],
            data: data,
            itemStyle: {
              emphasis: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
