<template>
<div>
<el-row :gutter="10" style="margin-left:20px;margin-right:20px">
  <el-col :span="2"><AreaSelect :value="xzq" @update="change" ></AreaSelect></el-col>
  <el-col :span="2"><PurposeSelect :value="yt1" @update="change1"></PurposeSelect></el-col>
   <el-col :span="3"><el-input v-model="zbdm"  placeholder="组别" ></el-input></el-col>
  <el-col :span="3"><el-input v-model="zddm"  placeholder="宗地号" ></el-input></el-col>
  <el-col :span="3"><el-input v-model="xmmc"  placeholder="项目名称"></el-input></el-col>
  <el-col :span="3"><el-input v-model="ldmc" placeholder="楼栋名称"></el-input></el-col>
  <el-col :span="2"><el-input v-model="hh"  placeholder="户名称"></el-input></el-col>
  <el-col :span="3"><el-input v-model="cqzh" placeholder="产权证号"></el-input></el-col>
  <el-col :span="1.2"><el-button type="primary" v-on:click="search">查询</el-button></el-col>
  <el-col :span="1"><el-button v-on:click="clear">清空</el-button></el-col>
</el-row>
<el-row :gutter="10">
  <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
      <SearchMap :searchValue="xmmc" :zoom="zoom" :type="type" :list="communities"></SearchMap>
  </el-col>
  <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
    <el-tabs type="border-card" v-if="type === 'house'">
      <el-tab-pane label="卡片模式" >
        <HouseCard :houselist="listH"></HouseCard>
       </el-tab-pane>
      <el-tab-pane label="列表模式"><HouseList :houselist="listH" ></HouseList></el-tab-pane>
    </el-tabs>
    <el-tabs type="border-card" v-if="type === 'building'">
      <el-tab-pane label="卡片模式" >
       <BuildingCard :buildinglist="listB"></BuildingCard>
      </el-tab-pane>
      <el-tab-pane label="列表模式" ><BuildingList :buildinglist="listB"></BuildingList></el-tab-pane>
    </el-tabs>
    <el-tabs type="border-card" v-if="type === 'project'">
      <el-tab-pane label="卡片模式"> 
         <ProjectCard :projectlist="listP"></ProjectCard>
     </el-tab-pane>
    <el-tab-pane label="列表模式"><ProjectList :projectlist="listP"></ProjectList></el-tab-pane>
    </el-tabs>
  </el-col>
</el-row>
</div>
</template>
<script>
import PurposeSelect from '@/components/Select/PurposeSelect'
import AreaSelect from '@/components/Select/AreaSelect'
import ProjectCard from '@/views/datamanage/search/components/Card/ProjectCard'
import ProjectList from '@/views/datamanage/search/components/List/ProjectList'
import BuildingCard from '@/views/datamanage/search/components/Card/BuildingCard'
import BuildingList from '@/views/datamanage/search/components/List/BuildingList'
import HouseCard from '@/views/datamanage/search/components/Card/HouseCard'
import HouseList from '@/views/datamanage/search/components/List/HouseList'
import SearchMap from '@/views/datamanage/search/components/Map/SearchMap'
import { projects } from '@/api/project'
import { buildings } from '@/api/building'
import { units } from '@/api/house'
export default {
  components: {
    PurposeSelect,
    AreaSelect,
    ProjectCard,
    ProjectList,
    BuildingCard,
    BuildingList,
    HouseCard,
    HouseList,
    SearchMap
  },
  data() {
    return {
      center: { lng: 113.93965, lat: 22.518122 },
      type: 'project',
      zoom: 18,
      xzq: '',
      yt1: '',
      zbdm: '',
      zddm: '',
      xmmc: '',
      ldmc: '',
      hh: '',
      cqzh: '',
      listB: [],
      listH: [],
      listP: [],
      communities: []
    }
  },
  mounted() {
    this.getProject()
  },
  methods: {
    change(value) {
      this.xzq = value
    },
    change1(value) {
      this.yt1 = value
    },
    search: function() {
      if (this.hh !== '') {
        if (this.xmmc === '' || this.ldmc === '') {
          alert('为了能精确的查询户相关信息，请填写项目名称和楼栋名称')
        } else {
          this.type = 'house'
          this.zoom = 20
          this.getHouse()
        }
      } else if (this.ldmc !== '') {
        if (this.xmmc === '') {
          alert('为了能精确的查询楼栋相关信息，请填写项目名称')
        } else {
          this.type = 'building'
          this.zoom = 19
          this.getBuilding()
        }
      } else {
        this.zoom = 18
        this.type = 'project'
        this.getProject()
      }
    },
    clear: function() {
      this.type = 'project'
      this.xzq = ''
      this.yt1 = ''
      this.zbdm = ''
      this.zddm = ''
      this.xmmc = ''
      this.ldmc = ''
      this.hh = ''
      this.cqzh = ''
    },
    getProject() {
      var param = { xmmc: this.xmmc, xzq: this.xzq, yt1: this.yt1, zbdm: this.zbdm, zddm: this.zddm }
      this.communities = []
      projects(param).then(response => {
        this.listP = response.data
        console.log('projects')
        console.log(this.listP)
        response.data.forEach(element => {
          this.communities.push({ 'id': element.xmdm, 'name': element.xmmc, 'price': element.pgdj, 'x': element.x, 'y': element.y })
        })
        this.center = { lng: this.communities[0].x, lat: this.communities[0].y }
      })
    },
    getBuilding() {
      this.communities = []
      var param = { xmmc: this.xmmc, ldmc: this.ldmc, xzq: this.xzq, yt1: this.yt1, zbdm: this.zbdm, zddm: this.zbdm }
      buildings(param).then(response => {
        this.listB = response.data
        console.log('buildings')
        console.log(this.listB)
        response.data.forEach(element => {
          this.communities.push({ 'id': element.lddm, 'name': element.ldmc, 'price': element.pgdj, 'x': element.x, 'y': element.y })
        })
        this.center = { lng: this.communities[0].x, lat: this.communities[0].y }
      })
    },
    getHouse() {
      this.communities = []
      var param = { xmmc: this.xmmc, ldmc: this.ldmc, hh: this.hh, xzq: this.xzq, yt1: this.yt1, zbdm: this.zbdm }
      units(param).then(response => {
        this.listH = response.data
        console.log('units')
        console.log(this.listH)
        response.data.forEach(element => {
          this.communities.push({ 'id': element.hdm, 'name': element.hh, 'price': element.pgdj, 'x': element.x, 'y': element.y })
        })
        this.center = { lng: this.communities[0].x, lat: this.communities[0].y }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../styles.scss';
</style>