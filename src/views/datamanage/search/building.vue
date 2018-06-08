<template>
  <div class="margin60">
     <div id="1f"></div>
    <el-row :gutter="10">
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
     <Carousel :img="o.img"></Carousel>
  </el-col>
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
     <div >
          <div class="bottom30">
              <span class="title">{{ o.building }} </span>
             <span class="title-small">{{ o.project }} </span>
             <div class="right">
              <span>{{o.region}}</span>&nbsp;&nbsp;|
              <span>{{o.street}}</span>&nbsp;&nbsp;|
              <span>组别{{o.group}}</span>&nbsp;&nbsp;
              <el-button type="primary" plain>编辑</el-button>
             </div>
          </div>
          <div>
          <el-row :gutter="10" >
            <el-col :span="6"><span class="con">楼栋编号</span></el-col>
            <el-col :span="6"><span class="val">{{o.buildingId}}</span></el-col>
            <el-col :span="6"><span class="con">别名</span></el-col>
            <el-col :span="6"><span class="val">{{o.alias}}</span></el-col>
         </el-row>
          <el-row :gutter="10" >
            <el-col :span="6"><span class="con">坐落</span></el-col>
            <el-col :span="6"><span class="val">{{o.located}}</span></el-col>
            <el-col :span="6"><span class="con">竣工日期</span></el-col>
            <el-col :span="6"><span class="val">{{o.completionDate}}</span></el-col>
         </el-row>
         <el-row :gutter="10" >
            <el-col :span="6"><span class="con">占地面积</span></el-col>
            <el-col :span="6"><span class="val">{{o.areaCovered}}</span></el-col>
            <el-col :span="6"><span class="con">用地面积</span></el-col>
            <el-col :span="6"><span class="val">{{o.landArea}}</span></el-col>
         </el-row>
          <el-row :gutter="10" >
            <el-col :span="6"><span class="con">地上层数</span></el-col>
            <el-col :span="6"><span class="val">{{o.onLayers}}</span></el-col>
            <el-col :span="6"><span class="con">地下层数</span></el-col>
            <el-col :span="6"><span class="val">{{o.underLayers}}</span></el-col>
         </el-row>
           <el-row :gutter="10" >
            <el-col :span="6"><span class="con">性质</span></el-col>
            <el-col :span="6"><span class="val">{{o.nature}}</span></el-col>
            <el-col :span="6"><span class="con">总户数</span></el-col>
            <el-col :span="6"><span class="val">{{o.houseNum}}</span></el-col>
         </el-row>
          <el-row :gutter="10">
            <el-col :span="6"><span class="con">高度</span></el-col>
            <el-col :span="6"><span class="val">{{o.height}}</span></el-col>
            <el-col :span="6"><span class="con">结构</span></el-col>
            <el-col :span="6"><span class="val">{{o.structure}}</span></el-col>
         </el-row>
         <el-row :gutter="10" >
            <el-col :span="6"><span class="con">用途1</span></el-col>
            <el-col :span="6"><span class="val">{{o.purpose1}}</span></el-col>
            <el-col :span="6"><span class="con">用途2</span></el-col>
            <el-col :span="6"><span class="val">{{o.purpose2}}</span></el-col>
         </el-row>
          </div>
       </div>
  </el-col>
</el-row>
 <div id="2f"></div>
<el-row>
    <el-col :span="3 "> <span class="title-small">户列表 </span></el-col>
    <el-col :span="3">
      <router-link :to="{ name:'housegrid' ,query: { buildingId: o.buildingId }}" target="_blank">
        <span style="color:#007eff">网格模式</span>
      </router-link>
    </el-col>
</el-row>
<el-row>
<el-table  :data="houses" border max-height="350" >
   <el-table-column width="50" type="index" label="序号" align="center" ></el-table-column>
   <el-table-column prop="house" label="名称"> </el-table-column>
   <el-table-column prop="builtUpArea" label="建筑面积"></el-table-column>
   <el-table-column prop="layer" label="所在层"></el-table-column>
   <el-table-column prop="type" label="户型"></el-table-column>
   <el-table-column prop="orientation" label="朝向"></el-table-column>
   <el-table-column prop="price" label="评估价"></el-table-column>
   <el-table-column label="备注">
     <template slot-scope="scope">
       <router-link :to="{ name:'house' ,query: { houseId: scope.row.houseId }}" target="_blank"  >
         <el-button type="text" size="small">详情</el-button>
       </router-link>
      </template>
    </el-table-column>
  </el-table>
</el-row>
 <div id="3f"></div>
<el-row>
   <span class="title-small">配套和指标因素信息 </span>
</el-row>
<el-row>
 <el-tabs type="border-card"  >
  <el-tab-pane label="住宅">
     <el-row >
        <span class="con">建筑类型:</span> <span class="val">高层</span>
        <span class="con">是否有电梯:</span> <span class="val">是</span>
        <span class="con">梯户比:</span> <span class="val">两梯四户</span>
        <span class="con">相对位置:</span> <span class="val"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span>
       </el-row>
    </el-tab-pane>
  <el-tab-pane label="办公"></el-tab-pane>
  <el-tab-pane label="商业"></el-tab-pane>
</el-tabs>
</el-row>
<el-row :gutter="10" >
  <span class="title-small">评估价格 </span>
</el-row>
<el-row>
  <PriceChart></PriceChart>  
</el-row>
<div id="4f"></div>
<el-row :gutter="10">
         <el-col :span="6"> <span class="title-small">价格地图 </span></el-col>
</el-row>
<el-row>
 <PriceMap></PriceMap>
</el-row>
<div class="topmenu" ref="topmenu">
<a href="#1f"><el-button type="info">基础信息</el-button></a><a href="#2f"><el-button type="info">户列表</el-button></a><a href="#3f"><el-button type="info">指标因素</el-button></a><a href="#4f"><el-button type="info">价格地图</el-button></a>
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
      houses: null,
      keyword: '',
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 4,
      value5: 5,
      texts: ['差', '较差', '一般', '较好', '好']
    }
  },
  mounted() {
    this.getBuilding()
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
    getBuilding() {
      this.$http.get('src/mock/building.json').then(response => {
        response.data.data.forEach(element => {
          if (element.buildingId === this.$route.query.buildingId) { this.o = element }
        })
      }, response => {
        console.log('楼栋数据加载失败')
      })
    },
    getHouse() {
      var list1 = []
      this.$http.get('src/mock/house.json').then(response => {
        response.data.data.forEach(element => {
          if (element.buildingId === this.$route.query.buildingId) { list1.push(element) }
        })
      }, response => {
        console.log('户数据加载失败')
      })
      this.houses = list1
    }
  }
}
</script>
<style>

</style>