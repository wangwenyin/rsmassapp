<template>
 <div class="margin60"  style="height:100%">
  <el-form ref="form" :model="form" disabled label-width="100px" label-position="right">
   <el-row> 
    <el-col :span="8">
      <el-form-item label="用户名">
        <el-input disabled v-model="form.rwbh"></el-input>
      </el-form-item>
   </el-col>
    <el-col :span="8">
      <el-form-item label="密码">
        <el-input disabled v-model="form.rwmc"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="人员姓名">
        <el-input  v-model="form.cjr"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="所属机构">
        <el-input  v-model="form.cyry"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="联系电话">
        <el-input v-model="form.zzdj"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="电子邮箱">
        <el-input v-model="form.zzdj"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="角色">
        <el-checkbox-group 
          v-model="checked1"
          :min="1"
          :max="3">
          <el-checkbox v-for="role in role" :label="role" :key="role">{{role}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="资质等级">
        <el-checkbox-group 
          v-model="checked2"
          :min="1"
          :max="3">
          <el-checkbox v-for="qual in qualification" :label="qual" :key="qual">{{qual}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="年龄">
        <el-date-picker
          v-model="form.age"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="性别">
        <el-radio  v-model="form.sex" label="男">男</el-radio>
        <el-radio  v-model="form.sex" label="女">女</el-radio>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="已完成任务">
        <el-input disabled v-model="form.ywcrw"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="正在进行任务">
        <el-input disabled v-model="form.zzjxrw"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="16">
      <el-form-item label="总体评价">
        <el-input v-model="form.ztpj"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="16">
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.bz"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-form-item>
    <router-link :to="{ name:'ddzx' ,param: {  }}" >
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button  @click="onSubmit">取消</el-button>
    </router-link>
  </el-form-item>
</el-form>
 </div>
</template>
<script>
const roleOptions = ['审核', '查勘', '管理']
const qualificationOptions = ['注册估价师', '工程师']
export default {
  data() {
    return {
      role: roleOptions,
      qualification: qualificationOptions,
      checked1: ['审核'],
      checked2: ['注册估价师'],
      form: {
        rwbh: '',
        sex: '男',
        age: ''
      }
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