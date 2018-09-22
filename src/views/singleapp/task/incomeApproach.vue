<template>
    <div class="margin10">
        <el-row v-if="!detail">
            <el-col :span="24">
                <div class="title"></div>
            </el-col>
        </el-row>
        <table class="table">
            <tr class="tr">
                <td class="td">
                    <span class="normal">估价对象:</span>
                </td>
                <td class="td">
                    <span class="normal">{{form.gjdx}}</span>
                </td>
                <td class="td">
                    <span class="normal">地址</span>
                </td>
                <td class="td" colspan="3">
                    <span class="normal">{{form.dz}}</span>
                </td>
                <td class="td_e">
                    <span class="normal">操作</span>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">建筑面积:</span>
                </td>
                <td class="td">
                    <span class="normal">{{form.jzmj}}</span>
                </td>
                <td class="td">
                    <span class="normal">物业用途</span>
                </td>
                <td class="td" colspan="3">
                    <span class="normal">{{form.wyyt}}</span>
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">出租方:</span>
                </td>
                <td class="td">
                    <el-radio v-model="form.czf" label="单位" style="margin-left: 10%;">单位</el-radio>
                    <el-radio v-model="form.czf" label="个人">个人</el-radio>
                </td>
                <td class="td">
                    <span class="normal">房产原值</span>
                </td>
                <td class="td" colspan="3">
                    <el-input class="noborder" size="small" v-model="form.fcyz"></el-input>
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">土地使用年限:</span>
                </td>
                <td class="td">
                    <el-input-number class="noborder" size="small" v-model="form.tdsynx" :min="0" :max="70"></el-input-number>
                </td>
                <td class="td">
                    <span class="normal">土地取得日期</span>
                </td>
                <td class="td" colspan="3">
                    <el-date-picker size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.tdqdrq" style="width: 100%;"></el-date-picker>
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">剩余使用年限:</span>
                </td>
                <td class="td">
                    <el-input class="noborder" size="small" v-model="form.sysynx" disabled></el-input>
                </td>
                <td class="td">
                </td>
                <td class="td" colspan="3">
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr_title" id="1f">
                <td colspan="7" class="td">
                    <span class="title-small">求取年租金收益-比较法 </span>
                    <el-button class="btn-tj" size="small" v-if="!detail" type="text" @click="onCalculateRentClick()">求取</el-button>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">年租金:</span>
                </td>
                <td class="td">
                    <el-input class="noborder" size="small" v-model="form.nzj"></el-input>
                </td>
                <td class="td">
                    <span class="normal">估租方法</span>
                </td>
                <td class="td" colspan="3">
                    <el-input class="noborder" size="small" v-model="form.gzff"></el-input>
                </td>
                <td class="td_e"></td>
            </tr>

            <tr class="tr_title" id="2f">
                <td colspan="7" class="td">
                    <span class="title-small">求取年净租金收益</span>
                    <el-button class="btn-tj" size="small" type="text" v-if="!detail" @click="addfactor('annualRent')">添加</el-button>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">项目名称</span>
                </td>
                <td class="td">
                    <span class="normal">计算结果</span>
                </td>
                <td class="td">
                    <span class="normal">费用比例</span>
                </td>
                <td class="td" colspan="3">
                    <span class="normal">计算说明</span>
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr" v-for="o in annualRent" :key="o.xmmc" v-if="o.used">
                <td class="td">
                    <el-input class="noborder" size="small" v-model="o.xmmc"></el-input>
                </td>
                <td class="td">
                    <el-input class="noborder" size="small" v-model="o.jsjg"></el-input>
                </td>
                <td class="td">
                    <el-input class="noborder" size="small" v-model="o.fybl"></el-input>
                </td>
                <td class="td" colspan="3">
                    <el-input class="noborder" size="small" v-model="o.jssm"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-delete" v-if="!detail" @click="o.used = false"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">年净租金收益</span>
                </td>
                <td class="td">
                    <span class="normal">68820</span>
                </td>
                <td class="td">
                    <span class="normal"></span>
                </td>
                <td class="td" colspan="3">
                    <span class="normal">（年租金收益 - 运营费用 ） × 空置率</span>
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr_title" id="3f">
                <td colspan="7" class="td">
                    <span class="title-small">求取报酬率-累加法 </span>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">无风险报酬率</span>
                </td>
                <td class="td">
                    <span class="normal">投资风险补偿率</span>
                </td>
                <td class="td">
                    <span class="normal">管理负担补偿率</span>
                </td>
                <td class="td">
                    <span class="normal">缺乏流动性补偿率</span>
                </td>
                <td class="td">
                    <span class="normal">易于获得融资的优惠率</span>
                </td>
                <td class="td">
                    <span class="normal">所得税抵扣的优惠率</span>
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <el-input-number class="noborder" size="small" v-model="returnRate.wfxbcl" :min="0" :max="70"></el-input-number>
                </td>
                <td class="td">
                    <el-input-number class="noborder" size="small" v-model="returnRate.tzfxbcl" :min="0" :max="70"></el-input-number>
                </td>
                <td class="td">
                    <el-input-number class="noborder" size="small" v-model="returnRate.glfdbcl" :min="0" :max="70"></el-input-number>
                </td>
                <td class="td">
                    <el-input-number class="noborder" size="small" v-model="returnRate.qfldxbcl" :min="0" :max="70"></el-input-number>
                </td>
                <td class="td">
                    <el-input-number class="noborder" size="small" v-model="returnRate.yyhdrzdyhl" :min="0" :max="70"></el-input-number>
                </td>
                <td class="td">
                    <el-input-number class="noborder" size="small" v-model="returnRate.sdsdkdyhl" :min="0" :max="70"></el-input-number>
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">报酬率</span>
                </td>
                <td class="td">
                    <span class="normal">{{form.bcl}}</span>
                </td>
                <td class="td" colspan="4">
                    <span class="normal">报酬率 = 无风险报酬率＋投资风险补偿＋管理负担补偿＋缺乏流动性补偿－易于获得融资的优惠率 - 所得税抵扣的优惠率</span>
                </td>
                <td class="td_e"></td>
            </tr>

            <tr class="tr_title" id="4f">
                <td colspan="7" class="td">
                    <span class="title-small">求取收益价值 </span>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">年净租金收益</span>
                </td>
                <td class="td">
                    <span class="normal">报酬率</span>
                </td>
                <td class="td">
                    <span class="normal">剩余收益年限</span>
                </td>
                <td class="td">
                    <span class="normal"></span>
                </td>
                <td class="td">
                    <span class="normal"></span>
                </td>
                <td class="td">
                    <span class="normal"></span>
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">{{form.njzjsy}}</span>
                </td>
                <td class="td">
                    <span class="normal">{{form.bcl}}</span>
                </td>
                <td class="td">
                    <span class="normal">{{form.sysynx}}</span>
                </td>
                <td class="td">
                </td>
                <td class="td">
                </td>
                <td class="td">
                </td>
                <td class="td_e"></td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">收益价值</span>
                </td>
                <td class="td">
                    <span class="normal">{{form.syjz}}</span>
                </td>
                <td class="td" colspan="4">
                    <span class="normal">报酬率 = 无风险报酬率＋投资风险补偿＋管理负担补偿＋缺乏流动性补偿－易于获得融资的优惠率 - 所得税抵扣的优惠率</span>
                </td>
                <td class="td_e"></td>
            </tr>
        </table>
        <el-row v-if="!detail">
            <el-col :span="24">
                <el-button size="small" class="btn_l" @click="cancel">取消</el-button>
                <el-button size="small" class="btn_l" @click="save">保存</el-button>
                <el-button size="small" class="btn_l" type="primary" @click="submit">提交</el-button>
           </el-col>
        </el-row>
        <el-dialog :title="'添加'+ type+'因素' " :visible.sync="dialog">
            <div v-for="o in factor" :key="o.xmmc" class="fa">
                <el-checkbox v-model="o.used" v-if="!o.used" :label="o.xmmc" class="ck"></el-checkbox>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" type="primary" @click="dialog = false">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { editappraisal } from '@/api/singleapp/price'
import { formatDate, DateDiff } from '@/utils/date'
export default {
  props: {
    taskid: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 3
    },
    detail: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        gjdx: '君悦阁2102',
        dz: '福田区燕南路',
        jzmj: 78.71,
        wyyt: '商业',
        czf: '个人',
        fcyz: 859433,
        tdsynx: 70,
        tdqdrq: new Date('1995-06-21'),
        sysynx: 46,
        nzj: '1143元/年',
        gzff: '采用比较法求取年租金',
        bcl: 0.075,
        njzjsy: 68820,
        syjz: 88437
      },
      annualRent: [
        {
          xmmc: '空置率',
          jsjg: '',
          fybl: 0.1,
          jssm: '区域或项目内部的平均出租空置率',
          used: true
        },
        {
          xmmc: '租赁押金月份',
          jsjg: 15000,
          fybl: '2月',
          jssm: '以两个月的租赁押金 × 一年期存款利率',
          used: true
        },
        {
          xmmc: '租赁押金收益',
          jsjg: 225,
          fybl: 0.015,
          jssm: '',
          used: true
        },
        {
          xmmc: '房产税',
          jsjg: 10800,
          fybl: 0.012,
          jssm: '经营自用：房产原值 × 70% × 1.2%；出租房屋：房产租金收入 × 12%',
          used: true
        },
        {
          xmmc: '增值税',
          jsjg: 4286,
          fybl: 0.05,
          jssm: '含税销售额/(1 + 5%)]×5%',
          used: true
        },
        {
          xmmc: '城建维护税',
          jsjg: 300,
          fybl: 0.07,
          jssm: '增值税 × 7%',
          used: true
        },
        {
          xmmc: '教育费附加',
          jsjg: 214,
          fybl: 0.05,
          jssm: '增值税 × 5%',
          used: true
        },
        {
          xmmc: '印花税',
          jsjg: 900,
          fybl: 0.01,
          jssm: '年收入 × 0.1%',
          used: true
        },
        {
          xmmc: '维修费',
          jsjg: 1800,
          fybl: 0.02,
          jssm: '年收入 × 2%',
          used: true
        },
        {
          xmmc: '管理费',
          jsjg: 2700,
          fybl: 0.03,
          jssm: '年收入 × 3%',
          used: true
        },
        {
          xmmc: '保险费',
          jsjg: 180,
          fybl: 0.02,
          jssm: '房屋重置成本或房屋原值 × 0.2%',
          used: true
        }
      ],
      returnRate: {
        wfxbcl: 0.015,
        tzfxbcl: 0.032,
        glfdbcl: 0.019,
        qfldxbcl: 0.016,
        yyhdrzdyhl: 0.05,
        sdsdkdyhl: 0.1
      },
      dialog: false,
      type: '',
      factor: []
    }
  },
  methods: {
    setstept(val) {
      this.$emit('setstept', val)
    },
    addfactor(type) {
      this.dialog = true
      this.factor = this.annualRent
      this.type = '年净租金收益'
    },
    onCalculateRentClick() {
      const routerData = {
        name: 'addExample',
        query: { task_id: this.$route.query.task_id, isIncome: true }
      }
      this.$router.push(routerData)
    },
    cancel() {
      if (this.price !== 0) {
        this.$confirm('您有数据尚未保存, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$router.push({ name: 'task' })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            })
          })
      } else {
        this.$router.push({ name: 'task' })
      }
    },
    save() {
      this.list[5].comparables.forEach(element => {
        element.content = formatDate(new Date(element.content), 'yyyy-MM-dd')
      })
      var form = {
        id: this.taskid,
        next: false,
        value: this.price,
        data: this.list
      }
      editappraisal(form).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    submit() {
      const routerData = {
        name: 'taskDetail',
        query: { id: this.$route.query.task_id, status: '价格评估' }
      }
      this.$router.push(routerData)
    }
  },
  watch: {
    'form.tdsynx'(val) {
      this.form.sysynx =
        val - DateDiff('y', new Date(this.form.tdqdrq), new Date())
    },
    'form.tdqdrq'(val) {
      this.form.sysynx =
        this.form.tdsynx - DateDiff('y', new Date(val), new Date())
    },
    'returnRate.wfxbcl'(val) {
      this.form.bcl =
        val + this.returnRate.tzfxbcl + this.returnRate.glfdbcl + this.returnRate.qfldxbcl - this.returnRate.yyhdrzdyhl - this.returnRate.sdsdkdyhl
    },
    'returnRate.tzfxbcl'(val) {
      this.form.bcl =
       this.returnRate.wfxbcl + val + this.returnRate.glfdbcl + this.returnRate.qfldxbcl - this.returnRate.yyhdrzdyhl - this.returnRate.sdsdkdyhl
    },
    'returnRate.glfdbcl'(val) {
      this.form.bcl =
       this.returnRate.wfxbcl + this.returnRate.tzfxbcl + val + this.returnRate.qfldxbcl - this.returnRate.yyhdrzdyhl - this.returnRate.sdsdkdyhl
    },
    'returnRate.qfldxbcl'(val) {
      this.form.bcl =
     this.returnRate.wfxbcl + this.returnRate.tzfxbcl + this.returnRate.glfdbcl + val - this.returnRate.yyhdrzdyhl - this.returnRate.sdsdkdyhl
    },
    'returnRate.yyhdrzdyhl'(val) {
      this.form.bcl =
       this.returnRate.wfxbcl + this.returnRate.tzfxbcl + this.returnRate.glfdbcl + this.returnRate.qfldxbcl - val - this.returnRate.sdsdkdyhl
    },
    'returnRate.sdsdkdyhl'(val) {
      this.form.bcl =
       this.returnRate.wfxbcl + this.returnRate.tzfxbcl + this.returnRate.glfdbcl + this.returnRate.qfldxbcl - this.returnRate.yyhdrzdyhl - val
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";
.fa {
  float: left;
  width: 33.33%;
}
.td {
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0.2px solid #c0c4cc;
  width: 6%;
  align-content: center;
}
.td_e {
  width: 1.3%;
}

.normal {
  width: -webkit-fill-available;
}
.el-input-number {
  width: 100%;
}
.el-icon-delete {
  margin-left: 10px;
}
.el-button--text {
  margin-left: 10px;
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
.ck {
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.textarea {
  width: 100%;
  border: none;
  text-align: center;
}
</style>