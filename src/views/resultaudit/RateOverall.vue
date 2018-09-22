<template>
    <div :class="{'div-n': !detail, 'div-d': detail}">
          <el-row v-if="detail">
            <el-col :span="24">
                <div class="title">总体情况</div>
                <div class="border"></div>
            </el-col>
        </el-row>
        <el-form ref="form" label-width="100px" label-position="right">
            <el-row>
                <el-col :span="22">
                    <span class="title-small">结论</span>
                </el-col>
                  <el-col :span="2" v-if="!detail">
                    <el-button size="mini" type="primary" @click.prevent="save('all','conclusion',form.all.conclusion)">保存</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-input type="textarea" v-model="form.all.conclusion"></el-input>
            </el-row>
            <el-row>
                <span class="title-small">估价水平检验</span>
            </el-row>
            <el-row>
                <table class="table">
                    <tr class="tr_title">
                        <td class="td">
                            <span class="normal">类型</span>
                        </td>
                        <td class="td">
                            <span class="normal">案例数量</span>
                        </td>
                        <td class="td">
                            <span class="normal">比率中位数</span>
                        </td>
                        <td class="td">
                            <span class="normal">比率平均数</span>
                        </td>
                        <td class="td">
                            <span class="normal">比率众数</span>
                        </td>
                        <td class="td">
                            <span class="normal">案例详情</span>
                        </td>
                    </tr>
                    <tr class="tr">
                        <td class="td">
                            <span class="normal">{{form.all.index.type}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.cnt}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.median}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.average}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.mode}}</span>
                        </td>
                        <td class="td">
                            <router-link :to="{name:'CaseSearch'}">
                                <el-button type="text" class="btn-mid" size="small">查看</el-button>
                            </router-link>
                        </td>
                    </tr>
                </table>
            </el-row>
            <el-row>
                <el-col :span="22">
                <span class="text-sm">说明：</span>
                </el-col>
                  <el-col :span="2" v-if="!detail">
                    <el-button size="mini" type="primary" @click.prevent="save('all','level',form.all.level)">保存</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-input type="textarea" v-model="form.all.level"></el-input>
            </el-row>
            <el-row>
                <span class="title-small">估价结果一致性检验</span>
            </el-row>
            <el-row>
                <table class="table">
                    <tr class="tr_title">
                        <td class="td">
                            <span class="normal">类型</span>
                        </td>
                        <td class="td">
                            <span class="normal">案例数量</span>
                        </td>
                        <td class="td">
                            <span class="normal">比率极差</span>
                        </td>
                        <td class="td">
                            <span class="normal">平均绝对离差</span>
                        </td>
                        <td class="td">
                            <span class="normal">离散系数</span>
                        </td>
                        <td class="td">
                            <span class="normal">比率标准差</span>
                        </td>
                        <td class="td">
                            <span class="normal">变异系数</span>
                        </td>
                        <td class="td">
                            <span class="normal">价格相关差</span>
                        </td>
                    </tr>
                    <tr class="tr">
                        <td class="td">
                            <span class="normal">{{form.all.index.type}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.cnt}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.range}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.aad}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.cod}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.sd}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.cov}}</span>
                        </td>
                        <td class="td">
                            <span class="normal">{{form.all.index.prd}}</span>
                        </td>
                    </tr>
                </table>
            </el-row>
            <el-row>
                <el-col :span="22">
                <span class="text-sm">说明：</span>
                </el-col>
                  <el-col :span="2" v-if="!detail">
                    <el-button size="mini" type="primary" @click.prevent="save('all','uniformity',form.all.uniformity)">保存</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-input type="textarea" v-model="form.all.uniformity"></el-input>
            </el-row>
            <el-row>
                <span class="title-small">正态性检验</span>
            </el-row>
            <el-row>
                <el-col :span="16">
                    <NormalityChart id="overall" :width="width"></NormalityChart>
                </el-col>
                <el-col :span="8">
                    <div style="margin-top:34px">
                        <table class="table">
                              <tr class="tr-black" >
                                <td class="td" colspan="3">
                              <span>  <font color="#fff">Kolmogorov-Smirnov检验</font></span>
                                </td>
                            </tr>
                            <tr class="tr_title">
                                <td class="td">
                                    <span class="normal">统计量</span>
                                </td>
                                <td class="td">
                                    <span class="normal">df</span>
                                </td>
                                <td class="td">
                                    <span class="normal">Sig</span>
                                </td>
                            </tr>
                            <tr class="tr">
                                <td class="td">
                                    <span class="normal">{{form.all.index.cnt}}</span>
                                </td>
                                <td class="td">
                                    <span class="normal">{{form.all.index.ks_df}}</span>
                                </td>
                                <td class="td">
                                    <span class="normal">{{form.all.index.ks_sig}}</span>
                                </td>
                            </tr>
                        </table>
                        <table class="table">
                            <tr class="tr-black">
                                <td class="td" colspan="3">
                                    <font color="#fff">Shapiro-Wilk检验</font>
                                </td>
                            </tr>
                            <tr class="tr_title">
                                <td class="td">
                                    <span class="normal">统计量</span>
                                </td>
                                <td class="td">
                                    <span class="normal">df</span>
                                </td>
                                <td class="td">
                                    <span class="normal">Sig</span>
                                </td>
                            </tr>
                            <tr class="tr">
                                <td class="td">
                                    <span class="normal">{{form.all.index.cnt}}</span>
                                </td>
                                <td class="td">
                                    <span class="normal">{{form.all.index.sw_df}}</span>
                                </td>
                                <td class="td">
                                    <span class="normal">{{form.all.index.sw_sig}}</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import NormalityChart from '@/views/resultaudit/components/NormalityChart'
export default {
  components: {
    NormalityChart
  },
  props: {
    form: {
      type: Object,
      default: null
    },
    detail: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {}
  },
  methods: {
    save(method, item, comment) {
      var params = {
        method: method,
        item: item,
        comment: comment
      }
      this.$emit('save', params)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../../styles/app.scss";
.normal {
  width: -webkit-fill-available;
}
.btn-mid {
  width: 100%;
  min-width: 80px;
}
.el-textarea__inner {
  margin-left: 2%;
  width: 96%;
}
.text-sm {
  margin-left: 2%;
  font-size: 14px;
}
.noborder.el-input__inner {
  border: none;
}
.el-input.is-disabled .el-input__inner {
  border: none;
}
.el-input--small .el-input__inner {
  border: none;
  text-align: center;
}
.el-input-number {
  width: 100%;
}
.tr-black{
   text-align:center;
   line-height:38px;
   background-color:
    #585858;height:38px;
}
.div-n{
    width: 100%;
}
.div-d{
    width: 80%;
}
</style>