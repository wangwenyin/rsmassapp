<template>
 <div>
  <el-tabs type="border-card">
  <el-tab-pane label="基本信息">
      <div class="margin60"  style="height:100%">
    <el-form ref="form" :model="form" label-width="100px" label-position="right">
     <el-row> 
          <el-col :span="8"> 
             <el-form-item label="户号">
                <el-input v-model="form.hh" ></el-input>
         </el-form-item>
  </el-col>
  <el-col :span="8"> 
             <el-form-item label="实际层">
                <el-input v-model="form.sjc" ></el-input>
         </el-form-item>
  </el-col>
  
   <el-col :span="8">
   <el-form-item label="房屋性质">
      <el-input v-model="form.fwxz" ></el-input>
  </el-form-item>
</el-col>
     </el-row>
 <el-row> 
      <el-col :span="8">
   <el-form-item label="户型">
    <el-input v-model="form.hx"></el-input>
  </el-form-item>
   </el-col>
   <el-col :span="8">
   <el-form-item label="户型结构">
    <el-input v-model="form.hxjg"></el-input>
  </el-form-item>
   </el-col>
    <el-col :span="8">
   <el-form-item label="建筑面积">
    <el-input v-model="form.jzmj"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
   <el-row>    
    <el-col :span="8">
     <el-form-item label="套内建筑面积">
    <el-input v-model="form.tnjzmj"></el-input>
  </el-form-item>
   </el-col>
  <el-col :span="8">
   <el-form-item label="分摊建筑面积">
    <el-input v-model="form.ftjzmj"></el-input>
  </el-form-item>
   </el-col>
  <el-col :span="8">
   <el-form-item label="分摊土地面积">
    <el-input v-model="form.fttdmj"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
    <el-form-item label="备注">
    <el-input type="textarea" v-model="form.bz"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>
      </div>
  </el-tab-pane>
  <el-tab-pane label="配套和指标因素">
    
      <el-tabs   tab-position="left">
  <el-tab-pane label="住宅" v-if="house.fwyt1.indexOf('住宅') !== -1||o.fwyt2.indexOf('住宅') !== -1">
      <el-form ref="factor" label-width="130px"  :model="factor" label-position="right">
        <el-row>
           <el-col :span="8">
           <el-form-item label="朝向">
       <el-input v-model="factor.cx" style="width:200px"></el-input>
  </el-form-item>
        </el-col>
         <el-col :span="8">
               <el-form-item label="景观">
         <el-select v-model="factor.jg" placeholder="景观">
        <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
     </el-form-item>
        </el-col>
         <el-col :span="8">
               <el-form-item label="采光">
         <el-select v-model="factor.cg" placeholder="采光">
        <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
     </el-form-item>
        </el-col>
        </el-row>
        <el-row>
           <el-col :span="8">
           <el-form-item label="通风">
       <el-select v-model="factor.tf" placeholder="通风">
        <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
        </el-col>
         <el-col :span="8">
               <el-form-item label="噪音">
         <el-select v-model="factor.zy" placeholder="噪音">
        <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
     </el-form-item>
        </el-col>
         <el-col :span="8">
               <el-form-item label="户型布局">
         <el-select v-model="factor.hxbj" placeholder="户型布局">
        <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
     </el-form-item>
        </el-col>
        </el-row>
           <el-row>
           <el-col :span="8">
           <el-form-item label="装饰装修情况">
       <el-select v-model="factor.zszxqk" placeholder="装饰装修情况">
        <el-option label="精装修" value="精装修"></el-option>
      <el-option label="普通装修" value="普通装修"></el-option>
      <el-option label="毛坯" value="毛坯"></el-option>
    </el-select>
  </el-form-item>
        </el-col>
         <el-col :span="8">
               <el-form-item label="相对位置">
         <el-select v-model="factor.xdwz" placeholder="相对位置">
        <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
     </el-form-item>
        </el-col>
        </el-row>
 <el-form-item>
    <el-button type="primary" @click="SubmitFactor">保存</el-button>
  </el-form-item>
</el-form>
  </el-tab-pane>
  <el-tab-pane label="办公" v-if="house.fwyt1.indexOf('办公') !== -1||house.fwyt2.indexOf('办公') !== -1"></el-tab-pane>
  <el-tab-pane label="商业" v-if="house.fwyt1.indexOf('商业') !== -1||house.fwyt2.indexOf('商业') !== -1"></el-tab-pane>
</el-tabs>
  </el-tab-pane>
  <el-tab-pane label="户图片">
    <div>
        <div class="title-mini">缩略图</div>
      <el-row>
        <div>
      <template>
<div class="components-container">
<div class="editor-container">
<dropzone 
v-on:dropzone-success="UploadFile" id="myVueDropzone" url="http://211.154.135.29:88/v1/thumbnails" :fdcdm='house.hdm' fdclx="户" maxFiles=1  :defaultImg="house.img"></dropzone>
</div>
</div>
</template>
</div>
</el-row>
 <div class="title-mini">轮播图</div>
      <el-row>
      <template>
<div class="components-container">
<div class="editor-container">
<dropzone v-on:dropzone-removedFile="DelFile" 
v-on:dropzone-success="UploadFile" id="myVueDropzone1" url="http://211.154.135.29:88/v1/imgs" :fdcdm='house.hdm' fdclx="户" zylx="户型图" :defaultImg="img"></dropzone>
</div>
</div>
</template>
</el-row>
    </div>
  </el-tab-pane>
 
</el-tabs>
 </div>
</template>
<script>
import { unitInfo } from '@/api/house'
import { unitFactors } from '@/api/house'
import { UpdateHouseInfo } from '@/api/house'
import { UpdateUnitFactors } from '@/api/house'
import Dropzone from '@/components/Dropzone'
import { imgs } from '@/api/img'
import { deleteimgs } from '@/api/img'

export default {
  components: { Dropzone },
  data() {
    return {
      factor: null,
      form: null,
      result: null,
      house: null,
      img: [],
      imglist: null
    }
  },
  mounted() {
    this.getHouse()
    this.getImg()
    this.housrFactors()
  },
  methods: {
    getImg() {
      var params = { fdcdm: this.$route.query.hdm, fdclx: '户' }
      imgs(params).then(response => {
        this.imglist = response.data
        response.data.forEach(element => {
          this.img.push(element.url)
        })
      })
    },
    getHouse() {
      var param = { hdm: this.$route.query.hdm }
      unitInfo(param).then(response => {
        this.house = response.data
        this.form = this.house
      })
    },
    housrFactors() {
      var param = { hdm: this.$route.query.hdm }
      unitFactors(param).then(response => {
        this.factor = response.data
      })
    },
    SubmitFactor() {
      this.factor.fwyt1 = this.house.fwyt1
      UpdateUnitFactors(this.factor).then(response => {
        this.result = response
        console.log('SubmitFactor!')
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    onSubmit() {
      var data = {
        hh: this.form.hh,
        sjc: this.form.sjc,
        fwxz: this.form.fwxz,
        hx: this.form.hx,
        hxjg: this.form.hxjg,
        jzmj: this.form.jzmj,
        tnjzmj: this.form.tnjzmj,
        ftjzmj: this.form.ftjzmj,
        fttdmj: this.form.fttdmj,
        bz: this.form.bz
      }
      UpdateHouseInfo(this.house.hdm, data).then(response => {
        this.result = response
        console.log('submit!')
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    UploadFile(file) {
      this.$message({ message: 'Upload success', type: 'success' })
    },
    DelFile(file) {
      let zydm = ''
      this.imglist.forEach(element => {
        if (element.url === file.url) {
          zydm = element.zydm
        }
      })
      deleteimgs(zydm).then(response => {
        this.result = response
        if (response.code === 200) {
          this.$message({ message: 'Delete success', type: 'success' })
        } else {
          this.$message({ message: response.msg, type: 'success' })
        }
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