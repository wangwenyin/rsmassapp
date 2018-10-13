<template>
  <div class="app ">
    <div class="margin10 " v-if="project!==null">
      <div id="1f"></div>
      <el-row :gutter="10">
        <el-col :span="12">
          <Carousel :img="img"></Carousel>
        </el-col>
        <el-col :span="12">
          <div>
            <div class="bottom30">
              <span class="title">{{ project.xmmc }} </span>
              <el-radio-group v-model="use" size="mini">
                <el-radio class="useradio" v-for="item in options" v-if="item!==''" :label="item" :key="item"></el-radio>
              </el-radio-group>
              <span>
                <router-link :to="{ name:'3DMap' ,query: { id: project.xmdm } }" target="_blank">
                  <svg-icon icon-class="谷歌地球"></svg-icon>
                </router-link>
              </span>
              <div class="right">
                <router-link :to="{ name:'projectEdit' ,query: { xmdm: project.xmdm } }" target="_blank">
                  <el-button type="primary" size="small" plain>编辑</el-button>
                </router-link>
              </div>
            </div>
            <div>
              <el-row class="high">
                <el-col :span="24">
                  <span class="con">行&nbsp;政&nbsp;区</span>
                  <span class="val">{{ project.xzq }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ project.jdb}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="24">
                  <span class="con">坐 &nbsp;&nbsp; &nbsp;&nbsp; 落</span>
                  <span class="val">{{project.xmzl}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="14">
                  <span class="con">竣工日期</span>
                  <span class="val">{{project.jgrq| formatDate}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">宗 &nbsp;地 &nbsp;号</span>
                  <span class="val">{{project.zddm}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="14">
                  <span class="con">占地面积</span>
                  <span class="val">{{project.zdmj}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">建筑面积</span>
                  <span class="val">{{project.jzmj}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="14">
                  <span class="con">楼栋数量</span>
                  <span class="val">{{project.zlds}}</span>
                </el-col>
                <el-col :span="10">
                  <span class="con">房屋数量</span>
                  <span class="val">{{project.zhs}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="24">
                  <span class="con">停&nbsp;车&nbsp;位</span>
                  <span class="val">{{project.zcws}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="24">
                  <span class="con">开&nbsp;发&nbsp;商</span>
                  <span class="val">{{project.kfsmc}}</span>
                </el-col>
              </el-row>
              <el-row class="high">
                <el-col :span="24">
                  <span class="con">物业公司</span>
                  <span class="val">{{project.wygsmc}}</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <div id="2f"></div>
      <el-row class="row-t">
        <span class="title-small">楼栋列表 </span>
        <el-radio-group v-model="isalluse" size="small" class="right" @change="onIsAllUseClick">
          <el-radio-button label="部分"></el-radio-button>
          <el-radio-button label="全部"></el-radio-button>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-table :data="showBulidingsList" border max-height="350" size='mini'>
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column prop="ldmc" min-width="150" label="楼栋名称"></el-table-column>
          <el-table-column prop="zcs" label="总层数"></el-table-column>
          <el-table-column prop="ldxz" label="楼栋性质"></el-table-column>
          <el-table-column prop="hgyt" label="涵盖用途">
            <template slot-scope="scope">
              <useTag :tags="scope.row.hgyt"></useTag>
            </template>
          </el-table-column>
           <el-table-column prop="jgrq" label="竣工日期"></el-table-column>
          <el-table-column prop="jzmj" label="建筑面积"></el-table-column>
          <el-table-column prop="zddm" label="宗地号"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <router-link :to="{ name:'building' ,query: { lddm: scope.row.lddm,use:use } }" target="_blank">
                <el-button type="text" size="small">详情</el-button>
              </router-link>
              <router-link :to="{ name:'housegrid' ,query: { lddm: scope.row.lddm,zcs:scope.row.zcs }}" target="_blank">
                <el-button type="text" size="small">房屋</el-button>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <div id="3f"></div>
      <el-row class="row-t">
        <div class="title-small">配套和指标因素信息 </div>
      </el-row>
      <el-row>
        <el-tabs type="border-card" v-if="factor!==null">
          <el-tab-pane label="指标因素">
            <el-row :gutter="10">
              <el-col :span="8">
                <div class="title-mini">区位因素</div>
                <p>
                  <span class="con13">功能聚集程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.gnjjcd"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('商业') !== -1||use.indexOf('办公') !== -1||use.indexOf('工业') !== -1">
                  <span class="con13">区域繁华程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.qyfhcd"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('工业') !== -1">
                  <span class="con13">道路通达程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.qyfhcd"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('商业') !== -1||use.indexOf('办公') !== -1||use.indexOf('住宅') !== -1">
                  <span class="con13">地铁便捷程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.dtbjcd"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('商业') !== -1||use.indexOf('办公') !== -1||use.indexOf('住宅') !== -1">
                  <span class="con13">公交便捷程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.gjbjcd"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('工业') !== -1">
                  <span class="con13">对外交通便捷程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.dwjtbjcd"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('住宅') !== -1||use.indexOf('办公') !== -1">
                  <span class="con13">周边景观:</span>
                  <span class="val1">
                    <factors-rate :value="factor.zbjg"></factors-rate>
                  </span>
                </p>
              </el-col>
              <el-col :span="8" v-if="use.indexOf('住宅') !== -1">
                <p style="margin-top:30px">
                  <p>
                    <span class="con13">小学学位水平:</span>
                    <span class="val1">
                      <factors-rate :value="factor.xxxqxw"></factors-rate>
                    </span>
                  </p>
                  <p>
                    <span class="con13">初中学位水平:</span>
                    <span class="val1">
                      <factors-rate :value="factor.czxqxw"></factors-rate>
                    </span>
                  </p>
                  <p>
                    <span class="con13">生活设施完备程度:</span>
                    <span class="val1">
                      <factors-rate :value="factor.shptsswbcd"></factors-rate>
                    </span>
                  </p>
                  <p>
                    <span class="con13">娱乐设施完备程度:</span>
                    <span class="val1">
                      <factors-rate :value="factor.xxylsswbcd"></factors-rate>
                    </span>
                  </p>
              </el-col>
              <el-col :span="8">
                <p class="title-mini">实物因素</p>
                <p>
                  <span class="con13">新旧程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.xjcd"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('住宅') !== -1">
                  <span class="con13">内部环境质量:</span>
                  <span class="val1">
                    <factors-rate :value="factor.nbhjzl"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('住宅') !== -1||use.indexOf('办公') !== -1||use.indexOf('工业') !== -1">
                  <span class="con13">物业管理水平:</span>
                  <span class="val1">
                    <factors-rate :value="factor.wyglsp"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">项目规模:</span>
                  <span class="val1">
                    <factors-rate :value="factor.xmgm"></factors-rate>
                  </span>
                </p>
                <p v-if="use.indexOf('办公') !== -1">
                  <span class="con13">写字楼等级:</span>
                  <span class="val1">
                    <factors-rate :value="factor.xzldj"></factors-rate>
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
        <price-rent v-if="proData" :usage="0" :proData="proData"  :dateRange="dateRange"  priceType="价格" >
        </price-rent>
      </el-row>
      <el-row class="row-t">
        <div class="title-small">租金信息 </div>
      </el-row>
         <el-row >
       <price-rent id="id1" v-if="zjData " :usage="0" :proData="zjData"  :dateRange="dateRange"  priceType="租金" >
        </price-rent>
      </el-row>
      <el-row class="row-t">
        <div class="title-small">配套设施 </div>
      </el-row>
      <el-row>
        <MatingMap :xmdm="this.$route.query.xmdm" :yt="use" :x="project.x" :y="project.y"></MatingMap>
      </el-row>
      <div class="topmenu" ref="topmenu">
        <a href="#1f">
          <el-button type="info">基础信息</el-button>
        </a>
        <a href="#2f">
          <el-button type="info">楼栋列表</el-button>
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
import useTag from '@/views/datamanage/components/UseTag'
import PriceRent from '@/views/casemanage/components/PriceRent'
import MatingMap from '@/views/datamanage/components/MatingMap'
import {
  projectInfo,
  projectFactorsResidential,
  projectBuildings,
  projectValue
} from '@/api/project'
import { imgs } from '@/api/img'
import { formatDate, DateAdd } from '@/utils/date'
export default {
  components: { Carousel, useTag, PriceChart, FactorsRate, PriceRent, MatingMap },
  data() {
    return {
      use: this.$route.query.use,
      project: {},
      bulidingsList: [],
      showBulidingsList: [],
      img: [],
      tjsj: [],
      factor: {},
      options: [],
      isalluse: '全部',
      dateRange: [formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), formatDate(new Date(), 'yyyy-MM-dd')],
      proData: { params: { allx: '交易', jglx: '价格', zzsj: formatDate(new Date(), 'yyyy-MM-dd'), qssj: formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), xmdm: this.$route.query.xmdm, yt: this.$route.query.use }, caseTypeList: ['交易'] },
      zjData: { params: { allx: '交易', jglx: '租金', zzsj: formatDate(new Date(), 'yyyy-MM-dd'), qssj: formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), xmdm: this.$route.query.xmdm, yt: this.$route.query.use }, caseTypeList: ['交易'] }
    }
  },
  mounted() {
    this.getProject()
    this.getBuilding()
    this.getImg()
    this.getProjectFactorsResidential()
    this.getProjectValue()
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
      var params = { fdcdm: this.$route.query.xmdm, fdclx: '项目' }
      imgs(params).then(response => {
        this.img = response.data
      })
    },
    getProject() {
      projectInfo(this.$route.query.xmdm).then(response => {
        this.project = response.data
        this.options = this.project.hgyt.split(';')
      })
    },
    getBuilding() {
      var param = { xmdm: this.$route.query.xmdm }
      projectBuildings(param).then(response => {
        this.bulidingsList = response.data
        this.onIsAllUseClick()
      })
    },
    getProjectFactorsResidential() {
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
      // 2018-09-17 yt 先写死，后面需修改
      //   const yt = 'residential'
      projectFactorsResidential(yt, this.$route.query.xmdm).then(response => {
        this.factor = response.data
      })
    },
    getProjectValue() {
      var param = { xmdm: this.$route.query.xmdm }
      projectValue(param).then(response => {
        this.tjsj = response.data
      })
    },
    onIsAllUseClick() {
      if (this.isalluse === '全部') {
        this.showBulidingsList = this.bulidingsList
      } else {
        const tempList = []
        this.bulidingsList.forEach(element => {
          if (element.hgyt.indexOf(this.use) !== -1) {
            tempList.push(element)
          }
        })
        this.showBulidingsList = tempList
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
    use(val, val2) {
      this.getProjectFactorsResidential()
      this.onIsAllUseClick()
      this.proData = { params: { allx: '交易', jglx: '价格', zzsj: formatDate(new Date(), 'yyyy-MM-dd'), qssj: formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), xmdm: this.$route.query.xmdm, yt: this.use }, caseTypeList: ['交易'] }
      this.zjData = { params: { allx: '交易', jglx: '租金', zzsj: formatDate(new Date(), 'yyyy-MM-dd'), qssj: formatDate(DateAdd('y', -1, new Date()), 'yyyy-MM-dd'), xmdm: this.$route.query.xmdm, yt: this.use }, caseTypeList: ['交易'] }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";
.high.el-row{
  margin-top: 2%
}
.el-radio__inner {
    visibility: hidden
  
}
.el-radio+.el-radio{
  margin-left: -7px
}
</style>