<template>
  <div class="block">
    <el-date-picker
      v-model="value"
      @change="datePickChange"
      value-format="yyyy-MM-dd"
      type="daterange"
      size="small"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>
</template>

<script>
  import { parseTime } from '@/utils/index'

  export default {
    props: {
      noDefaultValue: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        pickerOptions: null,
        value: []
      }
    },
    created() {
      // 是否需要默认值和侧边快捷键
      if (!this.noDefaultValue) {
        const now = new Date()
        const startDate = new Date(now.getFullYear(), now.getMonth() - 8, now.getDate())
        const format = '{y}-{m}-{d}'
        this.value.push(parseTime(startDate, format))
        this.value.push(parseTime(now, format))

        this.pickerOptions = {
          shortcuts: [{
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
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 92)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 184)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一年',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
              picker.$emit('pick', [start, end])
            }
          }]
        }
      }
    },
    methods: {
      // 派发dateChange
      datePickChange(value) {
        this.$emit('dateChange', value)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>

