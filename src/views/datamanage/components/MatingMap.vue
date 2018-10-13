<template>
    <div>
        <baidu-map class="bm-view" ref="baiduMap" :center="center" :zoom="zoom" :map-click="false" :scroll-wheel-zoom="true" >
            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP', 'BMAP_PERSPECTIVE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
            <bm-panorama anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-panorama>
            <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width: 0, height: 0}" @click.native.stop>
            </bm-control>
         
        <MatingOverlay v-for="item in showList" :key="item.id"
                   :position="{lng: item.x, lat: item.y}"
                   :data="item"
                   :showkey='showkey'
                   :activeValue="searchValue"
      ></MatingOverlay>
        </baidu-map>
        <div class="mating" ref="mating">
            <el-tabs type="border-card" @tab-click="tabClick">
                <el-tab-pane label="楼栋" >
                    <div v-for="item in buildingsList" class="itemBox" :key="item.lddm">
                        <span>
                            <svg-icon icon-class="中学"></svg-icon>
                        </span>
                        <span>{{item.ldmc}}</span>
                        <span></span>
                        <span></span>
                        <span>{{item.pgdj}}元/平方米&nbsp;&nbsp;|&nbsp;&nbsp;{{item.jgrq }}&nbsp;&nbsp;|&nbsp;&nbsp;{{item.hgyt}}</span>                         
                    </div>
                </el-tab-pane>
                <el-tab-pane label="组别" >
                   <div v-for="item in groupList" class="itemBox" :key="item.xmdm">
                        <span>
                            <svg-icon icon-class="中学"></svg-icon>
                        </span>
                        <span>{{item.xmmc}}</span>
                        <span>{{item.xdjl}}米</span>
                        <span></span>
                        <span>{{item.xmzl}}</span>  
                         <span>{{item.pgjg}}元/平方米&nbsp;&nbsp;|&nbsp;&nbsp;{{item.jgrq }}&nbsp;&nbsp;|&nbsp;&nbsp;{{item.hgyt}}</span>                                                
                    </div>
                </el-tab-pane>
                <el-tab-pane label="交通" >
                    <el-tabs @tab-click="tabClick">
                        <el-tab-pane label="地铁">
                            <div v-for="item in subway" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon icon-class="subway"></svg-icon>
                                </span>
                                <span>{{item.poi_name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.address}}</span>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="公交">
                            <div v-for="item in bus" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon icon-class="bus"></svg-icon>
                                </span>
                                <span>{{item.poi_name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.address}}</span>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="景观">
                     <div v-for="item in landscape " class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon icon-class="幼儿园"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                </el-tab-pane>
                <el-tab-pane label="生活">
                    <el-tabs @tab-click="tabClick">
                        <el-tab-pane label="菜场">
                            <div v-for="item in primarySchool" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon :icon-class="item.icon"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="超市">
                            <div v-for="item in highSchool" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon :icon-class="item.icon"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="幼儿园">
                            <div v-for="item in kindergarten" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon icon-class="幼儿园"></svg-icon>
                                </span>
                                <span>{{item.poi_name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.address}}</span>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="医院">
                            <div v-for="item in university" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon :icon-class="item.icon"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="银行">
                            <div v-for="item in university" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon :icon-class="item.icon"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="娱乐">
                    <el-tabs @tab-click="tabClick">
                        <el-tab-pane label="商场">
                            <div v-for="item in hospital" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon :icon-class="item.icon"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="购物中心">
                            <div v-for="item in chemistShop" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon :icon-class="item.icon"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="电影院">
                            <div v-for="item in chemistShop" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon :icon-class="item.icon"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="公园">
                            <div v-for="item in chemistShop" class="itemBox" :key="item.id">
                                <span>
                                    <svg-icon :icon-class="item.icon"></svg-icon>
                                </span>
                                <span>{{item.name}}</span>
                                <span></span>
                                <span>{{item.distance}}米</span>
                                <span>{{item.site}}</span>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
            </el-tabs>

        </div>
    </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/Map/Map'
import MatingOverlay from '@/views/datamanage/components/MatingOverlay'
import ProjectList from '@/views/casemanage/components/ProjectList'
import DatePicker from '@/views/pricereassess/components/DateTimePicker'
import {
  projectBuildings, GetSameGroup
} from '@/api/project'
import {
  GetspaceMatching
} from '@/api/space'
export default {
  components: { BaiduMap, ProjectList, DatePicker, MatingOverlay },
  props: {
    xmdm: {
      type: String,
      default: ''
    },
    yt: {
      type: String,
      default: '住宅'
    },
    x: {
      type: Number,
      default: 113.939897
    },
    y: {
      type: Number,
      default: 22.519751
    }
  },
  data() {
    return {
      showkey: 'xmmc',
      showList: [],
      buildingsList: [],
      groupList: [],
      searchValue: '',
      zoom: 18,
      center: {
        lng: this.x, lat: this.y
      },
      typeValue: '价格',
      keyword: '',
      projectList: [],
      communities: [],
      subway: [],
      bus: [],
      landscape: [],
      kindergarten: [],
      primarySchool: [
        {
          icon: '小学',
          name: '南油小学(新校区)',
          distance: 607,
          site: '深圳市南山区南光路106号'
        },
        {
          icon: '小学',
          name: '南油小学(新校区)',
          distance: 607,
          site: '深圳市南山区南光路106号'
        },
        {
          icon: '小学',
          name: '南油小学(新校区)',
          distance: 607,
          site: '深圳市南山区南光路106号'
        },
        {
          icon: '小学',
          name: '南油小学(新校区)',
          distance: 607,
          site: '深圳市南山区南光路106号'
        }
      ],
      highSchool: [
        {
          icon: '中学',
          name: '学府中学',
          distance: 1343,
          site: '深圳市南山区商业文化中心区海德一道113号'
        },
        {
          icon: '中学',
          name: '学府中学',
          distance: 1343,
          site: '深圳市南山区商业文化中心区海德一道113号'
        },
        {
          icon: '中学',
          name: '学府中学',
          distance: 1343,
          site: '深圳市南山区商业文化中心区海德一道113号'
        },
        {
          icon: '中学',
          name: '学府中学',
          distance: 1343,
          site: '深圳市南山区商业文化中心区海德一道113号'
        }
      ],
      university: [
        {
          icon: '大学',
          name: '深圳大学',
          distance: 1420,
          site: '广东省深圳市南山区南海大道3688号'
        },
        {
          icon: '大学',
          name: '深圳大学',
          distance: 1420,
          site: '广东省深圳市南山区南海大道3688号'
        },
        {
          icon: '大学',
          name: '深圳大学',
          distance: 1420,
          site: '广东省深圳市南山区南海大道3688号'
        },
        {
          icon: '大学',
          name: '深圳大学',
          distance: 1420,
          site: '广东省深圳市南山区南海大道3688号'
        }
      ],
      hospital: [
        {
          icon: '医院',
          name: '深圳市第六人民医院',
          distance: 910,
          site: '深圳市南山区桃园路89号'
        },
        {
          icon: '医院',
          name: '深圳市第六人民医院',
          distance: 910,
          site: '深圳市南山区桃园路89号'
        },
        {
          icon: '医院',
          name: '深圳市第六人民医院',
          distance: 910,
          site: '深圳市南山区桃园路89号'
        },
        {
          icon: '医院',
          name: '深圳市第六人民医院',
          distance: 910,
          site: '深圳市南山区桃园路89号'
        }
      ],
      chemistShop: [
        {
          icon: '药店',
          name: '医佳康大药房(创业路店)',
          distance: 1227,
          site: '深圳市南山区创业路社区西海湾公寓6-7号'
        },
        {
          icon: '药店',
          name: '医佳康大药房(创业路店)',
          distance: 1227,
          site: '深圳市南山区创业路社区西海湾公寓6-7号'
        },
        {
          icon: '药店',
          name: '医佳康大药房(创业路店)',
          distance: 1227,
          site: '深圳市南山区创业路社区西海湾公寓6-7号'
        },
        {
          icon: '药店',
          name: '医佳康大药房(创业路店)',
          distance: 1227,
          site: '深圳市南山区创业路社区西海湾公寓6-7号'
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.getBuilding()
    this.getSameGroup()
    this.getSubway()
    this.setMapHeight()
    // 地图高度自适应
    window.onresize = () => {
      this.setMapHeight()
    }
  },
  methods: {
    tabClick(value) {
      switch (value.label) {
        case '楼栋':
          this.showkey = 'ldmc'
          this.showList = this.buildingsList
          break
        case '组别':
          this.showkey = 'xmmc'
          this.showList = this.groupList
          break
        case '交通':
        case '地铁':
          this.showkey = 'poi_name'
          this.showList = this.subway
          break
        case '公交':
          this.showkey = 'name'
          this.showList = this.bus
          break
        case '景观':
          this.showkey = 'name'
          this.showList = this.landscape
          break
        case '生活':
        case '菜场':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        case '超市':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        case '幼儿园':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        case '医院':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        case '银行':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        case '娱乐':
        case '商场':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        case '购物中心':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        case '电影院':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        case '公园':
          this.showkey = 'name'
          this.showList = this.buildingsList
          break
        default:
          break
      }
    },
    getspaceMatching() {
      var param = { xmdm: this.xmdm, yt: this.yt }
      GetspaceMatching(param).then(response => {
        this.buildingsList = response.data
      })
    },
    // 获取项目下楼栋（即配套的楼栋信息）
    getBuilding() {
      var param = { xmdm: this.xmdm, yt: this.yt }
      projectBuildings(param).then(response => {
        this.buildingsList = response.data
        this.showkey = 'ldmc'
        this.showList = this.buildingsList
      })
    },
    // 获取相同组别的项目（即配套的组别信息）
    getSameGroup() {
      GetSameGroup(this.yt, this.xmdm).then(response => {
        this.groupList = response.data
      })
    },
    // 获取地铁的数据
    getSubway() {
      var param = { subclass: '地铁', x: this.x, y: this.y }
      GetspaceMatching(param).then(response => {
        this.subway = response.data
      })
    },
    // 获取公交数据
    getBus() {
      var param = { subclass: '公交', x: this.x, y: this.y }
      GetspaceMatching(param).then(response => {
        this.bus = response.data
      })
    },
    // 获取幼儿园数据
    getKindergarten() {
      var param = { subclass: '幼儿园', x: this.x, y: this.y }
      GetspaceMatching(param).then(response => {
        this.kindergarten = response.data
      })
    },
    // 获取景观数据
    getLandscape() {
      var param = { subclass: '景观', x: this.x, y: this.y }
      GetspaceMatching(param).then(response => {
        this.landscape = response.data
      })
    },

    setMapHeight() {
      const clientHeight = document.documentElement.clientHeight
      const topHeight = 50
      if (this.$refs.baiduMap) {
        this.$refs.baiduMap.$el.style.height = this.$refs.mating.style.height =
          clientHeight - topHeight + 'px'
      }
    },
    // 设置地图中心点
    setMapCenter() {
      const totalX = this.projectList.reduce((total, item) => {
        return total + +item.x
      }, 0)
      const totalY = this.projectList.reduce((total, item) => {
        return total + +item.y
      }, 0)
      const averageX = totalX / this.projectList.length
      const averageY = totalY / this.projectList.length
      this.center = { lng: averageX, lat: averageY }
    }
  }
}
</script>

<style>
.mating .el-tabs--border-card {
  height: 100%;
}
</style>


<style rel="stylesheet/scss" lang="scss" scoped>
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
     &:nth-child(6) {
      display: block;
      margin-left: 30px;
      margin-top: 10px;
      color: #9c9fa1;
    }
  }
}
.mating {
  position: absolute;
  right: 0px;
  top: 0;
  width: 400px;
  //   height: 728px;

  transition: right 0.5s;
  background: #fff;

  .control {
    position: absolute;
    left: -30px;
    top: 50%;
    width: 30px;
    height: 50px;
    background-color: #fff;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
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
        color: #409eff;
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
          background-color: #409eff;
        }
        span:nth-child(2) {
          font-size: 20px;
        }
        span:nth-child(3) {
          font-weight: bold;
        }
        span:nth-child(4) {
          float: right;
          color: red;
        }
      }
      .detail-bottom {
        float: right;
        width: 96%;
        padding: 10px 15px;
        border-radius: 20px 0px 0px 20px;
        background-color: #eef5f9;
        div {
          margin-bottom: 5px span {
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
</style>






