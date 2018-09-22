<template>
  <div class="app">
    <div class="margin10">
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息">
          <div class="margin60" style="height:100%">
            <el-form ref="form" :model="form" label-width="100px" label-position="right">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="楼栋名称">
                    <el-input size="small" v-model="form.ldmc"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="楼栋别名">
                    <el-input size="small" v-model="form.ldbm"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="楼栋坐落">
                    <el-input size="small" v-model="form.ldzl"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="建筑物高度">
                    <el-input size="small" v-model="form.jzwgd"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="竣工日期">
                    <el-date-picker size="small" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jgrq" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="建筑面积">
                    <el-input size="small" v-model="form.jzmj"></el-input>
                  </el-form-item>
                </el-col>
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
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="总层数">
                    <el-input size="small" v-model="form.zcs"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="地上层数">
                    <el-input size="small" v-model="form.dscs"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="地下层数">
                    <el-input size="small" v-model="form.dxcs"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="总户数">
                    <el-input size="small" v-model="form.zhs"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="楼栋性质">
                    <el-input size="small" v-model="form.ldxz"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="楼栋结构">
                    <el-input size="small" v-model="form.ldjg"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="备注">
                    <el-input size="small" type="textarea" v-model="form.bz"></el-input>
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
            <el-tab-pane label="住宅" v-if="building.hgyt?building.hgyt.indexOf('住宅') !== -1:false">
              <el-form ref="factor" v-if="factor" label-width="130px" :model="factor" label-position="right">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="建筑类型">
                      <el-input-number size="small" v-model="factor.jzlx" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="是否有电梯">
                      <el-input-number size="small" v-model="factor.sfydt" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="梯户比">
                      <el-input-number size="small" v-model="factor.thb" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="相对位置">
                      <el-input-number size="small" v-model="factor.xdwz" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item>
                  <el-button size="small" type="primary" @click="SubmitFactor">保存</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="办公" v-if="building.hgyt?building.hgyt.indexOf('办公') !== -1:false"></el-tab-pane>
            <el-tab-pane label="商业" v-if="building.hgyt?building.hgyt.indexOf('商业') !== -1:false"></el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="楼栋图片">
          <div>
            <div class="title-img">楼栋缩略图</div>
            <el-row>
              <div>
                <template>
                  <div class="components-container">
                    <div class="editor-container">
                      <dropzone v-on:dropzone-success="UploadFile" id="myVueDropzone" :url="url" :fdcdm='building.lddm' fdclx="楼栋" :maxFiles='1' :defaultImg="building.img"></dropzone>
                    </div>
                  </div>
                </template>
              </div>
            </el-row>
            <div class="title-img">楼栋轮播图</div>
            <el-row>
              <template>
                <div class="components-container">
                  <div class="editor-container">
                    <dropzone v-on:dropzone-removedFile="DelFile" v-on:dropzone-success="UploadFile" id="myVueDropzone1" :url="urlmuli" :fdcdm='building.lddm' fdclx="楼栋" zylx="户型图" :defaultImg="img"></dropzone>
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
  buildingsFactorsResidential,
  buildingsInfo,
  UpdateBuildingInfo,
  UpdateBuildingFactorsResidential
} from '@/api/building'
import Dropzone from '@/components/Dropzone'
import { imgs, deleteimgs } from '@/api/img'
export default {
  components: { Dropzone },
  data() {
    return {
      factor: {},
      form: {},
      result: {},
      building: {},
      img: [],
      imglist: {},
      url: process.env.IMG_URL,
      urlmuli: process.env.IMG_URL1
    }
  },
  mounted() {
    this.getBuilding()
    this.getImg()
    this.getBuildingFactorsResidential()
  },
  methods: {
    getBuilding() {
      buildingsInfo(this.$route.query.lddm).then(response => {
        this.building = response.data
        this.form = this.building
      })
    },
    getBuildingFactorsResidential() {
      const yt = 'residential'
      buildingsFactorsResidential(yt, this.$route.query.lddm).then(response => {
        this.factor = response.data
      })
    },
    SubmitFactor() {
      const yt = 'residential'
      UpdateBuildingFactorsResidential(
        yt,
        this.$route.query.lddm,
        this.factor
      ).then(response => {
        this.result = response
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
      UpdateBuildingInfo(this.building.lddm, data).then(response => {
        this.result = response
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
</style>