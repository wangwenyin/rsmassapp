<template>
  <div class="app">
    <div  style="margin:20px">

      <el-row style="background-color: #fff;margin-left:0px;margin-right:0px" >
        <el-col :span="3" >
          <img  src='/src/images/touxiang.jpg' style="width: 150px;margin-top: 9px;margin-left: 50px;">
        </el-col>
        <el-col :span="6">
          <div class="dashboard-container" style="margin-left:70px">
           <div class="dashboard-text">{{name}}</div>
           <div class="dashboard-text" style="width:700px">{{roleName}}</div>
           </div>
        </el-col>
      </el-row>
      <el-row style="margin-left:0px;margin-right:0px">
        <el-col :span="11" >
          <el-card style=" width: 99%;" >
            <div slot="header" class="clearfix">
              <span>我的任务</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <el-table :data="taskList" style="width: 100%;padding-top: 5px;height:280px">
              <el-table-column label="标题" min-width="100">
                <template slot-scope="scope">
                  {{scope.row.title}}
                </template>
              </el-table-column>
              <el-table-column label="名称" width="200" align="center">
                <template slot-scope="scope">
                  {{scope.row.name}}
                </template>
              </el-table-column>
              <el-table-column label="创建时间" width="100" align="center">
                <template slot-scope="scope">
                   {{scope.row.time}}
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <el-card class="box-card"  style="margin-top:8px;width: 99%;">
            <div slot="header" class="clearfix">
              <span>通知公告</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <el-row :gutter="12">
              <el-col >
                <el-table :data="noticesList" style="width: 100%;padding-top: 5px;height:280px">
                  <el-table-column label="标题" min-width="100">
                    <template slot-scope="scope">
                      {{scope.row.title}}
                    </template>
                  </el-table-column>
                  <el-table-column label="内容" width="200" align="center">
                    <template slot-scope="scope">
                      {{scope.row.content}}
                    </template>
                  </el-table-column>
                  <el-table-column label="发布时间" width="100" align="center">
                    <template slot-scope="scope">
                      {{scope.row.time}}
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card"  style="margin-top:8px;width: 99%;">
            <div slot="header" class="clearfix">
              <span>消息动态</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <el-row :gutter="8">
              <el-col  >
                <el-table :data="messagesList" style="width: 100%;padding-top: 15px;height:276px">
                  <el-table-column label="内容" min-width="200">
                    <template slot-scope="scope">
                      {{scope.row.content}}
                    </template>
                  </el-table-column>
                  <el-table-column label="创建时间" width="100" align="center">
                    <template slot-scope="scope">
                      {{scope.row.time}}
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="13" >
          <el-card style=" width: 100%;height:220px">
            <div slot="header" class="clearfix">
              <span>数据看板</span>
            </div>
            <panel-group ></panel-group>
          </el-card>
          <el-row :gutter="4">
            <el-col :xs="24" :sm="24" :lg="13">
              <el-card style=" width: 100%;">
                <div slot="header" class="clearfix">
                  <span>案例数量</span>
                </div>
                <div class="chart-wrapper" >
                  <bar-chart></bar-chart>
                </div>
              </el-card>
            </el-col>
            <el-col :xs="3" :sm="3" :lg="11">
              <el-card style=" width: 100%;">
                <div slot="header" class="clearfix">
                  <span>估价单元数量</span>
                </div>
                <div class="chart-wrapper">
                  <pie-chart></pie-chart>
                </div>
              </el-card> 
            </el-col>
          </el-row> 
          <el-card style=" width: 100%;margin-top:-6px">
            <div slot="header" class="clearfix">
              <span>房价指数</span>
            </div>
            <el-row style="background:#fff;padding:8px 8px 0;margin-bottom:32px;">
              <line-chart ></line-chart>
            </el-row>
          </el-card>
        </el-col>
      </el-row>  
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import PanelGroup from './components/PanelGroup'
const lineChartData = {
  priceIndex: {
    actualData: [120, 82, 91, 154, 162, 140, 145]
  }
}
export default {
  name: 'dashboard',
  components: {
    LineChart,
    PieChart,
    BarChart,
    PanelGroup
  },
  data() {
    return {
      lineChartData: lineChartData.priceIndex,
      taskList: null,
      messagesList: null,
      noticesList: null,
      rolesNames: '',
      roleName: ''
    }
  },
  mounted() {
    this.getTOdoTask()
    this.getRolesName()
  },
  created() {
  },
  methods: {
    getRolesName() {
      for (let i = 0; i < this.rolesName.length; i++) {
        this.rolesNames = this.rolesNames + this.rolesName[i] + '|'
      }
      this.roleName = this.rolesNames.substring(0, this.rolesNames.length - 1)
    },
    getTOdoTask() {
      this.$http.get('src/mock/todoTask.json').then(response => {
        this.taskList = response.data.data
      }, response => {
        console.log('数据加载失败')
      })
      this.$http.get('src/mock/messages.json').then(response => {
        this.messagesList = response.data.data
      }, response => {
        console.log('数据加载失败')
      })
      this.$http.get('src/mock/notices.json').then(response => {
        this.noticesList = response.data.data
      }, response => {
        console.log('数据加载失败')
      })
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles',
      'username',
      'rolesName'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/app.scss";
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 700px;
  }

  .el-card__header {
    padding:8px 20px 3px;
  }
  .dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
