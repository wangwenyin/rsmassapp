<template>
  <div class="app">
    <div class="caseSearch content" @click="isShowMating=false">
      <div class="search-top" ref="searchTop">
        <el-row :gutter="10" style="padding: 10px">
          <el-col :span="3">
            <el-select v-model="usageValue" @change="handleUsageChange" placeholder="请选择物业用途" size="small">
              <el-option
                v-for="item in usages"
                :key="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-select v-model="typeValue" @change="handleTypeChange" placeholder="请选择价格类型" size="small">
              <el-option
                v-for="item in typeValues"
                :key="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-select v-model="caseTypeList" multiple @change="handleTypeValueChange" placeholder="请选择类型值" size="small">
              <el-option
                v-for="item in caseTypes"
                :key="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <date-picker @dateChange="handleDateChange" :noDefaultValue="noDefaultValue" ref="datePicker"></date-picker>
          </el-col>
          <el-col :span="4" style="margin-left: 10px">
            <el-input
              placeholder="请输入项目名称"
              size="small"
              v-model="searchValue"
              @keyup.enter.native="searchCase"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="1.2">
            <el-button type="primary" size="small" @click="searchCase">查询</el-button>
          </el-col>
        </el-row>
      </div>
      <baidu-map class="bm-view" ref="baiduMap" v-if="isShow" :center="center" :zoom="zoom" @zoomend="zoomChange" :map-click="false" :scroll-wheel-zoom="true" @ready="mapReady">
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP', 'BMAP_PERSPECTIVE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <bm-panorama anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-panorama>
        <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 10, height: 50}">
          <el-popover
            title="请选择图层："
            width="200"
            trigger="click">
            <el-button plain size="small" @click="showAll">行政区划</el-button>
            <el-button plain size="small" @click="isShowMating=!isShowMating">配套设施</el-button>
            <el-button plain size="small" style="margin-left: 0;margin-top: 5px">初中学区</el-button>
            <el-button plain size="small" style="margin-top: 5px">评估分区</el-button>
            <el-button plain size="small" style="margin-left: 0;margin-top: 5px">小学学区</el-button>
            <el-button plain size="small">街道</el-button>
            <el-button plain size="small" slot="reference" @click="isShowMating=false">图层</el-button>
          </el-popover>
        </bm-control>
        <bm-control v-if="isShowMating" anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 210, height: 40}" @click.native.stop>
          <el-tabs type="border-card">
            <el-tab-pane label="交通">
              <el-tabs>
                <el-tab-pane label="地铁">
                  <div v-for="item in subway" class="itemBox" :key="item.id">
                    <span><svg-icon :icon-class="item.icon"></svg-icon></span>
                    <span>{{item.name}}</span>
                    <span></span>
                    <span>{{item.distance}}米</span>
                    <span>{{item.line}}号线</span>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="公交">
                  <div v-for="item in bus" class="itemBox" :key="item.id">
                    <span><svg-icon :icon-class="item.icon"></svg-icon></span>
                    <span>{{item.name}}</span>
                    <span></span>
                    <span>{{item.distance}}米</span>
                    <span>{{item.site}}</span>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="教育">
              <el-tabs>
                <el-tab-pane label="幼儿园">
                  <div v-for="item in kindergarten" class="itemBox" :key="item.id">
                    <span><svg-icon :icon-class="item.icon"></svg-icon></span>
                    <span>{{item.name}}</span>
                    <span></span>
                    <span>{{item.distance}}米</span>
                    <span>{{item.site}}</span>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="小学">
                  <div v-for="item in primarySchool" class="itemBox" :key="item.id">
                    <span><svg-icon :icon-class="item.icon"></svg-icon></span>
                    <span>{{item.name}}</span>
                    <span></span>
                    <span>{{item.distance}}米</span>
                    <span>{{item.site}}</span>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="中学">
                  <div v-for="item in highSchool" class="itemBox" :key="item.id">
                    <span><svg-icon :icon-class="item.icon"></svg-icon></span>
                    <span>{{item.name}}</span>
                    <span></span>
                    <span>{{item.distance}}米</span>
                    <span>{{item.site}}</span>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="大学">
                  <div v-for="item in university" class="itemBox" :key="item.id">
                    <span><svg-icon :icon-class="item.icon"></svg-icon></span>
                    <span>{{item.name}}</span>
                    <span></span>
                    <span>{{item.distance}}米</span>
                    <span>{{item.site}}</span>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="医疗">
              <el-tabs>
                <el-tab-pane label="医院">
                  <div v-for="item in hospital" class="itemBox" :key="item.id">
                    <span><svg-icon :icon-class="item.icon"></svg-icon></span>
                    <span>{{item.name}}</span>
                    <span></span>
                    <span>{{item.distance}}米</span>
                    <span>{{item.site}}</span>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="药店">
                  <div v-for="item in chemistShop" class="itemBox" :key="item.id">
                    <span><svg-icon :icon-class="item.icon"></svg-icon></span>
                    <span>{{item.name}}</span>
                    <span></span>
                    <span>{{item.distance}}米</span>
                    <span>{{item.site}}</span>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="购物"></el-tab-pane>
            <el-tab-pane label="生活"></el-tab-pane>
            <el-tab-pane label="娱乐"></el-tab-pane>
          </el-tabs>
        </bm-control>
        <div v-if="isShowBoundary" v-for="regionName in regionList" :key="regionName.id">
          <bm-boundary :name="regionName" :strokeWeight="2" strokeColor="#409EFF" :strokeOpacity="0.9" :fillOpacity="0.1" fillColor="#409EFF"></bm-boundary>
        </div>
        <!--<bm-polygon :path="pathList" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2"/>-->
        <case-overlay v-for="item in communities" :key="item.xmdm"
          :position="{lng: item.x, lat: item.y}"
          :data="item"
          :keyword="keyword"
          :typeValue="typeValue"
          :zoom="zoom"
          @over="showBoundary"
          @out="hideBoundary"
          @markerClick="handleMarkerClick"
          @cancleActive="handleCancleActive"
          ref="caseOverlay"
        ></case-overlay>
      </baidu-map>
      <div class="project-list" :class="{ active: isProActive }">
        <div class="proControl" @click="handleProControlClick" v-if="projectInfo.length">
          <span><svg-icon :icon-class="isProActive ? 'icon_open' : 'icon_close'"></svg-icon></span>
        </div>
        <project-list ref="proList" :projectInfo="projectInfo" @cardClick="handleCardClick"></project-list>
      </div>
      <div ref="proDetailList" class="project-detail-list" :class="{ active: isCaseActive }">
        <div class="control" @click="handleControlClick" v-if="projectDetailList.length">
          <span><svg-icon :icon-class="isCaseActive ? 'icon_open' : 'icon_close'"></svg-icon></span>
        </div>
        <div class="base_info" v-if="projectDetailList.length">
          <router-link :to="{ name: 'project', query: { xmdm: projectData.xmdm } }" target="_blank">
            <div class="name">
              <span>{{projectData.xmmc}}</span><span>{{projectData.avg_price}}元/㎡</span>
            </div>
          </router-link>
          <div class="year" style="overflow: hidden">
            <span>{{projectDetailList[0].sj.slice(0, 4)}}年</span>
            <span @click="onDetailClick">详情</span>
          </div>
        </div>
        <div class="detail-containner" ref="detailContainner">
          <div class="detail-content">
            <div class="detail_item" v-for="item in projectDetailList" :key="item.aldm">
              <div class="detail-top">
                <span></span>
                <span>{{item.hh}}</span>
                <span>{{item.ldmc}}</span>
                <span>{{item.dj}}元/㎡</span>
              </div>
              <div class="detail-bottom">
                <div>
                  <span>{{item.lc}}楼</span>
                  <span>|</span>
                  <span>{{item.jzmj}}㎡</span>
                  <span>|</span>
                  <span>{{item.hx}}</span>
                  <span>{{item.sj}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getXzqs, getProjects, getProjectList, getJdbs, getCases } from '@/api/caseSearch'
  import BaiduMap from 'vue-baidu-map/components/Map/Map'
  import CaseOverlay from '../components/caseOverlay'
  import ProjectList from '../components/ProjectList'
  import DatePicker from '@/views/pricereassess/components/DateTimePicker'

  export default {
    components: { BaiduMap, CaseOverlay, ProjectList, DatePicker },
    data() {
      return {
        center: { lng: 113.940981, lat: 22.518324 },
        zoom: 12,
        params: null,
        mapType: 'primary',
        listType: 'plain',
        caseTypeList: ['交易'],
        typeValue: '价格',
        usageValue: '住宅',
        typeValues: ['价格', '租金'],
        caseTypes: ['交易', '挂牌', '估价', '调查'],
        usages: ['住宅', '商业', '办公', '工业'],
        isShow: true,
        isShowMating: false,
        isShowBoundary: false,
        isSearchCase: false,
        regionList: [],
        noDefaultValue: false,
        keyword: '',
        searchValue: '',
        projectList: [],
        projectInfo: [],
        searchedProList: [],
        communities: [],
        projectDetailList: [],
        projectData: null,
        isCaseActive: false,
        isProActive: false,
        // 需要后台给对应评估分区的pathList,处理成pathLists
        pathList: [
          { lng: 113.933404, lat: 22.526177 },
          { lng: 113.946052, lat: 22.514959 },
          { lng: 113.960425, lat: 22.527913 },
          { lng: 113.94059, lat: 22.533254 }
        ],
        subway: [
          { icon: 'subway', name: '南山', distance: 370, line: 11 },
          { icon: 'subway', name: '桃园', distance: 1057, line: 1 },
          { icon: 'subway', name: '大新', distance: 670, line: 1 },
          { icon: 'subway', name: '后海', distance: 470, line: '2/11' }
        ],
        bus: [{ icon: 'bus', name: '北环科苑立交', distance: 300, site: '清华信息港' }],
        kindergarten: [
          { icon: '幼儿园', name: '深圳市南山区教育幼儿园', distance: 400, site: '深圳市南山区桂庙路海文花园' },
          { icon: '幼儿园', name: '深圳市南山区教育幼儿园', distance: 400, site: '深圳市南山区桂庙路海文花园' },
          { icon: '幼儿园', name: '深圳市南山区教育幼儿园', distance: 400, site: '深圳市南山区桂庙路海文花园' },
          { icon: '幼儿园', name: '深圳市南山区教育幼儿园', distance: 400, site: '深圳市南山区桂庙路海文花园' }
        ],
        primarySchool: [
          { icon: '小学', name: '南油小学(新校区)', distance: 607, site: '深圳市南山区南光路106号' },
          { icon: '小学', name: '南油小学(新校区)', distance: 607, site: '深圳市南山区南光路106号' },
          { icon: '小学', name: '南油小学(新校区)', distance: 607, site: '深圳市南山区南光路106号' },
          { icon: '小学', name: '南油小学(新校区)', distance: 607, site: '深圳市南山区南光路106号' }
        ],
        highSchool: [
          { icon: '中学', name: '学府中学', distance: 1343, site: '深圳市南山区商业文化中心区海德一道113号' },
          { icon: '中学', name: '学府中学', distance: 1343, site: '深圳市南山区商业文化中心区海德一道113号' },
          { icon: '中学', name: '学府中学', distance: 1343, site: '深圳市南山区商业文化中心区海德一道113号' },
          { icon: '中学', name: '学府中学', distance: 1343, site: '深圳市南山区商业文化中心区海德一道113号' }
        ],
        university: [
          { icon: '大学', name: '深圳大学', distance: 1420, site: '广东省深圳市南山区南海大道3688号' },
          { icon: '大学', name: '深圳大学', distance: 1420, site: '广东省深圳市南山区南海大道3688号' },
          { icon: '大学', name: '深圳大学', distance: 1420, site: '广东省深圳市南山区南海大道3688号' },
          { icon: '大学', name: '深圳大学', distance: 1420, site: '广东省深圳市南山区南海大道3688号' }
        ],
        hospital: [
          { icon: '医院', name: '深圳市第六人民医院', distance: 910, site: '深圳市南山区桃园路89号' },
          { icon: '医院', name: '深圳市第六人民医院', distance: 910, site: '深圳市南山区桃园路89号' },
          { icon: '医院', name: '深圳市第六人民医院', distance: 910, site: '深圳市南山区桃园路89号' },
          { icon: '医院', name: '深圳市第六人民医院', distance: 910, site: '深圳市南山区桃园路89号' }
        ],
        chemistShop: [
          { icon: '药店', name: '医佳康大药房(创业路店)', distance: 1227, site: '深圳市南山区创业路社区西海湾公寓6-7号' },
          { icon: '药店', name: '医佳康大药房(创业路店)', distance: 1227, site: '深圳市南山区创业路社区西海湾公寓6-7号' },
          { icon: '药店', name: '医佳康大药房(创业路店)', distance: 1227, site: '深圳市南山区创业路社区西海湾公寓6-7号' },
          { icon: '药店', name: '医佳康大药房(创业路店)', distance: 1227, site: '深圳市南山区创业路社区西海湾公寓6-7号' }
        ]
      }
    },
    created() {
    },
    mounted() {
      this.setMapHeight()
      // 地图高度自适应
      window.onresize = () => {
        this.setMapHeight()
      }
    },
    methods: {
      getParams() {
        const params = {
          allx: this.caseTypeList.join(','),
          jglx: this.typeValue,
          yt: this.usageValue,
          qssj: this.$refs.datePicker.value[0],
          zzsj: this.$refs.datePicker.value[1]
        }
        this.params = params
      },
      // 获取行政区数据
      getXzqs() {
        this.getParams()
        getXzqs(this.params).then(res => {
          console.log(res)
          this.communities = res.data
        })
      },
      // 获取街道办数据
      getJdbs() {
        this.getParams()
        getJdbs(this.params).then(res => {
          console.log(res)
          this.communities = res.data
        })
      },
      // 获取项目数据
      getProjects() {
        this.getParams()
        getProjects(this.params).then(res => {
          console.log(res)
  
          this.projectList = res.data
          this.communities = this.projectList
          if (this.isSearchCase) {
            // 需等marker渲染完毕
            this.$nextTick(() => {
              this.handleSearchCase()
            })
          }
  
          // this.setMapCenter()
        }).catch(error => {
          console.log(error)
        })
      },
      // 获取项目数据详情
      getCaseDetailList(xmdm) {
        this.getParams()
        const params = Object.assign({ xmdm }, this.params)
        getCases(params).then(res => {
          console.log(res.data)
          this.projectDetailList = res.data
        })
      },
      // 案例查询
      searchCase() {
        this.searchValue = this.searchValue.trim()
        if (!this.searchValue) {
          this.$message('请输入项目名称！')
          return
        }
        this.isSearchCase = true
        this.zoom = 17
        this.getProjects()
      },
      handleSearchCase() {
        // marker高亮
        this.keyword = this.searchValue
        // 过滤
        this.searchedProList = this.projectList.filter(item => {
          return item.xmmc.includes(this.searchValue)
        })

        // 以查询到的marker为中心点
        if (this.searchedProList.length) {
          this.center = { lng: this.searchedProList[0].x, lat: this.searchedProList[0].y }
        } else {
          this.$message('很遗憾, 未能查询到案例！')
          return
        }

        if (this.searchedProList.length === 1) {
          // 显示案例信息卡
          this.handleMarkerClick(...this.searchedProList)
        } else {
          // 显示项目信息卡
          this.isCaseActive = false
          this.isProActive = true
          this.projectDetailList = []
          getProjectList({ xmmc: this.searchValue }).then(res => {
            const data = res.data
            const projectData = this.handleAssignData(data)
            this.projectInfo = projectData
          })
        }
      },
      // 合并project数据(dataproject缺少均价和案例数)
      handleAssignData(data) {
        const projectData = []
        const serchedData = this.searchedProList
        for (let i = 0; i < serchedData.length; i++) {
          let isSameName = false
          for (let j = 0; j < data.length; j++) {
            if (serchedData[i].xmmc === data[j].xmmc) {
              const newData = Object.assign({}, serchedData[i], data[j])
              projectData.push(newData)
              isSameName = true
            }
          }
          // 没有案例的项目不显示
          if (!isSameName) {
            // projectData.push(data[i])
          }
        }
        return projectData
      },
      // 点击card
      handleCardClick(item) {
        this.handleMarkerClick(item)
      },
      // 点击marker
      handleMarkerClick(item) {
        if (this.zoom > 15) {
          this.isCaseActive = true
          this.isProActive = false
          this.projectData = item
          this.getCaseDetailList(item.xmdm)
        } else if (this.zoom > 13 && this.zoom < 16) {
          this.zoom += 3
        } else {
          this.zoom += 2
        }
      },
      // 重置所有marker
      handleCancleActive() {
        const caseOverlayList = this.$refs.caseOverlay
        caseOverlayList.forEach(item => {
          item.hasClick = false
          item.active = false
        })
      },
      // 1. 我觉得实时查询功能没必要去掉-用户切换下拉框选项时能实时看到结果，查询只是用来查询项目的（精确查找或模糊查找）
      // 2. 另外，marker的显示也可以保留（链家上也是这种效果）-你说的只显示查询到的，当前突出显示（如果是模糊查询，应该不存在当前一说吧）
      // 价格类型改变
      handleTypeChange(value) {
        if (value === '价格') {
          this.caseTypes = ['交易', '挂牌', '估价', '调查']
        } else {
          this.caseTypes = ['交易', '挂牌', '调查']
        }
        this.getDataByZoom()
      },
      // 价格类型值改变
      handleTypeValueChange(value) {
        if (!value.length) {
          return
        } else {
          this.caseTypeList = value
        }
        this.getDataByZoom()
      },
      handleUsageChange(value) {
        this.usageValue = value
        this.getDataByZoom()
      },
      handleDateChange(value) {
        this.getDataByZoom()
      },
      // 点击案例信息卡控件
      handleControlClick() {
        this.isCaseActive = !this.isCaseActive
      },
      // 项目
      handleProControlClick() {
        this.isProActive = !this.isProActive
      },
      // 点击案例详情
      onDetailClick() {
        let proData, params
        // 获取最新params
        this.getParams()
        if (this.projectData) {
          params = Object.assign({}, this.params, {
            xmdm: this.projectData.xmdm
          })
          proData = Object.assign({}, this.projectData, {
            typeValue: this.typeValue,
            caseTypeList: this.caseTypeList,
            params: params
          })
          localStorage.setItem('proData', JSON.stringify(proData))
        }
        this.$router.push({ name: 'CaseDetail' })
      },
      addId(list) {
        list = list.map((item, index) => {
          item.id = index + 1
          return item
        })
      },
      // 显示所有行政区划
      showAll() {
        if (this.regionList.length < 2) {
          this.isShowBoundary = true
          this.regionList = ['宝安区', '南山区', '福田区', '罗湖区', '深圳市龙华区', '深圳市龙岗区']
        } else {
          this.zoom = 17
          this.isShowBoundary = false
          this.regionList = []
        }
      },
      // 显示当前边界
      showBoundary(name) {
        this.isShowBoundary = true
        this.regionList = new Array(name)
      },
      hideBoundary() {
        this.isShowBoundary = false
      },
      mapReady() {
        // this.setMapCenter()
      },
      getDataByZoom() {
        if (this.zoom > 15) {
          this.getProjects()
        } else if (this.zoom > 13 && this.zoom < 16) {
          this.getJdbs()
        } else {
          this.getXzqs()
        }
      },
      // 根据zoom的改变,请求不同的数据
      zoomChange({ type, target }) {
        this.zoom = target.Oa
        console.log(this.zoom)
        if (this.zoom > 15) {
          this.getProjects()
        } else if (this.zoom > 13 && this.zoom < 16) {
          this.getJdbs()
        } else {
          // 初始化请求(放在created里的话，地图未初始化))
          this.getXzqs()
        }
      },
      setMapHeight() {
        const clientHeight = document.documentElement.clientHeight
        const topHeight = this.$refs.searchTop.offsetHeight + 50
        if (this.$refs.baiduMap) {
          this.$refs.baiduMap.$el.style.height = this.$refs.proList.$el.style.height = this.$refs.proDetailList.style.height = clientHeight - topHeight + 'px'
        }
      },
      // 设置地图中心点
      setMapCenter() {
        const totalX = this.projectList.reduce((total, item) => {
          return total + (+item.x)
        }, 0)
        const totalY = this.projectList.reduce((total, item) => {
          return total + (+item.y)
        }, 0)
        const averageX = (totalX / this.projectList.length)
        const averageY = (totalY / this.projectList.length)
        this.center = { lng: averageX, lat: averageY }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .caseSearch {
    margin-bottom: 0;
    .search-top {
      background: #eef5f9;
      overflow: hidden;
      .el-row {
        margin: 10px;
        background: #fff;
        div:first-child {
          input::-webkit-input-placeholder {
            color: #000;
          }
        }
        .fr {
          float: right;
        }
      }
      .btn {
        overflow: hidden;
        padding: 10px 0 10px 10px;
        span {
          &:nth-child(1) {
            float: left;
          }
          &:nth-child(2) {
            float: right;
            margin-right: 10px;
          }
          .el-button {
            border-radius: 0;
            margin-left: 0;
          }
        }
      }
    }
    .bm-view {
      width: 100%;
      .itemBox {
        padding: 10px 0;
        color: #394043;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          background: rgb(246, 246, 246);
        }
        span {
          &:nth-child(2) {
            display: inline-block;
            width: 170px;
            margin-left: 10px;
            font-weight: bold;
          }
          &:nth-child(4) {
            font-weight: bold;
          }
          &:nth-child(5) {
            display: block;
            margin-left: 30px;
            margin-top: 10px;
            color: #9c9fa1;
          }
        }
      }
    }
    .project-list {
      position: absolute;
      right: -30%;
      bottom: 0;
      width: 30%;
      min-width: 400px;
      transition: right .5s;
      background: #fff;
      border-radius: 25px 0px 0px 25px;
      &.active {
        right: 0;
      }
      .proControl {
        position: absolute;
        left: -30px;
        top: 50%;
        width: 30px;
        height: 50px;
        background-color: #fff;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        box-shadow: 0 0 2px rgba(0,0,0,0.3);
        line-height: 50px;
        text-align: center;
        transform: translateY(-25px);
      }
    }
    .project-detail-list {
      position: absolute;
      right: -400px;
      bottom: 0;
      width: 400px;
      height: 728px;
      padding: 15px 0 15px 15px;
      transition: right .5s;
      background: #fff;
      &.active {
        right: 0;
      }
      .control {
        position: absolute;
        left: -30px;
        top: 50%;
        width: 30px;
        height: 50px;
        background-color: #fff;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        box-shadow: 0 0 2px rgba(0,0,0,0.3);
        line-height: 50px;
        text-align: center;
        transform: translateY(-25px);
      }
      .base_info {
        padding: 10px 22px;
        border-bottom: 1px solid #eee;
        .name {
          font-size: 24px;
          span:first-child {
            color: #011938;
          }
          span:last-child {
            float: right;
            color: red;
          }
        }
        .year {
          margin-top: 20px;
          font-size: 14px;
          span:first-child {
            float: left;
            color: #011938;
          } 
          span:last-child {
            float: right;
            color: #409EFF;
            cursor: pointer;
          }
        }
      }
      .detail-containner {
        width: 100%;
        height: 90%;
        margin-top: 20px;
        overflow: auto;
        .detail_item {
          margin: 15px 0 20px 0;
          overflow: hidden;
          .detail-top {
            margin-bottom: 5px;
            span {
              margin-right: 15px;
              color: #011938;
              font-size: 16px;
            }
            span:nth-child(1) {
              display: inline-block;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background-color: #409EFF;
            }
            span:nth-child(2) {
              font-size: 20px
            }
            span:nth-child(3) {
              font-weight: bold;
            }
            span:nth-child(4) {
              float: right;
              color: red
            }
          }
          .detail-bottom {
            float: right;
            width: 96%;
            padding: 10px 15px;
            border-radius: 20px 0px 0px 20px;
            background-color: #eef5f9;
            div {
              margin-bottom: 5px
              span {
                margin-right: 15px;
                color: #011938;
                font-size: 16px;
              }
              span:last-child {
                float: right;
              }
            }
          }
        }
      }
    }
  }
</style>

<style>
  /* elementUi 某些样式覆盖：去掉style的scoped, 前面加上父级class（防止污染全局） */
  .search-top .el-range-separator {
    padding: 0 15px
  }
</style>





