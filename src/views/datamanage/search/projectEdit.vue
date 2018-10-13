<template>
  <div class="app">
    <div class="margin10">
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息">
          <div>
            <el-form ref="form" :model="form" label-width="100px" label-position="right">
              <el-row>
                <el-col :span="16">
                  <el-form-item label="项目名称">
                    <el-input size="small" v-model="form.xmmc"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="竣工日期">
                    <el-date-picker size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jgrq" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="项目坐落">
                    <el-input size="small" v-model="form.xmzl"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="占地面积">
                    <el-input size="small" v-model="form.zdmj"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="用地面积">
                    <el-input size="small" v-model="form.ydmj"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="建筑面积">
                    <el-input size="small" v-model="form.jzmj"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="总楼栋数">
                    <el-input size="small" v-model="form.zlds"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="总户数">
                    <el-input size="small" v-model="form.zhs"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="容积率">
                    <el-input size="small" v-model="form.rjl"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="总车位数">
                    <el-input size="small" v-model="form.zcws"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="地上车位数">
                    <el-input size="small" v-model="form.dscws"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="地下车位数">
                    <el-input size="small" v-model="form.dxcws"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="开发商名称">
                    <el-input size="small" v-model="form.kfsmc"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="物业公司名称">
                    <el-input size="small" v-model="form.wygsmc"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.bz"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item>
                <el-button size="small" type="primary" @click="onSubmit">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配套和指标因素">
          <el-tabs tab-position="left">
            <el-tab-pane label="住宅" v-if="project.hgyt.indexOf('住宅') !== -1">
              <el-form ref="factor" label-width="130px" :model="factor" label-position="right">
                <el-row>
                  <el-col :span="24">
                    <div class="title-mini">地理位置</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="区域中心距离">
                      <el-input-number size="small" v-model="factor.qyzxjl" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="区域繁华程度">
                      <el-input-number size="small" v-model="factor.qyfhcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="规划合理程度">
                      <el-input-number size="small" v-model="factor.ghhlcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div class="title-mini">交通条件</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="地铁便捷程度">
                      <el-input-number size="small" v-model="factor.dtbjcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="公交便捷程度">
                      <el-input-number size="small" v-model="factor.gjbjcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="道路通达程度">
                      <el-input-number size="small" v-model="factor.dltdcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div class="title-mini">环境景观</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="周边景观">
                      <el-input-number size="small" v-model="factor.zbjg" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="环境质量">
                      <el-input-number size="small" v-model="factor.hjzl" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div class="title-mini">教育水平</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="教育设施完备度">
                      <el-input-number size="small" v-model="factor.jyptsswbcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="小学学区学位">
                      <el-input-number size="small" v-model="factor.xxxqxw" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="初中学区学位">
                      <el-input-number size="small" v-model="factor.czxqxw" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div class="title-mini">配套设施</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="基础设施完备程度">
                      <el-input-number size="small" v-model="factor.jcptsswbcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="生活设施完备程度">
                      <el-input-number size="small" v-model="factor.shptsswbcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="休闲娱乐完备程度">
                      <el-input-number size="small" v-model="factor.xxylsswbcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div class="title-mini">小区品质</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="新旧程度">
                      <el-input-number size="small" v-model="factor.xjcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item size="small" label="物业管理水平">
                      <el-input-number size="small" v-model="factor.wyglsp" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="建筑容积率">
                      <el-input-number size="small" v-model="factor.xxylsswbcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="内部环境质量">
                      <el-input-number size="small" v-model="factor.nbhjzl" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="内部设施完备程度">
                      <el-input-number size="small" v-model="factor.nbsswbcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="停车便捷程度">
                      <el-input-number size="small" v-model="factor.tcbjcd" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item>
                  <el-button size="small" type="primary" @click="SubmitFactor">保存</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="办公" v-if="project.hgyt.indexOf('办公') !== -1"></el-tab-pane>
            <el-tab-pane label="商业" v-if="project.hgyt.indexOf('商业') !== -1"></el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="项目图片">
          <div>
            <div class="title-img">项目缩略图</div>
            <el-row>
              <div>
                <template>
                  <div class="components-container">
                    <div class="editor-container">
                      <dropzone v-on:dropzone-success="UploadFile" id="myVueDropzone" :url="url" :fdcdm='project.xmdm' fdclx="项目" maxFiles=1 :defaultImg="project.img"></dropzone>
                    </div>
                  </div>
                </template>
</div>
</el-row>
 <div class="title-img">项目轮播图</div>
      <el-row>
      <template>
  <div class="components-container">
    <div class="editor-container">
      <dropzone v-on:dropzone-removedFile="DelFile" v-on:dropzone-success="UploadFile" id="myVueDropzone1" :url="urlmuli" :fdcdm='project.xmdm' fdclx="项目" zylx="户型图" :defaultImg="img"></dropzone>
    </div>
  </div>
</template>
</el-row>
    </div>
  </el-tab-pane> 
</el-tabs>
 </div>
 </div>
</template>
<script>
import {
  projectFactorsResidential,
  projectInfo,
  UpdateProjectInfo,
  UpdateFactorsResidential
} from '@/api/project'
import Dropzone from '@/components/Dropzone'
import { imgs, deleteimgs } from '@/api/img'
export default {
  components: { Dropzone },
  data() {
    return {
      factor: {},
      form: {},
      result: {},
      project: {},
      img: [],
      imglist: [],
      url: process.env.IMG_URL,
      urlmuli: process.env.IMG_URL1
    }
  },
  mounted() {
    this.getProject()
    this.getImg()
    this.getProjectFactorsResidential()
  },
  methods: {
    getProject() {
      projectInfo(this.$route.query.xmdm).then(response => {
        this.project = response.data
        this.form = this.project
      })
    },
    getProjectFactorsResidential() {
      // 2018-09-17 yt 先写死，后面需修改
      const yt = 'residential'
      projectFactorsResidential(yt, this.$route.query.xmdm).then(response => {
        this.factor = response.data
      })
    },
    SubmitFactor() {
      const yt = 'residential'
      UpdateFactorsResidential(yt, this.$route.query.xmdm, this.factor).then(
        response => {
          this.result = response
          if (response.code === 200) {
            this.$message({ message: '保存成功', type: 'success' })
          } else {
            alert(response.msg)
          }
        }
      )
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
        dxcws: this.form.dxcws,
        dscws: this.form.dscws,
        rjl: this.form.rjl,
        kfsmc: this.form.kfsmc,
        wygsmc: this.form.wygsmc,
        bz: this.form.bz
      }
      UpdateProjectInfo(this.project.xmdm, data).then(response => {
        this.result = response
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
@import "../../../styles/app.scss";
.el-row {
  margin-top: 5px;
  margin-bottom: 0px;
}
.el-col {
  border-radius: 4px;
}
.con {
  display: inline-block;
  width: 130px;
  margin-left: 3px;
  color: #7b7676;
  text-align: left;
  font-size: 15px;
}
.title-mini {
  font-size: 14px;
  font-weight: bold;
}
// .title-small {
//   font-size: 18px;
//   font-weight: bold;
// }
</style>