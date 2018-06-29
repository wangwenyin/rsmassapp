<template>
  <div>
    <el-table
      :data="data"
      border
      stripe
      style="width: 100%"
      id="el-table"
    >
      <el-table-column
        prop="id"
        label="序号"
        width="50"
      >
      </el-table-column>
      <el-table-column
        prop="xmmc"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="ldmc"
        label="楼栋名称">
      </el-table-column>
      <el-table-column
        prop="hh"
        label="户号">
      </el-table-column>
      <el-table-column
        prop="lc"
        label="楼层">
      </el-table-column>
      <el-table-column
        prop="sj"
        label="交易时间">
      </el-table-column>
      <el-table-column
        prop="xzq"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="jzmj"
        label="建筑面积">
      </el-table-column>
      <el-table-column
        prop="hx"
        label="户型">
      </el-table-column>
      <el-table-column
        prop="dj"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="zj"
        label="总价">
      </el-table-column>
      <el-table-column
        prop="yt"
        label="用途">
      </el-table-column>
      <el-table-column
        prop="ally"
        label="案例来源">
      </el-table-column>
    </el-table>
    <el-pagination
      size="medium"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[8, 10, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    props: {
      tableData: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentPage: 1,
        pageSize: 8,
      }
    },
    computed: {
      data() {
        // 分页也就是截取一页的数据
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
    },
    methods: {
      handleSizeChange (size) {
        this.pageSize = size
      },
      handleCurrentChange (currentPage){
        this.currentPage = currentPage
      }
      // getSearchList(list) {
      //   this.tableData = list
      // }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-pagination {
    margin-top: 10px;
    text-align: center;
  }
</style>
