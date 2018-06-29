<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      type="datetimerange"
      size="medium"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        value: []
      }
    },
    created() {
      const now = new Date()
  
      const startDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes())
      const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes())
  
      this.value.push(startDate)
      this.value.push(endDate)
    }
  }
</script>
