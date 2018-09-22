<template>
<div style="margin-left: -3px;">
  <el-tag v-for="t in tagslist" :key="t" v-if="t!==''" :size="size" :type="setType(t)">
       {{t}}
  </el-tag> 
</div> 
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
        default: null
      },
      size:
      {
        type: String,
        default: 'mini'
      }
    },
    data() {
      return {
        tagslist: null
      }
    },
    mounted() {
      this.converData()
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
      },
      converData() {
        this.tagslist = this.tags.split(';')
      }
    }
  }
</script>
