
<template>
    <div>
        <div>
            <table class="table">
                <tr class="tr_title">
                    <td colspan="24" class="td">
                        <span class="title">致估价委托人的函 </span>
                        <el-button style="margin-left: 83%;" size="small" type="text" v-if="!detail">模板</el-button>
                    </td>
                </tr>
                <tr class="tr">
                    <td class="td" colspan="24">
                        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 8}" placeholder="请输入内容" v-model="form.letter.content">
                        </el-input>
                    </td>
                </tr>
                <tr class="tr">
                    <td class="td" colspan="1" >
                        <span class="normal">估价机构：</span>
                    </td>
                    <td class="td" colspan="8">
                        <el-input class="noborder" size="small" v-model="form.appraisalcompany.name"></el-input>
                    </td>
                    <td class="td" colspan="1">
                        <span class="normal">出函日期：</span>
                    </td>
                    <td class="td" colspan="9">
                        <el-date-picker class="noborder" size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.letter.date" style="width: 100%;"></el-date-picker>
                    </td>
                     <td class="td_e">
                    </td>
                </tr>
                <tr class="tr_title">
                    <td colspan="24" class="td">
                        <span class="title">注册房地产估价师声明 </span>
                        <el-button style="margin-left: 78%" size="small" @click="creat(form.certification)" type="text" v-if="!detail">新建</el-button>
                        <el-button size="small" @click="add('certification')" type="text" v-if="!detail">添加</el-button>
                    </td>
                </tr>
                <tr v-for="(o, index) in form.certification" :key="o.para_id">
                    <td class="td" colspan="1">
                        <span class="normal">{{index+1}}</span>
                    </td>
                    <td class="td" colspan="18">
                        <el-input size="small" class="noborder" v-model="o.content"></el-input>
                    </td>
                    <td class="td_e">
                        <i class="el-icon-delete" v-if="!detail" @click="delmodel(form.certification,index)"></i>
                    </td>
                </tr>
                <tr class="tr">
                    <td class="td" colspan="1">
                        <span class="normal" style="width: 137px;">注册房地产估价师：</span>
                    </td>
                    <td class="td" colspan="8">
                        <el-input class="noborder" size="small" v-model="form.appraiser"></el-input>
                    </td>
                    <td class="td" colspan="1">
                        <span class="normal">查勘日期：</span>
                    </td>
                    <td class="td" colspan="9">
                        <el-date-picker class="noborder" size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.inpect_date" style="width: 100%;"></el-date-picker>
                    </td>
                    <td class="td_e">
                    </td>
                </tr>
                <tr class="tr_title">
                    <td colspan="24" class="td">
                        <span class="title">估价假设和限制条件 </span>
                        <el-button size="small" type="text" style="margin-left: 82.5%;" @click="d_gjtj=true" v-if="!detail">添加</el-button>
                    </td>
                </tr>
                <tr class="trtitle1">
                    <td colspan="24" class="td">
                        <span class="title-small">估价假设条件 </span>
                        <el-button style="margin-left: 83%;" size="small" @click="creat(form.condition.assumption)" type="text" v-if="!detail">新建</el-button>
                        <el-button size="small" type="text" @click="add('assumption')" v-if="!detail">添加</el-button>
                    </td>
                </tr>
                <tr v-for="(o, index) in form.condition.assumption" :key="o.text">
                    <td class="td" colspan="1">
                        <span class="normal">{{index+1}}</span>
                    </td>
                    <td class="td" colspan="18">
                        <el-input class="noborder" size="small" v-model="o.content"></el-input>
                    </td>
                    <td class="td_e">
                        <i class="el-icon-delete" v-if="!detail" @click="delmodel(form.condition.assumption,index)"></i>
                    </td>
                </tr>
                <tr class="trtitle1">
                    <td colspan="24" class="td">
                        <span class="title-small">估价限制条件 </span>
                        <el-button style="margin-left: 83%" size="small" @click="creat(form.condition.limiting)" type="text" v-if="!detail">新建</el-button>
                        <el-button size="small" type="text" @click="add('limiting')" v-if="!detail">添加</el-button>
                    </td>
                </tr>
                <tr v-for="(o, index) in form.condition.limiting" :key="o.text">
                    <td class="td" colspan="1">
                        <span class="normal">{{index+1}}</span>
                    </td>
                    <td class="td" colspan="18">
                        <el-input size="small" class="noborder" v-model="o.content"></el-input>
                    </td>
                    <td class="td_e">
                        <i class="el-icon-delete" v-if="!detail" @click="delmodel(form.condition.limiting,index)"></i>
                    </td>
                </tr>
                <tr class="trtitle1" v-if="t1">
                    <td colspan="24" class="td">
                        <span class="title-small">未经调查确认或无法调查的资料 </span>
                        <el-button size="small" style="margin-left: 76%" type="text" @click="newwdczl" v-if="!detail">新建</el-button>
                    </td>
                </tr>
                <tr v-for="(o, index) in wdczl" :key="o.text" v-if="t1">
                    <td class="td" colspan="1">
                        <span class="normal">{{index+1}}</span>
                    </td>
                    <td class="td" colspan="18">
                        <el-input size="small" class="noborder" v-model="o.text"></el-input>
                    </td>
                    <td class="td_e">
                        <i class="el-icon-delete" v-if="!detail" @click="delwdczl(index)"></i>
                    </td>
                </tr>
                <tr class="trtitle1" v-if="t2">
                    <td colspan="24" class="td">
                        <span class="title-small">未考虑因素及一些特殊处理 </span>
                        <el-button size="small" style="margin-left: 78.6%;" type="text" @click="newwklys" v-if="!detail">新建</el-button>
                    </td>
                </tr>
                <tr v-for="(o, index) in wklys" :key="o.text" v-if="t2">
                    <td class="td" colspan="1">
                        <span class="normal">{{index+1}}</span>
                    </td>
                    <td class="td" colspan="18">
                        <el-input size="small" class="noborder" v-model="o.text"></el-input>
                    </td>
                    <td class="td_e">
                        <i class="el-icon-delete" v-if="!detail" @click="delwklys(index)"></i>
                    </td>
                </tr>
                <tr class="trtitle1" v-if="t3">
                    <td colspan="24" class="td">
                        <span class="title-small">其他说明 </span>
                        <el-button size="small" style="margin-left: 89%;" type="text" @click="newqtsm" v-if="!detail">新建</el-button>
                    </td>
                </tr>
                <tr v-for="(o, index) in qtsm" :key="o.text" v-if="t3">
                    <td class="td" colspan="1">
                        <span class="normal">{{index+1}}</span>
                    </td>
                    <td class="td" colspan="18">
                        <el-input size="small" class="noborder" v-model="o.text"></el-input>
                    </td>
                    <td class="td_e">
                        <i class="el-icon-delete" v-if="!detail" @click="delqtsm(index)"></i>
                    </td>
                </tr>
            </table>
        </div>
        <el-dialog :title="dialogtitle" :visible.sync="dialog">
            <el-table :data="model" border size='small' stripe='true' style="width: 100%">
                <el-table-column width="50" type="index" :index="typeIndex" label="序号" align="center"></el-table-column>
                <el-table-column prop="description" label="内容"></el-table-column>
                <el-table-column label="操作" width="50">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="addmodel(type,addedmodel,scope.row)" v-if="!detail">添加</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialog = false">取 消</el-button>
                <el-button type="primary" size="small" @click="dialog = false">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="添加估价假设和限制条件" :visible.sync="d_gjtj">
            <div>
                <el-checkbox v-model="t1" label="未经调查确认或无法调查的资料" border></el-checkbox>
                <el-checkbox v-model="t2" label="未考虑因素及一些特殊处理" border></el-checkbox>
                <el-checkbox v-model="t3" label="其他说明" border></el-checkbox>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="d_gjtj = false">取 消</el-button>
                <el-button size="small" type="primary" @click="d_gjtj = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { getreportmodel } from '@/api/singleapp/report'
export default {
  props: {
    form: {
      type: Object,
      default: null
    },
    detail: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialog: false,
      dialogtitle: '',
      type: '',
      model: [],
      addedmodel: [],
      d_gjtj: false,
      t1: false,
      t2: false,
      t3: false
    }
  },

  mounted() {
    this.Getreport()
  },
  methods: {
    add(item) {
      this.type = item
      switch (item) {
        case 'certification':
          this.dialogtitle = '注册房地产估价师声明'
          this.addedmodel = this.form.certification
          break
        case 'assumption':
          this.dialogtitle = '估价假设条件'
          this.addedmodel = this.form.condition.assumption
          break
        case 'limiting':
          this.dialogtitle = '估价限制条件'
          this.addedmodel = this.form.condition.limiting
          break
        default:
          break
      }
      this.Getmodel(item, this.addedmodel)
      this.dialog = true
    },
    addmodel(type, modlelist, value) {
      modlelist.push({ para_id: value.id, content: value.description })
      this.Getmodel(type, modlelist)
    },
    creat(modlelist) {
      modlelist.push({ content: '' })
    },
    delmodel(modlelist, index) {
      modlelist.splice(index, 1)
    },
    Getmodel(item, addedmodel) {
      getreportmodel(item).then(response => {
        this.model = response.data
        addedmodel.forEach(element => {
          for (let index = 0; index < this.model.length; index++) {
            if (this.model[index].id === element.para_id) {
              this.model.splice(index, 1)
              continue
            }
          }
        })
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";
.el-textarea__inner {
  border: none;
}
.normal {
  width: -webkit-fill-available;
}
.td{
    width: 140px;
}
</style>
