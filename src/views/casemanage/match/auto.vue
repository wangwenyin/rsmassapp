<template>
  <div>
    <div class="match">
      <match-action></match-action>
      <match-result></match-result>
    </div>
    <div class="match">
      <match-task></match-task>
   </div>
  </div>
</template>

<script>
import MatchAction from "@/components/AutoMatch/match-action";
import MatchResult from "@/components/AutoMatch/match-result";
import MatchTask from "@/components/AutoMatch/match-task";

export default {
  components: {
    MatchAction,
    MatchResult,
    MatchTask
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .match {
    margin: 10px;
    padding: 5px;
    border: 1px solid gray;
  }
</style>
