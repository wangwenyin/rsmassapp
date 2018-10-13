<template>
  <div class="app">
    <div class="content">
      <price-rent 
        :name="name"
        :priceType="priceType"
        :dateRange="dateRange"
        :proData="proData"
        @changeDate="handleChangeDate">
      </price-rent>
    </div>
  </div>
</template>

<script>
  import PriceRent from '../components/PriceRent'
  import { parseTime } from '@/utils/index'

  export default {
    components: { PriceRent },
    data() {
      return {
        proData: null,
        name: '',
        priceType: '',
        dateRange: []
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
    },
    methods: {
      handleChangeDate(tag) {
        let startDate = this.proData.params.qssj
        let endDate = this.proData.params.zzsj
        const now = parseTime(new Date(), '{y}-{m}-{d}')
        if (tag) {
          if (endDate !== now) {
            startDate = this.changeMonth(startDate)
            endDate = this.changeMonth(endDate)
          } else {
            return
          }
        } else {
          startDate = this.changeMonth(startDate, -6)
          endDate = this.changeMonth(endDate, -6)
        }
        this.proData.params.qssj = startDate
        this.proData.params.zzsj = endDate
        this.dateRange = [startDate, endDate]
      },
      changeMonth(date, num = 6) {
        let temp = null
        if (typeof date === 'string') {
          temp = new Date(date)
        } else {
          temp = date
        }
        temp.setMonth(temp.getMonth() + num)
        return parseTime(temp, '{y}-{m}-{d}')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  
</style>
