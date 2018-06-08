<template>
  <div class="margin60">
    <el-row :gutter="10" >
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <span class="title">{{ building.building }} </span>
        <span class="title-small">{{ building.project }} </span>
      </el-col>
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
         <template>
           <el-radio v-model="radio" label="1">面积</el-radio>
           <el-radio v-model="radio" label="2">评估价</el-radio>
           <el-radio v-model="radio" label="3">户型</el-radio>
           <el-radio v-model="radio" label="4">朝向</el-radio>
          </template>
      </el-col>
    </el-row>
    <el-row :span="24" v-for="(item, index) in 6" :key="item" :offset="index > 0 ? 2 : 0" >
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
              <span class="title-mini">{{6-index}}楼</span>
        </el-col>
        <el-col :span="21/5" v-for="(o) in list" :key="o">
           <div v-show=" o.layer===(6-index)">
             <router-link :to="{ name:'house' ,query: { houseId: o.houseId }}" target="_blank" >
               <el-card class="card" >
                  <div class="card-title">{{o.house}}</div>
                  <div class="card-text" v-show="radio==='1'">{{ o.builtUpArea }}</div>
                  <div class="card-text" v-show="radio==='2'">{{ o.price }}</div>
                  <div class="card-text" v-show="radio==='3'">{{ o.type }}</div>
                  <div class="card-text" v-show="radio==='4'">{{ o.orientation }}</div>
              </el-card>
            </router-link>
          </div>
        </el-col>
     </el-row>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel/index'
export default {
  components: { Carousel },
  data() {
    return {
      list: null,
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
      var list1 = []
      this.$http.get('src/mock/house.json').then(response => {
        response.data.data.forEach(element => {
          if (element.buildingId === this.$route.query.buildingId) { list1.push(element) }
        })
      }, response => {
        console.log('户数据加载失败')
      })
      this.list = list1
    },
    getBuilding() {
      this.$http.get('src/mock/building.json').then(response => {
        response.data.data.forEach(element => {
          if (element.buildingId === this.$route.query.buildingId) { this.building = element }
        })
      }, response => {
        console.log('楼栋数据加载失败')
      })
    }
  }
}
</script>
<style>

</style>