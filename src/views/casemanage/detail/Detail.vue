<template>
  <div class="app">
    <div class="content">
      <price-rent 
        v-if="tableData && basePriceData" 
        :name="name"
        :priceType="priceType"
        :dateRange="dateRange"
        :proData="proData"
        :tableData="tableData" 
        :basePriceData="basePriceData"
        @getCase="handleGetCase">
      </price-rent>
    </div>
  </div>
</template>

<script>
  import { getCases, getBasePrice } from '@/api/caseSearch'
  import PriceRent from '../components/PriceRent'

  export default {
    components: { PriceRent },
    data() {
      return {
        proData: null,
        name: '',
        priceType: '',
        dateRange: [],
        tableData: null,
        basePriceData: null
      }
    },
    created() {
      // 价格租金组件所需参数
      this.proData = JSON.parse(localStorage.getItem('proData'))
      // 项目名称
      this.name = this.proData.xmmc
      // 价格类型
      this.priceType = this.proData.typeValue
      // 日期范围
      this.dateRange = [this.proData.params.qssj, this.proData.params.zzsj]
      // 散点图数据(案例数据)
      this.getCaseDetailList(this.proData.params)
      // 折线图数据(项目评估价数据)
      this.getBasePrice(this.proData.params.xmdm)
    },
    methods: {
      handleGetCase(value) {
        this.proData.params.allx = value.join(',')
        this.getCaseDetailList(this.proData.params)
      },
      // 获取案例数据
      getCaseDetailList(params) {
        getCases(params).then(res => {
          console.log(res.data)
          this.tableData = res.data
        })
      },
      getBasePrice(xmdm) {
        getBasePrice({ xmdm: xmdm }).then(res => {
          console.log(res.data)
          this.basePriceData = res.data
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  
</style>
