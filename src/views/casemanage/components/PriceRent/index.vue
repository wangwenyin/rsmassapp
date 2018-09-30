<template>
  <div class="container" v-if="proData">
    <el-row ref="row">
      <el-col :span="8" class="title">{{name}}</el-col>
      <el-col :span="4" class="fr">
        <el-button :type="mapType" size="small" @click="showMap">图形</el-button>
        <el-button :type="listType" size="small" @click="showList">表格</el-button>
      </el-col>
      <el-col :span="4" class="fr">
        <el-select v-model="caseTypeList" multiple @change="handleTypeChange" placeholder="请选择案列类型" size="small">
          <el-option
            v-for="item in caseTypes"
            :key="item"
            :value="item">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div id="echarts" ref="echarts" v-show="isShow"></div>
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
        :page-sizes="[5, 10, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      priceType: {
        type: String,
        default: ''
      },
      dateRange: {
        type: Array,
        default: []
      },
      proData: {
        type: Object,
        default: null
      },
      tableData: {
        type: Array,
        default: []
      },
      basePriceData: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        caseTypeList: this.proData.caseTypeList,
        singleTypeData: [],
        mapType: 'primary',
        listType: 'plain',
        isShow: true,
        currentPage: 1,
        pageSize: 10
      }
    },
    computed: {
      caseTypes() {
        if (this.priceType === '价格') {
          return ['交易', '挂牌', '估价', '调查']
        } else {
          return ['交易', '挂牌', '调查']
        }
      },
      data() {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
    },
    mounted() {
      this.setEcHeight()
      this.draw()
    },
    methods: {
      // 复选框改变
      handleTypeChange(value) {
        if (!value.length) {
          return
        } else {
          // 派发事件
          this.$emit('getCase', value)
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
      getScatterData(originData, key, type) {
        const data = []
        // 根据type过滤数据
        const singleTypeData = originData.filter((item, i) => {
          return item.sl_type === type
        })
        // scatter数据是sj,dj组成的二维数组
        singleTypeData.forEach(item => {
          data.push([item.sj, item[key]])
        })
        return data
      },
      // 设置不同类型散点的series
      setSeries() {
        let series = []
        const list = this.caseTypeList

        if (this.priceType === '价格') {
          series = [{
            type: 'line',
            data: this.getLineData(this.basePriceData, 'pgdj')
          }]
        }
        for (var i = 0; i < list.length; i++) {
          series.push({
            name: list[i],
            type: 'scatter',
            symbolSize: 20,
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
            data: this.getScatterData(this.tableData, 'dj', list[i])
          })
        }
        return series
      },
      draw() {
        const myChart = echarts.init(document.getElementById('echarts'))
  
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
            name: '/月',
            // 以散点图日期为准
            min: this.dateRange[0].slice(0, 7),
            max: this.dateRange[1].slice(0, 7),
            interval: 3600 * 24 * 1000 * 31,
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
          yAxis: {
            type: 'value',
            name: '/元',
            scale: true
          },
          grid: {
            left: '6%',
            right: '6%'
          },
          series: this.setSeries()
        }
        // 多次调用时option选项是默认是合并（merge）的(会导致减少下拉框type，echarts不重新渲染)
        // 设置true-不合并(notMerge)
        myChart.setOption(option, true)
      }
    },
    watch: {
      tableData(newV) {
        console.log(newV)
        this.draw()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .container {
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
          margin-left: 0
        }
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
</style>