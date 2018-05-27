<template>
  <el-select v-model="value" :placeholder="placeholder" clearable :size="size">
    <el-option
      v-for="item in options"
      :key="item"
      :value="item">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        default: []
      },
      placeholder: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'medium'
      },
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>
