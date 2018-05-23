<template>
  <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
</template>

<script>
  export default {
    data() {
      return {
        total:100
      }
    }
  }
</script>
