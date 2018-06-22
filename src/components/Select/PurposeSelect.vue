<template>
  <el-select v-model="value" placeholder="用途">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    watch: {
      value(val) {
        this.$emit('update', val)
      }
    },
    data() {
      return {
        options: [{
          value: '住宅',
          label: '住宅'
        }, {
          value: '商业',
          label: '商业'
        }, {
          value: '办公',
          label: '办公'
        }, {
          value: '工业',
          label: '工业'
        }, {
          value: '其他',
          label: '其他'
        }],
        value: ''
      }
    }
  }
</script>
