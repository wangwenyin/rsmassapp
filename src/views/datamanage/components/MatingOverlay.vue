<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw"
    @mouseover.native="active=true"
    @mouseout.native="active=false">
    <div v-text="getText" ></div>
  </bm-overlay>
</template>
<script>
  export default {
    props:
    { data: {
      type: Array,
      default: []
    },
    position: {
      type: Object,
      default: null
    },
    activeValue: {
      type: String,
      default: ''
    },
    showkey: {
      type: String,
      default: 'name'
    }
    },
    data() {
      return {
        active: false,
        dialogTableVisible: false,
        total: 100
      }
    },
    methods: {
      draw({ el, BMap, map }) {
        const { lng, lat } = this.position
        const point = new BMap.Point(lng, lat)
        const pixel = map.pointToOverlayPixel(point)
        el.style.left = pixel.x - 60 + 'px'
        el.style.top = pixel.y - 20 + 'px'
      },
      change(value) {
        this.data[this.showkey].indexOf(value) > -1 ? this.active = true : this.active = false
      },
      keepHighLight() {
        this.active = true
        // 原因是触发了marker的mouseout事件
        /* setTimeout(() => {
          this.active =true
        }, 400)*/
      }
    },
    computed: {
      getText() {
        if (this.activeValue !== '') {
          this.change(this.activeValue)
        }
        return this.data[this.showkey]
      }
    },
    watch: {
      position: {
        handler() {
          this.$refs.customOverlay.reload()
        },
        deep: true
      }
    }
    // ,
    // activeValue(value) {
    //   console.log(value)
    //   this.data.xmmc.indexOf(value) > -1 ? this.active = true : this.active = false
    // }
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
    z-index: 9999;
  }
</style>
