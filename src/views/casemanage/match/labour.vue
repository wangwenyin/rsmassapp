<template>
  <div class="app">
    <div class="labour-match-con content">
      <div class="match">
        <project-detail-list></project-detail-list>
      </div>
      <div class="match">
        <search-action></search-action>
        <search-result></search-result>
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectDetailList from '../components/LabourMatch/project-detail-list'
  import SearchAction from '../components/LabourMatch/search-action'
  import SearchResult from '../components/LabourMatch/search-result'

  export default {
    components: {
      ProjectDetailList,
      SearchAction,
      SearchResult
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .labour-match-con {
    padding: 10px;
    .match {
      padding: 5px;
      overflow: hidden;
    }
  }
</style>
