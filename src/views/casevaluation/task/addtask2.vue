<template>
 <div class="margin60"  style="height:100%">
  <el-row :gutter="10" >
    <el-col :span="19">
      <span class="title">查勘信息</span>
    </el-col>
    <el-col :span="2"><el-button  v-on:click="search">导入</el-button></el-col>
    <el-col :span="2"><el-button  v-on:click="search">照片</el-button></el-col>
  </el-row>
  <el-row>
   <span class="title-small">区位状况 </span>
  </el-row>
  <table class="table" >
    <tr class="tr">
      <td class="td"><span class="con">地址</span></td>
       <td class="tdtext"> 
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
        <el-col :span="18">
           <el-input v-model="form.mph"></el-input>
         </el-col></td>
        <td class="td"><span class="con">地理坐标</span></td>
         <td class="tdtext"> <el-input v-model="form.dllzb"></el-input></td>
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
       <td class="tdtext"> <el-radio-group v-model="form.hjzl">
      <el-radio label="好"></el-radio>
       <el-radio label="较好"></el-radio>
      <el-radio label="一般"></el-radio>
      <el-radio label="较差"></el-radio>
      <el-radio label="差"></el-radio>
    </el-radio-group></td>
        <td class="td"><span class="con">环境说明</span></td>
         <td class="tdtext"> <el-input v-model="form.hjsm"></el-input></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">周边景观</span></td>
       <td class="tdtext"> <el-radio-group v-model="form.zbjg">
       <el-radio label="极好"></el-radio>
      <el-radio label="好"></el-radio>
      <el-radio label="较好"></el-radio>
      <el-radio label="一般"></el-radio>
      <el-radio label="无景观"></el-radio>
    </el-radio-group></td>
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
       <td class="tdtext"> <el-input v-model="form.jcss"></el-input></td>
        <td class="td"><span class="con">生活设施</span></td>
         <td class="tdtext"><el-input v-model="form.shss"></el-input></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">其他情况说明</span></td>
       <td class="tdtext" colspan="3"><el-input v-model="form.qtqksm"></el-input></td>
    </tr>
  </table>
  <el-form ref="form" :model="form" label-width="100px" label-position="right" class="form">
  
  
     
       <!-- </el-form>
      <el-form ref="form" :model="form" label-width="100px" label-position="right" class="form"> -->
   <el-row>
   <span class="title-small">小区信息 </span>
  </el-row>
  <table class="table" >
      <tr class="tr">
      <td class="td"><span class="con">物业管理公司</span></td>
       <td class="tdtext"> <el-input v-model="form.wyglgs"></el-input></td>
        <td class="td"><span class="con">物业管理费</span></td>
         <td class="tdtext"><el-input v-model="form.wyglf"></el-input></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">物业管理水平</span></td>
       <td class="tdtext"> <el-radio-group v-model="form.wyglsp">
      <el-radio label="好"></el-radio>
       <el-radio label="较好"></el-radio>
      <el-radio label="一般"></el-radio>
      <el-radio label="较差"></el-radio>
      <el-radio label="差"></el-radio>
    </el-radio-group></td>
        <td class="td"><span class="con">物管说明</span></td>
         <td class="tdtext"> <el-input v-model="form.wgsm"></el-input></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">内部环境</span></td>
       <td class="tdtext"> <el-radio-group v-model="form.nbhj">
       <el-radio label="好"></el-radio>
      <el-radio label="较好"></el-radio>
      <el-radio label="一般"></el-radio>
      <el-radio label="较差"></el-radio>
      <el-radio label="差"></el-radio>
    </el-radio-group></td>
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
       <td class="tdtext"><el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker></td>
        <td class="td"><span class="con">成新率</span></td>
         <td class="tdtext"><el-input v-model="form.cxl"></el-input></td>
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
       <td class="tdtext"> <el-radio-group v-model="form.cx">
       <el-radio label="南"></el-radio>
      <el-radio label="西南"></el-radio>
      <el-radio label="东"></el-radio>
      <el-radio label="北"></el-radio>
      <el-radio label="东北"></el-radio>
      <el-radio label="西"></el-radio>
      <el-radio label="西北"></el-radio>
    </el-radio-group></td>
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
       <td class="tdtext"> <el-radio-group v-model="form.cgtf">
       <el-radio label="好"></el-radio>
      <el-radio label="较好"></el-radio>
      <el-radio label="一般"></el-radio>
      <el-radio label="较差"></el-radio>
      <el-radio label="差"></el-radio>
    </el-radio-group></td>
        <td class="td"><span class="con">采光通风说明</span></td>
         <td class="tdtext"><el-input v-model="form.cgtssm"></el-input></td>
      </tr>
      <tr class="tr">
      <td class="td"><span class="con">噪音废气</span></td>
       <td class="tdtext"><el-radio-group v-model="form.zyfq">
       <el-radio label="好"></el-radio>
      <el-radio label="较好"></el-radio>
      <el-radio label="一般"></el-radio>
      <el-radio label="较差"></el-radio>
      <el-radio label="差"></el-radio>
    </el-radio-group></td>
        <td class="td"><span class="con">采光通风说明</span></td>
         <td class="tdtext"><el-input v-model="form.zyfqsm"></el-input></td>
      </tr>
       <tr class="tr">
      <td class="td"><span class="con">户型</span></td>
       <td class="tdtext"> <el-input v-model="form.hx"></el-input></td>
        <td class="td"><span class="con">户型结构</span></td>
         <td class="tdtext"> <el-select v-model="form.hxjg">
            <el-option label="平层"></el-option>
            <el-option label="复式"></el-option>
            <el-option label="错层"></el-option>
            <el-option label="跃式"></el-option>
            <el-option label="双拼"></el-option>
          </el-select></td>
      </tr>
         <tr class="tr">
      <td class="td"><span class="con">户型布局</span></td>
       <td class="tdtext"> <el-input v-model="form.hxbj"></el-input></td>
        <td class="td"><span class="con">附加空间</span></td>
         <td class="tdtext">  <el-input v-model="form.fjkj"></el-input></td>
      </tr>
       <tr class="tr">
      <td class="td"><span class="con">装修装饰</span></td>
       <td class="tdtext"><el-radio-group v-model="form.zxzs">
       <el-radio label="豪华"></el-radio>
      <el-radio label="精装"></el-radio>
      <el-radio label="简装"></el-radio>
      <el-radio label="毛坯"></el-radio>
    </el-radio-group></td>
        <td class="td"><span class="con">装修说明</span></td>
         <td class="tdtext">  <el-input v-model="form.zxsm"></el-input></td>
      </tr>
        <tr class="tr">
      <td class="td"><span class="con">设施设备</span></td>
       <td class="tdtext"> <el-input v-model="form.sssb"></el-input></td>
        <td class="td"></td>
         <td class="tdtext"> </td>
      </tr>
    </table>
  <el-form-item>
     <router-link :to="{ name:'addtask3' ,param: { rwbh: rwbh }}" >
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
    // const label = document.querySelector('.el-form-item .el-form-item__label')
    // label.style.border = '1px solid'
  },
  methods: {
  }

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
    table {
          border-spacing: 0;
              border-collapse: collapse;
              .el-input {
                border: 0 !important;
                border-radius: 0;
              }
    }
  .margin60 .el-col {
    // border: 0.5px solid red;
    margin-top: 0px;
    margin-bottom: 0px;
  }
   .margin60 .el-row {
  // border: 0.5px solid blue;
    margin-top: 0px;
    margin-bottom: 0px;
    align-content: center;
    

  }
  .margin60 .el-form-item{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0.2px solid #c0c4cc;
  }
   .margin60 .tr{
    margin-top: 0px;
    margin-bottom: 0px;
  }
   .margin60 .td{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0.2px solid #c0c4cc;
    width: 6%;
   margin-top: 0px;
    margin-bottom: 0px;
    align-content: center;
    
  }
   .margin60 .tdtext{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0.2px solid #c0c4cc;
     width: 40%;
  }
  .margin60 .table{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0.2px solid #c0c4cc;
    width: 100%;
  }
 .margin60 .el-form-item .el-form-item__label{
    border: 1px solid #c0c4cc;
 }
  .margin60 .form{
    border: 0.3px solid #c0c4cc;
  }
 .margin60 .el-input__inner{
    border-radius: 0px;
  }
    .margin60 .con {
     display: inline-block;
     margin-right:13px;
     color:#7b7676;
     text-align: right;
     font-size: 15px;
   }
</style>