<template>
  <div class="margin60">
     <div id="1f"></div>
    <el-row :gutter="10">
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
     <Carousel :img="img"></Carousel>
  </el-col>
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
     <div >
          <div class="bottom30">
              <span class="title">{{ building.ldmc }} </span>
             <span class="title-small">{{ building.xmmc }} </span>
             <div class="right">
              <span>{{building.xzq}}</span>&nbsp;&nbsp;|
              <span>{{building.jdb}}</span>
                <router-link :to="{ name:'buildingEdit' ,query: { lddm: building.lddm } }" target="_blank" >
                      <el-button type="primary" plain>编辑</el-button>
                      </router-link>
             </div>
          </div>
          <div>
          <el-row :gutter="10" >
            <el-col :span="6"><span class="con">楼栋编号</span></el-col>
            <el-col :span="6"><span class="val">{{building.lddm}}</span></el-col>
         </el-row>
          <el-row :gutter="10" >
            <el-col :span="6"><span class="con">别名</span></el-col>
            <el-col :span="6"><span class="val">{{building.ldbm}}</span></el-col>
            <el-col :span="6"><span class="con">竣工日期</span></el-col>
            <el-col :span="6"><span class="val">{{building.jgrq| formatDate}}</span></el-col>
         </el-row>
          <el-row :gutter="10" >
            <el-col :span="6"><span class="con">坐落</span></el-col>
            <el-col :span="18"><span class="val">{{building.ldzl}}</span></el-col>
         </el-row>
         <el-row :gutter="10" >
            <el-col :span="6"><span class="con">占地面积</span></el-col>
            <el-col :span="6"><span class="val">{{building.zdmj}}</span></el-col>
            <el-col :span="6"><span class="con">用地面积</span></el-col>
            <el-col :span="6"><span class="val">{{building.ydmj}}</span></el-col>
         </el-row>
          <el-row :gutter="10" >
            <el-col :span="6"><span class="con">地上层数</span></el-col>
            <el-col :span="6"><span class="val">{{building.dscs}}</span></el-col>
            <el-col :span="6"><span class="con">地下层数</span></el-col>
            <el-col :span="6"><span class="val">{{building.dxcs}}</span></el-col>
         </el-row>
           <el-row :gutter="10" >
            <el-col :span="6"><span class="con">性质</span></el-col>
            <el-col :span="6"><span class="val">{{building.ldxz}}</span></el-col>
            <el-col :span="6"><span class="con">总户数</span></el-col>
            <el-col :span="6"><span class="val">{{building.zhs}}</span></el-col>
         </el-row>
          <el-row :gutter="10">
            <el-col :span="6"><span class="con">高度</span></el-col>
            <el-col :span="6"><span class="val">{{building.jzwgd}}</span></el-col>
            <el-col :span="6"><span class="con">结构</span></el-col>
            <el-col :span="6"><span class="val">{{building.ldjg}}</span></el-col>
         </el-row>
         <el-row :gutter="10" >
            <el-col :span="6"><span class="con">用途1</span></el-col>
            <el-col :span="6"><span class="val">{{building.ldyt1}}</span></el-col>
            <el-col :span="6"><span class="con">用途2</span></el-col>
            <el-col :span="6"><span class="val">{{building.ldyt2}}</span></el-col>
         </el-row>
          </div>
       </div>
  </el-col>
</el-row>
 <div id="2f"></div>
<el-row>
    <el-col :span="3 "> <span class="title-small">户列表 </span></el-col>
    <el-col :span="3">
      <router-link :to="{ name:'housegrid' ,query: { lddm: building.lddm }}" target="_blank">
        <span style="color:#007eff">网格模式</span>
      </router-link>
    </el-col>
</el-row>
<el-row>
<el-table  :data="houses" border max-height="350" >
   <el-table-column width="50" type="index" label="序号" align="center" ></el-table-column>
   <el-table-column prop="hh" label="名称"> </el-table-column>
   <el-table-column prop="jzmj" label="建筑面积"></el-table-column>
   <el-table-column prop="sjc" label="所在层"></el-table-column>
   <el-table-column prop="hx" label="户型"></el-table-column>
   <el-table-column prop="fwxz" label="房屋性质"></el-table-column>
   <el-table-column prop="hxjg" label="户型结构"></el-table-column>
   <el-table-column label="备注">
     <template slot-scope="scope">
       <router-link :to="{ name:'house' ,query: { hdm: scope.row.hdm }}" target="_blank"  >
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
  <el-tab-pane label="住宅" v-if="building.hgyt.indexOf('住宅') !== -1">
     <el-row >
        <span class="con">建筑类型:</span> <span class="val" v-text="factor.jzlx"></span>
        <span class="con">是否有电梯:</span> <span class="val" v-text="factor.sfydt"></span>
        <span class="con">梯户比:</span> <span class="val" v-text="factor.thb"></span>
        <span class="con">相对位置:</span> <span class="val"><factors-rate :value="factor.xdwz"></factors-rate></span>
       </el-row>
    </el-tab-pane>
  <el-tab-pane label="办公" v-if="building.hgyt.indexOf('办公') !== -1"></el-tab-pane>
  <el-tab-pane label="商业" v-if="building.hgyt.indexOf('商业') !== -1"></el-tab-pane>
</el-tabs>
</el-row>
<el-row :gutter="10" >
  <span class="title-small">评估价格 </span>
</el-row>
<el-row>
  <PriceChart :hgyt="building.hgyt" :tjsj="tjsj"></PriceChart>  
</el-row>
<div id="4f"></div>
<el-row :gutter="10">
         <el-col :span="6"> <span class="title-small">价格地图 </span></el-col>
</el-row>
<el-row>
 <PriceMap  :hgyt="building.hgyt" :tjsj="tjsj"></PriceMap>
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
import FactorsRate from '@/components/Rate/FactorsRate'
import { buildingsInfo } from '@/api/building'
import { buildingsUnits } from '@/api/building'
import { buildingsFactorsResidential } from '@/api/building'
import { imgs } from '@/api/img'
import { formatDate } from '@/common/js/data'
import { buildingValue } from '@/api/building'
export default {
  components: { Carousel, PriceMap, PriceChart, FactorsRate },
  data() {
    return {
      building: null,
      houses: null,
      factor: null,
      img: null,
      tjsj: null
    }
  },
  mounted() {
    this.getBuilding()
    this.getHouse()
    this.getImg()
    this.getBuildingFactorsResidential()
    this.getBuildingValue()
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
      var param = { lddm: this.$route.query.lddm }
      buildingsInfo(param).then(response => {
        this.building = response.data
        console.log('this.building')
        console.log(this.building)
      })
    },
    getImg() {
      var params = { fdcdm: this.$route.query.lddm, fdclx: '楼栋' }
      imgs(params).then(response => {
        this.img = response.data
      })
    },
    getHouse() {
      var param = { lddm: this.$route.query.lddm }
      buildingsUnits(param).then(response => {
        this.houses = response.data
      })
    },
    getBuildingFactorsResidential() {
      var param = { lddm: this.$route.query.lddm }
      buildingsFactorsResidential(param).then(response => {
        this.factor = response.data
      })
    },
    getBuildingValue() {
      console.log('获取价格')
      //  console.log(this.building.xmdm)
      var param = { lddm: this.$route.query.lddm }
      buildingValue(param).then(response => {
        this.tjsj = response.data
      })
    }
  },
  filters: {
    formatDate(currentDate) {
      var date = new Date(currentDate)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>
<style>

</style>