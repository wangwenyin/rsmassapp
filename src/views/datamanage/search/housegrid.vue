<template>
  <div class="margin10" style="padding: 30px;overflow: auto" v-if="building">
    <el-row>
      <el-col :span="24">
        <span class="title">{{ building.ldmc }} </span>
        <span class="title-small">{{ building.xmmc }} </span>
        <el-radio-group v-model="gridType" size="small" class="right" @change="onGridTypeClick">
          <el-radio-button label="网格"></el-radio-button>
          <el-radio-button label="表格"></el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <table class="table" v-if="gridType==='网格'">
      <tr style="height:40px">
        <td colspan="100">
        <template>
          <el-radio v-model="radio" label="面积"></el-radio>
          <el-radio v-model="radio" label="房屋性质"></el-radio>
          <el-radio v-model="radio" label="户型"></el-radio>
          <el-radio v-model="radio" label="户型结构"></el-radio>
          <el-radio v-model="radio" label="户号"></el-radio>
        </template>
        </td>
      </tr>
      <tr class="tr_title">
        <td class="td">
          <div class="text">楼层</div>
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
            <div class="text-n" v-show="radio==='面积'">{{ o.jzmj }}</div>
            <div class="text-n" v-show="radio==='房屋性质'">{{ o.fwxz }}</div>
            <div class="text-n" v-show="radio==='户型'">{{ o.hx }}</div>
            <div class="text-n" v-show="radio==='户型结构'">{{ o.hxjg }}</div>
            <div class="text-n" v-show="radio==='户号'">{{ o.hh }}</div>
          </router-link>
        </td>
      </tr>
    </table>
    <el-row style="margin-top:20px">
      <el-table :data="protogrincHouselist" size='mini' border v-if="gridType==='表格'">
        <el-table-column width="50" type="index" label="编号" align="center"></el-table-column>
        <el-table-column prop="hh" label="房号"> </el-table-column>
        <el-table-column prop="hxdm" label="户型代码"></el-table-column>
        <el-table-column prop="sjc" label="实际层"></el-table-column>
        <el-table-column prop="jzmj" label="建筑面积"></el-table-column>
        <el-table-column prop="hx" label="户型"></el-table-column>
        <el-table-column prop="hxjg" label="户型结构"></el-table-column>
        <el-table-column prop="fwxz" label="房屋性质"></el-table-column>
        <el-table-column prop="fwyt2" label="用途细分"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link :to="{ name:'house' ,query: { hdm: scope.row.hdm }}" target="_blank">
              <el-button type="text" size="small">详情</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
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
      radio: '面积',
      zcs: this.$route.query.zcs,
      hxdmList: [],
      gridType: '网格',
      protogrincHouselist: []
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
        this.protogrincHouselist = response.data
        var arr = new Array(this.zcs)
        for (var i = 0; i < this.zcs; i++) {
          arr[i] = []
          this.protogrincHouselist.forEach(element => {
            if (element.sjc === i.toString() && element.hxdm !== '' && element.hxdm !== null) {
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
 // width: 80px;
  min-width: 120px;
}
</style>