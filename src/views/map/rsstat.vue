<template>
   <!-- <baidu-map class="bm-view" ak="IeX6XuQlGoYt3kfH4uQNxGGHochpBIlr"> -->
      <baidu-map class="map" center="深圳"></baidu-map>
  <!-- </baidu-map> -->
  
</template>
<script>
 /* eslint-disable */
 import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
export default {
  components: {
    BaiduMap
  },
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style>
 /* .bm-view {
  width: 100%;
  height: 300px;
}  */
.map {
  width: 100%;
  height: 720px;
}
</style>
