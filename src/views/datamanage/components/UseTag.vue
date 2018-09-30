<template>
<span style="margin-left: -3px;">
     <el-tag v-for="t in this.tags.split(';')" :key="t" v-if="t!==''"  :size="size"  :type="setType(t)"> 
       {{t}}
  </el-tag> 
</span> 
</template>
<style>
 .el-tag--mini
  {
    padding:0 4.8px;
    margin-left: 3px
  }
  </style>
<script>
  export default {
    props: {
      tags: {
        type: String,
        default: ''
      },
      size:
      {
        type: String,
        default: 'mini'
      }
    },
    data() {
      return {
  
      }
    },
    methods: {
      setType(t) {
        if (t === '其他') {
          return 'danger'
        } else if (t === '商业') {
          return 'success'
        } else if (t === '办公') {
          return 'info'
        } else if (t === '工业') {
          return 'warning'
        }
        return null
      }
    }
  }
</script>
