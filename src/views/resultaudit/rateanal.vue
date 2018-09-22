<template>
  <div class="app">
    <div class="margin10 maxdialog">
      <div class="btn">
        <el-button type="primary" @click="backStep" size='mini'>上一步</el-button>
        <el-button @click="createReport" size='mini'>生成报告</el-button>
        <el-button @click="dg_rateResult=true" size='mini'>检验完毕</el-button>
      </div>
      <el-tabs ref="tabs" v-model="activeName" type="card" style="margin-left:20px">
        <el-tab-pane label="总体情况" name="在全体数据进行比率分析" v-if="method.indexOf('在全体数据进行比率分析')!==-1" style="padding-left:20px">
          <RateOverall :form="form" @save="save" :width="width"></RateOverall>
        </el-tab-pane>
        <el-tab-pane label="一级用途分组" name="按一级用途分组进行比率分析" v-if="method.indexOf('按一级用途分组进行比率分析')!==-1">
          <RatePrimaryUse :form="form" @save="save" :width="width"></RatePrimaryUse>
        </el-tab-pane>
        <el-tab-pane label="二级用途分组" name="按二级用途分组进行比率分析" v-if="method.indexOf('按二级用途分组进行比率分析')!==-1">
          <RateSecondUse :form="form" @save="save" :width="width"></RateSecondUse>
        </el-tab-pane>
        <el-tab-pane label="行政区分组" name="按行政区分组进行比率分析" v-if="method.indexOf('按行政区分组进行比率分析')!==-1">
          <RateDistrict :form="form" @save="save" :width="width"></RateDistrict>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="检验结果" :visible.sync="dg_rateResult">
      <div>
        <el-radio v-model="rateResult" label="合格">合格</el-radio>
        <el-radio v-model="rateResult" label="不合格">不合格</el-radio>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dg_rateResult = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getTestTaskById } from '@/api/ratio/tasks'
import {
  getRatioResult,
  saveRatioResult,
  downloadReopot,
  submitResult
} from '@/api/ratio/ratio'
import RateOverall from '@/views/resultaudit/RateOverall'
import RatePrimaryUse from '@/views/resultaudit/RatePrimaryUse'
import RateSecondUse from '@/views/resultaudit/RateSecondUse'
import RateDistrict from '@/views/resultaudit/RateDistrict'
export default {
  components: {
    RateOverall,
    RatePrimaryUse,
    RateSecondUse,
    RateDistrict
  },
  data() {
    return {
      form: {},
      method: [],
      activeName: '在全体数据进行比率分析',
      dg_rateResult: false,
      rateResult: '合格',
      width: '500px'
    }
  },
  mounted() {
    this.getTestTaskById()
    this.getRatioResult()
    this.width = document.documentElement.clientWidth * 0.5 + 'px'
  },
  methods: {
    save(params) {
      saveRatioResult(this.$route.query.id, params).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    getRatioResult() {
      getRatioResult(this.$route.query.id).then(response => {
        this.form = response.data
      })
    },
    getTestTaskById() {
      // 获取评估的方法，确定所要显示的tab
      getTestTaskById(this.$route.query.id).then(response => {
        this.method = response.data.method
        this.activeName = this.method[0]
      })
    },
    backStep() {
      this.$router.push({
        name: 'paramset',
        query: { id: this.$route.query.id }
      })
    },
    createReport() {
      downloadReopot(this.$route.query.id).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
          window.location.href = response.data
        } else {
          alert(response.msg)
        }
      })
    },
    onSubmit() {
      var data = {
        id: this.$route.query.id,
        result: this.rateResult
      }
      submitResult(data).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
          this.dg_rateResult = false
        } else {
          alert(response.msg)
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/app.scss";
.margin60 {
  position: relative;
  margin-left: 60px;
  margin-right: 60px;
}
.btn {
  position: absolute;
  top: 16px;
  right: 30px;
  z-index: 999;
}
.el-row {
  margin-top: 5px;
  margin-bottom: 0px;
}
tr {
  text-align: center;
  height: 40px;
}
td {
  width: 40px;
}
</style>