<template>
  <div class="app">
    <div class="margin10">
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息">
          <div class="margin60" style="height:100%">
            <el-form ref="form" :model="form" label-width="100px" label-position="right">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="户号">
                    <el-input size="small" v-model="form.hh"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="实际层">
                    <el-input size="small" v-model="form.sjc"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="房屋性质">
                    <el-input size="small" v-model="form.fwxz"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="户型">
                    <el-input size="small" v-model="form.hx"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="户型结构">
                    <el-input size="small" v-model="form.hxjg"></el-input>
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
                  <el-form-item label="套内建筑面积">
                    <el-input size="small" v-model="form.tnjzmj"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="分摊建筑面积">
                    <el-input size="small" v-model="form.ftjzmj"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="分摊土地面积">
                    <el-input size="small" v-model="form.fttdmj"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="朝向">
                    <el-input size="small" v-model="form.cx"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="备注">
                <el-input size="small" type="textarea" v-model="form.bz"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button size="small" type="primary" @click="onSubmit">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配套和指标因素">

          <el-tabs tab-position="left">
            <el-tab-pane label="住宅" v-if="house.fwyt1 ? house.fwyt1.indexOf('住宅') !== -1:false||house.fwyt2 ?house.fwyt2.indexOf('住宅') !== -1 : false">
              <el-form ref="factor" label-width="130px" :model="factor" label-position="right">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="朝向">
                      <el-input-number size="small" v-model="factor.cx" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="景观">
                      <el-input-number size="small" v-model="factor.jg" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="采光">
                      <el-input-number size="small" v-model="factor.cg" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>

                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="通风">
                      <el-input-number size="small" v-model="factor.tf" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="噪音">
                      <el-input-number size="small" v-model="factor.zy" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="户型布局">
                      <el-input-number size="small" v-model="factor.hxbj" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="装饰装修情况">
                      <el-input-number size="small" v-model="factor.zszxqk" :min="0" :max="100"></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
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
            <el-tab-pane label="办公" v-if="house.fwyt1 ? house.fwyt1.indexOf('办公') !== -1:false||house.fwyt2 ?house.fwyt2.indexOf('办公') !== -1 : false"></el-tab-pane>
            <el-tab-pane label="商业" v-if="house.fwyt1 ? house.fwyt1.indexOf('商业') !== -1:false||house.fwyt2 ?house.fwyt2.indexOf('商业') !== -1 : false"></el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="户图片">
          <div>
            <div class="title-img">户缩略图</div>
            <el-row>
              <div>
                <template>
                  <div class="components-container">
                    <div class="editor-container">
                      <dropzone v-on:dropzone-success="UploadFile" id="myVueDropzone" :url="url" :fdcdm='house.hdm' fdclx="户" :maxFiles="1" :defaultImg="house.img"></dropzone>
                    </div>
                  </div>
                </template>
</div>
</el-row>
 <div class="title-img">户轮播图</div>
      <el-row>
      <template>
  <div class="components-container">
    <div class="editor-container">
      <dropzone v-on:dropzone-removedFile="DelFile" v-on:dropzone-success="UploadFile" id="myVueDropzone1" :url="urlmuli" :fdcdm='house.hdm' fdclx="户" zylx="户型图" :defaultImg="img"></dropzone>
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
  unitInfo,
  unitFactors,
  UpdateHouseInfo,
  UpdateUnitFactors
} from '@/api/house'
import Dropzone from '@/components/Dropzone'
import { imgs, deleteimgs } from '@/api/img'
export default {
  components: { Dropzone },
  data() {
    return {
      factor: {},
      form: {},
      result: {},
      house: {},
      img: [],
      imglist: [],
      url: process.env.IMG_URL,
      urlmuli: process.env.IMG_URL1
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
      unitInfo(this.$route.query.hdm).then(response => {
        this.house = response.data
        this.form = this.house
      })
    },
    housrFactors() {
      unitFactors(this.$route.query.hdm).then(response => {
        this.factor = response.data
      })
    },
    SubmitFactor() {
      UpdateUnitFactors(this.$route.query.hdm, this.factor).then(response => {
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
@import "../../../styles/app.scss";
.el-row {
  margin-top: 5px;
  margin-bottom: 0px;
}
</style>