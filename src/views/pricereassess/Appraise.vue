<template>
  <div class="app">
    <div class="survey-container content">
      <el-row class="header" style="background: #fff">
        <div v-if="ckzt==='2'">
          <span class="title">查勘状态：已完成</span>
          <span class="photo">查看照片</span>
        </div>
        <div v-else-if="ckzt==='1'">
          查勘状态：进行中...
        </div>
         <div v-else>
          查勘状态：未创建
        </div>
      </el-row>
      <el-row v-if='!+ckzt'>
        <el-col :span="2" style="margin-right: 50px">
          <el-button type="info" size="small" class="create" @click="createSurveyTask" :disabled="disabled">创建查勘任务</el-button>
        </el-col>
        <el-col :span="10">
          <date-picker @dateChange="getDate"></date-picker>
        </el-col>
      </el-row>
      <div v-if="ckzt==='2'">
        <survey-field :id='id'></survey-field>
      </div>
      <div v-if="ckzt === '2'">
        <el-row class="mt">
          <el-radio v-model="radio" label="1">需调整价格</el-radio>
          <el-radio v-model="radio" label="2">不调整价格</el-radio>
        </el-row>
        <el-row class="mt">
          <textarea v-model="reason" placeholder="需调整价格的原因..." v-if="radio==='1'"></textarea>
          <textarea v-model="reason" placeholder="不调整价格的原因..." v-else></textarea>
        </el-row>
        <el-row class="mt">
          <el-col :span="2.5">
            分配终审专家：
          </el-col>
          <el-col :span="4">
            <el-select v-model="reviewer" @change="handleChange" placeholder="请选择" size="medium">
              <el-option
                v-for="item in reviewerList"
                :key="item.id"
                :value="item.name">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="mt" v-if="radio==='1'">
          <el-col :span="2.5">
            选择估价时点：
          </el-col>
          <el-col :span="4">
            <el-date-picker
              v-model="value_date"
              type="date"
              value-format="yyyy-MM-dd"
              size="medium"
              placeholder="请选择">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row class="mt"> 
          <el-button v-if="radio==='1'" type="primary" size="small" @click="createAppraisalTask" :disabled="disabled">创建评估任务</el-button>
          <el-button v-else type="primary" size="small" @click="toResult" :disabled="disabled">提交终审</el-button>
        </el-row>
      </div>
      <div v-else class="noData">暂无数据</div>
    </div>
  </div>
</template>
<script>
  import SurveyField from './components/FieldSurvey'
  import DatePicker from './components/DateTimePicker'
  import { toResult, toAppraisal, createSurveyTask } from '@/api/pricereassess'
  import { getUsers } from '@/api/caseSearch'
  import { mapGetters } from 'vuex'

  export default {
    components: { SurveyField, DatePicker },
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        username: '',
        task: null,
        id: '',
        zsryid: '',
        ckzt: '',
        radio: '1',
        reason: '',
        reviewer: '',
        reviewerList: [],
        dateArray: null,
        value_date: '',
        hasCreated: false
      }
    },
    created() {
      const curTask = JSON.parse(localStorage.getItem('curTask'))
      this.task = curTask
      // 个案查勘任务id
      this.id = curTask.gackrwid
      // 查勘状态 0:未开始，1：进行中，2：已完成
      this.ckzt = curTask.ckzt
      // 获取复核终审角色
      this.getReviewer()
      this.getUsers()
    },
    computed: {
      ...mapGetters(['name'])
    },
    methods: {
      // 获取终审人员id
      handleChange(value) {
        this.reviewerList.forEach(item => {
          if (item.name === value) {
            this.zsryid = item.id + ''
          }
        })
      },
      // 获取当前用户名
      // 最好通过mapGetters获取username
      getUsers() {
        getUsers().then(res => {
          res.data.forEach(item => {
            if (item.name === this.name) {
              this.username = item.username
            }
          })
        })
      },
      getReviewer() {
        getUsers({ role: 'reviewer' }).then(res => {
          this.reviewerList = res.data
        })
      },
      getDate(value) {
        this.dateArray = value
      },
      // 创建查勘任务
      createSurveyTask() {
        if (this.hasCreated) {
          this.$message({
            message: '请勿重复创建!',
            type: 'warning'
          })
          return
        } else if (!this.dateArray) {
          this.$message({
            message: '请选择开始时间和结束时间!',
            type: 'warning'
          })
          return
        }
        const data = {
          // 复核申请id
          id: this.task.id,
          kssj: this.dateArray[0],
          jssj: this.dateArray[1],
          username: this.username
        }
        // 发起请求
        createSurveyTask(data).then(res => {
          this.hasCreated = true
          this.$message({
            message: '创建成功!',
            type: 'success'
          })
          setTimeout(() => {
            this.$router.push({ path: 'PriceTask' })
          }, 1000)
        })
      },
      // 创建评估任务
      createAppraisalTask() {
        if (!this.reason) {
          this.$message({
            message: '请填写调整原因!',
            type: 'warning'
          })
          return
        } else if (!this.reviewer) {
          this.$message({
            message: '请分配终审人员!',
            type: 'warning'
          })
          return
        } else if (!this.value_date) {
          this.$message({
            message: '请选择估价时点!',
            type: 'warning'
          })
          return
        }
  
        const data = {
          id: this.task.id,
          zsryid: this.zsryid,
          zsrymc: this.reviewer,
          tzyy: this.reason,
          value_date: this.value_date
        }
        toAppraisal(data).then(res => {
          this.$message({
            message: '提交成功!',
            type: 'success'
          })
          setTimeout(() => {
            this.$router.push({ path: 'PriceTask' })
          }, 1000)
        })
      },
      // 提交终审
      toResult() {
        if (!this.reason) {
          this.$message({
            message: '请填写不调整原因!',
            type: 'warning'
          })
          return
        } else if (!this.reviewer) {
          this.$message({
            message: '请分配终审人员!',
            type: 'warning'
          })
          return
        }
        const data = {
          id: this.task.id,
          btzyy: this.reason,
          zsryid: this.zsryid,
          zsrymc: this.reviewer
        }
        toResult(data).then(res => {
          if (res.msg === 'ok') {
            this.$message({
              message: '提交成功!',
              type: 'success'
            })
            this.keepPriceReason = ''
            setTimeout(() => {
              this.$router.push({ path: 'PriceTask' })
            }, 1000)
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/background.scss";
  .app .content .mt {
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: #606266;
    .el-radio {
      flex: 1;
      .el-radio__inner {
        border: 1px solid #409eff;
      }
    }
  }
  .el-date-editor {
    width: 120%
  }
  textarea {
    width: 100%;
    height: 120px;
    border-radius: 5px;
    border: 1px solid #808080;
  }
  .noData {
    font-size: 18px;
    color: #808080;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .survey-container {
    padding: 10px;
  }
  .survey-container .header {
    height: 46px;
    background-color: #fff;
  }
  .survey-container .title {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    margin-left: 20px;
    font-weight: bold;
  }
  .survey-container .photo {
    float: right;
    height: 40px;
    line-height: 40px;
    margin: 0 40px;
    font-size: 14px;
    cursor: pointer;
  }
  .survey-container .create {
    float: right;
    margin-left: 40px;
    font-size: 14px;
  }
  .table {
    border-collapse: collapse;
  }
  .normal {
    display: inline-block;
    width: 130px;
    margin-left:3px;
    color:#7b7676;
    text-align: center;
    font-size: 15px;
  }
  // .title-small {
  //   margin-left: 20px;
  //   font-size: 15px;
  //   font-weight: bold;
  // }
</style>

<style>
  .survey-container .el-range-separator {
    padding: 0 15px
  }
</style>
