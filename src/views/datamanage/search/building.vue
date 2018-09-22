<template>
  <div class="app ">
    <div class="margin10" v-if="building!==null">
      <div id="1f"></div>
      <el-row>
        <el-col :span="12">
          <Carousel :img="img"></Carousel>
        </el-col>
        <el-col :span="12">
          <div>
            <div class="bottom30">
              <span class="title">{{ building.ldmc }} </span>
              <span class="title-small">{{ building.xmmc }} </span>
              <span class="val">{{building.xzq}}&nbsp;&nbsp;|&nbsp;&nbsp;{{building.jdb}}</span>
              <span>
                <router-link :to="{ name:'3DMap' ,query: { id: building.lddm } }" target="_blank">
                  <svg-icon icon-class="谷歌地球"></svg-icon>
                </router-link>
              </span>
              <div class="right">
                <router-link :to="{ name:'buildingEdit' ,query: { lddm: building.lddm } }" target="_blank">
                  <el-button type="primary" size="small" plain>编辑</el-button>
                </router-link>
              </div>
            </div>
            <div>
              <el-row>
                <el-col :span="24">
                  <span class="con">楼栋编号</span>
                  <span class="val">{{building.lddm}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="14">
                  <span class="con">别&nbsp; &nbsp; &nbsp;&nbsp; 名</span>
                  <span class="val">{{building.ldbm}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">竣工日期</span>
                  <span class="val">{{building.jgrq| formatDate}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <span class="con">坐&nbsp; &nbsp; &nbsp;&nbsp; 落</span>
                  <span class="val">{{building.ldzl}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="14">
                  <span class="con">占地面积</span>
                  <span class="val">{{building.zdmj}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">用地面积</span>
                  <span class="val">{{building.ydmj}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="14">
                  <span class="con">地上层数</span>
                  <span class="val">{{building.dscs}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">地下层数</span>
                  <span class="val">{{building.dxcs}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="14">
                  <span class="con">性&nbsp; &nbsp; &nbsp;&nbsp; 质</span>
                  <span class="val">{{building.ldxz}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">总 &nbsp;户&nbsp; 数</span>
                  <span class="val">{{building.zhs}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="14">
                  <span class="con">高 &nbsp;&nbsp;&nbsp; &nbsp; 度</span>
                  <span class="val">{{building.jzwgd}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">结 &nbsp;&nbsp;&nbsp; &nbsp; 构</span>
                  <span class="val">{{building.ldjg}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="14">
                  <span class="con">用&nbsp; &nbsp;途&nbsp; &nbsp;1</span>
                  <span class="val">{{building.ldyt1}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">用&nbsp; &nbsp;途&nbsp;&nbsp;2</span>
                  <span class="val">{{building.ldyt2}}</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <div id="2f"></div>
      <el-row>
        <el-col :span="3 ">
          <span class="title-small">户列表 </span>
        </el-col>
        <el-col :span="3">
          <router-link :to="{ name:'housegrid' ,query: { lddm: building.lddm,zcs:building.zcs }}" target="_blank">
            <el-button type="primary" size="small" plain style="margin-top: -7px;">网格模式</el-button>
          </router-link>
        </el-col>
      </el-row>
      <el-row>
        <el-table :data="houses" border max-height="350">
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column prop="hh" label="名称"> </el-table-column>
          <el-table-column prop="jzmj" label="建筑面积"></el-table-column>
          <el-table-column prop="sjc" label="所在层"></el-table-column>
          <el-table-column prop="hx" label="户型"></el-table-column>
          <el-table-column prop="fwxz" label="房屋性质"></el-table-column>
          <el-table-column prop="hxjg" label="户型结构"></el-table-column>
          <el-table-column label="备注">
            <template slot-scope="scope">
              <router-link :to="{ name:'house' ,query: { hdm: scope.row.hdm }}" target="_blank">
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
      <el-row v-if="factor!==null">
        <el-tabs type="border-card">
          <el-tab-pane label="住宅" v-if="building.hgyt.indexOf('住宅') !== -1">
            <el-row>
              <span class="con">建筑类型:</span>
              <span class="val1">
                <factors-rate :value="factor.jzlx"></factors-rate>
              </span>
              <span class="con">是否有电梯:</span>
              <span class="val1">
                <factors-rate :value="factor.sfydt"></factors-rate>
              </span>
              <span class="con">梯户比:</span>
              <span class="val1">
                <factors-rate :value="factor.thb"></factors-rate>
              </span>
              <span class="con">相对位置:</span>
              <span class="val">
                <factors-rate :value="factor.xdwz"></factors-rate>
              </span>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="办公" v-if="building.hgyt.indexOf('办公') !== -1"></el-tab-pane>
          <el-tab-pane label="商业" v-if="building.hgyt.indexOf('商业') !== -1"></el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row>
        <span class="title-small">评估价格 </span>
      </el-row>
      <el-row v-if="tjsj.length!==0">
        <PriceChart :hgyt="building.hgyt" :tjsj="tjsj"></PriceChart>
      </el-row>
      <div class="topmenu" ref="topmenu">
        <a href="#1f">
          <el-button type="info">基础信息</el-button>
        </a>
        <a href="#2f">
          <el-button type="info">户列表</el-button>
        </a>
        <a href="#3f">
          <el-button type="info">指标因素</el-button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import PriceChart from '@/views/datamanage/components/PriceChart'
import Carousel from '@/views/datamanage/components/Carousel'
import FactorsRate from '@/views/datamanage/components/FactorsRate'
import {
  buildingsInfo,
  buildingsUnits,
  buildingsFactorsResidential,
  buildingValue
} from '@/api/building'
import { imgs } from '@/api/img'
import { formatDate } from '@/utils/date'
export default {
  components: { Carousel, PriceChart, FactorsRate },
  data() {
    return {
      building: null,
      houses: null,
      factor: null,
      img: null,
      tjsj: []
    }
  },
  created() {
    this.$nextTick(() => {
      this.getBuildingValue()
    })
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
      const scrolled =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrolled >= 600) {
        this.$refs.topmenu.style.display = 'block'
      } else {
        this.$refs.topmenu.style.display = 'none'
      }
    },
    getBuilding() {
      buildingsInfo(this.$route.query.lddm).then(response => {
        this.building = response.data
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
      const yt = 'residential'
      buildingsFactorsResidential(yt, this.$route.query.lddm).then(response => {
        this.factor = response.data
      })
    },
    getBuildingValue() {
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
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../../styles/app.scss";
.el-row {
  margin-bottom: 8px;
  margin-top: 13px;
  height: 100%;
  margin-left: 20px;
  margin-right: 20px;
}
.con {
  display: inline-block;
  width: 90px;
  margin-left: 20px;
  color: #7b7676;
  text-align: left;
  font-size: 15px;
}
</style>