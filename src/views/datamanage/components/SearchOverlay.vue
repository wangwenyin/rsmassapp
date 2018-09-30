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
    props: ['data', 'position', 'tableData', 'type', 'activeValue', 'use'],
    data() {
      return {
        active: false,
        dialogTableVisible: false,
        total: 100
      }
    },
    methods: {
      handleClick() {
        if (this.type === 'house') {
          const routerData = this.$router.resolve({
            name: 'house',
            query: { hdm: this.data.id, use: this.use }
          })
          window.open(routerData.href, '_blank')
        } else if (this.type === 'building') {
          const routerData = this.$router.resolve({
            name: 'building',
            query: { lddm: this.data.id, use: this.use }
          })
          window.open(routerData.href, '_blank')
        } else {
          const routerData = this.$router.resolve({
            name: 'project',
            query: { xmdm: this.data.id, use: this.use }
          })
          window.open(routerData.href, '_blank')
        }
      },
      draw({ el, BMap, map }) {
        const { lng, lat } = this.position
        const point = new BMap.Point(lng, lat)
        const pixel = map.pointToOverlayPixel(point)
        el.style.left = pixel.x - 60 + 'px'
        el.style.top = pixel.y - 20 + 'px'
      },
      change(value) {
        this.data.name.indexOf(value) > -1 ? this.active = true : this.active = false
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
        return this.data.name + ' ' + (this.data.price / 10000).toFixed(1) + '万'
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
