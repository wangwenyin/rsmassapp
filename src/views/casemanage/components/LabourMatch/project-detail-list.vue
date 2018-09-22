<template>
  <div>
    <span>待匹配案例列表：</span>
    <el-select v-model="value" placeholder="请选择案列类型" clearable size="medium">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <match-result></match-result>
  </div>
</template>

<script>
  import MatchResult from '../AutoMatch/match-result'

  export default {
    components: {
      MatchResult
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '买卖'
        }, {
          value: '选项2',
          label: '租赁'
        }, {
          value: '选项3',
          label: '挂牌'
        }, {
          value: '选项4',
          label: '估价'
        }, {
          value: '选项5',
          label: '询价'
        }],
        value: ''
      }
    }
  }
</script>
