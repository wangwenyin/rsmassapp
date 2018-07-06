<template>
<div class="margin60"  style="height:100%">
  <el-tabs v-model="active" type="card" @tab-click="handleClick">
    <el-tab-pane label="基本信息" name="jbxx">
        <div>
   <el-row> 
    <el-col :span="8">
        <span class="con">任务编号</span>
         <div class="val" v-text="form.rwbh"></div>
   </el-col>
    <el-col :span="8">
         <span class="con">负责人</span>
         <div class="val" v-text="form.fzr"></div>
   </el-col>
    <el-col :span="8">
         <span class="con">创建时间</span>
         <div class="val" v-text="form.cjsj"></div>
   </el-col>
    </el-row>
     <el-row> 
    <el-col :span="8">
        <span class="con">所属部门</span>
         <div class="val" v-text="form.ssbm"></div>
   </el-col>
    <el-col :span="8">
         <span class="con">参与人员</span>
         <div class="val" v-text="form.cyry"></div>
   </el-col>
    <el-col :span="8">
         <span class="con">预计完成时间</span>
         <div class="val" v-text="form.cjsj"></div>
   </el-col>
    </el-row>
         <el-row> 
    <el-col :span="8">
        <span class="con">物业名称</span>
         <div class="val" v-text="form.wymc"></div>
   </el-col>
    <el-col :span="8">
         <span class="con">物业地址</span>
         <div class="val" v-text="form.wydz"></div>
   </el-col>
    <el-col :span="8">
         <span class="con">估价方法</span>
         <div class="val" v-text="form.gjff"></div>
   </el-col>
    </el-row>
           <el-row> 
    <el-col :span="8">
        <span class="con">委托人</span>
         <div class="val" v-text="form.wtr"></div>
   </el-col>
    <el-col :span="8">
         <span class="con">估价机构</span>
         <div class="val" v-text="form.gjjg"></div>
   </el-col>
    <el-col :span="8">
         <span class="con">价值时点</span>
         <div class="val" v-text="form.jzsd"></div>
   </el-col>
    </el-row>
     <el-row> 
    <el-col :span="8">
        <span class="con">估价目的</span>
         <div class="val" v-text="form.gjmd"></div>
   </el-col>
    </el-row>
     <el-row> 
    <el-col :span="24">
        <span class="con">估价目的</span>
        <el-input
     type="textarea"
     :autosize="{ minRows: 4, maxRows: 10}"
     placeholder="请输入内容" disabled
      v-model="form.bz">
    </el-input>
   </el-col>
    </el-row>
     
   
  
        </div>
    </el-tab-pane>
    <el-tab-pane label="现场查勘" name="xcck">
              <div>
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
        </div>
    </el-tab-pane>
    <el-tab-pane label="价格评估" name="pgjg">
       <div>
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
        </div>
    </el-tab-pane>
     <el-tab-pane label="估价报告" name="gjbg">
       <div>
           
        </div>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
  export default {
    data() {
      return {
        active: 'jbxx',
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
   .margin60 .tdtext1{
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0.2px solid #c0c4cc;
     width: 90%;
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