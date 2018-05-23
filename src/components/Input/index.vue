<template>
  <el-input
    :placeholder="placeholder"
    :size="size"
    v-model="value"
    clearable>
</el-input>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'medium'
      }
    },
    data() {
      return {
        value: ''
      }
    }
  }
</script>
