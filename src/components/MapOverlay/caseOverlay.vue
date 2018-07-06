<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw"
    @mouseover.native="mouseOver"
    @mouseout.native="mouseOut">
    <div v-html="getText" @click="handleClick"></div>
    <el-dialog title="案例列表:" width="70%" :modal-append-to-body="false" :append-to-body="true" top="25vh" :visible.sync="dialogTableVisible" @close="keepHighLight">
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        border
        style="width: 100%"
        id="el-table"
      >
        <el-table-column
          prop="id"
          label="序号"
          width="50"
        >
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="xmmc"
          label="项目名称">
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
          prop="sj"
          label="交易时间">
        </el-table-column>
        <el-table-column
          prop="xzq"
          label="行政区">
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
          prop="dj"
          label="单价">
        </el-table-column>
        <el-table-column
          prop="zj"
          label="总价">
        </el-table-column>
        <el-table-column
          prop="yt"
          label="用途">
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
        :page-sizes="[5, 10, 15]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </el-dialog>
  </bm-overlay>
</template>

<script>
  
  export default {
    props: ['data', 'position', 'zoom', 'caseList'],
    data() {
      return {
        active: false,
        dialogTableVisible: false,
        tableData: [],
        currentPage: 1,
        pageSize: 5,
        averagePrice: 0,
        caseNum: 0
      }
    },
    watch: {
      position: {
        handler() {
          if (this.$refs.customOverlay !== null) {
            this.$refs.customOverlay.reload()
          }
        },
        deep: true
      }
    },
    created() {
      this.tableData = this.caseList.filter(item => {
        return this.data.xmmc === item.xmmc
      })
      this.getPriceAndNum()
    },
    computed: {
      getText() {
        if (this.zoom > 15) {
          return this.data.xmmc + ' ' + (this.averagePrice / 10000).toFixed(1) + '万' + ' ' + this.caseNum + '个'
        } else {
          return this.data.region.substr(-3) + '<br>' + (this.data.averagePrice / 10000).toFixed(1) + '万' + '<br>' + this.data.num + '套'
        }
      }
    },
    mounted() {
      if (this.zoom < 16) {
        this.$refs.customOverlay.$el.style.width = '80px'
        this.$refs.customOverlay.$el.style.height = '80px'
        this.$refs.customOverlay.$el.style.borderRadius = '50%'
        this.$refs.customOverlay.$el.style.padding = '15px'
      }
    },
    methods: {
      handleSizeChange(size) {
        this.pageSize = size
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
      },
      // 处理caseNum和平均单价
      getPriceAndNum() {
        if (this.caseList !== null) {
          const xmCaseList = this.caseList.filter(item => {
            return this.data.xmmc === item.xmmc
          })
          let totalPrice = 0
          for (let i = 0; i < xmCaseList.length; i++) {
            const item = xmCaseList[i]
            totalPrice += item.dj
          }
  
          this.caseNum = xmCaseList.length
          this.averagePrice = totalPrice / this.caseNum
        }
      },
      mouseOver() {
        this.active = true
        if (this.zoom < 14) {
          this.data.region && this.$emit('over', this.data.region)
        }
      },
      mouseOut() {
        this.active = false
        if (this.zoom < 14) {
          this.data.region && this.$emit('out')
        }
      },
      handleClick() {
        this.dialogTableVisible = true
      },
      draw({ el, BMap, map }) {
        const { lng, lat } = this.position
        const point = new BMap.Point(lng, lat)
        const pixel = map.pointToOverlayPixel(point)
        el.style.left = pixel.x - 60 + 'px'
        el.style.top = pixel.y - 20 + 'px'
      },
      change(value) {
        this.data.xmmc.indexOf(value) > -1 ? this.active = true : this.active = false
      },
      keepHighLight() {
        this.active = true
        // 原因是触发了marker的mouseout事件
        /* setTimeout(() => {
          this.active =true
        }, 400)*/
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sample {
    min-width: 50px;
    padding: 5px;
    display: block;
    background: #409EFF;
    color: #fff;
    text-align: center;
    position: absolute;
    font-size: 15px;
    white-space: nowrap;
    cursor: pointer;
    opacity: .9;
    border-radius: 3px;
  }
  .sample.active {
    background: #B00000;
    color: #fff;
  }
</style>
