<template>
  <div :class="{'app':!detail} ">
<div class="margin10">
     <el-button size="small" class="btn-topz" type="text"  @click="generate" v-if="!detail">生成报告</el-button>
     <el-button size="small" class="btn-topz" type="text"  @click="d_bgxm=true" >添加</el-button>
      <el-button class="btn-topz" size="small" type="text" @click="submit" v-if="!detail">提交</el-button>
     <el-button class="btn-topz" size="small" type="text" @click="save" v-if="!detail">保存</el-button>
     <!-- <el-button class="btn-topz" size="small" @click="newxztj" type="text">预览</el-button> -->
   <el-tabs v-model="active" type="card" >
        <el-tab-pane label="前言" name="qy">
             <reportpreface :form="form" :detail="detail"></reportpreface>
        </el-tab-pane>
        <el-tab-pane label="估计结果报告" name="gjjgbg">
            <reportresults :form="form" :detail="detail"></reportresults>
        </el-tab-pane>
        <el-tab-pane label="估价技术报告" name="gjjsbg">
           <reporttec :form="form" :detail="detail"></reporttec>
        </el-tab-pane>
        <el-tab-pane label="附件" name="fj">
           <reportenc :form="form" :detail="detail"></reportenc>
        </el-tab-pane>
        <el-tab-pane label="变现能力分析" name="bxnlfx" v-if='t_bxnlfx'>
             <div>
                 <table class="table" > 
                     <tr class="tr_title">
                       <td colspan="4"  class="td">
                         <span class="title">变现能力分析 </span>
                         <el-button size="small" style="margin-left: 81.2%;" type="text" v-if="!detail">保存</el-button>
                         <el-button size="small" type="text" v-if="!detail">模板</el-button>
                       </td>
                     </tr>
                     <tr class="tr">
                         <td class="td" colspan="4">
                           <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 8}"
                            placeholder="请输入内容"
                            v-model="zwgwtrdh">
                           </el-input>
                         </td>
                     </tr>
                 </table>
             </div>
         </el-tab-pane>
         <el-tab-pane label="风险提示分析" name="fxtsfx" v-if='t_fxtsfx'>
             <div>
                 <table class="table" > 
                     <tr class="tr_title">
                         <td colspan="4"  class="td">
                             <span class="title">风险提示分析 </span>
                             <el-button size="small" style="margin-left: 81.2%;" type="text" v-if="!detail">保存</el-button>
                             <el-button size="small"  type="text" v-if="!detail">模板</el-button>
                         </td>
                     </tr>
                     <tr class="tr">
                         <td class="td" colspan="4">
                             <el-input
                               type="textarea"
                               :autosize="{ minRows: 2, maxRows: 8}"
                               placeholder="请输入内容"
                               v-model="zwgwtrdh">
                             </el-input>
                         </td>
                     </tr>
                 </table>
            </div>
          </el-tab-pane>
  
  </el-tabs>
   <el-dialog title="添加报告项目" :visible.sync="d_bgxm">
        <div>
           <el-checkbox v-model="t_bxnlfx" label="变现能力分析" border></el-checkbox>
           <el-checkbox v-model="t_fxtsfx" label="风险提示分析" border></el-checkbox>
       </div>
       <div slot="footer" class="dialog-footer">
           <el-button @click="d_bgxm = false">取 消</el-button>
           <el-button type="primary" @click="d_bgxm = false">确 定</el-button>
       </div>
    </el-dialog>
</div>
  </div>
</template>
<script>
import reportpreface from '@/views/singleapp/task/reportPreface'
import reportresults from '@/views/singleapp/task/reportResults'
import reporttec from '@/views/singleapp/task/reportTec'
import reportenc from '@/views/singleapp/task/reportEnc'
import { getreport, editreport } from '@/api/singleapp/report'
export default {
  components: { reportpreface, reportresults, reporttec, reportenc },
  props: {
    detail: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: 'qy',
      form: {
      },
      d_bgxm: false,
      t_bxnlfx: false,
      t_fxtsfx: false
    }
  },
  mounted() {
    this.Getreport()
  },
  methods: {
    Getreport() {
      getreport('2018-052').then(response => {
        this.form = response.data
      })
    },
    save() {
      var data = {
        id: '2018-052',
        // id: this.$route.query.task_id,
        op: 'save',
        data: this.form
      }
      editreport(data).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    generate() {
      var data = {
        id: this.$route.query.task_id,
        //   id: '2018-052',
        op: 'create',
        data: this.form
      }
      editreport(data).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
          window.location.href = response.url
        } else {
          alert(response.msg)
        }
      })
    },
    submit() {
      var data = {
        id: this.$route.query.task_id,
        //  id: '2018-052',
        op: 'submit',
        data: this.form
      }
      editreport(data).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../../styles/app.scss';
</style>