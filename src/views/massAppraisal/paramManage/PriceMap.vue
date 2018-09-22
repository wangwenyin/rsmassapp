<template>
  <div class="app">
    <div class="content">
      <baidu-map class="bm-view" :style="{height: mapHeight}" :center="center"
        :zoom="zoom" @ready="handler" @dragend="handleEnd" :scroll-wheel-zoom="true" 
        :min-zoom="zoom">
        <price-overlay v-for="item in communities" :key="item.id"
          :position="{lng: item.x, lat: item.y}"
          :data="item"
          :prop_usage="prop_usage"
        ></price-overlay>
      </baidu-map>
      <div class="count-tip">视野内有{{length}}个基准地价点（共{{total}}个），拖动地图查看更多</div>
    </div>
  </div>
</template>

<script>
  import { getCommunities } from '@/api/massAppraisal'
  import BaiduMap from 'vue-baidu-map/components/Map/Map'
  import PriceOverlay from '../components/PriceOverlay'

  export default {
    components: { BaiduMap, PriceOverlay },
    data() {
      return {
        center: { lng: 114.067427, lat: 22.54899 },
        zoom: 16,
        firstTime: true,
        communities: [],
        mapHeight: '',
        total: 0,
        length: 0
      }
    },
    computed: {
      prop_usage() {
        return JSON.parse(localStorage.getItem('curTask')).prop_usage
      }
    },
    created() {
      // 获取基准点数据
      this.getCommunities()
    },
    mounted() {
      this.mapHeight = this.setMapHeight()
      window.onresize = () => {
        this.mapHeight = this.setMapHeight()
      }
    },
    methods: {
      // 地图高度自适应
      setMapHeight() {
        return document.documentElement.clientHeight - 70 + 'px'
      },
      getCommunities() {
        const params = {
          x: this.center.lng,
          y: this.center.lat
        }
        getCommunities(params).then(res => {
          this.total = res.total
          this.length = res.data.length
          const data = this.communities.concat(res.data)
          // 首次加载不调用去重函数
          this.firstTime ? this.communities = data : this.communities = this.unique(data)
        })
      },
      // 对象数组去重(利用对象key的唯一性)
      unique(data) {
        const result = []
        const obj = {}
        const len = data.length
        for (let i = 0; i < len; i++) {
          if (!obj[data[i].id]) {
            result.push(data[i])
            obj[data[i].id] = true
          }
        }
        return result
      },
      handler({ BMap, map }) {
        console.log(BMap, map)
      },
      // 地图拖拽结束回调
      handleEnd({ type, target, pixel, point }) {
        console.log(type, target, pixel, point)
        this.center = point
        this.firstTime = false
        // 获取新center范围数据
        this.getCommunities()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .content {
    position: relative;
    .bm-view {
      width: 100%;
    }
    .count-tip {
      position: absolute;
      left: 50%;
      bottom: 40px;
      transform: translateX(-50%);
      height: 30px;
      line-height: 30px;
      background: rgba(0,0,0,0.6);
      color: #fff;
      padding: 0 18px;
      border-radius: 2px;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
    }
  }
</style>
