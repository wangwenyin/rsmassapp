<template>
  <div class="margin10">
    <el-row v-if="!detail">
      <el-col :span="24">
        <div class="title"></div>
      </el-col>
    </el-row>
    <table class="table">
      <tr class="tr_title">
        <td class="td">
          <span class="normal">因素名称:</span>
        </td>
        <td class="td">
          <span class="normal">评估对象</span>
        </td>
        <td class="td" style="height:35px" :span="24/(num)" v-for="o in (num)" :key="o">
          <span class="normal" style="margin-top: 8px;">可比实例{{o}}</span>
        </td>
        <td class="td_e"></td>
      </tr>
      <tr class="tr" v-for="o in basic" :key="o.para_id" v-if="o.used">
        <td class="td">
          <span class="normal">{{o.description}}</span>
        </td>
        <td class="td">
          <textarea class="textarea" size="small" v-model="o.property.content" readonly></textarea>
        </td>
        <td class="td" :span="24/num" v-for="i in o.comparables" :key="i">
          <textarea class="textarea" size="small" v-model="i.content" readonly></textarea>
        </td>
        <td class="td_e"></td>
      </tr>
      <tr class="tr_title" id="1f">
        <td colspan="10" class="td">
          <span class="title-small">交易状况 </span>
          <el-radio-group v-model="jyzk" size="mini" class="rad">
            <el-radio-button :label="true">说明表</el-radio-button>
            <el-radio-button :label="false">指数表</el-radio-button>
          </el-radio-group>
          <el-button class="btn-tj" v-if="!detail" type="text" @click="addfactor('sale')">添加</el-button>
        </td>
      </tr>
      <tr class="tr" v-for="o in sale" :key="o.para_id" v-if="o.used">
        <td class="td">
          <span class="normal">{{o.description}}</span>
        </td>
        <td class="td" v-if="jyzk">
          <el-date-picker v-if="o.description==='交易时间'" disabled="true" size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="o.property.content" style="width: 100%;"></el-date-picker>
          <el-input class="noborder" v-else  size="small" disabled="true" v-model="o.property.content"></el-input>
        </td>
        <td class="td" v-if="!jyzk">
          <el-input class="noborder" size="small" :disabled="true" v-model="o.property.index"></el-input>
        </td>
        <td class="td" v-if="jyzk" :span="24/num" v-for="i in o.comparables" :key="i">
          <el-date-picker v-if="o.description==='交易时间'" size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" disabled="true" v-model="i.content" style="width: 100%;"></el-date-picker>
          <el-input class="noborder" v-else size="small" v-model="i.content" disabled="true"></el-input>
        </td>
        <td class="td" v-if="!jyzk" :span="24/num" v-for="i in o.comparables" :key="i">
          <el-input-number class="noborder" size="small" v-model="i.index" :min="80" :max="120" @change="com(total_sale,sale)"></el-input-number>
        </td>
        <td class="td_e" @click="com(total_sale,sale)">
          <i class="el-icon-delete" v-if="!detail" @click="o.used = false"></i>
        </td>
      </tr>
      <tr class="tr" v-if="!jyzk">
        <td class="td">
          <span class="normal">合计:</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" v-model="defaultvalue" :disabled="true"></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input class="noborder" size="small" v-model="total_sale.comparables[o-1]" :disabled="true"></el-input>
        </td>
        <td class="td_e"></td>
      </tr>
      <tr class="tr_title" id="2f">
        <td colspan="10" class="td">
          <span class="title-small">区位状况 </span>
          <el-radio-group v-model="qwzk" size="mini" class="rad">
            <el-radio-button :label="true">说明表</el-radio-button>
            <el-radio-button :label="false">指数表</el-radio-button>
          </el-radio-group>
          <el-button class="btn-tj" type="text" v-if="!detail" @click="addfactor('location')">添加</el-button>
        </td>
      </tr>
      <tr class="tr" v-for="o in location" :key="o.para_id" v-if="o.used">
        <td class="td">
          <span class="normal">{{o.description}}</span>
        </td>
        <td class="td" v-if="qwzk">
          <textarea class="textarea" size="small" v-model="o.property.content"></textarea>
        </td>
        <td class="td" v-if="!qwzk">
          <el-input class="noborder" size="small" :disabled="true" v-model="o.property.index"></el-input>
        </td>
        <td class="td" :span="24/num" v-for="i in o.comparables" :key="i">
          <textarea class="textarea" size="small" v-if="qwzk" v-model="i.content"></textarea>
          <el-input-number class="noborder" size="small" v-if="!qwzk" v-model="i.index" @change="com(total_location,location)" :min="80" :max="120"></el-input-number>
        </td>
        <td class="td_e" @click="com(total_location,location)">
          <i class="el-icon-delete" v-if="!detail" @click="o.used = false"></i>
        </td>
      </tr>
      <tr class="tr" v-if="!qwzk">
        <td class="td">
          <span class="normal">合计:</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" v-model="defaultvalue" readonly></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input class="noborder" size="small" v-model="total_location.comparables[o-1]" readonly></el-input>
        </td>
        <td class="td_e"></td>
      </tr>
      <tr class="tr_title" id="3f">
        <td colspan="10" class="td">
          <span class="title-small">权益状况 </span>
          <el-radio-group v-model="qyzk" size="mini" class="rad">
            <el-radio-button :label="true">说明表</el-radio-button>
            <el-radio-button :label="false">指数表</el-radio-button>
          </el-radio-group>
          <el-button class="btn-tj" type="text" v-if="!detail" @click="addfactor('right')">添加</el-button>
        </td>
      </tr>
      <tr class="tr" v-for="o in right" :key="o.para_id" v-if="o.used">
        <td class="td">
          <span class="normal">{{o.description}}</span>
        </td>
        <td class="td" v-if="qyzk">
          <textarea class="textarea" size="small" v-model="o.property.content"></textarea>
        </td>
        <td class="td" v-if="!qyzk">
          <el-input-number class="noborder" size="small" :disabled="true" v-model="o.property.index"></el-input-number>
        </td>
        <td class="td" :span="24/num" v-for="i in o.comparables" :key="i">
          <textarea class="textarea" size="small" v-if="qyzk" v-model="i.content"></textarea>
          <el-input-number class="noborder" size="small" v-if="!qyzk" v-model="i.index" @change="com(total_right,right)" :min="80" :max="120"></el-input-number>
        </td>
        <td class="td_e" @click="com(total_right,right)">
          <i class="el-icon-delete" v-if="!detail" @click="o.used = false"></i>
        </td>
      </tr>
      <tr class="tr" v-if="!qyzk">
        <td class="td">
          <span class="normal">合计:</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" v-model="defaultvalue" readonly></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input class="noborder" size="small" v-model="total_right.comparables[o-1]" readonly></el-input>
        </td>
        <td class="td_e"></td>
      </tr>
      <tr class="tr_title" id="4f">
        <td colspan="10" class="td">
          <span class="title-small">实物状况 </span>
          <el-radio-group v-model="swzk" size="mini" class="rad">
            <el-radio-button :label="true">说明表</el-radio-button>
            <el-radio-button :label="false">指数表</el-radio-button>
          </el-radio-group>
          <el-button class="btn-tj" type="text" v-if="!detail" @click="addfactor('object')">添加</el-button>
        </td>
      </tr>
      <tr class="tr" v-for="o in object" :key="o.para_id" v-if="o.used">
        <td class="td">
          <span class="normal">{{o.description}}</span>
        </td>
        <td class="td" v-if="swzk">
          <textarea class="textarea" size="small" v-model="o.property.content"></textarea>
        </td>
        <td class="td" v-if="!swzk">
          <el-input-number class="noborder" size="small" :disabled="true" v-model="o.property.index"></el-input-number>
        </td>
        <td class="td" :span="24/num" v-for="i in o.comparables" :key="i">
          <textarea class="textarea" size="small" v-if="swzk" v-model="i.content"></textarea>
          <el-input-number class="noborder" size="small" v-if="!swzk" v-model="i.index" @change="com(total_object,object)" :min="80" :max="120"></el-input-number>
        </td>
        <td class="td_e" @click="com(total_object,object)">
          <i class="el-icon-delete" v-if="!detail" @click="o.used = false"></i>
        </td>
      </tr>
      <tr class="tr" v-if="!swzk">
        <td class="td">
          <span class="normal">合计:</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" v-model="defaultvalue" readonly></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input class="noborder" size="small" v-model="total_object.comparables[o-1]" readonly></el-input>
        </td>
        <td class="td_e"></td>
      </tr>
      <tr class="tr_title">
        <td colspan="10" class="td">
          <span class="title-small">比准价格 </span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">交易状况调整:</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" v-model="defaultvalue" :disabled="true"></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input-number class="noborder" size="small" v-model="total_sale.comparables[o-1]" :disabled="true"></el-input-number>
        </td>
        <td class="td_e">
          <a href="#1f">
            <el-button size="small" type="text">跳转</el-button>
          </a>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">区位状况调整:</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" v-model="defaultvalue" :disabled="true"></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input-number class="noborder" size="small" v-model="total_location.comparables[o-1]" :disabled="true"></el-input-number>
        </td>
        <td class="td_e">
          <a href="#2f">
            <el-button size="small" type="text">跳转</el-button>
          </a>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">权益状况调整:</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" v-model="defaultvalue" :disabled="true"></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input-number class="noborder" size="small" v-model="total_right.comparables[o-1]" :disabled="true"></el-input-number>
        </td>
        <td class="td_e">
          <a href="#3f">
            <el-button size="small" type="text">跳转</el-button>
          </a>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">实物状况调整:</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" v-model="defaultvalue" :disabled="true"></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input-number class="noborder" size="small" v-model="total_object.comparables[o-1]" :disabled="true"></el-input-number>
        </td>
        <td class="td_e">
          <a href="#4f">
            <el-button size="small" type="text">跳转</el-button>
          </a>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">比准价格（元/m²）</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" readonly></el-input>
        </td>
        <td class="td" :span="24/num" v-for="o in num" :key="o">
          <el-input class="noborder" size="small" v-model="price_bz.comparables[o-1]" readonly></el-input>
        </td>
        <td class="td_e"></td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">评估价格（元/m²）</span>
        </td>
        <td class="td">
          <el-input class="noborder" size="small" readonly></el-input>
        </td>
        <td class="td" :colspan="num">
          <el-input class="noborder" size="small" v-model="price" readonly></el-input>
        </td>
        <td class="td_e"></td>
      </tr>
    </table>
    <el-row v-if="!detail">
      <el-col :span="24">
        <el-button size="small" class="btn_l" @click="cancel">取消</el-button>
        <el-button size="small" class="btn_l" @click="save">保存</el-button>
        <el-button size="small" class="btn_l" type="primary" @click="nextstep">提交</el-button>
        <el-button size="small" class="btn_l" type="primary" @click="setstept(1)">上一步</el-button>
      </el-col>
    </el-row>
    <el-dialog :title="'添加'+ type+'因素' " :visible.sync="dialog">
      <div v-for="o in factor" :key="o.para_id" class="fa">
        <el-checkbox v-model="o.used" v-if="!o.used" :label="o.description" class="ck"></el-checkbox>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="add(factor_total,factor)">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getappraisal, getnousefactor, editappraisal } from '@/api/singleapp/price'
import { formatDate } from '@/utils/date'
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
    },
    isIncome: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      jyzk: true,
      qwzk: true,
      qyzk: true,
      swzk: true,
      type: '',
      factor: [],
      basic: [],
      location: [],
      right: [],
      object: [],
      sale: [],
      defaultvalue: 100,
      factor_total: {
        comparables: [100, 100, 100, 100, 100]
      },
      dialog: false,
      total_location: {
        comparables: [100, 100, 100, 100, 100]
      },
      total_right: {
        comparables: [100, 100, 100, 100, 100]
      },
      total_object: {
        comparables: [100, 100, 100, 100, 100]
      },
      total_sale: {
        comparables: [100, 100, 100, 100, 100]
      },
      price_bz: {
        comparables: [100, 100, 100, 100, 100]
      },
      price: 0
    }
  },
  mounted() {
    this.Getappraisal()
    this.com(this.total_location, this.location)
    this.com(this.total_right, this.right)
    this.com(this.total_object, this.object)
    this.com(this.total_sale, this.sale)
  },
  watch: {},
  computed: {},
  methods: {
    com(totalList, typeList) {
      totalList.comparables = [100, 100, 100, 100, 100]
      typeList.forEach(element => {
        if (element.used) {
          for (let i = 0; i < element.comparables.length; i++) {
            totalList.comparables[i] += element.comparables[i].index - 100
          }
        }
      })
      this.total()
    },
    add(factor_total, factor) {
      this.dialog = false
      this.com(factor_total, factor)
    },
    total() {
      let sum = 0
      for (let i = 0; i < this.num; i++) {
        this.price_bz.comparables[i] = Math.round(
          this.list[4].comparables[i].content *
            this.total_sale.comparables[i] /
            100 *
            this.total_location.comparables[i] /
            100 *
            this.total_right.comparables[i] /
            100 *
            this.total_object.comparables[i] /
            100
        )
        sum += this.price_bz.comparables[i]
      }
      this.price = Math.round(sum / this.num)
    },
    setstept(val) {
      this.$emit('setstept', val)
    },
    Getappraisal() {
      getappraisal(this.taskid).then(response => {
        this.list = response.data
        response.data.forEach(element => {
          switch (element.type) {
            case 'basic':
              this.basic.push(element)
              break
            case 'location':
              this.location.push(element)
              break
            case 'right':
              this.right.push(element)
              break
            case 'object':
              this.object.push(element)
              break
            case 'sale':
              this.sale.push(element)
              break
            default:
              break
          }
        })
      })
    },
    Getnousefactor(type) {
      getnousefactor(this.taskid, type).then(response => {
        this.factor = response.data
      })
    },
    addfactor(type) {
      this.dialog = true
      switch (type) {
        case 'location':
          this.factor = this.location
          this.type = '区位状况'
          this.factor_total = this.total_location
          break
        case 'right':
          this.factor = this.right
          this.type = '权益状况'
          this.factor_total = this.total_right
          break
        case 'object':
          this.factor = this.object
          this.type = '实物状况'
          this.factor_total = this.total_object
          break
        case 'sale':
          this.factor = this.sale
          this.type = '交易状况'
          this.factor_total = this.total_sale
          break
        default:
          break
      }
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
    nextstep() {
      this.list[5].comparables.forEach(element => {
        element.content = formatDate(new Date(element.content), 'yyyy-MM-dd')
      })
      var form = {
        id: this.taskid,
        next: true,
        value: this.price,
        data: this.list
      }
      editappraisal(form).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
          if (this.isIncome) {
            const routerData = {
              name: 'incomeApproach',
              query: { task_id: this.taskid }
            }
            this.$router.push(routerData)
          } else {
            const routerData = {
              name: 'taskDetail',
              query: { id: this.taskid, status: '报告撰写' }
            }
            this.$router.push(routerData)
          }
        } else {
          alert(response.msg)
        }
      })
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
  width: 0.3%;
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
.textarea{
  width: 100%;
  border: none;
  text-align: center
}
</style>