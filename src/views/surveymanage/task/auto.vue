<template>
  <div>
    <div class="match">
      <match-action></match-action>
      <match-result></match-result>
    </div>
  </div>
</template>

<script>
import MatchAction from '@/components/SurveyMatch/match-action'
import MatchResult from '@/components/SurveyMatch/match-result'

export default {
  components: {
    MatchAction,
    MatchResult
  },
  data() {
    return {
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .match {
    margin: 10px;
    padding: 5px;
    border: 1px solid gray;
  }
</style>
