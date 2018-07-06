<template>
<div class="margin60"  style="height:100%">
  <el-tabs v-model="active" type="card" @tab-click="handleClick">
    <el-tab-pane label="前言" name="qy">
        <div>
         <table class="table" >
           <tr class="tr" style="background:#66b1ff26">
             <td class="td" ><span class="con">致估价委托人的函</span></td>
             <td class="tdtext"></td>
             <td class="tde"> <el-button type="text">模板</el-button></td>
           </tr>
       <tr class="tr">
           <td class="td" colspan="4">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 8}"
                  placeholder="请输入内容"
                  v-model="zwgwtrdh">
                </el-input>
           </td>
       </tr>
     <tr class="tr">
     
       <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">估价机构：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">出函日期：</span></td>
                <td class="tdtext1"> <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker></td>
         </el-col>
       </td>
    </tr>
     <tr class="tr" style="background:#66b1ff26">
             <td class="td" ><span class="con">注册房地产估价师声明</span></td>
             <td class="tdtext">
                 <el-button type="text">新建</el-button>
                 <el-button type="text">保存</el-button>
                 <el-button type="text">添加</el-button>
             </td>
             <td class="tde"></td>
           </tr>
      <tr class="tr">
      <td class="td"><span class="con">1</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">2</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">3</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
     
       <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">注册房地产估价师：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">查勘日期：</span></td>
                <td class="tdtext1"> <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker></td>
         </el-col>
       </td>
    </tr>
       <tr class="tr" style="background:#66b1ff26">
             <td class="td" ><span class="con">估价假设和限制条件</span></td>
             <td class="tdtext">
                 <el-button type="text">保存</el-button>
                 <el-button type="text">添加</el-button>
             </td>
             <td class="tde"></td>
           </tr>
            <tr class="tr">
             <td class="td" ><span class="con">估价假设条件</span></td>
             <td class="tdtext">
                 <el-button type="text">保存</el-button>
                 <el-button type="text">添加</el-button>
             </td>
             <td class="tde"></td>
           </tr>
      <tr class="tr">
      <td class="td"><span class="con">1</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">2</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">3</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
       <tr class="tr">
             <td class="td" ><span class="con">估价限制条件</span></td>
             <td class="tdtext">
                 <el-button type="text">保存</el-button>
                 <el-button type="text">添加</el-button>
             </td>
             <td class="tde"></td>
           </tr>
      <tr class="tr">
      <td class="td"><span class="con">1</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">2</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">3</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
  </table>
        </div>
    </el-tab-pane>
    <el-tab-pane label="估计结果报告" name="gjjgbg">
              <div>
  <table class="table" >
    <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>估价委托人</span></td>
    </tr>
    <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">委托人：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">类型：</span></td>
                <td class="tdtext1"><el-select v-model="form.xzq">
            <el-option label="单位"></el-option>
            <el-option label="个人"></el-option>
          </el-select></td>
         </el-col>
       </td>
       </tr>
        <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">地址：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">法人：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
       </td>
       </tr>
        <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>估价机构</span></td>
    </tr>
    <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">估价机构：</span></td>
                <td class="tdtext1"><el-select v-model="form.xzq">
            <el-option label="广东**房地产评估咨询有限公司"></el-option>
            <el-option label="广东**房地产评估咨询有限公司"></el-option>
             <el-option label="广东**房地产评估咨询有限公司"></el-option>
          </el-select></td>
                 <td class="td" ><span class="con">资质等级：</span></td>
                <td class="tdtext1"><el-select v-model="form.xzq">
            <el-option label="一级"></el-option>
            <el-option label="二级"></el-option>
            <el-option label="三级"></el-option>
          </el-select></td>
         </el-col>
       </td>
       </tr>
        <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">地址：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">法人：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
       </td>
       </tr>
         <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">证书编号：</span></td>
                <td class="tdtext"><el-input v-model="form.mph"></el-input></td>
                
         </el-col>
       </td>
       </tr>
         <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>估价对象</span></td>
    </tr>
     <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" rowspan="2"><span class="con">基本情况：</span></td>
                <td class="tdtext">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea3">
                   </el-input>
                </td>
         </el-col>
       </td>
       </tr>
        <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" rowspan="2"><span class="con">权益状况：</span></td>
                <td class="tdtext">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea3">
                   </el-input>
                </td>
         </el-col>
       </td>
       </tr>
          <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>价值时点</span></td>
    </tr>
    <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">价值时点：</span></td>
                <td class="tdtext1"><el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker></td>
               <td class="td" ><span class="con"></span></td>
                <td class="tdtext1"></td>
         </el-col>
       </td>
       </tr>
         <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>价值类型</span>   <el-button type="text">模板</el-button></td>
    </tr>
           <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" rowspan="2"><span class="con">价值类型</span></td>
                <td class="tdtext">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea3">
                   </el-input>
                </td>
         </el-col>
       </td>
       </tr>
         <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>估价依据</span>  
       <el-button type="text">新建</el-button>
       <el-button type="text">添加</el-button></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">1</span></td>
       <td class="tdtext"> 
           <el-col :span="24">
       
               <td class="tdtext1"> <el-select v-model="form.xzq">
            <el-option label="一级"></el-option>
            <el-option label="二级"></el-option>
            <el-option label="三级"></el-option>
          </el-select></td>
            
                <td class="tdtext1"><el-select v-model="form.xzq">
            <el-option label="法律、法规和政策性文件"></el-option>
            <el-option label="技术标准、规程、规范"></el-option>
            <el-option label="委托人提供的相关资料"></el-option>
             <el-option label="估计人员调查搜集的资料"></el-option>
          </el-select></td>
         </el-col>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>估价原则</span>  
       <el-button type="text">新建</el-button>
       <el-button type="text">添加</el-button></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">1</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">2</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">3</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">4</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">5</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">6</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>估价方法</span>   <el-button type="text">模板</el-button></td>
    </tr>
           <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" rowspan="2"><span class="con">选择理由</span></td>
                <td class="tdtext">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea3">
                   </el-input>
                </td>
         </el-col>
       </td>
       </tr>
       <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">估价方法：</span></td>
                <td class="tdtext1"><el-select v-model="form.xzq">
            <el-option label="市场法"></el-option>
            <el-option label="收益法"></el-option>
             <el-option label="成本法"></el-option>
          </el-select></td>
                 <td class="td" ></td>
                <td class="tdtext1"></td>
         </el-col>
       </td>
       </tr>
        <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>估价结果</span>   <el-button type="text">模板</el-button></td>
    </tr>
           <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" rowspan="2"><span class="con">估价结果</span></td>
                <td class="tdtext">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea3">
                   </el-input>
                </td>
         </el-col>
       </td>
       </tr>
        <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>作业日期</span>   <el-button type="text">模板</el-button></td>
    </tr>
    <tr>
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">作业日期：</span></td>
                <td class="tdtext"><span><el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker></span>
               <span> <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker></span></td>
                 <td class="td" ></td>
                <td class="tdtext1"></td>
         </el-col>
       </td>
       </tr>
        <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>报告有效期</span>  </td>
    </tr>
         <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">跨度：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">有效期：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
       </td>
       </tr>
    
  </table>
 
        </div>
    </el-tab-pane>
    <el-tab-pane label="估价技术报告" name="gjjsbg">
       <div>
  <table class="table" >
       <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>市场背景描述与分析</span>  
       <el-button type="text">新建</el-button>
       <el-button type="text">添加</el-button></td>
    </tr>
     <tr class="tr">
     <td colspan="4">
          <el-col :span="24">
        <td class="td" ><span class="con">选用模板：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ></td>
                <td class="tdtext1"></td>
         </el-col>
       </td>
       </tr>
        <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>最高最佳利用分析</span>  
       <el-button type="text">保存</el-button>
       <el-button type="text">模板</el-button></td>
    </tr>
        <tr class="tr">
           <td class="td" colspan="4">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 8}"
                  placeholder="请输入内容"
                  v-model="zwgwtrdh">
                </el-input>
           </td>
       </tr>
        <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>估价方法适用性分析</span>  
       <el-button type="text">保存</el-button>
       <el-button type="text">模板</el-button></td>
    </tr>
        <tr class="tr">
           <td class="td" colspan="4">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 8}"
                  placeholder="请输入内容"
                  v-model="zwgwtrdh">
                </el-input>
           </td>
       </tr>
       
  
  </table>
  
        </div>
    </el-tab-pane>
       <el-tab-pane label="附件" name="fj">
       <div>
    <div class="title-mini">房地产证复印件</div>
      <el-row>
        <div>
      <template>
<div class="components-container">
<div class="editor-container">
<dropzone
v-on:dropzone-success="UploadFile" id="myVueDropzone" url="http://211.154.135.29:88/v1/thumbnails" :fdcdm='lddm' fdclx="楼栋" maxFiles=1 :defaultImg="img"></dropzone>
</div>
</div>
</template>
</div>
</el-row>
 <div class="title-mini">业主身份证复印件</div>
      <el-row>
        <div>
      <template>
<div class="components-container">
<div class="editor-container">
<dropzone
v-on:dropzone-success="UploadFile" id="myVueDropzone1" url="http://211.154.135.29:88/v1/thumbnails" :fdcdm='lddm' fdclx="楼栋" maxFiles=1 :defaultImg="img"></dropzone>
</div>
</div>
</template>
</div>
</el-row>
 <div class="title-mini">实地查勘表</div>
      <el-row>
        <div>
      <template>
<div class="components-container">
<div class="editor-container">
<dropzone
v-on:dropzone-success="UploadFile" id="myVueDropzone2" url="http://211.154.135.29:88/v1/thumbnails" :fdcdm='lddm' fdclx="楼栋" maxFiles=1 :defaultImg="img"></dropzone>
</div>
</div>
</template>
</div>
</el-row>
 
  
        </div>
    </el-tab-pane>
  
  </el-tabs>
</div>
</template>
<script>
import Dropzone from '@/components/Dropzone'
export default {
  components: { Dropzone },
  data() {
    return {
      active: 'qy',
      zwgwtrdh: '  受贵司委托，本公司对位于福田区华强北街道燕南路君悦阁502住宅房地产市场价值进行评估。估价时点为2018年1月1日，估价目的为确定房地产抵押贷款额度提供价值参考依据。在整个估价过程中，注册房地产估价师本着独立、客观、公正的原则，在对估价对象进行了实地查勘、广泛收集有关市场信息和估价对象信息的基础上，全面分析了影响估价对象市场价格的因素，运用市场法、成本法等估价方法对估价对象进行了评估，估价人员经过实地查勘和测算，确定估价对象在价值时点的市场价值为￥4 963 980元（人民币肆佰玖拾陆万叁仟玖佰捌拾元整），估价对象的抵押价值为￥4 963 980元（人民币肆佰玖拾陆万叁仟玖佰捌拾元整），详见《估价结果明细表》。报告使用人在使用本报告之前须对报告全文，特别是“估价假设和限制条件“认真阅读，以免使用不当，造成损失！估价详细结果、过程及有关说明，请详见《估价结果报告》、《估价技术报告》。',
      form: {
        rwbh: '深房估字(2018)第1907号'
      },
      dialogFormVisible: false
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
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
   .margin60 .tr{
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
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
     width: 90%;
  }
   .margin60 .tdtext1{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0.2px solid #c0c4cc;
     width: 40%;
  }
   .margin60 .tde{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0.2px solid #c0c4cc;
    width: 4%;
     margin-top: 0px;
    margin-bottom: 0px;
    align-content: center;
    
    
  }
  //  .margin60 .inner{
  //  border: 0px solid #dcdfe6
  // }
  
 
</style>