<template>
  <div>
    <div class="match">
      <project-detail-list></project-detail-list>
    </div>
    <div class="match">
      <search-action></search-action>
      <search-result></search-result>
    </div>
  </div>
</template>

<script>
  import ProjectDetailList from "@/components/LabourMatch/project-detail-list";
  import SearchAction from "@/components/LabourMatch/search-action";
  import SearchResult from "@/components/LabourMatch/search-result";
  
  export default {
    components: {
      ProjectDetailList,
      SearchAction,
      SearchResult
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .match {
    margin: 10px;
    padding: 5px;
    border: 1px solid gray;
    overflow: hidden;
  }
</style>
