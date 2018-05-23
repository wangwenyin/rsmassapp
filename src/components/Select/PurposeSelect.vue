<template>
  <el-select v-model="value" placeholder="请选择用途">
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
    data() {
      return {
        options: [{
          value: '选项1',
          label: '住宅'
        }, {
          value: '选项2',
          label: '商业'
        }, {
          value: '选项3',
          label: '办公'
        }, {
          value: '选项4',
          label: '工业'
        }, {
          value: '选项5',
          label: '其他'
        }],
        value: ''
      }
    }
  }
</script>
