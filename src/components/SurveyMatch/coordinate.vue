<template>
    <baidu-map class="bmView" :center="center"  :zoom="15" :scroll-wheel-zoom="scrollWheelZoom" ref="baiduMap">
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-panorama anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-panorama>
      <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
        <bm-label content="" :labelStyle="{color: 'red', fontSize : '24px'}"/>
      </bm-marker>
    </baidu-map>
</template>
<script>
 import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'

 export default {
   components: {
     BaiduMap
   },
   props: {
     center: {
       type: Object,
       default: ''
     },
     scrollWheelZoom: {
       type: Boolean,
       default: true
     }
   },
   data() {
     return {
       flag: false,
       keyword: ''
     }
   },
   methods: {
     regain() {
       if (!this.flag) {
         this.$refs.baiduMap.$el.style.width = '70%'
       } else {
         this.$refs.baiduMap.$el.style.width = '100%'
       }
       this.flag = !this.flag
     }
   }
 }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .bmView {
    width: 100%;
    height: 620px;
    transition: .2s width;
  }
</style>



