<template>
  <div class="margin60">
       <div id="1f"></div>
    <el-row >
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
     <Carousel :img="o.img"></Carousel>
  </el-col>
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
     <div>
          <div class="bottom30">
             <span class="title">{{ o.house }} </span>
             <span class="title-small">{{ o.project }} </span>
             <span class="title-small">{{ o.building }} </span>
             <div class="right">
              <span>{{o.region}}</span>&nbsp;&nbsp;|
              <span>{{o.street}}</span>&nbsp;&nbsp;|
              <span>组别{{o.group}}</span>&nbsp;&nbsp;
              <el-button type="primary" plain>编辑</el-button>
             </div>
          </div>
          <div>
          <el-row >
            <el-col :span="6"><span class="con">户编号</span></el-col>
            <el-col :span="6"><span class="val">{{o.houseId}}</span></el-col>
            <el-col :span="6"><span class="con">楼层</span></el-col>
            <el-col :span="6"><span class="val">{{o.layer}}</span></el-col>
         </el-row>
          <el-row >
            <el-col :span="6"><span class="con">坐落</span></el-col>
            <el-col :span="6"><span class="val">{{o.located}}</span></el-col>
            <el-col :span="6"><span class="con">户型</span></el-col>
            <el-col :span="6"><span class="val">{{o.type}}</span></el-col>
         </el-row>
         <el-row >
            <el-col :span="6"><span class="con">建筑面积</span></el-col>
            <el-col :span="6"><span class="val">{{o.builtUpArea}}</span></el-col>
            <el-col :span="6"><span class="con">套内建筑面积</span></el-col>
            <el-col :span="6"><span class="val">{{o.innerBuildingArea}}</span></el-col>
         </el-row>
          <el-row>
            <el-col :span="6"><span class="con">分摊建筑面积</span></el-col>
            <el-col :span="6"><span class="val">{{o.shareBuiltUpArea}}</span></el-col>
            <el-col :span="6"><span class="con">分摊土地面积</span></el-col>
            <el-col :span="6"><span class="val">{{o.shareLandArea}}</span></el-col>
         </el-row>
           <el-row >
            <el-col :span="6"><span class="con">用途1</span></el-col>
            <el-col :span="6"><span class="val">{{o.purpose1}}</span></el-col>
            <el-col :span="6"><span class="con">用途2</span></el-col>
            <el-col :span="6"><span class="val">{{o.purpose2}}</span></el-col>
         </el-row>
          <el-row >
            <el-col :span="6"><span class="con">性质</span></el-col>
            <el-col :span="6"><span class="val">{{o.nature}}</span></el-col>
            <el-col :span="6"><span class="con">户型结构</span></el-col>
            <el-col :span="6"><span class="val">{{o.familyStructure}}</span></el-col>
         </el-row>
          </div>
       </div>
  </el-col>
</el-row>
 <div id="2f"></div>
<el-row >
        <span class="title-small">配套和指标因素信息 </span>
</el-row>
<el-row>
 <el-tabs type="border-card"  >
  <el-tab-pane label="住宅">
     <el-row  >
       <el-col :span="24">
         <span class="con">景观:</span> <span class="val"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span>
         <span class="con">装修装饰:</span> <span class="val"><el-rate v-model="value4" :texts="texts"  disabled show-text></el-rate></span>
         <span class="con">户型布局:</span> <span class="val"><el-rate v-model="value4" :texts="texts"  disabled show-text></el-rate></span>
       
      </el-col>
    </el-row>
    <el-row  >
     <el-col :span="24">
       <span class="con">噪音:</span> <span class="val"><el-rate v-model="value4" :texts="texts"  disabled show-text></el-rate></span>
       <span class="con">其他污染:</span> <span class="val"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span>
      
       <span class="con">采光:</span> <span class="val"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span>
     </el-col>
   </el-row>
    <el-row >
       <el-col :span="24">
         <span class="con">相对位置:</span> <span class="val"><el-rate v-model="value4" :texts="texts"  disabled show-text></el-rate></span>
         <span class="con">朝向:</span> <span class="val">东南</span>
        </el-col>
    </el-row>
  </el-tab-pane>
  <el-tab-pane label="办公"></el-tab-pane>
  <el-tab-pane label="商业"></el-tab-pane>
</el-tabs>
</el-row>
 <div id="3f"></div>
<el-row >
    <span class="project_d">评估价格 </span>
</el-row>
<el-row>
  <PriceChart></PriceChart> 
</el-row>
 <div id="4f"></div>
<el-row >
   <span class="title-small">价格地图 </span>
</el-row>
<el-row>
   <PriceMap></PriceMap>
</el-row>
<div class="topmenu" ref="topmenu">
<a href="#1f"><el-button type="info">基础信息</el-button></a><a href="#2f"><el-button type="info">指标信息</el-button></a><a href="#3f"><el-button type="info">评估价格</el-button></a><a href="#4f"><el-button type="info">价格地图</el-button></a>

</div>
  </div>
</template>
<script>
import PriceChart from '@/views/datamanage/search/components/Chart/PriceChart'
import Carousel from '@/components/Carousel/index'
import PriceMap from '@/views/datamanage/search/components/Map/PriceMap'
export default {
  components: { Carousel, PriceMap, PriceChart },
  data() {
    return {
      o: null,
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 4,
      value5: 5,
      texts: ['差', '较差', '一般', '较好', '好']
    }
  },
  mounted() {
    this.getHouse()
    this.$nextTick(function() {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    onScroll() {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop
      if (scrolled >= 600) {
        this.$refs.topmenu.style.display = 'block'
      } else {
        this.$refs.topmenu.style.display = 'none'
      }
    },
    getHouse() {
      this.$http.get('src/mock/house.json').then(response => {
        response.data.data.forEach(element => {
          if (element.houseId === this.$route.query.houseId) { this.o = element }
        })
      }, response => {
        console.log('项目数据加载失败')
      })
    }
  }
}
</script>
<style>
  
</style>