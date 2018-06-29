<template>
 
 <div >
  <el-tabs type="border-card">
  <el-tab-pane label="基本信息">
      <div class="margin60"  style="height:100%">
    <el-form ref="form" :model="form" label-width="100px" label-position="right">
     <el-row> 
          <el-col :span="16"> 
             <el-form-item label="项目名称">
                <el-input v-model="form.xmmc" ></el-input>
         </el-form-item>
  </el-col>
   <el-col :span="8">
   <el-form-item label="竣工日期">
   
      <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jgrq" style="width: 100%;"></el-date-picker>
    
  </el-form-item>
</el-col>
     </el-row>
  <el-form-item label="项目坐落">
    <el-input v-model="form.xmzl"></el-input>
  </el-form-item>
 <el-row> 
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
    <el-col :span="8">
   <el-form-item label="建筑面积">
    <el-input v-model="form.jzmj"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
   <el-row> 
    <el-col :span="8">
   <el-form-item label="总楼栋数">
    <el-input v-model="form.zlds"></el-input>
  </el-form-item>
   </el-col>
    <el-col :span="8">
   <el-form-item label="总户数">
    <el-input v-model="form.zhs"></el-input>
  </el-form-item>
   </el-col>
    <el-col :span="8">
     <el-form-item label="容积率">
    <el-input v-model="form.rjl"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
   <el-row> 
   <el-col :span="8">
   <el-form-item label="总车位数">
    <el-input v-model="form.zcws"></el-input>
  </el-form-item>
   </el-col>
  <el-col :span="8">
   <el-form-item label="地上车位数">
    <el-input v-model="form.dscws"></el-input>
  </el-form-item>
   </el-col>
  <el-col :span="8">
   <el-form-item label="地下车位数">
    <el-input v-model="form.dxcws"></el-input>
  </el-form-item>
   </el-col>
    </el-row>
   <el-row> 
 <el-col :span="12">
   <el-form-item label="开发商名称">
    <el-input v-model="form.kfsmc"></el-input>
  </el-form-item>
   </el-col>
  <el-col :span="12">
   <el-form-item label="物业公司名称">
    <el-input v-model="form.wygsmc"></el-input>
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
  <el-tab-pane label="住宅" v-if="project.hgyt.indexOf('住宅') !== -1">
      <el-form ref="factor" label-width="130px"  :model="factor" label-position="right">
        <el-row>
          <el-col :span="24">
          <div class="title-mini" >地理位置</div>
          </el-col>
        </el-row>
        <el-row >
         <el-col :span="8">
           <el-form-item label="区域中心距离">
            <el-input v-model="factor.qyzxjl" style="width:200px"></el-input>
             </el-form-item>
        </el-col>
  <el-col :span="8">
   <el-form-item label="区域繁华程度">
     <el-select v-model="factor.qyfhcd" placeholder="区域繁华程度">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
   <el-col :span="8">
<el-form-item label="规划合理程度">
     <el-select v-model="factor.ghhlcd" placeholder="规划合理程度">
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
          <el-col :span="24">
          <div class="title-mini" >交通条件</div>
          </el-col>
     </el-row>
  <el-row>
   <el-col :span="8">
     <el-form-item label="地铁便捷程度">
     <el-select v-model="factor.dtbjcd" placeholder="地铁便捷程度">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
   <el-col :span="8">
     <el-form-item label="公交便捷程度">
     <el-select v-model="factor.gjbjcd" placeholder="公交便捷程度">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
  <el-col :span="8">
     <el-form-item label="道路通达程度">
     <el-select v-model="factor.dltdcd" placeholder="道路通达程度">
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
      <el-col :span="24">
          <div class="title-mini" >环境景观</div>
          </el-col>
  </el-row>
    <el-row>
        <el-col :span="8">
     <el-form-item label="周边景观">
     <el-select v-model="factor.zbjg" placeholder="周边景观">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
    <el-col :span="8">
     <el-form-item label="环境质量">
     <el-select v-model="factor.hjzl" placeholder="环境质量">
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
      <el-col :span="24">
          <div class="title-mini" >教育水平</div>
      </el-col>
  </el-row>
   <el-row>
      <el-col :span="8">
     <el-form-item label="教育设施完备度">
     <el-select v-model="factor.jyptsswbcd" placeholder="教育设施完备度">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
   <el-col :span="8">
     <el-form-item label="小学学区学位">
     <el-select v-model="factor.xxxqxw" placeholder="小学学区学位">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
   <el-col :span="8">
     <el-form-item label="初中学区学位">
     <el-select v-model="factor.czxqxw" placeholder="初中学区学位">
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
    <el-col :span="24">
          <div class="title-mini" >配套设施</div>
      </el-col>
 </el-row>
 <el-row>
      <el-col :span="8">
     <el-form-item label="基础设施完备程度">
     <el-select v-model="factor.jcptsswbcd" placeholder="基础设施完备程度">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>   <el-col :span="8">
     <el-form-item label="生活设施完备程度">
     <el-select v-model="factor.shptsswbcd" placeholder="生活设施完备程度">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>   <el-col :span="8">
     <el-form-item label="休闲娱乐完备程度">
     <el-select v-model="factor.xxylsswbcd" placeholder="休闲娱乐完备程度">
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
    <el-col :span="24">
          <div class="title-mini" >小区品质</div>
      </el-col>
 </el-row>
  <el-row>
      <el-col :span="8">
     <el-form-item label="新旧程度">
     <el-select v-model="factor.xjcd" placeholder="新旧程度">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>   <el-col :span="8">
     <el-form-item label="物业管理水平">
     <el-select v-model="factor.wyglsp" placeholder="物业管理水平">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>   <el-col :span="8">
     <el-form-item label="建筑容积率">
     <el-select v-model="factor.xxylsswbcd" placeholder="建筑容积率">
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
     <el-form-item label="内部环境质量">
     <el-select v-model="factor.nbhjzl" placeholder="内部环境质量">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>   <el-col :span="8">
     <el-form-item label="内部设施完备程度">
     <el-select v-model="factor.nbsswbcd" placeholder="内部设施完备程度">
      <el-option label="好" value="好"></el-option>
      <el-option label="较好" value="较好"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="较差" value="较差"></el-option>
      <el-option label="差" value="差"></el-option>
    </el-select>
  </el-form-item>
  </el-col>   <el-col :span="8">
     <el-form-item label="停车便捷程度">
     <el-select v-model="factor.tcbjcd" placeholder="停车便捷程度">
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
  <el-tab-pane label="办公" v-if="project.hgyt.indexOf('办公') !== -1"></el-tab-pane>
  <el-tab-pane label="商业" v-if="project.hgyt.indexOf('商业') !== -1"></el-tab-pane>
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
<dropzone
v-on:dropzone-success="UploadFile" id="myVueDropzone" url="http://211.154.135.29:88/v1/thumbnails" :fdcdm='project.xmdm' fdclx="项目"  maxFiles=1 :defaultImg="project.img"></dropzone>
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
<dropzone v-on:dropzone-removedFile="DelFile" 
v-on:dropzone-success="UploadFile" id="myVueDropzone1" url="http://211.154.135.29:88/v1/imgs" :fdcdm='project.xmdm' fdclx="项目" zylx="户型图" :defaultImg="img"></dropzone>
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

import { projectFactorsResidential } from '@/api/project'
import { projectInfo } from '@/api/project'
import { UpdateProjectInfo } from '@/api/project'
import { UpdateFactorsResidential } from '@/api/project'
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
      project: null,
      img: [],
      imglist: null
    }
  },
  mounted() {
    this.getProject()
    this.getImg()
    this.getProjectFactorsResidential()
  },
  methods: {
    getProject() {
      var param = { xmdm: this.$route.query.xmdm }
      projectInfo(param).then(response => {
        this.project = response.data
        this.form = this.project
      })
    },
    getProjectFactorsResidential() {
      var param = { xmdm: this.$route.query.xmdm }
      projectFactorsResidential(param).then(response => {
        this.factor = response.data
      })
    },
    SubmitFactor() {
      UpdateFactorsResidential(this.factor).then(response => {
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
        xmmc: this.form.xmmc,
        xmzl: this.form.xmzl,
        jgrq: this.form.jgrq,
        zdmj: this.form.zdmj,
        ydmj: this.form.ydmj,
        jzmj: this.form.jzmj,
        zlds: this.form.zlds,
        zhs: this.form.zhs,
        zcws: this.form.zcws,
        dxtcw: this.form.dxtcw,
        dstcw: this.form.dstcw,
        rjl: this.form.rjl,
        kfsmc: this.form.kfsmc,
        wygsmc: this.form.wygsmc,
        bz: this.form.bz
      }
      UpdateProjectInfo(this.project.xmdm, data).then(response => {
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
      var params = { fdcdm: this.$route.query.xmdm, fdclx: '项目' }
      imgs(params).then(response => {
        this.imglist = response.data
        response.data.forEach(element => {
          this.img.push(element.url)
        })
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
        console.log('submit!')
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