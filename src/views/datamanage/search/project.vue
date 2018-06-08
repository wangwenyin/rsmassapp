<template>
  <div class="margin60">
     <div id="1f"></div>
     <el-row :gutter="10" >
         <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <Carousel :img="o.img"></Carousel>
         </el-col>
         <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div>
                <div class="bottom30">
                  <span class="title">{{ o.project }} </span>
                  <div class="right">
                    <span>{{ o.region }}</span>&nbsp;&nbsp;|
                    <span>{{ o.street}}</span>&nbsp;&nbsp;|
                    <span>组别{{ o.group}}</span>&nbsp;&nbsp;
                    <el-button type="primary" plain>编辑</el-button>
                  </div>
                </div>
                <div>
                   <el-row>
                      <el-col :span="6"><span class="con">项目编号</span></el-col>
                      <el-col :span="6"><span class="val">{{o.projectId}}</span></el-col>
                      <el-col :span="6"><span class="con">宗地号</span></el-col>
                      <el-col :span="6"><span class="val">{{o.parcel}}</span></el-col>
                   </el-row>
                   <el-row>
                      <el-col :span="6"><span class="con">坐落</span></el-col>
                      <el-col :span="6"><span class="val">{{o.located}}</span></el-col>
                      <el-col :span="6"><span class="con">竣工日期</span></el-col>
                      <el-col :span="6"><span class="val">{{o.completionDate}}</span></el-col>
                   </el-row>
                   <el-row>
                      <el-col :span="6"><span class="con">占地面积</span></el-col>
                      <el-col :span="6"><span class="val">{{o.areaCovered}}</span></el-col>
                      <el-col :span="6"><span class="con">用地面积</span></el-col>
                      <el-col :span="6"><span class="val">{{o.landArea}}</span></el-col>
                   </el-row>
                   <el-row>
                      <el-col :span="6"><span class="con">建筑面积</span></el-col>
                      <el-col :span="6"><span class="val">{{o.builtUpArea}}</span></el-col>
                      <el-col :span="6"><span class="con">总停车位</span></el-col>
                      <el-col :span="6"><span class="val">{{o.totalParkingSpace}}</span></el-col>
                   </el-row>
                  <el-row>
                     <el-col :span="6"><span class="con">总栋数</span></el-col>
                     <el-col :span="6"><span class="val">{{o.buildingNum}}</span></el-col>
                     <el-col :span="6"><span class="con">总户数</span></el-col>
                     <el-col :span="6"><span class="val">{{o.houseNum}}</span></el-col>
                  </el-row>
                  <el-row>
                     <el-col :span="6"><span class="con">开发商</span></el-col>
                     <el-col :span="18"><span class="val">{{o.developers}}</span></el-col>
                  </el-row>
                  <el-row  >
                     <el-col :span="6"><span class="con">物业公司</span></el-col>
                     <el-col :span="18"><span class="val">{{o.property}}</span></el-col>
                  </el-row>
                </div>
            </div>
        </el-col>
 </el-row>
 <div id="2f"></div>
<el-row>
    <span class="title-small">楼栋列表 </span>
</el-row>
<el-row>
  <el-table :data="bulidings" border max-height="350">
     <el-table-column width="50" type="index" label="序号" align="center"></el-table-column>
     <el-table-column prop="building" label="名称"></el-table-column>
     <el-table-column prop="builtUpArea" label="建筑面积"></el-table-column>
     <el-table-column prop="layerNum" label="总层数"></el-table-column>
     <el-table-column  prop="tags" label="用途">
       <template slot-scope="scope">
         <useTag :tags="scope.row.tags" ></useTag>
       </template>
     </el-table-column>
     <el-table-column prop="price" label="评估价"></el-table-column>
     <el-table-column label="备注">
       <template slot-scope="scope">
         <router-link :to="{ name:'building' ,query: { buildingId: scope.row.buildingId } }" target="_blank" >
            <el-button type="text" size="small">详情</el-button>
         </router-link>
       </template>
     </el-table-column>
  </el-table>
</el-row>
 <div id="3f"></div>
<el-row :gutter="10" >
    <div class="title-small">配套和指标因素信息 </div>
</el-row>
<el-row>
 <el-tabs type="border-card"  >
  <el-tab-pane label="住宅">
  <el-row :gutter="10" >
  <el-col :span="8">
     <div class="title-mini" >地理位置</div>
     <p ><span class="con">区域中心距离:</span> 
    <span class="val1"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span></p>
     <p ><span class="con">规划合理性:</span>
      <span class="val1"> <el-rate v-model="value4" :texts="texts"  disabled show-text></el-rate></span>
    </p>
  </el-col>
   <el-col :span="8">
     <p class="title-mini" >交通条件</p>
     <p ><span class="con">地铁便捷程度:</span> <span class="val1"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">公交便捷程度:</span> <span class="val1"><el-rate v-model="value4" :texts="texts"  disabled show-text></el-rate></span></p>
      <p><span class="con">道路通达程度:</span> <span class="val1"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span></p>
  </el-col>
   <el-col :span="8">
     <p class="title-mini" >环境景观</p>
     <p ><span class="con">周边环境:</span> <span class="val1"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">周边环境质量:</span> <span class="val1"><el-rate v-model="value4" :texts="texts"  disabled show-text></el-rate></span></p>
  </el-col>
  </el-row>
  <el-row>
   <el-col :span="8">
     <p class="title-mini" >教育水平</p>
     <p><span class="con">教育设施完备度:</span> <span class="val1"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">小学学区学位:</span> <span class="val1"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">初中学区学位:</span> <span class="val1"><el-rate v-model="value2" :texts="texts"  disabled show-text></el-rate></span></p>
  </el-col>
  <el-col :span="8">
     <p class="title-mini" >配套设施</p>
     <p><span class="con">基础设施完备度:</span> <span class="val1"><el-rate v-model="value4" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">生活设施完备度:</span> <span class="val1"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">休闲娱乐完备度:</span> <span class="val1"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span></p>
  </el-col>
  <el-col :span="8">
     <p class="title-mini" >小区品质</p>
     <p><span class="con">小区规模:</span> <span class="val1"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">建筑年代/新旧程度:</span> <span class="val1"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">物业管理水平:</span> <span class="val1"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">建筑容积率:</span> <span class="val1"><el-rate v-model="value3" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">内部环境质量:</span> <span class="val1"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span></p>
     <p><span class="con">内部设施完备度:</span><span class="val1"> <el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate> </span></p>
     <p><span class="con">停车便捷程度:</span><span class="val1"><el-rate v-model="value5" :texts="texts"  disabled show-text></el-rate></span></p>
 </el-col>
</el-row>
  </el-tab-pane>
  <el-tab-pane label="办公"></el-tab-pane>
  <el-tab-pane label="商业"></el-tab-pane>
</el-tabs>
</el-row>

<el-row >
   <div class="title-small">评估价格 </div>
</el-row>
<el-row>
   <PriceChart></PriceChart>
</el-row>

  <div id="4f"></div>
<el-row :gutter="10" >
         <el-col :span="6"> <span class="project_d">价格地图 </span></el-col>
</el-row>
<el-row>
  <div >
 <PriceMap></PriceMap>
 </div>
</el-row>
<div class="topmenu" ref="topmenu">
<a href="#1f"><el-button type="info">基础信息</el-button></a><a href="#2f"><el-button type="info">楼栋列表</el-button></a><a href="#3f"><el-button type="info">指标因素</el-button></a><a href="#4f"><el-button type="info">价格地图</el-button></a>

</div> </div>
  
</template>
<script>
import PriceChart from '@/views/datamanage/search/components/Chart/PriceChart'
import PriceMap from '@/views/datamanage/search/components/Map/PriceMap'
import Carousel from '@/components/Carousel/index'
import useTag from '@/components/Tag/UseTag'
export default {
  components: { Carousel, PriceMap, useTag, PriceChart },
  data() {
    return {
      o: null,
      bulidings: null,
      texts: ['差', '较差', '一般', '较好', '好'],
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 4,
      value5: 5
    }
  },
  mounted() {
    this.getProject()
    this.getBuilding()
    this.$nextTick(function() {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    onScroll() {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop
      if (scrolled >= 600) {
        this.$refs.topmenu.style.display = 'block'
      } else {
        this.$refs.topmenu.style.display = 'none'
      }
    },
    getProject() {
      this.$http.get('src/mock/project.json').then(response => {
        response.data.data.forEach(element => {
          if (element.projectId === this.$route.query.projectId) { this.o = element }
        })
      }, response => {
        console.log('项目数据加载失败')
      })
    },
    getBuilding() {
      var list1 = []
      this.$http.get('src/mock/building.json').then(response => {
        response.data.data.forEach(element => {
          if (element.projectId === this.$route.query.projectId) { list1.push(element) }
        })
      }, response => {
        console.log('楼栋数据加载失败')
      })
      this.bulidings = list1
    }
  }
}
</script>
<style>
  
</style>