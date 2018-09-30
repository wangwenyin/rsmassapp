<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active, xzqMarkerClass}"
    pane="labelPane"
    @draw="draw"
    @mouseover.native="mouseOver"
    @mouseout.native="mouseOut">
    <div v-html="getText" @click="handleClick()"></div>
  </bm-overlay>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: null
      },
      position: {
        type: Object,
        default: null
      },
      zoom: {
        type: Number,
        default: 12
      },
      keyword: {
        type: String,
        default: ''
      },
      typeValue: {
        type: String,
        default: ''
      },
      selectable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: false,
        hasClick: false
      }
    },
    computed: {
      getText() {
        if (this.zoom > 15) {
          // 租金的值在1000以内
          return this.data.xmmc + ' ' + (this.typeValue === '价格' ? ((this.data.avg_price / 10000).toFixed(1) + '万') : (this.data.avg_price + '元')) + ' ' + this.data.alsl + '个'
        } else {
          return this.data.name + '<br>' + (this.typeValue === '价格' ? ((this.data.avg_price / 10000).toFixed(1) + '万') : (this.data.avg_price + '元')) + '<br>' + this.data.alsl + '套'
        }
      },
      xzqMarkerClass() {
        if (this.zoom < 16) {
          return true
        }
      }
    },
    mounted() {
  
    },
    methods: {
      handleSizeChange(size) {
        this.pageSize = size
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
      },
      add(val) {
        this.$emit('add', val)
      },
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
        // 派发over事件,以触发showBoundary
        if (this.zoom < 14) {
          this.data.name && this.$emit('over', this.data.name)
        }
      },
      mouseOut() {
        // 根据marker是否点击，决定mouseOut行为
        this.hasClick && this.zoom > 15 ? this.active = true : this.active = false
        this.data.name && this.$emit('out')
      },
      handleClick() {
        // 每一次点击先让所有的取消高亮（主要为了取消之前点击的）
        this.$emit('cancleActive')
        // 再让当前高亮
        this.hasClick = true
        this.active = true
        // 派发事件，获取项目详情
        this.$emit('markerClick', this.data)
      },
      draw({ el, BMap, map }) {
        const { lng, lat } = this.position
        const point = new BMap.Point(lng, lat)
        const pixel = map.pointToOverlayPixel(point)
        el.style.left = pixel.x - 60 + 'px'
        el.style.top = pixel.y - 20 + 'px'
      }
    },
    watch: {
      position: {
        handler() {
          if (this.$refs.customOverlay !== null) {
            this.$refs.customOverlay.reload()
          }
        },
        // 深度监视
        deep: true
      },
      keyword(value) {
        this.data.xmmc.includes(value) ? this.active = true : this.active = false
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
  .xzqMarkerClass {
    width: 90px;
    height: 90px;
    line-height: 1.5;
    padding: 15px;
    border-radius: 50%
  }
  .sample.active {
    background: #B00000;
    color: #fff;
  }
</style>
