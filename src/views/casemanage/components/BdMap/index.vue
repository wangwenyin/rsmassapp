<template>
    <baidu-map class="bmView" :center="center" :zoom="15" :scroll-wheel-zoom="scrollWheelZoom" ref="baiduMap">
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-panorama anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-panorama>
      <bm-boundary name="深圳市福田区" :strokeWeight="2" strokeColor="blue"></bm-boundary>
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 10}">
        <el-button plain size="small" @click="regain">大图</el-button>
      </bm-control>
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 50}">
        <el-popover
          title="请选择图层："
          width="200"
          trigger="click">
          <el-button plain size="small">行政区划</el-button>
          <el-button plain size="small">评估分区</el-button>
          <el-button plain size="small" style="margin-left: 0;margin-top: 5px">生活配套</el-button>
          <el-button plain size="small" style="margin-top: 5px">教育配套</el-button>
          <el-button plain size="small" style="margin-left: 0;margin-top: 5px">交通配套</el-button>
          <el-button plain size="small" slot="reference">图层</el-button>
        </el-popover>
      </bm-control>
      <bm-control anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{width: 10, height: 40}">
        <el-input v-model="keyword" size="mini" clearable placeholder="请输入关键词"></el-input>
      </bm-control>
      <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
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



