<template>
 <div class="margin60"  style="height:100%">
    <el-form ref="form" :model="form" label-width="100px" label-position="right">
   <el-row> 
    <el-col :span="8">
  <el-form-item label="任务编号">
    <el-input v-model="form.rwbh"></el-input>
  </el-form-item>
   </el-col>
    <el-col :span="16">
  <el-form-item label="任务名称">
    <el-input v-model="form.rwmc"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
       <el-row> 
    <el-col :span="8">
  <el-form-item label="创建人">
    <el-input v-model="form.cjr"></el-input>
  </el-form-item>
   </el-col>
    <el-col :span="16">
 <el-form-item label="参与人员">
    <el-input v-model="form.cyry"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
    <el-row> 
    <el-col :span="8">
  <el-form-item label="创建时间">
 <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.cjsj" style="width: 100%;"></el-date-picker>
  </el-form-item>
   </el-col>
    <el-col :span="8">
   <el-form-item label="预计完成时间">
 <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.yjwcsj" style="width: 100%;"></el-date-picker>
  </el-form-item>
   </el-col>
    </el-row>
 
  
     <el-form-item label="委托人">
    <el-input v-model="form.wtr"></el-input>
  </el-form-item>
     <el-form-item label="物业名称">
          <el-col :span="16">
      <el-input v-model="form.cyry"></el-input>
    </el-col>
    <el-col :span="8">
      <el-button type="primary" @click="onSubmit">选择</el-button>
    </el-col>
  </el-form-item>
    <el-form-item label="物业地址">
         <el-col :span="6">
    <el-select v-model="form.xzq">
      <el-option label="福田区"></el-option>
      <el-option label="罗湖区"></el-option>
      <el-option label="南山区"></el-option>
      <el-option label="盐田区"></el-option>
      <el-option label="宝安区"></el-option>
      <el-option label="龙岗区"></el-option>
      <el-option label="龙华区"></el-option>
      <el-option label="坪山区"></el-option>
    </el-select>
    </el-col>
    <el-col :span="12">
       <el-input v-model="form.mph"></el-input>
    </el-col>
  
  </el-form-item>
      <el-row> 
    <el-col :span="8">
   <el-form-item label="物业类型" prop="resource">
    <el-radio-group v-model="form.wylx">
      <el-radio label="房产"></el-radio>
      <el-radio label="土地"></el-radio>
    </el-radio-group>
  </el-form-item>
   </el-col>
    <el-col :span="12">
  <el-form-item label="物业用途" prop="resource">
    <el-radio-group v-model="form.wyyt">
      <el-radio label="住宅"></el-radio>
      <el-radio label="商业"></el-radio>
      <el-radio label="办公"></el-radio>
      <el-radio label="工业"></el-radio>
    </el-radio-group>
  </el-form-item>
   </el-col>
    </el-row>
       <el-row> 
    <el-col :span="8">
   <el-form-item label="估计目的" prop="region">
    <el-select v-model="form.gjmd" placeholder="请选择估计目的">
      <el-option label="房地产抵押价值评估" value="fdcdyjzpg"></el-option>
      <el-option label="房地产转让价值评估" value="fdczrjzpg"></el-option>
      <el-option label="房地产征收补偿评估" value="fdczsbcpg"></el-option>
      <el-option label="房地产拍卖评估" value="fdcpmpg"></el-option>
      <el-option label="房地产价格复核评估" value="fdcjgfhpg"></el-option>
      <el-option label="房地产损害赔偿评估" value="fdcshpcpg"></el-option>
      <el-option label="建设用地使用权出让价格评估" value="jsydsyqcrjgpg"></el-option>
      <el-option label="了解市场价格" value="ljscjg"></el-option>
      <el-option label="其他目的的房地产评估" value="qtmddfdcpg"></el-option>
    </el-select>
  </el-form-item>
   </el-col>
    <el-col :span="8">
 <el-form-item label="价值时点">
 <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker>
  </el-form-item>
   </el-col>
    </el-row>
    <el-form-item label="查勘人员">
    <el-input v-model="form.ckry"></el-input>
  </el-form-item>
    <el-form-item label="备注">
    <el-input type="textarea" v-model="form.bz"></el-input>
  </el-form-item>
 
  <el-form-item>
     <router-link :to="{ name:'addtask2' ,param: { rwbh: rwbh }}" >
    <el-button type="primary" @click="onSubmit">下一步</el-button>
     </router-link>
     <el-button  @click="onSubmit">保存</el-button>
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
        rwbh: '深房估字(2018)第1907号'
      }
    }
  },
  mounted() {

  },
  methods: {
  }

}
</script>
<style>
.el-row{
  margin-top: 5px;
  margin-bottom: 0px
}
</style>