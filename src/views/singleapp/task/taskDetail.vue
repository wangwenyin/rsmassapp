<template>
  <div class="app">
    <div class="margin10">
      <el-button size="small" class="btn-topz" type="text" @click="onDelClick">删除</el-button>
      <el-tabs v-model="active" type="card">
        <el-tab-pane label="基本信息" name="jbxx">
          <div>
            <el-row>
              <el-col :span="24" style="margin-top: 5px;">
                <span class="title">基本信息</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <span class="normal">任务编号</span>
                <span class="val">{{form.id}}</span>
              </el-col>
              <el-col :span="8">
                <span class="normal">负责人</span>
                <span class="val">{{form.creator}}</span>
              </el-col>
              <el-col :span="8">
                <span class="normal">创建时间</span>
                <span class="val">{{form.create_time| formatDate}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <span class="normal">物业名称</span>
                <span class="val">{{form.prop_name}}</span>
              </el-col>
              <el-col :span="8">
                <span class="normal">参与人员</span>
                <span class="val">{{form.members}}</span>
              </el-col>
              <el-col :span="8">
                <span class="normal" v-if="form.status==='任务完成'">完成时间</span>
                <span class="normal" v-else>预计完成时间</span>
                <span class="val">{{form.plan_time| formatDate}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <span class="normal">物业类型</span>
                <span class="val">{{form.prop_type}}</span>
              </el-col>
              <el-col :span="8">
                <span class="normal">物业用途</span>
                <span class="val">{{form.prop_usage}}</span>
              </el-col>
              <el-col :span="8">
                <span class="normal">物业地址</span>
                <span class="val">{{form.district+form.address}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <span class="normal">估价方法</span>
                <span class="val">{{form.method}}</span>
              </el-col>
              <el-col :span="8">
                <span class="normal">估价目的</span>
                <span class="val">{{form.purpose}}</span>
              </el-col>
              <el-col :span="8">
                <span class="normal">价值时点</span>
                <span class="val">{{form.value_date| formatDate}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <span class="normal">委托人</span>
                <span class="val">{{form.client}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <span class="normal" style="margin-top:18px;margin-bottom:20px">备注</span>
                <span class="val">{{form.note}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" style="margin-top: 5px;">
                <span class="title">任务进度</span>
                <span class="val">{{form.status}}</span>
              </el-col>
            </el-row>
            <el-row v-if="form.status">
              <TaskProgress :appObjectList="appObjectList" :task="form" ></TaskProgress>
            </el-row>
            <el-row>
              <el-col :span="24" style="margin-top: 5px;">
                <span class="title">估价对象</span>
              </el-col>
            </el-row>
            <el-row>
            <AppObjectList :appObjectList="appObjectList" :datumType="form.datumType" :datumId="form.datumId"></AppObjectList>
            </el-row>
            <el-row>
              <el-col :span="24" style="margin-top: 5px;">
                <span class="title">调整系数</span>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="现场查勘" name="xcck" v-if="form.id">
          <Fieldsurvey :id="form.inspect_id"></Fieldsurvey> 
        </el-tab-pane>
        <el-tab-pane label="价格评估" name="pgjg" v-if=" this.$route.query.status!=='创建任务'&&this.$route.query.status!=='对象描述'">
          <Price :taskid="this.$route.query.id" :num="compareList.length" detail=true></Price>
        </el-tab-pane>
        <el-tab-pane label="估价报告" name="gjbg" v-if=" this.$route.query.status!=='创建任务'&&this.$route.query.status!=='对象描述'&&this.$route.query.status!=='价格评估'">
          <Report detail=true :taskid="this.$route.query.id"></Report>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Fieldsurvey from '@/views/singleapp/task/FieldSurvey'
import Report from '@/views/singleapp/task/report'
import { formatDate } from '@/utils/date'
import { tasksInfo, deltasks } from '@/api/singleapp/tasks'
import Price from '@/views/singleapp/task/appraisedPrice'
import { getcomparable } from '@/api/singleapp/example'
import AppObjectList from '@/views/singleapp/components/AppObjectList'
import TaskProgress from '@/views/singleapp/components/TaskProgress'
export default {
  components: { Fieldsurvey, Report, Price, AppObjectList, TaskProgress },
  data() {
    return {
      active: 'jbxx',
      compareList: [],
      appObjectList: [
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          hh: '2205',
          sjc: 22,
          jzmj: 80.01,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65094,
          hx: '三房一厅',
          jzdy: false
        },
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          hh: '2206',
          sjc: 22,
          jzmj: 80.09,
          hgyt: '住宅',
          hx: '三房一厅',
          pgjg1: 65365,
          pgjg2: 65128,
          jzdy: false
        },
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          lddm: '111',
          hh: '2202',
          sjc: 22,
          hx: '两房一厅',
          jzmj: 68.5,
          fwyt1: '住宅',
          pgjg2: 11022,
          pgjg1: 11056
        },
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          lddm: '111',
          hh: '2103',
          sjc: 22,
          hx: '三房一厅',
          jzmj: 68.5,
          fwyt1: '住宅',
          pgjg2: 11022,
          pgjg1: 11056
        },
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          lddm: '112',
          hh: '2204',
          sjc: 22,
          hx: '三房一厅',
          jzmj: 68.5,
          fwyt1: '住宅',
          pgjg2: 11022,
          pgjg1: 11056
        },
        {
          lddm: '111',
          xmmc: '君悦阁1',
          ldmc: '君悦阁1',
          jzmj: 80.01,
          zcs: 30,
          zhs: 100,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65094,
          jzdy: true
        },
        {
          xmmc: '君悦阁2',
          ldmc: '君悦阁2',
          lddm: '112',
          jzmj: 80.09,
          zcs: 30,
          zhs: 100,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65128,
          jzdy: false
        },
        {
          xmmc: '君悦阁3',
          ldmc: '君悦阁3',
          lddm: '113',
          jzmj: 80.09,
          zcs: 30,
          zhs: 100,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65128,
          jzdy: false
        }
      ],
      form: {}
    }
  },
  mounted() {
    this.GetTaskInfo()
    this.GetcompareList()
  },
  methods: {
    GetcompareList() {
      getcomparable(this.$route.query.id).then(response => {
        this.compareList = response.data
      })
    },
    GetTaskInfo() {
      var param = { id: this.$route.query.id }
      tasksInfo(param).then(response => {
        this.form = response.data
        this.form.method = '收益法'
        this.form.status = '价格评估'
        this.form.datumType = '户'
        this.form.datumId = '113'
      })
    },
    onDelClick() {
      deltasks(this.$route.query.id).then(response => {
        if (response.code === 200) {
          this.$message({ message: '删除成功', type: 'success' })
          this.$router.push({ name: 'task' })
        } else {
          alert(response.msg)
        }
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
.val {
  display: inline-block;
  margin-top: 13px;
  margin-left: 13px;
  margin-right: 13px;
  color: #7b7676;
  // font-weight:bold;
  font-size: 15px;
  height: 35px;
}
.normal {
  display: inline-block;
  width: 130px;
  margin-left: 32px;
  color: #7b7676;
  text-align: left;
  font-size: 15px;
}
.btn-topz {
  float: right;
  margin-right: 20px;
  position: relative;
  z-index: 999;
}

</style>