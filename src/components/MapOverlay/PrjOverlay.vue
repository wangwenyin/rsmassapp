<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw"
    @mouseover.native="active=true"
    @mouseout.native="active=false">
    <div v-text="getText" @click="handleClick"></div>
  </bm-overlay>
</template>

<script>
  export default {
    props: ['data', 'position', 'active'],
    
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
        global.alert(this.data.id)
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
    border-radius: 3px;
  }
  .sample.active {
    background: #B00000;
    color: #fff;
  }

</style>
