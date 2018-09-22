<template>
  <div class="app">
    <el-row :gutter="10" class="search-row" style=" margin-left:10px; margin-right: 7px;margin-top: 12px;">
      <el-col :span="2">
        <AreaSelect :value="xzq" @update="onAreaSelect"></AreaSelect>
      </el-col>
      <el-col :span="2" v-if="!selectable">
        <PurposeSelect :value="yt1" @update="onPurposeSelect"></PurposeSelect>
      </el-col>
      <el-col :span="3">
        <el-input v-model="zbdm" size='small' placeholder="组别"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="zddm" size='small' placeholder="宗地号"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="xmmc" size='small' placeholder="项目名称"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="ldmc" size='small' placeholder="楼栋名称"></el-input>
      </el-col>
      <el-col :span="2">
        <el-input v-model="hh" size='small' placeholder="户名称"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="cqzh" size='small' placeholder="产权证号"></el-input>
      </el-col>
      <el-col :span="1.2">
        <el-button type="primary" size='small' v-on:click="onSearchBtnClick">查询</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button v-on:click="onClearBtnClick" size='small'>清空</el-button>
      </el-col>
      <el-col :span="2" v-if="selectable">
        <el-popover placement="bottom" width="400">
          <AppObjectCard :appObjectList="appObjectList" @del="del" @delAll="delAll" @view="view" @submit="submit"></AppObjectCard>
          <el-badge :value="appObjectList.length" class="item" slot="reference">
            <el-button size="small">我的估价对象</el-button>
          </el-badge>
        </el-popover>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: -5px;margin-right: -5px;margin-left: 7px;">
      <el-col :xs="15" :sm="15" :md="15" :lg="15" :xl="15">
        <SearchMap :searchValue="xmmc" :zoom="zoom" :type="type" :list="communities" :center="center"></SearchMap>
      </el-col>
      <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
        <el-tabs type="border-card" v-if="type === 'house'">
          <el-tab-pane label="卡片模式">
            <HouseCard :houselist="houseList" :selectable="selectable" @select="select"></HouseCard>
          </el-tab-pane>
          <el-tab-pane label="列表模式">
            <HouseList :houselist="houseList" :selectable="selectable" @select="select"></HouseList>
          </el-tab-pane>
        </el-tabs>
        <el-tabs type="border-card" v-if="type === 'building'">
          <el-tab-pane label="卡片模式">
            <BuildingCard :buildinglist="buildingList" :selectable="selectable" @select="select" @house="house"></BuildingCard>
          </el-tab-pane>
          <el-tab-pane label="列表模式">
            <BuildingList :buildinglist="buildingList" :selectable="selectable" @select="select" @house="house"></BuildingList>
          </el-tab-pane>
        </el-tabs>
        <el-tabs type="border-card" v-if="type === 'project'">
          <el-tab-pane label="卡片模式">
            <ProjectCard :projectlist="projectList" :selectable="selectable" @select="select" @building="building"></ProjectCard>
          </el-tab-pane>
          <el-tab-pane label="列表模式">
            <ProjectList :projectlist="projectList" :selectable="selectable" @select="select" @building="building"></ProjectList>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import PurposeSelect from '@/views/datamanage/components/PurposeSelect'
import AreaSelect from '@/views/datamanage/components/AreaSelect'
import ProjectCard from '@/views/datamanage/components/Card/ProjectCard'
import ProjectList from '@/views/datamanage/components/List/ProjectList'
import BuildingCard from '@/views/datamanage/components/Card/BuildingCard'
import BuildingList from '@/views/datamanage/components/List/BuildingList'
import HouseCard from '@/views/datamanage/components/Card/HouseCard'
import HouseList from '@/views/datamanage/components/List/HouseList'
import SearchMap from '@/views/datamanage/components/SearchMap'
import { projects, projectBuildings } from '@/api/project'
import { buildings, buildingsUnits } from '@/api/building'
import { units } from '@/api/house'
import AppObjectCard from '@/views/singleapp/components/AppObjectCard'

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
    SearchMap,
    AppObjectCard
  },
  props: {
    selectable: {
      type: Boolean,
      default: false
    },
    appObjectList: {
      type: Array,
      default: []
    },
    taskId: {
      type: String,
      default: ''
    }
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
      buildingList: [],
      houseList: [],
      projectList: [],
      communities: []
    }
  },
  mounted() {
    this.getProject()
  },
  methods: {
    onAreaSelect(value) {
      this.xzq = value
    },
    onPurposeSelect(value) {
      this.yt1 = value
    },
    select(val) {
      this.$emit('select', val)
    },
    del(val) {
      this.$emit('del', val)
    },
    delAll() {
      this.$emit('delAll')
    },
    view(val) {
      this.$emit('view')
    },
    submit() {
      this.$emit('submit')
    },
    building(value) {
      this.type = 'building'
      this.zoom = 19
      this.getProjectBuildings(value.xmdm)
    },
    house(value) {
      this.type = 'house'
      this.zoom = 20
      this.getBuildingHouse(value.lddm)
    },
    onSearchBtnClick: function() {
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
    onClearBtnClick: function() {
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
      var param = {
        xmmc: this.xmmc,
        xzq: this.xzq,
        yt1: this.yt1,
        zbdm: this.zbdm,
        zddm: this.zddm
      }
      this.communities = []
      projects(param).then(response => {
        this.projectList = response.data
        response.data.forEach(element => {
          this.communities.push({
            id: element.xmdm,
            name: element.xmmc,
            price: element.pgdj,
            x: element.x,
            y: element.y
          })
        })
        this.center = {
          lng: this.communities[0].x,
          lat: this.communities[0].y
        }
      })
    },
    getBuilding() {
      this.communities = []
      var param = {
        xmmc: this.xmmc,
        ldmc: this.ldmc,
        xzq: this.xzq,
        yt1: this.yt1,
        zbdm: this.zbdm,
        zddm: this.zbdm
      }
      buildings(param).then(response => {
        this.buildingList = response.data
        response.data.forEach(element => {
          this.communities.push({
            id: element.lddm,
            name: element.ldmc,
            price: element.pgdj,
            x: element.x,
            y: element.y
          })
        })
        this.center = {
          lng: this.communities[0].x,
          lat: this.communities[0].y
        }
      })
    },
    getHouse() {
      this.communities = []
      var param = {
        xmmc: this.xmmc,
        ldmc: this.ldmc,
        hh: this.hh,
        xzq: this.xzq,
        yt1: this.yt1,
        zbdm: this.zbdm
      }
      units(param).then(response => {
        this.houseList = response.data
        response.data.forEach(element => {
          this.communities.push({
            id: element.hdm,
            name: element.hh,
            price: element.pgdj,
            x: element.x,
            y: element.y
          })
        })
        this.center = {
          lng: this.communities[0].x,
          lat: this.communities[0].y
        }
      })
    },
    getProjectBuildings(xmdm) {
      var param = { xmdm: xmdm }
      projectBuildings(param).then(response => {
        this.buildingList = response.data
        response.data.forEach(element => {
          this.communities.push({
            id: element.lddm,
            name: element.ldmc,
            price: element.pgdj,
            x: element.x,
            y: element.y
          })
        })
        this.center = {
          lng: this.communities[0].x,
          lat: this.communities[0].y
        }
      })
    },
    getBuildingHouse(lddm) {
      var param = { lddm: lddm }
      buildingsUnits(param).then(response => {
        this.houseList = response.data
        response.data.forEach(element => {
          this.communities.push({
            id: element.hdm,
            name: element.hh,
            price: element.pgdj,
            x: element.x,
            y: element.y
          })
        })
        this.center = {
          lng: this.communities[0].x,
          lat: this.communities[0].y
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../../styles/app.scss";

.search-row {
  margin-right: 10px;
  padding: 10px;
  background: white;
}
.el-row {
  margin-bottom: 20px;
  margin-top: 10px;
  height: 100%;
}
</style>