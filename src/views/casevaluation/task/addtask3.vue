<template>
<div class="margin60"  style="height:100%">
  <el-tabs v-model="active" type="card" @tab-click="handleClick">
    <el-tab-pane label="区位状态" name="qwzk">
        <div>
             <el-row>
   <span class="title-small">估价对象区位状况描述与分析 </span>
  </el-row>
  <table class="table" >
    <tr class="tr">
      <td class="td"><span class="con">坐落:</span></td>
       <td class="tdtext"> 
          <el-col :span="4">
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
        <el-col :span="20">
           <el-input v-model="form.mph"></el-input>
         </el-col></td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
       <td class="td">
         <span class="con">四至及临路:</span>
       </td>
       <td colspan="2">
          <el-col :span="24">
        <td class="td" ><span class="con">东</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">南</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
        <el-col :span="24">
          <td class="td" ><span class="con">西</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">北</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
       </td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">方位：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">区域中心距离：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">道路通达程度：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">地铁便捷程度：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">公交便捷程度：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">交通管制：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">停车便捷程度：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">环境质量：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">周边景观：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">教育设施完备度：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">学区学位：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">基础设施完备度：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">生活设施完备度：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">其他情况说明：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
  </table>
        </div>
    </el-tab-pane>
    <el-tab-pane label="权益情况" name="qyqk">
              <div>
             <el-row>
   <span class="title-small">估价对象权益状况描述与分析 </span>
  </el-row>
  <table class="table" >
    <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>土地权益状况</span></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地用途：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地性质：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地所有权：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地使用权：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">他项权：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地使用年限：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">其他特殊情况：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph" class="inner"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr" style="height:40px">
      <td class="tdtext" colspan="3"><span  >建筑物及房屋权益状况</span></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">房屋所有权：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">房屋用途：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">房屋性质：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">他项权利：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">其他特殊情况：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
  </table>
 
        </div>
    </el-tab-pane>
    <el-tab-pane label="实物情况" name="swqk">
       <div>
             <el-row>
   <span class="title-small">估价对象实物状况描述与分析 </span>
  </el-row>
  <table class="table" >
    <tr class="tr" style="height:40px">
      <td class="td" colspan="3"><span>土地实物状况</span></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">宗地号：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地用途：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地位置：</span></td>
          <td class="tdtext"> 
          <el-col :span="4">
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
        <el-col :span="20">
           <el-input v-model="form.mph"></el-input>
         </el-col></td>
       
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地面积：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">取得时间：</span></td>
       <td class="tdtext"> 
          <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.jzsd" style="width: 100%;"></el-date-picker>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">使用年限：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">土地证号：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">登记价格：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">土地形状：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">地形地势：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">土地开发程度：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">容积率：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr" style="height:40px">
      <td class="tdtext" colspan="3"><span  >建筑物实物状况</span></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">建筑规模：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">总楼层：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">建筑外观：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">建筑结构：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">建筑年代：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">空间布局：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">配套设施：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">物业管理：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">内部环境：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>

     <tr class="tr" style="height:40px">
      <td class="tdtext" colspan="3"><span  >房产实物状况</span></td>
    </tr>
     <tr class="tr">
       <td colspan="4">
          <el-col :span="24">
                <td class="td" ><span class="con">房屋名称：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">房屋用途：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
       </td>
    </tr>
     <tr class="tr">
       <td colspan="4">
          <el-col :span="24">
                <td class="td" ><span class="con">所在层：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">建筑面积：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
       </td>
    </tr>
     <tr class="tr">
       <td colspan="4">
          <el-col :span="24">
                <td class="td" ><span class="con">房屋性质：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">使用状况：</span></td>
                <td class="tdtext1"> <el-select v-model="form.xzq">
            <el-option label="自由"></el-option>
            <el-option label="空置"></el-option>
            <el-option label="出租"></el-option>
            
          </el-select></td>
         </el-col>
       </td>
    </tr>
     <tr class="tr">
       <td colspan="4">
          <el-col :span="24">
                <td class="td" ><span class="con">朝向：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">所看景观：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
       </td>
    </tr>
     <tr class="tr">
       <td colspan="4">
          <el-col :span="24">
                <td class="td" ><span class="con">采光通风：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
                 <td class="td" ><span class="con">噪音废气：</span></td>
                <td class="tdtext1"><el-input v-model="form.mph"></el-input></td>
         </el-col>
       </td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">户型布局</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">装饰装修：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">设施设备：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">附加空间：</span></td>
       <td class="tdtext"> 
           <el-input v-model="form.mph"></el-input>
        </td>
        <td class="tde"><i class="el-icon-edit"></i></td>
    </tr>
  </table>
  
        </div>
    </el-tab-pane>
  
  </el-tabs>
  <div>
     <router-link :to="{ name:'addtask3' ,param: { rwbh: rwbh }}" >
    <el-button type="primary" @click="dialogFormVisible = true">下一步</el-button>
     </router-link>
     <el-button  @click="onSubmit">保存</el-button>
      <el-button  @click="onSubmit">取消</el-button>
  </div>
  
  <el-dialog title="估计方法选择" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="估计方法" >
      <el-select v-model="form.region" placeholder="请选择估计方法">
        <el-option label="市场发" value="scf"></el-option>
        <el-option label="收益法" value="syf"></el-option>
         <el-option label="成本法" value="cbf"></el-option>
         <el-option label="假设开发法" value="jskff"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
     <router-link :to="{ name:'addtask4' ,param: { rwbh: rwbh }}" >
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </router-link>
  </div>
</el-dialog>
</div>
</template>
<script>
  export default {
    data() {
      return {
        active: 'qwzk',
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
   .margin60 .inner{
   border: 0px solid #dcdfe6
  }
  .inner.el-input__inner{
    border: 0px solid #dcdfe6
   
    // background: blue;
    // border-color: tomato;
  }
 
</style>