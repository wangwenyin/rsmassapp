<template>
  <div class="margin10 ">
    <table class="table">
      <tr class="tr_title">
        <td class="td">
          <span class="normal">楼栋名称</span>
        </td>
        <td class="td">
          <span class="normal">房间号</span>
        </td>
        <td v-for="o in factors" :key="o.ysdm" v-if="o.used">
          <tr class="tr_title">
            <td class="td">
              <span class="normal">{{o.ysmc}}</span>
            </td>
            <td class="td">
              <span class="normal">{{o.ysmc}}修正</span>
            </td>
          </tr>
        </td>
        <td class="td">
          <span class="normal">综合系数</span>
        </td>
      </tr>
      <tr class="tr" v-for="i in appObjectList" :key="i">
              <td class="td">
                <span class="normal">{{i.ldmc}}</span>
              </td>
              <td class="td">
                <span class="normal">{{i.hh}}</span>
              </td>
            <td v-for="o in factors" :key="o.ysdm" v-if="o.used">
          <tr class="tr_title">
            <td class="td">
              <span class="normal">{{i.jzlx  }}</span>
            </td>
            <td class="td">
              <span class="normal">{{o.jgjc}}</span>
            </td>
          </tr>
        </td>
              <td class="td">
                 <span class="normal">{{i.hh}}</span>
              </td>
            </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    appObjectList: {
      type: Array,
      default: []
    },
    factors: {
      type: Array,
      default: []
    },
    datumType: {
      type: String,
      default: '楼栋'
    },
    datumId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentpage: 1,
      pagesize: 5,
      cxlx: 'xmmc',
      cxnr: '',
      houseList: [],
      bulidingList: [],
      alternativeList: []
    }
  },
  mounted() {
    this.SetAlternativeList()
  },

  methods: {
    SetAlternativeList() {
    }
  },
  watch: {
    appObjectList() {
      this.SetAlternativeList()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";
.el-table .success-row {
  background: #f0f9eb;
}
</style>