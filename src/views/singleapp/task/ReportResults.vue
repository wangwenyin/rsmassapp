<template>
  <div>
    <div>
      <table class="table">
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">估价委托人 </span>
          </td>
        </tr>
        <tr class="tr">
          <td class="td" colspan="1">
            <span class="normal">委托人：</span>
          </td>
          <td class="td" colspan="8">
            <el-input class="noborder" size="small" v-model="form.client.name"></el-input>
          </td>
          <td class="td" colspan="1">
            <span class="normal">类型：</span>
          </td>
          <td class="td" colspan="14">
            <el-select class="noborder" size="small" style="width:100%" v-model="form.client.type">
              <el-option label="单位"></el-option>
              <el-option label="个人"></el-option>
            </el-select>
          </td>
           <!-- <td class="td_e">
          </td> -->
        </tr>
        <tr class="tr">
          <td class="td" colspan="1">
            <span class="normal">地址：</span>
          </td>
          <td class="td" colspan="8">
            <el-input class="noborder" size="small" v-model="form.client.address"></el-input>
          </td>
          <td class="td" colspan="1">
            <span class="normal">法人：</span>
          </td>
          <td class="td" colspan="14">
            <el-input class="noborder" size="small" v-model="form.client.legal"></el-input>
          </td>
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">估价机构 </span>
          </td>
        </tr>
        <tr class="tr">
         
              <td class="td" colspan="1">
                <span class="normal">估价机构：</span>
              </td>
              <td class="td" colspan="8">
                <el-select class="noborder"  v-model="form.appraisalcompany.name" size="small" style="width:100%">
                  <el-option label="广东**房地产评估咨询有限公司"></el-option>
                  <el-option label="广东**房地产评估咨询有限公司"></el-option>
                  <el-option label="广东**房地产评估咨询有限公司"></el-option>
                </el-select>
              </td>
              <td class="td" colspan="1">
                <span class="normal">资质等级：</span>
              </td>
              <td class="td" colspan="14">
                <el-select class="noborder" style="width:100%" v-model="form.appraisalcompany.qualif" size="small">
                  <el-option label="一级"></el-option>
                  <el-option label="二级"></el-option>
                  <el-option label="三级"></el-option>
                </el-select>
              </td>
        </tr>
        <tr class="tr">
              <td class="td" colspan="1">
                <span class="normal">地址：</span>
              </td>
              <td class="td" colspan="8">
                <el-input class="noborder" v-model="form.appraisalcompany.address" size="small"></el-input>
              </td>
              <td class="td" colspan="1">
                <span class="normal">法人：</span>
              </td>
              <td class="td" colspan="14">
                <el-input class="noborder" v-model="form.appraisalcompany.legal" size="small"></el-input>
              </td>
        </tr>
        <tr class="tr">
              <td class="td" colspan="1">
                <span class="normal">证书编号：</span>
              </td>
              <td class="td" colspan="23">
                <el-input class="noborder" v-model="form.appraisalcompany.cert_no" size="small"></el-input>
              </td>
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">估价对象 </span>
          </td>
        </tr>
        <tr class="tr">
              <td class="td" colspan="1">
                <span class="normal">基本情况：</span>
              </td>
              <td class="td" colspan="23">
                <el-input class="noborder" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.object.basic">
                </el-input>
              </td>
        </tr>
        <tr class="tr">
         
              <td class="td" colspan="1">
                <span class="normal">权益状况：</span>
              </td>
              <td class="td" colspan="23">
                <el-input class="noborder" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.object.right">
                </el-input>
              </td>
          
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">价值时点 </span>
          </td>
        </tr>
        <tr class="tr">
              <td class="td" colspan="1">
                <span class="normal">价值时点：</span>
              </td>
              <td class="td" colspan="8">
                <el-date-picker class="noborder" size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.value_date" style="width: 100%;"></el-date-picker>
              </td>
              <td class="td" colspan="1">
                <span class="normal"></span>
              </td>
              <td class="td" colspan="14"></td>
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">价值类型 </span>
            <el-button type="text" size="small" style="margin-left: 88%;" v-if="!detail">模板</el-button>
          </td>
        </tr>
        <tr class="tr">
              <td class="td" colspan="1">
                <span class="normal">价值类型</span>
              </td>
              <td class="td" colspan="23">
                <el-input class="noborder" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.value_type">
                </el-input>
              </td>
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">估价依据 </span>
            <el-button style="margin-left: 85.2%;" size="small" type="text" @click="creat(form.evidence)" v-if="!detail">新建</el-button>
            <el-button size="small" type="text" @click="add('evidence')" v-if="!detail">添加</el-button>
          </td>
        </tr>
        <tr v-for="(o, index) in form.evidence" :key="o.text">
          <td class="td" colspan="1">
            <span class="normal">{{index+1}}</span>
          </td>
          <td class="td" colspan="22">
            <el-col :span="17">
              <el-input class="noborder" size="small" v-model="o.content"></el-input>
            </el-col>
            <el-col :span="7">
              <el-select v-model="o.type" class="noborder" size="small" style="width:100%" >
                <el-option label="法律、法规和政策性文件"></el-option>
                <el-option label="技术标准、规程、规范"></el-option>
                <el-option label="委托人提供的相关资料"></el-option>
                <el-option label="估计人员调查搜集的资料"></el-option>
              </el-select>
            </el-col>
          </td>
          <td class="td_e">
            <i class="el-icon-delete" v-if="!detail" @click="delmodel(form.evidence,index)"></i>
          </td>
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">估价原则 </span>
            <el-button style="margin-left: 88.5%;" size="small" type="text" @click="add('principle')" v-if="!detail">添加</el-button>
          </td>
        </tr>
        <tr v-for="(o, index) in form.principle" :key="o.id">
          <td class="td" colspan="1">
            <span class="normal">{{index+1}}</span>
          </td>
          <td class="td" colspan="22">
            <el-input class="noborder" size="small" v-model="o.content"></el-input>
          </td>
          <td class="td_e">
            <i class="el-icon-delete" v-if="!detail" @click="delmodel(form.principle,index)"></i>
          </td>
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">估价方法 </span>
            <el-button size="small" style="margin-left: 88.5%" type="text" v-if="!detail">模板</el-button>
          </td>
        </tr>
        <tr class="tr">
              <td class="td" colspan="1">
                <span class="normal">选择理由</span>
              </td>
              <td class="td" colspan="23">
                <el-input class="noborder" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.value_method.reason">
                </el-input>
              </td>
        </tr>
        <tr class="tr">
        
              <td class="td" colspan="1">
                <span class="normal">估价方法：</span>
              </td>
              <td class="td" colspan="8">
                <el-select class="noborder" size="small" v-model="form.value_method.method">
                  <el-option label="市场法"></el-option>
                  <el-option label="收益法"></el-option>
                  <el-option label="成本法"></el-option>
                </el-select>
              </td>
              <td class="td" colspan="1"></td>
              <td class="td" colspan="14"></td>
        
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">估价结果 </span>
            <el-button size="small" style="margin-left: 88.5%" type="text" v-if="!detail">模板</el-button>
          </td>
        </tr>
        <tr class="tr">
        
              <td class="td" colspan="1">
                <span class="normal">估价结果</span>
              </td>
              <td class="td" colspan="23">
                <el-input class="noborder" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.final_opinion">
                </el-input>
              </td>
          
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">作业日期 </span>
            <el-button size="small" style="margin-left: 88.5%" type="text" v-if="!detail">模板</el-button>
          </td>
        </tr>
        <tr>
              <td class="td" colspan="1">
                <span class="normal">作业日期：</span>
              </td>
              <td class="td" colspan="23">
                <span>
                  <el-date-picker class="noborder" size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.work_date.start"></el-date-picker>
                </span>
                <span class="normal">至</span>
                <span>
                  <el-date-picker size="small" type="date" class="noborder" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.work_date.end"></el-date-picker>
                </span>
              </td>
        </tr>
        <tr class="tr_title">
          <td colspan="24" class="td">
            <span class="title">报告有效期 </span>
          </td>
        </tr>
        <tr class="tr">
              <td class="td" colspan="1">
                <span class="normal">跨度：</span>
              </td>
              <td class="td" colspan="8">
                <el-input class="noborder" size="small" v-model="form.effect_date.term"></el-input>
              </td>
              <td class="td" colspan="1">
                <span class="normal">有效期开始时间：</span>
              </td>
              <td class="td" colspan="14">
                <el-date-picker class="noborder" size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.effect_date.start"></el-date-picker>
              </td>
        </tr>
      </table>
    </div>
    <el-dialog :title="dialogtitle" :visible.sync="dialog">
      <el-table :data="model" border size='small' stripe='true' style="width: 100%">
        <el-table-column width="50" type="index" :index="typeIndex" label="序号" align="center"></el-table-column>
        <el-table-column prop="description" label="内容"></el-table-column>
        <el-table-column prop="type" label="类型" v-if="type==='evidence'"></el-table-column>
        <el-table-column label="操作" width="50">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addmodel(type,addedmodel,scope.row)">添加</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialog = false">取 消</el-button>
        <el-button type="primary" size="small" @click="dialog = false">确 定</el-button>
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
      addedmodel: []
    }
  },
  methods: {
    add(item) {
      this.type = item
      switch (item) {
        case 'principle':
          this.dialogtitle = '估价原则'
          this.addedmodel = this.form.principle
          break
        case 'evidence':
          this.dialogtitle = '估价依据'
          this.addedmodel = this.form.evidence
          break
        default:
          break
      }
      this.Getmodel(item, this.addedmodel)
      this.dialog = true
    },
    addmodel(type, modlelist, value) {
      modlelist.push({
        para_id: value.id,
        type: value.type,
        content: value.description
      })
      this.Getmodel(type, modlelist)
    },
    creat(modlelist) {
      modlelist.push({ type: '', content: '' })
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
.el-icon-delete {
  margin-left: 10px;
}
.editor-container {
  margin-left: 2%;
  width: 96%;
}
.noborder .el-input__inner {
  border: 0px solid #b2b2b2 !important;
}
 .noborder .el-select--small {
  width: 100% !important;
}
.normal {
  width: -webkit-fill-available;
}
.td{
    width: 140px;
}
.td_e{
  width: 43px !important;
}
</style>
