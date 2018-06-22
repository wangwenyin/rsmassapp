<template>
  <el-select v-model="value"  placeholder="行政区"   >
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
      value: {
        type: String,
        default: ''
      }
    },
    watch: {
      value(val) {
        this.$emit('update', val)
      }
    },
    data() {
      return {
        value: '',
        options: [{
          value: '福田区',
          label: '福田区'
        }, {
          value: '罗湖区',
          label: '罗湖区'
        }, {
          value: '南山区',
          label: '南山区'
        }, {
          value: '盐田区',
          label: '盐田区'
        }, {
          value: '宝安区',
          label: '宝安区'
        }, {
          value: '龙岗区',
          label: '龙岗区'
        }, {
          value: '龙华区',
          label: '龙华区'
        }, {
          value: '坪山区',
          label: '坪山区'
        }]
      }
    }
  }
</script>
