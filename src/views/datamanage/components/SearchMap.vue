<template>
<div class="Map" ref="Map" >
<baidu-map class="baiduMap" ref="baiduMap" :center="center" :zoom="zoom" :map-click="false" :scroll-wheel-zoom="true">
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP','BMAP_PERSPECTIVE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <SearchOverlay v-for="item in list" :key="item.id"
                   :position="{lng: item.x, lat: item.y}"
                   :data="item"
                   :type="type"
                   :active="searchValue"
      ></SearchOverlay>
    </baidu-map>
</div>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/Map/Map'
import SearchOverlay from '@/views/datamanage/components/SearchOverlay'
export default {
  components: { BaiduMap, SearchOverlay },
  props: {
    type: {
      type: String,
      default: 'project'
    },
    list: {
      type: Array,
      default: null
    },
    zoom: {
      type: Number,
      default: 18
    },
    center: {
      type: Object,
      default: function() {
        return { lng: 113.939897, lat: 22.519751 }
      }
    },
    searchValue: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      communities: null
    }
  },
  mounted() {
    this.setHeight()
    // 屏幕适应大小
    window.onresize = () => {
      this.setHeight()
    }
  },
  methods: {
    setHeight() {
      this.$refs.Map.style.height = document.documentElement.clientHeight - 190 + 'px'
    }
  }
}
</script>
<style>
 .Map {
  width: 100%;
  /* height: 590px; */
}
.baiduMap{
  width: 100%;
  height: 100%
}
</style>
