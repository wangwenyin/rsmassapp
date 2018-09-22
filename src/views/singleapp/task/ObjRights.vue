<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="title">估价对象权益状况描述与分析</div>
            </el-col>
        </el-row>
        <table class="table">
            <tr class="tr_title">
                <td colspan="4" class="td">
                    <span class="title-small">土地权益状况 </span>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">土地用途：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.land_usage"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">土地性质：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.land_attr"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">土地所有权：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.land_ownership"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">土地使用权：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.land_useright"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">他项权：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.other_right"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">土地取得时间：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder inner" size="small" v-model="form.start_date"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">土地使用年限：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder inner" size="small" v-model="form.land_term"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">其他特殊情况：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder inner" size="small" v-model="form.land_other"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr_title">
                <td colspan="4" class="td">
                    <span class="title-small">建筑物及房屋权益状况 </span>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">房屋所有权：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.hous_owership"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">房屋用途：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.hous_usage"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">房屋性质：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.hous_attr"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">他项权利：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.hous_otherright"></el-input>
                </td>
                <td class="td_e">
                    <i class="el-icon-edit"></i>
                </td>
            </tr>
            <tr class="tr">
                <td class="td">
                    <span class="normal">其他特殊情况：</span>
                </td>
                <td class="td_text_9">
                    <el-input class="noborder" size="small" v-model="form.hous_other"></el-input>
                </td>
                <td class="td_e">
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
.noborder .el-input__inner {
  border: 0px solid #b2b2b2;
}
</style>