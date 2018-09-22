<template>
  <div class="margin10" style="padding: 30px;" v-if="building">
    <el-row>
      <el-col :span="24">
        <span class="title">{{ building.ldmc }} </span>
        <span class="title-small">{{ building.xmmc }} </span>
        <template>
          <el-radio v-model="radio" label="1">面积</el-radio>
          <el-radio v-model="radio" label="2">房屋性质</el-radio>
          <el-radio v-model="radio" label="3">户型</el-radio>
          <el-radio v-model="radio" label="4">户型结构</el-radio>
          <el-radio v-model="radio" label="5">户号</el-radio>
        </template>
      </el-col>
    </el-row>
    <table class="table">
      <tr class="tr_title">
        <td class="td">
          <div class="text">楼层\户型代码</div>
        </td>
        <td class="td" v-for="o in (hxdmList)" :key="o">
          <span class="text">{{o}}</span>
        </td>
      </tr>
      <tr class="tr" v-for="(item, index) in housesList" :key="item.hdm" :offset="index > 0 ? 2 : 0" v-if="item.length!==0">
        <td class="td tr_title">
          <div class="text">{{index}}F</div>
        </td>
        <td class="td" style="height:35px" v-for="x in hxdmList" :key="x">
          <router-link v-for="(o,index) in item" :key="index" v-if="o.hxdm === x" :to="{ name:'house' ,query: { hdm: o.hdm }}" target="_blank">
            <div class="text-n" v-show="radio==='1'">{{ o.jzmj }}</div>
            <div class="text-n" v-show="radio==='2'">{{ o.fwxz }}</div>
            <div class="text-n" v-show="radio==='3'">{{ o.hx }}</div>
            <div class="text-n" v-show="radio==='4'">{{ o.hxjg }}</div>
            <div class="text-n" v-show="radio==='5'">{{ o.hh }}</div>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Carousel from '@/views/datamanage/components/Carousel'
import { buildingsUnits, buildingsInfo } from '@/api/building'
export default {
  components: { Carousel },
  data() {
    return {
      housesList: [],
      building: null,
      radio: '1',
      zcs: this.$route.query.zcs,
      hxdmList: []
    }
  },
  mounted() {
    this.getBuilding()
    this.getHouse()
  },
  methods: {
    getHouse() {
      var param = { lddm: this.$route.query.lddm }
      buildingsUnits(param).then(response => {
        var houselist = response.data
        var arr = new Array(this.zcs)
        for (var i = 0; i < this.zcs; i++) {
          arr[i] = []
          houselist.forEach(element => {
            if (element.sjc === i.toString()) {
              arr[i].push(element)
            }
            if (
              this.hxdmList.indexOf(element.hxdm) === -1 &&
              element.hxdm !== null
            ) {
              this.hxdmList.push(element.hxdm)
            }
          })
        }
        this.housesList = arr
      })
    },
    getBuilding() {
      buildingsInfo(this.$route.query.lddm).then(response => {
        this.building = response.data
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../../styles/app.scss";
.row {
  margin-top: 30px;
}
.text-t {
  font-size: 14px;
  font-weight: bold;
  width: -webkit-fill-available;
  text-align: center;
}
.text-n {
  font-size: 10px;
  margin-top: 5px;
  color: #666666;
  width: -webkit-fill-available;
  text-align: center;
}
.title {
  font-size: 23px;
  font-weight: bold;
}
.title-small {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10%;
}
.el-col-3 {
  margin-bottom: 10px;
}
.text-f {
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  color: #444444;
  margin-left: 10px;
  margin-bottom: 10px;
}
.text {
  font-size: 14px;
  font-weight: bold;
  width: -webkit-fill-available;
  text-align: center;
}
.td {
  width: 80px;
}
</style>