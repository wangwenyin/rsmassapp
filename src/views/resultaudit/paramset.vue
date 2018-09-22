<template>
  <div class="app">
    <div class="margin10 maxdialog">
      <div id="progressDiv" style="display: none">
        <div class="fade"></div>
        <div class="succ-pop">
          <el-progress :percentage="percentage" :stroke-width="5" style="text-align:center;padding-top:33px"></el-progress>
        </div>
      </div>
      <el-form ref="form" :model="form" :rules="rules" class="demo-ruleForm" label-width="100px" label-position="right">
        <el-row>
          <el-col :span="24">
            <div class="title">方案设计</div>
            <div class="border"></div>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="17">
            <el-form-item label="任务名称：" size="small" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="17">
            <el-form-item label="分析目的：" size="small" prop="purpose">
              <el-select v-model="form.purpose" style="width:100%">
                <el-option label="检验评估结果的准确性和公平性" value="检验评估结果的准确性和公平性"></el-option>
                <el-option label="判定是否需要重新评估" value="判定是否需要重新评估"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="16">
            <el-form-item label="物业类型：" prop="type">
              <el-radio-group v-model="form.type">
                <el-radio label="房产"></el-radio>
                <el-radio label="土地"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="16">
            <el-form-item label="物业用途：" prop="usage">
              <el-checkbox :indeterminate="wyyt_isIndeterminate" v-model="wyyt_checkAll" @change="wyyt_handleCheckAllChange">全部</el-checkbox>
              <el-checkbox-group v-model="wyyt" @change="wyyt_handleCheckedChange">
                <el-checkbox v-for="wyyt in wyytOptions" :label="wyyt" :key="wyyt">{{wyyt}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="24">
            <el-form-item label="行政区：" prop="district">
              <el-checkbox :indeterminate="xzq_isIndeterminate" v-model="xzq_checkAll" @change="xzq_handleCheckAllChange">全市</el-checkbox>
              <el-checkbox-group v-model="xzq" @change="xzq_handleCheckedChange">
                <el-checkbox v-for="xzq in xzqOptions" :label="xzq" :key="xzq">{{xzq}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="24">
            <el-form-item label="价值时点" prop="value_date">
              <el-date-picker size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.value_date" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="24">
            <el-form-item label="分析方式：" prop="method">
              <el-checkbox-group v-model="form.method" @change="fxfs_handleCheckedChange">
                <el-checkbox label="在全体数据进行比率分析" :disabled="disabledall"></el-checkbox>
                <el-checkbox label="按一级用途分组进行比率分析" :disabled="disabledfirst"></el-checkbox>
                <el-checkbox label="按行政区分组进行比率分析" :disabled="disabledxzq"></el-checkbox>
                <el-checkbox label="按二级用途分组进行比率分析" :disabled="disabledsecond"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="17">
            <el-form-item label="备注：" prop="note">
              <el-input type="textarea" v-model="form.note" style="width:100%;"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="title">案例设置</div>
            <div class="border"></div>
            <!--  -->
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="11">
            <el-form-item label="案例来源：" prop="case.source">
              <el-checkbox-group v-model="form.case.source">
                <el-checkbox label="交易案例" name="交易案例"></el-checkbox>
                <el-checkbox label="挂牌案例" name="挂牌案例"></el-checkbox>
                <el-checkbox label="评估案例" name="评估案例"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="11">
            <el-form-item label="起止日期：" required>
              <el-col :span="11">
                <el-form-item prop="case.start">
                  <el-date-picker type="date" size="small" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.case.start" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="2">&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;</el-col>
              <el-col :span="11">
                <el-form-item prop="case.end">
                  <el-date-picker type="date" size="small" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.case.end" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="13">
            <el-form-item label="案例概况：">
              <span>总共案例5253宗，其中住宅4125宗，商业643宗，办公735宗，工业325宗。</span>
            </el-form-item>
          </el-col>
          <el-col :span="2" style="padding-top:2px">
            <router-link :to="{name:'CaseSearch'}">
              <el-button type="primary" size='small'>查看</el-button>
            </router-link>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="16">
            <el-form-item label="抽样方式：" prop="case.way.type">
              <el-radio-group v-model="form.case.way.type" style="margin-top: -10px;">
                <el-radio label="byNumber">按数量抽取:
                  <el-input-number v-model="number" size='small' controls-position="right" ></el-input-number>&nbsp;&nbsp;宗&nbsp;&nbsp;&nbsp;&nbsp;
                </el-radio>
                <el-radio label="byPercentage" style="margin-top:10px;margin-left:1px">按百分比抽取:
                  <el-input-number v-model="percent" size='small' controls-position="right" ></el-input-number>&nbsp;&nbsp;%
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="16">
            <el-form-item label="价格指数：" prop="case.index.use">
              <el-radio-group v-model="indexUse" @change="jzzs_handleCheckedChange">
                <el-radio label="false">不采用价格指数修正案例</el-radio>
                <el-radio label="true">采用所选价格指数修正案例</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="padding-left:20px">
          <el-col :span="17">
            <el-form-item label="选择指数：">
              <el-select size="small" v-model="zs" value-key='key' @change='zs_handleChange' style="width:100%" :disabled="indexUse!=='true'">
               <el-option v-for="item in zsoptions" :key="item.id" :label="item.name" :value="item.id"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <router-link :to="{name:'CaseSearch'}">
              <el-button type="primary" size='small' style="margin-left: 10px;margin-top: 3px;">查看</el-button>
            </router-link>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="17">
            <el-form-item>
              <el-button size="small" class="btn_l" @click="cancel">取消</el-button>
              <el-button size="small" class="btn_l" @click="save">保存</el-button>
              <el-button size="small" class="btn_l" @click="nextStep('form')" type="primary">下一步</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import { saveTestTasks, getTestTaskById, getPriceIndexs } from '@/api/ratio/tasks'
import { mapGetters } from 'vuex'
import { formatDate } from '@/utils/date'
const wyytOptions = ['住宅', '商业', '办公', '工业']
const xzqOptions = [
  '罗湖区',
  '福田区',
  '南山区',
  '盐田区',
  '龙岗区',
  '龙华新区',
  '坪山新区',
  '光明新区',
  '大鹏新区',
  '宝安区'
]
const fxfsOptions = [
  '在全体数据进行比率分析',
  '按一级用途分组进行比率分析',
  '按行政区分组进行比率分析',
  '按二级用途分组进行比率分析'
]
export default {
  data() {
    return {
      timer: null,
      disabled: false,
      percentage: 0,
      number: 3000,
      percent: 1,
      fxfsOptionsSelect: [],
      zs: {},
      type: '房产',
      cyfs: '按数量抽取:',
      cyff: '简单随机抽样',
      jgzs: '采用所选价格指数修正案例',
      xzzs: '福田区市存量房价格指数',
      indexUse: 'false',
      wyytOptions: wyytOptions,
      wyyt_checkAll: false,
      wyyt_isIndeterminate: false,
      xzqOptions: xzqOptions,
      xzq_checkAll: false,
      xzq_isIndeterminate: false,
      xzq: [],
      fxfsOptions: fxfsOptions,
      fxfsAll: '',
      fxfsFirst: '',
      fxfsSecond: '',
      fxfsXZQ: '',
      disabledall: false,
      disabledfirst: true,
      disabledsecond: false,
      disabledxzq: true,
      disabledselect: false,
      wyyt: [],
      wyytCount: 0,
      xzqCount: 0,
      zsoptions: [],
      form: {
        create_date: formatDate(new Date(), 'yyyy-MM-dd'),
        purpose: '检验评估结果的准确性和公平性',
        method: [],
        case: {
          source: [],
          way: {
            type: 'byNumber',
            value: 1
          },
          index: {
            use: false,
            id: 0,
            name: ' '
          }
        }
      },
      rules: {
        name: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
        purpose: [
          { required: true, message: '请选择分析目的', trigger: 'change' }
        ],
        'case.start': [
          { required: true, message: '请选择时间', trigger: 'change' }
        ],
        'case.end': [
          { required: true, message: '请选择时间', trigger: 'change' }
        ],
        usage: [
          { required: true, message: '请至少选择一个物业用途', trigger: 'change' }
        ],
        district: [
          { required: true, message: '请至少选择一个行政区', trigger: 'change' }
        ],
        method: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个分析方式',
            trigger: 'change'
          }
        ],
        'case.source': [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个案例来源',
            trigger: 'change'
          }
        ],
        'case.way.type': [
          { required: true, message: '请选择抽样方式', trigger: 'change' }
        ],
        cyff: [
          { required: true, message: '请选择抽样方法', trigger: 'change' }
        ],
        'case.index.use': [
          { required: true, message: '请选择价格指数', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择物业类型', trigger: 'change' }
        ],
        value_date: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ]
      }
    }
  },
  mounted() {
    this.getPriceIndexs()
    if (this.$route.query.id) {
      this.getTestTaskById()
    }
  },

  methods: {
    getTestTaskById() {
      getTestTaskById(this.$route.query.id).then(response => {
        this.form = response.data
        if (this.form.create_date) {
          this.form.create_date = formatDate(new Date(this.form.create_date), 'yyyy-MM-dd')
        }
        if (this.form.value_date) {
          this.form.value_date = formatDate(new Date(this.form.value_date), 'yyyy-MM-dd')
        }
        if (this.form.case.start) {
          this.form.case.start = formatDate(new Date(this.form.case.start), 'yyyy-MM-dd')
        }
        if (this.form.case.end) {
          this.form.case.end = formatDate(new Date(this.form.case.end), 'yyyy-MM-dd')
        }
        if (this.form.usage) {
          this.wyyt = this.form.usage.split(',')
        }
        if (this.form.district) {
          this.xzq = this.form.district.split(',')
        }
      })
    },
    cancel() {
      if (
        this.form.hasOwnProperty('name') ||
        this.form.hasOwnProperty('value_date')
      ) {
        this.$confirm('您有数据尚未保存, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$router.push({ name: 'rateanal' })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            })
          })
      } else {
        this.$router.push({ name: 'rateanal' })
      }
    },
    save() {
      this.form.next = false
      this.form.creator = this.name
      if (this.form.case.way.type === 'byNumber') {
        this.form.case.way.value = this.number
      } else {
        this.form.case.way.value = this.percent
      }
      saveTestTasks(this.form).then(response => {
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    nextStep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.form.next = true
          this.form.creator = this.name
          if (this.form.case.way.type === 'byNumber') {
            this.form.case.way.value = this.number
          } else {
            this.form.case.way.value = this.percent
          }
          saveTestTasks(this.form).then(response => {
            if (response.code === 200) {
              this.$message({ message: '保存成功', type: 'success' })
              this.$router.push({
                name: 'rateanal',
                query: { id: response.taskid }
              })
            } else {
              alert(response.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    wyyt_handleCheckAllChange(val) {
      this.wyyt = val ? wyytOptions : []
      this.wyyt_isIndeterminate = false
      this.disabledfirst = !val
    },
    wyyt_handleCheckedChange(value) {
      this.wyytCount = value.length
      this.wyyt_checkAll =
        this.wyytCount === this.wyytOptions.length
      this.wyyt_isIndeterminate =
        this.wyytCount > 0 && this.wyytCount < this.wyytOptions.length
      if (this.wyytCount < 2) {
        this.disabledfirst = true
      } else {
        this.disabledfirst = false
      }
    },
    jzzs_handleCheckedChange() {
      if (this.indexUse === 'false') {
        this.form.case.index.use = false
      } else {
        this.form.case.index.use = true
      }
    },
    xzq_handleCheckAllChange(val) {
      this.xzq = val ? xzqOptions : []
      this.xzq_isIndeterminate = false
      this.disabledxzq = !val
    },
    xzq_handleCheckedChange(value) {
      this.xzqCount = value.length
      this.xzq_checkAll =
        this.xzqCount === this.xzqOptions.length
      this.xzq_isIndeterminate =
        this.xzqCount > 0 &&
        this.xzqCount < this.xzqOptions.length
      if (this.xzqCount < 2) {
        this.disabledxzq = true
      } else {
        this.disabledxzq = false
      }
    },
    fxfs_handleCheckedChange(value) {
      this.fxfsOptionsSelect.push(value)
    },
    zs_handleChange(val) {
      this.zsoptions.forEach(element => {
        if (element.id === val) {
          this.form.case.index.name = element.name
          this.form.case.index.id = val
        }
      })
    },
    getPriceIndexs() {
      getPriceIndexs().then(response => {
        response.data.forEach(element => {
          this.zsoptions.push(element)
        })
      })
    }
  },
  computed: {
    ...mapGetters(['name', 'roles'])
  },
  watch: {
    wyyt(val) {
      this.form.usage = val.toString()
    },
    xzq(val) {
      this.form.district = val.toString()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/app.scss";
.margin60 {
  margin-left: 60px;
  margin-right: 60px;
}
.fade {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
.succ-pop {
  width: 300px;
  height: 80px;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -150px;
  z-index: 999;
  border-radius: 5px;
}

.border {
  border: 0.5px solid #c0c4cc;
  margin-bottom: 20px;
}
.title {
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.btn_l {
  float: right;
  margin-left: 10px;
  margin-top: 3px;
}
</style>