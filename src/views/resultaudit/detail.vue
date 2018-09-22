<template>
    <div class="app">
        <div class="margin10 maxdialog">
            <div class="btn">
                <el-button type="primary" size='mini' @click="onDelClick" v-if="step !== 3">刪除</el-button>
            </div>
            <el-row style="padding-top:30px">
                <el-col :span="24" style="text-align:center">
                    <span style="font-size:24px;font-weight:bold;">{{form.name}} </span>
                </el-col>
            </el-row>
            <el-tabs v-model="activeName" type="card" style="margin-left:20px">
                <el-tab-pane label="基本信息" name="first">
                    <el-form ref="form" label-width="100px" label-position="right">
                        <el-row>
                            <el-col :span="24">
                                <div class="title">项目信息</div>
                                <div class="border"></div>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px">
                            <el-col :span="4">
                                <el-form-item label="任务编号：">
                                    <span>{{form.id}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="负责人：">
                                    <span>{{form.creator}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="创建时间：">
                                    <span>{{form.create_date|formatDate}}</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px">
                            <el-col :span="4">
                                <el-form-item label="审核结果:">
                                    <span>{{form.result}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="分析目的：">
                                    <span>{{form.purpose}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="价值时点：">
                                    <span>{{form.value_date|formatDate}}</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px">
                            <el-col :span="4">
                                <el-form-item label="物业类型：">
                                    <span>{{form.type}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="物业用途：">
                                    <span>{{form.usage}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="行政区：">
                                    <span>{{form.district}}</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px">
                            <el-col :span="24">
                                <el-form-item label="分析方式：" prop="method">
                                    <el-checkbox-group v-model="form.method" disabled>
                                        <el-checkbox label="在全体数据进行比率分析"></el-checkbox>
                                        <el-checkbox label="按一级用途分组进行比率分析"></el-checkbox>
                                        <el-checkbox label="按行政区分组进行比率分析"></el-checkbox>
                                        <el-checkbox label="按二级用途分组进行比率分析"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px">
                            <el-col :span="12">
                                <el-form-item label="备注：">
                                    <span>{{form.note}}</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="title">处理进度</div>
                                <div class="border"></div>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px">
                            <el-col :span="17">
                                <el-steps :active="step" :space="500" align-center style="margin-top:30px">
                                    <el-step title="参数设定" :description="form.creator"></el-step>
                                    <el-step title="比率分析" description=""></el-step>
                                    <el-step title="任务完成" description=""></el-step>
                                </el-steps>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="title">案例设置</div>
                                <div class="border"></div>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px">
                            <el-col :span="24">
                                <el-form-item label="案例来源：" v-if="form.case">
                                    <el-checkbox-group v-model="form.case.source" disabled>
                                        <el-checkbox label="交易案例" name="交易案例"></el-checkbox>
                                        <el-checkbox label="挂牌案例" name="挂牌案例"></el-checkbox>
                                        <el-checkbox label="评估案例" name="评估案例"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px" v-if="form.case">
                            <el-col :span="6">
                                <el-form-item label="起止时间：">
                                    <span>{{form.case.start|formatDate}} 至{{form.case.end|formatDate}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="价格指数：">
                                    <span v-if="form.case.index.use">{{form.case.index.id}}</span>
                                    <span v-else>不使用价格指数</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row style="padding-left:20px;padding-bottom:20px" v-if="form.case">
                            <el-col :span="6">
                                <el-form-item label="抽样方式：">
                                    <span v-if="form.case.way.type==='byNumber'">按数量抽取</span>
                                    <span v-else>按百分比抽取</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="抽样数量：">
                                    <span v-if="form.case.way.type==='byNumber'">{{form.case.way.value}}宗</span>
                                    <span v-else>{{form.case.way.value}}%</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="分析结果" name="second" v-if="form.method">
                    <div class="rightNav">
                        <el-menu default-active="1" class="rightmenu" @select="selectNav">
                            <el-menu-item index="1" v-if="form.method.indexOf('在全体数据进行比率分析')!==-1">
                                <i class="el-icon-location"></i>
                                <span slot="title">总体情况</span>
                            </el-menu-item>
                            <el-menu-item index="2" v-if="form.method.indexOf('按一级用途分组进行比率分析')!==-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">按一级用途分组情况</span>
                            </el-menu-item>
                            <el-menu-item index="3" v-if="form.method.indexOf('按二级用途分组进行比率分析')!==-1">
                                <i class="el-icon-document"></i>
                                <span slot="title">按二级用途分组情况</span>
                            </el-menu-item>
                            <el-menu-item index="4" v-if="form.method.indexOf('按行政区分组进行比率分析')!==-1">
                                <i class="el-icon-setting"></i>
                                <span slot="title">按行政区分组情况</span>
                            </el-menu-item>
                        </el-menu>
                    </div>
                    <div id="result">
                        <el-row ref='all' v-if="form.method.indexOf('在全体数据进行比率分析')!==-1">
                            <RateOverall :form="ratio" :detail='true' :width="width"></RateOverall>
                        </el-row>
                        <el-row ref='frist' v-if="form.method.indexOf('按一级用途分组进行比率分析')!==-1">
                            <RatePrimaryUse :form="ratio" :detail='true' :width="width"></RatePrimaryUse>
                        </el-row>
                        <el-row ref="second" v-if="form.method.indexOf('按二级用途分组进行比率分析')!==-1">
                            <RateSecondUse :form="ratio" :detail='true' :width="width"></RateSecondUse>
                        </el-row>
                        <el-row v-if="form.method.indexOf('按行政区分组进行比率分析')!==-1">
                            <RateDistrict :form="ratio" :detail='true' :width="width"></RateDistrict>
                        </el-row>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import { formatDate } from '@/utils/date'
import { getTestTaskById, deleteTestTask } from '@/api/ratio/tasks'
import { getRatioResult } from '@/api/ratio/ratio'
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
      ratio: {},
      step: 0,
      activeName: 'first',
      width: '100%'
    }
  },
  mounted() {
    this.getRatioResult()
    this.getTestTaskById()
    this.width = document.documentElement.clientWidth * 0.4 + 'px'
  },
  methods: {
    getTestTaskById() {
      getTestTaskById(this.$route.query.id).then(response => {
        this.form = response.data
        if (this.form.status === '方案设计') {
          this.step = 1
        } else if (this.form.status === '比率分析') {
          this.step = 2
        } else if (this.form.status === '任务完成') {
          this.step = 3
        }
      })
    },
    getRatioResult() {
      getRatioResult(this.$route.query.id).then(response => {
        this.ratio = response.data
      })
    },
    onDelClick() {
      deleteTestTask(this.$route.query.id).then(response => {
        if (response.code === 200) {
          this.$message({ message: '删除成功', type: 'success' })
          this.$router.push({ name: 'index' })
        } else {
          alert(response.msg)
        }
      })
    },
    selectNav(index, indexPath) {
      document.getElementById('result').style.top = '0px'
      var all = 0
      if (this.$refs.all) {
        all = -this.$refs.all.$el.offsetHeight
      }
      var frist = 0
      if (this.$refs.frist) {
        frist = -this.$refs.frist.$el.offsetHeight
      }
      var second = 0
      if (this.$refs.second) {
        second = -this.$refs.second.$el.offsetHeight
      }
      if (index === '1') {
        document.getElementById('result').style.top = '0px'
      }
      if (index === '2') {
        document.getElementById('result').style.top = all + 'px'
      }
      if (index === '3') {
        document.getElementById('result').style.top = frist + all + 'px'
      }
      if (index === '4') {
        document.getElementById('result').style.top =
          frist + all + second + 'px'
      }
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
@import "../../styles/app.scss";
#result {
  position: relative;
  left: 0;
  top: 0;
  transition: top 0.5s;
}
.btn {
  position: absolute;
  top: 65px;
  right: 30px;
  z-index: 999;
}
.el-form-item {
  margin-bottom: -8px;
}
.rightNav {
  position: absolute;
  top: 240px;
  right: 0;
  z-index: 100;
  width: 300px;
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
.title {
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.border {
  border: 0.5px solid #c0c4cc;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.rightmenu {
  position: fixed;
  top: 40%;
  left: 94%;
  transform: translate3d(-50%, 0, 0);
  width: 392px;
  z-index: 999;
}
</style>