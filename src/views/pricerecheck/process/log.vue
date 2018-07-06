<template>
  <div class="log-container">
    <h3>操作日志</h3>
    <ul>
      <li v-for="(item, index) in 10" :key="index">
        <span>{{index+1}}. </span>
        <span>[2017-7-2 15:31]</span>
        <span>[记录查勘信息]复核人员[张冰冰]记录查勘信息完成。下一步操作人：[张冰冰]</span>
      </li>
    </ul>
  </div>
</template>

<script>
  
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .log-container {
    padding: 10px;
    h3 {
      margin-bottom: 15px;
    }
    ul {
      li {
        margin-top: 20px;
      }
    }
  }
</style>
