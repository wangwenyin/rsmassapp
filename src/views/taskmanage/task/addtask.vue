<template>
 <div class="margin60"  style="height:100%">
  <el-form ref="form" :model="form" label-width="100px" label-position="right">
  <el-row> 
    <el-col :span="20">
      <el-form-item label-width="100px" label="基本信息">
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="任务名称">
        <el-input v-model="form.rwbh"></el-input>
      </el-form-item>
    </el-col>
     <el-col :span="6">
      <el-form-item label="开始时间">
        <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.cjsj" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="成立时间">
        <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.cjsj" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="10">
      <el-form-item label-width="100px" label="查勘人员">
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label-width="100px" label="审查人员">
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="10">
      <el-form-item label="组织机构">
         <el-select filterable  v-model="form.ckVal" placeholder="请选择">
            <el-option
              v-for="item in form.ckzzjg"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="10">
      <el-form-item label="组织机构">
        <el-select filterable  v-model="form.scVal" placeholder="请选择">
            <el-option
              v-for="item in form.sczzjg"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="20">
      <el-form-item label="备注" >
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="form.textarea1">
        </el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="16">
      <el-form-item label="调查对象">
      </el-form-item>
    </el-col>
  </el-row>
  <el-row :gutter="10" style="margin-left: 10px"> 
    <el-col :span="3">
        <el-select filterable  v-model="form.fdclxVal" placeholder="房地产类型" clearable size="medium">
            <el-option
              v-for="item in form.fdclx"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
    </el-col>
    <el-col :span="3">
        <el-select filterable v-model="form.fdcytVal" placeholder="房地产用途" clearable size="medium">
            <el-option
              v-for="item in form.fdcyt"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
    </el-col>
    <el-col :span="3">
        <el-select filterable v-model="form.ckldVal" placeholder="查勘粒度" clearable size="medium">
            <el-option
              v-for="item in form.ckld"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
    </el-col>
    <el-col :span="7">
      <router-link :to="{ name:'Respondents' ,query: {}}">
        <el-button type="primary" v-on:click="addDomain">添加调查对象</el-button>
      </router-link>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="5">
      <el-form-item label="项目数量">
        <el-input></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="5">
       <el-form-item label="楼栋数量">
        <el-input></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="5">
       <el-form-item label="户数量">
        <el-input ></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="5" style="margin-left:20px;">
        <el-button v-on:click="addDomain">删除对象</el-button>
    </el-col>
  </el-row>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">创建人物</el-button>
    <el-button  @click="onSubmit">清空</el-button>
    <el-button  @click="onSubmit">取消</el-button>
  </el-form-item>
</el-form>
 </div>
</template>
<script>

export default {
  data() {
    return {
      form: {
        rwbh: '深房估字(2018)第1907号',
        fdclx: [{
          value: '所有',
          label: '所有'
        }, {
          value: '房产',
          label: '房产'
        }],
        fdclxVal: '',
        fdcyt: [{
          value: '住宅',
          label: '住宅'
        }, {
          value: '商业',
          label: '商业'
        }],
        fdcytVal: '',
        ckld: [{
          value: '小区',
          label: '小区'
        }, {
          value: '楼栋',
          label: '楼栋'
        }],
        ckldVal: '',
        ckzzjg: [{
          value: '世联',
          label: '世联'
        }, {
          value: '世华',
          label: '世华'
        }],
        ckVal: '',
        sczzjg: [{
          value: '世联',
          label: '世联'
        }, {
          value: '世华',
          label: '世华'
        }],
        scVal: '',
        textarea1: ''
      },
      dcdx: new Map()
    }
  },
  mounted() {

  },
  methods: {
    creatTask() {
      console.log('创建任务')
    },
    search() {
      console.log('搜索')
    },
    addDomain() {
      this.dcdx.domains.push({
        value: '',
        key: Date.now()
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
.el-row{
  margin-top: 5px;
  margin-bottom: 0px
}
</style>