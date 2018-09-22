<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="title">估价对象权益状况描述与分析</div>
            </el-col>
        </el-row>
        <table class="table">
            <tr class="tr_title">
                <td class="td" colspan="24">
                    <span class="title-small">土地实物状况 </span>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">宗地号：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.parcel_no"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">土地面积：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.land_area"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">土地证号：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.land_cert"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">登记价格：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.land_price"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">土地形状：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.land_shape"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">地形地势：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.land_terrain"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">土地开发程度：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.develop_degree"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">容积率：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.plot_ratio"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr_title">
                <td class="td" colspan="24">
                    <span class="title-small">建筑物实物状况 </span>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">建筑规模：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.bldg_area"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">总楼层：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.bldg_floor"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">建筑外观：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.bldg_appear"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">建筑结构：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.bldg_struc"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">建筑年代：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.bldg_age"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">空间布局：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.bldg_layout"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">配套设施：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.bldg_facility"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">物业管理：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.prop_mang"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">内部环境：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.bldg_envir"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr_title">
                <td class="td" colspan="24">
                    <span class="title-small">房产实物状况 </span>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">房屋名称：</span>
                </td>
                <td class="td" colspan="9">
                    <el-input class="noborder" size="small" v-model="form.prop_name"></el-input>
                </td>
                <td class="td" colspan="3">
                    <span class="normal">使用状况：</span>
                </td>
                <td class="td" colspan="8">
                    <el-select class="noborder" size="small" v-model="form.use_status">
                        <el-option label="自用"></el-option>
                        <el-option label="空置"></el-option>
                        <el-option label="出租"></el-option>
                    </el-select>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">所在层：</span>
                </td>
                <td class="td" colspan="9">
                    <el-input class="noborder" size="small" v-model="form.hous_floor"></el-input>
                </td>
                <td class="td" colspan="3">
                    <span class="normal">建筑面积：</span>
                </td>
                <td class="td" colspan="8">
                    <el-input class="noborder" size="small" v-model="form.built_area"></el-input>
                </td>
                 <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">朝向：</span>
                </td>
                <td class="td" colspan="9">
                    <el-input class="noborder" size="small" v-model="form.hous_face"></el-input>
                </td>
                <td class="td" colspan="3">
                    <span class="normal">所看景观：</span>
                </td>
                <td class="td" colspan="8">
                    <el-input class="noborder" size="small" v-model="form.hous_view"></el-input>
                </td>
                 <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">采光通风：</span>
                </td>
                <td class="td" colspan="9">
                    <el-input class="noborder" size="small" v-model="form.day_lighting"></el-input>
                </td>
                <td class="td" colspan="3">
                    <span class="normal">噪音废气：</span>
                </td>
                <td class="td" colspan="8">
                    <el-input class="noborder" size="small" v-model="form.hous_noise"></el-input>
                </td>
                 <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">户型布局</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.dwelling_size"></el-input>
                </td>
                <td class="td">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td" colspan="3">
                    <span class="normal">装饰装修：</span>
                </td>
                <td class="td" colspan="20">
                    <el-input class="noborder" size="small" v-model="form.hous_decor"></el-input>
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
    return {
      form: {}
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";
</style>