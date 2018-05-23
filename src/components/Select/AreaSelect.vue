<template>
  <el-select v-model="value" placeholder="请选择区域">
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
          label: '福田区'
        }, {
          value: '选项2',
          label: '罗湖区'
        }, {
          value: '选项3',
          label: '南山区'
        }, {
          value: '选项4',
          label: '盐田区'
        }, {
          value: '选项5',
          label: '宝安区'
        }, {
          value: '选项6',
          label: '龙岗区'
        }, {
          value: '选项7',
          label: '龙华区'
        }, {
          value: '选项8',
          label: '坪山区'
        }],
        value: ''
      }
    }
  }
</script>
