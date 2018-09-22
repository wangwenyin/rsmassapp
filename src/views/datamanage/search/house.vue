<template>
  <div class="app">
    <div class="margin10">
      <div id="1f"></div>
      <el-row>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <Carousel :img="img"></Carousel>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div v-if="house!==null">
            <div class="bottom30">
              <span class="title">{{ house.hh }} </span>
              <span class="title-small">{{ house.xmmc }} </span>
              <span class="title-small">{{ house.ldmc }} </span>
              <span class="val">{{house.xzq}}&nbsp;&nbsp;|&nbsp;&nbsp;{{house.jdb}}</span>
              <span>
                <router-link :to="{ name:'3DMap' ,query: { id: house.hdm } }" target="_blank">
                  <svg-icon icon-class="谷歌地球"></svg-icon>
                </router-link>
              </span>
              <div class="right">
                <router-link :to="{ name:'houseEdit' ,query: { hdm: house.hdm } }" target="_blank">
                  <el-button type="primary" size="small" plain>编辑</el-button>
                </router-link>
              </div>
            </div>
            <div>
              <el-row>
                <el-col :span="6">
                  <span class="con">户号</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.hh}}</span>
                </el-col>
                <el-col :span="6">
                  <span class="con">楼层</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.sjc}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <span class="con">户型</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.hx}}</span>
                </el-col>
                <el-col :span="6">
                  <span class="con">朝向</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.cx}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <span class="con">建筑面积</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.jzmj}}</span>
                </el-col>
                <el-col :span="6">
                  <span class="con">套内建筑面积</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.tnjzmj}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <span class="con">分摊建筑面积</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.ftjzmj}}</span>
                </el-col>
                <el-col :span="6">
                  <span class="con">分摊土地面积</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.fttdmj}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <span class="con">用途1</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.fwyt1}}</span>
                </el-col>
                <el-col :span="6">
                  <span class="con">用途2</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.fwyt2}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <span class="con">性质</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.fwxz}}</span>
                </el-col>
                <el-col :span="6">
                  <span class="con">户型结构</span>
                </el-col>
                <el-col :span="6">
                  <span class="val">{{house.hxjg}}</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <div id="2f"></div>
      <el-row>
        <span class="title-small">配套和指标因素信息 </span>
      </el-row>
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="住宅" v-if="house.fwyt1 ? house.fwyt1.indexOf('住宅') !== -1:false||house.fwyt2 ?house.fwyt2.indexOf('住宅') !== -1 : false">
            <el-row>
              <el-col :span="24">
                <span class="con">景观:</span>
                <span class="val">
                  <factors-rate :value="factor.jg"></factors-rate>
                </span>
                <span class="con">户型布局:</span>
                <span class="val">
                  <factors-rate :value="factor.hxbj"></factors-rate>
                </span>
                <span class="con">装修装饰:</span>
                <span class="val">
                  <factors-rate :value="factor.zszxqk"></factors-rate>
                </span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <span class="con">噪音:</span>
                <span class="val">
                  <factors-rate :value="factor.zy"></factors-rate>
                </span>
                <span class="con">相对位置:</span>
                <span class="val">
                  <factors-rate :value="factor.xdwz"></factors-rate>
                </span>
                <span class="con">采光:</span>
                <span class="val">
                  <factors-rate :value="factor.cg"></factors-rate>
                </span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <span class="con">通风:</span>
                <span class="val">
                  <factors-rate :value="factor.tf"></factors-rate>
                </span>
                <span class="con">朝向:</span>
                <span class="val">
                  <factors-rate :value="factor.cx"></factors-rate>
                </span>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="办公" v-if="house.fwyt1 ? house.fwyt1.indexOf('办公') !== -1:false||house.fwyt2 ?house.fwyt2.indexOf('办公') !== -1 : false"></el-tab-pane>
          <el-tab-pane label="商业" v-if="house.fwyt1 ? house.fwyt1.indexOf('商业') !== -1:false||house.fwyt2 ?house.fwyt2.indexOf('商业') !== -1 : false"></el-tab-pane>
        </el-tabs>
      </el-row>
      <div id="3f"></div>
      <el-row>
        <span class="title-small">评估价格 </span>
      </el-row>
      <el-row v-if="tjsj.length!==0">
        <PriceChart :tjsj="tjsj"></PriceChart>
      </el-row>
      <div class="topmenu" ref="topmenu">
        <a href="#1f">
          <el-button type="info">基础信息</el-button>
        </a>
        <a href="#2f">
          <el-button type="info">指标信息</el-button>
        </a>
        <a href="#3f">
          <el-button type="info">评估价格</el-button>
        </a>
        <a href="#4f">
          <el-button type="info">价格地图</el-button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import PriceChart from '@/views/datamanage/components/PriceChart'
import Carousel from '@/views/datamanage/components/Carousel'
import FactorsRate from '@/views/datamanage/components/FactorsRate'
import { unitInfo, unitFactors, unitValue } from '@/api/house'
import { imgs } from '@/api/img'
export default {
  components: { Carousel, PriceChart, FactorsRate },
  data() {
    return {
      house: {},
      img: {},
      factor: {},
      tjsj: []
    }
  },
  created() {
    this.$nextTick(() => {
      this.getUnitValue()
    })
  },
  mounted() {
    this.getHouse()
    this.getImg()
    this.housrFactors()
    this.getUnitValue()
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
    getImg() {
      var params = { fdcdm: this.$route.query.hdm, fdclx: '户' }
      imgs(params).then(response => {
        this.img = response.data
      })
    },
    getHouse() {
      unitInfo(this.$route.query.hdm).then(response => {
        this.house = response.data
      })
    },
    housrFactors() {
      unitFactors(this.$route.query.hdm).then(response => {
        this.factor = response.data
      })
    },
    getUnitValue() {
      var param = { hdm: this.$route.query.hdm }
      unitValue(param).then(response => {
        this.tjsj = response.data
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../../styles/app.scss";
.el-row {
  margin-bottom: 20px;
  margin-top: 10px;
  height: 100%;
  margin-left: 20px;
  margin-right: 20px;
}
</style>