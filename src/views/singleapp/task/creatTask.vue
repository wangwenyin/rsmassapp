<template>
    <div class="app ">
        <div class="margin10 maxdialog">
            <el-row>
                <div class="border"></div>
            </el-row>
            <el-form ref="form"  :model="form" :rules="rules"  label-width="110px" label-position="right">
                <el-form-item label="任务名称" prop="name">
                    <el-input size="small" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="创建人">
                    <el-input size="small" v-model="form.creator" disabled></el-input>
                </el-form-item>
                <el-form-item label="参与人员" prop="members">
                    <el-select size="small" v-model="cyry" multiple placeholder="请选择参与人员">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="创建时间" >
                    <el-date-picker size="small" disabled type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.create_time" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="预计完成时间"  prop="plan_time">
                    <el-date-picker size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.plan_time" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="委托人" prop="client">
                    <el-input size="small" v-model="form.client"></el-input>
                </el-form-item>
                <el-form-item label="物业名称" prop="prop_name">
                    <el-col :span="22">
                        <el-input size="small" v-model="form.prop_name" disabled style="width:98%"></el-input>
                    </el-col>
                    <el-col :span="2">
                        <el-button size="small" class="btn_l" type="primary" @click="dialogSelectProp = true">选择</el-button>
                    </el-col>
                </el-form-item>
                <el-form-item label="物业地址" prop="address">
                    <el-col :span="6">
                        <el-select size="small" v-model="form.district" disabled>
                            <el-option label="福田区" value="福田区"></el-option>
                            <el-option label="罗湖区" value="罗湖区"></el-option>
                            <el-option label="南山区" value="南山区"></el-option>
                            <el-option label="盐田区" value="盐田区"></el-option>
                            <el-option label="宝安区" value="宝安区"></el-option>
                            <el-option label="龙岗区" value="龙岗区"></el-option>
                            <el-option label="龙华区" value="龙华区"></el-option>
                            <el-option label="坪山区" value="坪山区"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="18">
                        <el-input size="small" v-model="form.address"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="物业类型" prop="prop_type">
                    <el-radio-group v-model="form.prop_type" disabled>
                        <el-radio label="土地" value="土地"></el-radio>
                        <el-radio label="项目" value="项目"></el-radio>
                        <el-radio label="楼栋" value="楼栋"></el-radio>
                        <el-radio label="户" value="户"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="物业用途" prop="prop_usage">
                    <el-checkbox-group v-model="form.prop_usage" disabled>
                        <el-checkbox label="住宅" value="住宅"></el-checkbox>
                        <el-checkbox label="商业" value="商业"></el-checkbox>
                        <el-checkbox label="办公" value="办公"></el-checkbox>
                        <el-checkbox label="工业" value="工业"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="估计方法" prop="method">
                    <el-checkbox-group v-model="form.method">
                        <el-checkbox label="市场法" value="市场法"></el-checkbox>
                        <el-checkbox label="收益法" value="收益法"></el-checkbox>
                        <el-checkbox label="成本法" value="成本法"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="估价目的" prop="purpose">
                    <el-select size="small" v-model="form.purpose" placeholder="请选择估计目的">
                        <el-option label="房地产税复核估价" key="复核估价" value="房地产税复核估价"></el-option>
                        <el-option label="房地产抵押价值评估" value="房地产抵押价值评估"></el-option>
                        <el-option label="房地产转让价值评估" value="房地产转让价值评估"></el-option>
                        <el-option label="房地产征收补偿评估" value="房地产征收补偿评估"></el-option>
                        <el-option label="房地产拍卖评估" value="房地产拍卖评估"></el-option>
                        <el-option label="房地产损害赔偿评估" value="房地产损害赔偿评估"></el-option>
                        <el-option label="建设用地使用权出让价格评估" value="建设用地使用权出让价格评估"></el-option>
                        <el-option label="了解市场价格" value="了解市场价格"></el-option>
                        <el-option label="其他目的的房地产评估" value="其他目的的房地产评估"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="价值时点" prop="value_date">
                    <el-date-picker size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.value_date" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input size="small" type="textarea" v-model="form.note"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" class="btn_l" @click="cancel">取消</el-button>
                    <el-button size="small" class="btn_l" @click="save">保存</el-button>
                    <el-button size="small" class="btn_l" type="primary" @click="nextstep">下一步</el-button>
                       <el-button size="small" class="btn_l" type="primary" @click="submit">提交</el-button>
                </el-form-item>
            </el-form>
            <el-dialog title="选择物业对象" :visible.sync="dialogSelectProp">
                <DataSearch :selectable=true @select="onSelectProp"></DataSearch>
                <div slot="footer" style="margin-top:-15px">
                    <el-button size="small" @click="dialogSelectProp = false">取消</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import DataSearch from '@/views/datamanage/search/search'
import { mapGetters } from 'vuex'
import { getuser } from '@/api/singleapp/users'
import { savetasks } from '@/api/singleapp/tasks'
import { projectInfo } from '@/api/project'
import { formatDate } from '@/utils/date'
import { DateAdd } from '@/utils/date'
export default {
  components: {
    DataSearch
  },
  data() {
    return {
      form: {
        purpose: '房地产税复核估价',
        method: ['市场法'],
        client: '国家税务总局深圳市税务局',
        create_time: formatDate(new Date(), 'yyyy-MM-dd'),
        plan_time: formatDate(DateAdd('d', 10, new Date()), 'yyyy-MM-dd')
      },
      cyry: [],
      gjmd: '复核估价',
      wymc: '',
      project: null,
      options: [],
      dialogSelectProp: false,
      rules: {
        name: [
          { required: true, message: '请输入任务名称', trigger: 'blur' }
        ],
        members: [
          { required: true, message: '请选择参与人员', trigger: 'change' }
        ],
        plan_time: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ],
        client: [
          { required: true, message: '请输入委托人名称', trigger: 'blur' }
        ],
        prop_name: [
          { required: true, message: '请选择一个物业对象', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请填写物业地址', trigger: 'blur' }
        ],
        prop_type: [
          { required: true, message: '请选择物业类型', trigger: 'change' }
        ],
        prop_usage: [
          { type: 'array', required: true, message: '请至少选择一个物业用途', trigger: 'change' }
        ],
        method: [
          { type: 'array', required: true, message: '请至少选择一个估计方法', trigger: 'change' }
        ],
        purpose: [
          { required: true, message: '请选择估计目的', trigger: 'change' }
        ],
        value_date: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    // this.form.creator = this.name
    this.form.creator = '倪嘉慰'
    this.form.members = '倪嘉慰'
    this.cyry = ['倪嘉慰']
  },
  mounted() {
    this.getuser()
  },
  methods: {
    cancel() {
      if (
        this.form.hasOwnProperty('prop_id') ||
        this.form.hasOwnProperty('plan_time') ||
        this.form.hasOwnProperty('client') ||
        this.form.hasOwnProperty('address') ||
        this.form.hasOwnProperty('value_date') ||
        this.form.hasOwnProperty('method')
      ) {
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
      this.form.op = 'edit'
      if (this.form.hasOwnProperty('prop_usage')) {
        this.form.prop_usage = this.form.prop_usage.toString()
      }
      if (this.form.hasOwnProperty('method')) {
        this.form.method = this.form.method.toString()
      }
      savetasks(this.form).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    nextstep() {
      this.form.op = 'create'
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.form.prop_usage = this.form.prop_usage.toString()
          this.form.method = this.form.method.toString()
          savetasks(this.form).then(response => {
            if (response.code === 200) {
              this.$message({ message: '保存成功', type: 'success' })
              const routerData = {
                name: 'objectDescription',
                query: { task_id: response.taskid }
              }
              this.$router.push(routerData)
            } else {
              alert(response.msg)
            }
          })
        } else {
          this.$message({ message: '请先把数据填写完整', type: 'warning' })
          return false
        }
      })
    },
    submit() {
      const routerData = {
        name: 'selectObject',
        query: { taskId: '2018-084' }
      }
      this.$router.push(routerData)
    },
    onSelectProp(value) {
      if (value.hasOwnProperty('hh')) {
        this.form.prop_type = '户'
        this.form.prop_name = value.ldmc + value.hh
        this.form.prop_id = value.hh
        this.form.prop_usage = [value.fwyt1, value.fwyt2]
        this.getProject(value.xmdm)
        this.form.address = this.project.jdb
        this.form.district = this.project.xzq
      } else if (value.hasOwnProperty('lddm')) {
        this.form.prop_type = '楼栋'
        this.form.prop_name = value.ldmc
        this.form.prop_id = value.lddm
        this.form.prop_usage = value.hgyt.split(';')
        this.getProject(value.xmdm)
        this.form.address = this.project.jdb
        this.form.district = this.project.xzq
      } else {
        this.form.prop_type = '项目'
        this.form.prop_name = value.xmmc
        this.form.prop_id = value.xmdm
        this.form.district = value.xzq
        this.form.address = value.jdb
        this.form.prop_usage = value.hgyt.split(';')
      }
      this.form.name =
        this.form.prop_name + this.form.address + this.form.purpose
      this.dialogSelectProp = false
    },
    getuser() {
      getuser().then(response => {
        response.data.forEach(element => {
          this.options.push({
            value: element.name,
            label: element.name
          })
        })
      })
    },
    getProject(xmdm) {
      projectInfo(xmdm).then(response => {
        this.project = response.data
      })
    }
  },
  computed: {
    ...mapGetters(['name', 'roles'])
  },
  watch: {
    cyry(val) {
      this.form.members = val.toString()
    },
    'form.purpose'(val) {
      let purpose = ''
      switch (val) {
        case '房地产税复核估价':
          purpose = '复核估价'
          break
        case '房地产抵押价值评估':
          purpose = '抵押估价'
          break
        case '房地产转让价值评估':
          purpose = '转让估价'
          break
        case '房地产征收补偿评估':
          purpose = '补偿估价'
          break
        case '房地产拍卖评估':
          purpose = '拍卖估价'
          break
        case '房地产损害赔偿评估':
          purpose = '损害赔偿估价'
          break
        case '建设用地使用权出让价格评估':
          purpose = '使用权出让估价'
          break
        case '了解市场价格':
          purpose = '价格了解'
          break
        case '其他目的的房地产评估':
          purpose = '估价'
          break
        default:
          purpose = '估价'
      }
      this.form.purpose = val
      this.form.name = this.form.prop_name + this.form.address + purpose
    },
    'form.prop_name'(val) {
      this.form.prop_name = val
      this.form.name =
        this.form.prop_name + this.form.address + this.form.purpose
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../../../styles/app.scss";
.btn_l {
  float: right;
  margin-left: 10px;
  margin-top: 3px;
}
.el-select {
  width: 100%;
}
.title {
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.border {
  //  border: 0.5px solid #c0c4cc;
  margin-bottom: 20px;
}
.el-form {
  width: 60%;
  margin-left: 15%;
}
</style>