<template>
  <div class="audit-container">
    <div class="sqr-detail">
      <el-form ref="form">
        <el-row>
            <h3>申请人信息</h3>
        </el-row>
        <el-row>
            <el-col :span="5">
                <el-form-item label="权利人名称:">
                    <span class="data">张三</span>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="联系人电话:">
                    <span class="data">13971608536</span>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="申请日期:">
                    <span class="data">2018-7-3</span>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
              <el-form-item label="公民身份证号或组织代码:">
                  <span class="data">4211261975364312</span>
              </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <h3>房产信息 </h3>
        </el-row>
        <el-row>
          <el-col :span="5">
              <el-form-item label="房产名称:">
                  <span class="data">水榭花都</span>
              </el-form-item>
          </el-col>
          <el-col :span="7">
              <el-form-item label="房产类别:">
                  <span class="data">住宅</span>
              </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
              <el-form-item label="权利人身份证或营业执照:">
                  <el-button type="plain" size="small">查看</el-button>
              </el-form-item>
          </el-col>
          <el-col :span="6">
              <el-form-item label="房地产证书:">
                  <el-button type="plain" size="small">查看</el-button>
              </el-form-item>
          </el-col>
          <el-col :span="4">
              <el-form-item label="授权书:">
                  <el-button type="plain" size="small">查看</el-button>
              </el-form-item>
          </el-col>
        </el-row>
        <el-row class="explain">授权书说明：如果委托代理人，需要业主签名的授权书扫描件；如业主本人申请，则跳过此步。</el-row>
      </el-form>
    </div>
    <div class="reason-state">
      <el-row>
        <h3>正当理由陈述</h3>
      </el-row>
      <el-row>
        <div class="text">
          我家的房产朝向、采光都比邻居差，为什么反而比邻居的房价高？申请复核，请受理
        </div>
      </el-row>
    </div>
    <div class="audit-result">
      <el-row>
        <h3>审核结果</h3>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-radio v-model="radio" label="1">通过</el-radio>
        </el-col>
        <el-col :span="3">
          分配复核估价师：
        </el-col>
        <el-col :span="5">
          <el-select v-model="name1" placeholder="请选择" size="medium">
            <el-option
              v-for="item in names"
              :key="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          分配终审专家：
        </el-col>
        <el-col :span="5">
          <el-select v-model="name2" placeholder="请选择" size="medium">
            <el-option
              v-for="item in names"
              :key="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" size="small" :loading="loading" @click="submit">提交</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-radio v-model="radio" label="2">不通过</el-radio>
        </el-col>
        <el-col :span="9">
          <textarea v-model="noPassValue" placeholder="不通过的原因..."></textarea>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" size="small" class="return">退回申请人</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        name1: '',
        name2: '',
        names: ['张三', '李四', '王五'],
        radio: '1',
        loading: false,
        noPassValue: ''
      }
    },
    methods: {
      submit() {
        if (this.radio === '1') {
          if (this.name1 && this.name2) {
            // const params = {
            //   pass: true,
            //   name1: this.name1,
            //   name2: this.name2
            // }
            this.loading = true
            setTimeout(() => {
              this.loading = false
              this.$message({
                message: '提交成功!',
                type: 'success'
              })
            }, 500)
          } else {
            this.$message({
              message: '请选择分配人员!',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '请选择通过!',
            type: 'error'
          })
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .audit-container {
    padding-left: 30px;
      .sqr-detail, .reason-state, .audit-result {
      margin-top: 20px;
      h3 {
        margin-bottom: 10px;
        color: #585858;
      }
      .el-row {
        // 子元素垂直居中
        display: flex;
        align-items: center;
        margin-top: 10px;
        color: #606266;
        .data {
          color: #000;
          text-decoration: underline
        }
      }
      .explain {
        font-size: 14px;
        color: red;
      }
      .text {
        width: 50%;
        padding: 10px;
        font-size: 14px;
        text-indent:30px;
        border: 1px solid #7b7676;
        border-radius: 5px;
      }
      textarea {
        width: 100%;
        height: 100px;
        border-radius: 5px;
        border: 1px solid #808080;
      }
      .return {
        margin: 65px 0 0 20px;
      }
    }
  }
  
</style>
