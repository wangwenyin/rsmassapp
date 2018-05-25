<template>
    <baidu-map class="bmView" :center="center" :scroll-wheel-zoom="scrollWheelZoom" ref="baiduMap">
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-panorama anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-panorama>
      <bm-boundary name="深圳市南山区" :strokeWeight="2" strokeColor="blue"></bm-boundary>
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT">
        <button @click="regain">恢复</button>
      </bm-control>
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
       type: String,
       default: ''
     },
     scrollWheelZoom: {
       type: Boolean,
       default: true
     }
   },
   data() {
     return {
      flag: false
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
  }
</style>



