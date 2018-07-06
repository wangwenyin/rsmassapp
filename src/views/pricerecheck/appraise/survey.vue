<template>
  <div class="survey-container">
    <el-row class="header">
      <span class="title">查勘信息</span>
      <span class="save">保存</span>
      <span class="photo">照片</span>
      <span class="imp">导入</span>
    </el-row>
    <el-form ref="form" :model="form">
      <el-row>
        <span class="title-small">区位状况 </span>
      </el-row>
      <table class="table">
        <tr class="tr">
          <td class="td"><span class="con">地址</span></td>
          <td class="tdtext"> 
            <el-col :span="6">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option
                  v-for="item in form.regionList"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="18">
              <el-input v-model="form.detailedAddress "></el-input>
            </el-col>
          </td>
          <td class="td"><span class="con">地理坐标</span></td>
          <td class="tdtext"> <el-input v-model="form.position"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">公交站点</span></td>
          <td class="tdtext">  <el-input v-model="form.dllzb"></el-input></td>
          <td class="td"><span class="con">地铁站点</span></td>
          <td class="tdtext">  <el-input v-model="form.dtzd"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">公交路线</span></td>
          <td class="tdtext">  <el-input v-model="form.gjzd"></el-input></td>
          <td class="td"><span class="con">交通管制</span></td>
          <td class="tdtext">  <el-input v-model="form.jtgz"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">环境质量</span></td>
          <td class="tdtext">
            <el-radio-group v-model="form.hjzl">
              <el-radio label="好"></el-radio>
              <el-radio label="较好"></el-radio>
              <el-radio label="一般"></el-radio>
              <el-radio label="较差"></el-radio>
              <el-radio label="差"></el-radio>
            </el-radio-group>
          </td>
          <td class="td"><span class="con">环境说明</span></td>
          <td class="tdtext"><el-input v-model="form.hjsm"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">周边景观</span></td>
          <td class="tdtext">
            <el-radio-group v-model="form.zbjg">
              <el-radio label="极好"></el-radio>
              <el-radio label="好"></el-radio>
              <el-radio label="较好"></el-radio>
              <el-radio label="一般"></el-radio>
              <el-radio label="无景观"></el-radio>
            </el-radio-group>
          </td>
          <td class="td"><span class="con">景观说明</span></td>
          <td class="tdtext"> <el-input v-model="form.jgsm"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">小学学位</span></td>
          <td class="tdtext"><el-input v-model="form.xxxw"></el-input></td>
          <td class="td"><span class="con">初中学位</span></td>
          <td class="tdtext"><el-input v-model="form.czxw"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">基础设施</span></td>
          <td class="tdtext"><el-input v-model="form.jcss"></el-input></td>
          <td class="td"><span class="con">生活设施</span></td>
          <td class="tdtext"><el-input v-model="form.shss"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">其他情况说明</span></td>
          <td class="tdtext" colspan="3"><el-input v-model="form.qtqksm"></el-input></td>
        </tr>
      </table>
      <el-row>
        <span class="title-small">小区信息 </span>
      </el-row>
      <table class="table">
        <tr class="tr">
          <td class="td"><span class="con">物业管理公司</span></td>
          <td class="tdtext"> <el-input v-model="form.wyglgs"></el-input></td>
          <td class="td"><span class="con">物业管理费</span></td>
          <td class="tdtext"><el-input v-model="form.wyglf" placeholder="元/平方米/月"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">物业管理水平</span></td>
          <td class="tdtext"> <el-radio-group v-model="form.wyglsp">
          <el-radio label="好"></el-radio>
          <el-radio label="较好"></el-radio>
          <el-radio label="一般"></el-radio>
          <el-radio label="较差"></el-radio>
          <el-radio label="差"></el-radio>
          </el-radio-group>
          </td>
          <td class="td"><span class="con">物管说明</span></td>
          <td class="tdtext"> <el-input v-model="form.wgsm"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">内部环境</span></td>
          <td class="tdtext">
            <el-radio-group v-model="form.nbhj">
              <el-radio label="好"></el-radio>
              <el-radio label="较好"></el-radio>
              <el-radio label="一般"></el-radio>
              <el-radio label="较差"></el-radio>
              <el-radio label="差"></el-radio>
            </el-radio-group>
          </td>
          <td class="td"><span class="con">环境说明</span></td>
          <td class="tdtext">  <el-input v-model="form.hjsm"></el-input></td>
        </tr>
        <tr class="tr">
            <td class="td"><span class="con">内部配套设施</span></td>
            <td class="tdtext">  <el-input v-model="form.nbptss"></el-input></td>
            <td class="td"><span class="con">容积率</span></td>
            <td class="tdtext"> <el-input v-model="form.rjl"></el-input></td>
        </tr>
      </table>
      <el-row>
        <span class="title-small">建筑物信息 </span>
      </el-row>
      <table class="table" >
        <tr class="tr">
          <td class="td"><span class="con">楼栋名称</span></td>
          <td class="tdtext"> <el-input v-model="form.ldmc"></el-input></td>
          <td class="td"><span class="con">总层数</span></td>
          <td class="tdtext"><el-input v-model="form.zcs"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">竣工日期</span></td>
          <td class="tdtext">
            <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.compDate" style="width: 100%;"></el-date-picker>
          </td>
          <td class="td"><span class="con">成新率</span></td>
          <td class="tdtext"><el-input v-model="form.cxl" placeholder="成新"></el-input></td>
        </tr>
          <tr class="tr">
            <td class="td"><span class="con">建筑外观</span></td>
            <td class="tdtext"><el-input v-model="form.jzwg"></el-input></td>
            <td class="td"><span class="con">建筑结构</span></td>
            <td class="tdtext"><el-input v-model="form.jzjg"></el-input></td>
          </tr>
          <tr class="tr">
            <td class="td"><span class="con">梯户比</span></td>
            <td class="tdtext"><el-input v-model="form.thb"></el-input></td>
            <td class="td"><span class="con">空间布局</span></td>
            <td class="tdtext"><el-input v-model="form.kjbj"></el-input></td>
          </tr>
      </table>
      <el-row>
        <span class="title-small">房屋信息 </span>
      </el-row>
      <table class="table" >
        <tr class="tr">
          <td class="td"><span class="con">房屋名称</span></td>
          <td class="tdtext"> <el-input v-model="form.fwmc"></el-input></td>
          <td class="td"><span class="con">现状用途</span></td>
          <td class="tdtext"><el-input v-model="form.xzyt"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">所在层</span></td>
          <td class="tdtext"> <el-input v-model="form.szc"></el-input></td>
          <td class="td"><span class="con">建筑面积</span></td>
          <td class="tdtext"><el-input v-model="form.jzmj"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">房屋性质</span></td>
          <td class="tdtext"> <el-input v-model="form.fwxz"></el-input></td>
          <td class="td"><span class="con">使用状况</span></td>
          <td class="tdtext"><el-input v-model="form.syzk"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">朝向</span></td>
          <td class="tdtext">
            <el-radio-group v-model="form.cx">
              <el-radio label="东"></el-radio>
              <el-radio label="南"></el-radio>
              <el-radio label="西"></el-radio>
              <el-radio label="北"></el-radio><br>
              <el-radio label="东北"></el-radio>
              <el-radio label="西北"></el-radio>
              <el-radio label="西南"></el-radio>
            </el-radio-group>
          </td>
          <td class="td"><span class="con">朝向说明</span></td>
          <td class="tdtext"> <el-input v-model="form.cxsm"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">可视景观</span></td>
          <td class="tdtext"> <el-input v-model="form.ksjg"></el-input></td>
          <td class="td"></td>
          <td class="tdtext"></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">采光通风</span></td>
          <td class="tdtext">
            <el-radio-group v-model="form.cgtf">
              <el-radio label="好"></el-radio>
              <el-radio label="较好"></el-radio>
              <el-radio label="一般"></el-radio>
              <el-radio label="较差"></el-radio>
              <el-radio label="差"></el-radio>
            </el-radio-group>
          </td>
          <td class="td"><span class="con">采光通风说明</span></td>
          <td class="tdtext"><el-input v-model="form.cgtssm"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">噪音废气</span></td>
          <td class="tdtext">
            <el-radio-group v-model="form.zyfq">
              <el-radio label="好"></el-radio>
              <el-radio label="较好"></el-radio>
              <el-radio label="一般"></el-radio>
              <el-radio label="较差"></el-radio>
              <el-radio label="差"></el-radio>
            </el-radio-group>
          </td>
          <td class="td"><span class="con">采光通风说明</span></td>
          <td class="tdtext"><el-input v-model="form.zyfqsm"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">户型</span></td>
          <td class="tdtext"><el-input v-model="form.hx"></el-input></td>
          <td class="td"><span class="con">户型结构</span></td>
          <td class="tdtext">
            <el-select v-model="form.housetype" placeholder="请选择">
              <el-option
                v-for="item in form.housetypeList"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </td>
        </tr>
          <tr class="tr">
          <td class="td"><span class="con">户型布局</span></td>
          <td class="tdtext"> <el-input v-model="form.hxbj"></el-input></td>
          <td class="td"><span class="con">附加空间</span></td>
          <td class="tdtext">  <el-input v-model="form.fjkj"></el-input></td>
        </tr>
        <tr class="tr">
          <td class="td"><span class="con">装修装饰</span></td>
          <td class="tdtext">
            <el-radio-group v-model="form.zxzs">
              <el-radio label="豪华"></el-radio>
              <el-radio label="精装"></el-radio>
              <el-radio label="简装"></el-radio>
              <el-radio label="毛坯"></el-radio>
            </el-radio-group>
          </td>
          <td class="td"><span class="con">装修说明</span></td>
          <td class="tdtext"><el-input v-model="form.zxsm"></el-input></td>
        </tr>
          <tr class="tr">
          <td class="td"><span class="con">设施设备</span></td>
          <td class="tdtext"><el-input v-model="form.sssb"></el-input></td>
          <td class="td"></td>
          <td class="tdtext"></td>
        </tr>
      </table>
      <el-form-item>
        <router-link :to="{ name:'task' }">
          <el-button type="primary" size="medium">需调整价格，进入个案评估系统</el-button>
        </router-link>
        <el-button type="primary" size="medium">不调整价格，送往终审</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          detailedAddress: '',
          position: '',
          compDate: '',
          housetype: '',
          housetypeList: ['平层', '复式', '错层', '跃式', '双拼'],
          region: '',
          regionList: ['福田区', '南山区', '宝安区', '罗湖区', '龙岗区', '龙华区', '坪山区']
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    background-color: #585858;
    color: #fff;
  }
  
  .title, .title-small {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
    font-weight: bold;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
  .title-small {
    font-size: 16px;
  }
  .imp, .photo, .save {
    float: right;
    height: 40px;
    line-height: 40px;
    margin-left: 40px;
    font-size: 14px;
    cursor: pointer;
  }
  .survey-container .save {
    margin-right: 10px;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    .el-input {
      border: 0 !important;
      border-radius: 0;
    }
  }
  .survey-container {
    padding: 10px 30px;
  }
  .survey-container .el-form {
    border: 1px solid #c0c4cc;
  }
  .survey-container .el-col {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .survey-container .el-row {
    margin-top: 0px;
    margin-bottom: 0px;
    align-content: center;
  }
  .survey-container .el-form-item{
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
    .el-button {
      margin: 20px 100px;
    }
  }
  .survey-container .tr{
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .survey-container .td{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 1px solid #c0c4cc;
    width: 6%;
    margin-top: 0px;
    margin-bottom: 0px;
    align-content: center;
  }
  .survey-container .tdtext{
    margin-top: 0px;
    margin-bottom: 0px;
    // border: 1px solid #c0c4cc;
    width: 40%;
  }
  .survey-container .table{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 1px solid #c0c4cc;
    width: 100%;
  }
  .survey-container .el-form-item .el-form-item__label{
    border: 1px solid #c0c4cc;
  }
  .survey-container .el-input__inner{
    border-radius: 0px;
  }
  .survey-container .con {
    display: inline-block;
    width: 130px;
    margin-right:20px;
    color:#7b7676;
    text-align: right;
    font-size: 15px;
  }
</style>