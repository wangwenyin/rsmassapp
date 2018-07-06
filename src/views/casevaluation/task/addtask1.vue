<template>
 <div class="margin60"  style="height:100%">
    <el-form ref="form" :model="form" label-width="100px" label-position="right">
          <el-row> 
              <el-col :span="10">
                  <el-form-item label="任务编号">
                    <el-input v-model="form.rwbh"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="任务名称">
                      <el-input v-model="form.rwmc"></el-input>
                   </el-form-item>
               </el-col>
           </el-row>
           <el-row> 
               <el-col :span="10">
                    <el-form-item label="创建人">
                       <el-input v-model="form.cjr" readonly></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                     <el-form-item label="参与人员">
                          <el-select v-model="cyry" multiple placeholder="请选择参与人员">
                                <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">  </el-option>
                          </el-select>
                     </el-form-item>
                </el-col>
           </el-row>
           <el-row> 
                <el-col :span="10">
                     <el-form-item label="创建时间">
                         <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.cjsj" style="width: 100%;"></el-date-picker>
                     </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="预计完成时间">
                         <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.yjwcsj" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                 </el-col>
           </el-row>
            <el-row> 
                <el-col :span="20">
                    <el-form-item label="委托人">
                        <el-input v-model="form.wtr"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
             <el-row> 
                <el-col :span="20">
                     <el-form-item label="物业名称">
                          <el-col :span="22">
                              <el-input v-model="wymc"></el-input>
                         </el-col>
                         <el-col :span="2">
                               <el-button type="primary"  @click="dialogFormVisible = true">选择</el-button>
                         </el-col>
                      </el-form-item>
                 </el-col>
            </el-row>
            <el-row> 
                <el-col :span="20">
                   <el-form-item label="物业地址">
                       <el-col :span="6">
                            <el-select v-model="form.xzq">
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
                           <el-input v-model="form.wydz"></el-input>
                      </el-col>
                   </el-form-item>
                </el-col>
             </el-row>
            <el-row> 
                <el-col :span="10">
                    <el-form-item label="物业类型" prop="resource">
                         <el-radio-group v-model="form.wylx">
                            <el-radio label="房产" value="房产"></el-radio>
                            <el-radio label="土地" value="土地"></el-radio>
                         </el-radio-group>
                    </el-form-item>
               </el-col>
               <el-col :span="10">
                    <el-form-item label="物业用途" prop="resource">
                             <el-checkbox-group v-model="form.wyyt">
                               <el-checkbox label="住宅" value="住宅"></el-checkbox>
                               <el-checkbox label="商业"  value="商业"></el-checkbox>
                               <el-checkbox label="办公"  value="办公"></el-checkbox>
                               <el-checkbox label="工业"  value="工业"></el-checkbox>
                             </el-checkbox-group>
                    </el-form-item>
               </el-col>
            </el-row>
           <el-row> 
               <el-col :span="10">
                     <el-form-item label="估计目的" prop="region">
                         <el-select v-model="gjmd" placeholder="请选择估计目的">
                           <el-option label="房地产抵押价值评估" value="房地产抵押价值评估"></el-option>
                           <el-option label="房地产转让价值评估" value="房地产转让价值评估"></el-option>
                           <el-option label="房地产征收补偿评估" value="房地产征收补偿评估"></el-option>
                           <el-option label="房地产拍卖评估" value="房地产拍卖评估"></el-option>
                           <el-option label="房地产价格复核评估" value="房地产价格复核评估"></el-option>
                           <el-option label="房地产损害赔偿评估" value="房地产损害赔偿评估"></el-option>
                           <el-option label="建设用地使用权出让价格评估" value="建设用地使用权出让价格评估"></el-option>
                           <el-option label="了解市场价格" value="了解市场价格"></el-option>
                           <el-option label="其他目的的房地产评估" value="其他目的的房地产评估"></el-option>
                         </el-select>
                     </el-form-item>
               </el-col>
               <el-col :span="10">
                    <el-form-item label="价值时点">
                         <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker>
                    </el-form-item>
               </el-col>
          </el-row>
          <el-row>
              <el-col :span="20">
                  <el-form-item label="查勘人员">
                      <el-select v-model="form.ckry" multiple  placeholder="请选择查勘人员">
                          <el-option v-for="item in options" :key="item" :label="item" :value="item"> </el-option>
                     </el-select>
                  </el-form-item>
              </el-col>
          </el-row>
         <el-row>
             <el-col :span="20">
                 <el-form-item label="备注">
                      <el-input type="textarea" v-model="form.bz"></el-input>
                 </el-form-item>
             </el-col>
         </el-row>
         <el-row>
            <el-form-item>
                <router-link :to="{ name:'addtask2' ,param: { rwbh: form.rwbh }}" >
                     <el-button type="primary" @click="onSubmit">下一步</el-button>
                </router-link>
                     <el-button  @click="onSubmit">保存</el-button>
                     <el-button  @click="onSubmit">取消</el-button>
           </el-form-item>
         </el-row>
</el-form>
<el-dialog title="选择物业对象" :visible.sync="dialogFormVisible" >
   <DataSearch :selectable=true @select="select"></DataSearch>
  <div slot="footer" class="dialog-footer" style="margin-top:-15px">
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </div>
</el-dialog>
 </div>
</template>
<script>
import DataSearch from '@/views/datamanage/search/search'
import { mapGetters } from 'vuex'

export default {
  components: {
    DataSearch
  },
  data() {
    return {
      form: {
        rwbh: '深房估字(2018)第1907号'
      },
      cyry: [],
      gjmd: '',
      wymc: '',
      options5: [{
        value: '刘运达',
        label: '刘运达'
      }, {
        value: '秦忠芳',
        label: '秦忠芳'
      }, {
        value: '倪嘉慰',
        label: '倪嘉慰'
      }, {
        value: '陈佳璇',
        label: '陈佳璇'
      }, {
        value: '刘春荣',
        label: '刘春荣'
      }, {
        value: '王欣然',
        label: '王欣然'
      }, {
        value: '曾欣',
        label: '曾欣'
      }, {
        value: '王文银',
        label: '王文银'
      }],
      dialogFormVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  created() {
    const now = new Date()
    this.form.cjsj = now
    this.form.cjr = this.name
    this.cyry = [this.name]
  },
  watch: {
    cyry(val) {
      console.log('创建人')
      console.log(val)
      this.options = val
      this.form.ckry = val
    },
    gjmd(val) {
      console.log('估值目的')
      console.log(val)
      this.form.gjmd = val
      this.form.rwmc = this.form.wymc + this.form.wydz + this.form.gjmd
    },
    wymc(val) {
      console.log('物业名称')
      console.log(val)
      this.form.wymc = val
      this.form.rwmc = this.form.wymc + this.form.wydz + this.form.gjmd
    }
  },

  mounted() {

  },
  methods: {
    onSubmit() {

    },
    select(value) {
      console.log('选择项目')
      console.log(value)
      this.wymc = value.xmmc + value.ldmc + value.hh
      this.form.wymc = this.wymc
      this.form.xzq = value.xzq
      this.form.wyyt = value.hgyt.split(';')
      this.form.wydz = value.jdb
      this.form.rwmc = value.wymc + value.wydz + this.form.gjmd
      this.dialogFormVisible = false
      console.log(this.form.rwmc)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;

 .el-select--medium{
  width: 100%
}
.el-row {
    margin-bottom: 0px;
    margin-top: 0px;
    height:100%;
  }
   .margin60 {
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 40px
   }
   .el-select{
     width: 100%
   }
   .margin60  .el-dialog{
     opacity: 100  ! important ;
     width: 80% ！important;
     margin-top: 13vh
   }
</style>