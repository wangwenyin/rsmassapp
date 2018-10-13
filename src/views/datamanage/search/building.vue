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
              <span class="title-small" style="font-size: 12px">{{ building.xmmc }} </span>
              <el-radio-group v-model="use" size="mini">
                <el-radio class="useradio" v-for="item in useOptions" v-if="item!==''" :label="item" :key="item"></el-radio>
              </el-radio-group>
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
              <el-row class="high">
                <el-col :span="24">
                  <span class="con">行政区</span>
                  <span class="val">{{building.xzq}}&nbsp;&nbsp;|&nbsp;&nbsp;{{building.jdb}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="24">
                  <span class="con">坐&nbsp; &nbsp; &nbsp;&nbsp; 落</span>
                  <span class="val">{{building.ldzl}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="14">
                  <span class="con">竣工日期</span>
                  <span class="val">{{building.jgrq| formatDate}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">宗&nbsp; 地 &nbsp; 号</span>
                  <span class="val">{{building.zdh}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="14">
                  <span class="con">占地面积</span>
                  <span class="val">{{building.zdmj}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">建筑面积</span>
                  <span class="val">{{building.jzmj}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="14">
                  <span class="con">总&nbsp;层&nbsp;数</span>
                  <span class="val">{{building.zcs}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">地上层数</span>
                  <span class="val">{{building.dscs}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="14">
                  <span class="con">地下层数</span>
                  <span class="val">{{building.dxcs}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">房屋数量</span>
                  <span class="val">{{building.zhs}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="14">
                  <span class="con">楼栋性质</span>
                  <span class="val">{{building.ldxz}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">用途细类</span>
                  <span class="val">{{building.ldyt2}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="24">
                  <span class="con">建筑结构</span>
                  <span class="val">{{building.ldjg}}</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <div id="2f"></div>
      <el-row class="row-t">
        <span class="title-small">户列表 </span>
        <router-link :to="{ name:'housegrid' ,query: { lddm: building.lddm,zcs:building.zcs }}" target="_blank">
          <el-button type="primary" size="small" plain style="margin-top: -7px;">网格模式</el-button>
        </router-link>
        <el-radio-group v-model="isalluse" size="small" class="right" @change="onIsAllUseClick">
          <el-radio-button label="部分"></el-radio-button>
          <el-radio-button label="全部"></el-radio-button>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-table :data="showHouseList" border max-height="350">
          <el-table-column width="50" type="index" label="编号" align="center"></el-table-column>
          <el-table-column prop="hh" label="房号"> </el-table-column>
          <el-table-column prop="sjc" label="实际层"></el-table-column>
          <el-table-column prop="jzmj" label="建筑面积"></el-table-column>
          <el-table-column prop="hx" label="户型"></el-table-column>
          <el-table-column prop="hxjg" label="户型结构"></el-table-column>
          <el-table-column prop="fwxz" label="房屋性质"></el-table-column>
          <el-table-column prop="fwyt1" label="用途主类"></el-table-column>
          <el-table-column prop="fwyt2" label="用途细类"></el-table-column>
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
      <el-row class="row-t">
        <span class="title-small">配套和指标因素信息 </span>
      </el-row>
      <el-row v-if="factor!==null">
        <el-tabs type="border-card">
          <el-tab-pane label="指标因素" v-if="use.indexOf('住宅') !== -1">
            <el-row>
              <span class="con">建筑类型:</span>
              <span class="val1">
                <!-- <factors-rate :value="factor.jzlx"></factors-rate> -->
                {{factor.jzlx}}
              </span>
              <span class="con">是否有电梯:</span>
              <span class="val1">
                <!-- <factors-rate :value="factor.sfydt"></factors-rate> -->
                   {{factor.sfydt}}
              </span>
              <span class="con">梯户比:</span>
              <span class="val1">
                <!-- <factors-rate :value="factor.thb"></factors-rate> -->
                   {{factor.thb}}
              </span>
              <span class="con">相对位置:</span>
              <span class="val">
                <!-- <factors-rate :value="factor.xdwz"></factors-rate> -->
                   {{factor.xdwz}}
              </span>
            </el-row>
          </el-tab-pane>
           <el-tab-pane label="指标因素" v-if="use.indexOf('商业') !== -1">
             <el-row>
                 <el-col :span="8" >
                  <p>
                    <span class="con13">有无专用停车场:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.tcc"></factors-rate> -->
                         {{factor.tcc}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">特殊用途:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.tsyt"></factors-rate> -->
                         {{factor.tsyt}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">临街类型:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.ljlx"></factors-rate> -->
                         {{factor.ljlx}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">相对位置:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.xdwz"></factors-rate> -->
                         {{factor.xdwz}}
                    </span>
                  </p>
              </el-col>
                <el-col :span="8" >
                  <p>
                    <span class="con13">物业费:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.wyf"></factors-rate> -->
                         {{factor.wyf}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">空置率:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.kzl"></factors-rate> -->
                         {{factor.kzl}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">首层租金:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.sczj"></factors-rate> -->
                         {{factor.sczj}}
                    </span>
                  </p>
              </el-col>
             </el-row>
           </el-tab-pane>
          <el-tab-pane label="指标因素" v-if="use.indexOf('办公') !== -1">
             <el-row>
                 <el-col :span="8" >
                  <p>
                    <span class="con13">有无门禁:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.mj"></factors-rate> -->
                       {{factor.mj}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">有无大堂:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.ywdt"></factors-rate> -->
                         {{factor.ywdt}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">有无电梯:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.dt"></factors-rate> -->
                         {{factor.dt}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">有无中央空调:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.zykt"></factors-rate> -->
                         {{factor.zykt}}
                    </span>
                  </p>
              </el-col>
                <el-col :span="8" >
                  <p>
                    <span class="con13">户数:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.thb"></factors-rate> -->
                         {{factor.thb}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">办公层数:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.bgcs"></factors-rate> -->
                         {{factor.bgcs}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">用途子类:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.yt"></factors-rate> -->
                         {{factor.yt}}
                    </span>
                  </p>
                    <p>
                    <span class="con13">品质:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.pz"></factors-rate> -->
                         {{factor.pz}}
                    </span>
                  </p>
              </el-col>
                     <el-col :span="8" >
                  <p>
                    <span class="con13">写字楼等级:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.xzldj"></factors-rate> -->
                         {{factor.xzldj}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">相对位置:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.xdwz"></factors-rate> -->
                         {{factor.xdwz}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">售价:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.sj"></factors-rate> -->
                         {{factor.sj}}
                    </span>
                  </p>
                    <p>
                    <span class="con13">单价:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.zj"></factors-rate> -->
                         {{factor.zj}}
                    </span>
                  </p>
              </el-col>
             </el-row>
          </el-tab-pane>
          <el-tab-pane label="指标因素" v-if="use.indexOf('工业') !== -1">
             <el-row>
                 <el-col :span="8" >
                  <p>
                    <span class="con13">租金:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.zj"></factors-rate> -->
                         {{factor.zj}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">是否有门禁:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.mj"></factors-rate> -->
                         {{factor.mj}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">有无电梯:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.dt"></factors-rate> -->
                         {{factor.dt}}
                    </span>
                  </p>
              </el-col>
                <el-col :span="8" >
                  <p>
                    <span class="con13">物业费:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.wyf"></factors-rate> -->
                         {{factor.wyf}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">用途子类:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.yt"></factors-rate> -->
                         {{factor.yt}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">临街类型:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.ljlx"></factors-rate> -->
                         {{factor.ljlx}}
                    </span>
                  </p>
              </el-col>
               <el-col :span="8" >
                  <p>
                    <span class="con13">空置率:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.kzl"></factors-rate> -->
                         {{factor.kzl}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">层高:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.cg"></factors-rate> -->
                         {{factor.cg}}
                    </span>
                  </p>
                  <p>
                    <span class="con13">售价:</span>
                    <span class="val1">
                      <!-- <factors-rate :value="factor.sj"></factors-rate> -->
                         {{factor.sj}}
                    </span>
                  </p>
              </el-col>
             </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row class="row-t">
        <div class="title-small">价格信息 </div>
      </el-row>
      <el-row>
        <price-rent v-if="proData" :proData="proData" usage=0  :dateRange="dateRange"  priceType="价格" >
        </price-rent>
      </el-row>
      <el-row class="row-t">
        <div class="title-small">租金信息 </div>
      </el-row>
         <el-row >
       <price-rent id="id1" v-if="zjData " usage=0 :proData="zjData"  :dateRange="dateRange"  priceType="租金" >
        </price-rent>
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
import PriceRent from '@/views/casemanage/components/PriceRent'
import {
  buildingsInfo,
  buildingsUnits,
  buildingsFactorInfo,
  buildingValue
} from '@/api/building'
import { imgs } from '@/api/img'
import { formatDate, DateAdd } from '@/utils/date'
export default {
  components: { Carousel, PriceChart, FactorsRate, PriceRent },
  data() {
    return {
      building: [],
      houses: [],
      factor: [],
      img: null,
      useOptions: [],
      tjsj: [],
      use: this.$route.query.use,
      isalluse: '全部',
      showHouseList: [],
      dateRange: [formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), formatDate(new Date(), 'yyyy-MM-dd')],
      proData: { params: { allx: '交易', jglx: '价格', zzsj: formatDate(new Date(), 'yyyy-MM-dd'), qssj: formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), lddm: this.$route.query.lddm, yt: this.$route.query.use }, caseTypeList: ['交易'] },
      zjData: { params: { allx: '交易', jglx: '租金', zzsj: formatDate(new Date(), 'yyyy-MM-dd'), qssj: formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), lddm: this.$route.query.lddm, yt: this.$route.query.use }, caseTypeList: ['交易'] }
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
        this.useOptions = this.building.hgyt.split(';')
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
        this.onIsAllUseClick()
      })
    },
    getBuildingFactorsResidential() {
      let yt = ''
      switch (this.use) {
        case '住宅':
          yt = 'residential'
          break
        case '商业':
          yt = 'commercial'
          break
        case '办公':
          yt = 'office'
          break
        case '工业':
          yt = 'industry'
          break
        default:
          break
      }
      buildingsFactorInfo(yt, this.$route.query.lddm).then(response => {
        this.factor = response.data
      })
    },
    getBuildingValue() {
      var param = { lddm: this.$route.query.lddm }
      buildingValue(param).then(response => {
        this.tjsj = response.data
      })
    },
    onIsAllUseClick() {
      if (this.isalluse === '全部') {
        this.showHouseList = this.houses
      } else {
        const tempList = []
        this.houses.forEach(element => {
          if (element.fwyt1.indexOf(this.use) !== -1) {
            tempList.push(element)
          }
        })
        this.showHouseList = tempList
      }
    }
  },
  filters: {
    formatDate(currentDate) {
      var date = new Date(currentDate)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  watch: {
    use(val) {
      this.getBuildingFactorsResidential()
      this.onIsAllUseClick()
      this.proData = { params: { allx: '交易', jglx: '价格', zzsj: formatDate(new Date(), 'yyyy-MM-dd'), qssj: formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), lddm: this.$route.query.lddm, yt: this.use }, caseTypeList: ['交易'] }
      this.zjData = { params: { allx: '交易', jglx: '租金', zzsj: formatDate(new Date(), 'yyyy-MM-dd'), qssj: formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), lddm: this.$route.query.lddm, yt: this.use }, caseTypeList: ['交易'] }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";

.high.el-row {
  margin-top: 2%;
}
.el-radio__inner {
  visibility: hidden;
}
.el-radio + .el-radio {
  margin-left: -7px;
}
</style>