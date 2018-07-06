<template>
<div class="margin60"  style="height:100%">
 
  <table class="table" >
       <tr class="tr" style="background:#c0c4cc">
           <td class="td"><span class="con">因素名称:</span></td>
             <el-col  :span="24/list.length" v-for="o in list.length"  :key="o"  >
                <td class="td">
                  <span class="con" v-if="o===1">评估对象</span>
                  <span class="con" v-if="o!==1">可比实例{{o-1}}</span>
               </td>
             </el-col>
          <td class="tde"></td>
        </tr>
    <tr class="tr">
      <td class="td"><span class="con">物业名称:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  >
             <td class="td">
               <div class="txt" v-text="o.wymc"></div>
             </td>
       </el-col>
    
        <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
    <tr class="tr">
      <td class="td"><span class="con">坐落:</span></td>
      
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
               <div class="txt" v-text="o.zl"></div>
               </td>
       </el-col>
     
        <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr" style="background:#66b1ff26">
      <td class="td"><span class="con">交易状况</span></td>
          <td class="tdtext">
           <el-button type="text">说明表</el-button>
           <el-button type="text">指数表</el-button>
           </td>
        <td class="tde"> <el-button type="text">添加</el-button></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">交易单价:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.jydj"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">付款方式:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.fkfs"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">交易时间:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.jysj"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">交易情况:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.jyqk"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
         <tr class="tr" style="background:#66b1ff26">
      <td class="td"><span class="con">区位状况</span></td>
          <td class="tdtext">
           <el-button type="text">说明表</el-button>
           <el-button type="text">指数表</el-button>
           </td>
        <td class="tde"> <el-button type="text">添加</el-button></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">区域中心距离:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.qyzxjl"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">规划合理程度:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.ghhlcd"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">地铁便捷程度:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.dtbjcd"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">公交便捷程度:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.gjbjcd"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">环境质量:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.hjzl"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">基础设施完备度:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.jcsswbd"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">生活设施完备度:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.shsswbd"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
            <tr class="tr" style="background:#66b1ff26">
      <td class="td"><span class="con">权益状况</span></td>
          <td class="tdtext">
           <el-button type="text">说明表</el-button>
           <el-button type="text">指数表</el-button>
           </td>
        <td class="tde"> <el-button type="text">添加</el-button></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">物业用途:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.wyyt"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">物业性质:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.wyxz"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">土地使用年限:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.tdsynx"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
             <tr class="tr" style="background:#66b1ff26">
      <td class="td"><span class="con">实物状况</span></td>
          <td class="tdtext">
           <el-button type="text">说明表</el-button>
           <el-button type="text">指数表</el-button>
           </td>
        <td class="tde"> <el-button type="text">添加</el-button></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">物业管理水平:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.wyglsp"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">内部环境质量:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.nbhjzl"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">竣工日期:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.jgrq"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">所在层:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.szc"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">朝向:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.cx"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">景观:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.jg"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
       <tr class="tr">
      <td class="td"><span class="con">户型布局:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.hxbj"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">装修装饰:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.zxzs"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
            <tr class="tr" style="background:#66b1ff26">
      <td class="td"><span class="con">比准价格</span></td>
          <td class="tdtext">
           <el-button type="text">说明表</el-button>
           <el-button type="text">指数表</el-button>
           </td>
        <td class="tde"> <el-button type="text">添加</el-button></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">交易状况调整:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.jyzktz"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">区位状况调整:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.qwzktz"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">权益状况调整:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.qyzktz"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">实物状况调整:</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.swzktz"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
      <tr class="tr">
      <td class="td"><span class="con">比准价格（元/m²）</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.bzjg"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
     <tr class="tr">
      <td class="td"><span class="con">评估价格（元/m²）</span></td>
       <el-col  :span="24/list.length" v-for="o in list"  :key="o"  class="col">
          <td class="td">
             <div class="txt" v-text="o.pgjg"></div>
          </td>
       </el-col>
      <td class="tde"><i class="el-icon-delete"></i></td>
    </tr>
  </table>
  <router-link :to="{ name:'addtask4' ,param: { rwbh: rwbh }}" >
    <el-button type="primary" @click="onSubmit">上一步</el-button>
     </router-link>
   <router-link :to="{ name:'report' ,param: { rwbh: rwbh }}" >
    <el-button type="primary" @click="onSubmit">下一步</el-button>
     </router-link>
     <el-button  @click="onSubmit">保存</el-button>
      <el-button  @click="onSubmit">取消</el-button>
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
        dialogFormVisible: false,
        list: [
          {
            wymc: '君悦阁502',
            zl: '福田区燕南路'
          },
          {
            wymc: '君悦阁1706',
            zl: '福田区燕南路'
          },
          {
            wymc: '航天立业华庭-22A',
            zl: '福田区振华路'
          },
          {
            wymc: '桑达雅苑-17C',
            zl: '福田区华发北路'
          }
        ]
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
    align-content: center;
     border-collapse: collapse;
  }
  .txt{
    display: inline-block;
    margin-top: 3px;
     margin-bottom: 3px;
     width: 130px;
     margin-left:3px;
     color:#7b7676;
     text-align: center;
     font-size: 15px;
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
  .margin60 .el-input__inner{
    border-radius: 0%
  }
  
 
</style>