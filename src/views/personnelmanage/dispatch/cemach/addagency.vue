<template>
 <div class="margin60"  style="height:100%">
  <el-form ref="form" :model="form" label-width="100px" label-position="right">
   <el-row> 
    <el-col :span="8">
      <el-form-item label="机构名称">
        <el-input v-model="form.rwbh"></el-input>
      </el-form-item>
   </el-col>
    <el-col :span="8">
      <el-form-item label="负责人">
        <el-input v-model="form.rwmc"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="联系电话">
        <el-input v-model="form.cjr"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="电子邮箱">
        <el-input v-model="form.cyry"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="成立时间">
        <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.cjsj" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="资质等级">
        <el-input v-model="form.zzdj"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="已完成任务">
        <el-input v-model="form.zzdj"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="调查人员数量">
        <el-input v-model="form.zzdj"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="8">
      <el-form-item label="总体评价">
        <el-input v-model="form.zzdj"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="正在进行任务">
        <el-input v-model="form.zzdj"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="16">
      <el-form-item label="地址">
        <el-input v-model="form.zzdj"></el-input>
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
    <router-link :to="{ name:'Cemach' ,param: {}}" >
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button  @click="onSubmit">取消</el-button>
    </router-link>
  </el-form-item>
</el-form>
 </div>
</template>
<script>

export default {

  data() {
    return {
      form: {
        rwbh: '深房估字(2018)第1907号'
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
    },
    onSubmit() {
      console.log('提交')
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