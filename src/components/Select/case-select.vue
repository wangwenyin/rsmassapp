<template>
  <el-select v-model="value" :placeholder="placeholder" clearable :size="size">
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
      options: {
        type: Array,
        default: []
      },
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      }
    }
  }
</script>