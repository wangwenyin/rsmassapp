<template>

 <el-rate :value="GetVal(value)" :texts="texts"  :disabled="disable" show-text></el-rate> 
</template>
<style>
 
  </style>
<script>
  export default {
    props: {
      value: {
        type: String,
        default: null
      },
      disable: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        val: 0,
        texts: ['差', '较差', '一般', '较好', '好']
      }
    },
    methods: {
      GetVal(v) {
        if (v === '差') {
          return 1
        } else if (v === '较差') {
          return 2
        } else if (v === '一般') {
          return 3
        } else if (v === '较好') {
          return 4
        } else if (v === '好') {
          return 5
        }
        return 0
      }
    }
  }
</script>
