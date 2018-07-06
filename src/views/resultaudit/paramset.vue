<template>
  <div class="margin60" style="height:100%">
    <el-form ref="form" :model="form" label-width="100px" label-position="right">
      <el-row>
        <span class="title-small">方案设计 </span>
      </el-row>
      <el-row>
        <el-col :span="17">
          <el-form-item label="任务名称：">
            <el-input v-model="form.rwmc"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="17">
          <el-form-item label="分析目的：">
            <el-select v-model="form.fxmd" style="width:100%">
              <el-option label="检验评估结果的准确性和公平性" value="form.fxmd"></el-option>
              <el-option label="判定是否需要重新评估" value="form.fxmd"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="物业类型：">
            <el-radio-group v-model="form.wylx">
              <el-radio label="房产"></el-radio>
              <el-radio label="土地"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="物业用途：">
            <el-checkbox :indeterminate="form.wyyt_isIndeterminate" v-model="form.wyyt_checkAll" @change="wyyt_handleCheckAllChange">全部</el-checkbox>
              <!--  <div style="margin: 15px 0;"></div> -->
               <el-checkbox-group v-model="form.wyyt_checked"  @change="wyyt_handleCheckedChange">             
                   <el-checkbox v-for="wyyt in form.wyytOptions" :label="wyyt" :key="wyyt">{{wyyt}}</el-checkbox>
               </el-checkbox-group>

            <!-- <el-radio-group v-model="form.wyyt">
              <el-checkbox label="全部" name="type"></el-checkbox>
              <el-checkbox label="住宅" name="type"></el-checkbox>
              <el-checkbox label="商业" name="type"></el-checkbox>
              <el-checkbox label="办公" name="type"></el-checkbox>
              <el-checkbox label="工业" name="type"></el-checkbox>
            </el-radio-group> -->
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="行政区：">
            <el-checkbox :indeterminate="form.xzq_isIndeterminate" v-model="form.xzq_checkAll" @change="xzq_handleCheckAllChange">全市</el-checkbox>
               <!-- <div style="margin: 15px 0;"></div> -->
               <el-checkbox-group v-model="form.xzq_checked"  @change="xzq_handleCheckedChange">
                   <el-checkbox v-for="xzq in form.xzqOptions" :label="xzq" :key="xzq">{{xzq}}</el-checkbox>
               </el-checkbox-group>
           <!--  <el-radio-group v-model="form.xzq">
              <el-checkbox label="全市" name="type"></el-checkbox>
              <el-checkbox label="罗湖区" name="type"></el-checkbox>
              <el-checkbox label="福田区" name="type"></el-checkbox>
              <el-checkbox label="南山区" name="type"></el-checkbox>
              <el-checkbox label="盐田区" name="type"></el-checkbox>
              <el-checkbox label="龙岗区" name="type"></el-checkbox>
              <el-checkbox label="龙华区" name="type"></el-checkbox>
              <el-checkbox label="坪山区" name="type"></el-checkbox>
              <el-checkbox label="光明新区" name="type"></el-checkbox>
              <el-checkbox label="大鹏新区" name="type"></el-checkbox>
            </el-radio-group> -->
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="分析方式：">
            <el-checkbox-group v-model="form.fxfs_checked"  @change="fxfs_handleCheckedChange">
              <el-checkbox label="在全体数据进行比率分析"     :disabled="form.disabledall"  ></el-checkbox>
              <el-checkbox label="按一级用途分组进行比率分析" :disabled="form.disabledfirst" ></el-checkbox>
              <el-checkbox label="按行政区分组进行比率分析"  :disabled="form.disabledxzq"></el-checkbox>
              <el-checkbox label="按二级用途分组进行比率分析" :disabled="form.disabledsecond"></el-checkbox>
                   <!-- <el-checkbox v-for="fxfs in form.fxfsOptions" :label="fxfs" :key="fxfs" ref="checkbox" :disabled="disabled">{{fxfs}}</el-checkbox> -->
            </el-checkbox-group>
           <!--  <el-checkbox-group v-model="form.fxfs">
              <el-checkbox label="在全体数据进行比率分析" ></el-checkbox>
              <el-checkbox label="按一级用途分组进行比率分析"></el-checkbox>
              <el-checkbox label="按行政区分组进行比率分析"></el-checkbox>
              <el-checkbox label="按二级用途分组进行比率分析"></el-checkbox>
            </el-checkbox-group> -->
          </el-form-item>
        </el-col>
      </el-row>
      
      <el-row>
        <span class="title-small">案例设置 </span>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="案例来源：">
            <el-radio-group v-model="form.ally">
              <el-checkbox label="交易案例" name="type"></el-checkbox>
              <el-checkbox label="挂牌案例" name="type"></el-checkbox>
              <el-checkbox label="评估案例" name="type"></el-checkbox>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="起止日期：">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;</el-col>
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="13">
          <el-form-item label="案例概况：">
              <span>总共案例5253宗，其中住在4125宗，商业643宗，办公735宗，工业325宗。</span>
          </el-form-item>
        </el-col>
         <el-col :span="1">
           <router-link :to="{name:'CaseSearch'}">
          <el-button type="primary" size='mini' >查看</el-button>
        </router-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="抽样方式："  >
            <el-radio-group v-model="form.cyfs" style="margin-top: -10px;" >
              <el-radio label="按数量抽取:">按数量抽取:
                <el-input-number v-model="form.number"  size='small' controls-position="right" @change="handleChange"></el-input-number>&nbsp;&nbsp;宗&nbsp;&nbsp;&nbsp;&nbsp;
              </el-radio>
              <el-radio label="按百分比抽取:"  style="margin-top:10px;margin-left:1px">按百分比抽取:
                <el-input-number v-model="form.percent" size='small'  controls-position="right" @change="handleChange"></el-input-number>&nbsp;&nbsp;%
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="抽样方法：">
            <el-radio-group v-model="form.cyff">
              <el-radio label="简单随机抽样"></el-radio>
              <el-radio label="系统抽样"></el-radio>
              <el-radio label="分层抽样"></el-radio>
              <el-radio label="整群抽样"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="价格指数：">
            <el-radio-group v-model="form.zgzs"  @change="jzzs_handleCheckedChange">
              <el-radio label="不采用价格指数修正案例"></el-radio>
              <el-radio label="采用所选价格指数修正案例"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="17">
          <el-form-item label="选择指数：">
            <el-select v-model="form.xzzs" style="width:100%" :disabled="form.disabledselect">
              <el-option label="深圳市工业用地指数" value="深圳市工业用地指数"></el-option>
              <el-option label="福田区市存量房价格指数" value="福田区市存量房价格指数"></el-option>
              <el-option label="深圳市新房价格指数" value="深圳市新房价格指数"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="margin-left:82px">
        <el-col :span="3">
          <el-form-item label="时间类型：">
            <span>月份</span>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="区域类型:">
            <span>福田区</span>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="物业类型:">
            <span>房产</span>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="物业用途:">
            <span>住宅</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
       <!--  <router-link :to="{name:'rateAnal',params: { fxfsOptionsSelect: form.fxfsOptionsSelect }}">
          <el-button type="primary" @click="onSubmit">下一步</el-button>
        </router-link> -->
        <el-button type="primary" @click="nextStep">下一步</el-button>
        <el-button >保存</el-button>
        <el-button >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
const wyytOptions = ['住宅', '商业', '办公', '工业']
const xzqOptions = ['罗湖区', '福田区', '南山区', '盐田区', '龙岗区', '龙华新区', '坪山新区', '光明新区', '大鹏新区', '宝安区']
const fxfsOptions = ['在全体数据进行比率分析', '按一级用途分组进行比率分析', '按行政区分组进行比率分析', '按二级用途分组进行比率分析']
export default {
  data() {
    return {
      disabled: false,
      form: {
        rwmc: '福田区华强北街道燕南路君悦阁503',
        fxmd: '检验评估结果的准确性和公平性',
        fxfsOptionsSelect: [],
        wylx: '房产',
        wyyt: '',
        xzq: '',
        ally: '',
        date1: '',
        date2: '',
        cyfs: '按数量抽取',
        cyff: '简单随机抽样',
        zgzs: '',
        xzzs: '福田区市存量房价格指数',
        number: 3000,
        percent: 3,
        wyytOptions: wyytOptions,
        wyyt_checkAll: false,
        wyyt_isIndeterminate: false,
        wyyt_checked: [],
        xzqOptions: xzqOptions,
        xzq_checkAll: false,
        xzq_isIndeterminate: false,
        xzq_checked: [],
        fxfs_checked: [],
        fxfsOptions: fxfsOptions,
        fxfsAll: '',
        fxfsFirst: '',
        fxfsSecond: '',
        fxfsXZQ: '',
        disabledall: false,
        disabledfirst: false,
        disabledsecond: false,
        disabledxzq: false,
        disabledselect: false
      }
    }
  },
  mounted() {
  },
  methods: {
    handleChange() {
    },
    nextStep() {
      if (this.form.fxfsOptionsSelect.length > 0) {
        this.$router.push({ name: 'rateAnal', params: { fxfsOptionsSelect: this.form.fxfsOptionsSelect }})
      } else {
        this.$message({
          message: '请选择分析方式！',
          type: 'warning'
        })
      }
    },
    wyyt_handleCheckAllChange(val) {
      this.form.wyyt_checked = val ? wyytOptions : []
      this.form.wyyt_isIndeterminate = false
      this.form.disabledfirst = false
    },
    wyyt_handleCheckedChange(value) {
      const checkedCount = value.length
      this.form.wyyt_checkAll = checkedCount === this.form.wyytOptions.length
      this.form.wyyt_isIndeterminate = checkedCount > 0 && checkedCount < this.form.wyytOptions.length
      if (checkedCount === 1) {
        this.form.disabledfirst = true
      } else {
        this.form.disabledfirst = false
      }
    },
    jzzs_handleCheckedChange(value) {
      if (value === '不采用价格指数修正案例') {
        this.form.disabledselect = true
      } else {
        this.form.disabledselect = false
      }
    },
    xzq_handleCheckAllChange(val) {
      this.form.xzq_checked = val ? xzqOptions : []
      this.form.xzq_isIndeterminate = false
      this.form.disabledxzq = false
    },
    xzq_handleCheckedChange(value) {
      const checkedCount = value.length
      this.form.xzq_checkAll = checkedCount === this.form.xzqOptions.length
      this.form.xzq_isIndeterminate = checkedCount > 0 && checkedCount < this.form.xzqOptions.length
      if (checkedCount === 1) {
        this.form.disabledxzq = true
      } else {
        this.form.disabledxzq = false
      }
    },
    fxfs_handleCheckedChange(value) {
      this.form.fxfsOptionsSelect.push(value)
      // console.log(this.form.fxfsOptionsSelect)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/views/datamanage/styles.scss";
.el-row {
  margin-top: 5px;
  margin-bottom: 0px;
}
</style>