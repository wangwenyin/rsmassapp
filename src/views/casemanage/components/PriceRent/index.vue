<template>
  <div class="container" v-if="proData">
    <el-row ref="row">
      <el-col :span="8" class="title">{{name}}</el-col>
      <el-col :span="2" class="fr" style="margin-right: 4.5%">
        <el-button :type="mapType" size="small" @click="showMap">图形</el-button>
        <el-button :type="listType" size="small" @click="showList">表格</el-button>
      </el-col>
      <el-col :span="5" class="fr" style="margin-right: 20px">
        <el-select v-model="caseTypeList" multiple @change="handleTypeChange" placeholder="请选择案列类型" size="small" :style="{ width: percent }">
          <el-option
            v-for="item in caseTypes"
            :key="item"
            :value="item">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <transition name="fade">
      <div class="arrow">
        <svg-icon icon-class="case_arrow_left" class="arrow-left" @click.native="onArrowClick(0)"></svg-icon>
        <svg-icon icon-class="case_arrow_right" class="arrow-right" @click.native="onArrowClick(1)"></svg-icon>
    </div>
    </transition>
    <div :id="id" ref="echarts" v-show="isShow" @mouseover="isShowIcon=true" @mouseout="isShowIcon=false">
    </div>
    <div class="table" v-show="!isShow" v-if="tableData">
      <el-table 
        :data="data"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="序号"
          width="50">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="ldmc"
          label="楼栋名称">
        </el-table-column>
        <el-table-column
          prop="hh"
          label="户号">
        </el-table-column>
        <el-table-column
          prop="lc"
          label="楼层">
        </el-table-column>
        <el-table-column
          prop="jzmj"
          label="建筑面积">
        </el-table-column>
        <el-table-column
          prop="hx"
          label="户型">
        </el-table-column>
        <el-table-column
          prop="cx"
          label="朝向">
        </el-table-column>
        <el-table-column
          prop="xylx"
          label="物业类型">
        </el-table-column>
        <el-table-column
          prop="yt"
          label="用途细类">
        </el-table-column>
        <el-table-column
          prop="dj"
          label="单价">
        </el-table-column>
        <el-table-column
          prop="sj"
          label="交易时间">
        </el-table-column>
        <el-table-column
          prop="zj"
          label="总价">
        </el-table-column>
        <el-table-column
          prop="ally"
          label="案例来源">
        </el-table-column>
      </el-table>
      <el-pagination
        size="medium"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import { getCases, getProPrice, getBudPrice } from '@/api/caseSearch'
  import { parseTime } from '@/utils/index'

  // NUM:刻度数 min：y轴最小刻度值 max：最大值 mid：中间值
  const NUM = 10
  let min, max, mid

  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: 'echarts'
      },
      // 那个模块调用(1：案例管理/ 0:数据管理)
      usage: {
        type: Number,
        default: 1
      },
      priceType: {
        type: String,
        default: '价格'
      },
      dateRange: {
        type: Array,
        default: [parseTime(new Date() - 1, '{y}-{m}-{d}'), parseTime(new Date(), '{y}-{m}-{d}')]
      },
      proData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        tableData: [],
        basePriceData: [],
        caseTypeList: this.proData.caseTypeList,
        singleTypeData: [],
        mapType: 'primary',
        listType: 'plain',
        isShow: true,
        isShowIcon: false,
        currentPage: 1,
        pageSize: 10,
        // 预设的单位刻度值
        p1: 0,
        // 最终确定的单位刻度值
        interval: 0
      }
    },
    computed: {
      caseTypes() {
        if (this.priceType === '价格') {
          this.p1 = 2000
          return ['交易', '挂牌', '估价', '调查']
        } else {
          this.p1 = 20
          return ['交易', '挂牌', '调查']
        }
      },
      data() {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      },
      percent() {
        if (this.caseTypeList.length < 3) {
          return '60%'
        } else {
          return '100%'
        }
      }
    },
    mounted() {
      // 散点图数据(案例数据)
      this.getCaseDetailList(this.proData.params)
      // 折线图数据(项目评估价数据)
      this.proData.params.xmdm && this.getProPrice(this.proData.params.xmdm)
      this.proData.params.lddm && this.getBudPrice(this.proData.params.lddm)
      this.setEcHeight()
    },
    methods: {
      onArrowClick(tag) {
        console.log(111)
        this.$emit('changeDate', tag)
      },
      // 获取案例数据
      getCaseDetailList(params) {
        getCases(params).then(res => {
          console.log(res.data)
          this.tableData = res.data
        })
      },
      getProPrice(xmdm) {
        getProPrice({ xmdm: xmdm }).then(res => {
          console.log(res.data)
          this.basePriceData = res.data
        })
      },
      getBudPrice(lddm) {
        getBudPrice({ lddm: lddm }).then(res => {
          console.log(res.data)
          this.basePriceData = res.data
        })
      },
      // 复选框改变
      handleTypeChange(value) {
        if (!value.length) {
          return
        } else {
          this.proData.params.allx = value.join(',')
          this.getCaseDetailList(this.proData.params)
        }
      },
      handleSizeChange(size) {
        this.pageSize = size
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
      },
      setEcHeight() {
        const clientHeight = document.documentElement.clientHeight
        const topHeight = this.$refs.row.$el.offsetHeight + 80
        if (this.$refs.echarts) {
          this.$refs.echarts.style.height = clientHeight - topHeight + 'px'
        }
      },
      showMap() {
        this.mapType = 'primary'
        this.listType = 'plain'
        this.isShow = true
      },
      showList() {
        this.mapType = 'plain'
        this.listType = 'primary'
        this.isShow = false
      },
      // 处理line和x轴的数据
      getLineData(originData, key) {
        const data = []
        originData.forEach(item => {
          data.push([item.jzsd, item[key]])
        })
        return data
      },
      getScatterData(originData, key, type, lineDataY) {
        const data = []
        const scatterDataY = []
        // 根据type过滤数据
        const singleTypeData = originData.filter((item, i) => {
          return item.sl_type === type
        })
        // scatter数据是sj,dj组成的二维数组
        singleTypeData.forEach(item => {
          data.push([item.sj, item[key]])
          scatterDataY.push(item[key])
        })
        // 将散点数据与折线图数据放一起取minData，maxData
        const dataY = scatterDataY.concat(lineDataY)
        this.setDataY(dataY)
  
        return data
      },
      // 设置y刻度数据
      setDataY(dataY) {
        const minData = Math.min(...dataY)
        const maxData = Math.max(...dataY)
        const p2 = (maxData - minData) / NUM
        const avg = (maxData + minData) / 2
        let p3
        // 取整
        if (this.priceType === '价格') {
          p3 = parseInt(p2 / 1000) * 1000
          mid = parseInt(avg / 1000) * 1000
          if (mid < 10000) {
            mid = 10000
          }
        } else {
          p3 = parseInt(p2 / 10) * 10
          mid = parseInt(avg / 10) * 10
          if (mid < 100) {
            mid = 100
          }
        }
        // 比较p3和p1，取大者为最终单位刻度值
        if (p3 > this.p1) {
          this.interval = p3
        } else {
          this.interval = this.p1
        }
        // y轴min，max是根据NUM mid interval三者计算而来（非minData，maxData）
        min = mid - (NUM / 2) * this.interval
        max = mid + (NUM / 2) * this.interval
      },
      // 设置不同类型散点的series
      setSeries() {
        let series = []
        const list = this.caseTypeList
        const lineDataY = []
        // 数据管理的价格图才有折线图
        if (!this.usage && this.priceType === '价格') {
          this.basePriceData.forEach(item => {
            lineDataY.push(item['pgdj'])
          })
          series = [{
            type: 'line',
            data: this.getLineData(this.basePriceData, 'pgdj')
          }]
        }
        for (let i = 0; i < list.length; i++) {
          series.push({
            name: list[i],
            type: 'scatter',
            symbolSize: 12,
            label: {
              emphasis: {
                show: true,
                position: 'left',
                textStyle: {
                  color: 'blue',
                  fontSize: 16
                }
              }
            },
            itemStyle: {
              normal: {
                color: params => {
                  switch (list[i]) {
                    case '交易':
                      return 'lightcoral'
                    case '挂牌':
                      return 'yellow'
                    case '估价':
                      return 'green'
                    default:
                      return 'blue'
                  }
                }
              }
            },
            data: this.getScatterData(this.tableData, 'dj', list[i], lineDataY)
          })
        }
        return series
      },
      draw() {
        const myChart = echarts.init(document.getElementById(this.id))
  
        const option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            itemWidth: 30
          },
          xAxis: {
            type: 'time',
            // 以散点图日期为准
            min: this.dateRange[0].slice(0, 7),
            max: this.dateRange[1].slice(0, 7),
            interval: 3600 * 24 * 1000 * 31,
            splitLine: {
              lineStyle: {
                type: 'dotted'
              }
            },
            axisLabel: {
              // 刻度标签的内容格式器
              formatter: function(value, index) {
                // 格式化成年/月
                var date = new Date(value)
                var texts = [date.getFullYear(), (date.getMonth() + 1)]
                return texts.join('/')
              }
            }
          },
          series: this.setSeries(),
          yAxis: {
            type: 'value',
            scale: true,
            splitNumber: NUM,
            interval: this.interval,
            min: min,
            max: max,
            splitLine: {
              lineStyle: {
                type: 'dotted'
              }
            }
          },
          grid: {
            left: '6%',
            right: '6%'
          }
        }
        // 多次调用时option选项是默认是合并（merge）的(会导致减少下拉框type，echarts不重新渲染)
        // 设置true-不合并(notMerge)
        myChart.setOption(option, true)
      }
    },
    watch: {
      // 数据改变-》触发echarts重绘
      tableData() {
        this.draw()
      },
      // 数据管理模块调用需监视 案例用途 的改变
      proData: {
        handler() {
          this.getCaseDetailList(this.proData.params)
        },
        deep: true
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .container {
    position: relative;
    overflow: hidden;
    .el-row {
      margin-top: 10px;
      line-height: 1.5;
      .title {
        margin-left: 5%;
        font-size: 22px;
        font-weight: bold;
      }
      .fr {
        float: right;
        .el-button {
          margin-left: -5px
        }
      }
    }
    .arrow {
      .svg-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        cursor: pointer;
        z-index: 1;
      }
      .arrow-left {
        left: 10px;
      }
      .arrow-right {
        right: 10px;
      }
    }
    .table {
      margin-top: 10px;
      .el-pagination {
        margin-top: 10px;
        text-align: center
      }
    }
  }
  // arrow过渡效果
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>