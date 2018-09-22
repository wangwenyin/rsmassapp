<template>
 <el-rate :value="value/20"  :disabled="disable" ></el-rate> 
</template>
<script>
  export default {
    props: {
      value: {
        type: Number,
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
    }
  }
</script>
