<template>
  <div class="margin60">
    <el-row :gutter="10" >
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <span class="title">{{ building.ldmc }} </span>
        <span class="title-small">{{ building.xmmc }} </span>
      </el-col>
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
         <template>
           <el-radio v-model="radio" label="1">面积</el-radio>
           <el-radio v-model="radio" label="2">房屋性质</el-radio>
           <el-radio v-model="radio" label="3">户型</el-radio>
           <el-radio v-model="radio" label="4">户型结构</el-radio>
          </template>
      </el-col>
    </el-row>
    <el-row :span="24" v-for="(item, index) in building.zcs" :key="item" :offset="index > 0 ? 2 : 0" >
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
              <span class="title-mini">{{building.zcs-index}}楼</span>
        </el-col>
        <el-col :span="21/houses.length" v-for="(o) in houses" :key="o">
           <div v-show="+o.sjc===(+building.zcs-index)">
             <router-link :to="{ name:'house' ,query: { hdm: o.hdm }}" target="_blank" >
               <el-card class="card" >
                  <div class="card-title">{{o.hh}}</div>
                  <div class="card-text" v-show="radio==='1'">{{ o.jzmj }}</div>
                  <div class="card-text" v-show="radio==='2'">{{ o.fwxz }}</div>
                  <div class="card-text" v-show="radio==='3'">{{ o.hx }}</div>
                  <div class="card-text" v-show="radio==='4'">{{ o.hxjg }}</div>
              </el-card>
            </router-link>
          </div>
        </el-col>
     </el-row>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel/index'
import { buildingsUnits } from '@/api/building'
import { buildingsInfo } from '@/api/building'
export default {
  components: { Carousel },
  data() {
    return {
      houses: null,
      building: null,
      radio: '1'
    }
  },
  mounted() {
    this.getBuilding()
    this.getHouse()
  },
  methods: {
    getHouse() {
      var param = { lddm: this.$route.query.lddm }
      console.log(param)
      buildingsUnits(param).then(response => {
        this.houses = response.data
      })
    },
    getBuilding() {
      var param = { lddm: this.$route.query.lddm }
      buildingsInfo(param).then(response => {
        this.building = response.data
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
</style>