<template>
  <div class="app">
    <div class="audit-container content">
      <div class="sqr-detail" style="margin-top: 0">
        <div class="title">申请人信息</div>
        <el-row>
          <el-col :span="2">权利人名称：</el-col>
          <el-col :span="6" class="data">{{task.qlrmc}}</el-col>
          <el-col :span="2">联系人电话：</el-col>
          <el-col :span="6" class="data">{{task.lxrdh}}</el-col>
          <el-col :span="2">申请日期：</el-col>
          <el-col :span="4" class="data">{{getParseTime(task.sqrq)}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">公民身份证号或组织代码：</el-col>
          <el-col :span="6" class="data">{{task.zjhm}}</el-col>
        </el-row>
      </div>
      <div class="line"></div>
      <div class="fc-detail">
        <div class="title">房产信息</div>
        <el-row>
          <el-col :span="2">房产名称：</el-col>
          <el-col :span="6" class="data">{{task.fcmc}}</el-col>
          <el-col :span="2">房产类别：</el-col>
          <el-col :span="5" class="data">
            {{task.fclb === '0' ? '住宅' :(task.fclb === '1' ? '商业' :(task.fclb === '2' ? '办公' : '工厂'))}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">权利人身份证或营业执照：</el-col>
          <el-col :span="4">
            <el-popover
              placement="right"
              title="权利人身份证或营业执照："
              width="625"
              trigger="click">
              <img :src="baseUrl + task.qlrsfzhyyzz">
              <el-button type="plain" size="small" slot="reference">查看</el-button>
            </el-popover>
          </el-col>
          <el-col :span="2">房地产证书：</el-col>
          <el-col :span="6">
            <el-popover
              placement="right"
              title="房地产证书："
              width="625"
              trigger="click">
              <img :src="baseUrl + task.fdczs">
              <el-button type="plain" size="small" slot="reference">查看</el-button>
            </el-popover>
          </el-col>
          <el-col :span="2">授权书：</el-col>
          <el-col :span="3">
            <el-popover
              placement="right"
              title="授权书："
              width="625"
              trigger="click">
              <img :src="task.sqs && baseUrl + task.sqs">
              <el-button type="plain" :disabled="!task.sqs" size="small" slot="reference">查看</el-button>
            </el-popover>
          </el-col>
        </el-row>
        <!-- <el-row class="explain">授权书说明：如果委托代理人，需要业主签名的授权书扫描件；如业主本人申请，则跳过此步。</el-row> -->
      </div>
      <div class="line"></div>
      <div class="reason-state">
        <div class="title">正当理由陈述</div>
        <div class="text">
          {{task.zdlycs}}
        </div>
      </div>
      <div class="audit-result" style="margin-top: 30px">
        <div class="title">审核结果</div>
        <el-row>
          <el-radio v-model="radio" label="2">通过</el-radio>
        </el-row>
        <el-row class="ml">
          <el-col :span="2.5">
            分配复核估价师：
          </el-col>
          <el-col :span="4">
            <el-select v-model="name" placeholder="请选择" size="medium">
              <el-option
                v-for="item in appraiserList"
                :key="item.id"
                :value="item.name">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="1.5">
            <el-button type="primary" size="small" :loading="loading" :disabled="disabled" @click="submit">提交</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-radio v-model="radio" label="1">不通过</el-radio>
        </el-row>
        <el-row class="ml">
          <el-col :span="9">
            <textarea v-model="noPassValue" placeholder="不通过的原因..."></textarea>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small" class="return" @click="returnTo" :disabled="disabled">退回申请人</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { audit } from '@/api/pricereassess'
  import { getUsers } from '@/api/caseSearch'
  import { parseTime } from '@/utils/index'

  export default{
    components: {},
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        task: null,
        name: '',
        appraiserList: [],
        // 对应clzt
        radio: '2',
        loading: false,
        noPassValue: ''
      }
    },
    computed: {
      // 获取图片的baseUrl
      baseUrl() {
        const baseURL = process.env.BASE_API
        const baseUrl = baseURL.slice(0, baseURL.length - 2)
        return baseUrl
      }
    },
    created() {
      // 获取评估角色
      this.getAppraiser()
      this.task = JSON.parse(localStorage.getItem('curTask'))
    },
    methods: {
      getAppraiser() {
        getUsers({ role: 'appraiser' }).then(res => {
          this.appraiserList = res.data
        })
      },
      getParseTime(date) {
        return parseTime(new Date(date), '{y}-{m}-{d}')
      },
      // 提交评估结果
      submit() {
        const data = {
          id: this.task.id,
          gjsmc: this.name,
          clzt: this.radio
        }
        if (this.radio === '2') {
          if (this.name) {
            this.loading = true
            audit(data).then(res => {
              this.loading = false
              if (res.code === 200) {
                this.$message({
                  message: '提交成功!',
                  type: 'success'
                })
                setTimeout(() => {
                  this.$router.push({ path: 'Task' })
                }, 1000)
              } else {
                this.$message({
                  message: '未知原因,请重新提交!',
                  type: 'error'
                })
              }
            })
          } else {
            this.$message({
              message: '请分配复核人员!',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '请选择通过!',
            type: 'error'
          })
        }
      },
      // 退回申请人
      returnTo() {
        const data = {
          id: this.task.id,
          clzt: this.radio,
          shbtgyy: this.noPassValue
        }
  
        if (this.radio === '1') {
          if (this.noPassValue) {
            this.loading = true
            audit(data).then(res => {
              this.loading = false
              if (res.code === 200) {
                this.$message({
                  message: '已退回申请人!',
                  type: 'success'
                })
                this.noPassValue = ''
                setTimeout(() => {
                  this.$router.push({ path: 'Task' })
                }, 1000)
              } else {
                this.$message({
                  message: '未知原因,请重新提交!',
                  type: 'error'
                })
              }
            }).catch(err => {
              console.log(err)
            })
          } else {
            this.$message({
              message: '请填写不通过的原因!',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '请选择不通过!',
            type: 'error'
          })
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/background.scss";
  .audit-container {
    padding: 30px;
    padding-bottom: 0;
    .line {
      width: 100%; 
      height: 1px; 
      margin: 30px 0; 
      background: #E8E8E8;
    }
    .sqr-detail, .fc-detail, .reason-state, .audit-result {
      margin-top: 15px;
      .title {
        font-size: 18px;
        margin-bottom: 30px;
        color: #333;
      }
      .el-row {
        // 子元素垂直居中
        display: flex;
        align-items: center;
        margin-top: 20px;
        color: #333;
        &.ml {
          margin-left: 23px
        }
        .el-button {
          border: 1px solid #b2b2b2;
        }
        .data {
          color: #606266;
        }
        .el-radio__inner {
          border: 1px solid #409eff;
        }
      }
      .explain {
        font-size: 14px;
        color: red;
      }
      .text {
        width: 80%;
        min-height: 50px;
        padding: 10px;
        font-size: 14px;
        color: #606266;
        text-indent:30px;
        background: #ebf5ff;
        border-radius: 5px;
      }
      textarea {
        width: 100%;
        height: 100px;
        border-radius: 5px;
        border: 1px solid #808080;
      }
      .return {
        margin: 60px 0 0 30px;
      }
    }
  }
  
</style>

<style>
  /* 用.fc-detail做父级没用，必须组件的class，或者单独img标签 */
  .el-popover img {
    width: 600px
  }
</style>



