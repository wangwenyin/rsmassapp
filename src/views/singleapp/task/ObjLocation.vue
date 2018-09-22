<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="title">估价对象区位状况描述与分析</div>
      </el-col>
    </el-row>
    <table class="table">
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">坐落:</span>
        </td>
        <td class="td" colspan="5">
          <el-select class="noborder" size="small" v-model="form.district">
            <el-option label="福田区"></el-option>
            <el-option label="罗湖区"></el-option>
            <el-option label="南山区"></el-option>
            <el-option label="盐田区"></el-option>
            <el-option label="宝安区"></el-option>
            <el-option label="龙岗区"></el-option>
            <el-option label="龙华区"></el-option>
            <el-option label="坪山区"></el-option>
          </el-select>
        </td>
        <td class="td" colspan="15">
          <el-input class="noborder" size="small" v-model="form.address"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" rowspan="2" colspan="3">
          <span class="normal">四至及临路:</span>
        </td>
        <td class="td" colspan="5">
          <span class="normal noborder">东</span>
        </td>
        <td class="td" colspan="5">
          <el-input class="noborder" size="small" v-model="form.east_to"></el-input>
        </td>
        <td class="td" colspan="5">
          <span class="normal">南</span>
        </td>
        <td class="td" colspan="5">
          <el-input class="noborder" size="small" v-model="form.south_to"></el-input>
        </td>
        <td class="td" colspan="3"></td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="5">
          <span class="normal">西</span>
        </td>
        <td class="td" colspan="5">
          <el-input class="noborder" size="small" v-model="form.west_to"></el-input>
        </td>
        <td class="td" colspan="5">
          <span class="normal">北</span>
        </td>
        <td class="td" colspan="5">
          <el-input class="noborder" size="small" v-model="form.north_to"></el-input>
        </td>
        <td class="td" colspan="3"></td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">方位：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder inner" size="small" v-model="form.direction"></el-input>
        </td>
        <td class="td" colspan="3">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">区域中心距离：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.to_center"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">规划合理程度：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.region_plan"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">区域繁华程度</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.region_busy"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">道路通达程度：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.road_far"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">地铁便捷程度：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.metro_easy"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">公交便捷程度：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.bus_easy"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">交通管制：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.traffic_control"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">停车便捷程度：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.parking_easy"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">环境质量：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.envir_good"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">周边景观：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.landscape"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">教育设施完备度：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.educ_facility"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">学区学位：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.school_district"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">基础设施完备度：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.basic_facility"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">生活设施完备度：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.live_facility"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
      <tr class="tr">
        <td class="td" colspan="3">
          <span class="normal">其他情况说明：</span>
        </td>
        <td class="td" colspan="20">
          <el-input class="noborder" size="small" v-model="form.loca_other"></el-input>
        </td>
        <td class="td">
          <i class="el-icon-edit"></i>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    form: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";
.el-icon-edit {
  margin-left: 10px;
}
.el-select--small {
  width: 100%;
}
</style>