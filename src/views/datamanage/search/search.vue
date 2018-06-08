<template>
<div>
<el-row :gutter="10" style="margin-left:20px;margin-right:20px">
  <el-col :span="3"><AreaSelect :value="area"></AreaSelect></el-col>
  <el-col :span="3"><PurposeSelect v-model="purpose"></PurposeSelect></el-col>
  <el-col :span="3"><el-input v-model="parcel"  placeholder="宗地号" ></el-input></el-col>
  <el-col :span="3"><el-input v-model="project"  placeholder="项目名称"></el-input></el-col>
  <el-col :span="3"><el-input v-model="building" placeholder="楼栋名称"></el-input></el-col>
  <el-col :span="3"><el-input v-model="house"  placeholder="户名称"></el-input></el-col>
  <el-col :span="3"><el-input v-model="property" placeholder="产权证号"></el-input></el-col>
  <el-col :span="1.2"><el-button type="primary" v-on:click="search">查询</el-button></el-col>
  <el-col :span="1"><el-button v-on:click="clear">清空</el-button></el-col>
</el-row>
<el-row :gutter="10">
  <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
      <PriceMap :searchValue="project" :center="center"></PriceMap>
  </el-col>
  <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
    <el-tabs type="border-card" v-if="type === 'house'">
      <el-tab-pane label="卡片模式" >
        <HouseCard :houselist="list2" :query="house"></HouseCard>
       </el-tab-pane>
      <el-tab-pane label="列表模式"><HouseList :houselist="list2" :query="house"></HouseList></el-tab-pane>
    </el-tabs>
    <el-tabs type="border-card" v-if="type === 'building'">
      <el-tab-pane label="卡片模式" >
       <BuildingCard :buildinglist="list1" :query="building"></BuildingCard>
      </el-tab-pane>
      <el-tab-pane label="列表模式" ><BuildingList :buildinglist="list1" :query="building"></BuildingList></el-tab-pane>
    </el-tabs>
    <el-tabs type="border-card" v-if="type === 'project'">
      <el-tab-pane label="卡片模式"> 
         <ProjectCard :projectlist="list" :query="project"></ProjectCard>
     </el-tab-pane>
    <el-tab-pane label="列表模式"><ProjectList :projectlist="list" :query="project"></ProjectList></el-tab-pane>
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
import PriceMap from '@/views/datamanage/search/components/Map/PriceMap'
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
    PriceMap
  },
  data() {
    return {
      center: { lng: 113.946829, lat: 22.495973 },
      type: 'project',
      area: '',
      parcel: '',
      purpose: '',
      project: '',
      building: '',
      house: '',
      property: '',
      list1: null,
      list2: null,
      list: null
    }
  },
  mounted() {
    this.getProject()
  },
  methods: {
    search: function() {
      this.center = { lng: 113.946281, lat: 22.498561 }
      if (this.house !== '') {
        this.type = 'house'
        this.getHouse()
      } else if (this.building !== '') {
        this.type = 'building'
        this.getBuilding()
      } else {
        this.type = 'project'
        this.getProject()
      }
    },
    clear: function() {
      this.type = 'project'
      this.area = ''
      this.purpose = ''
      this.parcel = ''
      this.project = ''
      this.building = ''
      this.house = ''
      this.property = ''
    },
    getData() {
      this.$http.get('src/mock/data.json').then(response => {
        this.list = response.data.data
      }, response => {
        console.log('项目数据加载失败')
      })
    },
    getProject() {
      var listall = []
      var list1 = []
      this.$http.get('src/mock/project.json').then(response => {
        listall = response.data.data
        listall.forEach(element => {
          if (element.project.indexOf(this.project) !== -1) { list1.push(element) }
        })
      }, response => {
        console.log('项目数据加载失败')
      })
      this.list = list1
    },
    getBuilding() {
      var listall = []
      var list1 = []
      this.$http.get('src/mock/building.json').then(response => {
        listall = response.data.data
        listall.forEach(element => {
          if (element.project.indexOf(this.project) !== -1 && element.building.indexOf(this.building) !== -1) { list1.push(element) }
        })
      }, response => {
        console.log('楼栋数据加载失败')
      })
      this.list1 = list1
    },
    getHouse() {
      var listall = []
      var list1 = []
      this.$http.get('src/mock/house.json').then(response => {
        listall = response.data.data
        listall.forEach(element => {
          if (element.project.indexOf(this.project) !== -1 && element.building.indexOf(this.building) !== -1 && element.house.indexOf(this.house) !== -1) { list1.push(element) }
        })
      }, response => {
        console.log('户数据加载失败')
      })
      this.list2 = list1
    }
  }
}
</script>
<style>
</style>