<template>
      <baidu-map class="bmView" :center="center" :scroll-wheel-zoom="scrollWheelZoom">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
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
   }
 }
</script>

<style scoped>
  .bmView {
    width: 100%;
    height: 620px;
  }
</style>



