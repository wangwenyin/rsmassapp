<template>
  <div class="app">
    <el-row :gutter="10" class="search-row" style=" margin-left:10px; margin-right: 7px;margin-top: 12px;">
      <el-col :span="2">
        <el-select  placeholder="地楼房" size='small' v-model="value0" multiple >
          <el-option label="土地" value="土地"></el-option>
          <el-option label="项目" value="项目"></el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-select  placeholder="学区" size='small' v-model="value0" multiple >
          <el-option label="初中" value="初中"></el-option>
          <el-option label="小学" value="小学"></el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-select  placeholder="交通" size='small' v-model="value0" multiple >
          <el-option label="地铁" value="地铁"></el-option>
          <el-option label="公交" value="公交"></el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-select  placeholder="配套" size='small' v-model="value0" multiple >
          <el-option label="配套1" value="配套1"></el-option>
          <el-option label="配套2" value="配套2"></el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-select  placeholder="环境" size='small' v-model="value0" multiple >
          <el-option label="环境1" value="环境1"></el-option>
          <el-option label="环境2" value="环境2"></el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-select  placeholder="其他" size='small' v-model="value0" multiple >
          <el-option label="其他1" value="其他1"></el-option>
          <el-option label="其他2" value="其他2"></el-option>
        </el-select>
      </el-col>
      <!-- <el-col :span="22" style="padding-left: 62px;padding-right: 5px;margin-top: 8px;" >
        <el-checkbox-group  v-model="checkList">
          <el-checkbox label="学区" name="学区"></el-checkbox>
          <el-checkbox label="交通" name="交通"></el-checkbox>
          <el-checkbox label="配套" name="配套"></el-checkbox>
          <el-checkbox label="环境" name="环境"></el-checkbox>
          <el-checkbox label="其他" name="其他"></el-checkbox>
          <el-checkbox label="自定义" name="自定义"></el-checkbox>
        </el-checkbox-group>
      </el-col> -->
    </el-row>
    <el-row :gutter="5" style="margin-top: -5px;margin-left: 7px;">
      <el-col >
        <baidu-map class="bm-view" ref="baiduMap"  :center="center" :zoom="zoom"  :map-click="false" :scroll-wheel-zoom="true" >
          <bm-control  anchor="BMAP_ANCHOR_TOP_RIGHT" >
            <el-button plain size="small"   >浏览</el-button>
            <el-button plain size="small"  >全景</el-button>
            <el-button plain size="small" @click="dialogVisible = true"  >查找</el-button>
            <el-button plain size="small" >识别</el-button> 
            <el-button plain size="small"  @click="edit" >编辑</el-button> 
            <el-upload class="upload-demo"  action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList" style="display:inline-block">
              <el-button size="small" type="primary" plain>添加</el-button>
          </el-upload>
          </bm-control>
          <bm-control  anchor="BMAP_ANCHOR_TOP_RIGHT"  :offset="{ height: 40}" v-if="isShow" >
            <el-button plain size="small"  >选择</el-button>
            <el-button plain size="small" @click="addPoint" >点</el-button>
            <el-button plain size="small"  >删除</el-button>
          </bm-control >
          <bm-control  anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{ height: 100}" >
            <table class="table"  v-if="isShowTable">
              <tr class="tr">
                <td class="td"  >
                  <span class="normal" style="text-align:center">图层名称</span>
                </td>
                <td class="td" >
                  <el-input class="noborder" size="small"  value="图层1"  ></el-input>
                </td>
              </tr>
              <tr class="tr">
                <td class="td" >
                  <span class="normal">楼栋ID</span>
                </td>
                <td class="td" >
                  <el-input class="noborder" size="small"  value="12345"  ></el-input>
                </td>
              </tr>
              <tr class="tr">
                <td class="td" >
                  <span class="normal">楼栋名称</span>
                </td>
                <td class="td" >
                  <el-input class="noborder" size="small"  value="天然居"  ></el-input>
                </td>
              </tr>
              <tr class="tr">
                <td class="td" >
                  <span class="normal">总层数</span>
                </td>
                <td class="td" >
                  <el-input class="noborder" size="small"  value="23"  ></el-input>
                </td>
              </tr>
            </table>
          </bm-control>   
          <bml-marker-clusterer :averageCenter="true">
            <bm-marker v-for="marker of markers"  :key="marker.lng"    :dragging="true"  @click="isShowLocation= true"  :position="{lng: marker.lng, lat: marker.lat}"></bm-marker>
          </bml-marker-clusterer>

        </baidu-map>
      </el-col>
    </el-row>
   <!--  <el-row :gutter="10" class="search-row" style=" margin-left:10px; margin-right: 7px;margin-top: 12px;">
      <el-col  style="text-align: center;">
        <el-button type="primary" size="small"  plain>全景</el-button>
        <el-button type="primary" size="small"  @click="dialogVisible = true"   plain>查询</el-button>  
        <el-button type="primary" size="small" plain>识别</el-button>
        <el-button type="primary" size="small" plain  @click="edit" >编辑</el-button>
        <el-upload class="upload-demo"  action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList" style="display:inline-block">
          <el-button size="small" type="primary" plain>添加</el-button>
        </el-upload>
      </el-col>
    </el-row> -->
    <!-- 选择图层对话框 -->
    <el-dialog  :visible.sync="dialogTuCengVisible" style="width:63%">
      <el-row>
        <el-col>
          <el-select  placeholder="请选择图层" size='small'  v-model="value1"  style="margin-left:26px;width:92.5%">
            <el-option label="图层1" value="图层1"></el-option>
            <el-option label="图层2" value="图层2"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button @click="dialogTuCengVisible = false" style="margin-left:366px">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 查询对话框 -->
    <el-dialog title="查询" :visible.sync="dialogVisible" style="width:63%">
      <el-row>
        <el-col>
          <el-select  placeholder="请选择图层" size='small'  v-model="value1"  style="margin-left:26px;width:92.5%">
            <el-option label="图层1" value="图层1"></el-option>
            <el-option label="图层2" value="图层2"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="radio" label="1">
            <el-select  placeholder="所有" size='small' v-model="value2" style="margin-left:0px;width:56%">
              <el-option label="所有" value="所有"></el-option>
              <el-option label="楼栋名称" value="楼栋名称"></el-option>
              <el-option label="楼栋地址" value="楼栋地址"></el-option>
            </el-select>
            <el-input  size="small"  value="天然"  style="width:55.5%;margin-left:20px;" ></el-input>
          </el-radio>
        </el-col>
      </el-row>
      <el-row>   
        <el-col>
          <el-radio v-model="radio"  label="2">
            <span  >X坐标</span>
            <el-input  size="small"  value="天然"  style="width:40%" ></el-input>
            <span style="margin-left:20px">Y坐标</span>
            <el-input  size="small"  value="天然"  style="width:40%" ></el-input>
          </el-radio>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button @click="dialogVisible = false" style="margin-left:366px">取 消</el-button>
          <el-button type="primary" @click="tableVisible = true">确 定</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-table  :data="tableData"  v-if="tableVisible"  border  style="width: 100%">
            <el-table-column label="序号" prop="num" width="180">
            </el-table-column>
            <el-table-column label="名称" prop="name"  width="180">
            </el-table-column>
            <el-table-column  label="操作" width="150">
                <template slot-scope="scope">
                 <div>
                    <el-button size="mini">定位</el-button>
                  </div>
                </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 修改点位置对话框 -->
    <el-dialog title="修改" :visible.sync="isShowLocation" style="width:63%">
      <table class="table" >        
        <tr class="tr">
          <td class="td" >
            <span class="normal">X坐标</span>
          </td>
          <td class="td" >
            <el-input class="noborder" size="small"  value="39.915"  ></el-input>  
          </td>
        </tr>
        <tr class="tr">
          <td class="td" >
            <span class="normal">Y坐标</span>
          </td>
          <td class="td" >
            <el-input class="noborder" size="small"  value="116.404"  ></el-input>
          </td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>
<script>
  import BaiduMap from 'vue-baidu-map/components/Map/Map'
import { BmlMarkerClusterer } from 'vue-baidu-map'
  export default {
    components: { BaiduMap, BmlMarkerClusterer },
    data() {
      return {
        center: '深圳',
        zoom: 12,
        markers: [],
        isShow: false,
        isShowTable: false,
        dialogVisible: false,
        tableVisible: false,
        dialogTuCengVisible: false,
        isShowLocation: false,
        value0: '土地',
        value1: '图层1',
        value2: '楼栋名称',
        radio: '1',
        checkList: [],
        tableData: [{
          num: '1',
          name: '天然居'
        }, {
          num: '2',
          name: '天然大厦'
        }]
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
    beforeRouteUpdate(to, from, next) {
      // react to route changes...
      // don't forget to call next()
      console.log(to)
      console.log(from)
      next()
    },
    methods: {
      setMapHeight() {
        const clientHeight = document.documentElement.clientHeight
        const topHeight = this.$refs.searchTop.offsetHeight + 50
        if (this.$refs.baiduMap) {
          this.$refs.baiduMap.$el.style.height = clientHeight - topHeight + 'px'
        }
      },
      addPoint() {
        const position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
        this.markers.push(position)
        console.log(this.markers)
      },
      edit() {
        // this.dialogTuCengVisible = true
        this.isShow = true
      },
      editProperty() {
        this.isShowLocation = true
      },
      confirm() {
        this.isShowTable = true
        this.dialogTuCengVisible = false
      },
      // 设置地图中心点
      setMapCenter() {
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
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/app.scss";

.search-row {
  margin-right: 10px;
  padding: 10px;
  background: white;
} 
 .el-row {
  margin-bottom: 20px;
  margin-top: 10px;
  height: 100%;
} 


  .bm-view {
      width: 100%; 
      height: 700px;
      }
    
</style>