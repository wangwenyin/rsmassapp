<template>
  <div class="app">
    <div class="log-container content">
      <h3>操作日志</h3>
      <ul>
        <li v-for="(item, index) in 10" :key="index">
          <span>{{index+1}}. </span>
          <span>[2017-7-2 15:31]</span>
          <span>[记录查勘信息]复核人员[张冰冰]记录查勘信息完成。下一步操作人：[张冰冰]</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getLogs } from '@/api/pricereassess'

  export default {
    created() {
      this.getLogs()
    },
    methods: {
      getLogs() {
        const curTask = JSON.parse(localStorage.getItem('curTask'))
        console.log(curTask.id)
        const params = {
          id: curTask.id
        }
        // 没数据，无法做数据处理
        getLogs(params).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .log-container {
    padding: 10px;
    h3 {
        margin-bottom: 30px;
        color: #585858;
      }
    ul {
      li {
        margin-top: 20px;
        letter-spacing: 3px;
        color: #606266;
      }
    }
  }
</style>
