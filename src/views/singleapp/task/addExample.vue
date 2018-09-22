<template>
  <div class="app">
    <div class="caseSearch" @click="isShowMating=false" v-if="stept===1">
      <div class="search-top" ref="searchTop">
        <el-row :gutter="10" style="padding: 10px;
      background: #fff;">
          <el-col :span="3">
            <el-select v-model="caseType" @change="handleTypeChange" placeholder="请选择案列类型" clearable size="small">
              <el-option
                v-for="item in caseTypes"
                :key="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
            <el-col :span="3">
            <el-select v-model="typeValue" @change="handleTypeChange" placeholder="请选择类型值" clearable size="small">
              <el-option
                v-for="item in typeValues"
                :key="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-select v-model="usageValue" placeholder="请选择物业用途" clearable size="small">
              <el-option v-for="item in usages" :key="item" :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <date-picker @dateChange="handleDateChange" :noDefaultValue="noDefaultValue" ref="datePicker"></date-picker>
          </el-col>
          <el-col :span="1.2" class="fr">
            <el-button type="primary" size="small" @click="searchCase">查询</el-button>
          </el-col>
          <el-col :span="4" class="fr">
            <el-input placeholder="请输入项目名称" size="small" v-model="searchValue" clearable>
            </el-input>
          </el-col>
        </el-row>
        <div class="btn">
          <span>
            <el-button type="primary" size="small" @click="handle">添加案例</el-button>
            <el-button type="primary" size="small">导出案例</el-button>
          </span>
          <span>
            <el-button :type="mapType" size="small" @click="showMap">地图模式</el-button>
            <el-button :type="listType" size="small" @click="showList">列表模式</el-button>
          </span>
        </div>
      </div>
      <baidu-map class="bm-view" ref="baiduMap" v-if="isShow" :center="center" :zoom="zoom" @zoomend="zoomChange" :map-click="false" :scroll-wheel-zoom="true" @ready="mapReady">
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP', 'BMAP_PERSPECTIVE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        <bm-panorama anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-panorama>
        <bm-control anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{width: 10, height: 40}">
          <el-input v-model="keyword" size="mini" clearable placeholder="请输入关键词"></el-input>
        </bm-control>
        <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
        <div v-if="isShowBoundary" v-for="regionName in regionList" :key="regionName.id">
          <bm-boundary :name="regionName" :strokeWeight="2" strokeColor="#409EFF" :strokeOpacity="0.9" :fillOpacity="0.1" fillColor="#409EFF"></bm-boundary>
        </div>
        <SingleappOverlay v-for="item in communities" :key="item.xmdm"
          :position="{lng: item.x, lat: item.y}"
          :data="item"
          :selectable=true 
          @add="add"
          :params="params"
          :zoom="zoom"
          @over="showBoundary"
          @out="hideBoundary"
          ref="caseOverlay"
        ></SingleappOverlay>
      </baidu-map>
      <case-list v-else :params="params" :tableData="searchedCaseList" ref="caseList" :compareList="compareList" @add="add" :selectable=true class="caseList" ></case-list>
      <div class='btnShow'>
          <el-button type="primary" size="small" icon="el-icon-menu" @click.native.stop="isShowMating = !isShowMating">可比实例</el-button>
        </div>
     <div v-if="isShowMating"  class="dialog">
          <div style=" background: white;width:105%">
            <el-row>
              <div style="font-size: 15px;margin-left:2%;margin-top: 1%; margin-bottom: 1%;color: #409EFF;">可比实例</div>
            </el-row>
            <el-row style="border: 1px solid #409EFF;">
            </el-row>
            <el-row :gutter="1">
              <el-col :span="4" v-for="i in 5" :key="i">
                <el-card class="box-card" v-if="i-1<compareList.length">
                  <div style="font-size: 15px;margin-left:-2%;font-weight: bold;margin-top: 5%; margin-bottom: 15%;"> {{compareList[i-1].prop_name}} </div>
                  <div style="font-size: 5px;margin-left:0%; margin-bottom: 5%;"> 建筑面积：{{compareList[i-1].built_area}} </div>
                  <div style="font-size: 5px;margin-left:0%; margin-bottom: 5%;">交易时间：{{compareList[i-1].sale_date|formatDate}} </div>
                  <span style="font-size: 8px;margin-left:0%; color:red ;margin-bottom: 5%;">￥{{compareList[i-1].sale_price}}元/平方米</span>
                 <span> <el-button style=" float: right;" size="mini" type="text" @click.stop="del(compareList[i-1])">删除</el-button></span>
                </el-card>
                <el-card class="box-card" v-else>
                  <div>
                    <div style="font-size: 6px;margin-left:10%; margin-top:28%;margin-bottom:36%" click.stop>{{i}}您还可以继续添加</div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="4" class="col">
                <el-card class="box-card">
                  <div class="text">
                    <el-button type="primary" size="small" style="margin-left:20%;margin-top:10%;" @click="setstept(2)">价格评估</el-button>
                    <el-button icon="el-icon-delete" size="small" style="margin-left:20%;margin-top:30%;margin-bottom:18%" @click.stop="delall()">清空</el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div> 
    </div>
    <Price v-if="stept===2" @setstept="setstept" :taskid="this.$route.query.task_id" :num="compareList.length" :isIncome="isIncome?true:false"></Price>
  </div>
</template>
<script>
import { getXzqs, getProjects, getJdbs } from '@/api/caseSearch'
import BaiduMap from 'vue-baidu-map/components/Map/Map'
import SingleappOverlay from '@/views/singleapp/components/SingleappOverlay'
import DatePicker from '@/views/pricereassess/components/DateTimePicker'
import CaseList from '@/views/singleapp/components/CaseList'
import Price from '@/views/singleapp/task/appraisedPrice'
import CompareList from '@/views/singleapp/components/CompareList'
import { getcomparable, addcomparable, delcomparable } from '@/api/singleapp/example'
import { formatDate } from '@/utils/date'

export default {
  components: { BaiduMap, SingleappOverlay, DatePicker, CaseList, Price, CompareList },
  data() {
    return {
      stept: 1,
      isIncome: this.$route.query.isIncome,
      center: { lng: 113.937893, lat: 22.517952 },
      zoom: 17,
      mapWidth: document.body.clientWidth - 180,
      mapType: 'primary',
      listType: 'plain',
      caseValue: '',
      caseType: '',
      usageValue: '',
      typeValue: '',
      typeValues: ['价格', '租金'],
      caseTypes: ['交易', '挂牌', '估价', '调查'],
      usages: ['住宅', '商业', '办公', '工业'],
      isShow: true,
      noDefaultValue: false,
      isShowMating: false,
      isShowBoundary: false,
      regionList: [],
      flag: false,
      keyword: '',
      searchValue: '',
      caseList: [],
      searchedCaseList: [],
      communities: [],
      compareList: [],
      sale_idList: [],
      // 需要后台给对应评估分区的pathList,处理成pathLists
      pathList: [
        { lng: 113.933404, lat: 22.526177 },
        { lng: 113.946052, lat: 22.514959 },
        { lng: 113.960425, lat: 22.527913 },
        { lng: 113.94059, lat: 22.533254 }
      ]
    }
  },
  created() {
    this.caseType = this.caseTypes[0]
    this.typeValue = this.typeValues[0]
    this.usageValue = this.usages[0]
    this.$nextTick(() => {
      this.getProjects()
    })
  },
  mounted() {
    this.setMapHeight()
    // 地图大小自适应
    window.onresize = () => {
      this.setMapHeight()
      this.mapWidth = document.body.clientWidth - 180
    }
    this.GetcompareList()
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    next()
  },
  methods: {
    GetcompareList() {
      getcomparable(this.$route.query.task_id).then(response => {
        this.compareList = response.data
        this.sale_idList = []
        this.compareList.forEach(element => {
          this.sale_idList.push(element.sale_id)
        })
      })
    },
    add(val) {
      this.isShowMating = true
      if (this.compareList.length > 4) {
        this.$message({ message: '最多可添加5个可比实例', type: 'warning' })
      } else if (this.sale_idList.indexOf(val.aldm) === -1) {
        var data = {
          task_id: this.$route.query.task_id,
          prop_name: val.wymc,
          prop_id: val.wydm,
          prop_type: val.wylx,
          built_area: val.jzmj,
          sale_id: val.aldm,
          sale_price: val.dj,
          sale_date: val.sj,
          pay_way: val.fklx,
          sale_pref: val.jyqk,
          pay_tax: val.sfcdf
        }

        addcomparable(data).then(response => {
          if (response.code === 200) {
            this.$message({ message: '添加成功', type: 'success' })
            this.GetcompareList()
          } else {
            this.$message({ message: response.msg, type: 'error' })
          }
        })
      } else {
        this.$message({
          message: '已经添加了该实例，请不要重复添加',
          type: 'warning'
        })
      }
    },
    del(val) {
      delcomparable(this.$route.query.task_id, val.sale_id).then(response => {
        if (response.code === 200) {
          this.$message({ message: '删除成功', type: 'success' })
          this.GetcompareList()
        } else {
          this.$message({ message: response.msg, type: 'error' })
        }
      })
    },
    delall() {
      this.sale_idList.forEach(element => {
        delcomparable(this.$route.query.task_id, element).then(response => {
          if (response.code === 200) {
            this.$message({ message: '删除成功', type: 'success' })
            this.GetcompareList()
          } else {
            this.$message({ message: response.msg, type: 'error' })
          }
        })
      })
    },
    setstept(val) {
      if (val === 1) {
        this.stept = val
        // 解决切换过来,地图没有高度的问题
        if (this.stept === 1) {
          this.$nextTick(() => {
            this.setMapHeight()
          })
        }
      } else {
        if (this.compareList.length < 3) {
          alert('请选择3-5个可比实例')
        } else {
          this.stept = val
        }
      }
    },
    handle() {
      this.$router.push({ path: '/case/create' })
    },
    handleTypeChange(value) {
      this.caseType = value
      this.getProjects()
    },
    handleUsageChange(value) {
      this.usageValue = value
      this.getProjects()
    },
    handleDateChange(value) {
      // 日期 date string 都行
      this.getProjects()
    },
    addId(list) {
      list = list.map((item, index) => {
        // map本身不改变原数组, 但由于item是引用类型,下面的操作会改变原来的item
        item.id = index + 1
        return item
      })
    },
    getProjects() {
      const params = {
        allx: this.caseType + this.typeValue,
        yt: this.usageValue,
        qssj: this.$refs.datePicker.value[0],
        zzsj: this.$refs.datePicker.value[1]
      }
      this.params = params
      getXzqs(params).then(res => {
        console.log(res)
      })
      getJdbs(params).then(res => {
        console.log(res)
      })
      getProjects(params).then(res => {
        console.log(res)

        this.caseList = res.data
        this.communities = this.caseList

        // 在异步回调里操作异步数据
        // this.addId(this.caseList)
        // this.setMapCenter()
      }).catch(error => {
        console.log(error)
      })
    },
    showAll() {
      if (this.regionList.length < 2) {
        this.zoom = 13
        this.isShowBoundary = true
        this.regionList = [
          '宝安区',
          '南山区',
          '福田区',
          '罗湖区',
          '深圳市龙华区',
          '深圳市龙岗区'
        ]
      } else {
        this.zoom = 17
        this.isShowBoundary = false
        this.regionList = []
      }
    },
    showBoundary(name) {
      this.isShowBoundary = true
      this.regionList = new Array(name)
    },
    hideBoundary() {
      this.isShowBoundary = false
    },
    searchCase() {
      const searchValue = this.searchValue.trim()
      if (!this.caseType || !this.usageValue) {
        this.$message('请选择案例类型和用途！')
        return
      }
      if (!searchValue) {
        return
      }
      this.searchedCaseList = this.caseList.filter(item => {
        return item.xmmc.indexOf(searchValue) > -1
      })
      this.addId(this.searchedCaseList)

      // 点击搜索后让对应marker高亮
      const caseOverlayList = this.$refs.caseOverlay
      for (let i = 0; i < caseOverlayList.length; i++) {
        caseOverlayList[i].change(searchValue)
      }

      this.searchedCaseList.length ? (this.center = { lng: this.searchedCaseList[0].x, lat: this.searchedCaseList[0].y }) : this.$message('很遗憾, 未能查询到案例！')
    },
    mapReady() {
      // this.setMapCenter()
      if (!this.searchValue.trim()) {
        return
      }
      const caseOverlayList = this.$refs.caseOverlay
      for (let i = 0; i < caseOverlayList.length; i++) {
        caseOverlayList[i].change(this.searchValue.trim())
      }
    },
    zoomChange(type) {
      this.zoom = type.target.Oa
      if (this.zoom > 15) {
        this.communities = this.caseList
      } else if (this.zoom > 13 && this.zoom < 16) {
        this.communities = [
          { id: 1, region: '前海', averagePrice: 67000, num: 3326, x: 113.891176, y: 22.530257 },
          { id: 2, region: '南山中心', averagePrice: 83000, num: 4396, x: 113.944234, y: 22.526073 },
          { id: 3, region: '后海', averagePrice: 77000, num: 3167, x: 113.947799, y: 22.523707 },
          { id: 4, region: '深圳湾', averagePrice: 62000, num: 3234, x: 113.95595, y: 22.508675 },
          { id: 5, region: '南头', averagePrice: 61000, num: 1380, x: 113.925291, y: 22.542096 },
          { id: 6, region: '科技园', averagePrice: 51000, num: 6392, x: 113.953195, y: 22.562101 }
        ]
      } else {
        this.communities = [
          { id: 1, region: '宝安区', averagePrice: 57000, num: 2326, x: 113.839257, y: 22.657189 },
          { id: 2, region: '南山区', averagePrice: 73000, num: 3396, x: 113.937118, y: 22.539569 },
          { id: 3, region: '福田区', averagePrice: 67000, num: 4167, x: 114.052344, y: 22.555703 },
          { id: 4, region: '罗湖区', averagePrice: 52000, num: 4234, x: 114.146056, y: 22.569587 },
          { id: 5, region: '深圳市龙华区', averagePrice: 51000, num: 2380, x: 114.036822, y: 22.684342 },
          { id: 6, region: '深圳市龙岗区', averagePrice: 41000, num: 7392, x: 114.173651, y: 22.654995 }
        ]
      }
    },
    showMap() {
      this.isShow = true
      this.mapType = 'primary'
      this.listType = 'plain'
      // 解决从列表模式切换过来,地图没有高度的问题
      this.$nextTick(() => {
        this.setMapHeight()
      })
    },
    showList() {
      this.isShow = false
      this.mapType = 'plain'
      this.listType = 'primary'
    },
    regain() {
      if (!this.flag) {
        this.$refs.baiduMap.$el.style.width = '70%'
      } else {
        this.$refs.baiduMap.$el.style.width = '100%'
      }
      this.flag = !this.flag
    },
    setMapHeight() {
      const clientHeight = document.documentElement.clientHeight
      const topHeight = this.$refs.searchTop.offsetHeight + 96
      if (this.$refs.baiduMap) {
        this.$refs.baiduMap.$el.style.height = clientHeight - topHeight + 'px'
      }
      // 由于style中 elementui 样式无法生效
      document.querySelector('.el-range-separator').style.width = '8%'
    },
    setMapCenter() {
      // mapReady里无法获取caseList
      const totalX = this.caseList.reduce((total, item) => {
        return total + (+item.x)
      }, 0)
      const totalY = this.caseList.reduce((total, item) => {
        return total + (+item.y)
      }, 0)
      const averageX = (totalX / this.caseList.length)
      const averageY = (totalY / this.caseList.length)
      this.center = { lng: averageX, lat: averageY }
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
.caseSearch {
  position: relative;
  padding: 0 10px 10px;
  .dialog {
    position: absolute;
    left: 100px;
    bottom: 50px
  }
  .btnShow {
    position: absolute;
    right: 20px;
    bottom: 12px;
    z-index: 999999
  }
  .search-top {
    overflow: hidden;
    .el-row {
      div:first-child {
        input::-webkit-input-placeholder {
          color: #000;
        }
      }
      .fr {
        float: right;
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background: #797979;
      margin: 10px 0 5px 0;
    }
    .btn {
      overflow: hidden;
      padding: 10px 0 10px 10px;
      margin-top: 10px;
      background: #fff;
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
    transition: 0.2s width;
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
  .caseList {
    background: #fff;
  }
  .box-card{
    height: 157px
  }
}
</style>





