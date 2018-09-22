<template>
  <div class="app" :style="{ height: pdfHeight }">
    <iframe class="pdf" v-if="isShowPdf" :src="'/static/pdfjs/web/viewer.html?file=' + this.downloadUrl" frameborder="0">
    </iframe>
    <el-button v-if="isShowPdf" class="close" size="small" icon="el-icon-close" @click="isShowPdf=false">关闭</el-button>
    <div class="audit-container content" style="height: 100%">
      <div class="audit-detail">
        <div class="item">
          <h2>审核评估结果</h2>
          <div class="price"> 
            <p>房地产名称：{{task.fcmc}}</p>
            <p>房地产证号：{{task.cqzh}}</p>
            <p>调整前单价：{{tzqdj}}元/平方米</p>
            <p>调整后单价：{{result.tzhdj}}元/平方米</p> 
            <p>面积：{{result.mj}}平方米</p>
            <p>调整后总价：{{result.tzhzj}}元</p>
          </div>
          <el-button size="small" icon="el-icon-upload" @click="priceOnline" :disabled="disabled">价格上线</el-button>
        </div>
        <div class="item">
          <h2>审核评估报告</h2>
          <el-button size="small" icon="el-icon-view" @click="isShowPdf=true">在线浏览</el-button>
          <el-button size="small" icon="el-icon-download" @click="downloadReport">报告下载</el-button>
        </div>
      </div>
      <div class="audit-result">
        <h3>审核结果</h3>
        <el-row>
          <el-col :span="12">
            <el-radio v-model="radio" label="2">通过</el-radio>
          </el-col>
          <el-col :span="3"> 
            <el-button type="primary" size="small" :loading="loading" @click="submit" :disabled="disabled">提交</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <el-radio v-model="radio" label="1">不通过</el-radio>
          </el-col>
          <el-col :span="9">
            <textarea v-model="noPassValue" placeholder="不通过的原因..."></textarea>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" size="small" class="return" @click="submit" :disabled="disabled">退回估价师</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { getUnitValue, getReport, priceOnline, finalAudit } from '@/api/pricereassess'

  export default{
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        task: JSON.parse(localStorage.getItem('curTask')),
        result: {},
        tzqdj: '',
        radio: '2',
        noPassValue: '',
        downloadUrl: '',
        loading: false,
        hasOnline: false,
        isShowPdf: false
      }
    },
    computed: {
      pdfHeight() {
        return document.documentElement.clientHeight - 50 + 'px'
      }
    },
    created() {
      // 获取评估结果
      this.getReport()
      // 获取调整前单价
      this.getUnitValue()
    },
    methods: {
      getUnitValue() {
        getUnitValue(this.task.id).then(res => {
          this.tzqdj = res.data.tzqdj
        })
      },
      getReport() {
        const id = this.task.gagjrwid
        console.log(id, this.task)
        getReport(id).then(res => {
          console.log(res)
          const data = res.prices[0]
          this.downloadUrl = res.url
          this.result = {
            tzhdj: data.unit_value,
            mj: data.built_area,
            tzhzj: data.total_value
          }
        })
      },
      // 下载评估报告
      downloadReport() {
        window.open(this.downloadUrl)
      },
      // 价格上线
      priceOnline() {
        if (this.hasOnline) {
          this.$message({
            message: '请不要重复提交!',
            type: 'warning'
          })
          return
        }
        this.hasOnline = true
        // const data = {
        //   ...this.result,
        //   fhsqid: this.task.id,
        //   tzyyzy: this.task.tzyy,
        //   gjbg: this.task.pgbgbh
        // }
        const data = {
          tzhdj: '68000',
          tzhzj: '6800000',
          mj: '100',
          fhsqid: '5ew9fVAZLt5lGWs5Z8uR2qcKARb7OIC2',
          tzyyzy: 'ajkdjak',
          gjbg: 'djajdja'
        }
        priceOnline(data).then(res => {
          this.$message({
            message: '提交成功!',
            type: 'success'
          })
        })
      },
      // 终审通过或不通过
      submit() {
        if (this.radio === '1') {
          if (!this.noPassValue) {
            this.$message({
              message: '请填写不通过原因!',
              type: 'warning'
            })
            return
          }
        } else {
          if (!this.hasOnline) {
            this.$message({
              message: '请先推送价格上线数据!',
              type: 'warning'
            })
            return
          }
        }
        const curTask = JSON.parse(localStorage.getItem('curTask'))
        // 不通过则noPassValue为空
        const data = {
          id: curTask.id,
          clzt: this.radio,
          shbtgyy: this.noPassValue
        }
        this.loading = true
        finalAudit(data).then(res => {
          console.log(res)
          this.loading = false
          if (res.code === 200) {
            this.$message({
              message: '提交成功!',
              type: 'success'
            })
            setTimeout(() => {
              this.$router.push({ path: 'Task' })
            }, 1000)
          }
        }).catch(err => {
          this.loading = false
          console.log(err)
          this.$message({
            message: '未知原因,请重新提交!',
            type: 'error'
          })
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .audit-container {
    padding: 10px;
    .audit-detail {
      width: 100%;
      text-align: center;
      overflow: hidden;
      .item { 
        float: left;
        width: 48%;
        height: 250px;
        background: #ebf5ff;
        border-radius: 10px;
        &:last-child {
          float: right;
        }
        h2 {
          margin: 30px auto;
          color: #409eff;
        }
        .el-button {
          margin-top: 5px;
        }
        .price { 
          width: 100%;
          color: #5b646c;
          p {
            margin-top: 3px;
            letter-spacing: 2px;
          }
        }
      }
    }
    .audit-result {
      margin-top: 30px;
      h3 {
        margin-bottom: 30px;
        color: #585858;
      }
      .el-row {
        margin-top: 15px;
        color: #606266
      }
      textarea {
        width: 100%;
        height: 100px;
        border-radius: 5px;
        border: 1px solid #808080;
      }
      .return {
        margin: 65px 0 0 20px;
      }
    }
  }
  .pdf {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  .close {
    position: absolute;
    right: 20px;
    top: 32px;
    z-index: 1000;
  }
</style>
