<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw"
    @mouseover.native="active=true"
    @mouseout.native="active=false">
    <div v-text="getText" @click="handleClick"></div>
    <el-dialog title="案例列表:" width="70%" :modal-append-to-body="false" :append-to-body="true" top="25vh" :visible.sync="dialogTableVisible" @close="keepHighLight">
      <el-table
        :data="tableData"
        border
        >
        <el-table-column
          property="number"
          label="编号"
          width="50"
        >
        </el-table-column>
        <el-table-column
          property="name"
          label="项目名称">
        </el-table-column>
        <el-table-column
          property="building"
          label="楼栋名称">
        </el-table-column>
        <el-table-column
          property="house"
          label="户名称">
        </el-table-column>
        <el-table-column
          property="tradingTime"
          label="交易时间">
        </el-table-column>
        <el-table-column
          property="region"
          label="行政区">
        </el-table-column>
        <el-table-column
          property="district"
          label="片区">
        </el-table-column>
        <el-table-column
          property="area"
          label="建筑面积">
        </el-table-column>
        <el-table-column
          property="houseType"
          label="户型">
        </el-table-column>
        <el-table-column
          property="price"
          label="单价">
        </el-table-column>
        <el-table-column
          property="totalPrice"
          label="总价">
        </el-table-column>
      </el-table>
      <el-pagination
        size="medium"
        background
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </el-dialog>
  </bm-overlay>
</template>

<script>
  
  export default {
    props: ['data', 'position', 'tableData'],
    data() {
      return {
        active: false,
        dialogTableVisible: false,
        total: 100,
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
        return this.data.name + ' ' + (this.data.price / 10000).toFixed(1) + '万' + ' ' + this.data.caseNum + '个'
      }
    },
    methods: {
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
        value && this.data.name.indexOf(value) > -1 ? this.active = true : this.active = false
      },
      keepHighLight() {
        this.active =true
        // 原因是触发了marker的mouseout事件
        /*setTimeout(() => {
          this.active =true
        }, 400)*/
      },
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
    border-radius: 3px;
  }
  .sample.active {
    background: #B00000;
    color: #fff;
  }
</style>
