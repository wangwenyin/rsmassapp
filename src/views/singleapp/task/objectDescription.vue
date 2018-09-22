<template>
  <div class="app">
<div class="margin10">
    <el-tabs v-model="active" type="card">
       <el-tab-pane label="区位状况" name="qwzk">
            <objlocation :form="form"></objlocation>
       </el-tab-pane>
       <el-tab-pane label="权益状况" name="qyqk">
            <objrights :form="form"></objrights>
        </el-tab-pane>
        <el-tab-pane label="实物状况" name="swqk">
            <objentity :form="form"></objentity>
       </el-tab-pane>
    </el-tabs>
    <div>
         <el-button size="small" class="btn_l" @click="cancel">取消</el-button>
         <el-button size="small" class="btn_l" @click="save">保存</el-button>
         <el-button size="small" class="btn_l" type="primary" @click="nextstep">下一步</el-button>
     </div>
</div>
  </div>
</template>
<script>
import objlocation from '@/views/singleapp/task/ObjLocation'
import objrights from '@/views/singleapp/task/ObjRights'
import objentity from '@/views/singleapp/task/ObjEntity'
import { getproperty, saveproperty } from '@/api/singleapp/obj'
export default {
  components: { objlocation, objrights, objentity },
  data() {
    return {
      active: 'qwzk',
      form: {
        next: ''
      },
      method: ''
    }
  },
  mounted() {
    this.getProperty()
  },
  methods: {
    getProperty() {
      getproperty(this.$route.query.task_id).then(response => {
        this.form = response.data
      })
    },
    cancel() {
      this.$router.push({ name: 'task' })
    },
    save() {
      this.form.next = false
      saveproperty(this.$route.query.task_id, this.form).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    nextstep() {
      this.form.next = true
      saveproperty(this.$route.query.task_id, this.form).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
          const routerData = {
            name: 'addExample',
            query: { task_id: this.$route.query.task_id }
          }
          this.$router.push(routerData)
        } else {
          alert(response.msg)
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
  @import '../../../styles/app.scss';
  .btn_l{
     float: right;
     margin-right:2%;
     margin-top: 20px;
     margin-bottom: 20px;
   }
</style>