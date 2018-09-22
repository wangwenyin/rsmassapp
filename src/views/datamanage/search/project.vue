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
              <span class="val">{{ project.xzq }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ project.jdb}}</span>
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
              <el-row>
                <el-col :span="24">
                  <span class="con">项目编号</span>
                  <span class="val">{{project.xmdm}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <span class="con">坐 &nbsp;&nbsp; &nbsp;&nbsp; 落</span>
                  <span class="val">{{project.xmzl}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <span class="con">宗 &nbsp;地 &nbsp;号</span>
                  <span class="val">{{project.zddm}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <span class="con">竣工日期</span>
                  <span class="val">{{project.jgrq| formatDate}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="15">
                  <span class="con">占地面积</span>
                  <span class="val">{{project.zdmj}}</span>
                </el-col>
                <el-col :span="9">
                  <span class="con">用地面积</span>
                  <span class="val">{{project.ydmj}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="15">
                  <span class="con">建筑面积</span>
                  <span class="val">{{project.jzmj}}</span>
                </el-col>
                <el-col :span="9">
                  <span class="con">总停车位</span>
                  <span class="val">{{project.zcws}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="15">
                  <span class="con">总&nbsp;栋&nbsp;数</span>
                  <span class="val">{{project.zlds}}</span>
                </el-col>
                <el-col :span="9">
                  <span class="con">总&nbsp;户&nbsp;数</span>
                  <span class="val">{{project.zhs}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <span class="con">开&nbsp;发&nbsp;商</span>
                  <span class="val">{{project.kfsmc}}</span>
                </el-col>
              </el-row>
              <el-row>
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
      </el-row>
      <el-row>
        <el-table :data="bulidingsList" border max-height="350">
          <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
          <el-table-column prop="ldmc" label="名称"></el-table-column>
          <el-table-column prop="jzmj" label="建筑面积"></el-table-column>
          <el-table-column prop="zcs" label="总层数"></el-table-column>
          <el-table-column prop="zhs" label="总户数"></el-table-column>
          <el-table-column prop="ldxz" label="楼栋性质"></el-table-column>
          <el-table-column prop="hgyt" label="涵盖用途">
            <template slot-scope="scope">
              <useTag :tags="scope.row.hgyt"></useTag>
            </template>
          </el-table-column>
          <el-table-column label="备注">
            <template slot-scope="scope">
              <router-link :to="{ name:'building' ,query: { lddm: scope.row.lddm } }" target="_blank">
                <el-button type="text" size="small">详情</el-button>
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
          <el-tab-pane label="住宅" v-if="project.hgyt.indexOf('住宅') !== -1">
            <el-row :gutter="10">
              <el-col :span="8">
                <div class="title-mini">地理位置</div>
                <p>
                  <span class="con13">区域中心距离:</span>
                  <span class="val1">
                    <factors-rate :value="factor.qyzxjl"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">区域繁华程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.qyfhcd"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">规划合理程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.ghhlcd"></factors-rate>
                  </span>
                </p>
              </el-col>
              <el-col :span="8">
                <p class="title-mini">交通条件</p>
                <p>
                  <span class="con13">地铁便捷程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.dtbjcd"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">公交便捷程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.gjbjcd"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">道路通达程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.dltdcd"></factors-rate>
                  </span>
                </p>
              </el-col>
              <el-col :span="8">
                <p class="title-mini">环境景观</p>
                <p>
                  <span class="con13">周边景观:</span>
                  <span class="val1">
                    <factors-rate :value="factor.zbjg"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">环境质量:</span>
                  <span class="val1">
                    <factors-rate :value="factor.hjzl"></factors-rate>
                  </span>
                </p>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="8">
                <p class="title-mini">教育水平</p>
                <p>
                  <span class="con13">教育设施完备度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.jyptsswbcd"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">小学学区学位:</span>
                  <span class="val1">
                    <factors-rate :value="factor.xxxqxw"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">初中学区学位:</span>
                  <span class="val1">
                    <factors-rate :value="factor.czxqxw"></factors-rate>
                  </span>
                </p>
              </el-col>
              <el-col :span="8">
                <p class="title-mini">配套设施</p>
                <p>
                  <span class="con13">基础设施完备程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.jcptsswbcd"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">生活设施完备程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.shptsswbcd"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">休闲娱乐完备程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.xxylsswbcd"></factors-rate>
                  </span>
                </p>
              </el-col>
              <el-col :span="8">
                <p class="title-mini">小区品质</p>
                <p>
                  <span class="con13">新旧程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.xjcd"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">物业管理水平:</span>
                  <span class="val1">
                    <factors-rate :value="factor.wyglsp"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">建筑容积率:</span>
                  <span class="val1">
                    <factors-rate :value="factor.jzrjl"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">内部环境质量:</span>
                  <span class="val1">
                    <factors-rate :value="factor.nbhjzl"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">内部设施完备程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.nbsswbcd"></factors-rate>
                  </span>
                </p>
                <p>
                  <span class="con13">停车便捷程度:</span>
                  <span class="val1">
                    <factors-rate :value="factor.tcbjcd"></factors-rate>
                  </span>
                </p>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="办公" v-if="project.hgyt.indexOf('办公') !== -1"></el-tab-pane>
          <el-tab-pane label="商业" v-if="project.hgyt.indexOf('商业') !== -1">
            <el-row style="height:287px">
              <p class="con13" style="margin-top: 13%;margin-left: 50%;">暂无数据</p>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row class="row-t">
        <div class="title-small">评估价格 </div>
      </el-row>
      <el-row v-if="tjsj.length">
        <PriceChart :hgyt="project.hgyt" :tjsj="tjsj"></PriceChart>
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
import {
  projectInfo,
  projectFactorsResidential,
  projectBuildings,
  projectValue
} from '@/api/project'
import { imgs } from '@/api/img'
import { formatDate } from '@/utils/date'
export default {
  components: { Carousel, useTag, PriceChart, FactorsRate },
  data() {
    return {
      project: {},
      bulidingsList: [],
      img: {},
      tjsj: [],
      factor: {}
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
      })
    },
    getBuilding() {
      var param = { xmdm: this.$route.query.xmdm }
      projectBuildings(param).then(response => {
        this.bulidingsList = response.data
      })
    },
    getProjectFactorsResidential() {
      // 2018-09-17 yt 先写死，后面需修改
      const yt = 'residential'
      projectFactorsResidential(yt, this.$route.query.xmdm).then(response => {
        this.factor = response.data
      })
    },
    getProjectValue() {
      var param = { xmdm: this.$route.query.xmdm }
      projectValue(param).then(response => {
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
</style>