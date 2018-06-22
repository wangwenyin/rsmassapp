<template>
 <div>
  <el-tabs type="border-card">
  <el-tab-pane label="基本信息">
      <div class="margin60"  style="height:100%">
    <el-form ref="form" :model="form" label-width="100px" label-position="right">
     <el-row> 
          <el-col :span="12"> 
             <el-form-item label="楼栋名称">
                <el-input v-model="form.ldmc" ></el-input>
         </el-form-item>
  </el-col>
  <el-col :span="12"> 
             <el-form-item label="楼栋别名">
                <el-input v-model="form.ldbm" ></el-input>
         </el-form-item>
  </el-col>
     </el-row>
  <el-form-item label="楼栋坐落">
    <el-input v-model="form.ldzl"></el-input>
  </el-form-item>
 <el-row> 
    <el-col :span="8">
   <el-form-item label="建筑物高度">
    <el-input v-model="form.jzwgd"></el-input>
  </el-form-item>
  </el-col>
   <el-col :span="8">
   <el-form-item label="竣工日期">
   
      <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jgrq" style="width: 100%;"></el-date-picker>
    
  </el-form-item>
   </el-col>
    </el-row>
   <el-row> 
    <el-col :span="8">
   <el-form-item label="建筑面积">
    <el-input v-model="form.jzmj"></el-input>
  </el-form-item>
   </el-col>
    <el-col :span="8">
   <el-form-item label="占地面积">
    <el-input v-model="form.zdmj"></el-input>
  </el-form-item>
   </el-col>
    <el-col :span="8">
     <el-form-item label="用地面积">
    <el-input v-model="form.ydmj"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
   <el-row> 
  <el-col :span="8">
   <el-form-item label="总层数">
    <el-input v-model="form.zcs"></el-input>
  </el-form-item>
   </el-col>
  <el-col :span="8">
   <el-form-item label="地上层数">
    <el-input v-model="form.dscs"></el-input>
  </el-form-item>
   </el-col>
   <el-col :span="8">
     <el-form-item label="地下层数">
    <el-input v-model="form.dxcs"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
   <el-row> 
    <el-col :span="8">
   <el-form-item label="总户数">
    <el-input v-model="form.zhs"></el-input>
  </el-form-item>
   </el-col>
  <el-col :span="8">
   <el-form-item label="楼栋性质">
    <el-input v-model="form.ldxz"></el-input>
  </el-form-item>
  </el-col>
  <el-col :span="8">
   <el-form-item label="楼栋结构">
    <el-input v-model="form.ldjg"></el-input>
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
  <el-tab-pane label="住宅" v-if="building.hgyt.indexOf('住宅') !== -1">
      <el-form ref="factor" label-width="130px"  :model="factor" label-position="right">
        <el-row>
           <el-col :span="12">
           <el-form-item label="建筑类型">
     <el-select v-model="factor.jzlx" placeholder="建筑类型">
      <el-option label="高层" value="高层"></el-option>
      <el-option label="中高层" value="中高层"></el-option>
      <el-option label="中层" value="中层"></el-option>
      <el-option label="中低层" value="中低层"></el-option>
      <el-option label="低层" value="低层"></el-option>
    </el-select>
  </el-form-item>
        </el-col>
         <el-col :span="12">
               <el-form-item label="是否有电梯">
         <el-select v-model="factor.sfydt" placeholder="是否有电梯">
         <el-option label="有" value="有"></el-option>
         <el-option label="无" value="无"></el-option>
    </el-select>
     </el-form-item>
        </el-col>
        </el-row>
        <el-row >
  <el-col :span="12">
   <el-form-item label="梯户比">
       <el-input v-model="factor.thb" style="width:200px"></el-input>
  </el-form-item>
  </el-col>
   <el-col :span="12">
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
  <el-tab-pane label="办公" v-if="building.hgyt.indexOf('办公') !== -1"></el-tab-pane>
  <el-tab-pane label="商业" v-if="building.hgyt.indexOf('商业') !== -1"></el-tab-pane>
</el-tabs>
  </el-tab-pane>
  <el-tab-pane label="项目图片">
    <div>
        <div class="title-mini">项目缩略图</div>
      <el-row>
        <div>
      <template>
<div class="components-container">
<div class="editor-container">
<dropzone v-on:dropzone-removedFile="dropzoneR" v-on:dropzone-paste="paste"  v-on:dropzone-success="dropzoneS" id="myVueDropzone" url="https://httpbin.org/post" maxFiles="1" :defaultImg="building.img" ></dropzone>
</div>
</div>
</template>
</div>
</el-row>
 <div class="title-mini">项目轮播图</div>
      <el-row>
      <template>
<div class="components-container">
<div class="editor-container">
<dropzone v-on:dropzone-removedFile="dropzoneR" v-on:dropzone-success="dropzoneS" id="myVueDropzone1" url="https://httpbin.org/post" :defaultImg="img"></dropzone>
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
import { buildingsFactorsResidential } from '@/api/building'
import { buildingsInfo } from '@/api/building'
import { UpdateBuildingInfo } from '@/api/building'
import { UpdateBuildingFactorsResidential } from '@/api/building'
import Dropzone from '@/components/Dropzone'
import { imgs } from '@/api/img'
import { uploadimgs } from '@/api/img'
import { deleteimgs } from '@/api/img'

export default {
  components: { Dropzone },
  data() {
    return {
      factor: null,
      form: null,
      result: null,
      building: null,
      img: []
    }
  },
  mounted() {
    this.getBuilding()
    this.getImg()
    this.getBuildingFactorsResidential()
  },
  methods: {
    getBuilding() {
      var param = { lddm: this.$route.query.lddm }
      buildingsInfo(param).then(response => {
        this.building = response.data
        this.form = this.building
        console.log('building!')
        console.log(this.form)
      })
    },
    getBuildingFactorsResidential() {
      var param = { lddm: this.$route.query.lddm }
      buildingsFactorsResidential(param).then(response => {
        this.factor = response.data
      })
    },
    SubmitFactor() {
      UpdateBuildingFactorsResidential(this.factor).then(response => {
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
        ldmc: this.form.ldmc,
        ldbm: this.form.ldbm,
        ldzl: this.form.ldzl,
        jgrq: this.form.jgrq,
        jzwgd: this.form.jzwgd,
        jzmj: this.form.jzmj,
        zdmj: this.form.zdmj,
        ydmj: this.form.ydmj,
        zhs: this.form.zhs,
        zcs: this.form.zcs,
        dscs: this.form.dscs,
        dxcs: this.form.dxcs,
        ldxz: this.form.ldxz,
        ldjg: this.form.ldjg,
        bz: this.form.bz
      }
      console.log('formform!')
      console.log(this.form)
      console.log('datadata!')
      console.log(data)
      UpdateBuildingInfo(this.building.lddm, data).then(response => {
        this.result = response
        console.log('submit!')
        if (response.code === 200) {
          this.$message({ message: '保存成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    getImg() {
      var params = { fdcdm: this.$route.query.lddm, fdclx: '楼栋' }
      imgs(params).then(response => {
        response.data.forEach(element => {
          this.img.push(element.url)
        })
      })
    },
    dropzoneS(file) {
      console.log(file)
      this.$message({ message: 'Upload success', type: 'success' })
      var params = {
        fdcdm: this.$route.query.lddm,
        fdclx: '楼栋',
        zylx: '户型图',
        file: file
      }
      console.log('submit2222!')
      console.log(params)
      uploadimgs(params).then(response => {
        this.result = response
        console.log('submit!')
        if (response.code === 200) {
          this.$message({ message: '上传成功', type: 'success' })
        } else {
          alert(response.msg)
        }
      })
    },
    dropzoneR(file) {
      console.log(file)
      this.$message({ message: 'Delete success', type: 'success' })
      console.log('file.upload.uuid')
      console.log(file)
      var params = {
        fdcdm: this.$route.query.lddm,
        fdclx: '楼栋',
        zylx: '户型',
        file: file
      }
      deleteimgs(params).then(response => {
        this.result = response
        console.log('submit!')
        if (response.code === 200) {
          alert('删除成功')
        } else {
          alert(response.msg)
        }
      })
    }
  }
}
</script>
<style>
.el-row{
  margin-top: 5px;
  margin-bottom: 0px
}
</style>