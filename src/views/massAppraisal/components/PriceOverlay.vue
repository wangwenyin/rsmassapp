<template>
  <bm-overlay
    ref="customOverlay"
    :class="{ sample: true, active }"
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
      prop_usage: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        active: false
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
  
    },
    computed: {
      // 根据用途获取价格
      getText() {
        switch (this.prop_usage) {
          case '办公':
            return this.data.bg
          case '商业':
            return this.data.sy
          case '工业':
            return this.data.gy
          default:
            return this.data.zz
        }
      }
    },
    mounted() {
  
    },
    methods: {
      mouseOver() {
        this.active = true
      },
      mouseOut() {
        this.active = false
      },
      handleClick() {
        // if (this.hasClick) {
        //   return
        // }
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
