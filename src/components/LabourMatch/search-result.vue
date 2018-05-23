<template>
  <div class="searchResult">
    <el-table
      :data="tableData"
      border
      ref="table"
      style="width: 33%">
      <el-table-column
        prop="number"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="region"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="street"
        label="街道">
      </el-table-column>
      <el-table-column
        prop="parcel"
        label="宗地号">
      </el-table-column>
      <el-table-column
        prop="time"
        label="建筑年代">
      </el-table-column>
    </el-table>
    <el-table
      class="middleTable"
      :data="tableData"
      border
      ref="table"
      style="width: 33%">
      <el-table-column
        prop="number"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="building"
        label="楼栋名称">
      </el-table-column>
      <el-table-column
        prop="otherName"
        label="别名">
      </el-table-column>
      <el-table-column
        prop="totalFloors"
        label="总层数">
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      border
      ref="table"
      style="width: 33%">
      <el-table-column
        prop="number"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="house"
        label="户名称">
      </el-table-column>
      <el-table-column
        prop="region"
        label="所在地">
      </el-table-column>
      <el-table-column
        prop="area"
        label="建筑面积">
      </el-table-column>
      <el-table-column
        prop="houseType"
        label="户型">
      </el-table-column>
    </el-table>
    <div class="matchBtn">
      <el-button type="primary" size="medium">保存匹配</el-button>
      <el-button type="primary" size="medium">提交匹配</el-button>
    </div>
    <div class="matchResult">已提交{{commitNum}}条匹配结果, 已保存{{saveNum}}条匹配结果, 还有{{remainNum}}条未匹配案例。</div>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        tableData: [{},{},{},{},{},{}],
        commitNum: 56,
        saveNum: 78,
        remainNum: 342
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .searchResult {
    width: 100%;
    .el-table {
      float: left;
      margin: 15px 0;
      border: 1px solid gray;
      &.middleTable {
        margin-left: 5px;
        margin-right: 5px;
      }
      .el-table__header, .el-table__body {
        width: 100% !important;
      }
    }
    .matchBtn {
      width: 100%;
      margin-top: 15px;
      overflow: hidden;
      .el-button {
        &:first-child {
          float: left;
        }
        &:last-child {
          float: right;
        }
      }
    }
    .matchResult {
      margin-top: 80px;
      font-size: 13px;
    }
  }
</style>
