<template>
  <div>
    <el-table v-if="data"
      :data="data"
      border
      stripe
      style="width: 100%"
      id="el-table">
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
       <el-table-column label="操作"  fixed="right" v-if="selectable===true" min-width="60px">
        <template slot-scope="scope">
         <el-button type="text" size="small" @click.stop="add(scope.row)">添加</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
      size="medium"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[pageSize, 10, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>
<script>
  import { getProjects, getCases } from '@/api/caseSearch'
  export default {
    props: {
      params: {
        type: Object,
        default: null
      },
      selectable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        tableData: [],
        tableData1: [],
        currentPage: 1,
        pageSize: 8
      }
    },
    created() {
      this.selectable ? this.pageSize = 7 : this.pageSize = 8
      this.getCases1()
    },
    computed: {
      data() {
        // 分页也就是截取一页的数据
        return this.tableData1.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      }
    },
    methods: {
      add(val) {
        this.$emit('add', val)
      },
      handleSizeChange(size) {
        this.pageSize = size
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
      },
      getCases1() {
        getProjects(this.params).then(res => {
          this.tableData = res.data
          this.tableData.forEach(item => {
            const para = {
              allx: this.params.allx,
              yt: this.params.yt,
              xmdm: item.xmdm,
              qssj: this.params.qssj,
              zzsj: this.params.zzsj
            }
            getCases(para).then(response => {
              response.data.forEach(element => {
                this.tableData1.push(element)
              })
            })
          })
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-pagination {
    margin-top: 10px;
    text-align: center;
  }
</style>

