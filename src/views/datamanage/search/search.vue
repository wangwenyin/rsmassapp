<template>
  <div>
    <el-row :gutter="10" class="search-row" style=" margin-left:10px; margin-right: 7px;margin-top: 12px;height:50px">
      <el-col :span="2" v-if="!selectable">
        <PurposeSelect :value="yt1" @update="onPurposeSelectChange" @keyup.enter.native="onSearchBtnClick"></PurposeSelect>
      </el-col>
      <el-col :span="2">
        <AreaSelect :value="xzq" @update="onAreaSelectChange" @keyup.enter.native="onSearchBtnClick"></AreaSelect>
      </el-col>
      <el-col :span="3">
        <el-input v-model="zbdm" size='small' placeholder="组别" @keyup.enter.native="onSearchBtnClick"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="zddm" size='small' placeholder="宗地号" @keyup.enter.native="onSearchBtnClick"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="xmmc" size='small' @keyup.enter.native="onSearchBtnClick" placeholder="项目名称"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="ldmc" size='small' placeholder="楼栋名称" @keyup.enter.native="onSearchBtnClick"></el-input>
      </el-col>
      <el-col :span="2">
        <el-input v-model="hh" size='small' placeholder="户名称" @keyup.enter.native="onSearchBtnClick"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="cqzh" size='small' placeholder="产权证号" @keyup.enter.native="onSearchBtnClick"></el-input>
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
    <!-- <div class="project-list" :class="{ active: cardOpen }">
        <div class="proControl" @click="handleCardClick" >
          <span><svg-icon :icon-class="cardOpen ? 'icon_open' : 'icon_close'"></svg-icon></span>
        </div>
        <project-list ref="proList" :projectInfo="projectInfo" @cardClick="handleCardClick"></project-list>
      </div> -->
    <div class="btn">
      <!-- <el-button  icon="el-icon-d-arrow-right"  type="text" class="btn-topz" v-if="cardOpen"  @click="onSetWidthClick(false)"></el-button> -->
      <el-button icon="el-icon-arrow-left" class="btn-topz" v-if="!cardOpen" @click="onSetWidthClick(true)"></el-button>
    </div>
    <el-row ref="row">
      <el-col :span="mapWidth" ref="map" style="height: 100%">
        <SearchMap :searchValue="searchValue" :zoom="zoom" :type="type" :list="communities" :center="center" :use="yt1"></SearchMap>
      </el-col>
      <el-col :span="cardWidth" ref="card" class="card">
        <el-button icon="el-icon-arrow-right" class="btn-topzR" v-if="cardOpen" @click="onSetWidthClick(false)"></el-button>
        <el-tabs type="border-card" v-if="type === 'house'">
          <el-tab-pane label="卡片模式">
            <HouseCard :houselist="houseList" :selectable="selectable" @select="select" :currentpage='1' @loacte="loacte"></HouseCard>
          </el-tab-pane>
          <el-tab-pane label="列表模式">
            <HouseList :houselist="houseList" :selectable="selectable" @select="select" :currentpage='1'></HouseList>
          </el-tab-pane>
        </el-tabs>
        <el-tabs type="border-card" v-if="type === 'building'">
          <el-tab-pane label="卡片模式">
            <BuildingCard :buildinglist="buildingList" :selectable="selectable" @select="select" @house="house" :currentpage='1' @loacte="loacte"></BuildingCard>
          </el-tab-pane>
          <el-tab-pane label="列表模式">
            <BuildingList :buildinglist="buildingList" :selectable="selectable" @select="select" @house="house" :currentpage='1'></BuildingList>
          </el-tab-pane>
        </el-tabs>
        <el-tabs type="border-card" v-if="type === 'project'">
          <el-tab-pane label="卡片模式">
            <ProjectCard :projectlist="projectList" :selectable="selectable" @select="select" @building="building" @loacte="loacte" :use="yt1" :currentpage='1'></ProjectCard>
          </el-tab-pane>
          <el-tab-pane label="列表模式">
            <ProjectList :projectlist="projectList" :selectable="selectable" @select="select" @building="building" :currentpage='1'></ProjectList>
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
      searchValue: '',
      center: { lng: 113.93965, lat: 22.518122 },
      type: 'project',
      zoom: 18,
      xzq: '',
      yt1: '住宅',
      zbdm: '',
      zddm: '',
      xmmc: '',
      ldmc: '',
      hh: '',
      cqzh: '',
      buildingList: [],
      houseList: [],
      projectList: [],
      communities: [],
      cardOpen: true,
      mapWidth: 15,
      cardWidth: 9
    }
  },
  mounted() {
    this.setHeight()
    window.onresize = () => {
      this.setHeight()
    }
    this.getProject()
  },
  methods: {
    setHeight() {
      this.$refs.row.$el.style.height = this.$refs.card.$el.style.height =
        document.documentElement.clientHeight - 122 + 'px'
    },
    onAreaSelectChange(value) {
      this.xzq = value
    },
    onPurposeSelectChange(value) {
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
          this.searchValue = this.hh
          this.getHouse()
        }
      } else if (this.ldmc !== '') {
        if (this.xmmc === '') {
          alert('为了能精确的查询楼栋相关信息，请填写项目名称')
        } else {
          this.type = 'building'
          this.zoom = 19
          this.searchValue = this.ldmc
          this.getBuilding()
        }
      } else {
        this.zoom = 18
        this.type = 'project'
        this.searchValue = this.xmmc
        this.getProject()
      }
    },
    onClearBtnClick: function() {
      this.type = 'project'
      this.xzq = ''
      this.yt1 = '住宅'
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
    },
    loacte(val) {
      this.center = {
        lng: val.x,
        lat: val.y
      }
      if (val.hasOwnProperty('hh')) {
        // this.searchValue = val.hh
        this.searchValue = val.ldmc
      } else if (val.hasOwnProperty('ldmc')) {
        this.searchValue = val.ldmc
      } else {
        this.searchValue = val.xmmc
      }
    },
    onSetWidthClick(value) {
      this.cardOpen = value
      if (value) {
        this.mapWidth = 15
        this.cardWidth = 9
      } else {
        this.mapWidth = 24
        this.cardWidth = 0
      }
      //  this.$refs.map.style.width = document.documentElement.clientWidth - 220 + 'px'
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
  margin-top: 10px;
  height: 100%;
}
.btn-topz {
  float: right;
  margin-right: 20px;
  position: relative;
  z-index: 999;
  transform: translateY(-60%);
}
.btn-topzR {
  position: absolute;
  // left: 0px;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%);
  left: -15px;
  width: 9px;
}
.btn {
  position: absolute;
  right: 10px;
  top: 50%;
}
.card {
  position: relative;
  overflow-y: auto;
}
</style>